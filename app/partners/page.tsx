'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Award, Users, Target, TrendingUp, BarChart, Clock, Star, Building, Handshake, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const PartnersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Partners', icon: Globe },
    { id: 'technology', name: 'Technology', icon: Brain },
    { id: 'cloud', name: 'Cloud', icon: Cloud },
    { id: 'ai', name: 'AI/ML', icon: Zap },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'consulting', name: 'Consulting', icon: Users }
  ];

  const partners = [
    {
      id: 1,
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Cloud computing and enterprise solutions',
      category: 'cloud',
      tier: 'Platinum',
      website: 'https://microsoft.com',
      benefits: ['Azure Credits', 'Technical Support', 'Co-marketing', 'Training']
    },
    {
      id: 2,
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Cloud infrastructure and AI services',
      category: 'cloud',
      tier: 'Platinum',
      website: 'https://aws.amazon.com',
      benefits: ['AWS Credits', 'Architecture Review', 'Go-to-Market', 'Certification']
    },
    {
      id: 3,
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'AI and machine learning platforms',
      category: 'ai',
      tier: 'Gold',
      website: 'https://cloud.google.com',
      benefits: ['GCP Credits', 'AI/ML Tools', 'Technical Training', 'Support']
    },
    {
      id: 4,
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Quantum computing and enterprise solutions',
      category: 'technology',
      tier: 'Gold',
      website: 'https://ibm.com',
      benefits: ['Quantum Access', 'Enterprise Tools', 'Research Collaboration', 'Training']
    },
    {
      id: 5,
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'GPU computing and AI acceleration',
      category: 'ai',
      tier: 'Silver',
      website: 'https://nvidia.com',
      benefits: ['GPU Access', 'AI Frameworks', 'Technical Support', 'Training']
    },
    {
      id: 6,
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and business automation',
      category: 'technology',
      tier: 'Silver',
      website: 'https://salesforce.com',
      benefits: ['Platform Access', 'Integration Tools', 'Training', 'Support']
    },
    {
      id: 7,
      name: 'Cisco',
      logo: '/images/partners/cisco.png',
      description: 'Networking and security solutions',
      category: 'security',
      tier: 'Silver',
      website: 'https://cisco.com',
      benefits: ['Security Tools', 'Network Solutions', 'Training', 'Support']
    },
    {
      id: 8,
      name: 'Deloitte',
      logo: '/images/partners/deloitte.png',
      description: 'Consulting and digital transformation',
      category: 'consulting',
      tier: 'Bronze',
      website: 'https://deloitte.com',
      benefits: ['Consulting Services', 'Market Insights', 'Joint Projects', 'Training']
    }
  ];

  const filteredPartners = selectedCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === selectedCategory);

  const stats = [
    { number: '50+', label: 'Partners', icon: Handshake },
    { number: '15+', label: 'Countries', icon: Globe },
    { number: '500+', label: 'Joint Projects', icon: Target },
    { number: '99%', label: 'Satisfaction', icon: Star },
    { number: '24/7', label: 'Support', icon: Clock },
    { number: '5+', label: 'Years', icon: Award }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Certified Expertise',
      description: 'Access to certified professionals and cutting-edge technologies from our partners.'
    },
    {
      icon: Zap,
      title: 'Advanced Tools',
      description: 'Latest tools and platforms to deliver superior solutions to our clients.'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security solutions and compliance standards.'
    },
    {
      icon: TrendingUp,
      title: 'Market Leadership',
      description: 'Stay ahead with innovative solutions and market-leading technologies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Our Partners - Technology & Solution Partners | Zion Tech Group"
        description="Meet our strategic partners who help us deliver cutting-edge AI, cloud, and technology solutions. Discover our ecosystem of trusted technology providers."
        keywords="partners, technology partners, cloud partners, AI partners, Microsoft, AWS, Google Cloud, IBM, strategic partnerships"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Partners
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Strategic partnerships with leading technology companies enable us to deliver 
            cutting-edge solutions and exceptional value to our clients.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our strategic partnerships provide access to cutting-edge technologies and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                    <Building className="w-8 h-8 text-gray-600" />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    partner.tier === 'Platinum' ? 'bg-yellow-500/20 text-yellow-400' :
                    partner.tier === 'Gold' ? 'bg-yellow-600/20 text-yellow-300' :
                    partner.tier === 'Silver' ? 'bg-gray-400/20 text-gray-300' :
                    'bg-orange-600/20 text-orange-300'
                  }`}>
                    {partner.tier}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {partner.name}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {partner.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="text-lg font-semibold text-white">Partnership Benefits:</h4>
                  {partner.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                >
                  Visit Partner
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
          
          {filteredPartners.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No partners found</h3>
              <p className="text-gray-300">Try selecting a different category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Become Our Partner
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join our ecosystem of technology partners and help us deliver innovative solutions to clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Handshake className="mr-2 h-5 w-5" />
                Partner With Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnersPage;