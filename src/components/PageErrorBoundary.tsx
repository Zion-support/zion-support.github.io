<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/PageErrorBoundary.tsx

=======
import React from 'react',
import Link from 'next/link';
import { ErrorBoundary, FallbackProps  } from 'react-error-boundary';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
import React from 'react',
import Link from 'next/link';
import { ErrorBoundary, FallbackProps  } from 'react-error-boundary';
=======
import React from 'react'
import Link from 'next/link'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { AlertTriangle, Home, RefreshCw, Settings } from 'lucide-react'

import { logErrorToProduction } from '@/utils/productionLogger'
import {
  logInfo
  logErrorToProduction as prodLogError
} from '@/utils/productionLogger'
interface PageErrorFallbackProps extends FallbackProps {
  pageName?: string
function PageErrorFallback({
  error
  resetErrorBoundary
  pageName
}: PageErrorFallbackProps) {
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const isAuthConfigError =
    error?.message?.includes('Auth0') |
    error?.message?.includes('AUTH0') |
    error?.message?.includes('authentication') |
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  const isAuthConfigError = null;
    error?.message?.includes('Auth0') ||
    error?.message?.includes('AUTH0') ||
    error?.message?.includes('authentication') ||
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    error?.message?.includes('environment')
  const handleRefresh = () => {
    if (resetErrorBoundary) {
      resetErrorBoundary()
    } else {
      window.location.reload()
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from 'react';
import Link from 'next/link';
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/PageErrorBoundary.tsx
=======
=======
import React from 'react';
import Link from 'next/link';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { AlertTriangle, Home, RefreshCw, Settings } from 'lucide-react';
import {logErrorToProduction} from '@/utils/productionLogger',;
import { logInfo, logErrorToProduction as prodLogError } from '@/utils/productionLogger',;
interface PageErrorFallbackProps extends FallbackProps {;
  pageName?: string;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/PageErrorBoundary.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
;
function PageErrorFallback({ error, resetErrorBoundary, pageName }: PageErrorFallbackProps) {;
  const isAuthConfigError = error?.message?.includes('Auth0') ||;
                           error?.message?.includes('AUTH0') ||;
                           error?.message?.includes('authentication') ||;
                           error?.message?.includes('environment'),;
<<<<<<< HEAD
========
function PageErrorFallback(): any ({;
  error,;
  resetErrorBoundary,;
  pageName,;
}: PageErrorFallbackProps) {;
  const isAuthConfigError =;
    error?.message?.includes('Auth0') ||;
    error?.message?.includes('AUTH0') ||;
    error?.message?.includes('authentication') ||;
    error?.message?.includes('environment');
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/PageErrorBoundary.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleRefresh = () => {;
    if (resetErrorBoundary) {;
      resetErrorBoundary();
    } else {;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/PageErrorBoundary.tsx
      window.location.reload();
========
      window && window.location.reload();
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/PageErrorBoundary.tsx
    }

  },

<<<<<<< HEAD
  return (
=======
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <div className="min-h-screen bg-zion-blue flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
ursor/fix-website-loading-errors-and-merge-6662
  return (
    <div className='min-h-screen bg-zion-blue flex items-center justify-center p-4'>;
      <div className='max-w-2xl w-full'>;
>>>>>>>         {/* Main Error Card */}
        <div className='bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6'>;
          <div className='text-center mb-6'>;
            <div className='mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center'>;
              <AlertTriangle className='h-8 w-8 text-red-600' />;
            </div>;
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>;
              {pageName ? `${pageName} Unavailable` : 'Page Unavailable'}
            </h1>;
            <p className='text-gray-600'>;
              {isAuthConfigError;
                ? 'This page cannot load due to missing authentication configuration';
                : 'An unexpected error occurred while loading this page'}
<<<<<<<< HEAD:src/components/PageErrorBoundary.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/PageErrorBoundary.tsx
import React from 'react';
import Link from 'next / link';
import { ErrorBoundary, FallbackProps } from 'react - error - boundary';
import { AlertTriangle, Home, RefreshCw, Settings } from 'lucide-react';
import { logErrorToProduction } from '@/utils / production_logger';
import {
  log_info,
  logErrorToProduction as prodLogError,
} from '@/utils / production_logger';
interface PageErrorFallbackProps extends FallbackProps {
  page_name?: string;
/**
 * PageErrorFallback - Function description
 */
function PageErrorFallback() {
  const isAuthConfigError =;
    error?.message?.includes ('Auth0') ||;
    error?.message?.includes ('AUTH0') ||;
    error?.message?.includes ('authentication') ||;
    error?.message?.includes ('environment');
  const handle_refresh = () =>: any {
    // Check condition
if ( {) {
  $2
}
      resetErrorBoundary ();
    } else {
      window.location.reload ();
    }
  }
  return (
    <div className='min - h-screen bg - zion - blue flex items - center justify - center p - 4'>;
      <div className='max - w-2xl w - full'>;
        {/* Main Error Card */}
        <div className='bg - white rounded - 2xl shadow - xl border border - red - 200 p - 8 mb - 6'>;
          <div className='text - center mb - 6'>;
            <div className='mx - auto mb - 4 h - 16 w - 16 rounded - full bg - red - 100 flex items - center justify - center'>;
              <AlertTriangle className='h - 8 w - 8 text - red - 600' />;
            </div>;
            <h1 className='text - 3xl font - bold text - gray - 900 mb - 2'>;
              {page_name ? `${page_name} Unavailable` : 'Page Unavailable'}
            </h1>;
            <p className='text - gray - 600'>;
              {isAuthConfigError;
                ? 'This page cannot load due to missing authentication configuration';
                : 'An unexpected error occurred while loading this page'}
            </p>;
          </div>;
          {isAuthConfigError && (
            <div className='bg - yellow - 50 border border - yellow - 200 rounded - lg p - 4 mb - 6'>;
              <div className='flex'>;
                <Settings className='h - 5 w - 5 text - yellow - 600 mt - 0.5 mr - 3' />;
                <div>;
                  <h3 className='font - semibold text - yellow - 800 mb - 1'>;
                    Configuration Required;
                  </h3>;
                  <p className='text - yellow - 700 text - sm'>;
                    This application requires Auth0 authentication to be;
                    properly configured. Please contact your system;
                    administrator.;
                  </p>;
                </div>;
              </div>;
            </div>)}
<<<<<<<< HEAD:src/components/PageErrorBoundary.tsx

          {error?.message && (

========
          {error?.message && (
            <details className='bg - gray - 50 rounded - lg p - 4 mb - 6'>;
              <summary className='cursor - pointer text - gray - 700 font - medium'>;
                Technical Details;
              </summary>;
              <pre className='mt - 2 text - sm text - gray - 600 whitespace - pre - wrap break - all overflow - auto'>;
                {error.message}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/PageErrorBoundary.tsx
            </p>;
          </div>;
          {isAuthConfigError && (;
            <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6'>;
              <div className='flex'>;
                <Settings className='h-5 w-5 text-yellow-600 mt-0 && 0.5 mr-3' />;
                <div>;
                  <h3 className='font-semibold text-yellow-800 mb-1'>;
                    Configuration Required;
                  </h3>;
                  <p className='text-yellow-700 text-sm'>;
                    This application requires Auth0 authentication to be;
                    properly configured. Please contact your system;
                    administrator.;
=======
import React from 'react',;
import Link from 'next/link',;
import { ErrorBoundary, FallbackProps } from 'react-error-boundary',;
import { AlertTriangle, Home, RefreshCw, Settings } from 'lucide-react';
import {logErrorToProduction} from '@/utils/productionLogger',;
import { logInfo, logErrorToProduction as prodLogError } from '@/utils/productionLogger',;
interface PageErrorFallbackProps extends FallbackProps {;
  pageName?:string,;
}
;
function PageErrorFallback({ error, resetErrorBoundary, pageName } PageErrorFallbackProps) {;
  const isAuthConfigError = error?.message?.includes('Auth0') || ;
                           error?.message?.includes('AUTH0') ||;
                           error?.message?.includes('authentication') ||;
                           error?.message?.includes('environment'),;
;
  const handleRefresh = () => {;
    if (resetErrorBoundary) {;
      resetErrorBoundary(),;
    } else {;
      window.location.reload(),;
    }
  },;
;
  return (;
    <div className="min-h-screen bg-zion-blue flex items-center justify-center p-4">;
      <div className="max-w-2xl w-full">;
        {/* Main Error Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6">;
          <div className="text-center mb-6">;
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">;
              <AlertTriangle className="h-8 w-8 text-red-600" />;
            </div>;
            <h1 className="text-3xl font-bold text-gray-900 mb-2">;
              {pageName ? `${pageName} Unavailable` :'Page Unavailable'}
            </h1>;
            <p className="text-gray-600">;
              {isAuthConfigError ;
                ? 'This page cannot load due to missing authentication configuration';
                :'An unexpected error occurred while loading this page';
              }
            </p>;
          </div>;
;
          {isAuthConfigError && (;
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">;
              <div className="flex">;
                <Settings className="h-5 w-5 text-yellow-600 mt-0.5 mr-3" />;
                <div>;
                  <h3 className="font-semibold text-yellow-800 mb-1">Configuration Required</h3>;
                  <p className="text-yellow-700 text-sm">;
                    This application requires Auth0 authentication to be properly configured. ;
                    Please contact your system administrator.;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </p>;
                </div>;
              </div>;
            </div>;
          )}
<<<<<<< HEAD
          {error?.message && (;
            <details className='bg-gray-50 rounded-lg p-4 mb-6'>;
              <summary className='cursor-pointer text-gray-700 font-medium'>;
                Technical Details;
              </summary>;
              <pre className='mt-2 text-sm text-gray-600 whitespace-pre-wrap break-all overflow-auto'>;
                {error && error.message}
=======
;
          {error?.message && (;
            <details className="bg-gray-50 rounded-lg p-4 mb-6">;
              <summary className="cursor-pointer text-gray-700 font-medium">;
                Technical Details;
              </summary>;
              <pre className="mt-2 text-sm text-gray-600 whitespace-pre-wrap break-all overflow-auto">;                {error.message}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </pre>;
            </details>;
<<<<<<<< HEAD:src/components/PageErrorBoundary.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/PageErrorBoundary.tsx
          )}
;
          {/* Action Buttons */}
<<<<<<< HEAD
          <div className='flex flex-col sm:flex-row gap-3 mb-6'>;
            <button
              onClick={handleRefresh}
<<<<<<<< HEAD:src/components/PageErrorBoundary.tsx

=======
      window.location.reload();
    }
  },

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="min-h-screen bg-zion-blue flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Error Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6">
          <div className="text-center mb-6">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {pageName ? `${pageName} Unavailable` : 'Page Unavailable'}
            </h1>
            <p className="text-gray-600">
              {isAuthConfigError 
                ? 'This page cannot load due to missing authentication configuration'
                : 'An unexpected error occurred while loading this page'
              }
            </p>
          </div>
          {isAuthConfigError && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex">
                <Settings className="h-5 w-5 text-yellow-600 mt-0.5 mr-3" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-1">Configuration Required</h3>
                  <p className="text-yellow-700 text-sm">
                    This application requires Auth0 authentication to be properly configured. 
                    Please contact your system administrator.
                  </p>
                </div>
              </div>
            </div>
          )}
          {error?.message && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <details className="bg-gray-50 rounded-lg p-4 mb-6">
              <summary className="cursor-pointer text-gray-700 font-medium">
                Technical Details
              </summary>
<<<<<<< HEAD
<<<<<<< HEAD

            >
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <pre className='mt-2 text-sm text-gray-600 whitespace-pre-wrap break-all overflow-auto'>
                {error.message}
              </pre>
            </details>
          )}
          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 mb-6'>
            <button
              onClick={handleRefresh}
              className='flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors'            >
              <RefreshCw className='w-4 h-4 mr-2' />
              Try Again
            </button>
            <Link
              href='/'
              className='flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors'
<<<<<<< HEAD
>>>>>>>             >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <Home className="w-4 h-4 mr-2" />
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
=======
              <pre className="mt-2 text-sm text-gray-600 whitespace-pre-wrap break-all overflow-auto">
                {error.message}
              </pre>;
            </details>;
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button 
              onClick={handleRefresh}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </button>
            
            <Link 
              href="/"
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            >
              <Home className="w-4 h-4 mr-2" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Go Home
            </Link>
          </div>
          {/* Navigation Options */}
          <div className="border-t pt-6">
            <h3 className="font-semibold text-gray-900 mb-3">You can also visit:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <Link href="/marketplace" className="text-blue-600 hover:underline">
                Marketplace
              </Link>
              <Link href="/talent" className="text-blue-600 hover:underline">
                Talent
              </Link>
              <Link href="/services" className="text-blue-600 hover:underline">
                Services
              </Link>
              <Link href="/about" className="text-blue-600 hover:underline">
                About
              </Link>
            </div>
          </div>
        </div>
        {/* Support Information */}
        <div className="bg-gray-800 text-white rounded-lg p-6 text-center">
          <p className="mb-3">Need help? Contact our support team</p>
          <div className="flex flex-col sm: flex-row gap-3 justify-center">
            <a 
              href="mailto:support@zion.tech" 
              className="text-blue-400 hover:underline"
            >
              support@zion.tech
            </Link>
            <Link href="/status" className="text-blue-400 hover:underline">
              Service Status
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD

=======
  const FallbackComponent =
    fallback |
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
interface PageErrorBoundaryProps {
  children: React.ReactNode
  pageName?: string
  fallback?: React.ComponentType<FallbackProps>
export default function PageErrorBoundary({
  children
  pageName
  fallback
}: PageErrorBoundaryProps) {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    prodLogError(
      `PageErrorBoundary caught error on ${pageName |'unknown page'}:`
      error
    )
    logErrorToProduction(
      error instanceof Error ? error.message : String(error)
      error instanceof Error ? error : undefined
      {
        page: pageName |'unknown'
        componentStack: errorInfo.componentStack |undefined
        errorBoundary: 'PageErrorBoundary'
        timestamp: new Date().toISOString()
      }
    )
  }
<<<<<<< HEAD
  const FallbackComponent =
    fallback |
=======
  const FallbackComponent = null;
    fallback ||
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    ((props: FallbackProps) => (
      <PageErrorFallback {...props} pageName={pageName} />
    ))
      onReset={() => {        // Reset any application state if needed
<<<<<<< HEAD
<<<<<<< HEAD
=======
        logInfo(`Resetting error boundary for ${pageName |'page'}`)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

          <div className="flex flex-col sm:flex-row gap-3 mb-6">;
            <button;
========
              className='flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors'             aria-label="Button">;
              <RefreshCw className='w-4 h-4 mr-2' />;
              Try Again;
            </button>;
            <Link
              href='/'
              className='flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors'>;
              <Home className='w-4 h-4 mr-2' />;
              Go Home;
            </Link>;
          </div>;
          {/* Navigation Options */}
          <div className='border-t pt-6'>;
            <h3 className='font-semibold text-gray-900 mb-3'>;
              You can also visit:;
            </h3>;
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 text-sm'>;
              <Link
                href='/marketplace'
                className='text-blue-600 hover:underline'>;
                Marketplace;
              </Link>;
              <Link href='/talent' className='text-blue-600 hover:underline'>;
                Talent;
              </Link>;
              <Link href='/services' className='text-blue-600 hover:underline'>;
                Services;
              </Link>;
              <Link href='/about' className='text-blue-600 hover:underline'>;
              </pre>;
            </details>)}
          {/* Action Buttons */}
          <div className='flex flex - col sm:flex - row gap - 3 mb - 6'>;
            <button;
              on_click={handle_refresh}
              className='flex - 1 bg - blue - 600 hover:bg - blue - 700 text - white flex items - center justify - center px - 4 py - 2 rounded - lg font - medium transition - colors'            >;
              <RefreshCw className='w - 4 h - 4 mr - 2' />;
              Try Again;
            </button>;
            <Link;
              href='/';
              className='flex - 1 bg - gray - 100 hover:bg - gray - 200 text - gray - 700 flex items - center justify - center px - 4 py - 2 rounded - lg font - medium transition - colors';
            >;
              <Home className='w - 4 h - 4 mr - 2' />;
              Go Home;
            </Link>;
          </div>;
          {/* Navigation Options */}
          <div className='border - t pt - 6'>;
            <h3 className='font - semibold text - gray - 900 mb - 3'>;
              You can also visit:;
            </h3>;
            <div className='grid grid - cols - 2 md:grid - cols - 4 gap - 3 text - sm'>;
              <Link;
                href='/marketplace';
                className='text - blue - 600 hover:underline';
              >;
                Marketplace;
              </Link>;
              <Link href='/talent' className='text - blue - 600 hover:underline'>;
                Talent;
              </Link>;
              <Link href='/services' className='text - blue - 600 hover:underline'>;
                Services;
              </Link>;
              <Link href='/about' className='text - blue - 600 hover:underline'>;
=======
          <div className="flex flex-col sm:flex-row gap-3 mb-6">;
            <button ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/PageErrorBoundary.tsx
=======
        logInfo(`Resetting error boundary for ${pageName |'page'}`)

=======
        logInfo(`Resetting error boundary for ${pageName || 'page'}`)
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          <div className="flex flex-col sm:flex-row gap-3 mb-6">;
            <button;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              onClick={handleRefresh}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors";
            >;
              <RefreshCw className="w-4 h-4 mr-2" />;
              Try Again;
            </button>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/PageErrorBoundary.tsx
            <Link;
========
            ;
            <Link ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/PageErrorBoundary.tsx
=======
            <Link;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              href="/";
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors";
            >;
              <Home className="w-4 h-4 mr-2" />;
              Go Home;
            </Link>;
          </div>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/PageErrorBoundary.tsx
========
;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/PageErrorBoundary.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {/* Navigation Options */}
          <div className="border-t pt-6">;
            <h3 className="font-semibold text-gray-900 mb-3">You can also visit:</h3>;
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">;
              <Link href="/marketplace" className="text-blue-600 hover:underline">;
                Marketplace;
              </Link>;
              <Link href="/talent" className="text-blue-600 hover:underline">;
                Talent;
              </Link>;
              <Link href="/services" className="text-blue-600 hover:underline">;
                Services;
              </Link>;
              <Link href="/about" className="text-blue-600 hover:underline">;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/PageErrorBoundary.tsx
========
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/PageErrorBoundary.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                About;
              </Link>;
            </div>;
          </div>;
        </div>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/PageErrorBoundary.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Support Information */}
        <div className="bg-gray-800 text-white rounded-lg p-6 text-center">;
          <p className="mb-3">Need help? Contact our support team</p>;
          <div className="flex flex-col sm: flex-row gap-3 justify-center">;
            <a;
              href="mailto:support@zion.tech";
              className="text-blue-400 hover:underline";
            >;
              support@zion.tech;
<<<<<<< HEAD

========
<<<<<<< HEAD
        {/* Support Information */}
        <div className='bg - gray - 800 text - white rounded - lg p - 6 text - center'>;
          <p className='mb - 3'>Need help? Contact our support team</p>;
          <div className='flex flex - col sm:flex - row gap - 3 justify - center'>;
            <a;
              href='mailto:support@zion.tech';
              className='text - blue - 400 hover:underline';
            >;
              support@zion.tech;
            </a>;
            <Link href='/status' className='text - blue - 400 hover:underline'>;
              Service Status;
            </Link>;
          </div>;
        </div>;
      </div>;
    </div>);
interface PageErrorBoundaryProps {
  children: React.ReactNode;
  page_name?: string;
  fallback?: React.ComponentType < FallbackProps>;
export default /**
 * PageErrorBoundary - Function description
 */
function PageErrorBoundary() {
  const handle_error = (error: Error, error_info: React.ErrorInfo) =>: any {
    prodLogError (
      `PageErrorBoundary caught error on ${page_name || 'unknown page'}:`,
      error);
    logErrorToProduction (
      error instanceof Error ? error.message : String (error),
      error instanceof Error ? error : undefined,
      {
        page: page_name || 'unknown',
        component_stack: error_info.component_stack || undefined,
        error_boundary: 'PageErrorBoundary',
        timestamp: new Date ().toISOString (),
      }
    );
  }
              href='mailto:support@zion && zion.tech'
              className='text-blue-400 hover:underline'>;
              support@zion && zion.tech;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/PageErrorBoundary.tsx
            </a>;
            <Link href='/status' className='text-blue-400 hover:underline'>;
=======
;
        {/* Support Information */}
        <div className="bg-gray-800 text-white rounded-lg p-6 text-center">;
          <p className="mb-3">Need help? Contact our support team</p>;
          <div className="flex flex-col sm:flex-row gap-3 justify-center">;
            <a ;
              href="mailto:support@zion.tech" ;
              className="text-blue-400 hover:underline";
            >;
              support@zion.tech;
            </a>;
            <Link href="/status" className="text-blue-400 hover:underline">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
            </a>;
            <Link href="/status" className="text-blue-400 hover:underline">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Service Status;
            </Link>;
          </div>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
interface PageErrorBoundaryProps {;
  children: React && React.ReactNode;
  pageName?: string;
  fallback?: React && React.ComponentType<FallbackProps>;
const Component = React && React.memo(function PageErrorBoundary(): any ({;
  children,;
  pageName,;
  fallback,;
}: PageErrorBoundaryProps) {;
  const handleError = (error: Error, errorInfo: React && React.ErrorInfo) => {;
    prodLogError(;
      `PageErrorBoundary caught error on ${pageName || 'unknown page'}:`,;
      error;
    );
    logErrorToProduction(;
      error instanceof Error ? error && error.message : String(error),;
      error instanceof Error ? error : undefined,;
      {;
        page: pageName || 'unknown',;
        componentStack: errorInfo && errorInfo.componentStack || undefined,;
        errorBoundary: 'PageErrorBoundary',;
        timestamp: new Date().toISOString(),;
      }
    );
  };
  const FallbackComponent =;
    fallback ||;
    ((props: FallbackProps) => (;
      <PageErrorFallback {...props} pageName={pageName} />;
    ));
      onReset={() => {        // Reset any application state if needed;
        logInfo(`Resetting error boundary for ${pageName || 'page'}`);
<<<<<<<< HEAD:src/components/PageErrorBoundary.tsx
<<<<<<< HEAD

      }}
    >
      {children}
=======
>>>>>>>       }}
    >
      {children}
}
}
}
========
      }}
    >;
      {children}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/PageErrorBoundary.tsx
    </ErrorBoundary>;
  );
} ;
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
      }}
    >;
      {children}


} ;
<<<<<<<< HEAD:src/components/PageErrorBoundary.tsx
} ;
};
}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    </ErrorBoundary>;
  );
} ;

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/PageErrorBoundary.tsx
  const FallbackComponent =;
    fallback ||;
    ((props: FallbackProps) => (
      <PageErrorFallback {...props} page_name={page_name} />));
      on_reset={() => {        // Reset any application state if needed;
        log_info (`Resetting error boundary for ${page_name || 'page'}`);
      }}
    >;
      {children}
    </ErrorBoundary>);
=======
  );}
