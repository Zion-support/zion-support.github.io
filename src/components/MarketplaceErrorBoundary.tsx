
    >
      {children}
    </ErrorBoundary>
  );
} 
origin/cursor/automate-test-improve-and-merge-code-2533
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

} 

    </ErrorBoundary>);
}
    </ErrorBoundary>
  )
}
origin/cursor/automate-test-improve-and-merge-code-2533
            contact support;
    </div>"
    <div className='flex items - center justify - center min - h-[400px] p - 6'>;
      <div className='max - w-md w - full space - y-4'>;
        <Alert variant='destructive'>;

          <AlertCircle className='h - 4 w - 4' />;

          <AlertDescription className='mt - 2'>;

          ;
        <div className='flex flex - col space - y-2'>;
          <Button on_click={handle_retry} className='w - full' variant='default'>;

            <RefreshCcw className='mr - 2 h - 4 w - 4' />;

          <Button;
            on_click={() => window.location.reload ()}

        </div>            variant="outline";"
        </div>;"
        <div className='text - center text - sm text - muted - foreground'>;
          <a;
            href='mailto:support@example.com';
            className='text - primary hover:underline'          >;
        <div className="text - center text - sm text - muted - foreground">;"
            href="mailto: support@example.com";""
            className="text - primary hover:underline";"
          </a>;
        </div>;
    </div>);
    );"
    <div className='flex items-center justify-center min-h-[400px] p-6'>;
      <div className='max-w-md w-full space-y-4'>;

          <AlertCircle className='h-4 w-4' />;

          <AlertDescription className='mt-2'>;

    <ErrorBoundary;
  },;
  return (;
    <div className="flex items-center justify-center min-h-[400px] p-6">;"
      <div className="max-w-md w-full space-y-4">;"
        <Alert variant="destructive">;"
          <AlertCircle className="h-4 w-4" />;"

          <AlertTitle>Something went wrong in the marketplace;"
          <AlertDescription className="mt-2">;"

        ;"
        <div className='flex flex-col space-y-2'>;
          <Button onClick={handleRetry} className='w-full' variant='default'>;

            <RefreshCcw className='mr-2 h-4 w-4' />;

          <Button;)
            onClick={() => window && window.location.reload()}

        <div className='text-center text-sm text-muted-foreground'>;
            href='mailto:support@example && example.com
            className='text-primary hover:underline'>        ;
        <div className="text-center text-sm text-muted-foreground">;"
            href="mailto: support@example && example.com"""
      FallbackComponent={MarketplaceErrorFallback}
      onError={handleError}>;

      on_error={handle_error}
    >;
pr-12325
