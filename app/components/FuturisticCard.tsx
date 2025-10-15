import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'glow' | 'gradient';
  hover?: boolean;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'blue' | 'green';
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
  glowColor = 'cyan'
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'elevated':
        return 'bg-slate-800/50 backdrop-blur-sm border border-white/20 shadow-2xl';
      case 'glow':
        return 'bg-slate-800/30 backdrop-blur-sm border border-white/10 shadow-lg';
      case 'gradient':
        return 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10';
      default:
        return 'bg-slate-800/40 backdrop-blur-sm border border-white/10';
    }
  };

  const getGlowColor = () => {
    switch (glowColor) {
      case 'cyan':
        return 'hover:shadow-cyan-500/20 hover:border-cyan-400/30';
      case 'purple':
        return 'hover:shadow-purple-500/20 hover:border-purple-400/30';
      case 'pink':
        return 'hover:shadow-pink-500/20 hover:border-pink-400/30';
      case 'blue':
        return 'hover:shadow-blue-500/20 hover:border-blue-400/30';
      case 'green':
        return 'hover: shadow-green-500/20 hover:border-green-400/30';,
  default:
        return 'hover:shadow-cyan-500/20 hover:border-cyan-400/30';
    }
  };

  const hoverClasses = hover ? 'hover:scale-105 hover:shadow-xl' : '';
  const glowClasses = hover ? getGlowColor() : '';

  const baseClasses = `
    relative rounded-xl p-6
    transition-all duration-300
    group overflow-hidden
  `;

  const cardClasses = `${baseClasses} ${getVariantClasses()} ${hoverClasses} ${glowClasses} ${className}`;

  return (
    <>
      <div className={cardClasses}></></div>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10"></div>
        {children}
      </div>
    </div>
    </>
  );
};

export default FuturisticCard;