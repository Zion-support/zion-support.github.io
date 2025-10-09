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
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
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
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card holographic-border">
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
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI services today and save up to ${totalSavings.toLocaleString()}/month compared to market prices.
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