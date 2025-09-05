import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { Handshake, Award, Globe, Users, Zap, Shield, Cloud } from 'lucide-react';

const partners = [
  {
    name: 'Microsoft',
    category: 'Cloud Partner',
    description: 'Certified Microsoft Azure partner providing cloud solutions and migration services.',
    logo: '/api/placeholder/200/100',
    benefits: ['Azure credits', 'Technical support', 'Co-marketing opportunities'],
    icon: Globe
  },
  {
    name: 'Amazon Web Services',
    category: 'Cloud Partner',
    description: 'AWS Advanced Consulting Partner with expertise in cloud architecture and migration.',
    logo: '/api/placeholder/200/100',
    benefits: ['AWS credits', 'Training resources', 'Joint go-to-market'],
    icon: Cloud
  },
  {
    name: 'Google Cloud',
    category: 'Cloud Partner',
    description: 'Google Cloud Partner specializing in AI/ML solutions and data analytics.',
    logo: '/api/placeholder/200/100',
    benefits: ['GCP credits', 'AI/ML tools', 'Technical training'],
    icon: Zap
  },
  {
    name: 'Salesforce',
    category: 'CRM Partner',
    description: 'Certified Salesforce implementation partner for enterprise CRM solutions.',
    logo: '/api/placeholder/200/100',
    benefits: ['Salesforce credits', 'Implementation support', 'Custom development'],
    icon: Users
  },
  {
    name: 'Cisco',
    category: 'Security Partner',
    description: 'Cisco security partner providing network security and infrastructure solutions.',
    logo: '/api/placeholder/200/100',
    benefits: ['Security tools', 'Training programs', 'Technical support'],
    icon: Shield
  },
  {
    name: 'IBM',
    category: 'AI Partner',
    description: 'IBM Watson partner delivering AI-powered business solutions and automation.',
    logo: '/api/placeholder/200/100',
    benefits: ['Watson APIs', 'AI expertise', 'Joint solutions'],
    icon: Award
  }
];

const partnershipTypes = [
  {
    title: 'Technology Partners',
    description: 'Strategic partnerships with leading technology providers to deliver best-in-class solutions.',
    icon: Globe
  },
  {
    title: 'Implementation Partners',
    description: 'Certified partners who help implement and customize our solutions for specific client needs.',
    icon: Users
  },
  {
    title: 'Channel Partners',
    description: 'Reseller partners who help us reach new markets and expand our global presence.',
    icon: Handshake
  }
];

export default function PartnersPage() {
  return (
    <MainLayout 
      title="Partners - Zion Tech Group"
      description="Learn about our strategic partnerships and how to become a Zion Tech Group partner."
    >
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold mb-6"
              >
                Our Partners
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-300 mb-8"
              >
                We work with industry leaders to deliver comprehensive technology solutions 
                and create value for our clients through strategic partnerships.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Types</h2>
                <p className="text-xl text-gray-600">
                  We offer various partnership opportunities to suit different business models.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {partnershipTypes.map((type, index) => (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-8 bg-gray-50 rounded-lg"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {type.title}
                    </h3>
                    <p className="text-gray-600">
                      {type.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technology Partners</h2>
                <p className="text-xl text-gray-600">
                  Trusted by leading technology companies worldwide.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <partner.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {partner.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-3">
                        {partner.category}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {partner.description}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Partnership Benefits:</h4>
                      <ul className="space-y-2">
                        {partner.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Become a Partner</h2>
              <p className="text-xl text-blue-100 mb-8">
                Join our partner ecosystem and help us deliver innovative technology solutions to clients worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Apply to Become a Partner
                </a>
                <a
                  href="mailto:partners@ziontechgroup.com"
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  Contact Partnership Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}