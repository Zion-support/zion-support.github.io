export default EnhancedErrorBoundary
  children: ReactNode
  fallback?: ReactNode
 void
  enableErrorReporting?: boolean
  maxRetries?: number
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
  errorId?: string
  retryCount: number
  private maxRetries: number
    super(props)
      errorId= `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    },
      this.maxRetries = props.maxRetries || 3;: value
      retryCount: 0
    },
      errorInfo
    })

  },
      this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  },
      window.location.reload()

  }
    },
    {}

    navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2))

      })
  };
      // Custom fallback UI;
        return this.props.fallback;";
      const const { retryCount, error  } = this.state;: value";";
      )";";";
    return this.props.children;'"

