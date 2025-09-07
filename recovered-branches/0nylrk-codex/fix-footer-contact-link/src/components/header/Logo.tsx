
import React from "react";""
import { Link } from "react-router-dom";""
import { useWhitelabel } from "@/context/WhitelabelContext";"
interface LogoProps {;

  customLogo?: string;
  customColor?: string;
}


export function Logo(): any ({ customLogo, customColor }: LogoProps) {;
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel();

  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null);
  // Use the white-label color if available and no specific customColor is provided;
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined);


  if (logoToUse) {;
"
import React from "react";""
import { Link } from "react-router-dom";""
import { useWhitelabel } from "@/context/WhitelabelContext";"
interface LogoProps {
  // TODO: Implement
}
  customLogo?: string;

  customColor?: string;
}
"
import React from 'react',;''
import { Link } from 'react-router-dom',;''
import { useWhitelabel } from '@/context/WhitelabelContext',;'
interface LogoProps {;
  customLogo?: string,;
  customColor?: string;
}

export function Logo({ customLogo, customColor }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel(),
  
  // Use the white-label logo if available and no specific customLogo is provided;
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null),
  // Use the white-label color if available and no specific customColor is provided;
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined),

  if (logoToUse) {
  if (logoToUse) {;
    return ('
      <Link to="/" className="flex items-center">;"
</Link>"
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />;"
</img>
      </Link>;"
    <Link to="/" className="flex items-center">"
</Link>"
      <div className="text-2xl font-bold" style={colorToUse ? { color: colorToUse } : {}}>"
</div>"
        {isWhitelabel ? brandName : 'Zion'}<span className="text-zion-cyan">AI</span>"
      </div>
    </Link>"
    <Link to="/" className="flex items-center">;"
</Link>
      <div;"
        className="text-2xl font-bold""
        style={colorToUse ? { color: colorToUse } : {}}>;
</div>"
        <span className="text-zion-cyan">AI</span>;"
      </div>;
    </Link>;"
    <Link to="/" className="flex items-center">"
</Link>"
      <div className="text-2xl font-bold" style={colorToUse ? { color: colorToUse } : {}}>"
</div>"
        {isWhitelabel ? brandName : 'Zion'}<span className="text-zion-cyan">AI</span>"
      </div>
    </Link>"
      <Link to="/" className="flex items - center">;"
</Link>"
        <img src={logoToUse} alt={`${brand_name} Logo`} className="h - 8" />;"
</img>)
      </Link>);"
    <Link to="/" className="flex items - center">;"
</Link>
      <div;"
        className="text - 2xl font - bold";"
        style={colorToUse ? { color: colorToUse } : {}}
      >;
</div>"
        <span className="text - zion - cyan">AI</span>;"
      </div>;
    </Link>);"
      <Link to="/" className="flex items-center">;"
</Link>"
        <img src={logoToUse} alt={`${brandName} Logo`} className="h-8" />;"
</img>
      </Link>;"
    <Link to="/" className="flex items-center">;"
</Link>"
      <div className="text-2xl font-bold" style={colorToUse ? { color:colorToUse } {}}>;"
</div>"
        {isWhitelabel ? brandName :'Zion'}<span className="text-zion-cyan">AI</span>;"
      </div>;
    </Link>;
 </Link>) 
}return (</div> </Link>) "