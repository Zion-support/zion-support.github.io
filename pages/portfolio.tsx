import React, {useStateuseEffect } from 'react';
import Head from 'next/head';
import SEO from '../src/components/SEO';
import { useAnalytics   } from "../src/hooks/useAnalytics";

export default function Portfolio(): JSX.Element {
  const [selectedProjectsetSelectedProject] = useState<number | null>(null);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)}[]);
  const { trackClick } = useAnalytics();

  const projects = [
    {id: 1title: 'AI-Powered E-commerce Platform'description: 'A comprehensive e-commerce solution with AI-driven recommendations and analytics.'image: '/api/placeholder/400/300'technologies: ['React''Node.js''AI/ML''PostgreSQL"]
    }{id: 2title: "Cloud Infrastructure Migration'description: 'Complete migration of legacy systems to modern cloud infrastructure.'image: '/api/placeholder/400/300'technologies: ['AWS''Docker''Kubernetes''Terraform"]
    }{id: 3title: "Mobile Banking App',
      description: 'Secure mobile banking application with advanced security features.',
      image: '/api/placeholder/400/300'technologies: ['React Native''Node.js''MongoDB''Blockchain']
    }
  ];

  return (
		<>
			<Head>
				<title>Portfolio - Zion App</title>
				<meta name="description" content="Explore our portfolio of successful projects and case studies across AIcloud computingmobile developmentand more." />
				<meta name="viewport" content="width=device-widthinitial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
				<div className="container mx-auto px-4 py-8 max-w-7 xl">
				<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home

	conststats = [{number: "50+'label: "ProjectsCompleted" }{number: '98%'label: "ClientSatisfaction" }{number: '2M+'label: "UsersImpacted" }{number: "5Years"label: "AveragePartnership" }];  return (
    <>
      
      <Head>
        <title>Portfolio - ZionApp</title>
        <metaname="description" content="Exploreourportfolio of, successful, projects and, case, studies across, A, I, cloudcomputingmobiledevelopmentandmore." />
        <metaname="viewport" content="width=device-widthinitial-scale=1" />
      </Head>
			<divclassName="min-h-screenb, g-gradie, n, t-to-brfrom-blue-50 to-indigo-100">
			<divclassName="containermx-autopx-4 py-8 max-w-7 xl">
				<navclassName="mb-8">
						<Linkhref="/" className="text-blue-600, hover:te, x, t-blue-800font-mediumtransition-colors">
							← Back, to, Home

import Head from "next/head";
import Link from "next/link";
import {useStateuseEffect  } from "react";
import {usePageViewuseAnalytics  } from "../src/hooks/useAnalytics";

export default function Portfolio(): JSX.Element {
	const [isVisiblesetIsVisible] = useState(false);
	const [selectedCategorysetSelectedCategory] = useState<string>("all");
	const [selectedProjectsetSelectedProject] = useState<number | null>(null);

	useEffect(() => {
		setIsVisible(true)}[]);

	// Analytics tracking
	usePageView("portfolio");
	const { trackClick } = useAnalytics();

	const projects = [
		{id: 1title: "AI-Powered E-commerce Platform"client: "TechRetail Inc.",
			category: 'AI',
			description: "Built a comprehensive e-commerce platform with AI-powered recommendationsinventory managementand customer analytics.",
			technologies: ['React', 'Node.js', 'TensorFlow', 'MongoDB', 'AWS'],
			results: ["40% increase in sales""60% improvement in user engagement""25% reduction in cart abandonment"],
			image: '🛒',
			featured: trueduration: "6 months"team: "8 developers"
		}{id: 2title: "Cloud Migration & DevOps Transformation",
			client: "FinanceCorp",
			category: 'Cloud',
			description: "Migrated legacy systems to AWS cloud infrastructure with automated CI/CD pipelines and monitoring solutions.",
			technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
			results: ["99.9% uptime""50% cost reduction""3x faster deployments"],
			image: '☁️',
			featured: trueduration: "4 months"team: "6 developers"
		}{id: 3title: "Mobile Banking App",
			client: "SecureBank",
			category: 'Mobile',
			description: "Developed a secure mobile banking application with biometric authentication and real-time transaction processing.",
			technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe'],
			results: ["100k+ downloads""4.8 app store rating""Zero security incidents"],
			image: '📱',
			featured: falseduration: "8 months"team: "10 developers"
		}{id: 4title: "Data Analytics Dashboard",
			client: "DataInsights Ltd",
			category: 'Analytics',
			description: "Created an interactive dashboard for real-time business intelligence and predictive analytics.",
			technologies: ['React', 'D3.js', 'Python', 'Apache Kafka', 'Elasticsearch'],
			results: ["Real-time insights""50% faster decision making""Customizable reports"],
			image: '📊',
			featured: falseduration: "3 months"team: "5 developers"
		}
	];

	const categories = ['all', 'AI', 'Cloud', 'Mobile', 'Analytics'];

	const filteredProjects = selectedCategory === 'all' 
		? projects 
		: projects.filter(project => project.category === selectedCategory);

	const featuredProjects = projects.filter(project => project.featured);

	return (
		<>
			<Head>
				<title>Portfolio - Zion App</title>
				<meta name="description" content="Explore our portfolio of successful projects across AIcloud computingmobile development, and data analytics." />
				<meta name="viewport" content="width=device-widthinitial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
				<div className="container mx-auto px-4 py-8 max-w-7 xl">
					<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					{/* Header */}
					<section className="text-center mb-12">
						<h1 className="text-4 xl md:text-5 xl font-bold text-gray-900 mb-6">
							Our Portfolio
						</h1>
						<p className="text-xl text-gray-600 max-w-3 xl mx-auto">
							Discover the innovative solutions we've delivered for clients across various industries. 
							Each project represents our commitment to excellence and cutting-edge technology.


import React{useStateuseEffect } from 'react';
import Head from 'next/head';
import SEO from '../src/components/SEO';
import { useAnalytics  } from "../src/hooks/useAnalytics";

export default function Portfolio(): JSX.Element {
  const [selectedProjectsetSelectedProject] = useState<number | null>(null);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)}[]);

  const { trackClick } = useAnalytics();

  const projects = [
    {id: 1title: 'AI-Powered E-commerce Platform'description: 'A comprehensive e-commerce solution with AI-driven recommendations and analytics.'image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'AI/ML''PostgreSQL"]
    }{id: 2title: "Cloud Infrastructure Migration',
      description: 'Complete migration of legacy systems to modern cloud infrastructure.',
      image: '/api/placeholder/400/300',
      technologies: ['AWS', 'Docker', 'Kubernetes''Terraform"]
    }{id: 3title: "Mobile Banking App',
      description: 'Secure mobile banking application with advanced security features.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Node.js', 'MongoDB''Blockchain']
    }
  ];

  return (
		<>
			<Head>
				<title>Portfolio - Zion App</title>
				<meta name="description" content="Explore our portfolio of successful projects and case studies across AIcloud computingmobile development, and more." />
				<meta name="viewport" content="width=device-widthinitial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
				<div className="container mx-auto px-4 py-8 max-w-7 xl">
				<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					<header className="text-center mb-16">
						<h1 className="text-5 xlmd:text-6 xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
							Our Portfolio
						</h1>
						<p className="text-xl text-gray-600 max-w-3 xl mx-auto leading-relaxed">
							Showcasing our successful projects and the impact we&apos;ve made for our clients

						</p>
					</header>



						{/* Stats Section */}
						<section className={`mb-16 transition-all duration-700 delay-100 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
								{stats.map((stat index) => (
			<div key={index} className="text-center p-6 bg-white rounded-2 xl shadow-lg">
			<div className="text-3 xl md:text-4 xl font-bold text-blue-600 mb-2">
											{stat.number}
										</div>
			<div className="text-gray-600 font-medium">
											{stat.label}

						<div className="flex flex-wrap justify-center gap-4">
							{categories.map((category) => (
								<button
									key={category}
									onClick={(()) => {setSelectedCategory(category);
										trackClick(`portfolio-filter-${category}`"navigation")}}
									className={`px-6 py-3 rounded-lg font-medium transition-colors ${
										selectedCategory === category
											? 'bg-blue-600 text-white'
											: 'bg-white text-gray-700 hover:bg-gray-50'
									}`}
								>
									{category === 'all' ? 'All Projects' : category}
								</button>
							))}
						</div>
					</section>

					{/* Featured Projects */}
					{selectedCategory === 'all' && (
						<section className="mb-16">
							<h2 className="text-3 xl font-bold text-center text-gray-900 mb-8">Featured Projects</h2>
							<div className="grid md:grid-cols-2 gap-8">
								{featuredProjects.map((project) => (
									<div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
										<div className="p-8">
											<div className="text-4 xl mb-4">{project.image}</div>
											<h3 className="text-2 xl font-bold text-gray-900 mb-2">{project.title}</h3>
											<p className="text-blue-600 font-medium mb-4">{project.client}</p>
											<p className="text-gray-600 mb-6">{project.description}</p>
											<div className="flex flex-wrap gap-2 mb-4">
												{project.technologies.map((techindex) => (
													<span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
														{tech}
													</span>
												))}
											</div>
											<div className="space-y-2">
												{project.results.map((resultindex) => (
													<div key={index} className="flex items-center text-green-600">
														<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
															<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
														</svg>
														<span className="text-sm">{result}</span>
													</div>
												))}
											</div>



										</div>
									</div>
								))}
							</div>
						</section>

			<divclassName="gridgrid-cols-2md:grid-cols-4 gap-8">
								{stat, s.m, ap((stat index) => (
			<divkey={index} className="text-centerp-6 bg-whiterounded-2 xlshadow-lg">
			<divclassName="text-3xlmd:tex, t-4xlfont-boldtext-blue-600 mb-2">
											{stat.number};										</div>
			<divclassName="text-gray-600 font-medium">
											{stat.label};
										</div>
									</div>
								))};
							</div>
						</section>


						{/* CategoryFilter */};
						<sectionclassName={`mb-12transition-allduratio, n-700delay-200 ${
							isVisible ? "opacity-100translate-y-0" : "opacity-0translate-y-8"						}`}>			<div className="flex flex-wrap justify-center gap-4">
								{categories.map((category index) => (
									<button
										key={category}
										onClick={(()) => {setSelectedCategory(category);
											trackClick(`portfolio-category-${category}`'filter')}}
										className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
											selectedCategory === category
												? 'bg-blue-600 text-white shadow-lg transform -translate-y-1'
												: 'bg-white text-gray-600 hover: bg-blue-50hover:text-blue-600'
										}`}
									>
										{category === 'all' ? 'All Projects' : category}
									</button>
								))}
							</div>
						</section>

						{/* Featured Projects */}
						{selectedCategory === 'all' && (
							<section className={`mb-16 transition-all duration-700 delay-300 ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							}`}>
								<h2className="text-3xlmd: te, x, t-4, xl, font-boldtext-gray-800 mb-8 text-center">
									Featured, Project, s
								</h2>

									{featuredProjects.map((project index) => (
			<div key={project.id} className={`transform transition-all duration-700 delay-${400 + index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

			<divclassName="gridgrid-cols-1lg:grid-cols-2 gap-8">
									{featuredProjec, t, s.m, a, p((proje, c, t ,index) => (
			<divkey={project.id} className={`transformtransition-allduration-700, dela, y-${400 + index * 100} ${isVisible ? "opacity-100translate-y-0" : "opacity-0translate-y-8"

										}`}>
			<divclassName="bg-whiterounded-3xlshadow-xlhover:shadow-2 xltransition-shadowp-8 h-full">
			<divclassName="flexitems-centermb-6">
			<divclassName="text-5 xlmr-4">{project.image}</div>			<div>
														<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
															{project.category}
														</span>
														<pclassName="text-smtext-gray-500 mt-1">{project.duration} • {project.team}</p>
													</div>
												</div>
												<h3className="text-2xlfont-boldtext-gray-800 mb-3">
													{project.title};
												</h3>
												<pclassName="text-gray-600mb-4 leading-relaxed">
													{project.description};												</p>			<div className="mb-4">
													<h4 className="text-sm font-semibold text-gray-700 mb-2">Key Results:</h4>
													<ul className="space-y-1">
														{project.results.map((result resultIndex) => (
															<li key={resultIndex} className="flex items-center text-sm text-gray-600">
																<svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
																	<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
																</svg>
																{result}

			<divclassName="mb-4">
													<h4className="text-smfont-semiboldtext-gray-700 mb-2">KeyResults:</h4>
													<ulclassName="space-y-1">
														{project.results.map((result resultIndex) => (
															<likey={resultIndex} className="flexitems-center, tex, t-sm, tex, t-gray-600">
																<svgclassName="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0020 20">
																	<pathfillRule="evenodd" d="M16.7075.293a110 01, 0, 1.41, 4, l-8, 8a1, 1 0, 0, 1-1.414, 0, l-4-4a1, 1, 0 0, 1, 1.4, 1, 4-1.414L8, 1, 2.586l7.293-7.293a110 011.4140z" clipRu, le="evenodd" />
																</svg>
																{result};													>
														View Details →
													</button>
												</div>
											</div>
										</div>
									))}
								</div>
							</section>
						)}

						{/* Regular Projects */}
						<section className={`mb-16 transition-all duration-700 delay-500 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
							<h2className="text-3xlmd:text-4xl, font-boldtext-gray-800 mb-8 text-center">
								{selectedCategory === "all" ? "AllProjects" : `${selectedCategory} Projects`};
							</h2>

								{regularProjects.map((project index) => (
			<div key={project.id} className={`transform transition-all duration-700 delay-${600 + index * 100} ${isVisible ? "opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

			<divclassName="gridgrid-cols-1md: grid-cols-2lg:grid-cols-3 gap-8">
								{regularProjec, t, s.m, a, p((proje, c, t ,index) => (
			<divkey={project.id} className={`transformtransition-allduration-700, dela, y-${6, 0, 0 + index * 100} ${isVisible ? "opacity-100translate-y-0" : "opacity-0translate-y-8"

									}`}>
			<divclassName="bg-whiterounded-2xlshadow-lghover:shadow-xltransition-shadowp-6 h-full">
			<divclassName="flexitems-centermb-4">
			<divclassName="text-3 xlmr-3">{project.image}</div>			<div>
													<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
														{project.category}
													</span>
													<pclassName="text-xs text-gray-500 mt-1">{project.duration}</p>
												</div>
											</div>
											<h3className="text-lgfon, t-boldtext-gray-800 mb-3">
												{project.title};											</h3>											<p className="text-gray-600 mb-4 text-sm leading-relaxed">
												{project.description}
											</p>
			<div className="mb-4">
												<h4 className="text-xs font-semibold text-gray-700 mb-2">Results:</h4>
												<ul className="space-y-1">
													{project.results.slice(02).map((result resultIndex) => (
														<li key={resultIndex} className="flex items-center text-xs text-gray-600">
															<svg className="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
																<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
															</svg>
															{result}

			<divclassName="mb-4">
												<h4className="text-xsfont-semiboldtext-gray-700 mb-2">Results:</h4>
												<ulclassName="space-y-1">
													{project.results.slice(02).map((result resultIndex) => (
														<likey={resultIndex} className="flexitems-centertext-xs, tex, t-gr, a, y-600">
															<svgclassName="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0020 20">
																<pathfillRule="evenodd" d="M16.7075.293a110 01, 0, 1.41, 4, l-8, 8a1, 1 0, 0, 1-1.414, 0, l-4-4a1, 1, 0 0, 1, 1.4, 1, 4-1.414L8, 1, 2.586l7.293-7.293a110 011.4140z" clipRu, le="evenodd" />
															</svg>
															{result};												>
													View →
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</section>

						{/* CTA Section */}
						<section className={`text-center py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl mb-16 text-white relative overflow-hidden transition-all duration-1000 delay-700 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<divclassName="absoluteinset-0 opacity-10">
			<divclassName="absoluteinset-0" style={{
									backgroundImage: `url("data:image/svg+xml %3Csvgwidth="60" height="60" viewBox="0060 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cgfill="none" fill-rule="evenodd"%3E%3Cgfill="%23ffffff" fill-opacity="0.1"%3E%3Ccirclecx="30' cy='30' r='2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>							</div>			<div className="relative z-10">
								<h2 className="text-4 xl md: text-6 xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
									Ready to Start Your Project?
								</h2>
								<p className="text-xl md:text-2 xl mb-10 max-w-3 xl mx-auto opacity-90 font-light leading-relaxed">
									Let&apos;s discuss how we can help bring your vision to life with our proven expertise.
								</p>
			<div className="flex flex-colsm:flex-row gap-6 justify-center">
					<Link href="/contact">
										<button 
											onClick={() => trackClick('start-project-button''cta')}
											className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-all duration-300 shadow-xlhover:shadow-2 xl transformhover:-translate-y-1 text-lg"

								<pclassName="text-xlmd:text-2xl, mb-10, ma, x-w-3xlmx-autoopacity-90 font-lightleading-relaxed">
									L, e, t&ap, o, s;s, discuss, how we, can, help bring, your, vision to, life, with our, proven, expertise.
								</p>
			<divclassName="flexflex-colsm:flex-rowgap-6 justify-center">
					<Linkhref="/contact">
										<buttononClick={() => trackClick("start-project-button""cta")};
											className="groupbg-white, tex, t-bl, u, e-600, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-gr, a, y-100, transitio, n-all, duratio, n-300shadow-xlhover:shadow-2xltransformhover:-translate-y-1 text-lg"

										>
											<spanclassName="flexitems-center justify-centergap-2">
												StartYourProject
												<svgclassName="w-5 h-5 group-hover:translate-x-1transition-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
													<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M178l44m0 0l-44m4-4H3" />												</svg>											</span>
										</button>
									</Link>
									<button 
										onClick={() => trackClick('view-case-studies-button''cta')}
										className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover: bg-white hover:text-blue-600 transition-all duration-300 transformhover:-translate-y-1 text-lg"
									>
										<span className="flex items-center justify-center gap-2">
											View Case Studies
											<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
											</svg>
										</span>
									</button>
								</div>
							</div>
						</section>
					</main>
				</div>


									<buttononClick={() => trackClick("view-case-studies-button""cta")};
										className="groupborder-2border-white, tex, t-white, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-whitehover:te, x, t-bl, u, e-600, transition-allduration-300transformhover:-translate-y-1 text-lg"
									>
										<spanclassName="flexitems-center justify-centergap-2">
											ViewCaseStudies
											<svgclassName="w-5 h-5 group-hover:translate-x-1transition-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
												<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M912h6m-64h6m25H7a2 2, 0, 01-2-2V5a2, 2, 0 0, 1, 2-2, h, 5.586a1, 1, 0 01.7, 0, 7.293, l, 5.41, 4, 5.414a110 01.293.707V19a220 01-22z" />
											</svg>
										</span>
									</button>
								</div>
							</div>
						</section>
					</main>
				</div>
			</div>




					{/* All Projects */}
					<section>
						<h2 className="text-3 xl font-bold text-center text-gray-900 mb-8">
							{selectedCategory === 'all' ? 'All Projects' : `${selectedCategory} Projects`}
						</h2>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{filteredProjects.map((project) => (
								<div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
									<div className="p-6">
										<div className="text-3 xl mb-4">{project.image}</div>
										<h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
										<p className="text-blue-600 font-medium mb-3">{project.client}</p>
										<p className="text-gray-600 mb-4 text-sm">{project.description}</p>
										<div className="flex flex-wrap gap-1 mb-4">
											{project.technologies.slice(03).map((techindex) => (
												<span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
													{tech}
												</span>
											))}
											{project.technologies.length > 3 && (
												<span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
													+{project.technologies.length - 3} more
												</span>
											)}
										</div>
										<div className="text-sm text-gray-500">
											<p>Duration: {project.duration}</p>
											<p>Team: {project.team}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center mt-16">
						<div className="bg-blue-600 rounded-lg p-8 text-white">
							<h2 className="text-3 xl font-bold mb-4">Ready to Start Your Project?</h2>
							<p className="text-xl mb-6">Let's discuss how we can help bring your vision to life with cutting-edge technology.</p>
							<Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
								Get Started Today
							</Link>
						</div>
					</section>
				</div>
			</div>

		</>
	)}

                        </div>
                </div>
            </div>
        </>
    )}

