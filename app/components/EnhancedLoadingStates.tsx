'use client';
import React from 'react';
import { Loader2, Brain, Cloud, Shield, Code } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-500`} />
      {text && (
        <p className="mt-2 text-sm text-gray-500">{text}</p>
      )}
    </div>
  );
};

export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mx-auto mb-6"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Brain className="w-6 h-6 text-cyan-400 animate-pulse" />
        </div>
      </div>
      <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
      <p className="text-gray-400">Please wait while we prepare everything for you</p>
    </div>
  </div>
);

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-pulse">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-gray-700 rounded-lg mr-4"></div>
      <div className="flex-1">
        <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-700 rounded w-1/2"></div>
      </div>
    </div>
    <div className="space-y-2">
      <div className="h-3 bg-gray-700 rounded"></div>
      <div className="h-3 bg-gray-700 rounded w-5/6"></div>
      <div className="h-3 bg-gray-700 rounded w-4/6"></div>
    </div>
  </div>
);

export const ContentSkeleton: React.FC = () => (
  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 animate-pulse">
    <div className="h-8 bg-slate-700 rounded mb-4 w-1/2"></div>
    <div className="h-4 bg-slate-700 rounded mb-2"></div>
    <div className="h-4 bg-slate-700 rounded mb-2"></div>
    <div className="h-4 bg-slate-700 rounded w-3/4"></div>
  </div>
);

export const ErrorBoundaryFallback: React.FC<{
  error?: Error;
  errorInfo?: any;
  resetError: () => void;
}> = ({ error, errorInfo, resetError }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-red-500/20 max-w-2xl w-full text-center">
      <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <AlertCircle className="w-8 h-8 text-red-400" />
      </div>
      <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-gray-300 mb-6">
        We're sorry, but something unexpected happened. Please try refreshing the page.
      </p>
      {error && (
        <details className="text-left mb-6">
          <summary className="text-red-400 cursor-pointer mb-2">Error Details</summary>
          <pre className="text-xs text-gray-400 bg-black/20 p-4 rounded-lg overflow-auto">
            {error.toString()}
            {errorInfo && errorInfo.componentStack}
          </pre>
        </details>
      )}
      <button
        onClick={resetError}
        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
      >
        Try Again
      </button>
    </div>
  </div>
);

export const LoadingStates = {
  LoadingSpinner,
  PageLoader,
  ServiceCardSkeleton,
  ContentSkeleton,
  ErrorBoundaryFallback
};