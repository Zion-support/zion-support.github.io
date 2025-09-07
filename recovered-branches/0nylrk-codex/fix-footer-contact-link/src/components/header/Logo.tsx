<<<<<<< HEAD

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
import React from "react";
import { Link } from "react-router-dom";
import { useWhitelabel } from "@/context/WhitelabelContext";
interface LogoProps {
  customLogo?: string;

  customColor?: string;

}

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

  if (logoToUse) {

    return (

      <Link to="/" className="flex items-center">;

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

  // Use the white - label logo if available and no specific custom_logo is provided;

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
<<<<<<< HEAD

=======
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
    <Link to="/" className="flex items-center">;
      <div className="text-2xl font-bold" style={colorToUse ? { color:colorToUse } {}}>;
        {isWhitelabel ? brandName :'Zion'}<span className="text-zion-cyan">AI</span>;
      </div>;
    </Link>;
  ),;}
 </Link>) 
}return (</div> </Link>) 
});
>>>>>>> origin/chore/fix-lint-and-merge
  )
}
  )
}

