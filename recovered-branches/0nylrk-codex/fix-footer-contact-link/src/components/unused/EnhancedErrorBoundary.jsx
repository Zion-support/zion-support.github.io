<<<<<<< HEAD
import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { ExclamationTriangleIcon, ArrowPathIcon, HomeIcon, DocumentTextIcon, BugAntIcon } from '@heroicons/react/24/outline';
class EnhancedErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
            errorId: null,
            showStackTrace: false
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error,
            errorId: this.generateErrorId()
        };
    }
    componentDidCatch(error, errorInfo) {
        this.setState({ errorInfo });
        // Log error to console
        console.error('Error caught by boundary:', error, errorInfo);
        // Call custom error handler if provided
        if (this.props.onError) {
            this.props.onError(error, errorInfo);
        }
        // Send error to error reporting service (if available)
        this.reportError(error, errorInfo);
    }
    static generateErrorId() {
        return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
    reportError(error, errorInfo) {
        // In a real application, you would send this to your error reporting service
        // For example: Sentry, LogRocket, Bugsnag, etc.
        const errorReport = {
            id: this.state.errorId,
            timestamp: new Date().toISOString(),
            error: {
                name: error.name,
                message: error.message,
                stack: error.stack
            },
            errorInfo: {
                componentStack: errorInfo.componentStack
            },
            userAgent: navigator.userAgent,
            url: window.location.href,
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        };
        // Log to console for development
        if (process.env.NODE_ENV === 'development') {
            console.group('Error Report');
            console.log('Error ID:', errorReport.id);
            console.log('Error Details:', errorReport);
            console.groupEnd();
        }
        // In production, you would send this to your error reporting service
        // Example: Sentry.captureException(error, { extra: errorReport });
    }
    handleRetry = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
            errorId: null,
            showStackTrace: false
        });
    };
    handleGoHome = () => {
        window.location.href = '/';
    };
    handleReportIssue = () => {
        const error = this.state.error;
        const errorInfo = this.state.errorInfo;
        if (error && errorInfo) {
            const issueBody = `
## Error Report
=======

const EnhancedErrorBoundary: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedErrorBoundary</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

export default EnhancedErrorBoundary;
