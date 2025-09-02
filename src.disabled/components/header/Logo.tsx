import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

interface LogoProps {
  customLogo?: string;
  customColor?: string;
}

export function Logo({ customLogo, customColor }: LogoProps) {
  const logoColor = customColor || '#06b6d4'; // Default zion-cyan color

  return (
    <Link to="/" className="flex items-center space-x-2 group">
      <div 
        className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
        style={{ 
          background: customColor ? `linear-gradient(135deg, ${customColor}, ${customColor}dd)` : undefined 
        }}
      >
        <Zap 
          className="w-6 h-6 text-white" 
          style={{ color: customColor ? '#ffffff' : undefined }}
        />
      </div>
      <div className="flex flex-col">
        <span 
          className="text-xl font-bold tracking-tight"
          style={{ color: logoColor }}
        >
          Zion Tech Group
        </span>
        <span className="text-xs text-zion-slate-light -mt-1">
          Innovation • Technology • Solutions
        </span>
      </div>
    </Link>
  );
}