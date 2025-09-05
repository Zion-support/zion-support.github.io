
import React from 'react';
import Link from 'next/link';

interface LogoProps {_customLogo?: string;}

export function Logo(_{_customLogo}: LogoProps) {_const { isWhitelabel, _logoUrl, _brandName} = useWhitelabel();
  
  // Use the white-label logo if available and no specific customLogo is provided
  const _logoToUse = customLogo || (isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific _customColor is provided
  // const _colorToUse = _customColor || (isWhitelabel ? primaryColor : undefined);
  
  if (logoToUse) {_return (
      <Link href="/" className="flex items-center">
        <img src={logoToUse} alt={_`${brandName} Logo`} className="h-8" width={_32} height={_32} />
      </Link>
    );
  }
  
  return (
    <Link href="/" className="flex items-center">
      <img src="/logos/zion-logo.png" alt="Zion Logo" className="h-8" width={_32} height={_32} />
    </Link>
  );
}
