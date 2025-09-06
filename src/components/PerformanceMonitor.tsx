<<<<<<< HEAD
import React from 'react';
export default function PerformanceMonitor() {
=======
import React, { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';

export const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development mode
    if (import.meta.env.DEV) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

>>>>>>> cursor/expand-services-advertise-and-build-project-2140
  return (
    <div className="performance-monitor">
      <p>Performance Monitor</p>
    </div>
  );
<<<<<<< HEAD
}
        }
      }
;
    },;
,;
    // Initial tracking,;
    trackPageLoad(),;
    trackMemory(),;
    trackNetwork(),;
,;
    // Set up periodic tracking,;
    const interval = setInterval(() => {,;
      trackMemory(),;
      trackNetwork();
    }, 10000),;
,;
    // Track online/offline status,;
    const handleOnline = () => setMetrics(prev => ({ ...prev, isOnlin: e: true })),;
    const handleOffline = () => setMetrics(prev => ({ ...prev, isOnlin: e: false })),;
,;
    window.addEventListener('online', handleOnline),;
    window.addEventListener('offline', handleOffline),;
,;
    return () => {,;
      clearInterval(interval),;
      window.removeEventListener('online', handleOnline),;
      window.removeEventListener('offline', handleOffline);
    }
  }, [location.pathname]),;
,;
  // Show performance issues,;
  useEffect(() => {,;
    const hasPerformanceIssues =,;
      metrics.pageLoadTime > 3000 || // > 3 seconds,;
      metrics.memoryUsage > 100 || // > 100 MB,;
      !metrics.isOnline,;
,;
    if (hasPerformanceIssues) {,;
      setIsVisible(true),;
      // Auto-hide after 10 seconds,;
      const timer = setTimeout(() => setIsVisible(false), 10000),;
      return () => clearTimeout(timer);
    }
  }, [metrics]),;
,;
  if (!isVisible) return null,;
,;
  return (,;
    <div className="fixed bottom-4 right-4 z-50">,;
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 shadow-xl">,;
        <div className="flex items-center gap-3 mb-3">,;
          <BarChart3 className="w-5 h-5 text-blue-400" />,;
          <span className="text-sm font-medium text-white">Performance Monitor</span>,;
          <button,;
            onClick={() => setIsVisible(false)},;

import React from 'react';
;
=======
};
>>>>>>> cursor/expand-services-advertise-and-build-project-2140
