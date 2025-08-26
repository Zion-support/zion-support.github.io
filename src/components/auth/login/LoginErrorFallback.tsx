import React from 'react';
<<<<<<< HEAD

=======
import { AlertTriangle, RefreshCw } from 'lucide-react';
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
interface LoginErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}
<<<<<<< HEAD

export const LoginErrorFallback: React.FC<LoginErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-zion-blue-dark">
            <div className="max-w-md w-full mx-auto p-6">
                <div className="bg-zion-blue rounded-lg p-8 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
                    <p className="text-zion-slate-light mb-6">
                        We encountered an error while loading the login page. Please try again.
                    </p>
                    <button
                        onClick={resetErrorBoundary}
                        className="px-6 py-3 bg-zion-cyan text-zion-blue-dark rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
                    >
                        Try again
                    </button>
                    {process.env.NODE_ENV === 'development' && (
                        <details className="mt-4 text-left">
                            <summary className="text-zion-slate-light cursor-pointer">Error details</summary>
                            <pre className="text-xs text-zion-slate-light mt-2 p-2 bg-zion-blue-dark rounded overflow-auto">
                                {error.message}
                            </pre>
                        </details>
                    )}
                </div>
=======
export default function LoginErrorFallback({ error, resetErrorBoundary }: LoginErrorFallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 text-red-500 flex items-center justify-center">
            <AlertTriangle className="h-12 w-12" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Something went wrong
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We encountered an error while loading the login page. Please try again.
          </p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-red-400" />
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
            </div>
        </div>
<<<<<<< HEAD
    );
};

export default LoginErrorFallback;
=======
        <div className="flex flex-col space-y-3">
          <button
            onClick={resetErrorBoundary}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Go to Homepage
          </button>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500">
            If the problem persists, please contact our support team
          </p>
          <a
            href="/contact"
            className="text-xs text-indigo-600 hover:text-indigo-500"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
