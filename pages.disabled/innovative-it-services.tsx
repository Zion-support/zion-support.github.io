import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  Image,
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
  Gamepad2,
  Package,
  Truck,
  Factory,
  Banknote,
  Calendar,
  MapPin,
  Phone,
  Headphones,
  Wrench,
  Cog,
  Layers,
  GitBranch,
  Terminal,
  Plus,
  Minus,
  DollarSign,
  CreditCard,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Battery,
  BatteryLow,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero
} from 'lucide-react';

const innovativeServices = [
  {
    title: 'AI-Powered Business Intelligence Platform',
    description: 'Advanced analytics platform that transforms raw data into actionable business insights using machine learning and predictive modeling.',
    icon: Brain,
    features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Automated Reporting'],
    pricing: '$5,000 - $25,000/month',
    category: 'AI Analytics',
    popular: true,
    benefits: ['40% faster decision making', 'Reduced manual reporting by 80%', 'ROI tracking and optimization']
  },
  {
    title: 'Quantum-Ready Cybersecurity Suite',
    description: 'Next-generation security solutions designed to protect against quantum computing threats and advanced persistent threats.',
    icon: Shield,
    features: ['Quantum Encryption', 'Zero-Trust Architecture', 'AI Threat Detection', 'Compliance Automation'],
    pricing: '$8,000 - $40,000/project',
    category: 'Cybersecurity',
    popular: true,
    benefits: ['Future-proof security', '99.9% threat detection accuracy', 'Automated compliance reporting']
  },
  {
    title: 'Autonomous Cloud Infrastructure Manager',
    description: 'Self-healing cloud infrastructure that automatically optimizes resources, scales based on demand, and prevents downtime.',
    icon: Cloud,
    features: ['Auto-scaling', 'Predictive Maintenance', 'Cost Optimization', 'Disaster Recovery'],
    pricing: '$3,000 - $15,000/month',
    category: 'Cloud Computing',
    popular: true,
    benefits: ['99.99% uptime guarantee', '30% cost reduction', 'Zero-touch management']
  },
  {
    title: 'Intelligent Document Processing System',
    description: 'AI-powered document processing that extracts, analyzes, and processes information from any document format automatically.',
    icon: FileText,
    features: ['OCR & NLP', 'Data Extraction', 'Workflow Automation', 'Integration APIs'],
    pricing: '$2,500 - $12,000/month',
    category: 'Document AI',
    benefits: ['95% accuracy rate', '90% time savings', 'Multi-language support']
  },
  {
    title: 'Blockchain Supply Chain Tracker',
    description: 'Transparent, immutable supply chain tracking using blockchain technology for complete visibility and traceability.',
    icon: Package,
    features: ['Blockchain Integration', 'Real-time Tracking', 'Smart Contracts', 'Compliance Monitoring'],
    pricing: '$10,000 - $50,000/project',
    category: 'Blockchain',
    benefits: ['Complete transparency', 'Reduced fraud by 99%', 'Automated compliance']
  },
  {
    title: 'AR/VR Business Training Platform',
    description: 'Immersive training solutions using augmented and virtual reality for employee development and skill enhancement.',
    icon: Gamepad2,
    features: ['VR Simulations', 'AR Overlays', 'Progress Tracking', 'Multi-user Support'],
    pricing: '$15,000 - $75,000/project',
    category: 'Immersive Tech',
    benefits: ['50% faster learning', 'Higher retention rates', 'Reduced training costs']
  },
  {
    title: 'IoT Edge Computing Network',
    description: 'Distributed computing network that processes data at the edge for real-time decision making and reduced latency.',
    icon: Network,
    features: ['Edge Processing', 'Real-time Analytics', 'Device Management', 'Data Synchronization'],
    pricing: '$5,000 - $30,000/project',
    category: 'IoT',
    benefits: ['Sub-second response times', 'Reduced bandwidth usage', 'Offline capability']
  },
  {
    title: 'AI-Powered Customer Experience Engine',
    description: 'Comprehensive customer experience platform that personalizes interactions and predicts customer needs.',
    icon: Heart,
    features: ['Personalization Engine', 'Sentiment Analysis', 'Predictive Support', 'Omnichannel Integration'],
    pricing: '$4,000 - $20,000/month',
    category: 'Customer Experience',
    popular: true,
    benefits: ['35% increase in satisfaction', '25% higher conversion rates', 'Automated customer insights']
  },
  {
    title: 'Digital Twin Manufacturing System',
    description: 'Virtual replicas of physical manufacturing processes for optimization, simulation, and predictive maintenance.',
    icon: Factory,
    features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analytics', 'Performance Optimization'],
    pricing: '$20,000 - $100,000/project',
    category: 'Manufacturing',
    benefits: ['20% efficiency improvement', 'Reduced downtime by 60%', 'Optimized resource usage']
  },
  {
    title: 'AI-Driven Financial Risk Management',
    description: 'Advanced risk assessment and management system using machine learning to predict and mitigate financial risks.',
    icon: Banknote,
    features: ['Risk Modeling', 'Fraud Detection', 'Compliance Monitoring', 'Automated Alerts'],
    pricing: '$6,000 - $35,000/month',
    category: 'FinTech',
    popular: true,
    benefits: ['99.5% fraud detection accuracy', 'Real-time risk assessment', 'Regulatory compliance']
  },
  {
    title: 'Smart City Infrastructure Platform',
    description: 'Comprehensive platform for managing smart city infrastructure including traffic, utilities, and public services.',
    icon: Building,
    features: ['Traffic Management', 'Utility Monitoring', 'Citizen Services', 'Data Analytics'],
    pricing: '$50,000 - $250,000/project',
    category: 'Smart Cities',
    benefits: ['30% traffic reduction', '20% energy savings', 'Improved citizen satisfaction']
  },
  {
    title: 'AI-Powered Healthcare Analytics',
    description: 'Advanced healthcare data analytics platform for patient care optimization and medical research insights.',
    icon: Heart,
    features: ['Patient Analytics', 'Drug Discovery', 'Treatment Optimization', 'Research Tools'],
    pricing: '$12,000 - $60,000/month',
    category: 'HealthTech',
    benefits: ['Improved patient outcomes', 'Reduced treatment costs', 'Faster drug development']
  }
];

