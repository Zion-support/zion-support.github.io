import React from 'react';
<<<<<<< HEAD
import { Loader2 } from 'lucide-react'';interface LoadingSpinnerProps {'
=======
import { Loader2 }  from 'lucide-react;interface LoadingSpinnerProps {
>>>>>>> main
  size?: 'sm' | 'md' | 'lg';
   text?: string';
   className?: string}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size =,
  md', text,
  '  className = ''}) => {'
  '  const sizeClasses = {'    sm: 'w-4 h-4, md:,
<<<<<<< HEAD
  w-8 h-8',
  '    lg: 'w-12 h-12}  return('
    <div className={`flex flex-col items-center justify-center ${className}`}>`      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />`      {text && (`
        <p className='mt-2 text-sm text-gray-600 animate-pulse'>{text}</p>'      )}    </div>)}
export default LoadingSpinner'
=======
  w-8 h-8,    lg: 'w-12 h-12}'  return(
    <div className={`flex flex-col items-center justify-center ${className}`}>`      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />`      {text && (
        <p className='mt-2 text-sm text-gray-600 animate-pulse'>{text}</p>'      )}'    </div>)}
export default LoadingSpinner
>>>>>>> main
