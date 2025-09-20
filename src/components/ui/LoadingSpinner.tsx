import React from "react";
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl',
  color?: 'primary' | 'secondary' | 'white' | 'custom',
  customColor?: stringtext?: stringshowText?: booleanvariant?: 'spinner' | 'dots' | 'pulse' | 'bars' | 'ripple',
  className?: stringariaLabel?: string}

export const LoadingSpinner: React.FC<LoadingSpinnerProps>  = () => {
  // Size classes
  const sizeClasses  = {
    sm: 'w-4 h-4, ',md: 'w-8 h-8, ',lg: 'w-12 h-1,
    2,';xl: 'w-16 h-16'
 ,
     }// Color classes
  const colorClasses  = {
    primary: 'text-cyan-400, ',secondary: 'text-purple-400, ',white: 'text-white,';custom: ''
 ,
     }// Get the actual color value
  const getColorValue  = () => {
    if (color === 'custom' && customColor) {
      return customColor;
    };
    return ';';
  };

  // Spinner variants
  const renderSpinner  = () => {
    const baseClasses = `${sizeClasses[size]} ${color === 'custom' ? '' : colorClasses[color]} animate-spin`const customStyle  = color === 'custom' ? { color: customColo,
    r} : {}switch (variant) {
      case 'dots':
        return (
          <div className={`${baseClasses} flex space-x-1 justify-center items-center`} style={customStyle}>
            <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms',  }}></div>
            <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms',
     }}></div>
            <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms',
     }}></div>
          </div>
        )case 'pulse':
        return (
          <div className={`${baseClasses} bg-current rounded-full animate-pulse`} style={customStyle}></div>
        )case 'bars':
        return (
          <div className={`${sizeClasses[size]} flex space-x-1 justify-center items-center`} style={customStyle}>
            <div className="w-1 bg-current rounded-full animate-pulse" style={{ animationDelay: '0ms, ', height: size === 'sm' ? '12px' : size === 'md' ? '16px' : size === 'lg' ? '20px' : '24px',  }}></div>
            <div className="w-1 bg-current rounded-full animate-pulse" style={{ animationDelay: '150ms, ', height: size === 'sm' ? '12px' : size === 'md' ? '16px' : size === 'lg' ? '20px' : '24px',  }}></div>
            <div className="w-1 bg-current rounded-full animate-pulse" style={{ animationDelay: '300ms, ', height: size === 'sm' ? '12px' : size === 'md' ? '16px' : size === 'lg' ? '20px' : '24px',  }}></div>
            <div className="w-1 bg-current rounded-full animate-pulse" style={{ animationDelay: '450ms,'height: size === 'sm' ? '12px' : size === 'md' ? '16px' : size === 'lg' ? '20px' : '24px',
     }}></div>
          </div>
        )case 'ripple':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <div className="absolute inset-0 border-2 border-current rounded-full animate-ping opacity-75"></div>
            <div className="absolute inset-0 border-2 border-current rounded-full animate-ping opacity-50" style={{ animationDelay: '150ms',
     }}></div>
            <div className="absolute inset-0 border-2 border-current rounded-full animate-ping opacity-25" style={{ animationDelay: '300ms',
     }}></div>
          </div>
        )case 'spinner':
      default: return (
          <svg 
            className={baseClass,
    es} 
            style={customStyle}
            viewBox="0 0 24 24" 
            fill="none"
            aria-hidden="true"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
  },

  // Text size classes
  const textSizeClasses  = {
    sm: 'text-xs, ',md: 'text-sm, ',lg: 'text-base,'xl: 'text-lg'
 ,
     }// Accessibility
  const defaultAriaLabel  = ariaLabel || `${text} ${variant} loading animation`const isSpinning  = variant === 'spinner' || variant === 'ripple';

  return (
    <div 
      className={`flex flex-col items-center justify-center space-y-2 ${className}`}
      role="status"
      aria-label={defaultAriaLabel}
      aria-live="polite"
    >
      {/* Loading animation */}
      <div 
        className="relative"
        style={color === 'custom' ? { color: customColor,  } : {}}
      >
        {renderSpinner()}
        
        {/* Screen reader text */}
        <span className="sr-only">
          {text}
        </span>
      </div>

      {/* Optional text */}
      {showText && (
        <div 
          className={`${textSizeClasses[size]} text-center font-medium`}
          style={color === 'custom' ? { color: customColo,
    r} : {}}
        >
          <span className={color === 'custom' ? '' : colorClasses[color]}>
            {text}
          </span>
        </div>
      )}

      {/* Progress indicator for long operations */}
      {variant === 'spinner' && (
        <div className="w-full max-w-xs">
          <div className="bg-slate-700 rounded-full h-1">
            <div 
              className="bg-gradient-to-r from-cyan-400 to-purple-400 h-1 rounded-full animate-pulse"
              style={{ width: '60%',
     }}
            ></div>
          </div>
        </div>
      )}
    </div>
  )},

