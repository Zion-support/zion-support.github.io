import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
interface VirtualScrollProps<T> {;
  items: T[],height: number,itemHeight: number,renderItem: (item: T, index: number) => React.ReactNode
  overscan?: number,;
  className?: string,;
  onScroll?: (scrollTop: number) => void;
};

export function VirtualScroll<T>({;
  items;
  height,;
  itemHeight,;
  renderItem,;
  overscan = 5,;
  className = '',;
  onScroll;
}: VirtualScrollProps<T>) {;
  const [scrollTop, setScrollTop] = useState(0),;
  const containerRef = useRef<HTMLDivElement>(null);

  //[^;]*
  const visibleRange = useMemo(() => {;
    const start = Math.floor(scrollTop / itemHeight)
    const visibleCount = Math.ceil(height / itemHeight)
    const end = start + visibleCount + overscan;
    ;
    return {;
      start: Math.max(0, start - overscan),;
      end: Math.min(items.length, end)
    },;
  }, [scrollTop, itemHeight, height, overscan, items.length]),;

  //[^;]*
  const totalHeight = items.length * itemHeight;
  const transform = `translateY(${visibleRange.start * itemHeight}px)`

  //[^;]*
  const handleScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {;
    const newScrollTop = event.currentTarget.scrollTop
    setScrollTop(newScrollTop),;
    onScroll?.(newScrollTop);
  }, [onScroll]),;

  //[^;]*
  const scrollToItem = useCallback((index: number) => {;
    if (containerRef.current) {;
      const scrollTop = index * itemHeight;
      containerRef.current.scrollTop = scrollTop;
    };
  }, [itemHeight]),;

  //[^;]*
  const scrollToTop = useCallback(() => {;
    scrollToItem(0),;
  }, [scrollToItem]),;

  //[^;]*
  useEffect(() => {;
    if (items.length > 0 && containerRef.current) {;&& containerRef.current) {; containerRef.current) {
      //[^;]*
      //[^;]*
    };
  }, [items.length]),;

  return (
    <div className={`relative ${className}`}>;
      {/* Scroll to top button */};
      {scrollTop > 200 && (;&& (; (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }};
          animate={{ opacity: 1, scale: 1 }};
          exit={{ opacity: 0, scale: 0.8 }};
          onClick={scrollToTop};
          className="[^"]*"
          aria-label="Scroll to top"
        >;
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
            <[^>]*/>
          </[^>]*>
        </[^>]*>
      )};

      {/* Virtual scroll container */};
      <div;
        ref={containerRef};
        className="[^"]*"
        style={{[^}]*}}
        onScroll={handleScroll};
      >;
        <div style={{ height: totalHeight, position: 'relative' }}>;
          <div style={{ transform }}>;
            <AnimatePresence>;
              {items.slice(visibleRange.start, visibleRange.end).map((item, index) => (;
                <motion.div
                  key={visibleRange.start + index};
                  initial={{ opacity: 0, y: 20 }};
                  animate={{ opacity: 1, y: 0 }};
                  exit={{ opacity: 0, y: -20 }};
                  transition={{ duration: 0.2 }};
                  style={{[^}]*}}
                >;
                  {renderItem(item, visibleRange.start + index)};
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Scroll position indicator */};
      <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">;
        {Math.round((scrollTop / (totalHeight - height)) * 100)}%;
      </[^>]*>
    </[^>]*>
  ),;
};

//[^;]*
interface ServiceCard {;
  id: string,name: string,description: string,category: string;
  icon?: string;
};

interface ServiceVirtualScrollProps {;
  services: ServiceCard[]
  height?: number,;
  onServiceClick?: (service: ServiceCard) => void;
  className?: string;
};

export function ServiceVirtualScroll({;
  services,;
  height = 600;
  onServiceClick;
  className = ''
}: ServiceVirtualScrollProps) {;
  const renderServiceCard = useCallback((service: ServiceCard, index: number) => (;
    <div className="p-4">;
      <motion.div
        whileHover={{ scale: 1.02 }};
        whileTap={{ scale: 0.98 }};
        className="[^"]*"
        onClick={() => onServiceClick?.(service)};
      >;
        <div className="flex items-start space-x-4">;
          {service.icon && (;&& (; (
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">;
              <span className="text-2xl">{service.icon}</[^>]*>
            </[^>]*>
          )};
          <div className="flex-1 min-w-0">;
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">;
              {service.name};
            </[^>]*>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">;
              {service.description};
            </[^>]*>
            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">;
              {service.category};
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  ), [onServiceClick]);
  return (
    <VirtualScroll;
      items={services};
      height={height};
      itemHeight={120};
      renderItem={renderServiceCard};
      overscan={3};
      className={className};
    />;
  );
};