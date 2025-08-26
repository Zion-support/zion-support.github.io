import React from 'react'

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	variant?: 'solid' | 'outline'
	className?: string
	href?: string
	children: React.ReactNode
}

export default function UIButton({ variant = 'solid', className = '', href = '#', children, ...rest }: ButtonProps) {
	const base = 'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors'
	const styles =
		variant === 'outline'
			? 'bg-transparent border border-white/20 text-white hover:border-cyan-400/50 hover:text-cyan-200'
			: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500'
	return (
		<a href={href} className={`${base} ${styles} ${className}`} {...rest}>
			{children}
		</a>
	)
}