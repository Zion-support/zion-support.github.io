  // const colorToUse = _customColor |(isWhitelabel ? primaryColor : undefined)


import React from 'react',;
import Link from 'next/link',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
interface LogoProps {;
  customLogo?: string;
}
  return (
    <Link href="/" className="flex items-center">
      <img src="/logos/zion-logo.png" alt="Zion Logo" className="h-8" width={32} height={32} />
    </Link>
  )
  if (logoToUse) {
ursor/fix-website-loading-errors-and-merge-6662

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

}
