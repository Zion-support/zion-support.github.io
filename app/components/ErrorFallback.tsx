import React, { useEffect } from "react";
import { Link } from "react-router-dom";
interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
  errorInfo?: React.ErrorInfo;
}
const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
  errorInfo,
}) => {
  useEffect(() => {
    // Log error to console in development;
    if (process.env['NODE_ENV'] === 'development') {
      console.error('Error caught by boundary:', error);
      if (errorInfo) {
        console.error('Error info:', errorInfo);
      }
    }
    // Send error to analytics in production;
    if (process.env['NODE_ENV'] === 'production' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          'error_stack': error.stack || '',
          'error_component_stack': errorInfo?.componentStack || ''
        }
      });
    }
  }, [error, errorInfo]);
  const handleReportError = () => {
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href;
    };
    // In a real app, you would send this to your error reporting service;
    console.log('Error report:', errorReport);
    // For now, we'll just copy to clipboard;
    navigator.clipboard.writeText(JSON.stringify(errorReport, null, 2));
    alert('Error details copied to clipboard. Please send this to our support team.');
  };
  return (
    </ErrorFallbackProps><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4" /><div className="max-w-2xl w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center" /><AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-white mb-4">
          Oops! Something went wrong</h1>
        </h1>
        <p className="text-gray-300 mb-6 text-lg">
          We're sorry, but something unexpected happened. Our team has been notified and we're working to fix it.</p>
        </p>
        {/* Error Details */}
        <details className="text-left mb-6 bg-black/20 rounded-lg p-4" /><summary className="text-cyan-400 cursor-pointer mb-2 font-semibold flex items-center" /><Bug className="w-4 h-4 mr-2" />
            Technical Details;
          </summary>
          <div className="mt-3 space-y-2" /><div /><strong className="text-red-400">Error:</strong>
              <pre className="text-xs text-gray-400 bg-black/30 p-2 rounded mt-1 overflow-auto">
                {error.message}</pre>
              </pre>
            </div>
            {error.stack && (
              <div /><strong className="text-red-400">Stack Trace:</strong>
                <pre className="text-xs text-gray-400 bg-black/30 p-2 rounded mt-1 overflow-auto max-h-32">
                  {error.stack}</pre>
                </pre>
              </div>
            )}
          </div>
        </details>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center" /><button;
            onClick={resetErrorBoundary}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
           /><RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform" />
            Try Again;
          </button>
          <Link;
            to="/"
            className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center group border border-white/20"
           /><Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Go Home;
          </Link>
          <button;
            onClick={handleReportError}
            className="bg-red-500/20 text-red-400 px-6 py-3 rounded-lg font-semibold hover:bg-red-500/30 transition-all duration-300 flex items-center justify-center group border border-red-500/30"
           /><Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Report Error;
          </button>
        </div>
        {/* Contact Information */}
        <div className="mt-8 pt-6 border-t border-white/10" /><p className="text-gray-400 text-sm mb-2">
            Need immediate assistance?</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm" /><a ;
              href="mailto:kleber@ziontechgroup.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center"
             /><Mail className="w-4 h-4 mr-1" />
              kleber@ziontechgroup.com;
            </a>
            <a ;
              href="tel:+13024640950"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              +1 (302) 464-0950</a>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
;