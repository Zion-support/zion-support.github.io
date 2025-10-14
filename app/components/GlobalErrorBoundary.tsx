import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function Page() {
  return (
    <>
      <Helmet>
        <title>GlobalErrorBoundary - Zion Tech Group</title>
        <meta name="description" content="Professional GlobalErrorBoundary solutions and services" />
        <meta name="keywords" content="global_errorboundary" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">GlobalErrorBoundary</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional GlobalErrorBoundary solutions and services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">;
              <div className="bg-blue-50 border border-blue-200rounded-lgp-6">
                <h3 className="text-lg font-semiboldtext-blue-900mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
                </div>
        </div>
              <div className="bg-green-50 border border-green-200rounded-lgp-6">
                <h3 className="text-lg font-semiboldtext-green-900mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
                </div>
        </div>
              <div className="bg-purple-50 border border-purple-200rounded-lgp-6">
                <h3 className="text-lg font-semiboldtext-purple-900mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
                </div>
        </div>
              </div>
        </div>
            </div>
            
            <h1 className="text-xl font-semibold text-gray-900 text-center mb-2">
              Application Error
            </h1>
            
            <p className="text-gray-600 text-center mb-6">
              We're sorry, but something went wrong with the application. Please try refreshing the page.
            </p>
            
            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh Page
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 flex items-center justify-center"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </button>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 p-4 bg-gray-100 rounded-md">
                <summary className="cursor-pointer font-medium text-gray-700">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-gray-600 overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
      </div>
</>
  );
}
