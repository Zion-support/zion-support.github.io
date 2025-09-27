import React from 'react';

interface TestimonialCardProps {
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  className = ''
}) => {
  return (
    <div className={`testimonialcard ${className}`}>
      <h2>TestimonialCard</h2>
      <p>Component placeholder - needs implementation</p>
    </div>
  );
};

export default TestimonialCard;
