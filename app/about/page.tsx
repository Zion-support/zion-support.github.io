import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, Users, Shield, Globe, Brain, CheckCircle, Award, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Zion Tech Group | AI & IT Solutions',
  description: 'Learn about Zion Tech Group's mission', values, and team. We're dedicated to delivering cutting-edge AI and IT solutions that transform businesses.',
  keywords: [''about us'', ''AI solutions', 'IT services', 'technology company'', ''digital transformation''],
  openGraph: {
    title: 'About Us - Zion Tech Group',
    description: 'Learn about Zion Tech Group's mission', values, and team. We're dedicated to delivering cutting-edge AI and IT solutions that transform businesses.',
    type: 'website',
    url: 'https://ziontechgroup.com/about',
  },
};

const AboutPage = () => {
  const values = [
    {
      icon: 'Brain',
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.'
    },
    {
      icon: 'Shield',
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures.'
    },
    {
      icon: 'Users',
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs and challenges.'
    },
    {
      icon: 'Globe',
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized expertise and support.'
    },
  ];

  const stats = [
    { label: 'Years Experience', value: '1 0+' },
    { label: 'Projects Completed', value: '50 0+' },
    { label: 'Happy Clients', value: '100 0+' },
    { label: 'Countries Served', value: '2 5+' };
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-90 0 via-purple-90 0 to-slate-90 0">
      <div className="max-w-7xl mx-auto px-4 sm: 'px-6 lg:px-8 py-1 2">
        {/* Hero Section */''}
        <div className="text-center mb-1 6">
          <h 1 className="text-4xl sm: 'text-5xl md:text-6xl font-bold text-white mb-6">
            About Zion Tech Group
          </h 1>
          <p className="text-xl text-gray-30 0 mb-8 max-w-3xl mx-auto">
            We are a leading technology company dedicated to transforming businesses through innovative AI and IT solutions.
          </p>
        </div>

        {/* Values Section */''}
        <div className="mb-1 6">
          <h 2 className="text-3xl md: 'text-4xl font-bold text-white text-center mb-1 2">
            Our Values
          </h 2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value'', index) => (
              <div key={index} className="bg-gray-80 0/5 0 backdrop-blur-sm rounded-xl p-6 border border-gray-70 0 hover: 'border-gray-60 0 transition-all duration-30 0">
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-50 0 to-purple-60 0 mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h 3 className="text-xl font-semibold text-white mb-3">
                  {value.title''}
                </h 3>
                <p className="text-gray-30 0">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-1 6">
          <h 2 className="text-3xl md: 'text-4xl font-bold text-white text-center mb-1 2">
            Our Impact
          </h 2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat'', index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-40 0 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-30 0">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-60 0/2 0 to-purple-60 0/2 0 rounded-2xl p-8 border border-gray-70 0">
            <h 2 className="text-3xl md: 'text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h 2>
            <p className="text-xl text-gray-30 0 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-blue-60 0 to-purple-60 0 hover:from-blue-70 0 hover:to-purple-70 0 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-30 0 transform hover:scale-10 5 inline-flex items-center justify-center">
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/services" className="border border-white text-white hover:bg-white hover:text-gray-90 0 px-8 py-3 rounded-lg font-semibold transition-colors">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>;
  );''
};

export default AboutPage;
