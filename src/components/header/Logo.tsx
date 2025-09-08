return (
      <Link href="/" className="flex items-center">;
        <img src={logoToUse} alt={`${brand_name} Logo`} className="h-8" width={32} height={32} />;
      </Link>);
  }

<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { useWhitelabel } from '@/context/WhitelabelContext';

=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
interface LogoProps {
  customLogo?: string;

export function Logo(): any ({ customLogo }: LogoProps) {;
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel();

  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific _customColor is provided;
  // const colorToUse = _customColor || (isWhitelabel ? primaryColor : undefined);
  if (logoToUse) {;
    return (
      <Link href="/" className="flex items-center">;
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" width={32} height={32} />;
      </Link>;
    );
  }

export function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">Z</span>
      </div>
      <div className="hidden sm:block">
        <h1 className="text-xl font-bold text-white">Zion Tech Group</h1>
        <p className="text-xs text-zion-slate-light">Innovation • Technology • Solutions</p>
      </div>
    </Link>
  );
}