import React from 'react';

interface SearchModalProps {
  className?: string;
  children?: React.ReactNode;
}

const SearchModal: React.FC<SearchModalProps> = ({ className = '', children }) => {
  return (
    <div className={`searchmodal-component ${className}`}>
{children || <h2>SearchModal</h2>}
334a97c43c32bf9e815481016c5bf31caa46a580
    </div>
  );
};

SearchModal.displayName = 'SearchModal';

export default SearchModal;