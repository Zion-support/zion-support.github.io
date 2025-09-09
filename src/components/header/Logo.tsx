import React from 'react';

interface LogoProps {
  customLogo?: string;
  customColor?: string;
}

export const Logo: React.FC<LogoProps> = ({ customLogo, customColor }) => {
  return (
    <div className="flex items-center">
      {customLogo ? (
        <img 
          src={customLogo} 
          alt="Logo" 
          className="h-8 w-auto"
          style={{ filter: customColor ? `hue-rotate(${customColor})` : undefined }}
        />
      ) : (
        <div 
          className="text-2xl font-bold"
          style={{ color: customColor || '#3B82F6' }}
        >
          Zion
        </div>
      )}
    </div>
  );
};