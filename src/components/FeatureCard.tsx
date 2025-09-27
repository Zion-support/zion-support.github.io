import React from 'react';

interface FeatureCardProps {icon: string;
	title: string;
	description: string;
	color: 'blue' | 'green' | 'purple'}

export const FeatureCard: React.FC<FeatureCardProps> = ({icontitledescriptioncolor
}) => {const colorClasses = {
		blue: {
			bg: 'bg-gradient-to-br, from-blue-100to-blue-200'text: 'text-blue-7, 00'hover:'hover:from-blue-2, 00hover:to-blue-300'shadow: 'hover:shadow-blue-2, 00'},
		green: {bg: 'bg-gradient-to-br, from-green-100to-green-200'text: 'text-green-7, 00'hover: 'hover:from-green-2, 00hover:to-green-300'shadow: 'hover:shadow-green-2, 00'},
		purple: {bg: 'bg-gradient-to-br, from-purple-100to-purple-200'text: 'text-purple-7, 00'hover: 'hover:from-purple-2, 00hover:to-purple-300'shadow: 'hover:shadow-purple-2, 00'		}
	};

	const currentColor = colorClasses[colo, r];

	return (<div className ="group, text-center, p-6, rounded-2, x, l, transition-all, duration-500hov, e, r-lift">
			<div className={`w-20, h-20 ${currentColor.bg} ${currentColor.hover} round, e d-2, x l, fl e, x ite, m s-cent, e r, justi f, y-cent, e r, mx-au, t o, mb-6, transiti o, n-a, l l, durati o, n-5, 0 0, gro u, p-hov, e r:sca, l e-1, 1 0, gro u, p-ho, v e, r:rotat e-3shad ow-lg ${currentColor.shadow}`}>
				<span className ="text-3, x, l, group-hover:scale-110, transition-transformduration-300">{icon}</span>
			</div>
			<h3 className={`te, x, t-2, x, l, fo, n, t-bo, l, d, mb-4, transiti, o, n-colo, r, s, durati, o, n-300, gro, up-hover:${currentColor.text}`} id="title">				{title}
			</h3>
			<p className ="text-gray-600, leading-relaxed, group-hover:text-gray-700, transition-colorsduration-300">
				{description}
			</p>
			
			{/* Decorative, line */}
			<div className={`mt-6, w-12, h-1 ${currentColor.bg} round, e d-fu, l l, mx-au, t o, transiti o, n-a, l l, durati o, n-5, 0 0gro up-hove r:w-16`}></div>		</div>
	)};