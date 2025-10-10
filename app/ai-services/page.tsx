'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Zap, Shield, Cloud, Database, BarChart3, Users, 
  MessageSquare, Target, FileText, Video, Image, Code, 
  Settings, Globe, Smartphone, Monitor, Headphones, 
  Camera, Printer, HardDrive, Cpu, MemoryStick, Wrench, 
  Bell, Heart, ThumbsUp, Share2, Download, Upload, 
  Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, 
  Info, HelpCircle, ExternalLink, Bot, Layers, BarChart, 
  PieChart, LineChart, Activity, Sparkles, Atom, 
  DollarSign, Award, Phone, Mail, MapPin, Clock, 
  ArrowRight, Star, TrendingUp, CheckCircle, Calendar,
  Search, Lock, Wifi, Truck, ChefHat, Rocket, Sprout, Scale,
  Stethoscope, GraduationCap, Briefcase, Hammer, Paintbrush,
  Scissors, BookOpen, Calculator, Compass, Navigation as NavIcon,
  TrendingDown, Activity as ActivityIcon, Zap as Lightning,
  Target as Crosshair, Shield as Security, Users as People,
  Star as StarIcon, CheckCircle as CheckIcon, ArrowRight as Arrow,
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

interface AIService {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    setup?: number;
  };
  category: string;
  icon: React.ComponentType<any>;
  popular?: boolean;
  comingSoon?: boolean;
  link: string;
  trial: string;
  roi: string;
  useCases: string[];
  industries: string[];
}

