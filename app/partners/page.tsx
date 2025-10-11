'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Handshake, Award, Users, Globe, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/logos/microsoft.svg',
      description: 'Strategic partner for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/logos/aws.svg',
      description: 'Preferred cloud infrastructure partner for scalable solutions',
      category: 'Cloud Infrastructure',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/logos/google-cloud.svg',
      description: 'AI and machine learning solutions partner',
      category: 'AI & ML',
      website: 'https://cloud.google.com',
      tier: 'preferred'
    },
    {
      name: 'IBM',
      logo: '/logos/ibm.svg',
      description: 'Quantum computing and enterprise AI solutions',
      category: 'Quantum & Enterprise',
      website: 'https://ibm.com',
      tier: 'certified'
    },
    {
      name: 'NVIDIA',
      logo: '/logos/nvidia.svg',
      description: 'GPU computing and AI acceleration partner',
      category: 'AI Hardware',
      website: 'https://nvidia.com',
      tier: 'preferred'
    },
    {
      name: 'Intel',
      logo: '/logos/intel.svg',
      description: 'Processor and edge computing solutions',
      category: 'Hardware',
      website: 'https://intel.com',
      tier: 'certified'
    }
  ];

  const tiers = {
    strategic: { label: 'Strategic Partner', color: 'bg-purple-600', icon: Award },
    preferred: { label: 'Preferred Partner', color: 'bg-blue-600', icon: CheckCircle },
    certified: { label: 'Certified Partner', color: 'bg-green-600', icon: Users }
  };

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies including Microsoft, AWS, Google Cloud, and more." />
        <meta name="keywords" content="partners, strategic partnerships, technology partners, cloud partners, AI partners" />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white neon-text-enhanced">
                  Our <span className="text-cyan-400">Partners</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Strategic partnerships with leading technology companies to deliver 
                cutting-edge solutions and exceptional value to our clients.
              </p>
            </div>
          </section>

          {/* Partners Grid */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner, index) => {
                  const tierInfo = tiers[partner.tier];
                  const TierIcon = tierInfo.icon;
                  
                  return (
                    <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center">
                          <Globe className="w-8 h-8 text-white" />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${tierInfo.color} flex items-center`}>
                          <TierIcon className="w-3 h-3 mr-1" />
                          {tierInfo.label}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{partner.name}</h3>
                      <p className="text-gray-300 mb-4">{partner.description}</p>
                      <div className="text-cyan-400 text-sm font-medium mb-6">{partner.category}</div>
                      
                      <div className="flex space-x-3">
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                        >
                          Visit Website
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                        <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-4 py-3 rounded-lg font-semibold transition-all duration-300">
                          Learn More
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 text-center border border-cyan-500/20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Become a Partner
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join our network of technology partners and help us deliver 
                  innovative solutions to clients worldwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Partner With Us
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PartnersPage;