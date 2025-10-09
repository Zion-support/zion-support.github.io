import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
<<<<<<< HEAD
  Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, 
  Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, 
  TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, 
  Mail, Phone, DollarSign, Clock, Award, CheckCircle, 
  Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, 
  CreditCard, Building, Factory, Car, Plane, Ship, Train, 
  Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, 
  Hammer, Paintbrush, Scissors, BookOpen, Calculator, 
  Compass, PieChart, TrendingDown, Activity, Zap as Lightning, 
  Target as Crosshair, Shield as Security, Users as People, 
  Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, 
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location,
  Eye, Search, MessageSquare, PieChart as Chart, 
  Download, Upload, RefreshCw, Play, Pause, Stop,
  Volume2, VolumeX, Mic, MicOff, Headphones, 
  Wifi, WifiOff, Battery, BatteryCharging, 
  Sun, Moon, Sunrise, Sunset, CloudRain, 
  Snowflake, Wind, Thermometer, Droplets,
  Lightbulb, LightbulbOff, Power, PowerOff,
  Wrench as Tool, Hammer as HammerIcon, 
  Paintbrush as Brush, Scissors as ScissorIcon,
  BookOpen as Book, Calculator as Calc,
  Compass as CompassIcon, PieChart as PieChartIcon,
  TrendingDown as TrendingDownIcon, Activity as ActivityIcon,
  Grid3X3, Package, Utensils, Microscope, 
  Atom, Cpu as CpuIcon, Database as DatabaseIcon,
  Network, Layers, Workflow, GitBranch,
  Zap as ZapIcon, Brain as BrainIcon, Eye as EyeIcon,
  Search as SearchIcon, MessageSquare as MessageSquareIcon,
  PieChart as PieChartIcon2, BarChart as BarChartIcon,
  TrendingUp as TrendingUpIcon, Activity as ActivityIcon2,
  Target as TargetIcon, Globe as GlobeIcon,
  Shield as ShieldIcon, Lock as LockIcon,
  Users as UsersIcon, Settings as SettingsIcon,
  Calendar as CalendarIcon, CheckSquare as CheckSquareIcon,
  FileText as FileTextIcon, Mail as MailIcon2,
  Phone as PhoneIcon2, DollarSign as DollarSignIcon,
  Clock as ClockIcon, Award as AwardIcon,
  CheckCircle as CheckCircleIcon, ArrowRight as ArrowRightIcon,
  Bot as BotIcon, Palette as PaletteIcon,
  Camera as CameraIcon, Music as MusicIcon,
  Video as VideoIcon, Gamepad2 as Gamepad2Icon,
  ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon,
  Building as BuildingIcon, Factory as FactoryIcon,
  Car as CarIcon, Plane as PlaneIcon,
  Ship as ShipIcon, Train as TrainIcon,
  Home as HomeIcon, Heart as HeartIcon,
  Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon,
  Briefcase as BriefcaseIcon, Wrench as WrenchIcon,
  Hammer as HammerIcon2, Paintbrush as PaintbrushIcon,
  Scissors as ScissorsIcon, BookOpen as BookOpenIcon,
  Calculator as CalculatorIcon, Compass as CompassIcon2,
  PieChart as PieChartIcon3, TrendingDown as TrendingDownIcon2,
  Activity as ActivityIcon3, Zap as ZapIcon2,
  Target as TargetIcon2, Shield as ShieldIcon2,
  Users as UsersIcon2, Star as StarIcon2,
  CheckCircle as CheckCircleIcon2, ArrowRight as ArrowRightIcon2,
  Phone as PhoneIcon3, Mail as MailIcon3,
  MapPin as LocationIcon
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-462c

  const aiServices = [
    // AI Business Intelligence & Analytics
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
<<<<<<< HEAD
      description: 'Advanced analytics and insights powered by machine learning to drive data-driven decisions',
      category: 'ai-analytics',
      icon: BarChart,
      price: '$2,999/month',
      features: [
        'Predictive analytics and forecasting',
        'Real-time dashboard creation',
        'Natural language querying',
        'Automated report generation',
        'Multi-source data integration',
        'Custom ML model development',
        'Advanced visualization tools',
        'API integration capabilities'
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-462c
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
<<<<<<< HEAD
        'Increase revenue by 25-40%',
        'Reduce decision-making time by 70%',
        'Identify new business opportunities',
        'Improve operational efficiency',
        'Predict market trends accurately'
      ],
      targetAudience: 'Enterprise companies, Data-driven organizations',
      setupTime: '2-4 weeks',
      freeTrial: '30 days',
      support: 'Dedicated data scientist and support team',
      integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'AWS', 'Azure', 'Snowflake', 'Tableau', 'Power BI'],
      link: 'https://ziontechgroup.com/ai-business-intelligence',
      caseStudy: 'Fortune 500 company increased revenue by 35% using our AI BI platform'
    },
    {
      id: 'ai-document-processing',
      name: 'AI Document Processing',
      description: 'Intelligent document analysis, extraction, and automation for enterprise workflows',
      category: 'ai-automation',
      icon: FileText,
      price: '$1,999/month',
      features: [
        'OCR and text extraction',
        'Document classification and routing',
        'Data validation and verification',
        'Automated workflow creation',
        'Multi-language support',
        'Compliance monitoring',
        'Version control and audit trails',
        'Custom field extraction'
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-462c
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
<<<<<<< HEAD
        'Process documents 20x faster',
        'Reduce errors by 95%',
        'Eliminate manual data entry',
        'Ensure compliance automatically',
        'Scale document processing'
      ],
      targetAudience: 'Legal firms, Insurance companies, Financial services, Healthcare',
      setupTime: '1-2 weeks',
      freeTrial: '14 days',
      support: 'Implementation specialist and ongoing support',
      integrations: ['SharePoint', 'Box', 'Dropbox', 'Salesforce', 'SAP', 'Oracle', 'Microsoft 365'],
      link: 'https://ziontechgroup.com/ai-document-processing',
      caseStudy: 'Law firm reduced document processing time from 8 hours to 15 minutes'
    },
    {
      id: 'ai-customer-experience',
      name: 'AI Customer Experience',
      description: 'Personalized customer interactions and journey optimization using advanced AI',
      category: 'ai-customer',
      icon: Users,
      price: '$2,499/month',
      features: [
        'Customer behavior analysis',
        'Personalized recommendations',
        'Sentiment analysis and monitoring',
        'Churn prediction and prevention',
        'Automated customer segmentation',
        'Real-time interaction optimization',
        'Multi-channel orchestration',
        'Customer lifetime value prediction'
      ],
      benefits: [
        'Increase customer satisfaction by 40%',
        'Reduce churn rate by 30%',
        'Boost conversion rates by 25%',
        'Improve customer lifetime value',
        'Enhance brand loyalty'
      ],
      targetAudience: 'E-commerce, SaaS companies, Retail, Service businesses',
      setupTime: '2-3 weeks',
      freeTrial: '21 days',
      support: 'Customer success manager and technical support',
      integrations: ['Salesforce', 'HubSpot', 'Zendesk', 'Intercom', 'Shopify', 'WooCommerce', 'Magento'],
      link: 'https://ziontechgroup.com/ai-customer-experience',
      caseStudy: 'E-commerce platform increased customer satisfaction scores by 45%'
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns with predictive targeting and optimization',
      category: 'ai-marketing',
      icon: Target,
      price: '$1,799/month',
      features: [
        'Predictive customer targeting',
        'Dynamic content personalization',
        'Optimal send time prediction',
        'A/B testing automation',
        'Cross-channel campaign orchestration',
        'ROI optimization algorithms',
        'Customer journey mapping',
        'Real-time campaign adjustments'
      ],
      benefits: [
        'Increase marketing ROI by 300%',
        'Improve email open rates by 60%',
        'Reduce customer acquisition costs',
        'Automate campaign optimization',
        'Scale marketing efforts efficiently'
      ],
      targetAudience: 'Marketing agencies, E-commerce, SaaS, B2B companies',
      setupTime: '1-2 weeks',
      freeTrial: '14 days',
      support: 'Marketing specialist and technical support',
      integrations: ['Mailchimp', 'HubSpot', 'Marketo', 'Pardot', 'Facebook Ads', 'Google Ads', 'LinkedIn Ads'],
      link: 'https://ziontechgroup.com/ai-marketing-automation',
      caseStudy: 'Marketing agency increased client ROI by 400% using our AI automation'
    },
    {
      id: 'ai-predictive-maintenance',
      name: 'AI Predictive Maintenance',
      description: 'Machine learning-powered equipment monitoring and failure prediction',
      category: 'ai-industrial',
      icon: Settings,
      price: '$3,999/month',
      features: [
        'Real-time equipment monitoring',
        'Failure prediction algorithms',
        'Maintenance scheduling optimization',
        'Anomaly detection and alerting',
        'Performance trend analysis',
        'Cost optimization recommendations',
        'IoT sensor integration',
        'Custom dashboard creation'
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-462c
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
<<<<<<< HEAD
        'Reduce unplanned downtime by 70%',
        'Lower maintenance costs by 40%',
        'Extend equipment lifespan',
        'Improve operational efficiency',
        'Prevent catastrophic failures'
      ],
      targetAudience: 'Manufacturing, Energy, Transportation, Healthcare equipment',
      setupTime: '3-4 weeks',
      freeTrial: '30 days',
      support: 'Industrial AI specialist and 24/7 monitoring',
      integrations: ['Siemens', 'GE Predix', 'PTC ThingWorx', 'AWS IoT', 'Azure IoT', 'Custom sensors'],
      link: 'https://ziontechgroup.com/ai-predictive-maintenance',
      caseStudy: 'Manufacturing plant reduced downtime by 75% and saved $2M annually'
    },
    {
      id: 'ai-supply-chain-optimization',
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting and logistics optimization',
      category: 'ai-logistics',
      icon: Package,
      price: '$2,799/month',
      features: [
        'Demand forecasting and planning',
        'Inventory optimization algorithms',
        'Route optimization and logistics',
        'Supplier performance analysis',
        'Risk assessment and mitigation',
        'Cost optimization recommendations',
        'Real-time supply chain monitoring',
        'Automated decision making'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Improve delivery times by 25%',
        'Minimize supply chain disruptions',
        'Optimize supplier relationships',
        'Increase overall efficiency'
      ],
      targetAudience: 'Retail, Manufacturing, Distribution, E-commerce',
      setupTime: '2-3 weeks',
      freeTrial: '21 days',
      support: 'Supply chain specialist and ongoing optimization',
      integrations: ['SAP', 'Oracle', 'JDA', 'Manhattan Associates', 'Blue Yonder', 'Custom ERP systems'],
      link: 'https://ziontechgroup.com/ai-supply-chain-optimization',
      caseStudy: 'Retail chain reduced inventory costs by $5M while improving stock availability'
    },
    {
      id: 'ai-fraud-detection',
      name: 'AI Fraud Detection',
      description: 'Advanced fraud prevention using machine learning and real-time monitoring',
      category: 'ai-security',
      icon: Shield,
      price: '$1,999/month',
      features: [
        'Real-time fraud detection',
        'Behavioral analysis and profiling',
        'Transaction risk scoring',
        'Pattern recognition algorithms',
        'Automated response systems',
        'False positive reduction',
        'Multi-channel monitoring',
        'Custom rule creation'
      ],
      benefits: [
        'Reduce fraud losses by 80%',
        'Minimize false positives by 60%',
        'Real-time threat detection',
        'Compliance with regulations',
        'Protect customer trust'
      ],
      targetAudience: 'Banks, Payment processors, E-commerce, Insurance, Fintech',
      setupTime: '1-2 weeks',
      freeTrial: '14 days',
      support: 'Security specialist and 24/7 monitoring',
      integrations: ['Visa', 'Mastercard', 'PayPal', 'Stripe', 'Square', 'Custom payment systems'],
      link: 'https://ziontechgroup.com/ai-fraud-detection',
      caseStudy: 'Payment processor reduced fraud losses by $10M annually'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      description: 'Intelligent content creation for marketing, documentation, and communication',
      category: 'ai-content',
      icon: FileText,
      price: '$1,299/month',
      features: [
        'Blog post and article generation',
        'Social media content creation',
        'Email marketing content',
        'Product descriptions and copy',
        'Technical documentation',
        'Multi-language content generation',
        'SEO-optimized content',
        'Brand voice consistency'
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-462c
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
<<<<<<< HEAD
        'Create content 10x faster',
        'Maintain consistent quality',
        'Scale content production',
        'Improve SEO performance',
        'Reduce content creation costs'
      ],
      targetAudience: 'Content agencies, E-commerce, SaaS, Marketing teams',
      setupTime: '1 week',
      freeTrial: '7 days',
      support: 'Content specialist and training',
      integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Buffer', 'Custom CMS'],
      link: 'https://ziontechgroup.com/ai-content-generation',
      caseStudy: 'Content agency increased output by 500% while maintaining quality'
    },
    {
      id: 'ai-hr-analytics',
      name: 'AI HR Analytics',
      description: 'Human resources optimization using AI for recruitment, retention, and performance',
      category: 'ai-hr',
      icon: Users,
      price: '$1,899/month',
      features: [
        'Resume screening and matching',
        'Candidate assessment and scoring',
        'Employee performance analysis',
        'Retention prediction and prevention',
        'Skills gap identification',
        'Workforce planning optimization',
        'Bias detection and mitigation',
        'Custom HR metrics'
      ],
      benefits: [
        'Improve hiring quality by 40%',
        'Reduce time-to-hire by 50%',
        'Increase employee retention',
        'Identify high performers',
        'Optimize workforce planning'
      ],
      targetAudience: 'HR departments, Recruitment agencies, Large enterprises',
      setupTime: '2 weeks',
      freeTrial: '14 days',
      support: 'HR specialist and implementation support',
      integrations: ['Workday', 'BambooHR', 'ADP', 'Greenhouse', 'Lever', 'Custom HRIS'],
      link: 'https://ziontechgroup.com/ai-hr-analytics',
      caseStudy: 'Fortune 500 company improved hiring success rate by 45%'
    },
    {
      id: 'ai-process-automation',
      name: 'AI Process Automation',
      description: 'Intelligent workflow automation with decision-making capabilities',
      category: 'ai-automation',
      icon: Workflow,
      price: '$2,199/month',
      features: [
        'Intelligent workflow design',
        'Decision tree automation',
        'Exception handling and escalation',
        'Process optimization recommendations',
        'Multi-system integration',
        'Custom automation rules',
        'Performance monitoring',
        'Continuous improvement'
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-462c
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
<<<<<<< HEAD
        'Automate 80% of repetitive tasks',
        'Reduce processing time by 90%',
        'Eliminate human errors',
        'Improve compliance',
        'Scale operations efficiently'
      ],
      targetAudience: 'Any business with repetitive processes',
      setupTime: '2-3 weeks',
      freeTrial: '21 days',
      support: 'Process automation specialist',
      integrations: ['Microsoft Power Automate', 'UiPath', 'Automation Anywhere', 'Custom systems'],
      link: 'https://ziontechgroup.com/ai-process-automation',
      caseStudy: 'Insurance company automated 90% of claims processing'
    },
    {
      id: 'ai-quality-assurance',
      name: 'AI Quality Assurance',
      description: 'Automated quality control and testing using computer vision and ML',
      category: 'ai-quality',
      icon: CheckSquare,
      price: '$1,599/month',
      features: [
        'Automated visual inspection',
        'Defect detection and classification',
        'Quality trend analysis',
        'Predictive quality issues',
        'Custom quality metrics',
        'Real-time monitoring',
        'Statistical process control',
        'Root cause analysis'
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-462c
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
<<<<<<< HEAD
        'Improve quality by 95%',
        'Reduce inspection time by 80%',
        'Prevent defects before production',
        'Ensure consistent quality',
        'Reduce waste and rework'
      ],
      targetAudience: 'Manufacturing, Food & beverage, Pharmaceuticals, Electronics',
      setupTime: '2-3 weeks',
      freeTrial: '21 days',
      support: 'Quality specialist and technical support',
      integrations: ['Custom production systems', 'MES', 'ERP', 'Quality management systems'],
      link: 'https://ziontechgroup.com/ai-quality-assurance',
      caseStudy: 'Manufacturer reduced defects by 90% and saved $3M in quality costs'
    },
    {
      id: 'ai-energy-management',
      name: 'AI Energy Management',
      description: 'Smart energy optimization and consumption monitoring for buildings and facilities',
      category: 'ai-energy',
      icon: Zap,
      price: '$1,799/month',
      features: [
        'Energy consumption monitoring',
        'Predictive energy optimization',
        'Demand response management',
        'Renewable energy integration',
        'Cost optimization algorithms',
        'Carbon footprint tracking',
        'Real-time energy analytics',
        'Automated energy controls'
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-462c
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
<<<<<<< HEAD
        'Reduce energy costs by 30%',
        'Improve energy efficiency',
        'Optimize renewable energy usage',
        'Reduce carbon footprint',
        'Ensure energy reliability'
      ],
      targetAudience: 'Commercial buildings, Manufacturing, Data centers, Utilities',
      setupTime: '2-3 weeks',
      freeTrial: '21 days',
      support: 'Energy specialist and ongoing optimization',
      integrations: ['Building management systems', 'Smart meters', 'Solar inverters', 'Battery storage'],
      link: 'https://ziontechgroup.com/ai-energy-management',
      caseStudy: 'Office building reduced energy costs by $500K annually'
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-462c
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Grid3X3 },
<<<<<<< HEAD
    { id: 'ai-analytics', name: 'AI Analytics', icon: BarChart },
    { id: 'ai-automation', name: 'AI Automation', icon: Workflow },
    { id: 'ai-customer', name: 'AI Customer', icon: Users },
    { id: 'ai-marketing', name: 'AI Marketing', icon: Target },
    { id: 'ai-industrial', name: 'AI Industrial', icon: Settings },
    { id: 'ai-logistics', name: 'AI Logistics', icon: Package },
    { id: 'ai-security', name: 'AI Security', icon: Shield },
    { id: 'ai-content', name: 'AI Content', icon: FileText },
    { id: 'ai-hr', name: 'AI HR', icon: Users },
    { id: 'ai-quality', name: 'AI Quality', icon: CheckSquare },
    { id: 'ai-energy', name: 'AI Energy', icon: Zap }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-462c

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 cyber-grid">
=======
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 cyber-grid neural-network-bg">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-462c
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse">
            Advanced <span className="holographic-text">AI Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto neon-glow">
