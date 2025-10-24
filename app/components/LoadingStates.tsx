import React from 'react';

export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg">Loading...</p>
    </div>
  </div>
);

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-gray-800 rounded-xl p-8 animate-pulse">
    <div className="h-8 bg-gray-700 rounded mb-4"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
  </div>
);
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="absolute inset-2 rounded-full border-4 border-pink-500border-t-transparentanimate-spin" style="{{" animationDirection: 'reverse', animationDuration: '1.5 s'}}   /></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="absolute inset-4 rounded-full border-4 border-cyan-500border-t-transparentanimate-spin" style="{{" animationDuration: '2 s'}}   /></div>
        </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <h3 className="text-2 xl font-bold text-whitemb-2"  >Loading Zion Tech Group</h3>
          <p className="text-gray-300">Initializing advanced AI systems...</p>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="w-2h-2bg-pi n k-500rounded-fullanimate-bounce" style="{{" animationDelay: '0.1 s'}}   /></div>
            <div className="w-2h-2bg-cy a n-500rounded-fullanimate-bounce" style="{{" animationDelay: '0.2 s'}}   /></div>
        </div>

const LoadingStates: React.FC<LoadingStatesProps> = () => {
  return (
    <div className="loadingstates">
      <h2>LoadingStates</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default LoadingStates;

interface LoadingStatesProps {
  type?: 'spinner' | 'dots' | 'pulse' | 'bars' | 'futuristic';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const LoadingStates: React.FC<LoadingStatesProps> = ({
  type = 'futuristic',
  size = 'md',
  text = 'Loading...',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20'
  };

  if (type === 'futuristic') {
    return (
      <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
        <div className={`${sizeClasses[size]} mx-auto relative`}>
          <div className="absolute inset-0 rounded-full border-4 border-purple-500/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-purple-500 border-t-transparent animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-pink-500/20"></div>
          <div 
            className="absolute inset-2 rounded-full border-4 border-pink-500 border-t-transparent animate-spin" 
            style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}
          ></div>
          <div className="absolute inset-4 rounded-full border-4 border-cyan-500/20"></div>
          <div 
            className="absolute inset-4 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin" 
            style={{ animationDuration: '2s' }}
          ></div>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white mb-2">Loading Zion Tech Group</h3>
          <div className="flex space-x-2 justify-center">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'spinner') {
    return (
      <div className={`flex flex-col items-center justify-center space-y-2 ${className}`}>
        <div className={`${sizeClasses[size]} border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin`}></div>
        {text && <p className="text-gray-600">{text}</p>}
      </div>
    );
  }

  if (type === 'dots') {
    return (
      <div className={`flex items-center justify-center space-x-1 ${className}`}>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    );
  }

  if (type === 'pulse') {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className={`${sizeClasses[size]} bg-blue-500 rounded-full animate-pulse`}></div>
      </div>
    );
  }

  if (type === 'bars') {
    return (
      <div className={`flex items-center justify-center space-x-1 ${className}`}>
        <div className="w-1 h-8 bg-blue-500 animate-pulse"></div>
        <div className="w-1 h-8 bg-blue-500 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-1 h-8 bg-blue-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-1 h-8 bg-blue-500 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        <div className="w-1 h-8 bg-blue-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      </div>
    );
  }

  return null;
};

export default LoadingStates;
