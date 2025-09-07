

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, TrendingDown;
  AlertTriangle, CheckCircle, X, Settings, RefreshCw;}
  BarChart3, Gauge, HardDrive, Wifi, Cpu;}
  } from 'lucide-react';

interface PerformanceMetrics  {loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  memoryUsage?: number;}
  networkLatency?: number;}
}

interface PerformanceMonitorProps {
  showUI?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;}
}
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showUI;

