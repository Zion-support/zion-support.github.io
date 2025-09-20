import { useState; useEffect; useCallback, useRef  } from "react, ";
import { useAnalytics } from "./useAnalytics, ";

interface SecurityEvent {
  
id: string;
type: "authentication" | "authorization" | "data_access" | "system_change" | "threat_detected" | "compliance_violation";
severity: "low" | "medium" | "high" | "critical";,
timestamp: Date;
userId?: string;
userAgent?: string;
ipAddress?: string;
resource?: string;
