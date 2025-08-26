import React from 'react';

interface UltraFuturisticBackground2034Props {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum-fusion' | 'neon-cyber' | 'holographic-space';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeonEffects?: boolean;
  enableSpaceTime?: boolean;
}

const UltraFuturisticBackground2034: React.FC<UltraFuturisticBackground2034Props> = ({
  children,
  intensity = 'medium',
  colorScheme = 'quantum-fusion',
  particleCount = 200,
  animationSpeed = 1.0,
  enableHolographic = true,
  enableQuantumEffects = true,
  enableNeonEffects = true,
  enableSpaceTime = true
}) => {
  const getColorScheme = () => {
    switch (colorScheme) {
      case 'quantum-fusion':
        return {
          primary: 'from-cyan-500 via-blue-600 to-purple-700',
          secondary: 'from-emerald-400 via-teal-500 to-cyan-600',
          accent: 'from-pink-500 via-rose-500 to-orange-500'
        };
      case 'neon-cyber':
        return {
          primary: 'from-green-400 via-emerald-500 to-teal-600',
          secondary: 'from-purple-500 via-pink-500 to-red-500',
          accent: 'from-yellow-400 via-orange-500 to-red-500'
        };
      case 'holographic-space':
        return {
          primary: 'from-indigo-500 via-purple-600 to-pink-700',
          secondary: 'from-cyan-400 via-blue-500 to-indigo-600',
          accent: 'from-emerald-400 via-teal-500 to-cyan-600'
        };
      default:
        return {
          primary: 'from-cyan-500 via-blue-600 to-purple-700',
          secondary: 'from-emerald-400 via-teal-500 to-cyan-600',
          accent: 'from-pink-500 via-rose-500 to-orange-500'
        };
    }
  };

  const getIntensityClass = () => {
    switch (intensity) {
      case 'low':
        return 'opacity-30';
      case 'medium':
        return 'opacity-60';
      case 'high':
        return 'opacity-90';
      default:
        return 'opacity-60';
    }
  };

  const colors = getColorScheme();

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Layers */}
      <div className={`absolute inset-0 ${getIntensityClass()}`}>
        {/* Quantum Fusion Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.primary} animate-pulse`} 
             style={{ animationDuration: `${3 / animationSpeed}s` }} />
        
        {/* Secondary Layer */}
        <div className={`absolute inset-0 bg-gradient-to-tl ${colors.secondary} animate-pulse`} 
             style={{ animationDuration: `${4 / animationSpeed}s` }} />
        
        {/* Accent Layer */}
        <div className={`absolute inset-0 bg-gradient-to-tr ${colors.accent} animate-pulse`} 
             style={{ animationDuration: `${5 / animationSpeed}s` }} />
      </div>

      {/* Animated Particles */}
      {enableQuantumEffects && (
        <div className="absolute inset-0">
          {Array.from({ length: Math.floor(particleCount / 4) }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Holographic Grid */}
      {enableHolographic && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse" 
               style={{ animationDuration: `${6 / animationSpeed}s` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse" 
               style={{ animationDuration: `${7 / animationSpeed}s` }} />
        </div>
      )}

      {/* Neon Effects */}
      {enableNeonEffects && (
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" 
               style={{ animationDuration: `${2 / animationSpeed}s` }} />
          <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse" 
               style={{ animationDuration: `${3 / animationSpeed}s` }} />
        </div>
      )}

      {/* Space-Time Distortion */}
      {enableSpaceTime && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-purple-500/10 to-transparent animate-spin" 
               style={{ animationDuration: `${20 / animationSpeed}s` }} />
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-400/30 rotate-45 animate-spin" 
             style={{ animationDuration: `${15 / animationSpeed}s` }} />
        <div className="absolute top-40 right-20 w-16 h-16 border border-pink-400/30 rounded-full animate-pulse" 
             style={{ animationDuration: `${8 / animationSpeed}s` }} />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-blue-400/30 rotate-12 animate-spin" 
             style={{ animationDuration: `${12 / animationSpeed}s` }} />
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2034;