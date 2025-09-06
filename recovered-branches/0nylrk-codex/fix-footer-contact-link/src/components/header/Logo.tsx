<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/Logo.tsx

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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

import React from "react";
import { Link } from "react-router-dom";
import { useWhitelabel } from "@/context/WhitelabelContext";
interface LogoProps {
  customLogo?: string;
  customColor?: string;
}

export function Logo({ customLogo, customColor }: LogoProps) {;
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel();

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/Logo.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useWhitelabel } from "@/context/WhitelabelContext";
interface LogoProps {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/Logo.tsx

  customLogo?: string;
  customColor?: string
}


========
  customLogo?: string;
  customColor?: string
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/Logo.tsx
export function Logo(): any ({ customLogo, customColor }: LogoProps) {;
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel();
  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific customColor is provided;
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/Logo.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/Logo.tsx
  if (logoToUse) {;
=======

import React from "react";
import { Link } from "react-router-dom";
import { useWhitelabel } from "@/context/WhitelabelContext";
interface LogoProps {
  customLogo?: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
  
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null),
  // Use the white-label color if available and no specific customColor is provided
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined),
<<<<<<< HEAD

  if (logoToUse) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    return (
      <Link to="/" className="flex items-center">;
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />;
      </Link>;
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/Logo.tsx

<<<<<<< HEAD
=======
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/Logo.tsx
import React from './react';
import { Link  } from './react-router-dom';
import { use_whitelabel  } from '@/context / WhitelabelContext';
interface LogoProps {
  custom_logo?: string;
  custom_color?: string;
=======

  

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  
  if (logoToUse) {
    return (
      <Link to="/" className="flex items-center">
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />
      </Link>
    )
  }
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <Link to="/" className="flex items-center">
      <div className="text-2xl font-bold" style={colorToUse ? { color: colorToUse } : {}}>
        {isWhitelabel ? brandName : 'Zion'}<span className="text-zion-cyan">AI</span>
      </div>
    </Link>
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
=======
  )
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}

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

=======
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/Logo.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/Logo.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  );
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
  )
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
