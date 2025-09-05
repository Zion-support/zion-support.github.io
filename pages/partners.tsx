import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Handshake, 
  Award, 
  Users, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Building,
  Shield,
  Zap
} from 'lucide-react';
import Layout from '../components/Layout';

const partners = [
  {
    name: 'Microsoft',
    logo: 'Microsoft',
    description: 'Cloud infrastructure and AI services partnership.',
    category: 'Technology',
    benefits: ['Azure Cloud Services', 'AI Platform Access', 'Enterprise Solutions']
  },
  {
    name: 'Amazon Web Services',
    logo: 'AWS',
    description: 'Cloud computing and machine learning solutions.',
    category: 'Cloud',
    benefits: ['AWS Infrastructure', 'ML Services', 'Global Reach']
  },
  {
    name: 'Google Cloud',
    logo: 'Google',
    description: 'AI and data analytics platform partnership.',
    category: 'AI & Data',
    benefits: ['Google AI Tools', 'BigQuery Analytics', 'TensorFlow']
  },
  {
    name: 'IBM',
    logo: 'IBM',
    description: 'Enterprise AI and cybersecurity solutions.',
    category: 'Enterprise',
    benefits: ['Watson AI', 'Security Solutions', 'Enterprise Support']
  },
  {
    name: 'Salesforce',
    logo: 'Salesforce',
    description: 'CRM and customer experience solutions.',
    category: 'CRM',
    benefits: ['Salesforce Platform', 'Customer Analytics', 'Integration Tools']
  },
  {
    name: 'Oracle',
    logo: 'Oracle',
    description: 'Database and enterprise application solutions.',
    category: 'Database',
    benefits: ['Oracle Database', 'Enterprise Apps', 'Cloud Services']
  }
];

const partnershipTypes = [
  {
    icon: Handshake,
    title: 'Strategic Partnerships',
    description: 'Long-term collaborations with industry leaders to deliver comprehensive solutions.',
    features: ['Joint Product Development', 'Shared Resources', 'Market Expansion', 'Technology Integration']
  },
  {
    icon: Award,
    title: 'Certified Partners',
    description: 'Certified solution providers with specialized expertise and training.',
    features: ['Technical Certifications', 'Specialized Training', 'Priority Support', 'Quality Assurance']
  },
  {
    icon: Users,
    title: 'Channel Partners',
    description: 'Distribution and reseller partnerships to expand market reach.',
    features: ['Reseller Programs', 'Channel Support', 'Marketing Resources', 'Sales Training']
  },
  {
    icon: Globe,
    title: 'Global Partners',
    description: 'International partnerships for worldwide service delivery.',
    features: ['Global Coverage', 'Local Expertise', 'Cultural Adaptation', '24/7 Support']
  }
];

const benefits = [
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Access to enterprise-grade security solutions and compliance frameworks.'
  },
  {
    icon: Zap,
    title: 'Faster Implementation',
    description: 'Accelerated deployment with pre-built integrations and best practices.'
  },
  {
    icon: Building,
    title: 'Scalable Solutions',
    description: 'Enterprise-ready solutions that grow with your business needs.'
  },
  {
    icon: Star,
    title: 'Proven Expertise',
    description: 'Leverage the expertise and experience of industry-leading partners.'
  }
];

const stats = [
  { number: '50+', label: 'Strategic Partners' },
  { number: '100+', label: 'Certified Solutions' },
  { number: '25+', label: 'Countries Served' },
  { number: '99.9%', label: 'Partner Satisfaction' }
];

export default function PartnersPage() {
  return (
    <Layout
      title="Partners - Zion Tech Group"
      description="Strategic partnerships with leading technology companies to deliver comprehensive solutions and enhanced value to our clients."
      keywords="partners, strategic partnerships, technology partners, certified partners, channel partners"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Strategic{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Partnerships
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We partner with industry leaders to deliver comprehensive technology solutions and enhanced value to our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Become a Partner
              </Link>
              <Link 
                href="/solutions" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                View Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Technology Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with leading technology companies to provide our clients with the best solutions and services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{partner.logo}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {partner.name}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {partner.description}
                </p>
                
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {partner.category}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {partner.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Partnership Types
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer various types of partnerships to meet different business needs and collaboration goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {type.description}
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Partnership Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our partnerships provide significant advantages for both our clients and partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in Partnering with Us?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our network of partners and help us deliver exceptional technology solutions to clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Become a Partner
              </Link>
              <Link 
                href="/about" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}