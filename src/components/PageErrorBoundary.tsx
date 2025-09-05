import React from 'react';
import Link from 'next/link';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { AlertTriangle, Home, RefreshCw, Settings } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';
import { logInfo, logErrorToProduction as prodLogError } from '@/utils/productionLogger';


interface PageErrorFallbackProps extends FallbackProps {
  pageName?: string;
}

function PageErrorFallback({ error, resetErrorBoundary, pageName }: PageErrorFallbackProps) {
  const isAuthConfigError = error?.message?.includes('Auth0') || 
                           error?.message?.includes('AUTH0') ||
                           error?.message?.includes('authentication') ||
                           error?.message?.includes('environment');

  const handleRefresh = () => {
    if (resetErrorBoundary) {
      resetErrorBoundary();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className=&quot;min-h-screen bg-zion-blue flex items-center justify-center p-4&quot;>
      <div className=&quot;max-w-2xl w-full&quot;>
        {/* Main Error Card */}
        <div className=&quot;bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6&quot;>
          <div className=&quot;text-center mb-6&quot;>
            <div className=&quot;mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center&quot;>
              <AlertTriangle className=&quot;h-8 w-8 text-red-600&quot; />
            </div>
            <h1 className=&quot;text-3xl font-bold text-gray-900 mb-2&quot;>
              {pageName ? `${pageName} Unavailable` : 'Page Unavailable'}
            </h1>
            <p className=&quot;text-gray-600&quot;>
              {isAuthConfigError 
                ? 'This page cannot load due to missing authentication configuration'
                : 'An unexpected error occurred while loading this page'
              }
            </p>
          </div>

          {isAuthConfigError && (
            <div className=&quot;bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6&quot;>
              <div className=&quot;flex&quot;>
                <Settings className=&quot;h-5 w-5 text-yellow-600 mt-0.5 mr-3&quot; />
                <div>
                  <h3 className=&quot;font-semibold text-yellow-800 mb-1&quot;>Configuration Required</h3>
                  <p className=&quot;text-yellow-700 text-sm&quot;>
                    This application requires Auth0 authentication to be properly configured. 
                    Please contact your system administrator.
                  </p>
                </div>
              </div>
            </div>
          )}

          {error?.message && (
            <details className=&quot;bg-gray-50 rounded-lg p-4 mb-6&quot;>
              <summary className=&quot;cursor-pointer text-gray-700 font-medium&quot;>
                Technical Details
              </summary>
              <pre className=&quot;mt-2 text-sm text-gray-600 whitespace-pre-wrap break-all overflow-auto&quot;>
                {error.message}
              </pre>
            </details>
          )}

          {/* Action Buttons */}
          <div className=&quot;flex flex-col sm:flex-row gap-3 mb-6&quot;>
            <button 
              onClick={handleRefresh}
              className=&quot;flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors&quot;
            >
              <RefreshCw className=&quot;w-4 h-4 mr-2&quot; />
              Try Again
            </button>
            
            <Link 
              href=&quot;/&quot;
              className=&quot;flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors&quot;
            >
              <Home className=&quot;w-4 h-4 mr-2&quot; />
              Go Home
            </Link>
          </div>

          {/* Navigation Options */}
          <div className=&quot;border-t pt-6&quot;>
            <h3 className=&quot;font-semibold text-gray-900 mb-3&quot;>You can also visit:</h3>
            <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-3 text-sm&quot;>
              <Link href=&quot;/marketplace&quot; className=&quot;text-blue-600 hover:underline&quot;>
                Marketplace
              </Link>
              <Link href=&quot;/talent&quot; className=&quot;text-blue-600 hover:underline&quot;>
                Talent
              </Link>
              <Link href=&quot;/services&quot; className=&quot;text-blue-600 hover:underline&quot;>
                Services
              </Link>
              <Link href=&quot;/about&quot; className=&quot;text-blue-600 hover:underline&quot;>
                About
              </Link>
            </div>
          </div>
        </div>

        {/* Support Information */}
        <div className=&quot;bg-gray-800 text-white rounded-lg p-6 text-center&quot;>
          <p className=&quot;mb-3&quot;>Need help? Contact our support team</p>
          <div className=&quot;flex flex-col sm:flex-row gap-3 justify-center&quot;>
            <a 
              href=&quot;mailto:support@zion.tech&quot; 
              className=&quot;text-blue-400 hover:underline&quot;
            >
              support@zion.tech
            </Link>
            <Link href=&quot;/status&quot; className=&quot;text-blue-400 hover:underline&quot;>
              Service Status
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PageErrorBoundaryProps {
  children: React.ReactNode;
  pageName?: string;
  fallback?: React.ComponentType<FallbackProps>;
}

export default function PageErrorBoundary({ 
  children, 
  pageName, 
  fallback 
}: PageErrorBoundaryProps) {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    prodLogError(`PageErrorBoundary caught error on ${pageName || 'unknown page'}:`, error);
    
    logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, {
      page: pageName || 'unknown',
      componentStack: errorInfo.componentStack || undefined,
      errorBoundary: 'PageErrorBoundary',
      timestamp: new Date().toISOString()
    });
  };

  const FallbackComponent = fallback || ((props: FallbackProps) => (
    <PageErrorFallback {...props} pageName={pageName} />
  ));

  return (
    <ErrorBoundary
      FallbackComponent={FallbackComponent}
      onError={handleError}
      onReset={() => {
        // Reset any application state if needed
        logInfo(`Resetting error boundary for ${pageName || 'page'}`);
      }}
    >
      {children}
    </ErrorBoundary>
  );
} 