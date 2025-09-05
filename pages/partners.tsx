import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, Handshake, Users, Award, CheckCircle, ArrowRight, Star, Building, Shield, Zap } from 'lucide-react';
import MainLayout from './components/layout/MainLayout';

const partnershipTypes = [
  {
    title: 'Technology Partners',
    description: 'Leading technology companies that provide cutting-edge solutions and platforms.',
    icon: Globe,
    color: 'blue',
    benefits: [
      'Access to latest technologies',
      'Joint product development',
      'Technical support and training',
      'Co-marketing opportunities'
    ]
  },
  {
    title: 'Solution Partners',
    description: 'Specialized solution providers that complement our services and offerings.',
    icon: Building,
    color: 'green',
    benefits: [
      'Integrated solutions',
      'Expanded service portfolio',
      'Market expertise',
      'Customer referrals'
    ]
  },
  {
    title: 'Channel Partners',
    description: 'Resellers and distributors who help us reach new markets and customers.',
    icon: Users,
    color: 'purple',
    benefits: [
      'Market expansion',
      'Local presence',
      'Customer relationships',
      'Revenue growth'
    ]
  }
];

const partners = [
  {
    name: 'Microsoft',
    logo: '/images/partners/microsoft.png',
    description: 'Cloud infrastructure and AI services',
    category: 'Technology Partner',
    website: 'https://microsoft.com'
  },
  {
    name: 'Amazon Web Services',
    logo: '/images/partners/aws.png',
    description: 'Cloud computing and storage solutions',
    category: 'Technology Partner',
    website: 'https://aws.amazon.com'
  },
  {
    name: 'Google Cloud',
    logo: '/images/partners/google-cloud.png',
    description: 'AI and machine learning platforms',
    category: 'Technology Partner',
    website: 'https://cloud.google.com'
  },
  {
    name: 'Salesforce',
    logo: '/images/partners/salesforce.png',
    description: 'CRM and business automation',
    category: 'Solution Partner',
    website: 'https://salesforce.com'
  },
  {
    name: 'IBM',
    logo: '/images/partners/ibm.png',
    description: 'Enterprise AI and analytics',
    category: 'Technology Partner',
    website: 'https://ibm.com'
  },
  {
    name: 'Oracle',
    logo: '/images/partners/oracle.png',
    description: 'Database and enterprise software',
    category: 'Technology Partner',
    website: 'https://oracle.com'
  }
];

const benefits = [
  {
    icon: Handshake,
    title: 'Strategic Partnerships',
    description: 'Long-term relationships built on mutual trust and shared goals'
  },
  {
    icon: Award,
    title: 'Certified Expertise',
    description: 'Certified professionals with deep knowledge of partner technologies'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security and compliance standards'
  },
  {
    icon: Zap,
    title: 'Rapid Implementation',
    description: 'Fast deployment and integration of partner solutions'
  }
];

export default function PartnersPage() {
  return (
    <MainLayout
      title="Partners - Zion Tech Group"
      description="Discover our strategic partnerships with leading technology companies and solution providers."
      keywords="partners, partnerships, technology partners, solution partners, strategic alliances"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Partners</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Strategic partnerships with leading technology companies to deliver exceptional solutions and value to our clients.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Partnership Types</h2>
                <p className="text-xl text-gray-600">
                  We work with different types of partners to provide comprehensive solutions
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {partnershipTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gray-50 p-8 rounded-lg"
                  >
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${
                      type.color === 'blue' ? 'bg-blue-100' : 
                      type.color === 'green' ? 'bg-green-100' : 'bg-purple-100'
                    }`}>
                      <type.icon className={`w-8 h-8 ${
                        type.color === 'blue' ? 'text-blue-600' : 
                        type.color === 'green' ? 'text-green-600' : 'text-purple-600'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                    <p className="text-gray-600 mb-6">{type.description}</p>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Partners</h2>
                <p className="text-xl text-gray-600">
                  Trusted by leading technology companies worldwide
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-gray-500 font-semibold">{partner.name.charAt(0)}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                      <p className="text-gray-600 mb-3">{partner.description}</p>
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-4">
                        {partner.category}
                      </span>
                      <div className="flex justify-center">
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Visit Website
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Partner With Us</h2>
                <p className="text-xl text-gray-600">
                  We bring value to our partnerships through expertise, innovation, and commitment
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Become a Partner</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Join our partner network and grow your business with Zion Tech Group
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/partnership-program"
                    className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Partnership Program
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}