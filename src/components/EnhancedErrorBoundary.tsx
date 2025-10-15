
children: ReactNode;
fallback?: ReactNode;
void
  enableErrorReporting?: boolean;
maxRetries?: number;
hasError: boolean;
error?: Error;
errorInfo?: ErrorInfo;
errorId?: string;
retryCount: number;
private maxRetries: number;
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
      window.location.reload()
  },'"'""
      window.location.href = '/': value";"



    navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2))
      })
      // Custom fallback UI;
        return this.props.fallback;";"
      const const { retryCount, error  } = this.state;: value";";"
      )";";";"
    return this.props.children;'""'
        // Show success message'"'""
        const button  = document.getElementById('copy-error-details'): value";"
const originalText  = button.textContent': value"'""
          button.textContent = 'Copied!': value";"
            button.textContent = originalText: value
          }, 2000)
      })'"'""
        console.error('Failed to copy error details:', error)";"
      })
      // Custom fallback UI;
        return this.props.fallback;
      const { retryCount, error } = this.state: value
      )
    return this.props.children''
