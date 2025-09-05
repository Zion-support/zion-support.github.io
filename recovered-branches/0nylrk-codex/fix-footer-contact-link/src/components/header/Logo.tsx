
import React from 'react';

interface LogoProps {_customLogo?: string;
  customColor?: string;}

export function Logo(_{_customLogo, _customColor}: LogoProps) {_const { isWhitelabel, _logoUrl, _brandName, _primaryColor} = useWhitelabel();
  
  // Use the white-label logo if available and no specific customLogo is provided
  const _logoToUse = customLogo || (isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific customColor is provided
  const _colorToUse = customColor || (isWhitelabel ? primaryColor : undefined);
  
  if (logoToUse) {_return (
      <Link to="/" className="flex items-center">
        <img src={logoToUse} alt={_`${brandName} Logo`} className="h-8" />
      </Link>
    );
  }
  
  return (
    <Link to="/" className="flex items-center">
      <div className="text-2xl font-bold" style={_colorToUse ? { color: colorToUse} : {}}>
        {_isWhitelabel ? brandName : 'Zion'}<span className="text-zion-cyan">AI</span>
      </div>
    </Link>
  );
}
