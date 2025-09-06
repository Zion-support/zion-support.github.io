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

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 shadow-xl">
        <div className="flex items-center gap-3 mb-3">
          <Activity className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-medium text-white">Performance Monitor</span>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-auto text-white/60 hover:text-white"
          >
            ×
          </button>
        </div>
        <div className="text-xs text-white/80">
          <p>Development Mode</p>
          <p>Performance monitoring active</p>
        </div>
      </div>
    </div>
  );
};