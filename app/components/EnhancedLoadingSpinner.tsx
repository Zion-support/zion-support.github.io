<<<<<<< HEAD
import React from "react";
import { Helmet } from "react-helmet-async";

const EnhancedLoadingSpinnerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>EnhancedLoadingSpinner - Zion Tech Group</title>
        <meta name="description" content="Professional EnhancedLoadingSpinner services by Zion Tech Group." />
        <meta name="keywords" content="EnhancedLoadingSpinner, AI solutions, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            EnhancedLoadingSpinner
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional EnhancedLoadingSpinner services designed to help your business grow and succeed.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Expert Solutions</h3>
            <p className="text-gray-300">
              Our team of experts provides cutting-edge solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your systems run smoothly at all times.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
            <p className="text-gray-300">
              Track record of delivering successful projects and exceeding client expectations.
            </p>
          </div>
        </div>
      </div>
=======
import React from 'react';

interface EnhancedLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  message?: string;
  showProgress?: boolean;
  progress?: number;
  variant?: 'default' | 'cyber' | 'minimal';
}

const EnhancedLoadingSpinner: React.FC<EnhancedLoadingSpinnerProps> = ({
  size = 'md',
  message = 'Loading...',
  showProgress = false,
  progress = 0,
  variant = 'cyber'
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  if (variant === 'minimal') {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}></div>
        {message && (
          <p className={`mt-4 text-gray-600 ${textSizeClasses[size]}`}>
            {message}
          </p>
        )}
        {showProgress && (
          <div className="w-48 bg-gray-200 rounded-full h-2 mt-4">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            ></div>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'cyber') {
    return (
      <div className="flex flex-col items-center justify-center p-8 min-h-[200px]">
        {/* Cyber-style loading animation */}
        <div className="relative">
          {/* Outer ring */}
          <div className={`${sizeClasses[size]} border-2 border-transparent border-t-cyan-400 border-r-purple-500 rounded-full animate-spin`}></div>
          {/* Inner ring */}
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${sizeClasses[size === 'xl' ? 'lg' : size === 'lg' ? 'md' : 'sm']} border-2 border-transparent border-b-pink-500 border-l-green-400 rounded-full animate-spin`} style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
        
        {/* Loading text with cyber effect */}
        <div className="mt-6 text-center">
          <p className={`${textSizeClasses[size]} font-medium text-white neon-text`}>
            {message}
          </p>
          {/* Animated dots */}
          <div className="flex justify-center mt-2 space-x-1">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>

        {/* Progress bar */}
        {showProgress && (
          <div className="w-64 mt-6">
            <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full transition-all duration-500 ease-out relative"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
              </div>
            </div>
            <div className="text-center mt-2 text-sm text-gray-400">
              {Math.round(progress)}% Complete
            </div>
          </div>
        )}
      </div>
    );
  }

  // Default variant
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin`}></div>
      {message && (
        <p className={`mt-4 text-gray-600 ${textSizeClasses[size]}`}>
          {message}
        </p>
      )}
      {showProgress && (
        <div className="w-48 bg-gray-200 rounded-full h-2 mt-4">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          ></div>
        </div>
      )}
>>>>>>> origin/cursor/resolve-all-prs-and-merge
    </div>
  );
};

<<<<<<< HEAD
export default EnhancedLoadingSpinnerPage;
=======
export default EnhancedLoadingSpinner;
>>>>>>> origin/cursor/resolve-all-prs-and-merge
