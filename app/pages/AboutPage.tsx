import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.',
      icon: LightBulbIcon
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
      icon: StarIcon
    },
    {
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and work closely with our clients as partners.',
      icon: UserGroupIcon
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '4+', label: 'Years Experience' }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      description: 'Visionary leader with 4+ years of experience in AI and technology solutions.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'AI Development Team',
      role: 'Technical Experts',
      description: 'Skilled professionals specializing in AI, machine learning, and software development.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Cybersecurity Team',
      role: 'Security Specialists',
      description: 'Experts in protecting digital assets and ensuring compliance with security standards.',
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions with 4+ years of experience helping businesses transform digitally." />
        <meta name="keywords" content="about us, company, team, AI solutions, IT services, digital transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Empowering businesses through innovative AI and IT solutions since 2020
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                We are a team of passionate technologists dedicated to helping businesses harness the power of 
                artificial intelligence, cybersecurity, and digital transformation to achieve their goals.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                  <p className="text-xl text-gray-300 mb-6">
                    To democratize access to cutting-edge AI and IT solutions, enabling businesses of all sizes 
                    to compete and thrive in the digital economy.
                  </p>
                  <p className="text-lg text-gray-400">
                    We believe technology should be accessible, reliable, and transformative. Our mission is to 
                    bridge the gap between complex technology and practical business solutions.
                  </p>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
                  <p className="text-xl text-gray-300 mb-6">
                    To be the leading provider of AI and IT solutions, recognized for innovation, excellence, 
                    and transformative impact on businesses worldwide.
                  </p>
                  <p className="text-lg text-gray-400">
                    We envision a future where every business can leverage the power of AI and technology 
                    to achieve unprecedented growth and success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The passionate professionals behind Zion Tech Group
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl text-center group hover:bg-slate-800/70 transition-colors">
                  <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Let's discuss how we can help transform your business with our technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get In Touch
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
