import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Eye, MessageSquare, BarChart3, CheckCircle, ArrowRight, 
  Clock, Star, DollarSign, Award, Globe, Lock, Cpu, Bot, FileText, 
  Image, Video, Mic, Code, Settings, Monitor, Smartphone, Cloud, 
  Server, Network, Car, Rocket, Heart, Building, Sprout, Mail, 
  Search, Target, TrendingUp, Package, Calendar, BookOpen, 
  ShoppingCart, Home, Trash2, Camera, HardDrive, Database, 
  Phone, MapPin, Zap, Users, Shield, Gamepad2, Wifi, Laptop, 
  Truck, GraduationCap, PieChart, ClipboardList, TreePine, Droplets
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const aiServices = [
  {
    id: 1,
    title: 'Machine Learning Models',
    description: 'Custom ML models for predictive analytics, automation, and intelligent decision-making across various industries.',
    icon: Brain,
    category: 'Machine Learning',
    price: 'Starting at $3,500/month',
    features: ['Custom model development & training', 'Data preprocessing & feature engineering', 'Model deployment & monitoring', 'A/B testing & performance optimization'],
    benefits: ['Increase prediction accuracy by 40-60%', 'Automate decision-making processes', 'Reduce manual analysis time by 80%'],
    marketPrice: '$5,000-12,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'E-commerce, Finance, Healthcare, Manufacturing'
  },
  {
    id: 2,
    title: 'Computer Vision Solutions',
    description: 'Advanced image and video analysis for object detection, recognition, and automated visual inspection.',
    icon: Eye,
    category: 'Computer Vision',
    price: 'Starting at $2,800/month',
    features: ['Object detection & recognition', 'Image classification & tagging', 'Facial recognition & analysis', 'Video analytics & monitoring'],
    benefits: ['Improve accuracy by 95%+ in visual tasks', 'Reduce inspection time by 90%', 'Enable 24/7 automated monitoring'],
    marketPrice: '$4,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Manufacturing, Retail, Security, Healthcare'
  },
  {
    id: 3,
    title: 'Natural Language Processing',
    description: 'Text analysis, sentiment analysis, language understanding, and automated content processing solutions.',
    icon: MessageSquare,
    category: 'NLP',
    price: 'Starting at $2,200/month',
    features: ['Text analysis & sentiment detection', 'Language translation & localization', 'Chatbot & virtual assistant development', 'Document summarization & extraction'],
    benefits: ['Process 10,000+ documents per hour', 'Improve customer satisfaction by 35%', 'Reduce content moderation costs by 70%'],
    marketPrice: '$3,500-7,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Customer service, Content platforms, E-learning, Legal'
  },
  {
    id: 4,
    title: 'AI-Powered Analytics',
    description: 'Intelligent data analysis with predictive insights, anomaly detection, and automated reporting.',
    icon: BarChart3,
    category: 'Analytics',
    price: 'Starting at $2,500/month',
    features: ['Predictive analytics & forecasting', 'Anomaly detection & alerting', 'Automated report generation', 'Real-time data visualization'],
    benefits: ['Increase decision speed by 60%', 'Identify opportunities 3x faster', 'Reduce false positives by 80%'],
    marketPrice: '$4,000-9,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Finance, Marketing, Operations, Sales teams'
  },
  {
    id: 5,
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Intelligent conversational AI for customer service, sales, and internal operations automation.',
    icon: Bot,
    category: 'Conversational AI',
    price: 'Starting at $1,800/month',
    features: ['Multi-channel chatbot deployment', 'Natural language understanding', 'Context-aware conversations', 'Integration with CRM & databases'],
    benefits: ['Handle 80% of customer queries automatically', 'Reduce response time by 90%', 'Increase customer satisfaction by 40%'],
    marketPrice: '$2,500-6,000/month',
    setupTime: '1-3 weeks',
    targetUsers: 'Customer service, E-commerce, Healthcare, Education'
  },
  {
    id: 6,
    title: 'AI Document Processing',
    description: 'Intelligent document analysis, extraction, and automation for various business processes.',
    icon: FileText,
    category: 'Document AI',
    price: 'Starting at $2,000/month',
    features: ['Document classification & routing', 'Data extraction & validation', 'Contract analysis & review', 'Invoice processing automation'],
    benefits: ['Process documents 10x faster', 'Reduce errors by 95%', 'Eliminate manual data entry'],
    marketPrice: '$3,000-7,500/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Legal, Finance, Insurance, Government'
  },
  {
    id: 7,
    title: 'AI Video Analytics',
    description: 'Advanced video processing for security, marketing, and business intelligence applications.',
    icon: Video,
    category: 'Video AI',
    price: 'Starting at $3,200/month',
    features: ['Real-time video analysis', 'Object & person tracking', 'Behavioral analysis', 'Facial recognition & identification'],
    benefits: ['Enhance security monitoring', 'Improve operational efficiency', 'Reduce false alarms by 85%'],
    marketPrice: '$4,500-10,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Security, Retail, Transportation, Smart cities'
  },
  {
    id: 8,
    title: 'AI Voice Processing',
    description: 'Advanced voice recognition, synthesis, and analysis for various business applications.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $2,400/month',
    features: ['Speech-to-text conversion', 'Text-to-speech synthesis', 'Voice biometrics & authentication', 'Emotion & sentiment analysis'],
    benefits: ['Improve accessibility', 'Enable hands-free operations', 'Enhance customer experience'],
    marketPrice: '$3,500-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Healthcare, Education, Call centers, Accessibility'
  },
  {
    id: 9,
    title: 'AI Code Generation',
    description: 'Intelligent code generation, review, and optimization for software development teams.',
    icon: Code,
    category: 'Developer AI',
    price: 'Starting at $2,600/month',
    features: ['Automated code generation', 'Code review & optimization', 'Bug detection & fixing', 'Documentation generation'],
    benefits: ['Increase development speed by 50%', 'Reduce bugs by 60%', 'Improve code quality'],
    marketPrice: '$4,000-9,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Software development, IT teams, Startups, Enterprises'
  },
  {
    id: 10,
    title: 'AI Recommendation Systems',
    description: 'Personalized recommendation engines for e-commerce, content, and service platforms.',
    icon: Target,
    category: 'Recommendation AI',
    price: 'Starting at $2,300/month',
    features: ['Personalized product recommendations', 'Content recommendation engines', 'Collaborative filtering', 'Real-time personalization'],
    benefits: ['Increase conversion rates by 30-50%', 'Improve customer engagement', 'Boost average order value'],
    marketPrice: '$3,500-8,500/month',
    setupTime: '2-4 weeks',
    targetUsers: 'E-commerce, Media, SaaS, Marketplaces'
  },
  {
    id: 11,
    title: 'AI Fraud Detection',
    description: 'Advanced fraud detection and prevention systems using machine learning algorithms.',
    icon: Shield,
    category: 'Security AI',
    price: 'Starting at $3,800/month',
    features: ['Real-time fraud detection', 'Transaction monitoring', 'Behavioral analysis', 'Risk scoring & assessment'],
    benefits: ['Reduce fraud losses by 80%', 'Minimize false positives by 70%', 'Enable real-time protection'],
    marketPrice: '$5,500-15,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Banking, E-commerce, Insurance, Fintech'
  },
  {
    id: 12,
    title: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain management with demand forecasting and logistics optimization.',
    icon: Truck,
    category: 'Supply Chain AI',
    price: 'Starting at $4,200/month',
    features: ['Demand forecasting', 'Inventory optimization', 'Route optimization', 'Supplier risk assessment'],
    benefits: ['Reduce inventory costs by 25%', 'Improve delivery times by 40%', 'Minimize stockouts by 60%'],
    marketPrice: '$6,000-18,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Retail, Logistics, Distribution'
  },
  {
    id: 13,
    title: 'AI Healthcare Diagnostics',
    description: 'Medical image analysis, diagnostic assistance, and patient monitoring solutions.',
    icon: Heart,
    category: 'Healthcare AI',
    price: 'Starting at $5,500/month',
    features: ['Medical image analysis', 'Diagnostic assistance', 'Patient monitoring', 'Drug discovery support'],
    benefits: ['Improve diagnostic accuracy by 30%', 'Reduce diagnosis time by 50%', 'Enable early disease detection'],
    marketPrice: '$8,000-25,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Hospitals, Clinics, Medical research, Telemedicine'
  },
  {
    id: 14,
    title: 'AI Marketing Automation',
    description: 'Intelligent marketing campaigns, customer segmentation, and personalized outreach.',
    icon: TrendingUp,
    category: 'Marketing AI',
    price: 'Starting at $2,100/month',
    features: ['Customer segmentation', 'Campaign optimization', 'Content personalization', 'Lead scoring & qualification'],
    benefits: ['Increase campaign ROI by 45%', 'Improve lead quality by 60%', 'Reduce marketing costs by 35%'],
    marketPrice: '$3,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Marketing agencies, E-commerce, SaaS, B2B companies'
  },
  {
    id: 15,
    title: 'AI Financial Analysis',
    description: 'Automated financial analysis, risk assessment, and investment recommendations.',
    icon: DollarSign,
    category: 'Finance AI',
    price: 'Starting at $3,600/month',
    features: ['Automated financial analysis', 'Risk assessment & modeling', 'Investment recommendations', 'Credit scoring'],
    benefits: ['Improve analysis accuracy by 40%', 'Reduce analysis time by 75%', 'Enhance risk management'],
    marketPrice: '$5,000-15,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Banks, Investment firms, Insurance, Fintech'
  },
  {
    id: 16,
    title: 'AI Content Generation',
    description: 'Automated content creation for blogs, social media, marketing materials, and documentation.',
    icon: FileText,
    category: 'Content AI',
    price: 'Starting at $1,900/month',
    features: ['Blog post generation', 'Social media content', 'Marketing copy creation', 'Technical documentation'],
    benefits: ['Increase content production by 300%', 'Reduce content costs by 60%', 'Improve SEO performance'],
    marketPrice: '$2,500-6,000/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Marketing teams, Content creators, Agencies, E-commerce'
  },
  {
    id: 17,
    title: 'AI Process Automation',
    description: 'Intelligent process automation for repetitive tasks and workflow optimization.',
    icon: Settings,
    category: 'Process AI',
    price: 'Starting at $2,700/month',
    features: ['Workflow automation', 'Task scheduling & optimization', 'Exception handling', 'Process monitoring'],
    benefits: ['Reduce manual work by 80%', 'Improve process efficiency by 50%', 'Eliminate human errors'],
    marketPrice: '$4,000-10,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Operations, HR, Finance, Customer service'
  },
  {
    id: 18,
    title: 'AI Quality Assurance',
    description: 'Automated testing, quality control, and defect detection for software and products.',
    icon: CheckCircle,
    category: 'QA AI',
    price: 'Starting at $2,400/month',
    features: ['Automated test generation', 'Defect prediction', 'Quality metrics analysis', 'Performance testing'],
    benefits: ['Reduce testing time by 70%', 'Improve defect detection by 60%', 'Lower QA costs by 50%'],
    marketPrice: '$3,500-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Software development, Manufacturing, Quality teams'
  },
  {
    id: 19,
    title: 'AI Energy Optimization',
    description: 'Smart energy management and optimization for buildings, manufacturing, and utilities.',
    icon: Zap,
    category: 'Energy AI',
    price: 'Starting at $3,400/month',
    features: ['Energy consumption analysis', 'Predictive maintenance', 'Load balancing optimization', 'Renewable energy integration'],
    benefits: ['Reduce energy costs by 25%', 'Improve efficiency by 30%', 'Minimize environmental impact'],
    marketPrice: '$5,000-12,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Utilities, Manufacturing, Buildings, Smart cities'
  },
  {
    id: 20,
    title: 'AI Gaming Intelligence',
    description: 'AI-powered game development, player behavior analysis, and intelligent game mechanics.',
    icon: Gamepad2,
    category: 'Gaming AI',
    price: 'Starting at $2,800/month',
    features: ['NPC behavior generation', 'Player behavior analysis', 'Dynamic difficulty adjustment', 'Procedural content generation'],
    benefits: ['Enhance player engagement', 'Improve game balance', 'Reduce development time'],
    marketPrice: '$4,000-10,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Game developers, Gaming studios, Esports, Mobile games'
  }
];

