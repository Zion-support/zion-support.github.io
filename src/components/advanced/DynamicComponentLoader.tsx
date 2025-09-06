
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary"
              style={{
                background: `conic-gradient(from 0deg, var(--primary) 0%, var(--primary) ${progress}%, transparent ${progress}%, transparent 100%)`

            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary"
              style={{

              }}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
          )}
        </div>
        <div className="text-center">
          <p className="text-sm font-medium">{message}</p>
          {showProgress && (
            <p className="text-xs text-muted-foreground mt-1">
              {Math.round(progress)}% loaded
            </p>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
)

// Enhanced Error Component
const EnhancedError: React.FC<{
  error: Error
  retry: () => void
  isOnline: boolean
  retryCount: number
  maxRetries: number
}> = ({ error, retry, isOnline, retryCount, maxRetries }) => (

          ) : (
            <WifiOff className="h-6 w-6 text-red-600" />
          )}
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-red-900 dark:text-red-100">
            {isOnline ? 'Loading Failed' : 'Offline'}
          </h3>

              Retry {retryCount}/{maxRetries}
            </p>
          )}
        </div>
        {retryCount < maxRetries && (

            Try Again
          </Button>
        )}
      </div>
    </CardContent>
  </Card>

    return () => {}; // Return empty cleanup function for other paths
  }, [loadingState.isLoading, loadingState.error])
  // Load component
  const loadComponent = async () => {
    try {
      setLoadingState(prev => ({
        ...prev
        isLoading: true
        error: null
        isOnline
      }))
      setProgress(0)
      const component = await importFn()
      setDynamicComponent(() => component.default)
      setProgress(100)
      setTimeout(() => {
        setLoadingState(prev => ({ ...prev, isLoading: false }))
      }, 300); // Small delay for smoother transition    } catch (error) {
      logErrorToProduction('Dynamic component loading failed:', {
        data: error
      })
      setLoadingState(prev => ({
        ...prev
        isLoading: false
        error: error as Error
        retryCount: prev.retryCount + 1
        isOnline
      }))
    }
  }
  // Retry functionality
  const retry = () => {
    if (loadingState.retryCount < maxRetries) {
      loadComponent()
    }
  }
  // Prefetch on hover/focus
  useEffect((,) => {
    if (prefetch) {
      const prefetchTimer = setTimeout(() => {
        loadComponent()
      }, 100)
      return () => clearTimeout(prefetchTimer)
    } else {
      loadComponent()
      return () => {}; // Return empty cleanup function
    }
  }, [])
  // Update online status
  useEffect(() => {
    setLoadingState(prev => ({ ...prev, isOnline }))
  }, [isOnline])
  // Loading state
  if (loadingState.isLoading) {
    if (loadingComponent) {
      return React.createElement(loadingComponent)
    }
      >
        <EnhancedLoading
          progress={progress}
          message='Loading component...'
          showProgress={true}        />
      </motion.div>
    )
  }
  // Error state
  if (loadingState.error) {
    if (errorFallback) {
      return React.createElement(errorFallback, {
        error: loadingState.error
        retry
      })
    }
          >
        <EnhancedError
          error = {loadingState.error,}
          retry = {retry,}
          isOnline = {loadingState.isOnline,}
          retryCount = {loadingState.retryCount,}
          maxRetries = {maxRetries,}
        />
      </motion.div>
    )

  }
  // Success state
  if (DynamicComponent) {
    return (
      <Suspense fallback={fallback |<EnhancedLoading />}>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}

// Predefined dynamic loaders for common heavy components
// Note: These are examples - uncomment and install types as needed
// export const DynamicChartComponent = createDynamicComponent(

//   {
//     loadingComponent: () => (
//       <div className="w-full h-64 bg-muted animate-pulse rounded-lg flex items-center justify-center">
//         <span className="text-muted-foreground">Loading chart...</span>
//       </div>
//     )
//     prefetch: true
//   }
// )
// export const DynamicThreeComponent = createDynamicComponent(

//   {
//     loadingComponent: () => (
//       <div className="w-full h-96 bg-muted animate-pulse rounded-lg flex items-center justify-center">
//         <span className="text-muted-foreground">Loading 3D renderer...</span>
//       </div>
//     )
//   }

// );
