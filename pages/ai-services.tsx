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
  Droplets
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
    title: 'AI-Powered Analytics',
    description: 'Advanced data analytics with machine learning insights, predictive modeling, and automated reporting.',
    icon: BarChart3,
    category: 'Analytics',
    price: 'Starting at $3,000/month',
    features: [
      'Predictive analytics & forecasting',
      'Real-time data processing',
      'Automated report generation',
      'Anomaly detection & alerting',
      'Custom dashboard creation',
      'Data visualization & storytelling',
      'Statistical modeling & analysis',
      'Business intelligence automation'
    ],
    benefits: [
      'Increase data accuracy by 60%',
      'Reduce analysis time by 85%',
      'Improve decision-making speed by 70%',
      'Generate 10x more insights'
    ],
    marketPrice: '$4,500-10,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Finance, Marketing, Operations, Healthcare'
  },
  {
    id: 5,
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Intelligent conversational AI for customer service, sales, and internal operations automation.',
    icon: Bot,
    category: 'Conversational AI',
    price: 'Starting at $1,800/month',
    features: [
      'Multi-channel deployment (web, mobile, voice)',
      'Natural language understanding',
      'Context-aware conversations',
      'Integration with CRM & databases',
      'Multi-language support',
      'Sentiment analysis & emotion detection',
      'Escalation to human agents',
      'Analytics & performance tracking'
    ],
    benefits: [
      'Reduce support costs by 65%',
      'Improve response time by 90%',
      'Increase customer satisfaction by 40%',
      'Handle 24/7 customer inquiries'
    ],
    marketPrice: '$2,500-6,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'E-commerce, Healthcare, Finance, Education'
  },
  {
    id: 6,
    title: 'AI Document Processing',
    description: 'Automated document analysis, extraction, and processing using advanced OCR and NLP technologies.',
    icon: FileText,
    category: 'Document AI',
    price: 'Starting at $2,500/month',
    features: [
      'OCR & text extraction',
      'Document classification & routing',
      'Data validation & verification',
      'Form processing & automation',
      'Contract analysis & review',
      'Invoice processing & approval',
      'Compliance checking',
      'Document search & retrieval'
    ],
    benefits: [
      'Process documents 50x faster',
      'Reduce errors by 95%',
      'Cut processing costs by 80%',
      'Improve compliance accuracy'
    ],
    marketPrice: '$3,000-8,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Legal, Finance, Insurance, Government'
  },
  {
    id: 7,
    title: 'AI Image & Video Analysis',
    description: 'Advanced computer vision for image recognition, video analytics, and visual content processing.',
    icon: Image,
    category: 'Computer Vision',
    price: 'Starting at $3,200/month',
    features: [
      'Object detection & recognition',
      'Facial recognition & analysis',
      'Video content analysis',
      'Image classification & tagging',
      'Quality control automation',
      'Surveillance & monitoring',
      'Augmented reality integration',
      'Real-time processing'
    ],
    benefits: [
      'Achieve 99%+ accuracy in visual tasks',
      'Enable 24/7 automated monitoring',
      'Reduce manual inspection by 90%',
      'Improve quality control efficiency'
    ],
    marketPrice: '$4,000-12,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Manufacturing, Security, Retail, Healthcare'
  },
  {
    id: 8,
    title: 'AI Voice Processing',
    description: 'Speech recognition, voice analysis, and audio processing solutions for various applications.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $2,000/month',
    features: [
      'Speech-to-text conversion',
      'Text-to-speech synthesis',
      'Voice biometrics & authentication',
      'Audio sentiment analysis',
      'Voice command processing',
      'Multi-language voice support',
      'Noise reduction & enhancement',
      'Real-time voice processing'
    ],
    benefits: [
      'Improve accessibility by 100%',
      'Reduce transcription costs by 75%',
      'Enable hands-free operations',
      'Enhance user experience'
    ],
    marketPrice: '$2,800-6,500/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Healthcare, Education, Customer Service, Accessibility'
  },
  {
    id: 9,
    title: 'AI Recommendation Systems',
    description: 'Personalized recommendation engines for e-commerce, content, and service matching.',
    icon: Target,
    category: 'Recommendation AI',
    price: 'Starting at $2,800/month',
    features: [
      'Collaborative filtering algorithms',
      'Content-based recommendations',
      'Hybrid recommendation models',
      'Real-time personalization',
      'A/B testing & optimization',
      'Cross-platform recommendations',
      'Behavioral analysis & tracking',
      'Performance analytics'
    ],
    benefits: [
      'Increase conversion rates by 35%',
      'Improve customer engagement by 50%',
      'Boost revenue by 25%',
      'Reduce churn by 40%'
    ],
    marketPrice: '$3,500-9,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'E-commerce, Media, SaaS, Travel'
  },
  {
    id: 10,
    title: 'AI Fraud Detection',
    description: 'Advanced fraud prevention and detection systems using machine learning and behavioral analysis.',
    icon: Shield,
    category: 'Security AI',
    price: 'Starting at $4,000/month',
    features: [
      'Real-time fraud detection',
      'Behavioral pattern analysis',
      'Risk scoring & assessment',
      'Transaction monitoring',
      'Identity verification',
      'Anomaly detection',
      'Machine learning models',
      'Compliance reporting'
    ],
    benefits: [
      'Reduce fraud losses by 85%',
      'Improve detection accuracy by 95%',
      'Minimize false positives by 60%',
      'Ensure regulatory compliance'
    ],
    marketPrice: '$5,000-15,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Finance, E-commerce, Insurance, Banking'
  },
  {
    id: 11,
    title: 'AI Content Generation',
    description: 'Automated content creation for marketing, documentation, and creative writing using advanced language models.',
    icon: BookOpen,
    category: 'Content AI',
    price: 'Starting at $1,500/month',
    features: [
      'Blog posts & articles generation',
      'Marketing copy & ad content',
      'Product descriptions & reviews',
      'Social media content',
      'Technical documentation',
      'Email campaigns & newsletters',
      'SEO-optimized content',
      'Multi-language content creation'
    ],
    benefits: [
      'Increase content production by 10x',
      'Reduce content costs by 70%',
      'Improve SEO performance by 40%',
      'Maintain consistent brand voice'
    ],
    marketPrice: '$2,000-5,000/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Marketing, E-commerce, Media, SaaS'
  },
  {
    id: 12,
    title: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics planning.',
    icon: Package,
    category: 'Supply Chain AI',
    price: 'Starting at $3,500/month',
    features: [
      'Demand forecasting & planning',
      'Inventory optimization',
      'Route optimization & logistics',
      'Supplier risk assessment',
      'Quality control automation',
      'Cost optimization analysis',
      'Real-time tracking & monitoring',
      'Predictive maintenance'
    ],
    benefits: [
      'Reduce inventory costs by 30%',
      'Improve delivery accuracy by 45%',
      'Optimize routes and reduce fuel costs',
      'Minimize supply chain disruptions'
    ],
    marketPrice: '$4,500-12,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Retail, Logistics, E-commerce'
  },
  {
    id: 13,
    title: 'AI Healthcare Diagnostics',
    description: 'Medical image analysis, diagnostic assistance, and patient monitoring using advanced AI algorithms.',
    icon: Heart,
    category: 'Healthcare AI',
    price: 'Starting at $5,000/month',
    features: [
      'Medical image analysis (X-ray, MRI, CT)',
      'Diagnostic assistance & recommendations',
      'Patient risk assessment',
      'Drug interaction analysis',
      'Treatment outcome prediction',
      'Clinical decision support',
      'Patient monitoring & alerts',
      'Compliance with medical standards'
    ],
    benefits: [
      'Improve diagnostic accuracy by 30%',
      'Reduce diagnosis time by 50%',
      'Enhance patient outcomes',
      'Support clinical decision-making'
    ],
    marketPrice: '$8,000-25,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Hospitals, Clinics, Medical Research, Telemedicine'
  },
  {
    id: 14,
    title: 'AI Financial Trading',
    description: 'Algorithmic trading systems, market analysis, and investment optimization using machine learning.',
    icon: TrendingUp,
    category: 'FinTech AI',
    price: 'Starting at $4,500/month',
    features: [
      'Algorithmic trading strategies',
      'Market sentiment analysis',
      'Risk assessment & management',
      'Portfolio optimization',
      'Real-time market monitoring',
      'Pattern recognition & prediction',
      'Backtesting & validation',
      'Regulatory compliance'
    ],
    benefits: [
      'Improve trading performance by 25%',
      'Reduce risk exposure by 40%',
      'Enable 24/7 market monitoring',
      'Optimize portfolio returns'
    ],
    marketPrice: '$6,000-20,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Investment Firms, Hedge Funds, Banks, Traders'
  },
  {
    id: 15,
    title: 'AI Customer Insights',
    description: 'Advanced customer analytics, behavior prediction, and personalized marketing automation.',
    icon: Users,
    category: 'Customer AI',
    price: 'Starting at $2,500/month',
    features: [
      'Customer segmentation & profiling',
      'Behavior prediction & analysis',
      'Churn prediction & prevention',
      'Lifetime value calculation',
      'Personalized marketing campaigns',
      'Customer journey mapping',
      'Sentiment analysis & feedback',
      'ROI optimization'
    ],
    benefits: [
      'Increase customer retention by 35%',
      'Improve marketing ROI by 60%',
      'Reduce churn by 45%',
      'Enhance customer experience'
    ],
    marketPrice: '$3,500-8,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'E-commerce, SaaS, Retail, Services'
  },
  {
    id: 16,
    title: 'AI Process Automation',
    description: 'Intelligent process automation using RPA combined with AI for complex business process optimization.',
    icon: Settings,
    category: 'Automation AI',
    price: 'Starting at $2,200/month',
    features: [
      'Intelligent process discovery',
      'Automated workflow execution',
      'Exception handling & resolution',
      'Process optimization recommendations',
      'Integration with existing systems',
      'Monitoring & analytics',
      'Compliance & audit trails',
      'Scalable automation framework'
    ],
    benefits: [
      'Reduce process time by 80%',
      'Eliminate human errors by 95%',
      'Cut operational costs by 60%',
      'Improve process consistency'
    ],
    marketPrice: '$3,000-7,500/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Finance, HR, Operations, Customer Service'
  },
  {
    id: 17,
    title: 'AI Quality Assurance',
    description: 'Automated testing, quality control, and defect detection using AI-powered analysis.',
    icon: CheckCircle,
    category: 'QA AI',
    price: 'Starting at $1,800/month',
    features: [
      'Automated test case generation',
      'Intelligent test execution',
      'Defect prediction & analysis',
      'Performance testing automation',
      'Code quality analysis',
      'Regression testing optimization',
      'Test coverage analysis',
      'Continuous quality monitoring'
    ],
    benefits: [
      'Reduce testing time by 70%',
      'Improve defect detection by 50%',
      'Increase test coverage by 40%',
      'Accelerate release cycles'
    ],
    marketPrice: '$2,500-6,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Software Development, Manufacturing, Quality Teams'
  },
  {
    id: 18,
    title: 'AI Environmental Monitoring',
    description: 'Environmental data analysis, pollution detection, and climate monitoring using AI and IoT sensors.',
    icon: TreePine,
    category: 'Environmental AI',
    price: 'Starting at $2,800/month',
    features: [
      'Air quality monitoring & analysis',
      'Water quality assessment',
      'Climate data processing',
      'Pollution source identification',
      'Environmental risk assessment',
      'Predictive environmental modeling',
      'Compliance monitoring',
      'Real-time alerting systems'
    ],
    benefits: [
      'Improve environmental compliance',
      'Enable proactive risk management',
      'Reduce environmental impact',
      'Support sustainability goals'
    ],
    marketPrice: '$3,500-8,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Government, Manufacturing, Energy, Environmental Agencies'
  },
  {
    id: 19,
    title: 'AI Energy Optimization',
    description: 'Smart energy management, consumption optimization, and renewable energy integration using AI.',
    icon: Zap,
    category: 'Energy AI',
    price: 'Starting at $3,000/month',
    features: [
      'Energy consumption analysis',
      'Demand forecasting & planning',
      'Renewable energy optimization',
      'Smart grid management',
      'Energy efficiency recommendations',
      'Cost optimization analysis',
      'Carbon footprint tracking',
      'Real-time energy monitoring'
    ],
    benefits: [
      'Reduce energy costs by 25%',
      'Improve energy efficiency by 35%',
      'Optimize renewable energy usage',
      'Support sustainability initiatives'
    ],
    marketPrice: '$4,000-10,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Utilities, Manufacturing, Buildings, Energy Companies'
  },
  {
    id: 20,
    title: 'AI Education & Training',
    description: 'Personalized learning systems, intelligent tutoring, and educational content optimization.',
    icon: GraduationCap,
    category: 'Education AI',
    price: 'Starting at $2,000/month',
    features: [
      'Personalized learning paths',
      'Intelligent tutoring systems',
      'Adaptive content delivery',
      'Learning progress tracking',
      'Assessment & evaluation automation',
      'Student performance prediction',
      'Content recommendation',
      'Learning analytics & insights'
    ],
    benefits: [
      'Improve learning outcomes by 40%',
      'Personalize education experience',
      'Reduce learning time by 30%',
      'Enhance student engagement'
    ],
    marketPrice: '$2,800-7,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Schools, Universities, Corporate Training, Online Learning'
  },
  {
    id: 21,
    title: 'AI Real Estate Analysis',
    description: 'Property valuation, market analysis, and investment recommendations using AI and big data.',
    icon: Home,
    category: 'Real Estate AI',
    price: 'Starting at $2,500/month',
    features: [
      'Property valuation & pricing',
      'Market trend analysis',
      'Investment opportunity identification',
      'Neighborhood analysis',
      'Rental yield prediction',
      'Property recommendation engine',
      'Risk assessment & scoring',
      'Market forecasting'
    ],
    benefits: [
      'Improve valuation accuracy by 30%',
      'Identify investment opportunities',
      'Reduce market research time by 60%',
      'Optimize property portfolio'
    ],
    marketPrice: '$3,500-8,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Real Estate Agents, Investors, Property Management, Developers'
  },
  {
    id: 22,
    title: 'AI Legal Document Analysis',
    description: 'Contract analysis, legal research, and document review using natural language processing.',
    icon: FileText,
    category: 'Legal AI',
    price: 'Starting at $3,500/month',
    features: [
      'Contract analysis & review',
      'Legal document search',
      'Compliance checking',
      'Risk assessment & scoring',
      'Due diligence automation',
      'Legal research assistance',
      'Document summarization',
      'Case law analysis'
    ],
    benefits: [
      'Reduce document review time by 80%',
      'Improve accuracy by 90%',
      'Cut legal costs by 60%',
      'Enhance compliance monitoring'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Law Firms, Corporate Legal, Government, Compliance Teams'
  },
  {
    id: 23,
    title: 'AI Gaming & Entertainment',
    description: 'Intelligent game development, player behavior analysis, and content generation for gaming.',
    icon: Gamepad2,
    category: 'Gaming AI',
    price: 'Starting at $2,000/month',
    features: [
      'Procedural content generation',
      'AI-powered NPCs & characters',
      'Player behavior analysis',
      'Dynamic difficulty adjustment',
      'Game balancing optimization',
      'Cheat detection & prevention',
      'Personalized gaming experiences',
      'Real-time game analytics'
    ],
    benefits: [
      'Enhance player engagement by 50%',
      'Reduce development time by 40%',
      'Improve game balance & fairness',
      'Increase player retention'
    ],
    marketPrice: '$2,800-7,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Game Studios, Mobile Gaming, Esports, Entertainment'
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
  { name: "Conversational AI", count: aiServices.filter(s => s.category === "Conversational AI").length },
  { name: "Document AI", count: aiServices.filter(s => s.category === "Document AI").length },
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length },
  { name: "Recommendation AI", count: aiServices.filter(s => s.category === "Recommendation AI").length },
  { name: "Security AI", count: aiServices.filter(s => s.category === "Security AI").length },
  { name: "Content AI", count: aiServices.filter(s => s.category === "Content AI").length },
  { name: "Supply Chain AI", count: aiServices.filter(s => s.category === "Supply Chain AI").length },
  { name: "Healthcare AI", count: aiServices.filter(s => s.category === "Healthcare AI").length },
  { name: "FinTech AI", count: aiServices.filter(s => s.category === "FinTech AI").length },
  { name: "Customer AI", count: aiServices.filter(s => s.category === "Customer AI").length },
  { name: "Automation AI", count: aiServices.filter(s => s.category === "Automation AI").length },
  { name: "QA AI", count: aiServices.filter(s => s.category === "QA AI").length },
  { name: "Environmental AI", count: aiServices.filter(s => s.category === "Environmental AI").length },
  { name: "Energy AI", count: aiServices.filter(s => s.category === "Energy AI").length },
  { name: "Education AI", count: aiServices.filter(s => s.category === "Education AI").length },
  { name: "Real Estate AI", count: aiServices.filter(s => s.category === "Real Estate AI").length },
  { name: "Legal AI", count: aiServices.filter(s => s.category === "Legal AI").length },
  { name: "Gaming AI", count: aiServices.filter(s => s.category === "Gaming AI").length }
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
                Transform your business with 23+ cutting-edge AI solutions. From machine learning models to computer vision, natural language processing, and specialized industry AI, we deliver intelligent solutions that drive growth and innovation.
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