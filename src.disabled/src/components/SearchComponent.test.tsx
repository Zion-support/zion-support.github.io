import React from 'react';

interface SearchComponent.testProps {
  className?: string;
}

const SearchComponent.test: React.FC<SearchComponent.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SearchComponent.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SearchComponent.test;