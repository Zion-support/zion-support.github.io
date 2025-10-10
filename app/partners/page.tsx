'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Shield, Zap, Globe, Users, Award } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      tier: 'Platinum',
      benefits: ['Azure credits', 'Co-marketing opportunities', 'Technical support']
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'AWS cloud infrastructure and machine learning services',
      category: 'Cloud & AI',
      tier: 'Platinum',
      benefits: ['AWS credits', 'Training programs', 'Joint solutions']
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Google Cloud Platform and AI/ML services integration',
      category: 'Cloud & AI',
      tier: 'Gold',
      benefits: ['GCP credits', 'Technical training', 'Co-development']
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'IBM Watson AI and enterprise solutions partnership',
      category: 'AI & Enterprise',
      tier: 'Gold',
      benefits: ['Watson access', 'Enterprise support', 'Joint go-to-market']
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM integration and customer success solutions',
      category: 'CRM & Sales',
      tier: 'Silver',
      benefits: ['Salesforce credits', 'Integration support', 'Training']
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database and enterprise application solutions',
      category: 'Database & Enterprise',
      tier: 'Silver',
      benefits: ['Oracle credits', 'Technical support', 'Co-marketing']
    }
  ];

  const tiers = {
    Platinum: { color: 'from-gray-400 to-gray-600', icon: Star },
    Gold: { color: 'from-yellow-400 to-yellow-600', icon: Award },
    Silver: { color: 'from-gray-300 to-gray-500', icon: Shield }
  };

  const benefits = [
    {
      icon: Zap,
      title: 'Technical Support',
      description: 'Priority technical support and dedicated resources'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to our global partner network and markets'
    },
    {
      icon: Users,
      title: 'Co-Marketing',
      description: 'Joint marketing initiatives and lead sharing'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Partner certification programs and training'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group's AI and IT solutions" />
        <meta name="keywords" content="partners, partnership, ecosystem, AI, IT solutions, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Partner Ecosystem
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our growing network of partners and unlock new opportunities in AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2">
              Become a Partner
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              View Partner Portal
            </button>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with industry leaders to deliver cutting-edge solutions to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => {
              const tierInfo = tiers[partner.tier as keyof typeof tiers];
              const TierIcon = tierInfo.icon;
              
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 object-contain"
                    />
                      <div className={`flex items-center space-x-2 px-3 py-1 bg-gradient-to-r ${tierInfo.color} rounded-full text-white text-sm font-medium`}>
                        <TierIcon className="w-4 h-4" />
                        <span>{partner.tier}</span>
                      </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{partner.name}</h3>
                  <p className="text-gray-300 mb-4">{partner.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-sm text-cyan-400 font-medium">{partner.category}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-white">Benefits:</h4>
                    <ul className="space-y-1">
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partner Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of joining our partner ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our partner ecosystem and unlock new opportunities for growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
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
