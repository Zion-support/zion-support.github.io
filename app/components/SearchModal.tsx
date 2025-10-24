import React from 'react';

interface SearchModalProps {
  className?: string;
  children?: React.ReactNode;
}

const SearchModal: React.FC<SearchModalProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'searchmodal ' + className}>
      {children || <p>SearchModal component</p>}
    </div>
  );
};

export default SearchModal;
