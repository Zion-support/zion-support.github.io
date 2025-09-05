<<<<<<< HEAD
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
=======
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
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
=======
import Layout from '../components/Layout';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  HelpCircle,
  BookOpen,
  FileText,
  Users,
  Zap,
  Shield
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
} from 'lucide-react';

const supportChannels = [
  {
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help with our 24/7 live chat support',
    availability: '24/7'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
<<<<<<< HEAD
    availability: 'Mon-Fri 9AM-6PM EST'
=======
    contact: '+1 302 464 0950',
    hours: '24/7 Emergency Support',
    response: 'Immediate'
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us detailed questions and get comprehensive answers',
<<<<<<< HEAD
    availability: '24/7'
  },
  {
    icon: Video,
    title: 'Video Calls',
    description: 'Schedule screen sharing sessions for complex issues',
    availability: 'By appointment'
=======
    contact: 'kleber@ziontechgroup.com',
    hours: 'Monday - Friday: 9 AM - 6 PM EST',
    response: 'Within 2 hours'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Get instant help through our live chat system',
    contact: 'Available on website',
    hours: 'Monday - Friday: 9 AM - 6 PM EST',
    response: 'Immediate'
  }
];

const faqs = [
  {
    question: 'What support do you provide after project completion?',
    answer: 'We provide 30 days of free support after project completion, including bug fixes, minor adjustments, and technical guidance. Extended support plans are available for ongoing maintenance.'
  },
  {
    question: 'How quickly do you respond to support requests?',
    answer: 'We respond to emergency requests within 1 hour, standard requests within 2-4 hours, and general inquiries within 24 hours during business days.'
  },
  {
    question: 'Do you provide training for the solutions you build?',
    answer: 'Yes, we provide comprehensive training sessions for all team members who will be using the solutions we develop. This includes documentation, video tutorials, and hands-on training sessions.'
  },
  {
    question: 'What if I need changes to my existing solution?',
    answer: 'We offer flexible maintenance and enhancement services. Small changes can often be handled quickly, while larger modifications will be quoted separately based on scope and complexity.'
  },
  {
    question: 'Do you provide 24/7 monitoring for critical systems?',
    answer: 'Yes, we offer 24/7 monitoring services for critical business systems. This includes real-time alerts, automated backups, and immediate response to any issues.'
  },
  {
    question: 'How do I escalate a critical issue?',
    answer: 'For critical issues, call our emergency hotline at +1 302 464 0950. You can also email kleber@ziontechgroup.com with "URGENT" in the subject line for immediate attention.'
  }
];

const resources = [
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Comprehensive guides and API documentation',
    href: '/docs'
  },
  {
    icon: FileText,
    title: 'Knowledge Base',
    description: 'Searchable database of common questions and solutions',
    href: '/knowledge-base'
  },
  {
    icon: Users,
    title: 'Community Forum',
    description: 'Connect with other users and share experiences',
    href: '/community'
  },
  {
    icon: Zap,
    title: 'Status Page',
    description: 'Real-time status of all our services and systems',
    href: '/status'
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
  }
];

export default function SupportPage() {
  return (
<<<<<<< HEAD
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
=======
    <Layout 
      title="Support - Zion Tech Group | 24/7 Technical Support & Help Center"
      description="Get expert technical support for all Zion Tech Group services. 24/7 phone support, live chat, email support, and comprehensive help resources."
      keywords="technical support, help desk, customer service, 24/7 support, IT support, troubleshooting"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Center</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                We're here to help you succeed. Get expert technical support, find answers to common questions, 
                and access comprehensive resources to maximize your success with our solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Call +1 302 464 0950
                </a>
                <Link 
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Submit Ticket
                </Link>
              </div>
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
            </motion.div>
          </div>
        </section>

        {/* Support Channels */}
<<<<<<< HEAD
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
=======
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Can We Help?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the support channel that works best for you
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <channel.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{channel.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{channel.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700"><strong>Contact:</strong> {channel.contact}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-500 mr-3" />
                      <span className="text-gray-700"><strong>Hours:</strong> {channel.hours}</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="w-5 h-5 text-yellow-500 mr-3" />
                      <span className="text-gray-700"><strong>Response:</strong> {channel.response}</span>
                    </div>
                  </div>

                  <div className="text-center">
                    {channel.title === 'Phone Support' ? (
                      <a 
                        href={`tel:${channel.contact}`}
                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block"
                      >
                        Call Now
                      </a>
                    ) : channel.title === 'Email Support' ? (
                      <a 
                        href={`mailto:${channel.contact}`}
                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block"
                      >
                        Send Email
                      </a>
                    ) : (
                      <Link 
                        href="/contact"
                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block"
                      >
                        Start Chat
                      </Link>
                    )}
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
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
=======
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find quick answers to common questions about our services and support
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                      <HelpCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 ml-8">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Helpful Resources</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access documentation, guides, and community resources
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Link 
                    href={resource.href}
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Access Resource <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
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
=======
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}  );
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
}