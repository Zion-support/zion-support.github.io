
<<<<<<< HEAD
import React from 'react',
import Link from 'next/link',
import { useWhitelabel } from '@/context/WhitelabelContext',
interface LogoProps {
  customLogo?: string
  
}

export function Logo({ customLogo }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel(),
  
  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null),
  // Use the white-label color if available and no specific _customColor is provided
  // const colorToUse = _customColor || (isWhitelabel ? primaryColor : undefined),
  
  if (logoToUse) {
    return (
      <Link href=&quot;/&quot; className=&quot;flex items-center&quot;>
        <img src={logoToUse} alt={`${brandName} Logo`} className=&quot;h-8&quot; width={32} height={32} />
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </Link>
    )
  }
  
  return (
<<<<<<< HEAD
    <Link href=&quot;/&quot; className=&quot;flex items-center&quot;>
      <img src=&quot;/logos/zion-logo.png&quot; alt=&quot;Zion Logo&quot; className=&quot;h-8&quot; width={32} height={32} />
=======
    <Link href="/" className="flex items-center">
      <img src="/logos/zion-logo.png" alt="Zion Logo" className="h-8" width={_32} height={_32} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </Link>
  )
}
