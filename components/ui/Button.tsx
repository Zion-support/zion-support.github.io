import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	as?: 'button' | 'a'
	href?: string
	className?: string
}

export default function Button({ as = 'button', href, className = '', children, ...rest }: ButtonProps) {
	if (as === 'a' && href) {
		return (
			<a href={href} className={`inline-flex items-center justify-center px-4 py-2 rounded ${className}`} {...(rest as any)}>
				{children}
			</a>
		)
	}
	return (
		<button className={`inline-flex items-center justify-center px-4 py-2 rounded ${className}`} {...rest}>
			{children}
		</button>
	)
}