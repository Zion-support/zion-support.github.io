<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD



<<<<<<< HEAD


import React from 'react';

interface UltraFuturisticBackgroundProps {}
  children: React.ReactNode;
  variant?: 'quantum' | 'matrix' | 'neon';
  intensity?: 'low' | 'medium' | 'high';
=======
=======



>>>>>>> merged-prs-20250907-203621
pr-12243

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db
=======
>>>>>>> merged-prs-20250907-203621
import React from 'react';

interface UltraFuturisticBackgroundProps {
  children: React.ReactNode;
<<<<<<< HEAD
<<<<<<< HEAD
  variant?: 'quantum' | 'matrix' | 'neon';
<<<<<<< HEAD
=======
  variant?: 'quantum' | 'neon' | 'cyber';
=======
  variant?: 'quantum' | 'neon' | 'cyber';
  intensity?: 'low' | 'medium' | 'high';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  intensity?: 'low' | 'medium' | 'high';
<<<<<<< HEAD
=======

pr-12243
=======

>>>>>>> origin/chore/fix-lint-and-merge
  intensity?: 'low' | 'medium' | 'high';

import React from 'react;

interface UltraFuturisticBackgroundProps {}
  children: React.ReactNode;

  intensity?: low' | 'medium | high';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  className?: string;
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db
}

export default function UltraFuturisticBackground({ 
  children, 
<<<<<<< HEAD
  variant = 'quantum', 
  intensity = 'medium',
  className = ''
=======
<<<<<<< HEAD
  variant = 'quantum', 
  intensity = 'medium' 
}: UltraFuturisticBackgroundProps) {
=======
  variant = 'quantum, 
  intensity = medium',
  className = '
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
  
>>>>>>> merged-prs-20250907-203621
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {children}
    </div>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum-fusion' | 'neon-cyber' | 'holographic-matrix' | 'space-time';
=======
<<<<<<< HEAD
=======
}
=======
>>>>>>> merged-prs-20250907-203621
  intensity?: low' | 'medium | high';
  colorScheme?: 'quantum-fusion | neon-cyber' | 'holographic-matrix | space-time';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeonEffects?: boolean;
  enableSpaceTime?: boolean;
  variant?: 'quantum' | 'neon' | 'cyber';

<<<<<<< HEAD

variant?: 'quantum' | 'neon' | 'cyber';
  intensity?: 'low' | 'medium' | 'high';
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> merged-prs-20250907-203621
variant?: 'quantum' | 'neon' | 'cyber';
  intensity?: 'low' | 'medium' | 'high';
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  className?: string;
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({
  children,
<<<<<<< HEAD
  intensity = 'medium',
  colorScheme = 'quantum-fusion',
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
  variant = 'quantum',
  intensity = 'medium',
<<<<<<< HEAD

pr-12243
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  intensity = 'medium',
  colorScheme = 'quantum-fusion',
  intensity = medium',
  colorScheme = 'quantum-fusion,
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD

variant = 'quantum,
  intensity = medium',
  className = '
}) => {}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
  className = ''
}) => {
  const getBackgroundClasses = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    const baseClasses = 'relative overflow-hidden';
    
    switch (variant) {
      case 'quantum':
        return `${baseClasses} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`;
      case 'neon':
        return `${baseClasses} bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900`;
      case 'cyber':
<<<<<<< HEAD

        return `${baseClasses} bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900`;

      default:
variant = 'quantum',
  intensity = 'medium',
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
        return `${baseClasses} bg-gradient-to-br from-green-900 via-slate-900 to-blue-900`;

=======
<<<<<<< HEAD

<<<<<<< HEAD
      default:
=======
        return `${baseClasses} bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900`;

=======
<<<<<<< HEAD
        return `${baseClasses} bg-gradient-to-br from-green-900 via-slate-900 to-blue-900`;
=======
        return `${baseClasses} bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900`;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      default:
variant = 'quantum',
  intensity = 'medium',
  className = ''
}) => {}
  const getBackgroundClasses = () => {'
    const baseClasses = 'relative overflow-hidden';
    
    switch (variant) {'
      case 'quantum':
        return `${baseClasses} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`;'
      case neon:`
        return `${baseClasses} bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900`;'
      case 'cyber':
        return `${baseClasses} bg-gradient-to-br from-green-900 via-slate-900 to-blue-900`;

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
pr-12243
        return `${baseClasses} bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900`;
return `${baseClasses} bg-gradient-to-br from-green-900 via-slate-900 to-blue-900`;
      default:

      default:`
<<<<<<< HEAD
        return `${baseClasses} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`;
    }
  };

  return (
    <div className={`${getBackgroundClasses()} ${className}`}>
      <div className="absolute inset-0 bg-black/20" />
=======
=======

      default:

>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
        return `${baseClasses} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`;
    }
  }

<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
  return (
    <div className={`${getBackgroundClasses()} ${className}`}>
      <div className="absolute inset-0 bg-black/20" />
  const getIntensityClasses = () => {
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
      
      {/* Content */}
<<<<<<< HEAD
pr-12243
  return (
    <div className={`${getBackgroundClasses()} ${className}`}>
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10">
=======
<<<<<<< HEAD
pr-12243
  return (
    <div className={`${getBackgroundClasses()} ${className}`}>
      <div className="absolute inset-0 bg-black/20" />
=======

>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
  const getIntensityClasses = () => {
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
=======
  return (
    <div className={`${getBackgroundClasses()} ${className}`}>
      <div className="absolute inset-0 bg-black/20" />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
      <div className="relative z-10">
      <div className=relative z-10">
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        {children}
      </div>
  );
<<<<<<< HEAD
};
export default UltraFuturisticBackground;"
=======
<<<<<<< HEAD
}
export default UltraFuturisticBackground;"
=======
};

export default UltraFuturisticBackground;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
