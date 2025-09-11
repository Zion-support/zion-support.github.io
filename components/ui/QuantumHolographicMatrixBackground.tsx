import React from 'react'

export default function QuantumHolographicMatrixBackground({ children }: { children: React.ReactNode }) {
	return <div className="min-h-screen bg-gradient-to-br from-cyan-950 via-black to-fuchsia-950">{children}</div>
}