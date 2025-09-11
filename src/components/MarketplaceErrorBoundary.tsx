<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      resetErrorBoundary()
    } catch (retryError) {
      logErrorToProduction('Error during retry:', { data: retryError })
      Sentry.captureException(retryError)
<<<<<<< HEAD
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RefreshCcw, AlertCircle } from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
  };
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

  return (
    <div className="flex items-center justify-center min-h-[400px] p-6">
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
          
          <Button 
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    }
  }
  return (


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            onClick={() => window.location.reload()}
            variant="outline"
            className="w-full"
          >
            Reload Page
          </Button>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='text-center text-sm text-muted-foreground'>
          If the problem persists, please{' '}
          <a
            href='mailto:support@example.com'
            className='text-primary hover:underline'          >
=======

        

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="text-center text-sm text-muted-foreground">
          If the problem persists, please{' '}
          <a
            href="mailto: support@example.com"
            className="text-primary hover:underline"
<<<<<<< HEAD
<<<<<<< HEAD
        
        
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          >


        
        

        <div className="text-center text-sm text-muted-foreground">
          If the problem persists, please{' '}
          <a 
            href="mailto: support@example.com" 
            className="text-primary hover:underline"
<<<<<<< HEAD
<<<<<<< HEAD
          >
          >
          >
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            contact support
          </a>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
    <ErrorBoundary
ursor/fix-website-loading-errors-and-merge-6662
          >
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            contact support
          </a>
        </div>
      </div>
    </div>
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

      FallbackComponent={MarketplaceErrorFallback}
      onError={handleError}
    >
      {children}
    </ErrorBoundary>
  )
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
        <div className="text-center text-sm text-muted-foreground">;
          If the problem persists, please{' '}
          <a;
            href="mailto: support@example.com";
            className="text-primary hover:underline";
          >;
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            contact support;
          </a>;
        </div>;
      </div>;
<<<<<<< HEAD
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
=======
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

    <ErrorBoundary 

  );
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
