import React from 'react';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (_query: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search...', onSearch, className = '' }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch?.(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
      className={`search-bar ${className}`}
    />
  );
};

export default SearchBar;

