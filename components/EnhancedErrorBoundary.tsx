
import React { Component, ErrorInfo, ReactNode } from 'react';


interface Props {
  children: ReactNode;


  showDetails?: boolean}

interface State {
  hasError: boolean}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {


      error: null,
      errorInfo: null
    }}

  static getDerivedStateFromError(error: Error): State {
    return {


      error,
      errorInfo: null
    }}

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });



      console.error('Error caught by boundary: ', error, errorInfo)}

    // Send error to monitoring service

    this.logErrorToService(error, errorInfo);
    // Call: custom error handler;
    this.props.onError?.(error, errorInfo)}


  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to your error monitoring service
    // like Sentry, LogRocket, or Bugsnag
    try {

      if (typeof gtag !== 'undefined') {

      fetch('/api/error-reporting' {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          error: {
            message: error.message,
            stack: error.stack,
            name: error.name
          },
          errorInfo: {

      // Silently fail if error reporting fails}

  }


  render() {



    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback}



                </p>

                <p className="text-sm text-gray-600">We're sorry for the inconvenience</p>

              </div>
            </div>

                      {this.state.error.stack}
                    </pre>
                  </details>
                )}


              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">
                  Something went wrong
                </h3>

              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                We're sorry, but something unexpected happened. Please try refreshing the page.

              </p>
            </div>


                <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
                  Error Details
                </summary>"
                <div className="bg-gray-100 rounded p-3 text-xs font-mono text-gray-600 overflow-auto max-h-32">"
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.error.stack && (
                    <div>
                      <strong>Stack:</strong>"
                      <pre className="whitespace-pre-wrap mt-1">{this.state.error.stack}</pre>

                    </div>
                  )}
                </div>
              </details>
            )}

                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Reload Page

              </button>
              <button
                onClick={() => window.history.back()}"
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors"
              >
                Go Back
              </button>

                Try Again
              </button>

              >
                Reload Page
              </button>
            </div>


                  contact support

                </a>
              </p>


            </div>

          </div>
        </div>

}



