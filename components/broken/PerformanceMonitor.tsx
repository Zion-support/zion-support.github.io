<<<<<<< HEAD
<<<<<<< HEAD


const getPerformanceMetrics = useCallback (async () : Promise<PerformanceMetrics> => {

 const getPerformanceMetrics = useCallback (async () : Promise<PerformanceMetrics> => {



=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return new Promise ( (resolve) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
  //Wait for page to be fully loaded if (document.readyState === 'complete') {
})
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
 const getPerformanceMetrics = useCallback (async () : Promise<PerformanceMetrics> => {;
  return new Promise ( (resolve) => {;
  if (typeof window !== 'undefined' && 'performance' in window) {;
  //Wait for page to be fully loaded if (document && document.readyState === 'complete') {;

}) ;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}, []);
//Check for performance issues and add alerts const newAlerts: string[] = [];
if (newMetrics.loadTime > 3000) {
  const formatTime = (ms: number) : string => {
  if (ms === 0) return 'N/A';
<<<<<<< HEAD
<<<<<<< HEAD
if (ms < 1000) return `$ {
  Math.round (ms)
}ms`;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



};


<<<<<<< HEAD
}

};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
if (ms < 1000) return `$ {
  Math.round (ms)
}ms`;
}

};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
//Get device icon const getDeviceIcon = (deviceType: string) => {
  switch (deviceType) {
  case 'mobile': return Smartphone;
case 'tablet': return Tablet;
default: return Laptop;
}
const getPerformanceScore = () => {
  let score = 0;
let totalMetrics = 0;
//FCP scoring (0-100) if (metrics.fcp !== null) {
  totalMetrics++;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


else score += 25 

};


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
else score += 25
}
else score += 25 

};
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}
// Helper functions const getScoreLabel = (score: number) => {
  if (score >= 90) return 'Excellent';
if (score >= 70) return 'Good';
if (score >= 50) return 'Needs Improvement';

<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Zap, Clock, TrendingUp, TrendingDown, 
  AlertTriangle, CheckCircle, X, Settings, RefreshCw;
  BarChart3, Gauge, HardDrive, Wifi, Cpu
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number,
  firstContentfulPaint: number,
  largestContentfulPaint: number,
  cumulativeLayoutShift: number,
  firstInputDelay: number,
  timeToInteractive: number,
  memoryUsage?: number;
  networkLatency?: number

}
export default PerformanceMonitor;
<<<<<<< HEAD
<<<<<<< HEAD
}

}
=======



<<<<<<< HEAD
=======
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
