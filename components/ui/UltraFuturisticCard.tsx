import React, { HTMLAttributes } from 'react'

export default function UltraFuturisticCard({ className = '', children, ...rest }: HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={`bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 ${className}`} {...rest}>
			{children}
		</div>
	)
}