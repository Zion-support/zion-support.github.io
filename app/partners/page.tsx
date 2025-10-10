'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink, ArrowRight, Star, Users, Globe, Shield } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Advanced AI and machine learning solutions on Google Cloud Platform',
      category: 'AI & ML',
      website: 'https://cloud.google.com'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise AI solutions and Watson platform integration',
      category: 'Enterprise AI',
      website: 'https://ibm.com'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM integration and AI-powered customer experience solutions',
      category: 'CRM & Sales',
      website: 'https://salesforce.com'
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database solutions and enterprise application integration',
      category: 'Database & ERP',
      website: 'https://oracle.com'
    },
    {
      name: 'NVIDIA',
      logo: '/api/placeholder/200/100',
      description: 'GPU computing and AI acceleration for machine learning workloads',
      category: 'AI Hardware',
      website: 'https://nvidia.com'
    },
    {
      name: 'Intel',
      logo: '/api/placeholder/200/100',
      description: 'High-performance computing and AI optimization solutions',
      category: 'Hardware & Computing',
      website: 'https://intel.com'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology and platforms',
    'Joint go-to-market strategies and co-selling opportunities',
    'Technical training and certification programs',
    'Priority support and dedicated resources',
    'Co-marketing and brand association benefits',
    'Early access to new features and beta programs',
    'Joint innovation labs and R&D collaboration',
    'Global reach and market expansion support'
  ];

  const partnershipTypes = [
    {
      icon: Star,
      title: 'Technology Partners',
      description: 'Strategic technology alliances with leading cloud and AI providers',
      count: '15+'
    },
    {
      icon: Users,
      title: 'Channel Partners',
      description: 'Reseller and implementation partners across different regions',
      count: '50+'
    },
    {
      icon: Globe,
      title: 'Global Partners',
      description: 'International partners for worldwide market coverage',
      count: '25+'
    },
    {
      icon: Shield,
      title: 'Security Partners',
      description: 'Cybersecurity and compliance solution providers',
      count: '10+'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. Join our partner ecosystem and grow your business with us." />
        <meta name="keywords" content="partners, partnerships, strategic alliances, technology partners, channel partners, Microsoft, AWS, Google Cloud" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Strategic Partnerships
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver cutting-edge solutions and expand our global reach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="cyber-button text-center py-4 px-8"
              >
                Become a Partner
              </Link>
              <Link
                to="/about"
                className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Partnership Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div className="text-2xl font-bold text-cyan-400">{type.count}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Partners */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Technology Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="bg-gray-800 rounded-lg h-24 mb-4 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">{partner.name}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-cyan-400 text-sm mb-3">{partner.category}</p>
                  <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center justify-center"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card hologram-card p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Partnership Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partner Success Stories */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Partner Success Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Microsoft Partnership</h3>
                <p className="text-gray-300 mb-6">
                  Through our strategic partnership with Microsoft, we've successfully migrated 50+ enterprise clients to Azure, 
                  achieving 99.9% uptime and 40% cost savings.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">50+</div>
                    <div className="text-gray-300 text-sm">Clients Migrated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">40%</div>
                    <div className="text-gray-300 text-sm">Cost Savings</div>
                  </div>
                </div>
              </div>
              
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">AWS Collaboration</h3>
                <p className="text-gray-300 mb-6">
                  Our partnership with AWS has enabled us to deliver AI-powered solutions to clients worldwide, 
                  processing over 1 million data points daily with real-time insights.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">1M+</div>
                    <div className="text-gray-300 text-sm">Data Points/Day</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">99.9%</div>
                    <div className="text-gray-300 text-sm">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join our growing ecosystem of partners and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-center py-4 px-8"
                >
                  Become a Partner
                </Link>
                <a
                  href="mailto:partners@ziontechgroup.com"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
                >
                  Contact Partnership Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;