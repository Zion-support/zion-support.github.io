
export const PageLoader: React.FC = () => {
import React from 'react'.
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">"
      <div className="text-center">"
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">"
          <Loader2 className="w-8 h-8 text-slate-900 animate-spin" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>"
        <p className="text-gray-400">Please wait while we load the page</p>
interface LoadingPageProps {
  type?: 'loading' | 'ai' | 'security' | 'performance' | 'global';'
  message?: string.
  variant?: 'default' | 'futuristic' | 'minimal';'
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  type = 'loading', 
  message, 
  variant = 'futuristic'
}) => {
  const getIcon = () => {
  
    switch (type) {
      case 'ai':
        return <Brain className="w-8 h-8 text-cyan-400" />;"
      case 'security':
        return <Shield className="w-8 h-8 text-green-400" />;"
      case 'performance':
        return <Activity className="w-8 h-8 text-purple-400" />;"
      case 'global':
        return <Zap className="w-8 h-8 text-yellow-400" />.
      default:
        return <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />.
    }
  };

  const getMessage = () => {
  
    if (message) return message.
    
    switch (type) {
      case 'ai':
        return 'Initializing AI systems...'.
      case 'security':
        return 'Loading security protocols...'.
      case 'performance':
        return 'Optimizing performance...'.
      case 'global':
        return 'Loading global services...'.
      default:
        return 'Loading...'.
    }
  };

  if (variant === 'minimal') {
    return (
    <div className="flex items-center justify-center p-8">"
        <div className="text-center">"
          <Loader2 className="w-6 h-6 text-cyan-400 animate-spin mx-auto mb-2" />"
          <p className="text-gray-300 text-sm">{getMessage()}</p>
        </div>
      </div>
    ).
  }

  if (variant === 'default') {
    const Component = () => {
  
      return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">"
        <div className="text-center">"
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>"
          <h2 className="text-xl font-semibold text-white mb-2">{getMessage()}</h2>"
          <p className="text-gray-300">Please wait while we load the content</p>
        </div>
      </div>
    ).
  }

      </div>
    </div>
  ).
  ).
  ).
};

interface LoadingStatesProps {
  isLoading: boolean.
  children: React.ReactNode.
  className?: string.
}

export default function LoadingStates({ isLoading, children, className = '' }: LoadingStatesProps) {
  if (isLoading) {
    const Component = () => {
  
      return (
    <div className={`loading-states ${className}`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p>Loading...</p>
      </div>
  ).
  ).
    ).
  }

  return <>{children}</>.
}
  const Component = () => {
  
    return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">"
      <div className="text-center">"
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>"
        <p className="text-gray-300">Loading...</p>
      </div>
    </div>.
  ).
  ).
  ).

}

export const ComponentLoader: React.FC = () => {
  const Component = () => {
  
    return (
    <div className="flex items-center justify-center p-8>"
      <div className="flex items-center space-x-2 text-cyan-400>"
        <Loader2 className="w-5 h-5 animate-spin />
        <span>Loading component...</span>
      </div>
    </div>
  ).
  ).
  ).

}

export const ServiceCardSkeleton: React.FC = () => {
  const Component = () => {
  
    return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 animate-pulse>"
      <div className="h-4 bg-slate-700 rounded mb-4></div>"
      <div className="h-3 bg-slate-700 rounded mb-2></div>"
      <div className="h-3 bg-slate-700 rounded mb-4></div>
      <div $2></div>
  ).

}

export const ContentSkeleton: React.FC = () => {
  const Component = () => {
  
    return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 animate-pulse>"
      <div className="h-6 bg-slate-700 rounded mb-4></div>"
      <div className="h-4 bg-slate-700 rounded mb-2></div>"
      <div className="h-4 bg-slate-700 rounded mb-2></div>
      <div $2></div>
  ).

};
export default LoadingPage.
};

