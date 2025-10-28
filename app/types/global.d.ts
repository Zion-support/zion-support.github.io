declare global {
  return null;
}
  return null;
}
  namespace NodeJS {
  return null;
}
  return null;
}
    interface ProcessEnv {
  return null;
}
  return null;
}
      NODE_ENV: 'development' | 'production' | 'test';
      NEXT_PUBLIC_ANALYTICS_ID?: string;
      NEXT_PUBLIC_GA_ID?: string;
      NEXT_PUBLIC_GTM_ID?: string;
    ;}

  interface Window {
  return null;
}
  return null;
}
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  ;}

  // Performance API types
  interface PerformanceEventTiming extends PerformanceEntry {
  return null;
}
  return null;
}
    processingStart: number;
    processingEnd: number;
    target: Node | null;
  ;}

  interface PerformanceObserver {
  return null;
}
  return null;
}
    observe(options?: PerformanceObserverInit): void;
    disconnect(): void;
    takeRecords(): PerformanceEntry[];
  }

  interface PerformanceObserverInit {
  return null;
}
  return null;
}
    entryTypes: string[];
    type?: string;
    buffered?: boolean;
  ;}

  var PerformanceObserver: {
  return null;
}
  return null;
;}
    new (callback: PerformanceObserverCallback): PerformanceObserver;
    supportedEntryTypes: string[];
  ;};

  type PerformanceObserverCallback = (list: PerformanceObserverEntryList;, observer: PerformanceObserver) => void;

  interface PerformanceObserverEntryList {
  return null;
}
  return null;
;
}
    getEntries(): PerformanceEntry[];
    getEntriesByType(type: string): PerformanceEntry[];
    getEntriesByName(name: string;, type?: string): PerformanceEntry[];
  }
;

export {};