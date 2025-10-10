'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud platform and productivity solutions',
      category: 'Technology',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Comprehensive cloud computing services',
      category: 'Cloud',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'AI and machine learning cloud platform',
      category: 'Cloud',
      website: 'https://cloud.google.com',
      tier: 'preferred'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise AI and hybrid cloud solutions',
      category: 'Technology',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'Customer relationship management platform',
      category: 'CRM',
      website: 'https://salesforce.com',
      tier: 'certified'
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database and enterprise software solutions',
      category: 'Database',
      website: 'https://oracle.com',
      tier: 'certified'
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'strategic': return 'bg-blue-600 text-white';
      case 'preferred': return 'bg-green-600 text-white';
      case 'certified': return 'bg-purple-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <>
      <Helmet>
        <title>Our Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Learn about our strategic partnerships with leading technology companies. We work with industry leaders to deliver the best solutions." />
        <meta name="keywords" content="partners, strategic partnerships, technology partners, Microsoft, AWS, Google Cloud, IBM" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Partners
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Strategic partnerships with industry leaders to deliver exceptional solutions
              </p>
            </div>
          </section>

          {/* Partners Grid */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="w-16 h-16 object-contain"
                      />
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTierColor(partner.tier)}`}>
                        {partner.tier}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                    <p className="text-gray-300 mb-4">{partner.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-400">{partner.category}</span>
                      {partner.website && (
                        <a 
                          href={partner.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 flex items-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Visit
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partnership Benefits */}
          <section className="py-16 px-4 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
                Why Partner With Us?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Certified Expertise</h3>
                  <p className="text-gray-300">Certified professionals with deep knowledge of partner technologies</p>
                </div>
                <div className="text-center">
                  <Handshake className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Strategic Alignment</h3>
                  <p className="text-gray-300">Aligned goals and shared vision for customer success</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Joint Solutions</h3>
                  <p className="text-gray-300">Collaborative development of innovative solutions</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Growth Together</h3>
                  <p className="text-gray-300">Mutual growth through shared success</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Interested in Partnership?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's explore how we can work together to deliver exceptional value to our customers.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Become a Partner
              </button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PartnersPage;