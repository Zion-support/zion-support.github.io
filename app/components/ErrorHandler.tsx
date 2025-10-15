<<<<<<< HEAD
import React from 'react';;';";"
import SEOHead from './components/SEOHead';";"

const ComponentsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";";"
      <div  className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div  className ="text-center">";"
          <h1  className ="text-4xl font-bold mb-4">Components</h1>";"
          <p  className ="text-gray-300">Professional solutions coming soon...</p>;";"
        </div>
      </div>
    </>
  )
}

export default ComponentsPage;'";'";"
=======
<<<<<<< HEAD
'use client';
import React, { Component, ErrorInfo, ReactNode } from "react;
=======

'use client'";
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from "react";";
>>>>>>> main
=======
import React, { Component, ErrorInfo, ReactNode } from "react";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
interface Props {},
      children: ReactNode
  fallback?: ReactNode
},
      interface State {},
      hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
},
      class ErrorHandler extends Component<Props, State> {},
      constructor(props: Props) {},
      super(props)
    this.state = {},
      hasError: false,
      error: null,
      errorInfo: null
    };
    },
    {};
  static getDerivedStateFromError(error: Error): State {},
      return {},
      hasError: true,
      error,
      errorInfo: null
<<<<<<< HEAD
    };
    },
    {};
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {},
      this.setState({},)";
      error,";
      errorInfo";
    })";";
    // Log error to console in development";";
    if ($1) {};";";";
  // If body";";";
}";";";";
      console.error('Error caught by handler:", error, errorInfo)";
    };";";
    // Send error to monitoring service in production";";";
    if (process.env.NODE_ENV === 'production") {};
=======
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
<<<<<<< HEAD
    if (process.env.NODE_ENV === 'production') {};";
>>>>>>> main
=======
    if (process.env.NODE_ENV === 'production') {}";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
      // You can integrate with services like Sentry, LogRocket, etc.
      this.logErrorToService(error, errorInfo)
    };
    },
    {};
  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {};
}// Example: Send to monitoring service
    try {,
  } catch (error) {
    console.error(error);
  };
  };
} catch (error) {},
      console.error(error)
}// Replace with your actual error reporting service
<<<<<<< HEAD
<<<<<<< HEAD
      const errorData  =  {},
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,";
      timestamp: new Date().toISOString()";";
      },";";";
      console.log('Error logged:", errorData)";";
      // Send to your error reporting service here;";";";
      console.log('Error data prepared for reporting:", errorData);";";
    } catch (reportingError) {},";";";
      console.error('Failed to prepare error data for reporting:", reportingError)
=======
      const: errorData = {},
=======
      const errorData  = {},
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString()
      },;
      console.log('Error logged:', errorData)";
      // Send to your error reporting service here

      console.log('Error data prepared for reporting:', errorData)";
    } catch (reportingError) {},
      console.error('Failed to prepare error data for reporting:', reportingError)";
>>>>>>> main
    },
    {};
  },
      handleRetry = () => {};
}this.setState({},)
      hasError: false,
      error: null,
      errorInfo: null
<<<<<<< HEAD
    })";
  },";";
      handleGoHome = () => {};";";";
}window.location.href = '/"
  },
      render() {},
      if (this.state.hasError) {},
      if (this.props.fallback) {},";
      return this.props.fallback";";
      },";";";
      return ()"
        <div className="min-h-screen flex items-center justify-center bg-gray-50"></div>"
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center"></div>"
            <div className="flex justify-center mb-4"></div>"
              <AlertTriangle className="w-16 h-16 text-red-500" />";";";
            </div>"
            <h1 className="text-2xl font-bold text-gray-900 mb-4"></h1>";";
              Oops! Something went wrong";";";
            </h1>"
            <p className="text-gray-600 mb-6"></p>";";";
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix it."
            </p>";";";
            {process.env.NODE_ENV === 'development' && this.state.error && ()}"
              <details className="mb-6 text-left"></details>"
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700"></summary>";";
                  Error Details (Development)";";";
                </summary>"
                <div className="mt-2 p-4 bg-gray-100 rounded text-xs font-mono overflow-auto"></div>"
                  <div className="mb-2"></div>
                    <strong>Error:</strong> {this.state.error.message};
                  </div>";
                  {this.state.error.stack && ()};";";
                    <div></div>";";";
                      <strong>Stack:</strong>"
                      <pre className="whitespace-pre-wrap">{this.state.error.stack}</pre>
                    </div>
                  )};";
                  {this.state.errorInfo?.componentStack && ()};";";
                    <div></div>";";";
                      <strong>Component Stack:</strong>"
                      <pre className="whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pre>
                    </div>
                  )};";
                </div>";";
              </details>";";";
            )};"
            <div className="flex flex-col sm:flex-row gap-3 justify-center"></div>";";";
              <buttononClick={this.handleRetry},>"
      className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"></button";";";
>"
                <RefreshCw className="w-4 h-4 mr-2" />";
                Try Again";";
              </button>";";";
              <buttononClick={this.handleGoHome},>"
      className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"></button";";";
>"
                <Home className="w-4 h-4 mr-2" />
=======
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
<<<<<<< HEAD
                <Home: className ="w-4 h-4 mr-2" />";
>>>>>>> main
=======
                <Home className="w-4 h-4 mr-2" />";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
                Go Home
              </button>
            </div>
          </div>
        </div>
      )
    },
      return this.props.children
  };
    },";
    {};";";
export default ErrorHandler";";";
import React from 'react';";";";";
import SEOHead from './components/SEOHead";

<<<<<<< HEAD
<<<<<<< HEAD
const ComponentsPage: React.FC  =  () => {";
  return (;";";
    <>;";";";
      <SEOHead;"
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">Components</$1>"
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;,";
  ),";";
};";";";
;"
export default ComponentsPage;'";'";";";";
"
=======
import React from 'react';;';";
import SEOHead from './components/SEOHead';";
=======
import React from 'react'";
import SEOHead from './components/SEOHead';
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group";
        description="Professional components solutions for modern businesses";
      />";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div: className ="text-center">";
          <h1: className ="text-4xl font-bold mb-4">Components</h1>";
          <p: className ="text-gray-300">Professional solutions coming soon...</p>";
        </div>;
      </div>;
    </>;
  ),
};
;
<<<<<<< HEAD
export default ComponentsPage;'";'";";";
>>>>>>> main
>>>>>>> main
=======
export default ComponentsPage'"'";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
