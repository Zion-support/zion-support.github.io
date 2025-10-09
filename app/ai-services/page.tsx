import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Zap, Shield, Clock, Users, TrendingUp, Brain, Code, BarChart, Mail, Calendar, FileText, Image, Video, Music, Globe, Smartphone, Database, Cloud, Lock, Settings, Bell, Target, Rocket, Award, Heart, DollarSign, PieChart, Activity, Layers, Globe2, Smartphone2, Monitor, Server, Wifi, Camera, Headphones, Mic, Mic2, Palette, Brush, Scissors, Wrench, Hammer, Cog, Filter, Search, Download, Upload, Share, Copy, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, ChevronRight, Play, Pause, Stop, SkipForward, SkipBack, Volume2, VolumeX, Maximize, Minimize, RotateCcw, RotateCw, Move, ZoomIn, ZoomOut, RefreshCw, RefreshCcw, Save, Folder, File, FolderOpen, Archive, Inbox, Send, Reply, Forward, Flag, Bookmark, Tag, Tags, Star as StarIcon, ThumbsUp, ThumbsDown, MessageCircle, MessageSquare, Phone, PhoneCall, PhoneIncoming, PhoneOutgoing, PhoneMissed, PhoneOff, Voicemail, Video as VideoIcon, VideoOff, Mic as MicIcon, MicOff, Headphones as HeadphonesIcon, HeadphonesOff, Volume1, Volume2 as Volume2Icon, VolumeX as VolumeXIcon, Speaker, SpeakerOff, Radio, Tv, Laptop, Tablet, Smartphone as SmartphoneIcon, Watch, Gamepad2, Joystick, Mouse, Keyboard, HardDrive, Cpu, MemoryStick, Wifi as WifiIcon, WifiOff, Bluetooth, BluetoothOff, Usb, Plug, Battery, BatteryCharging, Power, PowerOff, Sun, Moon, Cloud as CloudIcon, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Activity as ActivityIcon, Pulse, Heart as HeartIcon, Zap as ZapIcon, Flash, Thunder, Fire, Snowflake, Sun as SunIcon, Moon as MoonIcon, Sunrise, Sunset, Compass, Map, MapPin, Navigation, Car, Truck, Bus, Train, Plane, Ship, Bike, Walk, Run, Footprints, Mountain, Tree, Leaf, Flower, Bug, Fish, Bird, Cat, Dog, PawPrint, Skull, Ghost, Alien, Robot, Android, Apple, Windows, Linux, Chrome, Firefox, Safari, Edge, Opera, InternetExplorer, Github, Gitlab, Bitbucket, Docker, Kubernetes, Jenkins, Travis, Circle, Square, Circle as CircleIcon, Square as SquareIcon, Triangle, Hexagon, Pentagon, Octagon, Diamond, Heart as HeartShape, Star as StarShape, Cross, Plus as PlusIcon, Minus as MinusIcon, X as XIcon, Check as CheckIcon, AlertTriangle, AlertCircle as AlertCircleIcon, Info as InfoIcon, HelpCircle as HelpCircleIcon, ExternalLink as ExternalLinkIcon, ChevronRight as ChevronRightIcon, ChevronLeft, ChevronUp, ChevronDown, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, ArrowUpRight, ArrowUpLeft, ArrowDownRight, ArrowDownLeft, CornerUpLeft, CornerUpRight, CornerDownLeft, CornerDownRight, CornerLeftUp, CornerLeftDown, CornerRightUp, CornerRightDown, Move as MoveIcon, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, RotateLeft, RotateRight, FlipHorizontal, FlipVertical, FlipHorizontal2, FlipVertical2, Rotate3D, Rotate3D as Rotate3DIcon, Rotate3D as Rotate3DIcon2, Rotate3D as Rotate3DIcon3, Rotate3D as Rotate3DIcon4, Rotate3D as Rotate3DIcon5, Rotate3D as Rotate3DIcon6, Rotate3D as Rotate3DIcon7, Rotate3D as Rotate3DIcon8, Rotate3D as Rotate3DIcon9, Rotate3D as Rotate3DIcon10, Rotate3D as Rotate3DIcon11, Rotate3D as Rotate3DIcon12, Rotate3D as Rotate3DIcon13, Rotate3D as Rotate3DIcon14, Rotate3D as Rotate3DIcon15, Rotate3D as Rotate3DIcon16, Rotate3D as Rotate3DIcon17, Rotate3D as Rotate3DIcon18, Rotate3D as Rotate3DIcon19, Rotate3D as Rotate3DIcon20, Rotate3D as Rotate3DIcon21, Rotate3D as Rotate3DIcon22, Rotate3D as Rotate3DIcon23, Rotate3D as Rotate3DIcon24, Rotate3D as Rotate3DIcon25, Rotate3D as Rotate3DIcon26, Rotate3D as Rotate3DIcon27, Rotate3D as Rotate3DIcon28, Rotate3D as Rotate3DIcon29, Rotate3D as Rotate3DIcon30, Rotate3D as Rotate3DIcon31, Rotate3D as Rotate3DIcon32, Rotate3D as Rotate3DIcon33, Rotate3D as Rotate3DIcon34, Rotate3D as Rotate3DIcon35, Rotate3D as Rotate3DIcon36, Rotate3D as Rotate3DIcon37, Rotate3D as Rotate3DIcon38, Rotate3D as Rotate3DIcon39, Rotate3D as Rotate3DIcon40, Rotate3D as Rotate3DIcon41, Rotate3D as Rotate3DIcon42, Rotate3D as Rotate3DIcon43, Rotate3D as Rotate3DIcon44, Rotate3D as Rotate3DIcon45, Rotate3D as Rotate3DIcon46, Rotate3D as Rotate3DIcon47, Rotate3D as Rotate3DIcon48, Rotate3D as Rotate3DIcon49, Rotate3D as Rotate3DIcon50, Rotate3D as Rotate3DIcon51, Rotate3D as Rotate3DIcon52, Rotate3D as Rotate3DIcon53, Rotate3D as Rotate3DIcon54, Rotate3D as Rotate3DIcon55, Rotate3D as Rotate3DIcon56, Rotate3D as Rotate3DIcon57, Rotate3D as Rotate3DIcon58, Rotate3D as Rotate3DIcon59, Rotate3D as Rotate3DIcon60, Rotate3D as Rotate3DIcon61, Rotate3D as Rotate3DIcon62, Rotate3D as Rotate3DIcon63, Rotate3D as Rotate3DIcon64, Rotate3D as Rotate3DIcon65, Rotate3D as Rotate3DIcon66, Rotate3D as Rotate3DIcon67, Rotate3D as Rotate3DIcon68, Rotate3D as Rotate3DIcon69, Rotate3D as Rotate3DIcon70, Rotate3D as Rotate3DIcon71, Rotate3D as Rotate3DIcon72, Rotate3D as Rotate3DIcon73, Rotate3D as Rotate3DIcon74, Rotate3D as Rotate3DIcon75, Rotate3D as Rotate3DIcon76, Rotate3D as Rotate3DIcon77, Rotate3D as Rotate3DIcon78, Rotate3D as Rotate3DIcon79, Rotate3D as Rotate3DIcon80, Rotate3D as Rotate3DIcon81, Rotate3D as Rotate3DIcon82, Rotate3D as Rotate3DIcon83, Rotate3D as Rotate3DIcon84, Rotate3D as Rotate3DIcon85, Rotate3D as Rotate3DIcon86, Rotate3D as Rotate3DIcon87, Rotate3D as Rotate3DIcon88, Rotate3D as Rotate3DIcon89, Rotate3D as Rotate3DIcon90, Rotate3D as Rotate3DIcon91, Rotate3D as Rotate3DIcon92, Rotate3D as Rotate3DIcon93, Rotate3D as Rotate3DIcon94, Rotate3D as Rotate3DIcon95, Rotate3D as Rotate3DIcon96, Rotate3D as Rotate3DIcon97, Rotate3D as Rotate3DIcon98, Rotate3D as Rotate3DIcon99, Rotate3D as Rotate3DIcon100 } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Brain },
    { id: 'machine-learning', name: 'Machine Learning', icon: Cpu },
    { id: 'nlp', name: 'Natural Language', icon: MessageCircle },
    { id: 'computer-vision', name: 'Computer Vision', icon: Eye },
    { id: 'automation', name: 'Automation', icon: Zap },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'content', name: 'Content Generation', icon: FileText },
    { id: 'customer-service', name: 'Customer Service', icon: Headphones },
    { id: 'marketing', name: 'Marketing', icon: Target },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'finance', name: 'Finance', icon: DollarSign },
    { id: 'security', name: 'Security', icon: Shield },
  ];

  const aiServices = [
    // Machine Learning Services
    {
      id: 'ml-platform-pro',
      name: 'ML Platform Pro',
      description: 'End-to-end machine learning platform with automated model training, deployment, and monitoring',
      category: 'machine-learning',
      icon: Cpu,
      price: 2500,
      period: 'month',
      features: [
        'Automated Model Training',
        'Real-time Inference',
        'Model Versioning',
        'A/B Testing',
        'Performance Monitoring',
        'Auto-scaling Infrastructure'
      ],
      benefits: [
        'Reduce ML development time by 70%',
        'Deploy models 10x faster',
        'Automated hyperparameter tuning',
        'Enterprise-grade security'
      ],
      popular: true,
      rating: 4.9,
      users: '2,500+',
      color: 'from-blue-500 to-purple-600',
      useCases: [
        'Predictive Analytics',
        'Recommendation Systems',
        'Fraud Detection',
        'Demand Forecasting'
      ]
    },
    {
      id: 'deep-learning-suite',
      name: 'Deep Learning Suite',
      description: 'Advanced deep learning framework with pre-trained models and custom architecture support',
      category: 'machine-learning',
      icon: Layers,
      price: 3500,
      period: 'month',
      features: [
        'Pre-trained Models Library',
        'Custom Architecture Builder',
        'GPU Acceleration',
        'Transfer Learning',
        'Model Optimization',
        'Distributed Training'
      ],
      benefits: [
        'Access to 100+ pre-trained models',
        'Build complex architectures easily',
        'Optimize for production',
        'Scale training across clusters'
      ],
      rating: 4.8,
      users: '1,800+',
      color: 'from-purple-500 to-pink-600',
      useCases: [
        'Image Recognition',
        'Natural Language Processing',
        'Speech Recognition',
        'Time Series Analysis'
      ]
    },

    // Natural Language Processing
    {
      id: 'nlp-engine-pro',
      name: 'NLP Engine Pro',
      description: 'Comprehensive natural language processing platform with sentiment analysis, translation, and text generation',
      category: 'nlp',
      icon: MessageCircle,
      price: 1800,
      period: 'month',
      features: [
        'Sentiment Analysis',
        'Language Translation (100+ languages)',
        'Text Summarization',
        'Named Entity Recognition',
        'Intent Classification',
        'Text Generation'
      ],
      benefits: [
        'Process text in 100+ languages',
        'Extract insights from unstructured data',
        'Automate content generation',
        'Improve customer understanding'
      ],
      popular: true,
      rating: 4.9,
      users: '4,200+',
      color: 'from-green-500 to-teal-600',
      useCases: [
        'Customer Support Automation',
        'Content Moderation',
        'Market Research',
        'Document Processing'
      ]
    },
    {
      id: 'chatbot-platform',
      name: 'AI Chatbot Platform',
      description: 'Advanced conversational AI platform with multi-channel support and human handoff capabilities',
      category: 'nlp',
      icon: Bot,
      price: 1200,
      period: 'month',
      features: [
        'Multi-channel Deployment',
        'Context-aware Conversations',
        'Human Handoff',
        'Analytics Dashboard',
        'Custom Training',
        'Integration APIs'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Handle 80% of queries automatically',
        'Improve customer satisfaction',
        'Scale support operations'
      ],
      rating: 4.8,
      users: '6,500+',
      color: 'from-cyan-500 to-blue-600',
      useCases: [
        'Customer Support',
        'Lead Qualification',
        'FAQ Automation',
        'Appointment Booking'
      ]
    },

    // Computer Vision
    {
      id: 'computer-vision-pro',
      name: 'Computer Vision Pro',
      description: 'Advanced computer vision platform with object detection, facial recognition, and image analysis',
      category: 'computer-vision',
      icon: Eye,
      price: 2200,
      period: 'month',
      features: [
        'Object Detection & Recognition',
        'Facial Recognition',
        'OCR (Optical Character Recognition)',
        'Image Classification',
        'Video Analysis',
        'Real-time Processing'
      ],
      benefits: [
        'Automate visual inspection',
        'Enhance security systems',
        'Extract text from images',
        'Analyze video content'
      ],
      rating: 4.9,
      users: '3,100+',
      color: 'from-orange-500 to-red-600',
      useCases: [
        'Quality Control',
        'Security & Surveillance',
        'Document Digitization',
        'Medical Imaging'
      ]
    },
    {
      id: 'image-processing-suite',
      name: 'Image Processing Suite',
      description: 'Comprehensive image processing and enhancement platform with AI-powered editing tools',
      category: 'computer-vision',
      icon: Image,
      price: 1500,
      period: 'month',
      features: [
        'AI Image Enhancement',
        'Background Removal',
        'Style Transfer',
        'Image Upscaling',
        'Color Correction',
        'Batch Processing'
      ],
      benefits: [
        'Enhance image quality automatically',
        'Remove backgrounds instantly',
        'Apply artistic styles',
        'Process images in bulk'
      ],
      rating: 4.7,
      users: '5,800+',
      color: 'from-pink-500 to-purple-600',
      useCases: [
        'E-commerce Product Images',
        'Social Media Content',
        'Marketing Materials',
        'Photo Restoration'
      ]
    },

    // Automation Services
    {
      id: 'workflow-automation-ai',
      name: 'Workflow Automation AI',
      description: 'Intelligent workflow automation platform that learns and adapts to business processes',
      category: 'automation',
      icon: Zap,
      price: 2000,
      period: 'month',
      features: [
        'Process Discovery',
        'Automated Workflow Creation',
        'Exception Handling',
        'Performance Analytics',
        'Integration Hub',
        'Custom Triggers'
      ],
      benefits: [
        'Automate 80% of repetitive tasks',
        'Reduce process errors by 90%',
        'Increase efficiency by 300%',
        'Scale operations easily'
      ],
      popular: true,
      rating: 4.8,
      users: '4,500+',
      color: 'from-yellow-500 to-orange-600',
      useCases: [
        'Document Processing',
        'Data Entry Automation',
        'Approval Workflows',
        'Customer Onboarding'
      ]
    },
    {
      id: 'rpa-suite',
      name: 'RPA Suite',
      description: 'Robotic Process Automation platform with AI-powered decision making and exception handling',
      category: 'automation',
      icon: Bot,
      price: 1800,
      period: 'month',
      features: [
        'Screen Automation',
        'AI Decision Making',
        'Exception Handling',
        'Process Monitoring',
        'Scalable Deployment',
        'Compliance Reporting'
      ],
      benefits: [
        'Eliminate manual data entry',
        'Process 24/7 without breaks',
        'Ensure 100% accuracy',
        'Reduce operational costs'
      ],
      rating: 4.7,
      users: '3,900+',
      color: 'from-indigo-500 to-blue-600',
      useCases: [
        'Invoice Processing',
        'Data Migration',
        'Report Generation',
        'System Integration'
      ]
    },

    // Analytics Services
    {
      id: 'predictive-analytics-pro',
      name: 'Predictive Analytics Pro',
      description: 'Advanced predictive analytics platform with machine learning models and real-time insights',
      category: 'analytics',
      icon: BarChart,
      price: 3000,
      period: 'month',
      features: [
        'Predictive Modeling',
        'Real-time Analytics',
        'Anomaly Detection',
        'Forecasting',
        'Custom Dashboards',
        'API Integration'
      ],
      benefits: [
        'Predict future trends',
        'Identify anomalies early',
        'Make data-driven decisions',
        'Optimize business processes'
      ],
      rating: 4.9,
      users: '2,800+',
      color: 'from-emerald-500 to-green-600',
      useCases: [
        'Sales Forecasting',
        'Risk Assessment',
        'Demand Planning',
        'Customer Churn Prediction'
      ]
    },
    {
      id: 'business-intelligence-ai',
      name: 'Business Intelligence AI',
      description: 'AI-powered business intelligence platform with natural language queries and automated insights',
      category: 'analytics',
      icon: PieChart,
      price: 2500,
      period: 'month',
      features: [
        'Natural Language Queries',
        'Automated Insights',
        'Interactive Dashboards',
        'Data Visualization',
        'Report Generation',
        'Mobile Access'
      ],
      benefits: [
        'Ask questions in plain English',
        'Get instant insights',
        'Create reports automatically',
        'Access data anywhere'
      ],
      rating: 4.8,
      users: '3,600+',
      color: 'from-cyan-500 to-blue-600',
      useCases: [
        'Executive Dashboards',
        'Performance Monitoring',
        'Trend Analysis',
        'Competitive Intelligence'
      ]
    },

    // Content Generation
    {
      id: 'content-generator-ai',
      name: 'Content Generator AI',
      description: 'Advanced AI content generation platform for blogs, social media, and marketing materials',
      category: 'content',
      icon: FileText,
      price: 800,
      period: 'month',
      features: [
        'Multi-format Content',
        'Brand Voice Training',
        'SEO Optimization',
        'Plagiarism Detection',
        'Multi-language Support',
        'Content Calendar'
      ],
      benefits: [
        'Create content 10x faster',
        'Maintain consistent brand voice',
        'Optimize for search engines',
        'Scale content production'
      ],
      popular: true,
      rating: 4.9,
      users: '12,000+',
      color: 'from-purple-500 to-pink-600',
      useCases: [
        'Blog Writing',
        'Social Media Posts',
        'Email Campaigns',
        'Product Descriptions'
      ]
    },
    {
      id: 'video-generator-ai',
      name: 'Video Generator AI',
      description: 'AI-powered video creation platform with automated editing and voice synthesis',
      category: 'content',
      icon: Video,
      price: 1500,
      period: 'month',
      features: [
        'Automated Video Creation',
        'Voice Synthesis',
        'Text-to-Video',
        'Template Library',
        'Brand Customization',
        'Multi-platform Export'
      ],
      benefits: [
        'Create videos without editing skills',
        'Generate voiceovers automatically',
        'Maintain brand consistency',
        'Scale video production'
      ],
      rating: 4.8,
      users: '4,800+',
      color: 'from-red-500 to-pink-600',
      useCases: [
        'Marketing Videos',
        'Training Content',
        'Social Media Clips',
        'Product Demos'
      ]
    },

    // Customer Service
    {
      id: 'customer-service-ai',
      name: 'Customer Service AI',
      description: 'Comprehensive AI customer service platform with chatbots, ticket routing, and sentiment analysis',
      category: 'customer-service',
      icon: Headphones,
      price: 1200,
      period: 'month',
      features: [
        'Intelligent Chatbots',
        'Ticket Routing',
        'Sentiment Analysis',
        'Knowledge Base',
        'Multi-channel Support',
        'Performance Analytics'
      ],
      benefits: [
        'Reduce support costs by 50%',
        'Improve response times',
        'Enhance customer satisfaction',
        'Scale support operations'
      ],
      rating: 4.9,
      users: '8,500+',
      color: 'from-blue-500 to-cyan-600',
      useCases: [
        '24/7 Customer Support',
        'Ticket Classification',
        'FAQ Automation',
        'Customer Feedback Analysis'
      ]
    },

    // Marketing AI
    {
      id: 'marketing-automation-ai',
      name: 'Marketing Automation AI',
      description: 'AI-powered marketing automation platform with personalization and campaign optimization',
      category: 'marketing',
      icon: Target,
      price: 1800,
      period: 'month',
      features: [
        'Customer Segmentation',
        'Personalized Campaigns',
        'A/B Testing',
        'Lead Scoring',
        'Email Optimization',
        'ROI Tracking'
      ],
      benefits: [
        'Increase conversion rates by 40%',
        'Personalize at scale',
        'Optimize campaigns automatically',
        'Track ROI accurately'
      ],
      rating: 4.8,
      users: '6,200+',
      color: 'from-pink-500 to-purple-600',
      useCases: [
        'Email Marketing',
        'Social Media Advertising',
        'Lead Nurturing',
        'Customer Retention'
      ]
    },

    // Healthcare AI
    {
      id: 'healthcare-ai-platform',
      name: 'Healthcare AI Platform',
      description: 'Specialized AI platform for healthcare with medical imaging, diagnosis support, and patient monitoring',
      category: 'healthcare',
      icon: Heart,
      price: 5000,
      period: 'month',
      features: [
        'Medical Image Analysis',
        'Diagnosis Support',
        'Patient Monitoring',
        'Drug Discovery',
        'Clinical Decision Support',
        'HIPAA Compliance'
      ],
      benefits: [
        'Improve diagnostic accuracy',
        'Reduce medical errors',
        'Accelerate drug discovery',
        'Enhance patient care'
      ],
      rating: 4.9,
      users: '1,200+',
      color: 'from-red-500 to-pink-600',
      useCases: [
        'Medical Imaging',
        'Drug Discovery',
        'Patient Monitoring',
        'Clinical Research'
      ]
    },

    // Finance AI
    {
      id: 'fintech-ai-suite',
      name: 'Fintech AI Suite',
      description: 'Comprehensive AI platform for financial services with fraud detection, risk assessment, and trading algorithms',
      category: 'finance',
      icon: DollarSign,
      price: 4000,
      period: 'month',
      features: [
        'Fraud Detection',
        'Risk Assessment',
        'Algorithmic Trading',
        'Credit Scoring',
        'Compliance Monitoring',
        'Real-time Analytics'
      ],
      benefits: [
        'Detect fraud in real-time',
        'Assess risk accurately',
        'Optimize trading strategies',
        'Ensure compliance'
      ],
      rating: 4.9,
      users: '1,800+',
      color: 'from-green-500 to-emerald-600',
      useCases: [
        'Fraud Prevention',
        'Credit Risk Assessment',
        'Algorithmic Trading',
        'Regulatory Compliance'
      ]
    },

    // Security AI
    {
      id: 'cybersecurity-ai',
      name: 'Cybersecurity AI',
      description: 'AI-powered cybersecurity platform with threat detection, incident response, and vulnerability assessment',
      category: 'security',
      icon: Shield,
      price: 3500,
      period: 'month',
      features: [
        'Threat Detection',
        'Incident Response',
        'Vulnerability Assessment',
        'Behavioral Analysis',
        'Compliance Monitoring',
        'Security Analytics'
      ],
      benefits: [
        'Detect threats in real-time',
        'Respond to incidents faster',
        'Identify vulnerabilities',
        'Ensure compliance'
      ],
      rating: 4.8,
      users: '2,400+',
      color: 'from-orange-500 to-red-600',
      useCases: [
        'Threat Detection',
        'Incident Response',
        'Vulnerability Management',
        'Compliance Auditing'
      ]
    }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularServices = aiServices.filter(service => service.popular);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            AI Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 cyber-glow">
            Advanced artificial intelligence solutions for enterprise transformation
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
            Harness the power of cutting-edge AI technologies including machine learning, 
            natural language processing, computer vision, and automation to transform your 
            business operations and drive unprecedented growth.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent cyber-input"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white cyber-glow'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Most Popular AI Services
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12">
            Our most requested and highest-performing AI solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service) => (
              <div key={service.id} className="quantum-card p-8 energy-pulse relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-cyan-400 neon-text">
                      ${service.price.toLocaleString()}
                      <span className="text-sm text-gray-400">/{service.period}</span>
                    </div>
                    <div className="flex items-center text-yellow-400 text-sm">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1">{service.rating}</span>
                      <span className="text-gray-400 ml-2">({service.users})</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.name}</h3>
                <p className="text-gray-300 mb-6 text-base leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-300">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full cyber-button text-center py-4 px-6 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Complete AI Services Portfolio
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12">
            Comprehensive AI solutions for every business need
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-cyan-400 neon-text">
                      ${service.price.toLocaleString()}
                      <span className="text-sm text-gray-400">/{service.period}</span>
                    </div>
                    <div className="flex items-center text-yellow-400 text-sm">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1">{service.rating}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-cyan-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full cyber-button text-center py-3 px-4 rounded-lg font-semibold text-sm hover:scale-105 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Overview */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            AI Capabilities & Technologies
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12">
            Cutting-edge AI technologies powering our solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Machine Learning</h3>
              <p className="text-gray-300 text-sm">
                Advanced ML algorithms for predictive analytics, pattern recognition, and automated decision making.
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Natural Language Processing</h3>
              <p className="text-gray-300 text-sm">
                Understand and generate human language with sentiment analysis, translation, and text generation.
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Computer Vision</h3>
              <p className="text-gray-300 text-sm">
                Analyze and understand visual content with object detection, facial recognition, and image processing.
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Automation</h3>
              <p className="text-gray-300 text-sm">
                Intelligent automation solutions that learn, adapt, and optimize business processes automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of enterprises already using our AI solutions to achieve unprecedented growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Get Free AI Consultation
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🕒 24/7 AI Support Available</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;