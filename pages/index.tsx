import React from 'react.ts'
import { Link  } from 'react-router-dom.ts'
import { ArrowRight, Zap, Shield, Cloud, Brain, Users, Target, Award, Globe, Rocket, Cpu, Database, Lock  } from 'lucide-react'


export default function Index(...args[]):  {
	const features = [
		{
			icon: Brain,
			title: 'AI Autonomous Systems',
			description: 'Multi-agent workflows, RAG systems, and intelligent automation platforms that learn and adapt.',
			href: '/services#ai',
			color: 'from-blue-500 to-cyan-500'
		},
		{
			icon: Cloud,
			title: 'Cloud Platforms',
			description: 'Serverless infrastructure, Kubernetes orchestration, and DevOps automation for scalable solutions.',
			href: '/services#cloud',
			color: 'from-purple-500 to-pink-500'
		},
		{
			icon: Shield,
			title: 'Cybersecurity',
			description: 'Zero-trust architecture, compliance frameworks, and advanced threat intelligence systems.',
			href: '/services#cybersecurity',
			color: 'from-green-500 to-emerald-500'
		}
	]

	const stats = [
		{ number: '500+', label: 'Projects Delivered', icon: CheckCircle },
		{ number: '50+', label: 'Enterprise Clients', icon: Users },
		{ number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
		{ number: '24/7', label: 'Support Available', icon: Clock }
	]

	const testimonials = [
		{
			quote: "Zion Tech Group transformed our digital infrastructure, reducing costs by 40% while improving performance.",
			author: "Sarah Johnson",
			position: "CTO, TechCorp Inc.",
			rating: 5
		},
		{
			quote: "Their AI solutions have revolutionized our customer service operations. Highly recommended!",
			author: "Michael Chen",
			position: "VP Engineering, InnovateTech",
			rating: 5
		}
	]

	return (
		<div>
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 sm:py-32 overflow-hidden">
				{/* Animated Background Elements */}
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,212,255,0.1),transparent_50%)]" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
				
				<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-4xl text-center">
						<div className="mb-8">
							<div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
								<Zap className="w-4 h-4 mr-2" />
								Leading Technology Innovation Since 2020
							</div>
						</div>
						
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
							Building the Future of
							<span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
								Business Technology
							</span>
						</h1>
						
						<p className="mt-8 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
							Zion Tech Group delivers cutting-edge AI, cloud, and cybersecurity solutions that transform how businesses operate and compete in the digital economy.
						</p>
						
						<div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
							<Link
								to="/services"
								className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
							>
								<span className="relative z-10">Explore Our Services</span>
								<div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</Link>
							
							<Link
								to="/contact"
								className="group px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300"
							>
								Get in Touch 
								<ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-16 bg-white">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
						{stats.map((stat, index) => (
							<div key={index} className="text-center group">
								<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100 mb-4 group-hover:scale-110 transition-transform duration-300">
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
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Why Choose Zion Tech Group?
						</h2>
						<p className="mt-6 text-lg text-gray-600">
							We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
						</p>
					</div>
					<div className="grid gap-8 lg: grid-cols-3">
						{features.map((feature)  => (
							<div key={feature.title} className="text-center">
								<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
									<feature.icon className="h-8 w-8 text-blue-600" />
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 sm:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to Transform Your Business?
						</h2>
						<p className="mt-6 text-xl text-blue-100">
							Let's discuss how our AI, cloud, and cybersecurity solutions can help you achieve your technology goals.
						</p>
						<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
							<Link
								to="/contact"
								className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg"
							>
								Get Started Today
							</Link>
							<Link
								to="/about"
								className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
							>
								Learn More About Us
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}