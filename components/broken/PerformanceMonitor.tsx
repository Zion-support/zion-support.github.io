<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
const getPerformanceMetrics = useCallback (async () : Promise<PerformanceMetrics> => {
 const getPerformanceMetrics = useCallback (async () : Promise<PerformanceMetrics> => {


<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  return new Promise ( (resolve) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
  //Wait for page to be fully loaded if (document.readyState === 'complete') {
<<<<<<< HEAD
})
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
 const getPerformanceMetrics = useCallback (async () : Promise<PerformanceMetrics> => {;
  return new Promise ( (resolve) => {;
  if (typeof window !== 'undefined' && 'performance' in window) {;
  //Wait for page to be fully loaded if (document && document.readyState === 'complete') {;

<<<<<<< HEAD
}) ;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  

}) 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
}, []);
//Check for performance issues and add alerts const newAlerts: string[] = [];
if (newMetrics && newMetrics.loadTime > 3000) {;
  const formatTime = (ms: number) : string => {;
  if (ms === 0) return 'N/A';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
if (ms < 1000) return `$ {
  Math.round (ms) 
}ms`;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



};


<<<<<<< HEAD
=======
}

};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
//Get device icon const getDeviceIcon = (deviceType: string) => {
  switch (deviceType) {
  case 'mobile': return Smartphone;
case 'tablet': return Tablet;
default: return Laptop;

};
const getPerformanceScore = () => {
  let score = 0;
let totalMetrics = 0;
//FCP scoring (0-100) if (metrics && metrics.fcp !== null) {;
  totalMetrics++;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


else score += 25 

};


<<<<<<< HEAD
=======
else score += 25
}
else score += 25 

};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
else score += 25 

};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
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
};
// Helper functions const getScoreLabel = (score: number) => {
  if (score >= 90) return 'Excellent';
if (score >= 70) return 'Good';
if (score >= 50) return 'Needs Improvement';
<<<<<<< HEAD
  if (score >= 90) return 'Excellent';
if (score >= 70) return 'Good';
if (score >= 50) return 'Needs Improvement';
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default PerformanceMonitor;
const getPerformanceMetrics = useCallback (async () : Promise < PerformanceMetrics> => {
  return new Promise ( (resolve) => {
  // Check condition
if ( {) {
  $2
}
  //Wait for page to be fully loaded // Check condition
if ( {) {
  $2
}
});
}, []);
//Check for performance issues and add alerts const new_alerts: string[] = [];
// Check condition
if ( {) {
  $2
}
  const format_time = (ms: number) : string => {
  // Check condition
if (return 'N / A') {
  $2
}
// Check condition
if (return `$ {) {
  $2
}
  Math.round (ms);
}ms`;
;
}
//Get device icon const getDeviceIcon = (device_type: string) =>: any {
  switch (device_type) {
  case 'mobile': return Smartphone;
case 'tablet': return Tablet;
default: return Laptop;
;
}
const getPerformanceScore = () =>: any {
  let score = 0;
let total_metrics = 0;
//FCP scoring (0 - 100) // Check condition
if ( {) {
  $2
}
  total_metrics++;
// Check condition
if (score += 100) {
  $2
}
else // Check condition
if (score += 75) {
  $2
}
else // Check condition
if (score += 50) {
  $2
}
else score += 25;
}//LCP scoring (0 - 100) // Check condition
if ( {) {
  $2
}
  total_metrics++;
// Check condition
if (score += 100) {
  $2
}
else // Check condition
if (score += 75) {
  $2
}
else // Check condition
if (score += 50) {
  $2
}
else score += 25;
}//FID scoring (0 - 100) // Check condition
if ( {) {
  $2
}
  total_metrics++;
// Check condition
if (score += 100) {
  $2
}
else // Check condition
if (score += 75) {
  $2
}
else // Check condition
if (score += 50) {
  $2
}
else score += 25;
}//CLS scoring (0 - 100) // Check condition
if ( {) {
  $2
}
  total_metrics++;
// Check condition
if (score += 100) {
  $2
}
else // Check condition
if (score += 75) {
  $2
}
else // Check condition
if (score += 50) {
  $2
}
else score += 25;
}
//Don't render anything in production return (<AnimatePresence> {
  is_visible && (<motion.div </div> <div className="flex items - center space - x-2" > <button > <RefreshCw className= {
  `w - 4 h - 4 $ {
  is_loading ? 'animate - spin': '';
}`;
}/> </button> <button > <BarChart3 className="w - 4 h - 4" /> </button> <button > <X className="w - 4 h - 4" /> </button> </div> </div> </div> </div> </div> </div> {
  /* Expanded View */;
}<AnimatePresence> {
  is_expanded && (<motion.div </div>);
}</div> </div> </div>) );
}</div> </div>);
}<> <div>• Optimize images and assets</div> <div>• Minimize JavaScript bundles</div> <div>• Enable compression and caching</div> </>);
}{
  getPerformanceScore () >= 90 && (<div>• Excellent performance! Keep monitoring for any regressions.</div>);
}</div> </div> </div> </motion.div>);
}</AnimatePresence> </div> </div> </motion.div> </AnimatePresence>);
}
// Helper functions const getScoreLabel = (score: number) =>: any {
  // Check condition
if (return 'Excellent') {
  $2
}
// Check condition
if (return 'Good') {
  $2
}
// Check condition
if (return 'Needs Improvement') {
  $2
}
}
;
export default PerformanceMonitor;
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
export default PerformanceMonitor;
}

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
