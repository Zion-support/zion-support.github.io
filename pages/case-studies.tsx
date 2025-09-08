import React from 'react';




export default function CaseStudies() {
  const caseStudies = [

      image: '/api/placeholder/600/400'
    }, {
      title: 'AI-Powered Customer Service Revolution',
      client: 'Leading E-commerce Platform', industry: 'E-commerce',
      challenge: 'High customer service volume and response times', solution: 'AI chatbot implementation with natural language processing',
      results: [

      image: '/api/placeholder/600/400'
    }, {
      title: 'Cybersecurity Transformation',
      client: 'Financial Services Firm', industry: 'Financial Services',
      challenge: 'Advanced threat protection and compliance', solution: 'Comprehensive security framework with AI monitoring',
      results: [

      image: '/api/placeholder/600/400'
    }, {
      title: 'Data Analytics Platform Development',
      client: 'Healthcare Provider Network', industry: 'Healthcare',
      challenge: 'Patient data analysis and predictive insights', solution: 'Custom analytics platform with machine learning',
      results: [

      image: '/api/placeholder/600/400'
    }, {
      title: 'Micro SaaS Development',
      client: 'Startup Technology Company', industry: 'Technology',
      challenge: 'Rapid product development and market entry', solution: 'Custom micro SaaS platform with scalable architecture',
      results: [

      image: '/api/placeholder/600/400'
    }, {
      title: 'Digital Transformation Initiative',
      client: 'Traditional Retail Chain', industry: 'Retail',
      challenge: 'Digital modernization and omnichannel experience', solution: 'End-to-end digital transformation with AI integration',
      results: [

      image: '/api/placeholder/600/400'

    }
  ];

  const industries = [

  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our entire IT infrastructure. The results exceeded our expectations, and we&apos;ve seen significant improvements in efficiency and cost savings.",

      author: "Sarah Johnson",
      title: "CTO", company: "Manufacturing Corp",
      rating: 5
    }, {
      quote: "Their AI solutions revolutionized our customer service operations. We now provide 24/7 support with higher satisfaction rates than ever before.",
      author: "Michael Chen", title: "VP of Operations",
      company: "E-commerce Platform", rating: 5
    }, {
      quote: "The cybersecurity implementation was flawless. We feel confident knowing our data is protected by the most advanced security measures available.", author: "Dr. Emily Rodriguez",
      title: "Chief Information Officer", company: "Healthcare Network",
      rating: 5
    }
  ];

  const categories = ['All', 'E-commerce', 'Financial Services', 'Healthcare', 'Manufacturing', 'Digital Media', 'Cloud Infrastructure'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Head>
        <title>Case Studies | Zion Tech Group - Success Stories</title>
        <meta name="description" content="Explore real-world success stories and case studies showcasing how our autonomous technology solutions have transformed businesses across industries." />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Success stories and case studies from our autonomous technology implementations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      

          </div>
        </section>


                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-blue-600 font-semibold">{industry.count} Projects</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">10x</div>
            <div className="text-sm text-gray-600">Processing Speed Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">99.99%</div>
            <div className="text-sm text-gray-600">Uptime Achieved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">75%</div>
            <div className="text-sm text-gray-600">Cost Reduction</div>
          </div>
        </div>
      </Section>

      {/* Industries We Serve */}
      <Section className="bg-white" spacing="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industries We Transform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our autonomous technology solutions work across diverse sectors
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">E-commerce</h3>
            <p className="text-gray-600">
              Optimize conversion rates, reduce cart abandonment, and automate customer experience
            </p>
          </Card>
          
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Financial Services</h3>
            <p className="text-gray-600">
              Automate transaction processing, ensure compliance, and optimize risk management
            </p>
          </Card>
          
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Healthcare</h3>
            <p className="text-gray-600">
              Streamline patient care, automate data processing, and ensure compliance
            </p>
          </Card>
          
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Manufacturing</h3>
            <p className="text-gray-600">
              Optimize production processes, reduce downtime, and automate quality control
            </p>
          </Card>
          
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Digital Media</h3>
            <p className="text-gray-600">
              Automate content generation, optimize SEO, and scale content production
            </p>
          </Card>
          
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Cloud Infrastructure</h3>
            <p className="text-gray-600">
              Auto-scaling systems, zero-downtime deployments, and intelligent optimization
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white" spacing="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our autonomous technology can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" href="/contact">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" href="/services" className="border-white text-white hover:bg-white hover:text-blue-600">
              Explore Our Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};


            </div>
            
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={index} className={`flex flex-col lg: flex-row gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2">
                    <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
                      <study.icon className="w-24 h-24 text-gray-400" />
                    </div>
                  </div>
                  <div className="lg:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <study.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h3>
                    <p className="text-lg text-gray-600 mb-6 font-semibold">{study.client}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 mb-4">{study.challenge}</p>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 mb-4">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {study.team}
                      </div>
                    </div>
                    
                    <Link href="/contact">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300">
                        Start Similar Project
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
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
								className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-colors"
							>
								{industry}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Featured Case Study */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Featured Success Story</h2>
						<p className="mt-6 text-lg text-gray-600">
							How we transformed TechCorp's operations with AI automation
						</p>
					</div>
					<div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
						<div className="grid gap-8 lg:grid-cols-2">
							<div>
								<div className="flex items-center gap-2 mb-4">
									<Building className="h-5 w-5 text-blue-600" />
									<span className="text-sm text-gray-500">{caseStudies[0].industry}</span>
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">{caseStudies[0].title}</h3>
								<p className="text-gray-600 mb-6">{caseStudies[0].challenge}</p>
								<div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
									<div className="flex items-center gap-1">
										<Clock className="h-4 w-4" />
										{caseStudies[0].duration}
									</div>
									<div className="flex items-center gap-1">
										<Users className="h-4 w-4" />
										{caseStudies[0].team} team members
									</div>
								</div>
								<Link
									to="/contact"
									className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
								>
									Learn More <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
							<div>
								<h4 className="text-lg font-semibold text-gray-900 mb-4">Results</h4>
								<div className="space-y-3">
									{caseStudies[0].results.map((result, index) => (
										<div key={index} className="flex items-center gap-2">
											<Star className="h-4 w-4 text-yellow-500" />
											<span className="text-gray-700">{result}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Case Studies Grid */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">More Success Stories</h2>
						<p className="mt-6 text-lg text-gray-600">
							Explore how we've helped businesses across different industries achieve their goals
						</p>
					</div>
					<div className="grid gap-8 lg: anygrid-cols-2">
						{caseStudies.slice(1).map((study)  => (
							<div key={study.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
								<div className="flex items-center justify-between mb-4">
									<div className="flex items-center gap-2">
										<Building className="h-5 w-5 text-blue-600" />
										<span className="text-sm text-gray-500">{study.industry}</span>
									</div>
									<div className="flex items-center gap-1">
										{Array.from({ length: anystudy.rating }).map((_, i)  => (
											<Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
										))}
									</div>
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">{study.title}</h3>
								<p className="text-gray-600 mb-4">{study.challenge}</p>
								<div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
									<div className="flex items-center gap-1">
										<Clock className="h-4 w-4" />
										{study.duration}
									</div>
									<div className="flex items-center gap-1">
										<Users className="h-4 w-4" />
										{study.team} team members
									</div>
								</div>
								<Link
									to="/contact"
									className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
								>
									View Details <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Success Metrics */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Track Record<string, any>
						<p className="mt-6 text-lg text-gray-600">
							Consistent results across all our client engagements
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						<div className="text-center">
							<div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
							<p className="text-gray-600">Client Satisfaction Rate</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-green-600 mb-2">$50M+</div>
							<p className="text-gray-600">Total Client Savings</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
							<p className="text-gray-600">Projects Completed</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
							<p className="text-gray-600">Support Available</p>
						</div>
					</div>
				</div>
			</section>

			{/* Process */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Process</h2>
						<p className="mt-6 text-lg text-gray-600">
							How we deliver consistent results for our clients
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
								<TrendingUp className="h-8 w-8 text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Discovery</h3>
							<p className="text-gray-600">
								We analyze your current state and identify opportunities for improvement.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
								<Zap className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Strategy</h3>
							<p className="text-gray-600">
								We develop a comprehensive plan tailored to your specific needs and goals.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mb-6">
								<Users className="h-8 w-8 text-purple-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation</h3>
							<p className="text-gray-600">
								Our expert team executes the solution with precision and attention to detail.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-6">
								<Award className="h-8 w-8 text-orange-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Optimization</h3>
							<p className="text-gray-600">
								We continuously monitor and optimize to ensure maximum performance and ROI.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 sm:py-32 bg-blue-600">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white">Ready to Write Your Success Story?</h2>
						<p className="mt-6 text-lg text-blue-100">
							Let's discuss how our expertise can help your business achieve similar results.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
							>
								Get Started Today
							</Link>
							<Link
								to="/services"
								className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
							>
								Explore Our Services →
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
  {/* Removed stray closing parenthesis */}
  {/* Removed stray closing brace */}