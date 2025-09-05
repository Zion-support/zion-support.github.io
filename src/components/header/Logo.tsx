
<<<<<<< HEAD
import React from 'react',;
import Link from 'next/link',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
;
interface LogoProps {;
  customLogo?:string,;
  ;
}
;
export function Logo({ customLogo } LogoProps) {;
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel(),;
  ;
  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl :null),;
  // Use the white-label color if available and no specific _customColor is provided;
  // const colorToUse = _customColor || (isWhitelabel ? primaryColor :undefined),;
  ;
  if (logoToUse) {;
    return (;
      <Link href="/" className="flex items-center">;
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" width={32} height={32} />;
      </Link>;
    ),;
  }
  ;
  return (;
    <Link href="/" className="flex items-center">;
      <img src="/logos/zion-logo.png" alt="Zion Logo" className="h-8" width={32} height={32} />;
    </Link>;
  ),;
=======
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
        <img src={logoToUse} alt={`${brandName} Logo`} className=&quot;h-8&quot; width={32} height={32} />      </Link>
    )
  }
  
  return (
    <Link href=&quot;/&quot; className=&quot;flex items-center&quot;>
      <img src=&quot;/logos/zion-logo.png&quot; alt=&quot;Zion Logo&quot; className=&quot;h-8&quot; width={32} height={32} />    </Link>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
