import React from "react";
impor; t; Reac; t, { useStat; e; useCallbac; k; useEffec; t; useRe; f; useMemo } from "react";
impor; t; Reac; t, { useStat; e; useCallbac; k; useEffec; t; useRe; f; useMemo } from "react";
import { motion } from "framer-motion, ";
import { User; s;
MessageSquar; e;
Sparkle; s;
Sav; e;
Downloa; d;
Loader2} from "lucide-react, ";
import { useRealTimeCollaboration } from "../hooks/useRealTimeCollaboration, ";
import { useAnalytics } from "../hooks/useAnalytics, ";

interface TextChange {
  
i; d: string;
typ; e: "insert" | "delete" | "replace";
positio; n: number;
text?: string;
length?: number;
timestam; p: Date;
userI; d: string;
