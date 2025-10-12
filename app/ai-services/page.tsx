import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Brain, Bot, BarChart3, Zap, Shield, Code, Cloud, Database, 
  MessageCircle, Mail, Phone, MapPin, CheckCircle, Star, Clock, Users, 
  TrendingUp, Sparkles, Layers, Target, Award, Lightbulb, Monitor, Server, 
  CircuitBoard, Atom, Satellite, Wrench, BarChart, PieChart, LineChart, 
  Activity, Eye, Search, Filter, Download, Upload, Share, Calendar, Timer, 
  Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, 
  Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, 
  Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, 
  HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, 
  Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, 
  Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, 
  Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, FileText, 
  Package, DollarSign, Globe, Lock, Cpu, Rocket, Network, Database as DbIcon
} from '../components/Icons'

export default function AIServicesPage() {
  const aiServices = [
    {
      icon: <Bot className="w-8 h-8 text-cyan-400" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent, conversational AI chatbots for customer service, sales, and support with our no-code platform.',
      price: 'Starting at $199/month',
      features: ['No-code builder', 'Multi-language support', 'API integrations', 'Analytics dashboard', 'Custom training'],
      link: '/ai-chatbot-builder',
      category: 'Conversational AI'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics, predictive modeling, and real-time reporting.',
      price: 'Starting at $299/month',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'Data visualization', 'Automated reports'],
      link: '/ai-analytics-dashboard',
      category: 'Data Intelligence'
    },
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: 'AI Code Assistant',
      description: 'Boost developer productivity with AI-powered code generation, debugging, and optimization tools.',
      price: 'Starting at $149/month',
      features: ['Code generation', 'Bug detection', 'Performance optimization', 'Documentation', 'Code review'],
      link: '/ai-code-assistant',
      category: 'Development Tools'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-pink-400" />,
      title: 'AI Customer Support',
      description: 'Automate customer support with intelligent ticket routing, sentiment analysis, and automated responses.',
      price: 'Starting at $249/month',
      features: ['Ticket routing', 'Sentiment analysis', 'Auto-responses', 'Multi-channel support', 'Performance metrics'],
      link: '/ai-customer-support',
      category: 'Customer Service'
    },
    {
      icon: <Mail className="w-8 h-8 text-orange-400" />,
      title: 'AI Email Marketing',
      description: 'Create personalized email campaigns with AI-driven content, optimal send times, and performance optimization.',
      price: 'Starting at $179/month',
      features: ['Personalized content', 'Send time optimization', 'A/B testing', 'Performance analytics', 'List segmentation'],
      link: '/ai-email-marketing',
      category: 'Marketing Automation'
    },
    {
      icon: <FileText className="w-8 h-8 text-indigo-400" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing with AI-powered writing tools.',
      price: 'Starting at $99/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content templates', 'Plagiarism check'],
      link: '/ai-content-generator',
      category: 'Content Creation'
    },
    {
      icon: <Mic className="w-8 h-8 text-cyan-400" />,
      title: 'AI Voice Assistant',
      description: 'Build custom voice assistants with natural language processing and speech synthesis capabilities.',
      price: 'Starting at $299/month',
      features: ['Natural language processing', 'Speech synthesis', 'Multi-language support', 'Custom integration', 'Voice analytics'],
      link: '/ai-voice-assistant',
      category: 'Voice Technology'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-powered threat detection, vulnerability assessment, and automated security responses.',
      price: 'Starting at $399/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Automated responses', 'Security monitoring', 'Compliance reporting'],
      link: '/ai-cybersecurity',
      category: 'Security'
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: 'AI Data Processing',
      description: 'Automate data extraction, cleaning, and analysis with intelligent document processing and OCR technology.',
      price: 'Starting at $199/month',
      features: ['Document processing', 'OCR technology', 'Data extraction', 'Format conversion', 'Batch processing'],
      link: '/ai-document-processing',
      category: 'Data Processing'
    },
    {
      icon: <BarChart className="w-8 h-8 text-yellow-400" />,
      title: 'AI Business Intelligence',
      description: 'Gain deep business insights with AI-powered analytics, forecasting, and strategic recommendations.',
      price: 'Starting at $349/month',
      features: ['Business forecasting', 'Strategic insights', 'Performance metrics', 'Trend analysis', 'Custom reports'],
      link: '/ai-business-intelligence',
      category: 'Business Intelligence'
    },
    {
      icon: <Calendar className="w-8 h-8 text-teal-400" />,
      title: 'AI Project Management',
      description: 'Optimize project workflows with AI-driven task prioritization, resource allocation, and progress tracking.',
      price: 'Starting at $179/month',
      features: ['Task prioritization', 'Resource optimization', 'Progress tracking', 'Risk assessment', 'Team collaboration'],
      link: '/ai-project-management',
      category: 'Project Management'
    },
    {
      icon: <Users className="w-8 h-8 text-rose-400" />,
      title: 'AI HR Assistant',
      description: 'Streamline HR processes with AI-powered recruitment, employee analytics, and automated HR workflows.',
      price: 'Starting at $229/month',
      features: ['Resume screening', 'Candidate matching', 'Employee analytics', 'Performance tracking', 'HR automation'],
      link: '/ai-hr-assistant',
      category: 'Human Resources'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-emerald-400" />,
      title: 'AI Financial Advisor',
      description: 'Get personalized financial insights, investment recommendations, and automated financial planning.',
      price: 'Starting at $299/month',
      features: ['Investment analysis', 'Risk assessment', 'Portfolio optimization', 'Financial planning', 'Market insights'],
      link: '/ai-financial-advisor',
      category: 'Financial Services'
    },
    {
      icon: <Camera className="w-8 h-8 text-purple-400" />,
      title: 'AI Computer Vision',
      description: 'Implement image recognition, object detection, and visual analysis for your business applications.',
      price: 'Starting at $249/month',
      features: ['Image recognition', 'Object detection', 'Visual analysis', 'Custom models', 'Real-time processing'],
      link: '/ai-computer-vision',
      category: 'Computer Vision'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'AI Translation Services',
      description: 'Break language barriers with AI-powered translation, localization, and multilingual content management.',
      price: 'Starting at $149/month',
      features: ['Real-time translation', 'Document translation', 'Website localization', 'Voice translation', 'Quality assurance'],
      link: '/ai-translation-services',
      category: 'Language Services'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: 'AI Healthcare Diagnostics',
      description: 'Advanced medical AI for diagnostic imaging, patient monitoring, and treatment recommendations.',
      price: 'Starting at $499/month',
      features: ['Medical imaging analysis', 'Patient monitoring', 'Treatment recommendations', 'Drug interaction checking', 'Clinical decision support'],
      link: '/ai-healthcare-diagnostics',
      category: 'Healthcare'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      title: 'AI Financial Forecasting',
      description: 'Predict market trends, analyze investment opportunities, and optimize financial portfolios with AI.',
      price: 'Starting at $299/month',
      features: ['Market prediction', 'Portfolio optimization', 'Risk assessment', 'Algorithmic trading', 'Financial modeling'],
      link: '/ai-financial-forecasting',
      category: 'Financial Services'
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: 'AI IoT Analytics',
      description: 'Intelligent analysis of IoT data streams for predictive maintenance and operational optimization.',
      price: 'Starting at $199/month',
      features: ['IoT data processing', 'Predictive maintenance', 'Anomaly detection', 'Real-time monitoring', 'Edge computing'],
      link: '/ai-iot-analytics',
      category: 'IoT Solutions'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-cyan-400" />,
      title: 'AI Conversational AI Platform',
      description: 'Enterprise-grade conversational AI platform with advanced natural language understanding.',
      price: 'Starting at $399/month',
      features: ['Advanced NLP', 'Multi-turn conversations', 'Context awareness', 'Voice integration', 'Custom training'],
      link: '/ai-conversational-ai',
      category: 'Conversational AI'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-emerald-400" />,
      title: 'AI Automated Testing',
      description: 'Intelligent test automation with AI-powered test generation, execution, and maintenance.',
      price: 'Starting at $179/month',
      features: ['Test generation', 'Automated execution', 'Bug detection', 'Performance testing', 'Regression testing'],
      link: '/ai-automated-testing',
      category: 'Quality Assurance'
    },
    {
      icon: <FileText className="w-8 h-8 text-indigo-400" />,
      title: 'AI Knowledge Management',
      description: 'Intelligent knowledge base with automated content organization and smart search capabilities.',
      price: 'Starting at $129/month',
      features: ['Content organization', 'Smart search', 'Knowledge extraction', 'Auto-categorization', 'Expert recommendations'],
      link: '/ai-knowledge-management',
      category: 'Knowledge Management'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: 'AI Customer Churn Prediction',
      description: 'Predict and prevent customer churn with AI-powered behavioral analysis and retention strategies.',
      price: 'Starting at $199/month',
      features: ['Churn prediction', 'Behavioral analysis', 'Retention strategies', 'Risk scoring', 'Intervention alerts'],
      link: '/ai-customer-churn',
      category: 'Customer Analytics'
    },
    {
      icon: <BarChart className="w-8 h-8 text-orange-400" />,
      title: 'AI Automated Reporting',
      description: 'Generate intelligent reports automatically with AI-powered data analysis and insights.',
      price: 'Starting at $89/month',
      features: ['Auto report generation', 'Data visualization', 'Insight extraction', 'Scheduled reports', 'Custom templates'],
      link: '/ai-automated-reporting',
      category: 'Business Intelligence'
    },
    {
      icon: <Mic className="w-8 h-8 text-teal-400" />,
      title: 'AI Voice Assistant Platform',
      description: 'Build custom voice assistants with advanced speech recognition and natural language processing.',
      price: 'Starting at $249/month',
      features: ['Speech recognition', 'Voice synthesis', 'Command processing', 'Multi-language support', 'Custom wake words'],
      link: '/ai-voice-assistant',
      category: 'Voice Technology'
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: 'AI Content Generation Pro',
      description: 'Advanced content creation with AI-powered writing, editing, and optimization for all formats.',
      price: 'Starting at $179/month',
      features: ['Multi-format content', 'SEO optimization', 'Brand voice training', 'Plagiarism detection', 'Content planning'],
      link: '/ai-content-generation-pro',
      category: 'Content Creation'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'AI Cyber Defense Matrix',
      description: 'Advanced AI-powered cybersecurity with threat hunting, incident response, and security orchestration.',
      price: 'Starting at $599/month',
      features: ['Threat hunting', 'Incident response', 'Security orchestration', 'Behavioral analysis', 'Zero-day detection'],
      link: '/ai-cyber-defense-matrix',
      category: 'Cybersecurity'
    },
    {
      icon: <BarChart className="w-8 h-8 text-cyan-400" />,
      title: 'AI Business Intelligence Pro',
      description: 'Enterprise-grade business intelligence with advanced analytics, forecasting, and strategic insights.',
      price: 'Starting at $399/month',
      features: ['Advanced analytics', 'Strategic forecasting', 'Executive dashboards', 'Data storytelling', 'ROI optimization'],
      link: '/ai-business-intelligence-pro',
      category: 'Business Intelligence'
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      title: 'AI Drug Discovery Pro',
      description: 'Accelerate pharmaceutical research with AI-powered drug discovery and molecular analysis.',
      price: 'Starting at $999/month',
      features: ['Molecular analysis', 'Drug design', 'Clinical trial optimization', 'Side effect prediction', 'Patent analysis'],
      link: '/ai-drug-discovery-pro',
      category: 'Pharmaceutical'
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: 'AI Agricultural Intelligence Pro',
      description: 'Smart farming solutions with AI-powered crop monitoring, yield prediction, and resource optimization.',
      price: 'Starting at $299/month',
      features: ['Crop monitoring', 'Yield prediction', 'Resource optimization', 'Pest detection', 'Weather analysis'],
      link: '/ai-agricultural-intelligence-pro',
      category: 'Agriculture'
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: 'AI Cloud Infrastructure',
      description: 'Intelligent cloud management with AI-powered optimization, cost management, and security.',
      price: 'Starting at $199/month',
      features: ['Resource optimization', 'Cost management', 'Security monitoring', 'Auto-scaling', 'Performance tuning'],
      link: '/ai-cloud-infrastructure',
      category: 'Cloud Computing'
    },
    {
      icon: <Code className="w-8 h-8 text-orange-400" />,
      title: 'AI Code Generation',
      description: 'Generate high-quality code automatically with AI-powered development tools and frameworks.',
      price: 'Starting at $149/month',
      features: ['Code generation', 'Framework support', 'Bug fixing', 'Documentation', 'Testing automation'],
      link: '/ai-code-generation',
      category: 'Development Tools'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'AI Code Security Auditor',
      description: 'Automated code security analysis with vulnerability detection and remediation recommendations.',
      price: 'Starting at $179/month',
      features: ['Vulnerability scanning', 'Security analysis', 'Compliance checking', 'Remediation guidance', 'Risk assessment'],
      link: '/ai-code-security-auditor',
      category: 'Security'
    },
    {
      icon: <Cloud className="w-8 h-8 text-indigo-400" />,
      title: 'AI Content Delivery Network',
      description: 'Intelligent CDN with AI-powered content optimization, caching, and global distribution.',
      price: 'Starting at $99/month',
      features: ['Smart caching', 'Content optimization', 'Global distribution', 'Performance monitoring', 'DDoS protection'],
      link: '/ai-content-delivery-network',
      category: 'Content Delivery'
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: 'AI Content Management',
      description: 'Intelligent content management with AI-powered organization, tagging, and workflow automation.',
      price: 'Starting at $119/month',
      features: ['Auto-tagging', 'Content organization', 'Workflow automation', 'Version control', 'Collaboration tools'],
      link: '/ai-content-management',
      category: 'Content Management'
    },
    {
      icon: <FileText className="w-8 h-8 text-pink-400" />,
      title: 'AI Content Writer',
      description: 'Professional AI writing assistant for blogs, articles, marketing copy, and technical documentation.',
      price: 'Starting at $79/month',
      features: ['Multi-format writing', 'SEO optimization', 'Tone adjustment', 'Plagiarism check', 'Grammar correction'],
      link: '/ai-content-writer',
      category: 'Content Creation'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'AI Content Moderation',
      description: 'Automated content moderation with AI-powered filtering, classification, and policy enforcement.',
      price: 'Starting at $139/month',
      features: ['Content filtering', 'Policy enforcement', 'Spam detection', 'Inappropriate content detection', 'Custom rules'],
      link: '/ai-content-moderation',
      category: 'Content Moderation'
    },
    {
      icon: <FileText className="w-8 h-8 text-cyan-400" />,
      title: 'AI Content Studio',
      description: 'Complete content creation studio with AI-powered ideation, creation, and optimization tools.',
      price: 'Starting at $159/month',
      features: ['Content ideation', 'Multi-format creation', 'Brand consistency', 'Performance analytics', 'Team collaboration'],
      link: '/ai-content-studio',
      category: 'Content Creation'
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-400" />,
      title: 'AI Conversation Analytics',
      description: 'Analyze customer conversations with AI-powered sentiment analysis and engagement insights.',
      price: 'Starting at $169/month',
      features: ['Sentiment analysis', 'Engagement metrics', 'Conversation insights', 'Trend analysis', 'Performance tracking'],
      link: '/ai-conversation-analytics',
      category: 'Analytics'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-400" />,
      title: 'AI Conversational AI',
      description: 'Build sophisticated conversational AI with advanced natural language understanding and generation.',
      price: 'Starting at $229/month',
      features: ['Advanced NLP', 'Context management', 'Multi-turn conversations', 'Intent recognition', 'Response generation'],
      link: '/ai-conversational-ai',
      category: 'Conversational AI'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'AI CRM Assistant',
      description: 'Intelligent CRM assistant with automated lead scoring, customer insights, and sales optimization.',
      price: 'Starting at $189/month',
      features: ['Lead scoring', 'Customer insights', 'Sales optimization', 'Pipeline management', 'Automated follow-ups'],
      link: '/ai-crm-assistant',
      category: 'CRM'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: 'AI Customer Service',
      description: 'Comprehensive AI customer service with automated responses, ticket routing, and resolution.',
      price: 'Starting at $199/month',
      features: ['Automated responses', 'Ticket routing', 'Resolution tracking', 'Customer satisfaction', 'Multi-channel support'],
      link: '/ai-customer-service',
      category: 'Customer Service'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-cyan-400" />,
      title: 'AI Customer Support',
      description: 'Advanced customer support with AI-powered assistance, knowledge base, and escalation management.',
      price: 'Starting at $179/month',
      features: ['AI assistance', 'Knowledge base', 'Escalation management', 'Performance metrics', 'Customer insights'],
      link: '/ai-customer-support',
      category: 'Customer Support'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-400" />,
      title: 'AI Customer Support Bot',
      description: 'Intelligent support bot with natural language processing and automated problem resolution.',
      price: 'Starting at $149/month',
      features: ['Natural language processing', 'Problem resolution', 'Escalation handling', 'Learning capabilities', 'Integration support'],
      link: '/ai-customer-support-bot',
      category: 'Customer Support'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-indigo-400" />,
      title: 'AI Customer Support Chatbot',
      description: 'Advanced chatbot for customer support with context awareness and human handoff capabilities.',
      price: 'Starting at $129/month',
      features: ['Context awareness', 'Human handoff', 'Multi-language support', 'Custom training', 'Analytics dashboard'],
      link: '/ai-customer-support-chatbot',
      category: 'Customer Support'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'AI Cybersecurity Monitor',
      description: 'Real-time cybersecurity monitoring with AI-powered threat detection and response automation.',
      price: 'Starting at $299/month',
      features: ['Real-time monitoring', 'Threat detection', 'Response automation', 'Incident analysis', 'Security reporting'],
      link: '/ai-cybersecurity-monitor',
      category: 'Cybersecurity'
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      title: 'AI Cybersecurity Suite',
      description: 'Comprehensive cybersecurity suite with AI-powered protection, monitoring, and incident response.',
      price: 'Starting at $399/month',
      features: ['Comprehensive protection', 'Advanced monitoring', 'Incident response', 'Compliance management', 'Security analytics'],
      link: '/ai-cybersecurity-suite',
      category: 'Cybersecurity'
    },
    {
      icon: <BarChart className="w-8 h-8 text-cyan-400" />,
      title: 'AI Data Analytics',
      description: 'Advanced data analytics with AI-powered insights, predictive modeling, and automated reporting.',
      price: 'Starting at $199/month',
      features: ['Predictive modeling', 'Automated insights', 'Data visualization', 'Trend analysis', 'Custom dashboards'],
      link: '/ai-data-analytics',
      category: 'Data Analytics'
    },
    {
      icon: <BarChart className="w-8 h-8 text-purple-400" />,
      title: 'AI Data Visualization',
      description: 'Intelligent data visualization with AI-powered chart generation and interactive dashboards.',
      price: 'Starting at $149/month',
      features: ['Smart chart generation', 'Interactive dashboards', 'Data storytelling', 'Custom visualizations', 'Export capabilities'],
      link: '/ai-data-visualization',
      category: 'Data Visualization'
    },
    {
      icon: <FileText className="w-8 h-8 text-pink-400" />,
      title: 'AI Design Studio',
      description: 'AI-powered design studio with automated graphic creation, branding, and visual content generation.',
      price: 'Starting at $179/month',
      features: ['Automated design', 'Brand consistency', 'Template generation', 'Visual content creation', 'Design optimization'],
      link: '/ai-design-studio',
      category: 'Design'
    },
    {
      icon: <FileText className="w-8 h-8 text-indigo-400" />,
      title: 'AI Document Intelligence',
      description: 'Intelligent document processing with AI-powered extraction, analysis, and workflow automation.',
      price: 'Starting at $189/month',
      features: ['Document extraction', 'Intelligent analysis', 'Workflow automation', 'Template recognition', 'Batch processing'],
      link: '/ai-document-intelligence',
      category: 'Document Processing'
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-400" />,
      title: 'AI Document Processor',
      description: 'Advanced document processing with OCR, data extraction, and intelligent classification.',
      price: 'Starting at $159/month',
      features: ['OCR technology', 'Data extraction', 'Classification', 'Format conversion', 'Quality assurance'],
      link: '/ai-document-processor',
      category: 'Document Processing'
    },
    {
      icon: <FileText className="w-8 h-8 text-green-400" />,
      title: 'AI Document Scanner',
      description: 'Intelligent document scanning with AI-powered recognition, processing, and organization.',
      price: 'Starting at $119/month',
      features: ['Smart scanning', 'Text recognition', 'Document organization', 'Search capabilities', 'Cloud storage'],
      link: '/ai-document-scanner',
      category: 'Document Processing'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: 'AI Healthcare',
      description: 'Comprehensive healthcare AI solutions for diagnostics, treatment planning, and patient care.',
      price: 'Starting at $399/month',
      features: ['Medical diagnostics', 'Treatment planning', 'Patient monitoring', 'Drug discovery', 'Clinical research'],
      link: '/ai-healthcare',
      category: 'Healthcare'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      title: 'AI Financial Services',
      description: 'Advanced financial AI for trading, risk management, fraud detection, and investment analysis.',
      price: 'Starting at $299/month',
      features: ['Algorithmic trading', 'Risk management', 'Fraud detection', 'Investment analysis', 'Regulatory compliance'],
      link: '/ai-financial-services',
      category: 'Financial Services'
    },
    {
      icon: <Camera className="w-8 h-8 text-purple-400" />,
      title: 'AI Computer Vision',
      description: 'Advanced computer vision solutions for image recognition, object detection, and visual analysis.',
      price: 'Starting at $249/month',
      features: ['Image recognition', 'Object detection', 'Visual analysis', 'Custom models', 'Real-time processing'],
      link: '/ai-computer-vision',
      category: 'Computer Vision'
    },
    {
      icon: <Mic className="w-8 h-8 text-cyan-400" />,
      title: 'AI Voice Solutions',
      description: 'Comprehensive voice AI solutions including speech recognition, synthesis, and voice analytics.',
      price: 'Starting at $199/month',
      features: ['Speech recognition', 'Voice synthesis', 'Voice analytics', 'Multi-language support', 'Custom training'],
      link: '/ai-voice-solutions',
      category: 'Voice Technology'
    },
    {
      icon: <Globe className="w-8 h-8 text-pink-400" />,
      title: 'AI E-commerce Solutions',
      description: 'Intelligent e-commerce solutions with AI-powered recommendations, pricing, and customer insights.',
      price: 'Starting at $229/month',
      features: ['Product recommendations', 'Dynamic pricing', 'Customer insights', 'Inventory optimization', 'Personalization'],
      link: '/ai-ecommerce-solutions',
      category: 'E-commerce'
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-400" />,
      title: 'AI HR Solutions',
      description: 'Comprehensive HR AI solutions for recruitment, employee management, and workforce analytics.',
      price: 'Starting at $189/month',
      features: ['Recruitment automation', 'Employee analytics', 'Performance management', 'Workforce planning', 'Compliance tracking'],
      link: '/ai-hr-solutions',
      category: 'Human Resources'
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: 'AI Content Generation',
      description: 'Advanced content generation with AI-powered writing, editing, and optimization for all content types.',
      price: 'Starting at $149/month',
      features: ['Multi-format content', 'SEO optimization', 'Brand voice training', 'Plagiarism detection', 'Content planning'],
      link: '/ai-content-generation',
      category: 'Content Creation'
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-400" />,
      title: 'AI Workflow Automation',
      description: 'Intelligent workflow automation with AI-powered process optimization and task management.',
      price: 'Starting at $169/month',
      features: ['Process optimization', 'Task automation', 'Workflow design', 'Performance monitoring', 'Integration support'],
      link: '/ai-workflow-automation',
      category: 'Automation'
    },
    {
      icon: <FileText className="w-8 h-8 text-indigo-400" />,
      title: 'AI Document Processing',
      description: 'Intelligent document processing with AI-powered extraction, analysis, and workflow automation.',
      price: 'Starting at $179/month',
      features: ['Document extraction', 'Intelligent analysis', 'Workflow automation', 'Template recognition', 'Batch processing'],
      link: '/ai-document-processing',
      category: 'Document Processing'
    },
    {
      icon: <BarChart className="w-8 h-8 text-cyan-400" />,
      title: 'AI Predictive Analytics',
      description: 'Advanced predictive analytics with AI-powered forecasting, modeling, and strategic insights.',
      price: 'Starting at $219/month',
      features: ['Predictive modeling', 'Forecasting', 'Risk assessment', 'Strategic insights', 'Scenario planning'],
      link: '/ai-predictive-analytics',
      category: 'Analytics'
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: 'AI Edge Computing',
      description: 'Intelligent edge computing solutions with AI-powered processing and real-time decision making.',
      price: 'Starting at $199/month',
      features: ['Edge processing', 'Real-time decisions', 'Low latency', 'Offline capabilities', 'Resource optimization'],
      link: '/ai-edge-computing',
      category: 'Edge Computing'
    },
    {
      icon: <Camera className="w-8 h-8 text-blue-400" />,
      title: 'AI Video Analysis',
      description: 'Advanced video analysis with AI-powered content recognition, object tracking, and scene understanding.',
      price: 'Starting at $229/month',
      features: ['Content recognition', 'Object tracking', 'Scene understanding', 'Motion analysis', 'Real-time processing'],
      link: '/ai-video-analysis',
      category: 'Video Analysis'
    },
    {
      icon: <Mic className="w-8 h-8 text-green-400" />,
      title: 'AI Speech Synthesis',
      description: 'Advanced speech synthesis with AI-powered voice generation, emotion, and natural language processing.',
      price: 'Starting at $159/month',
      features: ['Voice generation', 'Emotion synthesis', 'Natural language', 'Custom voices', 'Multi-language support'],
      link: '/ai-speech-synthesis',
      category: 'Speech Technology'
    },
    {
      icon: <Target className="w-8 h-8 text-pink-400" />,
      title: 'AI Recommendation Engine',
      description: 'Intelligent recommendation engine with AI-powered personalization and behavioral analysis.',
      price: 'Starting at $179/month',
      features: ['Personalization', 'Behavioral analysis', 'A/B testing', 'Real-time recommendations', 'Performance tracking'],
      link: '/ai-recommendation-engine',
      category: 'Recommendation Systems'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: 'AI Sentiment Analysis',
      description: 'Advanced sentiment analysis with AI-powered emotion detection and social media monitoring.',
      price: 'Starting at $139/month',
      features: ['Emotion detection', 'Social monitoring', 'Brand sentiment', 'Trend analysis', 'Real-time alerts'],
      link: '/ai-sentiment-analysis',
      category: 'Sentiment Analysis'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-cyan-400" />,
      title: 'AI Chatbot Enterprise',
      description: 'Enterprise-grade chatbot platform with advanced AI capabilities and seamless integration.',
      price: 'Starting at $299/month',
      features: ['Enterprise features', 'Advanced AI', 'Seamless integration', 'Custom training', 'Analytics dashboard'],
      link: '/ai-chatbot-enterprise',
      category: 'Enterprise Solutions'
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      title: 'AI Content Moderation',
      description: 'Automated content moderation with AI-powered filtering, classification, and policy enforcement.',
      price: 'Starting at $169/month',
      features: ['Content filtering', 'Policy enforcement', 'Spam detection', 'Inappropriate content', 'Custom rules'],
      link: '/ai-content-moderation',
      category: 'Content Moderation'
    },
    {
      icon: <BarChart className="w-8 h-8 text-purple-400" />,
      title: 'AI Predictive Modeling',
      description: 'Advanced predictive modeling with AI-powered machine learning and statistical analysis.',
      price: 'Starting at $239/month',
      features: ['Machine learning', 'Statistical analysis', 'Model training', 'Validation', 'Deployment support'],
      link: '/ai-predictive-modeling',
      category: 'Machine Learning'
    },
    {
      icon: <FileText className="w-8 h-8 text-indigo-400" />,
      title: 'AI Document Intelligence',
      description: 'Intelligent document processing with AI-powered extraction, analysis, and workflow automation.',
      price: 'Starting at $189/month',
      features: ['Document extraction', 'Intelligent analysis', 'Workflow automation', 'Template recognition', 'Batch processing'],
      link: '/ai-document-intelligence',
      category: 'Document Intelligence'
    },
    {
      icon: <Users className="w-8 h-8 text-teal-400" />,
      title: 'AI Conversation Analytics',
      description: 'Analyze customer conversations with AI-powered sentiment analysis and engagement insights.',
      price: 'Starting at $169/month',
      features: ['Sentiment analysis', 'Engagement metrics', 'Conversation insights', 'Trend analysis', 'Performance tracking'],
      link: '/ai-conversation-analytics',
      category: 'Analytics'
    },
    {
      icon: <Package className="w-8 h-8 text-green-400" />,
      title: 'AI Supply Chain AI',
      description: 'Intelligent supply chain optimization with AI-powered demand forecasting and logistics management.',
      price: 'Starting at $279/month',
      features: ['Demand forecasting', 'Logistics optimization', 'Inventory management', 'Supplier coordination', 'Risk assessment'],
      link: '/ai-supply-chain-ai',
      category: 'Supply Chain'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: 'AI Healthcare Diagnostics',
      description: 'Advanced medical AI for diagnostic imaging, patient monitoring, and treatment recommendations.',
      price: 'Starting at $499/month',
      features: ['Medical imaging', 'Patient monitoring', 'Treatment recommendations', 'Drug interactions', 'Clinical support'],
      link: '/ai-healthcare-diagnostics',
      category: 'Healthcare'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      title: 'AI Financial Forecasting',
      description: 'Predict market trends, analyze investment opportunities, and optimize financial portfolios with AI.',
      price: 'Starting at $299/month',
      features: ['Market prediction', 'Portfolio optimization', 'Risk assessment', 'Algorithmic trading', 'Financial modeling'],
      link: '/ai-financial-forecasting',
      category: 'Financial Services'
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: 'AI IoT Analytics',
      description: 'Intelligent analysis of IoT data streams for predictive maintenance and operational optimization.',
      price: 'Starting at $199/month',
      features: ['IoT data processing', 'Predictive maintenance', 'Anomaly detection', 'Real-time monitoring', 'Edge computing'],
      link: '/ai-iot-analytics',
      category: 'IoT Solutions'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-cyan-400" />,
      title: 'AI Conversational AI',
      description: 'Build sophisticated conversational AI with advanced natural language understanding and generation.',
      price: 'Starting at $229/month',
      features: ['Advanced NLP', 'Context management', 'Multi-turn conversations', 'Intent recognition', 'Response generation'],
      link: '/ai-conversational-ai',
      category: 'Conversational AI'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-emerald-400" />,
      title: 'AI Automated Testing',
      description: 'Intelligent test automation with AI-powered test generation, execution, and maintenance.',
      price: 'Starting at $179/month',
      features: ['Test generation', 'Automated execution', 'Bug detection', 'Performance testing', 'Regression testing'],
      link: '/ai-automated-testing',
      category: 'Quality Assurance'
    },
    {
      icon: <FileText className="w-8 h-8 text-indigo-400" />,
      title: 'AI Knowledge Management',
      description: 'Intelligent knowledge base with automated content organization and smart search capabilities.',
      price: 'Starting at $129/month',
      features: ['Content organization', 'Smart search', 'Knowledge extraction', 'Auto-categorization', 'Expert recommendations'],
      link: '/ai-knowledge-management',
      category: 'Knowledge Management'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: 'AI Customer Churn',
      description: 'Predict and prevent customer churn with AI-powered behavioral analysis and retention strategies.',
      price: 'Starting at $199/month',
      features: ['Churn prediction', 'Behavioral analysis', 'Retention strategies', 'Risk scoring', 'Intervention alerts'],
      link: '/ai-customer-churn',
      category: 'Customer Analytics'
    },
    {
      icon: <BarChart className="w-8 h-8 text-orange-400" />,
      title: 'AI Automated Reporting',
      description: 'Generate intelligent reports automatically with AI-powered data analysis and insights.',
      price: 'Starting at $89/month',
      features: ['Auto report generation', 'Data visualization', 'Insight extraction', 'Scheduled reports', 'Custom templates'],
      link: '/ai-automated-reporting',
      category: 'Business Intelligence'
    },
    {
      icon: <Mic className="w-8 h-8 text-teal-400" />,
      title: 'AI Voice Assistant',
      description: 'Build custom voice assistants with advanced speech recognition and natural language processing.',
      price: 'Starting at $249/month',
      features: ['Speech recognition', 'Voice synthesis', 'Command processing', 'Multi-language support', 'Custom wake words'],
      link: '/ai-voice-assistant',
      category: 'Voice Technology'
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: 'AI Content Generation Pro',
      description: 'Advanced content generation with AI-powered writing, editing, and optimization for all content types.',
      price: 'Starting at $179/month',
      features: ['Multi-format content', 'SEO optimization', 'Brand voice training', 'Plagiarism detection', 'Content planning'],
      link: '/ai-content-generation-pro',
      category: 'Content Creation'
    }
  ]

  const categories = [
    'All Services',
    'Conversational AI',
    'Data Intelligence',
    'Development Tools',
    'Customer Service',
    'Marketing Automation',
    'Content Creation',
    'Voice Technology',
    'Security',
    'Data Processing',
    'Business Intelligence',
    'Project Management',
    'Human Resources',
    'Financial Services',
    'Computer Vision',
    'Language Services'
  ]

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: <Brain className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Accuracy Rate', icon: <Target className="w-6 h-6 text-emerald-400" /> },
    { number: '24/7', label: 'AI Monitoring', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { number: '50+', label: 'Languages Supported', icon: <Globe className="w-6 h-6 text-purple-400" /> },
    { number: '1000+', label: 'Businesses Transformed', icon: <Rocket className="w-6 h-6 text-pink-400" /> },
    { number: '3x', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6 text-orange-400" /> }
  ]

  return (
    <>
      <Helmet>
        <title>AI Services - Advanced Artificial Intelligence Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including chatbots, analytics, automation, and machine learning solutions. 99.9% accuracy, 24/7 support." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, analytics, automation, computer vision, natural language processing, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Services - Advanced Artificial Intelligence Solutions | Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive AI services including chatbots, analytics, automation, and machine learning solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-ai-services.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Services - Advanced Artificial Intelligence Solutions" />
        <meta name="twitter:description" content="Transform your business with our comprehensive AI services including chatbots, analytics, automation, and machine learning solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-ai-services.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Services",
            "description": "Comprehensive artificial intelligence services including chatbots, analytics, automation, and machine learning solutions",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              }
            },
            "offers": {
              "@type": "AggregateOffer",
              "offerCount": "15+",
              "lowPrice": "99",
              "highPrice": "399",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
            <Brain className="w-4 h-4" />
            <span>Advanced AI Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            AI Services That
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Transform Businesses
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Harness the power of artificial intelligence to automate processes, gain insights, 
            and revolutionize your business operations with our cutting-edge AI solutions.
            <br />
            <span className="text-cyan-400 font-semibold">From chatbots to computer vision - we've got you covered.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/pricing" 
              className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>View Pricing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions deliver measurable results with proven accuracy and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Choose from our extensive range of AI services designed to address every aspect of your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-cyan-400">
                    {service.price}
                  </div>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={service.link}
                    className="block w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/30">
                  <Sparkles className="w-4 h-4" />
                  <span>Ready to Get Started?</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Transform Your Business with <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">AI Today</span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Join thousands of businesses already using our AI solutions to automate processes, 
                  gain insights, and drive growth. Get started with a free consultation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/demo" 
                    className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                  >
                    <span>Schedule Demo</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-300" />
                    <span className="text-sm">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-300" />
                    <span className="text-sm">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-pink-300" />
                    <span className="text-sm">Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}