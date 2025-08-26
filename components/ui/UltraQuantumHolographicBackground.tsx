import React, { ReactNode } from 'react'

export default function UltraQuantumHolographicBackground({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-screen bg-gradient-to-br from-indigo-900 via-fuchsia-900 to-slate-900">
			{children}
		</div>
	)
}