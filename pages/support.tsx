import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  CheckCircle,
  Search,
  FileText,
  Video,
  BookOpen,
  Users,
  Zap,
  Shield,
  Globe
} from 'lucide-react';
import Layout from './components/Layout';

const supportChannels = [
  {
    title: "24/7 Live Chat",
    description: "Get instant help from our support team",
    icon: MessageSquare,
    availability: "24/7",
    responseTime: "< 2 minutes",
    color: "blue"
  },
  {
    title: "Email Support",
    description: "Send us detailed questions and get comprehensive answers",
    icon: Mail,
    availability: "24/7",
    responseTime: "< 4 hours",
    color: "green"
  },
  {
    title: "Phone Support",
    description: "Speak directly with our technical experts",
    icon: Phone,
    availability: "Mon-Fri 9AM-6PM EST",
    responseTime: "Immediate",
    color: "purple"
  },
  {
    title: "Video Call",
    description: "Screen sharing and face-to-face technical assistance",
    icon: Video,
    availability: "By appointment",
    responseTime: "Scheduled",
    color: "indigo"
  }
];

const supportTiers = [
  {
    name: "Basic Support",
    description: "Essential support for all customers",
    features: [
      "Email support",
      "Knowledge base access",
      "Community forum",
      "Basic documentation",
      "Standard response times"
    ],
    included: true
  },
  {
    name: "Priority Support",
    description: "Enhanced support for Professional plan customers",
    features: [
      "Priority email support",
      "Live chat support",
      "Phone support",
      "Faster response times",
      "Advanced documentation",
      "Video tutorials"
    ],
    included: false
  },
  {
    name: "Dedicated Support",
    description: "Premium support for Enterprise customers",
    features: [
      "24/7 dedicated support",
      "Dedicated account manager",
      "Priority phone support",
      "Custom training sessions",
      "SLA guarantees",
      "White-glove service"
    ],
    included: false
  }
];

const faqs = [
  {
    question: "How do I contact support?",
    answer: "You can contact us through live chat, email, or phone. Live chat is available 24/7, email support responds within 4 hours, and phone support is available Monday-Friday 9AM-6PM EST."
  },
  {
    question: "What information should I include in my support request?",
    answer: "Please include your account details, a clear description of the issue, steps to reproduce it, error messages, and any relevant screenshots or logs."
  },
  {
    question: "Do you offer training for your solutions?",
    answer: "Yes! We provide comprehensive training including documentation, video tutorials, webinars, and custom training sessions for Enterprise customers."
  },
  {
    question: "What's your response time for support requests?",
    answer: "Response times vary by support tier: Basic (24 hours), Priority (4 hours), and Dedicated (1 hour). Critical issues are addressed immediately regardless of tier."
  },
  {
    question: "Do you provide support for custom integrations?",
    answer: "Yes, we provide full support for all custom integrations and solutions we've built for you. This includes troubleshooting, updates, and maintenance."
  },
  {
    question: "Is there a cost for support?",
    answer: "Basic support is included with all plans. Priority support is included with Professional plans, and Dedicated support is included with Enterprise plans."
  }
];

const resources = [
  {
    title: "Documentation",
    description: "Comprehensive guides and API documentation",
    icon: FileText,
    link: "/docs"
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides for common tasks",
    icon: Video,
    link: "/tutorials"
  },
  {
    title: "Knowledge Base",
    description: "Searchable database of articles and solutions",
    icon: BookOpen,
    link: "/knowledge-base"
  },
  {
    title: "Community Forum",
    description: "Connect with other users and share experiences",
    icon: Users,
    link: "/community"
  }
];

export default function SupportPage() {
  return (
    <Layout
      title="Support - Zion Tech Group"
      description="Get help when you need it. 24/7 support, comprehensive documentation, and expert assistance for all your technology needs."
      keywords="support, help, documentation, technical support, customer service, 24/7 support, troubleshooting"
      canonical="https://ziontechgroup.com/support"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              We're Here to 
              <span className="text-blue-400"> Help</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get the support you need, when you need it. Our expert team is available 
              24/7 to help you succeed with our technology solutions.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Contact Support
              </Link>
              <Link href="/docs" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                View Documentation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Can We Help?</h2>
            <p className="text-xl text-gray-600">Multiple ways to get the support you need</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 rounded-full bg-${channel.color}-100 flex items-center justify-center mx-auto mb-4`}>
                  <channel.icon className={`w-8 h-8 text-${channel.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-gray-600">{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Zap className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-gray-600">{channel.responseTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Tiers</h2>
            <p className="text-xl text-gray-600">Choose the level of support that fits your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {supportTiers.map((tier, index) => (
              <motion.div 
                key={index}
                className={`bg-white rounded-lg shadow-md p-6 ${
                  tier.name === "Priority Support" ? 'ring-2 ring-blue-500' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                  <p className="text-gray-600">{tier.description}</p>
                  {tier.included && (
                    <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      Included
                    </span>
                  )}
                </div>
                
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Self-Service Resources</h2>
            <p className="text-xl text-gray-600">Find answers and learn at your own pace</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Link 
                  href={resource.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Access Resource
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common support questions</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Immediate Help?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Our support team is standing by to help you with any questions or issues you may have.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <MessageSquare className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-blue-100 mb-4">Get instant help from our support team</p>
              <Link href="#" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Chat
              </Link>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-blue-100 mb-4">Send us detailed questions and get comprehensive answers</p>
              <Link href="mailto:support@ziontechgroup.com" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Send Email
              </Link>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
              <p className="text-blue-100 mb-4">Speak directly with our technical experts</p>
              <Link href="tel:+13024640950" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call Now
              </Link>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>support@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}