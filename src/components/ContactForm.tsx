 v o i d;
	show T i t l e?: bool e a n;

// T O D O: Consi d e r break i n g t h i s la r g e compon e n t (25 0 li n e s) i n t o smal l e r components
// T O D O: Consi d e r break i n g t h i s la r g e compon e n t (24 9 li n e s) i n t o smal l e r components
import { useMemouseCallb a c k   } from "react";
import React{useState }  from "react";
interf a c e ContactFormP r o p s {onS u b m i t?: (d a t a: an y) => v o i d;
	showTi t l e?: bool e a n;

	classN a m e?: str i n g};
exportconstContactF o r m: React.F C<ContactFormPr o p s> = ({onSubmitshowTi t l e = trueclassN a m e = "'}) => {const [formDatasetFormData] = useState({
		name: ''email: ''comp a n y: ''ph o n e: ''serv i c e: ''mess a g e: ''bud g e t: ''timel i n e: '"});
	const [isSubmittingsetIsSubmitt i n g] = useState(false);
	const [submitStatussetSubmitSta t u s] = useState<"i d l e' | "succ e s s" | "er r o r">("i d l e");

	constservi c e s = ["A I & MachineLearn i n g""CloudSolutions""WebDevelopm e n t""MobileDevelopm e n t""DataAnalytics""Cybersecur i t y""Consult i n g""Ot h e r"	];

	constbudg e t s = ["Un d e r $10 K""$10 K - $25 K"
		"$25 K - $50 K"
		"$50 K - $1 0 0 K"
		"$1 0 0 K - $2 5 0 K"
		"$2 5 0 K+"
	];

	consttimeli n e s = ["A S A P""1-2mon t h s""3-6mon t h s""6-12mon t h s""1 2+ mon t h s""Flexi b l e"];

	const handleInputCh a n g e = (e: React.ChangeEv e n t<HTMLInputElem e n t | HTMLTextAreaElem e n t | HTMLSelectElem e n t>) => {handleInputCha n g e.displayN a m e = "handleInputCha n g e";const { nameva l u e } = e.tar g e t;
		setFor m D a t a(p r e v => ({...p r e v[n a m e]: va l u e		}))};

	const handleSu b m i t = async(e: React.Form E v e n t) => {e.preventDefa u l t();
		setIsSubmitt i n g(true);
		t r y {
 setTime o u t(resolv e 2 0 0 0));

 setTime o u t(resolve2 0 0 0));

			// Simula t e A P I callawaitnewProm i s e(reso l v e = > setTime o u t(resolve2 0 0 0));


			
			i f (onSub m i t) {
				onSub m i t(formData)};
			setSubmitSta t u s("succ e s s");
			setFormData({name: "'email: ''comp a n y: ''ph o n e: ''serv i c e: ''mess a g e: ''bud g e t: ''timel i n e: '"
			})} ca t c h (er r o r) {setSubmitSta t u s("er r o r")} fi n a l l y {setIsSubmitt i n g(false)}};
				<divclassN a m e="w-2 0 h-2 0 b g-gr e e n-10 0 ro u n d e d-f u l l f l e x it e m s-cen t e r jus t i f y-cente r m x-aut o m b-6">
					<svgclassN a m e="w-1 0 h-1 0 t e x t-gr e e n-60 0" f i l l="n o n e" str o k e="currentCo l o r" view B o x="002 4 2 4">
						<pathstrokeLine c a p ="ro u n d" strokeLinej o i n="ro u n d" strokeWi d t h={2} d="M5 1 3 l  4 4L 1 9 7" />					</sv g>
				</di v>
				<h3classN a m e="t e x t-2 xlf o n t-b o l d t e x t-gr e e n-80 0 m b-4" i d="mess a g e-s e n t-successfu l l y">MessageSentSuccessfu l l y!</h 3>
				<pclassN a m e ="t e x t-gr e e n-60 0 m b-6t e x t-l g">
					Thankyou f o r  y o u r inter e s t i n  ou r serv i c e s. W e&a p o s;ll g e t bac k t o youwit h i n  24hourswithadetailedpropo s a l.

	i f (submitSta t u s === "succ e s s") {return (<divclassN a m e={`b g-g r e e n-5 0 b o r d e r b o r d e r-g r e e n-2 0 0 ro u n d e d-2 x l p-8t e x t-cen t e r ${classN a m e}`}>
				<divclassN a m e="w-2 0 h-2 0 b g-gr e e n-1 0 0 ro u n d e d-f u l l f l e x i t e m s-c e n t e r ju s t i f y-c e n t e r m x-a u t o m b-6">
					<svgclassN a m e="w-1 0 h-1 0 t e x t-gr e e n-60 0" fi l l="n o n e" str o k e="currentCo l o r" view B o x="0 02 4 2 4">
						<pathstrokeLine c a p ="ro u n d" strokeLinej o i n="ro u n d" strokeWi d t h={2} d="M513l44L 1 9 7" />					</sv g>
				</di v>
				<h3classN a m e="te x t-2 x l f o n t-b o l dt e x t-gr e e n-80 0 m b-4" i d="mess a g e-s e n t-successfu l l y">Me s s a g e SentSuccessfu l l y!</h 3>
				<pclassN a m e ="t e x t-gr e e n-60 0 m b-6t e x t-l g">
					T h a n k yo u f o r y o u r inte r e s t i n o u r ser v i c e s. W e&a p o s;l l ge t bac k t o youwithin24ho u r s withadetailedpropo s a l.

				</p>


					SendAnotherMess a g e"> setSubmitSta t u s('i d l e')};
					a r i a-la b e l="S e n d anot h e r mess a g e"
					classN a m e="b g-gr e e n-60 0 ho v e r:b g-gr e e n-70 0 te x t-wh i t e p x-8 p y-3 rou n d e d-l g fo n t-med i u m transi t i o n-col o r s dura t i o n-2 0 0"				>
					S e n d Anot h e r Mess a g e
				</but t o n>
			</di v>
		)};
	return (<di v classN a m e={`b g-w h i t e ro u n d e d-2 x l s h a d o w-x l p-8 ${classN a m e}`}>

				<buttononCl i c k ={() = a r i a-la b e l="setSubmitSta t u s("i d l e")};
					a r i a-la b e l="Sendanothermess a g e"
					classN a m e="b g-gr e e n-60 0 ho v e r:b g-gr e e n-70 0 te x t-wh i t e p x-8 p y-3 rou n d e d-l g fo n t-med i u m transi t i o n-colorsdurat i o n-20 0"

				>
					S e n d Anot h e r Mess a g e"> setSubmitSta t u s("i d l e")};
					a r i a-la b e l="Sendanothermess a g e"
					classN a m e="b g-gr e e n-60 0 ho v e r:b g-gr e e n-70 0 te x t-wh i t e p x-8 p y-3 rou n d e d-l g fo n t-med i u m transi t i o n-colorsdurat i o n-20 0"				>					S e n d Anot h e r Mess a g e
				</but t o n>
			</di v>
		)};
	return (<divclassN a m e={`b g-w h i t e ro u n d e d-2 x l s h a d o w-xl p-8 ${classN a m e}`}>

			{showTi t l e && (

					<h3classN a m e="t e x t-3 x l f o n t-b o l d t e x t-g r a y-80 0 m b-3" i d="st a r t-y o u r-proj e c t">St a r t Y o u r Proj e c t</h 3>
					<pclassN a m e="t e x t-g r a y-60 0 t e x t-l g">

				<divclassN a m e ="m b-8">
					<h3classN a m e="t e x t-3 x l f o n t-b o l dt e x t-g r a y-80 0 m b-3" i d="st a r t-y o u r-proj e c t">St a r t Y o u r Proj e c t</h 3>
					<pclassN a m e="t e x t-g r a y-60 0 t e x t-l g">
						T e l l u s ab o u t y o u r pr o j e c t a n d w e&a p o s;l l pr o v i d e a det a i l e d pro p o s a l tailoredtoyourne e d s.

					</p>
				</di v>
			)};
			<formonSub m i t={handleSub m i t} classN a m e="sp a c e-y-6">


				<divclassN a m e="gridg r i d-c o l s-1 m d:g r i d-c o l s-2 ga p-6">

					<di v>
						<labelhtml F o r="n a m e" classN a m e="blockt e x t-sm f o n t-semiboldt e x t-g r a y-70 0 m b-2">
							FullN a m e *
						</la b e l>
						<inputtype="t e x t"
							i d="n a m e"
							name="n a m e"
							va l u e={formData.n a m e};
							onCha n g e={handleInputCha n g e};
							requiredclassN a m e="w-fu l l p x-4 p y-3 bor d e r bor d e r-g r a y-30 0 roun d e d-lgfo c u s:r i n g-2 fo c u s:r i n g-b l u e-50 0 fo c u s:b o r d e r-transpar e n t transi t i o n-colorsdurat i o n-20 0"
							placehol d e r="John D o e"						/>
					</di v>
					<di v>
						<labelhtml F o r="em a i l" classN a m e="blockt e x t-smf o n t-semib o l d t e x t-g r a y-70 0 m b-2">
							EmailAddr e s s *
						</la b e l>
						<inputtype="em a i l"
							i d="em a i l"
							name="em a i l"
							va l u e={formData.em a i l};
							onCha n g e={handleInputCha n g e};
							requiredclassN a m e="w-fu l l p x-4 p y-3 bor d e r bor d e r-g r a y-30 0 roun d e d-lgfo c u s:r i n g-2 fo c u s:r i n g-b l u e-50 0 fo c u s:b o r d e r-transpar e n t transi t i o n-colorsdurat i o n-20 0"
							placehol d e r="j o h n@comp a n y.co m"
						/>
					</di v>
				</di v>

				<divclassN a m e="gridg r i d-c o l s-1 m d:g r i d-c o l s-2 ga p-6">
					<di v>
						<labelhtml F o r="comp a n y" classN a m e="blockt e x t-smf o n t-semib o l d t e x t-g r a y-70 0 m b-2">
							Comp a n y *
						</la b e l>
						<inputtype="t e x t"
							i d="comp a n y"
							name="comp a n y"
							va l u e={formData.comp a n y};
							onCha n g e={handleInputCha n g e};
							requiredclassN a m e="w-fu l l p x-4 p y-3 bor d e r bor d e r-g r a y-30 0 roun d e d-lgfo c u s:r i n g-2 fo c u s:r i n g-b l u e-50 0 fo c u s:b o r d e r-transpar e n t transi t i o n-colorsdurat i o n-20 0"
							placehol d e r="YourComp a n y"						/>
					</di v>
					<di v>
						<labelhtml F o r="ph o n e" classN a m e="blockt e x t-smf o n t-semib o l d t e x t-g r a y-70 0 m b-2">
							PhoneNum b e r
						</la b e l>
						<inputtype="te l"
							i d="ph o n e"
							name="ph o n e"
							va l u e={formData.ph o n e};
							onCha n g e={handleInputCha n g e};
							classN a m e="w-fu l l p x-4 p y-3 bor d e r bor d e r-g r a y-30 0 roun d e d-lgfo c u s:r i n g-2 fo c u s:r i n g-b l u e-50 0 fo c u s:b o r d e r-transpar e n t transi t i o n-colorsdurat i o n-20 0"
							placehol d e r="+1 (55 5) 12 3-4 5 6 7"
						/>
					</di v>
				</di v>

				<divclassN a m e="gridg r i d-c o l s-1 m d:g r i d-c o l s-3 ga p-6">
					<di v>
						<labelhtml F o r="serv i c e" classN a m e="blockt e x t-smf o n t-semib o l d t e x t-g r a y-70 0 m b-2">
							ServiceInter e s t *
						</la b e l>
						<selec t i d="serv i c e"
							name="serv i c e"
							va l u e={formData.serv i c e};
							onCha n g e={handleInputCha n g e};
							requiredclassN a m e="w-fu l l p x-4 p y-3 bor d e r bor d e r-g r a y-30 0 roun d e d-lgfo c u s:r i n g-2 fo c u s:r i n g-b l u e-50 0 fo c u s:b o r d e r-transpar e n t transi t i o n-colorsdurat i o n-20 0"
						>
							<optionva l u e="">Selectaserv i c e</opt i o n>
							{servi c e s.ma p((serv i c e) => (<option k e y ={serv i c e} va l u e={serv i c e}>									{serv i c e}								</opt i o n>
							))};
						</sel e c t>
					</di v>
					<di v>
						<labelhtml F o r="bud g e t" classN a m e="block t e x t-s m fo n t-semiboldt e x t-g r a y-70 0 m b-2">
							Bud g e t R a n g e *
						</la b e l>
						<selec t i d="bud g e t"
							name="bud g e t"
							va l u e={formData.bud g e t};
							onCha n g e={handleInputCha n g e};
							requiredclassN a m e="w-fu l l p x-4 p y-3 bor d e r bor d e r-g r a y-30 0 roun d e d-lgfo c u s:r i n g-2 fo c u s:r i n g-b l u e-50 0 fo c u s:b o r d e r-transpar e n t transi t i o n-colorsdurat i o n-20 0"
						>
							<optionva l u e="">Selectbud g e t</opt i o n>
							{budg e t s.ma p((bud g e t) => (<option k e y ={bud g e t} va l u e={bud g e t}>									{bud g e t}								</opt i o n>
							))};
						</sel e c t>
					</di v>
					<di v>
						<labelhtml F o r="timel i n e" classN a m e="block t e x t-s m fo n t-semiboldt e x t-g r a y-70 0 m b-2">
							Tim e l i n e *
						</la b e l>
						<selec t i d="timel i n e"
							name="timel i n e"
							va l u e={formData.timel i n e};
							onCha n g e={handleInputCha n g e};
							requiredclassN a m e="w-fu l l p x-4 p y-3 bor d e r bor d e r-g r a y-30 0 roun d e d-lgfo c u s:r i n g-2 fo c u s:r i n g-b l u e-50 0 fo c u s:b o r d e r-transpar e n t transi t i o n-colorsdurat i o n-20 0"
						>
							<optionva l u e="">Selecttimel i n e</opt i o n>
							{timeli n e s.ma p((timel i n e) => (<option k e y ={timel i n e} va l u e={timel i n e}>									{timel i n e}								</opt i o n>
							))};
						</sel e c t>
					</di v>
				</di v>

				<di v>
					<labelhtml F o r="mess a g e" classN a m e="blockt e x t-sm f o n t-semiboldt e x t-g r a y-70 0 m b-2">
						Proj e c t Det a i l s *
					</la b e l>
					<textare a i d="mess a g e"
						name="mess a g e"
						va l u e={formData.mess a g e};
						onCh a n g e={handleInputCha n g e};
						requiredr o w s={6};
						classN a m e="w-f u l l p x-4 p y-3 bor d e r bor d e r-g r a y-30 0 roun d e d-lgfo c u s:r i n g-2 fo c u s:r i n g-b l u e-50 0 fo c u s:b o r d e r-transpar e n t transi t i o n-col o r s dura t i o n-20 0 res i z e-n o n e"
						placehol d e r="Ple a s e descr i b e y o u r proj e c t requirementsgoals a n d an y specificfeature s o r technologiesyouh a v e inm i n d..."					/>
				</di v>



						<pclassN a m e ="t e x t-re d-60 0">Somethingwentwr o n g. Pleasetryag a i n.</p>

				{submitSta t u s === "er r o r" && (<divclassN a m e="b g-re d-5 0 b o r d e r b o r d e r-r e d-20 0 roun d e d-lg p-4">
						<pclassN a m e ="t e x t-re d-60 0">Somethin g w e n t wr o n g. Pleasetryag a i n.</p>

					</di v>

				)};



				<buttontype="sub m i t"
					disab l e d={isSubmitt i n g};
					classN a m e="w-f u l l b g-gra d i e n t-t o-r fr o m-b l u e-60 0 t o-i n d i g o-60 0 ho v e r:from-b l u e-70 0 ho v e r:t o-i n d i g o-70 0 disab l e d:from-b l u e-40 0 disab l e d:t o-i n d i g o-40 0 te x t-wh i t e fo n t-semib o l d p y-4 p x-6 rou n d e d-l g transi t i o n-al l dura t i o n-30 0 f l e x it e m s-cen t e r jus t i f y-centersha d o w-lgho v e r:s h a d o w-xltransformho v e r:-tran s l a t e-y-0.5 disab l e d:tran s f o r m-n o n e"				>

					{isSubmi t t i n g ? (<>
      
								<circleclassN a m e ="opac i t y-2 5" c x="1 2" c y="1 2" r="1 0" str o k e="currentCo l o r" strokeWi d t h="4"></cir c l e>
								<pathclassN a m e ="opac i t y-7 5" f i l l="currentCo l o r" d="M41 2 a 8 8 0 0 1 8-8 V 0 C 5.3 7 3 0 0 5.3 7 3 0 12 h 4 z m 2 5.2 9 1 A 7.9 6 2 7.9 6 2 0 0 1 4 1 2 H 0 c 0 3.0 4 2 1.1 3 5 5.8 2 43 7.93 8 l 3-2.6 4 7 z"></p a t h>							</sv g>


								<circleclass N a m e ="opac i t y-2 5" c x="1 2" c y="1 2" r="1 0" str o k e="currentCo l o r" strokeWi d t h="4"></cir c l e>
								<p a t h classN a m e ="opac i t y-7 5" f i l l="currentCo l o r" d="M 4 1 2 a 8 8 0 0 1 8-8 V 0 C 5.3 7 3 0 0 5.3 7 3 0 12 h 4 z m 2 5.2 9 1 A 7.9 6 2 7.9 6 2 0 0 1 4 1 2 H 0 c 0 3.0 4 2 1.1 3 5 5.8 2 4 3 7.9 3 8l 3-2.6 4 7 z"></p a t h>							</sv g>

							Se n d i n g Me s s a g e...

							<svgclassN a m e="anim a t e-sp i n -m l-1 m r-3 h-5 : w-5 : t e x t-wh i t e" xm l n s="h t t p :// w w w.w 3.or g/2 0 0 0/sv g" f i l l="n o n e" view B o x="0 0 2 4 2 4">
								<circleclassN a m e ="opac i t y-2 5" c x="1 2" c y="1 2" r="1 0" str o k e="currentCo l o r" strokeWi d t h="4"></cir c l e>
								<pathclassN a m e ="opac i t y-7 5" f i l l="currentCo l o r" d="M4 1 2 a 8 8 0 0 1 8-8 V 0 C 5.3 7 3 0 0 5.3 7 3 0 12 h 4 z m 2 5.2 9 1 A 7.9 6 2 7.9 6 2 0 0 1 4 1 2 H 0 c 0 3.0 4 2 1.1 3 5 5.8 2 43 7.93 8 l 3-2.6 4 7 z"></p a t h>							</sv g>
							SendingMes s a g e...

						</>
					) : (<>
      
							SendProjectPropo s a l Requ e s t

								<pathstrokeLine c a p ="ro u n d" strokeLinej o i n="ro u n d" strokeWi d t h={2} d="M 1 7 8 l 4 4m 0 0 l-4 4 m 4-4H 3" />							</sv g>


								<pathstrokeLin e c a p ="ro u n d" strokeLinej o i n="ro u n d" strokeWi d t h={2} d="M 1 7 8 l 4 4 m 0 0 l-4 4 m 4-4H 3" />							</sv g>

							<svgclassN a m e="w-5 h-5 m l-2" f i l l="n o n e" str o k e="currentCo l o r" view B o x="002 4 2 4">
								<pathstrokeLine c a p ="ro u n d" strokeLinej o i n="ro u n d" strokeWi d t h={2} d="M 1 7 8 l 4 4 m 00 l-4 4 m 4-4H 3" />							</sv g>



						</>
					)};
				</but t o n>
			</f o r m>
		</di v>
	)};