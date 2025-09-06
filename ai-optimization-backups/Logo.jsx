import React from 'react';
import { Link } from 'react-router-dom';

export function Logo({ customLogo, customColor }) {
  const logoColor = customColor || '#22D3EE';
  
  return (
    <Link to="/" className="flex items-center space-x-3 group">
      <div
        className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
        style={{ backgroundColor: logoColor }}
      >
        {customLogo ? (
          <img
            src={customLogo}
            alt="Zion Logo"
            className="w-8 h-8 object-contain"
          />
        ) : (
          <div className="text-white font-bold text-xl">Z</div>
        )}
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900 group-hover:text-zion-cyan transition-colors duration-300">
          Zion
        </span>
        <span className="text-sm text-gray-600 group-hover:text-zion-purple transition-colors duration-300">
          Technology
        </span>
      </div>
    </Link>
  );
}
