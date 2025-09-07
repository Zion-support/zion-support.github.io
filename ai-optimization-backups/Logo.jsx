import React from 'react';
import { Link } from 'react-router-dom';

export function Logo({ customLogo, customColor }) {
  const logoColor = customColor || '#22D3EE';
  
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div 
        className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg"
        style={{ backgroundColor: logoColor }}
      >
        Z
      </div>
      <span className="text-xl font-bold text-gray-900 dark:text-white">
        Zion Tech
      </span>
    </Link>
  );
}