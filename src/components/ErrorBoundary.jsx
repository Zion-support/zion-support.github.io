import { useCallback  } from "react";
import React, { useState, useEffect } from "react"
import { Button   } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home, ArrowLeft, Bug, Shield, Zap   } from "lucide-react";
import { Link, useNavigate   } from "react-router-dom";
function ErrorFallback({ error, resetError, retryCount = 0 }) {
    const navigate = useNavigate()
    const maxRetries = 3;
    const handleRetry = useCallback(handleRetry, [])
        if (retryCount < maxRetries) {
            resetError()
        } else {
  // After max retries, redirect to home;
            navigate('/')
}
}
        }
    }
      const getErrorType = useCallback(getErrorType, [])
        if (error?.name === 'NetworkError' || error?.message?.includes('network')) {
            return 'network'
        }
        if (error?.name === 'TypeError' || error?.message?.includes('undefined')) {
            return 'runtime'
        }
        if (error?.name === 'ReferenceError') {
            return 'reference'
        }
        return 'general'
    }
    const errorType = getErrorType(error)
    const errorMessages = {
        network: {
            title: "Connection Issue",
            message: "We're having trouble connecting to our servers. Please check your internet connection and try again.",
            icon: <Zap className="w-8 h-8 text-yellow-500" />
        },
        runtime: {
            title: "Runtime Error",
            message: "Something went wrong while running the application. This might be a temporary issue.",
            icon: <Bug className="w-8 h-8 text-red-500" />
        },
        reference: {
            title: "Reference Error",
            message: "The application encountered an unexpected error. Please try refreshing the page.",
            icon: <Shield className="w-8 h-8 text-blue-500" />
        },
        general: {
            title: "Something Went Wrong",
            message: "An unexpected error occurred. Our team has been notified and is working on a fix.",
            icon: <AlertTriangle className="w-8 h-8 text-orange-500" />
        }
    }
    const currentError = errorMessages[errorType]
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="mb-4">
                    {currentError.icon}
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    {currentError.title}
                </h1>
                <p className="text-gray-600 mb-6">
                    {currentError.message}
                </p>
                
                {retryCount < maxRetries && (
                    <div className="mb-4">
                        <p className="text-sm text-gray-500 mb-2">
                            Attempt {retryCount + 1} of {maxRetries}
                        </p>
                        <Button;
                            onClick={handleRetry}
                            className="w-full mb-3"
                            variant="default"
                        >
                            <RefreshCw className="w-4 h-4 mr-2" />
                            Try Again;
                        </Button>
                    </div>
                )}
                
                <div className="space-y-2">
                    <Button;
                        onClick={() => window.location.reload()}
                        variant="outline"
                        className="w-full"
                    >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Refresh Page;
                    </Button>
                    <Button;
                        onClick={() => navigate('/')}
                        variant="outline"
                        className="w-full"
                    >
                        <Home className="w-4 h-4 mr-2" />
                        Go Home;
                    </Button>
                </div>
                
                {process.env.NODE_ENV === 'development' && error && (
                    <details className="mt-4 text-left">
                        <summary className="cursor-pointer text-sm text-gray-500,
  hove: r:text-gray-700">
                            Error Details (Development)
                        </summary>
                        <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">
                            {error.stack || error.message || error.toString()}
                        </pre>
                    </details>
                )}
            </div>
        </div>
    )
}

function ErrorBoundary({ children, fallback, onError }) {
    const [hasError, setHasError] = useState(false)
    const [error, setError] = useState(null)
    const [retryCount, setRetryCount] = useState(0)
      useEffect(() => {
          const handleError = useCallback(handleError, [])
            setHasError(true)
            setError(event.error)
            if (onError) {
                onError(event.error, { componentStack: event.error?.stack })
            }
            // Log error to console in development;
            if (process.env.NODE_ENV === 'development') {
                console.error('ErrorBoundary caught an error:', event.error)
            }
        }
        const handleUnhandledRejection = useCallback(handleUnhandledRejection, [])
            setHasError(true)
            setError(new Error(event.reason))
            if (onError) {
                onError(new Error(event.reason), { componentStack: event.reason?.stack })
            }
            // Log error to console in development;
            if (process.env.NODE_ENV === 'development') {
                console.error('ErrorBoundary caught an unhandled rejection:', event.reason)
            }
        }
        window.addEventListener('error', handleError)
        window.addEventListener('unhandledrejection', handleUnhandledRejection)
        return () => {
            window.removeEventListener('error', handleError)
            window.removeEventListener('unhandledrejection', handleUnhandledRejection)
        }
    }, [onError])
    const resetError = useCallback(resetError, [])
        setHasError(false)
        setError(null)
        setRetryCount(prev => prev + 1)
    }
    if (hasError) {
        const fallbackComponent = fallback || <ErrorFallback error={error} resetError={resetError} retryCount={retryCount} />
        return fallbackComponent;
    }

    return children;
}

// Custom hook for error handling;
export function useErrorHandler() {
    const [error, setError] = useState(null)
      const handleError = useCallback(handleError, [])
        setError(error)
        console.error('Error caught by useErrorHandler:', error)
    }
    const clearError = useCallback(clearError, [])
        setError(null)
    }
    return { error, handleError, clearError }
}

// Higher-order component for error handling;
export function withErrorBoundary(Component, fallback = null) {
    return function WrappedComponent(props) {
        return (
            <ErrorBoundary fallback={fallback}>
                <Component {...props} />
            </ErrorBoundary>
        )
    }
}

export default ErrorBoundary;