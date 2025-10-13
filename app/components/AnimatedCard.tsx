import React, { useState, useEffect } from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'purple' | 'cyan' | 'pink' | 'green' | 'blue' | 'yellow' | 'orange' | 'red' | 'indigo';
  hoverEffect?: boolean;
  interactive?: boolean;
  loading?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  glowColor = 'purple',
  hoverEffect = true,
  interactive = false,
  loading = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const glowColors = {
    purple: 'shadow-purple-500/25 hover:shadow-purple-500/50',
    cyan: 'shadow-cyan-500/25 hover:shadow-cyan-500/50',
    pink: 'shadow-pink-500/25 hover:shadow-pink-500/50',
    green: 'shadow-green-500/25 hover:shadow-green-500/50',
    blue: 'shadow-blue-500/25 hover:shadow-blue-500/50',
    yellow: 'shadow-yellow-500/25 hover:shadow-yellow-500/50',
    orange: 'shadow-orange-500/25 hover:shadow-orange-500/50',
    red: 'shadow-red-500/25 hover:shadow-red-500/50',
    indigo: 'shadow-indigo-500/25 hover:shadow-indigo-500/50'
  };

  const borderColors = {
    purple: 'border-purple-500/30 hover:border-purple-500/70',
    cyan: 'border-cyan-500/30 hover:border-cyan-500/70',
    pink: 'border-pink-500/30 hover:border-pink-500/70',
    green: 'border-green-500/30 hover:border-green-500/70',
    blue: 'border-blue-500/30 hover:border-blue-500/70',
    yellow: 'border-yellow-500/30 hover:border-yellow-500/70',
    orange: 'border-orange-500/30 hover:border-orange-500/70',
    red: 'border-red-500/30 hover:border-red-500/70',
    indigo: 'border-indigo-500/30 hover:border-indigo-500/70'
  };

  const gradientColors = {
    purple: 'from-purple-500/20 via-purple-600/10 to-purple-500/20',
    cyan: 'from-cyan-500/20 via-cyan-600/10 to-cyan-500/20',
    pink: 'from-pink-500/20 via-pink-600/10 to-pink-500/20',
    green: 'from-green-500/20 via-green-600/10 to-green-500/20',
    blue: 'from-blue-500/20 via-blue-600/10 to-blue-500/20',
    yellow: 'from-yellow-500/20 via-yellow-600/10 to-yellow-500/20',
    orange: 'from-orange-500/20 via-orange-600/10 to-orange-500/20',
    red: 'from-red-500/20 via-red-600/10 to-red-500/20',
    indigo: 'from-indigo-500/20 via-indigo-600/10 to-indigo-500/20'
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      className={`
        relative bg-gradient-to-br from-slate-800/90 to-slate-700/90 
        backdrop-blur-md border border-slate-600/50 
        rounded-xl p-6 transition-all duration-500 group overflow-hidden
        ${hoverEffect ? 'hover:transform hover:scale-105 hover:-translate-y-2' : ''}
        ${glowColors[glowColor]}
        ${borderColors[glowColor]}
        ${interactive ? 'cursor-pointer' : ''}
        ${loading ? 'animate-pulse' : ''}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradientColors[glowColor]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Holographic overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Scanning line effect */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"
          style={{
            transform: `translateX(${isHovered ? '100%' : '-100%'})`,
            transition: 'transform 0.6s ease-in-out'
          }}
        ></div>
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-400/50 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-pink-400/50 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-400/50 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Interactive glow effect */}
      {interactive && (
        <div 
          className="absolute w-32 h-32 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
      )}
      
      {/* Loading overlay */}
      {loading && (
        <div className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedCard;