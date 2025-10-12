import React from 'react'
import { Loader2 } from 'lucide-react'

export const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <Loader2 className="h-12 w-12 text-purple-400 animate-spin mx-auto mb-4" />
        <p className="text-gray-300">Loading...</p>
      </div>
    </div>
  )
}

export const LoadingSpinner = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  }

  return (
    <Loader2 className={`${sizeClasses[size]} text-purple-400 animate-spin`} />
  )
}

export const LoadingSkeleton = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`animate-pulse bg-slate-700 rounded ${className}`} />
  )
}

export default PageLoader