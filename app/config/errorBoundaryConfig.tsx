'use client';
import React from 'react';
/**
* Error Boundary Configuration
* Centralized configuration for error handling across the application
*/
export interface ErrorBoundaryConfig {
/**
* Whether to log errors to console
*/
logErrors: boolean
/**
* Whether to show detailed error messages
*/
showDetails: boolean
/**
* Whether to send errors to external service
*/
reportErrors: boolean
/**
* Error reporting endpoint
*/
reportingEndpoint?: string
/**
* Whether to show error overlay in development
*/
showErrorOverlay: boolean
/**
* Maximum number of errors to store
*/
maxStoredErrors: number
/**
* Custom error messages by error type
*/
<<<<<<< HEAD
customMessages: Record<string, string>/**
* Fallback UI components
*/
fallbackComponents: {,
    default: React.ComponentType</string><{ error: Error; resetError: () => void }>
network: React.ComponentType<{ error: Error; resetError: () => void }>
notFound: React.ComponentType<{ error: Error; resetError: () => void }>}
=======
customMessage,
  s: Record<string, string>
/**
* Fallback UI components
*/
fallbackComponents: {,}</string>
    default: React.ComponentType<{ error: Error; resetErro,
  r: () => void }>
network: React.ComponentType<{ error: Error; resetErro,
  r: () => void }>
notFound: React.ComponentType<{ error: Error; resetErro,
  r: () => void }>}
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
/**
* Default error messages
*/
const DEFAULT_ERROR_MESSAGES = {

default: 'Something went wrong. Please try again.',
    network: 'Network connection issue. Please check your internet connection.',
notFound: 'The requested resource was not found.',
    timeout: 'Request timed out. Please try again.',
serverError: 'Server error occurred. Please try again later.',
    validation: 'Validation error. Please check your input.',
};
/**
* Get error boundary configuration based on environment
*/
export function getErrorBoundaryConfig(): ErrorBoundaryConfig {return {
logErrors: true,
<<<<<<< HEAD
    showDetails: isDevelopment,
reportErrors: !isDevelopment,
    reportingEndpoint: process.env.REACT_APP_ERROR_REPORTING_ENDPOINT,
showErrorOverlay: isDevelopment,
    maxStoredErrors: 50,
customMessages: DEFAULT_ERROR_MESSAGES,
    fallbackComponents: {,
default: DefaultErrorFallback,

    network: NetworkErrorFallback,
notFound: NotFoundFallback}}
}

=======
    showDetails: isDevelopment
reportError,
  s: !isDevelopment,
    reportingEndpoint: process.env.REACT_APP_ERROR_REPORTING_ENDPOINT
showErrorOverla,
  y: isDevelopment,
    maxStoredErrors: 50
