
import React from "react";
import { Link } from "react-router-dom";

import React from "react";"
import { Link } from "react-router-dom";"
import { useWhitelabel } from "@/context/WhitelabelContext";
interface LogoProps {}
  customLogo?: string;

export function Logo(): any ({ customLogo, customColor }: LogoProps) {;
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel();

  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific customColor is provided;
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined);


  if (logoToUse) {;

  if (logoToUse) {;

import React from "react";
import { Link } from "react-router-dom";
import { useWhitelabel } from "@/context/WhitelabelContext";
interface LogoProps {
  customLogo?: string;
  customColor?: string;
}

import React from 'react',;
import { Link } from 'react-router-dom',;
  customColor?: string;
}

import React from 'react',;'
import { Link } from 'react-router-dom',;'
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
  if (logoToUse) {;  customColor?: string;

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
;
  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null),
  // Use the white-label color if available and no specific customColor is provided;
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined),

  if (logoToUse) {
    return (
      return (
      return (

  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null),
  // Use the white-label color if available and no specific customColor is provided
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined),

  if (logoToUse) {
  if (logoToUse) {;
    return (
      <Link to="/" className="flex items-center">;

    return ("
      <Link to="/" className="flex items-center">;"
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />;
      </Link>;
    );
  }
{isWhitelabel ? brandName : 'Zion'}<span className="text-zion-cyan">AI</span>
      </div>
    </Link>
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
  custom_logo?: string;
  custom_color?: string;

  return (
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
    <Link to="/" className="flex items-center">
      <div className="text-2xl font-bold" style={colorToUse ? { color: colorToUse } : {}}>
  return ("
    <Link to="/" className="flex items-center">"
      <div className="text-2xl font-bold" style={colorToUse ? { color: colorToUse } : {}}>'"
        {isWhitelabel ? brandName : 'Zion'}<span className="text-zion-cyan">AI</span>
      </div>
    </Link>
  );
  )

}
)
}
export /**
 * Logo - Function description
 */
function Logo() {}
  const { is_whitelabel, logo_url, brand_name, primary_color } = use_whitelabel ();
;
  // Use the white - label logo if available and no specific custom_logo is provided;
    </Link>  // Use the white - label logo if available and no specific custom_logo is provided;
    </Link>  // Use the white - label logo if available and no specific custom_logo is provided;
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
        <span className="text - zion-cyan">AI</span>;
      </div>;
    </Link>);
}
}
    </Link>;
  );
import React from './react';
import { Link  } from './react-router-dom';
import { use_whitelabel  } from '@/context / WhitelabelContext';
interface LogoProps {
  custom_logo?: string;
  custom_color?: string;}
        <span className="text - zion - cyan">AI</span>;
       />;
        {is_whitelabel ? brand_name : \"Zion\"}
        <span className=\"text - zion-cyan\" />AI</span>;
      </div>;
    </Link>);
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

'"`
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
