'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink, ArrowRight, Building2, Handshake, Award, Users, Zap, TrendingUp } from 'lucide-react';

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
      description: 'Cloud infrastructure and machine learning platform partnership',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'AI and data analytics solutions on Google Cloud Platform',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and hybrid cloud solutions',
      category: 'Enterprise Solutions',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      name: 'Splunk',
      logo: '/images/partners/splunk.png',
      description: 'Data analytics and security monitoring platform',
      category: 'Analytics & Security',
      website: 'https://splunk.com',
      tier: 'certified'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM integration and AI-powered customer solutions',
      category: 'CRM & AI',
      website: 'https://salesforce.com',
      tier: 'strategic'
    }
  ];

  const partnerBenefits = [
    'Access to cutting-edge technology platforms',
    'Joint go-to-market strategies',
    'Technical support and training',
    'Co-marketing opportunities',
    'Early access to new features',
    'Dedicated partner success managers'
  ];

  const tiers = {
    strategic: {
      name: 'Strategic Partners',
      description: 'Our most important partnerships with joint development and go-to-market strategies',
      color: 'from-purple-400 to-pink-400'
    },
    preferred: {
      name: 'Preferred Partners',
      description: 'Key technology partners with preferred pricing and support',
      color: 'from-blue-400 to-cyan-400'
    },
    certified: {
      name: 'Certified Partners',
      description: 'Certified solution providers with specialized expertise',
      color: 'from-green-400 to-emerald-400'
    }
  };

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, IBM, and more to deliver cutting-edge solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, Salesforce, Splunk" />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Strategic partnerships with leading technology companies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We partner with leading technology companies to deliver cutting-edge AI and IT solutions. 
              Our strategic partnerships enable us to provide the best tools and platforms for our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
              >
                Become a Partner
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="#partners"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                View Our Partners
              </Link>
            </div>
          </div>
        </section>

        {/* Partners by Tier */}
        <section id="partners" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {Object.entries(tiers).map(([tierKey, tierInfo]) => {
              const tierPartners = partners.filter(partner => partner.tier === tierKey);
              if (tierPartners.length === 0) return null;
              
              return (
                <div key={tierKey} className="mb-16">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">{tierInfo.name}</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">{tierInfo.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tierPartners.map((partner, index) => (
                      <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                            <Building2 className="w-8 h-8 text-slate-900" />
                          </div>
                          <span className={`px-3 py-1 bg-gradient-to-r ${tierInfo.color} text-white text-sm rounded-full`}>
                            {tierInfo.name}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                        <p className="text-gray-300 mb-4">{partner.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-cyan-400 text-sm font-medium">{partner.category}</span>
                          {partner.website && (
                            <a
                              href={partner.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Partnership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnerBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Why Partner With Us?</h2>
                <p className="text-gray-300 mb-6">
                  We're not just another technology company. We're innovators, problem-solvers, and trusted advisors 
                  who help our partners deliver exceptional value to their customers.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">Proven track record of successful implementations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">Expert team with deep industry knowledge</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">Award-winning solutions and customer satisfaction</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">Cutting-edge technology and innovation</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Ready to Partner With Us?</h3>
                <p className="text-gray-300 mb-6">
                  Join our network of strategic partners and help us deliver innovative solutions to clients worldwide.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
                >
                  <Handshake className="w-4 h-4" />
                  Start Partnership Discussion
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Let's Build Something Amazing Together</h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're a technology company looking to partner with us or a client seeking the best solutions, 
              we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;