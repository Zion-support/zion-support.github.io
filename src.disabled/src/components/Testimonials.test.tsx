import React from 'react';

interface Testimonials.testProps {
  className?: string;
}

const Testimonials.test: React.FC<Testimonials.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Testimonials.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Testimonials.test;