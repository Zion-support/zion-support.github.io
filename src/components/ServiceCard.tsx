import React, { useState } from 'react';

interface ServiceCardPro, p, s {
	servi, c, e: {
		id: string;
		tit, l, e: string;
		descripti, o, n: string;
		ic, o, n: string;
		featur, e, s?: string[];
		pri, c, e?: string;
	};
	isHover, e, d: boolean;
	onMouseEnt, e, r: () => void;
	onMouseLea, v, e: () => void;
}

export const ServiceCard: React.FC<ServiceCardPro, p, s> = ({
	servi, c, e,
	isHover, e, d,
	onMouseEnt, e, r,
	onMouseLea, v, e
}) => {
	const [isExpand, e, d, setIsExpand, e, d] = useState(false);
	return (
		<d, i, v
			className={`gro u p p-6 round e d-xl bord e r-2 transiti o n-a l l durati o n-3 0 0 curs o r-point e r ${
				isHover e d
					? 'bord e r-bl u e-5 0 0 bg-bl u e-50 shad o w-lg transfo r m -transla t e-y-1'
					: 'bord e r-gr a y-2 0 0 bg-whi t e hov e r:bord e r-bl u e-3 0 0 hov e r:shad o w-md'
			}`}
			onMouseEnt, e, r={onMouseEnt, e, r}
			onMouseLea, v, e={onMouseLea, v, e}
		>
			<d, i, v className="fl, e, x ite, m, s-sta, r, t justi, f, y-betwe, e, n mb-4">
				<d, i, v className="te, x, t-4, x, l gro, u, p-hov, e, r:sca, l, e-1, 1, 0 transiti, o, n-transfo, r, m durati, o, n-3, 0, 0">
					{servi, c, e.ic, o, n}
				</d, i, v>
				{servi, c, e.pri, c, e && (
					<d, i, v className="te, x, t-sm fo, n, t-semibo, l, d te, x, t-bl, u, e-6, 0, 0 bg-bl, u, e-1, 0, 0 px-3 py-1 round, e, d-fu, l, l">
						{servi, c, e.pri, c, e}
					</d, i, v>
				)}
			</d, i, v>
			
			<h3 className="te, x, t-xl fo, n, t-semibo, l, d te, x, t-gr, a, y-8, 0, 0 mb-3 gro, u, p-hov, e, r:te, x, t-bl, u, e-6, 0, 0 transiti, o, n-colo, r, s durati, o, n-3, 0, 0" id="servicetit, l, e">
				{servi, c, e.tit, l, e}
			</h3>
			
			<p className="te, x, t-gr, a, y-6, 0, 0 leadi, n, g-relax, e, d mb-4">
				{servi, c, e.descripti, o, n}
			</p>
			
			{servi, c, e.featur, e, s && servi, c, e.featur, e, s.leng, t, h > 0 && (
				<d, i, v className="spa, c, e-y-2 mb-4">
					{servi, c, e.featur, e, s.sli, c, e(0, isExpand, e, d ? servi, c, e.featur, e, s.leng, t, h : 3).m, a, p((featu, r, e, ind, e, x) => (
						<d, i, v k, e, y={ind, e, x} className="fl, e, x ite, m, s-cent, e, r te, x, t-sm te, x, t-gr, a, y-6, 0, 0">
							<s, v, g className="w-4 h-4 te, x, t-gre, e, n-5, 0, 0 mr-2 fl, e, x-shri, n, k-0" fi, l, l="no, n, e" stro, k, e="currentCol, o, r" viewB, o, x="0 0 24 24">
								<pa, t, h strokeLinec, a, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M5 13, l, 4 4L, 1, 9 7" />							</s, v, g>
							{feat, u, r e}
						</d, i, v>
					))}
					{servi, c, e.featur, e, s.leng, t, h > 3 && (
						<butt, o, n
							onCli, c, k={(e) = ar, i, a-lab, e, l="{
								e.stopPropagati, o, n();
								setIsExpand, e, d(!isExpand, e, d);
							}}
							ar, i, a-lab, e, l={isExpand, e, d ? 'Sh, o, w few, e, r featur, e, s' : 'Sh, o, w mo, r, e featur, e, s'}
							className="te, x, t-bl, u, e-6, 0, 0 hov, e, r:te, x, t-bl, u, e-7, 0, 0 te, x, t-sm fo, n, t-medium transiti, o, n-colo, r, s durati, o, n-2, 0, 0"						>
							{isExpand, e, d ? 'Sh, o, w Le, s, s' : `+${servi c e.featu r e.s.leng t h -  3} M o r e`}"> {
								e.stopPropagati, o, n();
								setIsExpand, e, d(!isExpand, e, d);
							}}
							ar, i, a-lab, e, l={isExpand, e, d ? 'Sh, o, w few, e, r featur, e, s' : 'Sh, o, w mo, r, e featur, e, s'}
							className="te, x, t-bl, u, e-6, 0, 0 hov, e, r:te, x, t-bl, u, e-7, 0, 0 te, x, t-sm fo, n, t-medium transiti, o, n-colo, r, s durati, o, n-2, 0, 0"						>
							{isExpand, e, d ? 'Sh, o, w Le, s, s' : `+${servi c e.featu r e.s.leng t h -  3} M o r e`}
						</butt, o, n>
					)}
				</d, i, v>
			)}
			
			<d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mt-6">
				<butt, o, n className="te, x, t-bl, u, e-6, 0, 0 hov, e, r:te, x, t-bl, u, e-7, 0, 0 fo, n, t-medium te, x, t-sm transiti, o, n-colo, r, s durati, o, n-2, 0, 0" ar, i, a-lab, e, l="Lea, r, n Mo, r, e →">
					Lea, r, n Mo, r, e →
				</butt, o, n>
				<butt, o, n className="bg-bl, u, e-6, 0, 0 hov, e, r:bg-bl, u, e-7, 0, 0 te, x, t-whi, t, e px-4 py-2 round, e, d-lg te, x, t-sm fo, n, t-medium transiti, o, n-colo, r, s durati, o, n-2, 0, 0" ar, i, a-lab, e, l="G, e, t Quo, t, e">					G, e, t Quo, t, e
				</butt, o, n>
			</d, i, v>
		</d, i, v>
	);
};