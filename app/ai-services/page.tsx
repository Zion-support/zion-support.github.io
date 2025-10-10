'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  Zap, 
  BarChart3, 
  Box, 
  Mic, 
  Shield, 
  TrendingUp, 
  Target, 
  FileText, 
  Search, 
  Phone, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Globe, 
  Database, 
  Users, 
  Settings,
  Cpu,
  Bot,
  Sparkles,
  Layers,
  Workflow,
  Smartphone,
  Cloud,
  Lock,
  Code,
  Palette,
  Headphones,
  Mail,
  MapPin,
  DollarSign,
  PieChart,
  Camera,
  Video,
  Music,
  BookOpen,
  ShoppingCart,
  Briefcase,
  Home,
  Car,
  Plane,
  Heart,
  Gamepad2,
  Lightbulb,
  Wrench,
  Award,
  Timer,
  Download,
  Upload,
  Share2,
  Edit3,
  Trash2,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface AIService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  popular: boolean;
  marketPrice?: string;
  benefits: string[];
  setupTime: string;
  freeTrial: string;
  useCases: string[];
}

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 12;

  const aiServices: AIService[] = [
    // Core AI Services
    {
      id: '1',
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Strategic AI consulting to identify opportunities, develop AI roadmaps, and plan your digital transformation journey with comprehensive ROI analysis',
      features: [
        'AI readiness assessment and technology audit',
        'Custom AI strategy development and roadmap creation',
        'ROI analysis and business case development',
        'Vendor evaluation and technology selection',
        'Implementation planning and project management',
        'Change management and team training',
        'Ongoing AI governance and optimization',
        'Compliance and ethical AI framework development'
      ],
      price: '$5,000 - $25,000',
      category: 'Consulting',
      popular: true,
      marketPrice: '$10,000 - $50,000',
      benefits: ['Accelerate AI adoption by 300%', 'Reduce implementation risks', 'Maximize ROI', 'Strategic guidance'],
      setupTime: '2-8 weeks',
      freeTrial: '1 week consultation',
      useCases: ['Digital transformation', 'AI roadmap planning', 'Technology assessment', 'ROI optimization']
    },
    {
      id: '2',
      icon: Code,
      title: 'Custom AI Development',
      description: 'End-to-end custom AI solution development including machine learning models, neural networks, and AI applications tailored to your specific business needs',
      features: [
        'Custom machine learning model development',
        'Deep learning and neural network implementation',
        'AI application development and deployment',
        'Data pipeline creation and optimization',
        'Model training and fine-tuning',
        'API development and integration',
        'Testing, validation, and performance optimization',
        'Ongoing maintenance and model updates'
      ],
      price: '$15,000 - $100,000',
      category: 'Development',
      popular: true,
      marketPrice: '$30,000 - $200,000',
      benefits: ['Custom solutions for unique needs', 'Competitive advantage', 'Scalable architecture', 'Expert development'],
      setupTime: '3-12 months',
      freeTrial: '2 weeks proof of concept',
      useCases: ['Custom AI applications', 'Machine learning models', 'Neural networks', 'AI integration']
    },
    {
      id: '3',
      icon: TrendingUp,
      title: 'AI Model Optimization',
      description: 'Optimize existing AI systems for better performance, accuracy, and efficiency with advanced techniques like model pruning, quantization, and hyperparameter tuning',
      features: [
        'Performance analysis and bottleneck identification',
        'Model pruning and compression techniques',
        'Quantization and optimization algorithms',
        'Hyperparameter tuning and optimization',
        'A/B testing and model comparison',
        'Continuous monitoring and improvement',
        'Cost optimization and resource management',
        'Documentation and best practices'
      ],
      price: '$3,000 - $15,000',
      category: 'Optimization',
      popular: false,
      marketPrice: '$5,000 - $30,000',
      benefits: ['Improve performance by 50%', 'Reduce costs by 40%', 'Better accuracy', 'Faster inference'],
      setupTime: '2-6 weeks',
      freeTrial: '1 week analysis',
      useCases: ['Model optimization', 'Performance improvement', 'Cost reduction', 'Efficiency gains']
    },
    {
      id: '4',
      icon: Target,
      title: 'AI Training & Education',
      description: 'Comprehensive AI training programs for your team including workshops, certification courses, and hands-on project mentoring',
      features: [
        'Custom AI training curriculum development',
        'Hands-on workshops and practical sessions',
        'Certification programs and assessments',
        'One-on-one mentoring and coaching',
        'Team-specific AI implementation training',
        'Ongoing support and knowledge transfer',
        'Training materials and documentation',
        'Progress tracking and skill assessment'
      ],
      price: '$2,000 - $10,000',
      category: 'Training',
      popular: false,
      marketPrice: '$5,000 - $20,000',
      benefits: ['Upskill your team', 'Faster AI adoption', 'Reduced dependency', 'Knowledge transfer'],
      setupTime: '1-4 weeks',
      freeTrial: '1 day workshop',
      useCases: ['Team training', 'Skill development', 'AI education', 'Knowledge transfer']
    },
    {
      id: '5',
      icon: Eye,
      title: 'Computer Vision Solutions',
      description: 'Advanced computer vision applications including object detection, image recognition, facial recognition, and medical imaging analysis',
      features: [
        'Object detection and recognition systems',
        'Facial recognition and biometric authentication',
        'Medical imaging analysis and diagnosis',
        'Quality control and defect detection',
        'Autonomous vehicle vision systems',
        'Augmented reality applications',
        'Video analytics and surveillance',
        'Real-time image processing'
      ],
      price: '$10,000 - $50,000',
      category: 'Computer Vision',
      popular: true,
      marketPrice: '$20,000 - $100,000',
      benefits: ['Automate visual tasks', 'Improve accuracy', 'Real-time processing', 'Cost reduction'],
      setupTime: '2-8 months',
      freeTrial: '2 weeks pilot',
      useCases: ['Quality control', 'Medical imaging', 'Security systems', 'Autonomous vehicles']
    },
    {
      id: '6',
      icon: MessageSquare,
      title: 'NLP & Chatbot Development',
      description: 'Natural language processing solutions including chatbots, voice assistants, sentiment analysis, and language translation systems',
      features: [
        'Advanced chatbot and conversational AI',
        'Voice assistants and speech recognition',
        'Sentiment analysis and emotion detection',
        'Language translation and localization',
        'Text analysis and content generation',
        'Document processing and extraction',
        'Customer service automation',
        'Multi-language support'
      ],
      price: '$8,000 - $40,000',
      category: 'NLP',
      popular: true,
      marketPrice: '$15,000 - $80,000',
      benefits: ['Improve customer experience', 'Automate support', '24/7 availability', 'Multi-language'],
      setupTime: '2-6 months',
      freeTrial: '2 weeks demo',
      useCases: ['Customer support', 'Voice assistants', 'Content analysis', 'Language translation']
    },
    {
      id: '7',
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'AI-powered predictive analytics for forecasting, demand planning, risk assessment, and business intelligence with real-time insights',
      features: [
        'Demand forecasting and planning',
        'Risk assessment and management',
        'Customer behavior prediction',
        'Financial modeling and analysis',
        'Market trend analysis',
        'Anomaly detection and alerting',
        'Real-time dashboard and reporting',
        'Machine learning model deployment'
      ],
      price: '$12,000 - $60,000',
      category: 'Analytics',
      popular: true,
      marketPrice: '$25,000 - $120,000',
      benefits: ['Improve forecasting accuracy', 'Reduce risks', 'Better decisions', 'Real-time insights'],
      setupTime: '3-9 months',
      freeTrial: '3 weeks pilot',
      useCases: ['Demand forecasting', 'Risk management', 'Customer analytics', 'Financial modeling']
    },
    {
      id: '8',
      icon: FileText,
      title: 'AI Document Processing',
      description: 'Intelligent document processing including OCR, data extraction, automated classification, and workflow automation for business documents',
      features: [
        'Advanced OCR and text extraction',
        'Document classification and routing',
        'Data extraction and validation',
        'Automated workflow and approval',
        'Compliance and audit trails',
        'Integration with existing systems',
        'Multi-format document support',
        'Real-time processing and analysis'
      ],
      price: '$6,000 - $30,000',
      category: 'Document Processing',
      popular: false,
      marketPrice: '$12,000 - $60,000',
      benefits: ['Process documents 10x faster', 'Reduce errors by 95%', 'Automate workflows', 'Compliance assurance'],
      setupTime: '2-5 months',
      freeTrial: '2 weeks pilot',
      useCases: ['Invoice processing', 'Contract analysis', 'Compliance automation', 'Data extraction']
    },
    {
      id: '9',
      icon: Heart,
      title: 'AI Healthcare Solutions',
      description: 'HIPAA-compliant AI solutions for medical imaging, drug discovery, patient care optimization, and clinical decision support',
      features: [
        'Medical imaging analysis and diagnosis',
        'Drug discovery and development',
        'Patient care optimization',
        'Clinical decision support systems',
        'Electronic health record analysis',
        'Telemedicine and remote monitoring',
        'Predictive health analytics',
        'HIPAA compliance and security'
      ],
      price: '$25,000 - $150,000',
      category: 'Healthcare',
      popular: true,
      marketPrice: '$50,000 - $300,000',
      benefits: ['Improve patient outcomes', 'Reduce diagnostic errors', 'Accelerate drug discovery', 'Cost savings'],
      setupTime: '6-18 months',
      freeTrial: '1 month pilot',
      useCases: ['Medical imaging', 'Drug discovery', 'Patient care', 'Clinical support']
    },
    {
      id: '10',
      icon: DollarSign,
      title: 'AI Financial Services',
      description: 'Advanced AI solutions for fraud detection, risk assessment, algorithmic trading, and financial analysis with regulatory compliance',
      features: [
        'Fraud detection and prevention',
        'Risk assessment and management',
        'Algorithmic trading systems',
        'Credit scoring and underwriting',
        'Regulatory compliance automation',
        'Financial forecasting and analysis',
        'Anti-money laundering (AML)',
        'Real-time transaction monitoring'
      ],
      price: '$20,000 - $100,000',
      category: 'Financial',
      popular: true,
      marketPrice: '$40,000 - $200,000',
      benefits: ['Reduce fraud by 90%', 'Improve risk management', 'Increase trading profits', 'Compliance automation'],
      setupTime: '4-12 months',
      freeTrial: '1 month pilot',
      useCases: ['Fraud detection', 'Risk management', 'Algorithmic trading', 'Compliance']
    },
    {
      id: '11',
      icon: ShoppingCart,
      title: 'AI E-commerce Solutions',
      description: 'Intelligent e-commerce platform with AI-powered personalization, recommendation engines, dynamic pricing, and customer analytics',
      features: [
        'AI-powered product recommendations',
        'Dynamic pricing optimization',
        'Customer behavior analysis',
        'Inventory management and forecasting',
        'Personalized shopping experiences',
        'Chatbots and virtual assistants',
        'Visual search and image recognition',
        'Multi-channel integration'
      ],
      price: '$15,000 - $75,000',
      category: 'E-commerce',
      popular: false,
      marketPrice: '$30,000 - $150,000',
      benefits: ['Increase sales by 35%', 'Improve customer experience', 'Optimize pricing', 'Reduce cart abandonment'],
      setupTime: '3-8 months',
      freeTrial: '2 weeks pilot',
      useCases: ['Product recommendations', 'Dynamic pricing', 'Customer analytics', 'Personalization']
    },
    {
      id: '12',
      icon: Car,
      title: 'AI Autonomous Systems',
      description: 'Development of autonomous systems including self-driving vehicles, robotics, and intelligent automation for industrial applications',
      features: [
        'Autonomous vehicle development',
        'Robotic process automation',
        'Industrial automation systems',
        'Sensor fusion and perception',
        'Path planning and navigation',
        'Safety and fail-safe systems',
        'Real-time decision making',
        'Integration with existing infrastructure'
      ],
      price: '$50,000 - $500,000',
      category: 'Autonomous Systems',
      popular: false,
      marketPrice: '$100,000 - $1,000,000',
      benefits: ['Automate complex tasks', 'Improve safety', 'Reduce costs', 'Increase efficiency'],
      setupTime: '6-24 months',
      freeTrial: '1 month pilot',
      useCases: ['Autonomous vehicles', 'Industrial robots', 'Smart manufacturing', 'Automation']
    },
    {
      id: '13',
      icon: Camera,
      title: 'AI Content Generation',
      description: 'AI-powered content creation including text generation, image synthesis, video production, and multimedia content for marketing and education',
      features: [
        'Text generation and content writing',
        'Image synthesis and generation',
        'Video creation and editing',
        'Audio generation and voice synthesis',
        'Multimedia content production',
        'Brand consistency enforcement',
        'Content optimization and A/B testing',
        'Multi-language content creation'
      ],
      price: '$5,000 - $25,000',
      category: 'Content Generation',
      popular: true,
      marketPrice: '$10,000 - $50,000',
      benefits: ['Create content 10x faster', 'Reduce costs by 70%', 'Maintain brand consistency', 'Scale content production'],
      setupTime: '1-3 months',
      freeTrial: '1 week trial',
      useCases: ['Marketing content', 'Educational materials', 'Social media', 'Documentation']
    },
    {
      id: '14',
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Advanced AI-powered cybersecurity solutions including threat detection, behavioral analysis, and automated incident response',
      features: [
        'Threat detection and prevention',
        'Behavioral analysis and anomaly detection',
        'Automated incident response',
        'Vulnerability assessment and management',
        'Security monitoring and alerting',
        'Compliance and audit automation',
        'Penetration testing and red teaming',
        'Security awareness training'
      ],
      price: '$10,000 - $50,000',
      category: 'Cybersecurity',
      popular: true,
      marketPrice: '$20,000 - $100,000',
      benefits: ['Detect threats 5x faster', 'Reduce false positives', 'Automate response', 'Improve security posture'],
      setupTime: '2-6 months',
      freeTrial: '2 weeks pilot',
      useCases: ['Threat detection', 'Incident response', 'Vulnerability management', 'Compliance']
    },
    {
      id: '15',
      icon: Users,
      title: 'AI HR & Talent Management',
      description: 'AI-powered human resources solutions including candidate screening, employee analytics, performance management, and talent optimization',
      features: [
        'AI-powered candidate screening',
        'Employee performance analytics',
        'Talent acquisition optimization',
        'Workforce planning and forecasting',
        'Employee engagement analysis',
        'Skills gap identification',
        'Retention prediction and prevention',
        'Diversity and inclusion analytics'
      ],
      price: '$8,000 - $40,000',
      category: 'HR',
      popular: false,
      marketPrice: '$15,000 - $80,000',
      benefits: ['Improve hiring quality', 'Reduce bias', 'Optimize workforce', 'Increase retention'],
      setupTime: '2-5 months',
      freeTrial: '2 weeks pilot',
      useCases: ['Talent acquisition', 'Performance management', 'Workforce planning', 'Employee analytics']
    },
    {
      id: '16',
      icon: Globe,
      title: 'AI Marketing Automation',
      description: 'Comprehensive AI marketing platform with automated campaigns, personalization, customer segmentation, and performance optimization',
      features: [
        'Automated campaign management',
        'Customer segmentation and targeting',
        'Personalized content delivery',
        'A/B testing and optimization',
        'Lead scoring and qualification',
        'Email and social media automation',
        'Performance analytics and reporting',
        'Cross-channel campaign orchestration'
      ],
      price: '$7,000 - $35,000',
      category: 'Marketing',
      popular: true,
      marketPrice: '$15,000 - $70,000',
      benefits: ['Increase conversions by 50%', 'Reduce marketing costs', 'Improve targeting', 'Automate campaigns'],
      setupTime: '2-4 months',
      freeTrial: '2 weeks trial',
      useCases: ['Campaign automation', 'Customer segmentation', 'Personalization', 'Lead generation']
    },
    {
      id: '17',
      icon: Database,
      title: 'AI Data Analytics',
      description: 'Advanced AI data analytics platform with machine learning insights, predictive modeling, and automated business intelligence',
      features: [
        'Machine learning model development',
        'Predictive analytics and forecasting',
        'Automated data processing',
        'Real-time analytics and dashboards',
        'Anomaly detection and alerting',
        'Data visualization and reporting',
        'Integration with data sources',
        'Custom analytics solutions'
      ],
      price: '$12,000 - $60,000',
      category: 'Data Analytics',
      popular: true,
      marketPrice: '$25,000 - $120,000',
      benefits: ['Unlock data insights', 'Improve forecasting', 'Automate analysis', 'Real-time intelligence'],
      setupTime: '3-8 months',
      freeTrial: '3 weeks pilot',
      useCases: ['Business intelligence', 'Predictive analytics', 'Data visualization', 'Anomaly detection']
    },
    {
      id: '18',
      icon: Smartphone,
      title: 'AI Mobile Applications',
      description: 'Custom mobile applications with integrated AI features including voice recognition, image processing, and intelligent automation',
      features: [
        'AI-powered mobile app development',
        'Voice recognition and NLP',
        'Image and video processing',
        'Location-based AI services',
        'Push notification optimization',
        'Offline AI capabilities',
        'Cross-platform development',
        'App store optimization'
      ],
      price: '$15,000 - $75,000',
      category: 'Mobile Development',
      popular: false,
      marketPrice: '$30,000 - $150,000',
      benefits: ['Enhanced user experience', 'Intelligent features', 'Competitive advantage', 'Mobile optimization'],
      setupTime: '3-9 months',
      freeTrial: '2 weeks prototype',
      useCases: ['Mobile AI apps', 'Voice assistants', 'Image recognition', 'Smart automation']
    },
    {
      id: '19',
      icon: Cloud,
      title: 'AI Cloud Infrastructure',
      description: 'Scalable AI infrastructure and model deployment on cloud platforms with auto-scaling, monitoring, and cost optimization',
      features: [
        'AI model deployment and hosting',
        'Auto-scaling and load balancing',
        'GPU optimization and management',
        'Data pipeline automation',
        'Model versioning and management',
        'Monitoring and alerting',
        'Cost optimization and management',
        'Security and compliance'
      ],
      price: '$5,000 - $30,000',
      category: 'Infrastructure',
      popular: false,
      marketPrice: '$10,000 - $60,000',
      benefits: ['Scalable infrastructure', 'Cost optimization', 'High availability', 'Easy deployment'],
      setupTime: '1-3 months',
      freeTrial: '1 week trial',
      useCases: ['Model deployment', 'Cloud hosting', 'Auto-scaling', 'Infrastructure management']
    },
    {
      id: '20',
      icon: Workflow,
      title: 'AI Process Automation',
      description: 'Intelligent business process automation with AI decision-making, workflow optimization, and exception handling',
      features: [
        'Intelligent workflow automation',
        'AI decision-making and routing',
        'Exception handling and escalation',
        'Process optimization and improvement',
        'Integration with existing systems',
        'Monitoring and analytics',
        'Custom automation rules',
        'Compliance and audit trails'
      ],
      price: '$8,000 - $40,000',
      category: 'Automation',
      popular: true,
      marketPrice: '$15,000 - $80,000',
      benefits: ['Automate complex processes', 'Reduce errors', 'Improve efficiency', 'Cost savings'],
      setupTime: '2-6 months',
      freeTrial: '2 weeks pilot',
      useCases: ['Process automation', 'Workflow optimization', 'Exception handling', 'System integration']
    }
  ];

  const categories = ['All', 'Consulting', 'Development', 'Optimization', 'Training', 'Computer Vision', 'NLP', 'Analytics', 'Document Processing', 'Healthcare', 'Financial', 'E-commerce', 'Autonomous Systems', 'Content Generation', 'Cybersecurity', 'HR', 'Marketing', 'Data Analytics', 'Mobile Development', 'Infrastructure', 'Automation'];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  const startIndex = (currentPage - 1) * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const currentServices = filteredServices.slice(startIndex, endIndex);

  const stats = [
    { icon: <Brain className="w-8 h-8 text-blue-500" />, value: '500+', label: 'AI Models Deployed' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '95%', label: 'Accuracy Rate' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '60%', label: 'Cost Reduction' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and AI consulting. Transform your business with our AI expertise." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, AI consulting, artificial intelligence, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, we deliver AI that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/demo"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'All' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All AI Services' : `${selectedCategory} Services`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border ${
                    service.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-purple-400 font-semibold">Our Price:</span>
                        <span className="text-white font-bold text-lg">{service.price}</span>
                      </div>
                      {service.marketPrice && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">Market Price:</span>
                          <span className="text-gray-300 text-sm line-through">{service.marketPrice}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Setup Time:</span>
                        <span className="text-gray-300 text-sm">{service.setupTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Free Trial:</span>
                        <span className="text-green-400 text-sm font-semibold">{service.freeTrial}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                      {service.benefits.length > 3 && (
                        <li className="text-gray-400 text-sm">
                          +{service.benefits.length - 3} more benefits
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <Link 
                      to="/contact"
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="w-full border border-white/20 text-white font-semibold py-2 px-6 rounded-lg hover:bg-white/10 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Previous
                </button>
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-purple-500 text-white'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven expertise and results that drive business success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Expert AI Team</h3>
                <p className="text-gray-300">Certified AI engineers and data scientists with years of experience in enterprise AI solutions.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
                <p className="text-gray-300">Delivering measurable business impact with 95% accuracy rates and 60% cost reduction.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security and compliance with SOC2, GDPR, and HIPAA standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI services can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/consultation"
                  className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIServicesPage;