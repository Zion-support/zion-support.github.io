import React, { useRef, useEffect } from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glow' | 'border' | 'neon' | 'holographic';
  hover?: boolean;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hover || !cardRef.current) return;

    const card = cardRef.current;
    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    };

    if (variant === 'holographic') {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (variant === 'holographic') {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [variant, hover]);

  const baseClasses = 'relative bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 transition-all duration-500 overflow-hidden';
  
  const variantClasses = {
    default: 'border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10',
    glow: 'border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105',
    border: 'border-2 border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/20',
    neon: 'border border-cyan-500/40 hover:border-cyan-500/80 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 hover:bg-cyan-500/5',
    holographic: 'border border-gradient-to-r from-cyan-500/40 via-purple-500/40 to-pink-500/40 hover:border-cyan-500/80 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105'
  };

  const getGradientBorder = () => {
    if (variant === 'holographic') {
      return (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 p-[1px]">
          <div className="w-full h-full bg-slate-800/50 rounded-2xl"></div>
        </div>
      );
    }
    return null;
  };

  const getAnimatedBackground = () => {
    if (variant === 'neon' || variant === 'holographic') {
      return (
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
        </div>
      );
    }
    return null;
  };

  return (
    <div 
      ref={cardRef}
      className={`${baseClasses} ${variantClasses[variant]} ${className} group`}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {getGradientBorder()}
      {getAnimatedBackground()}
      
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-sm"></div>
      </div>
      
      {/* Floating particles effect */}
      {variant === 'holographic' && (
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute top-2 left-2 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-4 right-4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-4 left-4 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-2 right-2 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1.5s' }}></div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-xl"></div>
      </div>
    </div>
  );
};

export default FuturisticCard;