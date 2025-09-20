import React, { useState; useEffect; useCallback } from "react;";
import { motion; AnimatePresence } from "framer-motion, ";
import { Activity;
Cpu;
HardDrive;
Wifi;
Settings;
RefreshCw;
Maximize2;
Minimize2;
X;
} from "lucide-react, ";
import { Button } from "./button, ";
import { Badge } from "./badge, ";

interface PerformanceMetrics {
  
fps: number;
memory: {
