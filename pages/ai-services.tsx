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
  Edit
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
    marketPrice: '$3,500-7,500/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Customer Service, Content, Legal, Healthcare'
  },
  {
    id: 4,
    title: 'AI-Powered Chatbots & Virtual Assistants',
    description: 'Intelligent conversational AI solutions for customer service, sales, and internal operations.',
    icon: Bot,
    category: 'Conversational AI',
    price: 'Starting at $1,800/month',
    features: [
      'Natural language understanding',
      'Multi-channel deployment',
      'Integration with CRM systems',
      'Voice & text capabilities',
      'Learning & adaptation',
      'Analytics & insights',
      'Custom training',
      '24/7 availability'
    ],
    benefits: [
      'Reduce support costs by 60%',
      'Improve response time by 90%',
      'Handle 80% of inquiries automatically',
      'Increase customer satisfaction by 40%'
    ],
    marketPrice: '$2,500-6,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Customer Service, Sales, HR, Healthcare'
  },
  {
    id: 5,
    title: 'Predictive Analytics & Forecasting',
    description: 'Advanced predictive models for demand forecasting, risk assessment, and business intelligence.',
    icon: BarChart3,
    category: 'Predictive Analytics',
    price: 'Starting at $2,500/month',
    features: [
      'Demand forecasting',
      'Risk prediction models',
      'Customer behavior analysis',
      'Market trend analysis',
      'Anomaly detection',
      'Scenario planning',
      'Real-time predictions',
      'Custom model development'
    ],
    benefits: [
      'Improve forecast accuracy by 85%',
      'Reduce inventory costs by 30%',
      'Identify risks 6 months ahead',
      'Increase revenue by 25%'
    ],
    marketPrice: '$3,500-8,500/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Retail, Finance, Manufacturing, Supply Chain'
  },
  {
    id: 6,
    title: 'AI-Powered Recommendation Systems',
    description: 'Personalized recommendation engines for e-commerce, content, and service platforms.',
    icon: Target,
    category: 'Recommendation Systems',
    price: 'Starting at $2,200/month',
    features: [
      'Personalized recommendations',
      'Real-time content filtering',
      'Cross-platform integration',
      'A/B testing capabilities',
      'Performance analytics',
      'Machine learning optimization',
      'Scalable architecture',
      'Custom algorithms'
    ],
    benefits: [
      'Increase conversion rates by 35%',
      'Boost average order value by 20%',
      'Improve user engagement by 50%',
      'Reduce churn by 25%'
    ],
    marketPrice: '$3,000-7,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'E-commerce, Media, SaaS, Education'
  },
  {
    id: 7,
    title: 'AI-Powered Document Processing',
    description: 'Intelligent document analysis, extraction, and processing for various business documents.',
    icon: FileText,
    category: 'Document AI',
    price: 'Starting at $1,900/month',
    features: [
      'OCR & text extraction',
      'Document classification',
      'Data extraction & validation',
      'Form processing',
      'Contract analysis',
      'Invoice processing',
      'Compliance checking',
      'Multi-format support'
    ],
    benefits: [
      'Process documents 10x faster',
      'Reduce errors by 95%',
      'Save 20+ hours per week',
      'Improve accuracy by 90%'
    ],
    marketPrice: '$2,800-6,500/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Legal, Finance, Healthcare, Insurance'
  },
  {
    id: 8,
    title: 'AI-Powered Fraud Detection',
    description: 'Advanced fraud detection and prevention systems using machine learning and behavioral analysis.',
    icon: Shield,
    category: 'Security AI',
    price: 'Starting at $3,000/month',
    features: [
      'Real-time fraud detection',
      'Behavioral analysis',
      'Pattern recognition',
      'Risk scoring',
      'Anomaly detection',
      'Transaction monitoring',
      'Machine learning models',
      'Custom rule engine'
    ],
    benefits: [
      'Detect 99.5% of fraudulent transactions',
      'Reduce false positives by 80%',
      'Save millions in fraud losses',
      'Improve customer trust'
    ],
    marketPrice: '$4,500-10,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Banking, E-commerce, Insurance, Fintech'
  },
  {
    id: 9,
    title: 'AI-Powered Content Generation',
    description: 'Automated content creation for marketing, documentation, and creative writing.',
    icon: Edit,
    category: 'Content AI',
    price: 'Starting at $1,600/month',
    features: [
      'Blog post generation',
      'Social media content',
      'Product descriptions',
      'Email marketing content',
      'Technical documentation',
      'Creative writing',
      'Content optimization',
      'Multi-language support'
    ],
    benefits: [
      'Generate content 50x faster',
      'Reduce content costs by 70%',
      'Improve SEO performance by 40%',
      'Maintain consistent brand voice'
    ],
    marketPrice: '$2,200-5,500/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Marketing, E-commerce, Media, SaaS'
  },
  {
    id: 10,
    title: 'AI-Powered Voice Recognition & Processing',
    description: 'Advanced voice recognition, speech-to-text, and voice command systems.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $2,000/month',
    features: [
      'Speech-to-text conversion',
      'Voice command recognition',
      'Speaker identification',
      'Voice biometrics',
      'Real-time processing',
      'Multi-language support',
      'Noise cancellation',
      'Custom voice models'
    ],
    benefits: [
      'Achieve 98%+ accuracy',
      'Process speech in real-time',
      'Support 50+ languages',
      'Reduce transcription costs by 80%'
    ],
    marketPrice: '$2,800-6,500/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Healthcare, Legal, Customer Service, Accessibility'
  },
  {
    id: 11,
    title: 'AI-Powered Image & Video Analysis',
    description: 'Advanced image and video processing for content moderation, analysis, and enhancement.',
    icon: Camera,
    category: 'Media AI',
    price: 'Starting at $2,300/month',
    features: [
      'Content moderation',
      'Object detection & tracking',
      'Facial recognition',
      'Scene analysis',
      'Video summarization',
      'Quality enhancement',
      'Real-time processing',
      'Custom model training'
    ],
    benefits: [
      'Moderate content 24/7',
      'Process 1000+ images per minute',
      'Reduce manual review by 90%',
      'Improve content quality'
    ],
    marketPrice: '$3,200-7,500/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Social Media, E-commerce, Security, Media'
  },
  {
    id: 12,
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with demand forecasting and logistics optimization.',
    icon: Truck,
    category: 'Supply Chain AI',
    price: 'Starting at $3,500/month',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Supplier risk assessment',
      'Quality prediction',
      'Cost optimization',
      'Real-time monitoring',
      'Predictive maintenance'
    ],
    benefits: [
      'Reduce inventory costs by 25%',
      'Improve delivery times by 40%',
      'Minimize supply disruptions',
      'Increase efficiency by 35%'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Manufacturing, Retail, Logistics, Healthcare'
  },
  {
    id: 13,
    title: 'AI-Powered Healthcare Diagnostics',
    description: 'Medical image analysis, diagnostic assistance, and patient monitoring systems.',
    icon: Heart,
    category: 'Healthcare AI',
    price: 'Starting at $4,000/month',
    features: [
      'Medical image analysis',
      'Diagnostic assistance',
      'Patient monitoring',
      'Drug discovery support',
      'Treatment recommendations',
      'Risk assessment',
      'Clinical decision support',
      'Compliance monitoring'
    ],
    benefits: [
      'Improve diagnostic accuracy by 30%',
      'Reduce diagnosis time by 50%',
      'Enable early disease detection',
      'Improve patient outcomes'
    ],
    marketPrice: '$6,000-15,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Hospitals, Clinics, Medical Research, Pharma'
  },
  {
    id: 14,
    title: 'AI-Powered Financial Analysis',
    description: 'Intelligent financial analysis, risk assessment, and investment recommendations.',
    icon: DollarSign,
    category: 'Finance AI',
    price: 'Starting at $2,800/month',
    features: [
      'Financial forecasting',
      'Risk assessment',
      'Investment analysis',
      'Credit scoring',
      'Market analysis',
      'Portfolio optimization',
      'Fraud detection',
      'Regulatory compliance'
    ],
    benefits: [
      'Improve investment returns by 20%',
      'Reduce risk exposure by 40%',
      'Automate 80% of analysis tasks',
      'Ensure regulatory compliance'
    ],
    marketPrice: '$4,000-10,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Banks, Investment Firms, Insurance, Fintech'
  },
  {
    id: 15,
    title: 'AI-Powered HR & Talent Management',
    description: 'Intelligent HR solutions for recruitment, performance management, and employee engagement.',
    icon: Users,
    category: 'HR AI',
    price: 'Starting at $2,200/month',
    features: [
      'Resume screening & matching',
      'Candidate assessment',
      'Performance analysis',
      'Employee sentiment analysis',
      'Retention prediction',
      'Skills gap analysis',
      'Training recommendations',
      'Bias detection'
    ],
    benefits: [
      'Reduce hiring time by 60%',
      'Improve candidate quality by 40%',
      'Increase retention by 25%',
      'Eliminate hiring bias'
    ],
    marketPrice: '$3,200-7,500/month',
    setupTime: '3-6 weeks',
    targetUsers: 'HR Departments, Recruiting, Corporate Training'
  },
  {
    id: 16,
    title: 'AI-Powered Marketing Automation',
    description: 'Intelligent marketing automation with personalization and campaign optimization.',
    icon: Target,
    category: 'Marketing AI',
    price: 'Starting at $2,500/month',
    features: [
      'Customer segmentation',
      'Personalized campaigns',
      'Predictive analytics',
      'A/B testing optimization',
      'Content personalization',
      'Lead scoring',
      'Churn prediction',
      'ROI optimization'
    ],
    benefits: [
      'Increase conversion rates by 45%',
      'Improve campaign ROI by 60%',
      'Reduce customer acquisition costs',
      'Personalize at scale'
    ],
    marketPrice: '$3,500-8,500/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Marketing, E-commerce, SaaS, Retail'
  },
  {
    id: 17,
    title: 'AI-Powered Quality Control',
    description: 'Automated quality inspection and defect detection for manufacturing and production.',
    icon: CheckCircle,
    category: 'Quality AI',
    price: 'Starting at $2,800/month',
    features: [
      'Visual defect detection',
      'Quality scoring',
      'Real-time monitoring',
      'Predictive quality analysis',
      'Process optimization',
      'Statistical analysis',
      'Custom inspection rules',
      'Integration with production systems'
    ],
    benefits: [
      'Detect 99.9% of defects',
      'Reduce inspection time by 90%',
      'Improve product quality by 40%',
      'Reduce waste by 30%'
    ],
    marketPrice: '$4,000-9,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Automotive, Electronics, Food'
  },
  {
    id: 18,
    title: 'AI-Powered Energy Management',
    description: 'Intelligent energy monitoring, optimization, and predictive maintenance for facilities.',
    icon: Zap,
    category: 'Energy AI',
    price: 'Starting at $2,200/month',
    features: [
      'Energy consumption analysis',
      'Predictive maintenance',
      'Load forecasting',
      'Optimization algorithms',
      'Anomaly detection',
      'Cost optimization',
      'Renewable energy integration',
      'Real-time monitoring'
    ],
    benefits: [
      'Reduce energy costs by 25%',
      'Prevent equipment failures',
      'Optimize energy usage',
      'Improve sustainability'
    ],
    marketPrice: '$3,200-7,500/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Commercial Buildings, Utilities'
  },
  {
    id: 19,
    title: 'AI-Powered Legal Document Analysis',
    description: 'Intelligent legal document review, contract analysis, and compliance monitoring.',
    icon: FileText,
    category: 'Legal AI',
    price: 'Starting at $3,200/month',
    features: [
      'Contract analysis',
      'Legal document review',
      'Compliance checking',
      'Risk assessment',
      'Due diligence automation',
      'Legal research assistance',
      'Document summarization',
      'Clause extraction'
    ],
    benefits: [
      'Review documents 100x faster',
      'Reduce legal costs by 50%',
      'Improve accuracy by 95%',
      'Ensure compliance'
    ],
    marketPrice: '$4,500-12,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Law Firms, Corporate Legal, Compliance'
  },
  {
    id: 20,
    title: 'AI-Powered Real Estate Analysis',
    description: 'Intelligent property valuation, market analysis, and investment recommendations.',
    icon: Home,
    category: 'Real Estate AI',
    price: 'Starting at $2,500/month',
    features: [
      'Property valuation',
      'Market trend analysis',
      'Investment recommendations',
      'Risk assessment',
      'Property matching',
      'Price prediction',
      'Neighborhood analysis',
      'ROI calculations'
    ],
    benefits: [
      'Improve valuation accuracy by 30%',
      'Identify investment opportunities',
      'Reduce analysis time by 80%',
      'Maximize ROI'
    ],
    marketPrice: '$3,500-8,500/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Real Estate, Investment, Property Management'
  },
  {
    id: 21,
    title: 'AI-Powered Agriculture & Farming',
    description: 'Intelligent farming solutions for crop monitoring, yield prediction, and resource optimization.',
    icon: TreePine,
    category: 'Agriculture AI',
    price: 'Starting at $2,800/month',
    features: [
      'Crop monitoring',
      'Yield prediction',
      'Pest detection',
      'Soil analysis',
      'Weather prediction',
      'Resource optimization',
      'Precision farming',
      'Livestock monitoring'
    ],
    benefits: [
      'Increase crop yields by 20%',
      'Reduce resource usage by 30%',
      'Improve crop quality',
      'Optimize farming operations'
    ],
    marketPrice: '$4,000-10,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Farming, Agriculture, Food Production'
  },
  {
    id: 22,
    title: 'AI-Powered Transportation & Logistics',
    description: 'Intelligent transportation solutions for route optimization, fleet management, and logistics.',
    icon: Truck,
    category: 'Transportation AI',
    price: 'Starting at $2,600/month',
    features: [
      'Route optimization',
      'Fleet management',
      'Demand forecasting',
      'Fuel optimization',
      'Driver behavior analysis',
      'Maintenance prediction',
      'Load optimization',
      'Real-time tracking'
    ],
    benefits: [
      'Reduce fuel costs by 20%',
      'Improve delivery times by 35%',
      'Optimize fleet utilization',
      'Reduce maintenance costs'
    ],
    marketPrice: '$3,800-9,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Logistics, Transportation, Delivery, Fleet Management'
  },
  {
    id: 23,
    title: 'AI-Powered Education & E-Learning',
    description: 'Intelligent educational solutions for personalized learning, assessment, and content generation.',
    icon: GraduationCap,
    category: 'Education AI',
    price: 'Starting at $2,000/month',
    features: [
      'Personalized learning paths',
      'Adaptive assessments',
      'Content generation',
      'Student performance analysis',
      'Learning gap identification',
      'Automated grading',
      'Tutoring assistance',
      'Progress tracking'
    ],
    benefits: [
      'Improve learning outcomes by 40%',
      'Personalize education at scale',
      'Reduce grading time by 80%',
      'Identify learning gaps early'
    ],
    marketPrice: '$2,800-7,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Schools, Universities, Online Learning, Corporate Training'
  },
  {
    id: 24,
    title: 'AI-Powered Gaming & Entertainment',
    description: 'Intelligent gaming solutions for procedural content generation, player behavior analysis, and game optimization.',
    icon: Gamepad2,
    category: 'Gaming AI',
    price: 'Starting at $2,400/month',
    features: [
      'Procedural content generation',
      'Player behavior analysis',
      'Game balancing',
      'NPC intelligence',
      'Dynamic difficulty adjustment',
      'Cheat detection',
      'Player matching',
      'Content personalization'
    ],
    benefits: [
      'Increase player engagement by 50%',
      'Reduce development time by 40%',
      'Improve game balance',
      'Enhance player experience'
    ],
    marketPrice: '$3,500-8,500/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Game Developers, Gaming Companies, Entertainment'
  },
  {
    id: 25,
    title: 'AI-Powered Environmental Monitoring',
    description: 'Intelligent environmental monitoring and analysis for pollution detection, climate monitoring, and sustainability.',
    icon: Droplets,
    category: 'Environmental AI',
    price: 'Starting at $2,600/month',
    features: [
      'Air quality monitoring',
      'Water quality analysis',
      'Climate data analysis',
      'Pollution detection',
      'Environmental impact assessment',
      'Sustainability metrics',
      'Predictive modeling',
      'Real-time alerts'
    ],
    benefits: [
      'Improve environmental monitoring',
      'Enable proactive interventions',
      'Support sustainability goals',
      'Ensure regulatory compliance'
    ],
    marketPrice: '$3,800-9,500/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Environmental Agencies, Government, Sustainability, Research'
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Conversational AI", count: aiServices.filter(s => s.category === "Conversational AI").length },
  { name: "Predictive Analytics", count: aiServices.filter(s => s.category === "Predictive Analytics").length },
  { name: "Recommendation Systems", count: aiServices.filter(s => s.category === "Recommendation Systems").length },
  { name: "Document AI", count: aiServices.filter(s => s.category === "Document AI").length },
  { name: "Security AI", count: aiServices.filter(s => s.category === "Security AI").length },
  { name: "Content AI", count: aiServices.filter(s => s.category === "Content AI").length },
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length },
  { name: "Media AI", count: aiServices.filter(s => s.category === "Media AI").length },
  { name: "Supply Chain AI", count: aiServices.filter(s => s.category === "Supply Chain AI").length },
  { name: "Healthcare AI", count: aiServices.filter(s => s.category === "Healthcare AI").length },
  { name: "Finance AI", count: aiServices.filter(s => s.category === "Finance AI").length },
  { name: "HR AI", count: aiServices.filter(s => s.category === "HR AI").length },
  { name: "Marketing AI", count: aiServices.filter(s => s.category === "Marketing AI").length },
  { name: "Quality AI", count: aiServices.filter(s => s.category === "Quality AI").length },
  { name: "Energy AI", count: aiServices.filter(s => s.category === "Energy AI").length },
  { name: "Legal AI", count: aiServices.filter(s => s.category === "Legal AI").length },
  { name: "Real Estate AI", count: aiServices.filter(s => s.category === "Real Estate AI").length },
  { name: "Agriculture AI", count: aiServices.filter(s => s.category === "Agriculture AI").length },
  { name: "Transportation AI", count: aiServices.filter(s => s.category === "Transportation AI").length },
  { name: "Education AI", count: aiServices.filter(s => s.category === "Education AI").length },
  { name: "Gaming AI", count: aiServices.filter(s => s.category === "Gaming AI").length },
  { name: "Environmental AI", count: aiServices.filter(s => s.category === "Environmental AI").length }
];

export default function AIServicesPage() {
  return (
    <Layout 
      title="AI Services - Zion Tech Group | Machine Learning, Computer Vision & NLP"
      description="Comprehensive AI services including machine learning, computer vision, natural language processing, and custom AI solutions. Transform your business with cutting-edge AI technology."
      keywords="AI services, machine learning, computer vision, NLP, artificial intelligence, AI consulting, custom AI solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Services</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge AI solutions. From machine learning models to computer vision and natural language processing, we deliver intelligent solutions that drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Free Consultation
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive AI solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    <span className="text-gray-500 ml-2">({service.setupTime})</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href="/contact"
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700 transition-colors"
                    >
                      Get Quote
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded text-center hover:bg-blue-50 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Implement AI?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our AI experts help you identify the best solutions for your business and implement them successfully.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Start Your AI Journey
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}