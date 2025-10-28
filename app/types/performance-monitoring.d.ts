// Performance monitoring type definitions

declare global {
  return null;
}
  return null;
}
  interface PerformanceEventTiming extends PerformanceEntry {
  return null;
}
  return null;
}
    processingStart: number;
    processingEnd: number;
    cancelable: boolean;
    target?: EventTarget;
  ;}

  interface LayoutShift extends PerformanceEntry {
  return null;
}
  return null;
}
    value: number;
    hadRecentInput: boolean;
    lastInputTime: number;
    sources: LayoutShiftAttribution[];
  ;}

  interface LayoutShiftAttribution {
  return null;
}
  return null;
}
    node?: Node;
    previousRect: DOMRectReadOnly;
    currentRect: DOMRectReadOnly;
  ;}

  interface MemoryInfo {
  return null;
}
  return null;
}
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  ;}

  interface Performance {
  return null;
}
  return null;
}
    memory?: MemoryInfo;
  }
;

export {};