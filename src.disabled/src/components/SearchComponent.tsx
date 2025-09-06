import React from 'react';

interface SearchComponentProps {
  className?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SearchComponent</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SearchComponent;