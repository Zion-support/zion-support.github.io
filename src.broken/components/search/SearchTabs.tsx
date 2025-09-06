import React from 'react';

interface SearchTabsProps {
  className?: string;
}

const SearchTabs: React.FC<SearchTabsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SearchTabs</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SearchTabs;