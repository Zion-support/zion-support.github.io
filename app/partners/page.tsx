'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp, Building2, Zap } from 'lucide-react';

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
      description: 'Strategic cloud and AI partnership',
      category: 'Technology',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Cloud infrastructure and AI services',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'AI and machine learning platforms',
      category: 'AI/ML',
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and business automation',
      category: 'Business Software',
      website: 'https://salesforce.com',
      tier: 'preferred'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and quantum computing',
      category: 'Enterprise',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise applications',
      category: 'Database',
      website: 'https://oracle.com',
      tier: 'preferred'
    },
    {
      name: 'Dell Technologies',
      logo: '/images/partners/dell.png',
      description: 'Infrastructure and hardware solutions',
      category: 'Infrastructure',
      website: 'https://dell.com',
      tier: 'certified'
    },
    {
      name: 'Cisco',
      logo: '/images/partners/cisco.png',
      description: 'Networking and security solutions',
      category: 'Networking',
      website: 'https://cisco.com',
      tier: 'certified'
    }
  ];

  const benefits = [
    {
      icon: <Handshake className="h-8 w-8" />,
      title: 'Strategic Partnerships',
      description: 'Collaborate with industry leaders to deliver cutting-edge solutions'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Growth Opportunities',
      description: 'Access to new markets and customer segments through our partner network'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Certification Programs',
      description: 'Get certified on our platforms and solutions to enhance your expertise'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Support',
      description: 'Join our partner community for networking and knowledge sharing'
    }
  ];

  const tiers = {
    strategic: {
      name: 'Strategic Partners',
      description: 'Our most important partnerships with industry leaders',
      color: 'from-blue-500 to-purple-600'
    },
    preferred: {
      name: 'Preferred Partners',
      description: 'Trusted partners with proven track records',
      color: 'from-green-500 to-blue-600'
    },
    certified: {
      name: 'Certified Partners',
      description: 'Certified solution providers and integrators',
      color: 'from-orange-500 to-red-600'
    }
  };

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group. Strategic partnerships, certifications, and growth opportunities." />
        <meta name="keywords" content="partners, partnerships, strategic partners, certified partners, business partnerships, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Partners
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Join our ecosystem of industry leaders and grow your business with strategic partnerships.
              </p>
            </div>
          </div>
        </div>

        {/* Partner Tiers */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Partner Tiers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We work with partners at different levels to provide comprehensive solutions to our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(tiers).map(([key, tier]) => (
                <div key={key} className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${tier.color} text-white mb-4`}>
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600">
                    {tier.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Partner Network
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet our trusted partners who help us deliver exceptional solutions to our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                  <div className="mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-16 w-16 mx-auto object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {partner.description}
                  </p>
                  <div className="flex items-center justify-center mb-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      partner.tier === 'strategic' ? 'bg-blue-100 text-blue-800' :
                      partner.tier === 'preferred' ? 'bg-green-100 text-green-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {tiers[partner.tier].name}
                    </span>
                  </div>
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Visit Website
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Partner Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the advantages of partnering with Zion Tech Group.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-100 rounded-full text-blue-600">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                Become a Partner
                <ExternalLink className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;