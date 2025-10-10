'use client';
import React from 'react';
import { CheckCircle, ExternalLink, Award, Users, Zap, Shield } from 'lucide-react';
import SEOHead from '../components/EnhancedSEOHead';

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
      description: 'Enterprise AI solutions and quantum computing partnerships',
      category: 'Enterprise AI',
      website: 'https://ibm.com'
    },
    {
      name: 'NVIDIA',
      logo: '/api/placeholder/200/100',
      description: 'GPU computing and AI acceleration technologies',
      category: 'Hardware & AI',
      website: 'https://nvidia.com'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM and business automation solutions integration',
      category: 'Business Software',
      website: 'https://salesforce.com'
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database and enterprise software solutions',
      category: 'Enterprise Software',
      website: 'https://oracle.com'
    },
    {
      name: 'Intel',
      logo: '/api/placeholder/200/100',
      description: 'Advanced processor technologies and AI optimization',
      category: 'Hardware',
      website: 'https://intel.com'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology and platforms',
    'Joint go-to-market strategies and co-selling opportunities',
    'Technical training and certification programs',
    'Priority support and dedicated resources',
    'Shared research and development initiatives',
    'Expanded market reach and customer base',
    'Cost-effective solution delivery',
    'Innovation acceleration through collaboration'
  ];

  const partnershipTypes = [
    {
      icon: Award,
      title: 'Technology Partners',
      description: 'Strategic alliances with leading technology providers to deliver integrated solutions.',
      partners: ['Microsoft', 'AWS', 'Google Cloud', 'IBM']
    },
    {
      icon: Users,
      title: 'Channel Partners',
      description: 'Reseller and distribution partnerships to expand our market presence.',
      partners: ['System Integrators', 'Consulting Firms', 'VARs']
    },
    {
      icon: Zap,
      title: 'Solution Partners',
      description: 'Collaborative development of specialized solutions for specific industries.',
      partners: ['Healthcare', 'Finance', 'Manufacturing', 'Retail']
    },
    {
      icon: Shield,
      title: 'Security Partners',
      description: 'Cybersecurity and compliance partnerships for enterprise-grade security.',
      partners: ['Security Vendors', 'Compliance Experts', 'Audit Firms']
    }
  ];

  const categories = ['All', 'Cloud & AI', 'Cloud Computing', 'AI & ML', 'Enterprise AI', 'Hardware & AI', 'Business Software', 'Enterprise Software', 'Hardware'];

  return (
    <>
      <SEOHead
        title="Partners - Zion Tech Group | Strategic Partnerships"
        description="Explore our strategic partnerships with leading technology companies. Learn about partnership opportunities and benefits."
        keywords={['partners', 'partnerships', 'strategic alliances', 'technology partners', 'cloud partners', 'AI partners']}
        canonicalUrl="https://ziontechgroup.com/partners"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              Strategic Partnerships
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We work with industry leaders to deliver cutting-edge solutions and expand our capabilities. 
              Our partnerships enable us to provide comprehensive AI and IT services to our clients.
            </p>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Partnership Types
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We maintain various types of partnerships to serve different market needs and opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <type.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div className="space-y-1">
                    {type.partners.map((partner, partnerIndex) => (
                      <span
                        key={partnerIndex}
                        className="inline-block px-2 py-1 bg-gray-800 text-cyan-400 text-xs rounded-full mr-1 mb-1"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Our Partners
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We're proud to work with industry-leading technology companies and solution providers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300"
                >
                  <div className="mb-4">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-24 h-12 object-contain mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full mb-3">
                      {partner.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                  
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
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
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card hologram-card p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                  Partnership Benefits
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Our partnerships provide mutual benefits that drive innovation and deliver value to our clients.
                </p>
              </div>
              
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

        {/* Become a Partner */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Become a Partner
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Interested in partnering with us? We're always looking for innovative companies 
                that share our vision of transforming businesses through technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button text-center"
                >
                  Contact Partnership Team
                  <ExternalLink className="w-4 h-4 ml-2 inline" />
                </a>
                <a
                  href="mailto:partnerships@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Email Us
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