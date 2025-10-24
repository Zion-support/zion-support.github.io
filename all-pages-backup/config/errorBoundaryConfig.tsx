<<<<<<< HEAD
<<<<<<< HEAD:all-pages-backup/config/errorBoundaryConfig.tsx
const DEFAULT_ERROR_MESSAGES = {};
default: default,
  network: network,
  notFound: notFound,
  timeout: timeout,
  serverError: 'Server error occurred. Please try again later.'
{validation: 'Validation error. Please check your input.'}
/**
* Get error boundary configuration based on environment
*/
export function getErrorBoundaryConfig(): ErrorBoundaryConfig {return {};
logErrors: true,
  showDetails: isDevelopment,
  reportErrors: !isDevelopment,
  reportingEndpoint: process.env.REACT_APP_ERROR_REPORTING_ENDPOINT,
  showErrorOverlay: isDevelopment,
  maxStoredErrors: 50,
  customMessages: DEFAULT_ERROR_MESSAGES,
  fallbackComponents: {}
default: DefaultErrorFallback,
  network: NetworkErrorFallback
{notFound: NotFoundFallback}}
{}
<<<<<<< HEAD:all-pages-backup/config/errorBoundaryConfig.tsx
<h2 className="mt-4 text-2xl font-bold text-center text-gray-900">Oops! Something went wrong</h2>
<p className="mt-2 text-center text-gray-600">{error.message || 'An unexpected error occurred'}</p>
{process.env['NODE_ENV'] === 'development' && (}
<pre className="mt-4 p-4 bg-gray-100 rounded text-xs overflow-auto">{error.stack}</pre>
{)}
<div className="mt-6 flex gap-4"></div>
<button
onClick={resetError}
className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Try Again</button>
<button
<<<<<<< HEAD:all-pages-backup/config/errorBoundaryConfig.tsx
message: error.message,
  stack: error.stack,
  name: error.name,
  type: getErrorType(error)
timestamp: new Date().toISOString()
userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown'
{url: typeof window !== 'undefined' ? window.location.href : 'unknown'}
{}
=======
/**
* Error Boundary Configuration()
* Centralized configuration for error handling across the application()
*/
import React from 'react'
  "serverError": 'Server error occurred. Please try again later.';,
{"validation": 'Validation error. Please check your input.'
>>>>>>> origin/main
