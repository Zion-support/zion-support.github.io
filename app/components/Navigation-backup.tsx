'use client';
import React from 'react';

interface NavigationBackupProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const NavigationBackup: React.FC<NavigationBackupProps> = ({
  isOpen = false,
  onClose,
}) => {
  return (
    <div className={`navigation-backup ${isOpen ? 'open' : ''}`}>
      <div className="nav-content">
        <button onClick={onClose} className="nav-close">
          Close
        </button>
        <nav className="nav-menu">
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/services" className="nav-link">Services</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBackup;