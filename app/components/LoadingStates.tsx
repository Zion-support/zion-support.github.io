import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe } from 'lucide-react';

interface LoadingPageProps {
  message?: string;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = 'Loading...', 
  showIcon = true,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        {showIcon && (
          <div className="mb-6">
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="absolute inset-0 w-16 h-16 mx-auto bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />
          <span className="text-xl text-white font-medium">{message}</span>
        </div>
        
        <div className="text-gray-400 text-sm">
          Zion Tech Group
        </div>
      </div>
    </div>
  );
};

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'primary',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colorClasses = {
    primary: 'text-cyan-400',
    secondary: 'text-purple-400',
    accent: 'text-pink-400'
  };

  return (
    <Loader2 
      className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin ${className}`} 
    />
  );
};

interface LoadingCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export const LoadingCard: React.FC<LoadingCardProps> = ({ 
  title = 'Loading...',
  description = 'Please wait while we load the content.',
  icon
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
      <div className="flex items-center space-x-4 mb-4">
        {icon && (
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <div className="h-6 bg-white/20 rounded mb-2"></div>
          <div className="h-4 bg-white/10 rounded w-3/4"></div>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="h-4 bg-white/10 rounded"></div>
        <div className="h-4 bg-white/10 rounded w-5/6"></div>
        <div className="h-4 bg-white/10 rounded w-4/6"></div>
      </div>
      
      <div className="mt-4 flex items-center justify-center">
        <LoadingSpinner size="md" />
      </div>
    </div>
  );
};

interface LoadingGridProps {
  count?: number;
  columns?: number;
}

export const LoadingGrid: React.FC<LoadingGridProps> = ({ 
  count = 6, 
  columns = 3 
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
      {Array.from({ length: count }).map((_, index) => (
        <LoadingCard
          key={index}
          title="Loading Service"
          description="Preparing amazing solutions for you..."
          icon={<Brain className="w-6 h-6 text-white" />}
        />
      ))}
    </div>
  );
};

interface LoadingHeroProps {
  title?: string;
  subtitle?: string;
}

export const LoadingHero: React.FC<LoadingHeroProps> = ({ 
  title = 'Welcome to Zion Tech Group',
  subtitle = 'Loading our advanced technology solutions...'
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mb-6 animate-pulse">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-pulse">
              {title}
            </h1>
            <p className="text-xl text-gray-300 animate-pulse">
              {subtitle}
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-2">
            <LoadingSpinner size="lg" />
            <span className="text-cyan-400 font-medium">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;