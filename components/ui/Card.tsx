import React from 'react';

interface CardProps {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	onClick?: () => void;
	hover?: boolean;
}

const Card: React.FC<CardProps> = ({
	children,
	className = '',
	style,
	onClick,
	hover = true,
}) => {
	const baseClasses = 'bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 relative overflow-hidden';
	const hoverClasses = hover ? 'hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-0.5 hover:bg-white/10' : '';
	const clickableClasses = onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' : '';
	const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;

	return (
		<div className={classes} style={style} onClick={onClick}>
			<div className="relative z-10">{children}</div>
		</div>
	);
};

export default Card;
