'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink, ArrowRight, Building2, Handshake, Award, Users, Zap, TrendingUp } from 'lucide-react';

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
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Advanced AI and machine learning platform with global reach',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and quantum computing solutions',
      category: 'AI & Quantum',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Customer relationship management and business automation',
      category: 'CRM & Automation',
      website: 'https://salesforce.com',
      tier: 'preferred'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Enterprise database and cloud infrastructure solutions',
      category: 'Database & Cloud',
      website: 'https://oracle.com',
      tier: 'preferred'
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'AI computing and GPU acceleration technologies',
      category: 'AI Hardware',
      website: 'https://nvidia.com',
      tier: 'certified'
    },
    {
      name: 'Intel',
      logo: '/images/partners/intel.png',
      description: 'Advanced processors and AI optimization technologies',
      category: 'Hardware & AI',
      website: 'https://intel.com',
      tier: 'certified'
    }
  ];

  const benefits = [
    {
      icon: <Handshake className="h-8 w-8 text-blue-600" />,
      title: 'Strategic Partnerships',
      description: 'Deep integrations with leading technology providers'
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: 'Certified Expertise',
      description: 'Certified professionals across all major platforms'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: 'Joint Solutions',
      description: 'Co-developed solutions that leverage partner technologies'
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: 'Faster Implementation',
      description: 'Accelerated deployment through partner integrations'
    }
  ];

  const tiers = {
    strategic: {
      label: 'Strategic Partner',
      color: 'bg-blue-100 text-blue-800',
      description: 'Deep integration and co-development'
    },
    preferred: {
      label: 'Preferred Partner',
      color: 'bg-green-100 text-green-800',
      description: 'Certified expertise and priority support'
    },
    certified: {
      label: 'Certified Partner',
      color: 'bg-purple-100 text-purple-800',
      description: 'Certified professionals and solutions'
    }
  };

  return (
    <>
      <Helmet>
        <title>Partners - Strategic Technology Partnerships | Zion Tech Group</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology providers. We work with industry leaders to deliver the best solutions for our clients." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, Salesforce" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Strategic Partnerships
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                We partner with industry leaders to deliver cutting-edge solutions. 
                Our strategic alliances ensure you get the best technology and support.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
              <p className="text-xl text-gray-600">
                Our partnerships bring you the best of both worlds
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Partners</h2>
              <p className="text-xl text-gray-600">
                Trusted by industry leaders worldwide
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {partners.map((partner) => (
                <div key={partner.name} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{partner.name}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${tiers[partner.tier].color}`}>
                        {tiers[partner.tier].label}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{partner.category}</span>
                    {partner.website && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                      >
                        Visit
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnership Tiers */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Tiers</h2>
              <p className="text-xl text-gray-600">
                Different levels of partnership for different needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(tiers).map(([tier, info]) => (
                <div key={tier} className="bg-gray-50 rounded-lg p-6">
                  <div className="text-center">
                    <div className={`inline-flex px-4 py-2 rounded-full text-sm font-medium mb-4 ${info.color}`}>
                      {info.label}
                    </div>
                    <p className="text-gray-600">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Become a Partner CTA */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our partner ecosystem and help us deliver innovative solutions to clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply to Become a Partner
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Download Partner Kit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;