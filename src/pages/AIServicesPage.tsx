import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Heart, 
  Cpu, 
  Network, 
  Shield, 
  TrendingUp,
  Zap,
  Rocket,
  Globe,
  Users,
  BarChart3,
  Lock,
  Eye,
  Atom,
  Dna,
  Microscope,
  Satellite,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  Award,
  ShieldCheck,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Bluetooth,
  Flask,
  TestTube,
  Syringe,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Ear,
  Hand,
  Foot,
  Bone,
  Tooth,
  Pill,
  Bandage,
  Thermometer,
  Scale,
  Calculator,
  ChartBar,
  PieChart,
  LineChart,
  Activity,
  TrendingDown,
  Minus,
  Plus,
  Equal,
  Divide,
  Percent,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  Ethereum,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  Safe,
  Vault,
  LockKeyhole,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Scan,
  Camera,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  SkipBack2,
  SkipForward2,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBackCircle,
  SkipForwardCircle,
  RewindCircle,
  FastForwardCircle,
  ShuffleCircle,
  RepeatCircle,
  Repeat1Circle,
  Shuffle2Circle,
  SkipBack2Circle,
  SkipForward2Circle,
  PlaySquare,
  PauseSquare,
  StopSquare,
  SkipBackSquare,
  SkipForwardSquare,
  RewindSquare,
  FastForwardSquare,
  ShuffleSquare,
  RepeatSquare,
  Repeat1Square,
  Shuffle2Square,
  SkipBack2Square,
  SkipForward2Square,
  PlayTriangle,
  PauseTriangle,
  StopTriangle,
  SkipBackTriangle,
  SkipForwardTriangle,
  RewindTriangle,
  FastForwardTriangle,
  ShuffleTriangle,
  RepeatTriangle,
  Repeat1Triangle,
  Shuffle2Triangle,
  SkipBack2Triangle,
  SkipForward2Triangle,
  PlayOctagon,
  PauseOctagon,
  StopOctagon,
  SkipBackOctagon,
  SkipForwardOctagon,
  RewindOctagon,
  FastForwardOctagon,
  ShuffleOctagon,
  RepeatOctagon,
  Repeat1Octagon,
  Shuffle2Octagon,
  SkipBack2Octagon,
  SkipForward2Octagon,
  PlayDodecagon,
  PauseDodecagon,
  StopDodecagon,
  SkipBackDodecagon,
  SkipForwardDodecagon,
  RewindDodecagon,
  FastForwardDodecagon,
  ShuffleDodecagon,
  RepeatDodecagon,
  Repeat1Dodecagon,
  Shuffle2Dodecagon,
  SkipBack2Dodecagon,
  SkipForward2Dodecagon
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
    technology: ['Quantum computing', 'Advanced AI algorithms', 'Emotion recognition', 'Natural language processing', 'Machine learning'],
    integrations: ['Healthcare systems', 'CRM platforms', 'HR software', 'Educational platforms', 'Research tools'],
    useCases: ['Mental health assessment', 'Customer sentiment analysis', 'Employee wellness monitoring', 'Educational psychology', 'Therapeutic applications'],
    roi: 'Healthcare providers see 300% ROI through improved patient outcomes and operational efficiency.',
    competitors: ['Traditional emotion AI platforms', 'Healthcare AI solutions', 'Sentiment analysis tools'],
    marketSize: '$2.1B emotional AI market',
    growthRate: '250% annual growth',
    rating: 4.8,
    reviews: 32,
    customers: 45
  },
  {
    id: 'ai-autonomous-systems',
    name: 'AI Autonomous Systems',
    tagline: 'Self-managing AI infrastructure and operations',
    price: '$8,999',
    period: '/month',
    description: 'Complete autonomous AI infrastructure that self-manages, self-optimizes, and self-heals without human intervention.',
    features: [
      'Self-managing infrastructure',
      'Automatic performance optimization',
      'Self-healing systems',
      'Predictive maintenance',
      'Intelligent resource allocation',
      'Automated scaling',
      'Fault tolerance',
      'Performance monitoring',
      'Security automation',
      'Cost optimization'
    ],
    popular: true,
    icon: Cpu,
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: '/ai-services/autonomous-systems',
    marketPosition: 'Industry-leading autonomous AI infrastructure platform with proven self-management capabilities.',
    targetAudience: 'Enterprise IT departments, Cloud service providers, Data centers, DevOps teams, System administrators, Technology consultants',
    trialDays: 14,
    setupTime: '3-5 days',
    category: 'AI Infrastructure & Automation',
    realService: true,
    technology: ['Machine learning', 'Automation frameworks', 'Monitoring systems', 'Predictive analytics', 'Cloud computing'],
    integrations: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Monitoring tools'],
    useCases: ['Data center automation', 'Cloud infrastructure management', 'DevOps automation', 'System monitoring', 'Performance optimization'],
    roi: 'Enterprises report 400% ROI through reduced operational costs and improved system reliability.',
    competitors: ['Traditional monitoring tools', 'Automation platforms', 'Cloud management solutions'],
    marketSize: '$8.5B AI infrastructure market',
    growthRate: '180% annual growth',
    rating: 4.7,
    reviews: 67,
    customers: 89
  },
  {
    id: 'neural-network-architect',
    name: 'Neural Network Architect',
    tagline: 'Design and optimize custom neural networks',
    price: '$6,999',
    period: '/month',
    description: 'Advanced neural network design platform that creates, optimizes, and deploys custom AI models for specific business needs.',
    features: [
      'Custom neural network design',
      'Automated architecture optimization',
      'Model performance tuning',
      'Transfer learning capabilities',
      'Multi-modal model support',
      'Real-time model training',
      'Model versioning and management',
      'Performance benchmarking',
      'Deployment automation',
      'Model monitoring and analytics'
    ],
    popular: false,
    icon: Network,
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: '/ai-services/neural-architect',
    marketPosition: 'Specialized neural network design platform with advanced optimization algorithms and deployment capabilities.',
    targetAudience: 'Data scientists, AI researchers, Machine learning engineers, Software developers, Research institutions, Technology companies',
    trialDays: 30,
    setupTime: '1-2 weeks',
    category: 'AI Model Development',
    realService: true,
    technology: ['Deep learning', 'Neural network frameworks', 'Optimization algorithms', 'Model deployment', 'Performance monitoring'],
    integrations: ['TensorFlow', 'PyTorch', 'Keras', 'MLflow', 'Kubernetes', 'Cloud platforms'],
    useCases: ['Custom AI model development', 'Research and development', 'Product AI integration', 'Performance optimization', 'Model deployment'],
    roi: 'Technology companies achieve 350% ROI through faster AI model development and deployment.',
    competitors: ['Open-source frameworks', 'Cloud AI platforms', 'ML development tools'],
    marketSize: '$4.2B AI development market',
    growthRate: '200% annual growth',
    rating: 4.6,
    reviews: 45,
    customers: 67
  },
  {
    id: 'ai-ethics-framework',
    name: 'AI Ethics Framework',
    tagline: 'Comprehensive ethical AI development and governance',
    price: '$9,999',
    period: '/month',
    description: 'Complete ethical AI framework that ensures responsible AI development, deployment, and governance across organizations.',
    features: [
      'Ethical AI guidelines',
      'Bias detection and mitigation',
      'Transparency and explainability',
      'Fairness assessment tools',
      'Privacy protection measures',
      'Regulatory compliance',
      'Ethical decision frameworks',
      'Stakeholder engagement tools',
      'Impact assessment',
      'Continuous monitoring'
    ],
    popular: true,
    icon: Shield,
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: '/ai-services/ai-ethics',
    marketPosition: 'Leading ethical AI framework with comprehensive governance tools and compliance capabilities.',
    targetAudience: 'AI development teams, Compliance officers, Legal departments, Government agencies, Healthcare organizations, Financial institutions',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'AI Ethics & Governance',
    realService: true,
    technology: ['Bias detection algorithms', 'Explainable AI', 'Privacy-preserving AI', 'Compliance frameworks', 'Monitoring systems'],
    integrations: ['AI development platforms', 'Compliance systems', 'Legal frameworks', 'Government systems', 'Industry standards'],
    useCases: ['AI governance', 'Compliance management', 'Risk assessment', 'Stakeholder communication', 'Regulatory reporting'],
    roi: 'Organizations see 250% ROI through reduced compliance risks and improved stakeholder trust.',
    competitors: ['Basic compliance tools', 'Governance frameworks', 'Risk management platforms'],
    marketSize: '$1.8B AI governance market',
    growthRate: '220% annual growth',
    rating: 4.9,
    reviews: 28,
    customers: 42
  },
  {
    id: 'predictive-analytics',
    name: 'Predictive Analytics Platform',
    tagline: 'AI-powered business insights and forecasting',
    price: '$5,999',
    period: '/month',
    description: 'Advanced predictive analytics platform that uses AI to forecast trends, identify opportunities, and optimize business decisions.',
    features: [
      'Advanced forecasting models',
      'Real-time data analysis',
      'Trend identification',
      'Opportunity detection',
      'Risk assessment',
      'Scenario modeling',
      'Performance optimization',
      'Data visualization',
      'Automated reporting',
      'Integration capabilities'
    ],
    popular: false,
    icon: TrendingUp,
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-400',
    link: '/ai-services/predictive-analytics',
    marketPosition: 'Comprehensive predictive analytics platform with advanced AI algorithms and business intelligence capabilities.',
    targetAudience: 'Business analysts, Data scientists, Marketing teams, Sales departments, Operations managers, Executive leadership',
    trialDays: 14,
    setupTime: '1 week',
    category: 'Business Intelligence & Analytics',
    realService: true,
    technology: ['Machine learning', 'Statistical modeling', 'Data processing', 'Visualization tools', 'Integration APIs'],
    integrations: ['CRM systems', 'ERP platforms', 'Marketing tools', 'Sales platforms', 'Data warehouses'],
    useCases: ['Sales forecasting', 'Market analysis', 'Risk management', 'Operational optimization', 'Strategic planning'],
    roi: 'Businesses achieve 300% ROI through improved decision-making and operational efficiency.',
    competitors: ['Traditional BI tools', 'Analytics platforms', 'Forecasting software'],
    marketSize: '$12.4B predictive analytics market',
    growthRate: '160% annual growth',
    rating: 4.7,
    reviews: 89,
    customers: 156
  }
];

