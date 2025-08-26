import React from 'react';

interface AnimatedBackgroundProps {
  variant?: 'hero' | 'section' | 'card';
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ variant = 'hero', className = '' }) => {
  if (variant === 'hero') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 animate-pulse"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-blue-500/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,113,242,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,113,242,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Neon lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
    );
  }

  if (variant === 'section') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Subtle animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-blue-500/5 animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-500/40 rounded-full animate-ping"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-purple-500/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-10 left-1/2 w-1.5 h-1.5 bg-blue-500/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`absolute inset-0 overflow-hidden rounded-lg ${className}`}>
        {/* Card glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-cyan-500/5 to-blue-500/10 animate-pulse"></div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-500/60 rounded-full animate-pulse"></div>
        <div className="absolute top-0 right-0 w-2 h-2 bg-purple-500/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-500/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500/60 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
    );
  }

  return null;
}

const NeonBorder: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = '', children }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Neon border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-lg blur-sm opacity-50"></div>
      <div className="relative bg-slate-800/90 rounded-lg border border-purple-500/30">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
export { NeonBorder };