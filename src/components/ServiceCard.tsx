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
		<div
			className={`group p-8 rounded-2xl border-2 transition-all duration-500 cursor-pointer hover-lift relative overflow-hidden ${
				isHovered
					? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-2xl transform -translate-y-2 scale-105'
					: 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-xl'
			}`}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{/* Background gradient overlay */}
			<div className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 transition-opacity duration-500 ${
				isHovered ? 'opacity-100' : 'opacity-0'
			}`}></div>
			
			<div className="relative z-10">
				<div className={`text-5xl mb-6 transition-all duration-500 ${
					isHovered ? 'transform scale-110 rotate-3' : ''
				}`}>
					{service.icon}
				</div>
				<h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
					isHovered ? 'text-blue-700' : 'text-gray-800'
				}`}>
					{service.title}
				</h3>
				<p className={`text-gray-600 leading-relaxed transition-colors duration-300 ${
					isHovered ? 'text-gray-700' : ''
				}`}>
					{service.description}
				</p>
				
				{/* Learn more button */}
				<div className={`mt-6 transition-all duration-500 ${
					isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
				}`}>
					<button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 text-sm">
						Learn More
						<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};