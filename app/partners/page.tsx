'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Globe, Shield, Users, Award, CheckCircle, Star, Building, Target, TrendingUp } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to international markets and diverse client base'
    },
    {
      icon: Shield,
      title: 'Enterprise Focus',
      description: 'Work with Fortune 500 companies and large enterprises'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Collaborate with world-class AI and IT professionals'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Join a company with a history of successful projects'
    }
  ];

  const features = [
    {
      icon: Building,
      title: 'Technology Leadership',
      description: 'Cutting-edge AI and IT solutions that drive innovation'
    },
    {
      icon: Target,
      title: 'Market Expertise',
      description: 'Deep understanding of industry trends and client needs'
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Expand your business with our comprehensive support'
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'Maintain high standards with our quality processes'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Partnership Opportunities</title>
        <meta name="description" content="Join our partner network and grow your business with Zion Tech Group. Access to cutting-edge AI and IT solutions, global reach, and enterprise clients." />
        <meta name="keywords" content="partners, partnership, business partners, AI solutions, IT services, enterprise clients" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Partner
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              With Us
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our partner network and grow your business with access to cutting-edge AI and IT solutions, 
            global reach, and enterprise clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Become a Partner
              <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our partnerships bring together the best of both worlds: cutting-edge technology and proven expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive support and resources to help you succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple steps to join our partner network
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Apply</h3>
              <p className="text-gray-300">Submit your partnership application with company details</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Review</h3>
              <p className="text-gray-300">We review your application and assess compatibility</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Onboard</h3>
              <p className="text-gray-300">Complete onboarding process and training</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Grow</h3>
              <p className="text-gray-300">Start growing your business with our support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our partner network and start growing your business with our cutting-edge AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Apply to Partner
              <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More About Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnersPage;