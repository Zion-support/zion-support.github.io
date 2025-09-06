<<<<<<< HEAD

import React from 'react',
import Link from 'next/link';
import { useWhitelabel } from '@/context/WhitelabelContext';
interface LogoProps {
  customLogo?: string
export function Logo({ customLogo }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel();
  // Use the white-label logo if available and no specific customLogo is provided
<<<<<<< HEAD
  const logoToUse = null;
=======
  const logoToUse = customLogo |(isWhitelabel ? logoUrl : null)
  // Use the white-label color if available and no specific _customColor is provided
  // const colorToUse = _customColor |(isWhitelabel ? primaryColor : undefined)
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  if (logoToUse) {
    return (
      <Link href="/" className="flex items-center">
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" width={32} height={32} />
      </Link>
    )
  }
  return (
    <Link href="/" className="flex items-center">
      <img src="/logos/zion-logo.png" alt="Zion Logo" className="h-8" width={32} height={32} />
    </Link>
  )
=======
import React from 'react';
import Link from 'next/link';
import { useWhitelabel } from '@/context/WhitelabelContext';

interface LogoProps {
  customLogo?: string;
}

export function Logo({ customLogo }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel();

  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific _customColor is provided
  // const colorToUse = _customColor || (isWhitelabel ? primaryColor : undefined);

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
        alt='Zion Logo'
        className='h-8'
        width={32}
        height={32}
      />
    </Link>
<<<<<<< HEAD
  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
