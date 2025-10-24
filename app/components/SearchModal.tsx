import React from 'react';

interface SearchModalProps {
  className?: string;
  children?: React.ReactNode;
}

const SearchModal: React.FC<SearchModalProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default SearchModal;
