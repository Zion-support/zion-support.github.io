import React from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'hero' | 'section' | 'card';
  intensity?: 'low' | 'medium' | 'high';
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ 
  children, 
  variant = 'default',
  intensity = 'medium' 
}) => {
  const getBackgroundClasses = () => {
    const baseClasses = "relative overflow-hidden";
    
    switch (variant) {
      case 'hero':
        return `${baseClasses} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen`;
      case 'section':
        return `${baseClasses} bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm`;
      case 'card':
        return `${baseClasses} bg-slate-800/30 backdrop-blur-sm border border-white/10`;
      default:
        return `${baseClasses} bg-slate-900`;
    }
  };

  const getIntensityClasses = () => {
    switch (intensity) {
      case 'low':
        return 'opacity-30';
      case 'high':
        return 'opacity-60';
      default:
        return 'opacity-40';
    }
  };

  return (
    <div className={getBackgroundClasses()}>
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse ${getIntensityClasses()}`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000 ${getIntensityClasses()}`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500 ${getIntensityClasses()}`}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Animated lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/20 to-transparent animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse delay-1500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackground;