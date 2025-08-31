import React from 'react'
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
import Link from 'next/link'
import { ArrowRight, Zap, Shield, Cloud, Brain, Users, Target, Award, Globe, Rocket, Cpu, Database, Lock } from 'lucide-react'



export default function Index(...args[]):  {
	const features = [
		{
			icon: Brain,
			title: 'AI & Machine Learning',
			description: 'Multi-agent workflows, RAG systems, and intelligent automation platforms.',
			href: '/services#ai',
			color: 'from-purple-600 to-indigo-700'
		},
		{
			icon: Cloud,
			title: 'Cloud & DevOps',
			description: 'Serverless infrastructure, Kubernetes orchestration, and DevOps automation.',
			href: '/services#cloud',
			color: 'from-cyan-600 to-blue-700'
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
			href: '/services#cybersecurity',
			color: 'from-red-600 to-orange-700'
		},
		{
			icon: BarChart3,
			title: 'Data & Analytics',
			description: 'Real-time analytics, data warehousing, and business intelligence.',
			href: '/services#data',
			color: 'from-emerald-600 to-teal-700'
		},
		{
			icon: Database,
			title: 'Enterprise Solutions',
			description: 'ERP systems, CRM platforms, and workflow automation.',
			href: '/services#enterprise',
			color: 'from-blue-600 to-indigo-700'
		},
		{
			icon: Rocket,
			title: 'Emerging Technologies',
			description: 'Quantum computing, blockchain, and IoT platforms.',
			href: '/services#emerging',
			color: 'from-pink-600 to-rose-700'
		}
	]

	const stats = [
		{ number: '500+', label: 'Active Customers', icon: Users },
		{ number: '4.7/5', label: 'Customer Rating', icon: Star },
		{ number: '99.9%', label: 'Uptime SLA', icon: TrendingUp },
		{ number: '50+', label: 'Services Offered', icon: Zap }
	]

	const benefits = [
		'Cutting-edge AI and machine learning solutions',
		'Enterprise-grade security and compliance',
		'Scalable cloud infrastructure and DevOps',
		'Real-time data analytics and insights',
		'Quantum computing and emerging technologies',
		'24/7 expert support and consultation'
	]

	return (
		<>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
							Building the Future of Business Technology
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600 lg:text-xl">
							Zion Tech Group delivers cutting-edge AI, cloud, and cybersecurity solutions that transform how businesses operate and compete in the digital economy.
						</p>
						<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
							<Link
								href="/services"
								className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"

								className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
							>
								<span className="relative z-10">Explore Our Services</span>
								<div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</Link>
							
							<Link
								className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
							>
								Get in Touch
								href="/contact"
								className="text-sm font-semibold leading-6 text-gray-900"
							>
								Get in Touch 
								<ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
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
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
						{stats.map((stat) => (
							<div key={stat.label} className="text-center">
								<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
									<stat.icon className="h-8 w-8 text-blue-600" />
								</div>
								<div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
								<div className="text-gray-600">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Zion Tech Group?</h2>
						<p className="mt-6 text-lg text-gray-600">
							We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.title} className="text-center group">
								<div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
									<feature.icon className="h-8 w-8 text-white" />
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

			{/* Benefits Section */}
			<section className="py-24 sm:py-32 bg-white">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
								Transform Your Business with Advanced Technology
							</h2>
							<p className="text-lg text-gray-600 mb-8">
								Our comprehensive suite of services empowers businesses to innovate, scale, and compete in the digital age.
							</p>
							<div className="space-y-4">
								{benefits.map((benefit, index) => (
									<div key={index} className="flex items-start space-x-3">
										<CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
										<span className="text-gray-700">{benefit}</span>
									</div>
								))}
							</div>
							<div className="mt-8">
								<Link
									to="/services"
									className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
								>
									View All Services
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</div>
						<div className="relative">
							<div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
								<div className="grid grid-cols-2 gap-4 h-full">
									<div className="space-y-4">
										<div className="h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
											<Brain className="h-8 w-8 text-purple-600" />
										</div>
										<div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
											<Cloud className="h-6 w-6 text-blue-600" />
										</div>
									</div>
									<div className="space-y-4 pt-8">
										<div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
											<Shield className="h-6 w-6 text-red-600" />
										</div>
										<div className="h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
											<BarChart3 className="h-8 w-8 text-green-600" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 sm:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Ready to Transform Your Business?</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Let's discuss how our AI, cloud, and cybersecurity solutions can help you achieve your technology goals.
						</p>
						<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
							<Link
								href="/contact"
								className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"

								Get Started Today
							</Link>
							<Link
								href="/about"
								className="text-sm font-semibold leading-6 text-gray-900"
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
}}}
							>
								Learn More About Us
							</Link>
						</div>;
					</div>;
				</div>;
			</section>;
		</>;
	);
};
