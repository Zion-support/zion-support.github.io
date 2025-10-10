'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Shield, 
  Cloud, 
  BarChart3, 
  Target, 
  Rocket,
  TrendingUp,
  MessageSquare,
  Brain,
  Mail,
  Search,
  Code,
  Settings,
  FileText,
  Calendar,
  CheckSquare,
  Globe,
  Smartphone,
  Database,
  Lock,
  PieChart,
  Activity,
  DollarSign,
  Clock,
  Award,
  BookOpen,
  Briefcase,
  Camera,
  CreditCard,
  Edit,
  Eye,
  Filter,
  Headphones,
  Home,
  Image,
  Layers,
  MapPin,
  Monitor,
  Palette,
  Phone,
  Play,
  Plus,
  RefreshCw,
  Save,
  Send,
  ShoppingCart,
  Tag,
  ThumbsUp,
  Tool,
  Trash2,
  Upload,
  Video,
  Wifi,
  X,
  Zap as Lightning
} from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
  marketPrice: string;
  benefits: string[];
  link: string;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts: MicroSaasProduct[] = [
    // AI-Powered Analytics & Business Intelligence
    {
      id: '1',
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence platform with AI-powered insights, predictive analytics, and automated reporting for data-driven decision making.',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard builder',
        'Automated report generation',
        'Multi-source data integration',
        'Mobile app with push notifications',
        'White-label customization',
        'API integration capabilities'
      ],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Analytics',
      marketPrice: '$299/month',
      benefits: ['Increase data insights by 300%', 'Reduce reporting time by 80%', 'Improve decision accuracy by 45%'],
      link: 'https://ziontechgroup.com/ai-analytics-dashboard'
    },
    {
      id: '2',
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: 'Revenue Intelligence Suite',
      description: 'AI-powered revenue optimization platform that analyzes sales patterns, predicts customer behavior, and suggests pricing strategies.',
      features: [
        'Revenue forecasting with 95% accuracy',
        'Customer lifetime value prediction',
        'Dynamic pricing recommendations',
        'Churn prediction and prevention',
        'Sales performance analytics',
        'Commission tracking and optimization',
        'Market trend analysis',
        'ROI calculation tools'
      ],
      price: '$299/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Analytics',
      marketPrice: '$499/month',
      benefits: ['Increase revenue by 25%', 'Reduce churn by 40%', 'Optimize pricing by 15%'],
      link: 'https://ziontechgroup.com/revenue-intelligence'
    },

    // AI-Powered CRM & Sales
    {
      id: '3',
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: 'AI-Powered CRM Elite',
      description: 'Next-generation CRM with AI lead scoring, automated follow-ups, sales forecasting, and intelligent customer insights.',
      features: [
        'AI lead scoring and qualification',
        'Automated email sequences',
        'Sales pipeline optimization',
        'Customer sentiment analysis',
        'Deal probability prediction',
        'Integration with 500+ tools',
        'Advanced reporting suite',
        'Mobile-first design'
      ],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'CRM',
      marketPrice: '$249/month',
      benefits: ['Increase sales by 35%', 'Reduce follow-up time by 60%', 'Improve lead conversion by 50%'],
      link: 'https://ziontechgroup.com/ai-crm-elite'
    },
    {
      id: '4',
      icon: <Target className="w-8 h-8 text-orange-600" />,
      title: 'Lead Generation Engine',
      description: 'Automated lead generation platform that finds, qualifies, and nurtures prospects using AI and machine learning.',
      features: [
        'AI-powered prospect identification',
        'Automated email outreach',
        'LinkedIn and social media scraping',
        'Lead scoring and qualification',
        'A/B testing for campaigns',
        'Integration with major CRMs',
        'Compliance with GDPR/CCPA',
        'Real-time analytics dashboard'
      ],
      price: '$199/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Sales',
      marketPrice: '$399/month',
      benefits: ['Generate 300% more qualified leads', 'Reduce cost per lead by 50%', 'Increase conversion rates by 40%'],
      link: 'https://ziontechgroup.com/lead-generation-engine'
    },

    // AI Content & Marketing
    {
      id: '5',
      icon: <Edit className="w-8 h-8 text-indigo-600" />,
      title: 'AI Content Studio Pro',
      description: 'Complete content creation suite with AI writing, image generation, video editing, and social media automation.',
      features: [
        'AI-powered content writing (50+ templates)',
        'Image generation and editing',
        'Video creation and editing',
        'Social media scheduling',
        'SEO optimization tools',
        'Plagiarism detection',
        'Multi-language support',
        'Brand voice customization'
      ],
      price: '$299/month',
      users: 'Up to 20 users',
      popular: true,
      category: 'Content',
      marketPrice: '$499/month',
      benefits: ['Create content 10x faster', 'Increase engagement by 200%', 'Reduce content costs by 70%'],
      link: 'https://ziontechgroup.com/ai-content-studio'
    },
    {
      id: '6',
      icon: <Mail className="w-8 h-8 text-red-600" />,
      title: 'Email Marketing Automation Pro',
      description: 'Advanced email marketing platform with AI optimization, personalization, and advanced analytics for maximum ROI.',
      features: [
        'AI-powered subject line optimization',
        'Dynamic content personalization',
        'Advanced segmentation',
        'A/B testing automation',
        'Deliverability optimization',
        'Advanced analytics and reporting',
        'Integration with 1000+ tools',
        'Compliance management'
      ],
      price: '$179/month',
      users: 'Up to 25,000 contacts',
      popular: false,
      category: 'Marketing',
      marketPrice: '$299/month',
      benefits: ['Increase open rates by 45%', 'Boost click-through rates by 60%', 'Reduce unsubscribe rates by 30%'],
      link: 'https://ziontechgroup.com/email-marketing-pro'
    },

    // AI Customer Support & Communication
    {
      id: '7',
      icon: <MessageSquare className="w-8 h-8 text-cyan-600" />,
      title: 'AI Customer Support Suite',
      description: 'Intelligent customer support platform with chatbots, sentiment analysis, and automated ticket routing.',
      features: [
        'AI-powered chatbots (50+ languages)',
        'Sentiment analysis and mood detection',
        'Automated ticket routing',
        'Knowledge base management',
        'Live chat integration',
        'Customer satisfaction tracking',
        'Integration with major platforms',
        'Advanced analytics dashboard'
      ],
      price: '$199/month',
      users: 'Up to 200 users',
      popular: true,
      category: 'Support',
      marketPrice: '$399/month',
      benefits: ['Reduce response time by 80%', 'Increase customer satisfaction by 40%', 'Handle 3x more inquiries'],
      link: 'https://ziontechgroup.com/ai-customer-support'
    },
    {
      id: '8',
      icon: <Phone className="w-8 h-8 text-teal-600" />,
      title: 'AI Call Center Assistant',
      description: 'Intelligent call center solution with AI transcription, sentiment analysis, and automated call routing.',
      features: [
        'Real-time call transcription',
        'Sentiment analysis during calls',
        'Automated call routing',
        'Call quality monitoring',
        'Customer intent detection',
        'Integration with CRM systems',
        'Advanced reporting',
        'Multi-language support'
      ],
      price: '$249/month',
      users: 'Up to 50 agents',
      popular: false,
      category: 'Support',
      marketPrice: '$499/month',
      benefits: ['Improve call efficiency by 50%', 'Increase customer satisfaction by 35%', 'Reduce training time by 60%'],
      link: 'https://ziontechgroup.com/ai-call-center'
    },

    // AI Development & Technical Tools
    {
      id: '9',
      icon: <Code className="w-8 h-8 text-gray-600" />,
      title: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered code completion, debugging, and optimization for multiple programming languages.',
      features: [
        'AI code completion and suggestions',
        'Automated debugging assistance',
        'Code optimization recommendations',
        'Multi-language support (20+ languages)',
        'Integration with popular IDEs',
        'Code review automation',
        'Documentation generation',
        'Security vulnerability detection'
      ],
      price: '$99/month',
      users: 'Up to 10 developers',
      popular: true,
      category: 'Development',
      marketPrice: '$199/month',
      benefits: ['Increase coding speed by 40%', 'Reduce bugs by 60%', 'Improve code quality by 50%'],
      link: 'https://ziontechgroup.com/ai-code-assistant'
    },
    {
      id: '10',
      icon: <Settings className="w-8 h-8 text-yellow-600" />,
      title: 'API Management Platform',
      description: 'Comprehensive API development, testing, and management platform with AI-powered optimization.',
      features: [
        'API design and documentation',
        'Automated testing suite',
        'Performance monitoring',
        'Rate limiting and security',
        'API versioning management',
        'Developer portal',
        'Analytics and reporting',
        'Integration marketplace'
      ],
      price: '$149/month',
      users: 'Up to 100 APIs',
      popular: false,
      category: 'Development',
      marketPrice: '$299/month',
      benefits: ['Reduce API development time by 50%', 'Improve API performance by 30%', 'Increase developer productivity by 40%'],
      link: 'https://ziontechgroup.com/api-management'
    },

    // AI Security & Compliance
    {
      id: '11',
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: 'AI Security Monitoring Suite',
      description: 'Advanced cybersecurity platform with AI-powered threat detection, vulnerability scanning, and compliance monitoring.',
      features: [
        'AI-powered threat detection',
        'Real-time vulnerability scanning',
        'Compliance monitoring (GDPR, HIPAA, SOX)',
        'Incident response automation',
        'Security risk assessment',
        'Penetration testing tools',
        'Security awareness training',
        '24/7 monitoring dashboard'
      ],
      price: '$399/month',
      users: 'Up to 500 users',
      popular: true,
      category: 'Security',
      marketPrice: '$799/month',
      benefits: ['Reduce security incidents by 70%', 'Improve compliance by 90%', 'Decrease response time by 80%'],
      link: 'https://ziontechgroup.com/ai-security-suite'
    },
    {
      id: '12',
      icon: <Lock className="w-8 h-8 text-purple-600" />,
      title: 'Data Privacy Compliance Manager',
      description: 'Automated data privacy compliance platform for GDPR, CCPA, and other privacy regulations.',
      features: [
        'Automated compliance assessment',
        'Data mapping and classification',
        'Privacy impact assessments',
        'Consent management',
        'Data subject request handling',
        'Breach notification automation',
        'Compliance reporting',
        'Legal document templates'
      ],
      price: '$299/month',
      users: 'Up to 200 users',
      popular: false,
      category: 'Compliance',
      marketPrice: '$599/month',
      benefits: ['Ensure 100% compliance', 'Reduce legal risks by 80%', 'Save 60% on compliance costs'],
      link: 'https://ziontechgroup.com/data-privacy-manager'
    },

    // AI Financial & Accounting
    {
      id: '13',
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: 'AI Accounting Assistant Pro',
      description: 'Intelligent accounting platform with automated bookkeeping, tax preparation, and financial reporting.',
      features: [
        'Automated bookkeeping',
        'AI-powered expense categorization',
        'Tax preparation and filing',
        'Financial reporting automation',
        'Invoice generation and tracking',
        'Receipt scanning and processing',
        'Multi-currency support',
        'Integration with banks and payment processors'
      ],
      price: '$199/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Finance',
      marketPrice: '$399/month',
      benefits: ['Reduce accounting time by 70%', 'Improve accuracy by 95%', 'Save 50% on accounting costs'],
      link: 'https://ziontechgroup.com/ai-accounting-pro'
    },
    {
      id: '14',
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
      title: 'AI Expense Management',
      description: 'Smart expense tracking and management platform with receipt scanning and automated approval workflows.',
      features: [
        'Receipt scanning and OCR',
        'Automated expense categorization',
        'Approval workflow automation',
        'Policy compliance checking',
        'Real-time expense tracking',
        'Integration with accounting software',
        'Mobile app for on-the-go',
        'Advanced reporting and analytics'
      ],
      price: '$79/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Finance',
      marketPrice: '$149/month',
      benefits: ['Reduce expense processing time by 80%', 'Improve policy compliance by 90%', 'Save 30% on expense management'],
      link: 'https://ziontechgroup.com/ai-expense-management'
    },

    // AI HR & Recruitment
    {
      id: '15',
      icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
      title: 'AI Recruitment Platform',
      description: 'Intelligent recruitment platform with AI-powered resume screening, candidate matching, and interview scheduling.',
      features: [
        'AI resume screening and ranking',
        'Candidate matching algorithms',
        'Automated interview scheduling',
        'Skills assessment tools',
        'Background check integration',
        'Diversity and inclusion analytics',
        'Integration with job boards',
        'Advanced candidate analytics'
      ],
      price: '$299/month',
      users: 'Up to 50 recruiters',
      popular: true,
      category: 'HR',
      marketPrice: '$599/month',
      benefits: ['Reduce time-to-hire by 50%', 'Improve candidate quality by 40%', 'Increase diversity by 30%'],
      link: 'https://ziontechgroup.com/ai-recruitment'
    },
    {
      id: '16',
      icon: <Users className="w-8 h-8 text-pink-600" />,
      title: 'Employee Engagement Analytics',
      description: 'AI-powered employee engagement platform that tracks satisfaction, predicts turnover, and suggests improvements.',
      features: [
        'Employee satisfaction surveys',
        'Turnover prediction algorithms',
        'Engagement trend analysis',
        'Performance correlation tracking',
        'Anonymous feedback collection',
        'Manager coaching recommendations',
        'Integration with HR systems',
        'Real-time engagement dashboard'
      ],
      price: '$149/month',
      users: 'Up to 500 employees',
      popular: false,
      category: 'HR',
      marketPrice: '$299/month',
      benefits: ['Reduce turnover by 35%', 'Increase engagement by 40%', 'Improve retention by 50%'],
      link: 'https://ziontechgroup.com/employee-engagement'
    },

    // AI E-commerce & Retail
    {
      id: '17',
      icon: <ShoppingCart className="w-8 h-8 text-orange-600" />,
      title: 'AI E-commerce Optimizer',
      description: 'Intelligent e-commerce platform with AI recommendations, dynamic pricing, and inventory optimization.',
      features: [
        'AI product recommendations',
        'Dynamic pricing optimization',
        'Inventory management',
        'Customer behavior analysis',
        'A/B testing automation',
        'Conversion rate optimization',
        'Multi-channel integration',
        'Advanced analytics dashboard'
      ],
      price: '$399/month',
      users: 'Up to 10,000 products',
      popular: true,
      category: 'E-commerce',
      marketPrice: '$799/month',
      benefits: ['Increase sales by 35%', 'Reduce cart abandonment by 40%', 'Optimize inventory by 25%'],
      link: 'https://ziontechgroup.com/ai-ecommerce-optimizer'
    },
    {
      id: '18',
      icon: <Image className="w-8 h-8 text-purple-600" />,
      title: 'AI Product Image Generator',
      description: 'AI-powered product image generation and optimization for e-commerce with automated background removal and enhancement.',
      features: [
        'AI product image generation',
        'Background removal and replacement',
        'Image enhancement and optimization',
        'Multiple angle generation',
        'Style transfer capabilities',
        'Bulk processing tools',
        'Integration with e-commerce platforms',
        'High-resolution output'
      ],
      price: '$99/month',
      users: 'Up to 1,000 images/month',
      popular: false,
      category: 'E-commerce',
      marketPrice: '$199/month',
      benefits: ['Reduce image costs by 80%', 'Increase conversion rates by 25%', 'Save 90% on photography time'],
      link: 'https://ziontechgroup.com/ai-product-images'
    },

    // AI Healthcare & Medical
    {
      id: '19',
      icon: <Activity className="w-8 h-8 text-red-600" />,
      title: 'AI Medical Records Manager',
      description: 'HIPAA-compliant medical records management with AI-powered data extraction, analysis, and patient insights.',
      features: [
        'HIPAA-compliant data management',
        'AI medical data extraction',
        'Patient risk assessment',
        'Treatment recommendation engine',
        'Integration with EHR systems',
        'Automated coding and billing',
        'Clinical decision support',
        'Patient portal integration'
      ],
      price: '$499/month',
      users: 'Up to 100 providers',
      popular: true,
      category: 'Healthcare',
      marketPrice: '$999/month',
      benefits: ['Reduce documentation time by 60%', 'Improve diagnosis accuracy by 30%', 'Increase patient satisfaction by 40%'],
      link: 'https://ziontechgroup.com/ai-medical-records'
    },
    {
      id: '20',
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      title: 'AI Health Monitoring Platform',
      description: 'Personalized health monitoring platform with AI analysis of vital signs, symptoms, and wellness recommendations.',
      features: [
        'Vital signs monitoring',
        'Symptom tracking and analysis',
        'Personalized health insights',
        'Medication reminder system',
        'Integration with wearables',
        'Telemedicine capabilities',
        'Health trend analysis',
        'Emergency alert system'
      ],
      price: '$79/month',
      users: 'Up to 1,000 patients',
      popular: false,
      category: 'Healthcare',
      marketPrice: '$149/month',
      benefits: ['Improve health outcomes by 40%', 'Reduce hospital visits by 30%', 'Increase patient engagement by 50%'],
      link: 'https://ziontechgroup.com/ai-health-monitoring'
    },

    // AI Education & Learning
    {
      id: '21',
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: 'AI Learning Management System',
      description: 'Intelligent learning platform with personalized content, adaptive assessments, and progress tracking.',
      features: [
        'Personalized learning paths',
        'Adaptive assessments',
        'AI content recommendations',
        'Progress tracking and analytics',
        'Gamification elements',
        'Multi-language support',
        'Integration with video platforms',
        'Certification management'
      ],
      price: '$199/month',
      users: 'Up to 1,000 learners',
      popular: true,
      category: 'Education',
      marketPrice: '$399/month',
      benefits: ['Increase learning retention by 50%', 'Reduce training time by 40%', 'Improve completion rates by 60%'],
      link: 'https://ziontechgroup.com/ai-learning-platform'
    },
    {
      id: '22',
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: 'AI Skills Assessment Platform',
      description: 'Comprehensive skills testing and certification platform with AI-powered evaluation and personalized feedback.',
      features: [
        'AI-powered skill assessments',
        'Automated grading and feedback',
        'Certification management',
        'Skills gap analysis',
        'Personalized improvement plans',
        'Integration with learning platforms',
        'Industry-specific assessments',
        'Advanced analytics dashboard'
      ],
      price: '$149/month',
      users: 'Up to 500 candidates',
      popular: false,
      category: 'Education',
      marketPrice: '$299/month',
      benefits: ['Improve assessment accuracy by 45%', 'Reduce grading time by 80%', 'Increase candidate satisfaction by 35%'],
      link: 'https://ziontechgroup.com/ai-skills-assessment'
    },

    // AI Legal & Compliance
    {
      id: '23',
      icon: <FileText className="w-8 h-8 text-gray-600" />,
      title: 'AI Legal Document Analyzer',
      description: 'Intelligent legal document analysis platform with contract review, compliance checking, and risk assessment.',
      features: [
        'Contract analysis and review',
        'Compliance checking automation',
        'Risk assessment and scoring',
        'Legal research assistance',
        'Document template generation',
        'Integration with legal databases',
        'Client portal access',
        'Billing and time tracking'
      ],
      price: '$399/month',
      users: 'Up to 25 lawyers',
      popular: true,
      category: 'Legal',
      marketPrice: '$799/month',
      benefits: ['Reduce document review time by 70%', 'Improve accuracy by 60%', 'Increase billable hours by 30%'],
      link: 'https://ziontechgroup.com/ai-legal-analyzer'
    },
    {
      id: '24',
      icon: <Scale className="w-8 h-8 text-indigo-600" />,
      title: 'AI Compliance Monitor',
      description: 'Automated compliance monitoring platform for regulatory requirements with real-time alerts and reporting.',
      features: [
        'Regulatory change monitoring',
        'Compliance gap analysis',
        'Automated reporting',
        'Risk assessment tools',
        'Policy management',
        'Training and certification tracking',
        'Integration with business systems',
        'Executive dashboard'
      ],
      price: '$299/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Legal',
      marketPrice: '$599/month',
      benefits: ['Ensure 100% compliance', 'Reduce compliance costs by 50%', 'Improve risk management by 40%'],
      link: 'https://ziontechgroup.com/ai-compliance-monitor'
    },

    // AI Real Estate & Property
    {
      id: '25',
      icon: <Home className="w-8 h-8 text-green-600" />,
      title: 'AI Property Management Suite',
      description: 'Comprehensive property management platform with AI-powered tenant screening, maintenance scheduling, and rent optimization.',
      features: [
        'AI tenant screening and scoring',
        'Automated rent optimization',
        'Maintenance scheduling and tracking',
        'Property performance analytics',
        'Tenant communication portal',
        'Financial reporting and analytics',
        'Integration with property databases',
        'Mobile app for property managers'
      ],
      price: '$199/month',
      users: 'Up to 500 properties',
      popular: true,
      category: 'Real Estate',
      marketPrice: '$399/month',
      benefits: ['Increase rental income by 20%', 'Reduce vacancy rates by 30%', 'Improve tenant satisfaction by 40%'],
      link: 'https://ziontechgroup.com/ai-property-management'
    },
    {
      id: '26',
      icon: <MapPin className="w-8 h-8 text-red-600" />,
      title: 'AI Real Estate Analytics',
      description: 'Advanced real estate market analysis platform with property valuation, market trends, and investment insights.',
      features: [
        'AI property valuation',
        'Market trend analysis',
        'Investment opportunity scoring',
        'Neighborhood analytics',
        'Price prediction models',
        'Comparative market analysis',
        'Integration with MLS systems',
        'Investment portfolio tracking'
      ],
      price: '$299/month',
      users: 'Up to 100 agents',
      popular: false,
      category: 'Real Estate',
      marketPrice: '$599/month',
      benefits: ['Improve valuation accuracy by 35%', 'Increase sales by 25%', 'Reduce market research time by 60%'],
      link: 'https://ziontechgroup.com/ai-real-estate-analytics'
    },

    // AI Supply Chain & Logistics
    {
      id: '27',
      icon: <Truck className="w-8 h-8 text-orange-600" />,
      title: 'AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management platform with demand forecasting, inventory optimization, and logistics planning.',
      features: [
        'AI demand forecasting',
        'Inventory optimization algorithms',
        'Route optimization and planning',
        'Supplier performance analytics',
        'Risk assessment and mitigation',
        'Cost optimization tools',
        'Integration with ERP systems',
        'Real-time tracking and monitoring'
      ],
      price: '$399/month',
      users: 'Up to 1,000 SKUs',
      popular: true,
      category: 'Supply Chain',
      marketPrice: '$799/month',
      benefits: ['Reduce inventory costs by 25%', 'Improve delivery times by 30%', 'Increase efficiency by 40%'],
      link: 'https://ziontechgroup.com/ai-supply-chain'
    },
    {
      id: '28',
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: 'AI Warehouse Management',
      description: 'Smart warehouse management system with automated picking, inventory tracking, and optimization algorithms.',
      features: [
        'Automated picking optimization',
        'Real-time inventory tracking',
        'Warehouse layout optimization',
        'Labor productivity analytics',
        'Integration with WMS systems',
        'Mobile scanning capabilities',
        'Quality control automation',
        'Performance dashboards'
      ],
      price: '$299/month',
      users: 'Up to 50 warehouse workers',
      popular: false,
      category: 'Supply Chain',
      marketPrice: '$599/month',
      benefits: ['Increase picking efficiency by 35%', 'Reduce errors by 50%', 'Optimize space utilization by 20%'],
      link: 'https://ziontechgroup.com/ai-warehouse-management'
    },

    // AI Manufacturing & Industrial
    {
      id: '29',
      icon: <Cog className="w-8 h-8 text-gray-600" />,
      title: 'AI Manufacturing Optimizer',
      description: 'Intelligent manufacturing platform with predictive maintenance, quality control, and production optimization.',
      features: [
        'Predictive maintenance algorithms',
        'Quality control automation',
        'Production line optimization',
        'Energy consumption monitoring',
        'Equipment performance analytics',
        'Integration with IoT sensors',
        'Real-time production monitoring',
        'Maintenance scheduling optimization'
      ],
      price: '$499/month',
      users: 'Up to 100 machines',
      popular: true,
      category: 'Manufacturing',
      marketPrice: '$999/month',
      benefits: ['Reduce downtime by 40%', 'Improve quality by 30%', 'Increase efficiency by 25%'],
      link: 'https://ziontechgroup.com/ai-manufacturing'
    },
    {
      id: '30',
      icon: <Wrench className="w-8 h-8 text-yellow-600" />,
      title: 'AI Predictive Maintenance',
      description: 'Advanced predictive maintenance platform that prevents equipment failures and optimizes maintenance schedules.',
      features: [
        'Failure prediction algorithms',
        'Maintenance scheduling optimization',
        'Equipment health monitoring',
        'Spare parts inventory management',
        'Integration with IoT devices',
        'Maintenance cost optimization',
        'Technician scheduling',
        'Performance analytics dashboard'
      ],
      price: '$199/month',
      users: 'Up to 50 machines',
      popular: false,
      category: 'Manufacturing',
      marketPrice: '$399/month',
      benefits: ['Prevent 80% of equipment failures', 'Reduce maintenance costs by 30%', 'Increase equipment uptime by 25%'],
      link: 'https://ziontechgroup.com/ai-predictive-maintenance'
    }
  ];

  const categories = [
    'All',
    'Analytics',
    'CRM',
    'Sales',
    'Content',
    'Marketing',
    'Support',
    'Development',
    'Security',
    'Compliance',
    'Finance',
    'HR',
    'E-commerce',
    'Healthcare',
    'Education',
    'Legal',
    'Real Estate',
    'Supply Chain',
    'Manufacturing'
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularProducts = microSaasProducts.filter(product => product.popular);

  return (
    <React.Fragment>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive collection of micro SaaS solutions powered by AI. From analytics and CRM to marketing and development tools - everything your business needs." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics, CRM, marketing automation, development tools, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful AI-driven business tools designed to solve specific problems. No complex setup, no long-term commitments - just intelligent solutions that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Browse Solutions
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SaaS solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        {selectedCategory === 'All' && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Featured Solutions</h2>
                <p className="text-xl text-gray-300">Our most popular micro SaaS products</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularProducts.slice(0, 6).map((product) => (
                  <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                    <div className="flex items-start mb-6">
                      <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                        {product.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                        <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {product.features.length > 4 && (
                          <li className="text-gray-400 text-sm">
                            +{product.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-2xl font-bold text-cyan-400">{product.price}</div>
                        <div className="text-sm text-gray-400 line-through">{product.marketPrice}</div>
                      </div>
                      <div className="text-sm text-gray-300">{product.users}</div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Micro SaaS Solutions' : `${selectedCategory} Solutions`}
              </h2>
              <span className="text-gray-300">
                {filteredProducts.length} solution{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      {product.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 3 && (
                        <li className="text-gray-400 text-sm">
                          +{product.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold text-cyan-400">{product.price}</div>
                      <div className="text-sm text-gray-400 line-through">{product.marketPrice}</div>
                    </div>
                    <div className="text-sm text-gray-300">{product.users}</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose the perfect micro SaaS solution for your business needs and start seeing results today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default MicroSaasPage;