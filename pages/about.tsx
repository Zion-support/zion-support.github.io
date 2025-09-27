import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// import Navigation from '../src/components/Navigation';
// import ErrorBoundary from '../src/components/ErrorBoundary';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function About(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true)}, []);

	// Analytics tracking
	const { trackClick } = useAnalytics();

	const teamMembers = [
		{
			name: 'Sarah Johnson',
			role: 'CEO & Founder',
			expertise: 'Strategic Leadership  AI Innovation',
			image: '👩‍💼',
			description: '15+ years in technology leadership  former VP at major tech companies.'
		},
		{
			name: 'Michael Chen',
			role: 'CTO',
			expertise: 'Cloud Architecture  DevOps',
			image: '👨‍💻',
			description: 'Expert in scalable cloud solutions and modern development practices.'
		},
		{
			name: 'Emily Rodriguez',
			role: 'Head of AI Research',
			expertise: 'Machine Learning  Data Science',
			image: '👩‍🔬',
			description: 'PhD in Computer Science  leading our AI innovation initiatives.'
		},
		{
			name: 'David Kim',
			role: 'Lead Developer',
			expertise: 'Full-Stack Development  Mobile Apps',
			image: '👨‍💻',
			description: 'Full-stack expert with expertise in React  Node.js  and mobile development.'
		}
	];

	const values = [
		{
			title: 'Innovation First',
			description: 'We stay at the forefront of technology  constantly exploring new possibilities and pushing boundaries to deliver breakthrough solutions.',
			icon: '💡',
			color: 'blue'
		},
		{
			title: 'Client Success',
			description: 'Your success is our success. We work closely with clients to understand their unique challenges and deliver solutions that drive real results.',
			icon: '🎯',
			color: 'green'
		},
		{
			title: 'Quality Excellence',
			description: 'We maintain the highest standards in everything we do  from code quality to project delivery  ensuring reliable and maintainable solutions.',
			icon: '⭐',
			color: 'purple'
		},
		{
			title: 'Collaborative Approach',
			description: 'We believe in the power of collaboration  working as an extension of your team to achieve shared goals and mutual success.',
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
			<Head>
				<title>About Us - Zion App</title>
				<meta name="description" content="Learn about Zion App's mission, values, and commitment to delivering cutting-edge technology solutions." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
			<div className="container mx-auto px-4 py-8 max-w-7xl">
				<nav className="mb-8">
					<Link href="/" className="text-blue-600 hover: text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					<header className="text-center mb-16">
						<h1 className="text-5xl,
		md:text-6xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
							About Zion App
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Empowering businesses through innovative technology solutions
						</p>
					</header>

					<main>
						{/* Mission Section */}
						<section className={`mb-20 transition-all duration-700 delay-100 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<div className="bg-white rounded-3xl shadow-2xl p-8 md: p-12">
			<div className="text-center mb-12">
									<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
										Our Mission
									</h2>
									<p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
										At Zion App  we believe technology should be a catalyst for growth  not a barrier. 
										Our mission is to deliver cutting-edge solutions that transform how businesses operate  
										compete  and succeed in the digital age.
									</p>
								</div>
			<div className="grid grid-cols-1 md:grid-cols-2,
		lg:grid-cols-4 gap-8">
									{stats.map((stat ,, index) => (
			<div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
			<div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
												{stat.number}
											</div>
			<div className="text-gray-600 font-medium">
												{stat.label}
											</div>
										</div>
									))}
								</div>
							</div>
						</section>

						{/* Values Section */}
						<section className={`mb-20 transition-all duration-700 delay-200 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<div className="text-center mb-12">
								<h2 className="text-3xl md: text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
									Our Values
								</h2>
								<p className="text-xl text-gray-600 max-w-3xl mx-auto">
									The principles that guide everything we do
								</p>
							</div>
			<div className="grid grid-cols-1,
		md:grid-cols-2 gap-8">
								{values.map((value ,, index) => (
			<div key={index} className={`transform transition-all duration-700 delay-${300 + index * 100} ${
										isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
									}`}>
			<div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 h-full">
			<div className="flex items-start space-x-4">
			<div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
													value.color === 'blue' ? 'bg-blue-100' :
													value.color === 'green' ? 'bg-green-100' :
													value.color === 'purple' ? 'bg-purple-100' :
													'bg-orange-100'
												}`}>
													{value.icon}
												</div>
			<div className="flex-1">
													<h3 className="text-xl font-semibold text-gray-800 mb-3">
														{value.title}
													</h3>
													<p className="text-gray-600 leading-relaxed">
														{value.description}
													</p>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</section>

						{/* Team Section */}
						<section className={`mb-20 transition-all duration-700 delay-500 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<div className="text-center mb-12">
								<h2 className="text-3xl md: text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
									Meet Our Team
								</h2>
								<p className="text-xl text-gray-600 max-w-3xl mx-auto">
									The experts behind our innovative solutions
								</p>
							</div>
			<div className="grid grid-cols-1 md:grid-cols-2,
		lg:grid-cols-4 gap-8">
								{teamMembers.map((member ,, index) => (
			<div key={index} className={`transform transition-all duration-700 delay-${600 + index * 100} ${
										isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
									}`}>
			<div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center">
			<div className="text-6xl mb-4">{member.image}</div>
											<h3 className="text-xl font-semibold text-gray-800 mb-2">
												{member.name}
											</h3>
											<p className="text-blue-600 font-medium mb-2">
												{member.role}
											</p>
											<p className="text-sm text-gray-500 mb-3">
												{member.expertise}
											</p>
											<p className="text-gray-600 text-sm leading-relaxed">
												{member.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</section>

						{/* Expertise Section */}
						<section className={`mb-20 transition-all duration-700 delay-700 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<div className="text-center mb-12">
								<h2 className="text-3xl md: text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
									Our Expertise
								</h2>
								<p className="text-xl text-gray-600 max-w-3xl mx-auto">
									Cutting-edge technologies and methodologies we master
								</p>
							</div>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
								{[
									{,
		name: 'Artificial Intelligence', icon: '🤖' },
									{ name: 'Cloud Computing', icon: '☁️' },
									{ name: 'Web Development', icon: '💻' },
									{ name: 'Mobile Apps', icon: '📱' },
									{ name: 'Data Analytics', icon: '📊' },
									{ name: 'Cybersecurity', icon: '🔒' },
									{ name: 'DevOps', icon: '⚙️' },
									{ name: 'UI/UX Design', icon: '🎨' }
								].map((tech ,, index) => (
			<div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center">
			<div className="text-3xl mb-3">{tech.icon}</div>
										<h3 className="text-sm font-medium text-gray-800">{tech.name}</h3>
									</div>
								))}
							</div>
						</section>

						{/* CTA Section */}
						<section className={`text-center py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl mb-20 text-white relative overflow-hidden transition-all duration-1000 delay-800 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<div className="absolute inset-0 opacity-10">
			<div className="absolute inset-0" style={{
									backgroundImage: `url("data:image/svg+xml %3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
							</div>
			<div className="relative z-10">
								<h2 className="text-4xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
									Ready to Work Together?
								</h2>
								<p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 font-light leading-relaxed">
									Let&apos;s discuss how we can help transform your business with innovative technology solutions.
								</p>
			<div className="flex flex-col,
		sm:flex-row gap-6 justify-center">
					<Link href="/contact">
										<button 
											onClick={() => trackClick('get-started-button', 'cta')}
											className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform,
		hover:-translate-y-1 text-lg"
										>
											<span className="flex items-center justify-center gap-2">
												Get Started
												<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
												</svg>
											</span>
										</button>
									</Link>
									<button 
										onClick={() => trackClick('learn-more-button', 'cta')}
										className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover: bg-white hover:text-blue-600 transition-all duration-300 transform,
		hover:-translate-y-1 text-lg"
									>
										<span className="flex items-center justify-center gap-2">
											Learn More
											<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
										</span>
									</button>
								</div>
							</div>
						</section>
					</main>
				</div>
			</div>
		</>
	)}