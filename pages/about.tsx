import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

const About = React.memo(function About(): JSX.Element { 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      expertise: 'Strategic Leadership & AI Innovation',
      image: '👩‍💼',
      description: '15+ years in technology leadership, former VP at major tech companies.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      expertise: 'Cloud Architecture & DevOps',
      image: '👨‍💻',
      description: 'Expert in scalable cloud solutions and modern development practices.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Designer',
      expertise: 'UX/UI Design & Product Strategy',
      image: '👩‍🎨',
      description: 'Award-winning designer with expertise in user-centered design principles.'
    },
    {
      name: 'David Kim',
      role: 'Senior Developer',
      expertise: 'Full-Stack Development & AI/ML',
      image: '👨‍💻',
      description: 'Full-stack developer specializing in AI integration and modern web technologies.'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new possibilities and pushing the boundaries of what\'s possible.',
      icon: '🚀',
      color: 'blue'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering solutions that drive real business value and growth.',
      icon: '🎯',
      color: 'green'
    },
    {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to user experience.',
      icon: '⭐',
      color: 'yellow'
    },
    {
      title: 'Transparent Communication',
      description: 'Clear, honest communication is the foundation of our relationships with clients and team members.',
      icon: '💬',
      color: 'purple'
    },
    {
      title: 'Continuous Learning',
      description: 'We embrace change and continuously learn, adapt, and improve to stay ahead in the fast-paced tech world.',
      icon: '📚',
      color: 'indigo'
    },
    {
      title: 'Collaborative Approach',
      description: 'We believe in the power of collaboration, working as an extension of your team to achieve shared goals and mutual success.',
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
              We're a team of passionate technologists dedicated to transforming businesses through innovative solutions and cutting-edge technology.
            </p>
          </header>

          {/* Mission Section */}
          <section className="mb-20">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
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
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                    <div className="text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get In Touch
                </Link>
                <Link href="/services" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  View Our Services
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
});

export default About;