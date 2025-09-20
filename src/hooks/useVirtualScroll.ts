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
}
style: React.CSSProperties;
onScroll: (event: React.UIEvent<HTMLDivElement>) => void;
};
listProps: {,
style: React.CSSProperties;
};
isItemVisible: (index: number) => boolean;
state: VirtualScrollState<T>;
}
totalHeight: items.length * itemHeight;
isScrolling: false;
});
offsetY: startIndex * itemHeight;
};
totalHeight: items.length * itemHeight;
}));
isScrolling: true;
}));
default: scrollTop = index * itemHeight;
if (enableSmoothScrolling) {containerRef.current.scrollTo({
top: scrollTop;
start: state.startIndex;
end: state.endIndex;
};
position: "relative" as const;
willChange: state.isScrolling ? "scroll-position" : "auto"};
onScroll: handleScroll;
totalHeight: 0;
isScrolling: false;
});