import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, 
  Zap, 
  Shield, 
  Database, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Search, 
  Eye, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Award, 
  Star, 
  Globe, 
  Lock, 
  Cpu, 
  Bot, 
  FileText, 
  Video, 
  Mic, 
  Code, 
  Settings, 
  Monitor, 
  Smartphone, 
  Cloud, 
  Server, 
  Network, 
  Car, 
  Rocket, 
  Heart, 
  Building, 
  Sprout, 
  Mail, 
  ShoppingCart, 
  BookOpen, 
  Home, 
  Gamepad2 
} from 'lucide-react';

const aiServices = [
  {
    title: 'AI-Powered Email Responder',
    description: 'Automatically respond to customer emails with intelligent, context-aware replies.',
    icon: Mail,
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-Response Generation', 'Multi-language Support'],
    pricing: '$500 - $2,000/month',
    category: 'Communication',
    popular: true,
    benefits: ['Reduces response time by 80%', 'Improves customer satisfaction', 'Saves 20+ hours/week'],
    marketPrice: '$1,200/month',
    link: '/contact'
  },
  {
    title: 'Predictive Analytics Platform',
    description: 'Advanced AI platform for business forecasting and trend analysis.',
    icon: BarChart3,
    features: ['Machine Learning Models', 'Real-time Analytics', 'Custom Dashboards', 'API Integration'],
    pricing: '$1,000 - $5,000/month',
    category: 'Analytics',
    popular: true,
    benefits: ['Increases accuracy by 40%', 'Reduces forecasting errors', 'Enables data-driven decisions'],
    marketPrice: '$3,000/month',
    link: '/contact'
  },
  {
    title: 'Intelligent Chatbot System',
    description: 'AI-powered chatbot with natural conversation capabilities and multi-channel support.',
    icon: MessageSquare,
    features: ['Natural Language Understanding', 'Multi-channel Support', 'Integration APIs', 'Analytics Dashboard'],
    pricing: '$300 - $1,500/month',
    category: 'Customer Service',
    popular: true,
    benefits: ['Handles 80% of queries automatically', 'Available 24/7', 'Reduces support costs'],
    marketPrice: '$900/month',
    link: '/contact'
  },
  {
    title: 'Computer Vision Solutions',
    description: 'AI-powered image and video analysis for various business applications.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analysis'],
    pricing: '$800 - $3,000/month',
    category: 'Computer Vision',
    popular: false,
    benefits: ['Automates visual inspections', 'Improves accuracy', 'Enables new use cases'],
    marketPrice: '$1,800/month',
    link: '/contact'
  },
  {
    title: 'AI Content Generation',
    description: 'Automated content creation for blogs, social media, and marketing materials.',
    icon: FileText,
    features: ['Text Generation', 'SEO Optimization', 'Multi-format Output', 'Brand Voice Training'],
    pricing: '$200 - $800/month',
    category: 'Content Creation',
    popular: true,
    benefits: ['Saves 15+ hours/week', 'Maintains consistent quality', 'Scales content production'],
    marketPrice: '$500/month',
    link: '/contact'
  },
  {
    title: 'Voice AI Assistant',
    description: 'Intelligent voice assistant for customer service and internal operations.',
    icon: Mic,
    features: ['Speech Recognition', 'Natural Language Processing', 'Voice Synthesis', 'Multi-language Support'],
    pricing: '$600 - $2,500/month',
    category: 'Voice AI',
    popular: false,
    benefits: ['Handles voice queries', 'Improves accessibility', 'Reduces call center load'],
    marketPrice: '$1,500/month',
    link: '/contact'
  },
  {
    title: 'AI Cybersecurity Analyst',
    description: 'AI-powered security monitoring and threat detection system.',
    icon: Shield,
    features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Security Analytics'],
    pricing: '$1,500 - $6,000/month',
    category: 'Cybersecurity',
    popular: true,
    benefits: ['Detects threats 10x faster', 'Reduces false positives', 'Provides 24/7 monitoring'],
    marketPrice: '$3,500/month',
    link: '/contact'
  },
  {
    title: 'AI Medical Imaging Analysis',
    description: 'AI-powered medical image analysis for diagnostic support and screening.',
    icon: Heart,
    features: ['Medical Image Analysis', 'Diagnostic Support', 'Screening Automation', 'Report Generation'],
    pricing: '$2,000 - $8,000/month',
    category: 'Healthcare',
    popular: false,
    benefits: ['Improves diagnostic accuracy', 'Reduces analysis time', 'Enables early detection'],
    marketPrice: '$5,000/month',
    link: '/contact'
  },
  {
    title: 'AI Legal Research Assistant',
    description: 'Intelligent legal research platform with case law analysis and document review.',
    icon: BookOpen,
    features: ['Case Law Analysis', 'Document Review', 'Legal Research', 'Compliance Checking'],
    pricing: '$1,200 - $4,000/month',
    category: 'Legal Tech',
    popular: false,
    benefits: ['Saves research time', 'Improves accuracy', 'Reduces legal costs'],
    marketPrice: '$2,500/month',
    link: '/contact'
  },
  {
    title: 'AI Climate Change Predictor',
    description: 'AI system for climate modeling and environmental impact prediction.',
    icon: Globe,
    features: ['Climate Modeling', 'Impact Prediction', 'Data Visualization', 'Trend Analysis'],
    pricing: '$3,000 - $10,000/month',
    category: 'Environmental',
    popular: false,
    benefits: ['Improves climate predictions', 'Enables better planning', 'Supports sustainability goals'],
    marketPrice: '$6,500/month',
    link: '/contact'
  },
  {
    title: 'AI Autonomous Vehicle System',
    description: 'Advanced autonomous vehicle systems with computer vision and decision making.',
    icon: Car,
    features: ['Computer Vision', 'Path Planning', 'Obstacle Detection', 'Real-time Decision Making'],
    pricing: '$100,000 - $500,000/project',
    category: 'Autonomous Systems',
    popular: true,
    benefits: ['Improves safety', 'Reduces accidents', 'Enables new mobility solutions'],
    marketPrice: '$300,000/project',
    link: '/contact'
  },
  {
    title: 'AI Quantum Computing Integration',
    description: 'Quantum-enhanced AI algorithms for complex optimization problems.',
    icon: Cpu,
    features: ['Quantum Machine Learning', 'Optimization Algorithms', 'Cryptography', 'Simulation'],
    pricing: '$50,000 - $200,000/project',
    category: 'Quantum AI',
    popular: false,
    benefits: ['Solves complex problems', 'Improves performance', 'Enables new applications'],
    marketPrice: '$125,000/project',
    link: '/contact'
  },
  {
    title: 'AI Digital Twin Platform',
    description: 'AI-powered digital twin creation and simulation platform.',
    icon: Monitor,
    features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analysis', 'Virtual Testing'],
    pricing: '$20,000 - $100,000/project',
    category: 'Digital Twin',
    popular: false,
    benefits: ['Reduces physical testing', 'Improves design', 'Enables optimization'],
    marketPrice: '$60,000/project',
    link: '/contact'
  },
  {
    title: 'AI Drug Discovery Platform',
    description: 'Accelerated drug discovery using AI for molecular design and optimization.',
    icon: Heart,
    features: ['Molecular Modeling', 'Drug-Target Interaction', 'Toxicity Prediction', 'Clinical Trial Design'],
    pricing: '$50,000 - $500,000/project',
    category: 'Pharmaceutical',
    popular: false,
    benefits: ['Accelerates discovery', 'Reduces costs', 'Improves success rates'],
    marketPrice: '$275,000/project',
    link: '/contact'
  },
  {
    title: 'AI Personal Health Coach',
    description: 'AI-powered personal health monitoring and wellness recommendations.',
    icon: Heart,
    features: ['Health Monitoring', 'Personalized Recommendations', 'Progress Tracking', 'Wellness Planning'],
    pricing: '$50 - $200/month',
    category: 'Health & Wellness',
    popular: true,
    benefits: ['Improves health outcomes', 'Provides personalized care', 'Reduces healthcare costs'],
    marketPrice: '$125/month',
    link: '/contact'
  }
];

const industries = [
  { name: 'Healthcare', icon: Heart, description: 'AI-powered diagnostics and patient care' },
  { name: 'Finance', icon: TrendingUp, description: 'Fraud detection and risk management' },
  { name: 'Manufacturing', icon: Building, description: 'Quality control and predictive maintenance' },
  { name: 'Retail', icon: ShoppingCart, description: 'Personalized shopping and inventory management' },
  { name: 'Education', icon: BookOpen, description: 'Personalized learning and assessment' },
  { name: 'Transportation', icon: Car, description: 'Autonomous vehicles and route optimization' }
];

export default function AIServices() {
  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, computer vision, natural language processing, and more. Transform your business with cutting-edge AI solutions." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI <span className="text-blue-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge AI solutions. From machine learning to computer vision, 
                we provide comprehensive AI services tailored to your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/micro-saas"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Micro SaaS
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    {service.popular && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">Starting at</span>
                      <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">Market Price</span>
                      <span className="text-sm text-gray-600">{service.marketPrice}</span>
                    </div>
                    <Link
                      href={service.link}
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our AI solutions are tailored for various industries and use cases.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI solutions can help you achieve your goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/it-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View IT Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}