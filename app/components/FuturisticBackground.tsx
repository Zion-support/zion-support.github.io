import React from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 ${className}`}>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackground;