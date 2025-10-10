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
      description: 'Strategic cloud and AI partnership for enterprise solutions',
      category: 'Technology',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Preferred cloud infrastructure and AI services partner',
      category: 'Cloud',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Certified partner for machine learning and data analytics',
      category: 'Cloud',
      website: 'https://cloud.google.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Strategic CRM and business automation solutions',
      category: 'CRM',
      website: 'https://salesforce.com',
      tier: 'strategic'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and cognitive computing solutions',
      category: 'AI',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise application solutions',
      category: 'Database',
      website: 'https://oracle.com',
      tier: 'certified'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical training and certification',
    'Co-marketing and co-selling programs',
    'Dedicated partner success manager',
    'Priority support and resources'
  ];

  const tiers = [
    {
      name: 'Strategic Partners',
      description: 'Our most important technology and business partners',
      icon: <Award className="w-8 h-8 text-gold-500" />,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Preferred Partners',
      description: 'Trusted partners with proven track records',
      icon: <Handshake className="w-8 h-8 text-blue-500" />,
      color: 'from-blue-400 to-purple-500'
    },
    {
      name: 'Certified Partners',
      description: 'Qualified partners with specialized expertise',
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      color: 'from-green-400 to-teal-500'
    }
  ];

  const stats = [
    { icon: <Building2 className="w-8 h-8 text-blue-500" />, value: '50+', label: 'Partners' },
    { icon: <Users className="w-8 h-8 text-green-500" />, value: '1000+', label: 'Joint Customers' },
    { icon: <Zap className="w-8 h-8 text-purple-500" />, value: '95%', label: 'Success Rate' },
    { icon: <Award className="w-8 h-8 text-orange-500" />, value: '25+', label: 'Awards Won' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Partners - Zion Tech Group | Partner Program</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group. Strategic, preferred, and certified partner programs available." />
        <meta name="keywords" content="partners, partner program, technology partners, business partners, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Partner Ecosystem
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Join our network of trusted partners and grow your business with cutting-edge AI and IT solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Become a Partner
              </Link>
              <Link
                to="/partners/benefits"
                className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Partner Tiers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex justify-center mb-4">
                    {tier.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tier.name}</h3>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  <div className={`w-full h-2 bg-gradient-to-r ${tier.color} rounded-full`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Partners</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-4">
                      <div className="w-12 h-12 bg-gray-200 rounded"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{partner.name}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        partner.tier === 'strategic' ? 'bg-yellow-100 text-yellow-800' :
                        partner.tier === 'preferred' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
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
                        className="text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        Visit <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Partner Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join our partner ecosystem and unlock new opportunities for growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                Apply Now <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/partners/benefits"
                className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;