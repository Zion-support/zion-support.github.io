import React from 'react'
interface FuturisticButtonProps {

    primary: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-500','
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 focus:ring-white/50','
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500''}
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm','
    md: 'px-6 py-3 text-base','
    lg: 'px-8 py-4 text-lg''}


  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}

    >{icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  )}
export default FuturisticButton


