import React from 'react';

interface Search.testProps {
  className?: string;
}

const Search.test: React.FC<Search.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Search.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Search.test;