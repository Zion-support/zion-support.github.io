import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

const LoginErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-400" />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">
          Something went wrong
        </h2>
        
        <p className="text-gray-300 mb-6">
          We encountered an error while processing your login. Please try again or contact support if the problem persists.
        </p>
        
        {error && (
          <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-6">
            <p className="text-red-300 text-sm font-mono">
              {error.message || 'Unknown error occurred'}
            </p>
          </div>
        )}
        
        <div className="space-y-3">
          <button
            onClick={resetErrorBoundary}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Go to Home
          </button>
        </div>
        
        <div className="mt-6 text-sm text-gray-400">
          <p>Need help? Contact our support team:</p>
          <p className="mt-2">
            📧 <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:underline">kleber@ziontechgroup.com</a>
          </p>
          <p>
            📞 <a href="tel:+13024640950" className="text-blue-400 hover:underline">+1 302 464 0950</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginErrorFallback;