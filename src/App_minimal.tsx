import React from 'react';
import { AppRouter } from './router';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import './index.css';

export default function App(): React.JSX.Element {
  return (
    <EnhancedErrorBoundary>
      <AppRouter />
    </EnhancedErrorBoundary>
  );
}