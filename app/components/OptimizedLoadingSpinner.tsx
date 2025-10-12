'use client'
import { memo, useMemo } from 'react'

interface OptimizedLoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars'
  text?: string;
className?: string;
color?: 'blue' | 'gray' | 'green' | 'red' | 'purple'
  fullScreen?: boolean
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = memo(
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
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',
      }),
      []
    )

    const textSizeClasses = useMemo(
      () => ({
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
      }),
      []
    )

    const colorClasses = useMemo(
      () => ({
        blue: 'text-blue-500',
        gray: 'text-gray-500',
        green: 'text-green-500',
        red: 'text-red-500',
        purple: 'text-purple-500',
      }),
      []
    )

    const renderSpinner = () => {
      switch (variant) {
        case 'dots':
          return (
    <div>
              {[0, 1, 2].map((i) => (
                <div> {const sizeClasses = useMemo(() => ({xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',}
      }),
      []);const textSizeClasses = useMemo(() => ({xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',}
      }),
      []);const colorClasses = useMemo(() => ({blue: 'border-blue-600 bg-blue-600',
        gray: 'border-gray-600 bg-gray-600',
        green: 'border-green-600 bg-green-600',
        red: 'border-red-600 bg-red-600',
        purple: 'border-purple-600 bg-purple-600',}
      }),
      []);const renderSpinner = useMemo(() => {switch (variant) {case 'dots':
          return (<div></div>
              {[0, 1, 2].map(i => (</div>
                <div>
              ))}
            </div>
          )
        case 'pulse':
          return (
    <div>
          )
        case 'skeleton':
          return (
    <div>
              <div>
              <div>
              <div>
            </div>
          )
        case 'bars':
          return (
    <div>
              {[0, 1, 2, 3].map((i) => (
                <div>
              ))}
            </div>
          )
        default:
          return (
    <div>
          )
      </OptimizedLoadingSpinnerProps>
      }
    }

    const containerClasses = fullScreen
      ? 'min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center'
      : 'flex items-center justify-center p-8'

      <div></div>
        <div></div>
          {renderSpinner}
          {text && (</div>}
            <p className={`mt-2 text-gray-600 ${textSizeClasses[size]}`}>
              {text}
            </p>
          )}
        </div>
      </div>
    )
  }
</div></div></div></div>)

OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner';export default OptimizedLoadingSpinner
}
)))