<<<<<<< HEAD
import { Link } from 'react-router-dom';

interface LogoProps {
  customLogo?: string;
  customColor?: string;
}

export function Logo({ customLogo, customColor }: LogoProps) {
<<<<<<< HEAD
  const logoColor = customColor || '#3b82f6'; // Default blue color
  
  return (
<<<<<<< HEAD
    <Link to="/" className="flex items-center space-x-2">
      <div 
        className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-lg"
        style={{ backgroundColor: logoColor }}
      >
        Z
=======
    <Link to="/" className="flex items-center">
      <div className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent" style={colorToUse ? { color: colorToUse } : {}}>
        {isWhitelabel ? brandName : 'ZION'} <span className="text-zion-cyan">TECH</span>
>>>>>>> origin/cursor/website-audit-and-enhancement-f8cc
      </div>
      <span className="text-xl font-bold text-white">Zion Tech Group</span>
=======
  const logoColor = customColor || 'from-zion-cyan via-zion-purple-light to-zion-purple';
  
  return (
    <Link to="/" className="flex items-center space-x-2">
      {customLogo ? (
        <img 
          src={customLogo} 
          alt="Logo" 
          className="h-8 w-auto"
        />
      ) : (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">Z</span>
          </div>
          <span className={`text-xl font-bold bg-gradient-to-r ${logoColor} bg-clip-text text-transparent`}>
            ZION
          </span>
        </div>
      )}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
    </Link>
=======
import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="w-8 h-8 bg-gradient-to-br from-zion-blue to-zion-purple rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">Z</span>
      </div>
      <span className="text-xl font-bold text-zion-slate-light">Zion</span>
    </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
  );
}