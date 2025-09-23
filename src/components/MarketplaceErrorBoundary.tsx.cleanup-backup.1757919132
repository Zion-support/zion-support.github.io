<<<<<<< HEAD
import React from 'react',
import { ErrorBoundary, FallbackProps } from 'react-error-boundary',
import * as Sentry from '@sentry/nextjs',
import { mutate } from 'swr',
import { Button } from '@/components/ui/button',
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',
import { RefreshCcw, AlertCircle } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger',
=======
import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';
import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RefreshCcw, AlertCircle } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';
>>>>>>> origin/auto/autonomy-17186719616


interface MarketplaceErrorFallbackProps extends FallbackProps {
  // Additional props if needed
}

function MarketplaceErrorFallback({ error, resetErrorBoundary }: MarketplaceErrorFallbackProps) {
  const handleRetry = async () => {
    try {
      // Re-call SWR mutate('*') to refresh all cached data
<<<<<<< HEAD
      await mutate(() => true, undefined, { revalidate: true }),
      resetErrorBoundary(),
    } catch (retryError) {
      logErrorToProduction('Error during retry:', { data: retryError }),
      Sentry.captureException(retryError),
    }
  },

    }
  }
=======
      await mutate(() => true, undefined, { revalidate: true });
      resetErrorBoundary();
    } catch (retryError) {
      logErrorToProduction('Error during retry:', { data: retryError });
      Sentry.captureException(retryError);
    }
  };

>>>>>>> origin/auto/autonomy-17186719616
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
            onClick={() => window.location.reload()}
            variant="outline"
            className="w-full"
          >
            Reload Page
          </Button>
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          If the problem persists, please{' '}
          <a 
<<<<<<< HEAD
            href="mailto: support@example.com" 
=======
            href="mailto:support@example.com" 
>>>>>>> origin/auto/autonomy-17186719616
            className="text-primary hover:underline"
          >
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
=======
  );
}

interface MarketplaceErrorBoundaryProps {
  children: React.ReactNode;
>>>>>>> origin/auto/autonomy-17186719616
}

export function MarketplaceErrorBoundary({ children }: MarketplaceErrorBoundaryProps) {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    // Log boundary errors to Sentry
<<<<<<< HEAD
    logErrorToProduction('MarketplaceErrorBoundary caught an error:', error, { componentStack: errorInfo.componentStack }),
    
    Sentry.withScope((scope) => {
      scope.setTag('errorBoundarymarketplace'),
      scope.setContext('errorInfo', {
        componentStack: errorInfo.componentStack || undefined}),
      scope.setLevel('error'),
      Sentry.captureException(error),
    }),
  },
=======
    logErrorToProduction('MarketplaceErrorBoundary caught an error:', error, { componentStack: errorInfo.componentStack });
    
    Sentry.withScope((scope) => {
      scope.setTag('errorBoundary', 'marketplace');
      scope.setContext('errorInfo', {
        componentStack: errorInfo.componentStack || undefined,
      });
      scope.setLevel('error');
      Sentry.captureException(error);
    });
  };
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <ErrorBoundary 
      FallbackComponent={MarketplaceErrorFallback}
      onError={handleError}
    >
      {children}
    </ErrorBoundary>
<<<<<<< HEAD
  ),
} 
=======
  );
} 
>>>>>>> origin/auto/autonomy-17186719616
