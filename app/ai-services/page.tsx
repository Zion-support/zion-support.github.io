import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp, 
  Globe, 
  Brain, 
  Cpu, 
  Target, 
  BarChart, 
  MessageSquare, 
  Eye, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Code,
  Database,
  Cloud,
  Smartphone,
  FileText,
  Image,
  Video,
  Music,
  Settings,
  Lock,
  DollarSign,
  Award,
  Rocket,
  Heart,
  ShoppingCart,
  Calendar,
  Camera,
  Headphones,
  Printer,
  Wrench,
  Activity,
  Layers,
  Workflow,
  Mic,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Bookmark,
  Flag,
  Bell,
  Gift,
  CreditCard,
  PieChart,
  LineChart,
  Scissors,
  Palette,
  Brush,
  Wand2,
  Lightbulb,
  Puzzle,
  Gamepad2,
  Car,
  Home,
  Plane,
  Train,
  Ship,
  Bike,
  Coffee,
  Utensils,
  Shirt,
  Shoe,
  Watch,
  Laptop,
  Monitor,
  Tablet,
  Mouse,
  Keyboard,
  HardDrive,
  Wifi,
  Bluetooth,
  Battery,
  Plug,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Moon,
  CloudRain,
  Snowflake,
  Umbrella,
  TreePine,
  Flower,
  Leaf,
  Bug,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  PawPrint,
  Baby,
  Child,
  User,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  Users2,
  UserCog,
  Crown,
  Gem,
  Diamond,
  StarHalf,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  HeartHandshake,
  Handshake,
  Hand,
  Fingerprint,
  QrCode,
  Barcode,
  Tag,
  Tags,
  Hash,
  AtSign,
  Percent,
  Plus,
  Minus,
  X,
  Divide,
  Equal,
  Infinity,
  Pi,
  Sigma,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Omega,
  Check,
  XCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  QuestionMarkCircle,
  ExclamationTriangle,
  Ban,
  LockKeyhole,
  Unlock,
  Key,
  KeyRound,
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  ShieldQuestion,
  EyeOff,
  EyeCheck,
  SearchX,
  SearchCheck,
  FilterX,
  SortAsc,
  SortDesc,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsUp,
  ChevronsDown,
  ChevronsLeft,
  ChevronsRight,
  RotateCcw,
  RotateCw,
  RefreshCw,
  RefreshCcw,
  Repeat,
  Repeat1,
  Shuffle,
  SkipBack,
  SkipForward,
  Play,
  Pause,
  Stop,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon,
  SquareDot,
  CircleDot,
  TriangleDot,
  HexagonDot,
  OctagonDot,
  PentagonDot,
  SquareCheck,
  CircleCheck,
  TriangleCheck,
  HexagonCheck,
  OctagonCheck,
  PentagonCheck,
  SquareX,
  CircleX,
  TriangleX,
  HexagonX,
  OctagonX,
  PentagonX,
  SquarePlus,
  CirclePlus,
  TrianglePlus,
  HexagonPlus,
  OctagonPlus,
  PentagonPlus,
  SquareMinus,
  CircleMinus,
  TriangleMinus,
  HexagonMinus,
  OctagonMinus,
  PentagonMinus,
  SquareEqual,
  CircleEqual,
  TriangleEqual,
  HexagonEqual,
  OctagonEqual,
  PentagonEqual,
  SquareQuestion,
  CircleQuestion,
  TriangleQuestion,
  HexagonQuestion,
  OctagonQuestion,
  PentagonQuestion,
  SquareAlert,
  CircleAlert,
  TriangleAlert,
  HexagonAlert,
  OctagonAlert,
  PentagonAlert,
  SquareInfo,
  CircleInfo,
  TriangleInfo,
  HexagonInfo,
  OctagonInfo,
  PentagonInfo,
  SquareHelp,
  CircleHelp,
  TriangleHelp,
  HexagonHelp,
  OctagonHelp,
  PentagonHelp,
  SquareBan,
  CircleBan,
  TriangleBan,
  HexagonBan,
  OctagonBan,
  PentagonBan,
  SquareLock,
  CircleLock,
  TriangleLock,
  HexagonLock,
  OctagonLock,
  PentagonLock,
  SquareUnlock,
  CircleUnlock,
  TriangleUnlock,
  HexagonUnlock,
  OctagonUnlock,
  PentagonUnlock,
  SquareShield,
  CircleShield,
  TriangleShield,
  HexagonShield,
  OctagonShield,
  PentagonShield,
  SquareEye,
  CircleEye,
  TriangleEye,
  HexagonEye,
  OctagonEye,
  PentagonEye,
  SquareEyeOff,
  CircleEyeOff,
  TriangleEyeOff,
  HexagonEyeOff,
  OctagonEyeOff,
  PentagonEyeOff,
  SquareSearch,
  CircleSearch,
  TriangleSearch,
  HexagonSearch,
  OctagonSearch,
  PentagonSearch,
  SquareFilter,
  CircleFilter,
  TriangleFilter,
  HexagonFilter,
  OctagonFilter,
  PentagonFilter,
  SquareSort,
  CircleSort,
  TriangleSort,
  HexagonSort,
  OctagonSort,
  PentagonSort,
  SquareArrow,
  CircleArrow,
  TriangleArrow,
  HexagonArrow,
  OctagonArrow,
  PentagonArrow,
  SquareChevron,
  CircleChevron,
  TriangleChevron,
  HexagonChevron,
  OctagonChevron,
  PentagonChevron,
  SquareRotate,
  CircleRotate,
  TriangleRotate,
  HexagonRotate,
  OctagonRotate,
  PentagonRotate,
  SquareRefresh,
  CircleRefresh,
  TriangleRefresh,
  HexagonRefresh,
  OctagonRefresh,
  PentagonRefresh,
  SquareRepeat,
  CircleRepeat,
  TriangleRepeat,
  HexagonRepeat,
  OctagonRepeat,
  PentagonRepeat,
  SquareShuffle,
  CircleShuffle,
  TriangleShuffle,
  HexagonShuffle,
  OctagonShuffle,
  PentagonShuffle,
  SquareSkip,
  CircleSkip,
  TriangleSkip,
  HexagonSkip,
  OctagonSkip,
  PentagonSkip,
  SquarePlay,
  CirclePlay,
  TrianglePlay,
  HexagonPlay,
  OctagonPlay,
  PentagonPlay,
  SquarePause,
  CirclePause,
  TrianglePause,
  HexagonPause,
  OctagonPause,
  PentagonPause,
  SquareStop,
  CircleStop,
  TriangleStop,
  HexagonStop,
  OctagonStop,
  PentagonStop,
  SquareSquare,
  CircleSquare,
  TriangleSquare,
  HexagonSquare,
  OctagonSquare,
  PentagonSquare,
  SquareCircle,
  CircleCircle,
  TriangleCircle,
  HexagonCircle,
  OctagonCircle,
  PentagonCircle,
  SquareTriangle,
  CircleTriangle,
  TriangleTriangle,
  HexagonTriangle,
  OctagonTriangle,
  PentagonTriangle,
  SquareHexagon,
  CircleHexagon,
  TriangleHexagon,
  HexagonHexagon,
  OctagonHexagon,
  PentagonHexagon,
  SquareOctagon,
  CircleOctagon,
  TriangleOctagon,
  HexagonOctagon,
  OctagonOctagon,
  PentagonOctagon,
  SquarePentagon,
  CirclePentagon,
  TrianglePentagon,
  HexagonPentagon,
  OctagonPentagon,
  PentagonPentagon
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const aiServices = [
    // Core AI Services
    {
      id: 'ai-consulting',
      name: 'AI Consulting & Strategy',
      description: 'Comprehensive AI strategy development, implementation planning, and digital transformation consulting for enterprise organizations.',
      icon: Brain,
      price: 2500,
      period: 'month',
      features: [
        'AI Strategy Development',
        'Technology Assessment',
        'Implementation Roadmap',
        'Change Management',
        'ROI Analysis',
        'Executive Training',
        'Vendor Selection',
        'Compliance Planning'
      ],
      category: 'Consulting',
      popular: true,
      savings: '$50,000/year vs AI consultants',
      marketPrice: '$5,000-10,000/month',
      technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Cloud AI', 'Edge Computing'],
      benefits: 'Accelerate AI adoption by 300%',
      rating: 4.9,
      clients: '200+',
      demoUrl: 'https://ziontechgroup.com/ai-consulting',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'machine-learning',
      name: 'Machine Learning Solutions',
      description: 'Custom machine learning models for predictive analytics, pattern recognition, and intelligent decision-making systems.',
      icon: Cpu,
      price: 1500,
      period: 'month',
      features: [
        'Custom ML Model Development',
        'Data Preprocessing & Cleaning',
        'Model Training & Optimization',
        'Real-time Inference',
        'Model Monitoring & Maintenance',
        'A/B Testing Framework',
        'Feature Engineering',
        'Model Versioning'
      ],
      category: 'Core AI',
      popular: true,
      savings: '$30,000/year vs ML engineers',
      marketPrice: '$3,000-6,000/month',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
      benefits: 'Improve accuracy by 40-80%',
      rating: 4.8,
      clients: '500+',
      demoUrl: 'https://ziontechgroup.com/machine-learning',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'natural-language-processing',
      name: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.',
      icon: MessageSquare,
      price: 1200,
      period: 'month',
      features: [
        'Text Classification & Analysis',
        'Sentiment Analysis',
        'Language Translation',
        'Named Entity Recognition',
        'Text Summarization',
        'Chatbot Development',
        'Question Answering',
        'Document Processing'
      ],
      category: 'Core AI',
      popular: true,
      savings: '$20,000/year vs NLP specialists',
      marketPrice: '$2,500-5,000/month',
      technologies: ['OpenAI GPT', 'BERT', 'Transformers', 'spaCy', 'NLTK', 'Hugging Face'],
      benefits: 'Process 10,000+ documents/hour',
      rating: 4.7,
      clients: '400+',
      demoUrl: 'https://ziontechgroup.com/nlp',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision Solutions',
      description: 'Image and video analysis solutions for object detection, facial recognition, quality control, and automated inspection.',
      icon: Eye,
      price: 1800,
      period: 'month',
      features: [
        'Object Detection & Recognition',
        'Facial Recognition Systems',
        'Image Classification',
        'Video Analysis',
        'Quality Control Automation',
        'Real-time Processing',
        'Medical Imaging',
        'Augmented Reality'
      ],
      category: 'Core AI',
      popular: false,
      savings: '$25,000/year vs CV engineers',
      marketPrice: '$3,500-7,000/month',
      technologies: ['OpenCV', 'YOLO', 'ResNet', 'TensorFlow', 'PyTorch', 'CUDA'],
      benefits: 'Reduce inspection time by 90%',
      rating: 4.6,
      clients: '300+',
      demoUrl: 'https://ziontechgroup.com/computer-vision',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'predictive-analytics',
      name: 'Predictive Analytics Platform',
      description: 'Advanced predictive modeling for forecasting, risk assessment, demand planning, and business intelligence.',
      icon: BarChart,
      price: 1600,
      period: 'month',
      features: [
        'Demand Forecasting',
        'Risk Assessment Models',
        'Customer Lifetime Value',
        'Churn Prediction',
        'Sales Forecasting',
        'Anomaly Detection',
        'Time Series Analysis',
        'Scenario Planning'
      ],
      category: 'Analytics',
      popular: true,
      savings: '$35,000/year vs data scientists',
      marketPrice: '$3,000-6,000/month',
      technologies: ['Python', 'R', 'Apache Spark', 'Tableau', 'Power BI', 'Jupyter'],
      benefits: 'Improve forecast accuracy by 60%',
      rating: 4.8,
      clients: '350+',
      demoUrl: 'https://ziontechgroup.com/predictive-analytics',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-automation',
      name: 'AI Process Automation',
      description: 'Intelligent automation solutions that learn and adapt to optimize business processes.',
      icon: Workflow,
      price: 1400,
      period: 'month',
      features: [
        'Process Discovery',
        'Workflow Automation',
        'Decision Automation',
        'Exception Handling',
        'Process Optimization',
        'ROI Tracking',
        'Change Management',
        'Continuous Improvement'
      ],
      category: 'Automation',
      popular: true,
      savings: '$18,000/year vs process consultants',
      marketPrice: '$2,500-5,000/month',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Python', 'APIs', 'Workflow Engines'],
      benefits: 'Automate 80% of repetitive tasks',
      rating: 4.7,
      clients: '450+',
      demoUrl: 'https://ziontechgroup.com/ai-automation',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-chatbots',
      name: 'AI Chatbots & Virtual Assistants',
      description: 'Intelligent conversational AI that understands context and provides human-like interactions.',
      icon: Bot,
      price: 800,
      period: 'month',
      features: [
        'Natural Conversations',
        'Context Understanding',
        'Multi-language Support',
        'Integration APIs',
        'Learning Capabilities',
        'Human Handoff',
        'Analytics & Insights',
        'Custom Training'
      ],
      category: 'Conversational AI',
      popular: true,
      savings: '$15,000/year vs customer service staff',
      marketPrice: '$1,500-3,000/month',
      technologies: ['Dialogflow', 'Microsoft Bot Framework', 'Rasa', 'OpenAI GPT', 'Webhooks', 'APIs'],
      benefits: 'Handle 80% of customer queries',
      rating: 4.6,
      clients: '600+',
      demoUrl: 'https://ziontechgroup.com/ai-chatbots',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing, design, and multimedia generation.',
      icon: FileText,
      price: 900,
      period: 'month',
      features: [
        'Text Generation',
        'Image Creation',
        'Video Production',
        'Audio Generation',
        'Content Optimization',
        'Brand Voice Training',
        'Multi-language Support',
        'Quality Control'
      ],
      category: 'Content AI',
      popular: false,
      savings: '$12,000/year vs content creators',
      marketPrice: '$1,800-3,500/month',
      technologies: ['GPT-4', 'DALL-E', 'Midjourney', 'Custom Content AI', 'Brand AI'],
      benefits: 'Create 10x more content in 1/10th the time',
      rating: 4.5,
      clients: '400+',
      demoUrl: 'https://ziontechgroup.com/ai-content-generation',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-recommendation',
      name: 'AI Recommendation Systems',
      description: 'Personalized recommendation engines that increase engagement and drive conversions.',
      icon: Target,
      price: 1300,
      period: 'month',
      features: [
        'Personalized Recommendations',
        'Collaborative Filtering',
        'Content-based Filtering',
        'Real-time Updates',
        'A/B Testing',
        'Performance Tracking',
        'Multi-channel Support',
        'Custom Algorithms'
      ],
      category: 'Personalization',
      popular: false,
      savings: '$20,000/year vs recommendation specialists',
      marketPrice: '$2,500-5,000/month',
      technologies: ['Python', 'Apache Spark', 'TensorFlow', 'Redis', 'PostgreSQL', 'Machine Learning'],
      benefits: 'Increase sales by 25%',
      rating: 4.7,
      clients: '300+',
      demoUrl: 'https://ziontechgroup.com/ai-recommendation',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-fraud-detection',
      name: 'AI Fraud Detection',
      description: 'Advanced fraud detection systems that identify suspicious activities in real-time.',
      icon: Shield,
      price: 2100,
      period: 'month',
      features: [
        'Real-time Detection',
        'Pattern Recognition',
        'Risk Scoring',
        'False Positive Reduction',
        'Adaptive Learning',
        'Compliance Reporting',
        'Multi-channel Monitoring',
        'Alert Management'
      ],
      category: 'Security AI',
      popular: true,
      savings: '$25,000/year vs fraud analysts',
      marketPrice: '$4,000-8,000/month',
      technologies: ['Machine Learning', 'Deep Learning', 'SIEM', 'Log Analysis', 'Behavioral Analytics', 'Threat Intelligence'],
      benefits: 'Detect 99.9% of threats',
      rating: 4.8,
      clients: '250+',
      demoUrl: 'https://ziontechgroup.com/ai-fraud-detection',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Optimization',
      description: 'Optimize supply chain operations with AI-powered demand forecasting and inventory management.',
      icon: Layers,
      price: 2800,
      period: 'month',
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Route Optimization',
        'Supplier Analysis',
        'Risk Assessment',
        'Cost Optimization',
        'Real-time Monitoring',
        'Predictive Maintenance'
      ],
      category: 'Operations AI',
      popular: false,
      savings: '$35,000/year vs supply chain consultants',
      marketPrice: '$5,000-10,000/month',
      technologies: ['Supply Chain AI', 'Demand Forecasting', 'Optimization Algorithms', 'IoT Integration', 'Analytics'],
      benefits: 'Reduce supply chain costs by 30%',
      rating: 4.6,
      clients: '200+',
      demoUrl: 'https://ziontechgroup.com/ai-supply-chain',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      description: 'Medical AI solutions for diagnosis, treatment planning, and patient care optimization.',
      icon: Activity,
      price: 3500,
      period: 'month',
      features: [
        'Medical Image Analysis',
        'Diagnostic Assistance',
        'Treatment Planning',
        'Drug Discovery',
        'Patient Monitoring',
        'Clinical Decision Support',
        'Compliance Management',
        'Research Analytics'
      ],
      category: 'Healthcare AI',
      popular: false,
      savings: '$50,000/year vs medical specialists',
      marketPrice: '$8,000-15,000/month',
      technologies: ['Medical AI', 'Image Processing', 'NLP', 'Clinical Decision Support', 'HIPAA Compliance'],
      benefits: 'Improve diagnostic accuracy by 40%',
      rating: 4.9,
      clients: '150+',
      demoUrl: 'https://ziontechgroup.com/ai-healthcare',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-finance',
      name: 'AI Financial Services',
      description: 'AI-powered financial solutions for trading, risk management, and customer service.',
      icon: DollarSign,
      price: 3200,
      period: 'month',
      features: [
        'Algorithmic Trading',
        'Risk Assessment',
        'Credit Scoring',
        'Fraud Prevention',
        'Customer Insights',
        'Regulatory Compliance',
        'Portfolio Optimization',
        'Market Analysis'
      ],
      category: 'FinTech AI',
      popular: false,
      savings: '$40,000/year vs financial analysts',
      marketPrice: '$6,000-12,000/month',
      technologies: ['Financial AI', 'Algorithmic Trading', 'Risk Modeling', 'Compliance AI', 'Market Analysis'],
      benefits: 'Increase trading returns by 35%',
      rating: 4.7,
      clients: '180+',
      demoUrl: 'https://ziontechgroup.com/ai-finance',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-voice-speech',
      name: 'AI Voice & Speech Solutions',
      description: 'Advanced speech recognition, text-to-speech, and voice analytics for customer service and accessibility.',
      icon: Mic,
      price: 1000,
      period: 'month',
      features: [
        'Speech-to-Text',
        'Text-to-Speech',
        'Voice Analytics',
        'Speaker Identification',
        'Emotion Detection',
        'Multi-language Support',
        'Real-time Processing',
        'Voice Cloning'
      ],
      category: 'Speech AI',
      popular: false,
      savings: '$15,000/year vs voice specialists',
      marketPrice: '$2,000-4,000/month',
      technologies: ['Google Speech API', 'Amazon Polly', 'Azure Cognitive Services', 'OpenAI Whisper', 'WebRTC', 'Voice SDKs'],
      benefits: 'Improve accessibility by 100%',
      rating: 4.5,
      clients: '220+',
      demoUrl: 'https://ziontechgroup.com/ai-voice-speech',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-edge-computing',
      name: 'AI Edge Computing Solutions',
      description: 'Deploy AI models at the edge for real-time processing, reduced latency, and offline capabilities.',
      icon: Zap,
      price: 1700,
      period: 'month',
      features: [
        'Edge Model Deployment',
        'Real-time Inference',
        'Offline Capabilities',
        'Model Optimization',
        'Edge Analytics',
        'Device Management',
        'Bandwidth Optimization',
        'Security Hardening'
      ],
      category: 'Edge AI',
      popular: false,
      savings: '$25,000/year vs edge computing specialists',
      marketPrice: '$3,000-6,000/month',
      technologies: ['TensorFlow Lite', 'ONNX', 'OpenVINO', 'NVIDIA Jetson', 'Raspberry Pi', 'Edge Computing'],
      benefits: 'Reduce latency by 90%',
      rating: 4.6,
      clients: '160+',
      demoUrl: 'https://ziontechgroup.com/ai-edge-computing',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-data-pipeline',
      name: 'AI Data Pipeline & ETL',
      description: 'Intelligent data processing, cleaning, and transformation pipelines for enterprise data management.',
      icon: Database,
      price: 1100,
      period: 'month',
      features: [
        'Data Ingestion & Processing',
        'Data Quality Management',
        'Real-time Streaming',
        'Data Transformation',
        'Schema Evolution',
        'Data Lineage Tracking',
        'Error Handling',
        'Performance Optimization'
      ],
      category: 'Data Engineering',
      popular: false,
      savings: '$20,000/year vs data engineers',
      marketPrice: '$2,000-4,000/month',
      technologies: ['Apache Kafka', 'Apache Airflow', 'Apache Spark', 'Python', 'SQL', 'Cloud Storage'],
      benefits: 'Process 1M+ records/hour',
      rating: 4.7,
      clients: '280+',
      demoUrl: 'https://ziontechgroup.com/ai-data-pipeline',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-security',
      name: 'AI Security & Threat Detection',
      description: 'Advanced security solutions with AI-powered threat detection, fraud prevention, and risk management.',
      icon: Shield,
      price: 2200,
      period: 'month',
      features: [
        'Threat Detection & Analysis',
        'Fraud Prevention',
        'Anomaly Detection',
        'Risk Scoring',
        'Real-time Monitoring',
        'Incident Response',
        'Behavioral Analysis',
        'Compliance Reporting'
      ],
      category: 'Security AI',
      popular: true,
      savings: '$30,000/year vs security specialists',
      marketPrice: '$4,000-8,000/month',
      technologies: ['Machine Learning', 'Deep Learning', 'SIEM', 'Log Analysis', 'Behavioral Analytics', 'Threat Intelligence'],
      benefits: 'Prevent fraud losses by 90%',
      rating: 4.8,
      clients: '320+',
      demoUrl: 'https://ziontechgroup.com/ai-security',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-marketing',
      name: 'AI Marketing Automation',
      description: 'Intelligent marketing automation with AI-powered personalization, campaign optimization, and customer insights.',
      icon: Target,
      price: 1900,
      period: 'month',
      features: [
        'Customer Segmentation',
        'Personalized Campaigns',
        'Predictive Analytics',
        'A/B Testing',
        'Content Optimization',
        'Lead Scoring',
        'ROI Tracking',
        'Multi-channel Integration'
      ],
      category: 'Marketing AI',
      popular: true,
      savings: '$25,000/year vs marketing specialists',
      marketPrice: '$3,500-7,000/month',
      technologies: ['Marketing AI', 'Customer Analytics', 'Campaign Optimization', 'Personalization Engines', 'Marketing Automation'],
      benefits: 'Increase marketing ROI by 200%',
      rating: 4.6,
      clients: '380+',
      demoUrl: 'https://ziontechgroup.com/ai-marketing',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-hr',
      name: 'AI HR & Talent Management',
      description: 'Intelligent HR solutions for recruitment, employee engagement, performance management, and workforce analytics.',
      icon: Users,
      price: 1500,
      period: 'month',
      features: [
        'Resume Screening',
        'Candidate Matching',
        'Interview Scheduling',
        'Performance Analytics',
        'Employee Engagement',
        'Retention Prediction',
        'Skills Assessment',
        'Workforce Planning'
      ],
      category: 'HR AI',
      popular: false,
      savings: '$20,000/year vs HR specialists',
      marketPrice: '$2,500-5,000/month',
      technologies: ['HR AI', 'Talent Analytics', 'Recruitment AI', 'Performance Management', 'Employee Engagement'],
      benefits: 'Reduce hiring time by 60%',
      rating: 4.5,
      clients: '240+',
      demoUrl: 'https://ziontechgroup.com/ai-hr',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-legal',
      name: 'AI Legal & Compliance',
      description: 'Intelligent legal solutions for document analysis, contract review, compliance monitoring, and legal research.',
      icon: FileText,
      price: 2600,
      period: 'month',
      features: [
        'Document Analysis',
        'Contract Review',
        'Compliance Monitoring',
        'Legal Research',
        'Risk Assessment',
        'Due Diligence',
        'Case Law Analysis',
        'Regulatory Updates'
      ],
      category: 'Legal AI',
      popular: false,
      savings: '$40,000/year vs legal specialists',
      marketPrice: '$5,000-10,000/month',
      technologies: ['Legal AI', 'Document Processing', 'NLP', 'Compliance AI', 'Legal Research'],
      benefits: 'Reduce legal review time by 80%',
      rating: 4.7,
      clients: '120+',
      demoUrl: 'https://ziontechgroup.com/ai-legal',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { name: 'All', count: aiServices.length, icon: Layers },
    { name: 'Consulting', count: aiServices.filter(s => s.category === 'Consulting').length, icon: Brain },
    { name: 'Core AI', count: aiServices.filter(s => s.category === 'Core AI').length, icon: Cpu },
    { name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length, icon: BarChart },
    { name: 'Automation', count: aiServices.filter(s => s.category === 'Automation').length, icon: Workflow },
    { name: 'Conversational AI', count: aiServices.filter(s => s.category === 'Conversational AI').length, icon: MessageSquare },
    { name: 'Content AI', count: aiServices.filter(s => s.category === 'Content AI').length, icon: FileText },
    { name: 'Personalization', count: aiServices.filter(s => s.category === 'Personalization').length, icon: Target },
    { name: 'Security AI', count: aiServices.filter(s => s.category === 'Security AI').length, icon: Shield },
    { name: 'Operations AI', count: aiServices.filter(s => s.category === 'Operations AI').length, icon: Settings },
    { name: 'Healthcare AI', count: aiServices.filter(s => s.category === 'Healthcare AI').length, icon: Activity },
    { name: 'FinTech AI', count: aiServices.filter(s => s.category === 'FinTech AI').length, icon: DollarSign },
    { name: 'Speech AI', count: aiServices.filter(s => s.category === 'Speech AI').length, icon: Mic },
    { name: 'Edge AI', count: aiServices.filter(s => s.category === 'Edge AI').length, icon: Zap },
    { name: 'Data Engineering', count: aiServices.filter(s => s.category === 'Data Engineering').length, icon: Database },
    { name: 'Marketing AI', count: aiServices.filter(s => s.category === 'Marketing AI').length, icon: Target },
    { name: 'HR AI', count: aiServices.filter(s => s.category === 'HR AI').length, icon: Users },
    { name: 'Legal AI', count: aiServices.filter(s => s.category === 'Legal AI').length, icon: FileText }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const pricingPlans = [
    {
      name: 'AI Starter',
      price: 999,
      period: 'month',
      description: 'Essential AI services for small businesses',
      features: [
        'Basic ML Models',
        'Simple Chatbot',
        'Content Generation',
        'Basic Analytics',
        'Email Support',
        'Standard Templates'
      ],
      popular: false
    },
    {
      name: 'AI Professional',
      price: 2499,
      period: 'month',
      description: 'Advanced AI solutions for growing businesses',
      features: [
        'Custom ML Models',
        'Advanced NLP',
        'Computer Vision',
        'Process Automation',
        'AI Analytics',
        'Priority Support',
        'Custom Training',
        'API Access'
      ],
      popular: true
    },
    {
      name: 'AI Enterprise',
      price: 4999,
      period: 'month',
      description: 'Full-scale AI solutions for large organizations',
      features: [
        'All Professional Features',
        'Custom AI Development',
        'Dedicated AI Team',
        'Advanced Security',
        'Compliance Management',
        'SLA Guarantee',
        'Strategic Consulting',
        'White-label Solutions'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence. From machine learning to automation, we deliver AI solutions that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free AI Assessment
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Process Automation</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">300%</div>
              <div className="text-gray-300 text-sm">Average ROI</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">$50M+</div>
              <div className="text-gray-300 text-sm">Client Savings</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">AI Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            AI Service Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name === 'All' ? 'all' : category.name)}
                className={`cyber-card hologram-card p-4 text-center hover:scale-105 transition-all duration-300 ${
                  selectedCategory === category.name.toLowerCase() || 
                  (selectedCategory === 'all' && category.name === 'All')
                    ? 'ring-2 ring-cyan-400' 
                    : ''
                }`}
              >
                <category.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold mb-1 text-sm">{category.name}</h3>
                <p className="text-gray-400 text-xs">{category.count} services</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our AI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <span className="text-sm text-gray-400">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-3xl font-bold text-cyan-400">${service.price.toLocaleString()}</span>
                      <span className="text-gray-400 ml-1">/{service.period}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                      <div className="text-xs text-green-400">{service.savings}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-yellow-400 mb-1">{service.benefits}</div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {service.rating} • {service.clients} clients
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-gray-500">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
                
                <div className="space-y-2">
                  <a
                    href={service.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full cyber-button text-center block"
                  >
                    Try Free Demo
                  </a>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-colors text-center block"
                  >
                    Get Started
                  </a>
                </div>
                
                <div className="mt-4 text-xs text-gray-500 text-center">
                  {service.contactInfo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Choose Your AI Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 text-center relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">${plan.price.toLocaleString()}</span>
                    <span className="text-gray-400 ml-1">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-cyan-600 hover:bg-cyan-700 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our AI Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Cutting-Edge AI</h3>
              <p className="text-gray-300">Latest AI technologies and algorithms for maximum performance and accuracy.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Rapid Deployment</h3>
              <p className="text-gray-300">Quick implementation and deployment of AI solutions to start seeing results fast.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
              <p className="text-gray-300">Average 300% ROI with measurable business impact and cost savings.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance for all AI solutions and data.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Settings className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Custom Solutions</h3>
              <p className="text-gray-300">Tailored AI solutions designed specifically for your business needs.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
              <p className="text-gray-300">World-class AI engineers and data scientists with proven track records.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AI experts assess your business and recommend the best AI solutions for maximum impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free AI Assessment
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400 space-y-1">
            <p>✓ Free AI assessment • ✓ Custom recommendations • ✓ No obligation</p>
            <p>✓ 24/7 support • ✓ 99.9% uptime guarantee • ✓ Enterprise security</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;