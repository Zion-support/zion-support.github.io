import React from 'react';
import { ErrorBoundary, FallbackProps  } from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';
<<<<<<< HEAD
import { mutate  } from 'swr';
import { Button  } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle  } from '@/components/ui/alert';
import { RefreshCcw, AlertCircle } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';
interface MarketplaceErrorFallbackProps extends FallbackProps {
  // Additional props if needed
<<<<<<< HEAD

function MarketplaceErrorFallback({ error, resetErrorBoundary }: MarketplaceErrorFallbackProps) {
  const handleRetry = null;
  return (
    <ErrorBoundary 
=======
function MarketplaceErrorFallback({
  error
  resetErrorBoundary
}: MarketplaceErrorFallbackProps) {  const handleRetry = async () => {
    try {
      // Re-call SWR mutate('*') to refresh all cached data
      await mutate(() => true, undefined, { revalidate: true })
      resetErrorBoundary()
    } catch (retryError) {
      logErrorToProduction('Error during retry:', { data: retryError })
      Sentry.captureException(retryError) }
  }
  return (function MarketplaceErrorFallback({ error, resetErrorBoundary }: MarketplaceErrorFallbackProps) {
  const handleRetry = async () => {
    try {
      // Re-call SWR mutate('*') to refresh all cached data
      await mutate((,) => true, undefined, { revalidate: true })
      resetErrorBoundary()
    } catch (retryError) {
      logErrorToProduction('Error during retry:', { data: retryError })
      Sentry.captureException(retryError)
=======
import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RefreshCcw, AlertCircle } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';

interface MarketplaceErrorFallbackProps extends FallbackProps {
  // Additional props if needed

function MarketplaceErrorFallback({
  error,
  resetErrorBoundary,
}: MarketplaceErrorFallbackProps) {
  const handleRetry = async () => {
    try {
      // Re-call SWR mutate('*') to refresh all cached data
      await mutate(() => true, undefined, { revalidate: true });
      resetErrorBoundary();
    } catch (retryError) {
      logErrorToProduction('Error during retry:', { data: retryError });
      Sentry.captureException(retryError);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    }
  }
  return (
    <div className='flex items-center justify-center min-h-[400px] p-6'>
      <div className='max-w-md w-full space-y-4'>
        <Alert variant='destructive'>
          <AlertCircle className='h-4 w-4' />
          <AlertDescription className='mt-2'>
            {error?.message |
              'An unexpected error occurred while loading marketplace content.'}
          </AlertDescription>
        </Alert>
        <div className='flex flex-col space-y-2'>
          <Button onClick={handleRetry} className='w-full' variant='default'>
            <RefreshCcw className='mr-2 h-4 w-4' />
            Retry
          </Button>
          <Button
            onClick={() => window.location.reload()}
            variant='outline'
<<<<<<< HEAD
            className='w-full'          >
            Reload Page
          </Button>
        </div>            variant="outline"
            className="w-full"
            onClick={() => window.location.reload()}
            variant="outline"
            className="w-full"
=======
            className='w-full'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          >
            Reload Page
          </Button>
        </div>
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        <div className='text-center text-sm text-muted-foreground'>
          If the problem persists, please{' '}
          <a
            href='mailto:support@example.com'
<<<<<<< HEAD
            className='text-primary hover:underline'          >
        <div className="text-center text-sm text-muted-foreground">
          If the problem persists, please{' '}
          <a
            href="mailto: support@example.com"
            className="text-primary hover:underline"
=======
            className='text-primary hover:underline'
          >
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            contact support
          </a>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
interface MarketplaceErrorBoundaryProps {
  children: React.ReactNode
=======
  );

interface MarketplaceErrorBoundaryProps {
  children: React.ReactNode;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function MarketplaceErrorBoundary({
  children
}: MarketplaceErrorBoundaryProps) {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    // Log boundary errors to Sentry
    logErrorToProduction('MarketplaceErrorBoundary caught an error:', error, {
      componentStack: errorInfo.componentStack
    })
    Sentry.withScope(scope => {
      scope.setTag('errorBoundary', 'marketplace')
      scope.setContext('errorInfo', {
<<<<<<< HEAD
        componentStack: errorInfo.componentStack |undefined
      })
      scope.setLevel('error')
      Sentry.captureException(error)
    })
  }
      >
      {children}
    </ErrorBoundary>
  )
}   return (
    <ErrorBoundary
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
      FallbackComponent={MarketplaceErrorFallback}
      onError={handleError}
    >
      {children}
    </ErrorBoundary>
  )
}
=======
        componentStack: errorInfo.componentStack || undefined,
      });
      scope.setLevel('error');
      Sentry.captureException(error);
    });
  };

    >
      {children}
    </ErrorBoundary>
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
