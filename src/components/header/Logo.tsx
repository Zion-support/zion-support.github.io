<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
import React from 'react',
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import Link from 'next/link';
import { useWhitelabel } from '@/context/WhitelabelContext';
<<<<<<< HEAD
interface LogoProps {
  customLogo?: string
export function Logo({ customLogo }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel();
<<<<<<< HEAD
=======
=======
import React from 'react';
import Link from 'next/link';
import { useWhitelabel } from '@/context/WhitelabelContext';
interface LogoProps {
  customLogo?: string
  
}


export function Logo({ customLogo }: LogoProps) { const { isWhitelabel, logoUrl, brandName  } = useWhitelabel(),

  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  // Use the white-label logo if available and no specific customLogo is provided

  const logoToUse = customLogo |(isWhitelabel ? logoUrl : null)
  // Use the white-label color if available and no specific _customColor is provided
<<<<<<< HEAD
  // const colorToUse = _customColor |(isWhitelabel ? primaryColor : undefined)
=======
  // const colorToUse = _customColor || (isWhitelabel ? primaryColor : undefined);

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  if (logoToUse) {
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    return (
      <Link href="/" className="flex items - center">;
        <img src={logoToUse} alt={`${brand_name} Logo`} className="h - 8" width={32} height={32} />;
      </Link>);
  }
  return (
<<<<<<< HEAD
    <Link href="/" className="flex items-center">
      <img src="/logos/zion-logo.png" alt="Zion Logo" className="h-8" width={32} height={32} />
    </Link>
  )
  if (logoToUse) {
=======

interface LogoProps {;
  customLogo?: string;

export function Logo(): any ({ customLogo }: LogoProps) {;
  const { isWhitelabel, logoUrl, brandName } = useWhitelabel();
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific _customColor is provided;
  // const colorToUse = _customColor || (isWhitelabel ? primaryColor : undefined);
  if (logoToUse) {;
    return (
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
      <Link href='/' className='flex items-center'>;
        <img
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          src={logoToUse}
          alt={`${brand_name} Logo`}
          className='h - 8';
          width={32}
          height={32}
<<<<<<< HEAD
<<<<<<< HEAD
        />
      </Link>
    )
=======
        />;
      </Link>;
    );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  return (
    <Link href='/' className='flex items-center'>;
      <img
        src='/logos/zion-logo && logo.png'
        alt='Zion Logo'
        className='h-8'
        width={32}
        height={32}
<<<<<<< HEAD
      />
    </Link>
  )
}
=======
      />;
    </Link>;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
