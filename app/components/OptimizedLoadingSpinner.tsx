    variant = 'spinner',
    text = 'Loading...',
    className = '',
    color = 'blue',
      () => ({
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
      []
    );
const textSizeClasses = useMemo(;)
      () => ({xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      []
    );
const colorClasses = useMemo(;)
      () => ({blue: 'border-blue-600 bg-blue-600',
        gray: 'border-gray-600 bg-gray-600',
        green: 'border-green-600 bg-green-600',
        red: 'border-red-600 bg-red-600',
      []
    );
        case 'dots':;
<<<<<<< HEAD
          return(<div className='flex space-x-1' role='status' aria-label='Loading'></div></div></div>)
=======
          return (<div className='flex space-x-1' role='status' aria-label='Loading'></div>)
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
              {[0, 1, 2].map(i => (</div>)
                <div;}key={i}className="{`w-2" h-2 rounded-full animate-bounce ${colorClasses[color].split(' ')[1]}`}
                  style={{ animationDelay: `${i * 0.1,}s` }}
                /></div>
              ))}</div>
          );
case 'pulse':;
<<<<<<< HEAD
          return(<div;)
              className="{`${baseClasses}rounded-full" animate-pulse`}
=======
          return (<div;)
              className={`${baseClasses}rounded-full animate-pulse`}
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
              role='status';
              aria-label='Loading';
            /></div>
          );
case 'skeleton':;
<<<<<<< HEAD
          return(</div>)
            <div className='space-y-2' role='status' aria-label='Loading'></div></div></div>
=======
          return (</div>)
            <div className='space-y-2' role='status' aria-label='Loading'></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
              <div;

                className="{`h-4" bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
              /></div>
              <div;
                className="{`h-4" bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
                style={{ width: '75%' ,}}
              /></div>
              <div;
                className="{`h-4" bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
                style={{ width: '50%' ,}}
              /></div>
          );
case 'bars':;
<<<<<<< HEAD
          return(<div className='flex space-x-1' role='status' aria-label='Loading'></div></div></div>)
              {[0, 1, 2, 3].map(i =&gt; (</div&gt;)
                <div;}key={i}className="{`w-1" ${colorClasses[color].split(' ')[1]}animate-pulse`}
=======
          return (<div className='flex space-x-1' role='status' aria-label='Loading'></div>)
              {[0, 1, 2, 3].map(i => (</div>)
                <div;}key={i}className={`w-1 ${colorClasses[color].split(' ')[1]}animate-pulse`}
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
                  style={{}height: `${12 + i * 4,}px`,
                    animationDelay: `${i * 0.1,}s`,
'use client'
import React, { Suspense, lazy  } from 'react'
interface OptimizedLoadingSpinnerProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars'
  text?: string
  className?: string
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple'
  fullScreen?: boolean
  }
}
const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps></div></div> = memo()
  }) => {
    const sizeClasses = useMemo()
      () =&gt; ()
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
const renderSpinner = useMemo(() => {
    switch (variant) {
        case 'dots':
          return (
                  key={i}
          return ()
                  className="{`w-2" h-2 rounded-full animate-bounce ${colorClasses[color].split(' ')[1]}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
          return (
    <>
      <;$2 />
              className="{`${baseClasses}" rounded-full animate-pulse`}
              role='status'
              aria-label='Loading'/></div>
    </>
  )
case 'skeleton':
          return ()
          )
case 'bars':
          return ()
                  className="{`w-1" ${colorClasses[color].split(' ')[1]} animate-pulse`}
                  style={{}
                    height: `${12 + i * 4}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                / /></div>
              ))}</div>
    text && (</div>
  }
            <p>{text</p&gt;} </p>
          )
case 'spinner':
        default:  
          return (
    <>
      <,$2 />
              className="{`${baseClasses}" rounded-full border-2 border-t-transparent animate-spin`}
              role='status'
              aria-label='Loading'/></div>
    </>
  )
      }
    }, [size, variant, color, sizeClasses, colorClasses])
const containerClasses = useMemo(() => {return `${baseClasses} ${fullScreenClasses} ${className}`
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
            <div></div>
              className="{`${baseClasses}" rounded-full animate-pulse`}
              role='status'
              aria-label='Loading'/>
          )
        case 'skeleton':
                  key={i}
                  className="{`w-1" ${colorClasses[color].split(' ')[1]} animate-pulse`}
                  style={{;}
                    height: `${12 + i * 4}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
        case 'spinner':
        default:
          return (
            <div></div>
              className="{`${baseClasses}" rounded-full border-2 border-t-transparent animate-spin`}
              role='status'
