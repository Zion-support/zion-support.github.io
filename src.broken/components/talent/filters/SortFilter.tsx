import React from 'react';

interface SortFilterProps {
  className?: string;
}

const SortFilter: React.FC<SortFilterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SortFilter</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SortFilter;