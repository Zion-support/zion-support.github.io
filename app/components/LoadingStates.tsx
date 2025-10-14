import React from 'react';
<<<<<<< HEAD
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
=======

export const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-cyan-400 text-lg">Loading Zion Tech Group...</p>
>>>>>>> cursor/analyze-improve-and-deploy-application-da10
      </div>
    </div>
  );
};

<<<<<<< HEAD
export const ServiceLoading: React.FC<{ service: string }> = ({ service }) => {
  const getServiceIcon = (serviceName: string) => {
    switch (serviceName.toLowerCase()) {
      case 'ai':
      case 'ai services':
        return <Brain className="w-8 h-8 text-cyan-400" />;
      case 'security':
      case 'cybersecurity':
        return <Shield className="w-8 h-8 text-green-400" />;
      case 'micro saas':
      case 'saas':
        return <Zap className="w-8 h-8 text-purple-400" />;
      case '5g':
      case '5g solutions':
        return <Globe className="w-8 h-8 text-orange-400" />;
      default:
        return <Brain className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="relative">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center animate-pulse">
              {getServiceIcon(service)}
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin border-t-transparent"></div>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Loading {service}</h2>
        <p className="text-gray-300 mb-6">
          Preparing the latest information about our {service.toLowerCase()} solutions...
        </p>
        <div className="flex items-center justify-center space-x-2">
          <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />
          <span className="text-gray-300">Almost ready...</span>
        </div>
      </div>
    </div>
  );
};

export const ErrorLoading: React.FC<{ error?: string; onRetry?: () => void }> = ({ 
  error = "Something went wrong", 
  onRetry 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center">
            <Shield className="w-10 h-10 text-red-400" />
          </div>
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

export const SkeletonLoader: React.FC<{ lines?: number }> = ({ lines = 3 }) => {
  return (
    <div className="animate-pulse">
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

export const CardSkeleton: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
      <div className="w-16 h-16 bg-gray-700 rounded-lg mb-4"></div>
      <div className="h-6 bg-gray-700 rounded mb-3"></div>
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
      </div>
      <div className="h-8 bg-gray-700 rounded w-1/3"></div>
    </div>
  );
};

=======
>>>>>>> cursor/analyze-improve-and-deploy-application-da10
export default LoadingPage;