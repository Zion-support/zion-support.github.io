<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

const SystemMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'M') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="mb-2 font-bold">System Monitor</div>
      <div>Status: Running</div>
      <div>Memory: {Math.round((performance as any).memory?.usedJSHeapSize / 1024 / 1024 || 0)}MB</div>
      <div>Press Ctrl+Shift+M to toggle</div>
=======
import React from 'react';

const SystemMonitor: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          System Monitor
        </h2>
        <p className="text-lg mb-6">
          This component is being restored. Please check back later for full functionality.
        </p>
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-4daf
    </div>
  );
};

export default SystemMonitor;
