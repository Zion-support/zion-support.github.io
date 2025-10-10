'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, ArrowRight, Globe, Shield, Zap, Users, Award } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      featured: true
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
      featured: true
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Advanced AI and machine learning solutions on Google Cloud Platform',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      featured: true
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise AI solutions and Watson platform integration',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      featured: false
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM integration and customer experience solutions',
      category: 'CRM & Sales',
      website: 'https://salesforce.com',
      featured: false
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database solutions and enterprise software integration',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      featured: false
    },
    {
      name: 'NVIDIA',
      logo: '/api/placeholder/200/100',
      description: 'GPU computing and AI acceleration technologies',
      category: 'Hardware & AI',
      website: 'https://nvidia.com',
      featured: false
    },
    {
      name: 'Intel',
      logo: '/api/placeholder/200/100',
      description: 'Advanced processor technologies and AI optimization',
      category: 'Hardware & AI',
      website: 'https://intel.com',
      featured: false
    }
  ];

  const benefits = [
    'Access to cutting-edge technology platforms',
    'Enhanced security and compliance standards',
    'Faster implementation and deployment',
    'Comprehensive training and certification',
    '24/7 technical support and maintenance',
    'Scalable solutions for any business size',
    'Cost-effective pricing through partnerships',
    'Regular updates and feature enhancements',
    'Dedicated account management',
    'Custom integration and development'
  ];

  const categories = [
    { name: 'All', count: partners.length },
    { name: 'Cloud & AI', count: partners.filter(p => p.category === 'Cloud & AI').length },
    { name: 'Cloud Computing', count: partners.filter(p => p.category === 'Cloud Computing').length },
    { name: 'Enterprise AI', count: partners.filter(p => p.category === 'Enterprise AI').length },
    { name: 'CRM & Sales', count: partners.filter(p => p.category === 'CRM & Sales').length },
    { name: 'Database & Enterprise', count: partners.filter(p => p.category === 'Database & Enterprise').length },
    { name: 'Hardware & AI', count: partners.filter(p => p.category === 'Hardware & AI').length }
  ];

  const stats = [
    { label: 'Strategic Partners', value: '50+', icon: Globe },
    { label: 'Certified Solutions', value: '100+', icon: Shield },
    { label: 'Implementation Speed', value: '3x Faster', icon: Zap },
    { label: 'Client Satisfaction', value: '99%', icon: Users }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, enterprise solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Strategic
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Partnerships
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We partner with industry leaders to deliver cutting-edge technology solutions. 
              Our strategic alliances ensure you get the best tools and expertise available.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Partners */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Partners</h2>
              <p className="text-xl text-gray-300">Our key strategic technology alliances</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.filter(partner => partner.featured).map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-cyan-500/50 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <div className="text-2xl font-bold text-cyan-400">{partner.name.charAt(0)}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{partner.name}</h3>
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                      {partner.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-center leading-relaxed">
                    {partner.description}
                  </p>
                  
                  <div className="flex justify-center">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center group-hover:translate-x-1 transition-all duration-300"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Partners */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">All Partners</h2>
              <p className="text-xl text-gray-300">Complete list of our technology partnerships</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-lg font-bold text-cyan-400">{partner.name.charAt(0)}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                  <span className="bg-white/10 text-cyan-400 px-2 py-1 rounded text-xs mb-3 inline-block">
                    {partner.category}
                  </span>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {partner.description}
                  </p>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300 inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Partnership Benefits</h2>
              <p className="text-xl text-gray-300">Why our strategic partnerships matter to you</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Become a Partner</h2>
            <p className="text-xl text-gray-300 mb-8">
              Interested in partnering with us? We're always looking for innovative companies 
              that share our vision of transforming business through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Partner With Us
              </a>
              <a
                href="/about"
                className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <Award className="w-5 h-5 mr-2" />
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;