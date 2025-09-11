import { useEffect, useRef, useState } from 'react';
/**
 * Custom hook for intersection observer functionality
 * @param options - Intersection observer options
 * @returns [ref, isIntersecting, entry] tuple
 */
export function useIntersectionObserver(options = {}) {
    const { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false, } = options;
    const [entry, setEntry] = useState();
    const [node, setNode] = useState(null);
    const observer = useRef(null);
    const frozen = (entry === null || entry === void 0 ? void 0 : entry.isIntersecting) && freezeOnceVisible;
    const updateEntry = ([entry]) => {
        setEntry(entry);
    };
    useEffect(() => {
        const hasIOSupport = !!window.IntersectionObserver;
        if (!hasIOSupport || frozen || !node)
            return;
        const observerParams = { threshold, root, rootMargin };
        const currentObserver = new IntersectionObserver(updateEntry, observerParams);
        observer.current = currentObserver;
        currentObserver.observe(node);
        return () => {
            currentObserver.disconnect();
        };
    }, [node, threshold, root, rootMargin, frozen]);
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            setNode(ref.current);
        }
    }, []);
    const isIntersecting = !!(entry === null || entry === void 0 ? void 0 : entry.isIntersecting);
    return [ref, isIntersecting, entry];
}
