import React from 'react';
import { motion } from 'framer-motion',
class EnhancedErrorBoundary extends React.Component {
  constructor(props) {
    super(props),
    this.state = { hasError: false, error: null, errorInfo: null };
  }
,
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
,
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error;
      errorInfo: errorInfo}),
    // Log error to analytics or error reporting service,
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.toString();
        fatal: false})}
  }
,
  render() {
    if (this.state.hasError) {
      return (
        <motion.div,
          className="min-h-screen flex items-center justify-center bg-gray-50",
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >,
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">,
            <motion.div,
              className="text-6xl mb-4",
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >,
              ⚠️,
            </motion.div>,
            <h1 className="text-2xl font-bold text-gray-900 mb-4">,
              Oops! Something went wrong,
            </h1>,
            <p className="text-gray-600 mb-6">,
              We're sorry, but something unexpected happened. Our team has been notified.,
            </p>,
            <div className="space-y-3">,
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover: bg-blue-700 transition-colors">,
                Try Again,
              </button>,
              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover: bg-gray-300 transition-colors">,
                Go Home,
              </button>,
            </div>,
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">,
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">,
                  Error Details (Development),
                </summary>,
                <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">,
                  {this.state.error && this.state.error.toString()}
                  {this.state.errorInfo.componentStack}
                </pre>,
              </details>)}
          </div>,
        </motion.div>)}
,
    return this.props.children}
}
,
export default EnhancedErrorBoundary;