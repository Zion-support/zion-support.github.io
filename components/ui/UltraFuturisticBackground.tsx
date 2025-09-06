<<<<<<< HEAD
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import React from 'react';

interface UltraFuturisticBackgroundProps {
  children: React.ReactNode;
<<<<<<< HEAD
  variant?: 'quantum' | 'matrix' | 'neon';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export default function UltraFuturisticBackground({ 
  children, 
  variant = 'quantum', 
  intensity = 'medium',
  className = ''
}: UltraFuturisticBackgroundProps) {
  const getBackgroundClasses = () => {
    const baseClasses = 'min-h-screen relative overflow-hidden';
    
    switch (variant) {
      case 'quantum':
        return `${baseClasses} bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900`;
      case 'matrix':
        return `${baseClasses} bg-gradient-to-br from-green-900 via-gray-900 to-black`;
      case 'neon':
        return `${baseClasses} bg-gradient-to-br from-pink-900 via-purple-900 to-cyan-900`;
      default:
        return `${baseClasses} bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900`;
    }
  };
  
  return (
    <div className={`${getBackgroundClasses()} ${className}`}>
      {children}
    </div>
  );
}
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum-fusion' | 'neon-cyber' | 'holographic-matrix' | 'space-time';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeonEffects?: boolean;
  enableSpaceTime?: boolean;
  variant?: 'quantum' | 'neon' | 'cyber';
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  className?: string;
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({
  children,
<<<<<<< HEAD
  intensity = 'medium',
  colorScheme = 'quantum-fusion',
  particleCount = 200,
  animationSpeed = 1.0,
  enableHolographic = true,
  enableQuantumEffects = true,
  enableNeonEffects = true,
  enableSpaceTime = true,
  variant = 'quantum',
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
        return `${baseClasses} bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900`;
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      default:
        return `${baseClasses} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`;
    }
  };

<<<<<<< HEAD
  return (
    <div className={`${getBackgroundClasses()} ${className}`}>
      <div className="absolute inset-0 bg-black/20" />
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground;
<<<<<<< HEAD
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
