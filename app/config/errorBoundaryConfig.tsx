/**
* Error Boundary Configuration;
* Centralized configuration for error handling across the application;
*/
import React from 'react'
export interface ErrorBoundaryConfig {
  /**
* Whether to log errors to console;
*/
logErrors: boolean,
/**
* Whether to show detailed error messages;
*/
showDetails: boolean,
/**
* Whether to send errors to external service;
*/
reportErrors: boolean,
/**
* Error reporting endpoint;
*/
reportingEndpoint?: string;
/**
* Whether to show error overlay in development;
*/
showErrorOverlay: boolean,
/**
* Maximum number of errors to store;
*/
maxStoredErrors: number,
/**
* Custom error messages by error type;
*/
customMessages: Record<string , string   /></string>
/**
* Fallback UI components;
*/
fallbackComponents: {;
default: React.ComponentType<{ error: Error resetError: () =>void }</
network: React.ComponentType<{error: Error; resetError: () =>void }</
notFound: React.ComponentType<{error: Error; resetError: () =>void }>
}
}
/**
* Default error messages;
*/
const DEFAULT_ERROR_MESSAGES = {default: 'Something went wrong. Please try again.',
network: 'Network connection issue. Please check your internet connection.',
notFound: 'The requested resource was not found.',
timeout: 'Request timed out. Please try again.',
serverError: 'Server error occurred. Please try again later.',
validation: 'Validation error. Please check your input.'}
/**
* Get error boundary configuration based on environment;
*/
export function getErrorBoundaryConfig(): ErrorBoundaryConfig {return {
logErrors: true,
showDetails: isDevelopment,
reportErrors: !isDevelopment,
reportingEndpoint: process.env.REACT_APP_ERROR_REPORTING_ENDPOINT,
showErrorOverlay: isDevelopment,
maxStoredErrors: 50,
customMessages: DEFAULT_ERROR_MESSAGES,
fallbackComponents: {
default: DefaultErrorFallback,
network: NetworkErrorFallback,
notFound: NotFoundFallback},
}
}
/**
* Default error fallback component;
*/
function DefaultErrorFallback({ error, resetError }: {error: Error; resetError: () =</ void }) {
return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4"></div>
<div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6"></div>
<div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full"></div>
<svg className="w-6 h-6 text-red-600"
fill="none"
stroke="currentColor"
viewBox="0 0 24 24"   /></svg>
<path strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
d="M6 18L18 6M6 6l12 12"
   /></path>
</svg>
</div>
<h2 className="mt-4 text-2xl font-bold text-center text-gray-900">Oops! Something went wrong</h2>
<p className="mt-2 text-center text-gray-600">{error.message || 'An unexpected error occurred'}</p>

  if (error.message.includes('404') || error.message.includes('not found')) {
return 'notFound';}
}
if (error.message.includes('timeout')) {
return 'timeout';}
}
if (error.message.includes('500') || error.message.includes('server')) {
return 'serverError';}
}
if (error.message.includes('validation')) {
return 'validation';}
}
return 'default'
}
/**
* Format error for logging;
*/
export function formatErrorForLogging(error: Error): Record<string, unknown> {return {
message: error.message,
stack: error.stack,
name: error.name,
type: getErrorType(error),
timestamp: new Date().toISOString(),
userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
url: typeof window !== 'undefined' ? window.location.href : 'unknown'}
}
export default getErrorBoundaryConfig;