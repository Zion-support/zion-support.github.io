import React from "react";
import { Helmet } from "react-helmet-async";

<<<<<<< HEAD
const LoadingStatesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>LoadingStates - Zion Tech Group</title>
        <meta name="description" content="Professional LoadingStates services by Zion Tech Group." />
        <meta name="keywords" content="LoadingStates, AI solutions, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            LoadingStates
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional LoadingStates services designed to help your business grow and succeed.
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
=======
interface LoadingStatesProps {
  type?: 'spinner' | 'skeleton' | 'dots' | 'pulse';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const LoadingStates: React.FC<LoadingStatesProps> = ({ 
  type = 'spinner', 
  size = 'md', 
  text = 'Loading...',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const renderLoader = () => {
    switch (type) {
      case 'spinner':
        return (
          <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-cyan-500 ${sizeClasses[size]}`}></div>
        );
      
      case 'skeleton':
        return (
          <div className="animate-pulse">
            <div className="bg-gray-300 rounded h-4 w-3/4 mb-2"></div>
            <div className="bg-gray-300 rounded h-4 w-1/2"></div>          </div>
>>>>>>> d03fe0994f96ae1bf0091ebd7304a05d9dca49b7
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your systems run smoothly at all times.
            </p>
          </div>
<<<<<<< HEAD
        </div>
      </div>
    </div>
=======
        );
      
      case 'pulse':
        return (
          <div className={`bg-cyan-500 rounded-full animate-pulse ${sizeClasses[size]}`}></div>
        );
      
      default:
        return (
          <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-cyan-500 ${sizeClasses[size]}`}></div>
        );
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      {renderLoader()}
      {text && (
        <p className={`text-gray-300 ${textSizeClasses[size]}`}>
          {text}
        </p>
      )}    </div>
>>>>>>> d03fe0994f96ae1bf0091ebd7304a05d9dca49b7
  );
};

export default LoadingStatesPage;