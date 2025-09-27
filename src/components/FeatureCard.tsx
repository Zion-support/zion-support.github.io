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
			b, g: 'bg-gradient-to-br from-blue-100to-blue-200',
			text: 'text-blue-700',
			hover:'hover:from-blue-200hover:to-blue-300',
			shadow: 'hover:shadow-blue-200'
		},
		green: {
			b, g: 'bg-gradient-to-br from-green-100to-green-200',
			text: 'text-green-700',
			hover: 'hover:from-green-200hover:to-green-300',
			shadow: 'hover:shadow-green-200'
		},
		purple: {
			b, g: 'bg-gradient-to-br from-purple-100to-purple-200',
			text: 'text-purple-700',
			hover: 'hover:from-purple-200hover:to-purple-300',
			shadow: 'hover:shadow-purple-200'
		}
	};

	const currentColor = colorClasses[color];

	return (

		<div className="group text-center p-6 rounded-2 xl transition-all duration-500 hover-lift">
			<div className={`w-20 h-20 ${currentColor.bg} ${currentColor.hover} rounded-2xl flex items-center justify-center mx-auto mb-6transition-all duration-500 group-hover:scale-110 group-hover:rotate-3shadow-lg ${currentColor.shadow}`}
				<span className="text-3 xl group-hover:scale-110 transition-transformduration-300">{icon}</span>
			</div>
			<h3 className={`text-2xl font-bold mb-4transition-colors duration-300 group-hover:${currentColor.text}`} id="title">

>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
				{title}
			</h3>
			<p className="text-gray-600 leading-relaxed group-hover:text-gray-700transition-colorsduration-300">
				{description}
			</p>
			
			{/* Decorative line */}
			<div className={`mt-6w-12h-1 ${currentColor.bg} rounded-full mx-auto transition-all duration-500group-hover:w-16`}</p></div>
		</div>
	);
};