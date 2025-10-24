import React from 'react';
import { Metadata } from 'next';
import { Brain, Cloud, Shield, Code, BarChart, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission, team, and expertise in AI, quantum computing, and enterprise technology solutions.',
  keywords: 'about us, team, AI experts, quantum computing, enterprise technology, Zion Tech Group',
};

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      bio: 'AI and quantum computing expert with 15+ years of experience in enterprise technology solutions.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Full-stack developer and cloud architecture specialist with expertise in scalable systems.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      bio: 'Machine learning researcher and AI implementation specialist with PhD in Computer Science.',
      image: '/api/placeholder/300/300'
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology and creative solutions.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Enterprise-grade security and compliance are built into every solution we deliver.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'We optimize for speed, scalability, and reliability in every project we undertake.'
    },
    {
      icon: Code,
      title: 'Quality Code',
      description: 'Clean, maintainable, and well-documented code that stands the test of time.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Pioneering the future of enterprise technology with AI, quantum computing, and autonomous systems
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-8">
                To transform businesses through innovative AI solutions, cutting-edge cloud infrastructure, 
                and autonomous systems that drive growth, efficiency, and competitive advantage in the digital age.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">AI Innovation</h3>
                  <p className="text-gray-300">Leading the charge in artificial intelligence and machine learning applications</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Cloud Excellence</h3>
                  <p className="text-gray-300">Building scalable, secure, and efficient cloud infrastructure solutions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Performance</h3>
                  <p className="text-gray-300">Delivering high-performance solutions that exceed expectations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-lg text-gray-300">The principles that guide everything we do</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-300">The experts behind our innovative solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-48 h-48 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👤</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-2">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Let's discuss how we can help transform your business with cutting-edge technology.
              </p>
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </div>
  );
};

export default AboutPage;