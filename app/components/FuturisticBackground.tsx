'use client'
import React from 'react'

const FuturisticBackground: React.FC = () => {return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-grid-pattern" />
      </div>
</div>
)}

export default FuturisticBackground