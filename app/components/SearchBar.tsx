import React from 'react';

interface SearchBarProps {
  className?: string;
  children?: React.ReactNode;
}

export const SearchBar: React.FC<SearchBarProps> = ({ className = '', children }) => {
  return (
    <div className={`searchbar ${className}`}>
      {children}
    </div>
  );
};

export default SearchBar;