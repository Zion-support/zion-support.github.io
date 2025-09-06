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
    }

          >


        
        

          >
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


  );

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
}
