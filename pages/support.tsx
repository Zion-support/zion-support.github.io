import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Headphones, 
  MessageCircle, 
  Mail, 
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  FileText,
  Video,
  BookOpen,
  Users
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const supportChannels = [
  {
    title: 'Live Chat',
    description: 'Get instant help with our live chat support',
    icon: MessageCircle,
    availability: '24/7',
    responseTime: 'Instant',
    color: 'from-green-600 to-green-800',
    action: 'Start Chat',
    href: '/contact'
  },
  {
    title: 'Email Support',
    description: 'Send us a detailed message and we\'ll respond quickly',
    icon: Mail,
    availability: '24/7',
    responseTime: '< 24 hours',
    color: 'from-blue-600 to-blue-800',
    action: 'Send Email',
    href: '/contact'
  },
  {
    title: 'Phone Support',
    description: 'Speak directly with our technical support team',
    icon: Phone,
    availability: 'Business Hours',
    responseTime: 'Immediate',
    color: 'from-purple-600 to-purple-800',
    action: 'Call Now',
    href: 'tel:+13024640950'
  },
  {
    title: 'Video Call',
    description: 'Schedule a video consultation for complex issues',
    icon: Video,
    availability: 'By Appointment',
    responseTime: 'Scheduled',
    color: 'from-orange-600 to-orange-800',
    action: 'Schedule Call',
    href: '/contact'
  }
];

const supportTiers = [
  {
    name: 'Basic Support',
    description: 'For small projects and startups',
    price: 'Included',
    features: [
      'Email support',
      'Response within 48 hours',
      'Basic documentation access',
      'Community forum access'
    ],
    color: 'from-gray-600 to-gray-800'
  },
  {
    name: 'Professional Support',
    description: 'For growing businesses',
    price: '$500/month',
    features: [
      'Priority email support',
      'Response within 24 hours',
      'Phone support during business hours',
      'Full documentation access',
      'Video call support',
      'Priority feature requests'
    ],
    color: 'from-blue-600 to-blue-800',
    popular: true
  },
  {
    name: 'Enterprise Support',
    description: 'For large organizations',
    price: 'Custom',
    features: [
      '24/7 phone and chat support',
      'Response within 2 hours',
      'Dedicated support manager',
      'Custom SLA agreements',
      'On-site support available',
      'White-glove service'
    ],
    color: 'from-purple-600 to-purple-800'
  }
];

const resources = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides and API documentation',
    icon: FileText,
    href: '/docs',
    color: 'from-blue-600 to-blue-800'
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step video guides',
    icon: Video,
    href: '/tutorials',
    color: 'from-green-600 to-green-800'
  },
  {
    title: 'Knowledge Base',
    description: 'Searchable articles and guides',
    icon: BookOpen,
    href: '/guides',
    color: 'from-purple-600 to-purple-800'
  },
  {
    title: 'Community Forum',
    description: 'Connect with other users',
    icon: Users,
    href: '/community',
    color: 'from-orange-600 to-orange-800'
  }
];

const faqItems = [
  {
    question: 'How do I submit a support ticket?',
    answer: 'You can submit a support ticket through our contact form, email us directly, or use the live chat feature on our website.'
  },
  {
    question: 'What information should I include in my support request?',
    answer: 'Please include your account details, a clear description of the issue, steps to reproduce the problem, and any error messages you\'re seeing.'
  },
  {
    question: 'Do you offer phone support?',
    answer: 'Yes, we offer phone support during business hours for Professional and Enterprise customers. Basic customers can schedule phone calls as needed.'
  },
  {
    question: 'How quickly will I get a response?',
    answer: 'Response times vary by support tier: Basic (48 hours), Professional (24 hours), Enterprise (2 hours). Live chat provides instant responses.'
  }
];

export default function SupportPage() {
  return (
    <MainLayout
      title="Support - Zion Tech Group"
      description="Get help and support for our technology solutions. Multiple support channels available including live chat, email, phone, and video calls."
      keywords="support, help, customer service, technical support, live chat, phone support"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                We're Here to{' '}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Help
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
                Get the support you need with our comprehensive help system. 
                Multiple channels available to assist you 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <Link href="/contact">
                  <span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Contact Support
                  </span>
                </Link>
                <Link href="/docs">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    View Documentation
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get Support
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the support channel that works best for you. 
                We're available through multiple channels to ensure you get help when you need it.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {channel.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-center">
                    {channel.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Availability:</span>
                      <span className="font-semibold text-gray-900">{channel.availability}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Response Time:</span>
                      <span className="font-semibold text-gray-900">{channel.responseTime}</span>
                    </div>
                  </div>
                  
                  <Link
                    href={channel.href}
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors bg-gradient-to-r ${channel.color} text-white hover:opacity-90`}
                  >
                    {channel.action}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Tiers */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Support Plans
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the support plan that best fits your needs and usage level.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {supportTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${
                    tier.popular ? 'ring-2 ring-blue-500 relative' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {tier.description}
                    </p>
                    <div className="text-3xl font-bold text-gray-900">
                      {tier.price}
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                      tier.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Self-Service Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers quickly with our comprehensive self-service resources.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-sm">
                    {resource.description}
                  </p>
                  
                  <Link
                    href={resource.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                  >
                    Access
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Common Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quick answers to frequently asked support questions.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {item.question}
                    </h3>
                    <p className="text-gray-600">
                      {item.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Immediate Help?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
                Our support team is standing by to help you resolve any issues quickly and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact">
                  <span className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Contact Support Now
                  </span>
                </Link>
                <Link href="/faq">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Browse FAQ
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