'use client';
import React from 'react';
import { Users, Award, Globe, Clock, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Clients Served', icon: Users },
    { number: '50+', label: 'Countries', icon: Globe },
    { number: '5+', label: 'Years Experience', icon: Clock },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Award }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to deliver cutting-edge results.',
      icon: '🚀'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
      icon: '⭐'
    },
    {
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices.',
      icon: '🤝'
    },
    {
      title: 'Results',
      description: 'We focus on delivering measurable business value and ROI for our clients.',
      icon: '📈'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge AI and IT solutions."
        keywords={['about us', 'company', 'mission', 'values', 'team']}
        canonicalUrl="https://ziontechgroup.com/about"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-cyan-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We are a leading technology company specializing in AI-powered solutions, 
              quantum computing, and digital transformation services.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-slate-800/50 rounded-lg p-6">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Mission Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-300 text-lg mb-6">
                  To empower businesses with cutting-edge AI and IT solutions that drive 
                  innovation, efficiency, and growth. We believe technology should be 
                  accessible, reliable, and transformative.
                </p>
                <p className="text-gray-300 text-lg">
                  Our team of world-class engineers and data scientists work tirelessly 
                  to deliver solutions that not only meet but exceed our clients' expectations.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    'Proven track record of 300% average ROI',
                    'Bank-level security and compliance',
                    '24/7 expert support and monitoring',
                    'Cutting-edge AI and quantum computing expertise',
                    'Global presence with local support'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center bg-slate-800/50 rounded-lg p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-cyan-100 text-lg mb-8">
              Let's discuss how we can help transform your business with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;