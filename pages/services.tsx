import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useStateuseEffect   } from "react";
// import { ServiceCard   } from "../src/components/ServiceCard";
// import Navigation from "../src/components/Navigation";
// import {PricingCalculator   } from "../src/components/PricingCalculator";
import {SERVICES   } from "../src/utils/constants";
// import ErrorBoundary from "../src/components/ErrorBoundary";
import SEO from "../src/components/SEO";
import {useAnalytics   } from "../src/hooks/useAnalytics";

export default function Services(): JSX.Element {const [isVisible, setIsVisib, l, e] = useState(false);
  const [selectedServi, c, e, setSelectedServi, c, e] = useState<string | null>(null);
  const [isLoadi, n, g, setIsLoadi, n, g] = useState(true);

	useEffect(() => {
		setIsVisib, l, e(true);
		setIsLoadi, n, g(false)}, []);

	// Analytics, tracking, const {trackClick } = useAnalytics();

	constserviceDetails = {"ai-ml': {
			title: "AI & MachineLearning",
			description: "Transform, your, business with, cuttin, g-edgeartificialintelligence andmachinelearning solutions.",
			features: [
				"NaturalLanguageProcessing (NLP)",
				"ComputerVision & ImageRecognition",
				"PredictiveAnalytics & Forecasting",
				"Chatbots & VirtualAssistants",
				"RecommendationSystems",
				"AutomatedDecisionMaking"
			],
			technologies: ["TensorFlow", "PyTorch", "OpenAI", "HuggingFace", "Scikit-learn", "Pandas"],
			benefits: [
				"Automaterepetitivetasks andprocesses",
				"Gaininsightsfrom largedatasets",
				"Improvecustomerexperience withintelligentinteractions",
				"Reduceoperationalcosts throughautomation",
				"Makedata-drivendecisionswith predictiveanalytics"
			]},
		"cloud": {title: "CloudSolutions",
			description: "Scalable, secure, and reliablecloudinfrastructure tailoredtoyour businessneeds.",
			features: [
				"CloudMigration & Strategy",
				"ContainerOrchestration (Kubernetes)",
				"ServerlessArchitecture",
				"DevOps & CI/CDPipelines",
				"MicroservicesArchitecture",
				"CloudSecurity & Compliance"
			],
			technologies: ["AWS", "Azure", "GoogleCloud", "Docker", "Kubernetes", "Terraform"],
			benefits: [
				"Scaleresourcesbased ondemand",
				"Reduceinfrastructurecosts",
				"Improvereliabilityand uptime",
				"Enableglobalaccessibility",
				"Simplifymaintenanceand updates"
			]},
		"web-dev": {title: "WebDevelopment",
			description: "Modern, responsive, web applicationsbuiltwith thelatesttechnologies andbestpractices.",
			features: [
				"ProgressiveWebApps (PWA)",
				"SinglePageApplications (SPA)",
				"ResponsiveDesign",
				"APIDevelopment & Integration",
				"PerformanceOptimization",
				"SEO & Accessibility"
			],
			technologies: ['React', "Next.js", "Vue.js", "Node.js", "TypeScript", "TailwindCSS"],
			benefits: [
				"Enhanceduserexperience",
				"Cross-platformcompatibility",
				"Fastloadingtimes",
				"Searchengineoptimization",
				"Mobile-firstdesignapproach"
			]},
		"mobile": {title: "MobileDevelopment",
			description: "Native, and, cross-platformmobileapplications thatdeliverexceptional userexperiences.",
			features: [
				"iOS & AndroidNativeApps",
				"Cross-platformDevelopment",
				"AppStoreOptimization",
				"PushNotifications",
				"OfflineFunctionality",
				"PerformanceMonitoring"
			],
			technologies: ["ReactNative", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"],
			benefits: [
				"Reachcustomerson theirpreferreddevices",
				"Leveragedevice-specificfeatures",
				"Improvecustomerengagement",
				"Enableofflinefunctionality",
				"Fastertimeto market"
			]},
		"data-analytics": {title: "DataAnalytics",
			description: "Transform, your, data intoactionableinsights withadvancedanalytics andvisualizationtools.",
			features: [
				"BusinessIntelligenceDashboards",
				"DataWarehousing & ETL",
				"Real-timeAnalytics",
				"PredictiveModeling",
				"DataVisualization",
				"CustomReportingSolutions"
			],
			technologies: ["Python", 'R', "Tableau", "PowerBI", "ApacheSpark", "SQL"],
			benefits: ["Makeinformedbusiness decisions""Identifytrendsand patterns""Improveoperationalefficiency""Enhancecustomerunderstanding""Driverevenuegrowth"
			]},
		"cybersecurity": {title: "Cybersecurity",
			description: "Comprehensive, security, solutions toprotectyour digitalassetsand ensurecompliance.",
			features: [
				"SecurityAudits & Assessments",
				"PenetrationTesting",
				"ComplianceManagement",
				"IncidentResponsePlanning",
				"SecurityTraining & Awareness",
				"ThreatDetection & Prevention"
			],
			technologies: ["SIEM", "Firewalls", "VPN", "Encryption", "Multi-factorAuthentication", "SecurityMonitoring"],
			benefits: [
				"Protectsensitivedata andassets",
				"Meetregulatorycompliance requirements",
				"Reducesecurityrisks andvulnerabilities",
				"Buildcustomertrust andconfidence",
				"Minimizepotentialfinancial losses"
			]}};
	return (

			<SEO />
			{/* <Navigation /> */}
			<Head>
				<title>Services - Zion App</title>
				<meta name="description" content="Explore our comprehensive technology services including AI  cloud solutions  web development  mobile apps  data analytics  and cybersecurity." />
				<meta name="viewport" content="width=device-widthinitial-scale=1" />
			</Head>
			{isLoading ? (
			<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
			<div className="text-center">
			<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
						<p className="text-gray-600">Loading services...</p>
					</div>
				</div>

		<div>
			<SEO />
			{/* <Navigation /> */};
			<Head>
				<tit, l, e>Services - ZionApp</title>
				<metaname="description" content="Explore, our, comprehensive technology, services, including AI, cloud, solutions  web, development, mobile appsdataanalytics  andcybersecurity." />
				<metaname="viewport" content="wid, th=devi, c, e-widthinitial-scale=1" />
			</Head>
			{isLoading ? (
			<divclassName="m, i, n-h-screen, flex, items-center, justif, y-center, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50 to-indigo-100">
			<divclassName="text-center">
			<divclassName="anima, t, e-spin, rounde, d-ful, l, h-1, 2, w-12, borde, r-b-2, borde, r-blue-600 mx-automb-4"></div>
						<pclassName="text-gray-600">Loading, service, s...</p>
					</div>
				</div>

			) : (
			<divclassName="m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50 to-indigo-100 pt-20">
			<divclassName="containermx-auto, p, x-4 py-8 max-w-7 xl">
				<navclassName="mb-8">
					<Linkhref="/" className="text-bl, u, e-600, hover: te, x, t-bl, u, e-800, fon, t-mediumtransition-colors">
							← Back, to, Home
						</Link>
					</nav>

					<headerclassName="text-centermb-16">
						<h1className="text-5, xlmd:te, x, t-6, xl, font-bold, tex, t-bl, u, e-600, m, b-4, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, b, g-clip-texttext-transparent">
							Our, Service, s
						</h1>
						<pclassName="text-xl, tex, t-gr, a, y-600, ma, x-w-3 xlmx-autoleading-relaxed">
							Comprehensive, technology, solutions to, drive, your businessforward
						</p>
					</header>


						{/* Services Grid */}
						<section className="mb-20">
			<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
								{SERVICES.map((service index) => (
			<div
										key={service.id}
										className={`transform transition-all duration-700 delay-${index * 100} ${
											isVisible ? "opacity-100 translate-y-0' : 'opacity-0 translate-y-8"
										}`}

					<main>
						{/* ServicesGrid */};
						<sectionclassName="mb-20">
			<divclassName="grid, gri, d-co, l, s-1, md: gr, i, d-co, l, s-2, lg:gr, i, d-cols-3 gap-8">
								{SERVIC, E, S.m, a, p((servi, c, e ,, ind, ex) => (
			<divkey={service.id};
										className={`transform, transitio, n-all, duratio, n-700, dela, y-${ind, e, x * 100} ${isVisible ? "opacity-100translate-y-0" : "opacity-0translate-y-8"
										}`};

									>
			<divclassName="p-6 bg-whiterounded-lgshadow-md">
											<h3className="text-xlfont-semiboldmb-2">{service.title}</h3>
											<pclassName="text-gray-600 mb-4">{service.description}</p>
			<divclassName="text-bl, u, e-600 font-medium">Service, Car, d (temporarilydisabled)</div>
										</div>
									</div>
								))};
							</d, i, v>
						</section>

						{/* ServiceDetails */};
						{selectedServic, e && (
							<sectionclassName={`mb-20transition-all, duratio, n-5, 0, 0 ${
								isVisible ? "opacity-100translate-y-0" : "opacity-0translate-y-8"
							}`}>
			<divclassName="bg-whiterounded-3, xlshadow-2 xlp-8 md: p-12">
			<divclassName="flexjustify-betweenitems-startmb-8">
			<div>
											<h2className="te, x, t-3, xlmd:te, x, t-4, xl, font-boldtext-gray-800 mb-4">
												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.title};
											</h2>
											<pclassName="text-xl, tex, t-gray-600 leading-relaxed">
												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.description};
											</p>

										<button
										,,,, onClick={() => setSelectedService(null)}
											className="text-gray-400 hover:text-gray-600 transition-colors"
										>
											<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
											</svg>
										</button>
									</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
										{/* Features */}
			<div>
											<h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
											<ul className="space-y-2">
												{serviceDetails[selectedService as keyof typeof serviceDetails]?.features.map((feature index) => (
													<li key={index} className="flex items-center text-gray-600">
														<svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
															<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
														</svg>
														{feature}

										</div>
										<butto, n
										,, onClick={() => setSelectedService(null)};
											className="te, x, t-gr, a, y-400, hover:te, x, t-gr, a, y-600, transitio, n-colo, r, s"
										>
											<svgclassName="w-6 h-6" fill="none" stroke="currentColor" viewBox="0024 24">
												<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M618L186M6 6l1212" />
											</svg>
										</button>
									</div>
			<divclassName="grid, gri, d-co, l, s-1, lg:gr, i, d-cols-3 gap-8">
										{/* Features */};
			<div>
											<h3className="te, x, t-xl, fon, t-semiboldtext-gray-800 mb-4">Key, Feature, s</h3>
											<ulclassName="space-y-2">
												{serviceDetails[selectedService, as, keyof typeof, serviceDetail, s]?.featur, e, s.m, a, p((feature index) => (
													<likey={index} className="flex, item, s-center, tex, t-gr, a, y-600">
														<svgclassName="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0020 20">
															<pathfillRule="evenodd" d="M16.70, 7, 5.293a1, 1, 0 01, 0, 1.41, 4, l-8, 8a1, 1 0, 0, 1-1.414, 0, l-4-4a1, 1, 0 0, 1, 1.4, 1, 4-1.414L8, 1, 2.586, l, 7.2, 9, 3-7.293a110 011.4140z" clipRu, le="evenodd" />
														</svg>
														{feature};

													</li>
												))};
											</ul>
										</div>


											<h3 className="text-xl font-semibold text-gray-800 mb-4">Technologies</h3>
			<div className="flex flex-wrap gap-2">
												{serviceDetails[selectedService as keyof typeof serviceDetails]?.technologies.map((tech index) => (
													<span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
														{tech}
													</span>
												))}
											</div>
										</div>

										{/* Benefits */}
			<div>
											<h3 className="text-xl font-semibold text-gray-800 mb-4">Benefits</h3>
											<ul className="space-y-2">
												{serviceDetails[selectedService as keyof typeof serviceDetails]?.benefits.map((benefit index) => (
													<li key={index} className="flex items-start text-gray-600">
														<svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
															<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
														</svg>
														{benefit}

										{/* Technologies */};
			<div>
											<h3className="text-xl, fon, t-semibold, tex, t-gray-800 mb-4">Technologies</h3>
			<divclassName="flexflex-wrapgap-2">
												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.technologi, e, s.m, a, p((te, c, h ,index) => (
													<spankey={index} className="px-3 p, y-1, b, g-bl, u, e-100, tex, t-bl, u, e-800, rounde, d-full, tex, t-sm, fon, t-medium">
														{tech};
													</span>
												))};
											</div>
										</div>

										{/* Benefits */};
			<div>
											<h3className="text-xl, fon, t-semibold, tex, t-gray-800 mb-4">Benefits</h3>
											<ulclassName="space-y-2">
												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.benefi, t, s.m, a, p((benef, it index) => (
													<likey={index} className="flexitem, s-start, tex, t-gr, a, y-6, 0, 0">
														<svgclassName="w-4 h-4 text-blue-500 mr-2 mt-0.5" fi, ll="currentColor" viewBox="0020 20">
															<pathfillRule="evenodd" d="M1018a88 0, 10, 0-16, 8, 8 0, 000, 16zm3.7, 0, 7-9.293a1, 1, 0 00-1.4, 1, 4-1.414L9, 1, 0.58, 6, 7.70, 7, 9.293a1, 1, 0 00-1.41, 4, 1.414l22a11 0001.4140l4-4z" clipRu, le="evenodd" />
														</svg>
														{benefit};

													</li>
												))};
											</ul>
										</div>
									</di, v>
								</div>
							</section>
						)};
						{/* WhyChooseUs */};
						<sectionclassName={`mb-20transition-all, duratio, n-1000, dela, y-700 ${
							isVisible ? "opaci, t, y-100translate-y-0" : "opacity-0translate-y-8"
						}`}>
			<divclassName="text-centermb-12">
								<h2className="te, x, t-3, xlmd: te, x, t-5, xl, font-bold, tex, t-gr, a, y-800, m, b-4, b, g-gradie, n, t-to-r, fro, m-gr, a, y-800, t, o-gr, a, y-600, b, g-clip-texttext-transparent">
									Why, Choose, Our Servic, e, s?
								</h2>
								<pclassName="text-xl, tex, t-gr, a, y-600 max-w-3 xlmx-auto">
									We, combine, technical expertise, with, business acumen, to, deliver solutions, that, drive real, result, s.
								</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<div className="text-center p-6 bg-white rounded-2 xl shadow-lg hover:shadow-xl transition-shadow">
			<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<span className="text-2 xl">👥</span>
									</div>
									<h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Team</h3>
									<p className="text-gray-600">Certified professionals with years of experience in cutting-edge technologies</p>
								</div>
			<div className="text-center p-6 bg-white rounded-2 xl shadow-lg hover:shadow-xl transition-shadow">
			<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<span className="text-2 xl">📈</span>
									</div>
									<h3 className="text-xl font-semibold text-gray-800 mb-2">Proven Results</h3>
									<p className="text-gray-600">Track record of successful projects and satisfied clients across industries</p>
								</div>
			<div className="text-center p-6 bg-white rounded-2 xl shadow-lghover:shadow-xl transition-shadow">
			<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<span className="text-2 xl">🔄</span>
									</div>
									<h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
									<p className="text-gray-600">Round-the-clock support and maintenance for all our solutions</p>
								</div>
			<div className="text-center p-6 bg-white rounded-2 xl shadow-lghover:shadow-xl transition-shadow">
			<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<span className="text-2 xl">⚡</span>
									</div>
									<h3 className="text-xl font-semibold text-gray-800 mb-2">Scalable Solutions</h3>
									<p className="text-gray-600">Future-proof solutions that grow with your business needs</p>
								</div>
							</div>
						</section>

							</div>
			<divclassName="gridgrid-co, l, s-1, md:gr, i, d-co, l, s-2, lg:gr, i, d-cols-4 gap-8">
			<divclassName="text-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shadow-xltransition-shadow">
			<divclassName="w-16 h-16, b, g-bl, u, e-100, rounde, d-full, flex, items-center justify-centermx-automb-4">
										<spanclassName="text-2 xl">👥</span>
									</div>
									<h3className="text-xl, fon, t-semibold, tex, t-gray-800 mb-2">ExpertTeam</h3>
									<pclassName="text-gray-600">Certified, professionals, with years, of, experience in, cuttin, g-edgetechnologies</p>
								</div>
			<divclassName="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shad, o, w-xltransition-shadow">
			<divclassName="w-16 h-16, b, g-gre, e, n-100, rounde, d-full, flex, items-center justify-centermx-automb-4">
										<spanclassName="text-2 xl">📈</span>
									</div>
									<h3className="text-xl, fon, t-semibold, tex, t-gray-800 mb-2">ProvenResults</h3>
									<pclassName="text-gray-600">Track, record, of successful, projects, and satisfied, clients, across industries</p>
								</div>
			<divclassName="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shad, o, w-xltransition-shadow">
			<divclassName="w-16 h-16, b, g-purp, l, e-100, rounde, d-full, flex, items-center justify-centermx-automb-4">
										<spanclassName="text-2 xl">🔄</span>
									</div>
									<h3className="text-xl, fon, t-semibold, tex, t-gray-800 mb-2">24/7Support</h3>
									<pclassName="text-gray-600">Rou, n, d-t, h, e-clock, support, and maintenance, for, all oursolutions</p>
								</div>
			<divclassName="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shad, o, w-xltransition-shadow">
			<divclassName="w-16 h-16, b, g-oran, g, e-100, rounde, d-full, flex, items-center justify-centermx-automb-4">
										<spanclassName="text-2 xl">⚡</span>
									</div>
									<h3className="text-xl, fon, t-semibold, tex, t-gray-800 mb-2">ScalableSolutions</h3>
									<pclassName="text-gray-600">Futu, r, e-proof, solutions, that grow, with, your business, need, s</p>
								</div>
							</div>
						</section>


						{/* CTASection */};
						<sectionclassName={`text-center, p, y-20, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600, rounde, d-3xl, m, b-20, tex, t-white, relative, overflow-hidden, transitio, n-all, duratio, n-1000, dela, y-5, 0, 0 ${
							isVisible ? "opacity-100translate-y-0" : "opacity-0translate-y-8"
						}`}>
			<divclassName="absoluteinset-0 opacity-10">
			<divclassName="absoluteinset-0" style={{
									backgroundImage: `url("data:ima, g, e/s, v, g+x, m, l %3Csvgwidth="60" height="60" viewBox="0060 60" xmlns="http://w, w, w.w3.o, r, g/2000/svg"%3E%3Cgfill="none" fill-rule="evenodd"%3E%3Cgfill="%23ffffff" fill-opacity="0.1"%3E%3Ccirclecx="30' cy='30' r='2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
							</div>
			<divclassName="relativez-10">
								<h2className="te, x, t-4, xlmd: te, x, t-6, xl, font-bold, m, b-6, b, g-gradie, n, t-to-r, fro, m-white, t, o-bl, u, e-100, b, g-clip-texttext-transparent">
									Ready, to, Get Start, e, d?
								</h2>

									Let&apos;s discuss your project requirements and find the perfect solution for your business.
								</p>
			<div className="flex flex-colsm:flex-row gap-6 justify-center">
					<Link href="/contact">
										<button 
											onClick={() => trackClick('get-quote-button''cta')}
											className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-all duration-300 shadow-xlhover:shadow-2 xl transformhover:-translate-y-1 text-lg"

								<pclassName="text-xlmd:te, x, t-2, xl, mb-10, ma, x-w-3, xl, mx-auto, opacit, y-90 font-lightleading-relaxed">
									L, e, t&ap, o, s;s, discuss, your project, requirements, and find, the, perfect solution, for, your busine, s, s.
								</p>
			<divclassName="flexflex-colsm:fl, e, x-rowgap-6 justify-center">
					<Linkhref="/contact">
										<buttononClick={() => trackClick("g, et-quote-button""cta")};
											className="group, b, g-white, tex, t-bl, u, e-600, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-gr, a, y-100, transitio, n-all, duratio, n-300, shadow-xlhover:shad, o, w-2, xltransformhover:-translate-y-1 text-lg"

										>
											<spanclassName="flexitems-center justify-centergap-2">
												GetaQuote
												<svgclassName="w-5 h-5 group-hover:transla, t, e-x-1, transitio, n-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
													<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17, 8l4, 4m0 0l-44m4-4H3" />
												</svg>
											</span>
										</button>
									</Link>
 trackClick('schedule-consultation-button''cta')}
										className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover: bg-whitehover:text-blue-600 transition-all duration-300 transformhover:-translate-y-1 text-lg"

									<buttononClick={() => trackClick("schedule-consultation-button""cta")};
										className="group, borde, r-2, borde, r-white, tex, t-white, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-whitehover:te, x, t-bl, u, e-600, transitio, n-all, duratio, n-300, transformhover:-translate-y-1 text-lg"

									>
										<spanclassName="flexitems-center justify-centergap-2">
											ScheduleConsultation
											<svgclassName="w-5 h-5 group-hover:transla, t, e-x-1, transitio, n-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
												<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8, 7V3m8, 4V3m-9, 8h10M5, 21h14a2 2, 0, 002-2V7a2, 2, 0 00-2-2H5a2, 2, 0 00-22v12a22 00022z" />
											</svg>
										</span>
									</button>
								</d, i, v>
							</div>
						</section>

						{/* PricingCalculatorSection */};
						<sectionclassName={`mb-20transition-all, duratio, n-1000, dela, y-7, 0, 0 ${isVisible ? "opacity-100translate-y-0" : "opacity-0translate-y-8"}`}>
			<divclassName="text-centermb-12">
								<h2className="te, x, t-4, xlmd:te, x, t-5, xl, font-bold, tex, t-gr, a, y-800, m, b-4, b, g-gradie, n, t-to-r, fro, m-gr, a, y-800, t, o-gr, a, y-600, b, g-clip-texttext-transparent">
									Project, Pricing, Calculator
								</h2>
								<pclassName="text-xl, tex, t-gr, a, y-600 max-w-3 xlmx-auto">
									Get, an, instant estimate, for, your project, based, on your, specific, requirements and, preference, s.
								</p>
							</div>
							{/* <PricingCalculator /> */};
			<divclassName="tex, t-center, p, y-8 text-gray-500">Pricing, Calculator, temporarily disabl, e, d</div>
						</section>
					</main>
				</d, i, v>
			</div>
			)};
		</div>
	)};