import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import { 
  Globe, 
  Users, 
  Award, 
  Users as Team, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Shield, 
  Zap, 
  Target,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const partners = [
  {
    name: 'Microsoft',
    logo: '/images/partners/microsoft.png',
    category: 'Technology Partner',
    description: 'Strategic partnership for Azure cloud services and AI solutions',
    benefits: [
      'Azure cloud infrastructure',
      'AI and ML services',
      'Enterprise security solutions',
      'Global support network'
    ],
    tier: 'Platinum',
    established: '2020'
  },
  {
    name: 'Amazon Web Services',
    logo: '/images/partners/aws.png',
    category: 'Cloud Partner',
    description: 'Leading cloud platform for scalable and secure solutions',
    benefits: [
      'AWS cloud services',
      'Machine learning tools',
      'Global infrastructure',
      'Advanced analytics'
    ],
    tier: 'Platinum',
    established: '2019'
  },
  {
    name: 'Google Cloud',
    logo: '/images/partners/google-cloud.png',
    category: 'AI Partner',
    description: 'Advanced AI and machine learning capabilities',
    benefits: [
      'Google AI services',
      'TensorFlow platform',
      'BigQuery analytics',
      'Vertex AI platform'
    ],
    tier: 'Gold',
    established: '2021'
  },
  {
    name: 'IBM',
    logo: '/images/partners/ibm.png',
    category: 'Enterprise Partner',
    description: 'Enterprise-grade solutions and consulting services',
    benefits: [
      'IBM Watson AI',
      'Enterprise software',
      'Consulting services',
      'Security solutions'
    ],
    tier: 'Gold',
    established: '2020'
  },
  {
    name: 'Salesforce',
    logo: '/images/partners/salesforce.png',
    category: 'CRM Partner',
    description: 'Customer relationship management and business automation',
    benefits: [
      'Salesforce platform',
      'CRM solutions',
      'Marketing automation',
      'Analytics and reporting'
    ],
    tier: 'Silver',
    established: '2022'
  },
  {
    name: 'Oracle',
    logo: '/images/partners/oracle.png',
    category: 'Database Partner',
    description: 'Enterprise database and cloud solutions',
    benefits: [
      'Oracle database',
      'Cloud infrastructure',
      'Enterprise applications',
      'Security and compliance'
    ],
    tier: 'Silver',
    established: '2021'
  }
];

const partnershipTypes = [
  {
    title: 'Technology Partners',
    description: 'Leading technology companies providing platforms and services',
    icon: Globe,
    count: 15,
    benefits: [
      'Access to cutting-edge technology',
      'Joint product development',
      'Technical support and training',
      'Co-marketing opportunities'
    ]
  },
  {
    title: 'Solution Partners',
    description: 'Specialized solution providers for specific industries',
    icon: Target,
    count: 25,
    benefits: [
      'Industry-specific expertise',
      'Custom solution development',
      'Market expansion support',
      'Referral programs'
    ]
  },
  {
    title: 'Channel Partners',
    description: 'Resellers and distributors expanding our reach',
    icon: Users,
    count: 40,
    benefits: [
      'Extended market presence',
      'Local market knowledge',
      'Customer support',
      'Revenue sharing opportunities'
    ]
  },
  {
    title: 'Strategic Partners',
    description: 'Long-term strategic alliances for mutual growth',
    icon: Team,
    count: 8,
    benefits: [
      'Joint ventures',
      'Shared resources',
      'Strategic planning',
      'Market leadership'
    ]
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: 'Access to Latest Technology',
    description: 'Early access to cutting-edge tools and platforms from our partners'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Enterprise-grade security solutions and compliance frameworks'
  },
  {
    icon: Zap,
    title: 'Faster Implementation',
    description: 'Pre-built integrations and proven methodologies for rapid deployment'
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Rigorous testing and validation through our partner ecosystem'
  }
];

export default function PartnersPage() {
  return (
    <Layout 
      title="Partners - Zion Tech Group | Strategic Partnerships"
      description="Discover our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and other industry leaders to deliver exceptional solutions."
      keywords="partners, partnerships, Microsoft, AWS, Google Cloud, IBM, technology alliances, strategic partners"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Partners
                <span className="block text-blue-400">Strategic Alliances for Success</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We work with industry-leading technology companies to deliver comprehensive solutions 
                that drive innovation and business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Become a Partner
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Partnership Types
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer various partnership opportunities to suit different business models and objectives.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <type.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{type.count}+</div>
                  <div className="text-sm text-gray-500">Active Partners</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Partners */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Key Partners
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our strategic partnerships with industry leaders enable us to deliver world-class solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Globe className="w-8 h-8 text-gray-400" />
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          partner.tier === 'Platinum' ? 'bg-yellow-100 text-yellow-800' :
                          partner.tier === 'Gold' ? 'bg-gray-100 text-gray-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {partner.tier}
                        </span>
                        <div className="text-sm text-gray-500 mt-1">Since {partner.established}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{partner.category}</p>
                    <p className="text-gray-600 mb-6">{partner.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {partner.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our partnerships deliver mutual value through shared expertise, resources, and market opportunities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Become Our Partner
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join our partner ecosystem and unlock new opportunities for growth, innovation, and success. 
                We're looking for companies that share our vision of transforming businesses through technology.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200 mb-2">88+</div>
                  <div className="text-blue-100">Active Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200 mb-2">$50M+</div>
                  <div className="text-blue-100">Partner Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200 mb-2">95%</div>
                  <div className="text-blue-100">Partner Satisfaction</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Apply to Partner
                </Link>
                <a href="mailto:partners@ziontechgroup.com" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Contact Partnership Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}