<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import React from 'react';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
    }
=======
import React from 'react';
import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { RefreshCcw, AlertCircle } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';
interface MarketplaceErrorFallbackProps extends FallbackProps {
  // Additional props if needed
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
import {ErrorBoundary, FallbackProps} from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';
<<<<<<< HEAD
import React from 'react';
import {ErrorBoundary, FallbackProps} from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RefreshCcw, AlertCircle } from 'lucide-react';
<<<<<<< HEAD
  };
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (function MarketplaceErrorFallback(): any ({ error, resetErrorBoundary }: MarketplaceErrorFallbackProps) {;
  const handleRetry = async () => {;
    try {;
      // Re-call SWR mutate('*') to refresh all cached data;
      await mutate((,) => true, undefined, { revalidate: true }),;
      resetErrorBoundary();
    } catch (retryError) {;
      logErrorToProduction('Error during retry:', { data: retryError }),;
      Sentry && Sentry.captureException(retryError);
    }
<<<<<<< HEAD
  }
import {logErrorToProduction} from '@/utils/productionLogger',;
interface MarketplaceErrorFallbackProps extends FallbackProps {;
  // Additional props if needed;
}
;
function MarketplaceErrorFallback({ error, resetErrorBoundary }: MarketplaceErrorFallbackProps) {;
  const handleRetry = async () => {;
    try {;
      // Re-call SWR mutate('*') to refresh all cached data;
      await mutate(() => true, undefined, { revalidate: true }),;
      resetErrorBoundary();
    } catch (retryError) {;
      logErrorToProduction('Error during retry:', { data: retryError }),;
      Sentry.captureException(retryError);
    }
  },

  return (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
          >
            Reload Page
          </Button>
        </div>
<<<<<<< HEAD
        <div className='text-center text-sm text-muted-foreground'>
          If the problem persists, please{' '}
          <a
            href='mailto:support@example.com'
            className='text-primary hover:underline'          >
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <div className="text-center text-sm text-muted-foreground">
          If the problem persists, please{' '}
          <a
            href="mailto: support@example.com"
            className="text-primary hover:underline"
<<<<<<< HEAD
        
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

          >


<<<<<<< HEAD
        
        

          >
=======
        
        

        <div className="text-center text-sm text-muted-foreground">
          If the problem persists, please{' '}
          <a 
            href="mailto: support@example.com" 
            className="text-primary hover:underline"
<<<<<<< HEAD
          >
          >
          >
            contact support
          </Link>
        </div>
      </div>
    </div>
  )
    <ErrorBoundary
ursor/fix-website-loading-errors-and-merge-6662
          >
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            contact support
          </a>
        </div>
      </div>
    </div>
<<<<<<< HEAD
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
import React from 'react',;
import { ErrorBoundary, FallbackProps } from 'react-error-boundary',;
import * as Sentry from '@sentry/nextjs',;
import { mutate } from 'swr',;
import { Button } from '@/components/ui/button',;
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',;
import { RefreshCcw, AlertCircle } from 'lucide-react';
import {logErrorToProduction} from '@/utils/productionLogger',;
interface MarketplaceErrorFallbackProps extends FallbackProps {;
  // Additional props if needed;
}
;
function MarketplaceErrorFallback({ error, resetErrorBoundary } MarketplaceErrorFallbackProps) {;
  const handleRetry = async () => {;
    try {;
      // Re-call SWR mutate('*') to refresh all cached data;
      await mutate(() => true, undefined, { revalidate:true }),;
      resetErrorBoundary(),;
    } catch (retryError) {;
      logErrorToProduction('Error during retry:', { data:retryError }),;
      Sentry.captureException(retryError),;
    }
  },;
;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface MarketplaceErrorBoundaryProps {
  children: React.ReactNode
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
        componentStack: errorInfo.componentStack |undefined
      })
      scope.setLevel('error')
      Sentry.captureException(error)
    })
  }
    <ErrorBoundary 
  },;
  return (;
    <div className="flex items-center justify-center min-h-[400px] p-6">;
      <div className="max-w-md w-full space-y-4">;
        <Alert variant="destructive">;
          <AlertCircle className="h-4 w-4" />;
          <AlertTitle>Something went wrong in the marketplace</AlertTitle>;
          <AlertDescription className="mt-2">;
            {error?.message || 'An unexpected error occurred while loading marketplace content.'}
          </AlertDescription>;
        </Alert>;
        <div className="flex flex-col space-y-2">;
          <Button;
            onClick={handleRetry}
            className="w-full";
            variant="default";
          >;
            <RefreshCcw className="mr-2 h-4 w-4" />;
            Retry;
          </Button>;
          <Button;
            onClick={() => window.location.reload()}
            variant="outline";
            className="w-full";
          >;
            Reload Page;
          </Button>;
        </div>;
<<<<<<< HEAD
        ;
        <div className="text-center text-sm text-muted-foreground">;
          If the problem persists, please{' '}
          <a ;
            href="mailto:support@example.com" ;
            className="text-primary hover:underline";
          >;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <div className="text-center text-sm text-muted-foreground">;
          If the problem persists, please{' '}
          <a;
            href="mailto: support@example.com";
            className="text-primary hover:underline";
          >;
            contact support;
          </a>;
        </div>;
      </div>;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    </ErrorBoundary>);
}   return (


    <div className='flex items-center justify-center min-h-[400px] p-6'>;
      <div className='max-w-md w-full space-y-4'>;
        <Alert variant='destructive'>;
          <AlertCircle className='h-4 w-4' />;
          <AlertDescription className='mt-2'>;
            {error?.message ||;
              'An unexpected error occurred while loading marketplace content.'}
  )

    <ErrorBoundary 

