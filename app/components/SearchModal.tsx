import React from 'react';

interface SearchModalProps {
  className?: string;
  children?: React.ReactNode;
}

export const SearchModal: React.FC<SearchModalProps> = ({ className = '', children }) => {
  return (
    <div className={`searchmodal ${className}`}>
      {children}
    </div>
  );
};

export default SearchModal;