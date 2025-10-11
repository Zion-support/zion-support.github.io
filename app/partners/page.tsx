'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink, ArrowRight, Building2, Handshake, Award, Users, Zap } from 'lucide-react';

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
      description: 'Strategic partner for cloud solutions and enterprise software',
      category: 'Cloud & Enterprise',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Preferred cloud infrastructure partner',
      category: 'Cloud Infrastructure',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'AI and machine learning solutions partner',
      category: 'AI & ML',
      website: 'https://cloud.google.com',
      tier: 'preferred'
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
      description: 'CRM and customer experience solutions',
      category: 'CRM & CX',
      website: 'https://salesforce.com',
      tier: 'certified'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise applications',
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
    'Joint customer success programs',
    'Revenue sharing opportunities'
  ];

  const tiers = [
    {
      name: 'Strategic Partners',
      description: 'Our most important partnerships with industry leaders',
      color: 'from-purple-500 to-blue-500',
      count: partners.filter(p => p.tier === 'strategic').length
    },
    {
      name: 'Preferred Partners',
      description: 'Trusted partners with proven track records',
      color: 'from-blue-500 to-cyan-500',
      count: partners.filter(p => p.tier === 'preferred').length
    },
    {
      name: 'Certified Partners',
      description: 'Certified solution providers and integrators',
      color: 'from-cyan-500 to-green-500',
      count: partners.filter(p => p.tier === 'certified').length
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Join our partner ecosystem and unlock new opportunities." />
        <meta name="keywords" content="technology partners, strategic partnerships, cloud partners, AI partners, enterprise solutions" />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Strategic technology partnerships and ecosystem" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/partners" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Strategic <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Partnerships</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            We work with industry leaders to deliver cutting-edge solutions and create value for our customers through strategic partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Become a Partner
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Partner Ecosystem</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We maintain strategic relationships with leading technology companies to provide comprehensive solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {tiers.map((tier, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-300 mb-4">{tier.description}</p>
                <div className="text-2xl font-bold text-white">{tier.count} Partners</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Partners</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Meet the technology leaders we work with to deliver exceptional solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-gray-600" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    partner.tier === 'strategic' ? 'bg-purple-500/20 text-purple-300' :
                    partner.tier === 'preferred' ? 'bg-blue-500/20 text-blue-300' :
                    'bg-cyan-500/20 text-cyan-300'
                  }`}>
                    {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {partner.name}
                </h3>
                
                <p className="text-gray-300 mb-4">{partner.description}</p>
                
                <div className="text-sm text-gray-400 mb-4">{partner.category}</div>
                
                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                  >
                    Visit Website
                    <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Partner Benefits</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Join our partner ecosystem and unlock exclusive benefits and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join our growing ecosystem of technology partners and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Become a Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;