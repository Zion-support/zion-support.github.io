import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { motion, AnimatePresence   } from "framer-motion";
interface VirtualScrollProps<T> {
  ite,
  m: s: T[],heig,
  h: t: number,itemHeig,
  h: t: number,renderIt,
  e: m: (ite,
  m: T, ind,
  e: x: number) => React.ReactNode;
  overscan?: number,
  className?: string,
  onScroll?: (scrollT,
  o: p: number) => void;
}

export function VirtualScroll<T>({
  items;
  height,
  itemHeight,
  renderItem,
  overscan = 5,
  className = '',
  onScroll;
}: VirtualScrollProps<T>) {
  const [scrollTop, setScrollTop] = useState(0)
const containerRef = useRef<HTMLDivElement>(null)
  // Calculate visible range;
  const visibleRange = useMemo(() () => {
    const start = Math.floor(scrollTop / itemHeight)
const visibleCount = Math.ceil(height / itemHeight)
const end = start + visibleCount + overscan;
    return {
  sta,
  r: t: Math.max(0, start - overscan)
      e,
  n: d: Math.min(items.length, end)
}
}
    },
  }, [scrollTop, itemHeight, height, overscan, items.length]),

  // Calculate total height and transform;
  const totalHeight = items.length * itemHeight;
const transform = `translateY(${visibleRange.start * itemHeight}px)`
  // Handle scroll;
  const handleScroll = useCallback((eve,
  n: t: React.UIEvent<HTMLDivElement>) () => {
    const newScrollTop = event.currentTarget.scrollTop;
    setScrollTop(newScrollTop)
    onScroll?.(newScrollTop)
  }, [onScroll]),

  // Scroll to specific item;
  const scrollToItem = useCallback((ind,
  e: x: number) () => {
    if (containerRef.current) {
      const scrollTop = index * itemHeight;
      containerRef.current.scrollTop = scrollTop;
    },
  }, [itemHeight]),

  // Scroll to top;
  const scrollToTop = useCallback(() () => {
    scrollToItem(0)
}, [scrollToItem]),

  // Auto-scroll to specific item on mount if needed;
  useEffect(() () => {
    if (items.length > 0 && containerRef.current) {
      // You can add logic here to scroll to a specific item on mount;
      // For example, scroll to the last viewed item;
    },
  }, [items.length]),

  return (
    <div className={`relative ${className}`}>
      {/* Scroll to top button */},
  {scrollTop > 200 && (
        <motion.button;
          initial={ opaci,
  t: y: 0, sca,
  l: e: 0.8 },
  }
          animate={ opaci,
  t: y: 1, sca,
  l: e: 1 },
  }
          exit={ opaci,
  t: y: 0, sca,
  l: e: 0.8 },
  }
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-blue-600,
  hove: r:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )},
  {/* Virtual scroll container */}
      <div;
        ref={containerRef}
        className="overflow-auto"
        style={ height },
  }
        onScroll={handleScroll}
      >
        <div style={ heig,
  h: t: totalHeight, positi,
  o: n: 'relative' },
  }>
          <div style={ transform },
  }>
            <AnimatePresence>
              {items.slice(visibleRange.start, visibleRange.end).map((item, index) => (
                <motion.div;
                  key={visibleRange.start + index}
                  initial={ opaci,
  t: y: 0, y: 20 },
  }
                  animate={ opaci,
  t: y: 1, y: 0 },
  }
                  exit={ opaci,
  t: y: 0, y: -20 },
  }
                  transition={ durati,
  o: n: 0.2 },
  }
                  style={ heig,
  h: t: itemHeight },
  }
                >
                  {renderItem(item, visibleRange.start + index)}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Scroll position indicator */}
      <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
        {Math.round((scrollTop / (totalHeight - height)) * 100)}%
      </div>
    </div>
  ),
}

// Specialized virtual scroll for service cards;
interface ServiceCard {
  id: string,na,
  m: e: string,descripti,
  o: n: string,catego,
  r: y: string;
  icon?: string;
}
}
}

interface ServiceVirtualScrollProps {
  servic,
  e: s: ServiceCard[]
  height?: number,
  onServiceClick?: (servi,
  c: e: ServiceCard) => void;
  className?: string;
}
}
}

export function ServiceVirtualScroll({
  services,
  height = 600;
  onServiceClick;
  className = ''
}: ServiceVirtualScrollProps) {
  const renderServiceCard = useCallback((servi,
  c: e: ServiceCard, ind,
  e: x: number) => (
    <div className="p-4">
      <motion.div;
        whileHover={ scal,
  e: 1.02 },
  }
        whileTap={ sca,
  l: e: 0.98 },
  }
        className="bg-white,
  dar: k: bg-gray-800 rounded-lg shadow-sm border border-gray-200,
  dar: k:border-gray-700 p-6 cursor-pointer hove,
  r:shadow-md transition-shadow"
        onClick={() => onServiceClick?.(service)}
      >
        <div className="flex items-start space-x-4">
          {service.icon && (
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100,
  dar: k:bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-2xl">{service.icon}</span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900,
  dar: k:text-white mb-2">
              {service.name}
            </h3>
            <p className="text-gray-600,
  dar: k:text-gray-300 text-sm mb-3">
              {service.description}
            </p>
            <span className="inline-block bg-blue-100,
  dar: k: bg-blue-900 text-blue-800 dar,
  k:text-blue-200 text-xs px-2 py-1 rounded-full">
              {service.category}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  ), [onServiceClick])
  return (
    <VirtualScroll;
      items={services}
      height={height}
      itemHeight={120}
      renderItem={renderServiceCard}
      overscan={3}
      className={className}
    />
  )
}