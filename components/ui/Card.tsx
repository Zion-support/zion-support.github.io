import React, { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
	children: React.ReactNode
}

export default function UICard({ className = '', children, ...rest }: CardProps) {
	return (
		<div className={`rounded-xl border border-white/10 bg-white/5 shadow-sm ${className}`} {...rest}>
			{children}
		</div>
	)
}