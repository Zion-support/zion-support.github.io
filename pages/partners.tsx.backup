import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, Cloud, Zap, Users, Shield, Award, Handshake, ArrowRight } from 'lucide-react';

const partners = [
  {
    name: 'Microsoft',
    category: 'Cloud Partner',
    description: 'Strategic partnership for Azure cloud services and AI solutions',
    logo: '/api/placeholder/200/100',
    website: 'https://microsoft.com'
  },
  {
    name: 'Amazon Web Services',
    category: 'Cloud Partner',
    description: 'Leading cloud infrastructure and AI services provider',
    logo: '/api/placeholder/200/100',
    website: 'https://aws.amazon.com'
  },
  {
    name: 'Google Cloud',
    category: 'Cloud Partner',
    description: 'Advanced AI and machine learning platform partnership',
    logo: '/api/placeholder/200/100',
    website: 'https://cloud.google.com'
  },
  {
    name: 'OpenAI',
    category: 'AI Partner',
    description: 'Exclusive partnership for cutting-edge AI technologies',
    logo: '/api/placeholder/200/100',
    website: 'https://openai.com'
  },
  {
    name: 'Salesforce',
    category: 'CRM Partner',
    description: 'Customer relationship management and business solutions',
    logo: '/api/placeholder/200/100',
    website: 'https://salesforce.com'
  },
  {
    name: 'HubSpot',
    category: 'Marketing Partner',
    description: 'Inbound marketing and sales platform integration',
    logo: '/api/placeholder/200/100',
    website: 'https://hubspot.com'
  }
];

const partnershipBenefits = [
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Access to leading cloud platforms and services'
  },
  {
    icon: Zap,
    title: 'AI Technologies',
    description: 'Cutting-edge AI and machine learning capabilities'
  },
  {
    icon: Shield,
    title: 'Security Solutions',
    description: 'Enterprise-grade security and compliance tools'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated support from our partner network'
  }
];

export default function PartnersPage() {
  return (
    <>
      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Learn about our strategic partnerships with leading technology companies and how they benefit our clients." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Partners</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We work with industry leaders to deliver the best solutions for our clients.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Partners</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our partnerships enable us to provide comprehensive solutions and cutting-edge technology.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-gray-400">Logo</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{partner.category}</p>
                    <p className="text-gray-600 mb-4">{partner.description}</p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Visit Website
                      <Globe className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Benefits</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our strategic partnerships provide significant advantages for our clients.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Become a Partner
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Interested in partnering with us? Let's explore how we can work together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}