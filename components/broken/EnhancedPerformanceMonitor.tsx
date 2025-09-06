<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity;
  AlertTriangle;
  CheckCircle;
  X;
  RefreshCw;
  BarChart3;
  Gauge
 } from 'lucide-react';
interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
  memoryUsage?: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number
  },
  networkInfo?: {
    effectiveType: string;
    downlink: number;
    rtt: number
  }
}
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

//FCP recommendations if (metrics.fcp > 2000) {
=======
 //FCP recommendations if (metrics.fcp > 2000) {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
//FCP recommendations if (metrics.fcp > 2000) {
=======
 //FCP recommendations if (metrics.fcp > 2000) {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  recs.push ({
=======
 //FCP recommendations if (metrics.fcp > 2000) {
  recs.push ({

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
}return recs;
}, []);
//Wait for page to be fully loaded if (document.readyState !== 'complete') {
  await new Promise (resolve => {
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
}//Wait a bit more for any async operations await new Promise (resolve => setTimeout (resolve, 1000) );
if (metrics.fcp > 2000) score -= 20;
if (metrics.lcp > 2500) score -= 25;
if (metrics.cls > 0.1) score -= 15;
if (metrics.ttfb > 600) score -= 20;
if (!performanceData) {
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
}> <div className="animate-pulse" > <div className="h-4 bg-gray-700 rounded w-1/3 mb-4" ></div> <div className="space-y-3" > <div className="h-3 bg-gray-700 rounded" ></div> <div className="h-3 bg-gray-700 rounded w-5/6" ></div> <div className="h-3 bg-gray-700 rounded w-4/6" ></div> </div> </div> </div>)
}
}> </p> </div> </div> <div className="flex items-center space-x-2" > <button > <BarChart3 className="w-4 h-4" /> </button> <button > <RefreshCw className= {
  `w-4 h-4 $ {
  isLoading ? 'animate-spin' : ''
}`
}/> </button> <button > <Settings className="w-4 h-4" /> </button> </div> </div> </div> performanceData.overallScore >= 70 ? 'Good': 'Needs Improvement'
}</p> </div> <span className= {
  `font-mono $ {
  metrics.fcp > 2000 ? 'text-red-400': 'text-green-400'
}`
}> {
  metrics.fcp.toFixed (0)
}ms </span> </div> </span> </div> </div> </div>)
}</span> </div> <div className="w-full bg-gray-700 rounded-full h-2" > <div width: `$ {
  (metrics.memoryUsage.usedJSHeapSize / metrics.memoryUsage.totalJSHeapSize) * 100
}%`
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
}/> </div> </div> </div>)
}</span> </div> </div> </div>)
}rec.priority === 'high'? 'bg-red-500/20 text-red-400': rec.priority === 'medium'? 'bg-yellow-500/20 text-yellow-400': 'bg-green-500/20 text-green-400'
}`
}> {
  rec.priority
}</span> </div> </div>) )
}</div> </div>)
}) : (<BarChart3 className="w-4 h-4" />)
}<span> {
  isMonitoring ? 'Measuring...': 'Measure Performance'
}</span> </button> </div> </div> </motion.div>)
}</AnimatePresence> </>)
<<<<<<< HEAD
}
export default EnhancedPerformanceMonitor;
export default EnhancedPerformanceMonitor;
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
};
}
}

export default EnhancedPerformanceMonitor;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
