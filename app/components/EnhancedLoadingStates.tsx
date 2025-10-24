'use client'

import React from 'react'

interface LoadingStateProps {
  isLoading: boolean
  children: React.ReactNode
}

const EnhancedLoadingStates: React.FC<LoadingStateProps> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    )
  }

  return <>{children}</>
}

export default EnhancedLoadingStates
