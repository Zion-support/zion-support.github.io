<<<<<<< HEAD
'use client';
import React from 'react';
import {Loader2, Brain, Cloud, Shield, Code}}from 'lucide-react';

interface LoadingSpinnerProps {size?: 'sm' | 'md' | 'lg';}
  text?: string;}export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({,
  size = 'md', 
  text = 'Loading...'}) => {const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',}return(<div className="flex flex-col items-center justify-center p-8">)</div>
      <Loader2 className={`${sizeClasses[size]}animate-spin text-blue-500`} />
=======
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
<<<<<<< HEAD
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
=======
    </LoadingSpinnerProps><div className="flex flex-col items-center justify-center p-8">
      </div><Loader2 className={`${sizeClasses[size]} animate-spin text-blue-500`} />
>>>>>>> origin/main
      {text && (
        <p className="mt-2 text-sm text-gray-500">{text</p>}</p>
      )}
>>>>>>> origin/main
    </div>
  )
}

<<<<<<< HEAD
// Enhanced Page Loader with better accessibility
export const PageLoader: React.FC<{ message?: string }> = ({ message }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <LoadingStates type="page" message={message} size="lg" />
=======
export const PageLoader: React.FC = () => (,
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    </div><div className="text-center">
      </div><div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto animate-pulse">
        </div><Brain className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-xl font-semibold text-white mb-2">Zion Tech Group</h2>
      <p className="text-gray-300">Loading amazing content...</p>
    </div>
>>>>>>> origin/main
  </div>
<<<<<<< HEAD
);

export const ServiceCardSkeleton: React.FC = () => (,
=======
)
<<<<<<< HEAD

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
=======
export const ServiceCardSkeleton: React.FC = () => (
>>>>>>> origin/main
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 animate-pulse">
    </div><div className="w-16 h-16 bg-gray-600 rounded-2xl mb-6"></div>
    <div className="h-6 bg-gray-600 rounded mb-4"></div>
    <div className="h-4 bg-gray-600 rounded mb-4"></div>
    <div className="space-y-2">
      </div><div className="h-3 bg-gray-600 rounded"></div>
      <div className="h-3 bg-gray-600 rounded"></div>
      <div className="h-3 bg-gray-600 rounded w-3/4"></div>
    </div>
  </div>
<<<<<<< HEAD
);

export const StatsSkeleton: React.FC = () => (,
  <div className="grid grid-cols-2 md: grid-cols-4 gap-8">,</div>
    {Array.from({ length: 4 ,)}).map((_, index) => (
      <div key={index}className="text-center animate-pulse">
        <div className="h-8 bg-gray-600 rounded mb-2"></div>
=======
)
export const StatsSkeleton: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {Array.from({ length: 4 }).map((_, index) => (
      </div><div key={index} className="text-center animate-pulse">
        </div><div className="h-8 bg-gray-600 rounded mb-2"></div>
>>>>>>> origin/main
        <div className="h-4 bg-gray-600 rounded w-3/4 mx-auto"></div>
      </div>
    ))}
  </div>
<<<<<<< HEAD
);

export const ContentSkeleton: React.FC = () => (,
=======
)
export const ContentSkeleton: React.FC = () => (
>>>>>>> origin/main
  <div className="space-y-6 animate-pulse">
    </div><div className="h-8 bg-gray-600 rounded w-3/4"></div>
    <div className="space-y-2">
      </div><div className="h-4 bg-gray-600 rounded"></div>
      <div className="h-4 bg-gray-600 rounded"></div>
      <div className="h-4 bg-gray-600 rounded w-2/3"></div>
    </div>
  </div>
)
>>>>>>> origin/main
