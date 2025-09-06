import React from 'react';

interface CareerJobDetailsProps {
  className?: string;
}

const CareerJobDetails: React.FC<CareerJobDetailsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CareerJobDetails</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CareerJobDetails;