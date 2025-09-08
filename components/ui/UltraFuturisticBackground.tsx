



import React from 'react';

interface UltraFuturisticBackgroundProps {
  children: React.ReactNode;

  variant?: 'quantum' | 'neon' | 'cyber';

  intensity?: 'low' | 'medium' | 'high';


pr-12243

}

export default function UltraFuturisticBackground({ 
  children, 

  variant = 'quantum, 
  intensity = medium',
  className = '
}: UltraFuturisticBackgroundProps) {
  const getBackgroundClasses = () => {
    const baseClasses = min-h-screen relative overflow-hidden';
    
    switch (variant) {
      case 'quantum:
        return `${baseClasses} bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900`;
      case matrix':
        return `${baseClasses} bg-gradient-to-br from-green-900 via-gray-900 to-black`;
      case 'neon:
        return `${baseClasses} bg-gradient-to-br from-pink-900 via-purple-900 to-cyan-900`;
      default:
        return `${baseClasses} bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900`;
    }
  }
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {children}
    </div>
  );

}


  className?: string;
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({
  children,


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



        return `${baseClasses} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`;
    }
  }




      <div className="relative z-10">
      <div className=relative z-10">
        {children}
      </div>
    </div>
  );

};

export default UltraFuturisticBackground;



