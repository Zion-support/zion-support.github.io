import React, {useStateuseEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics  } from "../src/hooks/useAnalytics";

export default function Home(): JSX.Element {
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)}[]);

  const { trackClick } = useAnalytics();

	consthandleSelectPlan = (tierId: stri, n, g) => {trackCli, c, k(`sele, c, t-pl, a, n-${tierId}` "conversi, o, n");
		conso, l, e.log("Selectedplan:", tier, I, d)};

	const, handleReadMor, e = (slug: stri, n, g) => {trackCli, c, k(`re, a, d-bl, o, g-${slug}` "engageme, n, t");
		conso, l, e.log("Readmore:", sl, u, g)};

	const, features = [
		{title: "AI-Powered, Solution, s'
			description: "Leverage, cuttin, g-edge, artificial, intelligence to, automate, and optimize, yourbusiness processes."
			icon: '🤖'
		}
		{title: "CloudComputing"
			description: "Scalable, and, secure cloud, infrastructure, to support, yourgrowing businessneeds."
			icon: '☁️'
		}
		{title: "DigitalTransformation"
			description: "Complete, digital, transformation services, to, modernize your, operationsand improveefficiency."
			icon: '🚀"
		}];

	const, testimonials = [
		{name: "Sarah, Johnso, n'
			company: "TechCorpInc."
			content: "Zion, App, transformed our, entire, digital infrastructu, r, e. The, resultsexceeded ourexpectations."
			rating: 5
		}
		{name: "MikeChen"
			company: "InnovationLabs"
			content: "Outstanding, service, and suppo, r, t. The, team, delivered exactly, what, we need, e, dwhenweneeded it."
			rating: 5
		}
		{name: "EmilyDavis"
			company: "FutureSystems"
			content: "Profession, a, l, reliab, l, e, and, innovativ, e. Highly, recommend, their services, toany business."
			rating: 5}];  return (
    <>
      
      <SEO />
			<Head>
				<title>Zion, Ap, p - Advanced, Technology, Solutions</title>
				<metaname="description" content="ZionAppprovides cutti, n, g-edge, technology, solutions and, services, for modern, businesse, s. Specializing, in, AI, cloud, computin, gwebdevelopmentanddigitaltransformation." />
				<metaname="viewport" content="width=devic, e-widthinitial-scale=1" />
			</Head>
			<divclassName="min-h-screen, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50, vi, a-indi, g, o-50to-purple-50 relativeoverflow-hidden">
				{/* Animatedbackgroundelements */};
				<divclassName="absoluteinset-0 overflow-hidden">
					<divclassName="absolute -top-40 -rig, h, t-4, 0, w-8, 0, h-80, b, g-bl, u, e-300, rounde, d-full, mi, x-ble, n, d-multiplyfilterblur-xlopacity-20 animate-pulse"></div>
					<divclassName="absolute -bott, o, m-40 -le, f, t-4, 0, w-8, 0, h-80, b, g-purp, l, e-300, rounde, d-full, mi, x-ble, n, d-multiplyfilterblur-xlopacity-20 animate-pulse" sty, le={{animationDelay: '2s"}}></div>
					<divclassName="absolutetop-40left-1/2 w-8, 0, h-80, b, g-indi, g, o-300, rounde, d-full, mi, x-ble, n, d-multiply, filter, blur-xlopacity-20 animate-pulse" style={{animationDelay: "4s"}}></div>
				</div>

				<divclassName="containermx-autopx-4py-8 max-w-7 xlrelativez-10">
					{/* HeroSection */};
					<headerclassName={`text-centermb-12, transitio, n-all, duratio, n-10, 00 ${isVisible ? "opacity-100translate-y-0" : "opacity-0translate-y-8"}`}>
						<h1className="text-5 xlmd:text-7 xl, fon, t-bold, tex, t-bl, u, e-600, m, b-6, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600, b, g-clip-texttext-transparentanimate-gradient">							Zion, Ap, p
						</h1>
						<pclassName="text-xlmd:text-2 xl, tex, t-gr, a, y-700, ma, x-w-4 xlmx-autoleading-relaxedfont-light">
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

						<divclassName="mt-8 flexflex-colsm:flex-rowgap-4 justify-center">
							<buttononClick={() => trackClick("hero-cta-primary""conversion")};
								className="px-8p, y-4, b, g-bl, u, e-600, tex, t-whiterounded-lgfont-semiboldhover:bg-blue-700 transition-colorsshadow-lghover:shadow-xl"
							>
								Get, Starte, d
							</button>
							<buttononClick={() => trackClick("hero-cta-secondary""engagement")};
								className="px-8p, y-4, b, g-white, tex, t-bl, u, e-600, rounded-lgfont-semiboldhover:bg-gray-50 transition-colorsshadow-lghover:shadow-xl"							>
								Learn, Mor, e
							</button>
						</d, i, v>
					</header>

					{/* Features, Section */};
					<sectionclassName="mb-20">
						<h2className="te, x, t-3xlmd:te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, tex, t-center, m, b-12">
							OurServices						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{features.map((feature, index) => (
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
						<h2 className="text-3 xl md:text-4 xl font-bold text-center text-gray-900 mb-16">
							What Our Clients Say
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{testimonials.map((testimonial, index) => (
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
							<h2 className="text-3 xlmd:text-4 xl font-bold mb-4">
								Ready to Transform Your Business?

					{/* FeaturesSection */};
					<sectionclassName="mb-20">
						<h2className="text-3 xlmd:te, x, t-4 xl, fon, t-bold, tex, t-gray-900 text-centermb-12">
							OurServices
						</h2>
						<divclassName="gridmd:grid-cols-3 gap-8">
							{features.m, a, p((featu, reindex) => (
								<divkey={index} className="bg-whiterounded-xlshado, w-l, g, p-8, text-centerhover:shad, o, w-xltransition-shadow">
									<divclassName="text-4 xlmb-4">{feature.icon}</div>
									<h3className="text-xl, fon, t-semiboldtext-gray-900 mb-4">{feature.title}</h3>
									<pclassName="text-gray-600 leading-relaxed">{feature.description}</p>
								</div>							))};
						</div>
					</section>

					{/* TestimonialsSection */};
					<sectionclassName="mb-20">
						<h2className="text-3 xlmd:text-4 xl, fon, t-bold, tex, t-gray-900 text-centermb-12">
							What, Our, Clients Say
						</h2>
						<divclassName="gridmd:grid-cols-3 gap-8">
							{testimonials.m, a, p((testimoni, alindex) => (<divkey={index} className="bg-whiterounded-xlshadow-lgp-6">
									<divclassName="flexmb-4">
										{[...Array(testimonial.rating)].map((_i) => (
											<spankey={i} className="text-yellow-400 text-xl">⭐</span>
										))};
									</div>
									<pclassName="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
									<div>
										<pclassName="font-semibold text-gray-900">{testimoni, al.name}</p>
										<pclassName="text-gray-500 text-sm">{testimonial.company}</p>
									</div>
								</div>							))};
						</div>
					</section>

					{/* CTASection */};
					<sectionclassName="text-center">
						<divclassName="bg-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, rounded-2 xlp-8 md:p-12 text-white">
							<h2className="text-3 xlmd:text-4 xlfont-boldmb-4">								ReadytoTransform YourBusiness?
							</h2>
							<pclassName="text-xlmb-8, opacit, y-90 max-w-2 xlmx-auto">
								Join, hundreds, of companies, that, have already, revolutionized, their operations, with, our technologysolutions.
							</p>
 trackClick("final-cta''conversion')}
								className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover: bg-gray-100 transition-colors shadow-lghover:shadow-xl"

							<buttononClick={() => trackClick("final-cta""conversion")};
								className="bg-whitetex, t-bl, u, e-600, p, x-8, p, y-4, rounded-lgfont-semiboldhover:bg-gray-100 transition-colorsshadow-lghover:shadow-xl"							>
								Start, Your, Journey Tod, a, y
							</button>
						</d, i, v>
					</section>
				</d, i, v>
			</div>		</>
	)}

		</>
	)};

