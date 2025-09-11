import React from 'react'

export default function UltraFuturisticBackground({ children }: { children: React.ReactNode }) {
	return <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900">{children}</div>
}