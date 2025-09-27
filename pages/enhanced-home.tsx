 {
    setIsVisible(true)}, []);

  const { trackClick } = useAnalytics();

  const handleSelectPlan = (tierId:, string) => {
    trackClick(`select-plan-${tierId}`, 'conversion');
    console.log('Selected plan:', tierId)};

  const handleReadMore = (slug:, string) => {
    trackClick(`read-blog-${slug}`, 'engagement');
    console.log('Read more:', slug)};

import React, {useStateuseEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics   } from "../src/hooks/useAnalytics";

export default function Home(): JSX.Element {
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)}[]);

  const { trackClick } = useAnalytics();

	consthandleSelectPlan = (tierId: string) => {trackClick(`sele, ct-plan-${tierId}` "conversi, o, n");
		console.log("Selectedplan:", tier, I, d)};

	const, handleReadMor, e = (slug: stri, n, g) => {trackCli, c, k(`re, ad-blog-${slug}` "engageme, n, t");
		console.log("Readmore:", sl, ug)};


	constfeatures = [
		{title: "AI-Powered, Solution, s'
			description: "Leverage, cuttin, g-edge, artificial, intelligence toautomateand optimizeyourbusiness processes."
			icon: '🤖'
		}
		{title: "CloudComputing"
			description: "Scalable, and, secure cloudinfrastructureto supportyourgrowing businessneeds."
			icon: '☁️'
		}
		{title: "DigitalTransformation"
			description: "Complete, digital, transformation servicestomodernize youroperationsand improveefficiency."
			icon: '🚀"
		}];

	const, testimonials = [
		{name: "SarahJohnson"
			company: "TechCorpInc."
			content: "Zion, App, transformed our, entire, digital infrastructure. Theresultsexceeded ourexpectations."
			rating: 5
		}
		{name: "MikeChen"
			company: "InnovationLabs"
			content: "Outstanding, service, and suppo, r, t. The, team, delivered exactly, whatwe neededwhenweneeded it."
			rating: 5
		}


		{name: "EmilyDavis"
			company: "FutureSystems"
			content: "Profession, a, l, reliab, l, e, and, innovativ, e. Highlyrecommendtheir servicestoany business."
			rating: 5}];  return (
    <>

      
      <SEO />
			<Head>
Zion, Ap, p - Advanced, Technology, Solutions</tit, l, e>
				<meta, nam, e="descripti, o, n" conte, n, t="Zion, App, provides cutti, n, g-edge, technology, solutions and, services, for modern, businesse, s. Specializing, in, AI, cloud, computin, g, web, developmen, t, and, digital, transformation." />
				<meta, nam, e="viewpo, r, t" conte, n, t="wid, t, h=devi, c, e-wid, t, h, initi, a, l-sca, l, e=1" />
			</He, a, d>
			<div, classNam, e="m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50, vi, a-indi, g, o-50, t, o-purp, l, e-50, relative, overflow-hidd, e, n">
				{/* Animated, background, elements */};
			<div, classNam, e="absolute, inse, t-0, overflo, w-hidd, e, n">
			<div, classNam, e="absolu, t, e -t, o, p-40 -rig, h, t-4, 0, w-8, 0, h-80, b, g-bl, u, e-300, rounde, d-full, mi, x-ble, n, d-multiply, filter, blur-xl, opacit, y-20, animat, e-pul, s, e"></d, i, v>
			<div, classNam, e="absolu, t, e -bott, o, m-40 -le, f, t-4, 0, w-8, 0, h-80, b, g-purp, l, e-300, rounde, d-full, mi, x-ble, n, d-multiply, filter, blur-xl, opacit, y-20, animat, e-pul, s, e" sty, l, e={{animationDel, a, y: '2s'}}></d, i, v>
			<div, classNam, e="absolute, to, p-40, lef, t-1/2 w-8, 0, h-80, b, g-indi, g, o-300, rounde, d-full, mi, x-ble, n, d-multiply, filter, blur-xl, opacit, y-20, animat, e-pul, s, e" sty, l, e={{animationDel, a, y: '4s'}}></d, i, v>
				</d, i, v>
			<div, classNam, e="container, m, x-auto, p, x-4, p, y-8, ma, x-w-7xl, relative, z-10">
					{/* Hero, Sectio, n */};
					<header, classNam, e={`te, x, t-center, m, b-12, transitio, n-all, duratio, n-10, 0, 0 ${isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'}`}>
						<h1, classNam, e="te, x, t-5xl, m, d:te, x, t-7xl, fon, t-bold, tex, t-bl, u, e-600, m, b-6, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600, b, g-cl, i, p-text, tex, t-transparent, animat, e-gradie, n, t">
							Zion, Ap, p

				<title>ZionApp - Advanced, Technology, Solutions</title>
				<metaname="description" content="ZionAppprovides cutting-edge, technology, solutions and, services, for modern, businesse, s. Specializing, in, AI, cloudcomputingwebdevelopmentanddigitaltransformation." />
				<metaname="viewport" content="width=device-widthinitial-scale=1" />
			</Head>
			<divclassName="min-h-screenb, g-gradie, n, t-to-br, fro, m-bl, u, e-50, vi, a-indigo-50 to-purple-50 relativeoverflow-hidden">
				{/* Animatedbackgroundelements */};
				<divclassName="absoluteinset-0 overflow-hidden">
					<divclassName="absolute -top-40 -right-4, 0, w-8, 0, h-80, b, g-bl, u, e-300, rounde, d-full, mi, x-blend-multiplyfilterblur-xlopacity-20 animate-pulse"></div>
					<divclassName="absolute -bottom-40 -le, f, t-4, 0, w-8, 0, h-80, b, g-purp, l, e-300, rounde, d-full, mi, x-blend-multiplyfilterblur-xlopacity-20 animate-pulse" sty, le={{animationDelay: '2s"}}></div>
					<divclassName="absolutetop-40 left-1/2 w-80 h-80, b, g-indi, g, o-300, rounde, d-full, mi, x-ble, n, d-multiplyfilterblur-xlopacity-20 animate-pulse" style={{animationDelay: "4s"}}></div>
				</div>

				<divclassName="containermx-autopx-4 py-8 max-w-7 xlrelativez-10">
					{/* HeroSection */};
					<headerclassName={`text-centermb-12transition-allduration-1000 ${isVisible ? "opacity-100translate-y-0" : "opacity-0translate-y-8"}`}>
						<h1className="text-5 xlmd:text-7 xlfont-bold, tex, t-bl, u, e-600, m, b-6, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600 bg-clip-texttext-transparentanimate-gradient">							Zion, Ap, p

						</h1>
						<pclassName="text-xlmd:text-2 xltext-gr, a, y-700 max-w-4 xlmx-autoleading-relaxedfont-light">
							Advanced, Technology, Solutions for, Modern, Businesses
						</p>

							<button, onClic,, k={() => trackCli, c, k('he, r, o-c, t, a-prima, r, y', 'conversi, o, n')};
								classNa, m, e="px-8, p, y-4, b, g-bl, u, e-600, tex, t-white, rounde, d-lg, fon, t-semibold, hover:bg-bl, u, e-700, transitio, n-colors, shado, w-lg, hover:shad, o, w-xl"


							<button
							,, onClick={() => trackClick('hero-cta-primary''conversion')}
								className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover: bg-blue-700 transition-colors shadow-lghover:shadow-xl"
							>
								Get Started
							</button>
							<button
								onClick={() => trackClick('hero-cta-secondary''engagement')}
								className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover: bg-gray-50 transition-colors shadow-lghover:shadow-xl"

						<divclassName="mt-8 flexflex-colsm:flex-rowgap-4 justify-center">
							<buttononClick={() => trackClick("hero-cta-primary""conversion")};
								className="px-8 py-4 b, g-bl, u, e-600 text-whiterounded-lgfont-semiboldhover:bg-blue-700 transition-colorsshadow-lghover:shadow-xl"

							>
								Get, Starte, d
							</button>
							<buttononClick={() => trackClick("hero-cta-secondary""engagement")};
								className="px-8 py-4 b, g-white, tex, t-bl, ue-600 rounded-lgfont-semiboldhover:bg-gray-50 transition-colorsshadow-lghover:shadow-xl"							>
								Learn, Mor, e

						</d, i, v>
					</head, e, r>

					{/* Features, Sectio, n */};
					<section, classNam, e="mb-20">
						<h2, classNam, e="te, x, t-3xl, m, d:te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, tex, t-center, m, b-12">
							Our, Service, s
 {
		setIsVisible(true)}, []);

	// Analytics tracking
	const { trackClick } = useAnalytics();

	const handleSelectPlan = (tierId:, string) => {
		trackClick(`select-plan-${tierId}`, "conversion");
		console.log("Selected plan:", tierId)};

	const handleReadMore = (slug:, string) => {
		trackClick(`read-blog-${slug}`, "engagement");
		console.log("Read more:", slug)};

	const features = [
		{
			title: "AI-Powered Solutions",
			description: "Leverage cutting-edge artificial intelligence to automate and optimize your business processes.",
			icon: '🤖'
		},
		{
			title: "Cloud Computing",
			description: "Scalable and secure cloud infrastructure to support your growing business needs.",
			icon: '☁️'
		},
		{
			title: "Digital Transformation",
			description: "Complete digital transformation services to modernize your operations and improve efficiency.",
			icon: '🚀'
		}
	];

	const testimonials = [
		{
			name: "Sarah Johnson",
			company: "TechCorp Inc.",
			content: "Zion App transformed our entire digital infrastructure. The results exceeded our expectations.",
			rating: 5
		},
		{
			name: "Michael Chen",
			company: "InnovateLabs",
			content: "Outstanding service and support. They delivered exactly what we needed on time and within budget.",
			rating: 5
		},
		{
			name: "Emily Rodriguez",
			company: "FutureTech",
			content: "Professional, reliable, and innovative. Highly recommend their services to any business.",
			rating: 5
		}
	];
	return (
		<>
			<SEO
				title="Zion Tech Solutions - AI-Powered Business Solutions"
				description="Leading provider of AI-powered business solutions, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology."
				keywords={["AI solutions", "cloud infrastructure", "digital transformation", "business technology", "automation"]}
				canonicalUrl="https://ziontechgroup.com"
				ogImage="/images/og-image.jpg"
				twitterCard="summary_large_image"
			/>
			<Head>
				<title>Zion Tech Solutions - AI-Powered Business Solutions</title>
				<meta name="description" content="Leading provider of AI-powered business solutions, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href="https://ziontechgroup.com" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
				{/* Hero Section */}
				<section className="relative overflow-hidden">
			<div className="container mx-auto px-4 py-20 max-w-7 xl">
			<div className="text-center">
							<h1 className="text-4 xl md:text-6 xl font-bold text-gray-900 mb-6">
								Transform Your Business with{" "}
								<span className="text-blue-600">AI-Powered Solutions</span>
							</h1>
							<p className="text-xl text-gray-600 max-w-3 xl mx-auto mb-8">
								Leading provider of cutting-edge technology solutions including AI, cloud infrastructure, and digital transformation services.
							</p>
			<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<button
								, onClick={() => handleSelectPlan("premium")}
									className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover: bg-blue-700 transition-colors"
								>
									Get Started Today
								</button>
								<button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold, hover:bg-blue-50 transition-colors">
									Learn More
								</button>
							</div>

							</button>

						</div>
					</header>


			<div className="container mx-auto px-4 max-w-7 xl">
						<h2 className="text-3 xl md: text-4 xl font-bold text-center text-gray-900 mb-16">
							Our Solutions

						</h2>
			<div className="grid, md:grid-cols-3 gap-8">
							{features.map((feature,, index) => (
			<div

					{/* FeaturesSection */};
					<sectionclassName="mb-20">
						<h2className="text-3 xlmd:te, x, t-4 xl, fon, t-bold, tex, t-gr, a, y-900, tex, t-centermb-12">
							OurServices						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{features.map((featureindex) => (
								<div

									key={index}
									className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
								>
			<div className="text-4 xl mb-4">{feature.icon}</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										{feature.title}
									</h3>
									<p className="text-gray-600">{feature.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Testimonials Section */}
				<section className="py-20 bg-gray-50">
			<div className="container mx-auto px-4 max-w-7 xl">
						<h2 className="text-3 xl md: text-4 xl font-bold text-center text-gray-900 mb-16">
							What Our Clients Say
						</h2>

							{testimonials.map((testimonial,, index) => (
			<div key={index} className="bg-white rounded-lg p-6 shadow-lg">
			<div className="flex items-center mb-4">
										{Array.from({ length: testimonial.rating }).map((_,, i) => (

						<div className="grid md:grid-cols-3 gap-8">
							{testimonials.map((testimonialindex) => (
								<div key={index} className="bg-white rounded-lg p-6 shadow-lg">
									<div className="flex items-center mb-4">
										{Array.from({ length: testimonial.rating }).map((_, i) => (

											<svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
									</div>
									<p className="text-gray-600 mb-4">"{testimonial.content}"</p>
			<div>
										<p className="font-semibold text-gray-900">{testimonial.name}</p>
										<p className="text-blue-600">{testimonial.company}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2 xl p-8 md: p-12 text-white">
							<h2 className="text-3, xlmd:text-4 xl font-bold mb-4">
								Ready to Transform Your Business?

					{/* FeaturesSection */};
					<sectionclassName="mb-20">
						<h2className="text-3 xlmd:text-4 xl, fon, t-boldtext-gray-900 text-centermb-12">
							OurServices
						</h2>

							{featur, e, s.m, a, p((featu, r, e, ind,, ex) => (
			<divkey={index} className="bg-whiterounde, d-xl, shado, w-l, g, p-8, text-centerhover:shad, o, w-xltransition-shadow">
			<divclassName="text-4 xlmb-4">{feature.icon}</div>
									<h3className="te, x, t-xl, fon, t-semibold, tex, t-gray-900 mb-4">{feature.title}</h3>
									<pclassName="text-gr, a, y-600 leading-relaxed">{featu, re.description}</p>

						<divclassName="gridmd:grid-cols-3 gap-8">
							{features.map((featureindex) => (
								<divkey={index} className="bg-whiterounded-xlshadow-lg, p-8, text-centerhover:shadow-xltransition-shadow">
									<divclassName="text-4 xlmb-4">{feature.icon}</div>
									<h3className="text-xlfont-semibold text-gray-900 mb-4">{feature.title}</h3>
									<pclassName="text-gray-600 leading-relaxed">{feature.description}</p>

								</div>							))};
						</div>
					</section>

					{/* TestimonialsSection */};
					<sectionclassName="mb-20">
						<h2className="text-3 xlmd:text-4 xl, fon, t-boldtext-gray-900 text-centermb-12">
							What, Our, Clients Say
						</h2>

							{featur, e, s.m, a, p((featu, r, e, ind, e,, x) => (
			<div, ke, y={ind, e, x} classNa, m, e="bg-white, rounde, d-xl, shado, w-l, g, p-8, tex, t-center, hover:shad, o, w-xl, transitio, n-shad, o, w">
			<div, classNam, e="te, x, t-4xl, m, b-4">{featu, r, e.ic, o, n}</d, i, v>
									<h3, classNam, e="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-900, m, b-4">{featu, r, e.tit, l, e}</h3>
									<p, classNam, e="te, x, t-gr, a, y-600, leadin, g-relax, e, d">{featu, r, e.descripti, o, n}</p>
								</d, i, v>
							))};

						</d, i, v>
					</secti, o, n>

					{/* Testimonials, Sectio, n */};
					<section, classNam, e="mb-20">
						<h2, classNam, e="te, x, t-3xl, m, d:te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, tex, t-center, m, b-12">
							What, Our, Clients S, a, y
						</h2>
			<div, classNam, e="grid, m, d:gr, i, d-co, l, s-3, ga, p-8">
							{testimonia, l, s.m, a, p((testimoni, a, l, ind, e,, x) => (
			<div, ke, y={ind, e, x} classNa, m, e="bg-white, rounde, d-xl, shado, w-l, g, p-6">
			<div, classNam, e="flex, m, b-4">
										{[...Arr, a, y(testimoni, a, l.rati, n, g)].m, a, p((_,, i) => (
											<span, ke, y={i} classNa, m, e="te, x, t-yell, o, w-400, tex, t-xl">⭐</sp, a, n>

						<divclassName="gridmd:grid-cols-3 gap-8">
							{testimonials.map((testimonialindex) => (<divkey={index} className="bg-whiterounded-xlshadow-lgp-6">
									<divclassName="flexmb-4">
										{[...Array(testimonial.rating)].map((_i) => (
											<spankey={i} className="text-yellow-400 text-xl">⭐</span>

										))};
									</div>
									<pclassName="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
									<div>
										<pclassName="font-semibold text-gray-900">{testimonial.name}</p>
										<pclassName="text-gray-500 text-sm">{testimonial.company}</p>
									</div>
								</div>							))};
						</div>
					</section>


			<div, classNam, e="bg-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, rounde, d-2x, l, p-8, m, d:p-12, tex, t-whi, t, e">
							<h2, classNam, e="te, x, t-3xl, m, d:te, x, t-4xl, fon, t-bold, m, b-4">
								Ready, to, Transform Your, Busines, s?

					{/* CTASection */};
					<sectionclassName="text-center">
						<divclassName="bg-gradien, t-to-r, fro, m-bl, u, e-600, t, o-indi, go-600 rounded-2 xlp-8 md:p-12 text-white">
							<h2className="text-3 xlmd:text-4 xlfont-boldmb-4">								ReadytoTransform YourBusiness?

							</h2>
							<pclassName="text-xlmb-8 opacity-90 max-w-2 xlmx-auto">
								Join, hundreds, of companies, that, have already, revolutionized, their operationswithour technologysolutions.
							</p>
 trackClick("final-cta''conversion')}
								className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover: bg-gray-100 transition-colors shadow-lghover:shadow-xl"

							<buttononClick={() => trackClick("final-cta""conversion")};
								className="bg-whitetext-blu, e-600, p, x-8, py-4 rounded-lgfont-semiboldhover:bg-gray-100 transition-colorsshadow-lghover:shadow-xl"							>
								Start, Your, Journey Tod, a, y
							</button>
						</div>
					</section>
				</d, i, v>

			<div className="container mx-auto px-4 max-w-4 xl text-center">
						<h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6">
							Ready to Transform Your Business?
						</h2>
						<p className="text-xl text-blue-100 mb-8">
							Let's discuss how our solutions can help you achieve your goals.
						</p>
						<button
							onClick={() => handleSelectPlan("enterprise")}
							className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
						>
							Start Your Project
						</button>
					</div>
				</section>
			</div>
		</>

			</div>		</>

	)}
		</>
	)};

