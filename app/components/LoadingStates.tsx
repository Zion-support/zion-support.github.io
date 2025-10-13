import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe } from 'lucide-react';

interface LoadingPageProps {
  type?: 'loading' | 'error' | 'success';
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  type = 'loading', 
  message = 'Loading...', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const iconClasses = {
    loading: 'animate-spin text-cyan-400',
    error: 'text-red-400',
    success: 'text-green-400'
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Loader2 className={`${sizeClasses[size]} ${iconClasses[type]}`} />
        </div>
        <p className="text-white text-lg font-medium">{message}</p>
      </div>
    </div>
  );
};

export const ServiceLoadingPage: React.FC<{ service: string }> = ({ service }) => {
  const serviceIcons = {
    'ai': <Brain className="w-12 h-12 text-cyan-400" />,
    'it': <Shield className="w-12 h-12 text-green-400" />,
    'micro-saas': <Zap className="w-12 h-12 text-purple-400" />,
    '5g': <Globe className="w-12 h-12 text-orange-400" />
  };

  const getServiceIcon = (serviceName: string) => {
    if (serviceName.toLowerCase().includes('ai')) return serviceIcons.ai;
    if (serviceName.toLowerCase().includes('it') || serviceName.toLowerCase().includes('security')) return serviceIcons.it;
    if (serviceName.toLowerCase().includes('micro') || serviceName.toLowerCase().includes('saas')) return serviceIcons['micro-saas'];
    if (serviceName.toLowerCase().includes('5g')) return serviceIcons['5g'];
    return serviceIcons.ai;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            {getServiceIcon(service)}
            <Loader2 className="absolute -bottom-2 -right-2 w-6 h-6 text-cyan-400 animate-spin" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Loading {service}</h2>
        <p className="text-gray-300">Please wait while we prepare your experience...</p>
      </div>
    </div>
  );
};

export const ErrorPage: React.FC<{ error?: string; onRetry?: () => void }> = ({ 
  error = 'Something went wrong', 
  onRetry 
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Shield className="w-8 h-8 text-red-400" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h2>
        <p className="text-gray-300 mb-6">{error}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default LoadingPage;
