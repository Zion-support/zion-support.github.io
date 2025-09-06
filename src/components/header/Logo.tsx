<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/header/Logo.tsx

=======

import React from 'react',
import Link from 'next/link';
import { useWhitelabel } from '@/context/WhitelabelContext';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Link from 'next/link'
import { useWhitelabel } from '@/context/WhitelabelContext'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface LogoProps {
  customLogo?: string
export function Logo({ customLogo }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel();
<<<<<<< HEAD
========
import React from 'react';
import Link from 'next/link';
import { useWhitelabel } from '@/context/WhitelabelContext';
interface LogoProps {
  customLogo?: string
}
export function Logo({ customLogo }: LogoProps) { const { isWhitelabel, logoUrl, brandName  } = useWhitelabel(),
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/header/Logo.tsx
  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo |(isWhitelabel ? logoUrl : null)
  // Use the white-label color if available and no specific _customColor is provided
<<<<<<<< HEAD:src/components/header/Logo.tsx
=======
  // const colorToUse = _customColor |(isWhitelabel ? primaryColor : undefined)

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  // Use the white-label logo if available and no specific customLogo is provided

  const logoToUse = customLogo |(isWhitelabel ? logoUrl : null)
  // Use the white-label color if available and no specific _customColor is provided
<<<<<<< HEAD
  // const colorToUse = _customColor |(isWhitelabel ? primaryColor : undefined)

=======
=======
  // const colorToUse = _customColor || (isWhitelabel ? primaryColor : undefined)
=======
import React from 'react';
import Link from 'next/link';
import { useWhitelabel } from '@/context/WhitelabelContext';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

import React from 'react',;
import Link from 'next/link',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
interface LogoProps {;
  customLogo?: string;
}

export function Logo({ customLogo }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel(),
  
  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null),
  // Use the white-label color if available and no specific _customColor is provided
  // const colorToUse = _customColor || (isWhitelabel ? primaryColor : undefined),
<<<<<<< HEAD
<<<<<<< HEAD

  if (logoToUse) {
=======
  
>>>>>>>   if (logoToUse) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/header/Logo.tsx
=======
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (logoToUse) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return (
      <Link href="/" className="flex items-center">
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" width={32} height={32} />
      </Link>
    )
  }
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/header/Logo.tsx
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <Link href="/" className="flex items-center">
      <img src="/logos/zion-logo.png" alt="Zion Logo" className="h-8" width={32} height={32} />
    </Link>
  )
<<<<<<< HEAD
<<<<<<< HEAD

;

=======
  if (logoToUse) {
ursor/fix-website-loading-errors-and-merge-6662
  return (


========
  return (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/header/Logo.tsx
interface LogoProps {;
  customLogo?: string;
export function Logo(): any ({ customLogo }: LogoProps) {;
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel();
<<<<<<<< HEAD:src/components/header/Logo.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/header/Logo.tsx
  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific _customColor is provided;
  // const colorToUse = _customColor || (isWhitelabel ? primaryColor : undefined);
  if (logoToUse) {;
>>>>>>>     return (
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
<<<<<<<< HEAD:src/components/header/Logo.tsx

        />;
      </Link>;
    );

========
        />;
      </Link>;
    );
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/header/Logo.tsx
  }
  return (
    <Link href='/' className='flex items-center'>;
      <img
        src='/logos/zion-logo && logo.png'
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        alt='Zion Logo'
        className='h-8'
        width={32}
        height={32}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/header/Logo.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/header/Logo.tsx
      />;
    </Link>;
  );
}
<<<<<<<< HEAD:src/components/header/Logo.tsx
;
>>>>>>> >>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/header/Logo.tsx
=======
      />;
    </Link>;
  );
};
}
=======
}
<<<<<<< HEAD
=======
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
