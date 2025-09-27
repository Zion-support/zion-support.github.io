import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
      description: 'Full-stack expert with passion for clean code',
      image: '/images/team/mike.jpg'
    },
    {
      name: 'Emily Davis',
      role: 'UX Designer',
      description: 'User experience specialist focused on accessibility',
      image: '/images/team/emily.jpg'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and approaches.',
      icon: '🚀'
    },
    {
      title: 'Quality',
      description: 'We deliver exceptional quality in every project, ensuring long-term success for our clients.',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring their vision becomes reality.',
      icon: '🤝'
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business relationships.',
      icon: '💎'
    }
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion App</title>
        <meta name="description" content="Learn about Zion App's mission, team, and values. We're passionate about delivering cutting-edge technology solutions that transform businesses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <nav className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Home
            </Link>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Zion App</span>
            </h1>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              We're a team of passionate technologists dedicated to transforming businesses through innovative solutions.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. 
                We believe technology should be accessible, reliable, and transformative.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Focused</h3>
                  <p className="text-gray-600">We focus on delivering solutions that directly impact your business goals.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast</h3>
                  <p className="text-gray-600">We deliver results quickly without compromising on quality.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🔧</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable</h3>
                  <p className="text-gray-600">Our solutions are built to last and scale with your business.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our technology solutions.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              onClick={() => trackClick('about-cta', 'conversion')}
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </>
  );
});

export default About;