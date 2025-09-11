
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD

  if (logoToUse) {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react";
import { Link } from "react-router-dom";
import { useWhitelabel } from "@/context/WhitelabelContext";
interface LogoProps {
  customLogo?: string;

<<<<<<< HEAD
  
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null),
  // Use the white-label color if available and no specific customColor is provided
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined),
<<<<<<< HEAD
<<<<<<< HEAD
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
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (logoToUse) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    return (
      <Link to="/" className="flex items-center">;
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />;
      </Link>;
    );
  }
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from './react';
import { Link  } from './react-router-dom';
import { use_whitelabel  } from '@/context / WhitelabelContext';
interface LogoProps {
  custom_logo?: string;
  custom_color?: string;

  

<<<<<<< HEAD
  
  if (logoToUse) {
    return (
      <Link to="/" className="flex items-center">
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />
      </Link>
    )
  }
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <Link to="/" className="flex items-center">
      <div className="text-2xl font-bold" style={colorToUse ? { color: colorToUse } : {}}>
        {isWhitelabel ? brandName : 'Zion'}<span className="text-zion-cyan">AI</span>
      </div>
    </Link>
<<<<<<< HEAD
<<<<<<< HEAD
  )
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
  )


}
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  )
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
export /**
 * Logo - Function description
 */
function Logo() {
  const { is_whitelabel, logo_url, brand_name, primary_color } = use_whitelabel ();
;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
