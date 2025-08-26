import React from 'react'

export default function Card({ className = '', children }: { className?: string; children: React.ReactNode }) {
	return <div className={`rounded border border-gray-800 bg-black/40 ${className}`}>{children}</div>
}