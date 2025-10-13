import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug, Send } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  retryCount: number;
  feedback: string;
  isSubmitting: boolean;
}

class EnhancedErrorFeedback extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      retryCount: 0,
      feedback: '',
      isSubmitting: false
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      retryCount: prevState.retryCount + 1
    }));
  };

  handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ feedback: e.target.value });
  };

  handleSubmitFeedback = async () => {
    this.setState({ isSubmitting: true });
    
    try {
      // Here you would typically send feedback to your error reporting service
      console.log('Error feedback submitted:', {
        error: this.state.error?.toString(),
        feedback: this.state.feedback,
        retryCount: this.state.retryCount
      });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Thank you for your feedback! We\'ll look into this issue.');
      this.setState({ feedback: '' });
    } catch (error) {
      console.error('Failed to submit feedback:', error);
      alert('Failed to submit feedback. Please try again.');
    } finally {
      this.setState({ isSubmitting: false });
    }
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4 text-center">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6 text-center">
              We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
            </p>
            
            <div className="space-y-4">
              <button
                onClick={this.handleRetry}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Go Home
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">
                Help us improve
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                If you'd like to help us fix this issue, please describe what you were doing when this error occurred:
              </p>
              <textarea
                value={this.state.feedback}
                onChange={this.handleFeedbackChange}
                placeholder="Describe what you were doing when this error occurred..."
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 resize-none"
                rows={3}
              />
              <button
                onClick={this.handleSubmitFeedback}
                disabled={this.state.isSubmitting || !this.state.feedback.trim()}
                className="w-full mt-3 bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {this.state.isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Feedback
                  </>
                )}
              </button>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-gray-400 hover:text-white flex items-center gap-2">
                  <Bug className="w-4 h-4" />
                  Error Details (Development)
                </summary>
                <div className="mt-4 p-4 bg-red-900/20 rounded-lg text-sm">
                  <pre className="text-red-300 whitespace-pre-wrap">
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorFeedback;