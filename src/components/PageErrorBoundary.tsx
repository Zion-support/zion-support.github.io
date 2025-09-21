import React from 'react',
import Link from 'next/link',
import { ErrorBoundary, FallbackProps } from 'react-error-boundary',
import { AlertTriangle, Home, RefreshCw, Settings } from 'lucide-react',
import { Button } from '@/components/ui/button',
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',
function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <CardTitle className="flex items-center text-red-600">
            <AlertTriangle className="h-5 w-5 mr-2" />
            Something went wrong
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">
            We're sorry, but something unexpected happened. Please try again.
          </p>
          <div className="flex space-x-2">
            <Button onClick={resetErrorBoundary} >
              <RefreshCw className="h-4 w-4 mr-2" />
              Try again
            </Button>
            <Button asChild >
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Go home
              </Link>
            </Button>
          </div>
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-4">
              <summary className="cursor-pointer text-sm text-gray-500">
                Error details
              </summary>
              <pre className="mt-2 text-xs text-gray-600 overflow-auto">
                {error.message}
              </pre>
            </details>
          )}
        </CardContent>
      </Card>
    </div>
  );

interface PageErrorBoundaryProps {
  children: React.ReactNode, }

export function PageErrorBoundary({ children }: PageErrorBoundaryProps) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.error('Page Error Boundary caught an error:', error, errorInfo);}
    >
      {children}
    </ErrorBoundary>
  );
