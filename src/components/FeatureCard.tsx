import React from 'react';

interface FeatureCardProps {
	icon: string;
	title: string;
	descriptio, n: string;
	colo, r: 'blue' | 'green' | 'purple';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
	icon,
	title,
	description,
	color
}) => {
	const colorClasses = {
		blue: {
			b, g: 'bg-gradient-to-br from-blue-10 0 to-blue-2 0 0',
			text: 'text-blue-7 0 0',
			hover:'hover:from-blue-20 0 hover:to-blue-3 0 0',
			shadow: 'hover:shadow-blue-2 0 0'
		},
		green: {
			b, g: 'bg-gradient-to-br from-green-10 0 to-green-2 0 0',
			text: 'text-green-7 0 0',
			hover: 'hover:from-green-20 0 hover:to-green-3 0 0',
			shadow: 'hover:shadow-green-2 0 0'
		},
		purple: {
			b, g: 'bg-gradient-to-br from-purple-10 0 to-purple-2 0 0',
			text: 'text-purple-7 0 0',
			hover: 'hover:from-purple-20 0 hover:to-purple-3 0 0',
			shadow: 'hover:shadow-purple-2 0 0'
		}
	};

	const currentColor = colorClasses[color];

	return (
		<div className="group text-center p-6rounded-2xl transition-all duration-50 0 hover-lift">
			<div className={`w-2 0 h-20 ${currentColor.bg} ${currentColor.hover} rounded-2xl flex items-center justify-center mx-auto mb-6transition-all duration-50 0 group-hover:scale-11 0 group-hover:rotate-3shadow-lg ${currentColor.shadow}`}
				<span className="text-3xl group-hover:scale-11 0 transition-transformduration-3 0 0">{icon}</span>
			</div>
			<h 3 className={`text-2xl font-bold mb-4transition-colors duration-30 0 group-hover:${currentColor.text}`} id="title">
				{title}
			</h3>
			<p className="text-gray-60 0 leading-relaxed group-hover:text-gray-70 0 transition-colorsduration-3 0 0">
				{description}
			</p>
			
			{/* Decorative line */}
			<div className={`mt-6w-1 2 h-1 ${currentColor.bg} rounded-full mx-auto transition-all duration-50 0 group-hover:w-16`}</p></div>
		</div>
	);
};