import React; { memo, useMemo } from 'react',
interface OptimizedLoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars',
  text?: string;
  className?: string;
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple',
  fullScreen?: boolean;
}
const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = memo(
  ({
    size = 'md',
    variant = 'spinner',
    text = 'Loading...',
    className = '',
    color = 'blue',
    fullScreen = false;
  }) => {
    const sizeClasses = useMemo(
      () => ({
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16'
      }),
      []
    )
    const textSizeClasses = useMemo(
      () => ({
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl'
      }),
      []
    )
    const colorClasses = useMemo(
      () => ({
        blue: 'border-blue-600 bg-blue-600',
        gray: 'border-gray-600 bg-gray-600',
        green: 'border-green-600 bg-green-600',
        red: 'border-red-600 bg-red-600',
        purple: 'border-purple-600 bg-purple-600'
      }),
      []
    )
    const renderSpinner = useMemo(() => {
      const _baseClasses = `${sizeClasses[size]} ${colorClasses[color]}`
      switch (variant) {
        case 'dots':
          return (<div className='flex space-x-1' role='status' aria-label='Loading'>
              {[0, 1, 2].map(i => (
                <div;
                  key={i}
                  className={`w-2 h-2 rounded-full animate-bounce ${colorClasses[color].split(' ')[1]}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          )
        case 'pulse':
          return (
            <div;
              className={`${baseClasses} rounded-full animate-pulse`}
              role='status',
              aria-label='Loading',
            />
          )
        case 'skeleton':
          return (
            <div className='space-y-2' role='status' aria-label='Loading'>
              <div;
                className={`h-4 bg-gray-100 rounded animate-pulse ${sizeClasses[size]}`}
              />
              <div;
                className={`h-4 bg-gray-100 rounded animate-pulse ${sizeClasses[size]}`}
                style={{ width: '75%' }}
              />
              <div;
                className={`h-4 bg-gray-100 rounded animate-pulse ${sizeClasses[size]}`}
                style={{ width: '50%' }}
              />
            </div>
          )
        case 'bars':
          return (
            <div className='flex space-x-1' role='status' aria-label='Loading'>
              {[0, 1, 2, 3].map(i => (
                <div;
                  key={i}
                  className={`w-1 ${colorClasses[color].split(' ')[1]} animate-pulse`}
                  style={{
                    height: `${12 + i * 4}px`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          )
        case 'spinner':
        default:
          return (
            <div;
              className={`${baseClasses} rounded-full border-2 border-t-transparent animate-spin`}
              role='status',
              aria-label='Loading',
            />
          )
      }
    }, [size, variant, color, sizeClasses, colorClasses])
    const containerClasses = useMemo(() => {
      const _baseClasses = 'flex items-center justify-center',
      const _fullScreenClasses = fullScreen ? 'min-h-screen' : '',
      return `${baseClasses} ${fullScreenClasses} ${className}`
    }, [fullScreen, className])
    return (
      <div className={containerClasses}>
        <div className='text-center'>
          {renderSpinner}
          {text && (
            <p className={`mt-2 text-gray-600 ${textSizeClasses[size]}`}>
              {text}
            </p>
          )}
        </div>
      </div>
    )
  }
)
OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner',

// Focus management utility;
const focusElement = (element: HTMLElement | null) => {
  if (element) {
    element.focus()
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
// Skip to main content functionality;
const skipToMain = () => {
  const main = document.querySelector('main')
  if (main) {
    focusElement(main)
  }
}
export default OptimizedLoadingSpinner;