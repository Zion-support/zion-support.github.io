import React from 'react';

interface ActiveFiltersProps {
  className?: string;
}

const ActiveFilters: React.FC<ActiveFiltersProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ActiveFilters</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ActiveFilters;