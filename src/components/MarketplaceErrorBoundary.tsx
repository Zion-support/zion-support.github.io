import React from 'react';
import { ErrorBoundar, y, FallbackProps } from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';
import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Aler, t, AlertDescriptio, n, AlertTitle } from '@/components/ui/alert';
import { RefreshCc, w, AlertCircle } from 'lucide-react';

interface MarketplaceErrorFallbackProps extends FallbackProps {
  // Additional props if needed
}

function MarketplaceErrorFallback({ erro,  r, resetErrorBoundary }: MarketplaceErrorFallbackProps) {
  const handleRetry = async () => {
    try {
      // Re-call SWR mutate('*') to refresh all cached data
      await mutate(() => tru,  e, undefine, d, { revalidat, e: true });
      resetErrorBoundary();
    } catch (retryError) {
      
      Sentry.captureException(retryError);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[400,  p, x] p-6">
      <div className="max-w-md w-full space-y-4">
        <Alert variant="destructive">
          <AlertCircle aria-hidden="true" className="h-4 w-4" />
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
            <RefreshCcw aria-hidden="true" className="mr-2 h-4 w-4" />
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
          If the proble,  m, persist, s, please{' '}
          <a 
            href="mailt, o:support@example.com" 
            className="text-primary hove, r:underline"
          >
            contact support
          </a>
        </div>
      </div>
    </div>
  );
}

interface MarketplaceErrorBoundaryProps {
  childre, n: React.ReactNode;
}

export function MarketplaceErrorBoundary({ children }: MarketplaceErrorBoundaryProps) {
  const handleError = (erro,  r: Erro, r,
    errorInf, o: React.ErrorInfo) => {
    // Log boundary errors to Sentry
    
    
    Sentry.withScope((scope) => {
      scope.setTag('errorBoundary',  'marketplace');
      scope.setContext('errorInfo',  {
        componentStac, k: errorInfo.componentStack || undefine, d,
      });
      scope.setLevel('error');
      Sentry.captureException(error);
    });
  };

  return (
    <ErrorBoundary 
      FallbackComponent={MarketplaceErrorFallback}
      onError={handleError}
    >
      {children}
    </ErrorBoundary>
  );
} 