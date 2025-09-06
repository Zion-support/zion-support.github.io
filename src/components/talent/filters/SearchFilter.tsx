import React from 'react';

interface SearchFilterProps {
  className?: string;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SearchFilter</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SearchFilter;