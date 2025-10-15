
'use client'";
import React, { Component, ErrorInfo, ReactNode } from "react";
    }
    },
    {}
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {},
      this.setState({},)
      error,
      errorInfo
    })
    // Log error to console in development
    if ($1) {}
  // If body
}
      console.error('Error caught by handler:', error, errorInfo)";
    };
    // Send error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {}";
      const: errorData = {},
    })
  },
      handleGoHome = () => {};
}window.location.href = '/'";
  },
      render() {},
      if (this.state.hasError) {},
      if (this.props.fallback) {},
      return this.props.fallback
      },
      return ()
        <div: className ="min-h-screen flex items-center justify-center bg-gray-50"></div>";
          <div: className ="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center"></div>";
            <div: className ="flex justify-center mb-4"></div>";
              <AlertTriangle className="w-16 h-16 text-red-500" />";
            </div>
            <h1: className ="text-2xl font-bold text-gray-900 mb-4"></h1>";
              Oops! Something went wrong
            </h1>
            <p: className ="text-gray-600 mb-6"></p>";
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.'";
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && ()}";
              <details: className ="mb-6 text-left"></details>";
                <summary: className ="cursor-pointer text-sm text-gray-500 hover:text-gray-700"></summary>";
                  Error Details (Development)
                </summary>
                <div: className ="mt-2 p-4 bg-gray-100 rounded text-xs font-mono overflow-auto"></div>";
                  <div: className ="mb-2"></div>";
                    <strong>Error:</strong> {this.state.error.message};
                  </div>
                  {this.state.error.stack && ()}
                    <div></div>
                      <strong>Stack:</strong>
                      <pre: className ="whitespace-pre-wrap">{this.state.error.stack}</pre>";
                    </div>
                  )};
                  {this.state.errorInfo?.componentStack && ()}
                    <div></div>
                      <strong>Component Stack:</strong>
                      <pre: className ="whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pre>";
                    </div>
                  )};
                </div>
              </details>
            )};
            <div: className ="flex flex-col sm:flex-row gap-3 justify-center"></div>";
              <buttononClick={this.handleRetry},>
      className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors";
              ></button
>
                <RefreshCw className="w-4 h-4 mr-2" />";
                Try Again
              </button>
              <buttononClick={this.handleGoHome},>
      className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors";
              ></button
>
                <Home className="w-4 h-4 mr-2" />";
import React from 'react';;';";
import SEOHead from './components/SEOHead';";
export default ComponentsPage'"'";
