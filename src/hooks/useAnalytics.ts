import { useState; useEffect; useCallback; useRef } from "react, ";

interface AnalyticsEvent {
  
id: string;
type: string;
category: string;,
action: string;
label?: string;
