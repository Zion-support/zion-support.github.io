import React from 'react';

interface FuturisticTextProps {
  children: React.ReactNode;
  variant?: 'heading' | 'subheading' | 'body' | 'caption';
  gradient?: 'cyan-purple' | 'purple-pink' | 'cyan-pink' | 'green-cyan' | 'orange-red';
  glow?: boolean;
  animate?: boolean;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const FuturisticText: React.FC<FuturisticTextProps> = ({
  children,
  variant = 'body',
  gradient = 'cyan-purple',
  glow = false,
  animate = false,
  className = '',
  as: Component = 'p'
}) => {
  const variantClasses = {
    heading: "text-4xl md:text-6xl font-bold leading-tight",
    subheading: "text-2xl md:text-4xl font-bold leading-tight",
    body: "text-lg md:text-xl leading-relaxed",
    caption: "text-sm md:text-base leading-relaxed"
  };

  const gradientClasses = {
    'cyan-purple': "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400",
    'purple-pink': "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400",
    'cyan-pink': "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400",
    'green-cyan': "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400",
    'orange-red': "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400"
  };

  const glowClasses = glow ? "drop-shadow-[0_0_20px_rgba(0,212,255,0.5)]" : "";
  const animateClasses = animate ? "animate-pulse" : "";

  const textClasses = `${variantClasses[variant]} ${gradientClasses[gradient]} ${glowClasses} ${animateClasses} ${className}`;

  return (
    <Component className={textClasses}>
      {children}
    </Component>
  );
};

export default FuturisticText;