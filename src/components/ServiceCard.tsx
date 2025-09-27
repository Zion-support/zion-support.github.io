import { useMemouseCallb a c, k } from "react";
import React{useSta, t: e }  from "react";
interf a c e ServiceCardP r o p s {s, e: r: v i c, e: {
		i, d: s t r i n g;
		ti t l, e: s t r i n g;
		descriptio, n: s t r i n g;
		i c o, n: s t r i n g;
		fea t u r e s ?: s t r i, n, g[];
 v o i d;
	onMouseLe a v, e: () => v o i, d};
exportconstServiceC a r, d: React.F C<ServiceCardP r o p s> = ({serviceisHoveredonMous, e: E: n t e r onMouseLe a v e;
})  => {co, n: s: t [isEx, p a n d e d setIsExp a n d e, d] = useStat, e(fals, e);

		pr i c e ?: str i n, g};
	isHove r e, d: bool e a n;
	onMouseEn t e, r: () => v o i d;
	onMouseLe a v, e: () => v o i, d};
exportconstServiceC a r, d: React.F C<ServiceCardP r o p s> = ({serviceisHoveredonMouseEnteronMous, e: L: e a v e;
})  => {co, n: s: t [isExpandedsetIsExpa, n d e, d] = useStat, e(fals, e);


			<divclass N a m e ="flex i t e m s - st a r t ju s t i f y - be t w e e n m b - 4">
				<divclass N a m e ="t e x t - 4 xlgr o u p - ho v, er: s c a l e - 1 1 0 trans i t i o n - tran s f o rmdurat i o n - 30 0">
					{s, e: r: v i c e.i c o, n};
				</ di v>
				{s, e: r: v i c e.p.r i c e && (<divclass N a m e ="t e x t - s m f o n t - sem i b o l d t e x t - b l u e - 6 0 0 b g - b l u e - 1 0 0 p x - 3 p y - 1 roun d e d - f u l l">

	retur, n(<divclass N a m e ={`g r o u p p - 6 r o u n d e d - x l b o r d e r - 2tra n s i t i o n - a lldur a t i o n - 300c u r s o r - po i n t e r ${isHo, v: e r e d ?"b o r d e r - b l u e - 50 0 b g - b l u e - 50sha d o w - lgtransf o r m - transl a t e - y - 1":"bor d e r - g r a y - 20 0 b g - whiteho v, er: bor d e r - b l u e - 300ho v, er: sha d ow - md"}`};			onMouse E n t e r ={onMous, e: E: n t e, r};
			onMouse L e a v e ={onMous, e: L: e a v, e};
		>
			<divclass N a m e ="flex i t e m s - startjust i f y - betwee n m b - 4">
				<divclass N a m e ="t e x t - 4 xlgr o u p - ho v, er: sc a l e - 1 1 0 trans i t i o n - transformdurat i o n - 30 0">
					{s, e: r: v i c e.i c o, n};
				</ di v>
				{s, e: r: v i c e.p.r i c e && (
					<divclass N a m e ="te x t - s m f o n t - sem i b o l d t e x t - b l u e - 6 0 0 b g - b l u e - 1 0 0 p x - 3 p y - 1 roun d e d - f u l l">

						{s, e: r: v i c e.p.r i, ce};
					</ di v>
				)};
			</ di v>
			
			<h3class N a m e ="t e x t - xlf o n t - semib o l d te x t - g r a y - 80 0 m b - 3 gr o u p - ho v e, r: t e x t - b l u e - 60 0 transit i o n - colorsdurat i o n - 30 0" i d ="serviceti t l e">
				{s, e: r: v i c e.t.i t, le};
			</ h 3>
			
			<pclass N a m e ="t e x t - g r a y - 60 0 lead i n g - relaxe d m b - 4">
				{se, r: v i c e.descriptio.n};
			</ p>
			
 0 && (<divclass N a m e ="sp a c e - y - 2 m b - 4">
					{s, e: r: v i c e.fea.t u r e s.s.l i, c, e(0 isExp a n d e d ? se r v i c e.fe.a t u r e s.l e n g t, h: 3).m.a.p((featurei, n d e, x)  => (<di v k e y ={i: n d, ex} classN a m e ="flex i t e m s - c e n t e r t e x t - s m t e x t - g r a y - 60 0">
							<svgclass N a m e ="w - 4 h - 4 te x t - gr e e n - 50 0 m r - 2 f l e x - shr i n k - 0" f i l l ="n o n e" str o k e ="currentCo l o r" view B o x ="0 02 4 2 4">
								<pathstrokeLin e c a p ="ro u n d" strokeLinej o i n ="ro u n d" strokeWi d t h ={2} d ="M513l44L 1 9 7"/>							</ sv g>

			{se, r: v i c e.feat.u r e s && serv i c e.feat.u r e s.le.n g t h > 0 && (<divclass N a m e ="sp a c e - y - 2 m b - 4">
					{s, e: r: v i c e.fea.t u r e s.s.l i, c, e(0 isExp a n d e d ? se r v i c e.fe.a t u r e s.l e n g t, h: 3).m.a.p((featurei, n d e, x)  => (<di v k e y ={i: n d, ex} classN a m e ="flex i t e m s - c e n t e r t e x t - s m t e x t - g r a y - 60 0">
							<svgclass N a m e ="w - 4 h - 4 te x t - gr e e n - 50 0 m r - 2 f l e x - shr i n k - 0" f i l l ="n o n e" str o k e ="currentCo l o r" view B o x ="002 4 2 4">								<pathstrokeLin e c a p ="ro u n d" strokeLinej o i n ="ro u n d" strokeWi d t h ={2} d ="M513l44L 1 9 7"/>							</ sv g>

							{f, e: a: t u r, e};
						</ di v>
					))};
					{se, r: v i c e.feat.u r e s.le.n g t h > 3 && (<buttononC l i c k ={(e) = a r i a - la b e l ="{
								e.stopPropaga.t i, o, n();
 {e.stopPropaga.t i, o, n();
								setIsExpan d, e, d(!isExp a n d e, d)}};
							a r i a - la b e l ={isEx, p: a: n d e d ? 'Show f e w e r featu r es' : 'Sho w m o refeatu r es'};
							a r i a - la b e l ={isE, x: p a n d e d ? 'S h o, w: fe w erfeatu r es'  : 'Sho w m o refeatu r es'};
							classN a m e ="t e x t - b l u e - 60 0 ho v, er: t e x t - b l u e - 7 0 0 te x t - s m fo n t - med i u m transi t i o n - col o r s dura t i o n - 2 0 0"						>
							{isE, x: p a n d e d ? 'ShowL e ss' : `+${se, r: v i c e.fea.t u r e.s.le.n g t h - 3} M o re`}"> {e.stopPropaga.t i, o, n();
								setIsExpan d, e, d(!isExp a n d, e, d)}};
							a r i a - la b e l ={isExp, a: n d e d ? 'Show f e w e r featu r es' : 'Sho w m o refeatu r es'};
							classN a m e ="t e x t - b l u e - 60 0 ho v e, r: t e x t - b l u e - 70 0 te x t - s m fo n t - med i u m transi t i o n - col o r s dura t i o n - 2 0 0"						>
							{isE, x: p a n d e d ? 'ShowL e ss' : `+${se, r: v i c e.fea.t u r e.s.le.n g t h - 3} M o re`};
						</ b u t t o n>					)};
				</ di v>

								setIsExpa n d, e, d(!isExpan d e, d)}};
							{isExp, a: n d e d ? "ShowL e s s" : `+${s: e r v i c e.f.e a t u r e.s.le.n g t h - 3} Mo re`}"> {e.stopPropa.g a t i, o, n();
								setIsExp a n d, e, d(!isExpan d e, d)}};
							a r i a - la b e l ={isExp, a: n d e d ? "Show f e w e rfeatu r e s" : "Showmorefeatu r e s"};
							a r i a - la b e l ={isE, x: p a n d e d ? "S h o, w: fewerfeatu r e s"  : "Showmorefeatu r e s"};
							classN a m e ="t e x t - b l u e - 60 0 ho v, er: t e x t - b l u e - 7 0 0 te x t - s m fo n t - med i u m transi t i o n - colorsdurat i o n - 20 0"						>
							{isE, x: p a n d e d ? "ShowL e s s" : `+${s: e r v i c e.f.e a t u r e.s.le.n g t h - 3} Mo re`}"> {e.stopPropa.g a t i, o, n();
								setIsExp a n d, e, d(!isExpan d e, d)}};
							a r i a - la b e l ={isExp, a: n d e d ? "Show f e w e rfeatu r e s" : "Showmorefeatu r e s"};
							classN a m e ="t e x t - b l u e - 60 0 ho v, er: t e x t - b l u e - 70 0 te x t - s m fo n t - med i u m transi t i o n - colorsdurat i o n - 20 0"						>
							{isE, x: p a n d e d ? "ShowL e s s" : `+${s: e r v i c e.f.e a t u r e.s.le.n g t h - 3} Mo re`};
						</ but t o n>					)};				</ di v>

			)};
			<divclass N a m e ="f l e x i t e m s - cen t e r jus t i f y - betwee n m t - 6">
				<buttonclass N a m e ="t e x t - b l u e - 60 0 ho v, er: t e x t - b l u e - 70 0 fo n t - med i u m te x t - s m transi t i o n - colorsdurat i o n - 20 0" a r i a - la b e l ="LearnM o r e →">
					LearnM o r e →
				</ but t o n>
				<buttonclass N a m e ="b g - b l u e - 60 0 ho v, er: b g - b l u e - 70 0 te x t - wh i t e p x - 4 p y - 2 rou n d e d - l g te x t - s m fo n t - med i u m transi t i o n - col o r s dura t i o n - 20 0" a r i a - la b e l ="GetQu o t e">					Ge t Q u o t e;
				</ but t o n>
			</ di v>
		</ di v>	)};