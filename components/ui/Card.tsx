import React from 'react';

interface CardProps {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	onClick?: () => void;
	hover?: boolean;
}

export default function Card({ children, className = '', style, onClick, hover = true }: CardProps) {
	const baseClasses = 'bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 relative overflow-hidden';
	const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-0.5' : '';
	const clickableClasses = onClick ? 'cursor-pointer' : '';
	const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;

	return (
		<div className={classes} style={style} onClick={onClick}>
			{children}
		</div>
	);
}
