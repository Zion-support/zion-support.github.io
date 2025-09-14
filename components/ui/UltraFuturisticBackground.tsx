import React from 'react';

interface UltraFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum' | 'neural' | 'cyber';
  intensity?: 'low' | 'medium' | 'high';
}

export default function UltraFuturisticBackground({ 
  children
  variant = 'quantum'
  intensity = 'medium' 
}: UltraFuturisticBackgroundProps) {
  const getBackgroundClasses = () => {
    const baseClasses = "min-h-screen relative overflow-hidden";
    
    switch (variant) {
      case 'quantum':
        return `${baseClasses} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`;
      case 'neural':
        return `${baseClasses} bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900`;
      case 'cyber':
        return `${baseClasses} bg-gradient-to-br from-slate-900 via-green-900 to-slate-900`;
      default:
        return `${baseClasses} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`;
    }
  };

  const getIntensityClasses = () => {
    switch (intensity) {
      case 'low':
        return 'opacity-30';
      case 'medium':
        return 'opacity-50';
      case 'high':
        return 'opacity-70';
      default:
        return 'opacity-50';
    }
  };

  return (
    <div className={getBackgroundClasses()}>
      {/* Animated background elements */}
      <div className={`absolute inset-0 ${getIntensityClasses()}`}>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}