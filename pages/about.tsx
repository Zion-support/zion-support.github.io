import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import SEO from "../src/components/SEO";
import { useAnalytics } from "../src/hooks/useAnalytics";

const About = React.memo(function About(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	// Analytics tracking
	const { trackClick } = useAnalytics();

	const teamMembers = [
		{
			name: "John Smith",
			role: "CEO & Founder",
			bio: "Visionary leader with 15+ years in technology innovation.",
			image: "👨‍💼"
		},
		{
			name: "Sarah Johnson",
			role: "CTO",
			bio: "Expert in AI and machine learning with a passion for scalable solutions.",
			image: "👩‍💻"
		},
		{
			name: "Mike Chen",
			role: "Lead Developer",
			bio: "Full-stack developer specializing in modern web technologies.",
			image: "👨‍🔬"
		}
	];

	const values = [
		{
			title: "Innovation",
			description: "We constantly push the boundaries of what's possible with technology.",
			icon: "💡"
		},
		{
			title: "Quality",
			description: "Every solution we deliver meets the highest standards of excellence.",
			icon: "⭐"
		},
		{
			title: "Partnership",
			description: "We work closely with our clients to achieve their goals together.",
			icon: "🤝"
		}
	];

	return (
		<>
			<SEO />
			<Head>
				<title>About Us - Zion App</title>
				<meta name="description" content="Learn about Zion App's mission, values, and commitment to delivering cutting-edge technology solutions." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
				<div className="container mx-auto px-4 py-8 max-w-7xl">
					{/* Hero Section */}
					<section className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
						<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
							About Zion App
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							We're a team of passionate technologists dedicated to transforming businesses through innovative solutions and cutting-edge technology.
						</p>
					</section>

					{/* Mission Section */}
					<section className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
						<div className="bg-white rounded-2xl p-8 shadow-lg">
							<h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
							<p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
								To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We believe in the transformative power of technology and its ability to create meaningful impact in the world.
							</p>
						</div>
					</section>

					{/* Values Section */}
					<section className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
						<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{values.map((value, index) => (
								<div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
									<div className="text-4xl mb-4">{value.icon}</div>
									<h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
									<p className="text-gray-600">{value.description}</p>
								</div>
							))}
						</div>
					</section>

					{/* Team Section */}
					<section className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
						<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Team</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{teamMembers.map((member, index) => (
								<div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
									<div className="text-6xl mb-4">{member.image}</div>
									<h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
									<p className="text-blue-600 font-medium mb-3">{member.role}</p>
									<p className="text-gray-600">{member.bio}</p>
								</div>
							))}
						</div>
					</section>

					{/* CTA Section */}
					<section className={`text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
						<div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
							<p className="text-xl mb-6">Let's discuss how we can help transform your business with cutting-edge technology.</p>
							<Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
								Get Started Today
							</Link>
						</div>
					</section>
				</div>
			</div>
		</>
	);
});

export default About;