import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe } from 'lucide-react';

interface LoadingPageProps {
  message?: string;
  showIcon?: boolean;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = "Loading...", 
  showIcon = true 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        {showIcon && (
          <div className="mb-8">
            <div className="relative">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center animate-pulse">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin border-t-transparent"></div>
            </div>
          </div>
        )}
        <h2 className="text-2xl font-bold text-white mb-4">{message}</h2>
        <div className="flex items-center justify-center space-x-2">
          <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />
          <span className="text-gray-300">Please wait...</span>
        </div>
      </div>
    </div>
  );
};

export const ServiceLoading: React.FC<{ service: string }> = ({ service }) => {
  const getServiceIcon = (serviceName: string) => {
    const name = serviceName.toLowerCase();
    if (name.includes('ai') || name.includes('analytics')) return Brain;
    if (name.includes('security') || name.includes('cyber')) return Shield;
    if (name.includes('5g') || name.includes('network')) return Zap;
    if (name.includes('cloud') || name.includes('infrastructure')) return Globe;
    return Brain;
  };

  const Icon = getServiceIcon(service);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center animate-pulse">
          <Icon className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Loading {service}...</h2>
        <div className="flex items-center justify-center space-x-2">
          <Loader2 className="w-6 h-6 text-cyan-400 animate-spin" />
          <span className="text-gray-300 text-lg">Preparing your experience</span>
        </div>
      </div>
    </div>
  );
};

export const PageLoading: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-cyan-400 text-lg">Loading Zion Tech Group...</p>
      </div>
    </div>
  );
};

export const ComponentLoading: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className="flex items-center justify-center p-4">
      <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} />
    </div>
  );
};

export const InlineLoading: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => {
  return (
    <div className="flex items-center space-x-2 text-gray-300">
      <Loader2 className="w-4 h-4 animate-spin" />
      <span>{text}</span>
    </div>
  );
};

export default LoadingPage;