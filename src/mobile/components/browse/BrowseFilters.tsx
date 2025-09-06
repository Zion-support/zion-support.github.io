import React from 'react';

interface BrowseFiltersProps {
  className?: string;
}

const BrowseFilters: React.FC<BrowseFiltersProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BrowseFilters</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BrowseFilters;