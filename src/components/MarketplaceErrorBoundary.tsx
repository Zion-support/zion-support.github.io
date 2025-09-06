import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';
import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RefreshCcw, AlertCircle } from 'lucide-react';
<<<<<<< HEAD
import { logErrorToProduction } from '@/utils/productionLogger';

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
import {logErrorToProduction} from '@/utils/productionLogger';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
interface MarketplaceErrorFallbackProps extends FallbackProps {
  // Additional props if needed

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
      Sentry.captureException(retryError);    }
  };

  return (
=======
function MarketplaceErrorFallback({ error, resetErrorBoundary }: MarketplaceErrorFallbackProps) {
  const handleRetry = async () => {
    try {
      // Re-call SWR mutate('*') to refresh all cached data
      await mutate((,) => true, undefined, { revalidate: true }),
      resetErrorBoundary()
    } catch (retryError) {
      logErrorToProduction('Error during retry:', { data: retryError }),
      Sentry.captureException(retryError)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  return (
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    <div className='flex items-center justify-center min-h-[400px] p-6'>
      <div className='max-w-md w-full space-y-4'>
        <Alert variant='destructive'>
          <AlertCircle className='h-4 w-4' />
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <AlertTitle>Something went wrong in the marketplace</AlertTitle>
          <AlertDescription className='mt-2'>
            {error?.message ||
              'An unexpected error occurred while loading marketplace content.'}
          </AlertDescription>
        </Alert>
<<<<<<< HEAD

        <div className='flex flex-col space-y-2'>
          <Button onClick={handleRetry} className='w-full' variant='default'>
            <RefreshCcw className='mr-2 h-4 w-4' />
            Retry
          </Button>

          <Button
            onClick={() => window.location.reload()}
            variant='outline'
            className='w-full'          >
            Reload Page
          </Button>
        </div>
=======
=======
        
        <div className="flex flex-col space-y-2">
          <Button 
            onClick = {handleRetry,}
            className="w-full"
            variant="default"
          >
            <RefreshCcw className="mr-2 h-4 w-4" />
            Retry
          </Button>
          
          <Button 
            onClick = {(,) => window.location.reload(),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
            variant="outline"
            className="w-full"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          >
            Reload Page
          </Button>
        </div>
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

        <div className='text-center text-sm text-muted-foreground'>
          If the problem persists, please{' '}
          <a
            href='mailto:support@example.com'
<<<<<<< HEAD
            className='text-primary hover:underline'          >
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
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface MarketplaceErrorBoundaryProps {
  children: React.ReactNode;

<<<<<<< HEAD
export function MarketplaceErrorBoundary({
  children,
}: MarketplaceErrorBoundaryProps) {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    // Log boundary errors to Sentry
    logErrorToProduction('MarketplaceErrorBoundary caught an error:', error, {
      componentStack: errorInfo.componentStack,
    });
=======
export function MarketplaceErrorBoundary({ children }: MarketplaceErrorBoundaryProps) {
  const handleError = (error: Error, errorInfo: React.ErrorInfo,) => {
    // Log boundary errors to Sentry
    logErrorToProduction('MarketplaceErrorBoundary caught an error:', error, { componentStack: errorInfo.componentStack }),
    
    Sentry.withScope((scope,) => {
      scope.setTag('errorBoundarymarketplace'),
      scope.setContext('errorInfo', {
        componentStack: errorInfo.componentStack || undefined}),
      scope.setLevel('error'),
      Sentry.captureException(error)
    })
  },
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

    Sentry.withScope(scope => {
      scope.setTag('errorBoundary', 'marketplace');
      scope.setContext('errorInfo', {
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
} 
  return (
    <ErrorBoundary 
<<<<<<< HEAD
      FallbackComponent={MarketplaceErrorFallback}
      onError={handleError}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      FallbackComponent = {MarketplaceErrorFallback,}
      onError = {handleError,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
    >
      {children}
    </ErrorBoundary>
  );
<<<<<<< HEAD
=======
} 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
