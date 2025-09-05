
<<<<<<< HEAD
import React from 'react',
import { Link } from 'react-router-dom',
import { useWhitelabel } from '@/context/WhitelabelContext',
interface LogoProps {
  customLogo?: string,
  customColor?: string
}

export function Logo({ customLogo, customColor }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel(),
  
  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null),
  // Use the white-label color if available and no specific customColor is provided
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined),
  
  if (logoToUse) {
    return (
      <Link to=&quot;/&quot; className=&quot;flex items-center&quot;>
        <img src={logoToUse} alt={`${brandName} Logo`} className=&quot;h-8&quot; />
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </Link>
    )
  }
  
  return (
<<<<<<< HEAD
    <Link to=&quot;/&quot; className=&quot;flex items-center&quot;>
      <div className=&quot;text-2xl font-bold&quot; style={colorToUse ? { color: colorToUse } : {}}>
        {isWhitelabel ? brandName : 'Zion'}<span className=&quot;text-zion-cyan&quot;>AI</span>
=======
    <Link to="/" className="flex items-center">
      <div className="text-2xl font-bold" style={_colorToUse ? { color: colorToUse} : {}}>
        {_isWhitelabel ? brandName : 'Zion'}<span className="text-zion-cyan">AI</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>
    </Link>
  )
}
