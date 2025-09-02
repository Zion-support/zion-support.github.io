import React from 'react';
import { Link } from 'react-router-dom';

export function Logo({ customLogo, customColor }) {
  const logoColor = customColor || '#22D3EE'; // Default to zion-cyan

  return (
    <Link to="/" className="flex items-center space-x-3 group">
      <div 
        className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
        style={{ 
          background: customColor 
            ? `linear-gradient(135deg, ${customColor}, ${customColor}dd)` 
            : 'linear-gradient(135deg, #22D3EE, #A855F7)'
        }}
      >
        <span className="text-white font-bold text-xl">Z</span>
      </div>
      <div className="flex flex-col">
        <span 
          className="text-xl font-bold"
          style={{ color: logoColor }}
        >
          Zion
        </span>
        <span className="text-sm text-zinc-300 font-medium">
          Tech Group
        </span>
      </div>
    </Link>
  );
}