;
interface PageErrorBoundaryProps {;
  children:React.ReactNode,;
  pageName?:string,;
  fallback?:React.ComponentType<FallbackProps>;
}
;
export default function PageErrorBoundary({ ;
  children, ;
  pageName, ;
  fallback ;
} PageErrorBoundaryProps) {;
  const handleError = (error:Error, errorInfo:React.ErrorInfo) => {;
    prodLogError(`PageErrorBoundary caught error on ${pageName || 'unknown page'} `, error),;
    ;
    logErrorToProduction(error instanceof Error ? error.message :String(error), error instanceof Error ? error :undefined, {;
      page:pageName || 'unknown',;
      componentStack:errorInfo.componentStack || undefined,;
      errorBoundary:'PageErrorBoundary',;
      timestamp:new Date().toISOString();
    }),;
  },;
;
  const FallbackComponent = fallback || ((props:FallbackProps) => (;
    <PageErrorFallback {...props} pageName={pageName} />;
  )),;
;
=======
  );
}
;
interface PageErrorBoundaryProps {;
  children: React.ReactNode,;
  pageName?: string,;
  fallback?: React.ComponentType<FallbackProps>;
}
;
export default function PageErrorBoundary({;
  children,;
  pageName,;
  fallback;
}: PageErrorBoundaryProps) {;
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {;
    prodLogError(`PageErrorBoundary caught error on ${pageName || 'unknown page'}:`, error),;
    logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, {;
      page: pageName || 'unknown',;
      componentStack: errorInfo.componentStack || undefined,;
      errorBoundary: 'PageErrorBoundary',;
      timestamp: new Date().toISOString();
    });
  };
  const FallbackComponent = fallback || ((props: FallbackProps) => (;
    <PageErrorFallback {...props} pageName={pageName} />;
  ));
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <ErrorBoundary;
      FallbackComponent={FallbackComponent}
      onError={handleError}
      onReset={() => {;
        // Reset any application state if needed;
<<<<<<< HEAD
        logInfo(`Resetting error boundary for ${pageName || 'page'}`),;      }}
    >;
      {children}
    </ErrorBoundary>;
  ),;} 
 function PageErrorFallback ({;
  error,  resetErrorBoundary, pageName ;
}: PageErrorFallbackProps) {;
  const isAuthConfigError = error?.message?.includes ('Auth0') || error?.message?.includes ('AUTH0') || error?.message?.includes ('authentication') || error?.message?.includes ('environment');
const handleRefresh = () => {;
  if (resetErrorBoundary) {';
  ? 'This page cannot load due to missing authentication configuration' : 'An unexpected error occurred while loading this page' ;
}</p> </div> <div> <h3 className="font-semibold text-yellow-800 mb-1" >Configuration Required</h3> <p className="text-yellow-700 text-sm" > This application requires Auth0 authentication to be properly configured. Please contact your system administrator. </p> </div> </div> </div>) ";
}Technical Details </summary> <pre className="mt-2 text-sm text-gray-600 whitespace-pre-wrap break-all overflow-auto" > {;
  error.message ;
}</pre> </details>) ";
}> <RefreshCw className="w-4 h-4 mr-2" /> Try Again </button> <Link href="/" className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors" > <Home className="w-4 h-4 mr-2" /> Go Home </Link> </div> Marketplace </Link> <Link href="/talent" className="text-blue-600 hover:underline" > Talent </Link> <Link href="/services" className="text-blue-600 hover:underline" > Services </Link> <Link href="/about" className="text-blue-600 hover:underline" > About </Link> </div> </div> </div> <div className="bg-gray-800 text-white rounded-lg p-6 text-center"> <p className="mb-3">Need help? Contact our support team</p> <div className="flex flex-col sm: flex-row gap-3 justify-center"> mailto:support@zion.tech"className=" text-blue-400 hover:underline"> support@zion.tech </Link> <Link href=" /status"className=" text-blue-400 hover:underline" > Service Status </Link> </div> </div> </div> </div>) ;
}return (<ErrorBoundary FallbackComponent= {;
  FallbackComponent ;
}onError= {;
  handleError ;
}onReset= {;
  () => {;
  //Reset any application state if needed logInfo (`Resetting error boundary for $ {';
  pageName || 'page' ;
}`) ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
<<<<<<<< HEAD:src/components/PageErrorBoundary.tsx
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}> {;
  children ;
}</ErrorBoundary>) ;
}'"
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/PageErrorBoundary.tsx
=======
        logInfo(`Resetting error boundary for ${pageName || 'page'}`);
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }}
    >
      {children}
<<<<<<< HEAD
    </ErrorBoundary>
  )
<<<<<<< HEAD
}
}
}
=======
} ;
} ;
};
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    </ErrorBoundary>;
  );
} ;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
