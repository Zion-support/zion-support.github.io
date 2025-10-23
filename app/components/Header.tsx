"use client";
import React from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>Header</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default Header;