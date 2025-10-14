import React from 'react';

interface AdvancedErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const AdvancedErrorBoundary: React.FC<AdvancedErrorBoundaryProps> = ({ className = '', children }) => {
  return (
    <div className={`advancederrorboundary ${className}`}>
      {children}
    </div>
  );
};

<<<<<<< HEAD
class AdvancedErrorBoundary extends Component<Props, State> {;
constructor(props: Props) {
    super(props);
    this.state = { hasError: false, retryCount: 0 };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, retryCount: 0 };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {"
    console.error("Error caught by boundary:", error, errorInfo);
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: undefined,
      retryCount: this.state.retryCount + 1,)
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || ("
          <div className="error-boundary"></div>
            <h2>Something went wrong.</h2>)
            <details>{this.state.error && this.state.error.toString()}</details>
            {this.props.enableRetry && ("
              <button onClick={this.handleRetry} className="retry-button">
                Try Again
              </button>)
            )}
          </div>
        )
      );
    }
    return this.props.children;
  }
}
;
export default AdvancedErrorBoundary;
"
=======
export default AdvancedErrorBoundary;
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
