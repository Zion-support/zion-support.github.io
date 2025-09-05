import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Brain, 
  Cpu, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Code, 
  Settings, 
  Users, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Award, 
  Rocket, 
  Lightbulb, 
  Gamepad2, 
  Droplets, 
  Video, 
  BookOpen, 
  Palette, 
  Truck, 
  Sprout, 
  Atom, 
  Link as LinkIcon, 
  GraduationCap, 
  DollarSign, 
  ShoppingCart, 
  Phone, 
  MapPin, 
  ExternalLink,
  Heart,
  Search,
  Mail
} from 'lucide-react';

const aiServices = [
  {
    id: 1,
    name: 'Machine Learning Solutions',
    description: 'Advanced ML algorithms for predictive analytics, pattern recognition, and intelligent automation.',
    icon: Brain,
    features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making', 'Real-time Processing'],
    pricing: 'Starting at $2,500/month',
    category: 'Core AI',
    popularity: 95
  },
  {
    id: 2,
    name: 'Computer Vision',
    description: 'Image and video analysis, object detection, facial recognition, and visual intelligence.',
    icon: Eye,
    features: ['Object Detection', 'Facial Recognition', 'Image Classification', 'Video Analysis'],
    pricing: 'Starting at $3,000/month',
    category: 'Vision AI',
    popularity: 88
  },
  {
    id: 3,
    name: 'Natural Language Processing',
    description: 'Text analysis, sentiment analysis, language translation, and conversational AI.',
    icon: MessageSquare,
    features: ['Sentiment Analysis', 'Language Translation', 'Text Summarization', 'Chatbots'],
    pricing: 'Starting at $2,000/month',
    category: 'Language AI',
    popularity: 92
  },
  {
    id: 4,
    name: 'Predictive Analytics',
    description: 'Data-driven insights, forecasting, and predictive modeling for business intelligence.',
    icon: BarChart3,
    features: ['Business Forecasting', 'Risk Assessment', 'Trend Analysis', 'Performance Prediction'],
    pricing: 'Starting at $1,800/month',
    category: 'Analytics AI',
    popularity: 85
  },
  {
    id: 5,
    name: 'AI Security Solutions',
    description: 'Intelligent threat detection, fraud prevention, and cybersecurity automation.',
    icon: Shield,
    features: ['Threat Detection', 'Fraud Prevention', 'Anomaly Detection', 'Security Automation'],
    pricing: 'Starting at $4,000/month',
    category: 'Security AI',
    popularity: 90
  },
  {
    id: 6,
    name: 'Quantum AI',
    description: 'Quantum computing integration for complex problem solving and optimization.',
    icon: Atom,
    features: ['Quantum Optimization', 'Complex Problem Solving', 'Advanced Algorithms', 'Quantum ML'],
    pricing: 'Starting at $10,000/month',
    category: 'Quantum AI',
    popularity: 75
  },
  {
    id: 7,
    name: 'Autonomous Systems',
    description: 'Self-driving vehicles, drones, and autonomous robotics solutions.',
    icon: Truck,
    features: ['Autonomous Vehicles', 'Drone Technology', 'Robotic Automation', 'Smart Navigation'],
    pricing: 'Starting at $15,000/month',
    category: 'Autonomous AI',
    popularity: 80
  },
  {
    id: 8,
    name: 'Climate Modeling',
    description: 'Environmental data analysis, climate prediction, and sustainability solutions.',
    icon: Sprout,
    features: ['Climate Prediction', 'Environmental Analysis', 'Sustainability Metrics', 'Carbon Tracking'],
    pricing: 'Starting at $3,500/month',
    category: 'Environmental AI',
    popularity: 70
  },
  {
    id: 9,
    name: 'Brain-Computer Interface',
    description: 'Neural interface technology for direct brain-computer communication.',
    icon: Cpu,
    features: ['Neural Interfaces', 'Brain Signal Processing', 'Cognitive Enhancement', 'Medical Applications'],
    pricing: 'Starting at $25,000/month',
    category: 'Neural AI',
    popularity: 60
  },
  {
    id: 10,
    name: 'Synthetic Biology AI',
    description: 'AI-powered biological system design and genetic engineering.',
    icon: Droplets,
    features: ['Genetic Design', 'Protein Modeling', 'Drug Discovery', 'Biological Optimization'],
    pricing: 'Starting at $8,000/month',
    category: 'Bio AI',
    popularity: 65
  },
  {
    id: 11,
    name: 'Financial Trading AI',
    description: 'Algorithmic trading, market analysis, and financial risk management.',
    icon: DollarSign,
    features: ['Algorithmic Trading', 'Market Analysis', 'Risk Management', 'Portfolio Optimization'],
    pricing: 'Starting at $5,000/month',
    category: 'Financial AI',
    popularity: 88
  },
  {
    id: 12,
    name: 'Energy Grid Optimization',
    description: 'Smart grid management, energy distribution, and renewable energy optimization.',
    icon: Zap,
    features: ['Grid Optimization', 'Energy Distribution', 'Renewable Integration', 'Demand Forecasting'],
    pricing: 'Starting at $6,000/month',
    category: 'Energy AI',
    popularity: 75
  },
  {
    id: 13,
    name: 'Materials Science AI',
    description: 'AI-driven material discovery, property prediction, and design optimization.',
    icon: Settings,
    features: ['Material Discovery', 'Property Prediction', 'Design Optimization', 'Quality Control'],
    pricing: 'Starting at $4,500/month',
    category: 'Materials AI',
    popularity: 70
  },
  {
    id: 14,
    name: 'Social Impact Analytics',
    description: 'AI solutions for social good, impact measurement, and community development.',
    icon: Users,
    features: ['Impact Measurement', 'Social Analytics', 'Community Development', 'Policy Analysis'],
    pricing: 'Starting at $2,000/month',
    category: 'Social AI',
    popularity: 65
  },
  {
    id: 15,
    name: 'Creative Design AI',
    description: 'AI-powered creative tools for design, art, and content generation.',
    icon: Palette,
    features: ['Design Generation', 'Art Creation', 'Content Generation', 'Creative Automation'],
    pricing: 'Starting at $1,500/month',
    category: 'Creative AI',
    popularity: 82
  },
  {
    id: 16,
    name: 'Legal Analytics',
    description: 'AI-powered legal research, document analysis, and case prediction.',
    icon: BookOpen,
    features: ['Legal Research', 'Document Analysis', 'Case Prediction', 'Compliance Monitoring'],
    pricing: 'Starting at $3,200/month',
    category: 'Legal AI',
    popularity: 78
  },
  {
    id: 17,
    name: 'Educational Personalization',
    description: 'Personalized learning experiences, adaptive education, and student analytics.',
    icon: GraduationCap,
    features: ['Personalized Learning', 'Adaptive Education', 'Student Analytics', 'Learning Optimization'],
    pricing: 'Starting at $2,800/month',
    category: 'Education AI',
    popularity: 85
  },
  {
    id: 18,
    name: 'Supply Chain Intelligence',
    description: 'AI-powered supply chain optimization, logistics, and inventory management.',
    icon: Truck,
    features: ['Supply Chain Optimization', 'Logistics Management', 'Inventory Optimization', 'Demand Forecasting'],
    pricing: 'Starting at $4,200/month',
    category: 'Supply Chain AI',
    popularity: 80
  },
  {
    id: 19,
    name: 'Mental Health Support',
    description: 'AI-powered mental health monitoring, therapy assistance, and wellness tracking.',
    icon: Heart,
    features: ['Mental Health Monitoring', 'Therapy Assistance', 'Wellness Tracking', 'Crisis Intervention'],
    pricing: 'Starting at $2,200/month',
    category: 'Health AI',
    popularity: 75
  },
  {
    id: 20,
    name: 'Agricultural Intelligence',
    description: 'Smart farming, crop optimization, and agricultural automation solutions.',
    icon: Sprout,
    features: ['Crop Optimization', 'Smart Farming', 'Agricultural Automation', 'Yield Prediction'],
    pricing: 'Starting at $3,800/month',
    category: 'Agricultural AI',
    popularity: 70
  },
  {
    id: 21,
    name: 'Environmental Monitoring',
    description: 'AI-powered environmental monitoring, pollution detection, and ecosystem analysis.',
    icon: Globe,
    features: ['Pollution Detection', 'Ecosystem Analysis', 'Environmental Monitoring', 'Climate Tracking'],
    pricing: 'Starting at $2,500/month',
    category: 'Environmental AI',
    popularity: 68
  },
  {
    id: 22,
    name: 'Virtual Reality AI',
    description: 'AI-enhanced VR experiences, virtual environments, and immersive technologies.',
    icon: Video,
    features: ['VR Enhancement', 'Virtual Environments', 'Immersive Experiences', 'Spatial Computing'],
    pricing: 'Starting at $5,500/month',
    category: 'VR AI',
    popularity: 72
  },
  {
    id: 23,
    name: 'Blockchain Analytics',
    description: 'AI-powered blockchain analysis, cryptocurrency insights, and DeFi optimization.',
    icon: Database,
    features: ['Blockchain Analysis', 'Cryptocurrency Insights', 'DeFi Optimization', 'Smart Contract Analysis'],
    pricing: 'Starting at $4,800/month',
    category: 'Blockchain AI',
    popularity: 77
  },
  {
    id: 24,
    name: 'Gaming Intelligence',
    description: 'AI-powered game development, player analytics, and intelligent game design.',
    icon: Gamepad2,
    features: ['Game Development', 'Player Analytics', 'Intelligent Design', 'Procedural Generation'],
    pricing: 'Starting at $3,500/month',
    category: 'Gaming AI',
    popularity: 80
  },
  {
    id: 25,
    name: 'Research Assistant',
    description: 'AI-powered research tools, data analysis, and scientific discovery assistance.',
    icon: BookOpen,
    features: ['Research Tools', 'Data Analysis', 'Scientific Discovery', 'Literature Review'],
    pricing: 'Starting at $2,200/month',
    category: 'Research AI',
    popularity: 85
  }
];

