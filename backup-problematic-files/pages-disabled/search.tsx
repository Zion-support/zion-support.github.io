import React from 'react';

interface SearchProps {
  className?: string;

const Search: React.FC<SearchProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Search</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Search;