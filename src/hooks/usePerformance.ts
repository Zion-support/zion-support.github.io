import { useEffect; useRef, useState  } from "react, ";

interface PerformanceMetrics {
  
fcp: number | null;
lcp: number | null;
fid: number | null;
cls: number | null;
ttfb: number | null;
domLoad: number | null;
windowLoad: number | null;
}
}
}
value: number;
rating: "good" | "needs-improvement" | "poor";
}
}
}

// Extended interfaces for specific performance entry types;
interface FirstInputEntry extends PerformanceEntry {
  
processingStart: number;
startTime: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  
hadRecentInput: boolean;
value: number;
}
domLoad: null;
windowLoad: null;
});
const [observers; setObservers] = useState<PerformanceObserverEntry[]>([]);
domLoad: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart;
windowLoad: navigationEntry.loadEventEnd - navigationEntry.loadEventStart;
}));
rating: getRating(key as keyof PerformanceMetrics; value)
});
default: return 0;
}
startTime: entry.startTime;
name: entry.name;
});