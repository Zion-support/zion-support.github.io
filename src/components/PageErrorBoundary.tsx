}

  },

              <pre className='mt-2 text-sm text-gray-600 whitespace-pre-wrap break-all overflow-auto'>;
                {error && error.message}
              </pre>;
            </details>;

          )}
          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 mb-6'>;
            <button
              onClick={handleRefresh}

            <details className="bg-gray-50 rounded-lg p-4 mb-6">
              <summary className="cursor-pointer text-gray-700 font-medium">
                Technical Details
              </summary>
              <pre className='mt-2 text-sm text-gray-600 whitespace-pre-wrap break-all overflow-auto'>
                {error.message}
              </pre>
            </details>
          )}
          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 mb-6'>;
            <button
              onClick={handleRefresh}
              className='flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors'            >
              <RefreshCw className='w-4 h-4 mr-2' />
              Try Again
            </button>
            <Link
              href='/'
              className='flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors'
              <pre className="mt-2 text-sm text-gray-600 whitespace-pre-wrap break-all overflow-auto">
                {error.message}
              </pre>;
            </details>;
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button 
              onClick={handleRefresh}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </button>
            
            <Link 
              href="/"
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <Home className='w-4 h-4 mr-2' />
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

                className='text-blue-600 hover:underline'>;
                Marketplace;
              </Link>;
              <Link href='/talent' className='text-blue-600 hover:underline'>;
                Talent;
              </Link>;
              <Link href='/services' className='text-blue-600 hover:underline'>;
                Services;
              </Link>;
              <Link href='/about' className='text-blue-600 hover:underline'>;
              </pre>;
            </details>)}
          {/* Action Buttons */}
          <div className='flex flex - col sm:flex - row gap - 3 mb - 6'>;
            <button;
              on_click={handle_refresh}
              className='flex - 1 bg - blue - 600 hover:bg - blue - 700 text - white flex items - center justify - center px - 4 py - 2 rounded - lg font - medium transition - colors'            >;
              <RefreshCw className='w - 4 h - 4 mr - 2' />;
              Try Again;
            </button>;
            <Link;
              href='/';
              className='flex - 1 bg - gray - 100 hover:bg - gray - 200 text - gray - 700 flex items - center justify - center px - 4 py - 2 rounded - lg font - medium transition - colors';
            >;
              <Home className='w - 4 h - 4 mr - 2' />;
              Go Home;
            </Link>;
          </div>;
          {/* Navigation Options */}
          <div className='border - t pt - 6'>;
            <h3 className='font - semibold text - gray - 900 mb - 3'>;
              You can also visit:;
            </h3>;
            <div className='grid grid - cols - 2 md:grid - cols - 4 gap - 3 text - sm'>;
              <Link;
                href='/marketplace';
                className='text - blue - 600 hover:underline';
              >;
                Marketplace;
              </Link>;
              <Link href='/talent' className='text - blue - 600 hover:underline'>;
                Talent;
              </Link>;
              <Link href='/services' className='text - blue - 600 hover:underline'>;
                Services;
              </Link>;
              <Link href='/about' className='text - blue - 600 hover:underline'>;

                About;
              </Link>;
            </div>;
          </div>;
        </div>;

        {/* Support Information */}
        <div className="bg-gray-800 text-white rounded-lg p-6 text-center">
          <p className="mb-3">Need help? Contact our support team</p>
          <div className="flex flex-col sm: flex-row gap-3 justify-center">
            <a 
              href="mailto:support@zion.tech" 
              className="text-blue-400 hover:underline"
            >
              support@zion.tech
            </Link>
            <Link href="/status" className="text-blue-400 hover:underline">
              Service Status
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
interface PageErrorBoundaryProps {
  children: React.ReactNode
  pageName?: string
  fallback?: React.ComponentType<FallbackProps>
export default function PageErrorBoundary({
  children
  pageName
  fallback
}: PageErrorBoundaryProps) {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    prodLogError(
      `PageErrorBoundary caught error on ${pageName |'unknown page'}:`
      error
    )
    logErrorToProduction(
      error instanceof Error ? error.message : String(error)
      error instanceof Error ? error : undefined
      {
        page: pageName |'unknown'
        componentStack: errorInfo.componentStack |undefined
        errorBoundary: 'PageErrorBoundary'
        timestamp: new Date().toISOString()
      }
    );
  }
  const FallbackComponent =
    fallback |
  const FallbackComponent = null;
    fallback ||
    ((props: FallbackProps) => (
      <PageErrorFallback {...props} pageName={pageName} />
    ))
      onReset={() => {        // Reset any application state if needed
}
