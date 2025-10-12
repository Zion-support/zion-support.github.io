import { Component, ErrorInfo, ReactNode} from 'react', { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;

class EnhancedErrorBoundary extends Component<Props, State />{
  constructor(props: Props) {
    super(props);
    this.
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo;
    });
    // Log error to monitoring service
    console.error('Error caught by boundary: ', error, errorInfo);

    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;

      return (</Props>
    <div></AlertTriangle>
            </div>
            <h1 className="w-5h-5ml-2">Oops! Something went wrong;</h1>
            </h1>
            <p className="w-5h-5ml-2">We encountered an unexpected error. Don't worry, our team has been notified and we're working to fix it.</p>
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <h3 className="text-red-400font-semiboldmb-2"  >Error Details:</h3>
                <pre className="w-5h-5ml-2" />{this.state.error.toString()}</pre>
                </pre>
                {this.state.errorInfo && (
    
                  <pre className="text-xs text-gray-400mt-2overflow-auto">{this.state.errorInfo.componentStack}</pre>
</pre>
                )}</pre>
              </div>
            )}

                Try Again

                Go Home

                Still having issues? Contact our support team:

}}}}}}