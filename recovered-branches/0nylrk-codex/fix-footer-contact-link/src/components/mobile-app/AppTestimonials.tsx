import React from 'react';

interface AppTestimonialsProps {
  className?: string;
}

const AppTestimonials: React.FC<AppTestimonialsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AppTestimonials</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AppTestimonials;