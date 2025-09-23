import React from 'react';

interface CardProps {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	onClick?: () => void;
	hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', style, onClick, hover = true }) => {
	const base = 'bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 relative overflow-hidden';
	const hoverClasses = hover ? 'hover:shadow-lg' : '';
	const clickable = onClick ? 'cursor-pointer' : '';
	return (
		<div className={`${base} ${hoverClasses} ${clickable} ${className}`} style={style} onClick={onClick}>
			{children}
		</div>
	);
};

export default Card;
