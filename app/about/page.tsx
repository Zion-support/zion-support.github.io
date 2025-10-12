import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.',
      icon: '🚀'
    },
    {
      title: 'Excellence',
      description: 'We deliver high-quality solutions that exceed our clients\' expectations.',
      icon: '⭐'
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency in all our dealings.',
      icon: '🤝'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs and challenges.',
      icon: '👥'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '👨‍💼'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Technical expert specializing in cloud architecture and AI implementation.',
      image: '👩‍💻'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI',
      description: 'AI research lead with expertise in machine learning and neural networks.',
      image: '👨‍🔬'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      description: 'Operations specialist ensuring smooth project delivery and client satisfaction.',
      image: '👩‍💼'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Team Members' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Meet our team and discover our mission to transform businesses through technology." />
        <meta name="keywords" content="about us, team, AI solutions, IT services, company mission, technology innovation" />
      </Helmet>

      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI solutions, IT services, and innovative micro SAAS applications. 
              Our mission is to transform businesses through cutting-edge technology.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with innovative AI and IT solutions that drive growth, efficiency, and competitive advantage. 
                  We believe technology should be accessible, powerful, and transformative.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Since our founding, we've helped hundreds of companies across various industries leverage cutting-edge technology 
                  to solve complex challenges and achieve their goals.
                </p>
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Work With Us
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span className="text-gray-300">Expert team with deep industry knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span className="text-gray-300">Proven track record of successful projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span className="text-gray-300">Cutting-edge technology and methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span className="text-gray-300">24/7 support and maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-lg text-gray-300">The principles that guide everything we do</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-300">The talented individuals behind our success</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get In Touch
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;