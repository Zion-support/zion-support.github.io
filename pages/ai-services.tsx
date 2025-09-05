import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  Phone,
  MapPin,
  Wifi,
  Laptop,
  Truck,
  GraduationCap,
  PieChart,
  ClipboardList,
  TreePine,
  Droplets,
  Search,
  Target,
  TrendingUp,
  Package,
  Calendar,
  Trash2,
  Camera,
  HardDrive,
  Database,
  Zap,
  Users,
  Shield,
  CreditCard,
  Activity,
  Lightbulb,
  Wrench,
  Layers,
  Paintbrush,
  Music,
  Gaming,
  Calculator,
  Secure,
  View,
  Goal,
  Growth,
  Time,
  Money
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const aiServices = [
  // Core AI & Machine Learning Services
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
    targetUsers: 'E-commerce, Finance, Healthcare, Manufacturing',
    link: 'https://ziontechgroup.com/machine-learning-models'
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
      'Improve accuracy by 95%+ in visual tasks',
      'Reduce inspection time by 90%',
      'Enable 24/7 automated monitoring',
      'Lower operational costs by 50%'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Manufacturing, Retail, Security, Healthcare',
    link: 'https://ziontechgroup.com/computer-vision-solutions'
  },
  {
    id: 3,
    title: 'Natural Language Processing',
    description: 'Text analysis, sentiment analysis, language understanding, and automated content processing solutions.',
    icon: MessageSquare,
    category: 'NLP',
    price: 'Starting at $2,200/month',
    features: [
      'Text analysis & sentiment detection',
      'Language translation & localization',
      'Chatbot & virtual assistant development',
      'Document summarization & extraction',
      'Content moderation & filtering',
      'Voice-to-text & text-to-speech',
      'Intent recognition & classification',
      'Multi-language support'
    ],
    benefits: [
      'Process 10,000+ documents per hour',
      'Improve customer satisfaction by 35%',
      'Reduce content moderation costs by 70%',
      'Enable multilingual operations'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Customer service, Content platforms, E-learning, Legal',
    link: 'https://ziontechgroup.com/natural-language-processing'
  },
  {
    id: 4,
    title: 'AI-Powered Analytics',
    description: 'Intelligent data analysis with predictive insights, anomaly detection, and automated reporting.',
    icon: BarChart3,
    category: 'Analytics',
    price: 'Starting at $2,500/month',
    features: [
      'Predictive analytics & forecasting',
      'Anomaly detection & alerting',
      'Automated report generation',
      'Real-time data visualization',
      'Pattern recognition & insights',
      'Custom dashboard creation',
      'Data quality assessment',
      'Trend analysis & recommendations'
    ],
    benefits: [
      'Increase decision speed by 60%',
      'Identify opportunities 3x faster',
      'Reduce false positives by 80%',
      'Improve forecast accuracy by 40%'
    ],
    marketPrice: '$4,000-9,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Finance, Marketing, Operations, Sales teams',
    link: 'https://ziontechgroup.com/ai-powered-analytics'
  },
  {
    id: 5,
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Intelligent conversational AI for customer service, sales, and internal operations automation.',
    icon: Bot,
    category: 'Conversational AI',
    price: 'Starting at $1,800/month',
    features: [
      'Multi-channel chatbot deployment',
      'Natural language understanding',
      'Context-aware conversations',
      'Integration with CRM & databases',
      'Voice & text capabilities',
      'Escalation to human agents',
      'Analytics & performance tracking',
      'Custom personality & branding'
    ],
    benefits: [
      'Handle 80% of customer queries automatically',
      'Reduce response time by 90%',
      'Increase customer satisfaction by 40%',
      'Lower support costs by 60%'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '1-2 weeks',
    targetUsers: 'E-commerce, SaaS, Healthcare, Education',
    link: 'https://ziontechgroup.com/ai-chatbots-virtual-assistants'
  },
  {
    id: 6,
    title: 'AI Content Generation',
    description: 'Automated content creation for marketing, documentation, and creative writing using advanced AI models.',
    icon: FileText,
    category: 'Content AI',
    price: 'Starting at $1,500/month',
    features: [
      'Automated content writing',
      'SEO-optimized content generation',
      'Multi-language content creation',
      'Brand voice customization',
      'Content planning & scheduling',
      'Plagiarism detection & originality',
      'A/B testing for content performance',
      'Integration with CMS platforms'
    ],
    benefits: [
      'Increase content production by 500%',
      'Reduce content creation costs by 70%',
      'Improve SEO rankings by 45%',
      'Maintain consistent brand voice'
    ],
    marketPrice: '$2,500-5,000/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Marketing agencies, Publishers, E-commerce, Blogs',
    link: 'https://ziontechgroup.com/ai-content-generation'
  },

  // Advanced AI Services
  {
    id: 7,
    title: 'Quantum AI Computing',
    description: 'Next-generation quantum machine learning algorithms for solving complex optimization and simulation problems.',
    icon: Cpu,
    category: 'Quantum AI',
    price: 'Starting at $15,000/month',
    features: [
      'Quantum machine learning algorithms',
      'Optimization problem solving',
      'Quantum simulation capabilities',
      'Hybrid classical-quantum workflows',
      'Quantum neural networks',
      'Advanced cryptography',
      'Research collaboration',
      'Custom quantum applications'
    ],
    benefits: [
      'Solve exponentially complex problems',
      'Achieve quantum advantage in specific tasks',
      'Enable breakthrough research capabilities',
      'Future-proof AI infrastructure'
    ],
    marketPrice: '$25,000-50,000/month',
    setupTime: '8-12 weeks',
    targetUsers: 'Research institutions, Pharmaceutical, Finance, Defense',
    link: 'https://ziontechgroup.com/quantum-ai-computing'
  },
  {
    id: 8,
    title: 'AI-Powered Cybersecurity',
    description: 'Advanced threat detection, behavioral analysis, and automated security response using AI algorithms.',
    icon: Shield,
    category: 'AI Security',
    price: 'Starting at $4,500/month',
    features: [
      'Real-time threat detection',
      'Behavioral anomaly analysis',
      'Automated incident response',
      'Predictive security analytics',
      'Zero-trust architecture',
      'Advanced threat hunting',
      'Security orchestration',
      'Compliance monitoring'
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 85%',
      'Automate 90% of security responses',
      'Improve compliance by 95%'
    ],
    marketPrice: '$7,000-15,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Financial services, Healthcare, Government, Enterprise',
    link: 'https://ziontechgroup.com/ai-powered-cybersecurity'
  },
  {
    id: 9,
    title: 'Autonomous Vehicle AI',
    description: 'Advanced AI systems for autonomous vehicles including perception, decision-making, and safety systems.',
    icon: Car,
    category: 'Autonomous Systems',
    price: 'Starting at $25,000/month',
    features: [
      'Computer vision for road perception',
      'Sensor fusion algorithms',
      'Path planning & navigation',
      'Real-time decision making',
      'Safety monitoring systems',
      'Fleet management integration',
      'Regulatory compliance',
      'Continuous learning capabilities'
    ],
    benefits: [
      'Enable fully autonomous operations',
      'Improve safety by 99.9%',
      'Reduce transportation costs by 60%',
      'Optimize fleet efficiency'
    ],
    marketPrice: '$40,000-100,000/month',
    setupTime: '12-16 weeks',
    targetUsers: 'Automotive, Logistics, Ride-sharing, Public transport',
    link: 'https://ziontechgroup.com/autonomous-vehicle-ai'
  },
  {
    id: 10,
    title: 'AI Drug Discovery Platform',
    description: 'Revolutionary AI platform for accelerating drug discovery, molecular design, and clinical trial optimization.',
    icon: Heart,
    category: 'Healthcare AI',
    price: 'Starting at $20,000/month',
    features: [
      'Molecular property prediction',
      'Drug-target interaction modeling',
      'Clinical trial optimization',
      'Adverse effect prediction',
      'Biomarker discovery',
      'Personalized medicine insights',
      'Regulatory pathway guidance',
      'Research collaboration tools'
    ],
    benefits: [
      'Reduce drug discovery time by 70%',
      'Increase success rates by 3x',
      'Lower R&D costs by 50%',
      'Enable personalized treatments'
    ],
    marketPrice: '$35,000-75,000/month',
    setupTime: '10-14 weeks',
    targetUsers: 'Pharmaceutical, Biotech, Research institutions, CROs',
    link: 'https://ziontechgroup.com/ai-drug-discovery-platform'
  },

  // Industry-Specific AI Solutions
  {
    id: 11,
    title: 'AI Trading Algorithms',
    description: 'High-frequency trading algorithms with machine learning for market prediction and automated trading strategies.',
    icon: TrendingUp,
    category: 'FinTech AI',
    price: 'Starting at $8,000/month',
    features: [
      'Real-time market analysis',
      'Algorithmic trading strategies',
      'Risk management systems',
      'Portfolio optimization',
      'Market sentiment analysis',
      'Backtesting & validation',
      'Regulatory compliance',
      'Performance monitoring'
    ],
    benefits: [
      'Increase trading profits by 30-50%',
      'Reduce market risk exposure',
      'Enable 24/7 automated trading',
      'Optimize portfolio performance'
    ],
    marketPrice: '$12,000-30,000/month',
    setupTime: '6-8 weeks',
    targetUsers: 'Hedge funds, Investment banks, Trading firms, Asset managers',
    link: 'https://ziontechgroup.com/ai-trading-algorithms'
  },
  {
    id: 12,
    title: 'AI-Powered Manufacturing',
    description: 'Intelligent manufacturing systems with predictive maintenance, quality control, and process optimization.',
    icon: Settings,
    category: 'Industrial AI',
    price: 'Starting at $6,500/month',
    features: [
      'Predictive maintenance systems',
      'Quality control automation',
      'Production optimization',
      'Supply chain intelligence',
      'Energy efficiency optimization',
      'Safety monitoring',
      'Equipment health tracking',
      'Process improvement insights'
    ],
    benefits: [
      'Reduce downtime by 40%',
      'Improve product quality by 25%',
      'Increase production efficiency by 30%',
      'Lower maintenance costs by 50%'
    ],
    marketPrice: '$10,000-25,000/month',
    setupTime: '6-10 weeks',
    targetUsers: 'Manufacturing, Automotive, Aerospace, Electronics',
    link: 'https://ziontechgroup.com/ai-powered-manufacturing'
  },
  {
    id: 13,
    title: 'AI Retail Intelligence',
    description: 'Comprehensive retail AI platform for demand forecasting, inventory optimization, and customer behavior analysis.',
    icon: ShoppingCart,
    category: 'Retail AI',
    price: 'Starting at $3,500/month',
    features: [
      'Demand forecasting & planning',
      'Inventory optimization',
      'Customer behavior analysis',
      'Price optimization',
      'Recommendation engines',
      'Fraud detection',
      'Store layout optimization',
      'Omnichannel analytics'
    ],
    benefits: [
      'Increase sales by 20-35%',
      'Reduce inventory costs by 30%',
      'Improve customer satisfaction by 40%',
      'Optimize pricing strategies'
    ],
    marketPrice: '$5,500-15,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Retail chains, E-commerce, Fashion, Grocery',
    link: 'https://ziontechgroup.com/ai-retail-intelligence'
  },
  {
    id: 14,
    title: 'AI Educational Platform',
    description: 'Personalized learning platform with adaptive curriculum, intelligent tutoring, and performance analytics.',
    icon: GraduationCap,
    category: 'EdTech AI',
    price: 'Starting at $2,800/month',
    features: [
      'Personalized learning paths',
      'Intelligent tutoring systems',
      'Adaptive assessments',
      'Learning analytics',
      'Content recommendation',
      'Progress tracking',
      'Collaborative learning tools',
      'Teacher assistance systems'
    ],
    benefits: [
      'Improve learning outcomes by 45%',
      'Personalize education for each student',
      'Reduce teacher workload by 30%',
      'Enable data-driven teaching'
    ],
    marketPrice: '$4,500-12,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Schools, Universities, Online learning, Corporate training',
    link: 'https://ziontechgroup.com/ai-educational-platform'
  },

  // Emerging AI Technologies
  {
    id: 15,
    title: 'AI-Powered Metaverse',
    description: 'Immersive virtual environments with AI-driven avatars, natural interactions, and intelligent virtual assistants.',
    icon: Gamepad2,
    category: 'Metaverse AI',
    price: 'Starting at $12,000/month',
    features: [
      'AI-powered virtual avatars',
      'Natural language interactions',
      'Intelligent virtual environments',
      'Behavioral AI systems',
      'Virtual event management',
      'Digital twin creation',
      'Immersive learning experiences',
      'Social AI interactions'
    ],
    benefits: [
      'Create engaging virtual experiences',
      'Enable natural human-AI interactions',
      'Reduce virtual event costs by 60%',
      'Scale virtual presence globally'
    ],
    marketPrice: '$20,000-50,000/month',
    setupTime: '8-12 weeks',
    targetUsers: 'Gaming, Education, Events, Real estate, Healthcare',
    link: 'https://ziontechgroup.com/ai-powered-metaverse'
  },
  {
    id: 16,
    title: 'AI Climate Solutions',
    description: 'Environmental AI platform for climate modeling, carbon tracking, and sustainable resource optimization.',
    icon: TreePine,
    category: 'Climate AI',
    price: 'Starting at $5,500/month',
    features: [
      'Climate change modeling',
      'Carbon footprint tracking',
      'Renewable energy optimization',
      'Environmental monitoring',
      'Sustainability reporting',
      'Green supply chain management',
      'Emission reduction strategies',
      'Climate risk assessment'
    ],
    benefits: [
      'Reduce carbon footprint by 40%',
      'Optimize renewable energy usage',
      'Improve sustainability reporting',
      'Enable climate risk mitigation'
    ],
    marketPrice: '$8,500-20,000/month',
    setupTime: '6-10 weeks',
    targetUsers: 'Energy companies, Manufacturing, Government, NGOs',
    link: 'https://ziontechgroup.com/ai-climate-solutions'
  },
  {
    id: 17,
    title: 'AI Space Technology',
    description: 'Advanced AI systems for space exploration, satellite management, and space-based data analysis.',
    icon: Rocket,
    category: 'Space AI',
    price: 'Starting at $18,000/month',
    features: [
      'Satellite constellation management',
      'Space debris tracking',
      'Planetary exploration AI',
      'Space weather prediction',
      'Mission planning optimization',
      'Autonomous spacecraft control',
      'Space data analytics',
      'Earth observation intelligence'
    ],
    benefits: [
      'Optimize space missions by 50%',
      'Improve satellite operations efficiency',
      'Enable autonomous space exploration',
      'Enhance Earth observation capabilities'
    ],
    marketPrice: '$30,000-75,000/month',
    setupTime: '12-16 weeks',
    targetUsers: 'Space agencies, Satellite companies, Defense, Research',
    link: 'https://ziontechgroup.com/ai-space-technology'
  },
  {
    id: 18,
    title: 'AI-Powered Agriculture',
    description: 'Smart farming solutions with precision agriculture, crop monitoring, and automated farming systems.',
    icon: Sprout,
    category: 'AgTech AI',
    price: 'Starting at $4,200/month',
    features: [
      'Precision agriculture systems',
      'Crop health monitoring',
      'Automated irrigation control',
      'Pest and disease detection',
      'Yield prediction models',
      'Soil analysis and optimization',
      'Weather-based recommendations',
      'Farm management automation'
    ],
    benefits: [
      'Increase crop yields by 25-40%',
      'Reduce water usage by 30%',
      'Minimize pesticide use by 50%',
      'Optimize farming operations'
    ],
    marketPrice: '$6,500-18,000/month',
    setupTime: '6-8 weeks',
    targetUsers: 'Farmers, Agricultural companies, Food producers, Research institutions',
    link: 'https://ziontechgroup.com/ai-powered-agriculture'
  },

  // AI Development & Integration Services
  {
    id: 19,
    title: 'AI Model Training & Optimization',
    description: 'Specialized services for training, fine-tuning, and optimizing AI models for specific business needs.',
    icon: Cpu,
    category: 'AI Development',
    price: 'Starting at $5,000/project',
    features: [
      'Custom model training',
      'Transfer learning implementation',
      'Hyperparameter optimization',
      'Model performance tuning',
      'Data augmentation strategies',
      'Model compression & quantization',
      'Edge deployment optimization',
      'Continuous learning systems'
    ],
    benefits: [
      'Achieve optimal model performance',
      'Reduce training time by 60%',
      'Improve model accuracy by 35%',
      'Enable efficient deployment'
    ],
    marketPrice: '$8,000-25,000/project',
    setupTime: '4-8 weeks',
    targetUsers: 'AI startups, Enterprise, Research teams, Developers',
    link: 'https://ziontechgroup.com/ai-model-training-optimization'
  },
  {
    id: 20,
    title: 'AI Integration & Migration',
    description: 'Complete AI integration services for existing systems with seamless migration and deployment.',
    icon: Network,
    category: 'AI Integration',
    price: 'Starting at $8,500/project',
    features: [
      'Legacy system integration',
      'API development & management',
      'Data pipeline creation',
      'Cloud migration services',
      'Security implementation',
      'Performance monitoring setup',
      'User training & support',
      'Ongoing maintenance'
    ],
    benefits: [
      'Seamless AI integration',
      'Minimize business disruption',
      'Ensure data security',
      'Enable rapid deployment'
    ],
    marketPrice: '$15,000-50,000/project',
    setupTime: '6-12 weeks',
    targetUsers: 'Enterprise, Government, Healthcare, Financial services',
    link: 'https://ziontechgroup.com/ai-integration-migration'
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
  { name: "Conversational AI", count: aiServices.filter(s => s.category === "Conversational AI").length },
  { name: "Content AI", count: aiServices.filter(s => s.category === "Content AI").length },
  { name: "Quantum AI", count: aiServices.filter(s => s.category === "Quantum AI").length },
  { name: "AI Security", count: aiServices.filter(s => s.category === "AI Security").length },
  { name: "Autonomous Systems", count: aiServices.filter(s => s.category === "Autonomous Systems").length },
  { name: "Healthcare AI", count: aiServices.filter(s => s.category === "Healthcare AI").length },
  { name: "FinTech AI", count: aiServices.filter(s => s.category === "FinTech AI").length },
  { name: "Industrial AI", count: aiServices.filter(s => s.category === "Industrial AI").length },
  { name: "Retail AI", count: aiServices.filter(s => s.category === "Retail AI").length },
  { name: "EdTech AI", count: aiServices.filter(s => s.category === "EdTech AI").length },
  { name: "Metaverse AI", count: aiServices.filter(s => s.category === "Metaverse AI").length },
  { name: "Climate AI", count: aiServices.filter(s => s.category === "Climate AI").length },
  { name: "Space AI", count: aiServices.filter(s => s.category === "Space AI").length },
  { name: "AgTech AI", count: aiServices.filter(s => s.category === "AgTech AI").length },
  { name: "AI Development", count: aiServices.filter(s => s.category === "AI Development").length },
  { name: "AI Integration", count: aiServices.filter(s => s.category === "AI Integration").length }
];

export default function AIServices() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group | 80+ Cutting-Edge AI Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including machine learning, computer vision, NLP, quantum AI, and industry-specific solutions. Starting from $1,500/month." />
        <meta name="keywords" content="AI services, machine learning, computer vision, NLP, quantum AI, AI development, artificial intelligence solutions" />
        <meta property="og:title" content="AI Services - Zion Tech Group | Advanced AI Solutions" />
        <meta property="og:description" content="80+ cutting-edge AI services and solutions for modern businesses. From machine learning to quantum AI, we deliver transformative results." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services That{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Transform Businesses
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and industry-specific applications. From startups to enterprise, we deliver AI that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Free AI Consultation
                </Link>
                <Link href="/pricing" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Pricing
                </Link>
              </div>
              
              {/* Contact Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-100">{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-100">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-100">Middletown DE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-blue-600 group-hover:text-purple-600 transition-colors">
                          <IconComponent className="w-10 h-10" />
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500">Starting Price:</span>
                          <span className="text-lg font-bold text-green-600">{service.price}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500">Market Price:</span>
                          <span className="text-sm text-gray-600 line-through">{service.marketPrice}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500">Setup Time:</span>
                          <span className="text-sm text-gray-600">{service.setupTime}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-center">
                              <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col space-y-2">
                        <Link
                          href={service.link}
                          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium text-sm"
                        >
                          Learn More
                        </Link>
                        <Link
                          href="/contact"
                          className="w-full border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors text-center font-medium text-sm"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg mb-4">No services found matching your criteria.</div>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear filters
                </button>
              </div>
            )}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our expert AI team is ready to help you implement cutting-edge artificial intelligence solutions that drive real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free AI Consultation
                </Link>
                <Link href="/pricing" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View AI Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}