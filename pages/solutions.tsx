import React from 'react.ts';
import { Link              } from 'react-router-dom.ts';
<<<<<<< HEAD
import { Brain, Cloud, Shield, Zap, Users, TrendingUp, CheckCircle, Globe, Lock, Database export default function Solutions(...args: any[]): any {
  const solutions = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Advanced AI systems, autonomous agents, and intelligent automation platforms that transform business operations.',
      features: ['Multi-agent AI systems', 'RAG-powered workflows', 'Predictive analytics', 'Natural language processing'],
      href: '/services#ai',
      color: 'from-blue-600 to-purple-600'
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud platforms, serverless architectures, and modern infrastructure solutions.',
      features: ['Cloud migration', 'Kubernetes orchestration', 'Serverless computing', 'Data pipelines'],
      href: '/services#cloud',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions including zero-trust architecture and threat detection.',
      features: ['Zero-trust security', 'Threat intelligence', 'Compliance frameworks', 'Incident response'],
      href: '/services#cybersecurity',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize legacy systems and processes.',
      features: ['Legacy modernization', 'Process automation', 'Digital workflows', 'Change management'],
      href: '/services#transformation',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Enterprise Solutions',
      description: 'Tailored enterprise-grade solutions for large organizations with complex requirements.',
      features: ['Custom development', 'Integration services', 'Enterprise architecture', 'Scalability planning'],
      href: '/services#enterprise',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Performance tuning, monitoring, and optimization for applications and infrastructure.',
      features: ['Performance monitoring', 'Load testing', 'Optimization strategies', 'Capacity planning'],
      href: '/services#performance',
      color: 'from-yellow-500 to-orange-600'

  ]
=======
import { ArrowRight, Brain, Cloud, Shield, BarChart3, Database, Rocket, Users, Building, Globe, Zap, CheckCircle, Star, TrendingUp, Clock, Target, Award              } from 'lucide-react.ts';

export default function Solutions(...args: any[]): any {
	const industrySolutions = [
		{
			icon: Building,
			title: 'Enterprise Solutions',
			description: 'Comprehensive technology solutions for large enterprises',
			features: ['Digital Transformation', 'Legacy Modernization', 'Enterprise Integration', 'Scalable Architecture'],
			href: '/solutions/enterprise',
			color: 'from-blue-600 to-indigo-700'
		},
		{
			icon: Users,
			title: 'SMB Solutions',
			description: 'Cost-effective technology solutions for small and medium businesses',
			features: ['Cloud Migration', 'Security Hardening', 'Process Automation', 'Growth Enablement'],
			href: '/solutions/smb',
			color: 'from-green-600 to-emerald-700'
		},
		{
			icon: Globe,
			title: 'Startup Solutions',
			description: 'Rapid development and scaling solutions for startups',
			features: ['MVP Development', 'Cloud Infrastructure', 'AI Integration', 'Growth Analytics'],
			href: '/solutions/startup',
			color: 'from-purple-600 to-pink-700'
		}
	];
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

	const technologySolutions = [
		{
			icon: Brain,
			title: 'AI & Machine Learning',
			description: 'Intelligent automation and decision-making systems',
			features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Workflows'],
			href: '/solutions/ai-ml',
			color: 'from-purple-600 to-indigo-700'
		},
		{
			icon: Cloud,
			title: 'Cloud & DevOps',
			description: 'Scalable cloud infrastructure and automation',
			features: ['Multi-cloud Strategy', 'Kubernetes Orchestration', 'CI/CD Pipelines', 'Infrastructure as Code'],
			href: '/solutions/cloud-devops',
			color: 'from-cyan-600 to-blue-700'
		},
		{
			icon: Shield,
			title: 'Cybersecurity',
			description: 'Comprehensive security and compliance solutions',
			features: ['Zero Trust Architecture', 'SOC 2 Compliance', 'Threat Detection', 'Security Hardening'],
			href: '/solutions/cybersecurity',
			color: 'from-red-600 to-orange-700'
		},
		{
			icon: BarChart3,
			title: 'Data & Analytics',
			description: 'Real-time insights and business intelligence',
			features: ['Data Warehousing', 'Real-time Analytics', 'Business Intelligence', 'Data Quality'],
			href: '/solutions/data-analytics',
			color: 'from-emerald-600 to-teal-700'
		},
		{
			icon: Database,
			title: 'Enterprise Systems',
			description: 'Modern ERP, CRM, and workflow solutions',
			features: ['ERP Modernization', 'CRM Integration', 'Workflow Automation', 'API Management'],
			href: '/solutions/enterprise-systems',
			color: 'from-blue-600 to-indigo-700'
		},
		{
			icon: Rocket,
			title: 'Emerging Technologies',
			description: 'Cutting-edge quantum and blockchain solutions',
			features: ['Quantum Computing', 'Blockchain Platforms', 'IoT Infrastructure', 'Edge Computing'],
			href: '/solutions/emerging-tech',
			color: 'from-pink-600 to-rose-700'
		}
	];

<<<<<<< HEAD
      {/* Solutions Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Solutions</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive technology solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From AI-powered automation to enterprise-grade security, we provide the tools and expertise to transform your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index)              => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${solution.color} text-white mb-6`}>
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>

                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={solution.href}
                  className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-gradient-to-r ${solution.color} text-white font-semibold hover:shadow-lg transition-all duration-200`}

                  Learn More
                  <Zap className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              Let's discuss how our solutions can help you achieve your goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-all duration-200"

                Get Started
                <TrendingUp className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 transition-all duration-200"

                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}}}
=======
	const useCaseSolutions = [
		{
			title: 'Digital Transformation',
			description: 'Modernize legacy systems and processes for the digital age',
			icon: Zap,
			href: '/solutions/digital-transformation'
		},
		{
			title: 'Cloud Migration',
			description: 'Seamlessly migrate to cloud infrastructure with minimal downtime',
			icon: Cloud,
			href: '/solutions/cloud-migration'
		},
		{
			title: 'Security Compliance',
			description: 'Achieve and maintain industry compliance standards',
			icon: Shield,
			href: '/solutions/security-compliance'
		},
		{
			title: 'Data Modernization',
			description: 'Transform data infrastructure for real-time insights',
			icon: BarChart3,
			href: '/solutions/data-modernization'
		},
		{
			title: 'AI Integration',
			description: 'Integrate AI capabilities into existing business processes',
			icon: Brain,
			href: '/solutions/ai-integration'
		},
		{
			title: 'Process Automation',
			description: 'Automate repetitive tasks and workflows',
			icon: Target,
			href: '/solutions/process-automation'
		}
	];

	const successMetrics = [
		{ number: '95%', label: 'Client Satisfaction', icon: Star },
		{ number: '40%', label: 'Cost Reduction', icon: TrendingUp },
		{ number: '60%', label: 'Efficiency Gain', icon: Zap },
		{ number: '99.9%', label: 'Uptime SLA', icon: Clock }
	];

	return (
		<>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
							Comprehensive Technology Solutions
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600 lg:text-xl">
							Tailored solutions that address your specific business challenges and drive measurable results across all industries.
						</p>
						<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
							<Link
								to="/contact"
								className="w-full sm:w-auto rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
							>
								Get Custom Solution
							</Link>
							<Link
								to="/case-studies"
								className="w-full sm:w-auto text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
							>
								View Case Studies <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Success Metrics */}
			<section className="py-16 bg-white">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">Proven Results</h2>
						<p className="text-gray-600">Our solutions consistently deliver measurable business value</p>
					</div>
					<div className="grid grid-cols-2 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-4 gap-8">
						{successMetrics.map((metric)              => (
							<div key={metric.label} className="text-center">
								<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
									<metric.icon className="h-8 w-8 text-blue-600" />
								</div>
								<div className="text-3xl font-bold text-gray-900 mb-2">{metric.number}</div>
								<div className="text-gray-600">{metric.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Industry Solutions */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Industry-Specific Solutions</h2>
						<p className="mt-6 text-lg text-gray-600">
							Tailored solutions designed for your industry's unique challenges and requirements.
						</p>
					</div>
					<div className="grid gap-8 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3">
						{industrySolutions.map((solution)              => (
							<div key={solution.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group">
								<div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
									<solution.icon className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
								<p className="text-gray-600 mb-4">{solution.description}</p>
								<ul className="space-y-2 mb-6">
									{solution.features.map((feature, index) => (
										<li key={index} className="flex items-center text-sm text-gray-600">
											<CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
											{feature}
										</li>
									))}
								</ul>
								<Link
									to={solution.href}
									className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium group-hover:translate-x-1 transition-all duration-200"
								>
									Learn More <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Technology Solutions */}
			<section className="py-24 sm:py-32 bg-white">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technology Solutions</h2>
						<p className="mt-6 text-lg text-gray-600">
							Cutting-edge technology solutions that power modern businesses.
						</p>
					</div>
					<div className="grid gap-8 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3">
						{technologySolutions.map((solution)              => (
							<div key={solution.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-200">
								<div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
									<solution.icon className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
								<p className="text-gray-600 mb-4">{solution.description}</p>
								<ul className="space-y-2 mb-6">
									{solution.features.map((feature, index) => (
										<li key={index} className="flex items-center text-sm text-gray-600">
											<CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
											{feature}
										</li>
									))}
								</ul>
								<Link
									to={solution.href}
									className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium group-hover:translate-x-1 transition-all duration-200"
								>
									Learn More <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Use Case Solutions */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Common Use Cases</h2>
						<p className="mt-6 text-lg text-gray-600">
							Solutions for the most common business challenges and opportunities.
						</p>
					</div>
					<div className="grid gap-6 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3">
						{useCaseSolutions.map((solution)              => (
							<div key={solution.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
								<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
									<solution.icon className="w-6 h-6 text-blue-600" />
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h3>
								<p className="text-gray-600 mb-4 text-sm">{solution.description}</p>
								<Link
									to={solution.href}
									className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium text-sm group-hover:translate-x-1 transition-all duration-200"
								>
									Learn More <ArrowRight className="ml-1 h-3 w-3" />
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 sm:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready for Your Custom Solution?</h2>
						<p className="mt-6 text-lg text-blue-100">
							Let's discuss your specific needs and create a tailored solution that drives real business results.
						</p>
						<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
							<Link
								to="/contact"
								className="w-full sm:w-auto rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors"
							>
								Get Started
							</Link>
							<Link
								to="/case-studies"
								className="w-full sm:w-auto text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
							>
								View Success Stories <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
