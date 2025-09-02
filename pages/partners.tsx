import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { CheckCircle, Star, Users, Globe, Award, Handshake } from 'lucide-react';
import Link from 'next/link';

const Partners: NextPage = () => {
  const partnerBenefits = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: 'Global Reach',
      description: 'Access to our worldwide network of clients and opportunities'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Certified Solutions',
      description: 'Get certified on our cutting-edge technology solutions'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Dedicated Support',
      description: 'Receive dedicated partner support and training resources'
    },
    {
      icon: <Handshake className="w-8 h-8 text-blue-600" />,
      title: 'Revenue Sharing',
      description: 'Competitive revenue sharing and incentive programs'
    }
  ];

  const partnerTypes = [
    {
      title: 'Technology Partners',
      description: 'Integrate our solutions with your technology stack',
      features: ['API Integration', 'SDK Access', 'Technical Support', 'Co-marketing']
    },
    {
      title: 'Channel Partners',
      description: 'Resell our solutions to your customer base',
      features: ['Reseller Program', 'Sales Training', 'Marketing Support', 'Lead Sharing']
    },
    {
      title: 'Strategic Partners',
      description: 'Joint go-to-market and product development',
      features: ['Joint Development', 'Market Expansion', 'Strategic Planning', 'Executive Alignment']
    }
  ];

  return (
    <MainLayout
      title="Partners - Zion Tech Group"
      description="Join our partner ecosystem and grow your business with Zion Tech Group's cutting-edge technology solutions."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Join our ecosystem of innovative partners and unlock new opportunities for growth, 
            innovation, and success in the technology landscape.
          </p>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
            Become a Partner
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive partnership programs designed to help you succeed and grow your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="space-y-3">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our partner ecosystem and start growing your business with our innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Contact Partnership Team
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Partners;