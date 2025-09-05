<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
<<<<<<< HEAD
import React from 'react';
=======
import { motion } from 'framer-motion';
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
import Head from 'next/head';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
import Link from 'next/link';
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
import Layout from '../components/Layout';
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import Layout from '../components/Layout';
=======
import MainLayout from '../src/components/layout/MainLayout';
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
import { 
  Brain, 
  Cpu, 
  Eye, 
  MessageSquare, 
  BarChart3, 
<<<<<<< HEAD
  Shield, 
  CheckCircle, 
  TrendingUp,
  Rocket
=======
<<<<<<< HEAD
  Shield, 
  CheckCircle, 
  TrendingUp,
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
  Settings,
  Phone,
  Mail,
  MapPin
=======
  Cpu,
  Network,
  Target,
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
  Rocket
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
} from 'lucide-react';

const aiServices = [
  {
<<<<<<< HEAD
    title: 'AI-Powered Email Responder',
    description: 'Automatically respond to customer emails with personalized, context-aware replies.',
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-Response Generation'],
    pricing: '$500 - $2,000/month'
  },
  {
    title: 'Smart Document Analyzer',
    description: 'Extract insights and data from documents using advanced AI and machine learning.',
    features: ['Document Classification', 'Data Extraction', 'Content Analysis'],
    pricing: '$800 - $3,000/month'
  },
  {
    title: 'Predictive Analytics Engine',
    description: 'Forecast business trends and outcomes using machine learning algorithms.',
    features: ['Time Series Analysis', 'Predictive Modeling', 'Risk Assessment'],
    pricing: '$1,200 - $5,000/month'
=======
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
<<<<<<< HEAD
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
=======
    title: "AI Automation",
    description: "Intelligent process automation to streamline workflows and reduce manual tasks",
    icon: Zap,
    features: ["Workflow Automation", "Document Processing", "Data Entry", "Task Scheduling"],
    pricing: "Starting at $1,800/month"
  },
  {
    title: "AI Security",
    description: "Advanced threat detection and security solutions powered by artificial intelligence",
    icon: Shield,
    features: ["Threat Detection", "Anomaly Detection", "Fraud Prevention", "Security Monitoring"],
    pricing: "Starting at $3,200/month"
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
  }
];

const stats = [
<<<<<<< HEAD
  { number: "80+", label: "AI Solutions Available" },
  { number: "95%", label: "Accuracy Rate" },
  { number: "24/7", label: "AI Monitoring" },
  { number: "48hrs", label: "Average Response Time" }
=======
<<<<<<< HEAD
  { number: '500+', label: 'AI Projects Completed' },
  { number: '99.9%', label: 'Accuracy Rate' },
  { number: '24/7', label: 'AI Monitoring' },
  { number: '48hrs', label: 'Average Response Time' }
=======
  { number: "500+", label: "AI Models Deployed" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "AI Monitoring" },
  { number: "48hrs", label: "Average Response Time" }
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
];

export default function AIServices() {
  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, computer vision, natural language processing, and predictive analytics." />
        <meta name="keywords" content="AI services, machine learning, computer vision, NLP, artificial intelligence, AI consulting" />
      </Head>

      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">AI Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Transform your business with cutting-edge artificial intelligence solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                </div>
                
                <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
=======
<<<<<<< HEAD
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
=======
    <Layout
      title="AI Services - Zion Tech Group"
      description="Transform your business with cutting-edge AI solutions including machine learning, computer vision, NLP, and predictive analytics."
      keywords="AI services, machine learning, computer vision, NLP, predictive analytics, AI automation, AI security"
=======
  Users,
  Target,
  Rocket,
  Database,
  Cloud,
  Server,
  Lock,
  Code,
  Network,
  Atom,
  Workflow,
  MessageCircle,
  ArrowUp,
  Sparkles,
  Home,
  Truck,
  BookOpen,
  BarChart3 as BarChart3Icon,
  Cpu as CpuIcon,
  Leaf,
  Satellite,
  HelpCircle,
  Menu,
  X,
  Building2,
  Factory,
  Building
} from 'lucide-react';

