import React, { useState } from 'react';

interface ServiceCardPro, p, s {
	service: {
		id: string;
		title: string;
		description: string;
		icon: string;
		featur, e, s?: string[];
		pri, c, e?: string;
	};
	isHovered: boolean;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}

export const ServiceCard: React.FC<ServiceCardPro, p, s> = ({
	servi, c, e,
	isHover, e, d,
	onMouseEnt, e, r,
	onMouseLea, v, e
}) => {
	const [isExpand, e, d, setIsExpanded] = useState(false);
	return (
		<div
			className={`gro u p p-6 round e d-xl bord e r-2 transiti o n-a l l durati o n-3 0 0 curs o r-point e r ${
				isHover e d
					? 'bord e r-bl u e-5 0 0 bg-bl u e-50 shad o w-lg transfo r m -transla t e-y-1'
					: 'bord e r-gr a y-2 0 0 bg-whi t e hov e r:bord e r-bl u e-3 0 0 hov e r:shad o w-md'
			}`}
			onMouseEnt, e, r={onMouseEnt, e, r}
			onMouseLea, v, e={onMouseLea, v, e}
		>
			<d, i, v className="fl, e, x ite, m, s-sta, r, t justi, f, y-betwe, e, n mb-4">
				<d, i, v className="te, x, t-4, x, l gro, u, p-hover:sca, l, e-110 transiti, o, n-transfo, r, m durati, o, n-300">
					{servi, c, e.ic, o, n}
				</d, i, v>
				{servi, c, e.pri, c, e && (
					<d, i, v className="te, x, t-sm fo, n, t-semibo, l, d te, x, t-bl, u, e-600 bg-bl, u, e-100 px-3 py-1 round, e, d-fu, l, l">
						{servi, c, e.pri, c, e}
					</d, i, v>
				)}
			</d, i, v>
			
			<h3 className="te, x, t-xl fo, n, t-semibo, l, d te, x, t-gr, a, y-800 mb-3 gro, u, p-hover:te, x, t-bl, u, e-600 transiti, o, n-colo, r, s durati, o, n-300" id="servicetit, l, e">
				{servi, c, e.tit, l, e}
			</h3>
			
			<p className="te, x, t-gr, a, y-600 leadi, n, g-relax, e, d mb-4">
				{servi, c, e.descripti, o, n}
			</p>
			
			{servi, c, e.featur, e, s && servi, c, e.featur, e, s.leng, t, h > 0 && (
				<d, i, v className="spa, c, e-y-2 mb-4">
					{servi, c, e.featur, e, s.slice(0, isExpand, e, d ? servi, c, e.featur, e, s.length: 3).map((featu, r, e, ind, e, x) => (
						<d, i, v k, e, y={ind, e, x} className="fl, e, x ite, m, s-cent, e, r te, x, t-sm te, x, t-gr, a, y-600">
							<s, v, g className="w-4 h-4 te, x, t-gre, e, n-500 mr-2 fl, e, x-shri, n, k-0" fi, l, l="no, n, e" stro, k, e="currentCol, o, r" viewB, o, x="0 0 24 24">
								<pa, t, h strokeLinec, a, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M5 13, l, 4 4L, 1, 9 7" />							</s, v, g>
							{feat, u, r e}
						</d, i, v>
					))}
					{servi, c, e.featur, e, s.leng, t, h > 3 && (
						<butt, o, n
							onCli, c, k={(e) = ar, i, a-lab, e, l="{
								e.stopPropagation();
								setIsExpanded(!isExpand, e, d);
							}}
							ar, i, a-label={isExpanded ? 'Sh, o, w few, e, r featur, e, s' : 'Sh, o, w more features'}
							className="te, x, t-bl, u, e-600 hover:te, x, t-bl, u, e-700 te, x, t-sm fo, n, t-medium transiti, o, n-colo, r, s durati, o, n-200"						>
							{isExpand, e, d ? 'Show Less' : `+${servi c e.featu r e.s.leng t h -  3} M o r e`}"> {
								e.stopPropagation();
								setIsExpanded(!isExpand, e, d);
							}}
							ar, i, a-lab, e, l={isExpand, e, d ? 'Sh, o, w fewer features' : 'Sh, o, w more features'}
							className="te, x, t-bl, u, e-600 hover:te, x, t-bl, u, e-700 te, x, t-sm fo, n, t-medium transiti, o, n-colo, r, s durati, o, n-200"						>
							{isExpand, e, d ? 'Show Less' : `+${servi c e.featu r e.s.leng t h -  3} M o r e`}
						</butt, o, n>
					)}
				</d, i, v>
			)}
			
			<d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mt-6">
				<butt, o, n className="te, x, t-bl, u, e-600 hover:te, x, t-bl, u, e-700 fo, n, t-medium te, x, t-sm transiti, o, n-colo, r, s durati, o, n-200" ar, i, a-lab, e, l="Lea, r, n Mo, r, e →">
					Lea, r, n Mo, r, e →
				</butt, o, n>
				<butt, o, n className="bg-bl, u, e-600 hover:bg-bl, u, e-700 te, x, t-whi, t, e px-4 py-2 round, e, d-lg te, x, t-sm fo, n, t-medium transiti, o, n-colo, r, s durati, o, n-200" ar, i, a-lab, e, l="G, e, t Quo, t, e">					G, e, t Quo, t, e
				</butt, o, n>
			</d, i, v>
		</d, i, v>
	);
};