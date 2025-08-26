import React from 'react';

interface UltraFuturisticBackground2034Props {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum-fusion' | 'neon-cyber' | 'space-time';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeonEffects?: boolean;
  enableSpaceTime?: boolean;
}

export default function UltraFuturisticBackground2034({
  children,
  intensity = 'medium',
  colorScheme = 'quantum-fusion',
  particleCount = 200,
  animationSpeed = 1.0,
  enableHolographic = true,
  enableQuantumEffects = true,
  enableNeonEffects = true,
  enableSpaceTime = true
}: UltraFuturisticBackground2034Props) {
  const getIntensityClass = () => {
    switch (intensity) {
      case 'low': return 'opacity-30';
      case 'medium': return 'opacity-60';
      case 'high': return 'opacity-90';
      default: return 'opacity-60';
    }
  };

  const getColorSchemeClass = () => {
    switch (colorScheme) {
      case 'quantum-fusion':
        return 'from-cyan-500/20 via-purple-500/20 to-pink-500/20';
      case 'neon-cyber':
        return 'from-green-500/20 via-blue-500/20 to-purple-500/20';
      case 'space-time':
        return 'from-indigo-500/20 via-purple-500/20 to-cyan-500/20';
      default:
        return 'from-cyan-500/20 via-purple-500/20 to-pink-500/20';
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getColorSchemeClass()} ${getIntensityClass()}`}>
        {/* Animated Particles */}
        {Array.from({ length: particleCount }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Holographic Grid */}
        {enableHolographic && (
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(255,255,255,0.1)_50%)] bg-[length:20px_20px]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_50%,rgba(255,255,255,0.1)_50%)] bg-[length:20px_20px]" />
          </div>
        )}
        
        {/* Quantum Effects */}
        {enableQuantumEffects && (
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        )}
        
        {/* Neon Effects */}
        {enableNeonEffects && (
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />
            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60" />
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-60" />
          </div>
        )}
        
        {/* Space-Time Effects */}
        {enableSpaceTime && (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]" />
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}