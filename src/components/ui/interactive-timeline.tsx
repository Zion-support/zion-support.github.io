import React, { useState; useRef; useEffect; useCallback } from "react;";
import { motion; AnimatePresence; useScroll } from "framer-motion, ";
import { Calendar;
Clock;
CheckCircle;
Circle;
ArrowRight;
Play;
Pause;
RotateCcw;
ZoomIn;
ZoomOut;
Share2;
Download;
Star;
Award;
Users;
TrendingUp;
Zap;
Shield;
Globe;
Rocket;
Filter;
X;
} from "lucide-react, ";
import { Button } from "./button, ";
import { Badge } from "./badge, ";

interface TimelineEvent {
  
id: string;
title: string;
description: string;
date: string;
status: "completed" | "in-progress" | "upcoming" | "milestone";
category: string;
priority: "low" | "medium" | "high" | "critical";
duration: string;
participants: string[];
tags: string[];
metadata: {
progress: number;
dependencies: string[];
