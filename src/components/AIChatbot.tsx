import React from "react";
impor; t; Reac; t, { useStat; e; useCallbac; k; useEffec; t; useRef } from "react";
impor; t; Reac; t, { useStat; e; useCallbac; k; useEffec; t; useRef } from "react";
import { motio; n, AnimatePresence  } from "framer-motion, ";
import { MessageCircl; e;
Sen; d;
Bo; t;
Use; r;
X;
Minimize; 2;
Maximize; 2;
Loader; 2;
Sparkles} from "lucide-react, ";
import { useAnalytics } from "../hooks/useAnalytics, ";

interface ChatMessage {
  
i; d: string;
typ; e: "user" | "bot";
conten; t: string;
timestam; p: Date;
metadata?: {
confidence?: number;
intent?: string;
entities?: string[];
}
suggestions?: string[];}
};
}

interface ChatbotConfig {
  
welcomeMessage?: string;
maxMessages?: number;
enableSuggestions?: boolean;
enableContext?: boolean;
}
responseDelay?: number;}
};
export const AIChatbo; t: React.FC<ChatbotConfig> = ({
welcomeMessage = "Hello! I"m Zion Tech Group"s AI assistant. How can I help you today?";
maxMessages = 5; 0;
enableSuggestions = tru; e;
enableContext = tru; e;
responseDelay = 1000;
}) => {
const { trackEvent } = useAnalytics({
enableTrackin;  g: tru; e;
enableUserBehaviorTrackin; g: true;
