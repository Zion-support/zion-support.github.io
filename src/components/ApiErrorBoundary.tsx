import React, { Component, ReactNode } from 'react';
import { QueryClient } from '@tanstack/react-query';
<<<<<<< HEAD
// import * as Sentry from '@sentry/nextjs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
=======
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-4b9a
import { RefreshCw, WifiOff } from 'lucide-react'

interface ApiErrorBoundaryProps {
  children: ReactNode;
  queryClient?: QueryClient;
<<<<<<< HEAD
=======
  fallback?: ReactNode;
}

interface ApiErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ApiErrorBoundary extends Component<ApiErrorBoundaryProps, ApiErrorBoundaryState> {
  constructor(props: ApiErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ApiErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('API Error Boundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
    if (this.props.queryClient) {
      this.props.queryClient.invalidateQueries();
    }
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Alert className="m-4">
          <WifiOff className="h-4 w-4" />
          <AlertTitle>API Error</AlertTitle>
          <AlertDescription>
            Something went wrong while loading data. Please try again.
          </AlertDescription>
          <Button onClick={this.handleRetry} className="mt-2">
            <RefreshCw className="h-4 w-4 mr-2" />
            Retry
          </Button>
        </Alert>
      );
    }

    return this.props.children;
  }
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-4b9a
}

interface ApiErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ApiErrorBoundary extends Component<ApiErrorBoundaryProps, ApiErrorBoundaryState> {
  constructor(props: ApiErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ApiErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('API Error Boundary caught an error:', error, errorInfo);
    // Sentry.captureException(error, { extra: errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
    if (this.props.queryClient) {
      this.props.queryClient.invalidateQueries();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle className="flex items-center text-red-600">
                <WifiOff className="h-4 w-4 mr-2" />
                API Error
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Something went wrong while loading data. Please try again.
              </p>
              <Button 
                onClick={this.handleRetry}
                variant="outline"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}