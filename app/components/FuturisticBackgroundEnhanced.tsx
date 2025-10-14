import React from 'react';

interface FuturisticBackgroundEnhancedProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'animated' | 'particles';
}

const FuturisticBackgroundEnhanced: React.FC<FuturisticBackgroundEnhancedProps> = ({
  children,
  className = '',
  variant = 'default'
}) => {
  const baseClasses = 'fixed inset-0 -z-10 overflow-hidden';
  
  const variantClasses = {
    default: 'bg-slate-900',
    animated: 'bg-slate-900 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900',
    particles: 'bg-slate-900 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900'
  };

  const renderParticles = () => {
    if (variant !== 'particles') return null;
    
    return (
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    );
  };

  const renderAnimatedGrid = () => {
    if (variant === 'default') return null;
    
    return (
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="border border-purple-500/30 animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {renderAnimatedGrid()}
      {renderParticles()}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      
      {children}
    </div>
  );
};

export default FuturisticBackgroundEnhanced;