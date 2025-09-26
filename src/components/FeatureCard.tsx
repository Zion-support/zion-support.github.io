import React from 'react';

interface FeatureCardProps {
	icon: string;
	title: string;
	description: string;
	color: 'blue' | 'green' | 'purple';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
	icon,
	title,
	description,
	color
}) => {
	const colorClasses = {
		blue: 'bg-blue-100',
		green: 'bg-green-100',
		purple: 'bg-purple-100'
	};

	return (
		<article className="text-center" role="listitem" aria-label={`${title} feature`}>
			<div className={`w-16 h-16 ${colorClasses[color]} rounded-full flex items-center justify-center mx-auto mb-4`} role="img" aria-label={`${title} icon`}>
				<span className="text-2xl">{icon}</span>
			</div>
			<h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
			<p className="text-gray-600">{description}</p>
		</article>
	);
};