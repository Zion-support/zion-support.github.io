
import React from 'react',
import Link from 'next/link';
import { useWhitelabel } from '@/context/WhitelabelContext';
interface LogoProps {
  customLogo?: string
export function Logo({ customLogo }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel();
  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = null;
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
  )
}
;