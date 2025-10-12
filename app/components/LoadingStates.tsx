import React from 'react';
import { Loader2, Brain, Zap, Cpu } from 'lucide-react';
'use client';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-pink-500 border-t-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        <div className="absolute inset-4 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin" style={{ animationDuration: '2s' }}></div>
      </div>
      <div className="ml-6">
        <h3 className="text-2xl font-bold text-white mb-2">Loading Zion Tech Group</h3>
        <p className="text-gray-300">Initializing advanced AI systems...</p>
        <div className="flex space-x-1 mt-4">
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
      </div>
    </div>
  );
};

export const CyberLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
        <div className="absolute top-2 left-2 w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export const HolographicLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="relative w-16 h-16">
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-6 rounded-full bg-gradient-to-r from-green-500 to-purple-500 opacity-50 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </div>
  );
};

export const NeuralLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="flex space-x-4">
        <Brain className="w-6 h-6 text-purple-500 animate-pulse" />
        <Zap className="w-6 h-6 text-pink-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
        <Cpu className="w-6 h-6 text-cyan-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
  );
};

export const LoadingSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-700 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export const CardSkeleton: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
      <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-700 rounded"></div>
        <div className="h-3 bg-gray-700 rounded w-5/6"></div>
        <div className="h-3 bg-gray-700 rounded w-4/6"></div>
      </div>
    </div>
  );
};