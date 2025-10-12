import React from 'react'

const FuturisticBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(59,130,246,0.1)_25%,rgba(59,130,246,0.1)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.1)_75%,rgba(59,130,246,0.1)_76%,transparent_77%),linear-gradient(transparent_24%,rgba(59,130,246,0.1)_25%,rgba(59,130,246,0.1)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.1)_75%,rgba(59,130,246,0.1)_76%,transparent_77%)] bg-[length:50px_50px] animate-pulse" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />

      {/* Animated Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse" style={{ animationDelay: '3s' }} />

      {/* Corner Accents */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-blue-400 animate-pulse" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-400 animate-pulse" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400 animate-pulse" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-pink-400 animate-pulse" />

      {/* Scanning Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-ping" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-ping" style={{ animationDelay: '1s' }} />
    </div>
  )
}

export default FuturisticBackground
