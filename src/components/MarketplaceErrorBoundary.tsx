import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';
import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
<<<<<<< HEAD
import { RefreshCcw, AlertCircle } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';

=======
<<<<<<< HEAD
<<<<<<< HEAD
import { RefreshCcw, AlertCircle } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';

=======
import { RefreshCcw, AlertCircle } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
interface MarketplaceErrorFallbackProps extends FallbackProps {
  // Additional props if needed

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
function MarketplaceErrorFallback({
  error,
  resetErrorBoundary,
}: MarketplaceErrorFallbackProps) {  const handleRetry = async () => {
    try {
      // Re-call SWR mutate('*') to refresh all cached data
      await mutate(() => true, undefined, { revalidate: true });
      resetErrorBoundary();
    } catch (retryError) {
      logErrorToProduction('Error during retry:', { data: retryError });
<<<<<<< HEAD
      Sentry.captureException(retryError);    }
  };

  return (
=======
      Sentry.captureException(retryError);
=======
      resetErrorBoundary()
    } catch (retryError) {
      logErrorToProduction('Error during retry:', { data: retryError });
      Sentry.captureException(retryError)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
function MarketplaceErrorFallback({ error, resetErrorBoundary }: MarketplaceErrorFallbackProps) {
  const handleRetry = async () => {
    try {
      // Re-call SWR mutate('*') to refresh all cached data
      await mutate(() => true, undefined, { revalidate: true }),
      resetErrorBoundary()
    } catch (retryError) {
      logErrorToProduction('Error during retry:', { data: retryError }),
      Sentry.captureException(retryError)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    <div className='flex items-center justify-center min-h-[400px] p-6'>
      <div className='max-w-md w-full space-y-4'>
        <Alert variant='destructive'>
          <AlertCircle className='h-4 w-4' />
<<<<<<< HEAD
=======
=======
    <div className="flex items-center justify-center min-h-[400px] p-6">
      <div className="max-w-md w-full space-y-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <AlertTitle>Something went wrong in the marketplace</AlertTitle>
          <AlertDescription className='mt-2'>
            {error?.message ||
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
<<<<<<< HEAD
            variant='outline'
            className='w-full'          >
            Reload Page
          </Button>
        </div>
=======
<<<<<<< HEAD
            variant='outline'
            className='w-full'
=======
    <div className="flex items-center justify-center min-h-[400px] p-6">
      <div className="max-w-md w-full space-y-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Something went wrong in the marketplace</AlertTitle>
          <AlertDescription className="mt-2">
            {error?.message || 'An unexpected error occurred while loading marketplace content.'}
          </AlertDescription>
        </Alert>
        
        <div className="flex flex-col space-y-2">
          <Button 
            onClick={handleRetry}
            className="w-full"
            variant="default"
          >
            <RefreshCcw className="mr-2 h-4 w-4" />
            Retry
          </Button>
          
          <Button 
            onClick={() => window.location.reload()}
            variant="outline"
            className="w-full"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            variant="outline"
            className="w-full"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          >
            Reload Page
          </Button>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

        <div className='text-center text-sm text-muted-foreground'>
          If the problem persists, please{' '}
          <a
            href='mailto:support@example.com'
<<<<<<< HEAD
            className='text-primary hover:underline'          >
=======
            className='text-primary hover:underline'
=======
        
        <div className="text-center text-sm text-muted-foreground">
          If the problem persists, please{' '}
          <a 
            href="mailto: support@example.com" 
            className="text-primary hover:underline"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
        <div className="text-center text-sm text-muted-foreground">
          If the problem persists, please{' '}
          <a 
            href="mailto: support@example.com" 
            className="text-primary hover:underline"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            contact support
          </a>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface MarketplaceErrorBoundaryProps {
  children: React.ReactNode;

export function MarketplaceErrorBoundary({
  children,
}: MarketplaceErrorBoundaryProps) {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    // Log boundary errors to Sentry
    logErrorToProduction('MarketplaceErrorBoundary caught an error:', error, {
      componentStack: errorInfo.componentStack,
    });

    Sentry.withScope(scope => {
      scope.setTag('errorBoundary', 'marketplace');
      scope.setContext('errorInfo', {
        componentStack: errorInfo.componentStack || undefined,
      });
      scope.setLevel('error');
      Sentry.captureException(error);
    });
  };

<<<<<<< HEAD
      >
      {children}
    </ErrorBoundary>
  );
} 
=======
<<<<<<< HEAD
  
=======
}

interface MarketplaceErrorBoundaryProps {
  children: React.ReactNode,
}

export function MarketplaceErrorBoundary({ children }: MarketplaceErrorBoundaryProps) {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    // Log boundary errors to Sentry
    logErrorToProduction('MarketplaceErrorBoundary caught an error:', error, { componentStack: errorInfo.componentStack });
    Sentry.withScope((scope) => {
      scope.setTag('errorBoundarymarketplace');
      scope.setContext('errorInfo', {
        componentStack: errorInfo.componentStack || undefined});
      scope.setLevel('error');
      Sentry.captureException(error)
    })
  };


=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  return (
    <ErrorBoundary 
      FallbackComponent={MarketplaceErrorFallback}
      onError={handleError}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    >
      {children}
    </ErrorBoundary>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
} 
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
} 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
