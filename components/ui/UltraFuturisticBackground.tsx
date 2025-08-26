import React, { ReactNode } from 'react'

interface Props {
	children: ReactNode
	variant?: 'quantum' | 'neon'
	intensity?: 'low' | 'medium' | 'high'
}

export default function UltraFuturisticBackground({ children }: Props) {
	return (
		<div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950">
			{children}
		</div>
	)
}