import React from "react";
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
    <> <Helmet> <title>Error - Zion Tech Group</title> <meta name="description" content="An error occurred while loading the page" /> </Helmet> 
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        
        <div className="max-w-md w-full mx-auto p-8">
          
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
            
        <div className="w-16 h-16 bg-red-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            
          <h1 className="text-xl font-semibold text-white mb-2">
              Something went wrong
            </h1>
            
          <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try again.
            </p>
            
        <div className="flex space-x-3">
              <button
    onClick={resetError } className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
              <button
    onClick={ () => window.location.href = '/' } className="flex-1 bg-white/10 text-white py-2 px-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                <Home className="w-4 h-4" />
                Go Home
              </button>
            </div>
            { process.env.NODE_ENV === 'development' && (
              <details className="mt-6 p-4 bg-gray-800/50 rounded-lg text-left">
                <summary className="cursor-pointer font-medium text-gray-300 mb-2">
                  Error Details (Development)
                </summary>
                <pre className="text-xs text-gray-400 overflow-auto">
                  {error.toString() }
                </pre>
              </details>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ErrorFallback;