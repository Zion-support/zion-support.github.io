import React from 'react';

interface AnimatedSectionProps {
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ animation = 'fadeIn', delay = 0, children }) => {
  const style: React.CSSProperties = { animationDelay: `${delay }ms`
  };

  const className = `animated-section animation-${animation}`;

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default AnimatedSection;

