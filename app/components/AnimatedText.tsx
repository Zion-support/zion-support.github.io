import React, { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: 'gradient' | 'neon' | 'glitch';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 1000,
  variant = 'gradient'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const variantClasses = {
    gradient: 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent',
    neon: 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]',
    glitch: 'text-white relative before:absolute before:inset-0 before:content-[attr(data-text)] before:text-cyan-400 before:animate-pulse before:opacity-75'
  };

  const animationClasses = isVisible 
    ? 'opacity-100 transform translate-y-0' 
    : 'opacity-0 transform translate-y-4';

  return (
    <span
      className={`transition-all duration-${duration} ${animationClasses} ${variantClasses[variant]} ${className}`}
      data-text={text}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {text}
    </span>
  );
};

export default AnimatedText;