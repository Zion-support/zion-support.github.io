import React from 'react';

interface SearchBarProps {
  className?: string;
  children?: React.ReactNode;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'searchbar ' + className}>
      {children || <p>SearchBar component</p>}
    </div>
  );
};

export default SearchBar;
