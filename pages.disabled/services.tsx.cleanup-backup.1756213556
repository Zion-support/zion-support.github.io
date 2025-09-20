import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import { Brain, Shield, Cpu, Cloud, Zap, Database, Users, Target, CheckCircle, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 'ai-solutions',
      name: 'AI Solutions',
      tagline: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
      features: ['Machine Learning Models', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
      price: 'Custom Pricing',
      rating: '4.9',
      customers: '50+',
      icon: Brain,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'quantum-technology',
      name: 'Quantum Technology',
      tagline: 'Pioneer the future with quantum computing, cryptography, and sensing solutions.',
      features: ['Quantum Computing', 'Quantum Cryptography', 'Quantum Sensing', 'Quantum Machine Learning'],
      price: 'Custom Pricing',
      rating: '4.8',
      customers: '25+',
      icon: Cpu,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      tagline: 'Protect your digital assets with next-generation security solutions and threat detection.',
      features: ['Threat Detection', 'Zero Trust Architecture', 'Security Automation', 'Compliance Management'],
      price: 'Custom Pricing',
      rating: '4.9',
      customers: '100+',
      icon: Shield,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      tagline: 'Accelerate development and deployment with modern cloud infrastructure and automation.',
      features: ['Cloud Migration', 'DevOps Automation', 'Infrastructure as Code', 'Monitoring & Observability'],
      price: 'Custom Pricing',
      rating: '4.7',
      customers: '75+',
      icon: Cloud,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'it-services',
      name: 'IT Services',
      tagline: 'Comprehensive IT solutions for enterprise infrastructure and digital transformation.',
      features: ['IT Infrastructure', 'Digital Transformation', 'System Integration', 'IT Consulting'],
      price: 'Custom Pricing',
      rating: '4.8',
      customers: '150+',
      icon: Database,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'space-tech',
      name: 'Space Technology',
      tagline: 'Innovative solutions for space exploration, satellite systems, and aerospace applications.',
      features: ['Satellite Systems', 'Space Data Analytics', 'Aerospace Solutions', 'Space Mining'],
      price: 'Custom Pricing',
      rating: '4.6',
      customers: '15+',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <>
      <Head>
        <title>Services — Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive technology services including AI, quantum computing, cybersecurity, cloud solutions, and more." />
        <meta property="og:title" content="Services — Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive technology services including AI, quantum computing, cybersecurity, cloud solutions, and more." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to transform your business and drive innovation across all industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </a>
              <a href="/case-studies" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300">
                View Case Studies
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-white/70">{service.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-white">{service.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{service.tagline}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-cyan-400">{service.price}</div>
                    <div className="text-sm text-white/50">{service.customers} customers</div>
                  </div>

                  <a
                    href={`/${service.id}`}
                    className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss how our services can help you achieve your technology goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg"
              >
                Get Started
              </a>
              <a
                href="/case-studies"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 text-lg"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
=======
import Link from 'next/link';

export default function ServicesPage() {
	return (
		<>
			<Head>
				<title>Our Services | Zion Tech Group - AI, Cybersecurity, Cloud & Enterprise Solutions</title>
				<meta name="description" content="Discover Zion Tech Group's comprehensive technology services. From AI solutions and cybersecurity to cloud infrastructure and enterprise automation, we deliver cutting-edge technology services." />
				<link rel="canonical" href="https://ziontechgroup.com/services" />
			</Head>
			<main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<div className="container mx-auto px-6 py-16">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
							Our Services
						</h1>
						<p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
							Comprehensive technology services designed to transform your business. From AI and machine learning to cybersecurity and cloud infrastructure, we deliver cutting-edge solutions that drive innovation and growth.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
								Get Started
							</Link>
							<Link href="/case-studies" className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
								View Case Studies
							</Link>
						</div>
					</section>

					{/* Featured Services */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Featured Services</h2>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-200">
								<div className="mb-4">
									<span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full mb-2">AI & ML</span>
									<h3 className="text-2xl font-semibold mb-3 text-cyan-400">AI Solutions</h3>
								</div>
								<p className="text-white/70 mb-4">
									Transform your business with cutting-edge artificial intelligence solutions. From custom AI development to autonomous systems, we deliver intelligent solutions that drive innovation.
								</p>
								<div className="grid grid-cols-2 gap-4 mb-4">
									<div className="text-center">
										<div className="text-2xl font-bold text-cyan-400">Custom AI</div>
										<div className="text-sm text-white/60">Development</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-fuchsia-400">Autonomous</div>
										<div className="text-sm text-white/60">Systems</div>
									</div>
								</div>
								<Link href="/services/ai-solutions" className="text-cyan-400 hover:text-cyan-300 transition-colors">
									Explore AI Services →
								</Link>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-fuchsia-400/50 transition-all duration-200">
								<div className="mb-4">
									<span className="inline-block px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full mb-2">Security</span>
									<h3 className="text-2xl font-semibold mb-3 text-fuchsia-400">Cybersecurity</h3>
								</div>
								<p className="text-white/70 mb-4">
									Protect your digital assets with enterprise-grade cybersecurity solutions. From threat detection to compliance automation, we provide comprehensive security.
								</p>
								<div className="grid grid-cols-2 gap-4 mb-4">
									<div className="text-center">
										<div className="text-2xl font-bold text-fuchsia-400">Threat</div>
										<div className="text-sm text-white/60">Detection</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-purple-400">Zero Trust</div>
										<div className="text-sm text-white/60">Security</div>
									</div>
								</div>
								<Link href="/services/cybersecurity" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
									Explore Security Services →
								</Link>
							</div>
						</div>
					</section>

					{/* Service Categories */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Service Categories</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<Link href="/services/ai-solutions" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											🤖
										</div>
										<div>
											<h3 className="text-xl font-semibold text-cyan-400">AI & Machine Learning</h3>
											<p className="text-blue-400 text-sm">Intelligent Solutions</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										Custom AI development, autonomous systems, machine learning models, and intelligent automation solutions.
									</p>
								</div>
							</Link>

							<Link href="/services/cybersecurity" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-fuchsia-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											🔒
										</div>
										<div>
											<h3 className="text-xl font-semibold text-fuchsia-400">Cybersecurity</h3>
											<p className="text-purple-400 text-sm">Protection & Compliance</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										Advanced threat detection, compliance automation, zero-trust security, and security analytics.
									</p>
								</div>
							</Link>

							<Link href="/services/cloud-devops" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-green-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											☁️
										</div>
										<div>
											<h3 className="text-xl font-semibold text-green-400">Cloud & DevOps</h3>
											<p className="text-emerald-400 text-sm">Infrastructure & Automation</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										Cloud infrastructure, DevOps automation, container orchestration, and infrastructure as code.
									</p>
								</div>
							</Link>

							<Link href="/services/data-analytics" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											📊
										</div>
										<div>
											<h3 className="text-xl font-semibold text-blue-400">Data Analytics</h3>
											<p className="text-cyan-400 text-sm">Insights & Intelligence</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										Data engineering, business intelligence, predictive analytics, and real-time insights.
									</p>
								</div>
							</Link>

							<Link href="/services/quantum-technology" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											⚛️
										</div>
										<div>
											<h3 className="text-xl font-semibold text-purple-400">Quantum Technology</h3>
											<p className="text-indigo-400 text-sm">Next-Gen Computing</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										Quantum computing solutions, quantum-ready infrastructure, and quantum algorithm development.
									</p>
								</div>
							</Link>

							<Link href="/solutions" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											🏢
										</div>
										<div>
											<h3 className="text-xl font-semibold text-yellow-400">Enterprise Solutions</h3>
											<p className="text-orange-400 text-sm">Business Transformation</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										Digital transformation, legacy modernization, enterprise automation, and business process optimization.
									</p>
								</div>
							</Link>
						</div>
					</section>

					{/* Service Features */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Why Choose Our Services?</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🎯
								</div>
								<h3 className="text-xl font-semibold mb-3 text-cyan-400">Expert Team</h3>
								<p className="text-white/70">
									Our team consists of world-class engineers, data scientists, and technology experts with decades of combined experience.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									⚡
								</div>
								<h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Cutting-Edge Tech</h3>
								<p className="text-white/70">
									We stay at the forefront of technology, continuously researching and implementing the latest advancements.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🔒
								</div>
								<h3 className="text-xl font-semibold mb-3 text-green-400">Security First</h3>
								<p className="text-white/70">
									Security is built into every solution we create, ensuring your data and systems remain protected.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									📊
								</div>
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Measurable Results</h3>
								<p className="text-white/70">
									We deliver solutions that provide clear, measurable business outcomes and ROI for your investments.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🔄
								</div>
								<h3 className="text-xl font-semibold mb-3 text-yellow-400">Ongoing Support</h3>
								<p className="text-white/70">
									Continuous support, updates, and optimization to ensure your solutions remain effective and up-to-date.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🤝
								</div>
								<h3 className="text-xl font-semibold mb-3 text-red-400">Client Partnership</h3>
								<p className="text-white/70">
									We work closely with our clients, building long-term partnerships focused on mutual success.
								</p>
							</div>
						</div>
					</section>

					{/* Service Process */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Our Service Process</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									1
								</div>
								<h3 className="text-xl font-semibold mb-3 text-cyan-400">Discovery</h3>
								<p className="text-white/70 text-sm">
									Deep dive into your business needs, challenges, and technology requirements to understand your goals.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									2
								</div>
								<h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Strategy</h3>
								<p className="text-white/70 text-sm">
									Develop comprehensive technology strategy and roadmap aligned with your business objectives.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									3
								</div>
								<h3 className="text-xl font-semibold mb-3 text-green-400">Implementation</h3>
								<p className="text-white/70 text-sm">
									Execute the solution using industry best practices and cutting-edge technologies.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									4
								</div>
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Optimization</h3>
								<p className="text-white/70 text-sm">
									Continuous monitoring, optimization, and support to ensure peak performance and results.
								</p>
							</div>
						</div>
					</section>

					{/* Service Statistics */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Service Statistics</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="text-4xl font-bold text-cyan-400 mb-2">200+</div>
								<div className="text-white/70">Projects Delivered</div>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="text-4xl font-bold text-fuchsia-400 mb-2">98%</div>
								<div className="text-white/70">Client Satisfaction</div>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
								<div className="text-white/70">Industries Served</div>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
								<div className="text-white/70">Support Available</div>
							</div>
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
						<div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-cyan-400/30 rounded-lg p-8">
							<h2 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
							<p className="text-white/80 mb-6 max-w-2xl mx-auto">
								Let's discuss how our technology services can help you achieve your goals and stay ahead of the competition.
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								<Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
									Get Started Today
								</Link>
								<Link href="/case-studies" className="px-8 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
									View Case Studies
								</Link>
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}
>>>>>>> origin/cursor/website-audit-and-enhancement-d607
