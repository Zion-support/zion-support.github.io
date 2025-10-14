import React, { ReactNode } from "react";

interface AdvancedLoadingStatesProps {
  children?: ReactNode;
  type?: string;
  fullScreen?: boolean;
  message?: string;
}

const AdvancedLoadingStates: React.FC<AdvancedLoadingStatesProps> = ({ 
  children, 
  fullScreen = false, 
  message = "Loading..." 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }
  const containerClasses = fullScreen
    ? 'min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'
    : 'flex items-center justify-center p-8';

  const renderSpinner = () => (
    <div className={`${sizeClasses[size]} border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin`}></div>
  )
  const renderDots = () => (
    <div className="flex space-x-2">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${sizeClasses[size]} bg-blue-600 rounded-full animate-bounce`}
          style={{ animationDelay: `${i * 0.1}s` }}
        ></div>
      ))}
    </div>
  )
  const renderSkeleton = () => (
    <div className="space-y-3">
      <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded animate-pulse w-1/2"></div>
    </div>
  )
  const renderPulse = () => (
    <div className={`${sizeClasses[size]} bg-blue-600 rounded-full animate-pulse`}></div>
  )
  const renderWave = () => (
    <div className="flex space-x-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="w-1 bg-blue-600 rounded-full animate-pulse"
          style={{ 
            height: `${(i + 1) * 4}px`,
            animationDelay: `${i * 0.1}s`
          }}
        ></div>
      ))}
    </div>
  )
  const renderLoading = () => {
    switch (type) {
      case 'spinner':
        return renderSpinner()
      case 'dots':
        return renderDots()
      case 'skeleton':
        return renderSkeleton()
      case 'pulse':
        return renderPulse()
      case 'wave':
        return renderWave()
      default:
        return renderSpinner()
    }
  }
  return (
    <div className={containerClasses}>
      <div className="text-center">
        {renderLoading()}
        {message && (
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
            {message}
          </p>
        )}
      </div>
    </div>
  )
}
export default LoadingStates;
