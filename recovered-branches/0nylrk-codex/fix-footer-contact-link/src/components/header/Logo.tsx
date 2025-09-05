
import React from 'react',
import { Link } from 'react-router-dom',
import { useWhitelabel } from '@/context/WhitelabelContext',
interface LogoProps {
  customLogo?: string,
  customColor?: string
}

export function Logo({ customLogo, customColor }: LogoProps) {
  const { isWhitelabel, logoUrl, brandName, primaryColor } = useWhitelabel(),
  
  // Use the white-label logo if available and no specific customLogo is provided
  const logoToUse = customLogo || (isWhitelabel ? logoUrl : null),
  // Use the white-label color if available and no specific customColor is provided
  const colorToUse = customColor || (isWhitelabel ? primaryColor : undefined),
  
  if (logoToUse) {
    return (
      <Link to=&quot;/&quot; className=&quot;flex items-center&quot;>
        <img src={logoToUse} alt={`${brandName} Logo`} className=&quot;h-8&quot; />      </Link>
    )
  }
  
  return (
    <Link to=&quot;/&quot; className=&quot;flex items-center&quot;>
      <div className=&quot;text-2xl font-bold&quot; style={colorToUse ? { color: colorToUse } : {}}>
        {isWhitelabel ? brandName : 'Zion'}<span className=&quot;text-zion-cyan&quot;>AI</span>      </div>
    </Link>
  )
}
