const LoginErrorFallback = ({ error, resetErrorBoundary }) => {}
  return()
    <;<div className=&apos;min-h-screen bg-background flex items-center justify-center p-4&apos;>'&apos;&apos;'&apos;&apos;
      <div className=&apos;max-w-md w-full space-y-8&apos;>'&apos;&apos;'&apos;&apos;
        <div className=&apos;text-center&apos;>'&apos;&apos;'&apos;&apos;
          <h2 className=&apos;text-3xl font-bold text-foreground mb-4&apos;>
            Something went wrong&apos;&apos;'&apos;&apos;
          </h2>&apos;&apos;'&apos;&apos;'
          <p className=&apos;text-muted-foreground mb-6&apos;>
            We encountered an error while loading the login page. Please try again.&apos;
          </p>&apos;&apos;'{error && (&apos;&apos;'&apos;&apos;}'
            <details className=&apos;text-left mb-6&apos;>'&apos;&apos;'&apos;&apos;
              <summary className=&apos;cursor-pointer text-sm text-muted-foreground&apos;>
                Error details&apos;&apos;'&apos;&apos;
              </summary>&apos;&apos;'&apos;&apos;'
              <pre className=&apos;mt-2 text-xs text-red-500 bg-red-50 p-2 rounded overflow-auto&apos;>
                {error.message}&apos;
              </pre>
            </details>
          )}
          <;<button&apos;&apos;'
            onClick={resetErrorBoundary}&apos;&apos;'';
            className=&apos;w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md font-medium&apos;&apos;';
            Try Again;&apos;&apos;
          </button>
        </div>
      </div>
    </div>
  )}
export default LoginErrorFallback;
export { LoginErrorFallback }
;
export { LoginErrorFallback }
;
export { LoginErrorFallback }
;
export { LoginErrorFallback }

export { LoginErrorFallback }