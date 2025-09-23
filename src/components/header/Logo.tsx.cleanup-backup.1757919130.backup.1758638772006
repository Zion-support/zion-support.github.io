
<<<<<<< HEAD
import React from 'react',
import Link from 'next/link',
import { useWhitelabel } from '@/context/WhitelabelContext',

interface LogoProps {
  customLogo?: string,
=======
import React from 'react';
import Link from 'next/link';
import { useWhitelabel } from '@/context/WhitelabelContext';

interface LogoProps {
  customLogo?: string;
>>>>>>> origin/auto/autonomy-17186719616
  
}

export function Logo({ customLogo }: LogoProps) {
<<<<<<< HEAD
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel(),
  
  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null),
  // Use the white-label color if available and no specific _customColor is provided
  // const colorToUse = _customColor || (isWhitelabel ? primaryColor : undefined),
=======
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel();
  
  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific _customColor is provided
  // const colorToUse = _customColor || (isWhitelabel ? primaryColor : undefined);
>>>>>>> origin/auto/autonomy-17186719616
  
  if (logoToUse) {
    return (
      <Link href="/" className="flex items-center">
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" width={32} height={32} />
      </Link>
<<<<<<< HEAD
    ),
=======
    );
>>>>>>> origin/auto/autonomy-17186719616
  }
  
  return (
    <Link href="/" className="flex items-center">
      <img src="/logos/zion-logo.png" alt="Zion Logo" className="h-8" width={32} height={32} />
    </Link>
<<<<<<< HEAD
  ),
}

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

=======
  );
}
>>>>>>> origin/auto/autonomy-17186719616
