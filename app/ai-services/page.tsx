<<<<<<< HEAD
'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, 
  BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, 
  Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, 
  Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, 
  Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, 
  Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, 
  Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, 
  Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, 
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Monitor, Headphones, Mic, 
  Image, FileImage, Layers, GitBranch, Terminal, Wifi, HardDrive, Cpu as Processor,
  WifiOff, RefreshCw, Download, Upload, Share2, Copy, Edit, Trash2, Plus, Minus,
  Maximize, Minimize, RotateCcw, RotateCw, Move, Grip, Filter, SortAsc, SortDesc,
  ChevronUp, ChevronDown, ChevronLeft, ChevronRight, X, Check as CheckIcon, AlertCircle, Info,
  ExternalLink, Link, Lock as LockIcon, Unlock, Eye as EyeIcon, EyeOff, Bell,
  BellOff, Volume2, VolumeX, Play, Pause, Stop, SkipForward, SkipBack, Repeat,
  Shuffle, Heart as HeartIcon, ThumbsUp, ThumbsDown, MessageCircle, Send,
  Paperclip, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Meh as MehIcon,
  Server, Network, Router, Switch, Firewall, Key, Certificate, Bug, AlertTriangle,
  Activity as ActivityIcon, Zap as ZapIcon, Globe as GlobeIcon, Shield as ShieldIcon,
  Database as DatabaseIcon, Cloud as CloudIcon, Code as CodeIcon, Smartphone as SmartphoneIcon,
  Settings as SettingsIcon, BarChart as BarChartIcon, FileText as FileTextIcon,
  Search as SearchIcon, Bot as BotIcon, Palette as PaletteIcon, Camera as CameraIcon,
  Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon,
  CreditCard as CreditCardIcon, Building as BuildingIcon, Factory as FactoryIcon,
  Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon,
  Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon,
  GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon,
  Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon,
  BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon,
  Clock3 as Clock3Icon, Compass as CompassIcon, Globe2 as Globe2Icon, Map as MapIcon,
  Navigation as NavigationIcon, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon,
  Activity as ActivityIcon, Zap as LightningIcon, Target as CrosshairIcon,
  Shield as SecurityIcon, Users as PeopleIcon, Star as StarIcon, CheckCircle as CheckIcon,
  ArrowRight as ArrowIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as LocationIcon,
  Grid, Package, Microscope, Atom, Dna, Cpu as CpuIcon, CircuitBoard, Cpu as CpuIcon2
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiServices = [
    {
      id: 'ai-consulting',
      name: 'AI Strategy & Consulting',
      category: 'consulting',
      icon: Brain,
      price: '$2,500/month',
      originalPrice: '$4,999/month',
      description: 'Comprehensive AI strategy development and implementation planning for enterprise organizations.',
      features: [
        'AI roadmap development',
        'Technology assessment',
        'ROI analysis & forecasting',
        'Implementation planning',
        'Change management',
        'Risk assessment',
        'Vendor evaluation',
        'Training programs'
      ],
      benefits: [
        'Align AI with business goals',
        'Maximize ROI on AI investments',
        'Reduce implementation risks',
        'Strategic guidance & expertise'
      ],
      marketPrice: '$4,999-9,999/month',
      rating: 4.9,
      reviews: 1247,
      link: 'https://ziontechgroup.com/ai-consulting',
      demo: 'https://ziontechgroup.com/demo/ai-consulting'
    },
    {
      id: 'machine-learning-platform',
      name: 'Machine Learning Platform',
      category: 'ml',
      icon: Cpu,
      price: '$1,500/month',
      originalPrice: '$2,999/month',
      description: 'End-to-end machine learning platform with automated model development and deployment.',
      features: [
        'Automated model training',
        'Feature engineering',
        'Model deployment',
        'A/B testing',
        'Model monitoring',
        'Data preprocessing',
        'Hyperparameter tuning',
        'Model versioning'
      ],
      benefits: [
        'Deploy ML models 10x faster',
        'Reduce development costs by 60%',
        'Improve model accuracy',
        'Automated workflows'
      ],
      marketPrice: '$2,999-5,999/month',
      rating: 4.8,
      reviews: 892,
      link: 'https://ziontechgroup.com/machine-learning-platform',
      demo: 'https://ziontechgroup.com/demo/machine-learning-platform'
    },
    {
      id: 'natural-language-processing',
      name: 'Natural Language Processing',
      category: 'nlp',
      icon: MessageSquare,
      price: '$1,200/month',
      originalPrice: '$2,399/month',
      description: 'Advanced NLP solutions for text analysis, language understanding, and conversational AI.',
      features: [
        'Text analysis & classification',
        'Sentiment analysis',
        'Language translation',
        'Named entity recognition',
        'Text summarization',
        'Question answering',
        'Chatbot development',
        'Voice processing'
      ],
      benefits: [
        'Process unstructured data',
        'Improve customer interactions',
        'Automate text processing',
        'Multi-language support'
      ],
      marketPrice: '$2,399-4,799/month',
      rating: 4.9,
      reviews: 1563,
      link: 'https://ziontechgroup.com/natural-language-processing',
      demo: 'https://ziontechgroup.com/demo/natural-language-processing'
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision Solutions',
      category: 'vision',
      icon: Eye,
      price: '$1,800/month',
      originalPrice: '$3,599/month',
      description: 'Advanced computer vision solutions for image and video analysis, object detection, and recognition.',
      features: [
        'Object detection & recognition',
        'Image classification',
        'Facial recognition',
        'Video analysis',
        'OCR & text extraction',
        'Medical imaging',
        'Quality inspection',
        'Real-time processing'
      ],
      benefits: [
        'Automate visual inspections',
        'Improve accuracy by 95%',
        'Reduce manual labor',
        'Real-time analysis'
      ],
      marketPrice: '$3,599-7,199/month',
      rating: 4.8,
      reviews: 743,
      link: 'https://ziontechgroup.com/computer-vision',
      demo: 'https://ziontechgroup.com/demo/computer-vision'
    },
    {
      id: 'ai-automation',
      name: 'AI Process Automation',
      category: 'automation',
      icon: Zap,
      price: '$1,400/month',
      originalPrice: '$2,799/month',
      description: 'Intelligent process automation with AI-powered decision-making and workflow optimization.',
      features: [
        'Process discovery',
        'Workflow automation',
        'Decision trees',
        'Exception handling',
        'Process optimization',
        'Integration APIs',
        'Monitoring & analytics',
        'Custom solutions'
      ],
      benefits: [
        'Automate complex processes',
        'Reduce errors by 90%',
        'Improve efficiency by 300%',
        'Cost savings'
      ],
      marketPrice: '$2,799-5,599/month',
      rating: 4.7,
      reviews: 1024,
      link: 'https://ziontechgroup.com/ai-automation',
      demo: 'https://ziontechgroup.com/demo/ai-automation'
    },
    {
      id: 'ai-chatbots',
      name: 'AI Chatbot Platform',
      category: 'chatbots',
      icon: Bot,
      price: '$800/month',
      originalPrice: '$1,599/month',
      description: 'Advanced conversational AI platform with natural language understanding and multi-channel support.',
      features: [
        'Natural language understanding',
        'Multi-channel deployment',
        'Intent recognition',
        'Context management',
        'Integration APIs',
        'Analytics dashboard',
        'A/B testing',
        'Custom training'
      ],
      benefits: [
        'Reduce support costs by 60%',
        '24/7 customer service',
        'Improve response times',
        'Scalable solution'
      ],
      marketPrice: '$1,599-3,199/month',
      rating: 4.9,
      reviews: 1156,
      link: 'https://ziontechgroup.com/ai-chatbots',
      demo: 'https://ziontechgroup.com/demo/ai-chatbots'
    },
    {
      id: 'ai-analytics',
      name: 'AI-Powered Analytics',
      category: 'analytics',
      icon: BarChart3,
      price: '$1,299/month',
      originalPrice: '$2,599/month',
      description: 'Advanced analytics platform with AI-powered insights, predictions, and automated reporting.',
      features: [
        'Predictive analytics',
        'Anomaly detection',
        'Automated insights',
        'Custom dashboards',
        'Real-time processing',
        'Data visualization',
        'Statistical modeling',
        'Export capabilities'
      ],
      benefits: [
        'Uncover hidden patterns',
        'Make data-driven decisions',
        'Automated reporting',
        'Advanced predictions'
      ],
      marketPrice: '$2,599-5,199/month',
      rating: 4.8,
      reviews: 1087,
      link: 'https://ziontechgroup.com/ai-analytics',
      demo: 'https://ziontechgroup.com/demo/ai-analytics'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      category: 'content',
      icon: FileText,
      price: '$999/month',
      originalPrice: '$1,999/month',
      description: 'Advanced AI content creation platform for blogs, social media, marketing, and documentation.',
      features: [
        'Content generation',
        'SEO optimization',
        'Brand voice training',
        'Multi-language support',
        'Content templates',
        'Plagiarism detection',
        'Content scheduling',
        'Performance analytics'
      ],
      benefits: [
        'Create content 10x faster',
        'Improve SEO rankings',
        'Consistent brand voice',
        'Multi-language content'
      ],
      marketPrice: '$1,999-3,999/month',
      rating: 4.7,
      reviews: 923,
      link: 'https://ziontechgroup.com/ai-content-generation',
      demo: 'https://ziontechgroup.com/demo/ai-content-generation'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity',
      category: 'security',
      icon: Shield,
      price: '$1,599/month',
      originalPrice: '$3,199/month',
      description: 'AI-powered cybersecurity solutions with threat detection, prevention, and automated response.',
      features: [
        'Threat detection',
        'Behavioral analysis',
        'Automated response',
        'Risk assessment',
        'Incident investigation',
        'Compliance monitoring',
        'Security training',
        '24/7 monitoring'
      ],
      benefits: [
        'Detect threats in real-time',
        'Reduce false positives by 80%',
        'Automated incident response',
        'Enhanced security posture'
      ],
      marketPrice: '$3,199-6,399/month',
      rating: 4.9,
      reviews: 678,
      link: 'https://ziontechgroup.com/ai-cybersecurity',
      demo: 'https://ziontechgroup.com/demo/ai-cybersecurity'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      category: 'healthcare',
      icon: Stethoscope,
      price: '$2,999/month',
      originalPrice: '$5,999/month',
      description: 'Advanced AI solutions for healthcare including medical imaging, diagnosis, and patient care.',
      features: [
        'Medical image analysis',
        'Diagnostic assistance',
        'Drug discovery',
        'Patient monitoring',
        'Treatment optimization',
        'Clinical decision support',
        'Electronic health records',
        'Compliance management'
      ],
      benefits: [
        'Improve diagnostic accuracy',
        'Reduce medical errors',
        'Optimize treatments',
        'Enhance patient care'
      ],
      marketPrice: '$5,999-11,999/month',
      rating: 4.9,
      reviews: 456,
      link: 'https://ziontechgroup.com/ai-healthcare',
      demo: 'https://ziontechgroup.com/demo/ai-healthcare'
    },
    {
      id: 'ai-fintech',
      name: 'AI Fintech Solutions',
      category: 'fintech',
      icon: CreditCard,
      price: '$1,999/month',
      originalPrice: '$3,999/month',
      description: 'AI-powered financial technology solutions for fraud detection, risk assessment, and trading.',
      features: [
        'Fraud detection',
        'Risk assessment',
        'Algorithmic trading',
        'Credit scoring',
        'Regulatory compliance',
        'Transaction monitoring',
        'Market analysis',
        'Portfolio optimization'
      ],
      benefits: [
        'Reduce fraud by 95%',
        'Improve risk management',
        'Optimize trading strategies',
        'Ensure compliance'
      ],
      marketPrice: '$3,999-7,999/month',
      rating: 4.8,
      reviews: 567,
      link: 'https://ziontechgroup.com/ai-fintech',
      demo: 'https://ziontechgroup.com/demo/ai-fintech'
    },
    {
      id: 'ai-ecommerce',
      name: 'AI E-commerce Solutions',
      category: 'ecommerce',
      icon: ShoppingCart,
      price: '$1,299/month',
      originalPrice: '$2,599/month',
      description: 'AI-powered e-commerce solutions for personalization, recommendations, and optimization.',
      features: [
        'Product recommendations',
        'Price optimization',
        'Inventory management',
        'Customer segmentation',
        'Search optimization',
        'Visual search',
        'Chatbot integration',
        'Analytics dashboard'
      ],
      benefits: [
        'Increase sales by 200%',
        'Improve customer experience',
        'Optimize pricing',
        'Reduce cart abandonment'
      ],
      marketPrice: '$2,599-5,199/month',
      rating: 4.7,
      reviews: 789,
      link: 'https://ziontechgroup.com/ai-ecommerce',
      demo: 'https://ziontechgroup.com/demo/ai-ecommerce'
    },
    {
      id: 'ai-mobile-apps',
      name: 'AI Mobile App Development',
      category: 'mobile',
      icon: Smartphone,
      price: '$1,799/month',
      originalPrice: '$3,599/month',
      description: 'AI-powered mobile app development with intelligent features and personalization.',
      features: [
        'AI-powered features',
        'Personalization',
        'Voice recognition',
        'Image processing',
        'Predictive text',
        'Smart notifications',
        'Offline capabilities',
        'Cross-platform support'
      ],
      benefits: [
        'Enhanced user experience',
        'Intelligent features',
        'Personalized content',
        'Modern app development'
      ],
      marketPrice: '$3,599-7,199/month',
      rating: 4.8,
      reviews: 623,
      link: 'https://ziontechgroup.com/ai-mobile-apps',
      demo: 'https://ziontechgroup.com/demo/ai-mobile-apps'
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant',
      category: 'voice',
      icon: Mic,
      price: '$1,099/month',
      originalPrice: '$2,199/month',
      description: 'Custom AI voice assistant for business operations and customer interactions.',
      features: [
        'Voice recognition',
        'Natural language processing',
        'Multi-language support',
        'Custom commands',
        'Integration APIs',
        'Voice training',
        'Analytics tracking',
        'Mobile app'
      ],
      benefits: [
        'Hands-free operations',
        'Improved accessibility',
        'Faster task completion',
        'Modern user experience'
      ],
      marketPrice: '$2,199-4,399/month',
      rating: 4.6,
      reviews: 445,
      link: 'https://ziontechgroup.com/ai-voice-assistant',
      demo: 'https://ziontechgroup.com/demo/ai-voice-assistant'
    },
    {
      id: 'ai-robotics',
      name: 'AI Robotics Solutions',
      category: 'robotics',
      icon: Cpu,
      price: '$3,999/month',
      originalPrice: '$7,999/month',
      description: 'AI-powered robotics solutions for manufacturing, service, and autonomous operations.',
      features: [
        'Autonomous navigation',
        'Object manipulation',
        'Computer vision',
        'Machine learning',
        'Safety systems',
        'Human-robot collaboration',
        'Predictive maintenance',
        'Custom programming'
      ],
      benefits: [
        'Automate complex tasks',
        'Improve efficiency by 400%',
        'Reduce human error',
        '24/7 operations'
      ],
      marketPrice: '$7,999-15,999/month',
      rating: 4.9,
      reviews: 334,
      link: 'https://ziontechgroup.com/ai-robotics',
      demo: 'https://ziontechgroup.com/demo/ai-robotics'
    },
    {
      id: 'ai-iot',
      name: 'AI IoT Solutions',
      category: 'iot',
      icon: Wifi,
      price: '$1,499/month',
      originalPrice: '$2,999/month',
      description: 'AI-powered IoT solutions for smart devices, sensors, and connected systems.',
      features: [
        'Device management',
        'Data processing',
        'Predictive maintenance',
        'Anomaly detection',
        'Real-time monitoring',
        'Edge computing',
        'Integration APIs',
        'Analytics dashboard'
      ],
      benefits: [
        'Optimize device performance',
        'Predict maintenance needs',
        'Reduce downtime',
        'Real-time insights'
      ],
      marketPrice: '$2,999-5,999/month',
      rating: 4.7,
      reviews: 567,
      link: 'https://ziontechgroup.com/ai-iot',
      demo: 'https://ziontechgroup.com/demo/ai-iot'
    },
    {
      id: 'ai-blockchain',
      name: 'AI Blockchain Solutions',
      category: 'blockchain',
      icon: Link,
      price: '$2,299/month',
      originalPrice: '$4,599/month',
      description: 'AI-powered blockchain solutions for smart contracts, DeFi, and decentralized applications.',
      features: [
        'Smart contract optimization',
        'DeFi protocols',
        'Token economics',
        'Consensus mechanisms',
        'Security auditing',
        'Scalability solutions',
        'Integration APIs',
        'Analytics platform'
      ],
      benefits: [
        'Optimize blockchain performance',
        'Enhance security',
        'Reduce transaction costs',
        'Improve scalability'
      ],
      marketPrice: '$4,599-9,199/month',
      rating: 4.8,
      reviews: 456,
      link: 'https://ziontechgroup.com/ai-blockchain',
      demo: 'https://ziontechgroup.com/demo/ai-blockchain'
    },
    {
      id: 'ai-quantum',
      name: 'AI Quantum Computing',
      category: 'quantum',
      icon: Atom,
      price: '$4,999/month',
      originalPrice: '$9,999/month',
      description: 'AI-powered quantum computing solutions for optimization, cryptography, and research.',
      features: [
        'Quantum algorithms',
        'Optimization problems',
        'Cryptography',
        'Quantum machine learning',
        'Simulation capabilities',
        'Research tools',
        'Integration APIs',
        'Expert consultation'
      ],
      benefits: [
        'Solve complex problems',
        'Quantum advantage',
        'Advanced cryptography',
        'Research capabilities'
      ],
      marketPrice: '$9,999-19,999/month',
      rating: 4.9,
      reviews: 123,
      link: 'https://ziontechgroup.com/ai-quantum',
      demo: 'https://ziontechgroup.com/demo/ai-quantum'
    },
    {
      id: 'ai-research',
      name: 'AI Research & Development',
      category: 'research',
      icon: Microscope,
      price: '$2,999/month',
      originalPrice: '$5,999/month',
      description: 'Custom AI research and development for cutting-edge solutions and innovation.',
      features: [
        'Custom algorithm development',
        'Research collaboration',
        'Prototype development',
        'Testing & validation',
        'Documentation',
        'Intellectual property',
        'Expert consultation',
        'Ongoing support'
      ],
      benefits: [
        'Cutting-edge solutions',
        'Custom development',
        'Research expertise',
        'Innovation focus'
      ],
      marketPrice: '$5,999-11,999/month',
      rating: 4.9,
      reviews: 234,
      link: 'https://ziontechgroup.com/ai-research',
      demo: 'https://ziontechgroup.com/demo/ai-research'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid, count: aiServices.length },
    { id: 'consulting', name: 'Consulting', icon: Brain, count: aiServices.filter(s => s.category === 'consulting').length },
    { id: 'ml', name: 'Machine Learning', icon: Cpu, count: aiServices.filter(s => s.category === 'ml').length },
    { id: 'nlp', name: 'NLP', icon: MessageSquare, count: aiServices.filter(s => s.category === 'nlp').length },
    { id: 'vision', name: 'Computer Vision', icon: Eye, count: aiServices.filter(s => s.category === 'vision').length },
    { id: 'automation', name: 'Automation', icon: Zap, count: aiServices.filter(s => s.category === 'automation').length },
    { id: 'chatbots', name: 'Chatbots', icon: Bot, count: aiServices.filter(s => s.category === 'chatbots').length },
    { id: 'analytics', name: 'Analytics', icon: BarChart3, count: aiServices.filter(s => s.category === 'analytics').length },
    { id: 'content', name: 'Content', icon: FileText, count: aiServices.filter(s => s.category === 'content').length },
    { id: 'security', name: 'Security', icon: Shield, count: aiServices.filter(s => s.category === 'security').length },
    { id: 'healthcare', name: 'Healthcare', icon: Stethoscope, count: aiServices.filter(s => s.category === 'healthcare').length },
    { id: 'fintech', name: 'Fintech', icon: CreditCard, count: aiServices.filter(s => s.category === 'fintech').length },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart, count: aiServices.filter(s => s.category === 'ecommerce').length },
    { id: 'mobile', name: 'Mobile', icon: Smartphone, count: aiServices.filter(s => s.category === 'mobile').length },
    { id: 'voice', name: 'Voice', icon: Mic, count: aiServices.filter(s => s.category === 'voice').length },
    { id: 'robotics', name: 'Robotics', icon: Cpu, count: aiServices.filter(s => s.category === 'robotics').length },
    { id: 'iot', name: 'IoT', icon: Wifi, count: aiServices.filter(s => s.category === 'iot').length },
    { id: 'blockchain', name: 'Blockchain', icon: Link, count: aiServices.filter(s => s.category === 'blockchain').length },
    { id: 'quantum', name: 'Quantum', icon: Atom, count: aiServices.filter(s => s.category === 'quantum').length },
    { id: 'research', name: 'Research', icon: Microscope, count: aiServices.filter(s => s.category === 'research').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const totalSavings = aiServices.reduce((total, service) => {
    const original = parseInt(service.originalPrice.replace('$', '').replace(',', '').replace('/month', ''));
    const current = parseInt(service.price.replace('$', '').replace(',', '').replace('/month', ''));
    return total + (original - current);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including machine learning, NLP, computer vision, and automation. Starting at $800/month with up to 50% savings." />
        <meta name="keywords" content="ai services, machine learning, natural language processing, computer vision, ai automation, ai consulting, ai chatbots" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text-3d">
            AI Services & Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Cutting-edge AI services designed to transform your business with machine learning, 
            natural language processing, computer vision, and automation. Starting at $800/month with up to 50% savings.
=======
import React from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Consulting & Strategy',
      description: 'Comprehensive AI strategy development, implementation planning, and digital transformation consulting for enterprise organizations.',
      icon: '🧠',
      price: '$2,500/month',
      features: [
        'AI Strategy Development',
        'Technology Assessment',
        'Implementation Roadmap',
        'Change Management',
        'ROI Analysis',
        'Executive Training'
      ],
      benefits: [
        'Accelerate AI adoption by 300%',
        'Reduce implementation risks by 60%',
        'Achieve 400% ROI within 12 months',
        'Future-proof your technology stack'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Consulting',
      technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Cloud AI', 'Edge Computing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Machine Learning Solutions',
      description: 'Custom machine learning models for predictive analytics, pattern recognition, and intelligent decision-making systems.',
      icon: '🤖',
      price: '$1,500/month',
      features: [
        'Custom ML Model Development',
        'Data Preprocessing & Cleaning',
        'Model Training & Optimization',
        'Real-time Inference',
        'Model Monitoring & Maintenance',
        'A/B Testing Framework'
      ],
      benefits: [
        'Improve accuracy by 40-80%',
        'Reduce manual work by 70%',
        'Enable real-time predictions',
        'Scale with your business growth'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Machine Learning',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.',
      icon: '💬',
      price: '$1,200/month',
      features: [
        'Text Classification & Analysis',
        'Sentiment Analysis',
        'Language Translation',
        'Named Entity Recognition',
        'Text Summarization',
        'Chatbot Development'
      ],
      benefits: [
        'Process 10,000+ documents/hour',
        'Improve customer satisfaction by 50%',
        'Reduce response time by 80%',
        'Enable multilingual operations'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'NLP',
      technologies: ['OpenAI GPT', 'BERT', 'Transformers', 'spaCy', 'NLTK', 'Hugging Face'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Computer Vision Solutions',
      description: 'Image and video analysis solutions for object detection, facial recognition, quality control, and automated inspection.',
      icon: '👁️',
      price: '$1,800/month',
      features: [
        'Object Detection & Recognition',
        'Facial Recognition Systems',
        'Image Classification',
        'Video Analysis',
        'Quality Control Automation',
        'Real-time Processing'
      ],
      benefits: [
        'Reduce inspection time by 90%',
        'Improve accuracy to 99.5%',
        'Enable 24/7 monitoring',
        'Reduce human error by 95%'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Computer Vision',
      technologies: ['OpenCV', 'YOLO', 'ResNet', 'TensorFlow', 'PyTorch', 'CUDA'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Predictive Analytics Platform',
      description: 'Advanced predictive modeling for forecasting, risk assessment, demand planning, and business intelligence.',
      icon: '📊',
      price: '$1,600/month',
      features: [
        'Demand Forecasting',
        'Risk Assessment Models',
        'Customer Lifetime Value',
        'Churn Prediction',
        'Sales Forecasting',
        'Anomaly Detection'
      ],
      benefits: [
        'Improve forecast accuracy by 60%',
        'Reduce inventory costs by 25%',
        'Increase revenue by 30%',
        'Minimize business risks'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Analytics',
      technologies: ['Python', 'R', 'Apache Spark', 'Tableau', 'Power BI', 'Jupyter'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Automation Suite',
      description: 'Intelligent process automation with RPA, workflow optimization, and decision-making capabilities.',
      icon: '⚙️',
      price: '$1,400/month',
      features: [
        'Process Discovery & Mapping',
        'RPA Implementation',
        'Workflow Optimization',
        'Decision Automation',
        'Exception Handling',
        'Performance Monitoring'
      ],
      benefits: [
        'Automate 80% of repetitive tasks',
        'Reduce processing time by 70%',
        'Improve accuracy to 99.9%',
        'Free up staff for strategic work'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Automation',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Python', 'APIs', 'Workflow Engines'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Chatbot & Virtual Assistant',
      description: 'Intelligent conversational AI for customer service, sales support, and internal operations.',
      icon: '🤖',
      price: '$800/month',
      features: [
        'Multi-channel Deployment',
        'Intent Recognition',
        'Context Management',
        'Human Handoff',
        'Analytics & Reporting',
        'Custom Integrations'
      ],
      benefits: [
        'Handle 80% of customer queries',
        'Reduce response time to seconds',
        'Available 24/7/365',
        'Improve customer satisfaction'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'Conversational AI',
      technologies: ['Dialogflow', 'Microsoft Bot Framework', 'Rasa', 'OpenAI GPT', 'Webhooks', 'APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Data Pipeline & ETL',
      description: 'Intelligent data processing, cleaning, and transformation pipelines for enterprise data management.',
      icon: '🔄',
      price: '$1,100/month',
      features: [
        'Data Ingestion & Processing',
        'Data Quality Management',
        'Real-time Streaming',
        'Data Transformation',
        'Schema Evolution',
        'Data Lineage Tracking'
      ],
      benefits: [
        'Process 1M+ records/hour',
        'Improve data quality by 95%',
        'Reduce processing time by 80%',
        'Enable real-time analytics'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Data Engineering',
      technologies: ['Apache Kafka', 'Apache Airflow', 'Apache Spark', 'Python', 'SQL', 'Cloud Storage'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Security & Fraud Detection',
      description: 'Advanced security solutions with AI-powered threat detection, fraud prevention, and risk management.',
      icon: '🛡️',
      price: '$2,200/month',
      features: [
        'Threat Detection & Analysis',
        'Fraud Prevention',
        'Anomaly Detection',
        'Risk Scoring',
        'Real-time Monitoring',
        'Incident Response'
      ],
      benefits: [
        'Detect 99.9% of threats',
        'Reduce false positives by 80%',
        'Prevent fraud losses by 90%',
        'Enable proactive security'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Security',
      technologies: ['Machine Learning', 'Deep Learning', 'SIEM', 'Log Analysis', 'Behavioral Analytics', 'Threat Intelligence'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce, content, products, and services.',
      icon: '🎯',
      price: '$1,300/month',
      features: [
        'Collaborative Filtering',
        'Content-based Filtering',
        'Hybrid Approaches',
        'Real-time Recommendations',
        'A/B Testing',
        'Performance Analytics'
      ],
      benefits: [
        'Increase sales by 25%',
        'Improve user engagement by 40%',
        'Reduce bounce rate by 30%',
        'Personalize user experience'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Recommendation Systems',
      technologies: ['Python', 'Apache Spark', 'TensorFlow', 'Redis', 'PostgreSQL', 'Machine Learning'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Voice & Speech Solutions',
      description: 'Advanced speech recognition, text-to-speech, and voice analytics for customer service and accessibility.',
      icon: '🎤',
      price: '$1,000/month',
      features: [
        'Speech-to-Text',
        'Text-to-Speech',
        'Voice Analytics',
        'Speaker Identification',
        'Emotion Detection',
        'Multi-language Support'
      ],
      benefits: [
        'Improve accessibility by 100%',
        'Reduce call handling time by 50%',
        'Enable voice automation',
        'Enhance customer experience'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Speech AI',
      technologies: ['Google Speech API', 'Amazon Polly', 'Azure Cognitive Services', 'OpenAI Whisper', 'WebRTC', 'Voice SDKs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Edge Computing Solutions',
      description: 'Deploy AI models at the edge for real-time processing, reduced latency, and offline capabilities.',
      icon: '⚡',
      price: '$1,700/month',
      features: [
        'Edge Model Deployment',
        'Real-time Inference',
        'Offline Capabilities',
        'Model Optimization',
        'Edge Analytics',
        'Device Management'
      ],
      benefits: [
        'Reduce latency by 90%',
        'Enable offline operations',
        'Reduce bandwidth costs by 70%',
        'Improve data privacy'
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

  // const categories = [
  //   { name: 'All', count: aiServices.length },
  //   { name: 'Consulting', count: aiServices.filter(s => s.category === 'Consulting').length },
  //   { name: 'Machine Learning', count: aiServices.filter(s => s.category === 'Machine Learning').length },
  //   { name: 'NLP', count: aiServices.filter(s => s.category === 'NLP').length },
  //   { name: 'Computer Vision', count: aiServices.filter(s => s.category === 'Computer Vision').length },
  //   { name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length },
  //   { name: 'Automation', count: aiServices.filter(s => s.category === 'Automation').length },
  //   { name: 'Conversational AI', count: aiServices.filter(s => s.category === 'Conversational AI').length },
  //   { name: 'Data Engineering', count: aiServices.filter(s => s.category === 'Data Engineering').length },
  //   { name: 'Security', count: aiServices.filter(s => s.category === 'Security').length },
  //   { name: 'Recommendation Systems', count: aiServices.filter(s => s.category === 'Recommendation Systems').length },
  //   { name: 'Speech AI', count: aiServices.filter(s => s.category === 'Speech AI').length },
  //   { name: 'Edge AI', count: aiServices.filter(s => s.category === 'Edge AI').length }
  // ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive artificial intelligence solutions designed to transform your business operations and drive innovation.
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-c6b2
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
<<<<<<< HEAD
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card energy-pulse">
              <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
              <div className="text-gray-300">AI Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card energy-pulse">
              <div className="text-3xl font-bold text-green-400 mb-2">$800</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card energy-pulse">
              <div className="text-3xl font-bold text-purple-400 mb-2">50%</div>
              <div className="text-gray-300">Average Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card energy-pulse">
=======
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">12+</div>
              <div className="text-gray-300">AI Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$800</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-c6b2
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Contact Info */}
<<<<<<< HEAD
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card holographic-border">
=======
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-c6b2
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white cyber-glow'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-cyan-400'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 cyber-card hover:bg-white/10 transition-all duration-300 group">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">
                          {service.rating} ({service.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
=======
      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your AI Solution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-c6b2
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
<<<<<<< HEAD
                      <li className="text-xs text-cyan-400">
=======
                      <li className="text-sm text-gray-500">
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-c6b2
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

<<<<<<< HEAD
                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
=======
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-c6b2
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

<<<<<<< HEAD
                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                    </div>
                    <div className="text-xs text-green-400 bg-green-400/20 px-2 py-1 rounded">
                      Save {Math.round((1 - parseInt(service.price.replace('$', '').replace(',', '').replace('/month', '')) / parseInt(service.originalPrice.replace('$', '').replace(',', '').replace('/month', ''))) * 100)}%
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">
                    Market price: {service.marketPrice}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <a
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center"
                  >
                    Get Started
                  </a>
                  <a
                    href={service.demo}
                    className="bg-transparent border border-cyan-500 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-500/10 transition-all"
                  >
                    Demo
                  </a>
=======
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    {service.contactInfo}
                  </p>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-c6b2
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
<<<<<<< HEAD
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI services today and save up to ${totalSavings.toLocaleString()}/month compared to market prices.
=======
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI services today and transform your business operations.
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-c6b2
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;