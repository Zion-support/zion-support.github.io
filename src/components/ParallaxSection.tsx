import React, { useRef, useEffect, useState } from 'react';

interface ParallaxSectionProps {
children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ParallaxSection: React.FC < ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className = '',
  direction = 'up'
})  => {

  const elementRef = useRef < HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;

        switch (direction) {
          case 'up':
            setOffset(rate);
            break;
          case 'down':
            setOffset(-rate);
            break;
          case 'left':
            setOffset(rate);
            break;
          case 'right':
            setOffset(-rate);
            break;
        
}
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return (
    <div
      ref={elementRef}
      className={`parallax-section ${className}`}
      style={{
        transform: `translateY(${offset}
px)`
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;