import React from 'react';
import { Loader2, Zap, Brain, Shield, Cloud } from 'lucide-react';

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
      className={`animate-spin ${sizeClasses[size]} ${className}`} 
      aria-label="Loading"
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
  const [dots, setDots] = React.useState('');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-ping opacity-20"></div>
        </div>

        {/* Loading Message */}
        <h2 className="text-2xl font-bold text-white mb-4">
          {message}{dots}
        </h2>

        {/* Progress Bar */}
        {showProgress && (
          <div className="w-64 mx-auto mb-4">
            <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 h-full transition-all duration-300 ease-out"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              />
            </div>
            <p className="text-gray-400 text-sm mt-2">{Math.round(progress)}% complete</p>
          </div>
        )}

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Loading Tips */}
        <div className="mt-8 text-gray-400 text-sm max-w-md mx-auto">
          <p>Preparing your experience with cutting-edge technology...</p>
        </div>
      </div>
    </div>
  );
};

interface LoadingCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const LoadingCard: React.FC<LoadingCardProps> = ({ 
  title = "Loading...",
  description,
  icon,
  className = ""
}) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 ${className}`}>
      <div className="flex items-center space-x-4">
        {icon && (
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          {description && (
            <p className="text-gray-300 text-sm">{description}</p>
          )}
        </div>
        <LoadingSpinner />
      </div>
    </div>
  );
};

interface SkeletonLoaderProps {
  lines?: number;
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  lines = 3, 
  className = "" 
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div 
          key={index}
          className={`h-4 bg-gray-700 rounded mb-2 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
};

interface ServiceLoadingProps {
  service: 'ai' | 'it' | 'saas' | '5g';
}

export const ServiceLoading: React.FC<ServiceLoadingProps> = ({ service }) => {
  const serviceConfig = {
    ai: {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Services",
      description: "Loading artificial intelligence solutions...",
      color: "from-blue-500 to-cyan-500"
    },
    it: {
      icon: <Shield className="w-8 h-8" />,
      title: "IT Services",
      description: "Loading technology infrastructure...",
      color: "from-green-500 to-emerald-500"
    },
    saas: {
      icon: <Zap className="w-8 h-8" />,
      title: "Micro SAAS",
      description: "Loading software solutions...",
      color: "from-purple-500 to-pink-500"
    },
    '5g': {
      icon: <Cloud className="w-8 h-8" />,
      title: "5G Solutions",
      description: "Loading next-generation connectivity...",
      color: "from-orange-500 to-red-500"
    }
  };

  const config = serviceConfig[service];

  return (
    <div className="text-center py-12">
      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${config.color} flex items-center justify-center animate-pulse`}>
        {config.icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{config.title}</h3>
      <p className="text-gray-300 mb-4">{config.description}</p>
      <LoadingSpinner size="lg" />
    </div>
  );
};

export default LoadingPage;