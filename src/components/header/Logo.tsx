<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import React from 'react';
import Link from 'next/link';
import { useWhitelabel } from '@/context/WhitelabelContext';

interface LogoProps {
  customLogo?: string;

export function Logo({ customLogo }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel();
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======

import React from 'react';
import Link from 'next/link';
import { useWhitelabel } from '@/context/WhitelabelContext';
interface LogoProps {
  customLogo?: string
  
}


export function Logo({ customLogo }: LogoProps) { const { isWhitelabel, logoUrl, brandName  } = useWhitelabel(),

  
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific _customColor is provided
  // const colorToUse = _customColor || (isWhitelabel ? primaryColor : undefined);
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
  
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  if (logoToUse) {
    return (
      <Link href="/" className="flex items-center">
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" width={32} height={32} />
      </Link>
    );
  }
  
  return (
    <Link href="/" className="flex items-center">
      <img src="/logos/zion-logo.png" alt="Zion Logo" className="h-8" width={32} height={32} />
    </Link>
  );
<<<<<<< HEAD
=======
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

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
    );
  }

  return (
    <Link href='/' className='flex items-center'>
      <img
        src='/logos/zion-logo.png'
        alt='Zion Logo'
        className='h-8'
        width={32}
        height={32}
      />
    </Link>
<<<<<<< HEAD
  );
=======
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
