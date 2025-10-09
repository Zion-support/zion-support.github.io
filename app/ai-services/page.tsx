import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, 
  Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, 
  Settings, Calendar, CheckSquare, FileText, Mail, Phone, MapPin, 
  DollarSign, Clock, Award, Rocket, Eye, MessageSquare, Search, 
  Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, 
  CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, 
  Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, 
  Paintbrush, Scissors, BookOpen, Calculator, Compass, PieChart, 
  TrendingDown, Activity, Zap as Lightning, Target as Crosshair, 
  Shield as Security, Users as People, Star as StarIcon, 
  CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, 
  Mail as MailIcon, MapPin as Location, ExternalLink, Play, 
  Download, Upload, RefreshCw, Monitor, Smartphone as Mobile, 
  Tablet, Laptop, Server, HardDrive, Wifi, Bluetooth, 
  Battery, Power, Wrench as Tools, Settings as Cog, 
  Bell, User, UserPlus, UserCheck, UserX, Users as Team, 
  UserCog, UserShield, UserCheck as UserVerified, 
  UserPlus as UserAdd, UserX as UserRemove, Team as UsersIcon,
  Package, PenTool, Grid3X3, ChevronRight, ChevronDown
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const aiServices = [
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      category: 'analytics',
      icon: BarChart,
      description: 'Transform your data into actionable insights with advanced AI-powered analytics and predictive modeling.',
      features: [
        'Real-time data processing and analysis',
        'Predictive analytics and forecasting',
        'Natural language query interface',
        'Automated report generation',
        'Anomaly detection and alerting',
        'Custom dashboard creation',
        'Multi-source data integration',
        'Advanced visualization tools'
      ],
      pricing: {
        starter: { 
          price: 299, 
          period: 'month', 
          features: ['Up to 10 data sources', 'Basic analytics', 'Email support', 'Standard reports'] 
        },
        professional: { 
          price: 799, 
          period: 'month', 
          features: ['Up to 50 data sources', 'Advanced AI insights', 'Priority support', 'Custom dashboards', 'API access'] 
        },
        enterprise: { 
          price: 1999, 
          period: 'month', 
          features: ['Unlimited data sources', 'White-label solution', 'Dedicated support', 'Custom AI models', 'SLA guarantee'] 
        }
      },
      benefits: [
        'Increase decision-making speed by 400%',
        'Reduce manual analysis time by 85%',
        'Identify opportunities 3x faster',
        'Improve forecast accuracy by 60%'
      ],
      useCases: ['Financial forecasting', 'Sales analytics', 'Operations optimization', 'Market research'],
      technologies: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Time Series Analysis'],
      integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'AWS', 'Azure', 'Snowflake', 'Databricks'],
      demoUrl: 'https://ziontechgroup.com/demo/ai-bi',
      documentation: 'https://docs.ziontechgroup.com/ai-bi',
      supportEmail: 'bi@ziontechgroup.com',
      implementationTime: '2-4 weeks',
      roi: '300% average ROI within 6 months'
    },
    {
      id: 'ai-document-processor',
      name: 'AI Document Processing',
      category: 'automation',
      icon: FileText,
      description: 'Intelligent document analysis and processing with OCR, data extraction, and automated workflow management.',
      features: [
        'Advanced OCR with 99.9% accuracy',
        'Intelligent data extraction',
        'Document classification and routing',
        'Automated workflow management',
        'Multi-format support (PDF, Word, Excel, etc.)',
        'Batch processing capabilities',
        'Quality assurance and validation',
        'Integration with existing systems'
      ],
      pricing: {
        starter: { 
          price: 199, 
          period: 'month', 
          features: ['Up to 5,000 pages', 'Basic OCR', 'Email support', 'Standard templates'] 
        },
        professional: { 
          price: 599, 
          period: 'month', 
          features: ['Up to 25,000 pages', 'Advanced AI extraction', 'Priority support', 'Custom workflows', 'API access'] 
        },
        enterprise: { 
          price: 1499, 
          period: 'month', 
          features: ['Unlimited pages', 'White-label solution', 'Dedicated support', 'Custom AI models', 'SLA guarantee'] 
        }
      },
      benefits: [
        'Process documents 20x faster than manual methods',
        'Reduce processing errors by 95%',
        'Eliminate manual data entry completely',
        'Scale document processing without additional staff'
      ],
      useCases: ['Invoice processing', 'Contract analysis', 'Medical records', 'Legal documents', 'Insurance claims'],
      technologies: ['OCR', 'Natural Language Processing', 'Computer Vision', 'Machine Learning', 'Document AI'],
      integrations: ['SharePoint', 'Google Drive', 'Dropbox', 'Box', 'Salesforce', 'SAP', 'Oracle'],
      demoUrl: 'https://ziontechgroup.com/demo/document-processor',
      documentation: 'https://docs.ziontechgroup.com/document-processor',
      supportEmail: 'documents@ziontechgroup.com',
      implementationTime: '1-3 weeks',
      roi: '400% average ROI within 4 months'
    },
    {
      id: 'ai-customer-service',
      name: 'AI Customer Service',
      category: 'customer-service',
      icon: Bot,
      description: 'Revolutionary AI-powered customer service with natural language understanding and multi-channel support.',
      features: [
        'Natural language processing and understanding',
        'Multi-channel support (web, email, chat, phone)',
        '24/7 availability with instant responses',
        'Intelligent escalation to human agents',
        'Sentiment analysis and emotion detection',
        'Knowledge base integration',
        'Personalized customer interactions',
        'Performance analytics and insights'
      ],
      pricing: {
        starter: { 
          price: 399, 
          period: 'month', 
          features: ['Up to 1,000 conversations', 'Basic AI responses', 'Email support', 'Standard integrations'] 
        },
        professional: { 
          price: 999, 
          period: 'month', 
          features: ['Up to 10,000 conversations', 'Advanced AI training', 'Priority support', 'Custom branding', 'API access'] 
        },
        enterprise: { 
          price: 2499, 
          period: 'month', 
          features: ['Unlimited conversations', 'White-label solution', 'Dedicated support', 'Custom AI models', 'SLA guarantee'] 
        }
      },
      benefits: [
        'Reduce support costs by 70%',
        'Handle 90% of inquiries automatically',
        'Improve customer satisfaction by 50%',
        'Provide 24/7 support without breaks'
      ],
      useCases: ['E-commerce support', 'SaaS customer service', 'Lead qualification', 'FAQ automation', 'Technical support'],
      technologies: ['Natural Language Processing', 'Machine Learning', 'Sentiment Analysis', 'Conversational AI', 'Knowledge Graphs'],
      integrations: ['Zendesk', 'Intercom', 'Freshdesk', 'Slack', 'Microsoft Teams', 'WhatsApp', 'Facebook Messenger'],
      demoUrl: 'https://ziontechgroup.com/demo/ai-customer-service',
      documentation: 'https://docs.ziontechgroup.com/ai-customer-service',
      supportEmail: 'support@ziontechgroup.com',
      implementationTime: '2-6 weeks',
      roi: '250% average ROI within 3 months'
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      category: 'marketing',
      icon: MessageSquare,
      description: 'Intelligent marketing automation with AI-powered personalization, content generation, and campaign optimization.',
      features: [
        'AI-powered content generation',
        'Advanced customer segmentation',
        'Predictive lead scoring',
        'Automated campaign optimization',
        'Multi-channel marketing orchestration',
        'Real-time personalization',
        'A/B testing with AI insights',
        'Performance analytics and reporting'
      ],
      pricing: {
        starter: { 
          price: 299, 
          period: 'month', 
          features: ['Up to 10,000 contacts', 'Basic AI personalization', 'Email support', 'Standard templates'] 
        },
        professional: { 
          price: 799, 
          period: 'month', 
          features: ['Up to 100,000 contacts', 'Advanced AI features', 'Priority support', 'Custom campaigns', 'API access'] 
        },
        enterprise: { 
          price: 1999, 
          period: 'month', 
          features: ['Unlimited contacts', 'White-label solution', 'Dedicated support', 'Custom AI models', 'SLA guarantee'] 
        }
      },
      benefits: [
        'Increase conversion rates by 200%',
        'Reduce marketing costs by 40%',
        'Improve customer engagement by 150%',
        'Automate 80% of marketing tasks'
      ],
      useCases: ['Email marketing', 'Social media automation', 'Lead nurturing', 'Customer retention', 'Content marketing'],
      technologies: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'Computer Vision', 'Recommendation Systems'],
      integrations: ['HubSpot', 'Salesforce', 'Mailchimp', 'Hootsuite', 'Facebook', 'Google Ads', 'LinkedIn'],
      demoUrl: 'https://ziontechgroup.com/demo/ai-marketing',
      documentation: 'https://docs.ziontechgroup.com/ai-marketing',
      supportEmail: 'marketing@ziontechgroup.com',
      implementationTime: '3-6 weeks',
      roi: '350% average ROI within 5 months'
    },
    {
      id: 'ai-predictive-analytics',
      name: 'AI Predictive Analytics',
      category: 'analytics',
      icon: TrendingUp,
      description: 'Advanced predictive modeling and forecasting with machine learning algorithms for business intelligence.',
      features: [
        'Advanced machine learning algorithms',
        'Time series forecasting',
        'Risk assessment and modeling',
        'Demand forecasting',
        'Customer lifetime value prediction',
        'Churn prediction and prevention',
        'Market trend analysis',
        'Real-time prediction updates'
      ],
      pricing: {
        starter: { 
          price: 499, 
          period: 'month', 
          features: ['Up to 5 prediction models', 'Basic forecasting', 'Email support', 'Standard algorithms'] 
        },
        professional: { 
          price: 1299, 
          period: 'month', 
          features: ['Up to 25 prediction models', 'Advanced algorithms', 'Priority support', 'Custom models', 'API access'] 
        },
        enterprise: { 
          price: 2999, 
          period: 'month', 
          features: ['Unlimited models', 'White-label solution', 'Dedicated support', 'Custom AI development', 'SLA guarantee'] 
        }
      },
      benefits: [
        'Improve forecast accuracy by 80%',
        'Reduce business risks by 60%',
        'Increase revenue through better predictions',
        'Optimize resource allocation'
      ],
      useCases: ['Sales forecasting', 'Inventory management', 'Financial planning', 'Risk management', 'Market analysis'],
      technologies: ['Machine Learning', 'Deep Learning', 'Time Series Analysis', 'Statistical Modeling', 'Ensemble Methods'],
      integrations: ['Python', 'R', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'AWS SageMaker', 'Azure ML'],
      demoUrl: 'https://ziontechgroup.com/demo/predictive-analytics',
      documentation: 'https://docs.ziontechgroup.com/predictive-analytics',
      supportEmail: 'analytics@ziontechgroup.com',
      implementationTime: '4-8 weeks',
      roi: '400% average ROI within 6 months'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      category: 'content',
      icon: PenTool,
      description: 'Intelligent content creation with AI-powered writing, editing, and optimization for multiple formats and platforms.',
      features: [
        'Multi-format content generation',
        'Brand voice and tone consistency',
        'SEO optimization and keyword integration',
        'Plagiarism detection and originality scoring',
        'Content performance prediction',
        'Multi-language support',
        'Content scheduling and distribution',
        'Collaborative editing and approval workflows'
      ],
      pricing: {
        starter: { 
          price: 199, 
          period: 'month', 
          features: ['Up to 10,000 words', 'Basic AI generation', 'Email support', 'Standard templates'] 
        },
        professional: { 
          price: 599, 
          period: 'month', 
          features: ['Up to 100,000 words', 'Advanced AI features', 'Priority support', 'Custom training', 'API access'] 
        },
        enterprise: { 
          price: 1499, 
          period: 'month', 
          features: ['Unlimited words', 'White-label solution', 'Dedicated support', 'Custom AI models', 'SLA guarantee'] 
        }
      },
      benefits: [
        'Generate content 50x faster',
        'Maintain consistent brand voice',
        'Improve SEO performance by 200%',
        'Reduce content creation costs by 75%'
      ],
      useCases: ['Blog content', 'Social media posts', 'Product descriptions', 'Marketing copy', 'Technical documentation'],
      technologies: ['Natural Language Processing', 'Large Language Models', 'Text Generation', 'Sentiment Analysis', 'SEO Optimization'],
      integrations: ['WordPress', 'HubSpot', 'Contentful', 'Notion', 'Google Docs', 'Slack', 'Microsoft Teams'],
      demoUrl: 'https://ziontechgroup.com/demo/content-generation',
      documentation: 'https://docs.ziontechgroup.com/content-generation',
      supportEmail: 'content@ziontechgroup.com',
      implementationTime: '1-3 weeks',
      roi: '300% average ROI within 4 months'
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      category: 'automation',
      icon: Settings,
      description: 'Intelligent business process automation with AI-powered decision making and adaptive workflows.',
      features: [
        'Intelligent process discovery',
        'Automated workflow optimization',
        'AI-powered decision making',
        'Exception handling and escalation',
        'Process monitoring and analytics',
        'Integration with existing systems',
        'Custom workflow creation',
        'Performance optimization recommendations'
      ],
      pricing: {
        starter: { 
          price: 399, 
          period: 'month', 
          features: ['Up to 10 workflows', 'Basic automation', 'Email support', 'Standard integrations'] 
        },
        professional: { 
          price: 999, 
          period: 'month', 
          features: ['Up to 50 workflows', 'Advanced AI features', 'Priority support', 'Custom workflows', 'API access'] 
        },
        enterprise: { 
          price: 2499, 
          period: 'month', 
          features: ['Unlimited workflows', 'White-label solution', 'Dedicated support', 'Custom AI development', 'SLA guarantee'] 
        }
      },
      benefits: [
        'Automate 90% of repetitive tasks',
        'Reduce process errors by 95%',
        'Increase operational efficiency by 300%',
        'Free up staff for strategic work'
      ],
      useCases: ['HR processes', 'Finance workflows', 'Customer onboarding', 'Order processing', 'Compliance management'],
      technologies: ['Process Mining', 'Machine Learning', 'Robotic Process Automation', 'Workflow Engines', 'Decision Trees'],
      integrations: ['Salesforce', 'SAP', 'Oracle', 'Microsoft Power Platform', 'Zapier', 'Workato', 'UiPath'],
      demoUrl: 'https://ziontechgroup.com/demo/workflow-automation',
      documentation: 'https://docs.ziontechgroup.com/workflow-automation',
      supportEmail: 'automation@ziontechgroup.com',
      implementationTime: '3-8 weeks',
      roi: '400% average ROI within 6 months'
    },
    {
      id: 'ai-data-visualization',
      name: 'AI Data Visualization',
      category: 'analytics',
      icon: Eye,
      description: 'Intelligent data visualization with AI-powered insights, interactive dashboards, and automated chart generation.',
      features: [
        'AI-powered chart recommendations',
        'Interactive dashboard creation',
        'Natural language data queries',
        'Automated insight generation',
        'Real-time data updates',
        'Mobile-responsive visualizations',
        'Collaborative dashboard sharing',
        'Advanced filtering and drill-down'
      ],
      pricing: {
        starter: { 
          price: 299, 
          period: 'month', 
          features: ['Up to 10 dashboards', 'Basic visualizations', 'Email support', 'Standard templates'] 
        },
        professional: { 
          price: 799, 
          period: 'month', 
          features: ['Up to 50 dashboards', 'Advanced AI features', 'Priority support', 'Custom visualizations', 'API access'] 
        },
        enterprise: { 
          price: 1999, 
          period: 'month', 
          features: ['Unlimited dashboards', 'White-label solution', 'Dedicated support', 'Custom AI models', 'SLA guarantee'] 
        }
      },
      benefits: [
        'Create visualizations 10x faster',
        'Discover insights automatically',
        'Improve data comprehension by 200%',
        'Enable self-service analytics'
      ],
      useCases: ['Business intelligence', 'Financial reporting', 'Marketing analytics', 'Operations monitoring', 'Executive dashboards'],
      technologies: ['Computer Vision', 'Natural Language Processing', 'Machine Learning', 'Data Visualization', 'Interactive Design'],
      integrations: ['Tableau', 'Power BI', 'Looker', 'Qlik', 'D3.js', 'Plotly', 'Chart.js'],
      demoUrl: 'https://ziontechgroup.com/demo/data-visualization',
      documentation: 'https://docs.ziontechgroup.com/data-visualization',
      supportEmail: 'visualization@ziontechgroup.com',
      implementationTime: '2-4 weeks',
      roi: '250% average ROI within 3 months'
    },
    {
      id: 'ai-sales-automation',
      name: 'AI Sales Automation',
      category: 'sales',
      icon: Target,
      description: 'Intelligent sales automation with AI-powered lead scoring, pipeline management, and sales forecasting.',
      features: [
        'AI-powered lead scoring and qualification',
        'Automated sales pipeline management',
        'Predictive sales forecasting',
        'Intelligent follow-up recommendations',
        'Sales performance analytics',
        'CRM integration and synchronization',
        'Email and call automation',
        'Deal probability prediction'
      ],
      pricing: {
        starter: { 
          price: 399, 
          period: 'month', 
          features: ['Up to 5 sales reps', 'Basic AI scoring', 'Email support', 'Standard CRM integration'] 
        },
        professional: { 
          price: 999, 
          period: 'month', 
          features: ['Up to 25 sales reps', 'Advanced AI features', 'Priority support', 'Custom workflows', 'API access'] 
        },
        enterprise: { 
          price: 2499, 
          period: 'month', 
          features: ['Unlimited sales reps', 'White-label solution', 'Dedicated support', 'Custom AI models', 'SLA guarantee'] 
        }
      },
      benefits: [
        'Increase sales conversion by 180%',
        'Reduce sales cycle by 35%',
        'Improve lead quality by 250%',
        'Automate 70% of sales tasks'
      ],
      useCases: ['B2B sales', 'Lead qualification', 'Pipeline management', 'Sales forecasting', 'Customer relationship management'],
      technologies: ['Machine Learning', 'Predictive Analytics', 'Natural Language Processing', 'Sales Intelligence', 'CRM Integration'],
      integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM', 'Microsoft Dynamics', 'SugarCRM', 'Freshworks'],
      demoUrl: 'https://ziontechgroup.com/demo/sales-automation',
      documentation: 'https://docs.ziontechgroup.com/sales-automation',
      supportEmail: 'sales@ziontechgroup.com',
      implementationTime: '3-6 weeks',
      roi: '350% average ROI within 5 months'
    },
    {
      id: 'ai-project-management',
      name: 'AI Project Management',
      category: 'productivity',
      icon: Calendar,
      description: 'Intelligent project management with AI-powered resource optimization, risk prediction, and automated scheduling.',
      features: [
        'AI-powered resource allocation',
        'Automated project scheduling',
        'Risk prediction and mitigation',
        'Progress tracking and analytics',
        'Team performance optimization',
        'Budget and timeline forecasting',
        'Task prioritization and assignment',
        'Collaborative workspace management'
      ],
      pricing: {
        starter: { 
          price: 299, 
          period: 'month', 
          features: ['Up to 10 projects', 'Basic AI features', 'Email support', 'Standard templates'] 
        },
        professional: { 
          price: 799, 
          period: 'month', 
          features: ['Up to 50 projects', 'Advanced AI features', 'Priority support', 'Custom workflows', 'API access'] 
        },
        enterprise: { 
          price: 1999, 
          period: 'month', 
          features: ['Unlimited projects', 'White-label solution', 'Dedicated support', 'Custom AI models', 'SLA guarantee'] 
        }
      },
      benefits: [
        'Improve project success rate by 60%',
        'Reduce project delays by 40%',
        'Optimize resource utilization by 50%',
        'Automate 80% of project management tasks'
      ],
      useCases: ['Software development', 'Construction projects', 'Marketing campaigns', 'Event planning', 'Product launches'],
      technologies: ['Machine Learning', 'Optimization Algorithms', 'Predictive Analytics', 'Resource Management', 'Risk Assessment'],
      integrations: ['Asana', 'Trello', 'Monday.com', 'Jira', 'Microsoft Project', 'Smartsheet', 'Wrike'],
      demoUrl: 'https://ziontechgroup.com/demo/project-management',
      documentation: 'https://docs.ziontechgroup.com/project-management',
      supportEmail: 'projects@ziontechgroup.com',
      implementationTime: '2-6 weeks',
      roi: '300% average ROI within 4 months'
    },
    {
      id: 'ai-financial-advisor',
      name: 'AI Financial Advisor',
      category: 'finance',
      icon: DollarSign,
      description: 'Intelligent financial planning and advisory with AI-powered analysis, risk assessment, and investment recommendations.',
      features: [
        'AI-powered financial analysis',
        'Risk assessment and portfolio optimization',
        'Investment recommendation engine',
        'Budget planning and optimization',
        'Tax optimization strategies',
        'Retirement planning assistance',
        'Market trend analysis',
        'Personalized financial advice'
      ],
      pricing: {
        starter: { 
          price: 499, 
          period: 'month', 
          features: ['Basic financial analysis', 'Standard recommendations', 'Email support', 'Standard reports'] 
        },
        professional: { 
          price: 1299, 
          period: 'month', 
          features: ['Advanced AI analysis', 'Custom recommendations', 'Priority support', 'API access', 'Custom integrations'] 
        },
        enterprise: { 
          price: 2999, 
          period: 'month', 
          features: ['White-label solution', 'Dedicated support', 'Custom AI models', 'SLA guarantee', 'Compliance support'] 
        }
      },
      benefits: [
        'Improve investment returns by 25%',
        'Reduce financial risks by 40%',
        'Optimize tax savings by 30%',
        'Provide 24/7 financial guidance'
      ],
      useCases: ['Personal finance', 'Investment management', 'Retirement planning', 'Tax optimization', 'Risk management'],
      technologies: ['Machine Learning', 'Financial Modeling', 'Risk Analysis', 'Portfolio Optimization', 'Predictive Analytics'],
      integrations: ['Fidelity', 'Charles Schwab', 'Vanguard', 'Mint', 'YNAB', 'Quicken', 'TurboTax'],
      demoUrl: 'https://ziontechgroup.com/demo/financial-advisor',
      documentation: 'https://docs.ziontechgroup.com/financial-advisor',
      supportEmail: 'finance@ziontechgroup.com',
      implementationTime: '4-8 weeks',
      roi: '400% average ROI within 6 months'
    },
    {
      id: 'ai-healthcare-solutions',
      name: 'AI Healthcare Solutions',
      category: 'healthcare',
      icon: Stethoscope,
      description: 'Advanced AI-powered healthcare solutions for diagnosis assistance, treatment optimization, and patient care management.',
      features: [
        'Medical image analysis and diagnosis',
        'Treatment recommendation engine',
        'Patient risk assessment',
        'Drug interaction checking',
        'Symptom analysis and triage',
        'Electronic health record integration',
        'Clinical decision support',
        'Telemedicine capabilities'
      ],
      pricing: {
        starter: { 
          price: 999, 
          period: 'month', 
          features: ['Basic AI diagnosis', 'Standard integrations', 'Email support', 'Compliance support'] 
        },
        professional: { 
          price: 2499, 
          period: 'month', 
          features: ['Advanced AI features', 'Custom integrations', 'Priority support', 'API access', 'Custom training'] 
        },
        enterprise: { 
          price: 4999, 
          period: 'month', 
          features: ['White-label solution', 'Dedicated support', 'Custom AI models', 'SLA guarantee', 'Full compliance'] 
        }
      },
      benefits: [
        'Improve diagnostic accuracy by 30%',
        'Reduce medical errors by 50%',
        'Optimize treatment outcomes by 40%',
        'Enhance patient care quality'
      ],
      useCases: ['Medical diagnosis', 'Treatment planning', 'Patient monitoring', 'Drug discovery', 'Medical research'],
      technologies: ['Computer Vision', 'Natural Language Processing', 'Machine Learning', 'Medical AI', 'Deep Learning'],
      integrations: ['Epic', 'Cerner', 'Allscripts', 'NextGen', 'eClinicalWorks', 'athenahealth', 'Meditech'],
      demoUrl: 'https://ziontechgroup.com/demo/healthcare-ai',
      documentation: 'https://docs.ziontechgroup.com/healthcare-ai',
      supportEmail: 'healthcare@ziontechgroup.com',
      implementationTime: '6-12 weeks',
      roi: '500% average ROI within 8 months'
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Grid3X3 },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'automation', name: 'Automation', icon: Settings },
    { id: 'customer-service', name: 'Customer Service', icon: Bot },
    { id: 'marketing', name: 'Marketing', icon: MessageSquare },
    { id: 'content', name: 'Content', icon: PenTool },
    { id: 'sales', name: 'Sales', icon: Target },
    { id: 'productivity', name: 'Productivity', icon: Calendar },
    { id: 'finance', name: 'Finance', icon: DollarSign },
    { id: 'healthcare', name: 'Healthcare', icon: Stethoscope }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white">Loading AI Services...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 cyber-grid neural-network-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse">
            Advanced <span className="holographic-text">AI Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto neon-glow">
            Transform your business with cutting-edge artificial intelligence solutions designed to solve complex challenges and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              Get AI Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-slate-900 cyber-glow-pulse'
                    : 'bg-white/10 text-white hover:bg-cyan-400/20 hover:text-cyan-400'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors animate-float">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={service.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors"
                      aria-label={`View ${service.name} demo`}
                    >
                      <Play className="w-4 h-4" />
                    </a>
                    <a
                      href={service.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors"
                      aria-label={`View ${service.name} documentation`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{service.implementationTime}</div>
                    <div className="text-xs text-gray-400">Implementation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{service.roi}</div>
                    <div className="text-xs text-gray-400">Average ROI</div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Pricing:</h4>
                  <div className="space-y-2">
                    {Object.entries(service.pricing).map(([tier, details]) => (
                      <div key={tier} className="flex justify-between items-center text-sm">
                        <span className="text-gray-300 capitalize">{tier}:</span>
                        <span className="text-white font-semibold">
                          ${details.price}/{details.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded">
                        +{service.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Expandable Details */}
                <button
                  onClick={() => toggleServiceExpansion(service.id)}
                  className="w-full flex items-center justify-between text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
                >
                  <span className="font-medium">View Details</span>
                  {expandedService === service.id ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>

                {expandedService === service.id && (
                  <div className="space-y-4 mb-6">
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <Check className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Use Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.map((useCase, idx) => (
                          <span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Integrations */}
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Integrations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.integrations.slice(0, 6).map((integration, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                            {integration}
                          </span>
                        ))}
                        {service.integrations.length > 6 && (
                          <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded">
                            +{service.integrations.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <a
                    href={service.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full cyber-button text-center py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Try Demo
                  </a>
                  <a
                    href={`mailto:${service.supportEmail}?subject=Interest in ${service.name}`}
                    className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-cyan-400 mb-8 neon-glow">
            Let our AI experts help you identify the perfect solutions for your business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Phone className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;