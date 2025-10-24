import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, Users, Shield, Globe, Brain, CheckCircle, Award, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Zion Tech Group | AI & IT Solutions',
  description: 'Learn about Zion Tech Group\'s mission, values, and team. We\'re dedicated to delivering cutting-edge AI and IT solutions that transform businesses.',
  keywords: 'about us, AI solutions, IT services, technology company, digital transformation',
  openGraph: {
    title: 'About Us - Zion Tech Group',
    description: 'Learn about Zion Tech Group\'s mission, values, and team. We\'re dedicated to delivering cutting-edge AI and IT solutions that transform businesses.',
    type: 'website',
    url: 'https://ziontechgroup.com/about',
  },
};

const AboutPage = () => {
  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs and challenges.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized expertise and support.'
    }
  ];

  const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '1000+' },
    { label: 'Countries Served', value: '25+' }
  ];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We are a leading technology company dedicated to transforming businesses through innovative AI and IT solutions.
          </p>
        </div>
      </section>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Stats Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
