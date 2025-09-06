import React from 'react';

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SearchBar</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SearchBar;