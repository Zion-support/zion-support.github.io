import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function About(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	// Analytics tracking
	const { trackClick } = useAnalytics();

	const teamMembers = [
		{
			name: 'John Smith',
			role: 'CEO & Founder',
			description: 'Visionary leader with 15+ years in tech innovation',
			image: '/images/team/john.jpg'
		},
		{
			name: 'Sarah Johnson',
			role: 'CTO',
			description: 'Technical architect specializing in scalable solutions',
			image: '/images/team/sarah.jpg'
		},
		{
			name: 'Mike Chen',
			role: 'Lead Developer',
			description: 'Full-stack expert passionate about modern frameworks',
			image: '/images/team/mike.jpg'
		}
	];

	const values = [
		{
			title: 'Innovation First',
			description: 'We stay at the forefront of technology, constantly exploring new possibilities and pushing boundaries.',
			icon: '🚀',
			color: 'blue'
		},
		{
			title: 'Client Success',
			description: 'Your success is our success. We measure our achievements by the value we deliver to our clients.',
			icon: '🎯',
			color: 'green'
		},
		{
			title: 'Collaborative Approach',
			description: 'We believe in the power of collaboration, working as an extension of your team to achieve shared goals.',
			icon: '🤝',
			color: 'orange'
		}
	];

	const stats = [
		{ number: '100+', label: 'Projects Completed' },
		{ number: '50+', label: 'Happy Clients' },
		{ number: '10+', label: 'Years Experience' },
		{ number: '24/7', label: 'Support Available' }
	];

	return (
		<>
			<SEO />
			<Head>
				<title>About Us - Zion App</title>
				<meta name="description" content="Learn about Zion App's mission, values, and commitment to delivering cutting-edge technology solutions." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
				<div className="container mx-auto px-4 py-8 max-w-7xl">
					<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					<header className="text-center mb-16">
						<h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
							About Zion App
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Empowering businesses through innovative technology solutions
						</p>
					</header>

					{/* Stats Section */}
					<section className="mb-20">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
							{stats.map((stat, index) => (
								<div key={index} className="text-center">
									<div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
									<div className="text-gray-600">{stat.label}</div>
								</div>
							))}
						</div>
					</section>

					{/* Mission Section */}
					<section className="mb-20">
						<div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
								Our Mission
							</h2>
							<p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
								At Zion App, we're dedicated to transforming businesses through cutting-edge technology solutions. 
								We believe that every organization deserves access to world-class digital tools that drive growth, 
								efficiency, and innovation.
							</p>
						</div>
					</section>

					{/* Values Section */}
					<section className="mb-20">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
							Our Values
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{values.map((value, index) => (
								<div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
									<div className="text-4xl mb-4">{value.icon}</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
									<p className="text-gray-600 leading-relaxed">{value.description}</p>
								</div>
							))}
						</div>
					</section>

					{/* Team Section */}
					<section className="mb-20">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
							Meet Our Team
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{teamMembers.map((member, index) => (
								<div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
									<div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
										<span className="text-2xl font-bold text-gray-600">
											{member.name.split(' ').map(n => n[0]).join('')}
										</span>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
									<p className="text-blue-600 font-medium mb-3">{member.role}</p>
									<p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
								</div>
							))}
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
						<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								Ready to Transform Your Business?
							</h2>
							<p className="text-xl mb-8 opacity-90">
								Let's discuss how we can help you achieve your goals with innovative technology solutions.
							</p>
							<Link 
								href="/contact" 
								className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
								onClick={() => trackClick('about-cta', 'conversion')}
							>
								Get Started Today
							</Link>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}