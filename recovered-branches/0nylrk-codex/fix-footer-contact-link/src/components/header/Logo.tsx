
import React from "react";
import { Link } from "react-router-dom";
import { useWhitelabel } from "@/context/WhitelabelContext";
interface LogoProps {;
  }
  customLogo?: string;
  customColor?: string
}
import React from 'react';
import { Link  } from 'react-router-dom';
import { useWhitelabel } from '@/context/WhitelabelContext';
interface LogoProps {
  customLogo?: string,
  customColor?: string
}

export function Logo(): any ({ customLogo, customColor }: LogoProps) {;
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel();

  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific customColor is provided;
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined);

  if (logoToUse) {;  customColor?: string;
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
      return (
      <Link to="/" className="flex items-center">;

        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />;
      </Link>;

    );
  }

=======  return (
    <Link to="/" className="flex items-center">;
      <div
        className="text-2xl font-bold"
        style={colorToUse ? { color: colorToUse } : {}}>;
        {isWhitelabel ? brandName : "Zion"}
        <span className="text-zion-cyan">AI</span>;
      </div>;
    </Link>;
  );
    <Link to="/" className="flex items-center">
      <div className="text-2xl font-bold" style={colorToUse ? { color: colorToUse } : {}}>
        {isWhitelabel ? brandName : 'Zion'}<span className="text-zion-cyan">AI</span>

      </div>
    </Link>  // Use the white - label logo if available and no specific custom_logo is provided;
  const logoToUse = custom_logo || (is_whitelabel ? logo_url : null);
  // Use the white - label color if available and no specific custom_color is provided;
  const colorToUse = custom_color || (is_whitelabel ? primary_color : undefined);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <Link to="/" className="flex items-center">;
        <img src={logoToUse} alt={`${brand_name} Logo`} className="h-8" />;
      </Link>);
  }
  return (
    <Link to="/" className="flex items-center">;
      <div;
        className="text - 2xl font-bold";
        style={colorToUse ? { color: colorToUse } : {}}
      >;
        {is_whitelabel ? brand_name : "Zion"}
        <span className="text - zion-cyan">AI</span>;
      </div>;
    </Link>;
  );
import React from './react';
import { Link  } from './react-router-dom';
import { use_whitelabel  } from '@/context / WhitelabelContext';
interface LogoProps {
  custom_logo?: string;
  custom_color?: string;}
}

import React from 'react',;
    </Link>;
  );
import React from './react';'
import { Link  } from './react-router-dom';'
import { use_whitelabel  } from '@/context / WhitelabelContext';'
interface LogoProps {
  }
  custom_logo?: string;
  custom_color?: string;}
}
import React from "React";"
import { Link } from 'react-router-dom',;'
import { useWhitelabel } from '@/context/WhitelabelContext',;'
;
interface LogoProps {;
  }
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
  const logoToUse = customLogo || (isWhitelabel ? logoUrl :null),
  // Use the white-label color if available and no specific customColor is provided;

      </Link>;
    )}
  return (;

}
  );
  customLogo?:string,;
  customColor?:string,;
}
;
export function Logo() {;
  }
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel(),;
  ;
  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl :null),;
  // Use the white-label color if available and no specific customColor is provided;
  const colorToUse = customColor || (isWhitelabel ? primaryColor :undefined),;
  ;
  if (logoToUse) {;
    }
    return (;
      <Link to="/" className="flex items-center">;"
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />;"
      </Link>;
    ),;
  }
  ;
  return (;
    <Link to="/" className="flex items-center">;"
      <div className="text-2xl font-bold" style={colorToUse ? { "color":colorToUse } {}>;"
        {isWhitelabel ? brandName :'Zion'}<span className="text-zion-cyan">AI</span>;"
      </div>;
    </Link>;
  ),;}
 </Link>)
}return (</div> </Link>)
}
  );
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
});
  )
}
  )
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df