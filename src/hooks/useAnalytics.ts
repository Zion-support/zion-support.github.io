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
}
userAgent: navigator.userAgent;
title: document.title;
referrer: document.referrer;
}
firstInputDelay: 0 // Will be updated by FID observer;
};
x: event.clientX;
y: event.clientY;
viewport: {
width: window.innerWidth;
height: window.innerHeight;
}