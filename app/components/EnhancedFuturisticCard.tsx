import React, { useState, useRef, useEffect } from 'react';

interface EnhancedFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glow' | 'border' | 'neon' | 'holographic';
  hoverEffect?: boolean;
  animated?: boolean;
  color?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'red';
}

const EnhancedFuturisticCard: React.FC<EnhancedFuturisticCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  hoverEffect = true,
  animated = true,
  color = 'cyan'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated || !cardRef.current) return;

    const card = cardRef.current;
    let animationId: number;

    const animate = () => {
      if (card && variant === 'holographic') {
        const time = Date.now() * 0.001;
        const intensity = Math.sin(time * 2) * 0.1 + 0.9;
        card.style.filter = `hue-rotate(${Math.sin(time) * 30}deg) brightness(${intensity})`;
      }
      animationId = requestAnimationFrame(animate);
    };

    if (variant === 'holographic') {
      animate();
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [animated, variant]);

  const baseClasses = 'relative bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 overflow-hidden';
  
  const variantClasses = {
    default: 'border border-cyan-500/20 hover:border-cyan-500/40',
    glow: 'border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20',
    border: 'border-2 border-cyan-500/30 hover:border-cyan-500/60',
    neon: 'border border-cyan-500/40 hover:border-cyan-500/80 hover:shadow-2xl hover:shadow-cyan-500/40',
    holographic: 'border border-cyan-500/30 hover:border-cyan-500/60 bg-gradient-to-br from-slate-800/50 via-purple-900/20 to-slate-800/50'
  };

  const colorClasses = {
    cyan: 'border-cyan-500/20 hover:border-cyan-500/40 shadow-cyan-500/20',
    purple: 'border-purple-500/20 hover:border-purple-500/40 shadow-purple-500/20',
    pink: 'border-pink-500/20 hover:border-pink-500/40 shadow-pink-500/20',
    green: 'border-green-500/20 hover:border-green-500/40 shadow-green-500/20',
    blue: 'border-blue-500/20 hover:border-blue-500/40 shadow-blue-500/20',
    red: 'border-red-500/20 hover:border-red-500/40 shadow-red-500/20'
  };

  const hoverClasses = hoverEffect ? 'hover:scale-105 hover:shadow-2xl' : '';

  return (
    <div
      ref={cardRef}
      className={`${baseClasses} ${variantClasses[variant]} ${colorClasses[color]} ${hoverClasses} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered && hoverEffect ? 'scale(1.05) translateY(-5px)' : 'scale(1) translateY(0)',
        boxShadow: isHovered && variant === 'neon' 
          ? `0 0 30px ${color === 'cyan' ? '#06b6d4' : color === 'purple' ? '#8b5cf6' : '#ec4899'}40`
          : undefined
      }}
    >
      {/* Animated background gradient */}
      {variant === 'holographic' && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-50 animate-pulse" />
      )}
      
      {/* Neon glow effect */}
      {variant === 'neon' && isHovered && (
        <div 
          className="absolute inset-0 rounded-2xl opacity-50 blur-xl"
          style={{
            background: `linear-gradient(45deg, ${color === 'cyan' ? '#06b6d4' : color === 'purple' ? '#8b5cf6' : '#ec4899'}, transparent)`
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default EnhancedFuturisticCard;