const aiServices: AIService[] = [
  // AI-Powered Business Intelligence
  {
    id: 'ai-business-intelligence',
    name: 'AI Business Intelligence Pro',
    description: 'Transform your data into actionable insights with AI-powered analytics, predictive modeling, and automated reporting.',
    features: [
      'Natural language queries',
      'Automated report generation',
      'Predictive analytics',
      'Real-time dashboards',
      'Data visualization',
      'Anomaly detection',
      'Custom KPI tracking',
      'API integrations'
    ],
    pricing: { monthly: 499, yearly: 4990, setup: 999 },
    category: 'Analytics',
    icon: BarChart3,
    popular: true,
    link: 'https://ziontechgroup.com/ai-business-intelligence',
    trial: '14-day free trial',
    roi: '400% ROI in 6 months',
    useCases: ['Financial forecasting', 'Market analysis', 'Performance optimization', 'Risk assessment'],
    industries: ['Finance', 'Retail', 'Healthcare', 'Manufacturing']
  },
  {
    id: 'ai-predictive-analytics',
    name: 'AI Predictive Analytics Pro',
    description: 'Forecast future trends and behaviors with advanced machine learning models and statistical analysis.',
    features: [
      'Time series forecasting',
      'Customer behavior prediction',
      'Demand forecasting',
      'Risk modeling',
      'Churn prediction',
      'Price optimization',
      'Inventory management',
      'Market trend analysis'
    ],
    pricing: { monthly: 399, yearly: 3990, setup: 799 },
    category: 'Analytics',
    icon: TrendingUp,
    popular: true,
    link: 'https://ziontechgroup.com/ai-predictive-analytics',
    trial: '14-day free trial',
    roi: '350% ROI in 5 months',
    useCases: ['Sales forecasting', 'Customer lifetime value', 'Inventory optimization', 'Risk management'],
    industries: ['E-commerce', 'Finance', 'Supply Chain', 'Insurance']
  },

  // AI Content & Marketing
  {
    id: 'ai-content-generation',
    name: 'AI Content Generation Pro',
    description: 'Create high-quality content at scale with AI-powered writing, editing, and optimization tools.',
    features: [
      'GPT-4 powered content generation',
      'SEO optimization suggestions',
      'Multiple content formats',
      'Brand voice customization',
      'Plagiarism detection',
      'Content calendar integration',
      'Multi-language support',
      'Team collaboration tools'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 0 },
    category: 'Content',
    icon: FileText,
    popular: true,
    link: 'https://ziontechgroup.com/ai-content-generation',
    trial: '7-day free trial',
    roi: '250% ROI in 3 months',
    useCases: ['Blog writing', 'Social media content', 'Email campaigns', 'Product descriptions'],
    industries: ['Marketing', 'E-commerce', 'Publishing', 'Education']
  },
  {
    id: 'ai-video-generation',
    name: 'AI Video Generator Pro',
    description: 'Create professional videos from text prompts with AI-powered video generation and editing.',
    features: [
      'Text-to-video generation',
      'Multiple video styles',
      'Voice synthesis',
      'Background music',
      'Subtitle generation',
      'Brand customization',
      'Batch processing',
      'HD export options'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 499 },
    category: 'Content',
    icon: Video,
    popular: true,
    link: 'https://ziontechgroup.com/ai-video-generator',
    trial: '7-day free trial',
    roi: '300% ROI in 4 months',
    useCases: ['Marketing videos', 'Training content', 'Social media posts', 'Product demos'],
    industries: ['Marketing', 'Education', 'Entertainment', 'Corporate']
  },
  {
    id: 'ai-image-generation',
    name: 'AI Image Generator Pro',
    description: 'Generate stunning images, logos, and graphics using advanced AI technology and custom style training.',
    features: [
      'DALL-E 3 integration',
      'Custom style training',
      'High-resolution output',
      'Batch processing',
      'Commercial license included',
      'API access',
      'Brand consistency tools',
      'Stock photo replacement'
    ],
    pricing: { monthly: 149, yearly: 1490, setup: 0 },
    category: 'Content',
    icon: Image,
    popular: false,
    link: 'https://ziontechgroup.com/ai-image-generator',
    trial: '7-day free trial',
    roi: '200% ROI in 2 months',
    useCases: ['Marketing materials', 'Website graphics', 'Social media images', 'Product photos'],
    industries: ['Design', 'Marketing', 'E-commerce', 'Publishing']
  },

  // AI Customer Experience
  {
    id: 'ai-customer-support',
    name: 'AI Customer Support Pro',
    description: '24/7 intelligent customer support with natural language processing, sentiment analysis, and escalation management.',
    features: [
      '24/7 availability',
      'Multi-language support',
      'Sentiment analysis',
      'Escalation management',
      'Knowledge base integration',
      'Voice and text support',
      'A/B testing capabilities',
      'Custom integrations'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 499 },
    category: 'Customer Support',
    icon: MessageSquare,
    popular: true,
    link: 'https://ziontechgroup.com/ai-customer-support',
    trial: '14-day free trial',
    roi: '350% ROI in 5 months',
    useCases: ['FAQ automation', 'Ticket routing', 'Live chat support', 'Voice assistance'],
    industries: ['E-commerce', 'SaaS', 'Healthcare', 'Financial Services']
  },
  {
    id: 'ai-chatbot-builder',
    name: 'AI Chatbot Builder Pro',
    description: 'Create intelligent chatbots for customer support, sales, and lead generation without coding.',
    features: [
      'Drag-and-drop chatbot builder',
      'Natural language processing',
      'Multi-channel deployment',
      'Analytics and insights',
      'Custom integrations',
      'Voice and text support',
      'A/B testing capabilities',
      '24/7 customer support'
    ],
    pricing: { monthly: 99, yearly: 990, setup: 199 },
    category: 'Customer Support',
    icon: Bot,
    popular: false,
    link: 'https://ziontechgroup.com/ai-chatbot-builder',
    trial: '7-day free trial',
    roi: '150% ROI in 2 months',
    useCases: ['Lead qualification', 'Customer onboarding', 'Support automation', 'Sales assistance'],
    industries: ['E-commerce', 'SaaS', 'Real Estate', 'Healthcare']
  },

  // AI Sales & Marketing
  {
    id: 'ai-sales-automation',
    name: 'AI Sales Automation Pro',
    description: 'Automate your sales process with AI-powered lead scoring, email sequences, and pipeline management.',
    features: [
      'Lead scoring automation',
      'Email sequence optimization',
      'Pipeline management',
      'Sales forecasting',
      'Follow-up automation',
      'CRM integration',
      'Performance analytics',
      'Custom workflows'
    ],
    pricing: { monthly: 249, yearly: 2490, setup: 399 },
    category: 'Sales',
    icon: Target,
    popular: true,
    link: 'https://ziontechgroup.com/ai-sales-automation',
    trial: '14-day free trial',
    roi: '300% ROI in 4 months',
    useCases: ['Lead qualification', 'Email campaigns', 'Pipeline optimization', 'Sales forecasting'],
    industries: ['B2B Sales', 'Real Estate', 'Insurance', 'Financial Services']
  },
  {
    id: 'ai-email-marketing',
    name: 'AI Email Marketing Pro',
    description: 'Intelligent email campaigns with AI-powered personalization, A/B testing, and performance optimization.',
    features: [
      'AI-powered subject line optimization',
      'Dynamic content personalization',
      'Send time optimization',
      'A/B testing automation',
      'Advanced segmentation',
      'Deliverability monitoring',
      'Revenue attribution',
      'Unlimited sends'
    ],
    pricing: { monthly: 179, yearly: 1790, setup: 0 },
    category: 'Marketing',
    icon: Mail,
    popular: false,
    link: 'https://ziontechgroup.com/ai-email-marketing',
    trial: '7-day free trial',
    roi: '200% ROI in 2 months',
    useCases: ['Newsletter campaigns', 'Product promotions', 'Customer retention', 'Lead nurturing'],
    industries: ['E-commerce', 'SaaS', 'Education', 'Healthcare']
  },

  // AI Development & Technical
  {
    id: 'ai-code-assistant',
    name: 'AI Code Assistant Pro',
    description: 'Accelerate development with AI-powered code generation, review, optimization, and security scanning.',
    features: [
      'Code generation',
      'Bug detection',
      'Performance optimization',
      'Code review automation',
      'Documentation generation',
      'Test case creation',
      'Security scanning',
      'Multi-language support'
    ],
    pricing: { monthly: 149, yearly: 1490, setup: 199 },
    category: 'Development',
    icon: Code,
    popular: false,
    link: 'https://ziontechgroup.com/ai-code-assistant',
    trial: '7-day free trial',
    roi: '250% ROI in 3 months',
    useCases: ['Code generation', 'Bug fixing', 'Code review', 'Documentation'],
    industries: ['Software Development', 'Fintech', 'E-commerce', 'SaaS']
  },
  {
    id: 'ai-api-management',
    name: 'AI API Management Pro',
    description: 'Intelligent API management with monitoring, optimization, security, and automated documentation generation.',
    features: [
      'API monitoring',
      'Performance optimization',
      'Security management',
      'Documentation generation',
      'Rate limiting',
      'Analytics dashboard',
      'Integration testing',
      'Version control'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 299 },
    category: 'Development',
    icon: Cloud,
    popular: false,
    link: 'https://ziontechgroup.com/ai-api-management',
    trial: '7-day free trial',
    roi: '200% ROI in 3 months',
    useCases: ['API monitoring', 'Performance optimization', 'Security management', 'Documentation'],
    industries: ['SaaS', 'Fintech', 'E-commerce', 'IoT']
  },

  // AI Security & Compliance
  {
    id: 'ai-cybersecurity',
    name: 'AI Cybersecurity Pro',
    description: 'Protect your business with AI-powered threat detection, security monitoring, and automated incident response.',
    features: [
      'Real-time threat detection',
      'Anomaly identification',
      'Automated incident response',
      'Compliance monitoring',
      'Vulnerability scanning',
      'Security reporting',
      'Team notifications',
      'Integration with security tools'
    ],
    pricing: { monthly: 399, yearly: 3990, setup: 799 },
    category: 'Security',
    icon: Shield,
    popular: true,
    link: 'https://ziontechgroup.com/ai-cybersecurity',
    trial: '14-day free trial',
    roi: '400% ROI in 6 months',
    useCases: ['Threat detection', 'Incident response', 'Compliance monitoring', 'Vulnerability management'],
    industries: ['Financial Services', 'Healthcare', 'Government', 'E-commerce']
  },
  {
    id: 'ai-fraud-detection',
    name: 'AI Fraud Detection Pro',
    description: 'Detect and prevent fraudulent activities with AI-powered pattern recognition and real-time monitoring.',
    features: [
      'Real-time fraud detection',
      'Pattern recognition',
      'Risk scoring',
      'Transaction monitoring',
      'Behavioral analysis',
      'Alert management',
      'False positive reduction',
      'Integration APIs'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 599 },
    category: 'Security',
    icon: Lock,
    popular: false,
    link: 'https://ziontechgroup.com/ai-fraud-detection',
    trial: '14-day free trial',
    roi: '350% ROI in 5 months',
    useCases: ['Payment fraud', 'Identity theft', 'Account takeover', 'Transaction monitoring'],
    industries: ['Financial Services', 'E-commerce', 'Insurance', 'Gaming']
  },

  // AI Healthcare & Life Sciences
  {
    id: 'ai-healthcare',
    name: 'AI Healthcare Pro',
    description: 'Revolutionize healthcare with AI-powered diagnostics, treatment recommendations, and patient monitoring.',
    features: [
      'Medical image analysis',
      'Diagnostic assistance',
      'Treatment recommendations',
      'Patient monitoring',
      'Drug discovery support',
      'Clinical trial optimization',
      'Electronic health records',
      'HIPAA compliance'
    ],
    pricing: { monthly: 999, yearly: 9990, setup: 1999 },
    category: 'Healthcare',
    icon: Stethoscope,
    popular: true,
    link: 'https://ziontechgroup.com/ai-healthcare',
    trial: '30-day free trial',
    roi: '500% ROI in 12 months',
    useCases: ['Medical imaging', 'Diagnosis support', 'Treatment planning', 'Patient monitoring'],
    industries: ['Hospitals', 'Clinics', 'Pharmaceuticals', 'Medical Devices']
  },
  {
    id: 'ai-drug-discovery',
    name: 'AI Drug Discovery Pro',
    description: 'Accelerate drug discovery with AI-powered molecular analysis, compound screening, and clinical trial optimization.',
    features: [
      'Molecular analysis',
      'Compound screening',
      'Clinical trial optimization',
      'Drug interaction prediction',
      'Side effect analysis',
      'Patent analysis',
      'Regulatory compliance',
      'Research collaboration'
    ],
    pricing: { monthly: 1999, yearly: 19990, setup: 4999 },
    category: 'Healthcare',
    icon: Atom,
    popular: false,
    link: 'https://ziontechgroup.com/ai-drug-discovery',
    trial: '60-day free trial',
    roi: '1000% ROI in 24 months',
    useCases: ['Drug development', 'Clinical trials', 'Molecular research', 'Patent analysis'],
    industries: ['Pharmaceuticals', 'Biotech', 'Research Institutions', 'Medical Devices']
  },

  // AI Financial Services
  {
    id: 'ai-fintech',
    name: 'AI Fintech Pro',
    description: 'Transform financial services with AI-powered risk assessment, algorithmic trading, and fraud prevention.',
    features: [
      'Risk assessment',
      'Algorithmic trading',
      'Fraud prevention',
      'Credit scoring',
      'Portfolio optimization',
      'Regulatory compliance',
      'Real-time monitoring',
      'API integrations'
    ],
    pricing: { monthly: 799, yearly: 7990, setup: 1499 },
    category: 'Finance',
    icon: DollarSign,
    popular: true,
    link: 'https://ziontechgroup.com/ai-fintech',
    trial: '14-day free trial',
    roi: '400% ROI in 6 months',
    useCases: ['Risk management', 'Algorithmic trading', 'Credit assessment', 'Portfolio management'],
    industries: ['Banks', 'Investment Firms', 'Insurance', 'Fintech Startups']
  },
  {
    id: 'ai-insurance',
    name: 'AI Insurance Pro',
    description: 'Streamline insurance operations with AI-powered claims processing, risk assessment, and fraud detection.',
    features: [
      'Claims processing automation',
      'Risk assessment',
      'Fraud detection',
      'Policy optimization',
      'Customer service automation',
      'Underwriting support',
      'Regulatory compliance',
      'Analytics dashboard'
    ],
    pricing: { monthly: 599, yearly: 5990, setup: 1199 },
    category: 'Finance',
    icon: Scale,
    popular: false,
    link: 'https://ziontechgroup.com/ai-insurance',
    trial: '14-day free trial',
    roi: '300% ROI in 5 months',
    useCases: ['Claims processing', 'Risk assessment', 'Fraud detection', 'Policy optimization'],
    industries: ['Insurance', 'Reinsurance', 'Brokers', 'Risk Management']
  },

  // AI Manufacturing & Industrial
  {
    id: 'ai-manufacturing',
    name: 'AI Manufacturing Pro',
    description: 'Optimize manufacturing processes with AI-powered predictive maintenance, quality control, and supply chain management.',
    features: [
      'Predictive maintenance',
      'Quality control automation',
      'Supply chain optimization',
      'Production planning',
      'Defect detection',
      'Energy optimization',
      'Safety monitoring',
      'IoT integration'
    ],
    pricing: { monthly: 699, yearly: 6990, setup: 1399 },
    category: 'Manufacturing',
    icon: Factory,
    popular: true,
    link: 'https://ziontechgroup.com/ai-manufacturing',
    trial: '14-day free trial',
    roi: '350% ROI in 6 months',
    useCases: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Production planning'],
    industries: ['Automotive', 'Electronics', 'Food & Beverage', 'Pharmaceuticals']
  },
  {
    id: 'ai-supply-chain',
    name: 'AI Supply Chain Pro',
    description: 'Optimize supply chain operations with AI-powered demand forecasting, inventory management, and logistics optimization.',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Logistics optimization',
      'Supplier management',
      'Risk assessment',
      'Cost optimization',
      'Real-time tracking',
      'Integration APIs'
    ],
    pricing: { monthly: 499, yearly: 4990, setup: 999 },
    category: 'Manufacturing',
    icon: Truck,
    popular: false,
    link: 'https://ziontechgroup.com/ai-supply-chain',
    trial: '14-day free trial',
    roi: '300% ROI in 4 months',
    useCases: ['Demand forecasting', 'Inventory management', 'Logistics optimization', 'Supplier management'],
    industries: ['Retail', 'Manufacturing', 'Logistics', 'E-commerce']
  }
];

