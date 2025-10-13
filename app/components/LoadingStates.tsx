'use client;

import React from 'react;

import { Loader2 } from 'lucide-react;
export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default function LoadingStates() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-lg">Loading...</p>
      </div>
    </div>
  );
}
  type = 'loading', 
  message, 
  variant = 'futuristic'
}) => {
  const getIcon = () => {
  
    switch (type) {

  if (variant === 'minimal') {
    return (
    <div className="flex items-center justify-center p-8">"
        <div className="text-center">"
          <Loader2 className="w-6 h-6 text-cyan-400 animate-spin mx-auto mb-2" />"
          <p className="text-gray-300 text-sm">{getMessage()}</p>
        </div>
      </div>
    );
  }

  if (variant === 'default') {
    const Component = () => {
  
      return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">"
        <div className="text-center">"
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>"
          <h2 className="text-xl font-semibold text-white mb-2">{getMessage()}</h2>"
          <p className="text-gray-300">Please wait while we load the content</p>
        </div>
  // Futuristic variant (default)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 text-center">
        <div className="w-20 h-20 mx-auto mb-6 relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 animate-pulse"></div>
          <div className="absolute inset-2 rounded-full bg-slate-900 flex items-center justify-center">
            {getIcon()}
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            {getMessage()}
          </span>
        </h2>
        
        <div className="flex justify-center space-x-1 mb-6">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        <p className="text-gray-300 max-w-md mx-auto">
          {type === 'ai' && 'Preparing advanced AI algorithms and machine learning models...'}
          {type === 'security' && 'Activating security protocols and encryption systems...'}
          {type === 'performance' && 'Optimizing code and resources for maximum performance...'}
          {type === 'global' && 'Synchronizing global services and infrastructure...'}
          {type === 'loading' && 'Please wait while we prepare everything for you...'}
        </p>

interface LoadingStatesProps {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function LoadingStates({ isLoading, children, className = '' }: LoadingStatesProps) {
  if (isLoading) {
    const Component = () => {
  
      return (
    <div className={`loading-states ${className}`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p>Loading...</p>
  return <>{children}</>;
}

}

export const ComponentLoader: React.FC = () => {

}

export const ServiceCardSkeleton: React.FC = () => {

export const ContentSkeleton: React.FC = () => {
export const ContentSkeleton: React.FC = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 animate-pulse">
      <div className="h-8 bg-slate-700 rounded mb-4 w-1/2"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded w-3/4"></div>
    </div>
  );
};

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center p-8">
    <div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);
