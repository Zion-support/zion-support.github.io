import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export function Logo({ customLogo, customColor, className = '' }) {
  if (customLogo) {
    return (
      <Link to="/" className={`flex-shrink-0 group ${className}`}>
        <img 
          src={customLogo} 
          alt="Logo" 
          className="h-8 w-auto"
        />
      </Link>
    );
  }

  const logoColor = customColor || '#3b82f6'; // Default blue color

  return (
    <Link to="/" className={`flex-shrink-0 group ${className}`}>
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            style={{ backgroundColor: logoColor }}
          >
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div 
            className="absolute inset-0 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"
            style={{ backgroundColor: logoColor }}
          ></div>
        </div>
        <h1 
          className="text-2xl font-bold group-hover:scale-105 transition-transform duration-300"
          style={{ color: logoColor }}
        >
          Zion Tech Group
        </h1>
      </div>
    </Link>
  );
}
