'use client'
import React from 'react';

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Search Bar</h2>
      <p className="text-gray-600">This is a placeholder component for Search Bar.</p>
    </div>
  );
};

export default SearchBar;
