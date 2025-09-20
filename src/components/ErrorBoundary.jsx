import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home, ArrowLeft, Bug, Shield, Zap } from "lucide-react";

const ErrorBoundary = ({ children, fallback }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {
    const handleError = (event) => {
      setHasError(true);
      setError(event.error);
      setErrorInfo(event.errorInfo);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  const handleRetry = () => {
    setHasError(false);
    setError(null);
    setErrorInfo(null);
  };

  const handleReload = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  if (hasError) {
    if (fallback) {
      return fallback;
    }

    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
            <p className="text-lg text-gray-300 mb-8">
              We're sorry, but an unexpected error occurred. Please try refreshing the page or contact support if the issue persists.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-xl font-semibold mb-4">Error Details</h2>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gray-400">Time:</span>
                <span className="ml-2">{new Date().toLocaleString()}</span>
              </div>
              {error && (
                <div>
                  <span className="text-gray-400">Message:</span>
                  <span className="ml-2 text-red-400">{error.message}</span>
                </div>
              )}
            </div>
          </div>

          {process.env.NODE_ENV === 'development' && error && (
            <details className="mt-8 text-left">
              <summary className="cursor-pointer text-gray-400 hover:text-white mb-4">
                Technical Details (Development Only)
              </summary>
              <div className="bg-gray-800 rounded-lg p-4 overflow-auto">
                <pre className="text-xs text-red-400 whitespace-pre-wrap">
                  {error.toString()}
                  {errorInfo?.componentStack}
                </pre>
              </div>
            </details>
          )}

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={handleRetry}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <Button
              onClick={handleReload}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              <Zap className="w-4 h-4 mr-2" />
              Refresh Page
            </Button>
            <Button
              onClick={handleGoHome}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
            <Button
              onClick={handleGoBack}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>If this problem persists, please contact our support team.</p>
            <p className="mt-2">
              <Bug className="w-4 h-4 inline mr-2" />
              Error ID: {Date.now()}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;