const categories = [
  'All Services',
  'AI Analytics',
  'Cybersecurity',
  'Cloud Computing',
  'Document AI',
  'Blockchain',
  'Immersive Tech',
  'IoT',
  'Customer Experience',
  'Manufacturing',
  'FinTech',
  'Smart Cities',
  'HealthTech'
];

const InnovativeITServices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All Services');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = innovativeServices.filter(service => {
    const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Innovative IT Services | Zion Tech Group - Cutting-Edge Technology Solutions</title>
        <meta name="description" content="Discover our innovative IT services including AI analytics, quantum cybersecurity, autonomous cloud management, and more. Transform your business with cutting-edge technology solutions. Call +1 302 464 0950." />
        <meta name="keywords" content="innovative IT services, AI analytics, quantum cybersecurity, autonomous cloud, blockchain, IoT, smart cities, Delaware technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Innovative IT Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                for the Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Cutting-edge technology solutions that transform businesses and drive innovation. 
              From AI-powered analytics to quantum-ready security, we deliver the future today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Started Today
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search innovative services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    {service.popular && (
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {service.benefits && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-green-600">
                            <TrendingUp className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {service.pricing}
                    </div>
                    <div className="text-sm text-gray-500">
                      Contact us for custom pricing
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link href="/contact" className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                      Get Quote
                    </Link>
                    <Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center">
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our innovative IT services are designed to give you a competitive edge. 
            Let's discuss how we can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
              Schedule Consultation
            </Link>
            <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-600">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeITServices;