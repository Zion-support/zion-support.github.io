
import React from 'react';
import { Link  } from 'react-router-dom';
import { useWhitelabel } from '@/context/WhitelabelContext';
interface LogoProps {
  customLogo?: string;
  customColor?: string
}
export function Logo({ customLogo, customColor }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel();
  // Use the white-label logo if available and no specific customLogo is provided
<<<<<<< HEAD
  const logoToUse = null;
=======
  const logoToUse = customLogo |(isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific customColor is provided
  const colorToUse = customColor |(isWhitelabel ? primaryColor : undefined);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  if (logoToUse) {
    return (
      <Link to="/" className="flex items-center">
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />
      </Link>
    );
  }
  return (
    <Link to="/" className="flex items-center">
      <div
        className="text-2xl font-bold"
        style={colorToUse ? { color: colorToUse } : {}}
      >
        {isWhitelabel ? brandName : "Zion"}
        <span className="text-zion-cyan">AI</span>
      </div>
    </Link>
  );
}