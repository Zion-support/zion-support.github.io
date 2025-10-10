'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  description: string;
  category: string;
  website: string;
  tier: 'strategic' | 'preferred' | 'technology';
  benefits: string[];
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
      tier: 'strategic',
      benefits: [
        'Co-marketing and co-selling',
        'Product integration support',
        'Priority customer support'
      ]
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Advanced AI and machine learning platform with global reach',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'strategic',
      benefits: [
        'Joint go-to-market initiatives',
        'Technical integration support',
        'Training and certification programs'
      ]
    },
    {
      name: 'Microsoft Azure',
      logo: '/images/partners/azure.png',
      description: 'Comprehensive cloud platform with enterprise-grade AI services',
      category: 'Cloud Computing',
      website: 'https://azure.microsoft.com',
      tier: 'strategic',
      benefits: [
        'Enterprise solution development',
        'Co-selling opportunities',
        'Technical support and training'
      ]
    },
    {
      name: 'OpenAI',
      logo: '/images/partners/openai.png',
      description: 'Leading AI research company with cutting-edge language models',
      category: 'AI Technology',
      website: 'https://openai.com',
      tier: 'technology',
      benefits: [
        'Early access to new models',
        'Technical collaboration',
        'Joint research initiatives'
      ]
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'GPU computing leader for AI and machine learning workloads',
      category: 'Hardware & AI',
      website: 'https://nvidia.com',
      tier: 'preferred',
      benefits: [
        'Hardware optimization support',
        'Technical training programs',
        'Joint solution development'
      ]
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Customer relationship management platform with AI capabilities',
      category: 'CRM & AI',
      website: 'https://salesforce.com',
      tier: 'preferred',
      benefits: [
        'Integration partnerships',
        'Co-marketing opportunities',
        'Customer success collaboration'
      ]
    }
  ];

  const partnershipTiers = [
    {
      name: 'Strategic Partners',
      description: 'Long-term strategic relationships with shared goals and deep integration',
      color: 'from-purple-500 to-blue-500',
      count: 3
    },
    {
      name: 'Preferred Partners',
      description: 'Trusted partners with proven track records and strong collaboration',
      color: 'from-blue-500 to-cyan-500',
      count: 2
    },
    {
      name: 'Technology Partners',
      description: 'Technology-focused partnerships for innovation and development',
      color: 'from-cyan-500 to-teal-500',
      count: 1
    }
  ];

  const stats = [
    { icon: Users, value: '50+', label: 'Active Partners' },
    { icon: TrendingUp, value: '300%', label: 'Growth in Partnerships' },
    { icon: Award, value: '15+', label: 'Industry Awards' },
    { icon: Handshake, value: '95%', label: 'Partner Satisfaction' }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Learn how we collaborate to deliver innovative AI and IT solutions." />
        <meta name="keywords" content="partners, partnerships, strategic alliances, technology partners, cloud partners, AI partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver cutting-edge AI and IT solutions that drive innovation and business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#partners"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                View Our Partners
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

        {/* Partnership Tiers */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Partnership Tiers</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We maintain different levels of partnerships to ensure the right level of collaboration and support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className={`w-12 h-12 bg-gradient-to-r ${tier.color} rounded-lg mb-4`}></div>
                  <h3 className="text-xl font-semibold text-white mb-3">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="text-2xl font-bold text-purple-400">{tier.count} Partners</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section id="partners" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the industry leaders we collaborate with to deliver exceptional solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">{partner.name.charAt(0)}</span>
                    </div>
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      partner.tier === 'strategic' ? 'bg-purple-500/20 text-purple-300' :
                      partner.tier === 'preferred' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-cyan-500/20 text-cyan-300'
                    }`}>
                      {partner.tier}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{partner.category}</p>
                  <p className="text-gray-300 mb-4">{partner.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Partnership Benefits:</h4>
                    <ul className="space-y-1">
                      {partner.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-gray-300 text-sm">• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      Partner With Us
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our network of strategic partners and help us deliver innovative AI and IT solutions to businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                >
                  Become a Partner
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Learn More About Us
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