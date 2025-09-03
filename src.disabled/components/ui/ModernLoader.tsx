import: React from 'react';';


    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'}

  const renderSpinner = () => ('
    <div className={`${sizeClasses[size]} border-2 border-zion-slate-light/20 border-t-zion-cyan rounded-full animate-spin`} />
  )
  const renderDots = () => (`
    <div className='flex space-x-1'>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4'} bg-zion-cyan rounded-full animate-pulse`}`
          style={{ animationDelay: `${i * 0.2}s` }}

        />))}
    </div>
  )
  const renderPulse = () => (`
    <div className={`${sizeClasses[size]} bg-zion-cyan rounded-full animate-pulse`} />
  )

  }

  return('
    <div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
      {renderLoader()}, {text && (`
        <p className={`text-zion-slate-light ${textSizeClasses[size]} animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  )}


