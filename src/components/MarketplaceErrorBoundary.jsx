import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';
import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RefreshCcw, AlertCircle function MarketplaceErrorFallback({ error, resetErrorBoundary }) {
    const handleRetry = async () => {
        try {
            // Re-call SWR mutate('*') to refresh all cached data
<<<<<<< HEAD
            await mutate(() => true, null, { revalidate: true });
            resetErrorBoundary()}
=======
            await mutate(() => true, null, { revalidate: true });
            resetErrorBoundary();
<<<<<<< HEAD

        catch (retryError) {
<<<<<<< HEAD
            // // // console.error('Error during retry:', retryError);
=======
            // // // // // // // console.error('Error during retry:', retryError);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
            Sentry.captureException(retryError);

=======
        }
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
        catch (retryError) {
            console.error('Error during retry:', retryError);
            Sentry.captureException(retryError)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    };
    return (<div className="flex items-center justify-center min-h-[400px] p-6">
      <div className="max-w-md w-full space-y-4">
        <Alert variant="destructive">
          <AlertCircle aria-hidden="true" className="h-4 w-4"/>
          <AlertTitle>Something went wrong in the marketplace</AlertTitle>
          <AlertDescription className="mt-2">
            {error?.message || 'An unexpected error occurred while loading marketplace content.'}
          </AlertDescription>
        </Alert>

        <div className="flex flex-col space-y-2">
          <Button onClick={handleRetry} className="w-full" variant="default">
            <RefreshCcw aria-hidden="true" className="mr-2 h-4 w-4"/>
            Retry
          </Button>

          <Button onClick={() => window.location.reload()} variant="outline" className="w-full">
            Reload Page
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          If the problem persists, please{' '}
          <a href="mailto:support@example.com" className="text-primary hover:underline">
            contact support
          </a>
        </div>
      </div>
<<<<<<< HEAD
    </div>);

=======
    </div>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
export function MarketplaceErrorBoundary({ children }) {
    const handleError = (error, errorInfo) => {
        // Log boundary errors to Sentry
<<<<<<< HEAD
        // // // console.error('MarketplaceErrorBoundary caught an error:', error, errorInfo);
=======
        // // // // // // // console.error('MarketplaceErrorBoundary caught an error:', error, errorInfo);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
        Sentry.withScope((scope) => {
            scope.setTag('errorBoundary', 'marketplace');
            scope.setContext('errorInfo', {
                componentStack: errorInfo.componentStack || null,
            });
            scope.setLevel('error');
            Sentry.captureException(error)})};
    return (<ErrorBoundary FallbackComponent={MarketplaceErrorFallback} onError={handleError}>
      {children}
<<<<<<< HEAD
    </ErrorBoundary>);
}}}}}
=======
    </ErrorBoundary>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
