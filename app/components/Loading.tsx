<<<<<<< HEAD
ursor/website-audit-and-update-with-deployment-a178
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react';

const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Loading - Zion Tech Group</title>
        <meta name="description" content="Loading page for Zion Tech Group" />
      </Helmet>
      
=======
'use client'
import React from 'react'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  fullScreen?: boolean
}

const Loading: React.FC<LoadingProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  fullScreen = false 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const containerClasses = fullScreen 
    ? 'min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center'
    : 'flex items-center justify-center p-8'

  return (
    <div className={containerClasses}>
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
      <div className="text-center">
        <div className={`${sizeClasses[size]} border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto mb-4`}></div>
        {text && (
          <p className="text-gray-300 text-lg font-medium">
            {text}
          </p>
        )}
      </div>
    </div>
  )
}

<<<<<<< HEAD
export default LoadingPage
=======
export default Loading
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
