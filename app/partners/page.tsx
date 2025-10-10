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
      description: 'Strategic partnership for enterprise AI and Watson services',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'strategic'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Preferred partner for CRM and business automation solutions',
      category: 'Business Software',
      website: 'https://salesforce.com',
      tier: 'preferred'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Certified partner for database and enterprise software solutions',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      tier: 'certified'
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'Strategic partnership for GPU computing and AI acceleration',
      category: 'Hardware & AI',
      website: 'https://nvidia.com',
      tier: 'strategic'
    },
    {
      name: 'Intel',
      logo: '/images/partners/intel.png',
      description: 'Preferred partner for CPU and AI chip solutions',
      category: 'Hardware',
      website: 'https://intel.com',
      tier: 'preferred'
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Certified Expertise',
      description: 'Our team holds certifications from leading technology partners'
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'Dedicated Support',
      description: 'Direct access to partner support teams and resources'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: 'Early Access',
      description: 'Get early access to new features and beta programs'
    },
    {
      icon: <Handshake className="w-8 h-8 text-orange-600" />,
      title: 'Joint Solutions',
      description: 'Collaborative development of custom solutions'
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return 'bg-gradient-to-r from-purple-500 to-blue-500';
      case 'preferred':
        return 'bg-gradient-to-r from-blue-500 to-green-500';
      case 'certified':
        return 'bg-gradient-to-r from-green-500 to-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getTierLabel = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return 'Strategic Partner';
      case 'preferred':
        return 'Preferred Partner';
      case 'certified':
        return 'Certified Partner';
      default:
        return 'Partner';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Partners - Zion Tech Group | Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions." />
        <meta name="keywords" content="technology partners, Microsoft partner, AWS partner, Google Cloud partner, enterprise partnerships" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Technology Partners
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              We collaborate with industry leaders to deliver the most advanced and reliable technology solutions
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Certified Partners
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Strategic Alliances
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Joint Innovation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Partners</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                <div className="text-center mb-4">
                  <div className="h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-2xl font-bold text-gray-600">{partner.name.charAt(0)}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${getTierColor(partner.tier)}`}>
                    {getTierLabel(partner.tier)}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 text-center">{partner.description}</p>
                
                <div className="text-center">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{partner.category}</span>
                </div>
                
                {partner.website && (
                  <div className="mt-4 text-center">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center justify-center"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Partnership Benefits</h2>
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

      {/* Partnership Tiers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Partnership Tiers</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Certified Partner</h3>
                <p className="text-gray-600 mt-2">Basic partnership with certification</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Official certification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Partner portal access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Marketing support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Training resources</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Preferred Partner</h3>
                <p className="text-gray-600 mt-2">Enhanced partnership with priority support</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Everything in Certified</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Priority support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Co-marketing opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Technical resources</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Sales enablement</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Strategic Partner</h3>
                <p className="text-gray-600 mt-2">Deep integration and joint innovation</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Everything in Preferred</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Joint product development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Early access to new features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Custom solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join our partner ecosystem and help us deliver innovative technology solutions to businesses worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
                Apply to Partner
                <ExternalLink className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-900 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;