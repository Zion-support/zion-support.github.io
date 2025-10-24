'use client'

import React from 'react'

interface LoadingStatesProps {
  isLoading: boolean
  children: React.ReactNode
}

const LoadingStates: React.FC<LoadingStatesProps> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div className="loading-states">
        <div className="spinner"></div>
      </div>
    )
  }

  return <>{children}</>
}

export default LoadingStates