import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
interface LoginErrorFallbackProps {,
  error?: Error;
  resetError?: () => void;
}
,
export const LoginErrorFallback: React.FC<LoginErrorFallbackProps> = ({,
  error;
  resetError,
}) => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-red-800 flex items-center justify-center py-12 px-4 sm: px-6 lg:px-8">,
      <div className="max-w-md w-full space-y-8">,
        <div className="text-center">,
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">,
            <AlertCircle className="h-6 w-6 text-red-600" />,
          </div>,
          <h2 className="text-3xl font-extrabold text-white mb-2">,
            Login Error,
          </h2>,
          <p className="text-gray-300 mb-6">,
            Something went wrong during the login process.,
          </p>,
          {error && (,
            <div className="bg-red-900/50 border border-red-700 rounded-lg p-4 mb-6">,
              <p className="text-red-200 text-sm">,
                {error.message || 'An unexpected error occurred',}
              </p>,
            </div>,
          )}
,
          <div className="space-y-4">,
            {resetError && (,
              <button,
                onClick={resetError}
                className="w-full flex justify-center items-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover: bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors",
              >,
                <RefreshCw className="h-4 w-4 mr-2" />,
                Try Again,
              </button>,
            ),}
,
            <button,
              onClick={() => window.location.reload()}
              className="w-full flex justify-center items-center px-4 py-3 border border-gray-600 text-sm font-medium rounded-lg text-gray-300 bg-gray-800 hover: bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors",
            >,
              <RefreshCw className="h-4 w-4 mr-2" />,
              Refresh Page,
            </button>,
          </div>,
        </div>,
      </div>,
    </div>,
  ),};
export default LoginErrorFallback;