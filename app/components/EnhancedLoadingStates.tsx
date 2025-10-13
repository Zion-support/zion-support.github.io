import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
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
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-cyan-400',
    secondary: 'text-purple-400',
    accent: 'text-pink-400'
  };

  return (
    <Loader2 
      className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Animated background circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-cyan-500/20 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-pink-500/20 rounded-full animate-pulse delay-2000"></div>
          </div>
          
          {/* Main loading spinner */}
          <div className="relative z-10">
            <LoadingSpinner size="xl" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">{message}</h2>
        
        {showProgress && (
          <div className="w-64 mx-auto">
            <div className="bg-gray-700 rounded-full h-2 mb-2">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400">{Math.round(progress)}% complete</p>
          </div>
        )}
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
  className = ''
}) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 ${className}`}>
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          {icon || <LoadingSpinner size="lg" />}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
          {description && (
            <p className="text-gray-300 text-sm">{description}</p>
          )}
        </div>
      </div>
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
        <LoadingCard
          key={index}
          title="Loading service..."
          description="Please wait while we load this content"
          icon={<LoadingSpinner size="md" />}
        />
      ))}
    </div>
  );
};

interface LoadingSectionProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export const LoadingSection: React.FC<LoadingSectionProps> = ({
  title = "Loading Section",
  children,
  className = ''
}) => {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <div className="flex justify-center">
            <LoadingSpinner size="lg" />
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

// Service-specific loading components
export const AIServiceLoading: React.FC = () => (
  <LoadingCard
    title="Loading AI Service..."
    description="Initializing artificial intelligence capabilities"
    icon={<Brain className="w-8 h-8 text-cyan-400 animate-pulse" />}
  />
);

export const ITServiceLoading: React.FC = () => (
  <LoadingCard
    title="Loading IT Service..."
    description="Setting up technology infrastructure"
    icon={<Shield className="w-8 h-8 text-green-400 animate-pulse" />}
  />
);

export const MicroSaasLoading: React.FC = () => (
  <LoadingCard
    title="Loading Micro SAAS..."
    description="Preparing software solution"
    icon={<Zap className="w-8 h-8 text-purple-400 animate-pulse" />}
  />
);

export const FiveGServiceLoading: React.FC = () => (
  <LoadingCard
    title="Loading 5G Service..."
    description="Establishing next-generation connectivity"
    icon={<Globe className="w-8 h-8 text-orange-400 animate-pulse" />}
  />
);

export default {
  LoadingSpinner,
  LoadingPage,
  LoadingCard,
  LoadingGrid,
  LoadingSection,
  AIServiceLoading,
  ITServiceLoading,
  MicroSaasLoading,
  FiveGServiceLoading
};