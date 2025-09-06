
=======
'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  AlertTriangle,
  RefreshCw,
  Home,
  Bug,
  Send,

  Clipboard,;
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as Sentry from '@sentry/nextjs';
import {logErrorToProduction} from '@/utils/productionLogger',;
interface ErrorBoundaryState {;
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
  retryCount: number;
  userFeedback: string;
  showDetails: boolean;
}
;
interface ErrorBoundaryProps {;
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableRetry?: boolean;

  maxRetries?: number;
  showReportButton?: boolean;
  context?: string;  enableRetry?: boolean
  maxRetries?: number
  showReportButton?: boolean
  context?: string
}


    }

    this.setState({
      errorInfo,
      errorId,



>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  private goHome = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/'
    }
  }
  private goHome = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/'
    }
  } }
  render() {
    if (this.state.hasError && this.state.error) {
      // Use custom fallback if provided
      if (this.props.fallback) {

        return this.props.fallback;

=======
=======
        return this.props.fallback;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }

      const severity = this.getErrorSeverity(this.state.error)
      const suggestion = this.getErrorSuggestion(this.state.error)


      const canRetry = this.props.enableRetry !== false && 
                       this.state.retryCount < (this.props.maxRetries || 3)

      return (
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >

            <Card className="w-full max-w-2xl border-red-200 bg-white dark:bg-gray-900">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                  <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Oops! Something went wrong
                </CardTitle>

                      {this.props.maxRetries || 3}                    </p>                    {suggestion}
                  </p>
                  {this.state.retryCount > 0 && (
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      Retry attempt: {this.state.retryCount}/{this.props.maxRetries || 3}

                    </p>
=======
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Badge 
                    variant={severity === 'critical' ? 'destructive' : severity === 'high' ? 'destructive' : 'secondary'}
                  >;
                    {severity.toUpperCase()}
                  </Badge>
                  {this.state.errorId && (
                    <Badge variant="outline" className="text-xs">
                      ID: {this.state.errorId.slice(-8)}
                    </Badge>;
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {suggestion}
                  </p>
                  
                  {this.state.retryCount > 0 && (
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      Retry attempt: {this.state.retryCount}/{this.props.maxRetries || 3}
                    </p>;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  )}
                </div>
                {/* Action Buttons */}

                <div className="flex flex-col sm:flex-row gap-3 justify-center">

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  {canRetry && (
                    <Button onClick={this.retry} className="flex items-center gap-2">
                      <RefreshCw className="h-4 w-4" />
                      Try Again
                    </Button>
                  )}


                    <Bug className="h-4 w-4" />
                    {this.state.showDetails ? 'Hide' : 'Show'} Details
                  </Button>
                </div>



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                {/* Error Details */}
                <AnimatePresence>
                  {this.state.showDetails && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}

                      className="border-t pt-4"

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    >
                      <div className="space-y-4">
                        <div>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                          <h4 className="font-semibold text-sm mb-2">Error Message:</h4>
                          <code className="block p-3 bg-red-50 dark:bg-red-900/10 rounded text-sm text-red-800 dark:text-red-200 overflow-auto">
                            {this.state.error.message}
                          </code>
                        </div>


                        {process.env.NODE_ENV === 'development' &&
                          this.state.error.stack && (
                            <div>
                              <h4 className='font-semibold text-sm mb-2'>
                                Stack Trace:
                              </h4>
                              <pre className='p-3 bg-gray-50 dark:bg-gray-800 rounded text-xs overflow-auto max-h-32'>
                                {this.state.error.stack}
                              </pre>
                            </div>
                          )}



                            Copy Details
                          </Button>
                          {this.props.showReportButton !== false && (


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                            <Button onClick={this.reportError} variant="outline" size="sm">
                              <Send className="h-4 w-4 mr-2" />
                              Report Issue
                            </Button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>

=======
      );

    }

    return this.props.children;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
// Hook for programmatic error boundary
export const useErrorBoundary = () => {


