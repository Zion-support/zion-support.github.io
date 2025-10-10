'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp, ArrowRight } from 'lucide-react';

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
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Advanced cloud computing and AI platform solutions',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and hybrid cloud solutions',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and customer experience platform integration',
      category: 'CRM & Sales',
      website: 'https://salesforce.com',
      tier: 'preferred'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise application solutions',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      tier: 'certified'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology and tools',
    'Joint go-to-market opportunities',
    'Technical training and certification programs',
    'Dedicated partner support and resources',
    'Co-marketing and co-selling initiatives',
    'Early access to new products and features',
    'Priority technical support',
    'Revenue sharing opportunities'
  ];

  const tiers = [
    {
      name: 'Strategic Partners',
      description: 'Our most important partnerships with industry leaders',
      icon: Award,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-400/50'
    },
    {
      name: 'Preferred Partners',
      description: 'Trusted partners with proven track records',
      icon: Handshake,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-400/50'
    },
    {
      name: 'Certified Partners',
      description: 'Qualified partners with specialized expertise',
      icon: CheckCircle,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-400/50'
    }
  ];

  const stats = [
    { icon: Users, value: '50+', label: 'Partners Worldwide' },
    { icon: TrendingUp, value: '200%', label: 'Growth in Partner Revenue' },
    { icon: Award, value: '15', label: 'Industry Awards' },
    { icon: Handshake, value: '99%', label: 'Partner Satisfaction' }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Join our partner ecosystem and grow your business with Zion Tech Group." />
        <meta name="keywords" content="partners, partnerships, strategic alliances, technology partners, business partnerships" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We collaborate with industry leaders to deliver cutting-edge solutions and create mutual value for our clients and partners.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Tiers */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Partner Tiers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our partnership program is designed to provide different levels of collaboration and support based on your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${tier.borderColor} hover:bg-white/10 transition-all duration-300`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${tier.bgColor} rounded-full mb-6`}>
                    <tier.icon className={`w-8 h-8 ${tier.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{tier.name}</h3>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're proud to work with industry leaders who share our commitment to innovation and excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:bg-white/10 ${
                    partner.tier === 'strategic' ? 'border-yellow-400/50' :
                    partner.tier === 'preferred' ? 'border-blue-400/50' :
                    'border-green-400/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{partner.name.charAt(0)}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      partner.tier === 'strategic' ? 'bg-yellow-500/20 text-yellow-300' :
                      partner.tier === 'preferred' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-green-500/20 text-green-300'
                    }`}>
                      {partner.tier.toUpperCase()}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{partner.category}</p>
                  <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                  
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Partner Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our partner ecosystem and unlock exclusive benefits designed to accelerate your business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our partner ecosystem and discover new opportunities for growth and innovation. Let's build the future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Handshake className="w-5 h-5" />
                  Become a Partner
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;
