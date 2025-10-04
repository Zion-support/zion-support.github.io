<<<<<<< HEAD
import React from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = "" }) => {
  return (
    <div className={`animate-fade-in ${className}`}>
=======
import React from 'react';

interface AnimatedSectionProps {
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ animation = 'fadeIn', delay = 0, children }) => {
  const style: React.CSSProperties = {
    animationDelay: `${delay}ms`
  };

  const className = `animated-section animation-${animation}`;

  return (
    <div className={className} style={style}>
>>>>>>> 83e4988d0b484747cc68fa307caba20f45af70a7
      {children}
    </div>
  );
};

<<<<<<< HEAD
export default AnimatedSection;
=======
export default AnimatedSection;

>>>>>>> 83e4988d0b484747cc68fa307caba20f45af70a7
