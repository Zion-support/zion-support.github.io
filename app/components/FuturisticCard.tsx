'use client'

import React from 'react'

interface FuturisticCardProps {
  children: React.ReactNode
  className?: string
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`futuristic-card ${className}`}>
      {children}
    </div>
  )
}

export default FuturisticCard