<<<<<<< HEAD

  );

=======
  },;
  return (;
    <div className="flex items-center justify-center min-h-[400px] p-6">;
      <div className="max-w-md w-full space-y-4">;
        <Alert variant="destructive">;
          <AlertCircle className="h-4 w-4" />;
          <AlertTitle>Something went wrong in the marketplace</AlertTitle>;
          <AlertDescription className="mt-2">;
            {error?.message || 'An unexpected error occurred while loading marketplace content.'}
  }
      >;
      {children}
    </ErrorBoundary>);
}   return (
    <div className='flex items-center justify-center min-h-[400px] p-6'>;
      <div className='max-w-md w-full space-y-4'>;
        <Alert variant='destructive'>;
          <AlertCircle className='h-4 w-4' />;
          <AlertDescription className='mt-2'>;
            {error?.message ||;
              'An unexpected error occurred while loading marketplace content.'}
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
      onError={handleError}
    >
      >;
      {children}
    </ErrorBoundary>;
  );
}   return (
    <ErrorBoundary
  );
}
      FallbackComponent={MarketplaceErrorFallback}
      onError={handleError}>;
      {children}
    </ErrorBoundary>;
  );
} ;
  );
}
interface MarketplaceErrorBoundaryProps {
  children: React.ReactNode,
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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


  return (
    <ErrorBoundary 
    <ErrorBoundary;
      FallbackComponent={MarketplaceErrorFallback}
      on_error={handle_error}
    >;
<<<<<<< HEAD
=======
      {children}
    </div>;
  );}
;
interface MarketplaceErrorBoundaryProps {;
  children:React.ReactNode;
}
;
export function MarketplaceErrorBoundary({ children } MarketplaceErrorBoundaryProps) {;
  const handleError = (error:Error, errorInfo:React.ErrorInfo) => {;
    // Log boundary errors to Sentry;
    logErrorToProduction('MarketplaceErrorBoundary caught an error:', error, { componentStack:errorInfo.componentStack }),;
    ;
    Sentry.withScope((scope) => {;
      scope.setTag('errorBoundarymarketplace'),;
      scope.setContext('errorInfo', {;
        componentStack:errorInfo.componentStack || undefined}),;
      scope.setLevel('error'),;
      Sentry.captureException(error),;
    }),;
  },;
;
  return (;
    <ErrorBoundary ;
      FallbackComponent={MarketplaceErrorFallback}
      onError={handleError}
    >;
      {children}
    </ErrorBoundary>;
  ),;} 
 function MarketplaceErrorFallback ({;
  error, resetErrorBoundary ;
}: MarketplaceErrorFallbackProps) {;
  const handleRetry = async () => {;
  try {;
  //Re-call SWR mutate ('*') to refresh all cached data ;
}
};
</AlertDescription> </Alert> <div className="flex flex-col space-y-2" > <Button > <RefreshCcw className="mr-2 h-4 w-4" /> Retry </Button> <Button > Reload Page </Button> </div> <a > contact support </Link> </div> </div> </div>) ;
}export function MarketplaceErrorBoundary ({;
  children ;
}: MarketplaceErrorBoundaryProps) {;
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {;
  //Log boundary errors to Sentry return (<ErrorBoundary FallbackComponent= {;
  MarketplaceErrorFallback ;
}onError= {;
  handleError ;
}> {;
  children ;
}</ErrorBoundary>) ;
}'"
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    </div>;
  );
}
;
interface MarketplaceErrorBoundaryProps {;
  children: React.ReactNode;
}
;
export function MarketplaceErrorBoundary({ children }: MarketplaceErrorBoundaryProps) {;
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {;
    // Log boundary errors to Sentry;
    logErrorToProduction('MarketplaceErrorBoundary caught an error:', error, { componentStack: errorInfo.componentStack }),;
    Sentry.withScope((scope) => {;
      scope.setTag('errorBoundarymarketplace'),;
      scope.setContext('errorInfo', {;
        componentStack: errorInfo.componentStack || undefined}),;
      scope.setLevel('error');
      Sentry.captureException(error);
    });
  };
  return (;
    <ErrorBoundary;
      FallbackComponent={MarketplaceErrorFallback}
      onError={handleError}
    >
      {children}
    </ErrorBoundary>;
  );
} ;
<<<<<<< HEAD
}
}
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  );
}

<<<<<<< HEAD
    </ErrorBoundary>);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
