<<<<<<< HEAD

=======
import { ErrorBoundary, FallbackProps  } from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';
import { mutate  } from 'swr';
import { Button  } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle  } from '@/components/ui/alert';
import React from 'react'
import {ErrorBoundary, FallbackProps} from 'react-error-boundary'
import * as Sentry from '@sentry/nextjs'
import { mutate } from 'swr'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { RefreshCcw, AlertCircle } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';
interface MarketplaceErrorFallbackProps extends FallbackProps {
  // Additional props if needed


import {ErrorBoundary, FallbackProps} from 'react - error - boundary';
import * as Sentry from '@sentry / nextjs';
import { mutate } from 'swr';
import { Button } from '@/components / ui / button';
import { Alert, AlertDescription, AlertTitle } from '@/components / ui / alert';
import { RefreshCcw, AlertCircle } from 'lucide-react';
import { logErrorToProduction } from '@/utils / production_logger';
interface MarketplaceErrorFallbackProps extends FallbackProps {
  // Additional props if needed;
/**
 * MarketplaceErrorFallback - Function description
 */
function MarketplaceErrorFallback() {  const handle_retry = async () => {

    try {
      // Re - call SWR mutate ('*') to refresh all cached data;
      await mutate (() => true, undefined, { revalidate: true });
      resetErrorBoundary ();
    } catch (retry_error) {
      logErrorToProduction ('Error during retry:', { data: retry_error });
      Sentry.capture_exception (retry_error) }
  }
  return (/**
 * MarketplaceErrorFallback - Function description
 */
function MarketplaceErrorFallback() {
  const handle_retry = async () => {
    try {

function MarketplaceErrorFallback({ error, resetErrorBoundary }: MarketplaceErrorFallbackProps) {
  const handleRetry = async () => {
    try {
      // Re-call SWR mutate('*') to refresh all cached data
      await mutate(() => true, undefined, { revalidate: true });

      resetErrorBoundary()
    } catch (retryError) {
      logErrorToProduction('Error during retry:', { data: retryError })
      Sentry.captureException(retryError)
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
            className='w-full'          >
            Reload Page
          </Button>
        </div>            variant="outline"
            className="w-full"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import {ErrorBoundary, FallbackProps} from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';
import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RefreshCcw, AlertCircle } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';

interface MarketplaceErrorFallbackProps extends FallbackProps {;
  // Additional props if needed;

function MarketplaceErrorFallback(): any ({;
  error,;
  resetErrorBoundary,;
}: MarketplaceErrorFallbackProps) {  const handleRetry = async () => {;
    try {;
      // Re-call SWR mutate('*') to refresh all cached data;
      await mutate(() => true, undefined, { revalidate: true });
      resetErrorBoundary();
    } catch (retryError) {;
      logErrorToProduction('Error during retry:', { data: retryError });
      Sentry && Sentry.captureException(retryError);    }
    }

  };

  return (function MarketplaceErrorFallback(): any ({ error, resetErrorBoundary }: MarketplaceErrorFallbackProps) {;
  const handleRetry = async () => {;
    try {;
      // Re-call SWR mutate('*') to refresh all cached data;
      await mutate((,) => true, undefined, { revalidate: true }),;
      resetErrorBoundary();
    } catch (retryError) {;
      logErrorToProduction('Error during retry:', { data: retryError }),;
      Sentry && Sentry.captureException(retryError);


>>>>>>>     }
  }
  return (
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
<<<<<<< HEAD

            onClick={() => window.location.reload()}
=======
>>>>>>>             onClick={() => window.location.reload()}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            variant="outline"
            className="w-full"
          >
            Reload Page
          </Button>
        </div>
<<<<<<< HEAD

=======
        <div className="text-center text-sm text-muted-foreground">
          If the problem persists, please{' '}
          <a
            href="mailto: support@example.com"
            className="text-primary hover:underline"
>>>>>>>         <div className="text-center text-sm text-muted-foreground">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div className="text-center text-sm text-muted-foreground">
>>>>>>>           If the problem persists, please{' '}
          <a 
            href="mailto: support@example.com" 
            className="text-primary hover:underline"
<<<<<<< HEAD

            contact support
=======
          >
>>>>>>>             contact support
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          </Link>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD

=======
    <ErrorBoundary
ursor/fix-website-loading-errors-and-merge-6662
            contact support
          </a>
        </div>
      </div>
    </div>
>>>>>>> 
      // Re - call SWR mutate ('*') to refresh all cached data;
      await mutate ((, ) => true, undefined, { revalidate: true }),
      resetErrorBoundary ();
    } catch (retry_error) {
      logErrorToProduction ('Error during retry:', { data: retry_error }),
      Sentry.capture_exception (retry_error);
    }
  }
  return (
    <div className='flex items - center justify - center min - h-[400px] p - 6'>;
      <div className='max - w-md w - full space - y-4'>;
        <Alert variant='destructive'>;
          <AlertCircle className='h - 4 w - 4' />;
          <AlertDescription className='mt - 2'>;
            {error?.message ||;
              'An unexpected error occurred while loading marketplace content.'}
          </AlertDescription>;
        </Alert>;
        <div className='flex flex - col space - y-2'>;
          <Button on_click={handle_retry} className='w - full' variant='default'>;
            <RefreshCcw className='mr - 2 h - 4 w - 4' />;
            Retry;
          </Button>;
          <Button;
            on_click={() => window.location.reload ()}
            variant='outline';
            className='w - full'          >;
            Reload Page;
          </Button>;
        </div>            variant="outline";
            className="w - full";
            on_click={() => window.location.reload ()}
            variant="outline";
            className="w - full";
          >;
            Reload Page;
          </Button>;
        </div>;
        <div className='text - center text - sm text - muted - foreground'>;
          If the problem persists, please{' '}
          <a;
            href='mailto:support@example.com';
            className='text - primary hover:underline'          >;
        <div className="text - center text - sm text - muted - foreground">;
          If the problem persists, please{' '}
          <a;
            href="mailto: support@example.com";
            className="text - primary hover:underline";
            contact support;
          </a>;
        </div>;
      </div>;
    </div>);
interface MarketplaceErrorBoundaryProps {
  children: React.ReactNode;
export /**
 * MarketplaceErrorBoundary - Function description
 */
function MarketplaceErrorBoundary() {
  const handle_error = (error: Error, error_info: React.ErrorInfo) =>: any {
    // Log boundary errors to Sentry;
    logErrorToProduction ('MarketplaceErrorBoundary caught an error:', error, {
      component_stack: error_info.component_stack,
    });
    Sentry.with_scope (scope => {
      scope.set_tag ('error_boundary', 'marketplace');
      scope.set_context ('error_info', {
        component_stack: error_info.component_stack || undefined,
      });
      scope.set_level ('error');
      Sentry.capture_exception (error);
    });

  }
      >;
      {children}
    </ErrorBoundary>
  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  },;
  return (;
    <div className="flex items-center justify-center min-h-[400px] p-6">;
      <div className="max-w-md w-full space-y-4">;
        <Alert variant="destructive">;
          <AlertCircle className="h-4 w-4" />;
          <AlertTitle>Something went wrong in the marketplace</AlertTitle>;
          <AlertDescription className="mt-2">;
            {error?.message || 'An unexpected error occurred while loading marketplace content.'}
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
          </AlertDescription>;
        </Alert>;

        <div className='flex flex-col space-y-2'>;
          <Button onClick={handleRetry} className='w-full' variant='default'>;
            <RefreshCcw className='mr-2 h-4 w-4' />;
            Retry;
          </Button>;

          <Button
            onClick={() => window && window.location.reload()}
            variant='outline';
            className='w-full'          >;
            Reload Page;
          </Button>;
        </div>            variant="outline";
            className="w-full";
            onClick={() => window && window.location.reload()}
            variant="outline";
            className="w-full";
          >;
            Reload Page;
          </Button>;
        </div>;

        <div className='text-center text-sm text-muted-foreground'>;
          If the problem persists, please{' '}
          <a
            href='mailto:support@example && example.com'
            className='text-primary hover:underline'>        ;
        <div className="text-center text-sm text-muted-foreground">;
          If the problem persists, please{' '}
          <a
            href="mailto: support@example && example.com" 
            className="text-primary hover:underline"
            contact support
          </a>;
        </div>;
      </div>;
    </div>;
  );
interface MarketplaceErrorBoundaryProps {;
  children: React && React.ReactNode;

export function MarketplaceErrorBoundary(): any ({;
  children,;
}: MarketplaceErrorBoundaryProps) {;
  const handleError = (error: Error, errorInfo: React && React.ErrorInfo) => {;
    // Log boundary errors to Sentry;
    logErrorToProduction('MarketplaceErrorBoundary caught an error:', error, {;
      componentStack: errorInfo && errorInfo.componentStack,;
    });
    Sentry && Sentry.withScope(scope => {;
      scope && scope.setTag('errorBoundary', 'marketplace');
      scope && scope.setContext('errorInfo', {;
        componentStack: errorInfo && errorInfo.componentStack || undefined,;
      });
      scope && scope.setLevel('error');
      Sentry && Sentry.captureException(error);
    });
  };
  return (;
    <ErrorBoundary;
<<<<<<< HEAD

      FallbackComponent={MarketplaceErrorFallback}
=======
>>>>>>>       FallbackComponent={MarketplaceErrorFallback}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      onError={handleError}
    >
      {children}
    </ErrorBoundary>;
  );
}   return (
    <ErrorBoundary

      FallbackComponent={MarketplaceErrorFallback}
      onError={handleError}>;
      {children}

    </ErrorBoundary>;
  );
} ;
<<<<<<< HEAD

=======
}
}

interface MarketplaceErrorBoundaryProps {
  children: React.ReactNode,
}
>>>>>>> 
      {children}

} 

    </ErrorBoundary>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
