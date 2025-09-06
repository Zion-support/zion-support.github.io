import React from 'react';

interface SearchResultsPageProps {
  className?: string;
}

const SearchResultsPage: React.FC<SearchResultsPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SearchResultsPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SearchResultsPage;