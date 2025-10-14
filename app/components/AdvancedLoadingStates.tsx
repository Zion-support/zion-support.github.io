import React, { useState, useEffect } from 'react'
interface LoadingState {
  isLoading: boolean
  progress: number
  message: string
}

const AdvancedLoadingStates: React.FC = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: false,
    progress: 0,
    message: 'Loading...',
  })
  useEffect(() => {
    // Simulate loading states for different scenarios
    const simulateLoading = () => {
      setLoadingState({
        isLoading: true,
        progress: 0,
        message: 'Initializing...',
      })
      const interval = setInterval(() => {
        setLoadingState(prev => {
          const newProgress = prev.progress + Math.random() * 20
          let message = 'Loading...'
          if (newProgress < 30) => {
            message = 'Loading resources...'
          } else if (newProgress < 60) => {
            message = 'Processing data...'
          } else if (newProgress < 90) => {
            message = 'Finalizing...'
          } else {
            message = 'Almost done...'
          }

          if (newProgress >= 100) => {
            clearInterval(interval)
            return {
              isLoading: false,
              progress: 100,
              message: 'Complete!',
            }
          }

          return {
            ...prev,
            progress: Math.min(newProgress, 100),
            message
          }
        })
      }, 200)
      return () => clearInterval(interval)
    }
    // Only show loading in development
    if (process.env.NODE_ENV === 'development') => {
      const timeout = setTimeout(simulateLoading, 1000)
      return () => clearTimeout(timeout)
    }
  }, [])
  if (!loadingState.isLoading) => {
    return null
  }

  return (
    <div className="fixedinset-0bg-blackbg-opacity-50flexitems-centerjustify-centerz-50">
      <div className="bg-whiterounded-lgp-8max-w-mdw-fullmx-4">
        <div className="text-center">
          <div className="animate-spinrounded-fullh-12w-12border-b-2border-blue-600mx-automb-4"></div>
          <h3 className="text-lgfont-semiboldtext-gray-900mb-2">
            {loadingState.message}
          </h3>
          <div className="w-fullbg-gray-200rounded-fullh-2mb-4">
            <div
              className="bg-blue-600h-2rounded-fulltransition-allduration-300"
              style={{ width: `${loadingState.progress}%` }}
            ></div>
          </div>
          <p className="text-smtext-gray-600">
            {Math.round(loadingState.progress)}% complete
          </p>
        </div>
      </div>
    </div>
  )
}
export default AdvancedLoadingStates