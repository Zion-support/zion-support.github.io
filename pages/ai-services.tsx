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
  Phone, MapPin, Zap, Users, Shield, Wifi, Laptop, Truck, 
  GraduationCap, PieChart, ClipboardList, TreePine, Droplets, 
  Gamepad2, FileSearch, Layers, Activity, Workflow, Sparkles
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const aiServices = [
  // Core AI Services
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
      'Improve accuracy by 95%+ in visual tasks',
      'Reduce inspection time by 90%',
      'Enable 24/7 automated monitoring',
      'Lower operational costs by 50%'
    ],
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
    targetUsers: 'Customer service, Content platforms, E-learning, Legal'
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
    targetUsers: 'Finance, Marketing, Operations, Sales teams'
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
    marketPrice: '$2,500-6,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Customer service, E-commerce, Healthcare, Education'
  },
  {
    id: 6,
    title: 'AI Document Processing',
    description: 'Intelligent document analysis, extraction, and processing for automated workflows.',
    icon: FileText,
    category: 'Document AI',
    price: 'Starting at $2,000/month',
    features: [
      'Document classification & routing',
      'Data extraction & validation',
      'OCR with 99%+ accuracy',
      'Contract analysis & review',
      'Invoice processing automation',
      'Compliance checking',
      'Multi-format support (PDF, Word, Excel)',
      'Workflow integration'
    ],
    benefits: [
      'Process documents 10x faster',
      'Reduce manual errors by 95%',
      'Improve compliance accuracy by 90%',
      'Lower processing costs by 70%'
    ],
    marketPrice: '$3,000-7,500/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Legal, Finance, Insurance, Government'
  },
  {
    id: 7,
    title: 'AI Video Analytics',
    description: 'Advanced video analysis for security, marketing, and operational insights.',
    icon: Video,
    category: 'Video AI',
    price: 'Starting at $3,200/month',
    features: [
      'Real-time video analysis',
      'Object & person tracking',
      'Behavioral analysis',
      'Facial recognition & identification',
      'Crowd monitoring & counting',
      'Anomaly detection',
      'Video search & retrieval',
      'Custom alert systems'
    ],
    benefits: [
      'Improve security response time by 85%',
      'Reduce false alarms by 90%',
      'Enable 24/7 automated monitoring',
      'Generate actionable insights from video data'
    ],
    marketPrice: '$4,500-10,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Security, Retail, Transportation, Smart cities'
  },
  {
    id: 8,
    title: 'AI Voice Processing',
    description: 'Advanced voice recognition, synthesis, and analysis for various applications.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $2,400/month',
    features: [
      'Speech-to-text with 99% accuracy',
      'Text-to-speech synthesis',
      'Voice biometrics & authentication',
      'Emotion detection in voice',
      'Multi-language voice support',
      'Voice command processing',
      'Call center automation',
      'Voice analytics & insights'
    ],
    benefits: [
      'Improve accessibility by 100%',
      'Reduce call center costs by 50%',
      'Enable hands-free operations',
      'Enhance user experience significantly'
    ],
    marketPrice: '$3,500-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Healthcare, Customer service, Accessibility, IoT'
  },
  {
    id: 9,
    title: 'AI Code Generation',
    description: 'Intelligent code generation, review, and optimization for faster development.',
    icon: Code,
    category: 'Code AI',
    price: 'Starting at $2,600/month',
    features: [
      'Automated code generation',
      'Code review & optimization',
      'Bug detection & fixing',
      'Test case generation',
      'Documentation automation',
      'Code refactoring suggestions',
      'Security vulnerability detection',
      'Performance optimization'
    ],
    benefits: [
      'Increase development speed by 60%',
      'Reduce bugs by 70%',
      'Improve code quality by 50%',
      'Lower maintenance costs by 40%'
    ],
    marketPrice: '$4,000-9,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Software development, IT teams, Startups, Enterprises'
  },
  {
    id: 10,
    title: 'AI Recommendation Systems',
    description: 'Personalized recommendation engines for e-commerce, content, and services.',
    icon: Target,
    category: 'Recommendation AI',
    price: 'Starting at $2,100/month',
    features: [
      'Personalized product recommendations',
      'Content recommendation engines',
      'Collaborative filtering',
      'Real-time recommendation updates',
      'A/B testing for recommendations',
      'Cross-platform recommendations',
      'Behavioral analysis',
      'Performance analytics'
    ],
    benefits: [
      'Increase conversion rates by 35%',
      'Improve user engagement by 50%',
      'Boost average order value by 25%',
      'Reduce churn by 30%'
    ],
    marketPrice: '$3,000-7,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'E-commerce, Streaming, Social media, News platforms'
  },
  {
    id: 11,
    title: 'AI Fraud Detection',
    description: 'Advanced fraud detection and prevention using machine learning algorithms.',
    icon: Shield,
    category: 'Security AI',
    price: 'Starting at $3,800/month',
    features: [
      'Real-time fraud detection',
      'Transaction pattern analysis',
      'Identity verification',
      'Risk scoring algorithms',
      'Anomaly detection',
      'Behavioral analysis',
      'Multi-channel monitoring',
      'Automated response systems'
    ],
    benefits: [
      'Reduce fraud losses by 85%',
      'Decrease false positives by 70%',
      'Improve detection speed by 90%',
      'Lower investigation costs by 60%'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Banking, E-commerce, Insurance, Payment processors'
  },
  {
    id: 12,
    title: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain management with predictive analytics and optimization.',
    icon: Truck,
    category: 'Supply Chain AI',
    price: 'Starting at $4,200/month',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Supplier risk assessment',
      'Quality prediction',
      'Cost optimization',
      'Real-time tracking',
      'Predictive maintenance'
    ],
    benefits: [
      'Reduce inventory costs by 30%',
      'Improve delivery times by 40%',
      'Minimize stockouts by 80%',
      'Optimize supplier relationships'
    ],
    marketPrice: '$6,000-15,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Manufacturing, Retail, Logistics, Distribution'
  },
  {
    id: 13,
    title: 'AI Healthcare Diagnostics',
    description: 'Medical image analysis, diagnostic assistance, and healthcare AI solutions.',
    icon: Heart,
    category: 'Healthcare AI',
    price: 'Starting at $5,500/month',
    features: [
      'Medical image analysis',
      'Diagnostic assistance',
      'Drug discovery support',
      'Patient risk assessment',
      'Treatment recommendation',
      'Clinical trial optimization',
      'Electronic health record analysis',
      'Telemedicine support'
    ],
    benefits: [
      'Improve diagnostic accuracy by 25%',
      'Reduce diagnosis time by 60%',
      'Lower healthcare costs by 35%',
      'Enable early disease detection'
    ],
    marketPrice: '$8,000-20,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Hospitals, Clinics, Medical research, Pharmaceutical'
  },
  {
    id: 14,
    title: 'AI Marketing Automation',
    description: 'Intelligent marketing campaigns, customer segmentation, and personalized outreach.',
    icon: TrendingUp,
    category: 'Marketing AI',
    price: 'Starting at $2,300/month',
    features: [
      'Customer segmentation',
      'Campaign optimization',
      'Content personalization',
      'Email marketing automation',
      'Social media analysis',
      'Lead scoring',
      'ROI prediction',
      'Cross-channel attribution'
    ],
    benefits: [
      'Increase campaign ROI by 45%',
      'Improve conversion rates by 30%',
      'Reduce customer acquisition costs by 40%',
      'Enhance customer lifetime value by 25%'
    ],
    marketPrice: '$3,500-8,500/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Marketing agencies, E-commerce, SaaS, Retail'
  },
  {
    id: 15,
    title: 'AI Financial Analysis',
    description: 'Automated financial analysis, risk assessment, and investment insights.',
    icon: DollarSign,
    category: 'Finance AI',
    price: 'Starting at $3,600/month',
    features: [
      'Automated financial reporting',
      'Risk assessment & modeling',
      'Investment analysis',
      'Credit scoring',
      'Market trend analysis',
      'Portfolio optimization',
      'Regulatory compliance',
      'Real-time monitoring'
    ],
    benefits: [
      'Improve analysis accuracy by 50%',
      'Reduce analysis time by 75%',
      'Lower risk exposure by 40%',
      'Increase investment returns by 20%'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Banks, Investment firms, Insurance, Fintech'
  },
  {
    id: 16,
    title: 'AI IoT Analytics',
    description: 'Intelligent analysis of IoT data for predictive maintenance and optimization.',
    icon: Wifi,
    category: 'IoT AI',
    price: 'Starting at $2,700/month',
    features: [
      'IoT data processing',
      'Predictive maintenance',
      'Device optimization',
      'Energy consumption analysis',
      'Anomaly detection',
      'Real-time monitoring',
      'Automated alerts',
      'Performance optimization'
    ],
    benefits: [
      'Reduce maintenance costs by 50%',
      'Prevent equipment failures by 80%',
      'Optimize energy usage by 35%',
      'Improve operational efficiency by 45%'
    ],
    marketPrice: '$4,000-9,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Manufacturing, Smart cities, Energy, Agriculture'
  },
  {
    id: 17,
    title: 'AI Content Generation',
    description: 'Automated content creation for marketing, documentation, and communication.',
    icon: FileText,
    category: 'Content AI',
    price: 'Starting at $1,900/month',
    features: [
      'Automated content writing',
      'SEO optimization',
      'Multi-language content',
      'Content personalization',
      'Social media posts',
      'Email campaigns',
      'Product descriptions',
      'Blog & article generation'
    ],
    benefits: [
      'Increase content production by 300%',
      'Reduce content costs by 60%',
      'Improve SEO performance by 40%',
      'Maintain consistent brand voice'
    ],
    marketPrice: '$2,800-6,500/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Marketing, E-commerce, Media, Education'
  },
  {
    id: 18,
    title: 'AI Quality Assurance',
    description: 'Automated testing, quality control, and assurance using AI technologies.',
    icon: CheckCircle,
    category: 'QA AI',
    price: 'Starting at $2,400/month',
    features: [
      'Automated test generation',
      'Visual regression testing',
      'Performance testing',
      'Security vulnerability scanning',
      'Code quality analysis',
      'User experience testing',
      'Cross-browser testing',
      'Mobile app testing'
    ],
    benefits: [
      'Reduce testing time by 70%',
      'Improve test coverage by 90%',
      'Lower bug detection costs by 60%',
      'Increase release confidence by 85%'
    ],
    marketPrice: '$3,500-8,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Software development, QA teams, DevOps, Enterprises'
  },
  {
    id: 19,
    title: 'AI Data Mining',
    description: 'Intelligent data extraction, analysis, and insights from large datasets.',
    icon: Database,
    category: 'Data AI',
    price: 'Starting at $2,800/month',
    features: [
      'Automated data extraction',
      'Pattern recognition',
      'Data cleaning & validation',
      'Insight generation',
      'Trend analysis',
      'Data visualization',
      'Real-time processing',
      'Custom analytics'
    ],
    benefits: [
      'Process data 100x faster',
      'Discover hidden patterns',
      'Improve data quality by 80%',
      'Generate actionable insights'
    ],
    marketPrice: '$4,000-9,500/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Research, Analytics, Business intelligence, Data science'
  },
  {
    id: 20,
    title: 'AI Gaming Intelligence',
    description: 'AI-powered game development, player behavior analysis, and intelligent gameplay.',
    icon: Gamepad2,
    category: 'Gaming AI',
    price: 'Starting at $3,100/month',
    features: [
      'NPC behavior programming',
      'Player behavior analysis',
      'Dynamic difficulty adjustment',
      'Procedural content generation',
      'Cheat detection',
      'Matchmaking optimization',
      'Game balancing',
      'Player retention analysis'
    ],
    benefits: [
      'Improve player engagement by 50%',
      'Reduce development time by 40%',
      'Increase player retention by 35%',
      'Optimize game balance automatically'
    ],
    marketPrice: '$4,500-10,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Game studios, Mobile gaming, Indie developers, Gaming platforms'
  },
  // Additional AI Services
  {
    id: 21,
    title: 'AI Search & Discovery',
    description: 'Intelligent search engines with semantic understanding and personalized results.',
    icon: FileSearch,
    category: 'Search AI',
    price: 'Starting at $2,200/month',
    features: [
      'Semantic search capabilities',
      'Personalized search results',
      'Voice search integration',
      'Image & video search',
      'Auto-complete & suggestions',
      'Search analytics',
      'Multi-language search',
      'Custom ranking algorithms'
    ],
    benefits: [
      'Improve search relevance by 60%',
      'Increase user engagement by 45%',
      'Reduce search time by 70%',
      'Boost conversion rates by 30%'
    ],
    marketPrice: '$3,200-7,500/month',
    setupTime: '2-4 weeks',
    targetUsers: 'E-commerce, Content platforms, Enterprise search, Libraries'
  },
  {
    id: 22,
    title: 'AI Workflow Automation',
    description: 'Intelligent business process automation with AI-powered decision making.',
    icon: Workflow,
    category: 'Automation AI',
    price: 'Starting at $2,500/month',
    features: [
      'Process discovery & mapping',
      'Intelligent task routing',
      'Exception handling',
      'Process optimization',
      'Integration orchestration',
      'Performance monitoring',
      'Compliance tracking',
      'Custom workflow creation'
    ],
    benefits: [
      'Reduce process time by 80%',
      'Eliminate manual errors by 95%',
      'Improve compliance by 90%',
      'Lower operational costs by 60%'
    ],
    marketPrice: '$3,800-9,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Enterprise, Finance, Healthcare, Manufacturing'
  },
  {
    id: 23,
    title: 'AI Edge Computing',
    description: 'AI processing at the edge for real-time, low-latency applications.',
    icon: Layers,
    category: 'Edge AI',
    price: 'Starting at $3,500/month',
    features: [
      'Edge model deployment',
      'Real-time processing',
      'Low-latency inference',
      'Offline capabilities',
      'Bandwidth optimization',
      'Edge device management',
      'Data synchronization',
      'Security at edge'
    ],
    benefits: [
      'Reduce latency by 90%',
      'Lower bandwidth costs by 70%',
      'Enable offline operations',
      'Improve data privacy'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'IoT, Manufacturing, Autonomous vehicles, Smart cities'
  },
  {
    id: 24,
    title: 'AI Performance Monitoring',
    description: 'Intelligent monitoring and optimization of AI systems and applications.',
    icon: Activity,
    category: 'Monitoring AI',
    price: 'Starting at $2,000/month',
    features: [
      'Model performance tracking',
      'Drift detection',
      'Automated retraining',
      'Resource optimization',
      'Alert management',
      'Performance analytics',
      'Cost monitoring',
      'Predictive scaling'
    ],
    benefits: [
      'Maintain model accuracy by 95%',
      'Reduce downtime by 85%',
      'Optimize costs by 40%',
      'Improve system reliability'
    ],
    marketPrice: '$3,000-7,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'AI teams, DevOps, Cloud providers, Enterprises'
  },
  {
    id: 25,
    title: 'AI Innovation Lab',
    description: 'Research and development services for cutting-edge AI solutions and prototypes.',
    icon: Sparkles,
    category: 'R&D AI',
    price: 'Starting at $8,000/month',
    features: [
      'AI research & development',
      'Proof of concept development',
      'Technology evaluation',
      'Custom algorithm design',
      'Prototype development',
      'Technology transfer',
      'Patent support',
      'Innovation consulting'
    ],
    benefits: [
      'Access to latest AI technologies',
      'Reduce R&D costs by 50%',
      'Accelerate innovation by 3x',
      'Gain competitive advantage'
    ],
    marketPrice: '$12,000-25,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Research institutions, Enterprises, Startups, Government'
  }
];

const categories = [
  'All Services',
  'Machine Learning',
  'Computer Vision',
  'NLP',
  'Analytics',
  'Conversational AI',
  'Document AI',
  'Video AI',
  'Voice AI',
  'Code AI',
  'Recommendation AI',
  'Security AI',
  'Supply Chain AI',
  'Healthcare AI',
  'Marketing AI',
  'Finance AI',
  'IoT AI',
  'Content AI',
  'QA AI',
  'Data AI',
  'Gaming AI',
  'Search AI',
  'Automation AI',
  'Edge AI',
  'Monitoring AI',
  'R&D AI'
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All Services');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group | 80+ Cutting-Edge AI Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including machine learning, computer vision, NLP, analytics, and more. Starting at $1,800/month." />
        <meta name="keywords" content="AI services, machine learning, computer vision, NLP, AI analytics, AI chatbots, AI automation, AI consulting" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="80+ cutting-edge AI solutions for modern businesses. Machine learning, computer vision, NLP, and more." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Zion Tech Group</span>
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
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto">
                25+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, 
                quantum AI, and advanced analytics to transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 text-white/80">
                  <Phone className="w-5 h-5" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Mail className="w-5 h-5" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <MapPin className="w-5 h-5" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search AI services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                <div className="lg:w-80">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-slate-800 text-white">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">Price</span>
                      <span className="text-green-400 font-semibold">{service.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">Market Price</span>
                      <span className="text-white/80 text-sm">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">Setup Time</span>
                      <span className="text-white/80 text-sm">{service.setupTime}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-white/70">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-white/70">
                          <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Target Users:</h4>
                    <p className="text-sm text-white/70">{service.targetUsers}</p>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center group">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Contact us today to discuss your AI needs and get a customized solution that fits your business requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="bg-white text-purple-600 py-4 px-8 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="bg-white/20 text-white py-4 px-8 rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">Zion Tech Group</span>
                </div>
                <p className="text-white/70 mb-4">
                  Leading provider of AI, IT, and Micro SaaS solutions for modern businesses.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-white/70">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">AI Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/ai-services" className="text-white/70 hover:text-white transition-colors">Machine Learning</Link></li>
                  <li><Link href="/ai-services" className="text-white/70 hover:text-white transition-colors">Computer Vision</Link></li>
                  <li><Link href="/ai-services" className="text-white/70 hover:text-white transition-colors">Natural Language Processing</Link></li>
                  <li><Link href="/ai-services" className="text-white/70 hover:text-white transition-colors">AI Analytics</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">IT Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/it-services" className="text-white/70 hover:text-white transition-colors">Cloud Solutions</Link></li>
                  <li><Link href="/it-services" className="text-white/70 hover:text-white transition-colors">Cybersecurity</Link></li>
                  <li><Link href="/it-services" className="text-white/70 hover:text-white transition-colors">DevOps</Link></li>
                  <li><Link href="/it-services" className="text-white/70 hover:text-white transition-colors">Infrastructure</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Micro SaaS</h3>
                <ul className="space-y-2">
                  <li><Link href="/micro-saas" className="text-white/70 hover:text-white transition-colors">Business Tools</Link></li>
                  <li><Link href="/micro-saas" className="text-white/70 hover:text-white transition-colors">Productivity Apps</Link></li>
                  <li><Link href="/micro-saas" className="text-white/70 hover:text-white transition-colors">Analytics Platforms</Link></li>
                  <li><Link href="/micro-saas" className="text-white/70 hover:text-white transition-colors">Automation Tools</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-8 pt-8 text-center">
              <p className="text-white/70">
                © 2024 Zion Tech Group. All rights reserved. | 
                <Link href="/privacy" className="hover:text-white transition-colors ml-2">Privacy Policy</Link> | 
                <Link href="/terms" className="hover:text-white transition-colors ml-2">Terms of Service</Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}