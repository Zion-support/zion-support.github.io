import React, { useState, useCallback, useEffect } from 'react';
import { AlertTriangle, X, RefreshCw, Send } from 'lucide-react';

interface ErrorFeedbackProps {
  error?: Error;
  onRetry?: () => void;
  onReport?: (error: Error) => void;
  showFeedbackForm?: boolean;
}

const EnhancedErrorFeedback: React.FC<ErrorFeedbackProps> = ({
  error,
  onRetry,
  onReport,
  showFeedbackForm = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [isReporting, setIsReporting] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);

  // Show error feedback when error occurs
  useEffect(() => {
    if (error) {
      setIsVisible(true);
      // Auto-hide after 10 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleRetry = useCallback(async () => {
    if (!onRetry) return;
    
    setIsRetrying(true);
    try {
      await onRetry();
      setIsVisible(false);
    } catch (retryError) {
      console.error('Retry failed:', retryError);
    } finally {
      setIsRetrying(false);
    }
  }, [onRetry]);

  const handleReport = useCallback(async () => {
    if (!error || !onReport) return;
    
    setIsReporting(true);
    try {
      await onReport(error);
      setFeedback('');
      setIsVisible(false);
    } catch (reportError) {
      console.error('Error reporting failed:', reportError);
    } finally {
      setIsReporting(false);
    }
  }, [error, onReport]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  if (!isVisible || !error) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">
              Something went wrong
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close error dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-4">
          <p className="text-gray-600 mb-2">
            We encountered an unexpected error. This has been logged and our team will investigate.
          </p>
          <details className="text-sm text-gray-500">
            <summary className="cursor-pointer hover:text-gray-700">
              Technical details
            </summary>
            <pre className="mt-2 p-2 bg-gray-100 rounded text-xs overflow-auto">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        </div>

        {showFeedbackForm && (
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
              Help us improve (optional)
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="What were you trying to do when this error occurred?"
              className="w-full p-2 border border-gray-300 rounded-md resize-none"
              rows={3}
            />
          </div>
        )}

        <div className="flex gap-3">
          {onRetry && (
            <button
              onClick={handleRetry}
              disabled={isRetrying}
              className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isRetrying ? 'animate-spin' : ''}`} />
              {isRetrying ? 'Retrying...' : 'Try Again'}
            </button>
          )}
          
          {onReport && (
            <button
              onClick={handleReport}
              disabled={isReporting}
              className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className={`w-4 h-4 mr-2 ${isReporting ? 'animate-pulse' : ''}`} />
              {isReporting ? 'Reporting...' : 'Report Issue'}
            </button>
          )}
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={handleClose}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

// Global error boundary component
export class GlobalErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Global error boundary caught an error:', error, errorInfo);
    }

    // In production, you would send this to your error reporting service
    // Example: Sentry.captureException(error, { extra: errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  handleReport = async (error: Error) => {
    // In production, you would send this to your error reporting service
    console.log('Error reported:', error);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  render() {
    if (this.state.hasError) {
      return (
        <EnhancedErrorFeedback
          error={this.state.error}
          onRetry={this.handleRetry}
          onReport={this.handleReport}
        />
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorFeedback;