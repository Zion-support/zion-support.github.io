import { Component, ErrorInfo, ReactNode } from 'react';
import ErrorRecovery from './ErrorRecovery';
import { errorHandler } from '../utils/errorHandler';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Global error caught:', error, errorInfo);
    }
    
    // Report error using our error handler
    errorHandler.reportError(error, {
      component: 'GlobalErrorBoundary',
      action: 'component_did_catch',
      url: window.location.href,
      userAgent: navigator.userAgent
    });
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  private handleReset = () => {
    // Clear any cached data and reset state
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch (e) {
      // Ignore storage errors
    }
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorRecovery
          error={this.state.error}
          onRetry={this.handleRetry}
          onReset={this.handleReset}
        />
      );
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;