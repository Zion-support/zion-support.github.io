

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
            <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
          <p className="text-gray-600 mb-4">
            We're sorry, but something unexpected happened. Please try again.
          </p>
          {process.env.NODE_ENV === 'development' && (
            <details className="text-left mb-4">
              <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                Error details
              </summary>
              <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
                {error.message}
              </pre>
            </details>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={resetErrorBoundary}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Go home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;