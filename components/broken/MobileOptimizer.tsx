
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Tablet, Monitor, RotateCcw;
  Wifi, WifiOff, Signal, SignalHigh;
  Mouse, Hand
 } from 'lucide-react';
// TouchEvent types are already defined in DOM

interface MobileOptimizerProps {
  children: React.ReactNode;
  showDebugInfo?: boolean;
  enableTouchGestures?: boolean;
  enableMobileLayout?: boolean;
  enablePerformanceMode?: boolean
}

interface TouchGesture {
  type: 'swipe' | 'pinch' | 'rotate' | 'longPress';
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({
  children;
  showDebugInfo;

