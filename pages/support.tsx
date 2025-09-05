import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { MessageCircle, Mail, Phone, Video, FileText, Users } from 'lucide-react';


const supportOptions = [
  {
    title: 'Live Chat Support',
    description: 'Get instant help with our live chat support available 24/7',
    icon: MessageCircle,
    color: 'from-blue-500 to-cyan-500',
    availability: '24/7',
    responseTime: 'Instant',
    features: ['Real-time chat', 'Screen sharing', 'File sharing', 'Chat history']
  },
  {
    title: 'Email Support',
    description: 'Send us detailed questions and get comprehensive responses',
    icon: Mail,
    color: 'from-green-500 to-emerald-500',
    availability: '24/7',
    responseTime: '4 hours',
    features: ['Detailed responses', 'File attachments', 'Priority queuing', 'Email tracking']
  },
  {
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
    icon: Phone,
    color: 'from-purple-500 to-pink-500',
    availability: 'Business Hours',
    responseTime: 'Immediate',
    features: ['Direct communication', 'Screen sharing', 'Call recording', 'Follow-up calls']
  },
  {
    title: 'Video Support',
    description: 'Schedule video calls for complex technical issues',
    icon: Video,
    color: 'from-orange-500 to-red-500',
    availability: 'By Appointment',
    responseTime: 'Scheduled',
    features: ['Screen sharing', 'Remote access', 'Recording', 'Collaboration tools']
  }
];

const supportTiers = [
  {
    name: 'Basic Support',
    description: 'Essential support for small projects',
    price: 'Included',
    features: [
      'Email support (48h response)',
      'Documentation access',
      'Community forum',
      'Basic troubleshooting'
    ],
    sla: '48 hours',
    channels: ['Email', 'Forum']
  },
  {
    name: 'Professional Support',
    description: 'Comprehensive support for growing businesses',
    price: '$299/month',
    features: [
      'Email support (24h response)',
      'Live chat support',
      'Phone support (business hours)',
      'Priority ticket handling',
      'Account manager'
    ],
    sla: '24 hours',
    channels: ['Email', 'Chat', 'Phone']
  },
  {
    name: 'Enterprise Support',
    description: 'Premium support for critical systems',
    price: 'Custom',
    features: [
      '24/7 phone support',
      'Dedicated support team',
      'Video support sessions',
      'Custom SLA agreements',
      'Proactive monitoring',
      'Emergency response'
    ],
    sla: '1 hour',
    channels: ['All Channels']
  }
];

const resources = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides and API references',
    icon: FileText,
    href: '/docs',
    count: '50+ guides'
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step video tutorials',
    icon: Video,
    href: '/tutorials',
    count: '100+ videos'
  },
  {
    title: 'Community Forum',
    description: 'Connect with other users and experts',
    icon: Users,
    href: '/community',
    count: '500+ members'
  },
  {
    title: 'Knowledge Base',
    description: 'Searchable database of solutions',
    icon: FileText,
    href: '/knowledge-base',
    count: '200+ articles'
  }
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709',
  hours: '24/7 Support Available'
};

export default function SupportPage() {
  return (
    <Layout
      title="Support - Zion Tech Group"
      description="Get help and support for our services. 24/7 support options including live chat, email, phone, and video support. Multiple support tiers available."
      keywords="support, help, customer service, technical support, live chat, email support, phone support, 24/7 support"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <Headphones className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Center</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Get the help you need with our comprehensive support options
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#support-options"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Get Support
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-2">{contactInfo.phone}</p>
                <p className="text-sm text-gray-500">{contactInfo.hours}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center"
              >
                <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-2">{contactInfo.email}</p>
                <p className="text-sm text-gray-500">24/7 Response</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-2">Available Now</p>
                <p className="text-sm text-gray-500">Instant Response</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section id="support-options" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Options</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the support option that works best for you
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{option.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{option.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Availability:</span>
                      <span className="font-medium">{option.availability}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Response Time:</span>
                      <span className="font-medium">{option.responseTime}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Tiers */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Tiers</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the support level that matches your needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl shadow-xl p-8 ${
                    tier.name === 'Professional Support' ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`}
                >
                  {tier.name === 'Professional Support' && (
                    <div className="bg-blue-600 text-white text-center py-2 px-4 rounded-full text-sm font-medium mb-6 -mt-8">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="text-3xl font-bold text-blue-600 mb-6">{tier.price}</div>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-500">SLA:</span>
                      <span className="font-medium">{tier.sla}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Channels:</span>
                      <span className="font-medium">{tier.channels}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center ${
                      tier.name === 'Professional Support'
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Choose Plan
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Self-Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Resources</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers quickly with our comprehensive self-service resources
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="text-sm text-blue-600 font-medium mb-4">{resource.count}</div>
                  <Link
                    href={resource.href}
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Access Resource
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
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
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Need Immediate Help?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our support team is standing by to help you resolve any issues quickly and efficiently
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Start Live Chat
                </Link>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-colors"
                >
                  <Phone className="mr-2 w-5 h-5 inline" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}