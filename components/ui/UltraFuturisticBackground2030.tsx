import React from 'react';

interface UltraFuturisticBackground2030Props {
  children: React.ReactNode;
  className?: string;
}

const UltraFuturisticBackground2030: React.FC<UltraFuturisticBackground2030Props> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden ${className}`}>
      {/* Futuristic 2030 Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 animate-pulse"></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-bounce"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2030;