'use client'
import React from 'react';

interface SearchModalProps {
  className?: string;
}

const SearchModal: React.FC<SearchModalProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Search Modal</h2>
      <p className="text-gray-600">This is a placeholder component for Search Modal.</p>
    </div>
  );
};

export default SearchModal;
