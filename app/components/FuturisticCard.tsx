import React, { useRef, useEffect } from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glow' | 'border' | 'neon' | 'animated';
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default' 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant === 'animated' && cardRef.current) {
      const card = cardRef.current;
      
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
      
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [variant]);

  const baseClasses = 'bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 relative overflow-hidden';
  
  const variantClasses = {
    default: 'border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10',
    glow: 'border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/30',
    border: 'border-2 border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/20',
    neon: 'border border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/40 hover:bg-slate-800/60',
    animated: 'border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/30 transform-gpu'
  };

  const neonEffect = variant === 'neon' && (
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
  );

  const animatedEffect = variant === 'animated' && (
    <>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </>
  );

  return (
    <div 
      ref={cardRef}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ 
        transformStyle: variant === 'animated' ? 'preserve-3d' : 'flat',
        transition: variant === 'animated' ? 'transform 0.1s ease-out' : 'all 0.3s ease'
      }}
    >
      {neonEffect}
      {animatedEffect}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticCard;