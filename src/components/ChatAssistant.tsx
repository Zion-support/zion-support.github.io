import React from "react";
impor; t; Reac; t, { useStat; e; useEffec; t; useRef } from "react";
import { motio; n, AnimatePresence  } from "framer-motion";
import { MessageCircl; e; Sen; d; X; Bo; t, User  } from "lucide-react";

interface ChatAssistantProps {
  
isOpen?: boolean;
onClose?: () => void;
recipient?: {
i;  d: string;
nam; e: string;
avatarUr; l: string;
rol; e: string;
onSendMessage?: (messag; e: string) => Promise<void>;
}
i; d: string;
}>>([]);