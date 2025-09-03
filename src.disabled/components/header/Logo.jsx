import React from;
  'react' import { Link } from;
  'react-router-dom' import { Zap } from;
<<<<<<< HEAD
  'lucide-react'  export function Logo({ customLogo, customColor, className = ';
  ' }) { if (customLogo) { return ( <Link to='/' className={`flex-shrink-0 group ${className}`}>' <img'' src={customLogo} ''; alt='Logo''; className='h-8 w-auto' / / / / / /> </Link>' )}; const logoColor = customColor || '#3b82f6'';``
=======
  'lucide-react'  export function Logo({ customLogo, customColor, className =  }) { if (customLogo) { return ( <Link to='/' className={`flex-shrink-0 group ${className}`}>' <img'' src={customLogo} ' alt='Logo' className='h-8 w-auto' / / / / / /> </Link>' )'}'; const logoColor = customColor || '#3b82f6'`
>>>>>>> main
