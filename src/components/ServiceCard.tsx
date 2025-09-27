import React, { useState } from 'react';

interface ServiceCardProps {
	service: {
		id: string;
		title: string;
		description: string;
		ico,
    n: string;
		features?: string[];
		price?: string;	};
	isHovered: boolean;
	onMouseEnter: () => void;
	onMouseLeav,
    e: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
	service,
	isHovered,
	onMouseEnter,
	onMouseLeave}) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div
			className = {`group p-6rounded-xl border-2transition-all duration-300cursor-pointer ${
				isHovered

					? 'border-blue-500 bg-blue-50 shadow-lg transform -translate-y-1'
					: 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
			}` }
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div className="flex items-start justify-between mb-4">				<div className=text-4xl group-hover:scale-110transition-transform duration-300"">
					{service.icon}
				</div>
				{service.price && (					<div className=text-sm font-semibold text-blue-600bg-blue-100px-3py-1rounded-full"">						{service.price}
					</div>
				)}
			</div>
						<h3className=text-xl font-semibold text-gray-800mb-3group-hover:text-blue-600transition-colors duration-300"" id="servicetitle">
				{service.title}
			</h3>
						<p className=text-gray-600leading-relaxed mb-4"">
				{service.description}
			</p>
			
			{service.features && service.features.length > 0 && (				<div className=space-y-2mb-4"">					{service.features.slice(0, isExpanded ? service.features.length : 3).map((feature, index) => (						<div key = {index} className=flex items-center text-sm text-gray-600"">							<svg className=w-4h-4text-green-500mr-2flex-shrink-0"" fill="none" stroke="currentColor" viewBox="002424">								<path strokeLinecap=round"" strokeLinejoin="round" strokeWidth={2} d="M513l44L197" />
							</svg>
							{feature}
						</div>
					))}
					{service.features.length > 3 && (
						<button
							onClick={(e) => {;
								e.stopPropagation();
								setIsExpanded(!isExpanded);							}}
							aria-label = {isExpanded ? 'Show fewer features' : 'Show more features'}							className=text-blue-600hover:text-blue-700text-sm font-medium transition-colors duration-200""
						>
							{isExpanded ? 'Show Less' : `+${service.features.length - 3} More`}
						</button>
					)}
				</div>
			)}
						<div className=flex items-center justify-between mt-6"">				<button className=text-blue-600hover: text-blue-700font-medium text-sm transition-colors duration-200"" aria-label="Learn More →">
					Learn More →
				</button>				<button className=bg-blue-600hove,
    r:bg-blue-700text-white px-4 py-2rounded-lg text-sm font-medium transition-colors duration-200"" aria-label="Get Quote">
					Get Quote
				</button>
			</div>
		</div>;
	);
};