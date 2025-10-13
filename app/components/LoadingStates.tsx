import React from 'react';
import { Loader2 } from 'lucide-react';

<<<<<<< HEAD
interface LoadingPageProps {
  type?: 'loading' | 'ai' | 'security' | 'performance' | 'global';
  message?: string;
<<<<<<< HEAD
  variant?: 'default' | 'futuristic' | 'minimal';
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = "Loading...", 
  variant = "futuristic" 
}) => {
  if (variant === 'minimal') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="flex items-center space-x-3">
          <Loader2 className="w-6 h-6 animate-spin text-cyan-400" />
          <span className="text-white text-lg">{message}</span>
        </div>
      </div>
    );
  }

<<<<<<< HEAD
export const ServiceLoading: React.FC<{ service: string }> = ({ service }) => {
  const getServiceIcon = (serviceName: string) => {
    switch (serviceName.toLowerCase()) {
=======
  size?: 'sm' | 'md' | 'lg';
}

const LoadingPage: React.FC<LoadingPageProps> = ({ 
  type = 'loading', 
  message = 'Loading...', 
  size = 'md' 
}) => {
  const getIcon = () => {
    switch (type) {
>>>>>>> cursor/website-audit-and-update-with-deployment-4146
      case 'ai':
        return <Brain className="animate-pulse" />;
      case 'security':
        return <Shield className="animate-pulse" />;
      case 'performance':
        return <Zap className="animate-pulse" />;
      case 'global':
        return <Globe className="animate-pulse" />;
      default:
        return <Loader2 className="animate-spin" />;
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-6 h-6';
      case 'lg':
        return 'w-12 h-12';
      default:
        return 'w-8 h-8';
    }
  };
=======
  if (variant === 'default') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-cyan-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">{message}</h2>
          <p className="text-gray-400">Please wait while we load the content...</p>
        </div>
      </div>
    );
  }
>>>>>>> cursor/analyze-improve-and-deploy-application-a281

  // Futuristic variant
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Optimized animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse will-change-transform"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000 will-change-transform"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500 will-change-transform"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Animated logo */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Zion Tech Group</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Loading animation */}
        <div className="mb-8">
          <div className="flex justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-200"></div>
          </div>
          <h2 className="text-2xl font-semibold text-white mb-2">{message}</h2>
          <p className="text-gray-400">Preparing your experience...</p>
        </div>

        {/* Service icons animation */}
        <div className="flex justify-center space-x-6 mb-8">
          <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-md border border-cyan-500/20 rounded-lg flex items-center justify-center animate-pulse">
            <Brain className="w-6 h-6 text-cyan-400" />
          </div>
          <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-md border border-purple-500/20 rounded-lg flex items-center justify-center animate-pulse delay-200">
            <Shield className="w-6 h-6 text-purple-400" />
          </div>
          <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-md border border-pink-500/20 rounded-lg flex items-center justify-center animate-pulse delay-400">
            <Globe className="w-6 h-6 text-pink-400" />
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto">
          <div className="w-full bg-slate-800/50 rounded-full h-2 mb-2">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full animate-pulse"></div>
          </div>
          <p className="text-sm text-gray-400">Initializing advanced systems...</p>
        </div>
=======
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className={`${getSizeClasses()} text-blue-400 mx-auto mb-4`}>
          {getIcon()}
        </div>
        <p className="text-white text-lg font-medium">{message}</p>
        <div className="mt-4 flex justify-center">
          <div className="animate-pulse flex space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          </div>
        </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-4146
=======
export const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-400">Please wait while we load the content</p>
>>>>>>> cursor/analyze-improve-and-deploy-application-9867
      </div>
    </div>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> cursor/analyze-improve-and-deploy-application-a281
export default LoadingPage;
=======
export { LoadingPage };
>>>>>>> cursor/website-audit-and-update-with-deployment-4146
=======
export default LoadingPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-9867
