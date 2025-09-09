import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function LoginErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zion-slate-dark p-4">
      <div className="max-w-md w-full bg-zion-slate-light/5 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-400" />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">Login Error</h2>
        <p className="text-zion-slate-light mb-6">
          Something went wrong while loading the login page. Please try again.
        </p>
        
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6 text-left">
            <p className="text-red-400 text-sm font-mono">
              {error.message || 'Unknown error occurred'}
            </p>
          </div>
        )}
        
        <button
          onClick={resetErrorBoundary}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
      </div>
    </div>
  );
}