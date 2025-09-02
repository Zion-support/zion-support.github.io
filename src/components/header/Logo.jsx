import React from 'react';
import { Link } from 'react-router-dom';

export function Logo({ customLogo, customColor }) {
  const logoColor = customColor || '#8B5CF6'; // Default Zion purple
  
  return (
    <Link to="/" className="flex items-center space-x-2 group">
      {customLogo ? (
        <img 
          src={customLogo} 
          alt="Zion Tech Group" 
          className="h-8 w-auto"
        />
      ) : (
        <div className="flex items-center space-x-2">
          {/* Logo Icon */}
          <div 
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            style={{ 
              background: customColor ? `linear-gradient(135deg, ${customColor}, ${customColor}80)` : undefined 
            }}
          >
            <span className="text-white font-bold text-lg">Z</span>
          </div>
          
          {/* Logo Text */}
          <div className="flex flex-col">
            <span 
              className="text-xl font-bold text-white leading-tight"
              style={{ color: customColor || undefined }}
            >
              Zion
            </span>
            <span className="text-xs text-zion-cyan leading-tight font-medium">
              Tech Group
            </span>
          </div>
        </div>
      )}
    </Link>
  );
}