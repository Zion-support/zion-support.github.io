import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
export const useVirtualScroll = (items, options) => {
    const { itemHeight, overscan = 5, containerHeight = 400, enableSmoothScrolling = true, enableInfiniteScroll = false, threshold = 100 } = options;
    const containerRef = useRef(null);
    const scrollTimeoutRef = useRef(null);
    const rafRef = useRef(null);
    const [state, setState] = useState({
        startIndex: 0,
        endIndex: 0,
        visibleItems: [],
        scrollTop: 0,
        containerHeight,
        totalHeight: items.length * itemHeight,
        isScrolling: false
    });
    // Calculate virtual scroll parameters
    const virtualScrollParams = useMemo(() => {
        const visibleCount = Math.ceil(containerHeight / itemHeight);
        const startIndex = Math.max(0, Math.floor(state.scrollTop / itemHeight) - overscan);
        const endIndex = Math.min(items.length - 1, Math.floor(state.scrollTop / containerHeight) + visibleCount + overscan);
        return {
            startIndex,
            endIndex,
            visibleCount,
            offsetY: startIndex * itemHeight
        };
    }, [state.scrollTop, containerHeight, itemHeight, overscan, items.length]);
    // Update virtual items when parameters change
    useEffect(() => {
        const { startIndex, endIndex } = virtualScrollParams;
        setState(prev => ({
            ...prev,
            startIndex,
            endIndex,
            visibleItems: items.slice(startIndex, endIndex + 1),
            totalHeight: items.length * itemHeight
        }));
    }, [virtualScrollParams, items, itemHeight]);
    // Handle scroll events
    const handleScroll = useCallback((event) => {
        const target = event.target;
        const scrollTop = target.scrollTop;
        // Cancel previous RAF
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
        }
        // Use RAF for smooth scrolling
        rafRef.current = requestAnimationFrame(() => {
            setState(prev => ({
                ...prev,
                scrollTop,
                isScrolling: true
            }));
            // Clear scrolling state after delay
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
            scrollTimeoutRef.current = setTimeout(() => {
                setState(prev => ({ ...prev, isScrolling: false }));
            }, 150);
        });
    }, []);
    // Scroll to specific index
    const scrollToIndex = useCallback((index, align = 'start') => {
        if (!containerRef.current || index < 0 || index >= items.length)
            return;
        let scrollTop;
        switch (align) {
            case 'start':
                scrollTop = index * itemHeight;
                break;
            case 'center':
                scrollTop = (index * itemHeight) - (containerHeight / 2) + (itemHeight / 2);
                break;
            case 'end':
                scrollTop = (index * itemHeight) - containerHeight + itemHeight;
                break;
            default:
                scrollTop = index * itemHeight;
        }
        scrollTop = Math.max(0, Math.min(scrollTop, state.totalHeight - containerHeight));
        if (enableSmoothScrolling) {
            containerRef.current.scrollTo({
                top: scrollTop,
                behavior: 'smooth'
            });
        }
        else {
            containerRef.current.scrollTop = scrollTop;
        }
        setState(prev => ({ ...prev, scrollTop }));
    }, [itemHeight, containerHeight, items.length, state.totalHeight, enableSmoothScrolling]);
    // Scroll to top
    const scrollToTop = useCallback(() => {
        scrollToIndex(0, 'start');
    }, [scrollToIndex]);
    // Scroll to bottom
    const scrollToBottom = useCallback(() => {
        scrollToIndex(items.length - 1, 'end');
    }, [scrollToIndex, items.length]);
    // Get current scroll position
    const getScrollTop = useCallback(() => {
        return containerRef.current?.scrollTop || 0;
    }, []);
    // Get visible range
    const getVisibleRange = useCallback(() => {
        return {
            start: state.startIndex,
            end: state.endIndex
        };
    }, [state.startIndex, state.endIndex]);
    // Check if item is visible
    const isItemVisible = useCallback((index) => {
        return index >= state.startIndex && index <= state.endIndex;
    }, [state.startIndex, state.endIndex]);
    // Infinite scroll detection
    useEffect(() => {
        if (!enableInfiniteScroll || !containerRef.current)
            return;
        const handleScrollEnd = () => {
            const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
            if (scrollHeight - scrollTop - clientHeight < threshold) {
                // Trigger infinite scroll event
                const event = new CustomEvent('virtualScrollEnd', {
                    detail: { scrollTop, scrollHeight, clientHeight }
                });
                window.dispatchEvent(event);
            }
        };
        const container = containerRef.current;
        container.addEventListener('scroll', handleScrollEnd);
        return () => {
            container.removeEventListener('scroll', handleScrollEnd);
        };
    }, [enableInfiniteScroll, threshold]);
    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);
    // Container props
    const containerProps = {
        ref: containerRef,
        style: {
            height: containerHeight,
            overflow: 'auto',
            position: 'relative',
            willChange: state.isScrolling ? 'scroll-position' : 'auto'
        },
        onScroll: handleScroll
    };
    // List props
    const listProps = {
        style: {
            height: state.totalHeight,
            position: 'relative',
            transform: `translateY(${virtualScrollParams.offsetY}px)`
        }
    };
    return {
        virtualItems: state.visibleItems,
        containerProps,
        listProps,
        scrollToIndex,
        scrollToTop,
        scrollToBottom,
        getScrollTop,
        getVisibleRange,
        isItemVisible,
        state
    };
};
// Enhanced virtual scroll with search and filtering
export const useVirtualScrollWithSearch = (items, searchQuery, searchFields, options) => {
    const [filteredItems, setFilteredItems] = useState(items);
    const [searchResults, setSearchResults] = useState({ indices: [], highlights: new Map() });
    // Filter items based on search query
    useEffect(() => {
        if (!searchQuery.trim()) {
            setFilteredItems(items);
            setSearchResults({ indices: [], highlights: new Map() });
            return;
        }
        const query = searchQuery.toLowerCase();
        const results = [];
        const indices = [];
        const highlights = new Map();
        items.forEach((item, index) => {
            let isMatch = false;
            const itemHighlights = [];
            searchFields.forEach(field => {
                const value = String(item[field]).toLowerCase();
                if (value.includes(query)) {
                    isMatch = true;
                    // Find highlight positions
                    const highlightPositions = [];
                    let pos = value.indexOf(query);
                    while (pos !== -1) {
                        highlightPositions(pos);
                        pos = value.indexOf(query, pos + 1);
                    }
                    itemHighlights(...highlightPositions.map(p => `${String(field)}:${p}`));
                }
            });
            if (isMatch) {
                results(item);
                indices(index);
                highlights.set(index, itemHighlights);
            }
        });
        setFilteredItems(results);
        setSearchResults({ indices, highlights });
    }, [items, searchQuery, searchFields]);
    // Use virtual scroll with filtered items
    const virtualScroll = useVirtualScroll(filteredItems, options);
    return {
        ...virtualScroll,
        filteredItems,
        searchResults,
        originalItems: items
    };
};
// Virtual scroll with dynamic item heights
export const useDynamicVirtualScroll = (items, getItemHeight, options) => {
    const [itemHeights, setItemHeights] = useState(new Map());
    const [totalHeight, setTotalHeight] = useState(0);
    // Calculate item heights
    useEffect(() => {
        const heights = new Map();
        let total = 0;
        items.forEach((item, index) => {
            const height = getItemHeight(item, index);
            heights.set(index, height);
            total += height;
        });
        setItemHeights(heights);
        setTotalHeight(total);
    }, [items, getItemHeight]);
    // Get cumulative height up to index
    const getCumulativeHeight = useCallback((index) => {
        let cumulative = 0;
        for (let i = 0; i < index; i++) {
            cumulative += itemHeights.get(i) || 0;
        }
        return cumulative;
    }, [itemHeights]);
    // Find index from scroll position
    const findIndexFromScrollTop = useCallback((scrollTop) => {
        let cumulative = 0;
        for (let i = 0; i < items.length; i++) {
            const height = itemHeights.get(i) || 0;
            if (cumulative + height > scrollTop) {
                return i;
            }
            cumulative += height;
        }
        return items.length - 1;
    }, [items.length, itemHeights]);
    // Enhanced virtual scroll state
    const [state, setState] = useState({
        startIndex: 0,
        endIndex: 0,
        visibleItems: [],
        scrollTop: 0,
        containerHeight: options.containerHeight || 400,
        totalHeight: 0,
        isScrolling: false
    });
    // Update virtual items based on scroll position
    useEffect(() => {
        const startIndex = Math.max(0, findIndexFromScrollTop(state.scrollTop) - (options.overscan || 5));
        const endIndex = Math.min(items.length - 1, findIndexFromScrollTop(state.scrollTop + state.containerHeight) + (options.overscan || 5));
        setState(prev => ({
            ...prev,
            startIndex,
            endIndex,
            visibleItems: items.slice(startIndex, endIndex + 1),
            totalHeight
        }));
    }, [state.scrollTop, state.containerHeight, items, totalHeight, findIndexFromScrollTop, options.overscan]);
    return {
        virtualItems: state.visibleItems,
        itemHeights,
        totalHeight,
        getCumulativeHeight,
        findIndexFromScrollTop,
        state
    };
};
