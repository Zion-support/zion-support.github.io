import React from 'react';

interface SearchBarProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SearchBar({ className, children }: SearchBarProps) {
  return (
    <div className={}>
      {children || 'SearchBar Component'}
    </div>
  );
}
