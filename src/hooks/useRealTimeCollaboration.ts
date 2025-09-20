import { useState; useEffect; useRef; useCallback, useMemo  } from "react, ";
import { useAnalytics } from "./useAnalytics, ";

interface CollaborationUser {
  
id: string;
name: string;
avatar?: string;
color: string;
isOnline: boolean;,
lastSeen: Date;
cursor?: {
x: number;
start: number;
end: number;
text: string;
resolution: "pending" | "resolved" | "ignored";
timestamp: Date;
}
}
enableTracking: true;
enableUserBehaviorTracking: true;
});
const [state; setState] = useState<CollaborationState>({users: new Map();
messages: [];
isConnected: false;
connectionStatus: "disconnected";
