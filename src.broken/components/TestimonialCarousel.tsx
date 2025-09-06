import React from 'react';

interface TestimonialCarouselProps {
  className?: string;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TestimonialCarousel</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TestimonialCarousel;