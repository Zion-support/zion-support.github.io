<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
import { MessageCircle, Mail, Phone, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const supportOptions = [
  {
    title: 'Live Chat Support',
    description: 'Get instant help with our live chat support available 24/7.',
    icon: MessageCircle,
    color: 'from-blue-500 to-cyan-500',
    availability: '24/7',
    responseTime: 'Instant',
    features: ['Real-time chat', 'Screen sharing', 'File sharing', 'Chat history']
  },
  {
    title: 'Email Support',
    description: 'Send us detailed questions and get comprehensive responses.',
    icon: Mail,
    color: 'from-green-500 to-emerald-500',
    availability: '24/7',
    responseTime: '4 hours',
    features: ['Detailed responses', 'File attachments', 'Priority queuing', 'Email tracking']
  },
  {
    title: 'Phone Support',
    description: 'Speak directly with our technical experts for immediate assistance.',
    icon: Phone,
    color: 'from-purple-500 to-pink-500',
    availability: 'Business Hours',
    responseTime: 'Immediate',
    features: ['Direct communication', 'Screen sharing', 'Call recording', 'Follow-up']
  }
];

const faqs = [
  {
    question: 'How do I get started with your services?',
    answer: 'You can get started by contacting our sales team through our contact form or by calling us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions.'
  },
  {
    question: 'What is your response time for support requests?',
    answer: 'Our response times vary by support channel: Live chat is instant, email support responds within 4 hours, and phone support is available during business hours.'
  },
  {
    question: 'Do you offer training for your solutions?',
    answer: 'Yes, we provide comprehensive training for all our solutions, including documentation, video tutorials, and live training sessions with our experts.'
  }
];

export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for our technology solutions" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Support Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the help you need with our comprehensive support options and resources.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${option.color} mr-4`}>
                  <option.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{option.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="font-semibold">Availability:</span>
                  <span className="ml-2">{option.availability}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span className="font-semibold">Response Time:</span>
                  <span className="ml-2">{option.responseTime}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                <ul className="space-y-1">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-gray-200 pb-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
=======
<<<<<<< HEAD

const supportOptions = [;
  {}
    title: 'Live Chat Support,',
    description: 'Get instant help with our live chat support available 24/7,',
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  FileText, 
  Video, 
  Users 
} from 'lucide-react';

const supportChannels = [
  {
>>>>>>> main
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help with our 24/7 live chat support',
    availability: '24/7'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
    availability: 'Mon-Fri 9AM-6PM EST'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us detailed questions and get comprehensive answers',
    availability: '24/7'
  },
  {
    icon: Video,
    title: 'Video Calls',
    description: 'Schedule screen sharing sessions for complex issues',
    availability: 'By appointment'
  }
];

export default function SupportPage() {
  return (
    <>
      <Head>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for all your technology needs." />
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Support Center</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We're here to help you succeed with comprehensive support options.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Support</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the support channel that works best for you.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                  <p className="text-gray-600 mb-4">{channel.description}</p>
                  <div className="text-sm text-blue-600 font-medium">
                    {channel.availability}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
            >,
              <h2 className="text-4xl md:text-5xl font-bold mb-6">";
                Need Immediate Help?;
              </h2>;
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">";
                Our support team is standing by to help you resolve any issues quickly and efficiently;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link;
                  href="/contact"";
                  className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"";
                >;
                  <MessageCircle className="mr-2 w-5 h-5" />";
                  Start Live Chat;
                </Link>;
                <a;
                  href={`tel:${contactInfo.phone}`}
=======
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Immediate Help?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact us now for urgent support needs.
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
                  href="/help"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Help Center
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
>>>>>>> main
>>>>>>> main
  );
}