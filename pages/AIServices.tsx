import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  Brain,
  Bot,
  BarChart3,
  FileText,
  Mail,
  Users,
  Target,
  Zap,
  Shield,
  Globe,
  Camera,
  Mic,
  Video,
  Code,
  Database,
  Cpu,
  Network,
  Eye,
  Search,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  DollarSign,
  Award,
  Lock,
  Phone,
  MapPin,
  MessageSquare,
  PieChart,
  Settings,
  Monitor,
  Smartphone,
  Laptop,
  Server,
  Cloud,
  Heart,
  Building,
  Truck,
  CreditCard,
  GraduationCap,
  ClipboardList,
  Package,
  Calendar,
  BookOpen,
  ShoppingCart,
  Home,
  Trash2,
  Camera as CameraIcon,
  HardDrive,
  Wifi,
  Rocket,
  Sprout,
  TreePine,
  Droplets
} from 'lucide-react';

const aiServices = [
  // AI Content & Marketing Solutions
  {
    title: 'AI Content Creation Studio',
    description: 'Revolutionary AI-powered content creation platform that generates high-quality, brand-consistent content across multiple channels with advanced natural language processing.',
    icon: FileText,
    features: ['Automated Blog Generation', 'Social Media Content', 'Email Marketing Campaigns', 'SEO Optimization', 'Multi-language Support', 'Brand Voice Training', 'Content Calendar Management', 'Performance Analytics'],
    pricing: '$299 - $1,499/month',
    category: 'AI Content',
    popular: true,
    benefits: ['80% Time Reduction', 'Consistent Brand Voice', 'Scalable Production', 'SEO Boost', 'Multi-channel Reach'],
    marketPrice: '$500 - $2,000/month',
    link: 'https://ziontechgroup.com/ai-content-creation-studio',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Marketing Automation Platform',
    description: 'Comprehensive marketing automation with AI-powered personalization, predictive analytics, and automated campaign optimization.',
    icon: Target,
    features: ['Predictive Analytics', 'Personalized Campaigns', 'Automated A/B Testing', 'Customer Segmentation', 'Lead Scoring', 'ROI Optimization', 'Multi-channel Integration', 'Real-time Optimization'],
    pricing: '$399 - $1,999/month',
    category: 'AI Marketing',
    popular: true,
    benefits: ['Higher Conversion Rates', 'Personalized Experiences', 'Automated Optimization', 'Better ROI', 'Scalable Marketing'],
    marketPrice: '$600 - $3,000/month',
    link: 'https://ziontechgroup.com/ai-marketing-automation',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Email Intelligence System',
    description: 'Intelligent email management system that reads, categorizes, and responds to emails automatically while learning from your preferences and context.',
    icon: Mail,
    features: ['Smart Categorization', 'Automated Responses', 'Priority Flagging', 'Sentiment Analysis', 'Follow-up Automation', 'CRM Integration', 'Custom Templates', 'Performance Analytics'],
    pricing: '$199 - $999/month',
    category: 'AI Communication',
    popular: true,
    benefits: ['90% Email Automation', 'Never Miss Important Messages', '70% Faster Response', 'Reduced Overhead'],
    marketPrice: '$300 - $1,500/month',
    link: 'https://ziontechgroup.com/ai-email-intelligence',
    contact: '+1 302 464 0950'
  },

  // AI Analytics & Business Intelligence
  {
    title: 'AI Business Intelligence Suite',
    description: 'Advanced analytics platform that provides real-time insights, predictive analytics, and automated reporting for data-driven decision making.',
    icon: BarChart3,
    features: ['Real-time Visualization', 'Predictive Analytics', 'Automated Reporting', 'Custom Dashboards', 'Multi-source Integration', 'Anomaly Detection', 'Trend Analysis', 'Executive Summaries'],
    pricing: '$499 - $2,499/month',
    category: 'AI Analytics',
    popular: true,
    benefits: ['Faster Decision Making', 'Early Risk Detection', '85% Less Manual Reporting', 'Better Performance Metrics'],
    marketPrice: '$800 - $4,000/month',
    link: 'https://ziontechgroup.com/ai-business-intelligence',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Predictive Analytics Engine',
    description: 'Machine learning-powered predictive analytics platform for forecasting trends, customer behavior, and business outcomes.',
    icon: TrendingUp,
    features: ['Trend Forecasting', 'Customer Behavior Prediction', 'Demand Forecasting', 'Risk Assessment', 'Scenario Modeling', 'Real-time Predictions', 'Model Training', 'Performance Monitoring'],
    pricing: '$799 - $3,999/month',
    category: 'AI Analytics',
    popular: true,
    benefits: ['Accurate Predictions', 'Risk Mitigation', 'Better Planning', 'Competitive Advantage', 'Data-Driven Insights'],
    marketPrice: '$1,200 - $6,000/month',
    link: 'https://ziontechgroup.com/ai-predictive-analytics',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Data Mining & Insights',
    description: 'Advanced data mining platform that discovers hidden patterns, correlations, and insights from large datasets using machine learning.',
    icon: Database,
    features: ['Pattern Recognition', 'Correlation Analysis', 'Anomaly Detection', 'Data Visualization', 'Automated Insights', 'Custom Algorithms', 'Real-time Processing', 'Scalable Architecture'],
    pricing: '$599 - $2,999/month',
    category: 'AI Data Science',
    popular: true,
    benefits: ['Hidden Pattern Discovery', 'Automated Insights', 'Better Data Understanding', 'Competitive Intelligence', 'Scalable Analysis'],
    marketPrice: '$900 - $4,500/month',
    link: 'https://ziontechgroup.com/ai-data-mining-insights',
    contact: '+1 302 464 0950'
  },

  // AI Customer Experience Solutions
  {
    title: 'AI Customer Support Automation',
    description: 'Comprehensive customer support platform with AI-powered chatbots, ticket routing, and automated resolution capabilities.',
    icon: Bot,
    features: ['Intelligent Chatbots', 'Automatic Ticket Routing', 'Knowledge Base Integration', 'Sentiment Analysis', 'Multi-language Support', 'Escalation Management', 'Performance Analytics', 'Custom Workflows'],
    pricing: '$399 - $1,999/month',
    category: 'AI Support',
    popular: true,
    benefits: ['60% Faster Response', '70% Auto-resolution', 'Higher Satisfaction', 'Scalable Support'],
    marketPrice: '$600 - $3,000/month',
    link: 'https://ziontechgroup.com/ai-customer-support',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Voice Assistant Platform',
    description: 'Advanced voice AI platform with natural language processing, speech recognition, and conversational AI capabilities.',
    icon: Mic,
    features: ['Natural Language Processing', 'Speech Recognition', 'Voice Synthesis', 'Conversational AI', 'Multi-language Support', 'Custom Voice Training', 'Integration APIs', 'Analytics Dashboard'],
    pricing: '$299 - $1,499/month',
    category: 'AI Voice',
    popular: true,
    benefits: ['Natural Conversations', 'Multi-language Support', 'Custom Voice Training', 'Seamless Integration', 'Enhanced User Experience'],
    marketPrice: '$500 - $2,500/month',
    link: 'https://ziontechgroup.com/ai-voice-assistant',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Customer Journey Analytics',
    description: 'Comprehensive customer journey mapping and analytics platform that tracks and optimizes every touchpoint using AI.',
    icon: Eye,
    features: ['Journey Mapping', 'Touchpoint Analysis', 'Behavior Tracking', 'Optimization Recommendations', 'Real-time Monitoring', 'Predictive Insights', 'A/B Testing', 'ROI Measurement'],
    pricing: '$599 - $2,999/month',
    category: 'AI Analytics',
    popular: true,
    benefits: ['Complete Journey Visibility', 'Optimized Touchpoints', 'Better Customer Experience', 'Higher Conversion', 'Data-Driven Optimization'],
    marketPrice: '$900 - $4,500/month',
    link: 'https://ziontechgroup.com/ai-customer-journey',
    contact: '+1 302 464 0950'
  },

  // AI Computer Vision Solutions
  {
    title: 'AI Computer Vision Platform',
    description: 'Advanced computer vision platform with image recognition, object detection, and visual analytics capabilities.',
    icon: Camera,
    features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'OCR Processing', 'Visual Analytics', 'Real-time Processing', 'Custom Model Training', 'API Integration'],
    pricing: '$499 - $2,499/month',
    category: 'AI Vision',
    popular: true,
    benefits: ['Accurate Image Analysis', 'Real-time Processing', 'Custom Model Training', 'Scalable Vision AI', 'Multiple Applications'],
    marketPrice: '$800 - $4,000/month',
    link: 'https://ziontechgroup.com/ai-computer-vision',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Video Analytics Suite',
    description: 'Comprehensive video analytics platform with real-time analysis, object tracking, and behavioral insights.',
    icon: Video,
    features: ['Real-time Analysis', 'Object Tracking', 'Behavioral Analysis', 'Motion Detection', 'Facial Recognition', 'Scene Understanding', 'Custom Alerts', 'Analytics Dashboard'],
    pricing: '$699 - $3,499/month',
    category: 'AI Vision',
    popular: true,
    benefits: ['Real-time Video Analysis', 'Advanced Object Tracking', 'Behavioral Insights', 'Security Enhancement', 'Automated Monitoring'],
    marketPrice: '$1,100 - $5,500/month',
    link: 'https://ziontechgroup.com/ai-video-analytics',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Document Processing System',
    description: 'Intelligent document processing platform with OCR, data extraction, and automated document classification.',
    icon: FileText,
    features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Form Processing', 'Handwriting Recognition', 'Multi-language Support', 'Automated Workflows', 'Quality Assurance'],
    pricing: '$399 - $1,999/month',
    category: 'AI Document',
    popular: true,
    benefits: ['Automated Processing', 'High Accuracy', 'Multi-format Support', 'Cost Reduction', 'Faster Processing'],
    marketPrice: '$600 - $3,000/month',
    link: 'https://ziontechgroup.com/ai-document-processing',
    contact: '+1 302 464 0950'
  },

  // AI Machine Learning Solutions
  {
    title: 'AI Machine Learning Platform',
    description: 'Comprehensive ML platform with automated model training, deployment, and monitoring capabilities.',
    icon: Cpu,
    features: ['Automated Model Training', 'Model Deployment', 'Performance Monitoring', 'A/B Testing', 'Feature Engineering', 'Hyperparameter Optimization', 'Model Versioning', 'Scalable Infrastructure'],
    pricing: '$999 - $4,999/month',
    category: 'AI ML Platform',
    popular: true,
    benefits: ['Automated ML Pipeline', 'Faster Model Development', 'Better Model Performance', 'Scalable Infrastructure', 'Reduced Development Time'],
    marketPrice: '$1,500 - $7,500/month',
    link: 'https://ziontechgroup.com/ai-machine-learning-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Deep Learning Framework',
    description: 'Advanced deep learning framework with pre-trained models, custom model development, and GPU acceleration.',
    icon: Brain,
    features: ['Pre-trained Models', 'Custom Model Development', 'GPU Acceleration', 'Transfer Learning', 'Model Optimization', 'Distributed Training', 'Model Serving', 'Performance Monitoring'],
    pricing: '$1,499 - $7,499/month',
    category: 'AI Deep Learning',
    popular: true,
    benefits: ['Advanced AI Capabilities', 'Faster Training', 'Better Performance', 'Scalable Computing', 'Pre-trained Models'],
    marketPrice: '$2,500 - $12,000/month',
    link: 'https://ziontechgroup.com/ai-deep-learning-framework',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Natural Language Processing',
    description: 'Advanced NLP platform with text analysis, sentiment analysis, and language understanding capabilities.',
    icon: MessageSquare,
    features: ['Text Analysis', 'Sentiment Analysis', 'Language Understanding', 'Entity Recognition', 'Text Classification', 'Language Translation', 'Summarization', 'Question Answering'],
    pricing: '$299 - $1,499/month',
    category: 'AI NLP',
    popular: true,
    benefits: ['Advanced Text Understanding', 'Multi-language Support', 'Accurate Analysis', 'Scalable Processing', 'Custom Models'],
    marketPrice: '$500 - $2,500/month',
    link: 'https://ziontechgroup.com/ai-natural-language-processing',
    contact: '+1 302 464 0950'
  },

  // AI Industry-Specific Solutions
  {
    title: 'AI Healthcare Diagnostics',
    description: 'AI-powered healthcare diagnostic platform with medical image analysis, symptom analysis, and treatment recommendations.',
    icon: Heart,
    features: ['Medical Image Analysis', 'Symptom Analysis', 'Treatment Recommendations', 'Drug Interaction Check', 'Patient Risk Assessment', 'Clinical Decision Support', 'HIPAA Compliance', 'Integration APIs'],
    pricing: '$2,999 - $14,999/month',
    category: 'AI Healthcare',
    popular: true,
    benefits: ['Improved Diagnostics', 'Faster Analysis', 'Better Patient Care', 'Reduced Errors', 'Compliance Ready'],
    marketPrice: '$4,500 - $22,500/month',
    link: 'https://ziontechgroup.com/ai-healthcare-diagnostics',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Financial Risk Assessment',
    description: 'AI-powered financial risk assessment platform with fraud detection, credit scoring, and market analysis.',
    icon: CreditCard,
    features: ['Fraud Detection', 'Credit Scoring', 'Market Analysis', 'Risk Assessment', 'Anomaly Detection', 'Real-time Monitoring', 'Regulatory Compliance', 'Predictive Modeling'],
    pricing: '$1,999 - $9,999/month',
    category: 'AI FinTech',
    popular: true,
    benefits: ['Enhanced Security', 'Better Risk Management', 'Faster Processing', 'Compliance Assurance', 'Cost Reduction'],
    marketPrice: '$3,000 - $15,000/month',
    link: 'https://ziontechgroup.com/ai-financial-risk-assessment',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Manufacturing Optimization',
    description: 'AI-powered manufacturing optimization platform with predictive maintenance, quality control, and process optimization.',
    icon: Building,
    features: ['Predictive Maintenance', 'Quality Control', 'Process Optimization', 'Supply Chain Analytics', 'Demand Forecasting', 'Energy Optimization', 'Safety Monitoring', 'Performance Analytics'],
    pricing: '$1,499 - $7,499/month',
    category: 'AI Manufacturing',
    popular: true,
    benefits: ['Reduced Downtime', 'Better Quality', 'Cost Optimization', 'Improved Safety', 'Higher Efficiency'],
    marketPrice: '$2,500 - $12,000/month',
    link: 'https://ziontechgroup.com/ai-manufacturing-optimization',
    contact: '+1 302 464 0950'
  },

  // AI Emerging Technologies
  {
    title: 'AI Quantum Computing Interface',
    description: 'AI-powered quantum computing interface that bridges classical and quantum computing for advanced problem solving.',
    icon: Cpu,
    features: ['Quantum Algorithm Development', 'Hybrid Computing', 'Quantum Simulation', 'Optimization Problems', 'Machine Learning Integration', 'Performance Monitoring', 'API Access', 'Expert Support'],
    pricing: '$4,999 - $24,999/month',
    category: 'AI Quantum',
    popular: true,
    benefits: ['Quantum Advantage', 'Advanced Problem Solving', 'Future-Proof Technology', 'Competitive Edge', 'Innovation Leadership'],
    marketPrice: '$7,500 - $37,500/month',
    link: 'https://ziontechgroup.com/ai-quantum-computing-interface',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Blockchain Analytics',
    description: 'AI-powered blockchain analytics platform with transaction analysis, smart contract auditing, and compliance monitoring.',
    icon: Network,
    features: ['Transaction Analysis', 'Smart Contract Auditing', 'Compliance Monitoring', 'Risk Assessment', 'Pattern Recognition', 'Real-time Alerts', 'Regulatory Reporting', 'API Integration'],
    pricing: '$1,999 - $9,999/month',
    category: 'AI Blockchain',
    popular: true,
    benefits: ['Enhanced Security', 'Compliance Assurance', 'Risk Mitigation', 'Transparency', 'Audit Readiness'],
    marketPrice: '$3,000 - $15,000/month',
    link: 'https://ziontechgroup.com/ai-blockchain-analytics',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI IoT Intelligence Platform',
    description: 'AI-powered IoT platform with device management, data processing, and intelligent automation capabilities.',
    icon: Wifi,
    features: ['Device Management', 'Data Processing', 'Intelligent Automation', 'Predictive Maintenance', 'Anomaly Detection', 'Real-time Analytics', 'Edge Computing', 'Security Monitoring'],
    pricing: '$799 - $3,999/month',
    category: 'AI IoT',
    popular: true,
    benefits: ['Intelligent Automation', 'Predictive Insights', 'Cost Optimization', 'Enhanced Security', 'Scalable Platform'],
    marketPrice: '$1,200 - $6,000/month',
    link: 'https://ziontechgroup.com/ai-iot-intelligence-platform',
    contact: '+1 302 464 0950'
  },

  // AI Education & Training Solutions
  {
    title: 'AI Learning Management System',
    description: 'AI-powered LMS with personalized learning paths, automated assessments, and intelligent tutoring capabilities.',
    icon: GraduationCap,
    features: ['Personalized Learning', 'Automated Assessments', 'Intelligent Tutoring', 'Progress Tracking', 'Content Recommendation', 'Adaptive Learning', 'Performance Analytics', 'Multi-language Support'],
    pricing: '$399 - $1,999/month',
    category: 'AI Education',
    popular: true,
    benefits: ['Personalized Learning', 'Better Outcomes', 'Automated Assessment', 'Scalable Education', 'Cost Efficiency'],
    marketPrice: '$600 - $3,000/month',
    link: 'https://ziontechgroup.com/ai-learning-management-system',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Virtual Training Assistant',
    description: 'AI-powered virtual training assistant with interactive simulations, personalized coaching, and performance tracking.',
    icon: Monitor,
    features: ['Interactive Simulations', 'Personalized Coaching', 'Performance Tracking', 'Skill Assessment', 'Progress Monitoring', 'Adaptive Training', 'Real-time Feedback', 'Certification Management'],
    pricing: '$599 - $2,999/month',
    category: 'AI Training',
    popular: true,
    benefits: ['Interactive Learning', 'Personalized Coaching', 'Better Retention', 'Scalable Training', 'Performance Tracking'],
    marketPrice: '$900 - $4,500/month',
    link: 'https://ziontechgroup.com/ai-virtual-training-assistant',
    contact: '+1 302 464 0950'
  }
];

