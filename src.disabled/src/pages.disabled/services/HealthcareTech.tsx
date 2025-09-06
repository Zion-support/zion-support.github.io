import React from 'react';

interface HealthcareTechProps {
  className?: string;
}

const HealthcareTech: React.FC<HealthcareTechProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HealthcareTech</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HealthcareTech;