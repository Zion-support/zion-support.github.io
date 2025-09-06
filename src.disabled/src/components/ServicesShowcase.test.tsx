import React from 'react';

interface ServicesShowcase.testProps {
  className?: string;
}

const ServicesShowcase.test: React.FC<ServicesShowcase.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServicesShowcase.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServicesShowcase.test;