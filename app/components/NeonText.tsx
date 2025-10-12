import React from 'react';

interface NeonTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'heading' | 'subheading' | 'body' | 'accent';
  glow?: boolean;
  animate?: boolean;
}

const NeonText: React.FC<NeonTextProps> = ({
  children,
  className = '',
  variant = 'body',
  glow = true,
  animate = false
}) => {
  const variantClasses = {
    heading: "text-4xl sm:text-5xl lg:text-6xl font-bold",
    subheading: "text-2xl sm:text-3xl lg:text-4xl font-semibold",
    body: "text-base sm:text-lg",
    accent: "text-lg sm:text-xl font-medium"
  };
  
  const glowClasses = glow ? "text-shadow-glow" : "";
  const animateClasses = animate ? "animate-pulse" : "";
  
  return (
    <span className={`${variantClasses[variant]} ${glowClasses} ${animateClasses} ${className}`}>
      {children}
    </span>
  );
};

export default NeonText;