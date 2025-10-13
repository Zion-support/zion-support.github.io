import { Loader2, Zap, Brain, Shield, Globe } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <Loader2 
      className={`animate-spin text-cyan-400 ${sizeClasses[size]} ${className}`} 
    />
  );
};

interface LoadingPageProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = "Loading...", 
  showProgress = false,
  progress = 0 
}) => {
  const icons = [Zap, Brain, Shield, Globe];
  const randomIcon = icons[Math.floor(Math.random() * icons.length)];
  const IconComponent = randomIcon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10">
          {/* Icon with animation */}
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center animate-pulse">
            <IconComponent className="w-10 h-10 text-cyan-400 animate-bounce" />
          </div>

          {/* Loading spinner */}
          <div className="mb-6">
            <LoadingSpinner size="lg" />
          </div>

          {/* Message */}
          <h2 className="text-2xl font-semibold text-white mb-2">
            {message}
          </h2>
          <p className="text-gray-300 mb-6">
            Please wait while we prepare everything for you...
          </p>

          {/* Progress bar */}
          {showProgress && (
            <div className="w-64 mx-auto mb-4">
              <div className="w-full bg-white/10 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {Math.round(progress)}% complete
              </p>
            </div>
          )}

          {/* Loading dots animation */}
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LoadingCardProps {
  className?: string;
  children?: React.ReactNode;
}

export const LoadingCard: React.FC<LoadingCardProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse ${className}`}>
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg"></div>
        <div className="flex-1">
          <div className="h-4 bg-white/20 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-white/10 rounded w-1/2"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-white/20 rounded"></div>
        <div className="h-3 bg-white/20 rounded w-5/6"></div>
        <div className="h-3 bg-white/20 rounded w-4/6"></div>
      </div>
      {children}
    </div>
  );
};

interface LoadingGridProps {
  count?: number;
  className?: string;
}

export const LoadingGrid: React.FC<LoadingGridProps> = ({ 
  count = 6, 
  className = '' 
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  );
};

interface LoadingButtonProps {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  loading = false,
  children,
  className = '',
  disabled = false,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {loading && <LoadingSpinner size="sm" className="mr-2" />}
      {children}
    </button>
  );
};

export default LoadingPage;