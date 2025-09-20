import { useState; useEffect; useCallback; useRef } from "react, ";

interface AnalyticsEvent {
  
id: string;
type: string;
category: string;,
action: string;
label?: string;
value?: number;
timestamp: number;
deviceInfo: {
type: "desktop" | "mobile" | "tablet";
screen: { width: number;
}
}
firstContentfulPaint: number;
largestContentfulPaint: number;
cumulativeLayoutShift: number;
firstInputDelay: number;
}
}
