import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Shield, Cloud, Brain, Users, CheckCircle, Star, Clock } from 'lucide-react';


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
  {/* Removed stray closing bracket */}

	const stats = [
		{ number: '500+', label: 'Projects Delivered', icon: CheckCircle },
		{ number: '50+', label: 'Enterprise Clients', icon: Users },
		{ number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
		{ number: '24/7', label: 'Support Available', icon: Clock }
  {/* Removed stray closing bracket */}

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
  {/* Removed stray closing bracket */}

	return (
  {/* Empty JSX fragment */}
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

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'kleber@ziontechgroup.com',
    href: 'mailto:kleber@ziontechgroup.com'
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+1 302 464 0950',
    href: 'tel:+13024640950'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: '364 E Main St STE 1008, Middletown DE 19709',
    href: '#'
  }
];

export default function HomePage() {
  return (
    <Layout
      title="Zion Tech Group - AI, IT, and Micro SaaS Solutions"
      description="Leading provider of AI, IT services, and Micro SaaS solutions. Transform your business with cutting-edge technology."
      keywords="AI services, IT services, Micro SaaS, technology solutions, business transformation"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your Business with Technology
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We deliver cutting-edge AI, IT, and Micro SaaS solutions that drive growth, 
                efficiency, and innovation for businesses of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/about"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
<<<<<<< HEAD
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
=======
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
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
		</>
  {/* Removed stray closing parenthesis */}
  {/* Removed stray closing brace */}