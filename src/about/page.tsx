import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Brain, Shield } from 'lucide-react';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const _team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/images/team/kleber.jpg',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.',
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/images/team/sarah.jpg',
      bio: 'Expert in AI architecture and machine learning systems.',
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: '/images/team/michael.jpg',
      bio: 'Full-stack developer specializing in modern web technologies.',
    },
  ];

  const _values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs.',
    },
    {
      icon: Brain,
      title: 'Intelligence',
      description: 'We leverage AI and data to create intelligent solutions.',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'We prioritize security and compliance in everything we build.',
    },
  ];

  const _stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600">
            Leading the future of AI and IT solutions
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
              To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
              efficiency, and growth. We believe technology should be accessible, secure, and 
              transformative for organizations of all sizes.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {_values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <value.icon className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {_stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-cyan-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-cyan-500" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-cyan-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work With Us?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Get In Touch
              </Link>
              <Link
                to="/services"
                className="border border-cyan-500 text-cyan-500 px-8 py-3 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;