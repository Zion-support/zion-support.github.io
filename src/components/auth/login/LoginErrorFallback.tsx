import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface LoginErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export default function LoginErrorFallback({ error, resetErrorBoundary }: LoginErrorFallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20 shadow-xl">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">
              Something went wrong
            </h3>
            <p className="text-sm text-gray-300 mb-6">
              We encountered an error while loading the login page. Please try again.
            </p>
            
            <div className="space-y-3">
              <Button
                onClick={resetErrorBoundary}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
              
              <Button
                onClick={() => window.location.href = '/'}
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10"
              >
                Go to Home
              </Button>
            </div>
            
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer hover:text-gray-300">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-red-400 bg-red-900/20 p-3 rounded overflow-auto">
                  {error.message}
                  {error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}