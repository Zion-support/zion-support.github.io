import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={onClose} className="close-btn">
        ×
      </button>
      <nav>
        <Link to="/" onClick={onClose}>Home</Link>
        <Link to="/about" onClick={onClose}>About</Link>
        <Link to="/services" onClick={onClose}>Services</Link>
        <Link to="/contact" onClick={onClose}>Contact</Link>
      </nav>
    </div>
  );
}