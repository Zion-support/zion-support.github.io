import React from 'react;
import { Loader2, Brain, Zap, Shield } from 'lucide-react;

interface LoadingSpinnerProps {'
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ '
  size = 'md', '
  className = '' 
}) => {
  const sizeClasses = {'
    sm: 'w-4 h-4','
    md: 'w-8 h-8','
    lg: 'w-12 h-12'
  };
  return (
    
    <div>
    <Loader2 />
    </div>
  );
};
interface LoadingPageProps {
  message?: string;
  showIcon?: boolean;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ '
  message = 'Loading...', 
  showIcon = true 
}) => {
  return (
    
    <div>
    <div />
        {showIcon && (
          <div>
    <div />
              <Brain />
            </div>
          </div>
        )}
        <LoadingSpinner />
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

export const LoadingCard: React.FC<LoadingCardProps> = ({ '
  title = 'Loading...','
  description = 'Please wait while we load the content.',
  icon
}) => {
  return (
    
    <div />
      {icon && (
        <div />
          {icon}
        </div>
      )}
      <LoadingSpinner />
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
  lines = 3, '
  className = '' 
}) => {
  return (
    
    <div />
      {Array.from({ length: lines }).map((_, index) => (
        <div />
      ))}
    </div>
  );
};
interface ServiceLoadingProps {
  serviceName: string;
}
export const ServiceLoading: React.FC<ServiceLoadingProps> = ({ serviceName }) => {
  const getServiceIcon = (service: string) => {'
    if (service.toLowerCase().includes('ai')) return <Brain className="w-8 h-8 text-cyan-400">'
    if (service.toLowerCase().includes('security')) return <Shield className="w-8 h-8 text-purple-400">;
    return <Zap className="w-8 h-8 text-blue-400">;
  };
  return (
    
    <div>
    <div />
        <div>
    <div />
            {getServiceIcon(serviceName)}
          </div>
  </div>
  <LoadingSpinner />
        <h2 className="text-2xl font-bold text-white mb-2 mt-4">Loading {serviceName}</h2>
        <p className="text-gray-300">Preparing your personalized experience...</p>
      </div>
    </div>
  );
};

export default LoadingPage;