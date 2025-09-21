import React, { Component, ReactNode } from 'react',
import { QueryClient } from '@tanstack/react-query',
import { Button } from '@/components/ui/button',
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',
import { RefreshCw, WifiOff } from 'lucide-react'

interface ApiErrorBoundaryProps {
  children: ReactNode,
  queryClient?: QueryClient;
  fallback?: ReactNode, }

interface ApiErrorBoundaryState {
  hasError: boolean,
  error?: Error;
}

export class ApiErrorBoundary extends Component<ApiErrorBoundaryProps, ApiErrorBoundaryState> {
  constructor(props: ApiErrorBoundaryProps) {
    super(props),
    this.state = { hasError: false }}

  static getDerivedStateFromError(error: Error): ApiErrorBoundaryState {
    return { hasError: true, error }, }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('API Error Boundary caught an error:', error, errorInfo);

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined }),
    if (this.props.queryClient) {
      this.props.queryClient.invalidateQueries();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback, }

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

    return this.props.children, }
}