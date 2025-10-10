'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Building2, Users, Award, Globe, ExternalLink, CheckCircle } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  description: string;
  category: string;
  website?: string;
  tier: 'strategic' | 'preferred' | 'certified';
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Leading cloud infrastructure and AI services provider',
      category: 'Cloud & AI',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Advanced cloud computing and machine learning solutions',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Customer relationship management and business automation',
      category: 'CRM & Automation',
      website: 'https://salesforce.com',
      tier: 'strategic'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Enterprise database and cloud solutions',
      category: 'Database & Cloud',
      website: 'https://oracle.com',
      tier: 'certified'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'AI and enterprise solutions provider',
      category: 'AI & Enterprise',
      website: 'https://ibm.com',
      tier: 'preferred'
    }
  ];

  const benefits = [
    {
      icon: <Building2 className="w-8 h-8 text-cyan-400" />,
      title: 'Access to Latest Technologies',
      description: 'Get early access to cutting-edge solutions and innovations from our partners'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: 'Expert Support',
      description: 'Direct access to partner technical teams and specialized expertise'
    },
    {
      icon: <Award className="w-8 h-8 text-cyan-400" />,
      title: 'Certified Solutions',
      description: 'All our partner integrations are certified and tested for reliability'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: 'Global Reach',
      description: 'Leverage our partners\' global infrastructure and support networks'
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      case 'preferred':
        return 'bg-gradient-to-r from-blue-500 to-purple-500';
      case 'certified':
        return 'bg-gradient-to-r from-green-500 to-teal-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getTierLabel = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return 'Strategic Partner';
      case 'preferred':
        return 'Preferred Partner';
      case 'certified':
        return 'Certified Partner';
      default:
        return 'Partner';
    }
  };

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Our strategic partnerships with leading technology companies enable us to deliver comprehensive AI and IT solutions." />
        <meta name="keywords" content="partners, strategic partnerships, technology partners, cloud partners, AI partners" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We work with industry-leading technology partners to deliver comprehensive solutions that drive business success.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our partnerships provide mutual benefits and create value for our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Technology Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We collaborate with industry leaders to provide the best solutions for our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <span className={`px-3 py-1 text-white text-xs rounded-full ${getTierColor(partner.tier)}`}>
                      {getTierLabel(partner.tier)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {partner.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4">
                    {partner.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-semibold">
                      {partner.category}
                    </span>
                    {partner.website && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Interested in Partnering?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our partner ecosystem and help us deliver innovative solutions to clients worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Become a Partner
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PartnersPage;