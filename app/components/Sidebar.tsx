'use client'

import React from 'react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose} className="close-btn">×</button>
      <nav>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/about">About</a>
      </nav>
    </div>
  )
}

export default Sidebar
