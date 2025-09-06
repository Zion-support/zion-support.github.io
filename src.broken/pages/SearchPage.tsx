import React from 'react';

interface SearchPageProps {
  className?: string;
}

const SearchPage: React.FC<SearchPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SearchPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SearchPage;