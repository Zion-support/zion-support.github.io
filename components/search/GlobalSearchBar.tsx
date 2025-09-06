import React from 'react';

interface GlobalSearchBarProps {
  className?: string;
}

const GlobalSearchBar: React.FC<GlobalSearchBarProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GlobalSearchBar</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GlobalSearchBar;