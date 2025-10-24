'use client';
import React from 'react';

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>SearchBar</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default SearchBar;
