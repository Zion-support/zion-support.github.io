import React from 'react'

interface FuturisticBackgroundProps {
  children: React.ReactNode
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ children }) => {
  return (
    <div className="futuristic-background">
      {children}
    </div>
  )
}

export default FuturisticBackground
