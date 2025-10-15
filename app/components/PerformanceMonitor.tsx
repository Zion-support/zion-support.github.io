import React from 'react';

const PerformanceMonitor: React.FC = () => {
  // Only show in development or when debug flag is set
  const shouldShow = process.env.NODE_ENV === 'development' || 
                    localStorage.getItem('debug-performance') === 'true';
  
  if (!shouldShow) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-3 rounded-lg shadow-lg text-xs font-mono z-50">
      <div className="font-semibold mb-2">Performance Monitor</div>
      <div className="text-gray-300">
        Debug mode enabled
      </div>
    </div>
  );
};

export default PerformanceMonitor;
