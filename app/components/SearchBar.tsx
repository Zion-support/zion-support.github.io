'use client';

import React, { memo } from 'react';

interface SearchBarProps {
  className?: string;
  children?: React.ReactNode;
}

const SearchBar: React.FC<SearchBarProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`search-bar ${className}`}>
      {children}
    </div>
  );
});

SearchBar.displayName = 'SearchBar';

export default SearchBar;