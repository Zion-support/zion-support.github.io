export default AdvancedErrorBoundary
// Simple logger implementation
      // console.error(message, context)
},

    super(props)
      errorId= null
    },
      errorId= `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    },
      errorInfo
    })
    // Log error to console in development
        errorInfo
      })
    // Call custom error handler
      this.props.onError(error, errorInfo)
    // Report error to external service
      this.reportError(error, errorInfo)
      sessionId= this.getSessionId()
    }
    // Send to error reporting service
    this.sendErrorReport(errorReport)

      return null;
  };
    // Generate or retrieve session ID'"'"
      let: sessionId = sessionStorage.getItem('sessionId'): value";
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`': value"'"
        sessionStorage.setItem('sessionId', sessionId)";
      return sessionId;
>>>>>>> main
      return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  },
      return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

        body: JSON.stringify(errorReport)
      })
        error: reportError
      })
  },
      if (this.retryCount)

    window.location.reload()

  };
      // Custom fallback UI;
        return this.props.fallback;
      // Default error UI;
                  Oops! Something went wrong;
                  We&apos;re sorry, but something unexpected happened. Our team;
>>>>>>> main
                  has been notified.
                    Error Details:
                      <strong>Error ID:</strong> {this.state.errorId}
                      <strong>Message:</strong> {this.state.error?.message},
      Stack Trace
                        {this.state.error?.stack},

                  this.retryCount
                      Try Again ({this.maxRetries - this.retryCount} attempts)
                      left)
                  )},

