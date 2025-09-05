import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Mail, Clock, ArrowRight, CheckCircle, Users, Globe, Zap } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const supportChannels = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageSquare,
    availability: "24/7",
    responseTime: "Under 2 minutes",
    href: "/support/chat",
    color: "from-blue-600 to-blue-800"
  },
  {
    title: "Email Support",
    description: "Send us detailed questions and get comprehensive answers",
    icon: Mail,
    availability: "24/7",
    responseTime: "Under 4 hours",
    href: "/support/email",
    color: "from-green-600 to-green-800"
  },
  {
    title: "Phone Support",
    description: "Speak directly with our technical experts",
    icon: Phone,
    availability: "Business Hours",
    responseTime: "Immediate",
    href: "/support/phone",
    color: "from-purple-600 to-purple-800"
  },
  {
    title: "Video Call",
    description: "Schedule a screen sharing session for complex issues",
    icon: Users,
    availability: "By Appointment",
    responseTime: "Same day",
    href: "/support/video",
    color: "from-orange-600 to-orange-800"
  }
];

const supportTopics = [
  {
    title: "Technical Issues",
    description: "API problems, integration issues, and technical troubleshooting",
    icon: "🔧",
    articles: 45
  },
  {
    title: "Account & Billing",
    description: "Account management, billing questions, and subscription changes",
    icon: "💳",
    articles: 23
  },
  {
    title: "Getting Started",
    description: "Onboarding guides, setup instructions, and first steps",
    icon: "🚀",
    articles: 18
  },
  {
    title: "API Documentation",
    description: "API references, code examples, and integration guides",
    icon: "📚",
    articles: 67
  },
  {
    title: "Security & Compliance",
    description: "Security best practices, compliance requirements, and data protection",
    icon: "🔒",
    articles: 31
  },
  {
    title: "Performance & Scaling",
    description: "Optimization tips, scaling strategies, and performance monitoring",
    icon: "⚡",
    articles: 29
  }
];

const supportTiers = [
  {
    name: "Basic Support",
    description: "For individual developers and small projects",
    features: [
      "Email support (24/7)",
      "Community forum access",
      "Basic documentation",
      "Response time: 24 hours"
    ],
    price: "Free",
    popular: false
  },
  {
    name: "Professional Support",
    description: "For growing businesses and teams",
    features: [
      "Priority email support (24/7)",
      "Live chat support",
      "Phone support (business hours)",
      "Advanced documentation",
      "Response time: 4 hours"
    ],
    price: "$99/month",
    popular: true
  },
  {
    name: "Enterprise Support",
    description: "For large organizations with critical needs",
    features: [
      "Dedicated support manager",
      "24/7 phone and chat support",
      "Video call support",
      "Custom documentation",
      "Response time: 1 hour",
      "SLA guarantees"
    ],
    price: "Custom",
    popular: false
  }
];

const faqItems = [
  {
    question: "How quickly will I get a response?",
    answer: "Response times vary by support tier. Basic support responds within 24 hours, Professional support within 4 hours, and Enterprise support within 1 hour."
  },
  {
    question: "What information should I include in my support request?",
    answer: "Please include your account details, a clear description of the issue, steps to reproduce it, error messages, and any relevant logs or screenshots."
  },
  {
    question: "Do you offer phone support?",
    answer: "Yes, phone support is available for Professional and Enterprise customers during business hours. Enterprise customers also get 24/7 phone support."
  },
  {
    question: "Can I schedule a video call for complex issues?",
    answer: "Yes, video calls are available for Professional and Enterprise customers. You can schedule them through your support dashboard or by contacting us directly."
  }
];

export default function SupportPage() {
  return (
    <MainLayout
      title="Support - Zion Tech Group"
      description="Get help and support for all our services. Multiple support channels available 24/7 with expert technical assistance."
      keywords="support, help, technical support, customer service, assistance, troubleshooting"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
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
                Support{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Center
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Get the help you need with multiple support channels, 
                comprehensive documentation, and expert technical assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/support/chat" className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Live Chat
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Support Channels
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Choose the support channel that works best for you. All channels are monitored by our expert team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => {
                const IconComponent = channel.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {channel.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {channel.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {channel.availability}
                      </div>
                      <div className="text-xs text-gray-500">
                        Response: {channel.responseTime}
                      </div>
                    </div>
                    
                    <Link
                      href={channel.href}
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-sm group-hover:text-blue-600 transition-colors"
                    >
                      <span>Get Support</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Support Topics */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Support Topics
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Browse our knowledge base organized by topic to find answers quickly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-green-50 transition-colors group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-3">{topic.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{topic.description}</p>
                  <div className="text-xs text-gray-500">
                    {topic.articles} articles available
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Tiers */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Support Plans
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Choose the support plan that best fits your needs and budget.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    tier.popular ? 'ring-2 ring-green-500 scale-105' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    <div className="text-3xl font-bold text-green-600">{tier.price}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {tier.price === 'Free' ? 'Get Started' : 'Choose Plan'}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Common Questions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Quick answers to the most frequently asked support questions.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {item.question}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Need Immediate Help?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Our support team is standing by to help you resolve any issues quickly and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/support/chat" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Live Chat
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                  Contact Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}