export default function AIServicesPage() {
  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group | 80+ Cutting-Edge AI Solutions</title>
        <meta name="description" content="Discover 80+ advanced AI services including machine learning, computer vision, NLP, chatbots, and more. Transform your business with our comprehensive AI solutions." />
        <meta name="keywords" content="AI services, machine learning, computer vision, NLP, chatbots, AI analytics, AI automation, artificial intelligence solutions" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="80+ cutting-edge AI solutions for modern businesses" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
                <Link href="/ai-services" className="text-white font-semibold">AI Services</Link>
                <Link href="/it-services" className="text-white/80 hover:text-white transition-colors">IT Services</Link>
                <Link href="/micro-saas" className="text-white/80 hover:text-white transition-colors">Micro SaaS</Link>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Services & Solutions
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, 
                quantum AI, and advanced analytics to transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#services" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Explore AI Services
                </Link>
                <Link 
                  href={`tel:${contactInfo.phone}`}
                  className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Call {contactInfo.phone}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our AI Services</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to accelerate your digital transformation and drive business growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-sm text-blue-300 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">Price:</span>
                      <span className="text-green-400 font-semibold">{service.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">Market Price:</span>
                      <span className="text-yellow-400 font-semibold">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">Setup Time:</span>
                      <span className="text-blue-300 font-semibold">{service.setupTime}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-white/70 text-xs">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2 text-sm">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-white/70 text-xs">
                          <ArrowRight className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link 
                      href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                    <Link 
                      href={`tel:${contactInfo.phone}`}
                      className="flex-1 border border-white/30 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center hover:bg-white/10 transition-all duration-300"
                    >
                      Call Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Contact us today to discuss your AI requirements and get a customized solution that drives real business value.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-white/80 mb-4">{contactInfo.phone}</p>
                  <Link 
                    href={`tel:${contactInfo.phone}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Call Now →
                  </Link>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-white/80 mb-4">{contactInfo.email}</p>
                  <Link 
                    href={`mailto:${contactInfo.email}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Send Email →
                  </Link>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-white/80 mb-4">{contactInfo.address}</p>
                  <Link 
                    href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                    target="_blank"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Get Directions →
                  </Link>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href={`mailto:${contactInfo.email}?subject=AI Services Inquiry`}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  href="/it-services"
                  className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Explore IT Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/40 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">Zion Tech Group</span>
                </Link>
                <p className="text-white/60 text-sm">
                  Leading provider of AI, IT, and Micro SaaS solutions for modern businesses.
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/ai-services" className="text-white/60 hover:text-white transition-colors text-sm">AI Services</Link></li>
                  <li><Link href="/it-services" className="text-white/60 hover:text-white transition-colors text-sm">IT Services</Link></li>
                  <li><Link href="/micro-saas" className="text-white/60 hover:text-white transition-colors text-sm">Micro SaaS</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-white/60 hover:text-white transition-colors text-sm">About Us</Link></li>
                  <li><Link href="/careers" className="text-white/60 hover:text-white transition-colors text-sm">Careers</Link></li>
                  <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Contact Info</h3>
                <div className="space-y-2 text-sm text-white/60">
                  <p>{contactInfo.phone}</p>
                  <p>{contactInfo.email}</p>
                  <p>{contactInfo.address}</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-8 pt-8 text-center">
              <p className="text-white/60 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}