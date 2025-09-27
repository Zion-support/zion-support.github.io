 {
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

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePageView, useAnalytics } from "../src/hooks/useAnalytics";

export default function Services(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsVisible(true);
		setIsLoading(false)}, []);

	// Analytics tracking
	const { trackClick } = useAnalytics();

	const serviceDetails = {
		'ai-ml': {
			title: "AI & Machine Learning",
			description: "Transform your business with cutting-edge artificial intelligence and machine learning solutions.",
			features: [
				"Natural Language Processing (NLP)",
				"Computer Vision & Image Recognition",
				"Predictive Analytics & Forecasting",
				"Chatbots & Virtual Assistants",
				"Recommendation Systems",
				"Automated Decision Making"
			],
			technologies: ["TensorFlow", "PyTorch", "OpenAI", "HuggingFace", "Scikit-learn", "Pandas"],
			benefits: [
				"Automate repetitive tasks and processes",
				"Gain insights from large datasets",
				"Improve customer experience with intelligent interactions",
				"Reduce operational costs through automation",
				"Make data-driven decisions with predictive analytics"
			]
		},
		"cloud": {
			title: "Cloud Solutions",
			description: "Scalable, secure, and reliable cloud infrastructure tailored to your business needs.",
			features: [
				"Cloud Migration & Strategy",
				"Infrastructure as Code (IaC)",
				"Container Orchestration",
				"Serverless Architecture",
				"Multi-cloud Management",
				"Disaster Recovery & Backup"
			],
			technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
			benefits: [
				"Scale resources based on demand",
				"Reduce infrastructure costs",
				"Improve reliability and uptime",
				"Enhance security and compliance",
				"Enable remote work and collaboration"
			]
		},
		"web": {
			title: "Web Development",
			description: "Modern, responsive, and high-performance web applications built with the latest technologies.",
			features: [
				"Responsive Web Design",
				"Progressive Web Apps (PWA)",
				"E-commerce Solutions",
				"Content Management Systems",
				"API Development & Integration",
				"Performance Optimization"
			],
			technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
			benefits: [
				"Fast, responsive user experience",
				"Mobile-first design approach",
				"SEO-optimized for better visibility",
				"Scalable and maintainable code",
				"Cross-browser compatibility"
			]
		},
		"mobile": {
			title: "Mobile App Development",
			description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
			features: [
				"iOS & Android Development",
				"Cross-platform Solutions",
				"App Store Optimization",
				"Push Notifications",
				"Offline Functionality",
				"Biometric Authentication"
			],
			technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Stripe"],
			benefits: [
				"Native performance and feel",
				"Faster development and deployment",
				"Consistent user experience across platforms",
				"Easy maintenance and updates",
				"Integration with existing systems"
			]
		},
		"data": {
			title: "Data Analytics",
			description: "Turn your data into actionable insights with powerful analytics and visualization tools.",
			features: [
				"Business Intelligence Dashboards",
				"Real-time Data Processing",
				"Data Warehousing",
				"ETL/ELT Pipelines",
				"Predictive Modeling",
				"Custom Reporting"
			],
			technologies: ["Python", "R", "Apache Kafka", "Elasticsearch", "Tableau", "Power BI"],
			benefits: [
				"Make informed business decisions",
				"Identify trends and patterns",
				"Improve operational efficiency",
				"Enhance customer understanding",
				"Drive revenue growth"
			]
		},
		"consulting": {
			title: "Technology Consulting",
			description: "Strategic guidance and expertise to help you navigate digital transformation and technology adoption.",
			features: [
				"Digital Transformation Strategy",
				"Technology Architecture Review",
				"Process Optimization",
				"Change Management",
				"Security Audits",
				"Training & Support"
			],
			technologies: ["Architecture Design", "Process Mapping", "Security Frameworks", "Best Practices", "Industry Standards"],
			benefits: [
				"Align technology with business goals",
				"Reduce risks and costs",
				"Accelerate time to market",
				"Improve team capabilities",
				"Ensure compliance and security"
			]
		}
	};

	const services = [
		{
			id: "ai-ml",
			title: "AI & Machine Learning",
			description: "Transform your business with cutting-edge AI solutions",
			icon: "🤖",
			color: "blue"
		},
		{
			id: "cloud",
			title: "Cloud Solutions",
			description: "Scalable and secure cloud infrastructure",
			icon: "☁️",
			color: "green"
		},
		{
			id: "web",
			title: "Web Development",
			description: "Modern, responsive web applications",
			icon: "🌐",
			color: "purple"
		},
		{
			id: "mobile",
			title: "Mobile Apps",
			description: "Native and cross-platform mobile solutions",
			icon: "📱",
			color: "orange"
		},
		{
			id: "data",
			title: "Data Analytics",
			description: "Turn data into actionable insights",
			icon: "📊",
			color: "red"
		},
		{
			id: "consulting",
			title: "Consulting",
			description: "Strategic technology guidance",
			icon: "💡",
			color: "indigo"
		}
	];

	const [selectedService, setSelectedService] = useState<string | null>(null);

	const handleServiceClick = (serviceId: string) => {
		setSelectedService(serviceId);
		trackClick(`service-${serviceId}`, "interaction")};

	return (
		<>

			<Head>
				<title>Our Services - Zion App</title>
				<meta name="description" content="Comprehensive technology services including AI, cloud computing, web development, mobile apps, data analytics, and consulting." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
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
					<Linkhref="/" className="text-bl, u, e-600, hover: te, x, t-bl, u, e-800, fon, t-mediumtransition-colors">							← Back, to, Home

			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
				<div className="container mx-auto px-4 py-8 max-w-7 xl">
					<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home

						</Link>
					</n, a, v>


						<h1, classNam, e="te, x, t-5, x, l, md:te, x, t-6, xl, font-bold, tex, t-bl, u, e-600, m, b-4, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, b, g-cl, i, p-text, tex, t-transpare, n, t">
							Our, Service, s
						</h1>
						<pclassName="text-xl, tex, t-gr, a, y-600, ma, x-w-3 xlmx-autoleading-relaxed">
							Comprehensive, technology, solutions to, drive, your businessforward						</p>
					</head, e, r>


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
										className={`transform, transitio, n-all, duratio, n-700, dela, y-${ind, e, x * 100} ${isVisible ? "opacity-100translate-y-0" : "opacity-0translate-y-8"										}`};
									>
			<divclassName="p-6 bg-whiterounded-lgshadow-md">
											<h3className="text-xlfont-semiboldmb-2">{service.title}</h3>
											<pclassName="text-gray-600 mb-4">{service.description}</p>
			<divclassName="text-bl, u, e-600 font-medium">Service, Car, d (temporarilydisabled)</div>
										</div>
									</div>								))};
							</d, i, v>
						</secti, o, n>

						{/* Service, Detail, s */};
						{selectedServi, c, e && (
							<section, classNam, e={`mb-20, transitio, n-all, duratio, n-5, 0, 0 ${
								isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'
							}`}>
			<divclassName="bg-whiterounded-3, xlshadow-2 xlp-8 md: p-12">
			<divclassName="flexjustify-betweenitems-startmb-8">
			<div>
											<h2className="te, x, t-3, xlmd:te, x, t-4, xl, font-boldtext-gray-800 mb-4">
												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.title};
											</h2>
											<pclassName="text-xl, tex, t-gray-600 leading-relaxed">
												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.description};											</p>
										</d, i, v>
										<butt, o, n
										,, onCli, c, k={() => setSelectedServi, c, e(nu, l, l)};
											classNa, m, e="te, x, t-gr, a, y-400, hover:te, x, t-gr, a, y-600, transitio, n-colo, r, s"

					{/* Header */}
					<section className="text-center mb-16">
						<h1 className="text-4 xl md:text-6 xl font-bold text-gray-900 mb-6">
							Our Services
						</h1>
						<p className="text-xl text-gray-600 max-w-3 xl mx-auto">
							Comprehensive technology solutions designed to transform your business and drive growth through innovation.
						</p>
					</section>

					{/* Services Grid */}
					<section className="mb-16">
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{services.map((service) => (
								<div
									key={service.id}
									onClick={() => handleServiceClick(service.id)}
									className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
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
											onClick={() => setSelectedService(null)}
											className="text-gray-400 hover:text-gray-600"

										>
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
												))}
											</ul>
										</d, i, v>

										<div>
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
										{/* Benefi, t, s */};
			<d, i, v>
											<h3, classNam, e="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800, m, b-4">Benefi, t, s</h3>
											<ul, classNam, e="spa, c, e-y-2">
												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.benefi, t, s.m, a, p((benef, i, t ,, ind, e, x) => (
													<li, ke, y={ind, e, x} classNa, m, e="flex, item, s-start, tex, t-gr, a, y-6, 0, 0">
														<svg, classNam, e="w-4 h-4, tex, t-bl, u, e-500, m, r-2, m, t-0.5" fi, l, l="currentCol, o, r" viewB, o, x="0, 0, 20 20">
															<path, fillRul, e="eveno, d, d" d="M10, 18a8, 8 0, 10, 0-16, 8, 8 0, 000, 16zm3.7, 0, 7-9.293a1, 1, 0 00-1.4, 1, 4-1.414L9, 1, 0.58, 6, 7.70, 7, 9.293a1, 1, 0 00-1.41, 4, 1.414l2, 2a1, 1 0, 00, 1.414, 0l, 4-4z" clipRu, l, e="eveno, d, d" />
														</s, v, g>
														{benef, i, t};
													</li>
												))};
											</ul>
										</d, i, v>
									</d, i, v>
								</d, i, v>
							</secti, o, n>
						)};
						{/* Why, Choose, Us */};
						<section, classNam, e={`mb-20, transitio, n-all, duratio, n-1000, dela, y-7, 0, 0 ${
							isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'
						}`}>
			<div, classNam, e="te, x, t-center, m, b-12">
								<h2, classNam, e="te, x, t-3, xl, md: te, x, t-5, xl, font-bold, tex, t-gr, a, y-800, m, b-4, b, g-gradie, n, t-to-r, fro, m-gr, a, y-800, t, o-gr, a, y-600, b, g-cl, i, p-text, tex, t-transpare, n, t">
									Why, Choose, Our Servic, e, s?
								</h2>
								<pclassName="text-xl, tex, t-gr, a, y-600 max-w-3 xlmx-auto">									We, combine, technical expertise, with, business acumen, to, deliver solutions, that, drive real, result, s.
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

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<div className="text-center p-6 bg-white rounded-2 xl shadow-lg hover:shadow-xl transition-shadow">
			<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<span className="text-2 xl">👥</span>


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
									</button>								</d, i, v>
							</d, i, v>
						</secti, o, n>

						{/* Pricing, Calculator, Section */};
						<section, classNam, e={`mb-20, transitio, n-all, duratio, n-1000, dela, y-7, 0, 0 ${isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'}`}>
			<div, classNam, e="te, x, t-center, m, b-12">
								<h2, classNam, e="te, x, t-4, xl, md:te, x, t-5, xl, font-bold, tex, t-gr, a, y-800, m, b-4, b, g-gradie, n, t-to-r, fro, m-gr, a, y-800, t, o-gr, a, y-600, b, g-cl, i, p-text, tex, t-transpare, n, t">
									Project, Pricing, Calculator
								</h2>
								<pclassName="text-xl, tex, t-gr, a, y-600 max-w-3 xlmx-auto">
									Get, an, instant estimate, for, your project, based, on your, specific, requirements and, preference, s.
								</p>
							</div>
							{/* <PricingCalculator /> */};
			<divclassName="tex, t-center, p, y-8 text-gray-500">Pricing, Calculator, temporarily disabl, e, d</div>
						</section>
					</main>				</d, i, v>
			</d, i, v>
			)};
		</d, i, v>
	)};

											Get Started
										</Link>
										<button
											onClick={() => setSelectedService(null)}
											className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
										>
											Close
										</button>
									</div>
								</div>
							</div>
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
			</div>
		</>
	)}

