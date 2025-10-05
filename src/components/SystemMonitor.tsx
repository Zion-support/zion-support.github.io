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
    <div className="fixed bottom-4 right-4 z-50">
      {/* System monitor component - can be expanded later */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d
    </div>
  );
};

export default SystemMonitor;
