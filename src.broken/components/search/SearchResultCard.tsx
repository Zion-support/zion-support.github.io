import React from 'react';

interface SearchResultCardProps {
  className?: string;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SearchResultCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SearchResultCard;