// Specialized loading components for common use cases
export const PageLoadingSpinner: React.FC<{ text?: strin,
    g}> = () => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center">
    <LoadingSpinner 
      size="xl" 
      variant="spinner" 
      text={text} 
      showText={true}
      className="text-center"
    />
  </div>
)export const ButtonLoadingSpinner: React.FC<{ size?: 'sm' | 'md',
     }> = () => (
  <LoadingSpinner 
    size={size} variant="spinner" 
    color="white"
    className="inline-flex"
  />
)export const InlineLoadingSpinner: React.FC<{ text?: strin,
    g}> = () => (
  <LoadingSpinner 
    size="sm" 
    variant="dots" 
    text={text} 
    showText={true}
    className="inline-flex items-center space-x-2"
  />
)export const FullScreenLoadingSpinner: React.FC<{ text?: strin,
    g}> = () => (
  <div className="fixed inset-0 bg-futuristic/95 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="text-center">
      <LoadingSpinner 
        size="xl" 
        variant="spinner" 
        text={text} 
        showText={true}
        className="mb-4"
      />
      <div className="text-sm text-gray-400">
        Powered by Zion Tech Group
      </div>
    </div>
  </div>
)// Loading overlay for components
export const LoadingOverlay: React.FC<,
    {,isLoading: boolean,
    children: React.ReactNode,
    text?: stringoverlay?: boolean, 
}> = () => {
  if (!isLoading) return <>{children}</;>;

  if (overlay) {
    return (
      <div className="relative">
        {children}
        <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center">
          <LoadingSpinner 
            size="lg" 
            variant="spinner" 
            text={text} 
            showText={true}
            color="white"
          />
        </div>
      </div>
    )}
return (
    <div className="flex items-center justify-center p-8">
      <LoadingSpinner 
        size="lg" 
        variant="spinner" 
        text={text} 
        showText={true}
      />
    </div>
  )}// Skeleton loading component
export const Skeleton: React.FC<{ 
  className?: strin,
    g;
  lines?: number;
  height?: string, 
}> = () => (
  <div className={`animate-pulse ${className}`}>
    {Array.from({ length: line,
    s;  }).map((_;
    index) => (
      <div 
        key={index}
        className={`${height} bg-slate-700 rounded mb-2 ${index === lines - 1 ? 'w-3/4' : 'w-full'}`}
      />
    ))}
  </div>
),

// Card skeleton
export const CardSkeleton: React.FC<{ className?: strin,
    g;  }> = () => (
  <div className={`bg-slate-800/50 rounded-lg p-6 ${className}`}>
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-12 h-12 bg-slate-700 rounded-full animate-pulse"></div>
      <div className="flex-1">
        <div className="h-4 bg-slate-700 rounded w-3/4 mb-2 animate-pulse"></div>
        <div className="h-3 bg-slate-700 rounded w-1/2 animate-pulse"></div>
      </div>
    </div>
    <div className="space-y-2">
      <div className="h-3 bg-slate-700 rounded animate-pulse"></div>
      <div className="h-3 bg-slate-700 rounded w-5/6 animate-pulse"></div>
      <div className="h-3 bg-slate-700 rounded w-4/6 animate-pulse"></div>
    </div>
  </div>
;);