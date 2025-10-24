import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { Metadata } from 'next';
import { ArrowRight, Users, Shield, Globe, Brain, CheckCircle, Award, Star, Send, BarChart3, Target, Zap, DollarSign, Clock, Activity, Lock, FileText, CreditCard, Database, Building2, Sparkles, PieChart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Zion Tech Group | AI & IT Solutions',
  description: 'Learn about Zion Tech Group\'s mission, values, and team. We\'re dedicated to delivering cutting-edge AI and IT solutions that transform businesses.',
  keywords: 'about us, AI solutions, IT services, technology company, digital transformation',
  openGraph: {
    title: 'About Us - Zion Tech Group',
    description: 'Learn about Zion Tech Group\'s mission, values, and team. We\'re dedicated to delivering cutting-edge AI and IT solutions that transform businesses.',
    type: 'website',
    url: 'https://ziontechgroup.com/about'
  }
};

const AboutPage: React.FC = () => {
  const values = [
=======
import { Users, ArrowRight, CheckCircle } from 'lucide-react';

export default function AboutUsPage() {
  const features = [
>>>>>>> origin/main
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Feature 1',
      description: 'Description of the first key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Feature 2',
      description: 'Description of the second key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    },
    {
<<<<<<< HEAD
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized support and expertise.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs.'
=======
      icon: <Users className="w-8 h-8" />,
      title: 'Feature 3',
      description: 'Description of the third key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Feature 4',
      description: 'Description of the fourth key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
>>>>>>> origin/main
    }
  ];

  const stats = [
<<<<<<< HEAD
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <div className="transition-all duration-1000 opacity-100 translate-y-0">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI and IT solutions that transform businesses and drive innovation across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Get in Touch
                <ArrowRight className="w-8 h-8" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8">
              To empower businesses with cutting-edge AI and IT solutions that drive growth,
              efficiency, and innovation. We believe technology should be accessible,
              reliable, and transformative.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
=======
    { number: '95%', label: 'Success Rate' },
    { number: '80%', label: 'Efficiency Gain' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Learn about our company and mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/demo"
              className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Demo
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
>>>>>>> origin/main
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>
    </div>
  );
};

export default AboutPage;
=======

        <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6">Contact us today to learn more about our solutions.</p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/main
