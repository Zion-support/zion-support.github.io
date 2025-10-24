<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react'
import { Mail } from 'lucide-react'
import { Home } from 'lucide-react'
interface AdvancedErrorBoundaryProps {
  className?: string
}
interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
  errorId?: string
}
class AdvancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }
  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorReport: ErrorReport = {,
    errorId: this.state.errorId || this.generateErrorId()
      error
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  this.setState({
      error
      errorInfo
})
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      // // // eslint-disable-next-line no-console
    console.error('Error caught by boundary:', error, errorInfo)
    }
    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo)
    }
  }
  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // You can integrate with services like Sentry, LogRocket, etc.
    const errorData = {
=======
import React from 'react';

<<<<<<< HEAD
interface AdvancedErrorBoundaryProps {
  children: ReactNode;
  className?: string;
  onError?: (_error: Error, _errorInfo: ErrorInfo) => void}


interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string}

class AdvancedErrorBoundary extends Component<AdvancedErrorBoundaryProps, State> {
  constructor(props: AdvancedErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false }}

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo)}
  };

  componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {
    this.setState({
      hasError: true,
      error: _error,
      errorInfo: _errorInfo
    });
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(_error, _errorInfo)}
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', _error, _errorInfo)}
    
    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(_error, _errorInfo)}
  }

  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // You can integrate with services like Sentry, LogRocket, etc.
    const errorData = {
      errorId: this.state.errorId,
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString()
    };
    
    // Send to external service (implement as needed)
    console.error('Error logged to service:', errorData)};

  generateErrorId = (): string => {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`};

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })};

  render() {
    if (this.state.hasError) {
      return (
        <div className={`min-h-screen flex items-center justify-center bg-gray-50 ${this.props.className || ''}`}>
          <div className="max-w-mdw-fullbg-whiteshadow-lg rounded-lg p-6 text-center">
            <AlertTriangle className="h-16w-16text-red-500mx-auto mb-4" />
            <h1 className="text-2xlfont-boldtext-gray-900mb-2">Something went wrong</h1>
            <p className="text-gray-600mb-6">
              We&apos;re sorry, but something unexpected happened. Please try again.
            </p>
            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-fullbg-blue-600hover:bg-blue-700text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                <RefreshCw className="h-4w-4mr-2" />
                Try Again
              </button>
              <button 
                onClick={() => window.location.href = "/"}
                className="w-fullbg-gray-600hover:bg-gray-700text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                <Home className="h-4w-4mr-2" />
                Go Home
              </button>
            </div>
          </div>
        </div>
      )}

    return this.props.children}
}

export default AdvancedErrorBoundary;
  
=======
const SitemapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Sitemap</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-300 mb-8">
            Find all pages and sections of our website organized by category.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">Main Pages</h2>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
                <li><a href="/pricing" className="text-gray-300 hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">AI Services</h2>
              <ul className="space-y-2">
                <li><a href="/ai-services" className="text-gray-300 hover:text-white">AI Services</a></li>
                <li><a href="/ai-automation" className="text-gray-300 hover:text-white">AI Automation</a></li>
                <li><a href="/ai-analytics-dashboard" className="text-gray-300 hover:text-white">AI Analytics</a></li>
                <li><a href="/ai-crm" className="text-gray-300 hover:text-white">AI CRM</a></li>
                <li><a href="/ai-customer-support" className="text-gray-300 hover:text-white">AI Support</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">IT Services</h2>
              <ul className="space-y-2">
                <li><a href="/it-services" className="text-gray-300 hover:text-white">IT Services</a></li>
                <li><a href="/it-infrastructure" className="text-gray-300 hover:text-white">IT Infrastructure</a></li>
                <li><a href="/it-support" className="text-gray-300 hover:text-white">IT Support</a></li>
                <li><a href="/devops" className="text-gray-300 hover:text-white">DevOps</a></li>
                <li><a href="/cloud-services" className="text-gray-300 hover:text-white">Cloud Services</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
>>>>>>> main
