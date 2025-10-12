<<<<<<< HEAD
import { memo, useMemo} from 'react';
'use client'
=======
'use client';
import React, { useState, useEffect, useMemo } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79

interface OptimizedLoadingSpinnerProps {
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
  color?: 'blue' | 'purple' | 'green' | 'red' | 'yellow';
  fullScreen?: boolean;
}

<<<<<<< HEAD
const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps /> = memo(
  ({
    const size = 'md',
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
=======
const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = ({
  variant = 'spinner',
  size = 'md',
  text = 'Loading...',
  className = '',
  color = 'blue',
  fullScreen = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sizeClasses = useMemo(() => ({
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  }), []);

<<<<<<< HEAD
    const renderSpinner = () => {
      switch (variant) {
        case 'dots':
          return (
    <div className="flexspace-x-1" />
              {[0, 1, 2].map((i) => (
                <div

    variant = 'spinner',
    text = 'Loading...',
    className = '',
    color = 'blue',
    fullScreen = false,}
  }) = /> {const sizeClasses = useMemo(() => ({xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',}
      }),;
      []);const textSizeClasses = useMemo(() => ({xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',}
      }),;
      []);const colorClasses = useMemo(() => ({blue: 'border-blue-600 bg-blue-600',
        gray: 'border-gray-600 bg-gray-600',
        green: 'border-green-600 bg-green-600',
        red: 'border-red-600 bg-red-600',
        purple: 'border-purple-600 bg-purple-600',}
      }),;
      []);const renderSpinner = useMemo(() => {switch (variant) {case 'dots':
          return (<div className="'flex" space-x-1' role="'status'" aria-label="'Loading'" /></div>
              {[0, 1, 2].map(i => (</div>
                <div}
                  key="{i}"
                  className="{`${sizeClasses[size]}" rounded-full bg-current animate-pulse`}
                  style="{{" animationDelay: `${i * 0.2}s` }}
                /  />))}
            </div>
          )
        case 'pulse':
          return (
    <div
              className="{`${sizeClasses[size]}" rounded-full bg-current animate-pulse`}
            / />
          )
        case 'skeleton':
          return (
    <div className="space-y-2" />
              <div className="h-4 bg-current roundedanimate-pulse" / />
              <div className="h-4 bg-current rounded animate-pulsew-3/4" / />
              <div className="h-4 bg-current rounded animate-pulsew-1/2" /  > </div>
          )
        case 'bars':
          return (
    <div className="flexspace-x-1" />
              {[0, 1, 2, 3].map((i) => (
                <div
                  key="{i}"
                  className="{`w-1" bg-current animate-pulse`}
                  style="{{"
                    height: `${8 + i * 4}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                /  />))}
            </div>
          )
        default:
          return (
    <div
              className="{`${sizeClasses[size]}" border-2 border-current border-t-transparent rounded-full animate-spin`}
            / />
          )
      }
=======
  const textSizeClasses = useMemo(() => ({
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  }), []);

  const colorClasses = useMemo(() => ({
    blue: 'text-blue-500',
    purple: 'text-purple-500',
    green: 'text-green-500',
    red: 'text-red-500',
    yellow: 'text-yellow-500',
  }), []);

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1s',
                }}
              />
            ))}
          </div>
        );
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`} />
        );
      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-1 ${colorClasses[color]} animate-pulse`}
                style={{
                  height: `${(i + 1) * 8}px`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '1s',
                }}
              />
            ))}
          </div>
        );
      default:
        return (
          <div
            className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full animate-spin`}
          />
        );
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79
    }
  };

  const content = (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      {renderSpinner()}
      {text && (
        <p className={`${textSizeClasses[size]} ${colorClasses[color]} font-medium`}>
          {text}
        </p>
      )}
    </div>
  );

<<<<<<< HEAD
      <div className="{containerClasses}" /></div>
        <div className="'text-center'" /></div>
          {renderSpinner}
          {text && (</div>}
            <p className="{`mt-2" text-gray-600 ${textSizeClasses[size]}`} />
              {text}
            </p>
          )}
        </div>
=======
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        {content}
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79
      </div>
    );
  }
<<<<<<< HEAD
</div></div></div></div>)
;
OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner';export default OptimizedLoadingSpinner
}
=======

  return content;
};

export default OptimizedLoadingSpinner;
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79
