import React from 'react';
import { Link } from 'react-router-dom';

interface AnimatedCardProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green';
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  href,
  className = '',
  glowColor = 'cyan'
}) => {
  const glowColors = {
    cyan: 'hover:shadow-cyan-500/20 group-hover:border-cyan-400',
    purple: 'hover:shadow-purple-500/20 group-hover:border-purple-400',
    pink: 'hover:shadow-pink-500/20 group-hover:border-pink-400',
    green: 'hover:shadow-green-500/20 group-hover:border-green-400'
  };
  
  const cardClasses = `
    group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 
    rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 
    hover:bg-slate-700/50 ${glowColors[glowColor]} ${className}
  `;
  
  const cardContent = (
    <>
      {/* Animated background gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-xl border border-transparent bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </>
  );
  
  if (href) {
    return (
      <Link to={href} className={cardClasses}>
        {cardContent}
      </Link>
    );
  }
  
  return (
    <div className={cardClasses}>
      {cardContent}
    </div>
  );
};

export default AnimatedCard;