import React from 'react';

interface TestimonialsProps {
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Testimonials</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Testimonials;