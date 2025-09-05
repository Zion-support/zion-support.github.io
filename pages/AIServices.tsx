import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Brain, 
  Bot, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Clock,
  Users,
  Award,
  TrendingUp,
  Globe,
  Code,
  Database,
  Settings,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const aiServices = [
  {
    id: 'ai-consulting',
    title: 'AI Strategy Consulting',
    description: 'Comprehensive AI strategy development and implementation planning for your business',
    icon: Brain,
    features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning'],
    pricing: 'Starting at $5,000/month',
    category: 'Consulting',
    benefits: ['Strategic AI guidance', 'Technology roadmap', 'ROI optimization']
  },
  {
    id: 'ai-automation',
    title: 'AI Process Automation',
    description: 'Automate complex business processes with intelligent AI-powered solutions',
    icon: Bot,
    features: ['Workflow Automation', 'Intelligent Routing', 'Exception Handling', 'Performance Analytics'],
    pricing: 'Starting at $3,500/month',
    category: 'Automation',
    benefits: ['Reduce manual work', 'Improve efficiency', 'Scale operations']
  },
  {
    id: 'ai-analytics',
    title: 'AI-Powered Analytics',
    description: 'Transform your data into actionable insights with advanced AI analytics',
    icon: BarChart3,
    features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Machine Learning Models'],
    pricing: 'Starting at $2,500/month',
    category: 'Analytics',
    benefits: ['Data-driven decisions', 'Predictive insights', 'Competitive advantage']
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbot Solutions',
    description: 'Intelligent conversational AI for customer service and support',
    icon: MessageSquare,
    features: ['Natural Language Processing', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'],
    pricing: 'Starting at $1,500/month',
    category: 'Customer Service',
    benefits: ['24/7 customer support', 'Reduce support costs', 'Improve response times']
  },
  {
    id: 'ai-computer-vision',
    title: 'Computer Vision Solutions',
    description: 'Advanced image and video analysis using AI computer vision technology',
    icon: Eye,
    features: ['Image Recognition', 'Video Analysis', 'Object Detection', 'Quality Control'],
    pricing: 'Starting at $4,000/month',
    category: 'Computer Vision',
    benefits: ['Automated quality control', 'Enhanced security', 'Process optimization']
  },
  {
    id: 'ai-cybersecurity',
    title: 'AI Cybersecurity Solutions',
    description: 'Advanced threat detection and security automation using AI',
    icon: Shield,
    features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Security Analytics'],
    pricing: 'Starting at $3,000/month',
    category: 'Cybersecurity',
    benefits: ['Enhanced security', 'Real-time threat detection', 'Reduced false positives']
  }
];

const categories = [
  'All',
  'Consulting',
  'Automation',
  'Analytics',
  'Customer Service',
  'Computer Vision',
  'Cybersecurity'
];

const stats = [
  { number: '500+', label: 'AI Projects Completed' },
  { number: '99.9%', label: 'Accuracy Rate' },
  { number: '24/7', label: 'AI Monitoring' },
  { number: '48hrs', label: 'Average Response Time' }
];

export default function AIServices() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <Head>
        <title>AI Services | ZionTech Group</title>
        <meta name="description" content="Comprehensive AI services and solutions powered by cutting-edge technology. Transform your business with our expert AI consulting and implementation services." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI consulting, automation, analytics" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Services &
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From strategy consulting to implementation, we deliver AI that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-4 pr-4 py-3 bg-white/10 border border-gray-300/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-300/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 mb-6 text-sm">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <ArrowRight className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-white">{service.pricing}</div>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-sm">4.9/5</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        href="/contact"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                      >
                        Get Quote
                      </Link>
                      <Link
                        href="/micro-saas"
                        className="flex-1 border border-gray-300 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our AI experts design and implement the perfect solution for your business needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Get AI Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/it-services"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Explore IT Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
