import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  UserGroupIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '4+', label: 'Years Experience' }
  ];

  const values = [
    {
      icon: CpuChipIcon,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and methodologies.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security',
      description: 'Security is paramount in everything we do, ensuring your data and systems are always protected.'
    },
    {
      icon: CloudIcon,
      title: 'Scalability',
      description: 'Our solutions are designed to grow with your business, adapting to your changing needs.'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Performance',
      description: 'We optimize for speed and efficiency, delivering solutions that perform at the highest level.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Technology visionary with 15+ years in AI and enterprise solutions.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Expert in cloud architecture and cybersecurity solutions.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      description: 'Machine learning specialist with expertise in deep learning and NLP.',
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team of experts dedicated to delivering cutting-edge AI and IT solutions." />
        <meta name="keywords" content="about us, team, mission, values, Zion Tech Group, AI experts, IT professionals" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                We are a team of passionate technologists dedicated to transforming businesses 
                through innovative AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge technology solutions that drive innovation, 
                  enhance security, and accelerate growth in the digital age.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  We believe that technology should be accessible, secure, and transformative. 
                  Our mission is to bridge the gap between complex technology and practical business solutions.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get in Touch
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </div>
              <div className="bg-slate-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
                <p className="text-gray-300 mb-6">
                  To be the leading provider of AI-powered solutions that transform how businesses 
                  operate, compete, and succeed in the global marketplace.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">Innovation-driven approach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">Client-focused solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">Sustainable growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
              <p className="text-xl text-gray-300">Numbers that speak to our success and commitment</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-gray-300">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-8 text-center hover:bg-slate-700 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-300">The experts behind our innovative solutions</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <UserGroupIcon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our team can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Start a Project
              </Link>
              <Link
                to="/careers"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;