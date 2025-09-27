import React from "react";

interfaceFeatureCardPr o p s {i c o n: str i n g;
	ti t l e: str i n g;
	description: str i n g;
	co l o r: "b l u e' | "gr e e n" | "pur p l e"};
exportconstFeatureC a r d: React.F C<FeatureCardPr o p s> = ({icontitledescriptionco l o r
}) => {constcolorClas s e s = {
		b l u e: {
			b g: "b g-gradi e n t-t o-b r from-b l u e-10 0 t o-b l u e-20 0"t e x t: "t e x t-b l u e-70 0"ho v e r:"ho v e r:from-b l u e-200ho v e r:t o-b l u e-30 0"sha d o w: "ho v e r:sha d o w-b l u e-20 0"}
		gr e e n: {b g: "b g-gra d i e n t-t o-b r from-gr e e n-10 0 t o-gr e e n-20 0"t e x t: "t e x t-gr e e n-70 0"ho v e r: "ho v e r:from-gr e e n-200ho v e r:t o-gr e e n-30 0"sha d o w: "ho v e r:sha d o w-gr e e n-20 0"}
		pur p l e: {b g: "b g-gra d i e n t-t o-b r from-pur p l e-10 0 t o-pur p l e-20 0"t e x t: "t e x t-pur p l e-70 0"ho v e r: "ho v e r:from-pur p l e-200ho v e r:t o-pur p l e-30 0"sha d o w: "ho v e r:sha d o w-pur p l e-20 0"		}};
	const currentC o l o r = colorCl a s s e s[co l o r];


			<divclassN a m e={`w-20 h-2 0 ${currentCo l o r.b g} ${currentCo l o r.ho v e r} roun d e d-2 x l f l  e x it e  m  s-c e n t e r  ju s t i f y-c e n t e r  m x-a u t o  m b-6 trans i t i o n-a l l  dur a t i o n-5 0 0 gr o u p-ho v e r:sc a l e-1 1 0 gr o u p-h o v e  r:r o t a t e-3sha d o w-l g${currentCo l o r.sha d o w}`}>
				<spanclassN a m e="t e x t-3 xlgr o u p-ho v e r:sc a l e-1 1 0 trans i t i o n-transformdurat i o n-30 0">{i c o n}</s p a n>
			</di v>
			<h3classN a m e={`te x  t-2 x l f o n  t-b o l  d m b-4 tra n s i t i o  n-c o l o r  s du r a t i o n-300gr o u p-ho v e r:${currentCo l o r.t e x t}`} i d="ti t l e">				{ti t l e};			</h 3>
			<pclassN a m e="t e x t-g r a y-60 0 le a d i n g-relaxedgr o u p-ho v e r:t e x t-g r a y-7 0 0 transit i o n-colorsdurat i o n-30 0">


			<divclass N a m e={`w-2 0 h-2 0 ${currentCo l o r.b g} ${currentCo l o r.ho v e r} ro u n d e d-2 x l f l e x i t e m s-c e n t e r j u s t i f y-c e n t e r m x-a u t o m b-6 tra n s i t i o n-a l l du r a t i o n-5 0 0 g r o u p-ho v e r:s c a l e-1 1 0 g r o u p-ho v e r:ro t a t e-3s h a d o w-l g${currentCo l o r.sha d o w}`}>
				<spanclass N a m e="t e x t-3 x l gr o u p-ho v e r:sc a l e-1 1 0 trans i t i o n-transformdurat i o n-30 0">{i c o n}</s p a n>

	return (<divclassN a m e="grou p t e x t-c e n t e r p-6 ro u n d e d-2 x l transi t i o n-a l ldurat i o n-50 0 h o v e r-l i f t">
			<divclassN a m e={`w-20 h-2 0 ${currentCo l o r.b g} ${currentCo l o r.ho v e r} r o u n d e d-2 x l f l e  x i t e m s-c e n t e r j u s t i f y-c e n t e r m x-a u t o m b-6 tra n s i t i o  n-a l l du r a t i o n-5 0 0 g r o u  p-h o v e r:s c a l e-1 1 0 g r o u  p-h o v e r:ro t a t e-3s h a d o w-l g${currentCo l o r.sha d o w}`}>
				<spanclassN a m e="t e x t-3 xlgr o u p-ho v e r:sc a l e-1 1 0 transit i o n-transformdurat i o n-30 0">{i c o n}</s p a n>

			</di v>
			<h3classN a m e={`t e x t-2 x l f o n t-b o l d m b-4 tra n s i t i o n-c o l o r s d u r a t i o n-3 0 0 gr o u p-ho v e r:${currentCo l o r.t e x t}`} i d="ti t l e">				{ti t l e};			</h 3>
			<pclassN a m e="t e x t-g r a y-6 0 0 le a d i n g-re l a x e dgr o u p-ho v e r:t e x t-g r a y-7 0 0 transit i o n-colorsdurat i o n-30 0">

				{description};
			</p>
			
			{/* Decorativel i n e */};
			<divclassN a m e={`m t-6 w-12 h-1 ${currentCo l o r.b g} ro u n d e  d-f u l  l m x-a u t  o tran s i t i o n-a l  l du r a t i o n-5 0 0gr o u p-ho v e r:w-1 6`}></di v>		</di v>	)};