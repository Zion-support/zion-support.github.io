import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock,
  ArrowRight,
  CheckCircle,
  Headphones,
  FileText,
  Video
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const supportOptions = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageCircle,
    availability: "24/7",
    responseTime: "Instant",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Email Support",
    description: "Send us a detailed message and we'll respond quickly",
    icon: Mail,
    availability: "24/7",
    responseTime: "Within 2 hours",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Phone Support",
    description: "Speak directly with our technical experts",
    icon: Phone,
    availability: "Business Hours",
    responseTime: "Immediate",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Video Call",
    description: "Schedule a screen sharing session with our team",
    icon: Video,
    availability: "By Appointment",
    responseTime: "Same Day",
    color: "from-orange-500 to-orange-600"
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
    title: "FAQ",
    description: "Answers to frequently asked questions",
    icon: CheckCircle,
    href: "/faq"
  },
  {
    title: "Tutorials",
    description: "Step-by-step learning resources",
    icon: Video,
    href: "/tutorials"
  },
  {
    title: "Status Page",
    description: "Real-time system status and updates",
    icon: Headphones,
    href: "/status"
  }
];

export default function SupportPage() {
  return (
    <MainLayout
      title="Support - Zion Tech Group"
      description="Get help and support for all our services. 24/7 support available through multiple channels including live chat, email, and phone."
      keywords="support, help, customer service, technical support, 24/7 support, contact support"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
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
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Help
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Get the support you need, when you need it. Our team is available 
                24/7 through multiple channels to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#contact" className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Contact Support
                </Link>
                <Link href="/faq" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Browse FAQ
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Support Channels
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Choose the support option that works best for you
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {option.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {option.description}
                    </p>

                    <div className="space-y-2 text-xs text-gray-500">
                      <div className="flex items-center justify-between">
                        <span>Availability:</span>
                        <span className="font-semibold">{option.availability}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Response:</span>
                        <span className="font-semibold">{option.responseTime}</span>
                      </div>
                    </div>

                    <button className={`w-full mt-4 px-4 py-2 bg-gradient-to-r ${option.color} text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                      Get Started
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Self-Service Resources
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Find answers quickly with our comprehensive resource library
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {resource.description}
                    </p>

                    <Link
                      href={resource.href}
                      className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold group-hover:text-cyan-600 transition-colors"
                    >
                      <span>Access Resource</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Reach out to us through any of these channels
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 mb-2">+1 302 464 0950</p>
                <p className="text-sm text-gray-500">Business Hours</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-2">kleber@ziontechgroup.com</p>
                <p className="text-sm text-gray-500">24/7 Support</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Response Time</h3>
                <p className="text-gray-600 mb-2">Within 2 hours</p>
                <p className="text-sm text-gray-500">Average Response</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}