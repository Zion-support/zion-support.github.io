<<<<<<< HEAD
 import { Link } from 'react-router-dom' export const Logo = () => { return (<Link to='/' className='flex items-center group'>''' <div className='flex items-center space-x-2'>'' {}''' <div className='relative'>''' <div className='w-8 h-8 bg-gradient-to-br from-zion-cyan via-zion-purple-light to-zion-purple rounded-lg flex items-center justify-center group-hover: scale-110 transition-transform duration-200'>''' <span className='text-white font-bold text-sm'>Z</span>'' </div>''' <div className='absolute -top-1 -right-1 w-3 h-3 bg-zion-cyan rounded-full animate-pulse'></div>' </div>'' {}''' <div className='flex flex-col'>''' <div className='text-xl font-bold text-white leading-tight'>'{isWhitelabel ? brandName : 'ZION'}'' </div>''' <div className='text-xs text-zion-cyan font-medium leading-tight'>' TECH GROUP' </div>' </div>'' </div>''' <div className='text-xs lg: text-sm text-gray-300 font-medium'>Group</div>' </Link>)}';'''"'"
=======
<<<<<<< HEAD
 import { Link } from 'react-router-dom' export const Logo = () => { return (<Link to='/' className='flex items-center group'>'' <div className='flex items-center space-x-2'>';' {}'' <div className='relative'>'' <div className='w-8 h-8 bg-gradient-to-br from-zion-cyan via-zion-purple-light to-zion-purple rounded-lg flex items-center justify-center group-hover: scale-110 transition-transform duration-200'>'' <span className='text-white font-bold text-sm'>Z</span>' </div>'' <div className='absolute -top-1 -right-1 w-3 h-3 bg-zion-cyan rounded-full animate-pulse'></div>' </div>';' {}'' <div className='flex flex-col'>'' <div className='text-xl font-bold text-white leading-tight'>'{isWhitelabel ? brandName : 'ZION'}' </div>'' <div className='text-xs text-zion-cyan font-medium leading-tight'>' TECH GROUP' </div>' </div>' </div>'' <div className='text-xs lg: text-sm text-gray-300 font-medium'>Group</div>' </Link>)}';';'";
=======
<<<<<<< HEAD
import React from 'react';
import {Link } from 'react-router-dom';

export function Logo({customLogo, customColor }) {const logoColor = customColor || '#8B5CF6'; // Default Zion purple
=======
<<<<<<< HEAD
 import { Link } from &apos;
import Link from &apos;next/link';react-router-dom&apos;&apos;' export const Logo = () => { return (}<;<;<Link to=&apos;/&apos; className=&apos;flex items-center group&apos;>'&apos;&apos; ;&apos;&apos;<div className=&apos;flex items-center space-x-2&apos;>';&apos; {}&apos;&apos;'&apos;&apos; <div className=&apos;relative&apos;>'&apos;&apos;'' <div className=&apos;w-8 h-8 bg-gradient-to-br from-zion-cyan via-zion-purple-light to-zion-purple rounded-lg flex items-center justify-center group-hover: scale-110 transition-transform duration-200&apos;>'&apos;&apos;'' <span className=&apos;text-white font-bold text-sm&apos;>Z&apos;</span>&apos;&apos;'' </div>&apos;&apos;'&apos;&apos; <div className=&apos;absolute -top-1 -right-1 w-3 h-3 bg-zion-cyan rounded-full animate-pulse&apos;>&apos;'</div>&apos;&apos;' </div>';&apos; {}&apos;&apos;'&apos;&apos; <div className=&apos;flex flex-col&apos;>'&apos;&apos;'' <div className=&apos;text-xl font-bold text-white leading-tight&apos;>&apos;{isWhitelabel ? brandName : &apos;ZION&apos;}'&apos;&apos;' </div>&apos;&apos;'&apos;&apos; <div className=&apos;text-xs text-zion-cyan font-medium leading-tight&apos;>&apos; TECH GROUP&apos;&apos;' </div>&apos;&apos;' </div>&apos;&apos;'' </div>&apos;&apos;'&apos;&apos; <div className=&apos;text-xs lg: text-sm text-gray-300 font-medium&apos;>Group&apos;</div>&apos;&apos;' </Link>)}';&apos;';&apos;&quot;
&quot;"
=======
<<<<<<< HEAD
import React from 'react';""
=======
<<<<<<< HEAD
 import { Link } from 'react-router-dom' export const Logo = () => { return (<Link to='/' className='flex items-center group'>''' <div className='flex items-center space-x-2'>';' {}''' <div className='relative'>''' <div className='w-8 h-8 bg-gradient-to-br from-zion-cyan via-zion-purple-light to-zion-purple rounded-lg flex items-center justify-center group-hover: scale-110 transition-transform duration-200'>''' <span className='text-white font-bold text-sm'>Z</span>'' </div>''' <div className='absolute -top-1 -right-1 w-3 h-3 bg-zion-cyan rounded-full animate-pulse'></div>' </div>';' {}''' <div className='flex flex-col'>''' <div className='text-xl font-bold text-white leading-tight'>'{isWhitelabel ? brandName : 'ZION'}'' </div>''' <div className='text-xs text-zion-cyan font-medium leading-tight'>' TECH GROUP' </div>' </div>'' </div>''' <div className='text-xs lg: text-sm text-gray-300 font-medium'>Group</div>' </Link>)}';'';'"'"
=======
import React from 'react
>>>>>>> main
import { Link } from 'react-router-dom';

<<<<<<< HEAD
export function Logo({ customLogo, customColor }) {'
=======
export function Logo({ customLogo, customColor }) {""
>>>>>>> main
  const logoColor = customColor || '#8B5CF6'; // Default Zion purple
>>>>>>> main
  
<<<<<<< HEAD
  return ('
    <Link to="/" className="flex items-center space-x-2 group">
      {customLogo ? (
        <img 
          src={customLogo} "
          alt="Zion Tech Group" "
          className="h-8 w-auto"
        />
      ) : ("
        <div className="flex items-center space-x-2">
          {/* Logo Icon */}
          <div "
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            style={{ "
              backgroun,
    d: customColor ? `linear-gradient(135deg, ${customColor}, ${customColor}80)` : undefined 
            }}
          >`
            <span className="text-white font-bold text-lg">Z</span>
          </div>
          
          {/* Logo Text */}"
          <div className="flex flex-col">
            <span "
=======
  return (""
    <Link to="/" className="flex items-center space-x-2 group">
      {customLogo ? (
<<<<<<< HEAD
        <img src={customLogo} alt="Zion Tech Group" className="h-8 w-auto" />
      ) : (
        <div className="flex items-center space-x-2">
          {/* Logo Icon */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center group-hover: scale-110 transition-transform duration-300" style={{ background: customColor ? `linear-gradient(135deg, ${customColor}, ${customColor}80)` : undefined }} >
=======
        <img src={customLogo} ""
          alt="Zion Tech Group" ""
          className="h-8 w-auto"
        /" >"
      ) : (""
        <div className="flex items-center space-x-2">
          {/* Logo Icon */}
          <div ""
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            style={{ 
              background: customColor ? `linear-gradient(135deg, ${customColor}, ${customColor}80)` : undefined, }}" >"
>>>>>>> main
            <span className="text-white font-bold text-lg">Z</span>
          </div>
          
          {/* Logo Text */}""
          <div className="flex flex-col">
<<<<<<< HEAD
            <span className="text-xl font-bold text-white leading-tight" style={{ color: customColor || undefined }} >
=======
            <span ""
>>>>>>> main
              className="text-xl font-bold text-white leading-tight"
              style={{ color: customColor || undefined }}" >"
>>>>>>> main
              Zion
<<<<<<< HEAD
            </span>"
=======
            </span>""
>>>>>>> main
            <span className="text-xs text-zion-cyan leading-tight font-medium">
              Tech Group
            </span>
          </div>
        </div>
      )}
    </Link>
<<<<<<< HEAD
  );
}"
=======
<<<<<<< HEAD
  );, }"`"
 import { Link } from 'react-router-dom' import { Zap } from 'lucide-react'  export function Logo({ customLogo, customColor, className = '' }) { if (customLogo) { return ( <Link to="/" className={`flex-shrink-0 group ${className}`}" >'; <img '" src={customLogo} "';" alt="Logo"';" className="h-8 w-auto" / / / / / / /" > </Link>" )'}'; const logoColor = customColor || '#3b82f6'';"`"`'"
 import { Link } from 'react-router-dom' import { Zap } from 'lucide-react'  export function Logo({ customLogo, customColor, className = '' }) { if (customLogo) { return ( <Link to='/' className={`flex-shrink-0 group ${className}`}" >'; <img '' src={customLogo} '';' alt='Logo'';' className='h-8 w-auto' / / / / / / /" > </Link>' )'}'; const logoColor = customColor || '#3b82f6'';'`"'"

""
}}`
=======
  );,
}"`
 import { Link } from 'react-router-dom' import { Zap }  from 'lucide-react';export function Logo({ customLogo, customColor, className = '' }) { if (customLogo) { return ( <Link to="/" className={`flex-shrink-0 group ${className}`}" >'; <img '" src={customLogo} " alt="Logo" className="h-8 w-auto" / / / / / / /" > </Link>" )'}'; const logoColor = customColor || '#3b82f6'`"`
 import { Link } from 'react-router-dom' import { Zap }  from 'lucide-react';export function Logo({ customLogo, customColor, className = '' }) { if (customLogo) { return ( <Link to='/' className={`flex-shrink-0 group ${className}`}" >'; <img '' src={customLogo} ' alt='Logo' className='h-8 w-auto' / / / / / / /" > </Link>' )'}'; const logoColor = customColor || '#3b82f6'`"

"
}}`
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
