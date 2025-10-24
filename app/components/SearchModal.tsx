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