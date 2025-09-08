import React from 'react';

interface UltraFuturisticBackgroundProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum-fusion' | 'neon-cyber' | 'holographic-matrix' | 'space-time';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeonEffects?: boolean;
  enableSpaceTime?: boolean;
  variant?: 'quantum' | 'neon' | 'cyber';
  className?: string;
}

export default function UltraFuturisticBackground({ 
  children, 
  className = '' 
}: UltraFuturisticBackgroundProps) {
  return (
    <div className={`${getBackgroundClasses()} ${className}`}>
      {children}
    </div>
  );
}  className?: string;
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({
  children,
  intensity = 'medium',
  colorScheme = 'quantum-fusion',
  particleCount = 200,
  animationSpeed = 1.0,
  enableHolographic = true,
  enableQuantumEffects = true,
  enableNeonEffects = true,
  enableSpaceTime = true,
  variant = 'quantum',
  className = ''
}) => {
  const getBackgroundClasses = () => {
    const baseClasses = 'relative overflow-hidden';
    
    switch (variant) {
      case 'quantum':
        return `${baseClasses} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`;
      case 'neon':
        return `${baseClasses} bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900`;
      case 'cyber':
        return `${baseClasses} bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900`;
      default:
        return `${baseClasses} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`;
    }
  };

  return (
    <div className={`${getBackgroundClasses()} ${className}`}>
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
};

export default UltraFuturisticBackground;
