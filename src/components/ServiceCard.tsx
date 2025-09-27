import React, { useState } from 'react';

interface ServiceCardProps {
	service: {
		id: string;
		title: string;
		description: string;
		icon: string;
		features?: string[];
		price?: string;
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
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div
			className={`group p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
				isHovered
					? 'border-blue-500 bg-blue-50 shadow-lg transform -translate-y-1'
					: 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
			}` }
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div className="flex items-start justify-between mb-4">
				<div className="text-4xl group-hover:scale-110 transition-transform duration-300">
					{service.icon}
				</div>
				{service.price && (
					<div className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
						{service.price}
					</div>
				)}
			</div>
			
			<h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300" id="servicetitle">
				{service.title}
			</h3>
			
			<p className="text-gray-600 leading-relaxed mb-4">
				{service.description}
			</p>
			
			{service.features && service.features.length > 0 && (
				<div className="space-y-2 mb-4">
					{service.features.slice(0, isExpanded ? service.features.length : 3).map((feature, index) => (
						<div key={index} className="flex items-center text-sm text-gray-600">
							<svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
							</svg>
							{feature}
						</div>
					))}
					{service.features.length > 3 && (
						<button
							onClick={(e) => {
								e.stopPropagation();
								setIsExpanded(!isExpanded);
							}}
							aria-label={isExpanded ? 'Show fewer features' : 'Show more features'}
							className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
						>
							{isExpanded ? 'Show Less' : `+${service.features.length - 3} More`}
						</button>
					)}
				</div>
			)}
			
			<div className="flex items-center justify-between mt-6">
				<button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200" aria-label="Learn More →">
					Learn More →
				</button>
				<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200" aria-label="Get Quote">
					Get Quote
				</button>
			</div>
		</div>
	);
};