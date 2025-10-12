import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FuturisticLoaderProps {
  children?: React.ReactNode;
  className?: string;
}

const FuturisticLoader: React.FC<FuturisticLoaderProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`futuristic-loader ${className}`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        <div className="ml-4">
          <p className="text-white text-lg font-semibold">Loading...</p>
          <p className="text-gray-300 text-sm">Please wait while we prepare your experience</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default FuturisticLoader;