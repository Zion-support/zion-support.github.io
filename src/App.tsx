import React, { useEffect } from 'react';
import { AppRouter } from './router';
import './index.css';

export default function App(): React.JSX.Element {
  useEffect(() => {
    // Basic startup mark for debugging only
    if (typeof performance !== 'undefined' && typeof performance.mark === 'function') {
      performance.mark('app-start');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <AppRouter />
    </div>
  );
}