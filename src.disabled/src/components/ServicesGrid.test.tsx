import React from 'react';

interface ServicesGrid.testProps {
  className?: string;
}

const ServicesGrid.test: React.FC<ServicesGrid.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServicesGrid.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServicesGrid.test;