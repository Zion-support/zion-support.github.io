'use client'

import React from 'react'

interface NeonButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

const NeonButton: React.FC<NeonButtonProps> = ({ children, onClick }) => {
  return (
    <button className="neon-button" onClick={onClick}>
      {children}
    </button>
  )
}

export default NeonButton
