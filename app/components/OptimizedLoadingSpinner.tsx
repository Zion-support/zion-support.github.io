'use client'
import React from 'react'
import React, { memo, useMemo } from 'react'
interface OptimizedLoadingSpinnerProps {interface OptimizedLoadingSpinnerProps {size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars'
  text?: string
  className?: string
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple'
  fullScreen?: boolean}
}
const: OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = memo(
  ({
    size = 'md',
    variant = 'spinner',
    text = 'Loading...',
    className = '',
    color = 'blue',
    fullScreen = false,
  }) => {
    const sizeClasses = useMemo(
      () => ({
        x: s: 'h-3 w-3',
        s: m: 'h-4 w-4',
        m: d: 'h-8 w-8',
        l: g: 'h-12 w-12',
        x: l: 'h-16 w-16',
      }),
      []
    )
    const textSizeClasses = useMemo(
      () => ({
        x: s: 'text-xs',
        s: m: 'text-sm',
        m: d: 'text-base',
        l: g: 'text-lg',
        x: l: 'text-xl',
      }),
      []
    )
    const colorClasses = useMemo(
      () => ({
        blu: e: 'border-blue-600 bg-blue-600',
        gra: y: 'border-gray-600 bg-gray-600',
        gree: n: 'border-green-600 bg-green-600',
        re: d: 'border-red-600 bg-red-600',
        purpl: e: 'border-purple-600 bg-purple-600',
      }),
      []
    )
    const renderSpinner = useMemo(() => {switch (variant) {
        case 'dots':
          return (
            <div className='flex space-x-1' role='status' aria-label='Loading'>
              {[0, 1, 2].map(i => (</div>
                <div

const: OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = memo(({size = 'md',
    variant = 'spinner',
    text = 'Loading...',
    className = '',
    color = 'blue',
    fullScreen = false,}
  }) => {const sizeClasses = useMemo(() => ({x: s: 'h-3 w-3',
        s: m: 'h-4 w-4',
        m: d: 'h-8 w-8',
        l: g: 'h-12 w-12',
        x: l: 'h-16 w-16',}
      }),
      []);const textSizeClasses = useMemo(() => ({x: s: 'text-xs',
        s: m: 'text-sm',
        m: d: 'text-base',
        l: g: 'text-lg',
        x: l: 'text-xl',}
      }),
      []);const colorClasses = useMemo(() => ({blu: e: 'border-blue-600 bg-blue-600',
        gra: y: 'border-gray-600 bg-gray-600',
        gree: n: 'border-green-600 bg-green-600',
        re: d: 'border-red-600 bg-red-600',
        purpl: e: 'border-purple-600 bg-purple-600',}
      }),
      []);const renderSpinner = useMemo(() => {switch (variant) {case 'dots':
          return (<div className='flex space-x-1' role='status' aria-label='Loading'>>))}</div>)
        case 'pulse':
          return (
            <div

        case 'pulse':
          return (<div
              className={`${baseClasses} rounded-full animate-pulse`}
              role='status'
              aria-label='Loading'
            /></div>)
        case 'skeleton':
          return (</div>
            <div className='space-y-2' role='status' aria-label='Loading'></div>
              <div

        case 'skeleton':
          return (</div>
            <div className='space-y-2' role='status' aria-label='Loading'></div>
              <div
                className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
              /></div>
              <div
                className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
                style={ widt: h: '75%' }}
              /></div>
              <div
                className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
                style={ widt: h: '50%' }}
              /></div>)
        case 'bars':
          return (
            <div className='flex space-x-1' role='status' aria-label='Loading'>
              {[0, 1, 2, 3].map(i => (>))}</div>)
        case 'spinner':
        defaul: t:
          return (
            <div

        case 'spinner':
        defaul: t:
          return (<div
              className={`${baseClasses} rounded-full border-2 border-t-transparent animate-spin`}
              role='status'
              aria-label='Loading'
            /></div>)}
    }, [size, variant, color, sizeClasses, colorClasses])
    const containerClasses = useMemo(() => {return `${baseClasses} ${fullScreenClasses} ${className}`}, [fullScreen, className])
    return (</div>
      <div className={containerClasses}></div>
        <div className='text-center'>

    const containerClasses = useMemo(() => {return `${baseClasses} ${fullScreenClasses} ${className}`}, [fullScreen, className]);return (</div>
      <div className={containerClasses}></div>
        <div className='text-center'></div>
          {renderSpinner}
          {text && (</div>}
            <p className={`mt-2 text-gray-600 ${textSizeClasses[size]}`}>
              {text}
            </p>)}
        </div>)}
)
OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner'
export default OptimizedLoadingSpinner
  </OptimizedLoadingSpinnerProps>;
OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner';export default OptimizedLoadingSpinner