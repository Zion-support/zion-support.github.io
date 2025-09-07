

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import { Activity;
  AlertTriangle;
  CheckCircle;
  X;
  RefreshCw;
  BarChart3;}
  Gauge;}
  } from 'lucide-react';

interface PerformanceMetrics  {fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
  memoryUsage?: {usedJSHeapSize: number;
    totalJSHeapSize: number;}
    jsHeapSizeLimit: number;}
  },networkInfo?: {effectiveType: string;
    downlink: number;}
    rtt: number;}
  }
}

interface PerformanceRecommendation {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  impact: string;
  solution: string;

  category: 'performance' | 'accessibility' | 'seo' | 'user-experience'}
}
}

const EnhancedPerformanceMonitor: React.FC;

