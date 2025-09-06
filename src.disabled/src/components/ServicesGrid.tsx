import React from 'react';

interface ServicesGridProps {
  className?: string;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServicesGrid</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServicesGrid;