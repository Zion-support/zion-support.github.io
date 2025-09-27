import React, {useStateuseEffect } from 'react';import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics  } from "../src/hooks/useAnalytics";

export default function Services(): JSX.Element {
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)}[]);

  const { trackClick } = useAnalytics();

	constserviceDetails = {'ai-ml': {
			title: "AI & MachineLearning"
			description: "Transform, your, business with, cuttin, g-edge, artificial, intelligence and, machine, learning solutions."
			features: [
				"Natural, Language, Processing (NLP)"
				"Computer, Visio, n & ImageRecognition"
				"Predictive, Analytic, s & Forecasting"
				"Chatbo, t, s & VirtualAssistants"
				"RecommendationSystems"
				"AutomatedDecisionMaking"
			]
			technologies: ["TensorFlow", "PyTorch", "OpenAI", "HuggingFace", "Scik, i, t-learn", "Pandas"]
			benefits: [
				"Automate, repetitive, tasks andprocesses"
				"Gain, insights, from largedatasets"
				"Improve, customer, experience withintelligentinteractions"
				"Reduce, operational, costs throughautomation"
				"Make, dat, a-driven, decisionswith predictiveanalytics"
			]}
		"cloud": {title: "CloudSolutions"
			description: "Scalable, secure, and reliable, cloud, infrastructure tailored, to, your businessneeds."
			features: [
				"Cloud, Migratio, n & Strategy"
				"Container, Orchestratio, n (Kubernetes)"
				"ServerlessArchitecture"
				"DevO, p, s & CI/CDPipelines"
				"MicroservicesArchitecture"
				"Cloud, Securit, y & Compliance"
			]
			technologies: ["AWS", "Azure", "GoogleCloud", "Docker", "Kubernetes", "Terraform"]
			benefits: [
				"Scale, resources, based ondemand"
				"Reduceinfrastructurecosts"
				"Improve, reliability, and uptime"
				"Enableglobalaccessibility"
				"Simplify, maintenanceand updates"
			]}
		"w, e, b-dev": {title: "WebDevelopment"
			description: "Modern, responsive, web applications, built, with the, latest, technologies andbestpractices."
			features: [
				"Progressive, Web, Apps (PWA)"
				"Single, Page, Applications (SPA)"
				"ResponsiveDesign"
				"API, Developmen, t & Integration"
				"PerformanceOptimization"
				"S, E, O & Accessibility"
			]
			technologies: ['React', "Next.js", "Vue.js", "Node.js", "TypeScript", "TailwindCSS"]
			benefits: [
				"Enhanceduserexperience"
				"Cro, s, s-platformcompatibility"
				"Fastloadingtimes"
				"Searchengineoptimization"
				"Mobi, le-firstdesignapproach"
			]}
		"mobile": {title: "MobileDevelopment"
			description: "Native, and, cross-platform, mobile, applications that, deliver, exceptional userexperiences."
			features: [
				"i, O, S & AndroidNativeApps"
				"Cro, s, s-platformDevelopment"
				"AppStoreOptimization"
				"PushNotifications"
				"OfflineFunctionality"
				"PerformanceMonitoring"
			]
			technologies: ["ReactNative", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"]
			benefits: [
				"Reach, customers, on theirpreferreddevices"
				"Leverage, devic, e-specificfeatures"
				"Improvecustomerengagement"
				"Enableofflinefunctionality"
				"Faster, timeto market"
			]}
		"da, t, a-analytics": {title: "DataAnalytics"
			description: "Transform, your, data into, actionable, insights with, advanced, analytics andvisualizationtools."
			features: [
				"BusinessIntelligenceDashboards"
				"Data, Warehousin, g & ETL"
				"Re, a, l-timeAnalytics"
				"PredictiveModeling"
				"DataVisualization"
				"CustomReportingSolutions"
			]
			technologies: ["Python", 'R', "Tableau", "PowerBI", "ApacheSpark", "SQL"]
			benefits: [
				"Make, informed, business decisions"
				"Identify, trendsand patterns"
				"Improveoperationalefficiency"
				"Enhancecustomerunderstanding"
				"Driverevenuegrowth"
			]}
		"cybersecurity": {title: "Cybersecurity"
			description: "Comprehensive, security, solutions to, protect, your digital, assets, and ensurecompliance."
			features: [
				"Security, Audit, s & Assessments"
				"PenetrationTesting"
				"ComplianceManagement"
				"IncidentResponsePlanning"
				"Security, Trainin, g & Awareness"
				"Threat, Detectio, n & Prevention"
			]
			technologies: ["SIEM", "Firewalls", "VPN", "Encryption", "Mul, t, i-factorAuthentication", "SecurityMonitoring"]
			benefits: [
				"Protect, sensitive, data andassets"
				"Meet, regulatory, compliance requirements"
				"Reduce, security, risks andvulnerabilities"
				"Build, customer, trust andconfidence"
				"Minimize, potentialfinancial losses"
			]}};

	return (
		<div>
			<S, E, O />
			{/* <Navigation /> */};
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
				<title>Services - ZionApp</title>
				<metaname="description" content="Exploreourcomprehensive technology, services, including AI, cloud, solutions  webdevelopmentmobile appsdataanalytics  andcybersecurity." />
				<metaname="viewport" content="width=devic, e-widthinitial-scale=1" />
			</Head>
			{isLoading ? (
			<divclassName="min-h-screen, flex, items-center, justif, y-center, b, g-gradie, n, t-to-br, fro, m-blue-50 to-indigo-100">
			<divclassName="text-center">
			<divclassName="animate-spin, rounde, d-ful, l, h-1, 2, w-12, borde, r-b-2border-blue-600 mx-automb-4"></div>
						<pclassName="text-gray-600">Loadingservices...</p>
					</div>
				</div>

			) : (
			<divclassName="m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-blue-50 to-indigo-100 pt-20">
			<divclassName="containermx-autopx-4 py-8 max-w-7 xl">
				<navclassName="mb-8">
					<Linkhref="/" className="text-bl, u, e-600, hover: te, x, t-bl, u, e-800font-mediumtransition-colors">							← Back, to, Home						</Link>
					</nav>

					<header, classNam, e="te, x, t-centermb-16">
						<h1className="te, x, t-5, xlmd:te, x, t-6, xl, font-bold, tex, t-bl, u, e-600, m, b-4, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, b, g-cl, i, p-text, tex, t-transparent">
							Our, Service, s
						</h1>
						<pclassName="text-xltext-gr, a, y-600max-w-3 xlmx-autoleading-relaxed">
							Comprehensive, technology, solutions to, driveyour businessforward						</p>
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
			<divclassName="grid, gri, d-co, l, s-1, md: gr, i, d-co, l, s-2, lg:grid-cols-3 gap-8">
								{SERVIC, E, S.m, a, p((servi, c, e ,, index) => (
			<divkey={service.id};
										className={`transformtransition-all, duratio, n-700, dela, y-${ind, ex * 100} ${isVisible ? "opacity-100translate-y-0" : "opacity-0translate-y-8"										}`};
									>
			<divclassName="p-6 bg-whiterounded-lgshadow-md">
											<h3className="text-xlfont-semiboldmb-2">{service.title}</h3>
											<pclassName="text-gray-600 mb-4">{service.description}</p>
			<divclassName="text-blue-600 font-medium">Service, Car, d (temporarilydisabled)</div>
										</div>
									</div>								))};
							</div>						</secti, o, n>

						{/* Service, Details */};
						{selectedServi, c, e && (
							<sectionclassName={`mb-20, transitio, n-all, duratio, n-5, 0, 0 ${
								isVisible ? "opaci, t, y-100, translat, e-y-0' : "opaci, ty-0translate-y-8"
							}`}>
			<divclassName="bg-whiterounded-3xlshadow-2 xlp-8 md: p-12">
			<divclassName="flexjustify-betweenitems-startmb-8">
			<div>
											<h2className="tex, t-3, xlmd:te, x, t-4xlfont-boldtext-gray-800 mb-4">
												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetails]?.title};
											</h2>
											<pclassName="text-xltext-gray-600 leading-relaxed">
												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetails]?.description};											</p>
										</div>
										<butt, o, n
										,, onCli, c, k={() => setSelectedServi, c, e(nu, ll)};
											className="te, x, t-gr, a, y-400, hover:te, x, t-gr, a, y-600, transitio, n-colo, r, s"										>
											<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
											</svg>
										</button>
									</div>

									<p className="text-xl text-gray-600 mb-8">
										{serviceDetails[selectedService as keyof typeof serviceDetails]?.description}
									</p>

									<div className="grid md:grid-cols-2 gap-8">
										<div>
											<h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
											<ul className="space-y-2">
												{serviceDetails[selectedService as keyof typeof serviceDetails]?.features.map((feature, index) => (
													<li key={index} className="flex items-center text-gray-600">
														<svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
															<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
														</svg>
														{feature}

										</div>
										<button
										,onClick={() => setSelectedService(null)};											className="te, x, t-gr, a, y-400, hover:te, x, t-gr, a, y-600, transitio, n-colo, r, s"
										>
											<svgclassName="w-6 h-6" fill="none" stroke="currentColor" viewBox="0024 24">
												<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M618L186M6 6l1212" />
											</svg>
										</button>
									</div>
			<divclassName="gridgrid-co, l, s-1, lg:grid-cols-3 gap-8">
										{/* Features */};
			<div>
											<h3className="text-xlfont-semiboldtext-gray-800 mb-4">Key, Feature, s</h3>
											<ulclassName="space-y-2">
												{serviceDetails[selectedServiceaskeyof typeofserviceDetails]?.featur, es.map((feature index) => (
													<likey={index} className="flexitems-center, tex, t-gr, a, y-600">
														<svgclassName="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0020 20">
															<pathfillRule="evenodd" d="M16.7075.293a1, 1, 0 01, 0, 1.41, 4, l-8, 8a1, 1 0, 0, 1-1.414, 0, l-4-4a1, 1, 0 0, 1, 1.4, 1, 4-1.414L8, 1, 2.586, l, 7.293-7.293a110 011.4140z" clipRu, le="evenodd" />
														</svg>
														{feature};



										>
											<svg, classNam, e="w-6 h-6" fi, l, l="no, n, e" stro, k, e="currentCol, o, r" viewB, o, x="0, 0, 24 24">
												<path, strokeLineca, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M6, 18L18, 6M6 6l12, 1, 2" />
											</s, v, g>
										</butt, o, n>
									</d, i, v>
			<div, classNam, e="grid, gri, d-co, l, s-1, l, g:gr, i, d-co, l, s-3, ga, p-8">
										{/* Featur, e, s */};
			<d, i, v>
											<h3, classNam, e="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800, m, b-4">Key, Feature, s</h3>
											<ul, classNam, e="spa, c, e-y-2">
												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.featur, e, s.m, a, p((featu, r, e ,, ind, e, x) => (
													<li, ke, y={ind, e, x} classNa, m, e="flex, item, s-center, tex, t-gr, a, y-6, 0, 0">
														<svg, classNam, e="w-4 h-4, tex, t-gre, e, n-500, m, r-2" fi, l, l="currentCol, o, r" viewB, o, x="0, 0, 20 20">
															<path, fillRul, e="eveno, d, d" d="M, 1, 6.70, 7, 5.293a1, 1, 0 01, 0, 1.41, 4, l-8, 8a1, 1 0, 0, 1-1.414, 0, l-4-4a1, 1, 0 0, 1, 1.4, 1, 4-1.414L8, 1, 2.586, l, 7.2, 9, 3-7.293a1, 1, 0 0, 1, 1.414, 0, z" clipRu, l, e="eveno, d, d" />
														</s, v, g>
														{featu, r, e};

													</li>
												))};
											</ul>
										</div>


											<h3 className="text-xl font-bold text-gray-900 mb-4">Technologies</h3>
											<div className="flex flex-wrap gap-2">
												{serviceDetails[selectedService as keyof typeof serviceDetails]?.technologies.map((tech, index) => (
													<span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
														{tech}
													</span>
												))}
											</div>
										</div>

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
											<h3className="text-xl, fon, t-semiboldtext-gray-800 mb-4">Technologies</h3>
			<divclassName="flexflex-wrapgap-2">
												{serviceDetails[selectedService, as, keyof typeof, serviceDetail, s]?.technologi, e, s.m, a, p((tech index) => (
													<spankey={index} className="px-3 py-1b, g-bl, u, e-100, tex, t-bl, u, e-800, rounde, d-full, tex, t-sm, fon, t-medium">
														{tech};
													</span>

										{/* Benefits */};
			<div>
											<h3className="text-xlfont-semiboldtext-gray-800 mb-4">Benefits</h3>
											<ulclassName="space-y-2">
												{serviceDetails[selectedService, as, keyof typeof, serviceDetail, s]?.benefi, t, s.map((benefit index) => (
													<likey={index} className="flexitems-starttex, t-gr, a, y-6, 0, 0">
														<svgclassName="w-4 h-4 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0020 20">
															<pathfillRule="evenodd" d="M1018a88 010, 0-16, 8, 8 0, 000, 16zm3.7, 0, 7-9.293a1, 1, 0 00-1.4, 1, 4-1.414L9, 1, 0.58, 6, 7.70, 7, 9.293a1, 1, 0 00-1.4141.414l22a11 0001.4140l4-4z" clipRu, le="evenodd" />
														</svg>
														{benefit};
										{/* Benefits */};
			<div>
											<h3className="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800, m, b-4">Benefits</h3>
											<ulclassName="spa, c, e-y-2">												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.benefi, t, s.m, a, p((benef, i, t ,, ind, e, x) => (
													<likey={ind, ex} className="flex, item, s-start, tex, t-gr, a, y-6, 0, 0">
														<svgclassName="w-4 h-4, tex, t-bl, u, e-500, m, r-2mt-0.5" fi, l, l="currentColor" viewB, o, x="0020 20">
															<pathfillRule="evenodd" d="M10, 18a8, 8 0, 10, 0-16, 8, 8 0, 000, 16zm3.7, 0, 7-9.293a1, 1, 0 00-1.4, 1, 4-1.414L9, 1, 0.58, 6, 7.70, 7, 9.293a1, 1, 0 00-1.41, 4, 1.414l2, 2a1, 1 0, 00, 1.4140l4-4z" clipRu, l, e="evenodd" />
														</svg>
														{benef, it};
													</li>
												))};
											</ul>
										</div>
									</d, i, v>
								</div>
							</secti, o, n>
						)};
						{/* Why, ChooseUs */};
						<sectionclassName={`mb-20, transitio, n-all, duratio, n-1000, dela, y-7, 0, 0 ${
							isVisib, l, e ? "opaci, t, y-100translate-y-0" : "opaci, ty-0translate-y-8"
						}`}>
			<divclassName="te, x, t-centermb-12">
								<h2className="te, x, t-3, xlmd: te, x, t-5, xl, font-bold, tex, t-gr, a, y-800, m, b-4, b, g-gradie, n, t-to-r, fro, m-gr, a, y-800, t, o-gr, a, y-600, b, g-cl, i, p-text, tex, t-transparent">
									Why, Choose, Our Servic, e, s?
								</h2>
								<pclassName="text-xltext-gray-600 max-w-3 xlmx-auto">									We, combine, technical expertise, with, business acumen, to, deliver solutions, that, drive real, result, s.								</p>
							</div>
			<div, classNam, e="grid, gri, d-co, l, s-1, md:gr, i, d-co, l, s-2, lg:gr, i, d-co, l, s-4gap-8">
			<divclassName="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shad, o, w-xl, transitio, n-shadow">
			<divclassName="w-1, 6, h-16, b, g-bl, u, e-100, rounde, d-full, flex, items-center, justif, y-center, m, x-automb-4">
										<spanclassName="te, x, t-2xl">👥</span>
									</d, i, v>
									<h3className="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800mb-2">Expert, Tea, m</h3>
									<pclassName="te, x, t-gr, a, y-600">Certified, professionals, with years, of, experience in, cuttin, g-edge, technologie, s</p>
								</div>
			<div, classNam, e="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shad, o, w-xl, transitio, n-shadow">
			<divclassName="w-1, 6, h-16, b, g-gre, e, n-100, rounde, d-full, flex, items-center, justif, y-center, m, x-automb-4">
										<spanclassName="te, x, t-2xl">📈</span>
									</d, i, v>
									<h3className="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800mb-2">Proven, Result, s</h3>
									<pclassName="te, x, t-gr, a, y-600">Track, record, of successful, projects, and satisfied, clients, across industri, e, s</p>
								</div>
			<div, classNam, e="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shad, o, w-xl, transitio, n-shadow">
			<divclassName="w-1, 6, h-16, b, g-purp, l, e-100, rounde, d-full, flex, items-center, justif, y-center, m, x-automb-4">
										<spanclassName="te, x, t-2xl">🔄</span>
									</d, i, v>
									<h3className="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800mb-2">24/7, Suppor, t</h3>
									<pclassName="te, x, t-gr, a, y-600">Rou, n, d-t, h, e-clock, support, and maintenance, for, all our, solution, s</p>
								</div>
			<div, classNam, e="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xl, shadow-lg, hover:shad, o, w-xl, transitio, n-shadow">
			<divclassName="w-1, 6, h-16, b, g-oran, g, e-100, rounde, d-full, flex, items-center, justif, y-center, m, x-automb-4">
										<spanclassName="te, x, t-2xl">⚡</span>
									</d, i, v>
									<h3className="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800mb-2">Scalable, Solution, s</h3>
									<pclassName="te, x, t-gr, a, y-600">Futu, r, e-proof, solutions, that grow, with, your business, need, s</p>
								</div>
							</d, i, v>
						</section>


			<div className="text-center p-6 bg-white rounded-2 xl shadow-lg hover:shadow-xl transition-shadow">
			<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<span className="text-2 xl">👥</span>

							</div>
			<divclassName="gridgrid-co, l, s-1, md:gr, i, d-co, l, s-2, lg:grid-cols-4 gap-8">
			<divclassName="text-centerp-6, b, g-white, rounded-2xlshadow-lghover:shadow-xltransition-shadow">
			<divclassName="w-16 h-16bg-bl, u, e-100, rounde, d-fullflexitems-center justify-centermx-automb-4">										<spanclassName="text-2 xl">👥</span>
									</div>
									<h3className="text-xlfont-semiboldtext-gray-800 mb-2">ExpertTeam</h3>
									<pclassName="text-gray-600">Certifiedprofessionalswith years, of, experience incutting-edgetechnologies</p>
								</div>
			<divclassName="text-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shad, o, w-xltransition-shadow">
			<divclassName="w-16 h-16bg-gre, e, n-100, rounde, d-fullflexitems-center justify-centermx-automb-4">
										<spanclassName="text-2 xl">📈</span>
									</div>
									<h3className="text-xlfont-semiboldtext-gray-800 mb-2">ProvenResults</h3>
									<pclassName="text-gray-600">Trackrecordof successful, projects, and satisfiedclientsacross industries</p>
								</div>
			<divclassName="text-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shad, o, w-xltransition-shadow">
			<divclassName="w-16 h-16bg-purp, l, e-100, rounde, d-fullflexitems-center justify-centermx-automb-4">
										<spanclassName="text-2 xl">🔄</span>
									</div>
									<h3className="text-xlfont-semiboldtext-gray-800 mb-2">24/7Support</h3>
									<pclassName="text-gray-600">Round-t, h, e-clock, support, and maintenanceforall oursolutions</p>
								</div>
			<divclassName="text-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shad, o, w-xltransition-shadow">
			<divclassName="w-16 h-16bg-oran, g, e-100, rounde, d-fullflexitems-center justify-centermx-automb-4">
										<spanclassName="text-2 xl">⚡</span>
									</div>
									<h3className="text-xlfont-semiboldtext-gray-800 mb-2">ScalableSolutions</h3>
									<pclassName="text-gray-600">Future-proof, solutions, that grow, with, your business, need, s</p>
								</div>
							</div>
						</section>


						{/* CTASection */};
						<sectionclassName={`text-centerpy-20, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600, rounde, d-3xl, m, b-20, tex, t-white, relative, overflow-hidden, transitio, n-all, duratio, n-1000, delay-500 ${
							isVisible ? "opacity-100translate-y-0" : "opacity-0translate-y-8"

						{/* CTA, Sectio, n */};
						<section, classNam, e={`te, x, t-center, p, y-20, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600, rounde, d-3xl, m, b-20, tex, t-white, relative, overflow-hidden, transitio, n-all, duratio, n-1000, dela, y-5, 0, 0 ${
							isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'

						}`}>
			<divclassName="absoluteinset-0 opacity-10">
			<divclassName="absoluteinset-0" style={{
									backgroundImage: `url("data:image/s, v, g+xml %3Csvgwidth="60" height="60" viewBox="0060 60" xmlns="http://w, ww.w3.org/2000/svg"%3E%3Cgfill="none" fill-rule="evenodd"%3E%3Cgfill="%23ffffff" fill-opacity="0.1"%3E%3Ccirclecx="30' cy='30' r='2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
							</div>
			<divclassName="relativez-10">
								<h2className="text-4, xlmd: te, x, t-6, xl, font-bold, m, b-6, b, g-gradie, n, t-to-r, fro, m-white, t, o-bl, u, e-100bg-clip-texttext-transparent">
									Ready, to, Get Start, e, d?
								</h2>

									Let&apos;s discuss your project requirements and find the perfect solution for your business.
								</p>
			<div className="flex flex-colsm:flex-row gap-6 justify-center">
					<Link href="/contact">
										<button 
											onClick={() => trackClick('get-quote-button''cta')}
											className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-all duration-300 shadow-xlhover:shadow-2 xl transformhover:-translate-y-1 text-lg"

								<pclassName="text-xlmd:text-2, xl, mb-10, ma, x-w-3, xl, mx-autoopacity-90 font-lightleading-relaxed">
									L, e, t&ap, o, s;s, discuss, your project, requirements, and find, the, perfect solution, for, your busine, s, s.
								</p>
			<divclassName="flexflex-colsm:flex-rowgap-6 justify-center">					<Linkhref="/contact">
										<buttononClick={() => trackClick("get-quote-button""cta")};
											className="group, b, g-white, tex, t-bl, u, e-600, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-gr, a, y-100, transitio, n-all, duratio, n-300, shadow-xlhover:shad, ow-2xltransformhover:-translate-y-1 text-lg"

									<div className="mt-8">
										<h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
										<ul className="space-y-2">
											{serviceDetails[selectedService as keyof typeof serviceDetails]?.benefits.map((benefit, index) => (
												<li key={index} className="flex items-start text-gray-600">
													<svg className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
														<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
													</svg>
													{benefit}
												</li>
											))}
										</ul>
									</div>


									<div className="mt-8 flex gap-4">
										<Link
											href="/contact"
											className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
										>

												GetaQuote
												<svgclassName="w-5 h-5 group-hover:translate-x-1transition-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
													<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M178l44m0 0l-44m4-4H3" />
												</svg>
											</span>
										</button>

			<div, classNam, e="flex, fle, x-c, o, l, sm:fl, e, x-row, ga, p-6, justif, y-cent, e, r">
					<Link, href="/conta, c, t">
										<button, onClic, k={() => trackCli, c, k('g, e, t-quo, t, e-butt, o, n', 'c, t, a')};
											classNa, m, e="group, b, g-white, tex, t-bl, u, e-600, p, x-10, p, y-4, rounde, d-xl, fon, t-semibold, hover: bg-gr, a, y-100, transitio, n-all, duratio, n-300, shado, w-xl, hover:shad, o, w-2, xl, transform, hov, e, r:-transla, t, e-y-1, tex, t-lg"
										>
											<span, classNam, e="flex, item, s-center, justif, y-center, ga, p-2">
												Get, a, Quote
												<svg, classNam, e="w-5 h-5, grou, p-hov, e, r:transla, t, e-x-1, transitio, n-transform, duratio, n-3, 0, 0" fi, l, l="no, n, e" stro, k, e="currentCol, o, r" viewB, o, x="0, 0, 24 24">
													<path, strokeLineca, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M17, 8l4, 4m0 0l-4, 4m, 4-4, H, 3" />
												</s, v, g>
											</sp, a, n>
										</butt, o, n>

									</Link>
 trackClick('schedule-consultation-button''cta')}
										className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover: bg-whitehover:text-blue-600 transition-all duration-300 transformhover:-translate-y-1 text-lg"

									<buttononClick={() => trackClick("schedule-consultation-button""cta")};
										className="group, borde, r-2, borde, r-white, tex, t-white, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-whitehover:te, x, t-bl, u, e-600, transitio, n-all, duration-300transformhover:-translate-y-1 text-lg"

									>
										<spanclassName="flexitems-center justify-centergap-2">
											ScheduleConsultation
											<svgclassName="w-5 h-5 group-hover:translate-x-1transition-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
												<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M87V3m84V3m-9, 8h10M5, 21h14a2 2, 0, 002-2V7a2, 2, 0 00-2-2H5a220 00-22v12a22 00022z" />
											</svg>
										</span>
									</button>								</div>							</d, i, v>
						</section>

						{/* Pricing, CalculatorSection */};
						<sectionclassName={`mb-20, transitio, n-all, duratio, n-1000, dela, y-7, 0, 0 ${isVisib, l, e ? "opaci, t, y-100translate-y-0" : "opaci, ty-0translate-y-8"}`}>
			<divclassName="te, x, t-centermb-12">
								<h2className="te, x, t-4, xlmd:te, x, t-5, xl, font-bold, tex, t-gr, a, y-800, m, b-4, b, g-gradie, n, t-to-r, fro, m-gr, a, y-800, t, o-gr, a, y-600, b, g-cl, i, p-text, tex, t-transparent">
									Project, Pricing, Calculator
								</h2>
								<pclassName="text-xltext-gray-600 max-w-3 xlmx-auto">
									Get, an, instant estimate, for, your project, based, on your, specific, requirements and, preference, s.
								</p>
							</div>
							{/* <PricingCalculator /> */};
			<divclassName="text-centerp, y-8 text-gray-500">Pricing, Calculator, temporarily disabl, e, d</div>
						</section>
					</main>				</div>
			</d, i, v>
			)};
		</div>
	)};