const categories = [
  { name: 'All', count: aiServices.length },
  { name: 'Core AI', count: aiServices.filter(s => s.category === 'Core AI').length },
  { name: 'Vision AI', count: aiServices.filter(s => s.category === 'Vision AI').length },
  { name: 'Language AI', count: aiServices.filter(s => s.category === 'Language AI').length },
  { name: 'Analytics AI', count: aiServices.filter(s => s.category === 'Analytics AI').length },
  { name: 'Security AI', count: aiServices.filter(s => s.category === 'Security AI').length },
  { name: 'Quantum AI', count: aiServices.filter(s => s.category === 'Quantum AI').length },
  { name: 'Autonomous AI', count: aiServices.filter(s => s.category === 'Autonomous AI').length },
  { name: 'Environmental AI', count: aiServices.filter(s => s.category === 'Environmental AI').length },
  { name: 'Neural AI', count: aiServices.filter(s => s.category === 'Neural AI').length },
  { name: 'Bio AI', count: aiServices.filter(s => s.category === 'Bio AI').length },
  { name: 'Financial AI', count: aiServices.filter(s => s.category === 'Financial AI').length },
  { name: 'Energy AI', count: aiServices.filter(s => s.category === 'Energy AI').length },
  { name: 'Materials AI', count: aiServices.filter(s => s.category === 'Materials AI').length },
  { name: 'Social AI', count: aiServices.filter(s => s.category === 'Social AI').length },
  { name: 'Creative AI', count: aiServices.filter(s => s.category === 'Creative AI').length },
  { name: 'Legal AI', count: aiServices.filter(s => s.category === 'Legal AI').length },
  { name: 'Education AI', count: aiServices.filter(s => s.category === 'Education AI').length },
  { name: 'Supply Chain AI', count: aiServices.filter(s => s.category === 'Supply Chain AI').length },
  { name: 'Health AI', count: aiServices.filter(s => s.category === 'Health AI').length },
  { name: 'Agricultural AI', count: aiServices.filter(s => s.category === 'Agricultural AI').length },
  { name: 'VR AI', count: aiServices.filter(s => s.category === 'VR AI').length },
  { name: 'Blockchain AI', count: aiServices.filter(s => s.category === 'Blockchain AI').length },
  { name: 'Gaming AI', count: aiServices.filter(s => s.category === 'Gaming AI').length },
  { name: 'Research AI', count: aiServices.filter(s => s.category === 'Research AI').length }
];

export default function AIServices() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="AI Services - Zion Tech Group"
      description="Comprehensive AI solutions including machine learning, computer vision, natural language processing, and advanced AI technologies for your business."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              AI Services
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                & Solutions
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Transform your business with cutting-edge AI technologies. From machine learning 
              to quantum computing, we provide comprehensive AI solutions tailored to your needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-lg font-semibold"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="relative max-w-md mx-auto mb-8">
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{service.popularity}%</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <ul className="space-y-1 mb-4">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">
                    {service.pricing}
                  </span>
                  <Link
                    href="/contact"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our AI experts help you choose the right solutions for your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
            >
              Get AI Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-lg font-semibold"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}