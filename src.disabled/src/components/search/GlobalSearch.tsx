import React from 'react';

interface GlobalSearchProps {
  className?: string;
}

const GlobalSearch: React.FC<GlobalSearchProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GlobalSearch</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GlobalSearch;