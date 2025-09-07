<<<<<<< HEAD
import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';
import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
=======
<<<<<<< HEAD
import React from 'react';
import React from 'react';
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
import React from 'react';
import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
=======
import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
import { RefreshCcw, AlertCircle } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';
interface MarketplaceErrorFallbackProps extends FallbackProps {
  // Additional props if needed
<<<<<<< HEAD
}
=======
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

<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621

function MarketplaceErrorFallback({ error, resetErrorBoundary }: MarketplaceErrorFallbackProps) {
  const handleRetry = async () => {
    try {
      // Re-call SWR mutate('*') to refresh all cached data
<<<<<<< HEAD
      await mutate(() => true, undefined, { revalidate: true }),
      resetErrorBoundary()
    } catch (retryError) {
      logErrorToProduction('Error during retry:', { data: retryError }),
      Sentry.captureException(retryError)
    }
  };
=======
      await mutate(() => true, undefined, { revalidate: true });

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      resetErrorBoundary()
    } catch (retryError) {
      logErrorToProduction('Error during retry:', { data: retryError })
      Sentry.captureException(retryError)
<<<<<<< HEAD
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
import React from 'react';
import {ErrorBoundary, FallbackProps} from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RefreshCcw, AlertCircle } from 'lucide-react';
<<<<<<< HEAD
  };
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (function MarketplaceErrorFallback(): any ({ error, resetErrorBoundary }: MarketplaceErrorFallbackProps) {;
  const handleRetry = async () => {;
    try {;
      // Re-call SWR mutate('*') to refresh all cached data;
      await mutate((,) => true, undefined, { revalidate: true }),;
      resetErrorBoundary();
    } catch (retryError) {;
      logErrorToProduction('Error during retry:', { data: retryError }),;
      Sentry && Sentry.captureException(retryError);
<<<<<<< HEAD
    }
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
>>>>>>> merged-prs-20250907-203621

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
=======
=======


    }
  }
  return (


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
            onClick={() => window.location.reload()}
            variant="outline"
            className="w-full"
          >
            Reload Page
          </Button>
        </div>
<<<<<<< HEAD
        
=======
<<<<<<< HEAD
        <div className='text-center text-sm text-muted-foreground'>
          If the problem persists, please{' '}
          <a
            href='mailto:support@example.com'
            className='text-primary hover:underline'          >
=======

        

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="text-center text-sm text-muted-foreground">
          If the problem persists, please{' '}
          <a
            href="mailto: support@example.com"
            className="text-primary hover:underline"
<<<<<<< HEAD
        
        
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          >


        
        

>>>>>>> merged-prs-20250907-203621
        <div className="text-center text-sm text-muted-foreground">
          If the problem persists, please{' '}
          <a 
            href="mailto: support@example.com" 
            className="text-primary hover:underline"
<<<<<<< HEAD
          >
=======
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
            contact support
          </a>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
}

interface MarketplaceErrorBoundaryProps {
  children: React.ReactNode
}

export function MarketplaceErrorBoundary({ children }: MarketplaceErrorBoundaryProps) {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    // Log boundary errors to Sentry
    logErrorToProduction('MarketplaceErrorBoundary caught an error:', error, { componentStack: errorInfo.componentStack }),
    
    Sentry.withScope((scope) => {
      scope.setTag('errorBoundarymarketplace');
      scope.setContext('errorInfo', {
        componentStack: errorInfo.componentStack || undefined}),
      scope.setLevel('error');
      Sentry.captureException(error)
    })
  };

  return (
    <ErrorBoundary 
=======
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
      >
      {children}
    </ErrorBoundary>
  )
}   return (
    <ErrorBoundary

>>>>>>> merged-prs-20250907-203621
      FallbackComponent={MarketplaceErrorFallback}
      onError={handleError}
    >
      {children}
    </ErrorBoundary>
  )
<<<<<<< HEAD
} 
=======
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
        ;
        <div className="text-center text-sm text-muted-foreground">;
          If the problem persists, please{' '}
          <a ;
            href="mailto:support@example.com" ;
            className="text-primary hover:underline";
          >;
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
      onError={handleError}
    >
      >;
=======

      >;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {children}
    </ErrorBoundary>;
  );
}   return (
    <ErrorBoundary
<<<<<<< HEAD
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
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <ErrorBoundary 
    <ErrorBoundary;
      FallbackComponent={MarketplaceErrorFallback}
      on_error={handle_error}
    >;
      {children}
<<<<<<< HEAD
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
}
}
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

} 

    </ErrorBoundary>);
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
