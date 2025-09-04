import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Building2, 
  Award, 
  Users,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Star
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const partners = [
  {
    name: 'Microsoft',
    logo: 'https://via.placeholder.com/200x100/0078d4/ffffff?text=Microsoft',
    category: 'Technology Partner',
    description: 'Strategic partnership for cloud solutions and enterprise services',
    benefits: ['Azure integration', 'Enterprise support', 'Co-marketing opportunities'],
    tier: 'Platinum'
  },
  {
    name: 'Amazon Web Services',
    logo: 'https://via.placeholder.com/200x100/ff9900/ffffff?text=AWS',
    category: 'Cloud Partner',
    description: 'Leading cloud infrastructure and AI services partnership',
    benefits: ['AWS credits', 'Technical support', 'Training programs'],
    tier: 'Platinum'
  },
  {
    name: 'Google Cloud',
    logo: 'https://via.placeholder.com/200x100/4285f4/ffffff?text=Google+Cloud',
    category: 'AI Partner',
    description: 'Advanced AI and machine learning solutions collaboration',
    benefits: ['AI/ML tools', 'Research collaboration', 'Go-to-market support'],
    tier: 'Gold'
  },
  {
    name: 'Salesforce',
    logo: 'https://via.placeholder.com/200x100/00a1e0/ffffff?text=Salesforce',
    category: 'CRM Partner',
    description: 'Customer relationship management and business automation',
    benefits: ['Integration tools', 'Sales training', 'Customer success'],
    tier: 'Gold'
  },
  {
    name: 'IBM',
    logo: 'https://via.placeholder.com/200x100/052fad/ffffff?text=IBM',
    category: 'Enterprise Partner',
    description: 'Enterprise solutions and consulting services',
    benefits: ['Enterprise tools', 'Consulting services', 'Global reach'],
    tier: 'Silver'
  },
  {
    name: 'Oracle',
    logo: 'https://via.placeholder.com/200x100/f80000/ffffff?text=Oracle',
    category: 'Database Partner',
    description: 'Database solutions and enterprise applications',
    benefits: ['Database tools', 'Migration support', 'Performance optimization'],
    tier: 'Silver'
  }
];

const partnershipTiers = [
  {
    name: 'Platinum',
    color: 'bg-gradient-to-r from-gray-400 to-gray-600',
    requirements: '$1M+ annual revenue',
    benefits: [
      'Dedicated account manager',
      'Priority support',
      'Co-marketing opportunities',
      'Custom integrations',
      'Executive briefings'
    ]
  },
  {
    name: 'Gold',
    color: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
    requirements: '$500K+ annual revenue',
    benefits: [
      'Partner success manager',
      'Enhanced support',
      'Marketing support',
      'Training programs',
      'Sales enablement'
    ]
  },
  {
    name: 'Silver',
    color: 'bg-gradient-to-r from-gray-300 to-gray-500',
    requirements: '$100K+ annual revenue',
    benefits: [
      'Partner portal access',
      'Standard support',
      'Marketing materials',
      'Basic training',
      'Sales tools'
    ]
  }
];

export default function PartnersPage() {
  return (
    <MainLayout
      title="Partners - Zion Tech Group"
      description="Join our partner ecosystem and grow your business with Zion Tech Group. Strategic partnerships, reseller programs, and technology alliances."
      keywords="partners, partnerships, reseller, technology alliance, business partners, channel partners"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Partner{' '}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Ecosystem
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
                Join our growing partner network and unlock new opportunities for growth. 
                Together, we can deliver exceptional value to our customers.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <Link href="#partnerships">
                  <span className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Become a Partner
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Contact Us
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Partnership Tiers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the partnership level that best fits your business goals and unlock exclusive benefits.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                    tier.name === 'Gold' ? 'ring-2 ring-yellow-400 scale-105' : ''
                  }`}
                >
                  {tier.name === 'Gold' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className={`w-16 h-16 ${tier.color} rounded-lg flex items-center justify-center mb-6 mx-auto`}>
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      {tier.name} Partner
                    </h3>
                    
                    <p className="text-gray-600 mb-6 text-center">
                      {tier.requirements}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href="/contact"
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                        tier.name === 'Gold' 
                          ? 'bg-yellow-400 text-yellow-900 hover:bg-yellow-500' 
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section id="partnerships" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Partners
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're proud to work with industry leaders who share our commitment to innovation and excellence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
                >
                  <div className="text-center mb-6">
                    <div className="w-32 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-semibold text-gray-600">{partner.name}</span>
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      partner.tier === 'Platinum' ? 'bg-gray-100 text-gray-800' :
                      partner.tier === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {partner.tier} Partner
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {partner.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {partner.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-purple-100">
                Join our partner ecosystem and unlock new opportunities for growth. 
                Let's build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact">
                  <span className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Start Partnership
                  </span>
                </Link>
                <Link href="/solutions">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    View Solutions
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}