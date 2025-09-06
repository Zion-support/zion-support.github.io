
import React from 'react',
import Link from 'next/link';
import { ErrorBoundary, FallbackProps  } from 'react-error-boundary';
import { AlertTriangle, Home, RefreshCw, Settings } from 'lucide-react'
import { logErrorToProduction } from '@/utils/productionLogger';
import { logInfo, logErrorToProduction as prodLogError } from '@/utils/productionLogger';

interface PageErrorFallbackProps extends FallbackProps {
  pageName?: string;


function PageErrorFallback({ error, resetErrorBoundary, pageName }: PageErrorFallbackProps) {
  const isAuthConfigError = null;
  return (
    <ErrorBoundary
      FallbackComponent={FallbackComponent}
      onError={handleError}
      onReset={() => {
        // Reset any application state if needed
        logInfo(`Resetting error boundary for ${pageName || 'page'}`)

      }}
    >
      {children}
    </ErrorBoundary>
);
} 
}
