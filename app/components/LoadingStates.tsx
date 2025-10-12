import React from 'react';
import { Loader2, Brain, Zap, Cpu } from 'lucide-react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="absolute inset-2 rounded-full border-4 border-pink-500 border-t-transparent animate-spin" 
               style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
          <div className="absolute inset-4 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin" 
               style={{ animationDuration: '2s' }} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 mt-8">Loading Zion Tech Group</h3>
        <p className="text-gray-300">Initializing advanced AI systems...</p>
        <div className="flex justify-center space-x-2 mt-4">
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" 
               style={{ animationDelay: '0.1s' }} />
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" 
               style={{ animationDelay: '0.2s' }} />
        </div>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };
  return (
    <Loader2 className={`animate-spin text-purple-500 ${sizeClasses[size]}`} />
  );
};

export const QuantumLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full animate-pulse" 
           style={{ animationDelay: '0.2s' }} />
      <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full animate-pulse" 
           style={{ animationDelay: '0.4s' }} />
    </div>
  );
};

export const CyberLoader: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-2 left-2 w-8 h-8 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" 
           style={{ animationDirection: 'reverse' }} />
    </div>
  );
};

export const HolographicLoader: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 opacity-30 animate-pulse" 
           style={{ animationDelay: '0.5s' }} />
      <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 opacity-40 animate-pulse" 
           style={{ animationDelay: '1s' }} />
      <div className="absolute inset-6 rounded-full bg-gradient-to-r from-green-500 to-purple-500 opacity-50 animate-pulse" 
           style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export const NeuralLoader: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <Brain className="w-5 h-5 ml-2" />
      <Zap className="w-6 h-6 text-pink-500 animate-pulse" 
           style={{ animationDelay: '0.2s' }} />
      <Cpu className="w-6 h-6 text-cyan-500 animate-pulse" 
           style={{ animationDelay: '0.4s' }} />
    </div>
  );
};

export const LoadingSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="h-4 bg-gray-700 rounded w-3/4 mb-2" />
          <div className="h-3 bg-gray-600 rounded w-1/2" />
        </div>
      ))}
    </div>
  );
};

export const CardSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="h-48 bg-gray-700 rounded-lg mb-4" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-600 rounded w-3/4" />
        <div className="h-3 bg-gray-600 rounded w-1/2" />
        <div className="h-3 bg-gray-600 rounded w-2/3" />
      </div>
    </div>
  );
};