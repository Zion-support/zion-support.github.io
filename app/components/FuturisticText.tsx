import React, { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';

interface FuturisticTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'heading' | 'subheading' | 'body' | 'caption';
  animated?: boolean;
  glowEffect?: boolean;
  gradient?: 'cyan-purple' | 'purple-pink' | 'cyan-pink' | 'green-blue' | 'orange-red';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
}

const FuturisticText: React.FC<FuturisticTextProps> = ({
  children,
  className,
  variant = 'body',
  animated = false,
  glowEffect = false,
  gradient = 'cyan-purple',
  size
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!animated || !textRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(textRef.current);

    return () => observer.disconnect();
  }, [animated]);

  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl'
  };

  const variantClasses = {
    heading: 'font-bold text-white',
    subheading: 'font-semibold text-gray-200',
    body: 'font-normal text-gray-300',
    caption: 'font-medium text-gray-400'
  };

  const gradientClasses = {
    'cyan-purple': 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400',
    'purple-pink': 'bg-gradient-to-r from-purple-400 via-pink-400 to-red-400',
    'cyan-pink': 'bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400',
    'green-blue': 'bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400',
    'orange-red': 'bg-gradient-to-r from-orange-400 via-red-400 to-pink-400'
  };

  const baseClasses = clsx(
    'transition-all duration-300',
    size ? sizeClasses[size] : '',
    variantClasses[variant],
    className
  );

  const gradientTextClasses = clsx(
    'text-transparent bg-clip-text',
    gradientClasses[gradient],
    glowEffect && 'drop-shadow-lg'
  );

  const animationClasses = animated ? clsx(
    'transform transition-all duration-1000',
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
  ) : '';

  if (variant === 'heading' && gradient !== 'cyan-purple') {
    return (
      <span
        ref={textRef}
        className={clsx(baseClasses, gradientTextClasses, animationClasses)}
        style={glowEffect ? {
          textShadow: `0 0 20px ${gradient === 'cyan-purple' ? '#00ffff' : gradient === 'purple-pink' ? '#ff00ff' : '#00ff00'}`,
          filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))'
        } : {}}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      ref={textRef}
      className={clsx(baseClasses, animationClasses)}
      style={glowEffect ? {
        textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
        filter: 'drop-shadow(0 0 5px rgba(0, 255, 255, 0.3))'
      } : {}}
    >
      {children}
    </span>
  );
};

export default FuturisticText;