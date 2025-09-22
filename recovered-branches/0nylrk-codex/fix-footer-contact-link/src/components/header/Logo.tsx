
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
=======

import React from "react";"
import { Link } from "react-router-dom";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useWhitelabel } from "@/context/WhitelabelContext";
interface LogoProps {}
  customLogo?: string;

export function Logo(): any ({ customLogo, customColor }: LogoProps) {;
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel();

  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific customColor is provided;
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined);

<<<<<<< HEAD
<<<<<<< HEAD

  if (logoToUse) {;
=======

  if (logoToUse) {;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react";
import { Link } from "react-router-dom";
import { useWhitelabel } from "@/context/WhitelabelContext";
interface LogoProps {
  customLogo?: string;
<<<<<<< HEAD
  customColor?: string;
}

import React from 'react',;
import { Link } from 'react-router-dom',;
=======
  customColor?: string;
}

import React from 'react',;'
import { Link } from 'react-router-dom',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useWhitelabel } from '@/context/WhitelabelContext',;
interface LogoProps {;
  customLogo?: string,;
  customColor?: string;
}

export function Logo({ customLogo, customColor }: LogoProps) {}
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel(),
export function Logo({ customLogo, customColor }: LogoProps) {;
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel();
  customColor?: string;
=======
  if (logoToUse) {;  customColor?: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

  customColor?: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
;
  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null),
  // Use the white-label color if available and no specific customColor is provided;
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined),
<<<<<<< HEAD
<<<<<<< HEAD

  if (logoToUse) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    return (
=======
      return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null),
  // Use the white-label color if available and no specific customColor is provided
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined),

  if (logoToUse) {
  if (logoToUse) {;
    return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <Link to="/" className="flex items-center">;
=======

    return ("
      <Link to="/" className="flex items-center">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />;
      </Link>;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    );
  }
{isWhitelabel ? brandName : 'Zion'}<span className="text-zion-cyan">AI</span>
      </div>
    </Link>
  )

<<<<<<< HEAD
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from './react';
import { Link  } from './react-router-dom';
import { use_whitelabel  } from '@/context / WhitelabelContext';
interface LogoProps {}
  custom_logo?: string;
  custom_color?: string;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React from './react';
import { Link  } from './react-router-dom';
import { use_whitelabel  } from '@/context / WhitelabelContext';
interface LogoProps {
  custom_logo?: string;
  custom_color?: string;

if (logoToUse) {
    return (
      <Link to="/" className="flex items-center">
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />
      </Link>
    )
  }
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <Link to="/" className="flex items-center">
      <div className="text-2xl font-bold" style={colorToUse ? { color: colorToUse } : {}}>
=======
  return ("
    <Link to="/" className="flex items-center">"
      <div className="text-2xl font-bold" style={colorToUse ? { color: colorToUse } : {}}>'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        {isWhitelabel ? brandName : 'Zion'}<span className="text-zion-cyan">AI</span>
      </div>
<<<<<<< HEAD
    </Link>
<<<<<<< HEAD
<<<<<<< HEAD
  );
  )

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
)
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
export /**
 * Logo - Function description
 */
function Logo() {}
  const { is_whitelabel, logo_url, brand_name, primary_color } = use_whitelabel ();
;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Use the white - label logo if available and no specific custom_logo is provided;
=======
    </Link>  // Use the white - label logo if available and no specific custom_logo is provided;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    </Link>  // Use the white - label logo if available and no specific custom_logo is provided;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    </Link>

)

}

  )
}
export /**
 * Logo - Function description
 */
function Logo() {
  const { is_whitelabel, logo_url, brand_name, primary_color } = use_whitelabel ();
;
)
  // Use the white - label logo if available and no specific custom_logo is provided;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const logoToUse = custom_logo || (is_whitelabel ? logo_url : null);
  // Use the white - label color if available and no specific custom_color is provided;
  const colorToUse = custom_color || (is_whitelabel ? primary_color : undefined);
;
  // Check condition;
if ( {) {}
$2;
}
return (
      <Link to=\"/\" className=\"flex items-center\" />;
        <img src={logoToUse} alt={`${brand_name} Logo`} className=\"h-8\" />;
      </Link>);
  }
  return (
    <Link to=\"/\" className=\"flex items-center\" />;
      <div;
        className=\"text - 2xl font-bold\";
        style={colorToUse ? { color: colorToUse } : {}}
>;
        {is_whitelabel ? brand_name : "Zion"}
<<<<<<< HEAD
        <span className="text - zion-cyan">AI</span>;
      </div>;
<<<<<<< HEAD
    </Link>);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
    </Link>;
  );
import React from './react';
import { Link  } from './react-router-dom';
import { use_whitelabel  } from '@/context / WhitelabelContext';
interface LogoProps {
  custom_logo?: string;
  custom_color?: string;}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        <span className="text - zion - cyan">AI</span>;
=======
       />;
        {is_whitelabel ? brand_name : \"Zion\"}
        <span className=\"text - zion-cyan\" />AI</span>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      </div>;
    </Link>);
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
import React from \"React\";
import { Link } from 'react-router-dom',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
;
interface LogoProps {;
  customLogo?:string,;}
  customColor?:string,;}
}
;
export function Logo({ customLogo, customColor } LogoProps) {;}
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel(),;
  ;
  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl :null),;
  // Use the white-label color if available and no specific customColor is provided;
  const colorToUse = customColor || (isWhitelabel ? primaryColor :undefined),;
  ;
  if (logoToUse) {;
    return (;}
      <Link to=\"/\" className=\"flex items-center\" />;}
        <img src={logoToUse} alt={`${brandName} Logo`} className=\"h-8\" />;
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  customLogo?: string,;

export function Logo({ customLogo, customColor }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel(),
    <Link to=\"/\" className=\"flex items-center\" />;
      <div className=\"text-2xl font-bold\" style={colorToUse ? { color:colorToUse } {}} />;
        {isWhitelabel ? brandName :'Zion'}<span className=\"text-zion-cyan\" />AI</span>;

  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null),
  // Use the white-label color if available and no specific customColor is provided;
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined),

  if (logoToUse) {
    return (
      <Link to="/" className="flex items-center">;"
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />;"
</img>
      ;"
    <Link to="/" className="flex items-center">"
      <div className="text-2xl font-bold" style={colorToUse ? { color: colorToUse } : {}}>"
</div>"
        {isWhitelabel ? brandName : 'Zion'}<span className="text-zion-cyan">AI</span>"
      </div>

      <div;"
        className="text-2xl font-bold""
        style={colorToUse ? { color: colorToUse } : {}}>;
        <span className="text-zion-cyan">AI</span>;"
      </div>;
      <Link to="/" className="flex items - center">;"
"`;
        <img src={logoToUse} alt={`${brand_name} Logo`} className="h - 8" />;"
</img>)
      );"

        className="text - 2xl font - bold";"
        style={colorToUse ? { color: colorToUse } : {}}
      >;
        <span className="text - zion - cyan">AI</span>;"
      <div className="text-2xl font-bold" style={colorToUse ? { color:colorToUse } {}}>;"
        {isWhitelabel ? brandName :'Zion'}<span className="text-zion-cyan">AI</span>;"
    ;
 ) 
}return (</div> ) "`;
pr-12325

      </div>;
    </Link>;
 </Link>) 
}return (</div> </Link>) 
}
  );
  )
}
  )
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
