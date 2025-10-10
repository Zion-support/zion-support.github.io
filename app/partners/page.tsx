'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Award, Users, Globe, Zap, Shield } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Certified partner for Google Cloud Platform and AI/ML services',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'certified'
    },
    {
      name: 'Microsoft Azure',
      logo: '/images/partners/microsoft-azure.png',
      description: 'Authorized partner for Microsoft Azure cloud solutions and enterprise services',
      category: 'Cloud & Enterprise',
      website: 'https://azure.microsoft.com',
      tier: 'authorized'
    },
    {
      name: 'AWS',
      logo: '/images/partners/aws.png',
      description: 'Advanced consulting partner for Amazon Web Services and cloud infrastructure',
      category: 'Cloud & Infrastructure',
      website: 'https://aws.amazon.com',
      tier: 'advanced'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Certified Salesforce partner specializing in CRM and business automation',
      category: 'CRM & Automation',
      website: 'https://salesforce.com',
      tier: 'certified'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Strategic partner for IBM Watson AI and enterprise solutions',
      category: 'AI & Enterprise',
      website: 'https://ibm.com',
      tier: 'strategic'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Oracle partner for database solutions and enterprise applications',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      tier: 'partner'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-innovation projects',
    'Global reach and scalability',
    'Certified expertise and solutions'
  ];

  const tiers = {
    certified: { label: 'Certified Partner', color: 'bg-blue-500' },
    authorized: { label: 'Authorized Partner', color: 'bg-green-500' },
    advanced: { label: 'Advanced Partner', color: 'bg-purple-500' },
    strategic: { label: 'Strategic Partner', color: 'bg-orange-500' },
    partner: { label: 'Partner', color: 'bg-gray-500' }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners | Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. Certified partners for Google Cloud, Microsoft Azure, AWS, and more." />
        <meta name="keywords" content="technology partners, cloud partners, AI partners, certified partners, strategic partnerships" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver cutting-edge solutions and drive innovation across all sectors.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    <div className="text-2xl font-bold text-white">{partner.name.charAt(0)}</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${tiers[partner.tier as keyof typeof tiers].color}`}>
                    {tiers[partner.tier as keyof typeof tiers].label}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{partner.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{partner.category}</span>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                  >
                    Visit <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Partnership Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our strategic partnerships enable us to deliver superior solutions and exceptional value to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Become a Partner
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our partner ecosystem and unlock new opportunities for growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              Partner with Us
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;