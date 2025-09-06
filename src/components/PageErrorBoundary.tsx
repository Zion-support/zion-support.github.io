  return (
    <div className='min-h-screen bg-zion-blue flex items-center justify-center p-4'>;
      <div className='max-w-2xl w-full'>;
        <div className='bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6'>;
          <div className='text-center mb-6'>;
            <div className='mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center'>;
              <AlertTriangle className='h-8 w-8 text-red-600' />;
            </div>;
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>;
              {pageName ? `${pageName} Unavailable` : 'Page Unavailable'}
            </h1>;
            <p className='text-gray-600'>;
              {isAuthConfigError;
                ? 'This page cannot load due to missing authentication configuration';
                : 'An unexpected error occurred while loading this page'}
          )}
          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 mb-6'>;
            <button
              onClick={handleRefresh}
            
            <Link 
              href="/"
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Go Home
            </Link>
          </div>
              className='flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors'             aria-label="Button">;
              <RefreshCw className='w-4 h-4 mr-2' />;
              Try Again;
            </button>;
            <Link
              href='/'
              className='flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors'>;
              <Home className='w-4 h-4 mr-2' />;
              Go Home;
            </Link>;
          </div>;

          {/* Navigation Options */}
          <div className='border-t pt-6'>;
            <h3 className='font-semibold text-gray-900 mb-3'>;
              You can also visit:;
            </h3>;
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 text-sm'>;
              <Link
                href='/marketplace'
                About;
              </Link>;
            </div>;
          </div>;
        </div>;
        {/* Support Information */}
              href='mailto:support@zion && zion.tech'
              className='text-blue-400 hover:underline'>;
              support@zion && zion.tech;

        logInfo(`Resetting error boundary for ${pageName || 'page'}`)




      }}
    >;
      {children}
} ;
} ;
};
}


    </ErrorBoundary>;
  );
} ;




  const FallbackComponent =;
    fallback ||;
    ((props: FallbackProps) => (
      <PageErrorFallback {...props} page_name={page_name} />));
      on_reset={() => {        // Reset any application state if needed;
        log_info (`Resetting error boundary for ${page_name || 'page'}`);
      }}
    >;
      {children}
    </ErrorBoundary>);
  );}
;
interface PageErrorBoundaryProps {;
  children:React.ReactNode,;
  pageName?:string,;
  fallback?:React.ComponentType<FallbackProps>;
}
