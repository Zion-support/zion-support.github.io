import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './AnimatedSection.css';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = '',
}) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold,
    freezeOnceVisible: true,
  });

  return (
    <div
      ref={ref}
      className={`animated-section animated-section--${animation} ${
        isIntersecting ? 'animated-section--visible' : ''
      } ${className}`}
      style={
        {
          '--animation-delay': `${delay}ms`,
          '--animation-duration': `${duration}ms`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