customMessage,
  s: DEFAULT_ERROR_MESSAGES,
    fallbackComponents: {
defaul,
  t: DefaultErrorFallback,
    network: NetworkErrorFallback
notFoun,
  d: NotFoundFallback}
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
/**
* Default error fallback component
*/;
function DefaultErrorFallback({ error, resetError }: { error: Error; resetErro,)
  r: () => void }) {
return (
<<<<<<< HEAD
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
</div><div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
</div><svg
className="w-6 h-6 text-red-600"
fill="none"
stroke="currentColor"
viewBox="0 0 24 24"
>
</svg><path
=======
    <div className="min-h-screen flex items-center justify-centerbg-gray-50px-4">
<div className="max-w-md w-full bg-white rounded-lgshadow-lgp-6">
<div className="flex items-center justify-center w-12 h-12 mx-autobg-red-100rounded-full">
<svg
className="w-6h-6text-red-600"
fill="none"
stroke="currentColor"
viewBox="0 0 24 24"
 />
<path
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth = {
2
};
d="M6 18L18 6M6 6l12 12"
<<<<<<< HEAD
/>
</path></svg>
</div>
=======
/ />
</svg>

>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
<h2 className="mt-4 text-2xl font-boldtext-centertext-gray-900">Oops! Something went wrong</h2>
<p className="mt-2text-centertext-gray-600">
            {error.message || 'An unexpected error occurred'}
          </p>
{process.env['NODE_ENV'] === 'development' && (}
<pre className="mt-4 p-4 bg-gray-100 roundedtext-xsoverflow-auto">{error.stack}</pre>
)}
<<<<<<< HEAD
<div className="mt-6 flex gap-4">
</div><button
onClick={resetError}
className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover: bg-blue-700 transition-colors">Try Again</button>,
=======
<div className="mt-6flexgap-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
<button
onClick = {
resetError
};
className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700transition-colors">Try Again</button>,
<button,
onClick={() =>(window.location.href = '/')}</button>
<<<<<<< HEAD
className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover: bg-gray-300 transition-colors">,
=======
className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
Go Home
</



/**
* Network error fallback component
*/
function NetworkErrorFallback({ resetError }: { error: Error; resetErro,)
  r: () => void }) {
return (
<<<<<<< HEAD
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
</div><div className="flex items-center justify-center w-12 h-12 mx-auto bg-yellow-100 rounded-full">
</div><svg
className="w-6 h-6 text-yellow-600"
fill="none"
stroke="currentColor"
viewBox="0 0 24 24"
>
</svg><path
=======
    <div className="min-h-screen flex items-center justify-centerbg-gray-50px-4">
<div className="max-w-md w-full bg-white rounded-lgshadow-lgp-6">
<div className="flex items-center justify-center w-12 h-12 mx-autobg-yellow-100rounded-full">
<svg
className="w-6h-6text-yellow-600"
fill="none"
stroke="currentColor"
viewBox="0 0 24 24"
 />
<path
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth = {
2
};
d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
<<<<<<< HEAD
/>
</path></svg>
</div>
<h2 className="mt-4 text-2xl font-bold text-center text-gray-900">Connection Issue</h2>
<p className="mt-2 text-center text-gray-600">Unable to connect to the server. Please check your internet connection and try again.</p>
<div className="mt-6">
</div><button
onClick={resetError}
className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover: bg-blue-700 transition-colors">Retry Connection</button>,
=======
/ />
</svg>
</div>
<h2 className="mt-4 text-2xl font-boldtext-centertext-gray-900">Connection Issue</h2>
<p className="mt-2text-centertext-gray-600">
            Unable to connect to the server. Please check your internet connection and try again.
          </p>
<div className="mt-6" />
<button
onClick = {
resetError
};
className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700transition-colors">Retry Connection</button>
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
</div>
</div>
</div>
/**
* Not found error fallback component
*/
function NotFoundFallback(): JSX.Element {
return (
<<<<<<< HEAD
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full text-center">
</div><h1 className="text-6xl font-bold text-gray-900">404</h1>
<h2 className="mt-4 text-2xl font-bold text-gray-900">Page Not Found</h2>
<p className="mt-2 text-gray-600">The page you're looking for doesn't exist or has been moved.</p>
<div className="mt-6 flex gap-4 justify-center">
</div><button
onClick={() =>(window.location.href = '/')}</button>
className="bg-blue-600 text-white px-6 py-2 rounded-lg hover: bg-blue-700 transition-colors">,
=======
    <div className="min-h-screen flex items-center justify-centerbg-gray-50px-4" />
<div className="max-w-mdw-fulltext-center" />
<h1 className="text-6xlfont-boldtext-gray-900">
            404
          </h1>
<h2 className="mt-4 text-2xlfont-boldtext-gray-900">Page Not Found</h2>
<p className="mt-2text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
<div className="mt-6 flexgap-4justify-center" />,
<button,
onClick={() =>(window.location.href = '/')}</button>
className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
Go Home
</,
<button,
onClick={() =>window.history.back()}</button>
<<<<<<< HEAD
className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover: bg-gray-300 transition-colors">,
=======
className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
Go Back
</
</div>
</div>
</div>
/**
* Get error type from error object
*/
<<<<<<< HEAD
export function getErrorType(error: Error): keyof typeof DEFAULT_ERROR_MESSAGES {,
=======
export function getErrorType(erro,)
  r: Error): keyof typeof DEFAULT_ERROR_MESSAGES {
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
  if (error.message.includes('Network') || error.message.includes('fetch')) {
return 'network',
if (error.message.includes('404') || error.message.includes('not found')) {,
  return 'notFound'}
if (error.message.includes('timeout')) {
  return 'timeout'}
if (error.message.includes('500') || error.message.includes('server')) {
  return 'serverError'}
if (error.message.includes('validation')) {
  return 'validation'}
return 'default'
/**
* Format error for logging
*/
export function formatErrorForLogging(error: Error): Record<string, unknown> {
return {
message: error.message,
<<<<<<< HEAD
    stack: error.stack,
name: error.name,
    type: getErrorType(error),
timestamp: new Date().toISOString(),
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
url: typeof window !== 'undefined' ? window.location.href : 'unknown'}

}


export default getErrorBoundaryConfig
=======
    stack: error.stack
nam,
  e: error.name,
    type: getErrorType(error)
timestam,
  p: new Date().toISOString(),
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown'
ur,
  l: typeof window !== 'undefined' ? window.location.href : 'unknown'}
export default getErrorBoundaryConfig</string>
}}}}}}}
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
