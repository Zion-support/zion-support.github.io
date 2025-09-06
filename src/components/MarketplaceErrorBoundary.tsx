import React from 'react';
import {ErrorBoundary, FallbackProps} from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';
import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RefreshCcw, AlertCircle } from 'lucide-react';

interface MarketplaceErrorFallbackProps extends FallbackProps {
  // Additional props if needed

function MarketplaceErrorFallback({
  error,
  resetErrorBoundary,
}: MarketplaceErrorFallbackProps) {  const handleRetry = async () => {
    try {
      // Re-call SWR mutate('*') to refresh all cached data
      await mutate(() => true, undefined, { revalidate: true });
      resetErrorBoundary();
    } catch (retryError) {
      logErrorToProduction('Error during retry:', { data: retryError });
      Sentry.captureException(retryError);    }
  };

  return (

    }
  };

  return (

            variant="outline"
            className="w-full"

          >
            Reload Page
          </Button>
        </div>

          >

            contact support
          </a>
        </div>
      </div>
    </div>
  );

interface MarketplaceErrorBoundaryProps {
  children: React.ReactNode;

    Sentry.withScope(scope => {
      scope.setTag('errorBoundary', 'marketplace');
      scope.setContext('errorInfo', {
        componentStack: errorInfo.componentStack || undefined,
      });
      scope.setLevel('error');
      Sentry.captureException(error);
    });
  };

      >
      {children}
    </ErrorBoundary>
  );
}   return (
    <ErrorBoundary 

    >
      {children}
    </ErrorBoundary>
  );