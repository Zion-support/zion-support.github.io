<h1 className='text-xl font-semibold text-gray-900 mb-2'>
//           Something Went Wrong
        </h1>
        <p className='text-gray-600 mb-4'>
          We&apos;re sorry, but something unexpected happened. Please try again.
        </p>
        {process.env['NODE_ENV'] === 'development' && error && (
  // TODO: Add parameters,
)
          <details className='mb-4 text-left'>
            <summary className='cursor-pointer text-sm text-gray-500 hover:text-gray-700'>
//               Error Details (Development)
            </summary>
            <div className='mt-2 p-3 bg-gray-100 rounded text-xs font-mono text-gray-800 overflow-auto'>
              <div className='mb-2'>
                <strong>Error:</strong> {error.message}
              </div>
              <div className='mb-2'>
                <strong>Stack:</strong>
                <pre className='whitespace-pre-wrap'>{error.stack}</pre>
              </div>
              {errorInfo && (
  // TODO: Add parameters,
)
                <div>
                  <strong>Component Stack:</strong>
                  <pre className='whitespace-pre-wrap'>
                    {errorInfo.componentStack}
                  </pre>
                </div>
              )}
            </div>
          </details>
        )}
        <div className='flex flex-col sm:flex-row gap-2 justify-center'>
          <button
            onClick={onRetry}
            className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors'
//           >
//             Try Again
          </button>
          <button
            onClick={() => window.location.reload()}
            className='px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors'
//           >
//             Reload Page
          </button>
        </div>
        {errorId && (
  // TODO: Add parameters,
)
          <p className='mt-4 text-xs text-gray-400'>Error ID: {errorId}</p>
        )}
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-11dc
    </div>
  );
}
