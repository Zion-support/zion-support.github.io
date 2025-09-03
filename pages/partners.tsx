import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ModernHeader } from '../src/components/header/ModernHeader';
import { SimpleFooter } from '../src/components/layout/SimpleFooter';
import {
  Handshake,
  Award,
  Users,
  Globe,
  Shield,
  Cloud,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp
} from 'lucide-react';

export default function Partners() {
  const partnerBenefits = [
    {
      icon: Handshake,
      title: 'Strategic Partners',
      description: 'Long-term partnerships that drive mutual growth and innovation.',
      benefits: ['Joint product development', 'Shared resources', 'Market expansion']
    },
    {
      icon: Award,
      title: 'Technology Partners',
      description: 'Integration partnerships with leading technology providers.',
      benefits: ['API integrations', 'Technical support', 'Co-marketing opportunities']
    },
    {
      icon: Users,
      title: 'Channel Partners',
      description: 'Reseller and referral partnerships for expanded market reach.',
      benefits: ['Revenue sharing', 'Training programs', 'Marketing support']
    },
    {
      icon: Globe,
      title: 'Global Partners',
      description: 'International partnerships for worldwide market presence.',
      benefits: ['Local expertise', 'Regional support', 'Cultural adaptation']
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Cloud and AI solutions partnership',
      category: 'Technology Partner'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Cloud infrastructure and services',
      category: 'Technology Partner'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'AI and machine learning platforms',
      category: 'Technology Partner'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM and business automation',
      category: 'Strategic Partner'
    }
  ];

  const partnershipTypes = [
    {
      title: 'Technology Integration',
      description: 'Integrate your solutions with our platform and services',
      icon: Cloud
    },
    {
      title: 'Reseller Program',
      description: 'Sell our solutions to your customers with attractive margins',
      icon: TrendingUp
    },
    {
      title: 'Referral Program',
      description: 'Earn rewards for referring qualified leads and customers',
      icon: Star
    },
    {
      title: 'Joint Ventures',
      description: 'Collaborate on new products and market opportunities',
      icon: Handshake
    }
  ];

  return (
    <>
      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group. Strategic partnerships, technology integrations, and reseller programs." />
        <meta name="keywords" content="partners, partnerships, reseller program, technology integration, business partnerships" />
      </Head>

      <ModernHeader />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Partner with Us
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join our ecosystem of partners and grow your business with cutting-edge technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Become a Partner
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Partner with Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive partnership programs designed to help you succeed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnerBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <benefit.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.benefits.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Partners
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted by leading technology companies worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentPartners.map((partner, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="h-20 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500 font-semibold">{partner.name}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-2">{partner.category}</p>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Partnership Types
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="p-3 bg-blue-100 rounded-lg mx-auto mb-4 w-fit">
                    <type.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth and success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Start Partnership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                Download Partner Kit
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SimpleFooter />
    </>
  );
}