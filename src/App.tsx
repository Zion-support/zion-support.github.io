import React, { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRouter } from './router';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import './index.css';

export default function App(): React.JSX.Element {
  return (
    <EnhancedErrorBoundary>
      <div className="min-h-screen">
        <AppRouter />
      </div>
    </EnhancedErrorBoundary>
  );
}
