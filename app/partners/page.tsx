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
      category: 'Cloud & AI',
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
      description: 'AI and machine learning solutions',
      category: 'AI & ML',
      website: 'https://cloud.google.com',
      tier: 'preferred'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and quantum computing',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and business automation',
      category: 'CRM & Automation',
      website: 'https://salesforce.com',
      tier: 'certified'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise solutions',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      tier: 'certified'
    }
  ];

  const benefits = [
    {
      icon: <Handshake className="w-8 h-8 text-blue-600" />,
      title: 'Strategic Partnerships',
      description: 'Long-term relationships with industry leaders'
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: 'Certified Solutions',
      description: 'Validated and certified technology integrations'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: 'Expert Support',
      description: 'Dedicated support from partner specialists'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      title: 'Growth Opportunities',
      description: 'Joint go-to-market and co-selling programs'
    }
  ];

  const partnershipTypes = [
    {
      name: 'Technology Partners',
      description: 'Integration and technical collaboration',
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: 'Channel Partners',
      description: 'Reseller and distribution partnerships',
      icon: <Building2 className="w-6 h-6" />
    },
    {
      name: 'Strategic Partners',
      description: 'Long-term strategic alliances',
      icon: <Handshake className="w-6 h-6" />
    },
    {
      name: 'Solution Partners',
      description: 'Joint solution development',
      icon: <Award className="w-6 h-6" />
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return 'bg-gradient-to-r from-blue-500 to-purple-600 text-white';
      case 'preferred':
        return 'bg-gradient-to-r from-green-500 to-blue-500 text-white';
      case 'certified':
        return 'bg-gradient-to-r from-orange-500 to-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Strategic partnerships with leading technology companies. Join our partner ecosystem and grow your business with Zion Tech Group." />
        </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Strategic <span>Partnerships</span>
            </h1>
            <p>Join our ecosystem of technology leaders and grow your business through strategic partnerships
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button>Become a Partner
              </button>
              <button>View Partner Program
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2>Our Partners</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Building2> </Building2>div>
                    <span>{partner.tier.toUpperCase()}
                    </span>
                  </div>
                  
                  <h3>{partner.name}</h3>
                  <p>{partner.description}</p>
                  <p>{partner.category}</p>
                  
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Visit Website
                      <ExternalLink> </ExternalLink>a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2>Partnership Types</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                  <div>{type.icon}
                  </div>
                  <h3>{type.name}</h3>
                  <p>{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2>Partnership Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div>{benefit.icon}
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2>Ready to Partner With Us?</h2>
            <p>Join our partner ecosystem and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Handshake>Become a Partner
              </Handshake>button>
              <button>Download Partner Kit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;