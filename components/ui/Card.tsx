import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
type CardProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  hover?: boolean;
};

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  style,
  onClick,
  hover = true,
}) => {
  const baseClasses = 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300 relative overflow-hidden';
  const hoverClasses = hover ? 'hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:bg-gray-900/80 focus-within:border-blue-500/50 focus-within:shadow-lg focus-within:shadow-blue-500/20' : '';
  const clickableClasses = onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black' : '';
  const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;

  return (
<<<<<<< HEAD
    <div className={classes} style={style} onClick={onClick}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">{children}</div>
=======
    <div
      className={classes}
      style={style}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        {children}
      </div>
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-1467
      {hover && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  );
=======
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
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-45f8
=======
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
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-8d12
};

<<<<<<< HEAD
export default function Card({ children, className = '', style, onClick, hover = true }: CardProps) {
  const base = 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300 relative overflow-hidden';
  const hoverClasses = hover ? 'hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:bg-gray-900/80 focus-within:border-blue-500/50 focus-within:shadow-lg focus-within:shadow-blue-500/20' : '';
  const clickable = onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black' : '';
  const classes = `${base} ${hoverClasses} ${clickable} ${className}`;

  return (
    <div className={classes} style={style} onClick={onClick}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">{children}</div>
      {hover && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  );
}
=======
export default Card;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-4850
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-45f8
=======
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
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-6ba1
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-8d12
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-1467
