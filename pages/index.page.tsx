import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Rocket,
  Cpu,
  Network,
  Lock,
  BarChart3,
  Users,
  Target,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Lightbulb,
  Leaf,
  Building2,
  GraduationCap,
  Heart,
  Coins,
  Car,
  Camera,
  Microscope,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function HomeIndex() {
	const serviceCategories = [
		{
			title: "AI & Machine Learning",
			icon: Brain,
			description: "Cutting-edge AI solutions with 90%+ accuracy",
			count: "25+ Services",
			href: "/services-advertising"
		},
		{
			title: "Micro SAAS Solutions",
			icon: Rocket,
			description: "Innovative software-as-a-service platforms",
			count: "32+ Services",
			href: "/services-advertising"
		},
		{
			title: "IT Infrastructure",
			icon: Cpu,
			description: "Enterprise-grade technology infrastructure",
			count: "12+ Services",
			href: "/services-advertising"
		},
		{
			title: "Cybersecurity",
			icon: Shield,
			description: "Next-generation security solutions",
			count: "15+ Services",
			href: "/services-advertising"
		},
		{
			title: "Cloud & DevOps",
			icon: Cloud,
			description: "Scalable cloud solutions and automation",
			count: "18+ Services",
			href: "/services-advertising"
		},
		{
			title: "Emerging Tech",
			icon: Lightbulb,
			description: "Quantum computing, blockchain, IoT",
			count: "20+ Services",
			href: "/services-advertising"
		}
	];

	const featuredServices = [
		{
			name: "TaskFlow Pro",
			description: "AI-powered task management with 300% ROI",
			price: "$29/month",
			category: "Productivity",
			icon: Rocket
		},
		{
			name: "AI Governance Suite",
			description: "Comprehensive AI ethics and compliance",
			price: "$450/month",
			category: "AI Governance",
			icon: Shield
		},
		{
			name: "Quantum Security Vault",
			description: "Future-proof quantum-resistant cryptography",
			price: "$399/month",
			category: "Quantum Security",
			icon: Lock
		},
		{
			name: "Smart City Hub",
			description: "IoT-powered smart city management",
			price: "$799/month",
			category: "Smart Cities",
			icon: Building2
		}
	];

	return (
		<>
			<Head>
				<title>Zion Tech Group - Revolutionary Technology Solutions</title>
				<meta name="description" content="Discover our cutting-edge portfolio of 100+ innovative technology solutions including AI, quantum computing, cybersecurity, and digital transformation services." />
				<link rel="canonical" href="https://ziontechgroup.com" />
			</Head>

			<div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
				{/* Hero Section */}
				<section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-zinc-900 via-blue-900 to-cyan-900 overflow-hidden">
					{/* Animated Background */}
					<div className="absolute inset-0 overflow-hidden">
						<div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
						<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
					</div>
					
					<div className="max-w-7xl mx-auto text-center relative z-10">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-cyan-400 bg-clip-text text-transparent">
								Revolutionary Technology Services
							</h1>
							<p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
								Discover our cutting-edge portfolio of <strong>100+ innovative technology solutions</strong> designed to transform your business. 
								From AI-powered analytics to quantum computing platforms, we're building the future today.
							</p>
							<div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-zinc-300">
								<span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
									<Zap className="w-4 h-4 text-cyan-400" />
									100+ Revolutionary Services
								</span>
								<span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
									<Star className="w-4 h-4 text-yellow-400" />
									Industry-Leading ROI
								</span>
								<span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
									<Award className="w-4 h-4 text-green-400" />
									Enterprise-Grade Quality
								</span>
							</div>
							<div className="flex flex-wrap justify-center gap-4">
								<a
									href="/services-advertising"
									className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
								>
									Explore Services
									<ArrowRight className="ml-2 w-5 h-5" />
								</a>
								<a
									href="mailto:kleber@ziontechgroup.com"
									className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zinc-900 transition-all duration-300 text-lg"
								>
									Get Started
								</a>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Service Categories */}
				<section className="py-20 px-6">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
								Comprehensive Service Portfolio
							</h2>
							<p className="text-xl text-zinc-300 max-w-3xl mx-auto">
								Explore our innovative technology solutions across multiple domains, designed to accelerate your digital transformation journey.
							</p>
						</div>
						
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{serviceCategories.map((category, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
								>
									<div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
										<category.icon className="w-8 h-8 text-white" />
									</div>
									<h3 className="text-2xl font-bold text-white mb-3 text-center">
										{category.title}
									</h3>
									<p className="text-zinc-300 text-center mb-4 leading-relaxed">
										{category.description}
									</p>
									<div className="text-center mb-6">
										<span className="inline-block bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
											{category.count}
										</span>
									</div>
									<a
										href={category.href}
										className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
									>
										Explore Services
									</a>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Featured Services */}
				<section className="py-20 px-6 bg-gradient-to-r from-zinc-800/50 to-zinc-900/50">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
								Featured Solutions
							</h2>
							<p className="text-xl text-zinc-300 max-w-3xl mx-auto">
								Discover our most innovative and high-impact technology solutions that are transforming businesses worldwide.
							</p>
						</div>
						
						<div className="grid md:grid-cols-2 gap-8">
							{featuredServices.map((service, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
								>
									<div className="flex items-center gap-4 mb-4">
										<div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
											<service.icon className="w-6 h-6 text-white" />
										</div>
										<div>
											<span className="text-sm text-blue-400 font-medium">{service.category}</span>
											<h3 className="text-xl font-bold text-white">{service.name}</h3>
										</div>
									</div>
									<p className="text-zinc-300 mb-4 leading-relaxed">
										{service.description}
									</p>
									<div className="flex items-center justify-between">
										<span className="text-2xl font-bold text-green-400">{service.price}</span>
										<a
											href="/services-advertising"
											className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
										>
											Learn More
											<ArrowRight className="ml-2 w-4 h-4" />
										</a>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section className="py-20 px-6">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
							Ready to Transform Your Business?
						</h2>
						<p className="text-xl text-zinc-300 mb-12 leading-relaxed">
							Let's discuss how our innovative technology solutions can accelerate your digital transformation 
							and drive sustainable growth.
						</p>
						
						<div className="grid md:grid-cols-3 gap-8 mb-12">
							<div className="text-center">
								<Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
								<h3 className="text-lg font-semibold mb-2 text-white">Call Us</h3>
								<p className="text-zinc-300">
									<a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
										+1 302 464 0950
									</a>
								</p>
							</div>
							
							<div className="text-center">
								<Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
								<h3 className="text-lg font-semibold mb-2 text-white">Email Us</h3>
								<p className="text-zinc-300">
									<a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
										kleber@ziontechgroup.com
									</a>
								</p>
							</div>
							
							<div className="text-center">
								<MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
								<h3 className="text-lg font-semibold mb-2 text-white">Visit Us</h3>
								<p className="text-zinc-300">
									364 E Main St STE 1008<br />
									Middletown DE 19709
								</p>
							</div>
						</div>

						<div className="flex flex-wrap justify-center gap-4">
							<a
								href="mailto:kleber@ziontechgroup.com?subject=Technology Consultation Request"
								className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
							>
								Request Consultation
							</a>
							<a
								href="/services-advertising"
								className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zinc-900 transition-all duration-300 text-lg"
							>
								View All Services
							</a>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}