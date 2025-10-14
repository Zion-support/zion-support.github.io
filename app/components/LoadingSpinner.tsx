import React from 'react'; import { Loader2 } from 'lucide-react'; interface LoadingSpinnerProps {} size?: 'sm' | 'md' | 'lg' | 'xl'; color?: 'primary' | 'secondary' | 'white' | 'gray'; text?: string; fullScreen?: boolean; className?: string; }'
const LoadingSpinner: React.FC<LoadingSpinnerProp s> = ({} size = 'md','; color = 'primary','; text,; fullScreen = false,; className = '''''
}) => {} const sizeClasses = {}; sm: 'w-4 h-4',';,''
md: 'w-6 h-6',';,''
lg: 'w-8 h-8',';,''
xl: 'w-12 h-12''' }; const spinner = (; <div classNam e={`flex items-center justify-center ${className}`}>`` <div classNam e="flex flex-col items-center space-y-2">"" <Loader2 classNam e={`animate-spin text-blue-600 ${sizeClasses[size]}`} />`` {text && (} <p classNam e="text-sm text-gray-600">{text}</p>"" )} </di v>,"'`
md: 'w-8 h-8',';,''
lg: 'w-12 h-12',';,''
xl: 'w-16 h-16''' }; const colorClasses = {}; primary: 'text-purple-600',';,''
secondary: 'text-cyan-600',';,''
white: 'text-white',';,''
gray: 'text-gray-400''' }; const spinner = (; <div classNam e={`flex flex-col items-center justify-center ${className}`} rol e="status" aria-labe l="Loading">"`"` <div classNam e="relative">"" <div classNam e={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}`;`"'`
styl e={{} animation: 'spin 1s linear infinite',';,''
willChange: 'transform''' }} ><//svg classNam e="w-full h-full"> fil l="none""; viewBo x="0 0 24 24""; xmln s="http://www.w3.org/2000/svg""; aria-hidde n="true""" ><//circle; classNam e="opacity-25"> c x="12""; c y="12""; r="10""; strok e="currentColor""; strokeWidt h="4""" /><//path; classNam e="opacity-75"> fil l="currentColor""; d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z""" /><///sv g><///di v><///di v> {text && (} <p classNam e={`mt-3 text-sm ${colorClasses[color]} animate-pulse`}>`` {text} </p> )} </di v> ); if (fullScreen) {} return ( <div classNam e="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">"" <div classNam e="fixed inset-0 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center z-50"> rol e="dialog""; aria-moda l="true""; aria-labe l="Loading page""" > {spinner} </di v> ); } return spinner; }; export default LoadingSpinner;`"'`"'`