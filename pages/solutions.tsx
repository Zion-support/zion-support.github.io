import React from 'react';
import Head from 'next/head';
  Building, Car, Heart, DollarSign, GraduationCap, 
  Shield, Factory, Globe, Brain, Atom, Rocket,
  ArrowRight, CheckCircle, Star, Users, Zap
} from 'lucide-react';

export default function SolutionsPage() {
  const industrySolutions = [
    {
      name: 'Enterprise',
      description: 'Scalable solutions for large organizations with complex requirements',
      icon: Building2,
      color: 'from-blue-400 to-cyan-500',
      solutions: [
        'Digital Transformation',
        'Enterprise AI Platform',
        'Cloud Migration',
        'Legacy System Modernization'
      ]
    },
    {
      name: 'Manufacturing',
      description: 'Smart manufacturing solutions for Industry 4.0 and beyond',
      icon: Factory,
      color: 'from-orange-400 to-red-500',
      solutions: [
        'Predictive Maintenance',
        'Quality Control AI',
        'Supply Chain Optimization',
        'Smart Factory Management'
      ]
    },
    {
      name: 'Automotive',
      description: 'Next-generation automotive technology and mobility solutions',
      icon: Car,
      color: 'from-gray-400 to-slate-500',
      solutions: [
        'Connected Vehicle Platform',
        'Autonomous Driving Systems',
        'Fleet Management',
        'EV Infrastructure'
      ]
    },
    {
      name: 'Healthcare',
      description: 'AI-powered healthcare solutions for better patient outcomes',
      icon: Heart,
      color: 'from-red-400 to-pink-500',
      solutions: [
        'Medical AI Diagnostics',
        'Patient Care Automation',
        'Healthcare Analytics',
        'Telemedicine Platform'
      ]
    },
    {
      name: 'Education',
      description: 'Innovative educational technology for modern learning',
      icon: GraduationCap,
      color: 'from-green-400 to-emerald-500',
      solutions: [
        'Learning Management System',
        'AI Tutoring Platform',
        'Virtual Reality Learning',
        'Student Analytics'
      ]
    },
    {
      name: 'Financial Services',
      description: 'Secure and intelligent financial technology solutions',
      icon: Shield,
      color: 'from-yellow-400 to-orange-500',
      solutions: [
        'Fraud Detection AI',
        'Risk Management',
        'Trading Algorithms',
        'Regulatory Compliance'
      ]
    }
  ];

  const technologySolutions = [
    {
      name: 'AI & Machine Learning',
      description: 'Comprehensive AI solutions for business automation and intelligence',
      icon: Brain,
      color: 'from-purple-400 to-pink-500',
      features: [
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Automated Decision Making'
      ]
    },
    {
      name: 'Quantum Computing',
      description: 'Quantum solutions for complex optimization and simulation problems',
      icon: Zap,
      color: 'from-cyan-400 to-blue-500',
      features: [
        'Quantum Optimization',
        'Quantum Machine Learning',
        'Quantum Cryptography',
        'Quantum Simulation'
      ]
    },
    {
      name: 'Cloud & DevOps',
      description: 'Modern cloud infrastructure and development operations',
      icon: Cloud,
      color: 'from-green-400 to-emerald-500',
      features: [
        'Multi-Cloud Management',
        'Container Orchestration',
        'CI/CD Automation',
        'Infrastructure as Code'
      ]
    },
    {
      name: 'Cybersecurity',
      description: 'Advanced security solutions for modern threat landscapes',
      icon: Shield,
      color: 'from-red-400 to-pink-500',
      features: [
        'Zero-Trust Security',
        'Threat Intelligence',
        'Incident Response',
        'Compliance Management'
      ]
    }
  ];

  const useCaseSolutions = [
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation solutions for modern businesses',
      icon: Rocket,
      color: 'from-purple-400 to-pink-500',
      benefits: [
        'Increased operational efficiency',
        'Improved customer experience',
        'Reduced operational costs',
        'Enhanced data insights'
      ]
    },
    {
      title: 'Process Automation',
      description: 'Intelligent automation solutions for repetitive business processes',
      icon: Zap,
      color: 'from-cyan-400 to-blue-500',
      benefits: [
        'Faster process execution',
        'Reduced human error',
        '24/7 operation capability',
        'Scalable automation'
      ]
    },
    {
      title: 'Data Analytics',
      description: 'Comprehensive data analytics and business intelligence solutions',
      icon: BarChart3,
      color: 'from-green-400 to-emerald-500',
      benefits: [
        'Real-time insights',
        'Predictive analytics',
        'Data-driven decisions',
        'Performance optimization'
      ]
    },
    {
      title: 'Customer Experience',
      description: 'AI-powered customer experience and engagement solutions',
      icon: Users,
      color: 'from-orange-400 to-red-500',
      benefits: [
        'Personalized experiences',
        'Improved satisfaction',
        'Increased retention',
        'Better engagement'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's comprehensive technology solutions for various industries including AI, quantum computing, cloud, and cybersecurity." />
        <meta property="og:title" content="Solutions - Zion Tech Group" />
        <meta property="og:description" content="Discover Zion Tech Group's comprehensive technology solutions for various industries including AI, quantum computing, cloud, and cybersecurity." />
        <link rel="canonical" href="https://ziontechgroup.com/solutions" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent"
            >
              Technology Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 max-w-4xl mx-auto mb-8"
            >
              Comprehensive technology solutions designed to transform your business operations, 
              drive innovation, and deliver measurable results across all industries.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                Get Started
              </a>
              <a href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50">
                View Case Studies
              </a>
            </motion.div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Industry Solutions
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Tailored technology solutions designed specifically for your industry's unique challenges and opportunities.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white text-center">{industry.name}</h3>
                  <p className="text-white/70 mb-4 text-center">{industry.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Solutions:</h4>
                    <ul className="space-y-1">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="text-sm text-white/70 flex items-center">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <a href="/contact" className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50">
                      Learn More
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Technology Solutions
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Cutting-edge technology solutions that power modern businesses and drive innovation.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {technologySolutions.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mr-4`}>
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{tech.name}</h3>
                      <p className="text-white/70">{tech.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {tech.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-white/70">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <a href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                      Explore Solution
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Case Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Use Case Solutions
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Proven solutions for common business challenges and opportunities.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCaseSolutions.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center mr-4`}>
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                      <p className="text-white/70">{useCase.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-white/70 flex items-center">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <a href="/contact" className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50">
                      Get Solution
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Let us help you implement the right technology solutions to achieve your business goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  Start Your Journey
                </a>
                <a href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50">
                  View Success Stories
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
=======
import Link from 'next/link';

export default function SolutionsPage() {
	return (
		<>
			<Head>
				<title>Industry Solutions | Zion Tech Group - Tailored Technology Solutions</title>
				<meta name="description" content="Discover Zion Tech Group's industry-specific technology solutions. From healthcare to finance, manufacturing to retail, we deliver tailored solutions that drive business transformation." />
				<link rel="canonical" href="https://ziontechgroup.com/solutions" />
			</Head>
			<main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<div className="container mx-auto px-6 py-16">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
							Industry Solutions
						</h1>
						<p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
							We deliver tailored technology solutions designed specifically for your industry. Our deep understanding of sector-specific challenges enables us to create solutions that drive real business transformation.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
								Get Your Solution
							</Link>
							<Link href="/services" className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
								Our Services
							</Link>
						</div>
					</section>

					{/* Featured Solutions */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Featured Industry Solutions</h2>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-200">
								<div className="mb-4">
									<span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full mb-2">Healthcare</span>
									<h3 className="text-2xl font-semibold mb-3 text-cyan-400">AI-Powered Healthcare Solutions</h3>
								</div>
								<p className="text-white/70 mb-4">
									Transform patient care with AI-driven diagnostics, predictive analytics, and automated healthcare workflows that improve outcomes and reduce costs.
								</p>
								<div className="grid grid-cols-2 gap-4 mb-4">
									<div className="text-center">
										<div className="text-2xl font-bold text-cyan-400">60%</div>
										<div className="text-sm text-white/60">Faster Diagnosis</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-fuchsia-400">40%</div>
										<div className="text-sm text-white/60">Cost Reduction</div>
									</div>
								</div>
								<Link href="/solutions/healthcare" className="text-cyan-400 hover:text-cyan-300 transition-colors">
									Explore Healthcare Solutions →
								</Link>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-fuchsia-400/50 transition-all duration-200">
								<div className="mb-4">
									<span className="inline-block px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full mb-2">Finance</span>
									<h3 className="text-2xl font-semibold mb-3 text-fuchsia-400">Financial Technology Innovation</h3>
								</div>
								<p className="text-white/70 mb-4">
									Revolutionize financial services with blockchain, AI-powered fraud detection, and automated compliance solutions that enhance security and efficiency.
								</p>
								<div className="grid grid-cols-2 gap-4 mb-4">
									<div className="text-center">
										<div className="text-2xl font-bold text-fuchsia-400">99.9%</div>
										<div className="text-sm text-white/60">Fraud Detection</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-purple-400">70%</div>
										<div className="text-sm text-white/60">Faster Processing</div>
									</div>
								</div>
								<Link href="/solutions/finance" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
									Explore Finance Solutions →
								</Link>
							</div>
						</div>
					</section>

					{/* Industry Solutions Grid */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Industry Solutions</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<Link href="/solutions/healthcare" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											🏥
										</div>
										<div>
											<h3 className="text-xl font-semibold text-cyan-400">Healthcare</h3>
											<p className="text-fuchsia-400 text-sm">AI Diagnostics & Patient Care</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										AI-powered diagnostics, patient monitoring, healthcare analytics, and automated workflows for improved patient outcomes.
									</p>
								</div>
							</Link>

							<Link href="/solutions/finance" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-fuchsia-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											💳
										</div>
										<div>
											<h3 className="text-xl font-semibold text-fuchsia-400">Finance</h3>
											<p className="text-purple-400 text-sm">FinTech & Banking Solutions</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										Blockchain solutions, fraud detection, automated compliance, and digital banking platforms for modern financial services.
									</p>
								</div>
							</Link>

							<Link href="/solutions/manufacturing" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-green-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											🏭
										</div>
										<div>
											<h3 className="text-xl font-semibold text-green-400">Manufacturing</h3>
											<p className="text-emerald-400 text-sm">Industry 4.0 & Smart Factory</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										IoT integration, predictive maintenance, quality control automation, and smart factory solutions for Industry 4.0.
									</p>
								</div>
							</Link>

							<Link href="/solutions/retail" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											🛍️
										</div>
										<div>
											<h3 className="text-xl font-semibold text-blue-400">Retail</h3>
											<p className="text-cyan-400 text-sm">E-commerce & Omnichannel</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										Omnichannel platforms, customer analytics, inventory optimization, and personalized shopping experiences.
									</p>
								</div>
							</Link>

							<Link href="/solutions/education" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											🎓
										</div>
										<div>
											<h3 className="text-xl font-semibold text-yellow-400">Education</h3>
											<p className="text-orange-400 text-sm">EdTech & Learning Platforms</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										AI-powered learning analytics, virtual classrooms, adaptive learning systems, and educational content management.
									</p>
								</div>
							</Link>

							<Link href="/solutions/government" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											🏛️
										</div>
										<div>
											<h3 className="text-xl font-semibold text-purple-400">Government</h3>
											<p className="text-indigo-400 text-sm">Digital Transformation</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										Digital government services, citizen portals, automated workflows, and secure data management solutions.
									</p>
								</div>
							</Link>
						</div>
					</section>

					{/* Solution Benefits */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Why Choose Our Industry Solutions?</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🎯
								</div>
								<h3 className="text-xl font-semibold mb-3 text-cyan-400">Industry Expertise</h3>
								<p className="text-white/70">
									Deep understanding of industry-specific challenges, regulations, and best practices to deliver tailored solutions.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									⚡
								</div>
								<h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Rapid Implementation</h3>
								<p className="text-white/70">
									Proven methodologies and pre-built components enable faster deployment and quicker time to value.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🔒
								</div>
								<h3 className="text-xl font-semibold mb-3 text-green-400">Security & Compliance</h3>
								<p className="text-white/70">
									Built-in security features and compliance automation ensure your solutions meet industry standards.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									📊
								</div>
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Measurable Results</h3>
								<p className="text-white/70">
									Clear metrics and analytics to track performance and demonstrate ROI for your technology investments.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🔄
								</div>
								<h3 className="text-xl font-semibold mb-3 text-yellow-400">Scalable Architecture</h3>
								<p className="text-white/70">
									Solutions designed to grow with your business, handling increased demand and expanding requirements.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🤝
								</div>
								<h3 className="text-xl font-semibold mb-3 text-red-400">Ongoing Support</h3>
								<p className="text-white/70">
									Continuous support, updates, and optimization to ensure your solutions remain effective and up-to-date.
								</p>
							</div>
						</div>
					</section>

					{/* Implementation Process */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Our Implementation Process</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									1
								</div>
								<h3 className="text-xl font-semibold mb-3 text-cyan-400">Discovery</h3>
								<p className="text-white/70 text-sm">
									Deep dive into your industry challenges, business processes, and technology requirements.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									2
								</div>
								<h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Design</h3>
								<p className="text-white/70 text-sm">
									Create tailored solution architecture and detailed implementation roadmap.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									3
								</div>
								<h3 className="text-xl font-semibold mb-3 text-green-400">Development</h3>
								<p className="text-white/70 text-sm">
									Build and integrate your solution using industry best practices and cutting-edge technologies.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									4
								</div>
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Deploy</h3>
								<p className="text-white/70 text-sm">
									Launch your solution with comprehensive testing, training, and ongoing support.
								</p>
							</div>
						</div>
					</section>

					{/* Success Stories */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Success Stories</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="flex items-center mb-4">
									<div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
										H
									</div>
									<div>
										<div className="font-semibold text-white">Healthcare Provider</div>
										<div className="text-sm text-white/60">AI Diagnostic Platform</div>
									</div>
								</div>
								<p className="text-white/80 mb-4">
									"Zion Tech Group's AI diagnostic solution reduced our diagnosis time by 60% and improved accuracy by 25%. The platform seamlessly integrated with our existing systems."
								</p>
								<div className="text-sm text-white/60">Results: 60% faster diagnosis, 25% accuracy improvement</div>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="flex items-center mb-4">
									<div className="w-12 h-12 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
										F
									</div>
									<div>
										<div className="font-semibold text-white">Financial Institution</div>
										<div className="text-sm text-white/60">Fraud Detection System</div>
									</div>
								</div>
								<p className="text-white/80 mb-4">
									"The AI-powered fraud detection system prevented $50M in fraudulent transactions and reduced false positives by 40%. Implementation was smooth and ROI was immediate."
								</p>
								<div className="text-sm text-white/60">Results: $50M fraud prevented, 40% false positive reduction</div>
							</div>
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
						<div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-cyan-400/30 rounded-lg p-8">
							<h2 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Industry?</h2>
							<p className="text-white/80 mb-6 max-w-2xl mx-auto">
								Let's discuss how our industry-specific solutions can address your unique challenges and drive measurable business transformation.
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