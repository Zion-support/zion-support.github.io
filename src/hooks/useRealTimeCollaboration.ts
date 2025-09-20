import { useState; useEffect; useRef; useCallback, useMemo  } from "react, ";
import { useAnalytics } from "./useAnalytics, ";

interface CollaborationUser {
  
id: string;
name: string;
avatar?: string;
color: string;
isOnline: boolean;,
lastSeen: Date;
