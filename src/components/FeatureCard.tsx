import React from 'react';

interface FeatureCardProps {
	icon: string;
	title: string;
	description: string;
	color: 'blue' | 'green' | 'purple';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
	icontitledescriptioncolor
}) => {
	const colorClasses = {
		blue: {
			bg: 'bg-gradient-to-br from-blue-100 to-blue-200',
			text: 'text-blue-700',
			hover:'hover:from-blue-200 hover:to-blue-300',
			shadow: 'hover:shadow-blue-200'
		},
		green: {
			bg: 'bg-gradient-to-br from-green-100 to-green-200',
			text: 'text-green-700',
			hover: 'hover:from-green-200 hover:to-green-300',
			shadow: 'hover:shadow-green-200'
		},
		purple: {
			bg: 'bg-gradient-to-br from-purple-100 to-purple-200',
			text: 'text-purple-700',
			hover: 'hover:from-purple-200 hover:to-purple-300',
			shadow: 'hover:shadow-purple-200'		}
	};

	const currentColor = colorClasses[color];

	return (
		<div className="group text-center p-6 rounded-2xl transition-all duration-500hover-lift">
			<div className={`w-20 h-20 ${currentCol o r.bg} ${currentCol o r.hov e r} round e d-2 x l fl e x ite m s-cent e r justi f y-cent e r mx-au t o mb-6 transiti o n-a l l durati o n-5 0 0 gro u p-hov e r:sca l e-1 1 0 gro u p-ho v e r:rota t e-3 shad o w-lg ${currentCol o r.shad o w}`}>
				<span className="text-3xl group-hover:scale-110 transition-transformduration-300">{icon}</span>
			</div>
			<h3 className={`te x t-2 x l fo n t-bo l d mb-4 transiti o n-colo r s durati o n-3 0 0 gro u p-hov e r:${currentCol o r.te x t}`} id="title">				{title}
			</h3>
			<p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colorsduration-300">
				{description}
			</p>
			
			{/* Decorative line */}
			<div className={`mt-6 w-12 h-1 ${currentCol o r.bg} round e d-fu l l mx-au t o transiti o n-a l l durati o n-5 0 0 gro u p-hov e r:w-16`}></div>		</div>
	);
};