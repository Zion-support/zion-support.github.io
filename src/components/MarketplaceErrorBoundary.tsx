<<<<<<< HEAD
import React from 'react',
import { ErrorBoundary, FallbackProps } from 'react-error-boundary',
import * as Sentry from '@sentry/nextjs',
import { mutate } from 'swr',
import { Button } from '@/components/ui/button',
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',
import { RefreshCcw, AlertCircle } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger',
interface MarketplaceErrorFallbackProps extends FallbackProps {
  // Additional props if needed
}
=======
import React from 'react';
import * as Sentry from '@sentry/nextjs';


interface MarketplaceErrorFallbackProps extends FallbackProps {_// Additional props if needed}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

function MarketplaceErrorFallback(_{_error, _resetErrorBoundary}: MarketplaceErrorFallbackProps) {_const _handleRetry = async () => {
    try {
      // Re-call SWR mutate('*') to refresh all cached data
<<<<<<< HEAD
      await mutate(() => true, undefined, { revalidate: true }),
      resetErrorBoundary()
    } catch (retryError) {
      logErrorToProduction('Error during retry:', { data: retryError }),
      Sentry.captureException(retryError)
=======
      await mutate__(() => true, _undefined, _{ revalidate: true});
      resetErrorBoundary();
    } catch (retryError) {_logErrorToProduction('Error during retry:', _{ data: retryError});
      Sentry.captureException(retryError);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  return (
    <div className=&quot;flex items-center justify-center min-h-[400px] p-6&quot;>
      <div className=&quot;max-w-md w-full space-y-4&quot;>
        <Alert variant=&quot;destructive&quot;>
          <AlertCircle className=&quot;h-4 w-4&quot; />
          <AlertTitle>Something went wrong in the marketplace</AlertTitle>
          <AlertDescription className=&quot;mt-2&quot;>
            {error?.message || 'An unexpected error occurred while loading marketplace content.'}
=======
  return (_<div className="flex items-center justify-center min-h-[400px] p-6">
      <div className="max-w-md w-full space-y-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Something went wrong in the marketplace</AlertTitle>
          <AlertDescription className="mt-2">
            {_error?.message || 'An unexpected error occurred while loading marketplace content.'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </AlertDescription>
        </Alert>
        
        <div className=&quot;flex flex-col space-y-2&quot;>
          <Button 
<<<<<<< HEAD
            onClick={handleRetry}
            className=&quot;w-full&quot;
            variant=&quot;default&quot;
=======
            onClick={_handleRetry}
            className="w-full"
            variant="default"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <RefreshCcw className=&quot;mr-2 h-4 w-4&quot; />
            Retry
          </Button>
          
          <Button 
<<<<<<< HEAD
            onClick={() => window.location.reload()}
            variant=&quot;outline&quot;
            className=&quot;w-full&quot;
=======
            onClick={_() => window.location.reload()}
            variant="outline"
            className="w-full"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            Reload Page
          </Button>
        </div>
        
<<<<<<< HEAD
        <div className=&quot;text-center text-sm text-muted-foreground&quot;>
          If the problem persists, please{' '}
=======
        <div className="text-center text-sm text-muted-foreground">
          If the problem persists, please{_' '}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <a 
<<<<<<< HEAD
            href="mailto: support@example.com" 
            className="text-primary hover:underline"
=======
            href=&quot;mailto:support@example.com&quot; 
            className=&quot;text-primary hover:underline&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          >
            contact support
          </Link>
        </div>
      </div>
    </div>
  )
}

<<<<<<< HEAD
interface MarketplaceErrorBoundaryProps {
  children: React.ReactNode
}
=======
interface MarketplaceErrorBoundaryProps {_children: React.ReactNode;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function MarketplaceErrorBoundary(_{_children}: MarketplaceErrorBoundaryProps) {_const _handleError = (_error: Error, _errorInfo: React.ErrorInfo) => {
    // Log boundary errors to Sentry
<<<<<<< HEAD
    logErrorToProduction('MarketplaceErrorBoundary caught an error:', error, { componentStack: errorInfo.componentStack }),
    
    Sentry.withScope((scope) => {
      scope.setTag('errorBoundarymarketplace'),
      scope.setContext('errorInfo', {
        componentStack: errorInfo.componentStack || undefined}),
      scope.setLevel('error'),
      Sentry.captureException(error)
    })
  },
=======
    logErrorToProduction('MarketplaceErrorBoundary caught an error:', _error, _{ componentStack: errorInfo.componentStack});
    
    Sentry.withScope(_(scope) => {_scope.setTag('errorBoundary', _'marketplace');
      scope.setContext('errorInfo', _{
        componentStack: errorInfo.componentStack || undefined});
      scope.setLevel('error');
      Sentry.captureException(error);
    });
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <ErrorBoundary 
      FallbackComponent={_MarketplaceErrorFallback}
      onError={_handleError}
    >
      {_children}
    </ErrorBoundary>
  )
} 