import React, { useEffect, useState, useRef } from 'react';

const ParallaxSection = ({ 
  children, 
  speed = 0.5, 
  className = '',
  offset = 0,
  direction = 'up'
}) => {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        
        let newOffset = rate + offset;
        
        // Apply direction
        if (direction === 'down') {
          newOffset = -rate + offset;
        } else if (direction === 'left') {
          newOffset = rate + offset;
        } else if (direction === 'right') {
          newOffset = -rate + offset;
        }
        
        setOffsetY(newOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, offset, direction]);

  return (
    <div 
      ref={sectionRef}
      className={className}
      style={{
        transform: `translateY(${offsetY}px)`,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;