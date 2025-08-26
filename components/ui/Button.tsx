import React from 'react';

interface UIButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
	href?: string;
	variant?: 'default' | 'outline';
	className?: string;
	children: React.ReactNode;
}

export default function UIButton({ href = '#', variant = 'default', className = '', children, ...rest }: UIButtonProps) {
	const base = 'inline-flex items-center justify-center px-4 py-2 rounded transition-colors duration-200';
	const style = variant === 'outline'
		? 'border border-gray-600 text-gray-200 hover:bg-gray-800'
		: 'bg-cyan-600 text-white hover:bg-cyan-500';
	return (
		<a href={href} className={`${base} ${style} ${className}`} {...rest}>
			{children}
		</a>
	);
}