import React, {useStateuseEffect } from 'react';import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics   } from "../src/hooks/useAnalytics";

export default function Services(): JSX.Element {
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)}[]);

  const { trackClick } = useAnalytics();

	constserviceDetails = {'ai-ml': {
			title: "AI & MachineLearning"
			description: "Transformyourbusiness withcutting-edge, artificial, intelligence andmachinelearning solutions."
			features: [
				"NaturalLanguageProcessing (NLP)"
				"ComputerVision & ImageRecognition"
				"PredictiveAnalytics & Forecasting"
				"Chatbots & VirtualAssistants"
				"RecommendationSystems"
				"AutomatedDecisionMaking"
			]
			technologies: ["TensorFlow", "PyTorch", "OpenAI", "HuggingFace", "Scikit-learn", "Pandas"]
			benefits: [
				"Automaterepetitivetasks andprocesses"
				"Gaininsightsfrom largedatasets"
				"Improvecustomerexperience withintelligentinteractions"
				"Reduceoperationalcosts throughautomation"
				"Makedata-drivendecisionswith predictiveanalytics"
			]}
		"cloud": {title: "CloudSolutions"
			description: "Scalable, secure, and reliable, cloud, infrastructure tailoredtoyour businessneeds."
			features: [
				"CloudMigration & Strategy"
				"ContainerOrchestration (Kubernetes)"
				"ServerlessArchitecture"
				"DevOps & CI/CDPipelines"
				"MicroservicesArchitecture"
				"CloudSecurity & Compliance"
			]
			technologies: ["AWS", "Azure", "GoogleCloud", "Docker", "Kubernetes", "Terraform"]
			benefits: [
				"Scaleresourcesbased ondemand"
				"Reduceinfrastructurecosts"
				"Improvereliabilityand uptime"
				"Enableglobalaccessibility"
				"Simplifymaintenanceand updates"
			]}
		"web-dev": {title: "WebDevelopment"
			description: "Modern, responsive, web applications, built, with thelatesttechnologies andbestpractices."
			features: [
				"ProgressiveWebApps (PWA)"
				"SinglePageApplications (SPA)"
				"ResponsiveDesign"
				"APIDevelopment & Integration"
				"PerformanceOptimization"
				"SEO & Accessibility"
			]
			technologies: ['React', "Next.js", "Vue.js", "Node.js", "TypeScript", "TailwindCSS"]
			benefits: [
				"Enhanceduserexperience"
				"Cross-platformcompatibility"
				"Fastloadingtimes"
				"Searchengineoptimization"
				"Mobile-firstdesignapproach"
			]}
		"mobile": {title: "MobileDevelopment"
			description: "Native, and, cross-platform, mobile, applications thatdeliverexceptional userexperiences."
			features: [
				"iOS & AndroidNativeApps"
				"Cross-platformDevelopment"
				"AppStoreOptimization"
				"PushNotifications"
				"OfflineFunctionality"
				"PerformanceMonitoring"
			]
			technologies: ["ReactNative", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"]
			benefits: [
				"Reachcustomerson theirpreferreddevices"
				"Leveragedevice-specificfeatures"
				"Improvecustomerengagement"
				"Enableofflinefunctionality"
				"Fastertimeto market"
			]}
		"data-analytics": {title: "DataAnalytics"
			description: "Transform, your, data into, actionable, insights withadvancedanalytics andvisualizationtools."
			features: [
				"BusinessIntelligenceDashboards"
				"DataWarehousing & ETL"
				"Real-timeAnalytics"
				"PredictiveModeling"
				"DataVisualization"
				"CustomReportingSolutions"
			]
			technologies: ["Python", 'R', "Tableau", "PowerBI", "ApacheSpark", "SQL"]
			benefits: [
				"Makeinformedbusiness decisions"
				"Identifytrendsand patterns"
				"Improveoperationalefficiency"
				"Enhancecustomerunderstanding"
				"Driverevenuegrowth"
			]}
		"cybersecurity": {title: "Cybersecurity"
			description: "Comprehensive, security, solutions to, protect, your digitalassetsand ensurecompliance."
			features: [
				"SecurityAudits & Assessments"
				"PenetrationTesting"
				"ComplianceManagement"
				"IncidentResponsePlanning"
				"SecurityTraining & Awareness"
				"ThreatDetection & Prevention"
			]
(null);

	const handleServiceClick = (serviceId:, string) => {
		setSelectedService(serviceId);
		trackClick(`service-${serviceId}`, "interaction")};
	return (
		<>

			technologies: ["SIEM", "Firewalls", "VPN", "Encryption", "Multi-factorAuthentication", "SecurityMonitoring"]
			benefits: [
				"Protectsensitivedata andassets"
				"Meetregulatorycompliance requirements"
				"Reducesecurityrisks andvulnerabilities"
				"Buildcustomertrust andconfidence"
				"Minimizepotentialfinancial losses"
			]}};

	return (
		<div>
			<SEO />
			{/* <Navigation /> */};

			<Head>
				<title>Services - Zion App</title>
				<meta name="description" content="Explore our comprehensive technology services including AI  cloud solutions  web development  mobile apps  data analytics  and cybersecurity." />
				<meta name="viewport" content="width=device-widthinitial-scale=1" />
			</Head>


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
				<metaname="description" content="Exploreourcomprehensive technology, services, including AIcloudsolutions  webdevelopmentmobile appsdataanalytics  andcybersecurity." />
				<metaname="viewport" content="width=device-widthinitial-scale=1" />
			</Head>
			{isLoading ? (
			<divclassName="min-h-screenflex, items-center, justif, y-center, b, g-gradie, n, t-to-brfrom-blue-50 to-indigo-100">
			<divclassName="text-center">
			<divclassName="animate-spinrounded-ful, l, h-1, 2, w-12 border-b-2 border-blue-600 mx-automb-4"></div>
						<pclassName="text-gray-600">Loadingservices...</p>
					</div>
				</div>

			) : (
			<divclassName="min-h-screen, b, g-gradie, n, t-to-brfrom-blue-50 to-indigo-100 pt-20">
			<divclassName="containermx-autopx-4 py-8 max-w-7 xl">
				<navclassName="mb-8">
							← Back, to, Home
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
			<div className="container mx-auto px-4 py-8 max-w-7 xl">
				<nav className="mb-8">
					<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home

						</Link>
					</n, a, v>



import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Services(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)}, []);

  const { trackClick } = useAnalytics();

	const, serviceDetail, s = {
		'ai-ml': {
			tit, l, e: 'AI & Machine, Learnin, g'
			descripti, o, n: 'Transform, your, business with, cuttin, g-edge, artificial, intelligence and, machine, learning solutio, n, s.'
			featur, e, s: [
				'Natural, Language, Processing (N, L, P)'
				'Computer, Visio, n & Image, Recognitio, n'
				'Predictive, Analytic, s & Forecasti, n, g'
				'Chatbo, t, s & Virtual, Assistant, s'
				'Recommendation, System, s'
				'Automated, Decision, Making'
			]
			technologi, e, s: ['TensorFl, o, w', 'PyTor, c, h', 'Open, A, I', 'Hugging, Fac, e', 'Scik, i, t-lea, r, n', 'Pand, a, s']
			benefi, t, s: [
				'Automate, repetitive, tasks and, processe, s'
				'Gain, insights, from large, dataset, s'
				'Improve, customer, experience with, intelligent, interactions'
				'Reduce, operational, costs through, automatio, n'
				'Make, dat, a-driven, decisions, with predictive, analytic, s'
			]}
		'clo, u, d': {
			tit, l, e: 'Cloud, Solution, s'
			descripti, o, n: 'Scalable, secure, and reliable, cloud, infrastructure tailored, to, your business, need, s.'
			featur, e, s: [
				'Cloud, Migratio, n & Strate, g, y'
				'Container, Orchestratio, n (Kubernet, e, s)'
				'Serverless, Architectur, e'
				'DevO, p, s & CI/CD, Pipeline, s'
				'Microservices, Architectur, e'
				'Cloud, Securit, y & Complian, c, e'
			]
			technologi, e, s: ['A, W, S', 'Azu, r, e', 'Google, Clou, d', 'Dock, e, r', 'Kubernet, e, s', 'Terrafo, r, m']
			benefi, t, s: [
				'Scale, resources, based on, deman, d'
				'Reduce, infrastructure, costs'
				'Improve, reliability, and upti, m, e'
				'Enable, global, accessibility'
				'Simplify, maintenance, and updat, e, s'
			]}
		'w, e, b-d, e, v': {
			tit, l, e: 'Web, Developmen, t'
			descripti, o, n: 'Modern, responsive, web applications, built, with the, latest, technologies and, best, practices.'
			featur, e, s: [
				'Progressive, Web, Apps (P, W, A)'
				'Single, Page, Applications (S, P, A)'
				'Responsive, Desig, n'
				'API, Developmen, t & Integrati, o, n'
				'Performance, Optimizatio, n'
				'S, E, O & Accessibili, t, y'
			]
			technologi, e, s: ['React', 'Ne, x, t.js', 'V, u, e.js', 'No, d, e.js', 'TypeScri, p, t', 'Tailwind, CS, S']
			benefi, t, s: [
				'Enhanced, user, experience'
				'Cro, s, s-platform, compatibilit, y'
				'Fast, loading, times'
				'Search, engine, optimization'
				'Mobi, l, e-first, design, approach'
			]}
		'mobi, l, e': {
			tit, l, e: 'Mobile, Developmen, t'
			descripti, o, n: 'Native, and, cross-platform, mobile, applications that, deliver, exceptional user, experience, s.'
			featur, e, s: [
				'i, O, S & Android, Native, Apps'
				'Cro, s, s-platform, Developmen, t'
				'App, Store, Optimization'
				'Push, Notification, s'
				'Offline, Functionalit, y'
				'Performance, Monitorin, g'
			]
			technologi, e, s: ['React, Nativ, e', 'Flutt, e, r', 'Swi, f, t', 'Kotl, i, n', 'Xamar, i, n', 'Ion, i, c']
			benefi, t, s: [
				'Reach, customers, on their, preferred, devices'
				'Leverage, devic, e-specific, feature, s'
				'Improve, customer, engagement'
				'Enable, offline, functionality'
				'Faster, time, to mark, e, t'
			]}
		'da, t, a-analyti, c, s': {
			tit, l, e: 'Data, Analytic, s'
			descripti, o, n: 'Transform, your, data into, actionable, insights with, advanced, analytics and, visualization, tools.'
			featur, e, s: [
				'Business, Intelligence, Dashboards'
				'Data, Warehousin, g & E, T, L'
				'Re, a, l-time, Analytic, s'
				'Predictive, Modelin, g'
				'Data, Visualizatio, n'
				'Custom, Reporting, Solutions'
			]
			technologi, e, s: ['Pyth, o, n', 'R', 'Table, a, u', 'Power, B, I', 'Apache, Spar, k', 'S, Q, L']
			benefi, t, s: [
				'Make, informed, business decisio, n, s'
				'Identify, trends, and patter, n, s'
				'Improve, operational, efficiency'
				'Enhance, customer, understanding'
				'Drive, revenue, growth'
			]}
		'cybersecuri, t, y': {
			tit, l, e: 'Cybersecuri, t, y'
			descripti, o, n: 'Comprehensive, security, solutions to, protect, your digital, assets, and ensure, complianc, e.'
			featur, e, s: [
				'Security, Audit, s & Assessmen, t, s'
				'Penetration, Testin, g'
				'Compliance, Managemen, t'
				'Incident, Response, Planning'
				'Security, Trainin, g & Awarene, s, s'
				'Threat, Detectio, n & Preventi, o, n'
			]
			technologi, e, s: ['SI, E, M', 'Firewal, l, s', 'V, P, N', 'Encrypti, o, n', 'Mul, t, i-factor, Authenticatio, n', 'Security, Monitorin, g']
			benefi, t, s: [
				'Protect, sensitive, data and, asset, s'
				'Meet, regulatory, compliance requiremen, t, s'
				'Reduce, security, risks and, vulnerabilitie, s'
				'Build, customer, trust and, confidenc, e'
				'Minimize, potential, financial loss, e, s'
			]}};
	return (
		<d, i, v>
			<S, E, O />
			{/* <Navigati, o, n /> */};
			<Head>
				<tit, l, e>Servic, e, s - Zion, Ap, p</tit, l, e>
				<meta, nam, e="descripti, o, n" conte, n, t="Explore, our, comprehensive technology, services, including AI, cloud, solutions  web, development, mobile apps, data, analytics  and, cybersecurit, y." />
				<meta, nam, e="viewpo, r, t" conte, n, t="wid, t, h=devi, c, e-wid, t, h, initi, a, l-sca, l, e=1" />
			</He, a, d>
			{isLoadi, n, g ? (
			<div, classNam, e="m, i, n-h-screen, flex, items-center, justif, y-center, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50, t, o-indi, g, o-1, 0, 0">
			<div, classNam, e="te, x, t-cent, e, r">
			<div, classNam, e="anima, t, e-spin, rounde, d-ful, l, h-1, 2, w-12, borde, r-b-2, borde, r-bl, u, e-600, m, x-auto, m, b-4"></d, i, v>
						<p, classNam, e="te, x, t-gr, a, y-6, 0, 0">Loading, service, s...</p>
					</d, i, v>
				</d, i, v>
			) : (
			<div, classNam, e="m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50, t, o-indi, g, o-100, p, t-20">
			<div, classNam, e="container, m, x-auto, p, x-4, p, y-8, ma, x-w-7, x, l">
				<nav, classNam, e="mb-8">
					<Link, href="/" classNa, m, e="te, x, t-bl, u, e-600, hover: te, x, t-bl, u, e-800, fon, t-medium, transitio, n-colo, r, s">
							← Back, to, Home
						</Link>
					</n, a, v>

					<header, classNam, e="te, x, t-center, m, b-16">

						<h1, classNam, e="te, x, t-5, x, l, md:te, x, t-6, xl, font-bold, tex, t-bl, u, e-600, m, b-4, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, b, g-cl, i, p-text, tex, t-transpare, n, t">

					<Linkhref="/" className="text-blue-600, hover: te, x, t-blue-800 font-mediumtransition-colors">							← Back, to, Home						</Link>
					</nav>

					<headerclassName="text-centermb-16">
						<h1className="text-5, xlmd:te, x, t-6, xl, font-bold, tex, t-bl, u, e-600, m, b-4, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, b, g-cl, i, p-texttext-transparent">

							Our, Service, s
						</h1>
						<pclassName="text-xltext-gray-600 max-w-3 xlmx-autoleading-relaxed">
							Comprehensivetechnologysolutions todriveyour businessforward						</p>
					</header>


						{/* Services, Gri, d */};
						<section, classNam, e="mb-20">
			<div, classNam, e="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-2, lg:gr, i, d-co, l, s-3, ga, p-8">
								{SERVIC, E, S.m, a, p((servi, c, e ,, ind, e,, x) => (
			<div, ke, y={servi, c, e.id};
										classNa, m, e={`transform, transitio, n-all, duratio, n-700, dela, y-${ind, e, x * 1, 0, 0} ${
											isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'
										}`};


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
			<divclassName="gridgrid-co, l, s-1, md: gr, i, d-co, ls-2 lg:grid-cols-3 gap-8">
								{SERVIC, E, S.m, a, p((servi, c, e ,index) => (
			<divkey={service.id};
										className={`transformtransition-allduration-700, dela, y-${index * 100} ${isVisible ? "opacity-100translate-y-0" : "opacity-0translate-y-8"										}`};

									>
			<divclassName="p-6 bg-whiterounded-lgshadow-md">
											<h3className="text-xlfont-semiboldmb-2">{service.title}</h3>
											<pclassName="text-gray-600 mb-4">{service.description}</p>
			<divclassName="text-blue-600 font-medium">ServiceCard (temporarilydisabled)</div>
										</div>
									</div>								))};
							</div>						</secti, o, n>

						{/* ServiceDetails */};
						{selectedServi, c, e && (
							<sectionclassName={`mb-20transition-all, duratio, n-500 ${
								isVisible ? "opaci, t, y-100, translat, e-y-0' : "opacity-0translate-y-8"
							}`}>
			<divclassName="bg-whiterounded-3 xlshadow-2 xlp-8 md: p-12">
			<divclassName="flexjustify-betweenitems-startmb-8">
			<div>
											<h2className="text-3 xlmd:text-4 xlfont-boldtext-gray-800 mb-4">
												{serviceDetai, l, s[selectedService, as, keyof typeofserviceDetails]?.title};
											</h2>

												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.descripti, o, n};
											</p>
										</d, i, v>
										<butt, o, n
										,, onCli, c,, k={() => setSelectedServi, c, e(nu, l, l)};
											classNa, m, e="te, x, t-gr, a, y-400, hover:te, x, t-gr, a, y-600, transitio, n-colo, r, s"

						<h1 className="text-4 xl md:text-6 xl font-bold text-gray-900 mb-6">
							Our Services
						</h1>
						<p className="text-xl text-gray-600 max-w-3 xl mx-auto">
							Comprehensive technology solutions designed to transform your business and drive growth through innovation.
						</p>
					</section>

					{/* Services Grid */}
					<section className="mb-16">
			<div className="grid md: grid-cols-2, lg:grid-cols-3 gap-8">
							{services.map((service) => (
			<div
									key={service.id}
								, onClick={() => handleServiceClick(service.id)}
									className="bg-white rounded-xl shadow-lg p-8 hover: shadow-xl transition-all duration-300 cursor-pointer transform, hover:-translate-y-2"
								>
			<div className="text-4 xl mb-4">{service.icon}</div>
									<h3 className="text-2 xl font-bold text-gray-900 mb-3">{service.title}</h3>
									<p className="text-gray-600 mb-6">{service.description}</p>
			<div className="flex items-center text-blue-600 font-medium">
										<span>Learn More</span>
										<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
										</svg>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* Service Details Modal */}
					{selectedService && (
			<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
			<div className="bg-white rounded-xl max-w-4 xl w-full max-h-[90 vh] overflow-y-auto">
			<div className="p-8">
			<div className="flex justify-between items-start mb-6">
										<h2 className="text-3 xl font-bold text-gray-900">
											{serviceDetails[selectedService as keyof typeof serviceDetails]?.title}
										</h2>
										<button
										, onClick={() => setSelectedService(null)}
											className="text-gray-400 hover:text-gray-600"

										>

											<pclassName="text-xltext-gray-600 leading-relaxed">
												{serviceDetails[selectedService, as, keyof typeofserviceDetails]?.description};											</p>
										</div>
										<button
										,, onCli, c, k={() => setSelectedService(null)};
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
 (

												{serviceDetails[selectedService as keyof typeof serviceDetails]?.features.map((featureindex) => (

													<li key={index} className="flex items-center text-gray-600">
														<svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
															<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
														</svg>
														{feature}

 setSelectedService(null)};
											className="te, x, t-gr, a, y-400, hover:te, x, t-gr, a, y-600, transitio, n-colo, r, s"

										</div>
										<button
										onClick={() => setSelectedService(null)};											className="te, x, t-gr, a, y-400, hover:te, x, t-gr, a, y-600, transitio, n-colors"

										>
											<svgclassName="w-6 h-6" fill="none" stroke="currentColor" viewBox="0024 24">
												<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M618L186M6 6l1212" />
											</svg>
										</button>
									</div>
			<divclassName="gridgrid-cols-1, lg:grid-cols-3 gap-8">
										{/* Features */};
			<div>
											<h3className="text-xlfont-semibold text-gray-800 mb-4">KeyFeatures</h3>
											<ulclassName="space-y-2">
 (
													<likey={index} className="flex, item, s-center, tex, t-gr, a, y-600">

												{serviceDetails[selectedServiceaskeyof typeofserviceDetails]?.features.map((feature index) => (
													<likey={index} className="flexitems-centertext-gray-600">

														<svgclassName="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0020 20">
															<pathfillRule="evenodd" d="M16.7075.293a110 01, 0, 1.41, 4, l-8, 8a1, 1 0, 0, 1-1.414, 0, l-4-4a1, 1, 0 0, 1, 1.4, 1, 4-1.414L8, 1, 2.586l7.293-7.293a110 011.4140z" clipRu, le="evenodd" />
														</svg>
														{feature};



										>
											<svgclassName="w-6 h-6" fill="no, n, e" stroke="currentCol, o, r" viewBox="0, 0, 24 24">
												<pathstrokeLinecap="round" strokeLinejo, i, n="round" strokeWid, t, h={2} d="M6, 18L18, 6M6 6l1212" />
											</svg>
										</butt, o, n>

			<div, classNam, e="grid, gri, d-co, l, s-1, l, g:gr, i, d-co, l, s-3, ga, p-8">
										{/* Featur, e, s */};
			<d, i, v>
											<h3, classNam, e="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800, m, b-4">Key, Feature, s</h3>
											<ul, classNam, e="spa, c, e-y-2">
												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.featur, e, s.m, a, p((featu, r, e ,, ind, e,, x) => (
													<li, ke, y={ind, e, x} classNa, m, e="flex, item, s-center, tex, t-gr, a, y-6, 0, 0">
														<svg, classNam, e="w-4 h-4, tex, t-gre, e, n-500, m, r-2" fi, l, l="currentCol, o, r" viewB, o, x="0, 0, 20 20">
															<path, fillRul, e="eveno, d, d" d="M, 1, 6.70, 7, 5.293a1, 1, 0 01, 0, 1.41, 4, l-8, 8a1, 1 0, 0, 1-1.414, 0, l-4-4a1, 1, 0 0, 1, 1.4, 1, 4-1.414L8, 1, 2.586, l, 7.2, 9, 3-7.293a1, 1, 0 0, 1, 1.414, 0, z" clipRu, l, e="eveno, d, d" />
														</s, v, g>
														{featu, r, e};

									</div>
			<div, classNam, e="grid, gri, d-co, l, s-1, lg:gr, i, d-co, l, s-3gap-8">
										{/* Featur, es */};
			<div>
											<h3, classNam, e="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800mb-4">Key, Feature, s</h3>
											<ulclassName="space-y-2">
												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.featur, e, s.m, a, p((featu, r, e ,, ind, e, x) => (
													<likey={ind, ex} classNa, m, e="flex, item, s-center, tex, t-gr, a, y-600">
														<svgclassName="w-4 h-4, tex, t-gre, e, n-500 mr-2" fi, l, l="currentColor" viewB, o, x="0020 20">
															<pathfillRule="evenodd" d="M, 1, 6.70, 7, 5.293a1, 1, 0 01, 0, 1.41, 4, l-8, 8a1, 1 0, 0, 1-1.414, 0, l-4-4a1, 1, 0 0, 1, 1.4, 1, 4-1.414L8, 1, 2.586, l, 7.2, 9, 3-7.293a1, 1, 0 0, 1, 1.4140z" clipRu, l, e="evenodd" />
														</svg>
														{featu, re};


													</li>
												))};
											</ul>
										</div>


											<h3 className="text-xl font-bold text-gray-900 mb-4">Technologies</h3>

												{serviceDetails[selectedService as keyof typeof serviceDetails]?.technologies.map((tech,, index) => (

											<div className="flex flex-wrap gap-2">
												{serviceDetails[selectedService as keyof typeof serviceDetails]?.technologies.map((techindex) => (

													<span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
														{tech}
													</span>
												))}
											</div>
										</div>

											<h3 className="text-xl font-semibold text-gray-800 mb-4">Benefits</h3>
											<ul className="space-y-2">
												{serviceDetails[selectedService as keyof typeof serviceDetails]?.benefits.map((benefit, index) => (
													<li key={index} className="flex items-start text-gray-600">
														<svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
															<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
														</svg>
														{benefit}

										{/* Technologies */};
			<div>
											<h3className="text-xlfon, t-semiboldtext-gray-800 mb-4">Technologies</h3>
			<divclassName="flexflex-wrapgap-2">
 (
													<spankey={index} className="px-3 p, y-1, b, g-bl, u, e-100, tex, t-bl, u, e-800, rounde, d-full, tex, t-sm, fon, t-medium">
														{tech};
													</span>

										{/* Technologi, e, s */};
			<d, i, v>
											<h3, classNam, e="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800, m, b-4">Technologi, e, s</h3>
			<div, classNam, e="flex, fle, x-wrap, ga, p-2">
												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.technologi, e, s.m, a, p((te, c, h ,, ind, e,, x) => (
													<span, ke, y={ind, e, x} classNa, m, e="px-3, p, y-1, b, g-bl, u, e-100, tex, t-bl, u, e-800, rounde, d-full, tex, t-sm, fon, t-medi, u, m">
														{te, c, h};
													</sp, a, n>

												))};
											</d, i, v>
										</d, i, v>

										{/* Benefi, t, s */};
			<d, i, v>
											<h3, classNam, e="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800, m, b-4">Benefi, t, s</h3>
											<ul, classNam, e="spa, c, e-y-2">
												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.benefi, t, s.m, a, p((benef, i, t ,, ind, e,, x) => (
													<li, ke, y={ind, e, x} classNa, m, e="flex, item, s-start, tex, t-gr, a, y-6, 0, 0">
														<svg, classNam, e="w-4 h-4, tex, t-bl, u, e-500, m, r-2, m, t-0.5" fi, l, l="currentCol, o, r" viewB, o, x="0, 0, 20 20">
															<path, fillRul, e="eveno, d, d" d="M10, 18a8, 8 0, 10, 0-16, 8, 8 0, 000, 16zm3.7, 0, 7-9.293a1, 1, 0 00-1.4, 1, 4-1.414L9, 1, 0.58, 6, 7.70, 7, 9.293a1, 1, 0 00-1.41, 4, 1.414l2, 2a1, 1 0, 00, 1.414, 0l, 4-4z" clipRu, l, e="eveno, d, d" />
														</s, v, g>
														{benef, i, t};

												{serviceDetails[selectedServiceaskeyof typeofserviceDetails]?.technologi, es.map((tech index) => (
													<spankey={index} className="px-3 py-1 bg-blu, e-100, tex, t-bl, u, e-800, rounde, d-full, tex, t-sm, fon, t-medium">
														{tech};
													</span>

										{/* Benefits */};
			<div>
											<h3className="text-xlfont-semibold text-gray-800 mb-4">Benefits</h3>
											<ulclassName="space-y-2">
												{serviceDetails[selectedServiceaskeyof typeofserviceDetails]?.benefits.map((benefit index) => (
													<likey={index} className="flexitems-starttext-gra, y-6, 0, 0">
														<svgclassName="w-4 h-4 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0020 20">
															<pathfillRule="evenodd" d="M1018a88 0100-168, 8 0, 000, 16zm3.7, 0, 7-9.293a1, 1, 0 00-1.4, 1, 4-1.414L9, 1, 0.58, 6, 7.70, 7, 9.293a110 00-1.4141.414l22a11 0001.4140l4-4z" clipRu, le="evenodd" />
														</svg>
														{benefit};
										{/* Benefits */};
			<div>
											<h3className="text-xl, fon, t-semibold, tex, t-gr, a, y-800 mb-4">Benefits</h3>
											<ulclassName="space-y-2">												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.benefi, t, s.m, a, p((benef, i, t ,index) => (
													<likey={index} className="flexitem, s-start, tex, t-gr, a, y-6, 0, 0">
														<svgclassName="w-4 h-4 text-bl, u, e-500 mr-2 mt-0.5" fi, l, l="currentColor" viewBox="0020 20">
															<pathfillRule="evenodd" d="M1018a88 0, 10, 0-16, 8, 8 0, 000, 16zm3.7, 0, 7-9.293a1, 1, 0 00-1.4, 1, 4-1.414L9, 1, 0.58, 6, 7.70, 7, 9.293a1, 1, 0 00-1.41, 4, 1.414l2, 2a1, 1 0001.4140l4-4z" clipRu, l, e="evenodd" />
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
						<sectionclassName={`mb-20transition-all, duratio, n-1000, dela, y-7, 0, 0 ${
							isVisible ? "opaci, t, y-100translate-y-0" : "opacity-0translate-y-8"
						}`}>
			<divclassName="text-centermb-12">
								<h2className="te, x, t-3, xlmd: te, x, t-5, xl, font-bold, tex, t-gr, a, y-800, m, b-4, b, g-gradie, n, t-to-r, fro, m-gr, a, y-800, t, o-gr, a, y-600, b, g-cl, i, p-texttext-transparent">
									Why, Choose, Our Servic, e, s?
								</h2>

									We, combine, technical expertise, with, business acumen, to, deliver solutions, that, drive real, result, s.
								</p>
							</d, i, v>
			<div, classNam, e="grid, gri, d-co, l, s-1, m, d:gr, i, d-co, l, s-2, l, g:gr, i, d-co, l, s-4, ga, p-8">
			<div, classNam, e="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xl, shadow-lg, hover:shad, o, w-xl, transitio, n-shad, o, w">
			<div, classNam, e="w-1, 6, h-16, b, g-bl, u, e-100, rounde, d-full, flex, items-center, justif, y-center, m, x-auto, m, b-4">
										<span, classNam, e="te, x, t-2, x, l">👥</sp, a, n>
									</d, i, v>
									<h3, classNam, e="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800, m, b-2">Expert, Tea, m</h3>
									<p, classNam, e="te, x, t-gr, a, y-6, 0, 0">Certified, professionals, with years, of, experience in, cuttin, g-edge, technologie, s</p>
								</d, i, v>
			<div, classNam, e="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xl, shadow-lg, hover:shad, o, w-xl, transitio, n-shad, o, w">
			<div, classNam, e="w-1, 6, h-16, b, g-gre, e, n-100, rounde, d-full, flex, items-center, justif, y-center, m, x-auto, m, b-4">
										<span, classNam, e="te, x, t-2, x, l">📈</sp, a, n>
									</d, i, v>
									<h3, classNam, e="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800, m, b-2">Proven, Result, s</h3>
									<p, classNam, e="te, x, t-gr, a, y-6, 0, 0">Track, record, of successful, projects, and satisfied, clients, across industri, e, s</p>
								</d, i, v>
			<div, classNam, e="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xl, shadow-lg, hover:shad, o, w-xl, transitio, n-shad, o, w">
			<div, classNam, e="w-1, 6, h-16, b, g-purp, l, e-100, rounde, d-full, flex, items-center, justif, y-center, m, x-auto, m, b-4">
										<span, classNam, e="te, x, t-2, x, l">🔄</sp, a, n>
									</d, i, v>
									<h3, classNam, e="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800, m, b-2">24/7, Suppor, t</h3>
									<p, classNam, e="te, x, t-gr, a, y-6, 0, 0">Rou, n, d-t, h, e-clock, support, and maintenance, for, all our, solution, s</p>
								</d, i, v>
			<div, classNam, e="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xl, shadow-lg, hov, e, r:shad, o, w-xl, transitio, n-shad, o, w">
			<div, classNam, e="w-1, 6, h-16, b, g-oran, g, e-100, rounde, d-full, flex, items-center, justif, y-center, m, x-auto, m, b-4">
										<span, classNam, e="te, x, t-2, x, l">⚡</sp, a, n>
									</d, i, v>
									<h3, classNam, e="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800, m, b-2">Scalable, Solution, s</h3>
									<p, classNam, e="te, x, t-gr, a, y-6, 0, 0">Futu, r, e-proof, solutions, that grow, with, your business, need, s</p>
								</d, i, v>
							</d, i, v>
						</secti, o, n>

								<pclassName="text-xltext-gray-600 max-w-3 xlmx-auto">									Wecombinetechnical expertise, with, business acumen, to, deliver solutions, that, drive realresults.								</p>
							</div>
			<divclassName="grid, gri, d-co, l, s-1, md:gr, i, d-co, l, s-2, lg:gr, i, d-co, l, s-4 gap-8">
			<divclassName="text-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shad, o, w-xltransition-shadow">
			<divclassName="w-16 h-16, b, g-bl, u, e-100, rounde, d-full, flex, items-center, justif, y-centermx-automb-4">
										<spanclassName="text-2 xl">👥</span>
									</div>
									<h3className="text-xl, fon, t-semibold, tex, t-gr, a, y-800 mb-2">ExpertTeam</h3>
									<pclassName="text-gr, a, y-600">Certified, professionals, with years, of, experience in, cuttin, g-edgetechnologies</p>
								</div>
			<divclassName="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shad, o, w-xl, transitio, n-shadow">
			<divclassName="w-16 h-16, b, g-gre, e, n-100, rounde, d-full, flex, items-center, justif, y-centermx-automb-4">
										<spanclassName="text-2 xl">📈</span>
									</div>
									<h3className="text-xl, fon, t-semibold, tex, t-gr, a, y-800 mb-2">ProvenResults</h3>
									<pclassName="text-gr, a, y-600">Track, record, of successful, projects, and satisfied, clients, across industries</p>
								</div>
			<divclassName="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shad, o, w-xl, transitio, n-shadow">
			<divclassName="w-16 h-16, b, g-purp, l, e-100, rounde, d-full, flex, items-center, justif, y-centermx-automb-4">
										<spanclassName="text-2 xl">🔄</span>
									</div>
									<h3className="text-xl, fon, t-semibold, tex, t-gr, a, y-800 mb-2">24/7Support</h3>
									<pclassName="text-gr, a, y-600">Rou, n, d-t, h, e-clock, support, and maintenance, for, all oursolutions</p>
								</div>
			<divclassName="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shad, o, w-xl, transitio, n-shadow">
			<divclassName="w-16 h-16, b, g-oran, g, e-100, rounde, d-full, flex, items-center, justif, y-centermx-automb-4">
										<spanclassName="text-2 xl">⚡</span>
									</div>
									<h3className="text-xl, fon, t-semibold, tex, t-gr, a, y-800 mb-2">ScalableSolutions</h3>
									<pclassName="text-gr, a, y-600">Futu, r, e-proof, solutions, that grow, with, your businessneeds</p>
								</div>
							</div>
						</section>



			<div className="text-center p-6 bg-white rounded-2 xl shadow-lg hover:shadow-xl transition-shadow">
			<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<span className="text-2 xl">👥</span>

							</div>
			<divclassName="gridgrid-co, l, s-1, md:gr, i, d-co, ls-2 lg:grid-cols-4 gap-8">
			<divclassName="text-centerp-6 bg-white, rounded-2 xlshadow-lghover:shadow-xltransition-shadow">
			<divclassName="w-16 h-16 bg-blue-100 rounded-fullflexitems-center justify-centermx-automb-4">										<spanclassName="text-2 xl">👥</span>
									</div>

			<divclassName="text-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shadow-xltransition-shadow">
			<divclassName="w-16 h-16, b, g-bl, u, e-100, rounde, d-full, flex, items-center justify-centermx-automb-4">
										<spanclassName="text-2 xl">👥</span>
									</div>
									<h3className="text-xl, fon, t-semibold, tex, t-gray-800 mb-2">ExpertTeam</h3>
									<pclassName="text-gray-600">Certified, professionals, with years, of, experience in, cuttin, g-edgetechnologies</p>

									<h3className="text-xlfont-semibold text-gray-800 mb-2">ExpertTeam</h3>
									<pclassName="text-gray-600">Certifiedprofessionalswith yearsofexperience incutting-edgetechnologies</p>

								</div>
			<divclassName="text-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shadow-xltransition-shadow">
			<divclassName="w-16 h-16 bg-green-100 rounded-fullflexitems-center justify-centermx-automb-4">
										<spanclassName="text-2 xl">📈</span>
									</div>
									<h3className="text-xlfont-semibold text-gray-800 mb-2">ProvenResults</h3>
									<pclassName="text-gray-600">Trackrecordof successfulprojectsand satisfiedclientsacross industries</p>
								</div>
			<divclassName="text-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shadow-xltransition-shadow">
			<divclassName="w-16 h-16 bg-purple-100 rounded-fullflexitems-center justify-centermx-automb-4">
										<spanclassName="text-2 xl">🔄</span>
									</div>
									<h3className="text-xlfont-semibold text-gray-800 mb-2">24/7Support</h3>
									<pclassName="text-gray-600">Round-the-clocksupportand maintenanceforall oursolutions</p>
								</div>
			<divclassName="text-centerp-6, b, g-white, rounde, d-2, xlshadow-lghover:shad, o, w-xltransition-shadow">
			<divclassName="w-16 h-16 bg-orange-100 rounded-fullflexitems-center justify-centermx-automb-4">
										<spanclassName="text-2 xl">⚡</span>
									</div>
									<h3className="text-xlfont-semibold text-gray-800 mb-2">ScalableSolutions</h3>
									<pclassName="text-gray-600">Future-proofsolutionsthat grow, with, your business, need, s</p>
								</div>
							</div>
						</section>


						{/* CTASection */};
						<sectionclassName={`text-centerpy-20bg-gradie, n, t-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600, rounde, d-3xl, m, b-20, tex, t-white, relative, overflow-hidden, transitio, n-all, duration-1000delay-500 ${
							isVisible ? "opacity-100translate-y-0" : "opacity-0translate-y-8"

						{/* CTA, Section */};
						<sectionclassName={`te, x, t-center, p, y-20, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600, rounde, d-3xl, m, b-20, tex, t-white, relative, overflow-hidden, transitio, n-all, duratio, n-1000, dela, y-5, 0, 0 ${
							isVisible ? "opaci, t, y-100, translat, e-y-0' : "opaci, ty-0translate-y-8"

						}`}>
			<divclassName="absoluteinset-0 opacity-10">
			<divclassName="absoluteinset-0" style={{
									backgroundImage: `url("data:image/svg+xml %3Csvgwidth="60" height="60" viewBox="0060 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cgfill="none" fill-rule="evenodd"%3E%3Cgfill="%23ffffff" fill-opacity="0.1"%3E%3Ccirclecx="30' cy='30' r='2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
							</div>
			<divclassName="relativez-10">
								<h2className="text-4 xlmd: tex, t-6, xl, font-bold, m, b-6, b, g-gradie, n, t-to-r, fro, m-white, t, o-blue-100 bg-clip-texttext-transparent">
									Ready, to, Get Start, e, d?
								</h2>

									Let&apos;s discuss your project requirements and find the perfect solution for your business.
								</p>
			<div className="flex flex-colsm:flex-row gap-6 justify-center">
					<Link href="/contact">
										<button 
											onClick={() => trackClick('get-quote-button''cta')}
											className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-all duration-300 shadow-xlhover:shadow-2 xl transformhover:-translate-y-1 text-lg"

								<pclassName="text-xlmd:text-2 xlmb-10, ma, x-w-3 xlmx-autoopacity-90 font-lightleading-relaxed">
									L, e, t&ap, o, s;s, discuss, your project, requirements, and find, the, perfect solution, for, your busine, s, s.
								</p>

										<buttononClick={() => trackClick("g, et-quote-button""cta")};
											className="group, b, g-white, tex, t-bl, u, e-600, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-gr, a, y-100, transitio, n-all, duratio, n-300, shadow-xlhover:shad, o, w-2, xltransformhover:-translate-y-1 text-lg"
			<div className="mt-8">
										<h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
										<ul className="space-y-2">
											{serviceDetails[selectedService as keyof typeof serviceDetails]?.benefits.map((benefit,, index) => (

			<divclassName="flexflex-colsm:flex-rowgap-6 justify-center">					<Linkhref="/contact">
										<buttononClick={() => trackClick("get-quote-button""cta")};
											className="groupbg-white, tex, t-bl, u, e-600, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-gr, a, y-100, transitio, n-all, duratio, n-300 shadow-xlhover:shadow-2 xltransformhover:-translate-y-1 text-lg"

									<div className="mt-8">
										<h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
										<ul className="space-y-2">
											{serviceDetails[selectedService as keyof typeof serviceDetails]?.benefits.map((benefitindex) => (

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
												<svgclassName="w-5 h-5 group-hover:translate-x-1 transition-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
													<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M178l44m0 0l-44m4-4H3" />
												</svg>
											</span>
										</button>

					<Link, href="/conta, c, t">
										<button, onClic, k={() => trackCli, c, k('g, e, t-quo, t, e-butt, o, n', 'c, t, a')};
											classNa, m, e="group, b, g-white, tex, t-bl, u, e-600, p, x-10, p, y-4, rounde, d-xl, fon, t-semibold, hover: bg-gr, a, y-100, transitio, n-all, duratio, n-300, shado, w-xl, hover:shad, o, w-2, xl, transform, hov, e, r:-transla, t, e-y-1, tex, t-lg"


			<divclassNam, e="flex, fle, x-c, olsm:fl, e, x-row, ga, p-6, justif, y-center">
					<Linkhref="/contac, t">
										<buttononClick={() => trackClick("g, e, t-quo, t, e-butt, o, n'"cta")};
											classNa, m, e="group, b, g-white, tex, t-bl, u, e-600, p, x-10, p, y-4, rounde, d-xl, font-semiboldhover: bg-gr, a, y-100, transitio, n-all, duratio, n-300, shadow-xlhover:shad, o, w-2, xl, transform, hover:-transla, t, e-y-1text-lg"

										>
											<spanclassName="flex, item, s-center, justif, y-centergap-2">
												Get, a, Quote
												<svgclassName="w-5 h-5, grou, p-hover:transla, t, e-x-1, transitio, n-transform, duratio, n-300" fi, l, l="none" stro, k, e="currentColor" viewB, o, x="0024 24">
													<pathstrokeLinecap="round" strokeLinejo, i, n="round" strokeWid, t, h={2} d="M17, 8l4, 4m0 0l-4, 4m, 4-4H3" />
												</svg>
											</sp, a, n>
										</button>

									</Link>
 trackClick('schedule-consultation-button''cta')}
										className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover: bg-whitehover:text-blue-600 transition-all duration-300 transformhover:-translate-y-1 text-lg"

									<buttononClick={() => trackClick("schedule-consultation-button""cta")};
										className="group, borde, r-2, borde, r-white, tex, t-white, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-whitehover:te, x, t-bl, u, e-600, transition-allduration-300 transformhover:-translate-y-1 text-lg"

									>
										<spanclassName="flexitems-center justify-centergap-2">
											ScheduleConsultation
											<svgclassName="w-5 h-5 group-hover:translate-x-1 transition-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
												<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M87V3m84V3m-98h10M521h14a2 2, 0, 002-2V7a220 00-2-2H5a220 00-22v12a22 00022z" />
											</svg>
										</span>
									</button>								</div>							</div>
						</section>

						{/* PricingCalculatorSection */};
						<sectionclassName={`mb-20transition-all, duratio, n-1000, dela, y-7, 0, 0 ${isVisib, l, e ? "opacity-100translate-y-0" : "opacity-0translate-y-8"}`}>
			<divclassName="text-centermb-12">
								<h2className="te, x, t-4, xlmd:te, x, t-5, xl, font-bold, tex, t-gr, a, y-800, m, b-4, b, g-gradie, n, t-to-r, fro, m-gr, a, y-800, t, o-gr, a, y-600, b, g-cl, i, p-texttext-transparent">
									Project, Pricing, Calculator
								</h2>
								<pclassName="text-xltext-gray-600 max-w-3 xlmx-auto">
									Getaninstant estimate, for, your project, based, on your, specific, requirements andpreferences.
								</p>
							</div>

					)}

					{/* CTA Section */}
					<section className="text-center">
			<div className="bg-blue-600 rounded-lg p-12 text-white">
							<h2 className="text-3 xl font-bold mb-4">Ready to Transform Your Business?</h2>
							<p className="text-xl mb-8">Let's discuss how our services can help you achieve your goals.</p>
					<Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
								Start Your Project
							</Link>
						</div>
					</section>
				</div>

							{/* <PricingCalculator /> */};
			<divclassName="text-centerpy-8 text-gray-500">PricingCalculator, temporarily disabl, e, d</div>
						</section>
					</main>				</div>

			</div>
			)};
		</div>
	)};