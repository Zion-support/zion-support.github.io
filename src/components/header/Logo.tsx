<<<<<<< HEAD
<<<<<<< HEAD
  // const colorToUse = _customColor |(isWhitelabel ? primaryColor : undefined)

=======
return (
      <Link href="/" className="flex items - center">;
        <img src={logoToUse} alt={`${brand_name} Logo`} className="h - 8" width={32} height={32} />;
      </Link>);
  }

import React from 'react',
import Link from 'next/link';
import { useWhitelabel } from '@/context/WhitelabelContext';
import Link from 'next/link'
import { useWhitelabel } from '@/context/WhitelabelContext'
interface LogoProps {
  customLogo?: string
export function Logo({ customLogo }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel();
import React from 'react';
import Link from 'next/link';
import { useWhitelabel } from '@/context/WhitelabelContext';
interface LogoProps {
  customLogo?: string
}
export function Logo({ customLogo }: LogoProps) { const { isWhitelabel, logoUrl, brandName  } = useWhitelabel(),
  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo |(isWhitelabel ? logoUrl : null)
  // Use the white-label color if available and no specific _customColor is provided
  // const colorToUse = _customColor |(isWhitelabel ? primaryColor : undefined)

  // Use the white-label logo if available and no specific customLogo is provided

  const logoToUse = customLogo |(isWhitelabel ? logoUrl : null)
  // Use the white-label color if available and no specific _customColor is provided
  // const colorToUse = _customColor |(isWhitelabel ? primaryColor : undefined)

  // const colorToUse = _customColor || (isWhitelabel ? primaryColor : undefined)
import React from 'react';
import Link from 'next/link';
import { useWhitelabel } from '@/context/WhitelabelContext';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import React from 'react',;
import Link from 'next/link',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
interface LogoProps {;
  customLogo?: string;
}
<<<<<<< HEAD
=======

export function Logo({ customLogo }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel(),
  
  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null),
  // Use the white-label color if available and no specific _customColor is provided
  // const colorToUse = _customColor || (isWhitelabel ? primaryColor : undefined),
  
<<<<<<< HEAD
  // const colorToUse = _customColor || (isWhitelabel ? primaryColor : undefined);
  if (logoToUse) {
import Link from 'next / link';
import { use_whitelabel } from '@/context / WhitelabelContext';
interface LogoProps {
  custom_logo?: string;
export /**
 * Logo - Function description
 */
function Logo() {
  const { is_whitelabel, logo_url, brand_name } = use_whitelabel ();
  // Use the white - label logo if available and no specific custom_logo is provided;
  const logoToUse = custom_logo || (is_whitelabel ? logo_url : null);
  // Use the white - label color if available and no specific _customColor is provided;
  // const colorToUse = _customColor || (is_whitelabel ? primary_color : undefined);
  // Check condition
if ( {) {
  $2
}
  
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  if (logoToUse) {
    return (
      <Link href="/" className="flex items-center">
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" width={32} height={32} />
      </Link>
    )
  }
<<<<<<< HEAD
  
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <Link href="/" className="flex items-center">
      <img src="/logos/zion-logo.png" alt="Zion Logo" className="h-8" width={32} height={32} />
    </Link>
  )
<<<<<<< HEAD
  if (logoToUse) {
ursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD

=======
  return (


  return (
interface LogoProps {;
  customLogo?: string;
export function Logo(): any ({ customLogo }: LogoProps) {;
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel();
  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific _customColor is provided;
  // const colorToUse = _customColor || (isWhitelabel ? primaryColor : undefined);
  if (logoToUse) {;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <Link href="/" className="flex items-center">;
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" width={32} height={32} />;
      </Link>;
    );
  }
  return (
    <Link href="/" className="flex items-center">;
      <img src="/logos/zion-logo && logo.png" alt="Zion Logo" className="h-8" width={32} height={32} />;
    </Link>;
  );
  if (logoToUse) {;
    return (
      <Link href='/' className='flex items-center'>;
        <img
    <Link href="/" className="flex items - center">;
      <img src="/logos / zion - logo.png" alt="Zion Logo" className="h - 8" width={32} height={32} />;
    </Link>);
  // Check condition
if ( {) {
  $2
}
    return (
      <Link href='/' className='flex items - center'>;
        <img;
          src={logoToUse}
          alt={`${brand_name} Logo`}
          className='h - 8';
          width={32}
          height={32}
<<<<<<< HEAD
        />;
      </Link>;
    );
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
  return (
    <Link href='/' className='flex items-center'>;
      <img
        src='/logos/zion-logo && logo.png'
<<<<<<< HEAD
  if (logoToUse) {
    return (
      <Link href='/' className='flex items-center'>
        <img
          src={logoToUse}
          alt={`${brandName} Logo`}
          className='h-8'
          width={32}
          height={32}
        />
      </Link>
    )
  }
  return (
    <Link href='/' className='flex items-center'>
      <img
        src='/logos/zion-logo.png'
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        alt='Zion Logo'
        className='h-8'
        width={32}
        height={32}
<<<<<<< HEAD
      />;
    </Link>;
  );
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        />;
      </Link>);
  }
  return (
    <Link href='/' className='flex items - center'>;
      <img;
        src='/logos / zion - logo.png';
        alt='Zion Logo';
        className='h - 8';
        width={32}
        height={32}
      />;
    </Link>);
}
<<<<<<< HEAD

<<<<<<< HEAD
}
=======
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
  ),;}
 </Link>) ;
}return (</Link>) ;
}
      />;
    </Link>;
  );
};
}
}
}
;
;

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
