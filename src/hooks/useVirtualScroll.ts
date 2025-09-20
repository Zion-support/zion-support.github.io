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
