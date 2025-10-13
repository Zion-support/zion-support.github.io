import React, { useState, useRef, useEffect } from 'react';

interface EnhancedFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: string;
  animationType?: 'float' | 'pulse' | 'glow' | 'scan' | 'matrix';
  interactive?: boolean;
}

const EnhancedFuturisticCard: React.FC<EnhancedFuturisticCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  glowColor = 'cyan',
  animationType = 'float',
  interactive = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const glowClasses = {
    cyan: 'hover:shadow-cyan-500/25 hover:shadow-2xl',
    purple: 'hover:shadow-purple-500/25 hover:shadow-2xl',
    pink: 'hover:shadow-pink-500/25 hover:shadow-2xl',
    blue: 'hover:shadow-blue-500/25 hover:shadow-2xl',
    green: 'hover:shadow-green-500/25 hover:shadow-2xl',
    orange: 'hover:shadow-orange-500/25 hover:shadow-2xl',
    red: 'hover:shadow-red-500/25 hover:shadow-2xl',
    yellow: 'hover:shadow-yellow-500/25 hover:shadow-2xl'
  };

  const animationClasses = {
    float: 'animate-float',
    pulse: 'animate-pulse',
    glow: 'animate-glow',
    scan: 'animate-scan',
    matrix: 'animate-matrix'
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !interactive) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    // Add custom CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.3); }
        50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.6); }
      }
      
      @keyframes scan {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      
      @keyframes matrix {
        0% { background-position: 0 0; }
        100% { background-position: 0 100%; }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-glow {
        animation: glow 2s ease-in-out infinite;
      }
      
      .animate-scan {
        background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.4), transparent);
        background-size: 200% 100%;
        animation: scan 3s linear infinite;
      }
      
      .animate-matrix {
        background: linear-gradient(0deg, transparent, rgba(6, 182, 212, 0.1), transparent);
        background-size: 100% 200%;
        animation: matrix 4s linear infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`
        relative group
        bg-gradient-to-br from-slate-800/50 to-slate-900/50 
        backdrop-blur-sm 
        rounded-2xl 
        border border-white/10 
        transition-all duration-500 ease-out
        ${hoverEffect ? 'hover:border-white/30 hover:transform hover:scale-105' : ''}
        ${hoverEffect ? glowClasses[glowColor as keyof typeof glowClasses] : ''}
        ${animationClasses[animationType]}
        ${className}
      `}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered && interactive ? 
          `perspective(1000px) rotateX(${(mousePosition.y - 150) / 20}deg) rotateY(${(mousePosition.x - 150) / 20}deg)` : 
          'perspective(1000px) rotateX(0deg) rotateY(0deg)'
      }}
    >
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
      
      {/* Inner glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Scanning line effect */}
      {isHovered && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        </div>
      )}
      
      {/* Matrix rain effect */}
      {animationType === 'matrix' && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-matrix"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-400/50 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-pink-400/50 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Holographic effect */}
      {isHovered && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-50 animate-pulse"></div>
      )}
    </div>
  );
};

export default EnhancedFuturisticCard;