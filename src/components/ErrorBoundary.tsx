import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button  } from './ui/button';
import { AlertTriangle, RefreshCw, Home, Mail  } from 'lucide-react';

interface Props extends React.PropsWithChildren<{}> {

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
=======
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
}

interface State {
  hasError: boolean;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  error?: Error;
  errorInfo?: ErrorInfo;
=======
  error: Error | null;
  errorInfo: ErrorInfo | null;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
<<<<<<< HEAD
    this.state = { hasError: false };
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  error?: Error;
}

function ErrorFallback({ error, resetError }: { error: Error; resetError: () => void }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <div className="mb-8">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mx-auto w-20 h-20 bg-zion-purple/20 rounded-full flex items-center justify-center mb-4"
          >
            <AlertTriangle className="w-10 h-10 text-zion-purple" />
          </motion.div>
          <h1 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h1>
          <p className="text-zion-slate-light">
            We're sorry, but something unexpected happened. Our team has been notified.
          </p>
        </div>

        <div className="space-y-3 mb-8">
          <button
            onClick={resetError}
            className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          
          <button
            onClick={() => navigate(-1)}
            className="w-full bg-zion-blue hover:bg-zion-blue-dark text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
          >
            <ChevronUp className="w-4 h-4" />
            Go Back
          </button>
          
          <Link
            to="/"
            className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>

        {typeof window !== 'undefined' && window.location.hostname === 'localhost' && error && (
          <details className="text-left bg-zion-blue/20 rounded-md p-4">
            <summary className="text-zion-cyan cursor-pointer mb-2 font-medium">
              Error Details (Development)
            </summary>
            <pre className="text-xs text-zion-slate-light overflow-auto">
              {error.stack}
            </pre>
          </details>
        )}
      </motion.div>
    </div>
  );
}

export function ErrorBoundary({ children, fallback }: Props) {
  const [errorState, setErrorState] = useState<State>({ hasError: false });

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('Error caught by boundary:', event.error);
      setErrorState({ hasError: true, error: event.error });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled rejection caught by boundary:', event.reason);
      setErrorState({ hasError: true, error: new Error(event.reason) });
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  const resetError = () => {
    setErrorState({ hasError: false, error: undefined });
  };

  if (errorState.hasError) {
    if (fallback) {
      return <>{fallback}</>;
    }
    return <ErrorFallback error={errorState.error!} resetError={resetError} />;
<<<<<<< HEAD
  }

  return <>{children}</>;
}
=======
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
  }



  public static getDerivedStateFromError(error: Error): State {
    return { hasErro,r: true, error }
  }



    
    // Send error to monitoring service""
    if (typeof window !== 'undefined') {
      // Example: Send to Sentry, LogRocket, etc.""
      console.log('Error reported to monitoring service')}
  }


                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />

                </svg>


                <h3 className="text-lg font-medium text-gray-900">
                  Something went wrong
                </h3>
              </div>

              </p>
            </div>""

            <div className="mt-4">

                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover: bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"



              >
                <RefreshCw className="w-4 h-4" />
                <span>Try Again</span>
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Go Home</span>
              </button>
              
              <button
                onClick={this.handleContactSupport}
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Support</span>
              </button>
              
              <button
                onClick={this.handleDownloadErrorLog}
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Log</span>
              </button>
            </div>

            {/* Status */}
            <div className="text-center">
              {this.state.isReporting && (
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                  <span>Sending error report...</span>
                </div>
              )}
              
              {this.state.reportSent && (
                <div className="flex items-center justify-center space-x-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Error report sent successfully</span>
                </div>
              )}
              
              <p className="text-xs text-gray-500 mt-4">
                If this problem persists, please contact our support team with the error ID above.
              </p>


            </div>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="mt-4 p-4 bg-gray-100 rounded-lg">
                <summary className="cursor-pointer text-sm font-medium text-gray-700">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-gray-600 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )}


    return this.props.children}






  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
};
=======
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