const categories = [
  'All',
  'Analytics',
  'Content',
  'Customer Support',
  'Sales',
  'Marketing',
  'Development',
  'Security',
  'Healthcare',
  'Finance',
  'Manufacturing'
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Proven ROI',
    description: 'Our AI solutions deliver an average ROI of 300% within 6 months',
    stat: '300%'
  },
  {
    icon: Clock,
    title: 'Quick Implementation',
    description: 'Get up and running in under 48 hours with our streamlined setup',
    stat: '48h'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with 99.9% uptime guarantee and data encryption',
    stat: '99.9%'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: '24/7 support from our team of AI and industry experts',
    stat: '24/7'
  }
];

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    company: 'MedTech Solutions',
    role: 'CTO',
    content: 'AI Healthcare Pro revolutionized our diagnostic capabilities. We saw a 400% improvement in diagnostic accuracy within 3 months.',
    rating: 5,
    avatar: '/images/testimonials/sarah-chen.jpg'
  },
  {
    name: 'Michael Rodriguez',
    company: 'FinTech Innovations',
    role: 'CEO',
    content: 'The AI Fintech solution transformed our risk assessment process. We reduced false positives by 60% and improved accuracy by 80%.',
    rating: 5,
    avatar: '/images/testimonials/michael-rodriguez.jpg'
  },
  {
    name: 'Emily Johnson',
    company: 'Manufacturing Corp',
    role: 'Operations Director',
    content: 'AI Manufacturing Pro helped us reduce downtime by 45% and improve quality control by 70%. The ROI was evident within 2 months.',
    rating: 5,
    avatar: '/images/testimonials/emily-johnson.jpg'
  }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(aiServices);

  useEffect(() => {
    let filtered = aiServices;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase())) ||
        service.useCases.some(useCase => useCase.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-text-advanced">
              AI-Powered Enterprise Solutions
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge AI technology. From predictive analytics to automated workflows, 
              we deliver intelligent solutions that drive real results.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">300% Average ROI</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Industry Leading</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white shadow-lg'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`cyber-card-advanced p-6 hover:scale-105 transition-all duration-300 group relative ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{formatPrice(service.pricing.monthly)}</div>
                    <div className="text-sm text-gray-400">/month</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.useCases.slice(0, 3).map((useCase, index) => (
                      <span key={index} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Trial:</span>
                    <span className="text-cyan-400 font-medium">{service.trial}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Expected ROI:</span>
                    <span className="text-green-400 font-medium">{service.roi}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all block text-center"
                  >
                    Learn More
                  </a>
                  <a
                    href="/contact"
                    className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all block text-center"
                  >
                    Start Free Trial
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-300 mb-8">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results and enterprise-grade AI solutions that deliver measurable business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real customers who have transformed their businesses with our AI solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card-advanced p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-200">
            <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-cyan-200">+1 (302) 464-0950</a></p>
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200">kleber@ziontechgroup.com</a></p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}