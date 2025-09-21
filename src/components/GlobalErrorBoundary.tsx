import React, { Component, ErrorInfo, ReactNode } from 'react',
interface Props {
  children: ReactNode, }

interface State {
  hasError: boolean;
  error?: Error, }

class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false }, }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }, }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('GlobalErrorBoundary caught an error:', error, errorInfo);

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-zion-blue flex items-center justify-center p-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Something went wrong
            </h2>
            <p className="text-zion-cyan mb-4">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-zion-cyan text-zion-blue px-4 py-2 rounded hover:bg-zion-cyan/80 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );

    return this.props.children, }
}

export default GlobalErrorBoundary;