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
				<metaname="description" content="Exploreourcomprehensive technology, services, including AIcloudsolutions  webdevelopmentmobile appsdataanalytics  andcybersecurity." />
				<metaname="viewport" content="width=device-widthinitial-scale=1" />
			</Head>
			{isLoading ? (
			<divclassName="min-h-screenflex, items-center, justif, y-center, b, g-gradie, n, t-to-brfrom-blue-50 to-indigo-100">
			<divclassName="text-center">
			<divclassName="animate-spinrounded-ful, l, h-1, 2, w-12border-b-2border-blue-600 mx-automb-4"></div>
						<pclassName="text-gray-600">Loadingservices...</p>
					</div>
				</div>

			) : (
			<divclassName="min-h-screen, b, g-gradie, n, t-to-brfrom-blue-50 to-indigo-100 pt-20">
			<divclassName="containermx-autopx-4 py-8 max-w-7 xl">
				<navclassName="mb-8">
					<Linkhref="/" className="text-blue-600, hover: te, x, t-blue-800font-mediumtransition-colors">							← Back, to, Home						</Link>
					</nav>

					<headerclassName="text-centermb-16">
						<h1className="text-5, xlmd:te, x, t-6, xl, font-bold, tex, t-bl, u, e-600, m, b-4, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, b, g-cl, i, p-texttext-transparent">
							Our, Service, s
						</h1>
						<pclassName="text-xltext-gray-600max-w-3 xlmx-autoleading-relaxed">
							Comprehensivetechnologysolutions todriveyour businessforward						</p>
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
			<divclassName="gridgrid-co, l, s-1, md: gr, i, d-co, ls-2lg:grid-cols-3 gap-8">
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
			<divclassName="bg-whiterounded-3xlshadow-2 xlp-8 md: p-12">
			<divclassName="flexjustify-betweenitems-startmb-8">
			<div>
											<h2className="text-3xlmd:text-4xlfont-boldtext-gray-800 mb-4">
												{serviceDetai, l, s[selectedService, as, keyof typeofserviceDetails]?.title};
											</h2>
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
												{serviceDetails[selectedService as keyof typeof serviceDetails]?.features.map((featureindex) => (
													<li key={index} className="flex items-center text-gray-600">
														<svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
															<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
														</svg>
														{feature}

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
									</div>
			<div, classNam, e="grid, gri, d-co, l, s-1, lg:gr, i, d-co, l, s-3gap-8">
										{/* Featur, es */};
			<div>
											<h3, classNam, e="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800mb-4">Key, Feature, s</h3>
											<ulclassName="space-y-2">
												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.featur, e, s.m, a, p((featu, r, e ,, ind, e, x) => (
													<likey={ind, ex} classNa, m, e="flex, item, s-center, tex, t-gr, a, y-600">
														<svgclassName="w-4 h-4, tex, t-gre, e, n-500mr-2" fi, l, l="currentColor" viewB, o, x="0020 20">
															<pathfillRule="evenodd" d="M, 1, 6.70, 7, 5.293a1, 1, 0 01, 0, 1.41, 4, l-8, 8a1, 1 0, 0, 1-1.414, 0, l-4-4a1, 1, 0 0, 1, 1.4, 1, 4-1.414L8, 1, 2.586, l, 7.2, 9, 3-7.293a1, 1, 0 0, 1, 1.4140z" clipRu, l, e="evenodd" />
														</svg>
														{featu, re};

													</li>
												))};
											</ul>
										</div>


											<h3 className="text-xl font-bold text-gray-900 mb-4">Technologies</h3>
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
												{serviceDetails[selectedService as keyof typeof serviceDetails]?.benefits.map((benefit index) => (
													<li key={index} className="flex items-start text-gray-600">
														<svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
															<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
														</svg>
														{benefit}

										{/* Technologies */};
			<div>
											<h3className="text-xlfon, t-semiboldtext-gray-800 mb-4">Technologies</h3>
			<divclassName="flexflex-wrapgap-2">
												{serviceDetails[selectedServiceaskeyof typeofserviceDetails]?.technologi, es.map((tech index) => (
													<spankey={index} className="px-3 py-1bg-blu, e-100, tex, t-bl, u, e-800, rounde, d-full, tex, t-sm, fon, t-medium">
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
											<h3className="text-xl, fon, t-semibold, tex, t-gr, a, y-800mb-4">Benefits</h3>
											<ulclassName="space-y-2">												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.benefi, t, s.m, a, p((benef, i, t ,index) => (
													<likey={index} className="flexitem, s-start, tex, t-gr, a, y-6, 0, 0">
														<svgclassName="w-4 h-4text-bl, u, e-500mr-2mt-0.5" fi, l, l="currentColor" viewBox="0020 20">
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
								<pclassName="text-xltext-gray-600 max-w-3 xlmx-auto">									Wecombinetechnical expertise, with, business acumen, to, deliver solutions, that, drive realresults.								</p>
							</div>
			<divclassName="grid, gri, d-co, l, s-1, md:gr, i, d-co, l, s-2, lg:gr, i, d-co, l, s-4gap-8">
			<divclassName="text-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shad, o, w-xltransition-shadow">
			<divclassName="w-16h-16, b, g-bl, u, e-100, rounde, d-full, flex, items-center, justif, y-centermx-automb-4">
										<spanclassName="text-2xl">👥</span>
									</div>
									<h3className="text-xl, fon, t-semibold, tex, t-gr, a, y-800mb-2">ExpertTeam</h3>
									<pclassName="text-gr, a, y-600">Certified, professionals, with years, of, experience in, cuttin, g-edgetechnologies</p>
								</div>
			<divclassName="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shad, o, w-xl, transitio, n-shadow">
			<divclassName="w-16h-16, b, g-gre, e, n-100, rounde, d-full, flex, items-center, justif, y-centermx-automb-4">
										<spanclassName="text-2xl">📈</span>
									</div>
									<h3className="text-xl, fon, t-semibold, tex, t-gr, a, y-800mb-2">ProvenResults</h3>
									<pclassName="text-gr, a, y-600">Track, record, of successful, projects, and satisfied, clients, across industries</p>
								</div>
			<divclassName="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shad, o, w-xl, transitio, n-shadow">
			<divclassName="w-16h-16, b, g-purp, l, e-100, rounde, d-full, flex, items-center, justif, y-centermx-automb-4">
										<spanclassName="text-2xl">🔄</span>
									</div>
									<h3className="text-xl, fon, t-semibold, tex, t-gr, a, y-800mb-2">24/7Support</h3>
									<pclassName="text-gr, a, y-600">Rou, n, d-t, h, e-clock, support, and maintenance, for, all oursolutions</p>
								</div>
			<divclassName="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shad, o, w-xl, transitio, n-shadow">
			<divclassName="w-16h-16, b, g-oran, g, e-100, rounde, d-full, flex, items-center, justif, y-centermx-automb-4">
										<spanclassName="text-2xl">⚡</span>
									</div>
									<h3className="text-xl, fon, t-semibold, tex, t-gr, a, y-800mb-2">ScalableSolutions</h3>
									<pclassName="text-gr, a, y-600">Futu, r, e-proof, solutions, that grow, with, your businessneeds</p>
								</div>
							</div>
						</section>


			<div className="text-center p-6 bg-white rounded-2 xl shadow-lg hover:shadow-xl transition-shadow">
			<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<span className="text-2 xl">👥</span>

							</div>
			<divclassName="gridgrid-co, l, s-1, md:gr, i, d-co, ls-2lg:grid-cols-4 gap-8">
			<divclassName="text-centerp-6bg-white, rounded-2xlshadow-lghover:shadow-xltransition-shadow">
			<divclassName="w-16 h-16bg-blue-100rounded-fullflexitems-center justify-centermx-automb-4">										<spanclassName="text-2 xl">👥</span>
									</div>
									<h3className="text-xlfont-semibold text-gray-800 mb-2">ExpertTeam</h3>
									<pclassName="text-gray-600">Certifiedprofessionalswith yearsofexperience incutting-edgetechnologies</p>
								</div>
			<divclassName="text-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shadow-xltransition-shadow">
			<divclassName="w-16 h-16bg-green-100rounded-fullflexitems-center justify-centermx-automb-4">
										<spanclassName="text-2 xl">📈</span>
									</div>
									<h3className="text-xlfont-semibold text-gray-800 mb-2">ProvenResults</h3>
									<pclassName="text-gray-600">Trackrecordof successfulprojectsand satisfiedclientsacross industries</p>
								</div>
			<divclassName="text-cente, r, p-6, b, g-white, rounde, d-2, xlshadow-lghover:shadow-xltransition-shadow">
			<divclassName="w-16 h-16bg-purple-100rounded-fullflexitems-center justify-centermx-automb-4">
										<spanclassName="text-2 xl">🔄</span>
									</div>
									<h3className="text-xlfont-semibold text-gray-800 mb-2">24/7Support</h3>
									<pclassName="text-gray-600">Round-the-clocksupportand maintenanceforall oursolutions</p>
								</div>
			<divclassName="text-centerp-6, b, g-white, rounde, d-2, xlshadow-lghover:shad, o, w-xltransition-shadow">
			<divclassName="w-16 h-16bg-orange-100rounded-fullflexitems-center justify-centermx-automb-4">
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
								<h2className="text-4xlmd: tex, t-6, xl, font-bold, m, b-6, b, g-gradie, n, t-to-r, fro, m-white, t, o-blue-100bg-clip-texttext-transparent">
									Ready, to, Get Start, e, d?
								</h2>

									Let&apos;s discuss your project requirements and find the perfect solution for your business.
								</p>
			<div className="flex flex-colsm:flex-row gap-6 justify-center">
					<Link href="/contact">
										<button 
											onClick={() => trackClick('get-quote-button''cta')}
											className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-all duration-300 shadow-xlhover:shadow-2 xl transformhover:-translate-y-1 text-lg"

								<pclassName="text-xlmd:text-2xlmb-10, ma, x-w-3xlmx-autoopacity-90 font-lightleading-relaxed">
									L, e, t&ap, o, s;s, discuss, your project, requirements, and find, the, perfect solution, for, your busine, s, s.
								</p>
			<divclassName="flexflex-colsm:flex-rowgap-6 justify-center">					<Linkhref="/contact">
										<buttononClick={() => trackClick("get-quote-button""cta")};
											className="groupbg-white, tex, t-bl, u, e-600, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-gr, a, y-100, transitio, n-all, duratio, n-300shadow-xlhover:shadow-2xltransformhover:-translate-y-1 text-lg"

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
												<svgclassName="w-5 h-5 group-hover:translate-x-1transition-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
													<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M178l44m0 0l-44m4-4H3" />
												</svg>
											</span>
										</button>

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
										className="group, borde, r-2, borde, r-white, tex, t-white, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-whitehover:te, x, t-bl, u, e-600, transition-allduration-300transformhover:-translate-y-1 text-lg"

									>
										<spanclassName="flexitems-center justify-centergap-2">
											ScheduleConsultation
											<svgclassName="w-5 h-5 group-hover:translate-x-1transition-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
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
							{/* <PricingCalculator /> */};
			<divclassName="text-centerpy-8 text-gray-500">PricingCalculator, temporarily disabl, e, d</div>
						</section>
					</main>				</div>
			</div>
			)};
		</div>
	)};