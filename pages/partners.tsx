import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Award, 
  Users, 
  CheckCircle,
  ArrowRight,
  Globe,
  Shield,
  Zap,
  BarChart3,
  Star,
  Building,
  Target
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const partnerTypes = [
  {
    title: 'Technology Partners',
    description: 'Strategic partnerships with leading technology providers to deliver cutting-edge solutions.',
    icon: Globe,
    benefits: [
      'Access to latest technologies',
      'Joint solution development',
      'Technical support and training',
      'Co-marketing opportunities'
    ],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'Solution Partners',
    description: 'Collaborative partnerships to develop and deliver comprehensive business solutions.',
    icon: Target,
    benefits: [
      'Joint go-to-market strategies',
      'Solution integration',
      'Shared resources and expertise',
      'Revenue sharing opportunities'
    ],
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Channel Partners',
    description: 'Distribution partnerships to expand market reach and customer access.',
    icon: Building,
    benefits: [
      'Extended market presence',
      'Local market expertise',
      'Customer relationship management',
      'Sales and marketing support'
    ],
    color: 'from-purple-500 to-indigo-600'
  },
  {
    title: 'Strategic Partners',
    description: 'Long-term strategic alliances for mutual growth and market leadership.',
    icon: Handshake,
    benefits: [
      'Strategic planning collaboration',
      'Market expansion support',
      'Innovation partnerships',
      'Long-term growth strategies'
    ],
    color: 'from-orange-500 to-amber-600'
  }
];

const currentPartners = [
  {
    name: 'Microsoft',
    category: 'Technology Partner',
    description: 'Cloud and AI solutions partnership',
    logo: 'Microsoft',
    since: '2020',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    name: 'Amazon Web Services',
    category: 'Cloud Partner',
    description: 'AWS cloud infrastructure and services',
    logo: 'AWS',
    since: '2019',
    color: 'from-orange-500 to-amber-600'
  },
  {
    name: 'Google Cloud',
    category: 'AI Partner',
    description: 'AI and machine learning solutions',
    logo: 'Google',
    since: '2021',
    color: 'from-red-500 to-pink-600'
  },
  {
    name: 'Salesforce',
    category: 'CRM Partner',
    description: 'Customer relationship management solutions',
    logo: 'Salesforce',
    since: '2020',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Oracle',
    category: 'Database Partner',
    description: 'Enterprise database and cloud solutions',
    logo: 'Oracle',
    since: '2018',
    color: 'from-red-500 to-orange-600'
  },
  {
    name: 'IBM',
    category: 'AI Partner',
    description: 'Watson AI and enterprise solutions',
    logo: 'IBM',
    since: '2019',
    color: 'from-blue-500 to-purple-600'
  }
];

const benefits = [
  {
    title: 'Access to Latest Technologies',
    description: 'Stay ahead with cutting-edge technology solutions and early access to new features.',
    icon: Zap
  },
  {
    title: 'Joint Marketing Opportunities',
    description: 'Collaborate on marketing campaigns and co-branded content to reach new audiences.',
    icon: BarChart3
  },
  {
    title: 'Technical Support',
    description: 'Comprehensive technical support and training for your team.',
    icon: Shield
  },
  {
    title: 'Revenue Growth',
    description: 'Expand your revenue streams through partnership opportunities and joint solutions.',
    icon: Star
  }
];

export default function PartnersPage() {
  return (
    <MainLayout 
      title="Partners - Zion Tech Group"
      description="Join our partner ecosystem and grow your business with strategic partnerships, technology access, and joint solutions."
      keywords="partners, partnerships, technology partners, solution partners, channel partners, strategic alliances"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <Handshake className="w-12 h-12 text-green-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Partner
                  <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Ecosystem
                  </span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join our growing partner ecosystem and unlock new opportunities for growth, 
                innovation, and market expansion through strategic partnerships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Become a Partner
                </Link>
                <Link href="/partners/benefits" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                  View Partner Benefits
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Partnership Types
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals 
                and growth strategy.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnerTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center mr-4`}>
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
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

        {/* Current Partners */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Partners
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're proud to work with industry-leading technology companies 
                to deliver exceptional solutions to our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${partner.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                    <span className="text-white font-bold text-xl">{partner.logo.charAt(0)}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{partner.category}</p>
                  <p className="text-gray-600 mb-4 text-sm">{partner.description}</p>
                  
                  <div className="text-xs text-gray-500">
                    Partner since {partner.since}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our partner ecosystem and unlock new opportunities for growth, 
                innovation, and market expansion.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Join our partner ecosystem and unlock new opportunities for growth, 
                innovation, and market expansion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Become a Partner
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                  Learn About Our Company
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}