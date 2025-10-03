import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {/* content */}
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {/* content */}
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class AdvancedErrorBoundary extends Component<Props, State> {/* content */}
  constructor(props: Props) {/* content */}
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {/* content */}
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {/* content */}
    this.setState({ error, errorInfo });
    
    // Log error to monitoring service
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Send to error tracking service
    if (typeof window !== 'undefined' && 'gtag' in window) {/* content */}
      (window as any).gtag('event', 'exception', {/* content */}
        description: error.toString(),
        fatal: false,
      });
    }
  }

  render() {/* content */}
    if (this.state.hasError) {/* content */}
      return this.props.fallback || (
        <div className="error-boundary"></div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo?.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AdvancedErrorBoundary;