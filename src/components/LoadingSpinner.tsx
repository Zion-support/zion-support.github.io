import React from 'react';

type LoadingSpinnerSize = 'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg';

type LoadingSpinnerProps = {
	text?: string;
	size?: LoadingSpinnerSize;
	className?: string;
};

const sizeToClasses: Record<'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg', string> = {
	small: 'h-4 w-4',
	medium: 'h-8 w-8',
	large: 'h-12 w-12',
	sm: 'h-4 w-4',
	md: 'h-8 w-8',
	lg: 'h-12 w-12',
};

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ text = 'Loading…', size = 'md', className = '' }) => (
	<div className={`flex items-center justify-center p-4 ${className}`} role="status" aria-live="polite">
		<div className={`animate-spin rounded-full border-b-2 border-blue-600 ${sizeToClasses[size]}`} />
		{typeof text === 'string' && text.length > 0 ? (
			<span className="ml-2 text-gray-600">{text}</span>
		) : null}
	</div>
);

export default LoadingSpinner;
