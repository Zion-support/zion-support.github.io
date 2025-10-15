
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
      window.location.reload()
  },"
      window.location.href = '/'
        const button  = document.getElementById('copy-error-details'
const originalText  = button.textContent'
          button.textContent = 'Copied!'
        console.error('Failed to copy error details:'