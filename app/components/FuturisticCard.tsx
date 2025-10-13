import React, { useRef, useEffect } from 'react';
import { clsx } from 'clsx';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue';
  hoverEffect?: boolean;
  animated?: boolean;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className,
  glowColor = 'cyan',
  hoverEffect = true,
  animated = true
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated || !cardRef.current) return;

    const card = cardRef.current;
    let animationId: number;

    const animate = () => {
      const time = Date.now() * 0.001;
      const glowIntensity = Math.sin(time * 2) * 0.1 + 0.1;
      
      if (card) {
        card.style.setProperty('--glow-intensity', glowIntensity.toString());
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [animated]);

  const glowColors = {
    cyan: 'shadow-cyan-500/20',
    purple: 'shadow-purple-500/20',
    pink: 'shadow-pink-500/20',
    green: 'shadow-green-500/20',
    blue: 'shadow-blue-500/20'
  };

  const borderColors = {
    cyan: 'border-cyan-500/30',
    purple: 'border-purple-500/30',
    pink: 'border-pink-500/30',
    green: 'border-green-500/30',
    blue: 'border-blue-500/30'
  };

  const glowGradients = {
    cyan: 'from-cyan-500/20 to-transparent',
    purple: 'from-purple-500/20 to-transparent',
    pink: 'from-pink-500/20 to-transparent',
    green: 'from-green-500/20 to-transparent',
    blue: 'from-blue-500/20 to-transparent'
  };

  return (
    <div
      ref={cardRef}
      className={clsx(
        'relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300',
        'hover:bg-white/10 hover:border-white/30',
        hoverEffect && 'hover:scale-105 hover:shadow-2xl',
        glowColors[glowColor],
        className
      )}
      style={{
        '--glow-intensity': '0.1'
      } as React.CSSProperties}
    >
      {/* Animated border glow */}
      <div 
        className={clsx(
          'absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300',
          'group-hover:opacity-100',
          `bg-gradient-to-r ${glowGradients[glowColor]}`
        )}
        style={{
          background: `linear-gradient(45deg, transparent, var(--glow-color, rgba(0, 255, 255, 0.1)), transparent)`,
          opacity: 'var(--glow-intensity)'
        }}
      />
      
      {/* Inner content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-xl" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-xl" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50 rounded-br-xl" />
      
      {/* Hover glow effect */}
      {hoverEffect && (
        <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className={clsx(
            'absolute inset-0 rounded-xl',
            `bg-gradient-to-r ${glowGradients[glowColor]}`,
            'animate-pulse'
          )} />
        </div>
      )}
    </div>
  );
};

export default FuturisticCard;