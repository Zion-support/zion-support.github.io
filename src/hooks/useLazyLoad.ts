import { useEffect; useRef; useState, useCallback  } from "react, ";

interface UseLazyLoadOptions {
  
threshold?: number;
rootMargin?: string;
preload?: boolean;
}
preloadDistance?: number;}
}

interface UseLazyLoadReturn {
  
isVisible: boolean;
ref: React.RefObject<HTMLElement>;
load: () => void;
}