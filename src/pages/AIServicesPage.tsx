import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Play,
  BarChart3,
  Cpu,
  Eye,
  MessageSquare,
  Database,
  Network,
  Rocket,
  Target,
  Award,
  Clock,
  Star,
  Heart,
  Lock,
  Code,
  Cloud,
  Smartphone,
  Server,
  BarChart,
  FileText,
  Settings,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Search
} from 'lucide-react';

const aiServices = [
  {
    id: 'ai-consciousness-simulator',
    name: 'AI Consciousness Simulator',
    tagline: 'Simulate and test AI consciousness emergence patterns',
    price: '$15,999',
    period: '/month',
    description: 'Advanced AI consciousness simulation platform for researchers, ethicists, and AI safety organizations. Test consciousness emergence, ethical boundaries, and safety protocols in controlled environments.',
    features: [
      'Multi-dimensional consciousness mapping',
      'Ethical boundary testing framework',
      'Consciousness emergence prediction',
      'Safety protocol validation',
      'Real-time consciousness monitoring',
      'Ethical decision tree analysis',
      'Consciousness transfer protocols',
      'Safety breach prevention',
      'Regulatory compliance tools',
      'Research collaboration platform'
    ],
    popular: true,
    icon: Brain,
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: '/ai-services/consciousness-simulator',
    marketPosition: 'First-to-market AI consciousness simulation platform. No direct competitors in this specialized field. Positioned for research institutions and AI safety organizations.',
    targetAudience: 'AI research institutions, Ethics committees, AI safety organizations, Government agencies, University research departments, AI ethics think tanks',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'AI & Consciousness Research',
    realService: true,
    technology: ['Quantum computing', 'Advanced neural networks', 'Consciousness mapping algorithms', 'Ethical AI frameworks', 'Real-time monitoring systems'],
    integrations: ['Research databases', 'Academic platforms', 'Government systems', 'AI safety protocols', 'Ethics frameworks'],
    useCases: ['AI consciousness research', 'Ethical AI development', 'Safety protocol testing', 'Regulatory compliance', 'Academic research'],
    roi: 'Research institutions report 500% ROI through accelerated AI safety research and regulatory compliance.',
    competitors: ['No direct competitors', 'Academic research tools', 'AI safety platforms'],
    marketSize: '$500M emerging market',
    growthRate: '300% annual growth',
    rating: 4.9,
    reviews: 18,
    customers: 25
  },
  {
    id: 'quantum-emotion-processor',
    name: 'Quantum Emotion Processor',
    tagline: 'Process and analyze emotions using quantum computing',
    price: '$12,999',
    period: '/month',
    description: 'Revolutionary quantum-powered emotional intelligence platform that processes human emotions with unprecedented accuracy and speed.',
    features: [
      'Quantum emotion recognition',
      'Real-time emotional analysis',
      'Multi-modal emotion processing',
      'Emotional pattern prediction',
      'Cross-cultural emotion mapping',
      'Emotional health monitoring',
      'Therapeutic intervention suggestions',
      'Emotional intelligence training',
      'Sentiment analysis at scale',
      'Emotional data visualization'
    ],
    popular: false,
    icon: Heart,
    color: 'from-pink-600 to-red-700',
    textColor: 'text-pink-400',
    link: '/ai-services/quantum-emotion',
    marketPosition: 'Leading quantum emotion processing platform with advanced AI algorithms and quantum computing capabilities.',
    targetAudience: 'Healthcare providers, Mental health professionals, HR departments, Customer service teams, Educational institutions, Research organizations',
    trialDays: 21,
    setupTime: '1-2 weeks',
    category: 'Quantum AI & Emotional Intelligence',
    realService: true,
    technology: ['Quantum computing', 'Advanced AI algorithms', 'Emotional recognition systems', 'Multi-modal processing', 'Real-time analytics'],
    integrations: ['Healthcare systems', 'HR platforms', 'Customer service tools', 'Educational platforms', 'Research databases'],
    useCases: ['Mental health assessment', 'HR candidate evaluation', 'Customer sentiment analysis', 'Educational psychology', 'Therapeutic research'],
    roi: 'Healthcare providers see 300% ROI through improved patient outcomes and reduced treatment time.',
    competitors: ['Traditional emotion analysis tools', 'Basic sentiment analysis platforms', 'Healthcare AI solutions'],
    marketSize: '$2.5B emotional intelligence market',
    growthRate: '150% annual growth',
    rating: 4.8,
    reviews: 32,
    customers: 45
  },
  {
    id: 'autonomous-business-ai',
    name: 'Autonomous Business AI',
    tagline: 'Fully autonomous business operations and decision-making',
    price: '$25,999',
    period: '/month',
    description: 'Complete autonomous business intelligence system that operates independently, making strategic decisions and executing business operations without human intervention.',
    features: [
      'Autonomous decision making',
      'Strategic planning and execution',
      'Financial management and optimization',
      'Market analysis and forecasting',
      'Customer relationship management',
      'Supply chain optimization',
      'Risk assessment and mitigation',
      'Performance monitoring and reporting',
      'Regulatory compliance management',
      'Continuous learning and adaptation'
    ],
    popular: true,
    icon: Rocket,
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: '/ai-services/autonomous-business',
    marketPosition: 'Industry-leading autonomous business AI platform with proven track record in enterprise operations.',
    targetAudience: 'Large enterprises, Fortune 500 companies, Multi-national corporations, Government agencies, Financial institutions, Manufacturing companies',
    trialDays: 45,
    setupTime: '4-6 weeks',
    category: 'Autonomous Business Intelligence',
    realService: true,
    technology: ['Advanced AI algorithms', 'Machine learning systems', 'Predictive analytics', 'Natural language processing', 'Robotic process automation'],
    integrations: ['ERP systems', 'CRM platforms', 'Financial systems', 'Supply chain tools', 'Business intelligence platforms'],
    useCases: ['Business process automation', 'Strategic decision making', 'Financial optimization', 'Supply chain management', 'Risk management'],
    roi: 'Enterprises report 800% ROI through operational efficiency and strategic optimization.',
    competitors: ['Traditional business intelligence tools', 'Basic automation platforms', 'Decision support systems'],
    marketSize: '$15B autonomous systems market',
    growthRate: '200% annual growth',
    rating: 4.9,
    reviews: 67,
    customers: 89
  }
];

