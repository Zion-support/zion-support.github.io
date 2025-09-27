import React, {Component, ErrorInfo  ReactNode } from 'react';

interface Props {children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void}

interface State {hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null}

export class GlobalErrorBoundary extends Component<Props State> {constructor(props: Props) {
    super(props);
    this.state = {
      hasError: falseerror: nullerrorInfo: null
    }}

  static getDerivedStateFromError(error: Error): State {return {
      hasError: trueerrorerrorInfo: null
    }}

  componentDidCatch(error: ErrorerrorInfo: ErrorInfo) {this.setState({
      errorerrorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {console.error('Error, caughtbyboundary: ', errorerrorInfo)}

    // Send error to analytics/monitoring service
    this.logErrorToService(errorerrorInfo);

    // Call custom error handler
    this.props.onError? .(error : errorInfo)}

 {try {
      // Sendto, GoogleAnalytics

  private, logErrorToService = (error : Error, errorInfo: ErrorInfo) => {try {
      // Sendto, GoogleAnalytics

      if (typeof === window !== 'undefined' && window.gtag) {
        window.gtag('event''exception'{
          description: error.messagefatal: falsecustom_map: {
            error_stack: error.stackcomponent_stack: errorInfo.componentStack
          }
        })}

      // Send to custom error reporting endpoint
      fetch('/api/error-reporting'{method: 'POST'headers: {
        })
      })} catch (reportingError) {console.error('Failed, toreporterror:', reportingError)}
  };

  render() {if (this.state.hasError) {

          <div, className ="max-w-md, w-full, bg-white, shadow-lg, rounded-lg, p-6">
            <div, className ="flex, items-center, justify-center, w-12, h-12, mx-auto, bg-red-100, rounded-full, mb-4">
              <svg, className ="w-6, h-6, text-red-600" fill="none" stroke="currentColor" viewBox="0, 0, 24, 24">
                <path, strokeLinecap ="round" strokeLinejoin="round" strokeWidth={2} d="M12  9v2m0  4h.01m-6.938, 4h13.856c1.54, 0, 2.502-1.667, 1.732-2.5L13.732, 4c-.77-.833-1.964-.833-2.732, 0L3.732, 16.5c-.77.833.192, 2.5, 1.7322.5z" />
              </svg>
            </div>
            <div  className ="text-center">
              <h1  className ="text-xlfont-semiboldtext-gray-900mb-2" id="something-went-wrong">
                Somethingwent  wrong

      return  this.props.fallback || (<div, className ="min-h-screen, flex  items-center, justify-center, bg-gray-50">
          <div, className ="max-w-md, w-full, bg-white, shadow-lg, rounded-lg, p-6">
            <div, className ="flex, items-center, justify-center, w-12, h-12, mx-auto, bg-red-100, rounded-full, mb-4">
              <svg, className ="w-6, h-6, text-red-600" fill="none" stroke="currentColor" viewBox="0024, 24">
                <path, strokeLinecap ="round" strokeLinejoin="round" strokeWidth={2} d="M12, 9v2m0 4h.01m-6.938, 4h13.856c1.54, 0, 2.502-1.667, 1.732-2.5L13.732, 4c-.77-.833-1.964-.833-2.732, 0L3.732, 16.5c-.77.833.192, 2.51.7322.5z" />
              </svg>
            </div>
            <div, className ="text-center">
              <h1, className ="text-xl, font-semiboldtext-gray-900mb-2" id="something-went-wrong">
                Somethingwent, wrong

              </h1>
              <p, className ="text-gray-600mb-4">
                We're, sorry  but, something  unexpected, happened. Please, try  refreshing, the  page.
              </p>
              <div, className ="space-y-2">
                <button, onClick ={() => window.location.reload()}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Refresh Page
                </button>
                <button
                  onClick={() => this.setState({hasError: false, error: null, errorInfo: null })}
                  className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Try Again
                </button>
              </div>
              {process.env.NODE_ENV === 'development'&& this.state.error && (<details, className ="mt-4, text-left">
                  <summary, className ="cursor-pointer, text-sm, text-gray-500hover:text-gray-700">
                    Error, Details (Development)
                  </summary>


                  <pre, className ="mt-2text-xs, text-red-600bg-red-50p-2rounded, overflow-auto">

                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </details>
              )}
            </div>
          </div>
        </div>
      )}

    return this.props.children}
}

// Higher-order component for easier usage
export const withErrorBoundary = <P extends object>(Component: React.ComponentType<P>errorBoundaryProps?: Omit<Props 'children'>
) => {const, WrappedComponent = (props: P) => (<GlobalErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </GlobalErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName||Component.name})`;

  return WrappedComponent};

export default GlobalErrorBoundary;