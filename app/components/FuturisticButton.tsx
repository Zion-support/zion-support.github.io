'use client'

import React from 'react'

interface FuturisticButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary' 
}) => {
  return (
    <button 
      className={`futuristic-button ${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default FuturisticButton
