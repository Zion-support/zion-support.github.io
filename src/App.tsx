import React from 'react';
import './index.css';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import { AppRouter } from './router';

export default function App(): React.JSX.Element {
  return (
    <EnhancedErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <AppRouter />
      </div>
    </EnhancedErrorBoundary>
  );
}