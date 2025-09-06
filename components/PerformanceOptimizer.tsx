import React, { useEffect, useState, useCallback } from 'react';

import { motion  } from 'framer-motion';
import { Zap, Clock, TrendingUp, Activity, Gauge, Cpu, Database, Network } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number
}

interface PerformanceOptimizerProps {
  className?: string
}


const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ className;

