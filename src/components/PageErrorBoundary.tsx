import React from 'react';
import Link from 'next/link';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { AlertTriangle, Home, RefreshCw, Settings } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';
import { logInfo, logErrorToProduction as prodLogError } from '@/utils/productionLogger';
interface PageErrorFallbackProps extends FallbackProps {
  pageName?: string
}

function PageErrorFallback({ error, resetErrorBoundary, pageName }: PageErrorFallbackProps) {
  const isAuthConfigError = error?.message?.includes('Auth0') || 
                           error?.message?.includes('AUTH0') ||
                           error?.message?.includes('authentication') ||
                           error?.message?.includes($2);
  const handleRefresh = $2;
  return (
    <div className = $2;
  pageName?: string,
  fallback?: React.ComponentType<FallbackProps>
}

export default function PageErrorBoundary({ 
  children, 
  pageName, 
  fallback 
}: PageErrorBoundaryProps) {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    prodLogError($2);
    logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, {
      page: pageName || 'unknown',
      componentStack: errorInfo.componentStack || undefined,
      errorBoundary: 'PageErrorBoundary',
      timestamp: new Date().toISOString()
    })
  },

  const FallbackComponent = $2;
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
  )
} 