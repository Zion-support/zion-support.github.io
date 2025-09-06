import React from 'react';

interface ServicesShowcaseProps {
  className?: string;
}

const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServicesShowcase</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServicesShowcase;