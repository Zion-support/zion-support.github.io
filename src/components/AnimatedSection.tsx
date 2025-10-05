import React from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '' }) => {
  return (
    <div className={`animated-section ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;