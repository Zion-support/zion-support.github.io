
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from 'react';

interface UltraFuturisticBackgroundProps {
  children: React.ReactNode;
<<<<<<< HEAD

  variant?: 'quantum' | 'neon' | 'cyber';

  intensity?: 'low' | 'medium' | 'high';


pr-12243

=======

  intensity?: 'low' | 'medium' | 'high';
  intensity?: 'low' | 'medium' | 'high';

import React from 'react;

interface UltraFuturisticBackgroundProps {}
  children: React.ReactNode;

  intensity?: low' | 'medium | high';
  className?: string;
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

export default function UltraFuturisticBackground({ 
  children, 
<<<<<<< HEAD

  variant = 'quantum, 
  intensity = medium',
  className = '
=======
  variant = 'quantum', 
  intensity = 'medium',
  className = ''
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
  
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {children}
    </div>
  );
<<<<<<< HEAD

}


=======
}

  intensity?: low' | 'medium | high';
  colorScheme?: 'quantum-fusion | neon-cyber' | 'holographic-matrix | space-time';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeonEffects?: boolean;
  enableSpaceTime?: boolean;
  variant?: 'quantum' | 'neon' | 'cyber';


variant?: 'quantum' | 'neon' | 'cyber';
  intensity?: 'low' | 'medium' | 'high';

>>>>>>> origin/cursor/delete-old-data-records-6bba
  className?: string;
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({
  children,
<<<<<<< HEAD


  className = ''
}) => {
  const getBackgroundClasses = () => {

=======
  intensity = 'medium',
  colorScheme = 'quantum-fusion',
  intensity = 'medium',
  colorScheme = 'quantum-fusion',
  intensity = medium',
  colorScheme = 'quantum-fusion,
  particleCount = 200,
  animationSpeed = 1.0,
  enableHolographic = true,
  enableQuantumEffects = true,
  enableNeonEffects = true,
  enableSpaceTime = true,
  variant = 'quantum',


variant = 'quantum,
  intensity = medium',
  className = '
}) => {}
  className = ''
}) => {
  const getBackgroundClasses = () => {
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

      default:
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
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
      default:`
        return `${baseClasses} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`;
    }
  };

  return (
    <div className={`${getBackgroundClasses()} ${className}`}>
      <div className="absolute inset-0 bg-black/20" />
>>>>>>> origin/cursor/delete-old-data-records-6bba
        return `${baseClasses} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`;
    }
  }



<<<<<<< HEAD

=======
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
pr-12243
  return (
    <div className={`${getBackgroundClasses()} ${className}`}>
      <div className="absolute inset-0 bg-black/20" />
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className="relative z-10">
      <div className=relative z-10">
        {children}
      </div>
  );
<<<<<<< HEAD

};

export default UltraFuturisticBackground;



=======
};
export default UltraFuturisticBackground;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
