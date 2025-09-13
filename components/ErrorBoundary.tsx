import React from 'react';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Mail, Phone } from 'lucide-react';
const ErrorBoundary: React.FC = () => {
  // Temporarily simplified to avoid build issues
  return <div className="sr-only">ErrorBoundary temporarily disabled</div>;
};
interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}
class ErrorBoundary extends Component<Props, State> {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        componentStack: errorInfo.componentStack,
    
  
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {

    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Error Icon */}
            <motion.div
              className="w-24 h-24 mx-auto mb-8 text-red-500"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <AlertTriangle className="w-full h-full" />
            </motion.div>
            {/* Error Message */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-red-400">
              Oops! Something went wrong
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>
            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <motion.div
                className="bg-gray-800 rounded-lg p-4 mb-8 text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold mb-2 text-red-400">Error Details:</h3>
                <p className="text-sm text-gray-300 mb-2">
                  <strong>Message:</strong> {this.state.error.message}
                </p>
                  <strong>Error ID:</strong> {this.state.errorId}
                {this.state.errorInfo && (
                  <details className="text-sm text-gray-400">
                    <summary className="cursor-pointer hover:text-gray-300">Component Stack</summary>
                    <pre className="mt-2 text-xs overflow-x-auto">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </motion.div>
            )}
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50"
                onClick={this.handleRetry}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                <RefreshCw className="w-5 h-5 inline mr-2" />
                Try Again
              </motion.button>
                className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-50"
                onClick={this.handleGoHome}
                <Home className="w-5 h-5 inline mr-2" />
                Go Home
            </div>
            {/* Support Options */}
              className="mt-8 pt-8 border-t border-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              <p className="text-gray-400 mb-4">Need help? Contact our support team:</p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.button
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  onClick={this.handleContactSupport}
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Support
                </motion.button>
                  onClick={this.handleCallSupport}
                  <Phone className="w-4 h-4 inline mr-2" />
                  Call Support
              </div>
            {/* Error ID for Support */}
            <motion.p
              className="mt-6 text-sm text-gray-500"
              transition={{ delay: 0.8 }}
              Error ID: {this.state.errorId}
            </motion.p>
          </motion.div>
        </div>
      );
    return this.props.children;
