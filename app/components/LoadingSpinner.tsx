
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  text?: string
  fullScreen?: boolean
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  fullScreen = false 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    <div className="flex flex-col items-center justify-center space-y-2" role="status" aria-label="Loading">
      )}
  className = '',
  text?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  text,
  className = ''
  text = 'Loading...',
  fullScreen = false,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

const LoadingSpinner: React.FC = () => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 className={`${sizeClasses[size]} text-purple-600 animate-spin`} />
      {text && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{text}</p>
      )}
    white: 'text-white',}return(<div className="flex flex-col items-center justify-center space-y-2" role="status" aria-label="Loading">)</div>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent ${sizeClasses[size]}${colorClasses[color]}`}></div>
      {text && (
        <p className={`text-sm ${colorClasses[color]}animate-pulse`}>{text</p>} </p>
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  }

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  }

  const content = (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} border-4 border-cyan-500/20 rounded-full animate-spin`}></div>
        {/* Inner ring */}
        <div className={`${sizeClasses[size]} border-4 border-transparent border-t-cyan-400 rounded-full animate-spin absolute top-0 left-0`}></div>
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Zap className={`${size === 'sm' ? 'h-2 w-2' : size === 'md' ? 'h-3 w-3' : size === 'lg' ? 'h-4 w-4' : 'h-6 w-6'} text-cyan-400 animate-pulse`} />
        </div>
      </div>
      
      {text && (
        <p className={`text-gray-300 ${textSizeClasses[size]} font-medium animate-pulse`}>
          {text}
        </p>
      )}
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin mx-auto" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            Zion Tech Group
          </span>
        </h2>
        <p className="text-gray-300">Loading amazing technology solutions...</p>
      </div>
    </div>
  )

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        {content}
      </div>
    )
  }

  return content
}

export default LoadingSpinner
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]}`}>
        <span className="sr-only">Loading...</span>
      </div>
      {text && (
        <p className={`mt-2 text-sm ${colorClasses[color]}`}>
          {text}
        </p>
      )}
    lg: 'w-12 h-12',
  };

  const colorClasses = {
    indigo: 'text-indigo-600',
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`} role="status" aria-live="polite">
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin rounded-full border-4 border-t-transparent border-current`}
        aria-hidden="true"
      />
      {text && <p className="mt-2 text-sm text-gray-600">{text}</p>}
    </div>
    </>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          {spinner}
        </div>
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
