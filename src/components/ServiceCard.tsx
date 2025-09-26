import React from 'react';

interface ServiceCardProps {
	service: {
		id: string;
		title: string;
		description: string;
		icon: string;
	};
	isHovered: boolean;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
	service,
	isHovered,
	onMouseEnter,
	onMouseLeave
}) => {
	return (
		<article
			className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
				isHovered
					? 'border-blue-500 bg-blue-50 shadow-lg transform -translate-y-1'
					: 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
			}`}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			role="listitem"
			aria-label={`${service.title} service`}
			tabIndex={0}
		>
			<div className="text-4xl mb-4" role="img" aria-label={`${service.title} icon`}>
				{service.icon}
			</div>
			<h3 className="text-xl font-semibold text-gray-800 mb-3">
				{service.title}
			</h3>
			<p className="text-gray-600 leading-relaxed">
				{service.description}
			</p>
		</article>
	);
};