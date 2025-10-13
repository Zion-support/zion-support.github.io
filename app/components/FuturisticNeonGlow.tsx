import React, { useEffect, useRef } from 'react';

interface FuturisticNeonGlowProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  color?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'red';
  animated?: boolean;
  className?: string;
}

const FuturisticNeonGlow: React.FC<FuturisticNeonGlowProps> = ({
  children,
  intensity = 'medium',
  color = 'cyan',
  animated = true,
  className = ''
}) => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated || !glowRef.current) return;

    const glowElement = glowRef.current;
    let animationId: number;

    const animate = () => {
      const time = Date.now() * 0.001;
      const intensityValue = Math.sin(time * 2) * 0.3 + 0.7;
      
      glowElement.style.filter = `drop-shadow(0 0 ${intensityValue * 20}px currentColor)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [animated]);

  const intensityClasses = {
    low: 'shadow-cyan-500/20',
    medium: 'shadow-cyan-500/40',
    high: 'shadow-cyan-500/60'
  };

  const colorClasses = {
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400',
    green: 'text-green-400',
    blue: 'text-blue-400',
    red: 'text-red-400'
  };

  return (
    <div
      ref={glowRef}
      className={`${colorClasses[color]} ${intensityClasses[intensity]} ${className}`}
      style={{
        filter: animated ? 'none' : `drop-shadow(0 0 20px currentColor)`,
        transition: 'all 0.3s ease-in-out'
      }}
    >
      {children}
    </div>
  );
};

export default FuturisticNeonGlow;
