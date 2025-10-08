import React from 'react';

interface FuturisticDesignProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'neon' | 'gradient' | 'glass' | 'holographic' | 'cyber';
  intensity?: 'low' | 'medium' | 'high';
}

const FuturisticDesign: React.FC<FuturisticDesignProps> = ({
  children,
  className = '',
  variant = 'neon',
  intensity = 'medium'
}) => {
  const getVariantStyles = () => {
    const baseStyles = 'transition-all duration-500 ease-in-out';
    
    switch (variant) {
      case 'neon':
        return `${baseStyles} ${
          intensity === 'high' 
            ? 'bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]'
            : intensity === 'medium'
            ? 'bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]'
            : 'bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 border border-cyan-400/20 shadow-[0_0_10px_rgba(34,211,238,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]'
        }`;
      
      case 'gradient':
        return `${baseStyles} ${
          intensity === 'high'
            ? 'bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 shadow-[0_20px_40px_rgba(147,51,234,0.3)] hover:shadow-[0_25px_50px_rgba(147,51,234,0.4)]'
            : intensity === 'medium'
            ? 'bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 shadow-[0_15px_30px_rgba(147,51,234,0.2)] hover:shadow-[0_20px_40px_rgba(147,51,234,0.3)]'
            : 'bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 shadow-[0_10px_20px_rgba(147,51,234,0.1)] hover:shadow-[0_15px_30px_rgba(147,51,234,0.2)]'
        }`;
      
      case 'glass':
        return `${baseStyles} ${
          intensity === 'high'
            ? 'bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_rgba(31,38,135,0.37)] hover:bg-white/30'
            : intensity === 'medium'
            ? 'bg-white/15 backdrop-blur-lg border border-white/25 shadow-[0_6px_24px_rgba(31,38,135,0.25)] hover:bg-white/25'
            : 'bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_16px_rgba(31,38,135,0.15)] hover:bg-white/20'
        }`;
      
      case 'holographic':
        return `${baseStyles} ${
          intensity === 'high'
            ? 'bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30 border border-pink-400/50 shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)]'
            : intensity === 'medium'
            ? 'bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 border border-pink-400/30 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]'
            : 'bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 border border-pink-400/20 shadow-[0_0_15px_rgba(236,72,153,0.2)] hover:shadow-[0_0_25px_rgba(236,72,153,0.4)]'
        }`;
      
      case 'cyber':
        return `${baseStyles} ${
          intensity === 'high'
            ? 'bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 border border-green-400/50 shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:shadow-[0_0_35px_rgba(34,197,94,0.6)]'
            : intensity === 'medium'
            ? 'bg-gradient-to-r from-green-500/15 via-emerald-500/15 to-teal-500/15 border border-green-400/30 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]'
            : 'bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 border border-green-400/20 shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]'
        }`;
      
      default:
        return baseStyles;
    }
  };

  return (
    <div className={`${getVariantStyles()} ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticDesign;