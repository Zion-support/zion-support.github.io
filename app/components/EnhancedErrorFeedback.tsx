import React from 'react';

interface EnhancedErrorFeedbackProps {
export default function EnhancedErrorFeedback({ error, className = '' }: EnhancedErrorFeedbackProps) {
  return (
    <div className={`enhanced-error-feedback ${className}`}>
      <h3>Error Feedback</h3>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
  );
}
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} errorInfo={this.state.errorInfo} />;
export const LoadingPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">"
    <div className="text-center">"
      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>"
      <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>"
      <p className="text-gray-300">Please wait while we load the content</p>
    </div>
  </div>
);
