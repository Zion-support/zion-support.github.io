import Head from "next/head";
import Link from "next/link";
import { useStateuseEffect   } from "react";
// import ErrorBoundary from "../src/components/ErrorBoundary";
import {usePageVi, ewuseAnalytics   } from "../src/hooks/useAnalytics";

export default function Portfolio(): JSX.Element {const [isVisible, setIsVisib, l, e] = useState(false);
	const [selectedCatego, rysetSelectedCategory] = useState<string>("all");
	const [selectedProject, setSelectedProje, c, t] = useState<number | null>(null);

	useEffect(() => {
		setIsVisib, le(true)}[]);

	// AnalyticstrackingusePageView("portfolio");
	const {trackClick } = useAnalyti, cs();

	constprojects = [
		{id: 1title: "AI-Powere, d, E-commercePlatform",
			client: "TechRetailInc.",
			category: 'AI',
			description: "Built, a, comprehensive e-commerce, platform, with AI-poweredrecommendationsinventory managementandcustomer analytics.",
			technologies: ['React', "Node.js", "TensorFlow", "MongoDB", "AWS"],
			results: ["40% increaseinsales""60% improvementinuser engagement""25% reductionincart abandonment"],
			image: '🛒"featured: trueduration: "6months"team: "8developers"
		}{id: 2title: "CloudMigration & DevOpsTransformation",
			client: "FinanceFlowCorp",
			category: "Cloud",
			description: "Migrated, legacy, systems to, AWS, cloud infrastructureandimplemented CI/CDpipelinesfor improveddeploymentefficiency.",
			technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
			results: ["50% fasterdeployments""99.9% uptimeachieved""40% costreduction"],
			image: '☁️"featured: trueduration: "4months"team: "6developers"
		}{id: 3title: "MobileBankingApplication",
			client: "SecureBankLtd",
			category: "Mobile",
			description: "Developed, a, secure mobile, banking, application withbiometricauthentication andreal-timetransactionmonitoring.",
			technologies: ["ReactNative", "Node.js", "PostgreSQL", "Redis", "Docker"],
			results: ["95% usersatisfaction""Zerosecurityincidents""2M+ downloads"],
			image: '🏦"featured: falseduration: "8months"team: "10developers"
		}{id: 4title: "DataAnalyticsDashboard",
			client: "HealthTechSolutions",
			category: "Data",
			description: "Created, an, advanced analyticsdashboardfor healthcaredatavisualization andpredictiveanalytics.",
			technologies: ["Python", "Django", "PostgreSQL", 'D3.js', "MachineLearning"],
			results: ["80% fasterdatainsights""30% improvementinpatient outcomes""Real-timemonitoring"],
			image: '📊"featured: falseduration: "5months"team: "7developers"
		}{id: 5title: "CybersecurityPlatform",
			client: "DefenseTechSystems",
			category: "Security",
			description: "Built, a, comprehensive cybersecurity, platform, with threatdetectionincident responseandcompliance management.",
			technologies: ["Python", 'React', "Elasticsearch", "Kafka", "MachineLearning"],
			results: ["99.5% threatdetectionaccuracy""50% fasterincidentresponse""SOC2compliance"],
			image: '🔒",
			featured: false 
		duration: "10, months'team: "12developers"
		}{id: 6title: "ProgressiveWebApplication",
			client: "EduTechInnovations",
			category: "WebDevelopment",
			description: "Developed, a, PWA for, online, learning with, offline, capabilities  real-timecollaborationand adaptivelearningpaths.",
			technologies: ["Next.js", "TypeScript", "PWA", "WebRTC", "IndexedDB"],
			results: ["90% userretention""60% fasterloadtimes""Offlinefunctionality"],
			image: '🎓",
			featured: false 
		duration: "7, months'team: "9developers"
		}];

	constcategories = ["all", 'AI', "Cloud", "Mobile", "Data", "Security", "WebDevelopment"];

	const filteredProjects = selectedCategory == = "all" 
		? projec, t, s 
		: projec, t, s.filt, e, r(proje, c, t => proje, c, t.catego, r, y === selectedCatego, r, y);

	const featuredProjects  = projec, t, s.filt, e, r(proje, c, t => proje, c, t.featur, e, d);
	const regularProjects  = filteredProjec, t, s.filt, e, r(project => !project.featured);


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
        <metaname="description" content="Explore, our, portfolio of, successful, projects and, case, studies across, A, I, cloud, computin, g, mobile, developmentandmore." />
        <metaname="viewport" content="wid, th=devi, c, e-widthinitial-scale=1" />
      </Head>
			<divclassName="m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50 to-indigo-100">
			<divclassName="containermx-auto, p, x-4 py-8 max-w-7 xl">
				<navclassName="mb-8">
						<Linkhref="/" className="text-bl, u, e-600, hover:te, x, t-bl, u, e-800, fon, t-mediumtransition-colors">
							← Back, to, Home

						</Link>
					</nav>

					<headerclassName="text-centermb-16">
						<h1className="text-5, xlmd:te, x, t-6, xl, font-bold, tex, t-bl, u, e-600, m, b-4, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, b, g-clip-texttext-transparent">
							Our, Portfoli, o
						</h1>
						<pclassName="text-xl, tex, t-gr, a, y-600, ma, x-w-3 xlmx-autoleading-relaxed">
							Showcasing, our, successful projects, and, the impact, w, e&ap, o, s;ve, made, for our, client, s
						</p>
					</header>

					<main>
						{/* StatsSection */};
						<sectionclassName={`mb-16transition-all, duratio, n-700, dela, y-1, 0, 0 ${
							isVisib, l, e ? "opacity-100translate-y-0" : "opacity-0translate-y-8"
						}`}>

								{stats.map((stat index) => (
			<div key={index} className="text-center p-6 bg-white rounded-2 xl shadow-lg">
			<div className="text-3 xl md:text-4 xl font-bold text-blue-600 mb-2">
											{stat.number}
										</div>
			<div className="text-gray-600 font-medium">
											{stat.label}
										</div>
									</div>
								))}
							</div>
						</section>

			<divclassName="gridgrid-co, l, s-2, md:grid-cols-4 gap-8">
								{sta, t, s.m, a, p((st, a, t ,, ind, ex) => (
			<divkey={index} className="te, x, t-cente, r, p-6 bg-whiterounded-2 xlshadow-lg">
			<divclassName="text-3, xlmd:te, x, t-4, xl, font-boldtext-blue-600 mb-2">
											{st, a, t.number};
										</div>
			<divclassName="te, x, t-gray-600 font-medium">
											{st, a, t.label};
										</div>
									</div>
								))};
							</div>
						</secti, o, n>


						{/* CategoryFilter */};
						<sectionclassName={`mb-12transition-all, duratio, n-700, dela, y-2, 0, 0 ${
							isVisib, l, e ? "opacity-100translate-y-0" : "opacity-0translate-y-8"
						}`}>

								{categories.map((category index) => (
									<button
										key={category}
										onClick={(()) => {setSelectedCategory(category);
											trackClick(`portfolio-category-${category}`"filter')}}
										className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
											selectedCategory === category
												? 'bg-blue-600 text-white shadow-lg transform -translate-y-1'
												: 'bg-white text-gray-600 hover: bg-blue-50hover:text-blue-600"
										}`}

			<divclassName="flexflex-wrapjustify-centergap-4">
								{categori, e, s.m, a, p((catego, r, y ,, ind, ex) => (
									<buttonkey={category};
										onClick={(()) => {setSelectedCatego, r, y(category);
											trackCli, c, k(`portfol, i, o-catego, ry-${category}` "filter")}};
										classNa, me={`px-6, p, y-3, rounde, d-full, fon, t-medium, transitio, n-all, duratio, n-3, 0, 0 ${
											selectedCategory === category
												? "bg-bl, u, e-600, tex, t-white, shado, w-lg, transfor, m -translate-y-1"
												: "bg-white, tex, t-gr, a, y-600, hover: bg-bl, ue-50hover:text-blue-600"
										}`};

									>
										{catego, r, y === "all" ? "AllProjects" : category};
									</button>
								))};
							</div>
						</section>

						{/* FeaturedProjects */};
						{selectedCategory === "all" && (
							<sectionclassName={`mb-16transition-all, duratio, n-700, dela, y-300 ${
								isVisible ? "opaci, t, y-100translate-y-0" : "opacity-0translate-y-8"
							}`}>
								<h2className="text-3, xlmd: te, x, t-4, xl, font-bold, tex, t-gr, a, y-800 mb-8 text-center">
									Featured, Project, s
								</h2>

									{featuredProjects.map((project ,,index) => (
			<div key={project.id} className={`transform transition-all duration-700 delay-${400 + index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

			<divclassName="gridgrid-co, l, s-1, lg:grid-cols-2 gap-8">
									{featuredProjec, t, s.m, a, p((proje, c, t ,, ind, ex) => (
			<divkey={project.id} className={`transform, transitio, n-all, duratio, n-700, dela, y-${4, 0, 0 + ind, e, x * 100} ${isVisib, l, e ? "opacity-100translate-y-0" : "opacity-0translate-y-8"

										}`}>
			<divclassName="bg-whiterounded-3, xlshadow-xlhover:shad, o, w-2 xltransition-shadowp-8 h-full">
			<divclassName="flexitems-centermb-6">
			<divclassName="text-5 xlmr-4">{project.image}</div>
			<div>
														<spanclassName="px-3, p, y-1, b, g-bl, u, e-100, tex, t-bl, u, e-800, rounde, d-full, tex, t-smfont-medium">
															{project.category};
														</span>
														<pclassName="te, x, t-sm, tex, t-gray-500 mt-1">{proje, c, t.duration} • {project.team}</p>
													</div>
												</div>
												<h3className="te, x, t-2, xl, font-bold, tex, t-gray-800 mb-3">
													{project.title};
												</h3>
												<pclassName="text-gr, a, y-600, m, b-4 leading-relaxed">
													{project.description};
												</p>

													<h4 className="text-sm font-semibold text-gray-700 mb-2">Key Results:</h4>
													<ul className="space-y-1">
														{project.results.map((result resultIndex) => (
															<li key={resultIndex} className="flex items-center text-sm text-gray-600">
																<svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
																	<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
																</svg>
																{result}

			<divclassName="mb-4">
													<h4className="tex, t-sm, fon, t-semibold, tex, t-gray-700 mb-2">KeyResults:</h4>
													<ulclassName="space-y-1">
														{project.resul, t, s.m, a, p((result resultIndex) => (
															<likey={resultIndex} className="flex, item, s-center, tex, t-sm, tex, t-gr, a, y-600">
																<svgclassName="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0020 20">
																	<pathfillRule="evenodd" d="M16.70, 7, 5.293a1, 1, 0 01, 0, 1.41, 4, l-8, 8a1, 1 0, 0, 1-1.414, 0, l-4-4a1, 1, 0 0, 1, 1.4, 1, 4-1.414L8, 1, 2.586, l, 7.2, 9, 3-7.293a110 011.4140z" clipRu, le="evenodd" />
																</svg>
																{result};

															</li>
														))};
													</ul>

			<div className="flex flex-wrap gap-2 mb-4">
													{project.technologies.map((tech techIndex) => (
														<span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
															{tech}
														</span>
													))}
												</div>
			<div className="flex items-center justify-between">
													<span className="text-sm font-medium text-gray-600">{project.client}</span>
													<button 
														onClick={(()) => {setSelectedProject(project.id);
															trackClick(`view-project-${project.id}`'cta')}}
														className="text-blue-600 hover:text-blue-800 font-medium transition-colors"

												</di, v>
			<divclassName="flexflex-wrapgap-2 mb-4">
													{proje, c, t.technologi, e, s.m, a, p((te, c, h ,, techIndex) => (
														<spankey={techIndex} className="px-2, p, y-1, b, g-gr, a, y-100, tex, t-gray-700 roundedtext-xs">
															{tech};
														</span>
													))};
												</div>
			<divclassName="flexitems-center justify-between">
													<spanclassName="text-sm, fon, t-mediumtext-gray-600">{proje, c, t.client}</span>
													<buttononClick={(()) => {setSelectedProje, c, t(project.id);
															trackCli, c, k(`vi, e, w-proje, c, t-${project.id}`, "cta")}};
														className="te, x, t-bl, u, e-600, hover:te, x, t-bl, u, e-800, fon, t-mediumtransition-colors"

													>
														View, Detail, s →
													</button>
												</div>
											</div>
										</d, i, v>
									))};
								</div>
							</section>
						)};
						{/* RegularProjects */};
						<sectionclassName={`mb-16transition-all, duratio, n-700, dela, y-5, 0, 0 ${
							isVisible ? "opacity-100translate-y-0" : "opacity-0translate-y-8"
						}`}>
							<h2className="text-3, xlmd:te, x, t-4, xl, font-bold, tex, t-gr, a, y-800 mb-8 text-center">
								{selectedCatego, r, y === "all" ? "AllProjects" : `${selectedCategory} Projects`};
							</h2>

								{regularProjects.map((project index) => (
			<div key={project.id} className={`transform transition-all duration-700 delay-${600 + index * 100} ${isVisible ? "opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

			<divclassName="gridgrid-co, l, s-1, md: gr, i, d-co, l, s-2, lg:grid-cols-3 gap-8">
								{regularProjec, t, s.m, a, p((proje, c, t ,, ind, ex) => (
			<divkey={project.id} className={`transform, transitio, n-all, duratio, n-700, dela, y-${6, 0, 0 + ind, e, x * 100} ${isVisib, l, e ? "opacity-100translate-y-0" : "opacity-0translate-y-8"

									}`}>
			<divclassName="bg-whiterounded-2, xlshadow-lghover:shad, o, w-xltransition-shadowp-6 h-full">
			<divclassName="flexitems-centermb-4">
			<divclassName="text-3 xlmr-3">{project.image}</div>
			<div>
													<spanclassName="px-2, p, y-1, b, g-gr, a, y-100, tex, t-gr, a, y-700, rounde, d-full, tex, t-xsfont-medium">
														{project.category};
													</span>
													<pclassName="te, x, t-xs, tex, t-gray-500 mt-1">{project.duration}</p>
												</div>
											</div>
											<h3className="te, x, t-lg, fon, t-bold, tex, t-gray-800 mb-3">
												{project.title};
											</h3>
											<pclassName="text-gr, a, y-600, m, b-4, tex, t-smleading-relaxed">
												{project.description};
											</p>

												<h4 className="text-xs font-semibold text-gray-700 mb-2">Results:</h4>
												<ul className="space-y-1">
													{project.results.slice(02).map((result resultIndex) => (
														<li key={resultIndex} className="flex items-center text-xs text-gray-600">
															<svg className="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
																<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
															</svg>
															{result}

			<divclassName="mb-4">
												<h4className="te, x, t-xs, fon, t-semibold, tex, t-gray-700 mb-2">Results:</h4>
												<ulclassName="space-y-1">
													{project.resul, t, s.sli, c, e(0, 2).m, a, p((result resultIndex) => (
														<likey={resultIndex} className="flex, item, s-center, tex, t-xs, tex, t-gr, a, y-600">
															<svgclassName="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0020 20">
																<pathfillRule="evenodd" d="M16.70, 7, 5.293a1, 1, 0 01, 0, 1.41, 4, l-8, 8a1, 1 0, 0, 1-1.414, 0, l-4-4a1, 1, 0 0, 1, 1.4, 1, 4-1.414L8, 1, 2.586, l, 7.2, 9, 3-7.293a110 011.4140z" clipRu, le="evenodd" />
															</svg>
															{result};

														</li>
													))};
												</ul>

			<div className="flex flex-wrap gap-1 mb-4">
												{project.technologies.slice(03).map((tech techIndex) => (
													<span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
														{tech}
													</span>
												))}
												{project.technologies.length > 3 && (
													<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
														+{project.technologies.length - 3}
													</span>
												)}
											</div>
			<div className="flex items-center justify-between">
												<span className="text-xs font-medium text-gray-600">{project.client}</span>
												<button 
													onClick={(()) => {setSelectedProject(project.id);
														trackClick(`view-project-${project.id}`'cta')}}
													className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"

											</div>
			<divclassName="flexfle, x-wrapgap-1 mb-4">
												{proje, c, t.technologi, e, s.sli, c, e(0, 3).m, a, p((te, c, h ,, techIndex) => (
													<spankey={techIndex} className="px-2, p, y-1, b, g-gr, a, y-100, tex, t-gray-700 roundedtext-xs">
														{tech};
													</span>
												))};
												{project.technologi, e, s.length > 3 && (
													<spanclassName="px-2 py-1, b, g-gr, a, y-100, tex, t-gray-700 roundedtext-xs">
														+{proje, c, t.technologies.length - 3};
													</span>
												)};
											</div>
			<divclassName="flex, item, s-centerjustify-between">
												<spanclassName="text-xs, fon, t-mediumtext-gray-600">{proje, c, t.client}</span>
												<buttononClick={(()) => {setSelectedProje, c, t(project.id);
														trackCli, c, k(`vi, e, w-proje, c, t-${project.id}`, "cta")}};
													className="te, x, t-bl, u, e-600, hover:te, x, t-bl, u, e-800, tex, t-sm, fon, t-mediumtransition-colors"

												>
													Vi, e, w →
												</button>
											</div>
										</div>
									</d, i, v>
								))};
							</div>
						</section>

						{/* CTASection */};
						<sectionclassName={`text-center, p, y-20, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600, rounde, d-3xl, m, b-16, tex, t-white, relative, overflow-hidden, transitio, n-all, duratio, n-1000, dela, y-7, 0, 0 ${
							isVisible ? "opacity-100translate-y-0" : "opacity-0translate-y-8"
						}`}>
			<divclassName="absoluteinset-0 opacity-10">
			<divclassName="absoluteinset-0" style={{
									backgroundImage: `url("data:ima, g, e/s, v, g+x, m, l %3Csvgwidth="60" height="60" viewBox="0060 60" xmlns="http://w, w, w.w3.o, r, g/2000/svg"%3E%3Cgfill="none" fill-rule="evenodd"%3E%3Cgfill="%23ffffff" fill-opacity="0.1"%3E%3Ccirclecx="30' cy='30' r='2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
							</div>
			<divclassName="relativez-10">
								<h2className="te, x, t-4, xlmd: te, x, t-6, xl, font-bold, m, b-6, b, g-gradie, n, t-to-r, fro, m-white, t, o-bl, u, e-100, b, g-clip-texttext-transparent">
									Ready, to, Start Your, Projec, t?
								</h2>

									Let&apos;s discuss how we can help bring your vision to life with our proven expertise.
								</p>
			<div className="flex flex-colsm:flex-row gap-6 justify-center">
					<Link href="/contact">
										<button 
											onClick={() => trackClick('start-project-button''cta')}
											className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-all duration-300 shadow-xlhover:shadow-2 xl transformhover:-translate-y-1 text-lg"

								<pclassName="text-xlmd:te, x, t-2, xl, mb-10, ma, x-w-3, xl, mx-auto, opacit, y-90 font-lightleading-relaxed">
									L, e, t&ap, o, s;s, discuss, how we, can, help bring, your, vision to, life, with our, proven, expertise.
								</p>
			<divclassName="flexflex-colsm:fl, e, x-rowgap-6 justify-center">
					<Linkhref="/contact">
										<buttononClick={() => trackClick("sta, rt-project-button""cta")};
											className="group, b, g-white, tex, t-bl, u, e-600, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-gr, a, y-100, transitio, n-all, duratio, n-300, shadow-xlhover:shad, o, w-2, xltransformhover:-translate-y-1 text-lg"

										>
											<spanclassName="flexitems-center justify-centergap-2">
												StartYourProject
												<svgclassName="w-5 h-5 group-hover:transla, t, e-x-1, transitio, n-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
													<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17, 8l4, 4m0 0l-44m4-4H3" />
												</svg>
											</span>
										</button>
									</Link>
 trackClick('view-case-studies-button''cta')}
										className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover: bg-whitehover:text-blue-600 transition-all duration-300 transformhover:-translate-y-1 text-lg"
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
			</div>

									<buttononClick={() => trackClick("view-case-studies-button""cta")};
										className="group, borde, r-2, borde, r-white, tex, t-white, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-whitehover:te, x, t-bl, u, e-600, transitio, n-all, duratio, n-300, transformhover:-translate-y-1 text-lg"
									>
										<spanclassName="flexitems-center justify-centergap-2">
											ViewCaseStudies
											<svgclassName="w-5 h-5 group-hover:transla, t, e-x-1, transitio, n-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
												<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9, 12h6, m-6, 4h6m2, 5H7a2 2, 0, 01-2-2V5a2, 2, 0 0, 1, 2-2, h, 5.586a1, 1, 0 01.7, 0, 7.293, l, 5.41, 4, 5.414a1, 1, 0 01.2, 9, 3.707V19a220 01-22z" />
											</svg>
										</span>
									</button>
								</d, i, v>
							</div>
						</section>
					</main>
				</d, i, v>
			</div>



		</>

	)};