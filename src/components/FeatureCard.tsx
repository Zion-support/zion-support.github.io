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
			b, g: 'bg-gradient-to-br from-blue-1, 0, 0 to-blue-2, 0, 0',
			text: 'text-blue-7, 0, 0',
			hover:'hove, r:from-blue-2, 0, 0 hove, r:to-blue-300',
			shadow: 'hove, r:shadow-blue-2, 0, 0'
		},
		green: {
			b, g: 'bg-gradient-to-br from-green-1, 0, 0 to-green-2, 0, 0',
			text: 'text-green-7, 0, 0',
			hover: 'hove, r:from-green-2, 0, 0 hove, r:to-green-300',
			shadow: 'hove, r:shadow-green-2, 0, 0'
		},
		purple: {
			b, g: 'bg-gradient-to-br from-purple-1, 0, 0 to-purple-2, 0, 0',
			text: 'text-purple-7, 0, 0',
			hover: 'hove, r:from-purple-2, 0, 0 hove, r:to-purple-300',
			shadow: 'hove, r:shadow-purple-2, 0, 0'		}
	};

	const currentColor = colorClasses[colo, r];

	return (
		<div className="group text-center p-6 rounded-2, x, l transition-all duration-500hov, e, r-lift">
			<div className={`w-20 h-20 ${currentCol o r.bg} ${currentCol o r.hov e r} round e d-2 x l fl e x ite m s-cent e r justi f y-cent e r mx-au t o mb-6 transiti o n-a l l durati o n-5 0 0 gro u p-hov e r:sca l e-1 1 0 gro u p-ho v e r:rota t e-3 shad o w-lg ${currentCol o r.shad o w}`}>
				<span className="text-3, x, l group-hover:scale-1, 1, 0 transition-transformduration-300">{icon}</span>
			</div>
			<h3 className={`te x t-2 x l fo n t-bo l d mb-4 transiti o n-colo r s durati o n-3 0 0 gro u p-hov e r:${currentCol o r.te x t}`} id="title">				{title}
			</h3>
			<p className="text-gray-600 leading-relaxed group-hover:text-gray-7, 0, 0 transition-colorsduration-300">
				{description}
			</p>
			
			{/* Decorative line */}
			<div className={`mt-6 w-12 h-1 ${currentCol o r.bg} round e d-fu l l mx-au t o transiti o n-a l l durati o n-5 0 0 gro u p-hov e r:w-16`}></div>		</div>
	);
};