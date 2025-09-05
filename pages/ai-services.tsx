import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
import Layout from './components/Layout';
>>>>>>> cursor/website-audit-and-update-with-deployment-560a
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
  Shield,
  Gamepad2,
  Wifi,
  Laptop,
  Truck,
  GraduationCap,
  PieChart,
  ClipboardList,
  TreePine,
  Droplets,
  CreditCard
} from 'lucide-react';
<<<<<<< HEAD

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-560a

const aiServices = [
  // AI Automation & Process Intelligence
  {
<<<<<<< HEAD
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
=======
    title: 'AI-Powered Email Responder',
    description: 'Automated email responses using advanced NLP and machine learning algorithms. Reduces response time by 80% and improves customer satisfaction.',
    icon: Mail,
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-categorization', 'Smart Routing', 'Multi-language Support'],
    pricing: '$2,000 - $8,000 setup',
    category: 'Automation',
    popular: true,
    link: 'https://ziontechgroup.com/ai-services/email-responder'
  },
  {
    title: 'Predictive Analytics Platform',
    description: 'Advanced forecasting and predictive modeling for business intelligence. Increase revenue by 25% through data-driven decisions.',
    icon: BarChart3,
    features: ['Time Series Analysis', 'Machine Learning Models', 'Real-time Predictions', 'Custom Dashboards', 'ROI Tracking'],
    pricing: '$4,000 - $20,000 project',
    category: 'Analytics',
    popular: true,
    link: 'https://ziontechgroup.com/ai-services/predictive-analytics'
  },
  {
    title: 'Intelligent Chatbot System',
    description: 'AI-powered customer support with natural conversation capabilities. Handle 90% of customer inquiries automatically.',
    icon: MessageSquare,
    features: ['Natural Language Understanding', 'Context Awareness', 'Multi-language Support', 'Integration APIs', 'Learning Capabilities'],
    pricing: '$1,000 - $6,000/month',
    category: 'Customer Service',
    popular: true,
    link: 'https://ziontechgroup.com/ai-services/chatbot'
>>>>>>> cursor/website-audit-and-update-with-deployment-560a
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
    marketPrice: '$3,000-6,000/month',
    setupTime: '1-2 weeks',
    targetUsers: 'E-commerce, SaaS, Healthcare, Education'
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
    targetUsers: 'Marketing agencies, Publishers, E-commerce, Blogs'
  },

  // NEW INNOVATIVE AI SERVICES - 2024/2025
  {
    id: 7,
    title: 'AI-Powered Autonomous Business Operations',
    description: 'End-to-end business automation platform that handles complex workflows, decision-making, and operational optimization using advanced AI.',
    icon: Settings,
    category: 'Business Automation',
    price: 'Starting at $5,000/month',
    features: [
      'Autonomous workflow orchestration',
      'Intelligent decision making',
      'Process optimization & learning',
      'Multi-system integration',
      'Real-time monitoring & alerts',
      'Predictive maintenance',
      'Cost optimization algorithms',
      'Custom business logic implementation'
    ],
    benefits: [
      'Reduce operational costs by 60%',
      'Increase efficiency by 80%',
      'Eliminate manual processes',
      '24/7 autonomous operations'
    ],
    marketPrice: '$8,000-15,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Enterprise, Manufacturing, Healthcare, Finance'
  },
  {
    id: 8,
    title: 'AI-Powered Cybersecurity Intelligence',
    description: 'Advanced AI-driven cybersecurity platform with threat detection, response automation, and predictive security analytics.',
    icon: Shield,
    category: 'Cybersecurity AI',
    price: 'Starting at $3,500/month',
    features: [
      'Real-time threat detection',
      'Automated incident response',
      'Behavioral analysis & anomaly detection',
      'Predictive threat modeling',
      'Zero-day attack prevention',
      'Compliance monitoring',
      'Security orchestration',
      'Threat intelligence integration'
    ],
    benefits: [
      'Reduce security incidents by 90%',
      'Faster threat response (seconds vs hours)',
      'Proactive threat prevention',
      'Compliance automation'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Enterprise, Government, Healthcare, Finance'
  },
  {
    id: 9,
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation.',
    icon: Truck,
    category: 'Supply Chain AI',
    price: 'Starting at $2,800/month',
    features: [
      'Demand forecasting & planning',
      'Inventory optimization',
      'Supplier risk assessment',
      'Logistics route optimization',
      'Cost reduction algorithms',
      'Sustainability tracking',
      'Real-time monitoring',
      'Predictive maintenance'
    ],
    benefits: [
      'Reduce inventory costs by 40%',
      'Improve delivery times by 50%',
      'Minimize supply chain disruptions',
      'Increase sustainability metrics'
    ],
    marketPrice: '$4,500-10,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Manufacturing, Retail, Logistics, Healthcare'
  },
  {
    id: 10,
    title: 'AI-Powered Financial Risk Management',
    description: 'Advanced financial risk assessment and management platform with real-time monitoring and predictive analytics.',
    icon: CreditCard,
    category: 'FinTech AI',
    price: 'Starting at $4,200/month',
    features: [
      'Real-time risk assessment',
      'Fraud detection & prevention',
      'Credit scoring & analysis',
      'Market volatility prediction',
      'Regulatory compliance monitoring',
      'Portfolio optimization',
      'Stress testing & scenario analysis',
      'Automated reporting'
    ],
    benefits: [
      'Reduce financial losses by 70%',
      'Improve risk accuracy by 85%',
      'Automate compliance processes',
      'Real-time decision support'
    ],
    marketPrice: '$6,500-15,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Banks, Insurance, Investment firms, FinTech'
  },
  {
    id: 11,
    title: 'AI-Powered Healthcare Diagnostics',
    description: 'Advanced medical AI platform for diagnostic imaging, patient monitoring, and treatment recommendation systems.',
    icon: Heart,
    category: 'Healthcare AI',
    price: 'Starting at $6,000/month',
    features: [
      'Medical image analysis',
      'Diagnostic assistance',
      'Patient monitoring & alerts',
      'Treatment recommendation engine',
      'Drug interaction checking',
      'Clinical decision support',
      'Electronic health record integration',
      'Telemedicine capabilities'
    ],
    benefits: [
      'Improve diagnostic accuracy by 95%',
      'Reduce misdiagnosis by 80%',
      'Faster treatment decisions',
      'Better patient outcomes'
    ],
    marketPrice: '$10,000-25,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Hospitals, Clinics, Medical practices, Telemedicine'
  },
  {
    id: 12,
    title: 'AI-Powered Smart City Management',
    description: 'Comprehensive smart city platform with traffic optimization, energy management, and citizen services automation.',
    icon: Building,
    category: 'Smart City AI',
    price: 'Starting at $8,000/month',
    features: [
      'Traffic flow optimization',
      'Energy consumption management',
      'Waste management optimization',
      'Public safety monitoring',
      'Citizen service automation',
      'Environmental monitoring',
      'Infrastructure maintenance',
      'Emergency response coordination'
    ],
    benefits: [
      'Reduce traffic congestion by 60%',
      'Lower energy consumption by 40%',
      'Improve citizen satisfaction',
      'Optimize resource allocation'
    ],
    marketPrice: '$12,000-30,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Municipalities, Government agencies, Urban planners'
  },
  {
<<<<<<< HEAD
    id: 13,
    title: 'AI-Powered Autonomous Vehicles',
    description: 'Advanced AI systems for autonomous vehicle navigation, safety, and fleet management with real-time decision making.',
    icon: Car,
    category: 'Autonomous Systems',
    price: 'Starting at $15,000/month',
    features: [
      'Real-time navigation & path planning',
      'Object detection & recognition',
      'Predictive maintenance',
      'Fleet management optimization',
      'Safety monitoring & alerts',
      'Weather adaptation',
      'Traffic pattern learning',
      'Passenger experience optimization'
    ],
    benefits: [
      'Reduce accidents by 95%',
      'Optimize fuel efficiency by 30%',
      'Improve passenger safety',
      'Lower operational costs'
    ],
    marketPrice: '$25,000-50,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Transportation companies, Fleet operators, Ride-sharing'
  },
  {
    id: 14,
    title: 'AI-Powered Quantum Computing Optimization',
    description: 'Advanced AI platform for quantum computing algorithm optimization and quantum machine learning applications.',
    icon: Cpu,
    category: 'Quantum AI',
    price: 'Starting at $12,000/month',
    features: [
      'Quantum algorithm optimization',
      'Quantum machine learning',
      'Quantum error correction',
      'Quantum simulation',
      'Hybrid classical-quantum processing',
      'Quantum cryptography',
      'Quantum optimization problems',
      'Quantum neural networks'
    ],
    benefits: [
      'Exponential computational speedup',
      'Solve complex optimization problems',
      'Breakthrough in cryptography',
      'Revolutionary data processing'
    ],
    marketPrice: '$20,000-40,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Research institutions, Tech companies, Government labs'
  },
  {
    id: 15,
    title: 'AI-Powered Space Technology Platform',
    description: 'Advanced AI systems for space exploration, satellite management, and space-based data processing.',
    icon: Rocket,
    category: 'Space AI',
    price: 'Starting at $20,000/month',
    features: [
      'Satellite constellation management',
      'Space debris tracking & avoidance',
      'Earth observation data analysis',
      'Space mission planning',
      'Astronomical data processing',
      'Space weather prediction',
      'Autonomous spacecraft control',
      'Interplanetary communication'
    ],
    benefits: [
      'Optimize satellite operations',
      'Reduce space debris risks',
      'Improve space mission success',
      'Advance space exploration'
    ],
    marketPrice: '$35,000-75,000/month',
    setupTime: '12-24 weeks',
    targetUsers: 'Space agencies, Satellite companies, Aerospace'
  },
  {
    id: 16,
    title: 'AI-Powered Metaverse Platform',
    description: 'Comprehensive AI platform for metaverse development with virtual world creation, avatar intelligence, and immersive experiences.',
    icon: Globe,
    category: 'Metaverse AI',
    price: 'Starting at $5,500/month',
    features: [
      'Virtual world generation',
      'Intelligent avatar systems',
      'Real-time physics simulation',
      'Social interaction AI',
      'Virtual economy management',
      'Immersive content creation',
      'Cross-platform compatibility',
      'Blockchain integration'
    ],
    benefits: [
      'Create immersive virtual worlds',
      'Enhanced user engagement',
      'Realistic virtual interactions',
      'Scalable metaverse solutions'
    ],
    marketPrice: '$8,500-18,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Gaming companies, Virtual reality, Entertainment, Education'
  },
  {
    id: 17,
    title: 'AI-Powered Climate Change Solutions',
    description: 'Advanced AI platform for climate monitoring, carbon footprint optimization, and environmental impact assessment.',
    icon: TreePine,
    category: 'Climate AI',
    price: 'Starting at $3,800/month',
    features: [
      'Climate data analysis',
      'Carbon footprint tracking',
      'Environmental impact modeling',
      'Renewable energy optimization',
      'Emission reduction strategies',
      'Climate risk assessment',
      'Sustainability reporting',
      'Green technology recommendations'
    ],
    benefits: [
      'Reduce carbon footprint by 50%',
      'Optimize energy consumption',
      'Improve sustainability metrics',
      'Comply with environmental regulations'
    ],
    marketPrice: '$6,000-15,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Corporations, Government, Environmental organizations'
  },
  {
    id: 18,
    title: 'AI-Powered Edge Computing Intelligence',
    description: 'Intelligent edge computing platform with real-time processing, local AI inference, and distributed computing optimization.',
    icon: Wifi,
    category: 'Edge AI',
    price: 'Starting at $2,500/month',
    features: [
      'Real-time edge processing',
      'Local AI inference',
      'Distributed computing optimization',
      'Edge device management',
      'Latency optimization',
      'Bandwidth efficiency',
      'Offline AI capabilities',
      'Edge-to-cloud synchronization'
    ],
    benefits: [
      'Reduce latency by 90%',
      'Process data locally',
      'Lower bandwidth costs',
      'Enable offline AI operations'
    ],
    marketPrice: '$4,000-10,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'IoT companies, Manufacturing, Retail, Healthcare'
  },
  {
    id: 19,
    title: 'AI-Powered Digital Twin Intelligence',
    description: 'Advanced digital twin platform with real-time simulation, predictive modeling, and virtual asset management.',
    icon: Monitor,
    category: 'Digital Twin AI',
    price: 'Starting at $4,500/month',
    features: [
      'Real-time digital twin creation',
      'Predictive simulation modeling',
      'Virtual asset monitoring',
      'Performance optimization',
      'Anomaly detection',
      'What-if scenario analysis',
      'Integration with IoT sensors',
      '3D visualization & interaction'
    ],
    benefits: [
      'Optimize asset performance',
      'Predict maintenance needs',
      'Reduce operational costs',
      'Improve decision making'
    ],
    marketPrice: '$7,000-18,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Energy, Aerospace, Smart cities'
  },
  {
    id: 20,
    title: 'AI-Powered Autonomous Research Assistant',
    description: 'Intelligent research platform that autonomously conducts scientific research, data analysis, and hypothesis generation.',
    icon: BookOpen,
    category: 'Research AI',
    price: 'Starting at $3,200/month',
    features: [
      'Autonomous literature review',
      'Hypothesis generation & testing',
      'Data analysis & interpretation',
      'Research paper writing',
      'Citation & reference management',
      'Collaborative research tools',
      'Patent analysis',
      'Scientific discovery assistance'
    ],
    benefits: [
      'Accelerate research by 300%',
      'Improve research quality',
      'Automate literature reviews',
      'Generate novel insights'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Research institutions, Universities, R&D departments'
=======
    title: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain management with predictive analytics and automation. Reduce costs by 30% and improve efficiency.',
    icon: Network,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Risk Analysis', 'Real-time Tracking'],
    pricing: '$15,000 - $75,000 project',
    category: 'Logistics',
    link: 'https://ziontechgroup.com/ai-services/supply-chain'
>>>>>>> cursor/website-audit-and-update-with-deployment-560a
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
  { name: "Business Automation", count: aiServices.filter(s => s.category === "Business Automation").length },
  { name: "Cybersecurity AI", count: aiServices.filter(s => s.category === "Cybersecurity AI").length },
  { name: "Supply Chain AI", count: aiServices.filter(s => s.category === "Supply Chain AI").length },
  { name: "FinTech AI", count: aiServices.filter(s => s.category === "FinTech AI").length },
  { name: "Healthcare AI", count: aiServices.filter(s => s.category === "Healthcare AI").length },
  { name: "Smart City AI", count: aiServices.filter(s => s.category === "Smart City AI").length },
  { name: "Autonomous Systems", count: aiServices.filter(s => s.category === "Autonomous Systems").length },
  { name: "Quantum AI", count: aiServices.filter(s => s.category === "Quantum AI").length },
  { name: "Space AI", count: aiServices.filter(s => s.category === "Space AI").length },
  { name: "Metaverse AI", count: aiServices.filter(s => s.category === "Metaverse AI").length },
  { name: "Climate AI", count: aiServices.filter(s => s.category === "Climate AI").length },
  { name: "Edge AI", count: aiServices.filter(s => s.category === "Edge AI").length },
  { name: "Digital Twin AI", count: aiServices.filter(s => s.category === "Digital Twin AI").length },
  { name: "Research AI", count: aiServices.filter(s => s.category === "Research AI").length }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, computer vision, NLP, and advanced AI solutions. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, machine learning, computer vision, NLP, artificial intelligence, AI consulting, AI development" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Advanced{' '}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                AI Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to computer vision, we deliver 20+ advanced AI services 
              that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get Started
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
          </motion.div>
=======
    <Layout
      title="AI Services - Zion Tech Group"
      description="Comprehensive AI services including machine learning, computer vision, natural language processing, and predictive analytics."
      keywords="AI services, machine learning, computer vision, NLP, predictive analytics, artificial intelligence"
      canonical="https://ziontechgroup.com/ai-services"
    >
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Advanced 
              <span className="text-blue-400"> AI Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cutting-edge artificial intelligence solutions to transform your business and accelerate growth.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <Link href="/quote" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Request Quote
              </Link>
            </motion.div>
          </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-560a
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
<<<<<<< HEAD
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to solve complex business challenges and drive digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id || index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-purple-600 mb-4 group-hover:text-indigo-600 transition-colors">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-lg font-bold text-blue-600">{service.pricing}</div>
                      <div className="text-xs text-gray-500">Market: {service.marketPrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">Save up to 35%</div>
                      <div className="text-xs text-green-600">vs market price</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={service.link}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors text-sm"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 text-center py-2 px-4 rounded-lg font-semibold transition-colors text-sm"
                    >
                      Contact Us
                    </Link>
                  </div>
                </motion.div>
              );
            })}
=======
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From machine learning to computer vision, we provide comprehensive AI solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  {service.popular && (
                    <span className="ml-auto bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500">Category: {service.category}</span>
                </div>
                
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                </div>
                
                <div className="flex gap-2">
                  <Link 
                    href={service.link || '#'} 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center"
                  >
                    Learn More
                  </Link>
                  <Link 
                    href="/contact" 
                    className="flex-1 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            ))}
>>>>>>> cursor/website-audit-and-update-with-deployment-560a
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join 500+ successful businesses that trust Zion Tech Group for their AI service needs. 
              Let's build the perfect AI solution for your business.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3" />
                <span className="text-lg">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-3" />
                <span className="text-lg">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 mr-3" />
                <span className="text-lg">{contactInfo.address}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get Started
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
=======
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started with our expert AI team and discover how artificial intelligence can accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
            </Link>
            <Link href="/quote" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Request Quote
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
>>>>>>> cursor/website-audit-and-update-with-deployment-560a
  );
}
