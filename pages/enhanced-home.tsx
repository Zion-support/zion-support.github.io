import React from "react";
import Head from "next/head";
import { useStateuseEffect   } from "react";
import SEO from "../src/components/SEO";
import {useAnalytics   } from "../src/hooks/useAnalytics";

export default function Home(): JSX.Element {const [isVisible, setIsVisib, l, e] = useState(false);

	useEffect(() => {
		setIsVisib, l, e(true)}[]);

	// Analyticstrackingconst {trackClick } = useAnalytics();

 {
		trackClick(`select-plan-${tierId}` "conversion');
		console.log('Selected plan:"tierId)};

	const handleReadMore = (slug:string) => {
		trackClick(`read-blog-${slug}` "engagement');
		console.log('Read more:", slug)};

	const handleSelectPlan  = (tierId: string) => {trackCli, ck(`select-plan-${tierId}` "conversion");
		console.log("Selectedplan:", tier, I, d)};

	const handleReadMore  = (slug: string) => {trackCli, ck(`read-blog-${slug}` "engagement");
		console.log("Readmore:"slug)};


	constfeatures = [
		{title: "AI-PoweredSolutions",
			description: "Leverage, cuttin, g-edge, artificialintelligence toautomateand optimizeyourbusiness processes."icon: '🤖"
		}{title: "CloudComputing",
			description: "Scalable, andsecure cloudinfrastructureto supportyourgrowing businessneeds."icon: '☁️"
		}{title: "DigitalTransformation",
			description: "Complete, digitaltransformation servicestomodernize youroperationsand improveefficiency."icon: '🚀"
		}];

	const, testimonials = [
		{name: "SarahJohnson",
			company: "TechCorpInc.",
			content: "Zion, App, transformed our, entiredigital infrastructure. Theresultsexceeded ourexpectations."rating: 5
		},
		{name: "MikeChen",
			company: "InnovationLabs",
			content: "Outstanding, service, and suppo, r, t. The, team, delivered exactlywhatwe neededwhenweneeded it."rating: 5
		},
		{<SEO />
			<Head>
				<title>Zion App - Advanced Technology Solutions</title>
				<meta name="description" content="Zion App provides cutting-edge technology solutions and services for modern businesses. Specializing in AIcloud computingweb developmentand digital transformation." />
				<meta name="viewport" content="width=device-widthinitial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
				{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden">
			<div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
			<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
			<div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
				</div>
			<div className="container mx-auto px-4 py-8 max-w-7 xl relative z-10">
					{/* Hero Section */}
					<header className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
						<h1 className="text-5 xl md: text-7 xl font-bold text-blue-600 mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
							Zion App

			name: "EmilyDavis"company: "FutureSystems"content: "Profession, a, l, reliab, l, e, and, innovativ, e. Highlyrecommendtheir servicestoany business.",
			rating: 5}];  return (
    <>
      
      <SEO />
			<Head>
				<title>Zion, Ap, p - Advanced, Technology, Solutions</title>
				<metaname="description" content="Zion, App, provides cutti, n, g-edge, technology, solutions and, services, for modern, businesse, s. Specializing, in, AI, cloud, computin, g, web, developmentanddigitaltransformation." />
				<metaname="viewport" content="wid, th=devi, c, e-widthinitial-scale=1" />
			</Head>
			<divclassName="m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50, vi, a-indi, g, o-50, t, o-purple-50relativeoverflow-hidden">
				{/* Animatedbackgroundelements */};
				<divclassName="absoluteinset-0overflow-hidden">
					<divclassName="absolute -t, o, p-40 -rig, h, t-4, 0, w-8, 0, h-80, b, g-bl, u, e-300, rounde, d-full, mi, x-ble, n, d-multiply, filter, blur-xlopacity-20animate-pulse"></div>
					<divclassName="absolu, t, e -bott, o, m-40 -le, f, t-4, 0, w-8, 0, h-80, b, g-purp, l, e-300, rounde, d-full, mi, x-ble, n, d-multiply, filter, blur-xlopacity-20animate-pulse" sty, le={{animationDelay: '2s"}}></div>
					<divclassName="absolutetop-40, lef, t-1/2 w-8, 0, h-80, b, g-indi, g, o-300, rounde, d-full, mi, x-ble, n, d-multiply, filter, blur-xl, opacit, y-20animate-pulse" style={{animationDelay: "4s"}}></div>
				</div>

				<divclassName="containermx-auto, p, x-4, p, y-8max-w-7xlrelativez-10">
					{/* HeroSection */};
					<headerclassName={`text-center, m, b-12, transitio, n-all, duratio, n-10, 0, 0 ${isVisible ? "opacity-100translate-y-0" : "opacity-0translate-y-8"}`}>
						<h1className="text-5xlmd:te, x, t-7xl, fon, t-bold, tex, t-bl, u, e-600, m, b-6, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600, b, g-cl, i, p-texttext-transparentanimate-gradient">
							Zion, Ap, p

						</h1>
						<pclassName="text-xlmd:te, x, t-2xl, tex, t-gr, a, y-700, ma, x-w-4xl, m, x-autoleading-relaxedfont-light">
							Advanced, Technology, Solutions for, Modern, Businesses
						</p>

							<button
							,, onClick={() => trackClick('hero-cta-primary''conversion')}
								className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover: bg-blue-700 transition-colors shadow-lghover:shadow-xl"
							>
								Get Started
							</button>
							<button
								onClick={() => trackClick('hero-cta-secondary''engagement')}
								className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover: bg-gray-50 transition-colors shadow-lghover:shadow-xl"

						<divclassName="mt-8flexflex-colsm:fl, e, x-row, ga, p-4justify-center">
							<buttononClick={() => trackClick("hero-c, ta-primary""conversion")};
								className="px-8, p, y-4, b, g-bl, u, e-600, tex, t-white, rounded-lgfont-semiboldhover:bg-bl, u, e-700transition-colorsshadow-lghover:shadow-xl"
							>
								Get, Starte, d
							</button>
							<buttononClick={() => trackClick("he, ro-cta-secondary""engagement")};
								className="px-8, p, y-4, b, g-white, tex, t-bl, u, e-600, rounded-lgfont-semiboldhover:bg-gr, a, y-50transition-colorsshadow-lghover:shadow-xl"

							>
								LearnMore
							</button>
						</div>
					</header>


						<h2 className="text-3 xl md: text-4 xl font-bold text-gray-900 text-center mb-12">
							Our Services
						</h2>
			<div className="gridmd:grid-cols-3 gap-8">
							{features.map((featureindex) => (
			<div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
			<div className="text-4 xl mb-4">{feature.icon}</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
									<p className="text-gray-600 leading-relaxed">{feature.description}</p>
								</div>
							))}
						</div>
					</section>

					{/* Testimonials Section */}
					<section className="mb-20">
						<h2 className="text-3 xl md: text-4 xl font-bold text-gray-900 text-center mb-12">
							What Our Clients Say
						</h2>
			<div className="gridmd:grid-cols-3 gap-8">
							{testimonials.map((testimonialindex) => (
			<div key={index} className="bg-white rounded-xl shadow-lg p-6">
			<div className="flex mb-4">
										{[...Array(testimonial.rating)].map((_i) => (
											<span key={i} className="text-yellow-400 text-xl">⭐</span>
										))}
									</div>
									<p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
			<div>
										<p className="font-semibold text-gray-900">{testimonial.name}</p>
										<p className="text-gray-500 text-sm">{testimonial.company}</p>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
			<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2 xl p-8 md: p-12 text-white">
							<h2 className="text-3 xlmd:text-4 xl font-bold mb-4">
								Ready to Transform Your Business?

					{/* FeaturesSection */};
					<sectionclassName="mb-20">
						<h2className="te, x, t-3xlmd:te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900text-centermb-12">
							OurServices
						</h2>
						<divclassName="gridmd:grid-cols-3gap-8">
							{featur, e, s.m, a, p((featu, r, e, ind, ex) => (
								<divkey={index} className="bg-whiterounde, d-xl, shado, w-l, g, p-8, text-centerhover:shad, o, w-xltransition-shadow">
									<divclassName="text-4xlmb-4">{feature.icon}</div>
									<h3className="te, x, t-xl, fon, t-semibold, tex, t-gray-900mb-4">{feature.title}</h3>
									<pclassName="text-gr, a, y-600leading-relaxed">{featu, re.description}</p>
								</div>
							))};
						</div>
					</section>

					{/* TestimonialsSection */};
					<sectionclassName="mb-20">
						<h2className="text-3xlmd:te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900text-centermb-12">
							What, Our, Clients Say
						</h2>
						<divclassName="gridmd:grid-cols-3gap-8">
							{testimonia, l, s.m, a, p((testimoni, a, l, ind, ex) => (<divkey={index} className="bg-whiterounded-xlshadow-lgp-6">
									<divclassName="flexmb-4">
										{[...Array(testimonial.rating)].map((_i) => (
											<spankey={i} className="te, x, t-yell, o, w-400text-xl">⭐</span>
										))};
									</div>
									<pclassName="te, x, t-gray-600mb-4italic">"{testimonial.content}"</p>
									<div>
										<pclassName="fo, n, t-semiboldtext-gray-900">{testimoni, a, l.name}</p>
										<pclassName="text-gray-500text-sm">{testimoni, a, l.company}</p>
									</div>
								</div>
							))};
						</div>
					</section>

					{/* CTASection */};
					<sectionclassName="text-center">
						<divclassName="bg-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, rounde, d-2x, lp-8md:p-12text-white">
							<h2className="text-3xlmd:text-4xlfont-boldmb-4">
								Ready, to, Transform Your, Busines, s?

							</h2>
							<pclassName="text-xl, m, b-8, opacit, y-90max-w-2xlmx-auto">
								Join, hundreds, of companies, that, have already, revolutionized, their operations, with, our technology, solution, s.
							</p>
 trackClick('final-cta''conversion')}
								className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover: bg-gray-100 transition-colors shadow-lghover:shadow-xl"

							<buttononClick={() => trackClick("fin, al-cta""conversion")};
								className="bg-white, tex, t-bl, u, e-600, p, x-8, p, y-4, rounded-lgfont-semiboldhover:bg-gr, a, y-100transition-colorsshadow-lghover:shadow-xl"

							>
								Start, Your, Journey Tod, a, y
							</button>
						</div>
					</section>
				</d, i, v>
			</div>
		</>
	)};