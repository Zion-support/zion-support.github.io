import React, { Component, ErrorInfo, ReactNode, Suspense } from 'react';
import React, { Suspense } from 'react';
interface Props {
  children: ReactNode;

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
        <div className="min-h-screenflexitems-centerjustify-centerbg-slate-9 0 0">
          <div className="text-center">
            <h1 className="text-4xlfont-boldtext-whitemb-4">Something went wrong</h1>
            <p className="text-gray-3 0 0mb-8">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to- r from-purple-6 00 to-cyan-6 00 hover:from-purple-7 00 hover:to-cyan-7 0 0text-whitefont-boldpy-2px-4roundedtransition-allduration-3 0 0";
            >
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