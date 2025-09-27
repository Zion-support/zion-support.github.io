import React, {useStateuseEffect } from 'react';
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

	conststats = [{number: "50+'label: "ProjectsCompleted" }{number: '98%'label: "ClientSatisfaction" }{number: '2M+'label: "UsersImpacted" }{number: "5Years"label: "AveragePartnership" }];  return (
    <>
      
      <Head>
        <title>Portfolio - ZionApp</title>
        <metaname="description" content="Exploreour, portfolio of, successful, projects and, case, studies across, A, I, cloud, computin, gmobiledevelopmentandmore." />
        <metaname="viewport" content="width=devic, e-widthinitial-scale=1" />
      </Head>
			<divclassName="min-h-screen, b, g-gradie, n, t-to-br, fro, m-blue-50 to-indigo-100">
			<divclassName="containermx-autopx-4 py-8 max-w-7 xl">
				<navclassName="mb-8">
						<Linkhref="/" className="text-bl, u, e-600, hover:te, x, t-bl, u, e-800font-mediumtransition-colors">
							← Back, to, Home
						</p>
					</header>

					<main>
						{/* Stats Section */}
						<section className={`mb-16 transition-all duration-700 delay-100 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
								{stats.map((stat ,index) => (
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

			<divclassName="gridgrid-cols-2, md:grid-cols-4 gap-8">
								{sta, t, s.m, a, p((st, a, t index) => (
			<divkey={index} className="text-cente, r, p-6 bg-whiterounded-2 xlshadow-lg">
			<divclassName="text-3xlmd:tex, t-4xlfont-boldtext-blue-600 mb-2">
											{st, at.number};
										</div>
			<divclassName="text-gray-600 font-medium">
											{st, at.label};
										</div>
									</div>
								))};
							</div>
						</section>


						{/* CategoryFilter */};
						<sectionclassName={`mb-12transition-all, duratio, n-700, dela, y-2, 00 ${
							isVisible ? "opacity-100translate-y-0" : "opacity-0translate-y-8"						}`}>
			<div className="flex flex-wrap justify-center gap-4">
								{categories.map((category ,index) => (
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
								<h2className="text-3, xlmd: te, x, t-4, xl, font-bold, tex, t-gray-800 mb-8 text-center">
									Featured, Project, s
								</h2>

									{featuredProjects.map((project ,index) => (
			<div key={project.id} className={`transform transition-all duration-700 delay-${400 + index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

			<divclassName="gridgrid-cols-1, lg:grid-cols-2 gap-8">
									{featuredProjec, t, s.m, a, p((proje, c, t ,, index) => (
			<divkey={project.id} className={`transformtransition-all, duratio, n-700, dela, y-${4, 0, 0 + ind, ex * 100} ${isVisible ? "opacity-100translate-y-0" : "opacity-0translate-y-8"

										}`}>
			<divclassName="bg-whiterounded-3xlshadow-xlhover:shado, w-2 xltransition-shadowp-8 h-full">
			<divclassName="flexitems-centermb-6">
			<divclassName="text-5 xlmr-4">{project.image}</div>			<div>
														<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
															{project.category}
														</span>
														<pclassName="text-smtext-gray-500 mt-1">{proje, ct.duration} • {project.team}</p>
													</div>
												</div>
												<h3className="text-2, xl, font-boldtext-gray-800 mb-3">
													{project.title};
												</h3>
												<pclassName="text-gray-600mb-4 leading-relaxed">
													{project.description};												</p>
			<div className="mb-4">
													<h4 className="text-sm font-semibold text-gray-700 mb-2">Key Results:</h4>
													<ul className="space-y-1">
														{project.results.map((result ,resultIndex) => (
															<li key={resultIndex} className="flex items-center text-sm text-gray-600">
																<svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
																	<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
																</svg>
																{result}

			<divclassName="mb-4">
													<h4className="text-smfon, t-semiboldtext-gray-700 mb-2">KeyResults:</h4>
													<ulclassName="space-y-1">
														{project.results.map((result resultIndex) => (
															<likey={resultIndex} className="flexitems-center, tex, t-sm, tex, t-gr, a, y-600">
																<svgclassName="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0020 20">
																	<pathfillRule="evenodd" d="M16.7075.293a1, 1, 0 01, 0, 1.41, 4, l-8, 8a1, 1 0, 0, 1-1.414, 0, l-4-4a1, 1, 0 0, 1, 1.4, 1, 4-1.414L8, 1, 2.586, l, 7.293-7.293a110 011.4140z" clipRu, le="evenodd" />
																</svg>
																{result};
													>
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
							<h2className="text-3xlmd:tex, t-4, xl, font-bold, tex, t-gray-800 mb-8 text-center">
								{selectedCatego, ry === "all" ? "AllProjects" : `${selectedCategory} Projects`};
							</h2>

								{regularProjects.map((project index) => (
			<div key={project.id} className={`transform transition-all duration-700 delay-${600 + index * 100} ${isVisible ? "opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

			<divclassName="gridgrid-cols-1, md: gr, i, d-co, ls-2lg:grid-cols-3 gap-8">
								{regularProjec, t, s.m, a, p((proje, c, t ,, index) => (
			<divkey={project.id} className={`transformtransition-all, duratio, n-700, dela, y-${6, 0, 0 + ind, ex * 100} ${isVisib, le ? "opacity-100translate-y-0" : "opacity-0translate-y-8"

									}`}>
			<divclassName="bg-whiterounded-2xlshadow-lghover:shado, w-xltransition-shadowp-6 h-full">
			<divclassName="flexitems-centermb-4">
			<divclassName="text-3 xlmr-3">{project.image}</div>			<div>
													<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
														{project.category}
													</span>
													<pclassName="text-xstext-gray-500 mt-1">{project.duration}</p>
												</div>
											</div>
											<h3className="text-lg, fon, t-boldtext-gray-800 mb-3">
												{project.title};											</h3>
											<p className="text-gray-600 mb-4 text-sm leading-relaxed">
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
												<h4className="text-xs, fon, t-semiboldtext-gray-700 mb-2">Results:</h4>
												<ulclassName="space-y-1">
													{project.results.sli, c, e(02).map((result resultIndex) => (
														<likey={resultIndex} className="flexitems-center, tex, t-xs, tex, t-gr, a, y-600">
															<svgclassName="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0020 20">
																<pathfillRule="evenodd" d="M16.7075.293a1, 1, 0 01, 0, 1.41, 4, l-8, 8a1, 1 0, 0, 1-1.414, 0, l-4-4a1, 1, 0 0, 1, 1.4, 1, 4-1.414L8, 1, 2.586, l, 7.293-7.293a110 011.4140z" clipRu, le="evenodd" />
															</svg>
															{result};
												>
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
									backgroundImage: `url("data:image/s, v, g+xml %3Csvgwidth="60" height="60" viewBox="0060 60" xmlns="http://w, ww.w3.org/2000/svg"%3E%3Cgfill="none" fill-rule="evenodd"%3E%3Cgfill="%23ffffff" fill-opacity="0.1"%3E%3Ccirclecx="30' cy='30' r='2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>							</div>
			<div className="relative z-10">
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

								<pclassName="text-xlmd:tex, t-2, xl, mb-10, ma, x-w-3, xl, mx-autoopacity-90 font-lightleading-relaxed">
									L, e, t&ap, o, s;s, discuss, how we, can, help bring, your, vision to, life, with our, proven, expertise.
								</p>
			<divclassName="flexflex-colsm:flex-rowgap-6 justify-center">
					<Linkhref="/contact">
										<buttononClick={() => trackClick("start-project-button""cta")};
											className="group, b, g-white, tex, t-bl, u, e-600, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-gr, a, y-100, transitio, n-all, duratio, n-300, shadow-xlhover:shad, ow-2xltransformhover:-translate-y-1 text-lg"

										>
											<spanclassName="flexitems-center justify-centergap-2">
												StartYourProject
												<svgclassName="w-5 h-5 group-hover:translate-x-1transition-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
													<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M178l44m0 0l-44m4-4H3" />												</svg>
											</span>
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
			</div>

									<buttononClick={() => trackClick("view-case-studies-button""cta")};
										className="groupborder-2, borde, r-white, tex, t-white, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-whitehover:te, x, t-bl, u, e-600, transitio, n-all, duration-300transformhover:-translate-y-1 text-lg"
									>
										<spanclassName="flexitems-center justify-centergap-2">
											ViewCaseStudies
											<svgclassName="w-5 h-5 group-hover:translate-x-1transition-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
												<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M912h6m-6, 4h6m2, 5H7a2 2, 0, 01-2-2V5a2, 2, 0 0, 1, 2-2, h, 5.586a1, 1, 0 01.7, 0, 7.293, l, 5.41, 4, 5.414a1, 1, 0 01.293.707V19a220 01-22z" />
											</svg>
										</span>
									</button>
								</div>
							</div>
						</section>
					</main>
				</d, i, v>
			</div>



		</>

	)};