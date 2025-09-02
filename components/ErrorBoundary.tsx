ursor/automate-test-fix-improve-and-merge-code-48f3
  fallback?: ReactNode;}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
error, errorInfo,
    })

    // Log error to monitoring service
ursor/automate-test-fix-improve-and-merge-code-48f3
  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
<div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">"          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">"            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">"              <AlertTriangle className="w-8 h-8 text-red-600" />"            </div>"            "
            <h1 className="text-2xl font-bold text-gray-900 mb-2">"              Oops! Something went wrong"            </h1>
            
ursor/automate-test-fix-improve-and-merge-code-48f3
                  {this.state.errorInfo && (                    <div>
                      <strong>Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">"                        {this.state.errorInfo.componentStack}"                      </pre></div>
                  )}
                </div>
              </details>
            )}

<div className="flex flex-col sm: flex-row gap-3">"              <button"                onClick={this.handleRetry}
                className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200""              >"                <RefreshCw className="w-4 h-4 mr-2" />"                Try Again"              </button>
              
              <Link
                href="/""                className="flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200""              >"                <Home className="w-4 h-4 mr-2" />"                Go Home"              </Link>"
            </div>

ursor/automate-test-fix-improve-and-merge-code-48f3
            </div>          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;