import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { 
  HelpCircle, 
  ArrowRight,
  Search,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  FileText,
  Video,
  Users,
  Zap,
  Globe,
  Shield
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const supportChannels = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageCircle,
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
    description: "Schedule a screen sharing session for complex issues",
    icon: Video,
    availability: "By appointment",
    responseTime: "Same day",
    color: "orange"
  }
];

const faqCategories = [
  {
    title: "Getting Started",
    questions: [
      {
        question: "How do I get started with Zion Tech Group services?",
        answer: "Getting started is easy! Simply contact us through our website or call us directly. We'll schedule a consultation to understand your needs and provide a customized solution."
      },
      {
        question: "What information do I need to provide for a consultation?",
        answer: "We'll need basic information about your company, current technology stack, specific requirements, timeline, and budget. Don't worry if you're not sure about all details - we'll help guide you through the process."
      },
      {
        question: "How long does the onboarding process take?",
        answer: "The onboarding process typically takes 1-2 weeks, depending on the complexity of your project. We'll provide a detailed timeline during our initial consultation."
      }
    ]
  },
  {
    title: "Technical Support",
    questions: [
      {
        question: "What if I encounter technical issues?",
        answer: "Our technical support team is available 24/7 through multiple channels including live chat, email, and phone. We guarantee a response within 2 minutes for critical issues."
      },
      {
        question: "Do you provide training for your solutions?",
        answer: "Yes! We provide comprehensive training for all our solutions, including documentation, video tutorials, and hands-on sessions with our experts."
      },
      {
        question: "Can you help with integration with existing systems?",
        answer: "Absolutely! Our team specializes in seamless integration with existing systems. We'll work with your current infrastructure to ensure smooth implementation."
      }
    ]
  },
  {
    title: "Billing & Pricing",
    questions: [
      {
        question: "What are your pricing models?",
        answer: "We offer flexible pricing models including project-based, retainer, and subscription options. Pricing depends on the scope and complexity of your requirements."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment plans for larger projects. We can work with you to create a payment schedule that fits your budget."
      },
      {
        question: "Is there a free trial available?",
        answer: "We offer free consultations and proof-of-concept demonstrations. For ongoing services, we can discuss trial periods based on your specific needs."
      }
    ]
  }
];

const resources = [
  {
    title: "Documentation",
    description: "Comprehensive guides and API references",
    icon: FileText,
    href: "/docs"
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides",
    icon: Video,
    href: "/tutorials"
  },
  {
    title: "Community Forum",
    description: "Connect with other users and experts",
    icon: Users,
    href: "/community"
  },
  {
    title: "Status Page",
    description: "Real-time service status and updates",
    icon: Globe,
    href: "/status"
  }
];

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "support@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown, DE 19709",
  hours: "24/7 Support Available"
};

export default function SupportPage() {
  return (
    <MainLayout 
      title="Support Center - Zion Tech Group"
      description="Get help and support for Zion Tech Group services. 24/7 support, documentation, tutorials, and expert assistance."
      keywords="support, help, customer service, technical support, documentation, tutorials, FAQ"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Center</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                We're here to help you succeed. Get support through multiple channels, 
                access comprehensive resources, and connect with our expert team.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help..."
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#contact-support"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Contact Support
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="#faq"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  Browse FAQ
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How Can We Help?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the support channel that works best for you. We're available 24/7 to assist with any questions or issues.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-${channel.color}-100 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <channel.icon className={`w-8 h-8 text-${channel.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {channel.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {channel.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{channel.availability}</span>
                      </div>
                      <div className="text-gray-500">
                        Response: {channel.responseTime}
                      </div>
                    </div>
                    <button className={`w-full mt-4 bg-${channel.color}-600 hover:bg-${channel.color}-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors`}>
                      Get Help
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our services and support.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="mb-12"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="bg-white rounded-lg shadow-md p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          {faq.question}
                        </h4>
                        <p className="text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Helpful Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access comprehensive resources to help you get the most out of our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
                >
                  <Link href={resource.href} className="block">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                        <resource.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600">
                        {resource.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section id="contact-support" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contact Support
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get in touch with our support team through your preferred method.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900">{contactInfo.phone}</div>
                        <div className="text-sm text-gray-600">24/7 Support</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900">{contactInfo.email}</div>
                        <div className="text-sm text-gray-600">Email Support</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900">{contactInfo.hours}</div>
                        <div className="text-sm text-gray-600">Response Time: &lt; 2 minutes</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Send us a Message
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Describe your issue or question..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our expert team is ready to assist you with any questions or issues. 
                Don't hesitate to reach out - we're here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Contact Us Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/docs"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Browse Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
=======

export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Leading AI & Technology Solutions" />
        <meta name="keywords" content="technology,AI,cloud,micro SaaS" />
      </Head>
      
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
              Support
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              This page is currently under development. Please check back soon for updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Started Today
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
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
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This page is currently under development. Please check back soon for updates.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-cac2
  );
}