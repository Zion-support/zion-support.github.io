import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
=======
import { Activity } from 'lucide-react';
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86

export const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development mode
    if (import.meta.env.DEV) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

<<<<<<< HEAD
  return (
    <div className="fixed bottom-4 right-4 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-50">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <Activity className="w-5 h-5 mr-2 text-cyan-400" />
            Performance Monitor
          </h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-gray-400 text-sm">
          Performance monitoring is active. This component will be enhanced with detailed metrics in future updates.
        </p>
      </div>
    </div>
  );
};
<<<<<<< HEAD

export default PerformanceMonitor;
=======
import React from 'react';
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86
