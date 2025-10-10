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
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Preferred partner for AWS cloud infrastructure and machine learning services',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
      tier: 'preferred'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Certified partner for Google Cloud Platform and AI/ML solutions',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'certified'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Strategic partnership for enterprise AI and quantum computing solutions',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'strategic'
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'Preferred partner for GPU-accelerated AI and deep learning solutions',
      category: 'AI Hardware',
      website: 'https://nvidia.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Certified partner for CRM integration and business automation',
      category: 'Business Software',
      website: 'https://salesforce.com',
      tier: 'certified'
    }
  ];

  const benefits = [
    {
      icon: <Handshake className="w-8 h-8 text-blue-500" />,
      title: 'Strategic Partnerships',
      description: 'Access to cutting-edge technology and resources through our strategic partnerships'
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      title: 'Certified Solutions',
      description: 'All our solutions are certified and validated by leading technology partners'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Expert Support',
      description: 'Dedicated support from certified professionals and partner technical teams'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business through our partner ecosystem'
    }
  ];

  const partnerTiers = {
    strategic: {
      name: 'Strategic Partners',
      description: 'Our most important partnerships with industry leaders',
      color: 'from-blue-500 to-purple-500'
    },
    preferred: {
      name: 'Preferred Partners',
      description: 'Trusted partners with proven track records',
      color: 'from-green-500 to-blue-500'
    },
    certified: {
      name: 'Certified Partners',
      description: 'Validated partners with specialized expertise',
      color: 'from-purple-500 to-pink-500'
    }
  };

  const getPartnersByTier = (tier: keyof typeof partnerTiers) => 
    partners.filter(partner => partner.tier === tier);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Access certified solutions and expert support through our partner ecosystem." />
        <meta name="keywords" content="technology partners, strategic partnerships, certified solutions, Microsoft Azure, AWS, Google Cloud" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Strategic Partnerships
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Leveraging the power of collaboration with industry-leading technology partners
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our partnerships provide you with access to the best technology and expertise in the industry
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners by Tier */}
      {Object.entries(partnerTiers).map(([tierKey, tierInfo]) => {
        const tierPartners = getPartnersByTier(tierKey as keyof typeof partnerTiers);
        if (tierPartners.length === 0) return null;

        return (
          <section key={tierKey} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{tierInfo.name}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">{tierInfo.description}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tierPartners.map((partner, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-12 h-12 object-contain mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{partner.name}</h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${tierInfo.color} text-white`}>
                          {tierInfo.name}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{partner.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{partner.category}</span>
                      {partner.website && (
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                        >
                          Visit Website
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Partnership Opportunities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interested in becoming a partner? We're always looking for innovative companies to join our ecosystem.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <Building2 className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technology Partners</h3>
              <p className="text-gray-600 mb-6">
                Integrate your technology with our solutions to create powerful, comprehensive offerings for our clients.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">API integration support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Joint go-to-market opportunities</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Technical certification programs</span>
                </li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <Zap className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Channel Partners</h3>
              <p className="text-gray-600 mb-6">
                Resell our solutions and provide implementation services to your clients with our support.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Competitive partner pricing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Sales and technical training</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Marketing support and co-op funds</span>
                </li>
              </ul>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our partner ecosystem and unlock new opportunities for growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Become a Partner
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Partner Benefits
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;