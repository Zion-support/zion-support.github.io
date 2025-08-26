import React from 'react'
import { Link } from 'react-router-dom'
import { TrendingUp, Users, Clock, ArrowRight, Star, Award, Building, Zap } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

export default function CaseStudies() {
	const caseStudies = [
		{
			id: 1,
			title: 'TechCorp: 300% Efficiency Increase with AI Automation',
			client: 'TechCorp Inc.',
			industry: 'Technology',
			challenge: 'Manual processes were slowing down operations and causing errors in customer service.',
			solution: 'Implemented AI-powered multi-agent system for customer service and sales operations.',
			results: [
				'300% increase in operational efficiency',
				'90% reduction in response time',
				'$2.5M annual cost savings',
				'Improved customer satisfaction scores'
			],
			duration: '6 months',
			team: 12,
			rating: 5
		},
		{
			id: 2,
			title: 'HealthCare Solutions: Secure Cloud Migration',
			client: 'HealthCare Solutions',
			industry: 'Healthcare',
			challenge: 'Legacy on-premise systems were expensive to maintain and lacked scalability.',
			solution: 'Migrated to secure cloud infrastructure with HIPAA compliance and disaster recovery.',
			results: [
				'40% reduction in infrastructure costs',
				'99.9% uptime achieved',
				'Full HIPAA compliance',
				'Improved data security'
			],
			duration: '8 months',
			team: 8,
			rating: 5
		},
		{
			id: 3,
			title: 'ManufacturingCo: IoT and AI Integration',
			client: 'ManufacturingCo',
			industry: 'Manufacturing',
			challenge: 'Production inefficiencies and lack of real-time monitoring were causing delays.',
			solution: 'Deployed IoT sensors and AI analytics for predictive maintenance and optimization.',
			results: [
				'25% increase in production output',
				'60% reduction in downtime',
				'Predictive maintenance alerts',
				'Real-time production monitoring'
			],
			duration: '10 months',
			team: 15,
			rating: 5
		},
		{
			id: 4,
			title: 'FinTech Startup: Micro SaaS Platform',
			client: 'FinTech Startup',
			industry: 'Financial Services',
			challenge: 'Needed a scalable platform to manage multiple financial services efficiently.',
			solution: 'Built custom micro SaaS platform with automated workflows and AI-powered insights.',
			results: [
				'50% faster service delivery',
				'Automated compliance reporting',
				'Scalable architecture',
				'Reduced operational overhead'
			],
			duration: '4 months',
			team: 6,
			rating: 5
		}
	]

	const industries = ['All', 'Technology', 'Healthcare', 'Manufacturing', 'Financial Services', 'Retail', 'Education']

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Case Studies
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Real results from real clients. See how we've transformed businesses across industries.
						</p>
					</div>
				</div>
			</section>

			{/* Industry Filter */}
			<section className="py-12 border-b border-gray-200">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="flex flex-wrap gap-4 justify-center">
						{industries.map((industry) => (
							<button
								key={industry}
								className="px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600"
							>
								{industry}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Featured Case Study */}
			<section className="py-16">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
						<div className="lg:flex">
							<div className="lg:w-1/2">
								<div className="h-64 lg:h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
									<div className="text-center">
										<Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
										<p className="text-blue-600 font-medium">Featured Success Story</p>
									</div>
								</div>
							</div>
							<div className="lg:w-1/2 p-8">
								<div className="flex items-center gap-4 mb-4">
									<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
										{caseStudies[0].industry}
									</span>
									<div className="flex items-center gap-2 text-sm text-gray-500">
										<Clock className="h-4 w-4" />
										{caseStudies[0].duration}
									</div>
								</div>
								<h2 className="text-2xl font-bold text-gray-900 mb-4">
									{caseStudies[0].title}
								</h2>
								<p className="text-gray-600 mb-6">
									{caseStudies[0].challenge}
								</p>
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-4 text-sm text-gray-500">
										<div className="flex items-center gap-2">
											<Users className="h-4 w-4" />
											{caseStudies[0].team} team members
										</div>
										<div className="flex items-center gap-2">
											<Star className="h-4 w-4 text-yellow-500" />
											{caseStudies[0].rating}/5
										</div>
									</div>
									<Link
										to={`/case-studies/${caseStudies[0].id}`}
										className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
									>
										Read Full Case Study
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Case Studies Grid */}
			<section className="py-16">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid gap-8 lg:grid-cols-2">
						{caseStudies.slice(1).map((study) => (
							<article key={study.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
								<div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
									<Building className="h-12 w-12 text-gray-400" />
								</div>
								<div className="p-6">
									<div className="flex items-center gap-4 mb-4">
										<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
											{study.industry}
										</span>
										<div className="flex items-center gap-2 text-sm text-gray-500">
											<Clock className="h-4 w-4" />
											{study.duration}
										</div>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										{study.title}
									</h3>
									<p className="text-gray-600 mb-4">
										{study.challenge}
									</p>
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-4 text-sm text-gray-500">
											<div className="flex items-center gap-2">
												<Users className="h-4 w-4" />
												{study.team} team
											</div>
											<div className="flex items-center gap-2">
												<Star className="h-4 w-4 text-yellow-500" />
												{study.rating}/5
											</div>
										</div>
										<Link
											to={`/case-studies/${study.id}`}
											className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
										>
											Read More
											<ArrowRight className="ml-2 h-4 w-4" />
										</Link>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Success Metrics */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Success Metrics</h2>
						<p className="mt-6 text-lg text-gray-600">
							The numbers speak for themselves
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-4">
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
								<TrendingUp className="h-8 w-8 text-blue-600" />
							</div>
							<div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
							<p className="text-gray-600">Client Satisfaction Rate</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
								<Zap className="h-8 w-8 text-green-600" />
							</div>
							<div className="text-3xl font-bold text-gray-900 mb-2">300%</div>
							<p className="text-gray-600">Average Efficiency Gain</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mb-6">
								<Users className="h-8 w-8 text-purple-600" />
							</div>
							<div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
							<p className="text-gray-600">Successful Projects</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-6">
								<Award className="h-8 w-8 text-orange-600" />
							</div>
							<div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
							<p className="text-gray-600">Project Success Rate</p>
						</div>
					</div>
				</div>
			</section>

			{/* Process */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Process</h2>
						<p className="mt-6 text-lg text-gray-600">
							How we deliver exceptional results
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-4">
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
								<div className="text-2xl font-bold text-blue-600">1</div>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Discovery</h3>
							<p className="text-gray-600">
								We analyze your business needs and identify opportunities for improvement.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
								<div className="text-2xl font-bold text-green-600">2</div>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Strategy</h3>
							<p className="text-gray-600">
								We develop a comprehensive plan tailored to your specific requirements.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mb-6">
								<div className="text-2xl font-bold text-purple-600">3</div>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation</h3>
							<p className="text-gray-600">
								Our expert team executes the solution with precision and care.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-6">
								<div className="text-2xl font-bold text-orange-600">4</div>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Optimization</h3>
							<p className="text-gray-600">
								We continuously monitor and improve performance for lasting results.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 sm:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white mb-6">
						Ready to Join Our Success Stories?
					</h2>
					<p className="text-xl text-blue-100 mb-8">
						Let's discuss how we can transform your business with our proven solutions
					</p>
					<div className="flex items-center justify-center gap-x-6">
						<Link
							to="/contact"
							className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors"
						>
							Get Started
						</Link>
						<Link
							to="/services"
							className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
						>
							View Services <span aria-hidden="true">→</span>
						</Link>
					</div>
				</div>
			</section>
		</PageTransition>
	)

      challenge: 'Need for future-proof cybersecurity against quantum computing threats',
      solution: 'Implemented quantum-resistant encryption and post-quantum cryptography protocols',
      results: [
        'Future-proof security against quantum threats',
        'Enhanced data protection standards',
        'Compliance with government security requirements',
        'Improved competitive positioning'
      ],
      technologies: ['Quantum Cryptography', 'Post-Quantum Algorithms', 'Security Protocols', 'Compliance Management'],
      duration: '7 months',
      roi: '250%',
      featured: false
    }
  ];
  const industries = [
    'All Industries',
    'Retail & E-commerce',
    'Finance',
    'Healthcare',
    'Manufacturing',
    'Transportation & Logistics',
    'Government & Defense',
    'Technology'
  ];
  const featuredCaseStudy = caseStudies.find(study => study.featured);
  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Discover how Zion Tech Group has helped businesses transform their operations with cutting-edge AI, quantum computing, and cybersecurity solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
              Real results from real businesses. See how our cutting-edge technology solutions have transformed operations and driven measurable outcomes.
            </p>
          </div>
        </section>
        {/* Featured Case Study */}
        {featuredCaseStudy && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 border border-white border-opacity-10">
                <div className="mb-6">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured Case Study
                  </span>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{featuredCaseStudy.title}</h2>
                    <div className="text-blue-400 font-semibold mb-2">{featuredCaseStudy.company}</div>
                    <div className="text-gray-400 mb-4">{featuredCaseStudy.industry}</div>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2 text-blue-400">Challenge:</h3>
                      <p className="text-gray-300">{featuredCaseStudy.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2 text-blue-400">Solution:</h3>
                      <p className="text-gray-300">{featuredCaseStudy.solution}</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3 text-blue-400">Results:</h3>
                      <ul className="space-y-2">
                        {featuredCaseStudy.results.map((result, index) => (
                          <li key={index} className="text-gray-300 flex items-center">
                            <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-white bg-opacity-10 rounded-lg p-4">
                        <div className="text-2xl font-bold text-blue-400">{featuredCaseStudy.roi}</div>
                        <div className="text-sm text-gray-400">ROI</div>
                      </div>
                      <div className="bg-white bg-opacity-10 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-400">{featuredCaseStudy.duration}</div>
                        <div className="text-sm text-gray-400">Duration</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* Industry Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    industry === 'All Industries'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white bg-opacity-10 text-gray-300 hover:bg-opacity-20'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </section>
        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.filter(study => !study.featured).map((study, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10 hover:bg-opacity-20 transition-all">
                  <div className="mb-4">
                    <span className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs text-gray-300">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                  <div className="text-blue-400 font-medium mb-2">{study.company}</div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-blue-400 text-sm">Challenge:</h4>
                    <p className="text-gray-300 text-sm line-clamp-3">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-blue-400 text-sm">Solution:</h4>
                    <p className="text-gray-300 text-sm line-clamp-3">{study.solution}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-blue-400 text-sm">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, resultIndex) => (
                        <li key={resultIndex} className="text-gray-300 text-sm flex items-center">
                          <svg className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-400">
                      <span className="font-semibold text-green-400">{study.roi}</span> ROI
                    </div>
                    <div className="text-sm text-gray-400">{study.duration}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-blue-600 bg-opacity-20 text-blue-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-400 hover:text-blue-300 font-medium text-sm"
                  >
                    Read Full Case Study →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">What Our Clients Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10">
                <div className="text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-300 mb-4">
                  "Zion Tech Group transformed our customer service operations with AI, delivering results that exceeded our expectations."
                </p>
                <div className="font-semibold">- Sarah Johnson, CTO</div>
                <div className="text-sm text-gray-400">Global E-commerce Retailer</div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10">
                <div className="text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-300 mb-4">
                  "Their quantum computing expertise gave us a competitive edge in financial risk management."
                </p>
                <div className="font-semibold">- Michael Chen, Head of Risk</div>
                <div className="text-sm text-gray-400">International Investment Bank</div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how our solutions can transform your business and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link 
                href="/services" 
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
>>>>>>> c62b54d6f2e6f7f7c42a6badc492cf2b66068915
}