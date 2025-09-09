import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function LoginErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen bg-futuristic flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-400" />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">Login Error</h2>
        
        <p className="text-zion-slate-light mb-6">
          We encountered an error while processing your login. This might be due to a temporary issue.
        </p>
        
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6 text-left">
            <p className="text-sm text-red-400 font-mono">
              {error.message || 'An unexpected error occurred'}
            </p>
          </div>
        )}
        
        <div className="space-y-3">
          <button
            onClick={resetErrorBoundary}
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg px-6 py-3 font-semibold hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-zion-slate-light/10 text-zion-slate-light rounded-lg px-6 py-3 font-semibold hover:bg-zion-slate-light/20 hover:text-white transition-all duration-300"
          >
            Refresh Page
          </button>
        </div>
        
        <p className="text-sm text-zion-slate-light mt-6">
          If the problem persists, please contact our support team.
        </p>
      </div>
    </div>
  );
}