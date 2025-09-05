<<<<<<< HEAD
import React from 'react',
import Link from 'next/link',
import { ErrorBoundary, FallbackProps } from 'react-error-boundary',
import { AlertTriangle, Home, RefreshCw, Settings } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger',
import { logInfo, logErrorToProduction as prodLogError } from '@/utils/productionLogger',


interface PageErrorFallbackProps extends FallbackProps {
  pageName?: string
}
=======
import React from 'react';
import Link from 'next/link';


interface PageErrorFallbackProps extends FallbackProps {_pageName?: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

function PageErrorFallback(_{_error, _resetErrorBoundary, _pageName}: PageErrorFallbackProps) {_const _isAuthConfigError = error?.message?.includes('Auth0') || 
                           error?.message?.includes('AUTH0') ||
                           error?.message?.includes('authentication') ||
                           error?.message?.includes('environment'),

  const _handleRefresh = () => {
    if (resetErrorBoundary) {
<<<<<<< HEAD
      resetErrorBoundary()
    } else {
      window.location.reload()
    }
  },

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
=======
      resetErrorBoundary();} else {_window.location.reload();}
  };

  return (
    <div className="min-h-screen bg-zion-blue flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {_/* Main Error Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6">
          <div className="text-center mb-6">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {_pageName ? `${pageName} Unavailable` : 'Page Unavailable'}
            </h1>
            <p className="text-gray-600">
              {_isAuthConfigError 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ? 'This page cannot load due to missing authentication configuration'
                : 'An unexpected error occurred while loading this page'}
            </p>
          </div>

<<<<<<< HEAD
          {isAuthConfigError && (
            <div className=&quot;bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6&quot;>
              <div className=&quot;flex&quot;>
                <Settings className=&quot;h-5 w-5 text-yellow-600 mt-0.5 mr-3&quot; />
=======
          {_isAuthConfigError && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex">
                <Settings className="h-5 w-5 text-yellow-600 mt-0.5 mr-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

<<<<<<< HEAD
          {error?.message && (
            <details className=&quot;bg-gray-50 rounded-lg p-4 mb-6&quot;>
              <summary className=&quot;cursor-pointer text-gray-700 font-medium&quot;>
=======
          {_error?.message && (
            <details className="bg-gray-50 rounded-lg p-4 mb-6">
              <summary className="cursor-pointer text-gray-700 font-medium">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Technical Details
              </summary>
              <pre className=&quot;mt-2 text-sm text-gray-600 whitespace-pre-wrap break-all overflow-auto&quot;>
                {error.message}
              </pre>
            </details>
          )}

<<<<<<< HEAD
          {/* Action Buttons */}
          <div className=&quot;flex flex-col sm:flex-row gap-3 mb-6&quot;>
            <button 
              onClick={handleRefresh}
              className=&quot;flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors&quot;
=======
          {_/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button 
              onClick={_handleRefresh}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

<<<<<<< HEAD
          {/* Navigation Options */}
          <div className=&quot;border-t pt-6&quot;>
            <h3 className=&quot;font-semibold text-gray-900 mb-3&quot;>You can also visit:</h3>
            <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-3 text-sm&quot;>
              <Link href=&quot;/marketplace&quot; className=&quot;text-blue-600 hover:underline&quot;>
=======
          {_/* Navigation Options */}
          <div className="border-t pt-6">
            <h3 className="font-semibold text-gray-900 mb-3">You can also visit:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <Link href="/marketplace" className="text-blue-600 hover:underline">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

<<<<<<< HEAD
        {/* Support Information */}
<<<<<<< HEAD
=======
        {_/* Support Information */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <div className="bg-gray-800 text-white rounded-lg p-6 text-center">
          <p className="mb-3">Need help? Contact our support team</p>
          <div className="flex flex-col sm: flex-row gap-3 justify-center">
=======
        <div className=&quot;bg-gray-800 text-white rounded-lg p-6 text-center&quot;>
          <p className=&quot;mb-3&quot;>Need help? Contact our support team</p>
          <div className=&quot;flex flex-col sm:flex-row gap-3 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
  )
}

<<<<<<< HEAD
interface PageErrorBoundaryProps {
  children: React.ReactNode,
  pageName?: string,
  fallback?: React.ComponentType<FallbackProps>
}

export default function PageErrorBoundary({ 
  children, 
  pageName, 
  fallback 
}: PageErrorBoundaryProps) {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    prodLogError(`PageErrorBoundary caught error on ${pageName || 'unknown page'}:`, error),
    
    logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, {
      page: pageName || 'unknown',
      componentStack: errorInfo.componentStack || undefined,
      errorBoundary: 'PageErrorBoundary',
      timestamp: new Date().toISOString()
    })
  },

  const FallbackComponent = fallback || ((props: FallbackProps) => (
    <PageErrorFallback {...props} pageName={pageName} />
  )),
=======
interface PageErrorBoundaryProps {_children: React.ReactNode;
  pageName?: string;
  fallback?: React.ComponentType<FallbackProps>;}

export default function PageErrorBoundary(_{_children, _pageName, _fallback}: PageErrorBoundaryProps) {_const _handleError = (_error: Error, _errorInfo: React.ErrorInfo) => {
    prodLogError(`PageErrorBoundary caught error on ${pageName || 'unknown page'}:`, error);
    
    logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, {_page: pageName || 'unknown', _componentStack: errorInfo.componentStack || undefined, _errorBoundary: 'PageErrorBoundary', _timestamp: new Date().toISOString()});
  };

  const _FallbackComponent = fallback || (_(props: FallbackProps) => (
    <PageErrorFallback {_...props} pageName={_pageName} />
  ));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<ErrorBoundary
      FallbackComponent={_FallbackComponent}
      onError={_handleError}
      onReset={_() => {
        // Reset any application state if needed
        logInfo(`Resetting error boundary for ${pageName || 'page'}`)
      }}
    >
      {_children}
    </ErrorBoundary>
  )
} 