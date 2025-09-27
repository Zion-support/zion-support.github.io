import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from "react";
  const { trackClick } = useAnalytics();

	const teamMembers = [
		{name: 'Sarah Johnson',
			role: 'CEO & Founder',
			expertise: 'Strategic Leadership, AI Innovation',
			image: '👩‍💼',
			description: '15+ years in technology leadership, former VP at major tech companies.'
		},
		{name: 'Michael Chen',
			role: 'CTO',
			expertise: 'Cloud Architecture, DevOps',
			image: '👨‍💻',
			description: 'Expert in scalable cloud solutions and modern development practices.'
		},
		{name: 'Emily Rodriguez',
			role: 'Lead Designer',
			expertise: 'UX/UI Design, Product Strategy',
			image: '👩‍🎨',
			description: 'Award-winning designer with expertise in user-centered design principles.'
		},
		{name: 'David Kim',
			role: 'Senior Developer',
			expertise: 'Full-Stack Development, AI/ML',
			image: '👨‍💻',
			description: 'Full-stack developer specializing in AI integration and modern web technologies.'
		}
	];

	const values = [
		{title: 'Innovation First',
			description: 'We stay at the forefront of technology, constantly exploring new possibilities and pushing the boundaries of what\'s possible.', icon: '🚀', color: 'blue'
		},
		{title: 'Client Success',
			description: 'Your success is our success. We\'re committed to delivering solutions that drive real business value and growth.', icon: '🎯', color: 'green'
		},
		{title: 'Quality Excellence',
			description: 'We maintain the highest standards in everything we do, from code quality to user experience.', icon: '⭐', color: 'yellow'
		},
		{title: 'Transparent Communication',
			description: 'Clear, honest communication is the foundation of our relationships with clients and team members.', icon: '💬', color: 'purple'
		},
		{title: 'Continuous Learning',
			description: "We embrace change and continuously learn, adapt, and improve to stay ahead in the fast-paced tech world.",
			icon: '📚',
			color: 'indigo'
		},
		{title: 'Collaborative Approach',
			description: 'We believe in the power of collaboration, working as an extension of your team to achieve shared goals and mutual success.',
			icon: '🤝',
			color: 'orange'
		}
	];

	const stats = [

      return (


      <SEO />
			<Head>
        <title>About Us - Zion App</title>
        <meta name="description" content="Learn about Zion App's mission, values, and commitment to delivering cutting-edge technology solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
			<div className="container mx-auto px-4 py-8 max-w-7 xl">
				<nav className="mb-8">
					<Link href="/" className="text-blue-600 hover: text-blue-800 font-medium transition-colors">
              ← Back to Home
            </Link>
          </nav>


		{number: '100+'label: 'Projects Completed' },
		{number: '50+'label: 'Happy Clients' },
		{number: '10+'label: 'Years Experience' },
		{number: '24/7'label: 'Support Available' }
	];

	return (
		<>
			<SEO />
			<Head>
				<title>About Us - Zion App</title>
				<meta name="description" content="Learn about Zion App's missionvaluesand commitment to delivering cutting-edge technology solutions." />
				<meta name="viewport" content="width=device-widthinitial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
				<div className="container mx-auto px-4 py-8 max-w-7 xl">
					<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

          <header className="text-center mb-16">
            <h1 className="text-5 xl, md:text-6 xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              About Zion App
            </h1>
            <p className="text-xl text-gray-600 max-w-3 xl mx-auto leading-relaxed">
              Empowering businesses through innovative technology solutions
            </p>
          </header>


			<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat,, index) => (
			<div key={index} className="text-center">
			<div className="text-4 xl font-bold text-blue-600 mb-2">{stat.number}</div>
			<div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Mission Section */}
          <section className="mb-20">
			<div className="bg-white rounded-2 xl shadow-xl p-8 md: p-12">
              <h2 className="text-3 xl, md:text-4 xl font-bold text-gray-900 mb-6 text-center">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 text-center max-w-4 xl mx-auto leading-relaxed">
                At Zion App, we're dedicated to transforming businesses through cutting-edge technology solutions. 
                We believe that every organization deserves access to world-class digital tools that drive growth, 
                efficiency, and innovation.
              </p>
            </div>
          </section>


					{/* Stats Section */}
					<section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
						{stats.map((statindex) => (
							<div key={index} className="text-center">
								<div className="text-3 xl font-bold text-blue-600 mb-2">{stat.number}</div>
								<div className="text-gray-600">{stat.label}</div>							</div>
						</div>
					</section>


					{/* Values Section */}
					<section className="mb-16">
						<h2 className="text-3 xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{values.map((valueindex) => (
								<div key={index} className="bg-white rounded-lg p-6 shadow-lg">
									<div className="text-4 xl mb-4">{value.icon}</div>									<h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
									<p className="text-gray-600 leading-relaxed">{value.description}</p>
								</div>
							))}
						</div>
					</section>
						<h2 className="text-3 xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
							{teamMembers.map((member,, index) => (
			<div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
			<div className="text-6 xl mb-4">{member.image}</div>

						<div className="grid md:grid-cols-3 gap-8">							{teamMembers.map((memberindex) => (
								<div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
									<div className="text-6 xl mb-4">{member.image}</div>

									<h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
									<p className="text-blue-600 font-medium mb-2">{member.role}</p>
									<p className="text-sm text-gray-500 mb-3">{member.expertise}</p>
									<p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
								</div>
							))}
						</div>
					</section>

					{/* Stats Section */}
					<section className="mb-20">
			<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2 xl p-8 md: p-12 text-white">
							<h2 className="text-4 xl font-bold text-center mb-12">Our Impact</h2>

								{stats.map((stat,, index) => (
			<div key={index} className="text-center">
			<div className="text-4 xl md:text-5 xl font-bold mb-2">{stat.number}</div>
			<div className="text-blue-100">{stat.label}</div>

							<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
								{stats.map((statindex) => (
									<div key={index} className="text-center">
										<div className="text-4 xl md:text-5 xl font-bold mb-2">{stat.number}</div>
										<div className="text-blue-100">{stat.label}</div>

									</div>
								))}
							</div>
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center bg-blue-600 rounded-lg p-8 text-white">
						<h2 className="text-3 xl font-bold mb-4">Ready to Work With Us?</h2>
						<p className="text-xl mb-6">Let's discuss how we can help transform your business with cutting-edge technology.</p>
					<Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
							Get Started Today
						</Link>					</section>
				</div>
			</div>
		</>
>>>>>> origin/cursor/check-fix-push-and-merge-to-main-1642

          {/* Values Section */}
          <section className="mb-20">
            <h2 className="text-3 xl md: text-4 xl font-bold text-gray-900 mb-12 text-center">
              Our Values
            </h2>

              {values.map((value,, index) => (
			<div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
			<div className="text-4 xl mb-4">{value.icon}</div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((valueindex) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="text-4 xl mb-4">{value.icon}</div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-20">
            <h2 className="text-3 xl md: text-4 xl font-bold text-gray-900 mb-12 text-center">
              Meet Our Team
            </h2>

              {teamMembers.map((member,, index) => (
			<div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
			<div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((memberindex) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">

                    <span className="text-2 xl font-bold text-gray-600">
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
			<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2 xl p-8 md: p-12 text-white">
              <h2 className="text-3 xl md:text-4 xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how we can help you achieve your goals with innovative technology solutions.
              </p>
					<Link 
                href="/contact" 
 trackClick('about-cta', 'conversion')}

                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => trackClick('about-cta''conversion')}

              >
                Get Started Today
              </Link>
            </div>
          </section>
        </div>
      </div>
		</>
  )}

