import React from 'react';
<<<<<<< HEAD
import { Loader2, Brain, Zap, Shield } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
=======
import { Loader2, Brain, Shield, Cloud, Zap } from 'lucide-react';

interface LoadingStatesProps {
  type?: 'default' | 'page' | 'component' | 'skeleton';
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LoadingStates: React.FC<LoadingStatesProps> = ({
  type = 'default',
  message,
  size = 'md'
>>>>>>> origin/main
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const getDefaultMessage = () => {
    switch (type) {
      case 'page':
        return 'Loading page...';
      case 'component':
        return 'Loading component...';
      case 'skeleton':
        return 'Loading content...';
      default:
        return 'Loading...';
    }
  };

  if (type === 'skeleton') {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    );
  }

  if (type === 'page') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-10 h-10 text-white animate-pulse" />
            </div>
            <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto animate-ping opacity-20"></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Zion Tech Group</h2>
          <p className="text-gray-300 mb-6">{message || getDefaultMessage()}</p>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <div className={`flex items-center justify-center ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />
=======
    <div className="flex items-center justify-center p-4">
      <div className="text-center">
        <Loader2 className={`${sizeClasses[size]} text-cyan-500 animate-spin mx-auto mb-2`} />
        <p className="text-gray-600 text-sm">{message || getDefaultMessage()}</p>
      </div>
>>>>>>> origin/main
    </div>
<<<<<<< HEAD
  ); }
            LoadingStates</h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional loadingstates solutions tailored to your business needs.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions</h3>
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge loadingstates solutions.</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation</h3>
              <p className="text-green-700">
                Tailored loadingstates implementations for your specific requirements.</p></div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support</h3>
              <p className="text-purple-700">
                Round-the-clock support for all your loadingstates needs.</p></div></div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today</button></div></div></div></div>
  )}
            </button>;
          </div>
        </div>
      </div>
    </div>
  );}
}'
=======
  );
};

<<<<<<< HEAD
interface LoadingPageProps {
  message?: string;
  showIcon?: boolean;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = 'Loading...', 
  showIcon = true 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        {showIcon && (
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
        )}
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-white text-lg">{message}</p>
      </div>
    </div>
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
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
      {icon && (
        <div className="mb-4">
          {icon}
        </div>
      )}
      <LoadingSpinner size="md" className="mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

interface SkeletonLoaderProps {
  lines?: number;
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  lines = 3, 
  className = '' 
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-white/10 rounded mb-2 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
};

interface ServiceLoadingProps {
  serviceName: string;
}

export const ServiceLoading: React.FC<ServiceLoadingProps> = ({ serviceName }) => {
  const getServiceIcon = (service: string) => {
    if (service.toLowerCase().includes('ai')) return <Brain className="w-8 h-8 text-cyan-400" />;
    if (service.toLowerCase().includes('security')) return <Shield className="w-8 h-8 text-purple-400" />;
    return <Zap className="w-8 h-8 text-blue-400" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            {getServiceIcon(serviceName)}
          </div>
        </div>
        <LoadingSpinner size="lg" />
        <h2 className="text-2xl font-bold text-white mb-2 mt-4">Loading {serviceName}</h2>
        <p className="text-gray-300">Preparing your personalized experience...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
=======
// Specialized loading components for different sections
export const AILoadingState: React.FC<{ message?: string }> = ({ message = 'AI is thinking...' }) => (
  <div className="flex items-center justify-center p-4">
    <div className="text-center">
      <Brain className="w-8 h-8 text-cyan-500 animate-pulse mx-auto mb-2" />
      <p className="text-gray-600 text-sm">{message}</p>
    </div>
  </div>
);

export const SecurityLoadingState: React.FC<{ message?: string }> = ({ message = 'Securing your data...' }) => (
  <div className="flex items-center justify-center p-4">
    <div className="text-center">
      <Shield className="w-8 h-8 text-green-500 animate-pulse mx-auto mb-2" />
      <p className="text-gray-600 text-sm">{message}</p>
    </div>
  </div>
);

export const CloudLoadingState: React.FC<{ message?: string }> = ({ message = 'Connecting to cloud...' }) => (
  <div className="flex items-center justify-center p-4">
    <div className="text-center">
      <Cloud className="w-8 h-8 text-blue-500 animate-pulse mx-auto mb-2" />
      <p className="text-gray-600 text-sm">{message}</p>
    </div>
  </div>
);

export const PerformanceLoadingState: React.FC<{ message?: string }> = ({ message = 'Optimizing performance...' }) => (
  <div className="flex items-center justify-center p-4">
    <div className="text-center">
      <Zap className="w-8 h-8 text-yellow-500 animate-pulse mx-auto mb-2" />
      <p className="text-gray-600 text-sm">{message}</p>
    </div>
  </div>
);

export default LoadingStates;
>>>>>>> origin/main
>>>>>>> origin/main
