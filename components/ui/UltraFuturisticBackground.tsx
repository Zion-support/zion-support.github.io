import React from 'react';

interface UltraFuturisticBackgroundProps {
  variant?: string;
  intensity?: string;
  children: React.ReactNode;
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({ 
  variant = 'default', 
  intensity = 'medium', 
  children 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {children}
    </div>
  );
};

export default UltraFuturisticBackground;