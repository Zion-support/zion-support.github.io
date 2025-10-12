import { memo, useMemo} from 'react';
'use client'

interface OptimizedLoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars'
  text?: string
  className?: string
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple'
  fullScreen?: boolean

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps /> = memo(
  ({
    const size = 'md',
    variant = 'spinner',
    text = 'Loading...',
    className = '',
    color = 'blue',
    fullScreen = false,
    const sizeClasses = useMemo(
 ({
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',
      }),
      []
    )

    const textSizeClasses = useMemo(
 ({
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
      }),
      []
    )

    const colorClasses = useMemo(
 ({
        blue: 'text-blue-500',
        gray: 'text-gray-500',
        green: 'text-green-500',
        red: 'text-red-500',
        purple: 'text-purple-500',
      }),
      []
    )

      switch (variant) {
        case 'dots':
          return (

 (

    variant = 'spinner',
    text = 'Loading...',
    className = '',
    color = 'blue',
    fullScreen = false,}
 ({xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',}
      }),;
 ({xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',}
      }),;
 ({blue: 'border-blue-600 bg-blue-600',
        gray: 'border-gray-600 bg-gray-600',
        green: 'border-green-600 bg-green-600',
        red: 'border-red-600 bg-red-600',
        purple: 'border-purple-600 bg-purple-600',}
      }),;
 {switch (variant) {case 'dots':
    
          return (<div className="'flex" space-x-1' role="'status'" aria-label="'Loading'" /></div>
              {[0, 1, 2].map(i => (</div>
                
                  key="{i}"
                  className="{`${sizeClasses[size]}" rounded-full bg-current animate-pulse`}
                  style="{{" animationDelay: `${i * 0.2}s` }}
))}
          )
        case 'pulse':
          return (
          )
        case 'skeleton':
          return (

              <div className="h-4 bg-current rounded animate-pulsew-1/2" /> </div>
          )
        case 'bars':
          return (

 (
                
                  key="{i}"
                  className="{`w-1" bg-current animate-pulse`}
                  style="{{"
                    height: `${8 + i * 4}px`,
                    animationDelay: `${i * 0.1}s`,
))}
          )
        default:
          return (
          )

  const content = (
      {renderSpinner()}
      {text && (
          {text}
      )}
  );

      <div className="{containerClasses}" /></div>
        <div className="'text-center'" /></div>

          {renderSpinner}
    
          {text && (</div>}
              {text}
          )}

    );

</div></div>)
;
OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner';export default OptimizedLoadingSpinner
