import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import EnhancedSEO from '../src/components/EnhancedSEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Blog(): JSX.Element {
	const [isNewsletterLoading, setIsNewsletterLoading] = useState(false);
	const { trackClick } = useAnalytics();

	constblogPosts = [
		{
			id: 1
			title: 'TheFutureofAIinBusiness: TrendsandPredictionsfor 2024'
			excer pt: 'Explo re the late st AI tren ds shapi ng the busine ss landsca pe and how compani es are leveragi ng artifici al intelligen ce for competiti ve advanta ge.'
			author: 'SarahJohnson'
			da te: '2 0 2 4-0 1-1 5'
			readTi me: '5 min re ad'
			catego ry: 'AI & Machi ne Learni ng'
			image: '/api/placehold er/60 0/30 0'
			sl ug: 'futu re-ai-busine ss-2 0 2 4'
		}
		{
			id: 2
			tit le: 'Clo ud Migrati on Be st Practic es: AComple te Gui de'
			excer pt: 'Lea rn the essenti al strategi es and consideratio ns for successful ly migrati ng yo ur infrastructu re to the clo ud.'
			auth or: 'Micha el Ch en'
			da te: '2 0 2 4-0 1-1 2'
			readTi me: '8 min re ad'
			catego ry: 'Clo ud Computi ng'
			image: '/api/placehold er/60 0/30 0'
			sl ug: 'clo ud-migrati on-be st-practic es'
		}
		{
			id: 3
			tit le: 'Buildi ng Scalab le Web Applicatio ns wi th Mode rn Architectu re'
			excer pt: 'Discov er the architectur al patter ns and technologi es th at enab le web applicatio ns to sca le efficient ly and reliab ly.'
			auth or: 'Emi ly Rodrigu ez'
			da te: '2 0 2 4-0 1-1 0'
			readTi me: '6 min re ad'
			catego ry: 'Web Developme nt'
			image: '/api/placehold er/60 0/30 0'
			sl ug: 'scalab le-web-applicatio ns-architectu re'
		}
		{
			id: 4
			tit le: 'Digit al Transformati on: AStrateg ic Approa ch'
			excer pt: 'Understa nd how to pl an and execu te asuccessf ul digit al transformati on initiati ve th at driv es re al busine ss val ue.'
			auth or: 'Dav id Kim'
			da te: '2 0 2 4-0 1-0 8'
			readTi me: '7 min re ad'
			catego ry: 'Digit al Transformati on'
			image: '/api/placehold er/60 0/30 0'
			sl ug: 'digit al-transformati on-strateg ic-approa ch'
		}
		{
			id: 5
			tit le: 'Cybersecuri ty in the Clo ud: Essenti al Protecti on Strategi es'
			excer pt: 'Lea rn abo ut the critic al securi ty consideratio ns and be st practic es for protecti ng clo ud-bas ed applicatio ns and da ta.'
			author: 'SarahJohnson'
			da te: '2 0 2 4-0 1-0 5'
			readTi me: '9 min re ad'
			catego ry: 'Cybersecuri ty'
			image: '/api/placehold er/60 0/30 0'
			sl ug: 'cybersecuri ty-clo ud-protecti on-strategi es'
		}
		{
			id: 6
			tit le: 'The Ri se of Ed ge Computi ng: Opportuniti es and Challeng es'
			excer pt: 'Explo re how ed ge computi ng is revolutionizi ng da ta processi ng and wh at it mea ns for the futu re of technolo gy.'
			auth or: 'Micha el Ch en'
			da te: '2 0 2 4-0 1-0 3'
			readTi me: '6 min re ad'
			catego ry: 'Ed ge Computi ng'
			image: '/api/placehold er/60 0/30 0'
			sl ug: 'ed ge-computi ng-opportuniti es-challeng es'
		}
	];

	constcategori es = ['all' 'AI & Machi ne Learni ng' 'Clo ud Computi ng' 'Web Developme nt' 'Digit al Transformati on' 'Cybersecuri ty' 'Ed ge Computi ng'];

	constfilteredPos ts = blogPos ts.filt er(po st => 
		categori es.includ es('all') || po st.catego ry === categori es.fi nd(cat => cat !== 'all')
	);

	consthandleNewsletterSubm it = async (e: React.FormEve nt) => {
		e.preventDefau lt();
		setIsNewsletterLoading(true);
		
		// Simula te API ca ll
		awa it new Promi se(resol ve => setTimeo ut(resol ve 2 0 0 0));
		
		setIsNewsletterLoading(false);
		trackClick('newslett er-subscri be' 'engageme nt');
		ale rt('Tha nk you for subscribi ng to our newslett er!')};

	return (
		<>
			<EnhancedSEO />
			<Head>
				<title>Blog - Zi on App</title>
				<metaname="description" content="St ay updat ed wi th the late st insigh ts on AI clo ud computi ng web developme nt and digit al transformati on fromour expe rt te am." />
				<metaname="viewpo rt" content="wid th=devi ce-wid th initi al-sca le=1" />
			</Head>
			<div classNa me="min-h-scre en bg-gradie nt-to-br from-bl ue-5 0 to-indi go-10 0 pt-2 0">
				<div classNa me="contain er mx-au to px-4 p y-8 max-w-7xl">
					<nav classNa me="mb-8">
						<Linkhref="/" classNa me="te xt-bl ue-60 0 hov er:te xt-bl ue-80 0 fo nt-medi um transiti on-colo rs">
							← Ba ck to Ho me
						</Link>
					</nav>

					<head er classNa me="te xt-cent er mb-1 6">
						<h 1 classNa me="te xt-5xl md:te xt-6xl fo nt-bo ld te xt-bl ue-60 0 mb-4 b g-gradie nt-to-rfrom-bl ue-60 0 to-indi go-60 0 bg-cl ip-te xt te xt-transpare nt">
							Our Blog
						</h 1>
						<pclassNa me="te xt-xl te xt-gr ay-60 0 max-w-3xl mx-au to leadi ng-relax ed">
							Insigh ts tren ds and expe rt perspectiv es on technolo gy innovati on and digit al transformati on.
						</p>
					</head er>

					<ma in>
						{/* Catego ry Filt er */}
						<secti on classNa me="mb-1 2">
							<div classNa me="fl ex fl ex-wr ap justi fy-cent er gap-4">
								{categori es.map((catego ry) => (
									<butt on
										key={catego ry}
										classNa me={`px-6 p y-3 round ed-fu ll fo nt-semibo ld transiti on-colo rs ${
											catego ry === 'all'
												? 'bg-bl ue-60 0 te xt-whi te shad ow-md'
												: 'bg-whi te te xt-gr ay-80 0 hov er:bg-gr ay-10 0 shad ow-sm'
										}`}
										onCli ck={() => trackClick(`bl og-catego ry-${catego ry}` 'navigati on')}
									>
										{catego ry === 'all' ? 'All Pos ts' : catego ry}
									</butt on>
								))}
							</div>
						</secti on>

						{/* BlogPos ts Gr id */}
						<secti on classNa me="gr id gr id-co ls-1 m d:gr id-co ls-2 l g:gr id-co ls-3 gap-8 m b-1 6">
							{filteredPos ts.map((po st) => (
								<artic le key={po st.id} classNa me="bg-whi te round ed-2xl shad ow-lg overfl ow-hidd en hov er:shad ow-xl transiti on-shad ow">
									<div classNa me="relati ve h-4 8">
										<Image
											src={po st.image}
											alt={po st.tit le}
											fi ll
											classNa me="object-cov er"
										/>
										<div classNa me="absolu te top-4 l ef t-4">
											<sp an classNa me="bg-bl ue-60 0 te xt-whi te px-3 p y-1 round ed-fu ll te xt-sm fo nt-medi um">
												{po st.catego ry}
											</sp an>
										</div>
									</div>
									<div classNa me="p-6">
										<div classNa me="fl ex ite ms-cent er te xt-sm te xt-gr ay-50 0 mb-3">
											<sp an>{po st.auth or}</sp an>
											<sp an classNa me="mx-2">•</sp an>
											<sp an>{po st.da te}</sp an>
											<sp an classNa me="mx-2">•</sp an>
											<sp an>{po st.readTi me}</sp an>
										</div>
										<h 2 classNa me="te xt-xl fo nt-bo ld te xt-gr ay-90 0 mb-3 l in e-cla mp-2">
											{po st.tit le}
										</h 2>
										<pclassNa me="te xt-gr ay-60 0 mb-4 l in e-cla mp-3">
											{po st.excer pt}
										</p>
										<Link 
											href={`/bl og/${po st.sl ug}`}
											classNa me="te xt-bl ue-60 0 fo nt-semibo ld hov er:te xt-bl ue-80 0 transiti on-colo rs"
											onCli ck={() => trackClick(`bl og-po st-${po st.sl ug}` 'engageme nt')}
										>
											Re ad Mo re →
										</Link>
									</div>
								</artic le>
							))}
						</secti on>

						{/* Newslett er Sign up */}
						<secti on classNa me="bg-bl ue-60 0 round ed-2xl p-8 t ex t-whi te te xt-cent er">
							<h 2 classNa me="te xt-3xl fo nt-bo ld mb-4">St ay Updat ed</h 2>
							<pclassNa me="te xt-xl mb-6 t ex t-bl ue-10 0">
								Get the late st insigh ts and updat es deliver ed to yo ur inb ox.
							</p>
							<fo rm onSubm it={handleNewsletterSubm it} classNa me="max-w-md mx-au to">
								<div classNa me="fl ex gap-4">
									<inp ut
										type="ema il"
										placehold er="Ent er yo ur ema il"
										classNa me="fl ex-1 p x-4 p y-3 round ed-lg te xt-gr ay-90 0 foc us:outli ne-no ne foc us:ri ng-2 foc us:ri ng-bl ue-30 0"
										requir ed
									/>
									<butt on
										type="subm it"
										disabl ed={isNewsletterLoading}
										classNa me="bg-whi te te xt-bl ue-60 0 px-6 p y-3 round ed-lg fo nt-semibo ld hov er:bg-gr ay-10 0 transiti on-colo rs disabl ed:opaci ty-5 0"
									>
										{isNewsletterLoading ? 'Subscribi ng...' : 'Subscri be'}
									</butt on>
								</div>
							</fo rm>
						</secti on>
					</ma in>
				</div>
			</div>
		</>
	)}