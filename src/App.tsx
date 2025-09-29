import React from 'react';
import './index.css';
import { AppRouter } from './router';
import { performanceMonitor } from './utils/performanceMonitor';

export default function App(): React.JSX.Element {
  // Minimal app wrapper to ensure clean build and runtime
  React.useEffect(() => {
    // Touch the singleton so side effects initialize after load
    void performanceMonitor;
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <AppRouter />
    </div>
  );
}