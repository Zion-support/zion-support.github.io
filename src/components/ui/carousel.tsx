import React from 'react';

interface CarouselProps {
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Carousel</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Carousel;