<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, TrendingDown;
  AlertTriangle, CheckCircle, X, Settings, RefreshCw;
  BarChart3, Gauge, HardDrive, Wifi, Cpu
 } from 'lucide-react';
interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  memoryUsage?: number;
  networkLatency?: number
}

interface PerformanceMonitorProps {
  showUI?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showUI;
=======
const getPerformanceMetrics = useCallback (async () : Promise<PerformanceMetrics> => {
  return new Promise ( (resolve) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
  //Wait for page to be fully loaded if (document.readyState === 'complete') {
=======
 const getPerformanceMetrics = useCallback (async () : Promise<PerformanceMetrics> => {
  return new Promise ( (resolve) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
  //Wait for page to be fully loaded if (document.readyState === 'complete') {

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
})
}, []);
//Check for performance issues and add alerts const newAlerts: string[] = [];
if (newMetrics.loadTime > 3000) {
  const formatTime = (ms: number) : string => {
  if (ms === 0) return 'N/A';
if (ms < 1000) return `$ {
  Math.round (ms)
}ms`;
<<<<<<< HEAD
}
=======

};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
//Get device icon const getDeviceIcon = (deviceType: string) => {
  switch (deviceType) {
  case 'mobile': return Smartphone;
case 'tablet': return Tablet;
default: return Laptop;
<<<<<<< HEAD
}
=======

};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
const getPerformanceScore = () => {
  let score = 0;
let totalMetrics = 0;
//FCP scoring (0-100) if (metrics.fcp !== null) {
  totalMetrics++;
if (metrics.fcp < 1800) score += 100;
else if (metrics.fcp < 3000) score += 75;
else if (metrics.fcp < 4000) score += 50;
else score += 25
}//LCP scoring (0-100) if (metrics.lcp !== null) {
  totalMetrics++;
if (metrics.lcp < 2500) score += 100;
else if (metrics.lcp < 4000) score += 75;
else if (metrics.lcp < 6000) score += 50;
else score += 25
}//FID scoring (0-100) if (metrics.fid !== null) {
  totalMetrics++;
if (metrics.fid < 100) score += 100;
else if (metrics.fid < 300) score += 75;
else if (metrics.fid < 500) score += 50;
else score += 25
}//CLS scoring (0-100) if (metrics.cls !== null) {
  totalMetrics++;
if (metrics.cls < 0.1) score += 100;
else if (metrics.cls < 0.25) score += 75;
else if (metrics.cls < 0.4) score += 50;
else score += 25
<<<<<<< HEAD
}
=======

};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
//Don't render anything in production return (<AnimatePresence> {
  isVisible && (<motion.div </div> <div className="flex items-center space-x-2" > <button > <RefreshCw className= {
  `w-4 h-4 $ {
  isLoading ? 'animate-spin': ''
}`
}/> </button> <button > <BarChart3 className="w-4 h-4" /> </button> <button > <X className="w-4 h-4" /> </button> </div> </div> </div> </div> </div> </div> {
  /* Expanded View */
}<AnimatePresence> {
  isExpanded && (<motion.div </div>)
}</div> </div> </div>) )
}</div> </div>)
}<> <div>• Optimize images and assets</div> <div>• Minimize JavaScript bundles</div> <div>• Enable compression and caching</div> </>)
}{
  getPerformanceScore () >= 90 && (<div>• Excellent performance! Keep monitoring for any regressions.</div>)
}</div> </div> </div> </motion.div>)
}</AnimatePresence> </div> </div> </motion.div> </AnimatePresence>)
<<<<<<< HEAD
}
=======
};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
// Helper functions const getScoreLabel = (score: number) => {
  if (score >= 90) return 'Excellent';
if (score >= 70) return 'Good';
if (score >= 50) return 'Needs Improvement';
<<<<<<< HEAD
}
export default PerformanceMonitor;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======

};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
