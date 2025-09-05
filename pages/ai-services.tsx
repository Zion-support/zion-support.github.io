import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import { 
  Brain, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Star, 
  DollarSign, 
  Award, 
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
  Server, 
  Network, 
  Car, 
  Rocket, 
  Heart, 
  Building, 
  Sprout, 
  Mail, 
  Search, 
  Target, 
  TrendingUp, 
  Package, 
  Calendar, 
  BookOpen, 
  ShoppingCart, 
  Home, 
  Trash2, 
  Camera, 
  HardDrive,
  Database,
  Phone,
  MapPin,
  Zap,
  Users,
  Shield
} from 'lucide-react';

const aiServices = [
  {
    id: 1,
    title: 'Machine Learning Models',
    description: 'Custom ML models for predictive analytics, automation, and intelligent decision-making across various industries.',
    icon: Brain,
    category: 'Machine Learning',
    price: 'Starting at $3,500/month',
    features: [
      'Custom model development & training',
      'Data preprocessing & feature engineering',
      'Model deployment & monitoring',
      'A/B testing & performance optimization',
      'Real-time prediction APIs',
      'Model versioning & management',
      'Automated retraining pipelines',
      'Integration with existing systems'
    ],
    benefits: [
      'Increase prediction accuracy by 40-60%',
      'Automate decision-making processes',
      'Reduce manual analysis time by 80%',
      'Improve business outcomes by 25-35%'
    ],
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
    features: [
      'Object detection & recognition',
      'Image classification & tagging',
      'Facial recognition & analysis',
      'Video analytics & monitoring',
      'OCR & document processing',
      'Quality control automation',
      'Real-time processing capabilities',
      'Custom model fine-tuning'
    ],
    benefits: [
      'Improve accuracy by 95%',
      'Reduce inspection time by 80%',
      'Enable 24/7 automated monitoring',
      'Lower operational costs by 60%'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Manufacturing, Security, Retail, Healthcare'
  },
  {
    id: 3,
    title: 'Quantum AI Processing',
    description: 'Revolutionary quantum-enhanced AI algorithms for solving complex optimization problems and advanced machine learning.',
    icon: Cpu,
    category: 'Quantum AI',
    price: 'Starting at $8,500/month',
    features: [
      'Quantum machine learning algorithms',
      'Quantum optimization solutions',
      'Quantum neural networks',
      'Hybrid classical-quantum models',
      'Quantum data processing',
      'Advanced cryptography',
      'Quantum simulation',
      'Real-time quantum computing'
    ],
    benefits: [
      'Solve previously intractable problems',
      'Exponential speedup for specific tasks',
      'Breakthrough optimization results',
      'Future-proof AI architecture'
    ],
    marketPrice: '$12,000-25,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Research, Finance, Pharmaceuticals, Defense'
  },
  {
    id: 4,
    title: 'Autonomous AI Agents',
    description: 'Self-managing AI agents that can perform complex tasks, make decisions, and adapt to changing environments autonomously.',
    icon: Bot,
    category: 'Autonomous Systems',
    price: 'Starting at $4,200/month',
    features: [
      'Self-learning AI agents',
      'Multi-agent coordination',
      'Autonomous decision making',
      'Environment adaptation',
      'Task planning & execution',
      'Human-AI collaboration',
      'Continuous learning',
      'Risk assessment & mitigation'
    ],
    benefits: [
      'Reduce human intervention by 90%',
      'Improve task completion by 75%',
      'Enable 24/7 autonomous operations',
      'Scale operations without limits'
    ],
    marketPrice: '$6,000-12,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Logistics, Customer Service, Finance'
  },
  {
    id: 5,
    title: 'Neural Interface AI',
    description: 'Brain-computer interface AI that enables direct neural control and communication with machines and systems.',
    icon: Brain,
    category: 'Neural Interfaces',
    price: 'Starting at $6,500/month',
    features: [
      'EEG signal interpretation',
      'Neural pattern recognition',
      'Thought-to-action translation',
      'Accessibility applications',
      'Medical monitoring',
      'Gaming interfaces',
      'Prosthetic control',
      'Cognitive enhancement'
    ],
    benefits: [
      'Enable accessibility solutions',
      'Revolutionize human-machine interaction',
      'Advance medical treatments',
      'Create new interaction paradigms'
    ],
    marketPrice: '$8,000-15,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Healthcare, Gaming, Accessibility, Research'
  },
  {
    id: 6,
    title: 'AI-Powered Drug Discovery',
    description: 'Advanced AI platform for accelerating drug discovery, molecular design, and pharmaceutical research.',
    icon: Heart,
    category: 'Pharmaceutical AI',
    price: 'Starting at $12,000/month',
    features: [
      'Molecular design AI',
      'Drug-target interaction prediction',
      'Clinical trial optimization',
      'Side effect prediction',
      'Drug repurposing analysis',
      'Biomarker discovery',
      'Personalized medicine',
      'Regulatory compliance'
    ],
    benefits: [
      'Reduce drug discovery time by 70%',
      'Lower development costs by 50%',
      'Improve success rates by 40%',
      'Enable personalized treatments'
    ],
    marketPrice: '$15,000-30,000/month',
    setupTime: '12-24 weeks',
    targetUsers: 'Pharmaceuticals, Biotech, Research, Healthcare'
  },
  {
    id: 7,
    title: 'AI Climate Modeling',
    description: 'Advanced AI systems for climate prediction, environmental monitoring, and sustainability optimization.',
    icon: Globe,
    category: 'Environmental AI',
    price: 'Starting at $5,500/month',
    features: [
      'Climate pattern prediction',
      'Environmental impact analysis',
      'Carbon footprint optimization',
      'Renewable energy forecasting',
      'Ecosystem monitoring',
      'Disaster prediction',
      'Sustainability planning',
      'Policy impact modeling'
    ],
    benefits: [
      'Improve climate predictions by 60%',
      'Optimize sustainability efforts',
      'Reduce environmental impact',
      'Enable data-driven policy making'
    ],
    marketPrice: '$7,000-14,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Government, Environmental, Energy, Agriculture'
  },
  {
    id: 8,
    title: 'AI-Powered Space Exploration',
    description: 'Advanced AI systems for space mission planning, satellite operations, and extraterrestrial research.',
    icon: Rocket,
    category: 'Space AI',
    price: 'Starting at $15,000/month',
    features: [
      'Mission planning optimization',
      'Satellite constellation management',
      'Space debris tracking',
      'Planetary exploration AI',
      'Communication optimization',
      'Resource utilization',
      'Risk assessment',
      'Autonomous navigation'
    ],
    benefits: [
      'Improve mission success rates',
      'Optimize space operations',
      'Enable autonomous space systems',
      'Advance space exploration'
    ],
    marketPrice: '$20,000-40,000/month',
    setupTime: '12-24 weeks',
    targetUsers: 'Space Agencies, Aerospace, Research, Defense'
  },
  {
    id: 9,
    title: 'AI-Powered Financial Trading',
    description: 'Advanced AI trading systems with real-time market analysis, risk management, and automated trading strategies.',
    icon: DollarSign,
    category: 'FinTech AI',
    price: 'Starting at $7,500/month',
    features: [
      'Real-time market analysis',
      'Algorithmic trading strategies',
      'Risk management systems',
      'Portfolio optimization',
      'Fraud detection',
      'Regulatory compliance',
      'High-frequency trading',
      'Sentiment analysis'
    ],
    benefits: [
      'Increase trading profits by 35%',
      'Reduce risk exposure by 50%',
      'Enable 24/7 trading',
      'Improve decision speed'
    ],
    marketPrice: '$10,000-20,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Banks, Hedge Funds, Trading Firms, FinTech'
  },
  {
    id: 10,
    title: 'AI-Powered Creative Studio',
    description: 'Comprehensive AI platform for content creation, design, music, and multimedia production.',
    icon: Camera,
    category: 'Creative AI',
    price: 'Starting at $2,200/month',
    features: [
      'AI content generation',
      'Image & video editing',
      'Music composition',
      '3D modeling & animation',
      'Copywriting & storytelling',
      'Brand design',
      'Social media content',
      'Multimedia production'
    ],
    benefits: [
      'Reduce content creation time by 80%',
      'Lower production costs by 60%',
      'Enable unlimited creativity',
      'Scale content production'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Marketing, Media, Entertainment, Design'
  },
  {
    id: 11,
    title: 'AI-Powered Cybersecurity',
    description: 'Advanced AI security systems with threat detection, automated response, and predictive security analytics.',
    icon: Shield,
    category: 'Security AI',
    price: 'Starting at $4,800/month',
    features: [
      'Threat detection & prevention',
      'Automated incident response',
      'Behavioral analysis',
      'Vulnerability assessment',
      'Security orchestration',
      'Compliance monitoring',
      'Zero-trust architecture',
      'Predictive security'
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 85%',
      'Automate 90% of security tasks',
      'Prevent 99.9% of attacks'
    ],
    marketPrice: '$6,500-13,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Enterprises, Government, Healthcare, Finance'
  },
  {
    id: 12,
    title: 'AI-Powered Personal Assistant',
    description: 'Advanced personal AI assistant with natural language processing, task automation, and intelligent scheduling.',
    icon: Users,
    category: 'Personal AI',
    price: 'Starting at $199/month',
    features: [
      'Natural language understanding',
      'Task automation',
      'Intelligent scheduling',
      'Email management',
      'Research assistance',
      'Voice interaction',
      'Learning & adaptation',
      'Multi-platform integration'
    ],
    benefits: [
      'Increase productivity by 50%',
      'Save 15+ hours per week',
      'Improve task organization',
      'Enable hands-free operation'
    ],
    marketPrice: '$300-600/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Professionals, Executives, Entrepreneurs, Students'
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "Quantum AI", count: aiServices.filter(s => s.category === "Quantum AI").length },
  { name: "Autonomous Systems", count: aiServices.filter(s => s.category === "Autonomous Systems").length },
  { name: "Neural Interfaces", count: aiServices.filter(s => s.category === "Neural Interfaces").length },
  { name: "Pharmaceutical AI", count: aiServices.filter(s => s.category === "Pharmaceutical AI").length },
  { name: "Environmental AI", count: aiServices.filter(s => s.category === "Environmental AI").length },
  { name: "Space AI", count: aiServices.filter(s => s.category === "Space AI").length },
  { name: "FinTech AI", count: aiServices.filter(s => s.category === "FinTech AI").length },
  { name: "Creative AI", count: aiServices.filter(s => s.category === "Creative AI").length },
  { name: "Security AI", count: aiServices.filter(s => s.category === "Security AI").length },
  { name: "Personal AI", count: aiServices.filter(s => s.category === "Personal AI").length }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="AI Services - Zion Tech Group"
      description="Cutting-edge AI services including machine learning, computer vision, NLP, and AI consulting. Transform your business with intelligent automation and data-driven insights."
      keywords="AI services, machine learning, computer vision, NLP, artificial intelligence, AI consulting, automation, predictive analytics"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Advanced AI Services
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Cutting-edge artificial intelligence solutions powered by machine learning, computer vision, 
                and natural language processing. Transform your business with intelligent automation.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get Free AI Consultation
                </Link>
                <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Call +1 302 464 0950
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid md:grid-cols-4 gap-8 mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">80+</div>
                  <div className="text-gray-300">AI Solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">95%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">24/7</div>
                  <div className="text-gray-300">AI Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">300+</div>
                  <div className="text-gray-300">AI Models Deployed</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-purple-600 text-white'
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                          <service.icon className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">
                            {service.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 5).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 5 && (
                          <li className="text-sm text-purple-600 font-medium">
                            +{service.features.length - 5} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Proven Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-purple-600">
                            <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing and Info */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-2xl font-bold text-purple-600">{service.price}</div>
                          <div className="text-sm text-gray-500">vs market: {service.marketPrice}</div>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div>Setup: {service.setupTime}</div>
                          <div>Target: {service.targetUsers}</div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Link 
                          href="/contact" 
                          className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center transition-colors"
                        >
                          Get Started
                        </Link>
                        <Link 
                          href={`/contact?service=${encodeURIComponent(service.title)}`} 
                          className="flex-1 bg-transparent border border-purple-600 text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-lg text-sm font-semibold text-center transition-colors"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Harness the Power of AI?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get started with our AI services and discover how artificial intelligence can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free AI Consultation
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}