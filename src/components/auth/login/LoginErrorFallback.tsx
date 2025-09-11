import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
interface LoginErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}
export default function LoginErrorFallback({ error, resetErrorBoundary }: LoginErrorFallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-futuristic p-4">
      <div className="max-w-md w-full bg-zion-slate-dark rounded-xl border border-zion-cyan/20 p-8 text-center">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-400" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">
          Something went wrong
        </h2>
        <p className="text-zion-slate-light mb-6">
          We encountered an error while processing your login. Please try again.
        </p>
        {process.env.NODE_ENV === 'development' && (
          <details className="text-left mb-6">
            <summary className="text-zion-cyan cursor-pointer text-sm">
              Error details
            </summary>
            <pre className="text-xs text-zion-slate-light mt-2 p-3 bg-zion-slate rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
        <button
          onClick={resetErrorBoundary}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
      </div>
    </div>
  );
}
