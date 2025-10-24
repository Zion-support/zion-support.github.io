<<<<<<< HEAD
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
=======
'use client'

import React, { useState } from 'react'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Search</h2>
        <input type="text" placeholder="Search..." />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default SearchModal
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
