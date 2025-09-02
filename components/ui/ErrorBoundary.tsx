ursor/automate-test-fix-improve-and-merge-code-99d1
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
public state: State = {;hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
console.error(,
  ErrorBoundary caught an error: , error, errorInfo);'  }
  'private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
ursor/automate-test-fix-improve-and-merge-code-99d1
                <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">"                  {this.state.error.stack}"                </pre></details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;