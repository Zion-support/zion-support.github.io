import React from 'react';

interface UICardProps {
	className?: string;
	children: React.ReactNode;
}

export default function UICard({ className = '', children }: UICardProps) {
	return (
		<div className={`rounded-lg border border-gray-700 bg-black/40 ${className}`}>
			{children}
		</div>
	);
}