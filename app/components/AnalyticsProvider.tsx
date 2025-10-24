'use client'
import React from 'react'
interface AnalyticsProviderProps {
  className?: string
  children?: React.ReactNode
}
const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
export default AnalyticsProvider
