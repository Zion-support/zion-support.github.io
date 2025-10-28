import React from 'react';

interface SearchBarProps {
  className?: string;
  children?: React.ReactNode;
}

const SearchBar: React.FC<SearchBarProps> = ({ className = '', children }) => {
  return (
    <div className={`searchbar-component ${className}`}>
      {children}
    </div>
  );
};

SearchBar.displayName = 'SearchBar';

export default SearchBar;
cursor/fix-errors-and-merge-to-main-7271