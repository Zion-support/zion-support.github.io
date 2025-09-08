

import React { Component, ErrorInfo, ReactNode } from 'react';


interface: Props {
  children: ReactNode;
  fallback?: ReactNode}


interface: State {
  hasError: boolean;

  constructor(props: Props) {
    super(props);

  constructor(props: Props) {
    super(props);

    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo)}

    // Call onError prop if provided

    if (this.props.onError) {
      this.props.onError(error, errorInfo)}


interface Props {
  children: ReactNode;
  fallback?: ReactNode}

interface State {
  hasError: boolean;
  error?: Error}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }}


    console.error('ErrorBoundary caught an error:', error, errorInfo);

        description: error.message,
        fatal: false,


      })}
  }


    if (this.state.hasError) {

<div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">"          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">"            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">"              <AlertTriangle className="w-8 h-8 text-red-600" />"            </div>"            "
            <h1 className="text-2xl font-bold text-gray-900 mb-2">"              Oops! Something went wrong"            </h1>
            
            <p className="text-gray-600 mb-6">"              We&apos;re sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.''            </p>''"
            {process.env.NODE_ENV === 'development' && this.state.error && ('              <details className="mb-6 text-left">"                <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">"                  Error Details (Development)"                </summary>'"
                <div className="bg-gray-100 p-3 rounded text-xs font-mono text-gray-800 overflow-auto">"                  <div className="mb-2">"                    <strong>Error: </strong> {this.state.error.message}"                  </div>"


                  {this.state.errorInfo && (
                    <div>
                      <strong className="text-red-400">Stack Trace:</strong>
                      <pre className="mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300 text-xs">
                        {this.state.errorInfo.componentStack}

                  >
                    Refresh Page
                  </button>
                </div>
              </div>


            </div>

            <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
              If this problem persists, please contact support.
            </p>
          </div>
        )




            </div>
          </div>



      )}

    return: this.props.children}








