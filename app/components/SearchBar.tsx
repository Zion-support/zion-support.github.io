import React from 'react';

interface SearchbarProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Searchbar({ className = '', children }: SearchbarProps) {
  return (
    <div className={`SearchBar-component ${className}`}>
      {children}
    </div>
  );
}