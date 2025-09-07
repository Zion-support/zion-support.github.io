<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import React from 'react';
import { Link  } from 'react-router-dom';
import { useWhitelabel } from '@/context/WhitelabelContext';
interface LogoProps {
<<<<<<< HEAD
  customLogo?: string,
  customColor?: string
}

export function Logo({ customLogo, customColor }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel($2);
  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = $2;
  // Use the white-label color if available and no specific customColor is provided
  const colorToUse = $2;
=======
  customLogo?: string;
  customColor?: string
}
export function Logo({ customLogo, customColor }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel();
  // Use the white-label logo if available and no specific customLogo is provided

  const logoToUse = customLogo |(isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific customColor is provided
  const colorToUse = customColor |(isWhitelabel ? primaryColor : undefined);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
import React from "react";
import { Link } from "react-router-dom";

import { useWhitelabel } from "@/context/WhitelabelContext";
interface LogoProps {}
  customLogo?: string;

export function Logo(): any ({ customLogo, customColor }: LogoProps) {;
>>>>>>> origin/chore/fix-lint-and-merge
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel();

  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific customColor is provided;
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined);

<<<<<<< HEAD
  if (logoToUse) {  customColor?: string;
}

      </div>
    </Link>  // Use the white - label logo if available and no specific custom_logo is provided;
  const logoToUse = custom_logo || (is_whitelabel ? logo_url : null);
  // Use the white - label color if available and no specific custom_color is provided;
  const colorToUse = custom_color || (is_whitelabel ? primary_color : undefined);

interface LogoProps {
  }
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react";
import { Link } from "react-router-dom";
import { useWhitelabel } from "@/context/WhitelabelContext";
interface LogoProps {
  customLogo?: string;
<<<<<<< HEAD

  customColor?: string;

}

=======
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react";
import { Link } from "react-router-dom";
import { useWhitelabel } from "@/context/WhitelabelContext";
interface LogoProps {
  customLogo?: string;

<<<<<<< HEAD
  customColor?: string;

}

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react',;
import { Link } from 'react-router-dom',;

import { useWhitelabel } from '@/context/WhitelabelContext',;
interface LogoProps {;
  customLogo?: string,;
  customColor?: string;
}

export function Logo({ customLogo, customColor }: LogoProps) {}
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel(),

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
=======
  
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null),
  // Use the white-label color if available and no specific customColor is provided
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined),
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  if (logoToUse) {

    return (

      <Link to="/" className="flex items-center">;

        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />;
      </Link>;

    );
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from './react';
import { Link  } from './react-router-dom';
import { use_whitelabel  } from '@/context / WhitelabelContext';
interface LogoProps {
  custom_logo?: string;
  custom_color?: string;

  

<<<<<<< HEAD
  
>>>>>>> merged-prs-20250907-203621
  if (logoToUse) {
    return (
      <Link to="/" className="flex items-center">
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />
      </Link>
    )
  }
<<<<<<< HEAD
  return (
    <Link to="/" className="flex items-center">
      <div className="text-2xl font-bold" style={colorToUse ? { color: colorToUse} : {}}>
        {isWhitelabel ? brandName : 'Zion'}<span className="text-zion-cyan">AI</span>
      </div>
    </Link>
  )
}
=======
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <Link to="/" className="flex items-center">
      <div className="text-2xl font-bold" style={colorToUse ? { color: colorToUse } : {}}>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        {isWhitelabel ? brandName : 'Zion'}<span className="text-zion-cyan">AI</span>

      </div>
    </Link>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  )
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  )

  return (

    <Link to="/" className="flex items-center">;
      <div"
        className="text-2xl font-bold"
        style={colorToUse ? { color: colorToUse } : {}}>;"
        {isWhitelabel ? brandName : "Zion"}"
        <span className="text-zion-cyan">AI</span>;
    <Link to=\"/\" className=\"flex items-center\" />;
      <div;
className=\"text-2xl font-bold\"
        style={colorToUse ? { color: colorToUse } : {}} />;
        {isWhitelabel ? brandName : \"Zion\"}
        <span className=\"text-zion-cyan\" />AI</span>;
      </div>;
    </Link>;
  );

import React from './react';
import { Link  } from './react-router-dom';

import { use_whitelabel  } from '@/context / WhitelabelContext';
interface LogoProps {}
>>>>>>> origin/chore/fix-lint-and-merge
  custom_logo?: string;
  custom_color?: string;

  return (

    <Link to="/" className="flex items-center">
      <div className="text-2xl font-bold" style={colorToUse ? { color: colorToUse } : {}}>

        {isWhitelabel ? brandName : 'Zion'}<span className="text-zion-cyan">AI</span>
      </div>

}

}
export /**
 * Logo - Function description

 */
function Logo() {}
  const { is_whitelabel, logo_url, brand_name, primary_color } = use_whitelabel ();
;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Use the white - label logo if available and no specific custom_logo is provided;

      </div>;
    </Link>);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

}

import React from 'react',;
    </Link>;
  );
import React from './react';
import { Link  } from './react-router-dom';
import { use_whitelabel  } from '@/context / WhitelabelContext';
interface LogoProps {}
  custom_logo?: string;}
  custom_color?: string;}
}
<<<<<<< HEAD

=======
import React from \"React\";
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
}

import React from 'react',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Link } from 'react-router-dom',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
;
interface LogoProps {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  customLogo?:string,;}
  customColor?:string,;}
}
;
export function Logo({ customLogo, customColor } LogoProps) {;}
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel(),;
  ;
>>>>>>> origin/chore/fix-lint-and-merge
  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl :null),
  // Use the white-label color if available and no specific customColor is provided;
<<<<<<< HEAD

=======
  const colorToUse = customColor || (isWhitelabel ? primaryColor :undefined),;
  ;
  if (logoToUse) {;
    return (;}
      <Link to=\"/\" className=\"flex items-center\" />;}
        <img src={logoToUse} alt={`${brandName} Logo`} className=\"h-8\" />;
>>>>>>> origin/chore/fix-lint-and-merge
      </Link>;
    )}
  return (;
<<<<<<< HEAD

}
  );
=======
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <Link to="/" className="flex items-center">;
      <div className="text-2xl font-bold" style={colorToUse ? { color:colorToUse } {}}>;
        {isWhitelabel ? brandName :'Zion'}<span className="text-zion-cyan">AI</span>;
      </div>;
    </Link>;
  ),;}
 </Link>) 
}return (</div> </Link>) 
<<<<<<< HEAD
});
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
});
>>>>>>> origin/chore/fix-lint-and-merge
=======
}
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  )
}
  )
}
<<<<<<< HEAD

=======
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