<<<<<<< HEAD
            Transform your business with cutting-edge artificial intelligence solutions. 
            From predictive analytics to intelligent automation, we deliver enterprise-grade AI services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
=======
            Transform your business with cutting-edge artificial intelligence solutions designed to solve complex challenges and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-462c
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
<<<<<<< HEAD
              <Phone className="w-5 h-5 inline mr-2" />
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-462c
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
<<<<<<< HEAD
              <Mail className="w-5 h-5 inline mr-2" />
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-462c
              Get AI Consultation
            </a>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
=======
      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-462c
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
<<<<<<< HEAD
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'
                }`}
              >
                {category.name}
=======
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-slate-900 cyber-glow-pulse'
                    : 'bg-white/10 text-white hover:bg-cyan-400/20 hover:text-cyan-400'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-462c
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
<<<<<<< HEAD
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Setup Time:</span>
                    <span className="text-white">{service.setupTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Free Trial:</span>
                    <span className="text-green-400">{service.freeTrial}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Target:</span>
                    <span className="text-white">{service.targetAudience}</span>
                  </div>
                </div>

                {service.caseStudy && (
                  <div className="mb-4 p-3 bg-green-900/20 border border-green-400/20 rounded-lg">
                    <p className="text-sm text-green-300 italic">"{service.caseStudy}"</p>
                  </div>
                )}

                <div className="space-y-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="block w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 inline mr-2" />
                    Get Demo
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-462c
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
<<<<<<< HEAD
            Our AI services are designed to deliver measurable results. 
            All implementations include free trials, dedicated support, and ongoing optimization.
=======
            Let our AI experts help you identify the perfect solutions for your business challenges.
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-462c
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
<<<<<<< HEAD
              Get Custom AI Strategy
=======
              Email Us
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-462c
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;