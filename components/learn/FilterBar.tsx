import React from 'react';

interface FilterBarProps {
  className?: string;
}

const FilterBar: React.FC<FilterBarProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FilterBar</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FilterBar;