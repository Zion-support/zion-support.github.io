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
    title: 'Advanced Machine Learning Models',
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
    title: 'AI-Powered Predictive Analytics',
    description: 'Advanced predictive modeling for forecasting, risk assessment, and strategic decision-making.',
    icon: BarChart3,
    category: 'Analytics',
    price: 'Starting at $4,200/month',
    features: [
      'Time series forecasting',
      'Risk modeling & assessment',
      'Demand forecasting',
      'Customer lifetime value prediction',
      'Churn prediction & prevention',
      'Market trend analysis',
      'Anomaly detection',
      'Real-time scoring'
    ],
    benefits: [
      'Improve forecast accuracy by 60%',
      'Reduce risk exposure by 45%',
      'Increase revenue by 25%',
      'Optimize resource allocation'
    ],
    marketPrice: '$6,000-15,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Finance, Retail, Manufacturing, Healthcare'
  },
  {
    id: 5,
    title: 'Autonomous Systems & Robotics',
    description: 'AI-powered autonomous systems for manufacturing, logistics, and service industries.',
    icon: Bot,
    category: 'Robotics',
    price: 'Starting at $8,500/month',
    features: [
      'Autonomous vehicle systems',
      'Robotic process automation',
      'Smart manufacturing robots',
      'Autonomous drones',
      'Service robots',
      'Navigation & path planning',
      'Object manipulation',
      'Human-robot interaction'
    ],
    benefits: [
      'Increase operational efficiency by 80%',
      'Reduce human error by 95%',
      'Enable 24/7 operations',
      'Lower operational costs by 60%'
    ],
    marketPrice: '$12,000-30,000/month',
    setupTime: '8-12 weeks',
    targetUsers: 'Manufacturing, Logistics, Healthcare, Agriculture'
  },
  {
    id: 6,
    title: 'AI-Powered Cybersecurity',
    description: 'Intelligent security solutions with AI-driven threat detection and automated response.',
    icon: Shield,
    category: 'Security',
    price: 'Starting at $3,800/month',
    features: [
      'AI threat detection',
      'Behavioral analysis',
      'Automated incident response',
      'Fraud detection',
      'Network anomaly detection',
      'Malware analysis',
      'Security orchestration',
      'Threat intelligence'
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 80%',
      'Automate 90% of security tasks',
      'Improve response time by 95%'
    ],
    marketPrice: '$5,500-12,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Financial Services, Healthcare, Government, Enterprise'
  },
  {
    id: 7,
    title: 'Conversational AI & Chatbots',
    description: 'Advanced conversational AI solutions for customer service, sales, and support automation.',
    icon: MessageSquare,
    category: 'Conversational AI',
    price: 'Starting at $2,500/month',
    features: [
      'Multi-channel chatbot deployment',
      'Voice & text integration',
      'Context-aware conversations',
      'Sentiment analysis',
      'Intent recognition',
      'Knowledge base integration',
      'Human handoff capabilities',
      'Analytics & optimization'
    ],
    benefits: [
      'Reduce support costs by 70%',
      'Improve response time by 90%',
      'Increase customer satisfaction by 40%',
      'Handle 80% of inquiries automatically'
    ],
    marketPrice: '$3,800-8,500/month',
    setupTime: '2-4 weeks',
    targetUsers: 'E-commerce, SaaS, Healthcare, Financial Services'
  },
  {
    id: 8,
    title: 'AI-Powered Content Generation',
    description: 'Intelligent content creation for marketing, documentation, and creative industries.',
    icon: FileText,
    category: 'Content AI',
    price: 'Starting at $1,800/month',
    features: [
      'Automated content writing',
      'Image & video generation',
      'Code generation',
      'Documentation automation',
      'Marketing copy creation',
      'Social media content',
      'Multilingual content',
      'Brand voice consistency'
    ],
    benefits: [
      'Reduce content creation time by 85%',
      'Increase content output by 300%',
      'Maintain brand consistency',
      'Scale content globally'
    ],
    marketPrice: '$2,800-6,500/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Marketing, E-commerce, Media, Software Development'
  },
  {
    id: 9,
    title: 'AI-Powered Recommendation Systems',
    description: 'Intelligent recommendation engines for personalization and cross-selling optimization.',
    icon: Target,
    category: 'Recommendation',
    price: 'Starting at $3,200/month',
    features: [
      'Product recommendations',
      'Content personalization',
      'Cross-selling optimization',
      'Real-time recommendations',
      'A/B testing framework',
      'Cold start problem solving',
      'Multi-armed bandit algorithms',
      'Performance analytics'
    ],
    benefits: [
      'Increase conversion rates by 35%',
      'Boost average order value by 25%',
      'Improve user engagement by 50%',
      'Reduce bounce rates by 40%'
    ],
    marketPrice: '$4,500-10,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'E-commerce, Streaming, News, Social Media'
  },
  {
    id: 10,
    title: 'AI-Powered Process Automation',
    description: 'Intelligent automation for business processes, workflows, and decision-making.',
    icon: Zap,
    category: 'Automation',
    price: 'Starting at $2,800/month',
    features: [
      'Intelligent document processing',
      'Workflow automation',
      'Decision automation',
      'Process mining & optimization',
      'Exception handling',
      'Integration automation',
      'Compliance monitoring',
      'Performance analytics'
    ],
    benefits: [
      'Reduce processing time by 75%',
      'Eliminate manual errors by 90%',
      'Increase process efficiency by 60%',
      'Lower operational costs by 45%'
    ],
    marketPrice: '$4,200-9,500/month',
    setupTime: '3-4 weeks',
    targetUsers: 'Finance, Healthcare, Legal, Manufacturing'
  },
  {
    id: 11,
    title: 'AI-Powered Healthcare Diagnostics',
    description: 'Medical AI solutions for diagnosis, treatment planning, and patient care optimization.',
    icon: Heart,
    category: 'Healthcare AI',
    price: 'Starting at $5,500/month',
    features: [
      'Medical image analysis',
      'Diagnostic assistance',
      'Treatment recommendation',
      'Drug discovery support',
      'Patient monitoring',
      'Clinical decision support',
      'Medical record analysis',
      'Predictive health analytics'
    ],
    benefits: [
      'Improve diagnostic accuracy by 30%',
      'Reduce diagnosis time by 50%',
      'Lower healthcare costs by 25%',
      'Improve patient outcomes by 40%'
    ],
    marketPrice: '$8,000-20,000/month',
    setupTime: '6-10 weeks',
    targetUsers: 'Hospitals, Clinics, Pharmaceutical, Medical Research'
  },
  {
    id: 12,
    title: 'AI-Powered Financial Services',
    description: 'Intelligent financial solutions for trading, risk management, and fraud detection.',
    icon: DollarSign,
    category: 'Fintech AI',
    price: 'Starting at $4,800/month',
    features: [
      'Algorithmic trading',
      'Credit risk assessment',
      'Fraud detection',
      'Anti-money laundering',
      'Portfolio optimization',
      'Market analysis',
      'Regulatory compliance',
      'Real-time monitoring'
    ],
    benefits: [
      'Improve trading performance by 25%',
      'Reduce fraud losses by 80%',
      'Lower risk exposure by 40%',
      'Increase compliance efficiency by 60%'
    ],
    marketPrice: '$7,000-18,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Banks, Investment Firms, Fintech, Insurance'
  },
  {
    id: 13,
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with predictive analytics and automation.',
    icon: Truck,
    category: 'Supply Chain',
    price: 'Starting at $3,500/month',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Supplier risk assessment',
      'Quality prediction',
      'Cost optimization',
      'Sustainability tracking',
      'Real-time visibility'
    ],
    benefits: [
      'Reduce inventory costs by 30%',
      'Improve delivery times by 25%',
      'Lower supply chain risks by 50%',
      'Increase visibility by 90%'
    ],
    marketPrice: '$5,500-12,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Manufacturing, Retail, Logistics, Food & Beverage'
  },
  {
    id: 14,
    title: 'AI-Powered Education & Training',
    description: 'Intelligent learning systems with personalized education and skill assessment.',
    icon: GraduationCap,
    category: 'EdTech AI',
    price: 'Starting at $2,200/month',
    features: [
      'Personalized learning paths',
      'Adaptive assessments',
      'Intelligent tutoring',
      'Skill gap analysis',
      'Learning analytics',
      'Content recommendation',
      'Automated grading',
      'Progress tracking'
    ],
    benefits: [
      'Improve learning outcomes by 40%',
      'Reduce training time by 35%',
      'Increase engagement by 60%',
      'Personalize education at scale'
    ],
    marketPrice: '$3,500-8,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Educational Institutions, Corporate Training, Online Learning'
  },
  {
    id: 15,
    title: 'AI-Powered Real Estate Analytics',
    description: 'Intelligent property analysis, valuation, and market prediction solutions.',
    icon: Home,
    category: 'Real Estate AI',
    price: 'Starting at $2,800/month',
    features: [
      'Property valuation',
      'Market trend analysis',
      'Investment recommendations',
      'Risk assessment',
      'Tenant screening',
      'Property management',
      'Price prediction',
      'Market forecasting'
    ],
    benefits: [
      'Improve valuation accuracy by 25%',
      'Reduce analysis time by 70%',
      'Increase investment returns by 20%',
      'Lower risk exposure by 35%'
    ],
    marketPrice: '$4,200-9,500/month',
    setupTime: '3-4 weeks',
    targetUsers: 'Real Estate Agencies, Property Management, Investors'
  },
  {
    id: 16,
    title: 'AI-Powered Gaming & Entertainment',
    description: 'Intelligent gaming solutions with procedural content generation and player analytics.',
    icon: Gamepad2,
    category: 'Gaming AI',
    price: 'Starting at $3,200/month',
    features: [
      'Procedural content generation',
      'Player behavior analysis',
      'Dynamic difficulty adjustment',
      'NPC intelligence',
      'Game balancing',
      'Cheat detection',
      'Personalized experiences',
      'Performance optimization'
    ],
    benefits: [
      'Increase player engagement by 50%',
      'Reduce development time by 40%',
      'Improve game balance by 60%',
      'Lower maintenance costs by 30%'
    ],
    marketPrice: '$4,800-12,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Game Studios, Entertainment, Esports, Mobile Gaming'
  },
  {
    id: 17,
    title: 'AI-Powered Environmental Monitoring',
    description: 'Intelligent environmental solutions for climate monitoring and sustainability.',
    icon: TreePine,
    category: 'Environmental AI',
    price: 'Starting at $2,500/month',
    features: [
      'Climate data analysis',
      'Pollution monitoring',
      'Wildlife tracking',
      'Resource optimization',
      'Sustainability metrics',
      'Environmental forecasting',
      'Carbon footprint analysis',
      'Green energy optimization'
    ],
    benefits: [
      'Improve environmental monitoring by 80%',
      'Reduce resource waste by 35%',
      'Lower carbon footprint by 25%',
      'Enable sustainable operations'
    ],
    marketPrice: '$3,800-8,500/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Government, Environmental Agencies, Energy, Agriculture'
  },
  {
    id: 18,
    title: 'AI-Powered Legal Technology',
    description: 'Intelligent legal solutions for document analysis, contract review, and case prediction.',
    icon: FileText,
    category: 'Legal AI',
    price: 'Starting at $4,000/month',
    features: [
      'Document analysis & review',
      'Contract intelligence',
      'Legal research automation',
      'Case outcome prediction',
      'Compliance monitoring',
      'Due diligence automation',
      'Legal writing assistance',
      'Risk assessment'
    ],
    benefits: [
      'Reduce review time by 80%',
      'Improve accuracy by 60%',
      'Lower legal costs by 45%',
      'Increase compliance by 90%'
    ],
    marketPrice: '$6,000-15,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Law Firms, Corporate Legal, Government, Legal Tech'
  },
  {
    id: 19,
    title: 'AI-Powered Agriculture & Farming',
    description: 'Intelligent agricultural solutions for crop monitoring, yield prediction, and farm optimization.',
    icon: Sprout,
    category: 'AgTech AI',
    price: 'Starting at $2,800/month',
    features: [
      'Crop monitoring & analysis',
      'Yield prediction',
      'Pest & disease detection',
      'Soil analysis',
      'Weather prediction',
      'Irrigation optimization',
      'Livestock monitoring',
      'Supply chain tracking'
    ],
    benefits: [
      'Increase crop yields by 25%',
      'Reduce water usage by 30%',
      'Lower pesticide use by 40%',
      'Improve farm efficiency by 50%'
    ],
    marketPrice: '$4,200-10,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Farms, Agricultural Companies, Food Producers, AgTech'
  },
  {
    id: 20,
    title: 'AI-Powered Energy Management',
    description: 'Intelligent energy solutions for optimization, forecasting, and smart grid management.',
    icon: Zap,
    category: 'Energy AI',
    price: 'Starting at $3,500/month',
    features: [
      'Energy consumption optimization',
      'Demand forecasting',
      'Smart grid management',
      'Renewable energy integration',
      'Load balancing',
      'Predictive maintenance',
      'Carbon footprint tracking',
      'Energy trading optimization'
    ],
    benefits: [
      'Reduce energy costs by 30%',
      'Improve efficiency by 40%',
      'Lower carbon emissions by 25%',
      'Increase renewable energy usage by 50%'
    ],
    marketPrice: '$5,500-12,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Utilities, Energy Companies, Manufacturing, Smart Cities'
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
  { name: "Robotics", count: aiServices.filter(s => s.category === "Robotics").length },
  { name: "Security", count: aiServices.filter(s => s.category === "Security").length },
  { name: "Conversational AI", count: aiServices.filter(s => s.category === "Conversational AI").length },
  { name: "Content AI", count: aiServices.filter(s => s.category === "Content AI").length },
  { name: "Recommendation", count: aiServices.filter(s => s.category === "Recommendation").length },
  { name: "Automation", count: aiServices.filter(s => s.category === "Automation").length },
  { name: "Healthcare AI", count: aiServices.filter(s => s.category === "Healthcare AI").length },
  { name: "Fintech AI", count: aiServices.filter(s => s.category === "Fintech AI").length },
  { name: "Supply Chain", count: aiServices.filter(s => s.category === "Supply Chain").length },
  { name: "EdTech AI", count: aiServices.filter(s => s.category === "EdTech AI").length },
  { name: "Real Estate AI", count: aiServices.filter(s => s.category === "Real Estate AI").length },
  { name: "Gaming AI", count: aiServices.filter(s => s.category === "Gaming AI").length },
  { name: "Environmental AI", count: aiServices.filter(s => s.category === "Environmental AI").length },
  { name: "Legal AI", count: aiServices.filter(s => s.category === "Legal AI").length },
  { name: "AgTech AI", count: aiServices.filter(s => s.category === "AgTech AI").length },
  { name: "Energy AI", count: aiServices.filter(s => s.category === "Energy AI").length }
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