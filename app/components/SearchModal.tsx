import React from 'react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default SearchModal;

