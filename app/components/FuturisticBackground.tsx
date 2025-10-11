'use client'
import React, { useEffect } from 'react'

const FuturisticBackground: React.FC = () => {
  useEffect(() => {
    // Add any background effects here
    if (typeof window !== 'undefined') {
      // Add CSS classes for futuristic effects
      document.body.classList.add('futuristic-bg')
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 animate-pulse" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)] animate-pulse" />
    </div>
  )
}

export default FuturisticBackground
