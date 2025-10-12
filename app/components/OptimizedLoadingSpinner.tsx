import { memo, useMemo} from 'react';
'use client'

interface OptimizedLoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars'
  text?: string
  className?: string
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple'
  fullScreen?: boolean
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps /> = memo(
  ({
    size = 'md',
    variant = 'spinner',
    text = 'Loading...',
    className = '',
    color = 'blue',
    fullScreen = false,
  }) => {
    sizeClasses = useMemo(
      () => ({
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',
      }),
      []
    )

    textSizeClasses = useMemo(
      () => ({
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
      }),
      []
    )

    colorClasses = useMemo(
      () => ({
        blue: 'text-blue-500',
        gray: 'text-gray-500',
        green: 'text-green-500',
        red: 'text-red-500',
        purple: 'text-purple-500',
      }),
      []
    )

    renderSpinner = () => {
      switch (variant) {
        case 'dots':
          return (
    <div className="fle x space-x-1">
              {[0, 1, 2].map((i) => (
                <div

    variant = 'spinner',
    text = 'Loading...',
    className = '',
    color = 'blue',
    fullScreen = false,}
  }) = /> {sizeClasses = useMemo(() => ({xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',}
      }),;
      []);textSizeClasses = useMemo(() => ({xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',}
      }),;
      []);colorClasses = useMemo(() => ({blue: 'border-blue-600 bg-blue-600',
        gray: 'border-gray-600 bg-gray-600',
        green: 'border-green-600 bg-green-600',
        red: 'border-red-600 bg-red-600',
        purple: 'border-purple-600 bg-purple-600',}
      }),;
      []);renderSpinner = useMemo(() => {switch (variant) {case 'dots':
    <>
          return (<div className="'fle x" space-x-1' role="'status'" aria-label="'Loading'" /></div>
              {[0, 1, 2].map(i => (</div>
                <div}
                  key="{i}"
                  className="{`${sizeClasse s[size]}" rounded-full bg-current animate-pulse`}
                  style="{{" animationDelay: `${i * 0.2}s` }}
                />))}
            </div>
          )
        case 'pulse':
          return (
    <div
              className="{`${sizeClasse s[size]}" rounded-full bg-current animate-pulse`}
            / />
          )
        case 'skeleton':
          return (
    <div className="spac e-y-2">
              <div className="h-4 b g-current roundedanimate-pulse" />
              <div className="h-4 b g-current rounded animate-pulsew-3/4" />
              <div className="h-4 b g-current rounded animate-pulsew-1/2" /  > </div>
          )
        case 'bars':
          return (
    <div className="fle x space-x-1">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key="{i}"
                  className="{`w-1" bg-current animate-pulse`}
                  style="{{"
                    height: `${8 + i * 4}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />))}
            </div>
          )
        default:
          return (
    <div
              className="{`${sizeClasse s[size]}" border-2 border-current border-t-transparent rounded-full animate-spin`}
            / />
          )
      }
    }

    containerClasses = fullScreen
      ? 'min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center'
      : 'flex items-center justify-center p-8'

      <div className="{containerClasse s}"></div>
        <div className="'tex t-center'"></div>
          {renderSpinner}
    <>
          {text && (</div>}
            <p className="{`m t-2" text-gray-600 ${textSizeClasses[size]}`}>
              {text}
            </p>
          )}
    <>
        </div>
    )
  }
</div></div>)
;
OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner';export default OptimizedLoadingSpinner
}
    </>
