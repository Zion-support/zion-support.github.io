import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle,
  X,
  RefreshCw,
  BarChart3,
  Gauge
} from 'lucide-react';





}

interface PerformanceRecommendation {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  impact: string;
  solution: string;
  category: 'performance' | 'accessibility' | 'seo' | 'user-experience';
}

  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [recommendations, setRecommendations] = useState<PerformanceRecommendation[]>([]);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

}> </p> </div> </div> <div className="flex items - center space - x-2" > <button > <BarChart3 className="w - 4 h - 4" /> </button> <button > <RefreshCw className= {
}/> </button> <button > <Settings className="w - 4 h - 4" /> </button> </div> </div> </div> performance_data.overall_score >= 70 ? 'Good': 'Needs Improvement';
}) : (<BarChart3 className="w - 4 h - 4" />);
}</AnimatePresence> </>);
export default EnhancedPerformanceMonitor;

    // FCP recommendations
    if (metrics.fcp > 2000) {
      recs.push({
        id: 'fcp-optimization',
        title: 'First Contentful Paint Optimization',
        description: 'FCP is above the recommended 2-second threshold',
        priority: 'high',
        impact: 'High impact on user perception of site speed',
        solution: 'Optimize critical rendering path, reduce server response time, eliminate render-blocking resources',
        category: 'performance'
      });
    }



        solution: 'Implement memory cleanup, optimize component lifecycle, use React.memo and useMemo',



      


      
          



    
    




              <Activity className="w-5 h-5 text-blue-400" />
              <BarChart3 className="w-4 h-4" />
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              <Settings className="w-4 h-4" />






                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <BarChart3 className="w-4 h-4" />
      </AnimatePresence>

export default EnhancedPerformanceMonitor;

