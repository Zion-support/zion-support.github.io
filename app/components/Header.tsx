import React from 'react';

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Header({ className = '', children }: HeaderProps) {
  return (
    <div className={`header ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">Header</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}