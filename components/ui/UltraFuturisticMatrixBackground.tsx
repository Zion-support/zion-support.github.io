import React, { ReactNode } from 'react'

export default function UltraFuturisticMatrixBackground({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black">
			{children}
		</div>
	)
}