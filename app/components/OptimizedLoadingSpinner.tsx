  fullScreen?: boolean;}}
const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = memo(,)
  ({size = 'md',
    variant = 'spinner',
    text = 'Loading...',
    className = '',
    color = 'blue',
    fullScreen = false,}}) =>
                {const sizeClasses = useMemo(;)
      () => ({
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',}}),
      []
    );
const textSizeClasses = useMemo(;)
      () => ({xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',}}),
      []
    );
const colorClasses = useMemo(;)
      () => ({blue: 'border-blue-600 bg-blue-600',
        gray: 'border-gray-600 bg-gray-600',
        green: 'border-green-600 bg-green-600',
        red: 'border-red-600 bg-red-600',
        purple: 'border-purple-600 bg-purple-600',}}),
      []
    );
const renderSpinner = useMemo(() =>
                {
    switch (variant) {;
        case 'dots':;
          return(<div className='flex space-x-1' role='status' aria-label='Loading'></div>)
              {[0, 1, 2].map(i => (</div>)
                <div;}key={i}className={`w-2 h-2 rounded-full animate-bounce ${colorClasses[color].split(' ')[1]}`}
                  style={{ animationDelay: `${i * 0.1,}s` }}
                /></div>
              ))}
                </div>
          );
case 'pulse':;
          return(<div;)
              className={`${baseClasses}rounded-full animate-pulse`}
              role='status';
              aria-label='Loading';
            /></div>
          );
case 'skeleton':;
          return(</div>)
            <div className='space-y-2' role='status' aria-label='Loading'></div>
              <div;

                className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
              /></div>
              <div;
                className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
                style={{ width: '75%' ,}}
              /></div>
              <div;
                className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
                style={{ width: '50%' ,}}
              /></div>
          );
case 'bars':;
          return(<div className='flex space-x-1' role='status' aria-label='Loading'></div>)
              {[0, 1, 2, 3].map(i => (</div>)
                <div;}key={i}className={`w-1 ${colorClasses[color].split(' ')[1]}animate-pulse`}
                  style={{}height: `${12 + i * 4,}px`,
                    animationDelay: `${i * 0.1,}s`,
'use client'
import React, { Suspense, lazy } from 'react'
interface OptimizedLoadingSpinnerProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars'
  text?: string
  className?: string
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple'
  fullScreen?: boolean
  }
}
const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = memo()
  }) =>
                {
    const sizeClasses = useMemo()
      () => ()
      }),
      []
    )
const textSizeClasses = useMemo()
      () => ()
      }),
      []
    )
const colorClasses = useMemo()
      () => ()
      }),
      []
    )
const renderSpinner = useMemo(() =>
                {
    switch (variant) {
        case 'dots':
          return (
            </OptimizedLoadingSpinnerProps><div className='flex space-x-1' role='status' aria-label='Loading'></div>
                {[0, 1, 2].map(i => (</div>
                <$2 />
  }

                  key={i}
          return ()
                  className={`w-2 h-2 rounded-full animate-bounce ${colorClasses[color].split(' ')[1]}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                / /></div>
              ))}
                </div>
          )
case 'pulse':
          return (
    <React.Fragment>;
      <;$2 />
              className={`${baseClasses} rounded-full animate-pulse`}
              role='status'
              aria-label='Loading'/></div>
                </React.Fragment>
  )
case 'skeleton':
          return ()
          )
case 'bars':
          return ()
                  className={`w-1 ${colorClasses[color].split(' ')[1]} animate-pulse`}
                  style={{}
                    height: `${12 + i * 4}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                / /></div>
              ))}
                </div>
                {renderSpinner},
    {text && (</div>
  }
                <p></p>
                {text</p>}
                </p>
          )
case 'spinner':
        default:  
          return (
    <React.Fragment></React.Fragment>
      <,$2 />
              className={`${baseClasses} rounded-full border-2 border-t-transparent animate-spin`}
              role='status'
              aria-label='Loading'/></div>
                </React.Fragment>
  )
      }
    }, [size, variant, color, sizeClasses, colorClasses])
const containerClasses = useMemo(() =>
                {return `${baseClasses} ${fullScreenClasses} ${className}`
    }, [fullScreen, className])
return ()
          )}
                </div>
    )
  } )
OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner'
export default OptimizedLoadingSpinner/>
              ))}
          )
        case 'pulse':
          return (
            <$2 />
              className={`${baseClasses} rounded-full animate-pulse`}
              role='status'
              aria-label='Loading'/>
          )
        case 'skeleton':
          return (
            <div className='space-y-2' role='status' aria-label='Loading'></div>
              <$2 />
                className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
              />
              <$2 />
                className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
                style={{ width: '75%' }}
              />
              <$2 />
                className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
                style={{ width: '50%' }}
              />
          )
        case 'bars':
          return (
            <div className='flex space-x-1' role='status' aria-label='Loading'></div>
                {[0, 1, 2, 3].map(i => (
                <$2 />
                  key={i}
                  className={`w-1 ${colorClasses[color].split(' ')[1]} animate-pulse`}
                  style={{;}
                    height: `${12 + i * 4}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
          )
        case 'spinner':
        default:
          return (
            <$2 />
              className={`${baseClasses} rounded-full border-2 border-t-transparent animate-spin`}
              role='status'
              aria-label='Loading'/>
          )
      }
    }, [size, variant, color, sizeClasses, colorClasses])
    const containerClasses = useMemo(() =>
                {return `${baseClasses} ${fullScreenClasses} ${className}`
    }, [fullScreen, className])
    return (
      <div className={containerClasses}></div>
        <div className='text-center'></div>
                {renderSpinner}
          {text && (</div>}
                <p className={`mt-2 text-gray-600 ${textSizeClasses[size]}`}></p>
                {text}
          )}
    )
  }
)
OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner'
export default OptimizedLoadingSpinner
</div>
                </div></div>
                </div></p>
