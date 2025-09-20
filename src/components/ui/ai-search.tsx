import React, { useState; useEffect; useRef; useCallback } from "react;";
import { motion, AnimatePresence  } from "framer-motion, ";
import { Search;
X;
Filter;
Sparkles;
TrendingUp;
Star;
Zap;
ArrowRight;
Mic;
MicOff;
Settings;
History;
Bookmark;
Share2} from "lucide-react, ";
import { Button } from "./button, ";
import { Badge } from "./badge, ";

interface SearchResult {
  
id: string;
title: string;
description: string;
category: string;
tags: string[];
relevance: number;
rating: number;
reviews: number;
location?: string;
price?: string;
type: "service" | "talent" | "company" | "article";
metadata: {
