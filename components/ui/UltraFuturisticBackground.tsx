import React from 'react';

interface UltraFuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 ${className}`}>
      <div className="absolute inset-0 opacity-20"></div>
      {children}
    </div>
  );
};

export default UltraFuturisticBackground;