import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Globe, Smartphone, Database, BarChart3, Mail, Calendar, FileText, Image, Video, Music, Code, Palette, Search, Lock, Cloud, Wifi, Monitor, Headphones, Camera, Printer, HardDrive, Cpu, MemoryStick, Wrench, Settings, Bell, Heart, ThumbsUp, Share2, Download, Upload, Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Brain, Cpu as CpuIcon, Bot, Target, Layers, BarChart, PieChart, LineChart, Activity, Zap as ZapIcon, Sparkles, Atom, Cpu as CpuIcon2 } from 'lucide-react';

  const aiServices = [
    {
      id: 1,
      name: 'AI-Powered Business Intelligence',
      description: 'Advanced AI analytics platform that transforms raw data into actionable business insights',
      price: '$2,499/month',
      features: [
        'Real-time Data Processing',
        'Predictive Analytics',
        'Natural Language Queries',
        'Automated Report Generation',
        'Custom Dashboard Creation',
        'Multi-Data Source Integration',
        'Advanced Machine Learning Models',
        '24/7 Monitoring & Alerts'
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      category: 'Analytics',
      popular: true,
      rating: 4.9,
      users: '1,200+',
      color: 'from-blue-500 to-purple-600',
      capabilities: [
        'Process 10TB+ data daily',
        '99.9% accuracy in predictions',
        'Real-time insights delivery',
        'Custom ML model training'
      ]
    },
    {
      id: 2,
      name: 'AI Content Generation Suite',
      description: 'Comprehensive AI-powered content creation platform for all marketing needs',
      price: '$899/month',
      features: [
        'Blog Post Generation',
        'Social Media Content',
        'Email Marketing Copy',
        'Video Script Writing',
        'SEO Optimization',
        'Multi-Language Support',
        'Brand Voice Training',
        'Content Calendar Management'
      ],
      icon: <FileText className="w-8 h-8" />,
      category: 'Content Creation',
      popular: true,
      rating: 4.8,
      users: '3,500+',
      color: 'from-green-500 to-teal-600',
      capabilities: [
        'Generate 1000+ articles daily',
        '40+ languages supported',
        'SEO score optimization',
        'Brand consistency maintenance'
      ]
    },
    {
      id: 3,
      name: 'AI Customer Service Automation',
      description: 'Intelligent customer service platform with advanced NLP and sentiment analysis',
      price: '$1,299/month',
      features: [
        '24/7 AI Chatbot',
        'Sentiment Analysis',
        'Multi-Language Support',
        'Human Handoff',
        'Knowledge Base Integration',
        'Ticket Routing',
        'Performance Analytics',
        'Custom Training'
      ],
      icon: <Headphones className="w-8 h-8" />,
      category: 'Customer Service',
      popular: false,
      rating: 4.7,
      users: '2,100+',
      color: 'from-orange-500 to-red-600',
      capabilities: [
        '95% query resolution rate',
        '50+ language support',
        'Real-time sentiment tracking',
        'Seamless human escalation'
      ]
    },
    {
      id: 4,
      name: 'AI-Powered Marketing Automation',
      description: 'Complete marketing automation platform with AI-driven campaign optimization',
      price: '$1,599/month',
      features: [
        'Campaign Optimization',
        'Audience Segmentation',
        'Predictive Lead Scoring',
        'Email Personalization',
        'Ad Performance Analysis',
        'ROI Optimization',
        'A/B Testing Automation',
        'Cross-Platform Integration'
      ],
      icon: <Target className="w-8 h-8" />,
      category: 'Marketing',
      popular: true,
      rating: 4.8,
      users: '2,800+',
      color: 'from-purple-500 to-pink-600',
      capabilities: [
        '300% increase in conversion rates',
        'Automated campaign optimization',
        'Real-time performance tracking',
        'Predictive customer behavior'
      ],
      category: 'AI Automation & Workflow',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      services: [
        {
          name: 'AI Workflow Automation Platform',
          description: 'End-to-end business process automation with intelligent decision-making and self-optimization',
          features: ['Visual Workflow Builder', 'Smart Process Optimization', 'Error Detection & Correction', 'Cost Reduction', 'Scalable Architecture'],
          pricing: 'Starting at $5,000/month',
          trial: '30-day free trial',
          roi: '200-400% ROI',
          link: 'https://ziontechgroup.com/ai-workflow-automation',
          popular: true
        },
        {
          name: 'AI Customer Support Suite',
          description: 'Advanced 24/7 customer support with natural language processing, sentiment analysis, and human handoff',
          features: ['Multi-language NLP', 'Sentiment Analysis', 'Escalation Management', 'Knowledge Base Integration', 'Performance Analytics'],
          pricing: 'Starting at $3,000/month',
          trial: '14-day free trial',
          roi: '150-300% ROI',
          link: 'https://ziontechgroup.com/ai-customer-support',
          popular: true
        },
        {
          name: 'AI Sales Automation Engine',
          description: 'Intelligent sales process automation with lead scoring, automated follow-ups, and predictive analytics',
          features: ['AI Lead Scoring', 'Automated Outreach', 'Sales Forecasting', 'CRM Integration', 'Revenue Optimization'],
          pricing: 'Starting at $4,000/month',
          trial: '14-day free trial',
          roi: '250-500% ROI',
          link: 'https://ziontechgroup.com/ai-sales-automation',
          popular: true
        },
        {
          name: 'AI Document Processing System',
          description: 'Intelligent document analysis, extraction, and processing with OCR and natural language understanding',
          features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Workflow Integration', 'Compliance Tracking'],
          pricing: 'Starting at $2,500/month',
          trial: '7-day free trial',
          roi: '180-350% ROI',
          link: 'https://ziontechgroup.com/ai-document-processing',
          popular: false
        }
      ]
    },
    {
      category: 'AI Analytics & Business Intelligence',
      icon: BarChart,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {
          name: 'AI Data Analytics Platform',
          description: 'Advanced analytics and insights with machine learning-powered predictions and real-time dashboards',
          features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Data Visualization', 'Automated Insights'],
          pricing: 'Starting at $6,000/month',
          trial: '14-day free trial',
          roi: '300-600% ROI',
          link: 'https://ziontechgroup.com/ai-data-analytics',
          popular: true
        },
        {
          name: 'AI Business Intelligence Suite',
          description: 'Transform raw data into actionable business insights with AI-powered analysis and recommendations',
          features: ['KPI Tracking', 'Trend Analysis', 'Performance Metrics', 'Strategic Planning', 'ROI Measurement'],
          pricing: 'Starting at $7,000/month',
          trial: '14-day free trial',
          roi: '400-700% ROI',
          link: 'https://ziontechgroup.com/ai-business-intelligence',
          popular: true
        },
        {
          name: 'AI Predictive Analytics Engine',
          description: 'Forecast future trends, outcomes, and opportunities with advanced machine learning models',
          features: ['Demand Forecasting', 'Risk Assessment', 'Market Analysis', 'Scenario Planning', 'Anomaly Detection'],
          pricing: 'Starting at $8,000/month',
          trial: '14-day free trial',
          roi: '500-800% ROI',
          link: 'https://ziontechgroup.com/ai-predictive-analytics',
          popular: true
        },
        {
          name: 'AI Real-time Monitoring System',
          description: 'Continuous monitoring and alerting system with AI-powered anomaly detection and automated responses',
          features: ['Real-time Monitoring', 'Anomaly Detection', 'Automated Alerts', 'Performance Tracking', 'Predictive Maintenance'],
          pricing: 'Starting at $4,500/month',
          trial: '7-day free trial',
          roi: '250-450% ROI',
          link: 'https://ziontechgroup.com/ai-monitoring',
          popular: false
        }
      ]
    },
    {
      category: 'AI Content & Marketing Solutions',
      icon: FileText,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: 'AI Content Generation Studio',
          description: 'Complete content creation suite with AI writing, editing, optimization, and multi-format support',
          features: ['AI Writing Assistant', 'Content Optimization', 'SEO Analysis', 'Brand Voice Training', 'Multi-format Support'],
          pricing: 'Starting at $2,000/month',
          trial: '7-day free trial',
          roi: '100-300% ROI',
          link: 'https://ziontechgroup.com/ai-content-generation',
          popular: true
        },
        {
          name: 'AI Email Marketing Platform',
          description: 'Intelligent email campaigns with personalization, A/B testing, and performance optimization',
          features: ['Smart Personalization', 'A/B Testing', 'Send Time Optimization', 'Performance Analytics', 'List Segmentation'],
          pricing: 'Starting at $3,500/month',
          trial: '7-day free trial',
          roi: '200-400% ROI',
          link: 'https://ziontechgroup.com/ai-email-marketing',
          popular: true
        },
        {
          name: 'AI SEO Optimization Suite',
          description: 'Comprehensive SEO analysis, keyword research, and content optimization with AI recommendations',
          features: ['Keyword Research', 'Content Analysis', 'Technical SEO', 'Competitor Analysis', 'Rank Tracking'],
          pricing: 'Starting at $4,500/month',
          trial: '7-day free trial',
          roi: '250-500% ROI',
          link: 'https://ziontechgroup.com/ai-seo-optimizer',
          popular: true
        },
        {
          name: 'AI Social Media Manager',
          description: 'Automated social media content creation, scheduling, and engagement optimization across platforms',
          features: ['Content Generation', 'Post Scheduling', 'Engagement Analytics', 'Hashtag Optimization', 'Multi-platform Management'],
          pricing: 'Starting at $1,500/month',
          trial: '7-day free trial',
          roi: '150-300% ROI',
          link: 'https://ziontechgroup.com/ai-social-media-manager',
          popular: false
        }
      ]
    },
    {
      category: 'AI Industry-Specific Solutions',
      icon: Target,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'AI Healthcare Solutions',
          description: 'Advanced AI-powered healthcare solutions including medical imaging, diagnosis support, and patient care',
          features: ['Medical Imaging Analysis', 'Diagnosis Support', 'Patient Monitoring', 'Drug Discovery', 'Clinical Decision Support'],
          pricing: 'Starting at $15,000/month',
          trial: '30-day free trial',
          roi: '400-800% ROI',
          link: 'https://ziontechgroup.com/ai-healthcare',
          popular: true
        },
        {
          name: 'AI Fintech Platform',
          description: 'Comprehensive financial technology solutions with fraud detection, risk assessment, and algorithmic trading',
          features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring', 'Regulatory Compliance'],
          pricing: 'Starting at $12,000/month',
          trial: '14-day free trial',
          roi: '300-600% ROI',
          link: 'https://ziontechgroup.com/ai-fintech',
          popular: true
        },
        {
          name: 'AI E-commerce Optimization',
          description: 'E-commerce platform optimization with personalization, inventory management, and customer insights',
          features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Insights', 'Conversion Optimization'],
          pricing: 'Starting at $5,000/month',
          trial: '14-day free trial',
          roi: '200-500% ROI',
          link: 'https://ziontechgroup.com/ai-ecommerce-solutions',
          popular: true
        },
        {
          name: 'AI Manufacturing Intelligence',
          description: 'Smart manufacturing solutions with predictive maintenance, quality control, and process optimization',
          features: ['Predictive Maintenance', 'Quality Control', 'Process Optimization', 'Supply Chain Management', 'Energy Efficiency'],
          pricing: 'Starting at $10,000/month',
          trial: '14-day free trial',
          roi: '350-650% ROI',
          link: 'https://ziontechgroup.com/ai-manufacturing',
          popular: false
        }
      ]
    },
    {
      category: 'AI Advanced Technologies',
      icon: Cpu,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      services: [
        {
          name: 'AI Computer Vision Platform',
          description: 'Advanced computer vision solutions for image recognition, object detection, and visual analysis',
          features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Visual Search', 'Quality Inspection'],
          pricing: 'Starting at $8,000/month',
          trial: '14-day free trial',
          roi: '300-600% ROI',
          link: 'https://ziontechgroup.com/ai-computer-vision',
          popular: true
        },
        {
          name: 'AI Natural Language Processing',
          description: 'Advanced NLP solutions for text analysis, language understanding, and conversational AI',
          features: ['Text Analysis', 'Language Understanding', 'Sentiment Analysis', 'Translation', 'Conversational AI'],
          pricing: 'Starting at $6,500/month',
          trial: '14-day free trial',
          roi: '250-500% ROI',
          link: 'https://ziontechgroup.com/ai-nlp',
          popular: true
        },
        {
          name: 'AI Machine Learning Platform',
          description: 'Complete ML platform with model training, deployment, and management capabilities',
          features: ['Model Training', 'Model Deployment', 'Model Management', 'AutoML', 'MLOps'],
          pricing: 'Starting at $9,000/month',
          trial: '14-day free trial',
          roi: '400-700% ROI',
          link: 'https://ziontechgroup.com/ai-ml-platform',
          popular: true
        },
        {
          name: 'AI Quantum Computing Solutions',
          description: 'Next-generation quantum computing solutions for complex optimization and simulation problems',
          features: ['Quantum Optimization', 'Quantum Simulation', 'Quantum Machine Learning', 'Quantum Security', 'Hybrid Computing'],
          pricing: 'Starting at $20,000/month',
          trial: '30-day free trial',
          roi: '500-1000% ROI',
          link: 'https://ziontechgroup.com/ai-quantum-computing',
          popular: false
        }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-804c
      ]
    },
    {
      id: 5,
      name: 'AI Document Processing',
      description: 'Intelligent document processing and data extraction with OCR and NLP',
      price: '$799/month',
      features: [
        'OCR Text Recognition',
        'Document Classification',
        'Data Extraction',
        'Form Processing',
        'Contract Analysis',
        'Compliance Checking',
        'Multi-Format Support',
        'Batch Processing'
      ],
      icon: <FileText className="w-8 h-8" />,
      category: 'Document Processing',
      popular: false,
      rating: 4.6,
      users: '1,800+',
      color: 'from-indigo-500 to-blue-600',
      capabilities: [
        '99.5% accuracy in text extraction',
        'Process 10,000+ documents/hour',
        '50+ file formats supported',
        'Automated compliance checking'
      ]
    },
    {
      id: 6,
      name: 'AI Image & Video Analysis',
      description: 'Advanced computer vision platform for image and video content analysis',
      price: '$1,199/month',
      features: [
        'Object Detection',
        'Facial Recognition',
        'Content Moderation',
        'Video Analytics',
        'Image Classification',
        'Quality Assessment',
        'Real-time Processing',
        'API Integration'
      ],
      icon: <Image className="w-8 h-8" />,
      category: 'Computer Vision',
      popular: true,
      rating: 4.9,
      users: '1,500+',
      color: 'from-emerald-500 to-green-600',
      capabilities: [
        '99.8% accuracy in object detection',
        'Real-time video processing',
        'Advanced facial recognition',
        'Content safety monitoring'
      ]
    },
    {
      id: 7,
      name: 'AI Financial Analysis',
      description: 'Comprehensive AI platform for financial data analysis and risk assessment',
      price: '$2,999/month',
      features: [
        'Risk Assessment',
        'Fraud Detection',
        'Market Analysis',
        'Credit Scoring',
        'Portfolio Optimization',
        'Regulatory Compliance',
        'Real-time Monitoring',
        'Predictive Modeling'
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      category: 'Finance',
      popular: true,
      rating: 4.9,
      users: '800+',
      color: 'from-yellow-500 to-orange-600',
      capabilities: [
        '99.9% fraud detection accuracy',
        'Real-time risk assessment',
        'Regulatory compliance automation',
        'Advanced predictive modeling'
      ]
    },
    {
      id: 8,
      name: 'AI Healthcare Diagnostics',
      description: 'Advanced AI platform for medical image analysis and diagnostic assistance',
      price: '$3,999/month',
      features: [
        'Medical Image Analysis',
        'Diagnostic Assistance',
        'Drug Discovery Support',
        'Patient Risk Assessment',
        'Treatment Recommendations',
        'Clinical Trial Matching',
        'HIPAA Compliance',
        'Integration with EMR'
      ],
      icon: <Heart className="w-8 h-8" />,
      category: 'Healthcare',
      popular: false,
      rating: 4.8,
      users: '400+',
      color: 'from-red-500 to-pink-600',
      capabilities: [
        '95% diagnostic accuracy',
        'HIPAA compliant processing',
        'Real-time medical imaging',
        'Drug interaction analysis'
      ]
    },
    {
      id: 9,
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with predictive analytics and optimization',
      price: '$1,899/month',
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Route Planning',
        'Supplier Risk Assessment',
        'Cost Optimization',
        'Quality Control',
        'Real-time Tracking',
        'Performance Analytics'
      ],
      icon: <Layers className="w-8 h-8" />,
      category: 'Supply Chain',
      popular: true,
      rating: 4.7,
      users: '1,200+',
      color: 'from-cyan-500 to-blue-600',
      capabilities: [
        '30% reduction in costs',
        '99.5% demand forecast accuracy',
        'Real-time supply tracking',
        'Automated optimization'
      ]
    },
    {
      id: 10,
      name: 'AI Voice & Speech Processing',
      description: 'Advanced speech recognition and voice processing platform with NLP',
      price: '$1,399/month',
      features: [
        'Speech Recognition',
        'Voice Synthesis',
        'Language Translation',
        'Sentiment Analysis',
        'Voice Cloning',
        'Real-time Processing',
        'Multi-Language Support',
        'API Integration'
      ],
      icon: <Headphones className="w-8 h-8" />,
      category: 'Voice Processing',
      popular: false,
      rating: 4.8,
      users: '1,600+',
      color: 'from-violet-500 to-purple-600',
      capabilities: [
        '99.2% speech recognition accuracy',
        '50+ languages supported',
        'Real-time voice processing',
        'Natural voice synthesis'
      ]
    },
    {
      id: 11,
      name: 'AI Cybersecurity Platform',
      description: 'Advanced AI-powered cybersecurity solution with threat detection and prevention',
      price: '$2,199/month',
      features: [
        'Threat Detection',
        'Anomaly Detection',
        'Behavioral Analysis',
        'Incident Response',
        'Vulnerability Assessment',
        'Compliance Monitoring',
        'Real-time Alerts',
        'Forensic Analysis'
      ],
      icon: <Shield className="w-8 h-8" />,
      category: 'Cybersecurity',
      popular: true,
      rating: 4.9,
      users: '900+',
      color: 'from-red-500 to-orange-600',
      capabilities: [
        '99.9% threat detection rate',
        'Real-time security monitoring',
        'Automated incident response',
        'Advanced behavioral analysis'
      ]
    },
    {
      id: 12,
      name: 'AI Research & Development',
      description: 'Comprehensive AI R&D platform for custom model development and training',
      price: '$4,999/month',
      features: [
        'Custom Model Development',
        'Data Preprocessing',
        'Model Training',
        'Hyperparameter Optimization',
        'Model Deployment',
        'Performance Monitoring',
        'A/B Testing',
        'Research Collaboration'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Edge AI',
      technologies: ['TensorFlow Lite', 'ONNX', 'OpenVINO', 'NVIDIA Jetson', 'Raspberry Pi', 'Edge Computing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // NEW ADVANCED AI SERVICES
    {
      title: 'AI-Powered Voice Cloning & Synthesis',
      description: 'Advanced voice synthesis technology for creating realistic voice clones and personalized speech systems.',
      icon: '🎤',
      price: 'Starting at $2,500/month',
      features: ['Voice cloning', 'Text-to-speech synthesis', 'Voice conversion', 'Emotion control', 'Multi-language support'],
      benefits: ['Create personalized voice assistants', 'Improve accessibility', 'Enhance user experience'],
      marketPrice: '$4,000-12,000/month',
      category: 'Voice AI',
      technologies: ['Tacotron', 'WaveNet', 'MelGAN', 'Real-time Voice Cloning', 'Custom Neural Networks']
    },
    {
      title: 'AI-Powered 3D Model Generation',
      description: 'Intelligent 3D model creation and optimization for gaming, VR, and architectural visualization.',
      icon: '🎮',
      price: 'Starting at $3,500/month',
      features: ['3D model generation', 'Texture synthesis', 'Animation creation', 'LOD optimization', 'VR/AR integration'],
      benefits: ['Accelerate 3D content creation', 'Reduce production costs', 'Improve visual quality'],
      marketPrice: '$6,000-18,000/month',
      category: '3D AI',
      technologies: ['NeRF', '3D GANs', 'Blender API', 'Unity Integration', 'Custom 3D Models']
    },
    {
      title: 'AI-Powered Music Composition',
      description: 'Intelligent music generation and composition with style transfer and emotional analysis.',
      icon: '🎵',
      price: 'Starting at $1,800/month',
      features: ['Music composition', 'Style transfer', 'Emotional analysis', 'Instrument synthesis', 'Lyrics generation'],
      benefits: ['Create original music', 'Reduce composition time', 'Explore new musical styles'],
      marketPrice: '$3,000-8,000/month',
      category: 'Creative AI',
      technologies: ['MuseNet', 'Jukebox', 'Magenta', 'MIDI Processing', 'Custom Music Models']
    },
    {
      title: 'AI-Powered Video Generation',
      description: 'Advanced video creation and editing using AI for content production and marketing.',
      icon: '🎬',
      price: 'Starting at $4,500/month',
      features: ['Video generation', 'Scene synthesis', 'Motion transfer', 'Style transfer', 'Automated editing'],
      benefits: ['Create professional videos', 'Reduce production time', 'Lower video production costs'],
      marketPrice: '$7,500-20,000/month',
      category: 'Video AI',
      technologies: ['DALL-E Video', 'Runway ML', 'Stable Video Diffusion', 'OpenCV', 'Custom Video Models']
    },
    {
      title: 'AI-Powered Code Generation',
      description: 'Intelligent code generation and completion for multiple programming languages and frameworks.',
      icon: '💻',
      price: 'Starting at $2,200/month',
      features: ['Code generation', 'Bug fixing', 'Code optimization', 'Documentation generation', 'Multi-language support'],
      benefits: ['Accelerate development', 'Reduce coding errors', 'Improve code quality'],
      marketPrice: '$3,500-10,000/month',
      category: 'Development AI',
      technologies: ['GitHub Copilot', 'CodeT5', 'CodeBERT', 'Custom Code Models', 'IDE Integration']
    },
    {
      title: 'AI-Powered Game Development',
      description: 'Intelligent game asset generation, level design, and NPC behavior creation.',
      icon: '🎮',
      price: 'Starting at $3,000/month',
      features: ['Asset generation', 'Level design', 'NPC behavior', 'Procedural content', 'Game balancing'],
      benefits: ['Accelerate game development', 'Create unique content', 'Improve player experience'],
      marketPrice: '$5,000-15,000/month',
      category: 'Gaming AI',
      technologies: ['Unity ML-Agents', 'Unreal Engine AI', 'Procedural Generation', 'Custom Game AI', 'Reinforcement Learning']
    },
    {
      title: 'AI-Powered Fashion Design',
      description: 'Intelligent fashion design and trend prediction with virtual try-on capabilities.',
      icon: '👗',
      price: 'Starting at $2,800/month',
      features: ['Fashion design', 'Trend prediction', 'Virtual try-on', 'Color matching', 'Size optimization'],
      benefits: ['Accelerate design process', 'Predict fashion trends', 'Improve customer experience'],
      marketPrice: '$4,500-12,000/month',
      category: 'Fashion AI',
      technologies: ['FashionGAN', 'Virtual Try-On', 'Trend Analysis', 'Computer Vision', 'Custom Fashion Models']
    },
    {
      title: 'AI-Powered Interior Design',
      description: 'Intelligent interior design and space optimization with virtual room planning.',
      icon: '🏠',
      price: 'Starting at $2,500/month',
      features: ['Room design', 'Furniture placement', 'Color schemes', 'Space optimization', '3D visualization'],
      benefits: ['Improve space utilization', 'Accelerate design process', 'Enhance customer satisfaction'],
      marketPrice: '$4,000-10,000/month',
      category: 'Design AI',
      technologies: ['3D Reconstruction', 'Interior Design AI', 'Space Planning', 'Custom Design Models', 'VR Integration']
    },
    {
      title: 'AI-Powered Language Learning',
      description: 'Personalized language learning with adaptive curriculum and pronunciation analysis.',
      icon: '🗣️',
      price: 'Starting at $1,500/month',
      features: ['Adaptive learning', 'Pronunciation analysis', 'Conversation practice', 'Progress tracking', 'Multi-language support'],
      benefits: ['Accelerate language learning', 'Personalize education', 'Improve retention rates'],
      marketPrice: '$2,500-6,000/month',
      category: 'Education AI',
      technologies: ['Speech Recognition', 'NLP', 'Adaptive Learning', 'Custom Language Models', 'Mobile Integration']
    },
    {
      title: 'AI-Powered Mental Health Assistant',
      description: 'Intelligent mental health monitoring and support with mood analysis and intervention recommendations.',
      icon: '🧠',
      price: 'Starting at $3,200/month',
      features: ['Mood analysis', 'Crisis detection', 'Intervention recommendations', 'Progress tracking', 'Privacy protection'],
      benefits: ['Improve mental health outcomes', 'Provide 24/7 support', 'Reduce healthcare costs'],
      marketPrice: '$5,000-15,000/month',
      category: 'Healthcare AI',
      technologies: ['Sentiment Analysis', 'NLP', 'Privacy-Preserving ML', 'Custom Health Models', 'HIPAA Compliance']
    },
    {
      title: 'AI-Powered Fitness Coaching',
      description: 'Personalized fitness coaching with form analysis and workout optimization.',
      icon: '💪',
      price: 'Starting at $1,200/month',
      features: ['Form analysis', 'Workout optimization', 'Progress tracking', 'Injury prevention', 'Nutrition guidance'],
      benefits: ['Improve workout effectiveness', 'Prevent injuries', 'Personalize fitness plans'],
      marketPrice: '$2,000-5,000/month',
      category: 'Fitness AI',
      technologies: ['Computer Vision', 'Motion Analysis', 'Wearable Integration', 'Custom Fitness Models', 'Mobile Apps']
    },
    {
      title: 'AI-Powered Sleep Analysis',
      description: 'Intelligent sleep monitoring and optimization with personalized recommendations.',
      icon: '😴',
      price: 'Starting at $800/month',
      features: ['Sleep monitoring', 'Sleep quality analysis', 'Optimization recommendations', 'Sleep disorder detection', 'Progress tracking'],
      benefits: ['Improve sleep quality', 'Identify sleep issues', 'Optimize sleep patterns'],
      marketPrice: '$1,500-4,000/month',
      category: 'Health AI',
      technologies: ['Sleep Analysis', 'Wearable Data', 'Custom Sleep Models', 'Mobile Integration', 'Health APIs']
    },
    {
      title: 'AI-Powered Nutrition Planning',
      description: 'Personalized nutrition planning with meal optimization and dietary analysis.',
      icon: '🥗',
      price: 'Starting at $1,000/month',
      features: ['Meal planning', 'Nutritional analysis', 'Dietary optimization', 'Allergy management', 'Shopping lists'],
      benefits: ['Improve nutrition', 'Simplify meal planning', 'Optimize health outcomes'],
      marketPrice: '$1,800-4,500/month',
      category: 'Health AI',
      technologies: ['Nutrition Analysis', 'Meal Planning AI', 'Custom Diet Models', 'Mobile Apps', 'Health APIs']
    },
    {
      title: 'AI-Powered Pet Care',
      description: 'Intelligent pet health monitoring and care recommendations with behavior analysis.',
      icon: '🐕',
      price: 'Starting at $1,500/month',
      features: ['Health monitoring', 'Behavior analysis', 'Care recommendations', 'Veterinary integration', 'Emergency alerts'],
      benefits: ['Improve pet health', 'Early problem detection', 'Reduce vet costs'],
      marketPrice: '$2,500-6,000/month',
      category: 'Pet AI',
      technologies: ['Computer Vision', 'Pet Health Models', 'IoT Integration', 'Mobile Apps', 'Veterinary APIs']
    },
    {
      title: 'AI-Powered Home Automation',
      description: 'Intelligent home automation with predictive control and energy optimization.',
      icon: '🏡',
      price: 'Starting at $2,000/month',
      features: ['Predictive control', 'Energy optimization', 'Security monitoring', 'Comfort management', 'IoT integration'],
      benefits: ['Reduce energy costs', 'Improve comfort', 'Enhance security'],
      marketPrice: '$3,500-8,000/month',
      category: 'Smart Home AI',
      technologies: ['IoT Integration', 'Predictive Control', 'Energy Management', 'Custom Home Models', 'Mobile Apps']
    },
    {
      title: 'AI-Powered Travel Planning',
      description: 'Intelligent travel planning with personalized recommendations and real-time optimization.',
      icon: '✈️',
      price: 'Starting at $1,800/month',
      features: ['Trip planning', 'Personalized recommendations', 'Real-time optimization', 'Budget management', 'Travel alerts'],
      benefits: ['Optimize travel experiences', 'Save time planning', 'Reduce travel costs'],
      marketPrice: '$3,000-7,000/month',
      category: 'Travel AI',
      technologies: ['Travel APIs', 'Recommendation Systems', 'Real-time Optimization', 'Custom Travel Models', 'Mobile Apps']
    },
    {
      title: 'AI-Powered Event Planning',
      description: 'Intelligent event planning and management with automated coordination and optimization.',
      icon: '🎉',
      price: 'Starting at $2,200/month',
      features: ['Event planning', 'Vendor coordination', 'Budget optimization', 'Guest management', 'Timeline automation'],
      benefits: ['Streamline event planning', 'Reduce coordination time', 'Improve event success'],
      marketPrice: '$3,500-9,000/month',
      category: 'Event AI',
      technologies: ['Event Management', 'Coordination AI', 'Custom Event Models', 'Mobile Apps', 'Vendor APIs']
    },
    {
      title: 'AI-Powered Dating Assistant',
      description: 'Intelligent dating assistance with compatibility analysis and conversation coaching.',
      icon: '💕',
      price: 'Starting at $1,200/month',
      features: ['Compatibility analysis', 'Conversation coaching', 'Profile optimization', 'Date planning', 'Safety monitoring'],
      benefits: ['Improve dating success', 'Enhance safety', 'Optimize matches'],
      marketPrice: '$2,000-5,000/month',
      category: 'Social AI',
      technologies: ['Compatibility Analysis', 'NLP', 'Custom Dating Models', 'Mobile Apps', 'Safety APIs']
    },
    {
      title: 'AI-Powered Parenting Assistant',
      description: 'Intelligent parenting support with child development monitoring and activity recommendations.',
      icon: '👶',
      price: 'Starting at $1,500/month',
      features: ['Development monitoring', 'Activity recommendations', 'Safety alerts', 'Progress tracking', 'Expert guidance'],
      benefits: ['Support child development', 'Improve parenting confidence', 'Ensure child safety'],
      marketPrice: '$2,500-6,000/month',
      category: 'Family AI',
      technologies: ['Child Development Models', 'Safety Monitoring', 'Custom Family Models', 'Mobile Apps', 'Expert Systems']
    },
    {
      title: 'AI-Powered Elderly Care',
      description: 'Intelligent elderly care monitoring with health tracking and safety assistance.',
      icon: '👴',
      price: 'Starting at $2,500/month',
      features: ['Health monitoring', 'Safety assistance', 'Medication reminders', 'Emergency alerts', 'Family communication'],
      benefits: ['Improve elderly care', 'Ensure safety', 'Reduce care costs'],
      marketPrice: '$4,000-10,000/month',
      category: 'Elderly Care AI',
      technologies: ['Health Monitoring', 'Safety Systems', 'Custom Care Models', 'IoT Integration', 'Mobile Apps']
    },
    {
      title: 'AI-Powered Accessibility Assistant',
      description: 'Intelligent accessibility support with adaptive interfaces and assistive technology.',
      icon: '♿',
      price: 'Starting at $1,800/month',
      features: ['Adaptive interfaces', 'Voice control', 'Visual assistance', 'Mobility support', 'Communication aids'],
      benefits: ['Improve accessibility', 'Enhance independence', 'Support inclusion'],
      marketPrice: '$3,000-7,000/month',
      category: 'Accessibility AI',
      technologies: ['Accessibility APIs', 'Assistive Technology', 'Custom Accessibility Models', 'Mobile Apps', 'IoT Integration']
    },
    {
      title: 'AI-Powered Environmental Monitoring',
      description: 'Intelligent environmental monitoring with pollution detection and sustainability recommendations.',
      icon: '🌱',
      price: 'Starting at $2,000/month',
      features: ['Pollution monitoring', 'Sustainability analysis', 'Environmental alerts', 'Carbon tracking', 'Green recommendations'],
      benefits: ['Monitor environmental impact', 'Improve sustainability', 'Reduce carbon footprint'],
      marketPrice: '$3,500-8,000/month',
      category: 'Environmental AI',
      technologies: ['Environmental Sensors', 'Pollution Detection', 'Custom Environmental Models', 'IoT Integration', 'Analytics']
    },
    {
      title: 'AI-Powered Wildlife Conservation',
      description: 'Intelligent wildlife monitoring and conservation with species identification and behavior analysis.',
      icon: '🦁',
      price: 'Starting at $3,500/month',
      features: ['Species identification', 'Behavior analysis', 'Population monitoring', 'Threat detection', 'Conservation planning'],
      benefits: ['Protect wildlife', 'Monitor populations', 'Prevent poaching'],
      marketPrice: '$6,000-15,000/month',
      category: 'Conservation AI',
      technologies: ['Computer Vision', 'Wildlife Detection', 'Custom Conservation Models', 'Satellite Data', 'IoT Sensors']
    },
    {
      title: 'AI-Powered Disaster Response',
      description: 'Intelligent disaster prediction and response coordination with real-time monitoring.',
      icon: '🚨',
      price: 'Starting at $5,000/month',
      features: ['Disaster prediction', 'Response coordination', 'Resource optimization', 'Evacuation planning', 'Damage assessment'],
      benefits: ['Save lives', 'Reduce damage', 'Improve response time'],
      marketPrice: '$8,000-20,000/month',
      category: 'Emergency AI',
      technologies: ['Disaster Prediction', 'Response Coordination', 'Custom Emergency Models', 'Satellite Data', 'IoT Sensors']
    },
    {
      title: 'AI-Powered Urban Planning',
      description: 'Intelligent urban planning with traffic optimization and infrastructure analysis.',
      icon: '🏙️',
      price: 'Starting at $4,500/month',
      features: ['Traffic optimization', 'Infrastructure analysis', 'Population modeling', 'Resource planning', 'Sustainability analysis'],
      benefits: ['Improve city efficiency', 'Reduce traffic congestion', 'Optimize resource use'],
      marketPrice: '$7,500-18,000/month',
      category: 'Urban AI',
      technologies: ['Traffic Analysis', 'Infrastructure Modeling', 'Custom Urban Models', 'Satellite Data', 'IoT Integration']
    },
    {
      title: 'AI-Powered Agriculture Optimization',
      description: 'Intelligent agricultural optimization with crop monitoring and yield prediction.',
      icon: '🌾',
      price: 'Starting at $3,000/month',
      features: ['Crop monitoring', 'Yield prediction', 'Pest detection', 'Irrigation optimization', 'Soil analysis'],
      benefits: ['Increase crop yields', 'Reduce resource use', 'Improve sustainability'],
      marketPrice: '$5,000-12,000/month',
      category: 'Agriculture AI',
      technologies: ['Satellite Imagery', 'IoT Sensors', 'Custom Agriculture Models', 'Drone Data', 'Weather APIs']
    },
    {
      title: 'AI-Powered Water Management',
      description: 'Intelligent water resource management with quality monitoring and distribution optimization.',
      icon: '💧',
      price: 'Starting at $2,800/month',
      features: ['Water quality monitoring', 'Distribution optimization', 'Leak detection', 'Usage analysis', 'Treatment optimization'],
      benefits: ['Improve water quality', 'Reduce waste', 'Optimize distribution'],
      marketPrice: '$4,500-11,000/month',
      category: 'Water AI',
      technologies: ['Water Quality Sensors', 'Distribution Networks', 'Custom Water Models', 'IoT Integration', 'Analytics']
    },
    {
      title: 'AI-Powered Waste Management',
      description: 'Intelligent waste management with collection optimization and recycling analysis.',
      icon: '♻️',
      price: 'Starting at $2,200/month',
      features: ['Collection optimization', 'Recycling analysis', 'Waste sorting', 'Route planning', 'Sustainability tracking'],
      benefits: ['Reduce waste', 'Improve recycling', 'Optimize collection'],
      marketPrice: '$3,500-8,000/month',
      category: 'Waste AI',
      technologies: ['Waste Sensors', 'Route Optimization', 'Custom Waste Models', 'IoT Integration', 'Analytics']
    },
    {
      title: 'AI-Powered Energy Grid Management',
      description: 'Intelligent energy grid optimization with demand prediction and renewable integration.',
      icon: '⚡',
      price: 'Starting at $4,000/month',
      features: ['Demand prediction', 'Grid optimization', 'Renewable integration', 'Load balancing', 'Outage prevention'],
      benefits: ['Improve grid efficiency', 'Integrate renewables', 'Prevent outages'],
      marketPrice: '$6,500-16,000/month',
      category: 'Energy AI',
      technologies: ['Grid Data', 'Demand Forecasting', 'Custom Energy Models', 'IoT Sensors', 'Renewable APIs']
    },
    {
      title: 'AI-Powered Smart City Management',
      description: 'Comprehensive smart city management with integrated AI services and citizen engagement.',
      icon: '🏛️',
      price: 'Starting at $8,000/month',
      features: ['Integrated services', 'Citizen engagement', 'Resource optimization', 'Service delivery', 'Data analytics'],
      benefits: ['Improve city services', 'Enhance citizen experience', 'Optimize resources'],
      marketPrice: '$15,000-40,000/month',
      category: 'Smart City AI',
      technologies: ['City Data Integration', 'Citizen Services', 'Custom City Models', 'IoT Networks', 'Analytics Platforms'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    'All Services',
    'Analytics',
    'Content Creation',
    'Customer Service',
    'Marketing',
    'Document Processing',
    'Computer Vision',
    'Finance',
    'Healthcare',
    'Supply Chain',
    'Voice Processing',
    'Cybersecurity',
    'R&D'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Advanced Artificial Intelligence Solutions for Enterprise
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your business with our comprehensive suite of AI services. From machine learning and natural language processing 
            to computer vision and predictive analytics, we deliver cutting-edge AI solutions that drive real business value.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="cyber-card hologram-card">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="font-bold text-white mb-3 text-lg">Advanced AI</h3>
              <p className="text-sm text-gray-300 leading-relaxed">State-of-the-art machine learning models and neural networks for complex problem solving</p>
            </div>
            <div className="cyber-card hologram-card">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-white mb-3 text-lg">Real-time Processing</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Lightning-fast AI processing with sub-second response times and 99.9% uptime</p>
            </div>
            <div className="cyber-card hologram-card">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-white mb-3 text-lg">Enterprise Security</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Bank-level security with SOC 2 compliance and end-to-end encryption</p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-3 bg-slate-800 text-gray-300 rounded-lg hover:bg-cyan-600 hover:text-white transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiServices.map((service) => (
            <div key={service.id} className="cyber-card hologram-card group hover:scale-105 transition-all duration-300">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                  {service.icon}
                </div>
                <div className="flex items-center space-x-2">
                  {service.popular && (
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  )}
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{service.rating}</span>
                  </div>
                </div>
              </div>

              {/* Service Info */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Capabilities */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Capabilities:</h4>
                <ul className="space-y-1">
                  {service.capabilities.map((capability, index) => (
                    <li key={index} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 relative">
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="space-y-3 mb-6">
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Pricing:</span>
                          <span className="text-sm font-medium text-white">{service.pricing}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Trial:</span>
                          <span className="text-sm font-medium text-cyan-400">{service.trial}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Expected ROI:</span>
                          <span className="text-sm font-medium text-green-400">{service.roi}</span>
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-804c
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-3">Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-xs text-gray-400">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Pricing & Users */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                  <div className="text-xs text-gray-400">per month</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-white">{service.users}</div>
                  <div className="text-xs text-gray-400">enterprise clients</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="flex-1 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors font-medium text-sm">
                  Start Free Trial
                </button>
                <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12 cyber-card">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises that have already transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 30-day free trial for all AI services</p>
            <p>✓ Custom AI model development</p>
            <p>✓ 24/7 AI expert support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
