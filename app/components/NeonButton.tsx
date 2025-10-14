import React from 'react''; import { Link } from 'react-router-dom''; interface NeonButtonProps {} children: React.ReactNode; to?: string; href?: string; onClick?: () => void; variant?: 'primary' | 'secondary' | 'accent''; size?: 'sm' | 'md' | 'lg''; className?: string}'
import React from 'react'; import { Link } from 'react-router-dom'; interface NeonButtonProps {} children: React.ReactNode; to?: string; href?: string; onClick?: () => void;; variant?: 'primary' | 'secondary' | 'accent';; size?: 'sm' | 'md' | 'lg'; className?: string;}'
}
const NeonButton: React.FC<NeonButtonProp s> = ({} children,; to,; href,; onClick,''; variant = 'primary',''; size = 'md',''; className = ''}'''
}) => {} const baseClasses = "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2""; const variantClasses = {}; primary: "bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40",";,""
secondary: "bg-transparent border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40",";,""
accent: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40""" } const sizeClasses = {}; sm: "px-4 py-2 text-sm",";,""
md: "px-6 py-3 text-base",";,""
lg: "px-8 py-4 text-lg""" } accent: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"}"" }; const sizeClasses = {}; sm: "px-4 py-2 text-sm",";,""
md: "px-6 py-3 text-base",";,""
lg: "px-8 py-4 text-lg"}"" }; const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;`;`"`
const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}``;``
const content = (; <>span classNam e="relative z-10">{children}</spa n>"" <div classNam e="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"><///di v>"" </> ); if (to) {} return (} <Linkt o={to} classNam e={`${classes} group`}>`` {content} </Lin k> )} if (href) {} return (} <ahre f={href} classNam e={`${classes} group`} targe t="_blank" re l="noopener noreferrer">"`"` {content} </a> )} return ( <button onClic k={onClick} classNam e={`${classes} group`}>`` {content} </butto n> ); }"`
export default NeonButton; )}
export default NeonButton
}; export default NeonButton;''
'"`"'`"'`