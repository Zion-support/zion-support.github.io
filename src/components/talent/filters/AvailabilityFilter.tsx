import React from 'react';

interface AvailabilityFilterProps {
  className?: string;
}

const AvailabilityFilter: React.FC<AvailabilityFilterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AvailabilityFilter</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AvailabilityFilter;