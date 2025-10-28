'use client';

import React, { memo } from 'react';

interface SearchModalProps {
  className?: string;
  children?: React.ReactNode;
}

const SearchModal: React.FC<SearchModalProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`search-modal ${className}`}>
      {children}
    </div>
  );
});

SearchModal.displayName = 'SearchModal';

export default SearchModal;