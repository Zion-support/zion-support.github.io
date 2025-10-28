// Performance API types for web vitals
declare global {
  interface PerformanceEventTiming extends PerformanceEntry {
    processingStart: number;
    processingEnd: number;
    target?: Node;
  }

  interface LayoutShift extends PerformanceEntry {
    value: number;
    hadRecentInput: boolean;
    lastInputTime: number;
    sources: LayoutShiftAttribution[];
  }

  interface LayoutShiftAttribution {
    node?: Node;
    previousRect: DOMRectReadOnly;
    currentRect: DOMRectReadOnly;
  }
}

export {};