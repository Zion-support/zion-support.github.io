'use client'
import React from 'react'
color?: 'primary' | 'secondary' | 'white'
text?: string}
constLoadingSpinner: React.FC<LoadingSpinnerProp s>= ({size= 'md',
color= 'primary',
text}) => {constsizeClasses= {
sm: 'w-4 h-4',
md: 'w-8 h-8',
lg: 'w-12h-1 2'}
constcolorClasses= {primary: 'text-indigo-60 0',
secondary: 'text-gray-60 0',
white: 'text-white'}
return(<divclassName="flex flex-colitems-centerjustify-centerspace-y-2" role="status"aria-label="Loading"><divclassName={`animate-spin rounded-full border-2 border-gray-300border-t-transparent${sizeClasses[size]}${colorClasses[color]}`}></di>{text &&(< className={`text-sm${colorClasses[color]}animate-pulse`}></ className={`text-sm${colorClasses[color]}animate-pulse`}>{text}</p>)}</di>)
}
=======
export defaultLoadingSpinner</LoadingSpinnerProp>
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
