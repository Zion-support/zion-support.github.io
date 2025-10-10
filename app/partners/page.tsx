'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ExternalLink, 
  Zap, 
  Globe, 
  Shield, 
  Cloud, 
  Brain,
  ArrowRight
} from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      id: 1,
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com'
    },
    {
      id: 2,
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com'
    },
    {
      id: 3,
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Advanced AI and machine learning solutions on Google Cloud Platform',
      category: 'AI & ML',
      website: 'https://cloud.google.com'
    },
    {
      id: 4,
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise AI solutions and quantum computing partnerships',
      category: 'Enterprise AI',
      website: 'https://ibm.com'
    },
    {
      id: 5,
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM and customer experience solutions integration',
      category: 'CRM & CX',
      website: 'https://salesforce.com'
    },
    {
      id: 6,
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database and enterprise application solutions',
      category: 'Enterprise Software',
      website: 'https://oracle.com'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint go-to-market strategies',
    'Technical support and training',
    'Co-marketing opportunities',
    'Priority customer support',
    'Exclusive product features',
    'Revenue sharing programs',
    'Joint innovation labs'
  ];

  const categories = [
    { name: 'Cloud & AI', icon: Cloud, count: 15 },
    { name: 'Enterprise Software', icon: Globe, count: 12 },
    { name: 'Security', icon: Shield, count: 8 },
    { name: 'AI & ML', icon: Brain, count: 20 }
  ];

  return (
    <>
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Join our partner ecosystem and grow your business." />
        <meta name="keywords" content="partners, partnerships, Microsoft, AWS, Google Cloud, IBM, technology partners" />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="absolute inset-0 cyber-grid"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text">
              Our Partners
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Strategic Technology Partnerships
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              We work with industry leaders to deliver cutting-edge solutions. 
              Our strategic partnerships enable us to provide comprehensive AI and IT services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#partners"
                className="cyber-button w-full sm:w-auto text-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                View All Partners
              </a>
              <a
                href="mailto:partners@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                📧 Become a Partner
              </a>
            </div>
          </div>
        </section>

        {/* Partner Categories */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Partner Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 neon-text">
                    {category.name}
                  </h3>
                  <p className="text-cyan-400 font-semibold text-lg">
                    {category.count} Partners
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section id="partners" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Strategic Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner) => (
                <div key={partner.id} className="quantum-card p-6 energy-pulse">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <div className="text-4xl">🏢</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 neon-text">
                      {partner.name}
                    </h3>
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {partner.category}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6 text-sm text-center">
                    {partner.description}
                  </p>

                  <div className="text-center">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-all duration-300 hover:neon-glow"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Partnership Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl mb-4">✨</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our partner ecosystem and unlock new opportunities for growth. 
                Let's work together to deliver exceptional solutions to our clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:partners@ziontechgroup.com"
                  className="cyber-button w-full sm:w-auto text-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Become a Partner
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-200"
                >
                  📞 Call: (302) 464-0950
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
