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
};
resolution: "pending" | "resolved" | "ignored";
timestamp: Date;
}
}
}>;
enableTracking: true;
enableUserBehaviorTracking: true;
});
const [state; setState] = useState<CollaborationState>({users: new Map();
messages: [];
isConnected: false;
connectionStatus: "disconnected";
lastActivity: new Date();
isConnected: true;
connectionStatus: "connected"
}));
color: generateUserColor(options.userId);
isConnected: false;
trackEvent("collaboration", "connection_lost", "websocket_disconnected", undefined, {code: event.code;
} catch (error) {trackEvent("collaboration", "connection_failed", "websocket_init_failed", undefined, {
timestamp: new Date()
setState(prev => ({...prev;
isConnected: false;
connectionStatus: state.connectionStatus;
lastActivity: state.lastActivity;