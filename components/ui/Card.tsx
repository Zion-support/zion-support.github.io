import React from 'react';

type CardProps = {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	onClick?: () => void;
	hover?: boolean;
};

const Card: React.FC<CardProps> = ({ children, className = '', style, onClick, hover = true }) => {
	const baseClasses = 'bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 relative overflow-hidden';
	const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-0.5' : '';
	const clickableClasses = onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500' : '';
	const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;
	return (
		<div className={classes} style={style} onClick={onClick}>
			<div className="relative z-10">{children}</div>
		</div>
	);
};

export default Card;
