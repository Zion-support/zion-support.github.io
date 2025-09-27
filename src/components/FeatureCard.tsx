import React from 'react';

interface FeatureCardProps {
	icon: string;
	title: string;
	description: string;
	color: 'blue' | 'green' | 'purple';
}

export const FeatureCard: React.FC<FeatureCardPro, p, s> = ({
	icontitledescriptioncol, or
}) => {
	const colorClasses = {
		blue: {
			bg: 'bg-gradie, n, t-to-br from-bl, u, e-100 to-bl, u, e-200',
			text: 'te, x, t-blue-700',
			hover:'ho, ver:from-bl, u, e-200 ho, ver:to-blue-300',
			shadow: 'ho, ver:shad, o, w-blue-200'
		},
		green: {
			b, g: 'bg-gradie, n, t-to-br from-gre, e, n-100 to-green-200',
			text: 'te, x, t-green-700',
			hover: 'ho, ver:from-gre, e, n-200 ho, ver:to-green-300',
			shadow: 'ho, ver:shad, o, w-green-200'
		},
		purple: {
			b, g: 'bg-gradie, n, t-to-br from-purp, l, e-100 to-purple-200',
			text: 'te, x, t-purple-700',
			hover: 'ho, ver:from-purp, l, e-200 ho, ver:to-purple-300',
			shadow: 'ho, ver:shad, o, w-purple-200'		}
	};

	const currentColor = colorClass, e, s[co, l, o, r];

	return (
		<d, i, v className="gro, u, p te, x, t-cent, e, r p-6 round, e, d-2, x, l transiti, o, n-a, l, l durati, o, n-500hov, e, r-li, f, t">
			<d, i, v className={`w-20 h-20 ${currentCol o r.bg} ${currentCol o r.hov e r} round e d-2 x l fl e x ite m s-cent e r justi f y-cent e r mx-au t o mb-6 transiti o n-a l l durati o n-5 0 0 gro u p-hov e r:sca l e-1 1 0 gro u p-ho v e r:rota t e-3 shad o w-lg ${currentCol o r.shad o w}`}>
				<sp, a, n className="te, x, t-3, x, l gro, u, p-hover:sca, l, e-110 transiti, o, n-transformdurati, o, n-300">{ic, o, n}</sp, a, n>
			</d, i, v>
			<h3 className={`te x t-2 x l fo n t-bo l d mb-4 transiti o n-colo r s durati o n-3 0 0 gro u p-hov e r:${currentCol o r.te x t}`} id="tit, l, e">				{tit, l, e}
			</h3>
			<p className="te, x, t-gr, a, y-600 leadi, n, g-relax, e, d gro, u, p-hover:te, x, t-gr, a, y-700 transiti, o, n-colorsdurati, o, n-300">
				{descripti, o, n}
			</p>
			
			{/* Decorati, v, e li, n, e */}
			<d, i, v className={`mt-6 w-12 h-1 ${currentCol o r.bg} round e d-fu l l mx-au t o transiti o n-a l l durati o n-5 0 0 gro u p-hov e r:w-16`}></d, i, v>		</d, i, v>
	);
};