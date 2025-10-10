'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';

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
      description: 'Strategic cloud and AI solutions partner',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Leading cloud infrastructure provider',
      category: 'Cloud Services',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Advanced AI and machine learning platform',
      category: 'AI & ML',
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Customer relationship management solutions',
      category: 'CRM',
      website: 'https://salesforce.com',
      tier: 'preferred'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Enterprise database and cloud solutions',
      category: 'Database',
      website: 'https://oracle.com',
      tier: 'preferred'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'AI and enterprise solutions',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'preferred'
    }
  ];

  const partnerTiers = [
    {
      name: 'Strategic Partners',
      description: 'Long-term strategic relationships with shared vision',
      icon: Award,
      color: 'text-yellow-400'
    },
    {
      name: 'Preferred Partners',
      description: 'Trusted partners with proven track record',
      icon: Handshake,
      color: 'text-blue-400'
    },
    {
      name: 'Certified Partners',
      description: 'Certified solution providers and integrators',
      icon: CheckCircle,
      color: 'text-green-400'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology and tools',
    'Joint go-to-market opportunities',
    'Technical training and certification programs',
    'Co-marketing and co-selling support',
    'Priority technical support',
    'Early access to new features and products',
    'Dedicated partner success manager',
    'Revenue sharing opportunities'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Partner Network</title>
        <meta name="description" content="Join our partner network and grow your business with Zion Tech Group. Strategic partnerships, certifications, and joint opportunities." />
        <meta name="keywords" content="partners, partner network, strategic partnerships, technology partners, business partnerships" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Partner Network
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our ecosystem of technology partners and unlock new opportunities for growth, 
            innovation, and success in the AI and IT solutions market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
              Become a Partner
              <ExternalLink className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Benefits
            </button>
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Partner Tiers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership level that best fits your business goals and capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTiers.map((tier, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <tier.icon className={`w-8 h-8 ${tier.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-300">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with industry leaders to deliver the best solutions to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-cyan-400">{partner.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{partner.name}</h3>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      partner.tier === 'strategic' ? 'bg-yellow-400/20 text-yellow-400' :
                      partner.tier === 'preferred' ? 'bg-blue-400/20 text-blue-400' :
                      'bg-green-400/20 text-green-400'
                    }`}>
                      {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{partner.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-400">{partner.category}</span>
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
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Partner Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of joining our partner network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Why Partner With Us</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Partner Success</h3>
              <p className="text-gray-300 mb-6">
                Our partners have achieved remarkable success through our collaborative approach. 
                We provide comprehensive support, training, and resources to help you grow your business.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">500+</div>
                  <div className="text-sm text-gray-300">Active Partners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-1">95%</div>
                  <div className="text-sm text-gray-300">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join Our Partner Network?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your partnership journey with Zion Tech Group and unlock new opportunities for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center gap-2">
              Apply Now
              <TrendingUp className="w-5 h-5" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;