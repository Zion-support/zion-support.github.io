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
			b, g: 'bg-gradient-to-br from-blue-100 to-blue-200',
			text: 'text-blue-700',
			hover:'hove, r:from-blue-200 hove, r:to-blue-300',
			shadow: 'hove, r:shadow-blue-200'
		},
		green: {
			b, g: 'bg-gradient-to-br from-green-100 to-green-200',
			text: 'text-green-700',
			hover: 'hove, r:from-green-200 hove, r:to-green-300',
			shadow: 'hove, r:shadow-green-200'
		},
		purple: {
			b, g: 'bg-gradient-to-br from-purple-100 to-purple-200',
			text: 'text-purple-700',
			hover: 'hove, r:from-purple-200 hove, r:to-purple-300',
			shadow: 'hove, r:shadow-purple-200'
		}
	};

	const currentColor = colorClasses[color];

	return (
		<div className="group text-center p-6 rounded-2xl transition-all duration-500hover-lift">
			<div className={`w-20 h-20 ${currentColor.bg} ${currentColor.hover} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hove, r:rotate-3 shadow-lg ${currentColor.shadow}`}>
				<span className="text-3xl group-hover:scale-110 transition-transformduration-300">{icon}</span>
			</div>
			<h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 group-hover:${currentColor.text}`} id="title">				{title}
			</h3>
			<p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colorsduration-300">
				{description}
			</p>
			
			{/* Decorative line */}
			<div className={`mt-6 w-12 h-1 ${currentColor.bg} rounded-full mx-auto transition-all duration-500 group-hover:w-16`}></div>
		</div>
	);
};