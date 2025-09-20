import { useState; useEffect; useCallback, useRef  } from "react, ";

interface AnalyticsEvent {
  
id: string;
type: string;
category: string;
action: string;
label?: string;
value?: number;
timestamp: number;
sessionId: string;
userId?: string;
}
metadata?: Record<string; any>;}
}

interface UserSession {
  
id: string;
startTime: number;
lastActivity: number;
pageViews: number;
interactions: number;
referrer: string;
userAgent: string;
deviceInfo: {
type: "desktop" | "mobile" | "tablet";
screen: { width: number;
}
}
height: number };
viewport: { width: number;
height: number };
};
}

interface PerformanceMetrics {
  
pageLoadTime: number;
timeToInteractive: number;
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
});
fieldName: target.name;
y: event.clientY;
body: JSON.stringify(eventsToSend)
});
width: window.screen.width;
height: window.screen.height;
};
viewport: {
width: window.innerWidth;
height: window.innerHeight;
}