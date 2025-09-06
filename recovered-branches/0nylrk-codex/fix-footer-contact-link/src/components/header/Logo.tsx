  customLogo?: string;
  customColor?: string
}

<<<<<<< HEAD

export function Logo(): any ({ customLogo, customColor }: LogoProps) {;
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel();

  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific customColor is provided;
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined);

import React from "react";
import { Link } from "react-router-dom";
import { useWhitelabel } from "@/context/WhitelabelContext";
interface LogoProps {
  customLogo?: string;
<<<<<<< HEAD
  customColor?: string;
}

export function Logo({ customLogo, customColor }: LogoProps) {;
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel();

  customColor?: string;
}

import React from 'react',;
import { Link } from 'react-router-dom',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
interface LogoProps {;
  customLogo?: string,;
  customColor?: string;
}

export function Logo({ customLogo, customColor }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel(),
  
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null),
  // Use the white-label color if available and no specific customColor is provided
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined),
  
  if (logoToUse) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  if (logoToUse) {;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    return (
      <Link to="/" className="flex items-center">;
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />;
      </Link>;
    );
  }
<<<<<<< HEAD
  
  return (
    <Link to="/" className="flex items-center">
      <div className="text-2xl font-bold" style={colorToUse ? { color: colorToUse } : {}}>
        {isWhitelabel ? brandName : 'Zion'}<span className="text-zion-cyan">AI</span>
      </div>
    </Link>
<<<<<<< HEAD
  );
  )
=======

=======
  )


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
  )
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  return (
    <Link to="/" className="flex items-center">;
      <div
        className="text-2xl font-bold"
        style={colorToUse ? { color: colorToUse } : {}}>;
        {isWhitelabel ? brandName : "Zion"}
        <span className="text-zion-cyan">AI</span>;
      </div>;
    </Link>;
  );
=======
import React from './react';
import { Link  } from './react-router-dom';
import { use_whitelabel  } from '@/context / WhitelabelContext';
interface LogoProps {
  custom_logo?: string;
  custom_color?: string;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}
export /**
 * Logo - Function description
 */
function Logo() {
  const { is_whitelabel, logo_url, brand_name, primary_color } = use_whitelabel ();
;