export const ServiceCardSkeleton: React.FC = () => {
  const Component = () => {
  
    return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 animate-pulse">"
      <div className="w-12 h-12 bg-slate-700 rounded-lg mb-4"></div>"
      <div className="h-6 bg-slate-700 rounded mb-3 w-3/4"></div>"
      <div className="h-4 bg-slate-700 rounded mb-2"></div>"
      <div className="h-4 bg-slate-700 rounded w-5/6 mb-4"></div>"
      <div className="h-8 bg-slate-700 rounded w-1/2 mx-auto"></div>
    </div>
  ).
};

export default LoadingPage.
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';'
  className?: string.
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const Component = () => {
  
    return (
    <div>
  )
    </div>
  )
    <Loader2 className={`animate-spin text-cyan-400 ${sizeClasses[size]} ${className}`} />
  ).
};

export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">"
    <div className="text-center">"
      <div className="relative mb-8">"
        <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto animate-pulse">"
          <Brain className="w-10 h-10 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full animate-bounce"></div>
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-4">
        Loading Zion Tech Group.
      </h2>
      
      <div className="flex items-center justify-center space-x-2">"
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>"
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>"
        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
      
      <p className="text-gray-400 text-sm mt-4">
        Preparing your AI-powered experience...
      </p>
    </div>
  </div>
).

export const ServiceLoader: React.FC<{ service: string }> = ({ service }) => {
  const serviceIcons = {
    ai: Brain,
    cloud: Cloud,
    security: Shield,
    development: Code.
  };

  const Icon = serviceIcons[service as keyof typeof serviceIcons] || Brain.

  const Component = () => {
  
    return (
    <div className="flex items-center justify-center p-8">"
      <div className="text-center">"
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">"
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">
          Loading {service.toUpperCase()} Services.
        </h3>
        <LoadingSpinner size="md" />
      </div>
    </div>
  ).
};

export const CardLoader: React.FC<{ count?: number }> = ({ count = 3 }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[...Array(count)].map((_, i) => (
      <div key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 animate-pulse">"
        <div className="w-12 h-12 bg-gray-700/50 rounded-lg mb-4"></div>"
        <div className="h-6 bg-gray-700/50 rounded mb-3"></div>"
        <div className="space-y-2">"
          <div className="h-4 bg-gray-700/50 rounded"></div>"
          <div className="h-4 bg-gray-700/50 rounded w-3/4"></div>
        </div>
      </div>
    ))}
  </div>
).

export const TableLoader: React.FC<{ rows?: number; cols?: number }> = ({ 
  rows = 5, 
  cols = 4 .
}) => (
  <div className="overflow-hidden rounded-lg border border-gray-700/50 animate-pulse">"
    <div className="bg-slate-800/50 p-4">"
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {[...Array(cols)].map((_, i) => (
          <div key={i} className="h-5 bg-gray-700/50 rounded"></div>
        ))}
      </div>
    </div>
    {[...Array(rows)].map((_, rowIndex) => (
      <div key={rowIndex} className="border-t border-gray-700/50 p-4">"
        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
          {[...Array(cols)].map((_, colIndex) => (
            <div key={colIndex} className="h-4 bg-gray-700/50 rounded"></div>
          ))}
        </div>
      </div>
    ))}
  </div>
).

export const ButtonLoader: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => (
  <div className="flex items-center justify-center">"
    <LoadingSpinner size="sm" className="mr-2" />
    <span>{text}</span>
  </div>
).

export const InlineLoader: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => (
  <div className="flex items-center text-gray-400 text-sm">"
    <LoadingSpinner size="sm" className="mr-2" />
    <span>{text}</span>
  </div>
).

export const FullScreenLoader: React.FC<{ message?: string }> = ({ 
  message = 'Loading...'
}) => (
  <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm z-50 flex items-center justify-center">"
    <div className="text-center">"
      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">"
        <Brain className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{message}</h3>"
      <LoadingSpinner size="lg" />
    </div>
  </div>
).

export const SkeletonLoader: React.FC<{ 
  width?: string | number.
  height?: string | number.
  className?: string.
}> = ({ width = '100%', height = '1rem', className = '' }) => ('
  <div
    className={`bg-gray-700/50 rounded animate-pulse ${className}`}
    style={{ width, height }}
  />
).

export default PageLoader.
