import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Headphones, 
  MessageCircle,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  ArrowRight,
  Search,
  FileText,
  Video,
  Users,
  Zap,
  Shield,
  Globe
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const supportChannels = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageCircle,
    availability: "24/7",
    responseTime: "< 2 minutes",
    color: "from-blue-600 to-blue-800",
    action: "Start Chat"
  },
  {
    title: "Phone Support",
    description: "Speak directly with our technical experts",
    icon: Phone,
    availability: "Mon-Fri 9AM-6PM EST",
    responseTime: "Immediate",
    color: "from-green-600 to-green-800",
    action: "Call Now"
  },
  {
    title: "Email Support",
    description: "Send us detailed questions and get comprehensive answers",
    icon: Mail,
    availability: "24/7",
    responseTime: "< 4 hours",
    color: "from-purple-600 to-purple-800",
    action: "Send Email"
  },
  {
    title: "Ticket System",
    description: "Track and manage your support requests",
    icon: FileText,
    availability: "24/7",
    responseTime: "< 2 hours",
    color: "from-orange-600 to-orange-800",
    action: "Create Ticket"
  }
];

const supportResources = [
  {
    title: "Documentation",
    description: "Comprehensive guides and API references",
    icon: FileText,
    count: "200+ articles",
    href: "/docs"
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides",
    icon: Video,
    count: "50+ videos",
    href: "/tutorials"
  },
  {
    title: "FAQ",
    description: "Answers to frequently asked questions",
    icon: CheckCircle,
    count: "100+ questions",
    href: "/faq"
  },
  {
    title: "Community Forum",
    description: "Connect with other users and experts",
    icon: Users,
    count: "2K+ members",
    href: "/community"
  }
];

const supportTopics = [
  {
    title: "Technical Issues",
    description: "API problems, integration issues, bugs",
    icon: Zap,
    articles: 45
  },
  {
    title: "Account & Billing",
    description: "Account management, billing questions, payments",
    icon: Shield,
    articles: 23
  },
  {
    title: "Getting Started",
    description: "Setup guides, first steps, onboarding",
    icon: Globe,
    articles: 67
  },
  {
    title: "Feature Requests",
    description: "Suggest new features, provide feedback",
    icon: MessageCircle,
    articles: 12
  }
];

const supportStats = [
  { number: "99.9%", label: "Uptime" },
  { number: "< 2 min", label: "Response Time" },
  { number: "24/7", label: "Availability" },
  { number: "4.9/5", label: "Satisfaction Rating" }
];

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "support@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown, DE 19709"
};

export default function SupportPage() {
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);

  return (
    <MainLayout 
      title="Support - Zion Tech Group"
      description="Get help and support for Zion Tech Group's services. 24/7 support, documentation, tutorials, and community resources."
      keywords="support, help, customer service, technical support, documentation, tutorials, FAQ"
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
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Headphones className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Support Center
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We're here to help! Get support through multiple channels and access 
                comprehensive resources to solve any issues.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, and solutions..."
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Contact Support
                </Link>
                <Link href="/docs" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Browse Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {supportStats.map((stat, index) => (
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
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Channels */}
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
                Get Support
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Choose your preferred way to get help. We're available 24/7 through multiple channels.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => {
                const IconComponent = channel.icon;
                return (
                  <motion.div
                    key={index}
                    className={`bg-white border-2 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer ${
                      selectedChannel === channel.title ? 'border-blue-500 shadow-lg' : 'border-gray-200 hover:border-blue-300'
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedChannel(channel.title)}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {channel.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm">
                      {channel.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {channel.availability}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Zap className="w-4 h-4 mr-2" />
                        {channel.responseTime}
                      </div>
                    </div>

                    <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                      selectedChannel === channel.title
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                    }`}>
                      {channel.action}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Support Resources */}
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
                Support Resources
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Access comprehensive resources to help you get the most out of our platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportResources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 text-sm">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-600 font-medium">
                        {resource.count}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
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
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Popular Support Topics
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Browse articles by topic to quickly find the help you need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportTopics.map((topic, index) => {
                const IconComponent = topic.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition-colors group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {topic.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 text-sm">
                      {topic.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {topic.articles} articles
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section id="contact" className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Contact Information
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Get in touch with us through any of these channels.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-2">{contactInfo.phone}</p>
                <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM EST</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-2">{contactInfo.email}</p>
                <p className="text-sm text-gray-400">24/7 Support</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300 mb-2">Available 24/7</p>
                <p className="text-sm text-gray-400">Instant Response</p>
              </div>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Need Immediate Help?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our support team is standing by to help you resolve any issues quickly and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Support Now
                </Link>
                <Link href="/docs" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Browse Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}