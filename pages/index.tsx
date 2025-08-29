import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Users, 
  Target, 
  Award, 
  Globe, 
  Rocket, 
  Cpu, 
  Database, 
  Lock,
  CheckCircle,
  Star,
  TrendingUp,
  Code,
  BarChart3,
  Eye,
  Activity,
  Palette,
  Settings,
  Play,
  Pause,
  RefreshCw,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  ShoppingCart
} from 'lucide-react'

export default function Index() {
	const heroFeatures = [
		{
			icon: Brain,
			title: 'AI-Powered Solutions',
			description: 'Advanced machine learning and artificial intelligence for business transformation',
			href: '/services/ai-business-intelligence',
			color: 'from-blue-500 to-purple-600'
		},
		{
			icon: Shield,
			title: 'Cybersecurity Platform',
			description: 'Enterprise-grade security with AI threat detection and zero-trust architecture',
			href: '/services/ai-cybersecurity-platform',
			color: 'from-red-500 to-orange-600'
		},
		{
			icon: Rocket,
			title: 'Micro SAAS Platform',
			description: 'Build and launch micro SAAS applications in weeks with our comprehensive platform',
			href: '/services/micro-saas-platform',
			color: 'from-purple-500 to-indigo-600'
		}
	]

	const services = [
		{
			category: 'AI & Machine Learning',
			items: [
				{ name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Predictive analytics and business insights', price: 'From $2,500/month' },
				{ name: 'AI Content Creation Suite', href: '/services/ai-content-creation-suite', description: 'Automated content generation and marketing', price: 'From $1,800/month' },
				{ name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'Intelligent sales automation and lead scoring', price: 'From $2,200/month' },
				{ name: 'AI Customer Support', href: '/services/ai-customer-support-automation', description: '24/7 automated customer service', price: 'From $1,500/month' }
			]
		},
		{
			category: 'Cybersecurity & Security',
			items: [
				{ name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', description: 'Advanced threat detection and response', price: 'From $3,500/month' },
				{ name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', description: 'Secure remote access and network security', price: 'From $2,800/month' },
				{ name: 'Security Headers & CSP', href: '/services/security-headers-csp', description: 'Web application security hardening', price: 'From $1,200/month' },
				{ name: 'DSR Portal', href: '/services/dsr-portal', description: 'Data subject rights management', price: 'From $1,500/month' }
			]
		},
		{
			category: 'Development & Platforms',
			items: [
				{ name: 'Micro SAAS Platform', href: '/services/micro-saas-platform', description: 'Rapid application development platform', price: 'From $1,500/month' },
				{ name: 'Cloud DevOps Services', href: '/services/cloud-devops', description: 'Infrastructure automation and management', price: 'From $3,000/month' },
				{ name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise infrastructure solutions', price: 'From $4,500/month' },
				{ name: 'FinOps Optimization', href: '/services/cloud-finops-optimizer', description: 'Cloud cost optimization and management', price: 'From $2,500/month' }
			]
		}
	]

	const industries = [
		{
			name: 'Financial Services',
			description: 'AI-powered risk management, fraud detection, and compliance solutions',
			icon: DollarSign,
			href: '/solutions/financial'
		},
		{
			name: 'Healthcare',
			description: 'Patient data security, AI diagnostics, and operational efficiency',
			icon: Activity,
			href: '/solutions/healthcare'
		},
		{
			name: 'Manufacturing',
			description: 'IoT integration, predictive maintenance, and supply chain optimization',
			icon: Cpu,
			href: '/solutions/manufacturing'
		},
		{
			name: 'Retail & E-commerce',
			description: 'Customer analytics, inventory management, and personalized experiences',
			icon: ShoppingCart,
			href: '/solutions/retail'
		}
	]

	const stats = [
		{ number: '500+', label: 'Enterprise Clients' },
		{ number: '99.9%', label: 'Uptime Guarantee' },
		{ number: '24/7', label: 'Expert Support' },
		{ number: '50+', label: 'AI Services' }
	]

	const testimonials = [
		{
			quote: "Zion Tech Group transformed our business with their AI Business Intelligence platform. We're now making data-driven decisions that have increased our revenue by 35%.",
			author: "Sarah Johnson",
			position: "CTO, TechCorp Solutions",
			company: "TechCorp Solutions"
		},
		{
			quote: "Their cybersecurity platform is game-changing. We've reduced security incidents by 90% and achieved SOC 2 compliance in record time.",
			author: "Michael Chen",
			position: "CISO, SecureBank",
			company: "SecureBank"
		},
		{
			quote: "We built and launched our micro SAAS in just 6 weeks using their platform. The speed and quality exceeded our expectations.",
			quote: "We built and launched our micro SAAS in just 6 weeks using their platform. The speed and quality exceeded our expectations.",
			author: "Emily Rodriguez",
			position: "Founder, StartupFlow",
			company: "StartupFlow"
		}
	]

	return (
		<>
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 sm:py-32 overflow-hidden">
				{/* Background Elements */}
				<div className="absolute inset-0 bg-black/40"></div>
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden">
					<div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
					<div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
				</div>

				<div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-4xl text-center">
						<div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm mb-8">
							<Zap className="w-4 h-4 text-blue-300" />
							<span>Leading Technology Solutions Provider</span>
						</div>
						
						<h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
							Building the Future of
							<span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
								Business Technology
							</span>
						</h1>
						
						<p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
							Zion Tech Group delivers cutting-edge AI, cybersecurity, and micro SAAS solutions that transform how businesses operate and compete in the digital economy.
						</p>
						
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
							<Link
								to="/services"
								className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
							>
								Explore Our Services
								<ArrowRight className="w-5 h-5" />
							</Link>
							<Link
								to="/contact"
								className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
							>
								Get in Touch
							</Link>
						</div>

						{/* Hero Features */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
							{heroFeatures.map((feature, index) => (
								<div key={index} className="group">
									<Link to={feature.href} className="block">
										<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
											<div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
												<feature.icon className="w-8 h-8 text-white" />
											</div>
											<h3 className="text-lg font-semibold text-white mb-2 text-center">{feature.title}</h3>
											<p className="text-blue-100 text-sm text-center leading-relaxed">{feature.description}</p>
										</div>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{stats.map((stat, index) => (
							<div key={index} className="text-center">
								<div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
								<div className="text-gray-600">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
							Comprehensive Technology Services
						</h2>
						<p className="text-xl text-gray-600 leading-relaxed">
							From AI-powered business intelligence to enterprise cybersecurity, we provide the tools and expertise 
							to accelerate your digital transformation journey.
						</p>
					</div>

					<div className="space-y-16">
						{services.map((serviceCategory, categoryIndex) => (
							<div key={categoryIndex}>
								<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
									{serviceCategory.category}
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
									{serviceCategory.items.map((service, serviceIndex) => (
										<div key={serviceIndex} className="group">
											<Link to={service.href} className="block">
												<div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
													<h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
														{service.name}
													</h4>
													<p className="text-gray-600 text-sm mb-4 leading-relaxed">
														{service.description}
													</p>
													<div className="flex items-center justify-between">
														<span className="text-blue-600 font-semibold text-sm">{service.price}</span>
														<ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
													</div>
												</div>
											</Link>
										</div>
									))}
								</div>
							</div>
						))}
					</div>

					<div className="text-center mt-16">
						<Link
							to="/services"
							className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
						>
							View All Services
							<ArrowRight className="w-5 h-5" />
						</Link>
					</div>
				</div>
			</section>

			{/* Industries Section */}
			<section className="py-24 sm:py-32 bg-white">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
							Industry Solutions
						</h2>
						<p className="text-xl text-gray-600 leading-relaxed">
							We specialize in delivering tailored technology solutions for specific industries, 
							understanding the unique challenges and compliance requirements of each sector.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{industries.map((industry, index) => (
							<div key={index} className="group">
								<Link to={industry.href} className="block">
									<div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 group-hover:scale-105">
										<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
											<industry.icon className="w-8 h-8 text-white" />
										</div>
										<h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.name}</h3>
										<p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
										<div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
											Learn More <ArrowRight className="ml-2 w-4 h-4" />
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
							What Our Clients Say
						</h2>
						<p className="text-xl text-gray-600 leading-relaxed">
							Discover how we've helped businesses across industries achieve their technology goals 
							and drive measurable business outcomes.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{testimonials.map((testimonial, index) => (
							<div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
								<div className="flex items-center gap-1 mb-4">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
									))}
								</div>
								<blockquote className="text-gray-700 mb-6 italic leading-relaxed">
									"{testimonial.quote}"
								</blockquote>
								<div>
									<div className="font-semibold text-gray-900">{testimonial.author}</div>
									<div className="text-gray-600 text-sm">{testimonial.position}</div>
									<div className="text-blue-600 text-sm">{testimonial.company}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 sm:py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						Ready to Transform Your Business?
					</h2>
					<p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
						Let's discuss how our AI, cybersecurity, and micro SAAS solutions can help you achieve 
						your technology goals and drive business growth.
					</p>
					
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
						<Link
							to="/contact"
							className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
						>
							Get Started Today
							<ArrowRight className="w-5 h-5" />
						</Link>
						<Link
							to="/about"
							className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
						>
							Learn More
						</Link>
					</div>

					{/* Contact Info */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
						<div className="flex items-center justify-center gap-3 text-blue-100">
							<Phone className="w-5 h-5 text-blue-300" />
							<span>+1 302 464 0950</span>
						</div>
						<div className="flex items-center justify-center gap-3 text-blue-100">
							<Mail className="w-5 h-5 text-blue-300" />
							<span>kleber@ziontechgroup.com</span>
						</div>
						<div className="flex items-center justify-center gap-3 text-blue-100">
							<MapPin className="w-5 h-5 text-blue-300" />
							<span>364 E Main St STE 1008, Middletown DE 19709</span>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}