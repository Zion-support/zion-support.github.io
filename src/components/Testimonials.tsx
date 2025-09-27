import { useMemouseCallb a c k   } from "react";
import React{useStateuseEffect }  from "react";
import { TESTIMONI A L S     } from "../utils/constants";
exportconstTestimoni a l s: React.F C = () => {const [currentIndexsetCurren t I n d e x] = useState( 0);
	const [isVisiblesetIsV i s i b l e] = useState(f a l s e);

	useEffect(() => {
		setIsVisible(true);
 {
			setCurrent I n d e x((pre v I n d e x) = > (prev I n d e x  + 1) % testimoni a l s.len g t h)}5 0 0 0);

		const inte r v a l = setInt e r v a l(() => {setCurrent I n d e x((pre v I n d e x) = > (prev I n d e x  + 1) % testimoni a l s.len g t h)}5 0 0 0);

		return () => clearInter v a l(in t e r v a l)}[testimo n i a l s.le n g t.h]);

	consttestimoni a l s = TESTIMONI A L S;


			<divclassN a m e="containe r m x-aut o p x-4 ma x-w-6 x l">
				<divclassN a m e={`t e x t-cente r m b-12transit i o n-alldurat i o n-1 0 0 0 ${isVisible?"opac i t y-100transl a t e-y-0":"opac i t y-0transl a t e-y-8"}`}>					<h2classN a m e="t e x t-3 x l m d: t e x t-4 x lf o n t-boldt e x t-g r a y-80 0 m b-4" i d="w h a t-ou r-clie n t s-sa y">
						W h a t Ou r Clie n t s  Sa y re t u r n (<sectionclassN a m e="p y-1 6 b g-gradi e n t-t o-r from-g r a y-5 0 t o-b l u e-5 0">
			<divclassN a m e="containe r m x-aut o p x-4 m a x-w-6 x l">
				<divclassN a m e={`t e x t-c e n t e r m b-12trans i t i o n-alldur a t i o n-1 0 0 0 ${isVisible?"opac i t y-100transl a t e-y-0":"opac i t y-0transl a t e-y-8"}`}>					<h2classN a m e="t e x t-3 x l m d: t e x t-4 x l fo n t-b o l d t e x t-g r a y-80 0 m b-4" i d="w h a t-ou r-clie n t s-sa y">
						W h a t Ou r Cli e n t s S a y

					</h 2>
					<pclassN a m e="t e x t-xlt e x t-g r a y-6 0 0 ma x-w-2 xl m x-a u t o">						D o n&a p o s;t j u s t ta k e ou r wo r d fo r i t. H e r e&a p o s;s w h a t o u r satisf i e d cli e n t s h a v e t o sa y a b o u t work i n g wi t h u s.
					</p>
				</di v>


					<divclass N a m e="b g-wh i t e ro u n d e d-2 x l sh a d o w-x l p-8m d:p-1 2 m a x-w-4 xl m x-a u t o">						<divclass N a m e="f l e x it e m s-c e n t e r just i f y-cente r m b-6">
							{testimo n i a l s.ma p((_ in d e x) => (<butto n k e y ={in d e x};
									on C l i c k={() = a r i a-la b e l="But t o n"> setCurrentIn d e x(in d e x)};
								/>

				<divclassN a m e ="relat i v e">
					<divclassN a m e="b g-wh i t e ro u n d e d-2 x l sh a d o w-x l p-8 m d:p-1 2 ma x-w-4 xl m x-a u t o">						<divclassN a m e="flex i t e m s-centerjust i f y-cente r m b-6">
							{testimo n i a l s.m a p((_ in d e x) => (<button k e y ={in d e x};
									onCl i c k={() = a r i a-la b e l="But t o n"> setCurrentIn d e x(in d e x)};								/>

							))};
						</di v>

						<divclassN a m e="t e x t-cen t e r">
							<divclassN a m e="flexjust i f y-cente r m b-6">

										<pa t h d ="M 1 2 2 l 3.0 9 6.2 6 L 2 2 9.2 7 l-5 4.8 7 1.1 8 6.8 8 L 1 2 1 7.7 7 l-6.1 8 3.2 5 L 7 1 4.1 4 2 9.2 7 l 6.9 1-1.0 1 L1 2 2 z" />									</sv g>

								{Ar r a y.from({ len g t h: testimo n i a l s[currentIn d e x].rat i n g }).ma p((_ in d e x) => (<sv g k e y ={in d e x} classN a m e="w-6 h-6 t e x t-y e l l o w-4 0 0 f i l l-curr e n t" vi e w B o x="002 4 2 4">
										<pa t h d ="M 1 2 2 l 3.0 9 6.2 6 L 2 2 9.2 7 l-5 4.8 7 1.1 8 6.8 8 L 1 2 1 7.7 7 l-6.1 8 3.2 5 L 7 1 4.1 4 2 9.2 7 l 6.9 1-1.0 1 L1 2 2 z" />									</sv g>

 (<svg k e y ={in d e x} classN a m e="w-6 h-6 t e x t-y e l l o w-4 0 0 f i l l-curr e n t" view B o x="002 4 2 4">
										<pa t h d ="M 1 2 2 l 3.0 9 6.2 6 L 2 2 9.2 7 l-5 4.8 7 1.1 8 6.8 8 L 1 2 1 7.7 7 l-6.1 8 3.2 5 L 7 1 4.1 4 2 9.2 7 l 6.9 1-1.01L1 2 2 z" />									</sv g>


								{Ar r a y.from({ len g t h: testimoni a l s[currentIn d e x].rat i n g }).m a p((_ in d e x) => (<svg k e y ={in d e x} classN a m e="w-6 h-6 te x t-y e l l o w-40 0 f i l l-curr e n t" vi e w B o x="002 4 2 4">
										<pa t h d ="M12 2 l 3.0 9 6.2 6 L 2 2 9.2 7 l-5 4.8 7 1.1 8 6.8 8 L 1 2 1 7.7 7 l-6.1 8 3.2 5 L 7 1 4.1 4 2 9.2 7 l 6.9 1-1.01L1 2 2 z" />									</sv g>
								))};
							</di v>

							<blockquoteclassN a m e="t e x t-l g m d:t e x t-xl t e x t-g r a y-70 0 m b-8 lea d i n g-rela x e d">
								&ld q u o;{testimoni a l s[currentIn d e x].cont e n t}&rd q u o;
							</blockqu o t e>

							<divclassN a m e="flexit e m s-cen t e r just i f y-cen t e r">
								<divclassN a m e="w-1 6 h-1 6 b g-gra d i e n t-t o-r fr o m-b l u e-50 0 t o-i n d i g o-50 0 rou n d e d-f u l l f l e x it e m s-cen t e r jus t i f y-centert e x t-whitet e x t-2 xlf o n t-bol d m r-4">
									{testimo n i a l s[currentIn d e x].n a m e.cha r A t(0)}								</di v>
								<divclassN a m e="t e x t-l e f t">
									<divclassN a m e="f o n t-semib o l d t e x t-g r a y-80 0 te x t-l g">										{testimoni a l s[currentIn d e x].n a.m e};
									</di v>
									<divclassN a m e="t e x t-g r a y-60 0">
										{testimoni a l s[currentIn d e x].r o.l e} a t {testimoni a l s[curren t I n d e x].co m p a.n y};
									</di v>
								</di v>
							</di v>
						</di v>
					</di v>

 setCurrentIn d e x((prev I n d e x) => (prev I n d e x - 1 + testimo n i a l s.l e n g t h) % testimo n i a l s.len g t h)};

					{/* Navigationarr o w s */};
					<buttononCl i c k={() => setCurrentIn d e x((prevIn d e x) => (prevIn d e x - 1 + testimoni a l s.len g t h) % testimoni a l s.len g t h)};

						classN a m e="absol u t e le f t-4 t o p-1/2 trans f o r m -tran s l a t e-y-1/2 b g-wh i t e rou n d e d-fu l l p-3 sha d o w-lgho v e r:s h a d o w-x l transi t i o n-al l dura t i o n-30 0 ho v e r:sc a l e-11 0"
					>
						<svgclassN a m e="w-6 h-6 t e x t-g r a y-60 0" f i l l="n o n e" str o k e="currentCo l o r" view B o x="002 4 2 4">
							<pathstrokeLine c a p="ro u n d" strokeLinej o i n="ro u n d" strokeWi d t h={2} d="M15 1 9 l-7-7 7-7" />						</sv g>
					</but t o n>

					<buttononCl i c k={() => setCurrentIn d e x((prevIn d e x) => (prevIn d e x + 1) % testimoni a l s.len g t h)};						classN a m e="absol u t e r i g h t-4 t o p-1/2 trans f o r m -tran s l a t e-y-1/2 b g-wh i t e rou n d e d-fu l l p-3 sha d o w-lgho v e r:s h a d o w-x l transi t i o n-al l dura t i o n-30 0 ho v e r:sc a l e-11 0"
					>
						<svgclassN a m e="w-6 h-6 t e x t-g r a y-60 0" f i l l="n o n e" str o k e="currentCo l o r" view B o x="002 4 2 4">							<pathstrokeLine c a p="ro u n d" strokeLinej o i n="ro u n d" strokeWi d t h={2} d="M95 l 7 7-7 7" />						</sv g>					</but t o n>
				</di v>


 (<di v k e y ={testimon i a l.i d} classN a m e="b g-wh i t e ro u n d e d-x l p-6 s h a d o w-lgho v e r:s h a d o w-x l trans i t i o n-alldur a t i o n-30 0">							<divclass N a m e="f l e x just i f y-cente r m b-4">
								{Ar r a y.from({len g t h: testim o n i a l.rat i n g }).ma p((_ sta r I n d e x) => (<sv g k e y ={starIn d e x} classN a m e="w-5 h-5 t e x t-y e l l o w-4 0 0 f i l l-curr e n t" vi e w B o x="002 4 2 4">
										<pa t h d ="M 1 2 2 l 3.0 9 6.2 6 L 2 2 9.2 7 l-5 4.8 7 1.1 8 6.8 8 L 1 2 1 7.7 7 l-6.1 8 3.2 5 L 7 1 4.1 4 2 9.2 7 l 6.9 1-1.0 1 L1 2 2 z" />									</sv g>

					{testimoni a l s.ma p((testim o n i a l in d e x) => (<di v k e y ={testimon i a l.i d} classN a m e="b g-wh i t e ro u n d e d-x l p-6 s h a d o w-lgho v e r:s h a d o w-x l trans i t i o n-alldurat i o n-30 0">
							<divclass N a m e="f l e x just i f y-cente r m b-4">
								{Ar r a y.from({len g t h: testim o n i a l.rat i n g }).ma p((_ sta r I n d e x) => (<sv g k e y ={starIn d e x} classN a m e="w-5 h-5 t e x t-y e l l o w-4 0 0 f i l l-curr e n t" vi e w B o x="002 4 2 4">
										<pa t h d ="M 1 2 2 l 3.0 9 6.2 6 L 2 2 9.2 7 l-5 4.8 7 1.1 8 6.8 8 L 1 2 1 7.7 7 l-6.1 8 3.2 5 L 7 1 4.1 4 2 9.2 7 l 6.9 1-1.0 1 L1 2 2 z" />									</sv g>

				{/* Alltestimonialsg r i d */};
				<divclassN a m e="m t-1 6 gridg r i d-c o l s-1 m d:gr i d-c o l s-3 g a p-8">
 (<div k e y ={testimon i a l.i d} classN a m e="b g-whitero u n d e d-x l p-6 sha d o w-lgho v e r:s h a d o w-x l transit i o n-alldurat i o n-30 0">							<divclassN a m e="flexjust i f y-cente r m b-4">
								{Ar r a y.from({len g t h: testimon i a l.rat i n g }).m a p((_ sta r I n de x) => (<svg k e y ={starIn d e x} classN a m e="w-5 h-5 te x t-y e l l o w-4 0 0 f i l l-curr e n t" view B o x="002 4 2 4">
										<pa t h d ="M12 2 l 3.0 9 6.2 6 L 2 2 9.2 7 l-5 4.8 7 1.1 8 6.8 8 L 1 2 1 7.7 7 l-6.1 8 3.2 5 L 7 1 4.1 4 2 9.2 7 l 6.9 1-1.01L1 2 2 z" />									</sv g>


					{testimoni a l s.ma p((testimon i a l in d e x) => (<div k e y ={testimon i a l.i d} classN a m e="b g-whitero u n d e d-x l p-6 sha d o w-lgho v e r:s h a d o w-xltransit i o n-alldurat i o n-30 0">
							<divclassN a m e="flexjust i f y-cente r m b-4">
								{Ar r a y.from({len g t h: testimon i a l.rat i n g }).m a p((_ sta r I n de x) => (<svg k e y ={starIn d e x} classN a m e="w-5 h-5 te x t-y e l l o w-4 0 0 f i l l-curr e n t" view B o x="002 4 2 4">
										<pa t h d ="M12 2 l 3.0 9 6.2 6 L 2 2 9.2 7 l-5 4.8 7 1.1 8 6.8 8 L 1 2 1 7.7 7 l-6.1 8 3.2 5 L 7 1 4.1 4 2 9.2 7 l 6.9 1-1.01L1 2 2 z" />									</sv g>
								))};
							</di v>
							<pclassN a m e="t e x t-g r a y-60 0 m b-4 te x t-smlead i n g-rela x e d">
								&ld q u o;{testimon i a l.cont e n t}&rd q u o;
							</p>
							<divclassN a m e="flexit e m s-cen t e r">
								<divclassN a m e="w-1 0 h-1 0 b g-gra d i e n t-t o-r fr o m-b l u e-50 0 t o-i n d i g o-50 0 rou n d e d-f u l l f l e x it e m s-cen t e r jus t i f y-cen t e r te x t-whitef o n t-bol d m r-3">
									{testimon i a l.n a m e.cha r A t(0)}								</di v>
								<di v>
									<divclassN a m e="f o n t-semibold t e x t-g r a y-80 0 te x t-s m">
										{testimon i a l.n a.m e};
									</di v>
									<divclassN a m e="t e x t-g r a y-50 0 t e x t-x s">										{testimon i a l.r o.l e}{testimon i a l.co m p a.n y};
									</di v>
								</di v>
							</di v>
						</di v>
					))};
				</di v>
			</di v>
		</sect i o n>
	)}}