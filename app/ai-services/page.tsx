'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  Zap, 
  BarChart, 
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
  Users,
  Globe,
  Database,
  Settings,
  Cpu,
  Lock,
  Sparkles,
  Activity,
  PieChart,
  Layers,
  Workflow,
  Bot,
  Image,
  Video,
  Music,
  Code2,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Wifi,
  HardDrive,
  Network,
  AlertTriangle,
  RefreshCw,
  Download,
  Upload,
  Share2,
  Maximize,
  Minimize,
  RotateCcw,
  Play,
  Pause,
  Square,
  Volume2,
  VolumeX,
  MicIcon,
  MicOff,
  Camera,
  CameraOff,
  Headphones,
  HeadphonesIcon,
  Speaker,
  Tv,
  Laptop,
  Tablet,
  Watch,
  Gamepad2,
  Joystick,
  MousePointer,
  Keyboard,
  Mouse,
  Printer,
  Scanner,
  Fax,
  Router,
  Switch,
  Hub,
  Cable,
  Plug,
  Battery,
  BatteryCharging,
  Power,
  PowerOff,
  Wrench,
  Tool,
  Hammer,
  Screwdriver,
  Cog,
  Sliders,
  ToggleLeft,
  ToggleRight,
  Toggle,
  Switch as SwitchIcon,
  Button,
  Knob,
  Dial,
  Slider,
  Progress,
  BarChart3,
  LineChart,
  AreaChart,
  ScatterChart,
  PieChart as PieChartIcon,
  DonutChart,
  Gauge,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudSun,
  CloudMoon,
  CloudSunRain,
  CloudMoonRain,
  CloudSnowRain,
  CloudLightningRain,
  CloudDrizzleRain,
  CloudFogRain,
  CloudHailRain,
  CloudSunSnow,
  CloudMoonSnow,
  CloudSunLightning,
  CloudMoonLightning,
  CloudSunDrizzle,
  CloudMoonDrizzle,
  CloudSunFog,
  CloudMoonFog,
  CloudSunHail,
  CloudMoonHail,
  CloudSunRainSnow,
  CloudMoonRainSnow,
  CloudSunLightningRain,
  CloudMoonLightningRain,
  CloudSunDrizzleRain,
  CloudMoonDrizzleRain,
  CloudSunFogRain,
  CloudMoonFogRain,
  CloudSunHailRain,
  CloudMoonHailRain,
  CloudSunSnowRain,
  CloudMoonSnowRain,
  CloudSunLightningSnow,
  CloudMoonLightningSnow,
  CloudSunDrizzleSnow,
  CloudMoonDrizzleSnow,
  CloudSunFogSnow,
  CloudMoonFogSnow,
  CloudSunHailSnow,
  CloudMoonHailSnow,
  CloudSunRainLightning,
  CloudMoonRainLightning,
  CloudSunSnowLightning,
  CloudMoonSnowLightning,
  CloudSunDrizzleLightning,
  CloudMoonDrizzleLightning,
  CloudSunFogLightning,
  CloudMoonFogLightning,
  CloudSunHailLightning,
  CloudMoonHailLightning,
  CloudSunRainDrizzle,
  CloudMoonRainDrizzle,
  CloudSunSnowDrizzle,
  CloudMoonSnowDrizzle,
  CloudSunLightningDrizzle,
  CloudMoonLightningDrizzle,
  CloudSunFogDrizzle,
  CloudMoonFogDrizzle,
  CloudSunHailDrizzle,
  CloudMoonHailDrizzle,
  CloudSunRainFog,
  CloudMoonRainFog,
  CloudSunSnowFog,
  CloudMoonSnowFog,
  CloudSunLightningFog,
  CloudMoonLightningFog,
  CloudSunDrizzleFog,
  CloudMoonDrizzleFog,
  CloudSunHailFog,
  CloudMoonHailFog,
  CloudSunRainHail,
  CloudMoonRainHail,
  CloudSunSnowHail,
  CloudMoonSnowHail,
  CloudSunLightningHail,
  CloudMoonLightningHail,
  CloudSunDrizzleHail,
  CloudMoonDrizzleHail,
  CloudSunFogHail,
  CloudMoonFogHail,
  CloudSunRainSnow,
  CloudMoonRainSnow,
  CloudSunLightningSnow,
  CloudMoonLightningSnow,
  CloudSunDrizzleSnow,
  CloudMoonDrizzleSnow,
  CloudSunFogSnow,
  CloudMoonFogSnow,
  CloudSunHailSnow,
  CloudMoonHailSnow,
  CloudSunRainLightning,
  CloudMoonRainLightning,
  CloudSunSnowLightning,
  CloudMoonSnowLightning,
  CloudSunDrizzleLightning,
  CloudMoonDrizzleLightning,
  CloudSunFogLightning,
  CloudMoonFogLightning,
  CloudSunHailLightning,
  CloudMoonHailLightning,
  CloudSunRainDrizzle,
  CloudMoonRainDrizzle,
  CloudSunSnowDrizzle,
  CloudMoonSnowDrizzle,
  CloudSunLightningDrizzle,
  CloudMoonLightningDrizzle,
  CloudSunFogDrizzle,
  CloudMoonFogDrizzle,
  CloudSunHailDrizzle,
  CloudMoonHailDrizzle,
  CloudSunRainFog,
  CloudMoonRainFog,
  CloudSunSnowFog,
  CloudMoonSnowFog,
  CloudSunLightningFog,
  CloudMoonLightningFog,
  CloudSunDrizzleFog,
  CloudMoonDrizzleFog,
  CloudSunHailFog,
  CloudMoonHailFog,
  CloudSunRainHail,
  CloudMoonRainHail,
  CloudSunSnowHail,
  CloudMoonSnowHail,
  CloudSunLightningHail,
  CloudMoonLightningHail,
  CloudSunDrizzleHail,
  CloudMoonDrizzleHail,
  CloudSunFogHail,
  CloudMoonFogHail
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices = [
    // Core AI Services
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'Comprehensive artificial intelligence solutions tailored to your business needs',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Deep Learning',
        'Neural Networks',
        'AI Consulting',
        'Custom AI Development'
      ],
      price: 'Starting at $1,500/month',
      category: 'Core AI',
      icon: Brain,
      popular: true,
      capabilities: [
        'Custom AI model development',
        'Real-time data processing',
        'Multi-language support',
        'Scalable cloud infrastructure',
        'API integration',
        '24/7 monitoring and support'
      ],
      benefits: [
        'Increase efficiency by 40-60%',
        'Reduce operational costs by 30-50%',
        'Improve decision-making accuracy',
        'Automate complex processes',
        'Scale operations without proportional staff increases'
      ],
      useCases: [
        'Customer service automation',
        'Predictive maintenance',
        'Fraud detection',
        'Content generation',
        'Process optimization'
      ]
    },
    {
      id: 'ai-marketing-automation',
      title: 'AI Marketing Automation',
      description: 'Revolutionary AI-powered marketing automation that personalizes customer experiences and maximizes ROI',
      features: [
        'Intelligent Campaign Management',
        'Customer Segmentation',
        'Personalized Content Generation',
        'Predictive Customer Behavior',
        'Multi-channel Optimization',
        'Real-time A/B Testing',
        'ROI Optimization',
        'Advanced Analytics'
      ],
      price: 'Starting at $299/month',
      category: 'Marketing AI',
      icon: Target,
      popular: true,
      capabilities: [
        'Automated email campaigns',
        'Social media management',
        'Ad optimization across platforms',
        'Lead scoring and nurturing',
        'Customer journey mapping',
        'Performance tracking and reporting'
      ],
      benefits: [
        'Increase conversion rates by 35-45%',
        'Reduce marketing costs by 25-40%',
        'Improve customer engagement',
        'Automate repetitive tasks',
        'Scale marketing efforts efficiently'
      ],
      useCases: [
        'Email marketing campaigns',
        'Social media advertising',
        'Content marketing',
        'Lead generation',
        'Customer retention'
      ]
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support',
      description: 'Intelligent customer support solutions with chatbots, sentiment analysis, and automated ticket routing',
      features: [
        'AI-Powered Chatbots',
        'Sentiment Analysis',
        'Automated Ticket Routing',
        'Knowledge Base Management',
        'Multi-language Support',
        '24/7 Availability',
        'Escalation Management',
        'Performance Analytics'
      ],
      price: 'Starting at $199/month',
      category: 'Support AI',
      icon: MessageSquare,
      popular: true,
      capabilities: [
        'Natural language understanding',
        'Context-aware responses',
        'Integration with CRM systems',
        'Voice and text support',
        'Real-time translation',
        'Customer satisfaction tracking'
      ],
      benefits: [
        'Reduce response time by 80%',
        'Increase customer satisfaction',
        'Handle 10x more inquiries',
        'Reduce support costs by 60%',
        'Provide consistent service quality'
      ],
      useCases: [
        'Customer service automation',
        'Technical support',
        'Sales inquiries',
        'Account management',
        'Product information'
      ]
    },
    {
      id: 'ai-data-analytics',
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling',
      features: [
        'Predictive Analytics',
        'Real-time Data Processing',
        'Custom Dashboards',
        'Machine Learning Models',
        'Data Visualization',
        'Automated Reporting',
        'Anomaly Detection',
        'Trend Analysis'
      ],
      price: 'Starting at $399/month',
      category: 'Analytics AI',
      icon: BarChart,
      popular: true,
      capabilities: [
        'Big data processing',
        'Real-time insights',
        'Custom model training',
        'Data integration',
        'Visualization tools',
        'Automated alerts'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify opportunities and risks',
        'Improve operational efficiency',
        'Reduce manual analysis time',
        'Increase accuracy of predictions'
      ],
      useCases: [
        'Business intelligence',
        'Financial forecasting',
        'Market analysis',
        'Operational optimization',
        'Risk management'
      ]
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing, image generation, and video production',
      features: [
        'AI Writing Assistant',
        'Image Generation',
        'Video Creation',
        'SEO Optimization',
        'Multi-language Support',
        'Brand Voice Consistency',
        'Content Templates',
        'Plagiarism Detection'
      ],
      price: 'Starting at $149/month',
      category: 'Content AI',
      icon: FileText,
      popular: false,
      capabilities: [
        'Blog post generation',
        'Social media content',
        'Marketing copy',
        'Technical documentation',
        'Multimedia creation',
        'Content optimization'
      ],
      benefits: [
        'Reduce content creation time by 70%',
        'Maintain consistent quality',
        'Scale content production',
        'Improve SEO performance',
        'Reduce content costs'
      ],
      useCases: [
        'Blog and article writing',
        'Social media posts',
        'Marketing materials',
        'Product descriptions',
        'Email campaigns'
      ]
    },
    {
      id: 'ai-healthcare-solutions',
      title: 'AI Healthcare Solutions',
      description: 'HIPAA-compliant AI solutions for medical imaging, drug discovery, and patient care optimization',
      features: [
        'Medical Image Analysis',
        'Drug Discovery Support',
        'Patient Risk Assessment',
        'Diagnostic Assistance',
        'Treatment Recommendations',
        'Clinical Decision Support',
        'HIPAA Compliance',
        'Integration with EHR'
      ],
      price: 'Starting at $1,999/month',
      category: 'Healthcare AI',
      icon: Shield,
      popular: false,
      capabilities: [
        'Radiology image analysis',
        'Pathology detection',
        'Patient monitoring',
        'Drug interaction checking',
        'Clinical trial optimization',
        'Telemedicine support'
      ],
      benefits: [
        'Improve diagnostic accuracy',
        'Reduce medical errors',
        'Accelerate drug development',
        'Enhance patient outcomes',
        'Optimize resource allocation'
      ],
      useCases: [
        'Medical imaging analysis',
        'Drug discovery',
        'Patient monitoring',
        'Clinical decision support',
        'Telemedicine'
      ]
    },
    {
      id: 'ai-financial-services',
      title: 'AI Financial Services',
      description: 'Advanced AI solutions for fraud detection, risk assessment, and algorithmic trading',
      features: [
        'Fraud Detection',
        'Risk Assessment',
        'Algorithmic Trading',
        'Credit Scoring',
        'Compliance Monitoring',
        'Market Analysis',
        'Portfolio Optimization',
        'Regulatory Reporting'
      ],
      price: 'Starting at $1,499/month',
      category: 'Finance AI',
      icon: TrendingUp,
      popular: false,
      capabilities: [
        'Real-time fraud detection',
        'Credit risk modeling',
        'Trading algorithm development',
        'Regulatory compliance',
        'Market prediction',
        'Portfolio management'
      ],
      benefits: [
        'Reduce fraud losses by 90%',
        'Improve risk assessment accuracy',
        'Increase trading profits',
        'Ensure regulatory compliance',
        'Optimize investment strategies'
      ],
      useCases: [
        'Banking operations',
        'Investment management',
        'Insurance underwriting',
        'Trading platforms',
        'Risk management'
      ]
    },
    {
      id: 'ai-ecommerce-solutions',
      title: 'AI E-commerce Solutions',
      description: 'Intelligent e-commerce platform with recommendation engines and dynamic pricing',
      features: [
        'Product Recommendations',
        'Dynamic Pricing',
        'Inventory Optimization',
        'Customer Insights',
        'Sales Forecasting',
        'Personalized Shopping',
        'Chatbot Integration',
        'Visual Search'
      ],
      price: 'Starting at $799/month',
      category: 'E-commerce AI',
      icon: Globe,
      popular: false,
      capabilities: [
        'Recommendation engine',
        'Price optimization',
        'Inventory management',
        'Customer segmentation',
        'Visual search',
        'Personalization'
      ],
      benefits: [
        'Increase sales by 25-35%',
        'Improve customer experience',
        'Optimize inventory levels',
        'Reduce cart abandonment',
        'Maximize revenue per customer'
      ],
      useCases: [
        'Online retail',
        'Marketplace optimization',
        'Customer personalization',
        'Inventory management',
        'Pricing strategies'
      ]
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity',
      description: 'Advanced AI-powered cybersecurity solutions for threat detection and prevention',
      features: [
        'Threat Detection',
        'Anomaly Detection',
        'Behavioral Analysis',
        'Incident Response',
        'Vulnerability Assessment',
        'Security Monitoring',
        'Compliance Management',
        'Risk Assessment'
      ],
      price: 'Starting at $599/month',
      category: 'Security AI',
      icon: Lock,
      popular: false,
      capabilities: [
        'Real-time threat monitoring',
        'Automated incident response',
        'Security analytics',
        'Compliance reporting',
        'Risk assessment',
        'Threat intelligence'
      ],
      benefits: [
        'Detect threats 10x faster',
        'Reduce false positives by 80%',
        'Improve security posture',
        'Automate incident response',
        'Ensure compliance'
      ],
      useCases: [
        'Network security',
        'Endpoint protection',
        'Cloud security',
        'Compliance monitoring',
        'Incident response'
      ]
    },
    {
      id: 'ai-mobile-apps',
      title: 'AI Mobile Applications',
      description: 'Intelligent mobile applications with AI integration and modern UX design',
      features: [
        'AI-Powered Features',
        'Natural Language Interface',
        'Computer Vision',
        'Predictive Analytics',
        'Personalization',
        'Voice Recognition',
        'Image Recognition',
        'Offline AI Processing'
      ],
      price: 'Starting at $1,299/month',
      category: 'Mobile AI',
      icon: Smartphone,
      popular: false,
      capabilities: [
        'Cross-platform development',
        'AI model integration',
        'Real-time processing',
        'Offline capabilities',
        'Cloud synchronization',
        'Performance optimization'
      ],
      benefits: [
        'Enhanced user experience',
        'Intelligent automation',
        'Personalized content',
        'Improved engagement',
        'Competitive advantage'
      ],
      useCases: [
        'Mobile commerce',
        'Health and fitness',
        'Productivity apps',
        'Entertainment',
        'Social networking'
      ]
    },
    {
      id: 'ai-sales-automation',
      title: 'AI Sales Automation',
      description: 'Intelligent sales automation with lead scoring, pipeline management, and predictive analytics',
      features: [
        'Lead Scoring',
        'Pipeline Management',
        'Sales Forecasting',
        'Automated Follow-ups',
        'Customer Insights',
        'Deal Optimization',
        'Performance Analytics',
        'CRM Integration'
      ],
      price: 'Starting at $299/month',
      category: 'Sales AI',
      icon: Target,
      popular: false,
      capabilities: [
        'Automated lead qualification',
        'Sales process optimization',
        'Customer behavior analysis',
        'Deal probability scoring',
        'Revenue forecasting',
        'Team performance tracking'
      ],
      benefits: [
        'Increase sales by 30-40%',
        'Improve lead quality',
        'Reduce sales cycle time',
        'Optimize sales processes',
        'Enhance team productivity'
      ],
      useCases: [
        'Lead generation',
        'Sales pipeline management',
        'Customer relationship management',
        'Sales forecasting',
        'Team performance optimization'
      ]
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent workflows and decision-making capabilities',
      features: [
        'Process Automation',
        'Intelligent Routing',
        'Decision Making',
        'Exception Handling',
        'Integration Management',
        'Performance Monitoring',
        'Compliance Tracking',
        'Scalable Architecture'
      ],
      price: 'Starting at $99/month',
      category: 'Automation AI',
      icon: Zap,
      popular: false,
      capabilities: [
        'Workflow design and execution',
        'Intelligent decision trees',
        'Exception handling',
        'Integration with existing systems',
        'Performance monitoring',
        'Compliance management'
      ],
      benefits: [
        'Reduce manual work by 80%',
        'Improve process efficiency',
        'Ensure compliance',
        'Scale operations',
        'Reduce errors'
      ],
      useCases: [
        'Business process automation',
        'Document processing',
        'Approval workflows',
        'Data processing',
        'Customer onboarding'
      ]
    },
    {
      id: 'ai-data-visualization',
      title: 'AI Data Visualization',
      description: 'Transform complex data into interactive visualizations with AI-powered insights',
      features: [
        'Interactive Dashboards',
        'Real-time Visualization',
        'AI-Powered Insights',
        'Custom Charts',
        'Data Storytelling',
        'Collaborative Features',
        'Mobile Responsive',
        'Export Capabilities'
      ],
      price: 'Starting at $149/month',
      category: 'Visualization AI',
      icon: PieChart,
      popular: false,
      capabilities: [
        'Dynamic chart generation',
        'Real-time data updates',
        'Interactive exploration',
        'Custom dashboard creation',
        'Data storytelling',
        'Collaborative features'
      ],
      benefits: [
        'Improve data comprehension',
        'Enable faster decision-making',
        'Enhance data storytelling',
        'Increase user engagement',
        'Simplify complex data'
      ],
      useCases: [
        'Business intelligence',
        'Financial reporting',
        'Marketing analytics',
        'Operational dashboards',
        'Executive reporting'
      ]
    },
    {
      id: 'ai-lead-generation',
      title: 'AI Lead Generation',
      description: 'Generate high-quality leads with AI-powered prospecting and automated outreach',
      features: [
        'Intelligent Prospecting',
        'Lead Scoring',
        'Automated Outreach',
        'Email Sequences',
        'Social Media Mining',
        'Contact Enrichment',
        'Follow-up Automation',
        'Performance Tracking'
      ],
      price: 'Starting at $199/month',
      category: 'Lead Gen AI',
      icon: Target,
      popular: false,
      capabilities: [
        'Automated prospect identification',
        'Lead qualification',
        'Personalized outreach',
        'Multi-channel campaigns',
        'Contact data enrichment',
        'Performance optimization'
      ],
      benefits: [
        'Increase lead volume by 200%',
        'Improve lead quality',
        'Reduce manual prospecting',
        'Scale outreach efforts',
        'Optimize conversion rates'
      ],
      useCases: [
        'B2B lead generation',
        'Sales prospecting',
        'Marketing campaigns',
        'Customer acquisition',
        'Market expansion'
      ]
    },
    {
      id: 'ai-document-processing',
      title: 'AI Document Processing',
      description: 'Automatically extract, process, and analyze documents with AI-powered OCR and data extraction',
      features: [
        'OCR Technology',
        'Data Extraction',
        'Document Classification',
        'Form Processing',
        'Text Analysis',
        'Quality Assurance',
        'Batch Processing',
        'Integration APIs'
      ],
      price: 'Starting at $149/month',
      category: 'Document AI',
      icon: FileText,
      popular: false,
      capabilities: [
        'Multi-format document support',
        'Intelligent data extraction',
        'Document classification',
        'Quality validation',
        'Batch processing',
        'API integration'
      ],
      benefits: [
        'Reduce processing time by 90%',
        'Improve accuracy',
        'Eliminate manual data entry',
        'Scale document processing',
        'Ensure data quality'
      ],
      useCases: [
        'Invoice processing',
        'Contract analysis',
        'Form processing',
        'Document digitization',
        'Data extraction'
      ]
    },
    {
      id: 'ai-voice-assistant',
      title: 'AI Voice Assistant Platform',
      description: 'Build custom voice assistants with natural language understanding and multi-language support',
      features: [
        'Natural Language Processing',
        'Voice Recognition',
        'Multi-language Support',
        'Custom Wake Words',
        'Integration APIs',
        'Conversation Management',
        'Analytics Dashboard',
        'Custom Training'
      ],
      price: 'Starting at $299/month',
      category: 'Voice AI',
      icon: Mic,
      popular: false,
      capabilities: [
        'Voice command processing',
        'Natural conversation flow',
        'Multi-platform deployment',
        'Custom voice training',
        'Integration with existing systems',
        'Analytics and reporting'
      ],
      benefits: [
        'Improve user experience',
        'Enable hands-free operation',
        'Support multiple languages',
        'Reduce support costs',
        'Increase accessibility'
      ],
      useCases: [
        'Customer service',
        'Smart home automation',
        'Business applications',
        'Accessibility solutions',
        'Voice commerce'
      ]
    },
    {
      id: 'ai-predictive-maintenance',
      title: 'AI Predictive Maintenance',
      description: 'Prevent equipment failures with AI-powered predictive maintenance and real-time monitoring',
      features: [
        'Failure Prediction',
        'Real-time Monitoring',
        'Maintenance Scheduling',
        'Cost Optimization',
        'IoT Integration',
        'Alert System',
        'Performance Analytics',
        'Maintenance History'
      ],
      price: 'Starting at $599/month',
      category: 'Maintenance AI',
      icon: Settings,
      popular: false,
      capabilities: [
        'Equipment monitoring',
        'Failure prediction models',
        'Maintenance optimization',
        'Cost analysis',
        'IoT sensor integration',
        'Performance tracking'
      ],
      benefits: [
        'Reduce unplanned downtime by 70%',
        'Optimize maintenance costs',
        'Extend equipment lifespan',
        'Improve safety',
        'Increase operational efficiency'
      ],
      useCases: [
        'Manufacturing equipment',
        'Fleet management',
        'Building systems',
        'Industrial machinery',
        'Infrastructure monitoring'
      ]
    },
    {
      id: 'ai-supply-chain',
      title: 'AI Supply Chain Optimization',
      description: 'Optimize supply chain operations with AI-driven demand forecasting and inventory management',
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Route Planning',
        'Supplier Management',
        'Risk Assessment',
        'Cost Optimization',
        'Real-time Tracking',
        'Performance Analytics'
      ],
      price: 'Starting at $899/month',
      category: 'Supply Chain AI',
      icon: BarChart,
      popular: false,
      capabilities: [
        'Demand prediction models',
        'Inventory optimization',
        'Logistics planning',
        'Supplier performance analysis',
        'Risk management',
        'Cost optimization'
      ],
      benefits: [
        'Reduce inventory costs by 20-30%',
        'Improve demand accuracy',
        'Optimize logistics',
        'Reduce supply chain risks',
        'Increase efficiency'
      ],
      useCases: [
        'Retail inventory management',
        'Manufacturing supply chain',
        'Logistics optimization',
        'Procurement management',
        'Risk assessment'
      ]
    },
    {
      id: 'ai-quality-control',
      title: 'AI Quality Control System',
      description: 'Automated quality inspection using computer vision and machine learning for manufacturing',
      features: [
        'Computer Vision',
        'Defect Detection',
        'Real-time Inspection',
        'Quality Reports',
        'Integration APIs',
        'Custom Training',
        'Batch Processing',
        'Performance Metrics'
      ],
      price: 'Starting at $1,199/month',
      category: 'Quality AI',
      icon: Eye,
      popular: false,
      capabilities: [
        'Visual inspection automation',
        'Defect classification',
        'Quality scoring',
        'Real-time monitoring',
        'Custom model training',
        'Integration with production systems'
      ],
      benefits: [
        'Improve quality consistency',
        'Reduce inspection time by 80%',
        'Eliminate human error',
        'Scale quality control',
        'Reduce costs'
      ],
      useCases: [
        'Manufacturing quality control',
        'Food safety inspection',
        'Pharmaceutical quality',
        'Textile inspection',
        'Electronics testing'
      ]
    },
    {
      id: 'ai-energy-management',
      title: 'AI Energy Management',
      description: 'Optimize energy consumption with AI-powered smart grid management and renewable energy integration',
      features: [
        'Energy Optimization',
        'Smart Grid Management',
        'Renewable Integration',
        'Cost Analysis',
        'Carbon Footprint Tracking',
        'Predictive Analytics',
        'Real-time Monitoring',
        'Automated Controls'
      ],
      price: 'Starting at $799/month',
      category: 'Energy AI',
      icon: Zap,
      popular: false,
      capabilities: [
        'Energy consumption analysis',
        'Smart grid optimization',
        'Renewable energy integration',
        'Cost optimization',
        'Carbon footprint tracking',
        'Automated energy management'
      ],
      benefits: [
        'Reduce energy costs by 15-25%',
        'Improve energy efficiency',
        'Integrate renewable sources',
        'Reduce carbon footprint',
        'Optimize energy usage'
      ],
      useCases: [
        'Building energy management',
        'Industrial energy optimization',
        'Smart grid operations',
        'Renewable energy integration',
        'Carbon footprint reduction'
      ]
    },
    {
      id: 'ai-legal-analysis',
      title: 'AI Legal Document Analysis',
      description: 'Automated legal document review, contract analysis, and compliance monitoring',
      features: [
        'Document Review',
        'Contract Analysis',
        'Compliance Monitoring',
        'Risk Assessment',
        'Legal Research',
        'Due Diligence',
        'Clause Extraction',
        'Automated Reporting'
      ],
      price: 'Starting at $1,299/month',
      category: 'Legal AI',
      icon: FileText,
      popular: false,
      capabilities: [
        'Legal document analysis',
        'Contract review automation',
        'Compliance checking',
        'Risk assessment',
        'Legal research assistance',
        'Due diligence automation'
      ],
      benefits: [
        'Reduce review time by 80%',
        'Improve accuracy',
        'Ensure compliance',
        'Reduce legal costs',
        'Scale legal operations'
      ],
      useCases: [
        'Contract review',
        'Compliance monitoring',
        'Due diligence',
        'Legal research',
        'Risk assessment'
      ]
    },
    {
      id: 'ai-real-estate',
      title: 'AI Real Estate Analytics',
      description: 'Property valuation, market analysis, and investment recommendations powered by AI',
      features: [
        'Property Valuation',
        'Market Analysis',
        'Investment Insights',
        'Trend Prediction',
        'Portfolio Management',
        'Risk Assessment',
        'Comparative Analysis',
        'ROI Optimization'
      ],
      price: 'Starting at $499/month',
      category: 'Real Estate AI',
      icon: Globe,
      popular: false,
      capabilities: [
        'Automated property valuation',
        'Market trend analysis',
        'Investment opportunity identification',
        'Risk assessment',
        'Portfolio optimization',
        'Comparative market analysis'
      ],
      benefits: [
        'Improve investment decisions',
        'Reduce valuation time',
        'Identify opportunities',
        'Optimize portfolio performance',
        'Minimize risks'
      ],
      useCases: [
        'Property investment',
        'Real estate valuation',
        'Market analysis',
        'Portfolio management',
        'Risk assessment'
      ]
    },
    {
      id: 'ai-hr-assistant',
      title: 'AI HR Assistant',
      description: 'Streamline HR processes with AI-powered recruitment, employee analytics, and performance management',
      features: [
        'Resume Screening',
        'Candidate Matching',
        'Performance Analytics',
        'Employee Engagement',
        'Retention Analysis',
        'Skills Assessment',
        'Workforce Planning',
        'Compliance Management'
      ],
      price: 'Starting at $399/month',
      category: 'HR AI',
      icon: Users,
      popular: false,
      capabilities: [
        'Automated resume screening',
        'Candidate evaluation',
        'Performance tracking',
        'Employee engagement analysis',
        'Retention prediction',
        'Skills gap analysis'
      ],
      benefits: [
        'Reduce hiring time by 50%',
        'Improve candidate quality',
        'Enhance employee engagement',
        'Reduce turnover',
        'Optimize workforce planning'
      ],
      useCases: [
        'Recruitment automation',
        'Performance management',
        'Employee engagement',
        'Skills development',
        'Workforce planning'
      ]
    },
    {
      id: 'ai-insurance',
      title: 'AI Insurance Risk Assessment',
      description: 'Advanced risk evaluation and fraud detection for insurance companies',
      features: [
        'Risk Evaluation',
        'Fraud Detection',
        'Claims Processing',
        'Underwriting Support',
        'Compliance Monitoring',
        'Predictive Modeling',
        'Automated Decision Making',
        'Customer Profiling'
      ],
      price: 'Starting at $1,499/month',
      category: 'Insurance AI',
      icon: Shield,
      popular: false,
      capabilities: [
        'Automated risk assessment',
        'Fraud detection algorithms',
        'Claims processing automation',
        'Underwriting support',
        'Compliance monitoring',
        'Customer risk profiling'
      ],
      benefits: [
        'Reduce fraud losses by 60%',
        'Improve underwriting accuracy',
        'Accelerate claims processing',
        'Ensure compliance',
        'Optimize pricing'
      ],
      useCases: [
        'Auto insurance',
        'Health insurance',
        'Property insurance',
        'Life insurance',
        'Commercial insurance'
      ]
    },
    {
      id: 'ai-education',
      title: 'AI Educational Platform',
      description: 'Personalized learning experiences with AI-powered content adaptation and student analytics',
      features: [
        'Personalized Learning',
        'Content Adaptation',
        'Performance Analytics',
        'Learning Paths',
        'Progress Tracking',
        'Adaptive Testing',
        'Skill Assessment',
        'Gamification'
      ],
      price: 'Starting at $299/month',
      category: 'Education AI',
      icon: Users,
      popular: false,
      capabilities: [
        'Personalized learning paths',
        'Adaptive content delivery',
        'Student performance analysis',
        'Learning outcome prediction',
        'Skill gap identification',
        'Automated assessment'
      ],
      benefits: [
        'Improve learning outcomes',
        'Personalize education',
        'Identify learning gaps',
        'Optimize teaching methods',
        'Increase engagement'
      ],
      useCases: [
        'Online learning platforms',
        'Corporate training',
        'K-12 education',
        'Higher education',
        'Professional development'
      ]
    },
    {
      id: 'ai-transportation',
      title: 'AI Transportation Optimization',
      description: 'Optimize transportation routes, fleet management, and logistics with AI-powered decision making',
      features: [
        'Route Optimization',
        'Fleet Management',
        'Demand Prediction',
        'Fuel Optimization',
        'Driver Scheduling',
        'Maintenance Planning',
        'Real-time Tracking',
        'Performance Analytics'
      ],
      price: 'Starting at $699/month',
      category: 'Transportation AI',
      icon: Globe,
      popular: false,
      capabilities: [
        'Dynamic route optimization',
        'Fleet performance monitoring',
        'Demand forecasting',
        'Fuel consumption optimization',
        'Driver management',
        'Maintenance scheduling'
      ],
      benefits: [
        'Reduce fuel costs by 15-20%',
        'Improve delivery times',
        'Optimize fleet utilization',
        'Reduce maintenance costs',
        'Enhance customer satisfaction'
      ],
      useCases: [
        'Logistics optimization',
        'Fleet management',
        'Route planning',
        'Delivery optimization',
        'Transportation analytics'
      ]
    },
    {
      id: 'ai-environmental',
      title: 'AI Environmental Monitoring',
      description: 'Monitor environmental conditions and predict climate impacts using AI and IoT sensor data',
      features: [
        'Environmental Sensing',
        'Climate Prediction',
        'Pollution Monitoring',
        'Data Analysis',
        'Alert Systems',
        'Trend Analysis',
        'Compliance Reporting',
        'Predictive Modeling'
      ],
      price: 'Starting at $599/month',
      category: 'Environmental AI',
      icon: Globe,
      popular: false,
      capabilities: [
        'Real-time environmental monitoring',
        'Climate change prediction',
        'Pollution tracking',
        'Environmental risk assessment',
        'Compliance monitoring',
        'Sustainability reporting'
      ],
      benefits: [
        'Improve environmental monitoring',
        'Predict climate impacts',
        'Ensure compliance',
        'Optimize resource usage',
        'Support sustainability goals'
      ],
      useCases: [
        'Climate monitoring',
        'Pollution control',
        'Environmental compliance',
        'Sustainability management',
        'Risk assessment'
      ]
    },
    {
      id: 'ai-retail',
      title: 'AI Retail Personalization',
      description: 'Create personalized shopping experiences with AI-driven product recommendations and customer insights',
      features: [
        'Product Recommendations',
        'Customer Segmentation',
        'Price Optimization',
        'Inventory Management',
        'Customer Analytics',
        'Personalized Marketing',
        'Visual Search',
        'Omnichannel Integration'
      ],
      price: 'Starting at $799/month',
      category: 'Retail AI',
      icon: Globe,
      popular: false,
      capabilities: [
        'Personalized product recommendations',
        'Customer behavior analysis',
        'Dynamic pricing',
        'Inventory optimization',
        'Visual search technology',
        'Omnichannel personalization'
      ],
      benefits: [
        'Increase sales by 25-35%',
        'Improve customer experience',
        'Optimize inventory levels',
        'Reduce cart abandonment',
        'Maximize customer lifetime value'
      ],
      useCases: [
        'E-commerce personalization',
        'In-store recommendations',
        'Price optimization',
        'Inventory management',
        'Customer segmentation'
      ]
    },
    {
      id: 'ai-sports',
      title: 'AI Sports Analytics',
      description: 'Advanced sports performance analysis, injury prediction, and team optimization',
      features: [
        'Performance Analysis',
        'Injury Prediction',
        'Team Optimization',
        'Player Scouting',
        'Game Strategy',
        'Biomechanical Analysis',
        'Recovery Monitoring',
        'Tactical Insights'
      ],
      price: 'Starting at $999/month',
      category: 'Sports AI',
      icon: BarChart,
      popular: false,
      capabilities: [
        'Player performance analysis',
        'Injury risk assessment',
        'Team formation optimization',
        'Game strategy analysis',
        'Biomechanical monitoring',
        'Recovery tracking'
      ],
      benefits: [
        'Improve player performance',
        'Reduce injury risk',
        'Optimize team strategies',
        'Enhance training programs',
        'Increase competitive advantage'
      ],
      useCases: [
        'Professional sports',
        'Youth development',
        'Fitness training',
        'Sports medicine',
        'Team management'
      ]
    },
    {
      id: 'ai-mental-health',
      title: 'AI Mental Health Assistant',
      description: 'AI-powered mental health monitoring, mood tracking, and therapeutic support applications',
      features: [
        'Mood Tracking',
        'Stress Analysis',
        'Therapeutic Support',
        'Crisis Detection',
        'Wellness Recommendations',
        'Progress Monitoring',
        'Personalized Care',
        'Privacy Protection'
      ],
      price: 'Starting at $199/month',
      category: 'Mental Health AI',
      icon: Users,
      popular: false,
      capabilities: [
        'Mood and emotion analysis',
        'Stress level monitoring',
        'Therapeutic conversation',
        'Crisis intervention',
        'Wellness recommendations',
        'Progress tracking'
      ],
      benefits: [
        'Improve mental health outcomes',
        'Provide 24/7 support',
        'Enable early intervention',
        'Personalize treatment',
        'Reduce healthcare costs'
      ],
      useCases: [
        'Mental health apps',
        'Therapy support',
        'Wellness monitoring',
        'Crisis intervention',
        'Preventive care'
      ]
    }
  ];

  const categories = [
    'All',
    'Core AI',
    'Marketing AI',
    'Support AI',
    'Analytics AI',
    'Content AI',
    'Healthcare AI',
    'Finance AI',
    'E-commerce AI',
    'Security AI',
    'Mobile AI',
    'Sales AI',
    'Automation AI',
    'Visualization AI',
    'Lead Gen AI',
    'Document AI',
    'Voice AI',
    'Maintenance AI',
    'Supply Chain AI',
    'Quality AI',
    'Energy AI',
    'Legal AI',
    'Real Estate AI',
    'HR AI',
    'Insurance AI',
    'Education AI',
    'Transportation AI',
    'Environmental AI',
    'Retail AI',
    'Sports AI',
    'Mental Health AI'
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Discover our comprehensive AI services including machine learning, natural language processing, computer vision, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI consulting, Zion Tech Group" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI solutions for modern businesses" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with our comprehensive AI solutions. From machine learning to computer vision, 
              we provide cutting-edge artificial intelligence services that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
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
                      placeholder="Search AI services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
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
                {categories.slice(1, 8).map((category) => (
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

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All AI Services' : `${selectedCategory} Services`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Capabilities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.capabilities.slice(0, 3).map((capability, index) => (
                        <span key={index} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">
                          {capability}
                        </span>
                      ))}
                      {service.capabilities.length > 3 && (
                        <span className="text-xs text-gray-400">
                          +{service.capabilities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-300">Contact for custom pricing</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:+13024640950"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={`/ai-services/${service.id}`}
                      className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300 text-center"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
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
                We deliver proven results with cutting-edge AI technology and expert implementation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
                <p className="text-gray-300">
                  Our AI solutions have delivered measurable improvements for 500+ clients across industries
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">
                  Bank-level security and compliance for your critical data and AI models
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300">
                  Round-the-clock expert support and monitoring for your AI implementations
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Rapid Deployment</h3>
                <p className="text-gray-300">
                  Get your AI solutions up and running in weeks, not months
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your AI needs and create a custom solution that drives real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Email: kleber@ziontechgroup.com
                </a>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-300 text-sm mb-2">
                  📍 364 E Main St STE 1008, Middletown, DE 19709
                </p>
                <p className="text-gray-300 text-sm">
                  ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;