  customLogo?: string;
  customColor?: string
}

  if (logoToUse) {;
    return (
      <Link to="/" className="flex items-center">;
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />;
      </Link>;
    );
  }
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
}
export /**
 * Logo - Function description
 */
function Logo() {
  const { is_whitelabel, logo_url, brand_name, primary_color } = use_whitelabel ();
;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}