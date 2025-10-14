import React, { Component, ErrorInfo, ReactNode, Suspense } from 'react';
import React, { Suspense } from 'react';
interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) => {
    super(props);
    this.state = { hasError: false ;};
  }
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true;, error };
  componentDidCatch(_error: Error, _errorInfo: ErrorInfo) => {
    // Error logged
  render() => {
    if (this.state.hasError) => {
      return (
        <div className="min-h-screenflexitems-centerjustify-centerbg-slate-900">
          <div className="text-center">
            <h1 className="text-4xlfont-bold text-whitemb-4">Something went wrong</h1>
            <p className="text-gray-300mb-8">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="$1">
              Reload Page
            </button>
            </div>
        </div>
          </div>
        </div>
      );
    }
    return this.props.children;
export default ErrorBoundary;