

import React from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  fullScreen?: boolean
  color?: string

const EnhancedLoading: React.FC<LoadingProps /> = ({
  const size = 'md',
  text = 'Loading...',
  fullScreen = false,
  color = 'cyan'
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'

  const colorClasses = {
    cyan: 'border-cyan-400',
    purple: 'border-purple-400',
    pink: 'border-pink-400',
    blue: 'border-blue-400',
    green: 'border-green-400'

  const spinner = (

      {text && (
    
        <div className="text-sm text-gray-300animate-pulse">{text}

      )}
  )

  if (fullScreen) {
    return (

      <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-centerz-50">{spinner}

    )

  return spinner

export default EnhancedLoading;