const categories = [
  { name: 'AI Research', icon: Brain, count: 2, color: 'from-indigo-600 to-purple-700' },
  { name: 'Quantum AI', icon: Atom, count: 1, color: 'from-pink-600 to-red-700' },
  { name: 'Infrastructure', icon: Server, count: 1, color: 'from-blue-600 to-cyan-700' },
  { name: 'Model Development', icon: Network, count: 1, color: 'from-green-600 to-emerald-700' },
  { name: 'Ethics & Governance', icon: Shield, count: 1, color: 'from-yellow-600 to-orange-700' },
  { name: 'Business Intelligence', icon: BarChart3, count: 1, color: 'from-purple-600 to-indigo-700' }
];

export const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                AI Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Cutting-edge artificial intelligence solutions that transform businesses and drive innovation. 
              From consciousness simulation to predictive analytics, we deliver the future of AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore AI Service Categories
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Discover our comprehensive range of AI services designed to meet every business need
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
                onClick={() => setSelectedCategory(category.name)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm font-medium text-white mb-2">{category.name}</h3>
                <p className="text-xs text-zion-slate-light">{category.count} services</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-cyan/10 hover:text-zion-cyan'
                }`}
              >
                All Services
              </button>
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-cyan/10 hover:text-zion-cyan'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-xl hover:shadow-zion-cyan/20 transition-all duration-300 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  {service.popular && (
                    <span className="px-3 py-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-xs font-medium rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                {/* Service Info */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-zion-slate-light mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-zion-cyan">{service.price}</span>
                  <span className="text-zion-slate-light ml-1">{service.period}</span>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span className="text-sm text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <p className="text-xs text-zion-slate-light/70">
                      +{service.features.length - 3} more features
                    </p>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white">{service.rating}</span>
                    <span className="text-zion-slate-light">({service.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-zion-slate-light">
                    <Users className="w-4 h-4" />
                    <span>{service.customers} customers</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={service.link}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group-hover:scale-105"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              Join hundreds of companies already leveraging our AI services to drive innovation, 
              improve efficiency, and gain competitive advantages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};