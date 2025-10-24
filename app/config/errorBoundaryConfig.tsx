import React from 'react'
/
 Error Boundary Configuration Centralized configuration for error handling across the application /
export interface ErrorBoundaryConfig /
 Whether to log errors to console /
logErrors boolean /
 Whether to show detailed error messages /
showDetails boolean /
 Whether to send errors to external service /
reportErrors boolean /
 Error reporting endpoint /
reportingEndpoint string /
 Whether to show error overlay in development /
showErrorOverlay boolean /
 Maximum number of errors to store /
maxStoredErrors number /
 Custom error messages by error type /
customMessages Record<string string>/
 Fallback UI components /
fallbackComponents default ReactComponentType</string>< error Error resetError  => void >
network ReactComponentType< error Error resetError  => void >
notFound ReactComponentType< error Error resetError  => void >
/
 Default error messages /
const DEFAULT_ERROR_MESSAGES="default" 'Something went wrong Please try again'
    network 'Network connection issue Please check your internet connection'
notFound 'The requested resource was not found'
    timeout 'Request timed out Please try again'
serverError 'Server error occurred Please try again later'
    validation 'Validation error Please check your input'
/
 Get error boundary configuration based on environment /
export function getErrorBoundaryConfig ErrorBoundaryConfig return (logErrors true showDetails isDevelopment reportErrors isDevelopment reportingEndpoint processenvREACT_APP_ERROR_REPORTING_ENDPOINT showErrorOverlay isDevelopment maxStoredErrors 50 customMessages DEFAULT_ERROR_MESSAGES fallbackComponents default DefaultErrorFallback network NetworkErrorFallback notFound NotFoundFallback