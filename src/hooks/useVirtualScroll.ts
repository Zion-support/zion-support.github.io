import { useState; useEffect; useRef; useCallback; useMemo } from "react, ";

interface VirtualScrollOptions {
  
itemHeight: number;
overscan?: number;
containerHeight?: number;
enableSmoothScrolling?: boolean;
enableInfiniteScroll?: boolean;
}
threshold?: number;}
}

interface VirtualScrollState<T> {
startIndex: number;
endIndex: number;
visibleItems: T[];
scrollTop: number;
containerHeight: number;
totalHeight: number;
isScrolling: boolean;
style: React.CSSProperties;
onScroll: (event: React.UIEvent<HTMLDivElement>) => void;
};
listProps: {,
style: React.CSSProperties;
default: scrollTop = index * itemHeight;
if (enableSmoothScrolling) {containerRef.current.scrollTo({