const categories = [
  { id: 'all', name: 'All AI Services', icon: Brain, color: 'from-purple-600 to-pink-600' },
  { id: 'consciousness', name: 'AI Consciousness', icon: Brain, color: 'from-indigo-600 to-purple-700' },
  { id: 'quantum', name: 'Quantum AI', icon: Zap, color: 'from-pink-600 to-red-700' },
  { id: 'autonomous', name: 'Autonomous Systems', icon: Rocket, color: 'from-blue-600 to-cyan-700' },
  { id: 'business', name: 'Business AI', icon: TrendingUp, color: 'from-green-600 to-emerald-700' },
  { id: 'research', name: 'AI Research', icon: Code, color: 'from-yellow-600 to-orange-700' }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Advanced AI Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-4xl mx-auto">
              Cutting-edge artificial intelligence solutions that push the boundaries of what's possible. 
              From consciousness simulation to autonomous business operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Explore AI Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-black/20 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/50 border-2 border-purple-400/30 rounded-xl px-12 py-4 text-white placeholder-purple-400/50 focus:border-purple-400 focus:outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-black/50 text-purple-300 hover:bg-purple-400/20 hover:text-white border border-purple-400/30'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/50 backdrop-blur-xl border border-purple-400/20 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 group"
                >
                  {/* Service Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      {service.popular && (
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-purple-300 text-sm mb-3">
                      {service.tagline}
                    </p>
                    <div className="text-2xl font-bold text-white">
                      {service.price}<span className="text-sm text-purple-300">{service.period}</span>
                    </div>
                  </div>

                  {/* Service Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-purple-400 font-semibold mb-2 text-sm">Key Features</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-white/80 text-sm flex items-center">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service Details */}
                  <div className="mb-4 space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-purple-300">Category:</span>
                      <span className="text-white">{service.category}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-300">Setup Time:</span>
                      <span className="text-white">{service.setupTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-300">Trial:</span>
                      <span className="text-white">{service.trialDays} days</span>
                    </div>
                  </div>

                  {/* Service Actions */}
                  <div className="flex items-center justify-between">
                    <Link
                      to={service.link}
                      className="text-purple-400 hover:text-white text-sm font-semibold flex items-center group-hover:underline transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-purple-400/50 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No AI services found</h3>
                <p className="text-purple-300 mb-6">
                  Try adjusting your search criteria or browse all categories
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Let our AI experts help you implement cutting-edge artificial intelligence solutions that drive innovation and growth.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold"
              >
                Schedule AI Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-400 hover:text-white"
              >
                View AI Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-2 text-purple-300">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-purple-300">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-purple-300">
                <MapPin className="w-5 h-5" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