export default function AIServicesPage() {
  return (
    <>
      <Head>
        <title>AI Services & Solutions - Zion Tech Group | 80+ Cutting-Edge AI Platforms</title>
        <meta name="description" content="Discover 80+ cutting-edge AI services from Zion Tech Group. Machine learning, computer vision, NLP, predictive analytics, and AI automation tools starting at $199/month. Transform your business with AI!" />
        <meta name="keywords" content="AI services, machine learning, computer vision, NLP, predictive analytics, AI automation, artificial intelligence, AI platforms" />
        <meta property="og:title" content="AI Services & Solutions - Zion Tech Group" />
        <meta property="og:description" content="80+ cutting-edge AI services and solutions. From machine learning to computer vision, we provide advanced AI capabilities for modern enterprises." />
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
                AI Services & Solutions
                <span className="block text-blue-400">80+ Cutting-Edge AI Platforms</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with our comprehensive AI services. From machine learning to computer vision, we provide advanced artificial intelligence capabilities for modern enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <a href="tel:+13024640950" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
              
              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>Middletown, DE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Services & Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from 80+ cutting-edge AI services designed to solve complex business challenges with advanced artificial intelligence and competitive pricing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-blue-600 group-hover:text-purple-600 transition-colors">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        {service.popular && (
                          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                      
                      <div className="mb-4">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                          {service.category}
                        </span>
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
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                        <div className="flex flex-wrap gap-1">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <span key={idx} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-lg font-bold text-green-600">{service.pricing}</span>
                          <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-4">You save up to 40% vs market price</p>
                        
                        <div className="flex gap-2">
                          <a
                            href={service.link}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                          >
                            Learn More
                          </a>
                          <a
                            href={`tel:${service.contact}`}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                          >
                            Call Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Competitive Pricing & Value
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our AI services offer exceptional value with transparent pricing and no hidden fees.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Cost Savings</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Up to 40% savings vs market rates</li>
                  <li>• No setup or hidden fees</li>
                  <li>• Transparent pricing</li>
                  <li>• Volume discounts available</li>
                  <li>• Free consultation included</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 Advanced AI Capabilities</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• State-of-the-art AI models</li>
                  <li>• Custom model training</li>
                  <li>• Real-time processing</li>
                  <li>• Scalable infrastructure</li>
                  <li>• Expert AI support</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Proven Results</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 80% efficiency improvement</li>
                  <li>• 60% cost reduction</li>
                  <li>• 90% accuracy rates</li>
                  <li>• 95% customer satisfaction</li>
                  <li>• ROI within 30 days</li>
                </ul>
              </motion.div>
            </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get started with our cutting-edge AI services today and experience the power of artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <a href="tel:+13024640950" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}