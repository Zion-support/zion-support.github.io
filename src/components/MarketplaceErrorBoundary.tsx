<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/MarketplaceErrorBoundary.tsx

=======
=======
import React from 'react';
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import React from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { ErrorBoundary, FallbackProps  } from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';
import { mutate  } from 'swr';
import { Button  } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle  } from '@/components/ui/alert';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react'
import {ErrorBoundary, FallbackProps} from 'react-error-boundary'
import * as Sentry from '@sentry/nextjs'
import { mutate } from 'swr'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
import React from 'react';
import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/MarketplaceErrorBoundary.tsx
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { RefreshCcw, AlertCircle } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';
interface MarketplaceErrorFallbackProps extends FallbackProps {
  // Additional props if needed
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/MarketplaceErrorBoundary.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/MarketplaceErrorBoundary.tsx
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
<<<<<<<< HEAD:src/components/MarketplaceErrorBoundary.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/MarketplaceErrorBoundary.tsx
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
<<<<<<<< HEAD:src/components/MarketplaceErrorBoundary.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/MarketplaceErrorBoundary.tsx
function MarketplaceErrorFallback({ error, resetErrorBoundary }: MarketplaceErrorFallbackProps) {
  const handleRetry = async () => {
    try {
      // Re-call SWR mutate('*') to refresh all cached data
      await mutate(() => true, undefined, { revalidate: true });
<<<<<<<< HEAD:src/components/MarketplaceErrorBoundary.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/MarketplaceErrorBoundary.tsx
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      resetErrorBoundary()
    } catch (retryError) {
      logErrorToProduction('Error during retry:', { data: retryError })
      Sentry.captureException(retryError)
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/MarketplaceErrorBoundary.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import {ErrorBoundary, FallbackProps} from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/MarketplaceErrorBoundary.tsx
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react';
import {ErrorBoundary, FallbackProps} from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RefreshCcw, AlertCircle } from 'lucide-react';
<<<<<<< HEAD
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
<<<<<<<< HEAD:src/components/MarketplaceErrorBoundary.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/MarketplaceErrorBoundary.tsx
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
<<<<<<<< HEAD:src/components/MarketplaceErrorBoundary.tsx


>>>>>>>     }
========
    }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/MarketplaceErrorBoundary.tsx
  }
=======
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
        
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

            onClick={() => window.location.reload()}
=======
>>>>>>>             onClick={() => window.location.reload()}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            onClick={() => window.location.reload()}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            variant="outline"
            className="w-full"
          >
            Reload Page
          </Button>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/MarketplaceErrorBoundary.tsx
<<<<<<< HEAD

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/MarketplaceErrorBoundary.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className='text-center text-sm text-muted-foreground'>
          If the problem persists, please{' '}
          <a
            href='mailto:support@example.com'
            className='text-primary hover:underline'          >
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className="text-center text-sm text-muted-foreground">
          If the problem persists, please{' '}
          <a
            href="mailto: support@example.com"
            className="text-primary hover:underline"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/MarketplaceErrorBoundary.tsx
>>>>>>>         <div className="text-center text-sm text-muted-foreground">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div className="text-center text-sm text-muted-foreground">
>>>>>>>           If the problem persists, please{' '}
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        
        
        <div className="text-center text-sm text-muted-foreground">
          If the problem persists, please{' '}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <a 
            href="mailto: support@example.com" 
            className="text-primary hover:underline"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

            contact support
=======
          >
>>>>>>>             contact support
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          >
          >
            contact support
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </Link>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
    <ErrorBoundary
ursor/fix-website-loading-errors-and-merge-6662
========
          >
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/MarketplaceErrorBoundary.tsx
            contact support
          </a>
        </div>
      </div>
    </div>
<<<<<<<< HEAD:src/components/MarketplaceErrorBoundary.tsx
>>>>>>> 
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/MarketplaceErrorBoundary.tsx
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
=======
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
        ;
        <div className="flex flex-col space-y-2">;
          <Button ;
=======
        <div className="flex flex-col space-y-2">;
          <Button;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            onClick={handleRetry}
            className="w-full";
            variant="default";
          >;
            <RefreshCcw className="mr-2 h-4 w-4" />;
            Retry;
          </Button>;
<<<<<<< HEAD
          ;
          <Button ;
            onClick={() => window.location.reload()}
            variant="outline";
            className="w-full";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          <Button;
            onClick={() => window.location.reload()}
            variant="outline";
            className="w-full";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          >;
            Reload Page;
          </Button>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
        ;
        <div className="text-center text-sm text-muted-foreground">;
          If the problem persists, please{' '}
          <a ;
            href="mailto:support@example.com" ;
            className="text-primary hover:underline";
          >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
        <div className="text-center text-sm text-muted-foreground">;
          If the problem persists, please{' '}
          <a;
            href="mailto: support@example.com";
            className="text-primary hover:underline";
          >;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            contact support;
          </a>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<<< HEAD:src/components/MarketplaceErrorBoundary.tsx

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
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/MarketplaceErrorBoundary.tsx
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
<<<<<<<< HEAD:src/components/MarketplaceErrorBoundary.tsx
  return (;
    <ErrorBoundary;
<<<<<<< HEAD

      FallbackComponent={MarketplaceErrorFallback}
=======
>>>>>>>       FallbackComponent={MarketplaceErrorFallback}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      onError={handleError}
    >
========
      >;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/MarketplaceErrorBoundary.tsx
      {children}
    </ErrorBoundary>;
  );
}   return (
    <ErrorBoundary
<<<<<<<< HEAD:src/components/MarketplaceErrorBoundary.tsx

      FallbackComponent={MarketplaceErrorFallback}
      onError={handleError}>;
      {children}

    </ErrorBoundary>;
  );
} ;
<<<<<<< HEAD

=======
}
========
      FallbackComponent={MarketplaceErrorFallback}
      onError={handleError}>;
      {children}
    </ErrorBoundary>;
  );
} ;
  );
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/MarketplaceErrorBoundary.tsx
}
interface MarketplaceErrorBoundaryProps {
  children: React.ReactNode,
}
<<<<<<<< HEAD:src/components/MarketplaceErrorBoundary.tsx
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
========
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
      {children}
    </ErrorBoundary>);
}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/MarketplaceErrorBoundary.tsx
=======
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
