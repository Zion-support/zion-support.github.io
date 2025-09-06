

    return (
      <Link href="/" className="flex items - center">;
        <img src={logoToUse} alt={`${brand_name} Logo`} className="h - 8" width={32} height={32} />;
      </Link>);
  }
=======


  if (logoToUse) {
    return (
      <Link href="/" className="flex items-center">
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" width={32} height={32} />
      </Link>
    )
  }

  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

        />;
      </Link>;
    );

  }
  return (
    <Link href='/' className='flex items-center'>;
      <img
        src='/logos/zion-logo && logo.png'
        alt='Zion Logo'
        className='h-8'
        width={32}
        height={32}

      />;
    </Link>;
  );
}

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
=======

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
