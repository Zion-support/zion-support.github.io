import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import EnhancedSEO from '../src/components/EnhancedSEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Blog(): JSX.Element {
	const [isNewsletterLoading, setIsNewsletterLoading] = useState(false);
	const { trackClick } = useAnalytics();

	const blogPosts = [
		{
			id: 1
			title: 'The Future of AI in Business: Trends and Predictions for 2024'
			exce r p t: 'Expl o r e th e lat e s t A I tre n d s shap i n g th e busin e s s landsc a p e an d ho w compan i e s ar e leverag i n g artific i a l intellige n c e fo r competit i v e advant a g e.'
			author: 'Sarah Johnson'
			d a t e: '2 0 2 4-0 1-1 5'
			readT i m e: '5 mi n r e a d'
			categ o r y: 'A I & Mach i n e Learn i n g'
			image: '/ap i/placehol d e r/60 0/30 0'
			s l u g: 'fut u r e-a i-busin e s s-2 0 2 4'
		}
		{
			i d: 2
			ti t l e: 'Cl o u d Migrat i o n B e s t Practi c e s: A Compl e t e Gu i d e'
			exce r p t: 'Le a r n th e essent i a l strateg i e s an d considerati o n s fo r successfu l l y migrat i n g y o u r infrastruct u r e t o th e cl o u d.'
			aut h o r: 'Mich a e l C h e n'
			d a t e: '2 0 2 4-0 1-1 2'
			readT i m e: '8 mi n r e a d'
			categ o r y: 'Cl o u d Comput i n g'
			image: '/ap i/placehol d e r/60 0/30 0'
			s l u g: 'cl o u d-migrat i o n-b e s t-practi c e s'
		}
		{
			i d: 3
			ti t l e: 'Build i n g Scala b l e We b Applicati o n s w i t h Mod e r n Architect u r e'
			exce r p t: 'Disco v e r th e architectu r a l patte r n s an d technolog i e s t h a t ena b l e we b applicati o n s t o sc a l e efficien t l y an d relia b l y.'
			aut h o r: 'Em i l y Rodrig u e z'
			d a t e: '2 0 2 4-0 1-1 0'
			readT i m e: '6 mi n r e a d'
			categ o r y: 'We b Developm e n t'
			image: '/ap i/placehol d e r/60 0/30 0'
			s l u g: 'scala b l e-we b-applicati o n s-architect u r e'
		}
		{
			i d: 4
			ti t l e: 'Digi t a l Transformat i o n: A Strate g i c Appro a c h'
			exce r p t: 'Underst a n d ho w t o p l a n an d exec u t e a success f u l digi t a l transformat i o n initiat i v e t h a t dri v e s r e a l busin e s s va l u e.'
			aut h o r: 'Da v i d Ki m'
			d a t e: '2 0 2 4-0 1-0 8'
			readT i m e: '7 mi n r e a d'
			categ o r y: 'Digi t a l Transformat i o n'
			image: '/ap i/placehol d e r/60 0/30 0'
			s l u g: 'digi t a l-transformat i o n-strate g i c-appro a c h'
		}
		{
			i d: 5
			ti t l e: 'Cybersecur i t y i n th e Cl o u d: Essent i a l Protect i o n Strateg i e s'
			exce r p t: 'Le a r n ab o u t th e criti c a l secur i t y considerati o n s an d b e s t practi c e s fo r protect i n g cl o u d-ba s e d applicati o n s an d d a t a.'
			author: 'Sarah Johnson'
			d a t e: '2 0 2 4-0 1-0 5'
			readT i m e: '9 mi n r e a d'
			categ o r y: 'Cybersecur i t y'
			image: '/ap i/placehol d e r/60 0/30 0'
			s l u g: 'cybersecur i t y-cl o u d-protect i o n-strateg i e s'
		}
		{
			i d: 6
			ti t l e: 'Th e R i s e o f E d g e Comput i n g: Opportunit i e s an d Challen g e s'
			exce r p t: 'Expl o r e ho w e d g e comput i n g i s revolutioniz i n g d a t a process i n g an d w h a t i t me a n s fo r th e fut u r e o f technol o g y.'
			aut h o r: 'Mich a e l C h e n'
			d a t e: '2 0 2 4-0 1-0 3'
			readT i m e: '6 mi n r e a d'
			categ o r y: 'E d g e Comput i n g'
			image: '/ap i/placehol d e r/60 0/30 0'
			s l u g: 'e d g e-comput i n g-opportunit i e s-challen g e s'
		}
	];

	const categor i e s = ['al l' 'A I & Mach i n e Learn i n g' 'Cl o u d Comput i n g' 'We b Developm e n t' 'Digi t a l Transformat i o n' 'Cybersecur i t y' 'E d g e Comput i n g'];

	const filteredPo s t s = blogPo s t s.fil t e r(p o s t => 
		categor i e s.inclu d e s('al l') || p o s t.categ o r y === categor i e s.f i n d(ca t => ca t !== 'al l')
	);

	const handleNewsletterSub m i t = async (e: React.FormEv e n t) => {
		e.preventDefa u l t();
		setIsNewsletterLoading(true);
		
		// Simul a t e AP I c a l l
		aw a i t ne w Prom i s e(reso l v e => setTime o u t(reso l v e 2 0 0 0));
		
		setIsNewsletterLoading(false);
		trackClick('newslet t e r-subscr i b e' 'engagem e n t');
		al e r t('Th a n k yo u fo r subscrib i n g t o ou r newslet t e r!')};

	return (
		<>
			<EnhancedSEO />
			<Head>
				<title>Blog - Z i o n Ap p</title>
				<meta name="description" content="S t a y upda t e d w i t h th e lat e s t insig h t s o n A I cl o u d comput i n g we b developm e n t an d digi t a l transformat i o n from ou r exp e r t t e a m." />
				<meta name="viewp o r t" content="wi d t h=dev i c e-wi d t h init i a l-sc a l e=1" />
			</Head>
			<di v classN a m e="mi n-h-scr e e n b g-gradi e n t-t o-b r from-b l u e-5 0 t o-ind i g o-10 0 p t-2 0">
				<di v classN a m e="contai n e r m x-a u t o p x-4 p y-8 ma x-w-7x l">
					<na v classN a m e="m b-8">
						<Link href="/" classN a m e="t e x t-b l u e-60 0 ho v e r:t e x t-b l u e-80 0 f o n t-med i u m transit i o n-col o r s">
							← B a c k t o H o m e
						</Link>
					</na v>

					<hea d e r classN a m e="t e x t-cen t e r m b-1 6">
						<h 1 classN a m e="t e x t-5x l m d:t e x t-6x l f o n t-b o l d t e x t-b l u e-60 0 m b-4 b g-gradi e n t-t o-r from-b l u e-60 0 t o-ind i g o-60 0 b g-c l i p-t e x t t e x t-transpar e n t">
							Ou r Blog
						</h 1>
						<p classN a m e="t e x t-x l t e x t-g r a y-60 0 ma x-w-3x l m x-a u t o lead i n g-rela x e d">
							Insig h t s tre n d s an d exp e r t perspecti v e s o n technol o g y innovat i o n an d digi t a l transformat i o n.
						</p>
					</hea d e r>

					<m a i n>
						{/* Categ o r y Fil t e r */}
						<sect i o n classN a m e="m b-1 2">
							<di v classN a m e="f l e x f l e x-w r a p just i f y-cen t e r ga p-4">
								{categor i e s.ma p((categ o r y) => (
									<but t o n
										ke y={categ o r y}
										classN a m e={`p x-6 p y-3 roun d e d-f u l l f o n t-semib o l d transit i o n-col o r s ${
											categ o r y === 'al l'
												? 'b g-b l u e-60 0 t e x t-wh i t e sha d o w-m d'
												: 'b g-wh i t e t e x t-g r a y-80 0 ho v e r:b g-g r a y-10 0 sha d o w-s m'
										}`}
										onCl i c k={() => trackClick(`b l o g-categ o r y-${categ o r y}` 'navigat i o n')}
									>
										{categ o r y === 'al l' ? 'Al l Po s t s' : categ o r y}
									</but t o n>
								))}
							</di v>
						</sect i o n>

						{/* Blog Po s t s G r i d */}
						<sect i o n classN a m e="g r i d g r i d-c o l s-1 m d:g r i d-c o l s-2 l g:g r i d-c o l s-3 ga p-8 m b-1 6">
							{filteredPo s t s.ma p((p o s t) => (
								<arti c l e ke y={p o s t.i d} classN a m e="b g-wh i t e roun d e d-2x l sha d o w-l g overf l o w-hid d e n ho v e r:sha d o w-x l transit i o n-sha d o w">
									<di v classN a m e="relat i v e h-4 8">
										<Image
											sr c={p o s t.image}
											al t={p o s t.ti t l e}
											f i l l
											classN a m e="object-co v e r"
										/>
										<di v classN a m e="absol u t e to p-4 l e f t-4">
											<s p a n classN a m e="b g-b l u e-60 0 t e x t-wh i t e p x-3 p y-1 roun d e d-f u l l t e x t-s m f o n t-med i u m">
												{p o s t.categ o r y}
											</s p a n>
										</di v>
									</di v>
									<di v classN a m e="p-6">
										<di v classN a m e="f l e x it e m s-cen t e r t e x t-s m t e x t-g r a y-50 0 m b-3">
											<s p a n>{p o s t.aut h o r}</s p a n>
											<s p a n classN a m e="m x-2">•</s p a n>
											<s p a n>{p o s t.d a t e}</s p a n>
											<s p a n classN a m e="m x-2">•</s p a n>
											<s p a n>{p o s t.readT i m e}</s p a n>
										</di v>
										<h 2 classN a m e="t e x t-x l f o n t-b o l d t e x t-g r a y-90 0 m b-3 l i n e-cl a m p-2">
											{p o s t.ti t l e}
										</h 2>
										<p classN a m e="t e x t-g r a y-60 0 m b-4 l i n e-cl a m p-3">
											{p o s t.exce r p t}
										</p>
										<Link 
											href={`/b l o g/${p o s t.s l u g}`}
											classN a m e="t e x t-b l u e-60 0 f o n t-semib o l d ho v e r:t e x t-b l u e-80 0 transit i o n-col o r s"
											onCl i c k={() => trackClick(`b l o g-p o s t-${p o s t.s l u g}` 'engagem e n t')}
										>
											R e a d M o r e →
										</Link>
									</di v>
								</arti c l e>
							))}
						</sect i o n>

						{/* Newslet t e r Sig n u p */}
						<sect i o n classN a m e="b g-b l u e-60 0 roun d e d-2x l p-8 t e x t-wh i t e t e x t-cen t e r">
							<h 2 classN a m e="t e x t-3x l f o n t-b o l d m b-4">S t a y Upda t e d</h 2>
							<p classN a m e="t e x t-x l m b-6 t e x t-b l u e-10 0">
								Ge t th e lat e s t insig h t s an d upda t e s delive r e d t o y o u r in b o x.
							</p>
							<f o r m onSub m i t={handleNewsletterSub m i t} classN a m e="ma x-w-m d m x-a u t o">
								<di v classN a m e="f l e x ga p-4">
									<in p u t
										type="em a i l"
										placehol d e r="En t e r y o u r em a i l"
										classN a m e="f l e x-1 p x-4 p y-3 roun d e d-l g t e x t-g r a y-90 0 fo c u s:outl i n e-n o n e fo c u s:r i n g-2 fo c u s:r i n g-b l u e-30 0"
										requi r e d
									/>
									<but t o n
										type="sub m i t"
										disab l e d={isNewsletterLoading}
										classN a m e="b g-wh i t e t e x t-b l u e-60 0 p x-6 p y-3 roun d e d-l g f o n t-semib o l d ho v e r:b g-g r a y-10 0 transit i o n-col o r s disab l e d:opac i t y-5 0"
									>
										{isNewsletterLoading ? 'Subscrib i n g...' : 'Subscr i b e'}
									</but t o n>
								</di v>
							</f o r m>
						</sect i o n>
					</m a i n>
				</di v>
			</di v>
		</>
	)}