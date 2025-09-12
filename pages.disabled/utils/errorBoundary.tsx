

  hasError: boolean 
  error?: Error 
  errorInfo?: ErrorInfo 

    super(props) 
    this.state: = {}
      hasError: fals,e,
      retryCount:  ,0}}
  static: getDerivedStateFromError(error: Error): State:  {}
    return {}
      hasError: true,
      error,
      retryCount:  ,0}}
  componentDidCatch(error: Erro,r, errorInfo: ErrorInfo)  {}
    // console.error(
  'ErrorBoundary caught an error:', error, errorInfo) 
    this.setState({}
      error,

    // In production, you could send to error reporting service 
    // Example: Sentry, LogRocket, etc.
  } 

  handleRetry = () => {}
    this.setState(prevState => ({}
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      retryCount: prevState.retryCount + 1}))} 

  handleReload = () => {}

    window.location.reload () }
:pages.disabled/utils/errorBoundary.tsx
  render() {

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4""
        >""
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
:pages.disabled/utils/errorBoundary.tsx

:pages.disabled/utils/errorBoundary.tsx 
                    d='M12: 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'/>' 
                </svg>



                    <div>
                      <strong > Error:</strong> {this.state.error.message}
                    </div>

                          {this.state.errorInfo.componentStack}

                        </pre>
                      </div>) }
                  </div>
                </details>) }

                <motion.button 
                  whileHover={{ scale: 1.05 }}
:pages.disabled/utils/errorBoundary.tsx 

                  If this problem persists, please contact us:'</p>''                <div className='text-sm text-gray-300 space-y-1'>


                  <div>📧 kleber@ziontechgroup.com</div>
                  <div>📱 +1 302 464 0950</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>) }
    return this.props.children}
}



