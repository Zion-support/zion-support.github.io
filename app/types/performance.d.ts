<<<<<<< HEAD
// Performance API type definitions

export interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  cancelable: boolean;
}

export interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  lastInputTime: number;
  sources: LayoutShiftAttribution[];
}

export interface LayoutShiftAttribution {
  node?: Node;
  previousRect: DOMRectReadOnly;
  currentRect: DOMRectReadOnly;
}

// Extend the global PerformanceEntry interface
declare global {
  interface PerformanceEntry {
    // These properties are available on specific entry types
    processingStart?: number;
    processingEnd?: number;
    cancelable?: boolean;
    value?: number;
    hadRecentInput?: boolean;
    lastInputTime?: number;
    sources?: LayoutShiftAttribution[];
  }
}
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b486
