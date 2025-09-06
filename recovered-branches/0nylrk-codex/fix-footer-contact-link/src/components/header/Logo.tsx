<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import { useWhitelabel } from "@/context/WhitelabelContext";
interface LogoProps {;

  customLogo?: string;
  customColor?: string
}


export function Logo(): any ({ customLogo, customColor }: LogoProps) {;
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel();

  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific customColor is provided;
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined);


  if (logoToUse) {;
=======
=======
import React from 'react';
import { Link  } from 'react-router-dom';
import { useWhitelabel } from '@/context/WhitelabelContext';
interface LogoProps {
  customLogo?: string;
  customColor?: string
}
export function Logo({ customLogo, customColor }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel();
  // Use the white-label logo if available and no specific customLogo is provided

  const logoToUse = customLogo |(isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific customColor is provided
  const colorToUse = customColor |(isWhitelabel ? primaryColor : undefined);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from "react";
import { Link } from "react-router-dom";
import { useWhitelabel } from "@/context/WhitelabelContext";
interface LogoProps {
  customLogo?: string;
<<<<<<< HEAD
<<<<<<< HEAD

=======
  customColor?: string;
}

export function Logo({ customLogo, customColor }: LogoProps) {;
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel();

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null),
  // Use the white-label color if available and no specific customColor is provided
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined),
<<<<<<< HEAD
<<<<<<< HEAD

  if (logoToUse) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  if (logoToUse) {;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return (
      <Link to="/" className="flex items-center">;
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />;
      </Link>;
    );
  }
  return (
    <Link to="/" className="flex items-center">
      <div className="text-2xl font-bold" style={colorToUse ? { color: colorToUse } : {}}>
        {isWhitelabel ? brandName : 'Zion'}<span className="text-zion-cyan">AI</span>
      </div>
    </Link>
  )

<<<<<<< HEAD
=======
=======
  )


}
  )
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from './react';
import { Link  } from './react-router-dom';
import { use_whitelabel  } from '@/context / WhitelabelContext';
interface LogoProps {
  custom_logo?: string;
  custom_color?: string;
<<<<<<< HEAD

  

<<<<<<< HEAD
=======
  
  if (logoToUse) {
    return (
      <Link to="/" className="flex items-center">
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />
      </Link>
    )
  }
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <Link to="/" className="flex items-center">
      <div className="text-2xl font-bold" style={colorToUse ? { color: colorToUse } : {}}>
        {isWhitelabel ? brandName : 'Zion'}<span className="text-zion-cyan">AI</span>
      </div>
    </Link>
<<<<<<< HEAD

=======
  )


}

  )
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
export /**
 * Logo - Function description
 */
function Logo() {
  const { is_whitelabel, logo_url, brand_name, primary_color } = use_whitelabel ();
;
<<<<<<< HEAD
=======
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  // Use the white - label logo if available and no specific custom_logo is provided;
  const logoToUse = custom_logo || (is_whitelabel ? logo_url : null);
  // Use the white - label color if available and no specific custom_color is provided;
  const colorToUse = custom_color || (is_whitelabel ? primary_color : undefined);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <Link to="/" className="flex items - center">;
        <img src={logoToUse} alt={`${brand_name} Logo`} className="h - 8" />;
      </Link>);
  }
  return (
    <Link to="/" className="flex items - center">;
      <div;
        className="text - 2xl font - bold";
        style={colorToUse ? { color: colorToUse } : {}}
      >;
        {is_whitelabel ? brand_name : "Zion"}
        <span className="text - zion - cyan">AI</span>;
      </div>;
    </Link>);
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
}

import React from 'react',;
import { Link } from 'react-router-dom',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
;
interface LogoProps {;
  customLogo?:string,;
  customColor?:string,;
}
;
export function Logo({ customLogo, customColor } LogoProps) {;
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel(),;
  ;
  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl :null),;
  // Use the white-label color if available and no specific customColor is provided;
  const colorToUse = customColor || (isWhitelabel ? primaryColor :undefined),;
  ;
  if (logoToUse) {;
    return (;
      <Link to="/" className="flex items-center">;
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />;
      </Link>;
    ),;
  }
  ;
  return (;
    <Link to="/" className="flex items-center">;
      <div className="text-2xl font-bold" style={colorToUse ? { color:colorToUse } {}}>;
        {isWhitelabel ? brandName :'Zion'}<span className="text-zion-cyan">AI</span>;
      </div>;
    </Link>;
  ),;}
 </Link>) 
}return (</div> </Link>) 
}
  );
  )
}
  )
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
