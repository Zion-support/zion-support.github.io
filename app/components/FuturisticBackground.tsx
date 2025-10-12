import React from 'react'

export default function FuturisticBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-neon-grid bg-neon-grid animate-grid-move opacity-20"></div>
      
      {/* Hologram Overlay */}
      <div className="absolute inset-0 bg-hologram-bg animate-hologram opacity-30"></div>
      
      {/* Data Streams */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-data-stream opacity-60"></div>
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-pink to-transparent animate-data-stream opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-green to-transparent animate-data-stream opacity-50" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full animate-particle-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Cyber Circuit Pattern */}
      <div className="absolute inset-0 bg-cyber-circuit bg-cyber-circuit animate-grid-move opacity-10"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-neon-green to-transparent animate-matrix-rain opacity-30"
            style={{
              left: `${20 + i * 20}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '20s'
            }}
          ></div>
        ))}
      </div>
      
      {/* Neon Glow Orbs */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-neon-cyan rounded-full blur-3xl animate-neon-pulse opacity-20"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-neon-pink rounded-full blur-2xl animate-neon-pulse opacity-25" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-neon-green rounded-full blur-xl animate-neon-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
      
      {/* Cyber Scan Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-cyber-scan opacity-80"></div>
        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-pink to-transparent animate-cyber-scan opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-green to-transparent animate-cyber-scan opacity-70" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  )
}