const AIServicesPage = () => {
  const services = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform raw data into actionable insights with our advanced AI analytics platform.",
      icon: BarChart3,
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom AI Models", "Data Visualization"],
      price: "Starting at $2,999/month"
    },
    {
      title: "Intelligent Process Automation",
      description: "Automate complex business processes with AI-driven workflow optimization.",
      icon: Workflow,
      features: ["RPA Integration", "Smart Document Processing", "Workflow Optimization", "Exception Handling"],
      price: "Starting at $1,999/month"
    },
    {
      title: "AI Customer Experience Platform",
      description: "Enhance customer interactions with intelligent chatbots and personalization engines.",
      icon: MessageCircle,
      features: ["Smart Chatbots", "Personalization", "Sentiment Analysis", "Multi-channel Support"],
      price: "Starting at $1,499/month"
    },
    {
      title: "Computer Vision Solutions",
      description: "Implement advanced image recognition and video analytics for your business.",
      icon: Eye,
      features: ["Object Detection", "Facial Recognition", "Quality Control", "Security Monitoring"],
      price: "Starting at $3,499/month"
    },
    {
      title: "Natural Language Processing",
      description: "Extract insights from text data with our advanced NLP and text analytics platform.",
      icon: MessageSquare,
      features: ["Text Analysis", "Sentiment Detection", "Language Translation", "Content Generation"],
      price: "Starting at $2,499/month"
    },
    {
      title: "AI-Powered Cybersecurity",
      description: "Protect your business with intelligent threat detection and automated security responses.",
      icon: Shield,
      features: ["Threat Detection", "Anomaly Detection", "Automated Response", "Security Analytics"],
      price: "Starting at $2,999/month"
    }
  ];

  const industries = [
    { name: "Healthcare", icon: Heart, description: "AI-powered diagnostics and patient care" },
    { name: "Finance", icon: DollarSign, description: "Fraud detection and risk assessment" },
    { name: "Manufacturing", icon: Factory, description: "Predictive maintenance and quality control" },
    { name: "Retail", icon: ShoppingCart, description: "Personalized recommendations and inventory management" },
    { name: "Education", icon: BookOpen, description: "Personalized learning and assessment" },
    { name: "Transportation", icon: Truck, description: "Route optimization and autonomous systems" }
  ];

  const stats = [
    { number: "500+", label: "AI Projects Delivered" },
    { number: "95%", label: "Client Satisfaction Rate" },
    { number: "40%", label: "Average Cost Reduction" },
    { number: "24/7", label: "AI System Monitoring" }
  ];

  return (
    <MainLayout 
      title="AI Services - Zion Tech Group"
      description="Transform your business with cutting-edge AI solutions including machine learning, computer vision, NLP, and intelligent automation."
      keywords="AI services, machine learning, artificial intelligence, computer vision, NLP, automation, business intelligence"
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Services &
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From strategy consulting to implementation, we deliver AI that drives real results.
=======
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI-Powered
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business with our comprehensive suite of AI services and solutions.
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
<<<<<<< HEAD
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
=======
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Learn More
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
=======
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  AI-Powered
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {" "}Solutions
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Transform your business with cutting-edge artificial intelligence solutions. 
                  From machine learning to computer vision, we deliver AI that drives real results.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/solutions/ai-implementation" className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  Learn More
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
                </Link>
              </motion.div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </section>
    </>
=======
        </section>

        {/* Stats Section */}
<<<<<<< HEAD
        <section className="py-16 bg-black/20">
=======
        <section className="py-16 bg-white">
<<<<<<< HEAD
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
=======
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
<<<<<<< HEAD
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
=======
        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to accelerate your digital transformation and drive business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
=======
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
<<<<<<< HEAD
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
<<<<<<< HEAD

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
=======
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-blue-600">
                      {service.pricing}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
=======
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-lg font-semibold text-blue-600 mb-4">
                    {service.price}
                  </div>
                  
                  <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    Get Started
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                AI solutions tailored for your industry's unique challenges and opportunities
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="p-6 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-all duration-300 mb-4">
                    <industry.icon className="h-12 w-12 text-gray-600 group-hover:text-blue-600 mx-auto transition-colors duration-300" />
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {industry.description}
                  </p>
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
<<<<<<< HEAD
<<<<<<< HEAD
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our AI experts design and implement the perfect solution for your business needs
=======
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our AI experts help you implement the perfect solution for your business needs.
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
<<<<<<< HEAD
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
=======
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Our Portfolio
=======
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our AI experts help you identify opportunities and implement solutions that drive real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/solutions/ai-implementation" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                  View Case Studies
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
                </Link>
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </Layout>
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
  );
}
=======
    </MainLayout>
  );
};

export default AIServicesPage;
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
