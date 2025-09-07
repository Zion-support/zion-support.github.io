<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
pr-12243
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import React from 'react';

interface UltraFuturisticBackgroundProps {}
  children: React.ReactNode;
<<<<<<< HEAD
  variant?: 'quantum' | 'matrix' | 'neon';
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  variant?: 'quantum' | 'neon' | 'cyber';
  intensity?: 'low' | 'medium' | 'high';

pr-12243
=======
  variant?: 'quantum' | 'matrix' | 'neon';
=======
variant?: 'quantum' | 'matrix' | 'neon';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
variant?: 'quantum' | 'neon' | 'cyber';
  intensity?: 'low' | 'medium' | 'high';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  className?: string;
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({
  children,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  variant = 'quantum',
  intensity = 'medium',

pr-12243
=======

  className?: string;
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({}
  children,
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  intensity = 'medium',
  colorScheme = 'quantum-fusion',
  particleCount = 200,
  animationSpeed = 1.0,
  enableHolographic = true,
  enableQuantumEffects = true,
  enableNeonEffects = true,
  enableSpaceTime = true,
  variant = 'quantum',
<<<<<<< HEAD


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
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
variant = 'quantum',
  intensity = 'medium',
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  className = ''
}) => {}
  const getBackgroundClasses = () => {'
    const baseClasses = 'relative overflow-hidden';
    
    switch (variant) {'
      case 'quantum':
        return `${baseClasses} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`;'
      case 'neon':`
        return `${baseClasses} bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900`;'
      case 'cyber':
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        return `${baseClasses} bg-gradient-to-br from-green-900 via-slate-900 to-blue-900`;

pr-12243
=======
        return `${baseClasses} bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900`;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        return `${baseClasses} bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900`;
return `${baseClasses} bg-gradient-to-br from-green-900 via-slate-900 to-blue-900`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      default:
=======

      default:`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        return `${baseClasses} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`;
    }
  };

<<<<<<< HEAD
  return (
    <div className={`${getBackgroundClasses()} ${className}`}>
      <div className="absolute inset-0 bg-black/20" />
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const getIntensityClasses = () => {
=======
  return (
    <div className={`${getBackgroundClasses()} ${className}`}>
      <div className="absolute inset-0 bg-black/20" />
const getIntensityClasses = () => {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

  return (
    <div className={`${getBackgroundClasses()} ${className}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-0 w-full h-full ${getIntensityClasses()}`}>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>
      
      {/* Content */}
<<<<<<< HEAD
pr-12243
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  return (
    <div className={`${getBackgroundClasses()} ${className}`}>
      <div className="absolute inset-0 bg-black/20" />
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
export default UltraFuturisticBackground;"