'use client'
import React from 'react'
import { Loader2, Brain, Zap, Shield } from 'lucide-react'

interface LoadingStatesProps {
  type?: 'default' | 'page' | 'component' | 'ai' | 'security'
  message?: string
  size?: 'sm' | 'md' | 'lg'
}

const LoadingStates: React.FC<LoadingStatesProps> = ({
  type = 'default',
  message,
  size = 'md'
}) => {
  const getIcon = () => {
    switch (type) {
      case 'ai':
        return <Brain className="animate-pulse" />
      case 'security':
        return <Shield className="animate-pulse" />
      case 'page':
        return <Zap className="animate-pulse" />
      default:
        return <Loader2 className="animate-spin" />
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-4 h-4'
      case 'lg':
        return 'w-12 h-12'
      default:
        return 'w-8 h-8'
    }
  }

  const getMessage = () => {
    if (message) return message
    
    switch (type) {
      case 'ai':
        return 'AI is thinking...'
      case 'security':
        return 'Securing your data...'
      case 'page':
        return 'Loading page...'
      default:
        return 'Loading...'
    }
  }

  return (
    <div 
      className="flex flex-col items-center justify-center p-8"
      role="status"
      aria-live="polite"
      aria-label={getMessage()}
    >
      <div className={`${getSizeClasses()} text-cyan-400 mb-4`}>
        {getIcon()}
      </div>
      <p className="text-gray-300 text-sm animate-pulse">
        {getMessage()}
      </p>
      <span className="sr-only">Loading content, please wait</span>
    </div>
  )
}

// Enhanced Page Loader with better accessibility
export const PageLoader: React.FC<{ message?: string }> = ({ message }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <LoadingStates type="page" message={message} size="lg" />
  </div>
)

// Component Loader for smaller components
export const ComponentLoader: React.FC<{ message?: string }> = ({ message }) => (
  <LoadingStates type="component" message={message} size="md" />
)

// AI-specific loader
export const AILoader: React.FC<{ message?: string }> = ({ message }) => (
  <LoadingStates type="ai" message={message} size="lg" />
)

// Security-specific loader
export const SecurityLoader: React.FC<{ message?: string }> = ({ message }) => (
  <LoadingStates type="security" message={message} size="lg" />
)

export default LoadingStates