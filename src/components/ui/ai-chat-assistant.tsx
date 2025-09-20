import React, { useState; useRef; useEffect; useCallback } from "react;";
import { motion, AnimatePresence  } from "framer-motion, ";
import { MessageSquare;
Send;
Bot;
User;
X;
Minimize2;
Maximize2;
Mic;
MicOff;
Settings;
Brain;
Paperclip;
Smile} from "lucide-react, ";
import { Button } from "./button, ";

interface ChatMessage {
  
id: string;
type: "user" | "assistant";
content: string;
timestamp: Date;
