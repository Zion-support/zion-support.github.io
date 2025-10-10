<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
'use client';
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  Target, 
  BarChart, 
  Shield, 
  Users, 
  Globe, 
  Lock, 
  Settings, 
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
<<<<<<< HEAD
  Stethoscope,
  Truck,
  Rocket,
  Car,
  Building,
  Scale,
  BookOpen,
  Trash,
  Droplets,
  Wind,
  Waves,
  Trees
=======
  TrendingUp,
  DollarSign,
  Cpu,
  Database,
  Eye,
  Mic,
  Video,
  Camera,
  Music,
  Palette,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Compass,
  Navigation as NavIcon,
  PieChart,
  Activity,
  Phone,
  MapPin,
  Rocket,
  Sparkles,
  Cloud,
  Code,
  MessageSquare,
  Mail,
  Calendar,
  Smartphone,
  Search,
  Bot,
  Palette as PaletteIcon,
  Camera as CameraIcon,
  Music as MusicIcon,
  Video as VideoIcon,
  Gamepad2,
  ShoppingCart as ShoppingCartIcon,
  CreditCard as CreditCardIcon,
  Building as BuildingIcon,
  Factory as FactoryIcon,
  Car as CarIcon,
  Plane as PlaneIcon,
  Ship as ShipIcon,
  Train as TrainIcon,
  Home as HomeIcon,
  Heart as HeartIcon,
  Stethoscope as StethoscopeIcon,
  GraduationCap as GraduationCapIcon,
  Briefcase as BriefcaseIcon,
  Wrench as WrenchIcon,
  Hammer as HammerIcon,
  Paintbrush as PaintbrushIcon,
  Scissors as ScissorsIcon,
  BookOpen as BookOpenIcon,
  Calculator as CalculatorIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Compass as CompassIcon,
  Navigation as NavigationIcon,
  PieChart as PieChartIcon,
  TrendingDown,
  Activity as ActivityIcon,
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Truck,
  Smartphone as SmartphoneIcon,
  ChefHat,
  Rocket as RocketIcon,
  Sprout,
  Scale
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

<<<<<<< HEAD
  const services = [
    // Core AI Services
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Globe, Smartphone, Database, BarChart3, Mail, Calendar, FileText, Image, Video, Music, Code, Palette, Search, Lock, Cloud, Wifi, Monitor, Headphones, Camera, Printer, HardDrive, Cpu, MemoryStick, Wrench, Settings, Bell, Heart, ThumbsUp, Share2, Download, Upload, Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Brain, Cpu as CpuIcon, Bot, Target, Layers, BarChart, PieChart, LineChart, Activity, Zap as ZapIcon, Sparkles, Atom, Cpu as CpuIcon2 } from 'lucide-react';

  const aiServices = [
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-01fd
    {
      id: 1,
<<<<<<< HEAD
      name: 'AI-Powered Analytics Platform',
      description: 'Advanced analytics solutions powered by machine learning and artificial intelligence with real-time insights and predictive modeling',
      icon: BarChart,
      features: [
        'Predictive Analytics',
        'Real-time Data Processing',
        'Custom Dashboard Creation',
        'Ad Performance Analysis',
        'ROI Optimization',
        'A/B Testing Automation',
        'Cross-Platform Integration',
        'Natural Language Queries',
        'Automated Reporting'
      ],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      category: 'Analytics',
=======
      name: 'AI Drug Discovery Pro',
      description: 'Revolutionary AI-powered drug discovery platform accelerating pharmaceutical research by 10x',
      icon: Brain,
      features: [
        'Molecular Structure Analysis',
        'Drug Interaction Prediction',
        'Clinical Trial Optimization',
        'Regulatory Compliance Automation',
        'Side Effect Prediction',
        'Drug Repurposing Analysis',
        'Biomarker Discovery'
      ],
      category: 'Healthcare',
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-453e
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
=======
      icon: <Target className="w-8 h-8" />,
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-6164
      category: 'Marketing',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
      popular: true,
      rating: 4.9,
      users: '500+',
      price: 'Starting at $50,000/month',
      color: 'from-purple-500 to-pink-600',
      pricing: 'Starting at $299/mo',
      link: 'https://ziontechgroup.com/ai-analytics-platform',
      capabilities: [
<<<<<<< HEAD
        '300% increase in conversion rates',
        'Automated campaign optimization',
        'Real-time performance tracking',
        'Predictive customer behavior'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-fb25
      ],
<<<<<<< HEAD
<<<<<<< HEAD
      link: 'https://ziontechgroup.com/ai-analytics',
      trial: '14-day free trial',
      setup: 'Quick setup in 5 minutes'
=======
      link: 'https://ziontechgroup.com/ai-analytics-platform'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
    },
    {
      id: 11,
      name: 'AI Quantum Computing Platform',
      description: 'Revolutionary quantum computing solutions for complex optimization problems, cryptography, and scientific simulations',
      icon: Brain,
      features: [
        'Quantum Algorithm Development',
        'Quantum Machine Learning',
        'Cryptographic Security',
        'Optimization Problems',
        'Quantum Simulation',
        'Hybrid Classical-Quantum Computing',
        'Quantum Error Correction',
        'Quantum Cloud Access'
      ],
      category: 'Quantum Computing',
      popular: true,
      rating: 4.9,
      users: '150+',
      color: 'from-indigo-500 to-purple-600',
      pricing: 'Starting at $2,999/mo',
      capabilities: [
        '1000x faster optimization',
        'Unbreakable encryption',
        'Quantum advantage in ML',
        'Scientific breakthrough potential'
      ],
      link: 'https://ziontechgroup.com/ai-quantum-computing',
      trial: '30-day free trial',
      setup: 'Expert setup in 2-4 weeks'
    },
    {
      id: 12,
      name: 'AI Neural Memory Assistant',
      description: 'Advanced AI system with persistent memory and contextual understanding for personalized assistance',
      icon: Brain,
      features: [
        'Persistent Memory Storage',
        'Contextual Understanding',
        'Personalized Responses',
        'Learning from Interactions',
        'Multi-modal Memory',
        'Emotional Intelligence',
        'Long-term Relationship Building',
        'Adaptive Personality'
      ],
      category: 'Advanced AI',
      popular: true,
      rating: 4.8,
      users: '1,200+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $399/mo',
      capabilities: [
        'Personalized AI experience',
        'Context-aware responses',
        'Emotional intelligence',
        'Long-term memory retention'
      ],
      link: 'https://ziontechgroup.com/ai-neural-memory-assistant',
      trial: '14-day free trial',
      setup: 'Quick setup in 10 minutes'
    },
    {
      id: 13,
      name: 'AI Holographic Workspace',
      description: 'Immersive 3D workspace with AI-powered collaboration tools and virtual reality integration',
      icon: Globe,
      features: [
        '3D Holographic Interface',
        'Virtual Collaboration',
        'AI-Powered Gestures',
        'Spatial Computing',
        'Mixed Reality Integration',
        'Real-time Translation',
        'Virtual Whiteboarding',
        'Immersive Presentations'
      ],
      category: 'Immersive Technology',
      popular: false,
      rating: 4.7,
      users: '400+',
      color: 'from-emerald-500 to-teal-600',
      pricing: 'Starting at $1,299/mo',
      capabilities: [
        'Immersive collaboration',
        '3D data visualization',
        'Virtual presence',
        'Next-gen workspace'
      ]
    },
    {
      id: 14,
      name: 'AI Climate Solutions Pro',
      description: 'AI-powered climate monitoring, carbon footprint tracking, and environmental impact optimization',
      icon: Globe,
      features: [
        'Carbon Footprint Analysis',
        'Climate Risk Assessment',
        'Sustainability Optimization',
        'Environmental Monitoring',
        'Green Energy Management',
        'Waste Reduction AI',
        'Eco-friendly Recommendations',
        'Climate Action Planning'
      ],
      category: 'Climate Tech',
      popular: true,
      rating: 4.9,
      users: '800+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $499/mo',
      capabilities: [
        '50% carbon footprint reduction',
        'Real-time environmental monitoring',
        'Sustainability optimization',
        'Climate risk mitigation'
=======
  const aiServiceCategories = [
    {
=======
      ],
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-01fd
      category: 'AI Automation & Workflow',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      services: [
        {
          name: 'AI Workflow Automation Platform',
          description: 'End-to-end business process automation with intelligent decision-making and self-optimization. Reduce manual work by 80% and increase efficiency by 300%.',
          features: ['Visual Workflow Builder', 'Smart Process Optimization', 'Error Detection & Correction', 'Cost Reduction', 'Scalable Architecture'],
          pricing: 'Starting at $5,000/month',
          trial: '30-day free trial',
          roi: '200-400% ROI',
          link: 'https://ziontechgroup.com/ai-workflow-automation',
          popular: true,
          capabilities: [
            'Intelligent process mapping',
            'Automated decision trees',
            'Real-time optimization',
            'Cross-system integration'
          ]
        },
        {
          name: 'AI Customer Support Suite',
          description: 'Advanced 24/7 customer support with natural language processing, sentiment analysis, and human handoff. Achieve 95% customer satisfaction.',
          features: ['Multi-language NLP', 'Sentiment Analysis', 'Escalation Management', 'Knowledge Base Integration', 'Performance Analytics'],
          pricing: 'Starting at $3,000/month',
          trial: '14-day free trial',
          roi: '150-300% ROI',
          link: 'https://ziontechgroup.com/ai-customer-support',
          popular: true,
          capabilities: [
            'Natural language understanding',
            'Context-aware responses',
            'Emotional intelligence',
            'Seamless human handoff'
          ]
        },
        {
          name: 'AI Sales Automation Engine',
          description: 'Intelligent sales process automation with lead scoring, automated follow-ups, and predictive analytics. Increase conversions by 250%.',
          features: ['AI Lead Scoring', 'Automated Outreach', 'Sales Forecasting', 'CRM Integration', 'Revenue Optimization'],
          pricing: 'Starting at $4,000/month',
          trial: '14-day free trial',
          roi: '250-500% ROI',
          link: 'https://ziontechgroup.com/ai-sales-automation',
          popular: true,
          capabilities: [
            'Predictive lead scoring',
            'Automated email sequences',
            'Sales opportunity identification',
            'Revenue forecasting'
          ]
        },
        {
          name: 'AI Document Processing System',
          description: 'Intelligent document analysis, extraction, and processing with OCR and natural language understanding. Process 10,000+ documents daily.',
          features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Workflow Integration', 'Compliance Tracking'],
          pricing: 'Starting at $2,500/month',
          trial: '7-day free trial',
          roi: '180-350% ROI',
          link: 'https://ziontechgroup.com/ai-document-processing',
          popular: false,
          capabilities: [
            'Advanced OCR recognition',
            'Intelligent data extraction',
            'Document classification',
            'Automated workflow triggers'
          ]
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
          description: 'Advanced analytics and insights with machine learning-powered predictions and real-time dashboards. Make data-driven decisions 10x faster.',
          features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Data Visualization', 'Automated Insights'],
          pricing: 'Starting at $6,000/month',
          trial: '14-day free trial',
          roi: '300-600% ROI',
          link: 'https://ziontechgroup.com/ai-data-analytics',
          popular: true,
          capabilities: [
            'Machine learning predictions',
            'Real-time data processing',
            'Automated insight generation',
            'Custom visualization creation'
          ]
        },
        {
          name: 'AI Business Intelligence Suite',
          description: 'Transform raw data into actionable business insights with AI-powered analysis and recommendations. Drive 400% better decision making.',
          features: ['KPI Tracking', 'Trend Analysis', 'Performance Metrics', 'Strategic Planning', 'ROI Measurement'],
          pricing: 'Starting at $7,000/month',
          trial: '14-day free trial',
          roi: '400-700% ROI',
          link: 'https://ziontechgroup.com/ai-business-intelligence',
          popular: true,
          capabilities: [
            'Intelligent KPI monitoring',
            'Predictive trend analysis',
            'Automated reporting',
            'Strategic recommendation engine'
          ]
        },
        {
          name: 'AI Predictive Analytics Engine',
          description: 'Forecast future trends, outcomes, and opportunities with advanced machine learning models. Achieve 95% prediction accuracy.',
          features: ['Demand Forecasting', 'Risk Assessment', 'Market Analysis', 'Scenario Planning', 'Anomaly Detection'],
          pricing: 'Starting at $8,000/month',
          trial: '14-day free trial',
          roi: '500-800% ROI',
          link: 'https://ziontechgroup.com/ai-predictive-analytics',
          popular: true,
          capabilities: [
            'Advanced ML algorithms',
            'Multi-variable forecasting',
            'Risk probability modeling',
            'Scenario simulation'
          ]
        },
        {
          name: 'AI Real-time Monitoring System',
          description: 'Continuous monitoring and alerting system with AI-powered anomaly detection and automated responses. Prevent 99% of issues.',
          features: ['Real-time Monitoring', 'Anomaly Detection', 'Automated Alerts', 'Performance Tracking', 'Predictive Maintenance'],
          pricing: 'Starting at $4,500/month',
          trial: '7-day free trial',
          roi: '250-450% ROI',
          link: 'https://ziontechgroup.com/ai-monitoring',
          popular: false,
          capabilities: [
            'Behavioral anomaly detection',
            'Predictive failure analysis',
            'Automated incident response',
            'Performance optimization'
          ]
        }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
      ]
    },
    {
      id: 15,
      name: 'AI Drug Discovery Pro',
      description: 'Advanced AI platform for pharmaceutical research, drug discovery, and molecular analysis',
      icon: Stethoscope,
      features: [
        'Molecular Analysis',
        'Drug Target Identification',
        'Compound Screening',
        'Clinical Trial Optimization',
        'Side Effect Prediction',
        'Drug Interaction Analysis',
        'Personalized Medicine',
        'Regulatory Compliance'
      ],
      category: 'Pharmaceutical AI',
      popular: false,
      rating: 4.9,
      users: '200+',
      color: 'from-red-500 to-pink-600',
      pricing: 'Starting at $4,999/mo',
      capabilities: [
        '10x faster drug discovery',
        '95% accuracy in predictions',
        'Reduced clinical trial costs',
        'Personalized treatment options'
      ]
    },
    {
      id: 16,
      name: 'AI Fashion Design Studio',
      description: 'AI-powered fashion design with trend analysis, virtual try-on, and sustainable fashion recommendations',
      icon: FileText,
<<<<<<< HEAD
      features: [
        'Trend Analysis',
        'Virtual Try-On',
        'Sustainable Fashion AI',
        'Color Palette Generation',
        'Pattern Recognition',
        'Size Optimization',
        'Fashion Forecasting',
        'Eco-friendly Materials'
      ],
      category: 'Fashion Tech',
      popular: true,
      rating: 4.6,
      users: '1,500+',
      color: 'from-pink-500 to-rose-600',
      pricing: 'Starting at $299/mo',
      capabilities: [
        'Trend prediction accuracy',
        'Virtual fitting technology',
        'Sustainable design optimization',
        'Personalized fashion recommendations'
=======
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: 'AI Content Generation Studio',
          description: 'Complete content creation suite with AI writing, editing, optimization, and multi-format support. Create 100x more content.',
          features: ['AI Writing Assistant', 'Content Optimization', 'SEO Analysis', 'Brand Voice Training', 'Multi-format Support'],
          pricing: 'Starting at $2,000/month',
          trial: '7-day free trial',
          roi: '100-300% ROI',
          link: 'https://ziontechgroup.com/ai-content-generation',
          popular: true,
          capabilities: [
            'Natural language generation',
            'SEO optimization',
            'Brand voice consistency',
            'Multi-format content creation'
          ]
        },
        {
          name: 'AI Email Marketing Platform',
          description: 'Intelligent email campaigns with personalization, A/B testing, and performance optimization. Increase open rates by 300%.',
          features: ['Smart Personalization', 'A/B Testing', 'Send Time Optimization', 'Performance Analytics', 'List Segmentation'],
          pricing: 'Starting at $3,500/month',
          trial: '7-day free trial',
          roi: '200-400% ROI',
          link: 'https://ziontechgroup.com/ai-email-marketing',
          popular: true,
          capabilities: [
            'Advanced personalization',
            'Optimal send time prediction',
            'Subject line optimization',
            'Audience behavior analysis'
          ]
        },
        {
          name: 'AI SEO Optimization Suite',
          description: 'Comprehensive SEO analysis, keyword research, and content optimization with AI recommendations. Rank 200% higher.',
          features: ['Keyword Research', 'Content Analysis', 'Technical SEO', 'Competitor Analysis', 'Rank Tracking'],
          pricing: 'Starting at $4,500/month',
          trial: '7-day free trial',
          roi: '250-500% ROI',
          link: 'https://ziontechgroup.com/ai-seo-optimizer',
          popular: true,
          capabilities: [
            'Intelligent keyword research',
            'Content optimization suggestions',
            'Technical SEO analysis',
            'Competitor gap analysis'
          ]
        },
        {
          name: 'AI Social Media Manager',
          description: 'Automated social media content creation, scheduling, and engagement optimization across platforms. Grow followers by 400%.',
          features: ['Content Generation', 'Post Scheduling', 'Engagement Analytics', 'Hashtag Optimization', 'Multi-platform Management'],
          pricing: 'Starting at $1,500/month',
          trial: '7-day free trial',
          roi: '150-300% ROI',
          link: 'https://ziontechgroup.com/ai-social-media-manager',
          popular: false,
          capabilities: [
            'Cross-platform content adaptation',
            'Optimal posting time prediction',
            'Engagement rate optimization',
            'Viral content identification'
          ]
        }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
      ]
    },
    {
      id: 17,
      name: 'AI Music Composition Suite',
      description: 'AI-powered music creation with composition, arrangement, and production capabilities',
      icon: FileText,
      features: [
        'AI Composition',
        'Genre Adaptation',
        'Lyric Generation',
        'Instrument Arrangement',
        'Mood-based Creation',
        'Collaborative Composition',
        'Mastering & Mixing',
        'Copyright Protection'
      ],
      category: 'Creative AI',
      popular: true,
      rating: 4.7,
      users: '2,200+',
      color: 'from-yellow-500 to-orange-600',
      pricing: 'Starting at $199/mo',
      capabilities: [
        'Professional-quality compositions',
        'Multi-genre versatility',
        'Collaborative AI creation',
        'Copyright-safe generation'
      ]
    },
    {
      id: 18,
      name: 'AI Energy Management System',
      description: 'Smart energy optimization with AI-powered grid management and renewable energy integration',
      icon: Zap,
      features: [
        'Smart Grid Management',
        'Renewable Energy Optimization',
        'Demand Response',
        'Energy Storage AI',
        'Carbon Footprint Tracking',
        'Predictive Maintenance',
        'Cost Optimization',
        'Grid Stability'
      ],
      category: 'Energy Tech',
      popular: false,
      rating: 4.8,
      users: '600+',
      color: 'from-amber-500 to-yellow-600',
      pricing: 'Starting at $799/mo',
      capabilities: [
        '30% energy cost reduction',
        'Grid stability optimization',
        'Renewable energy integration',
        'Predictive energy management'
      ]
    },
    {
      id: 19,
      name: 'AI Autonomous Systems Platform',
      description: 'AI-powered autonomous vehicle and drone management with real-time decision making',
      icon: Settings,
      features: [
        'Autonomous Vehicle AI',
        'Drone Fleet Management',
        'Real-time Decision Making',
        'Path Optimization',
        'Collision Avoidance',
        'Weather Adaptation',
        'Fleet Coordination',
        'Safety Monitoring'
      ],
      category: 'Autonomous Systems',
      popular: true,
      rating: 4.9,
      users: '300+',
      color: 'from-slate-500 to-gray-600',
      pricing: 'Starting at $1,999/mo',
      capabilities: [
        '99.9% safety record',
        'Real-time autonomous decisions',
        'Fleet optimization',
        'Weather-adaptive navigation'
      ]
    },
    {
      id: 20,
      name: 'AI Blockchain Solutions',
      description: 'AI-powered blockchain technology with smart contracts, DeFi optimization, and crypto analytics',
      icon: Shield,
      features: [
        'Smart Contract AI',
        'DeFi Optimization',
        'Crypto Analytics',
        'Blockchain Security',
        'Token Economics',
        'Yield Farming AI',
        'Risk Assessment',
        'Regulatory Compliance'
      ],
      category: 'Blockchain AI',
      popular: true,
      rating: 4.8,
      users: '1,800+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $599/mo',
      capabilities: [
        'Automated DeFi strategies',
        'Smart contract optimization',
        'Crypto market analysis',
        'Blockchain security enhancement'
      ]
    },
    {
      id: 21,
      name: 'AI Space Technology Pro',
      description: 'Revolutionary space exploration and satellite management with AI-powered mission planning and orbital mechanics',
      icon: Rocket,
      features: [
        'Satellite Operations Management',
        'Space Mission Planning',
        'Astronomical Data Analysis',
        'Orbital Mechanics Optimization',
        'Space Weather Prediction',
        'Satellite Constellation Management',
        'Deep Space Navigation',
        'Space Debris Tracking'
      ],
      category: 'Space Technology',
      popular: true,
      rating: 4.9,
      users: '150+',
      color: 'from-indigo-500 to-blue-600',
      pricing: 'Starting at $5,500/mo',
      capabilities: [
        'Advanced space mission planning',
        'Real-time satellite monitoring',
        'Space weather prediction accuracy',
        'Orbital optimization algorithms'
      ]
    },
    {
      id: 22,
      name: 'AI Financial Crime Detection Pro',
      description: 'Advanced financial security with real-time fraud detection, money laundering prevention, and regulatory compliance',
      icon: Shield,
      features: [
        'Real-time Fraud Detection',
        'Money Laundering Prevention',
        'Transaction Pattern Analysis',
        'Behavioral Anomaly Detection',
        'Regulatory Compliance Monitoring',
        'Risk Scoring Algorithms',
        'Cross-border Transaction Analysis',
        'Cryptocurrency Crime Detection'
      ],
      category: 'Financial Security',
      popular: true,
      rating: 4.8,
      users: '1,200+',
      color: 'from-red-500 to-orange-600',
      pricing: 'Starting at $2,800/mo',
      capabilities: [
        '99.7% fraud detection accuracy',
        'Real-time transaction monitoring',
        'Automated compliance reporting',
        'Advanced pattern recognition'
      ]
    },
    {
      id: 23,
      name: 'AI Supply Chain Optimization Pro',
      description: 'Intelligent supply chain management with demand forecasting, logistics optimization, and risk mitigation',
      icon: Truck,
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Logistics Route Planning',
        'Supplier Risk Assessment',
        'Cost Optimization',
        'Quality Control Automation',
        'Sustainability Tracking',
        'Crisis Management'
      ],
      category: 'Supply Chain AI',
      popular: true,
      rating: 4.7,
      users: '1,800+',
      color: 'from-amber-500 to-orange-600',
      pricing: 'Starting at $3,200/mo',
      capabilities: [
        '30% cost reduction',
        '25% inventory optimization',
        'Real-time supply chain visibility',
        'Predictive risk management'
      ]
    },
    {
      id: 24,
      name: 'AI Energy Grid Management Pro',
      description: 'Smart energy grid optimization with renewable energy integration, demand response, and carbon footprint tracking',
      icon: Zap,
      features: [
        'Grid Optimization',
        'Renewable Energy Integration',
        'Demand Response Management',
        'Energy Storage Optimization',
        'Carbon Footprint Tracking',
        'Predictive Maintenance',
        'Load Balancing',
        'Smart Meter Analytics'
      ],
      category: 'Energy AI',
      popular: false,
      rating: 4.8,
      users: '400+',
      color: 'from-yellow-500 to-amber-600',
      pricing: 'Starting at $4,200/mo',
      capabilities: [
        '40% energy efficiency improvement',
        'Real-time grid optimization',
        'Renewable energy integration',
        'Carbon footprint reduction'
      ]
    },
    {
      id: 25,
      name: 'AI Agricultural Intelligence Pro',
      description: 'Precision agriculture with AI-powered crop monitoring, yield prediction, and sustainable farming practices',
      icon: Sprout,
      features: [
        'Precision Farming',
        'Crop Health Monitoring',
        'Yield Prediction',
        'Soil Analysis',
        'Pest and Disease Detection',
        'Weather Integration',
        'Irrigation Optimization',
        'Sustainable Farming Practices'
      ],
      category: 'Agricultural AI',
      popular: true,
      rating: 4.6,
      users: '2,100+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $2,500/mo',
      capabilities: [
        '20% yield improvement',
        'Precision farming optimization',
        'Real-time crop monitoring',
        'Sustainable agriculture practices'
      ]
    },
    {
      id: 26,
      name: 'AI Legal Research Pro',
      description: 'Advanced legal research and case analysis with AI-powered document review and precedent finding',
      icon: Scale,
      features: [
        'Legal Research Automation',
        'Case Law Analysis',
        'Document Review',
        'Precedent Finding',
        'Contract Analysis',
        'Compliance Checking',
        'Legal Writing Assistance',
        'Regulatory Updates'
      ],
      category: 'Legal AI',
      popular: true,
      rating: 4.8,
      users: '800+',
      color: 'from-slate-500 to-gray-600',
      pricing: 'Starting at $3,500/mo',
      capabilities: [
        '90% faster legal research',
        'Automated document review',
        'Precedent identification',
        'Compliance monitoring'
      ]
    },
    {
      id: 27,
      name: 'AI Real Estate Intelligence Pro',
      description: 'AI-powered real estate analysis with market prediction, property valuation, and investment optimization',
      icon: Home,
      features: [
        'Property Valuation',
        'Market Analysis',
        'Investment Recommendations',
        'Risk Assessment',
        'Trend Prediction',
        'Portfolio Management',
        'Neighborhood Analysis',
        'Rental Yield Optimization'
      ],
      category: 'Real Estate AI',
      popular: true,
      rating: 4.7,
      users: '1,500+',
      color: 'from-blue-500 to-cyan-600',
      pricing: 'Starting at $1,800/mo',
      capabilities: [
        '95% valuation accuracy',
        'Market trend prediction',
        'Investment optimization',
        'Risk assessment algorithms'
      ]
    },
    {
      id: 28,
      name: 'AI Mental Health Assistant Pro',
      description: 'AI-powered mental health support with mood tracking, wellness recommendations, and crisis intervention',
      icon: Heart,
      features: [
        'Mood Tracking',
        'Wellness Recommendations',
        'Stress Analysis',
        'Meditation Guidance',
        'Progress Monitoring',
        'Crisis Support',
        'Therapy Session Analysis',
        'Medication Adherence'
      ],
      category: 'Healthcare AI',
      popular: true,
      rating: 4.9,
      users: '3,600+',
      color: 'from-pink-500 to-rose-600',
      pricing: 'Starting at $199/mo',
      capabilities: [
        'Personalized mental health support',
        'Early intervention detection',
        'Wellness tracking',
        'Crisis prevention'
      ]
    },
    {
      id: 29,
      name: 'AI Sports Analytics Pro',
      description: 'Advanced sports analytics with performance prediction, injury prevention, and tactical analysis',
      icon: Target,
<<<<<<< HEAD
      features: [
        'Performance Analysis',
        'Injury Prediction',
        'Tactical Analysis',
        'Player Development',
        'Game Strategy',
        'Recovery Optimization',
        'Biomechanical Analysis',
        'Team Chemistry Analysis'
      ],
      category: 'Sports AI',
      popular: true,
      rating: 4.8,
      users: '1,400+',
      color: 'from-orange-500 to-red-600',
      pricing: 'Starting at $2,200/mo',
      capabilities: [
        'Injury prevention accuracy',
        'Performance optimization',
        'Tactical insights',
        'Player development tracking'
=======
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'AI Healthcare Solutions',
          description: 'Advanced AI-powered healthcare solutions including medical imaging, diagnosis support, and patient care. Improve outcomes by 60%.',
          features: ['Medical Imaging Analysis', 'Diagnosis Support', 'Patient Monitoring', 'Drug Discovery', 'Clinical Decision Support'],
          pricing: 'Starting at $15,000/month',
          trial: '30-day free trial',
          roi: '400-800% ROI',
          link: 'https://ziontechgroup.com/ai-healthcare',
          popular: true,
          capabilities: [
            'Medical image analysis',
            'Diagnostic assistance',
            'Patient risk assessment',
            'Treatment recommendation'
          ]
        },
        {
          name: 'AI Fintech Platform',
          description: 'Comprehensive financial technology solutions with fraud detection, risk assessment, and algorithmic trading. Reduce fraud by 95%.',
          features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring', 'Regulatory Compliance'],
          pricing: 'Starting at $12,000/month',
          trial: '14-day free trial',
          roi: '300-600% ROI',
          link: 'https://ziontechgroup.com/ai-fintech',
          popular: true,
          capabilities: [
            'Real-time fraud detection',
            'Risk scoring algorithms',
            'Automated trading strategies',
            'Regulatory compliance monitoring'
          ]
        },
        {
          name: 'AI E-commerce Optimization',
          description: 'E-commerce platform optimization with personalization, inventory management, and customer insights. Increase sales by 200%.',
          features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Insights', 'Conversion Optimization'],
          pricing: 'Starting at $5,000/month',
          trial: '14-day free trial',
          roi: '200-500% ROI',
          link: 'https://ziontechgroup.com/ai-ecommerce-solutions',
          popular: true,
          capabilities: [
            'Personalized recommendations',
            'Dynamic pricing optimization',
            'Inventory demand forecasting',
            'Customer behavior analysis'
          ]
        },
        {
          name: 'AI Manufacturing Intelligence',
          description: 'Smart manufacturing solutions with predictive maintenance, quality control, and process optimization. Reduce downtime by 70%.',
          features: ['Predictive Maintenance', 'Quality Control', 'Process Optimization', 'Supply Chain Management', 'Energy Efficiency'],
          pricing: 'Starting at $10,000/month',
          trial: '14-day free trial',
          roi: '350-650% ROI',
          link: 'https://ziontechgroup.com/ai-manufacturing',
          popular: false,
          capabilities: [
            'Predictive maintenance scheduling',
            'Quality defect detection',
            'Process optimization',
            'Supply chain optimization'
          ]
        }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
      ]
    },
    {
<<<<<<< HEAD
      id: 30,
      name: 'AI Language Learning Pro',
      description: 'AI-powered language learning with personalized curriculum, pronunciation analysis, and cultural context',
      icon: Globe,
      features: [
        'Personalized Curriculum',
        'Pronunciation Analysis',
        'Conversation Practice',
        'Progress Tracking',
        'Cultural Context',
        'Adaptive Learning',
        'Speech Recognition',
        'Grammar Correction'
      ],
      category: 'Education AI',
      popular: true,
      rating: 4.8,
      users: '6,500+',
      color: 'from-teal-500 to-cyan-600',
      pricing: 'Starting at $129/mo',
      capabilities: [
        'Personalized learning paths',
        'Pronunciation improvement',
        'Cultural immersion',
        'Adaptive difficulty'
      ]
    },
    {
      id: 31,
      name: 'AI Personal Finance Pro',
      description: 'AI-powered personal finance management with investment advice, budgeting, and financial planning',
      icon: DollarSign,
      features: [
        'Budget Planning',
        'Investment Advice',
        'Expense Tracking',
        'Goal Setting',
        'Tax Optimization',
        'Retirement Planning',
        'Credit Score Analysis',
        'Financial Education'
      ],
      category: 'Personal Finance AI',
      popular: true,
      rating: 4.8,
      users: '5,200+',
      color: 'from-emerald-500 to-green-600',
      pricing: 'Starting at $149/mo',
      capabilities: [
        'Personalized financial advice',
        'Automated budgeting',
        'Investment optimization',
        'Goal achievement tracking'
      ]
    },
    {
      id: 32,
      name: 'AI Home Automation Pro',
      description: 'Intelligent home automation with AI-powered energy management, security, and predictive maintenance',
      icon: Home,
      features: [
        'Energy Management',
        'Security Monitoring',
        'Climate Control',
        'Appliance Control',
        'Predictive Maintenance',
        'Voice Integration',
        'Learning Preferences',
        'Emergency Response'
      ],
      category: 'Smart Home AI',
      popular: true,
      rating: 4.7,
      users: '3,800+',
      color: 'from-purple-500 to-indigo-600',
      pricing: 'Starting at $299/mo',
      capabilities: [
        'Energy efficiency optimization',
        'Predictive maintenance',
        'Intelligent automation',
        'Security enhancement'
      ]
    },
    {
      id: 33,
      name: 'AI Pet Care Assistant Pro',
      description: 'AI-powered pet care management with health monitoring, behavior analysis, and veterinary integration',
      icon: Heart,
      features: [
        'Health Monitoring',
        'Behavior Analysis',
        'Feeding Schedules',
        'Vet Reminders',
        'Activity Tracking',
        'Medical Records',
        'Nutrition Planning',
        'Emergency Alerts'
      ],
      category: 'Pet Care AI',
      popular: true,
      rating: 4.8,
      users: '4,500+',
      color: 'from-pink-500 to-purple-600',
      pricing: 'Starting at $89/mo',
      capabilities: [
        'Health monitoring accuracy',
        'Behavioral insights',
        'Preventive care',
        'Veterinary integration'
      ]
    },
    {
      id: 34,
      name: 'AI Job Matching Pro',
      description: 'AI-powered job matching and career development with skill assessment and interview preparation',
      icon: Briefcase,
      features: [
        'Job Matching',
        'Skill Assessment',
        'Career Planning',
        'Resume Optimization',
        'Interview Prep',
        'Salary Analysis',
        'Network Building',
        'Learning Recommendations'
      ],
      category: 'Career AI',
      popular: true,
      rating: 4.6,
      users: '4,200+',
      color: 'from-blue-500 to-purple-600',
      pricing: 'Starting at $179/mo',
      capabilities: [
        'Job matching accuracy',
        'Career path optimization',
        'Skill gap analysis',
        'Interview success rate'
      ]
    },
    {
      id: 35,
      name: 'AI Personal Trainer Pro',
      description: 'AI-powered personal training with workout optimization, form analysis, and nutrition guidance',
      icon: Users,
      features: [
        'Workout Planning',
        'Form Analysis',
        'Progress Tracking',
        'Nutrition Guidance',
        'Injury Prevention',
        'Goal Setting',
        'Recovery Optimization',
        'Motivation Coaching'
      ],
      category: 'Fitness AI',
      popular: true,
      rating: 4.7,
      users: '5,800+',
      color: 'from-green-500 to-teal-600',
      pricing: 'Starting at $99/mo',
      capabilities: [
        'Personalized workout plans',
        'Form correction accuracy',
        'Progress optimization',
        'Injury prevention'
=======
        '90% faster drug discovery process',
        '60% reduction in clinical trial costs',
        'Real-time molecular analysis',
        'Predictive drug efficacy modeling'
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-453e
      ]
=======
      price: 'Starting at $299/mo'
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
    },
    {
      id: 2,
<<<<<<< HEAD
      name: 'AI Workflow Automation Suite',
      description: 'Comprehensive business process automation with intelligent decision-making and self-optimizing workflows',
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
      ]
=======
      category: 'AI Advanced Technologies',
      icon: Cpu,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      services: [
        {
          name: 'AI Computer Vision Platform',
          description: 'Advanced computer vision solutions for image recognition, object detection, and visual analysis. Achieve 99% accuracy.',
          features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Visual Search', 'Quality Inspection'],
          pricing: 'Starting at $8,000/month',
          trial: '14-day free trial',
          roi: '300-600% ROI',
          link: 'https://ziontechgroup.com/ai-computer-vision',
          popular: true,
          capabilities: [
            'Advanced image processing',
            'Real-time object detection',
            'Facial recognition technology',
            'Visual search capabilities'
          ]
        },
        {
          name: 'AI Natural Language Processing',
          description: 'Advanced NLP solutions for text analysis, language understanding, and conversational AI. Process 1M+ documents daily.',
          features: ['Text Analysis', 'Language Understanding', 'Sentiment Analysis', 'Translation', 'Conversational AI'],
          pricing: 'Starting at $6,500/month',
          trial: '14-day free trial',
          roi: '250-500% ROI',
          link: 'https://ziontechgroup.com/ai-nlp',
          popular: true,
          capabilities: [
            'Natural language understanding',
            'Sentiment analysis',
            'Multi-language translation',
            'Conversational AI development'
          ]
        },
        {
          name: 'AI Machine Learning Platform',
          description: 'Complete ML platform with model training, deployment, and management capabilities. Deploy models 10x faster.',
          features: ['Model Training', 'Model Deployment', 'Model Management', 'AutoML', 'MLOps'],
          pricing: 'Starting at $9,000/month',
          trial: '14-day free trial',
          roi: '400-700% ROI',
          link: 'https://ziontechgroup.com/ai-ml-platform',
          popular: true,
          capabilities: [
            'Automated model training',
            'One-click deployment',
            'Model performance monitoring',
            'MLOps pipeline automation'
          ]
        },
        {
          name: 'AI Quantum Computing Solutions',
          description: 'Next-generation quantum computing solutions for complex optimization and simulation problems. Solve impossible problems.',
          features: ['Quantum Optimization', 'Quantum Simulation', 'Quantum Machine Learning', 'Quantum Security', 'Hybrid Computing'],
          pricing: 'Starting at $20,000/month',
          trial: '30-day free trial',
          roi: '500-1000% ROI',
          link: 'https://ziontechgroup.com/ai-quantum-computing',
          popular: false,
          capabilities: [
            'Quantum algorithm development',
            'Quantum simulation',
            'Hybrid quantum-classical computing',
            'Quantum security protocols'
          ]
        }
<<<<<<< HEAD
      ],
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
=======
      ]
    },
    {
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-6164
      id: 5,
      name: 'AI Document Processing',
      description: 'Intelligent document processing and data extraction with OCR and NLP',
      price: '$799/month',
      icon: FileText,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      features: [
<<<<<<< HEAD
        'OCR Processing',
        'Data Extraction',
        'Document Classification',
        'Automated Workflows'
=======
        'OCR Text Recognition',
        'Document Classification',
        'Data Extraction',
        'Form Processing',
        'Contract Analysis',
        'Compliance Checking',
        'Multi-Format Support',
        'Batch Processing'
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-6164
      ],
      category: 'AI Document Processing',
      popular: false,
      rating: 4.6,
      users: '1,800+',
      color: 'from-green-500 to-emerald-600'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-fb25
    },
    {
      id: 2,
      name: 'AI Workflow Automation',
      description: 'Intelligent automation solutions that streamline business processes and reduce manual work',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
      icon: Zap,
      features: [
<<<<<<< HEAD
        'Visual Process Designer',
        'Smart Workflow Engine',
        'Error Detection & Recovery',
        'Performance Optimization',
        'Integration Hub',
        'Custom Triggers',
        'Analytics Dashboard',
        'Compliance Monitoring'
=======
      name: 'AI Climate Solutions Pro',
      description: 'Advanced climate modeling and environmental impact analysis using cutting-edge AI',
      icon: Globe,
      features: [
        'Climate Change Modeling',
        'Carbon Footprint Analysis',
        'Sustainability Planning',
        'Environmental Risk Assessment',
        'Renewable Energy Optimization',
        'Weather Pattern Prediction',
        'Ecosystem Monitoring'
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-453e
=======
        'Process Automation',
<<<<<<< HEAD
        'Smart Workflows',
        'Error Detection',
        'Performance Optimization',
        'Custom Integrations',
        'API Management',
        'Real-time Monitoring'
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
      ],
      category: 'Environment',
=======
        'Smart Decision Making',
        'Error Detection & Correction',
        'Cost Reduction',
        'Scalable Architecture',
        'Integration Management',
        'Performance Monitoring'
      ],
      category: 'Automation',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
      popular: true,
<<<<<<< HEAD
      rating: 4.9,
<<<<<<< HEAD
<<<<<<< HEAD
      users: '3,200+',
      color: 'from-blue-500 to-cyan-600',
<<<<<<< HEAD
      pricing: 'Starting at $199/mo',
      link: 'https://ziontechgroup.com/ai-workflow-automation',
      capabilities: [
        '80% reduction in manual tasks',
        '99.9% workflow reliability',
        'Real-time process monitoring',
        'Intelligent error handling'
=======
      rating: 4.8,
      users: '300+',
      price: 'Starting at $25,000/month',
      color: 'from-green-500 to-emerald-600',
      capabilities: [
        '95% accuracy in climate predictions',
        '40% reduction in carbon emissions',
        'Real-time environmental monitoring',
        'Automated sustainability reporting'
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-453e
      ]
=======
      capabilities: [
        '80% reduction in manual tasks',
        '99.9% automation accuracy',
        'Real-time process monitoring',
        'Custom workflow creation'
      ],
      price: 'Starting at $199/mo'
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
=======
      users: '3,200+',
      color: 'from-blue-500 to-cyan-600',
      capabilities: [
        '80% reduction in manual tasks',
        '24/7 automated operations',
        'Intelligent error recovery',
        'Scalable process management'
      ]
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
    },
    {
      id: 3,
<<<<<<< HEAD
      name: 'AI Cybersecurity Platform',
      description: 'Next-generation security solutions with AI-powered threat detection, prevention, and response capabilities',
=======
      users: '1,500+',
      color: 'from-yellow-500 to-orange-600',
      capabilities: [
        '200-400% ROI improvement',
        '80% reduction in manual tasks',
        'Real-time process optimization',
        'Automated error handling'
      ]
    },
    {
      id: 3,
      name: 'AI Customer Support',
      description: 'Advanced customer support solutions with natural language processing and intelligent routing',
      icon: Users,
      features: [
        'Natural Language Processing',
        'Sentiment Analysis',
        'Automated Responses',
        'Human Handoff',
        'Knowledge Base Integration',
        'Multi-language Support',
        'Performance Analytics'
      ],
      category: 'Support',
      popular: true,
      rating: 4.7,
      users: '3,200+',
      color: 'from-blue-500 to-cyan-600',
      capabilities: [
        '150-300% ROI improvement',
        '24/7 customer support',
        '90% faster response times',
        'Improved customer satisfaction'
      ]
    },
    {
      id: 4,
      name: 'AI Document Processing',
      description: 'Intelligent document analysis, extraction, and processing using advanced AI algorithms',
      icon: FileText,
      features: [
        'Document Analysis',
        'Data Extraction',
        'OCR Processing',
        'Classification & Sorting',
        'Version Control',
        'Search & Discovery',
        'Compliance Monitoring'
      ],
      category: 'Documentation',
      popular: false,
      rating: 4.6,
      users: '950+',
      color: 'from-green-500 to-emerald-600',
      capabilities: [
        '90% faster document processing',
        '99% accuracy in data extraction',
        'Automated compliance checking',
        'Reduced manual errors'
      ]
    },
    {
      id: 5,
      name: 'AI Security Solutions',
<<<<<<< HEAD
      description: 'Advanced cybersecurity solutions powered by AI for threat detection and prevention',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
=======
      description: 'Advanced security solutions powered by AI for threat detection and prevention',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
      icon: Shield,
      features: [
<<<<<<< HEAD
        'Advanced Threat Detection',
        'Behavioral Anomaly Analysis',
        'Automated Incident Response',
        'Security Analytics',
        'Vulnerability Assessment',
        'Compliance Monitoring',
        'Zero Trust Architecture',
        'Threat Intelligence'
=======
        'Threat Detection',
        'Anomaly Detection',
        'Automated Response',
<<<<<<< HEAD
<<<<<<< HEAD
        'Security Analytics',
        'Real-time Monitoring',
        'Incident Response',
        'Compliance Management'
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
      ],
      category: 'Security',
      popular: true,
      rating: 4.7,
      users: '1,500+',
      color: 'from-red-500 to-orange-600',
<<<<<<< HEAD
      pricing: 'Starting at $399/mo',
      link: 'https://ziontechgroup.com/ai-cybersecurity',
=======
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
=======
        'Risk Assessment',
        'Compliance Monitoring',
        'Incident Management',
        'Security Analytics'
      ],
      category: 'Security',
      popular: true,
      rating: 4.8,
      users: '1,800+',
      color: 'from-red-500 to-pink-600',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
      capabilities: [
        '99.9% threat detection accuracy',
        'Real-time security monitoring',
        'Automated incident response',
<<<<<<< HEAD
        'Compliance automation'
<<<<<<< HEAD
=======
      name: 'AI Space Technology Pro',
      description: 'Space exploration and satellite data analysis powered by advanced AI algorithms',
      icon: Rocket,
      features: [
        'Satellite Data Analysis',
        'Space Mission Planning',
        'Orbital Mechanics Calculation',
        'Space Weather Prediction',
        'Asteroid Detection',
        'Space Debris Tracking',
        'Planetary Surface Analysis'
      ],
      category: 'Space',
      popular: false,
      rating: 4.7,
      users: '150+',
      price: 'Starting at $75,000/month',
      color: 'from-blue-500 to-cyan-600',
      capabilities: [
        '99.9% accuracy in orbital predictions',
        'Real-time space weather monitoring',
        'Automated mission planning',
        'Advanced satellite constellation management'
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-453e
      ]
=======
      ],
      price: 'Starting at $399/mo'
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
    },
    {
      id: 4,
<<<<<<< HEAD
      name: 'AI Document Intelligence Suite',
      description: 'Intelligent document processing with advanced OCR, NLP, and automated data extraction capabilities',
      icon: FileText,
      features: [
        'Advanced OCR Processing',
        'Intelligent Data Extraction',
        'Document Classification',
        'Automated Workflows',
        'Multi-language Support',
<<<<<<< HEAD
        'Quality Assurance',
        'Integration APIs',
        'Compliance Tracking'
=======
      name: 'AI Financial Crime Detection Pro',
      description: 'Advanced fraud detection and financial crime prevention system with real-time monitoring',
      icon: Shield,
      features: [
        'Real-time Fraud Detection',
        'Transaction Pattern Analysis',
        'Risk Assessment Scoring',
        'Compliance Reporting',
        'Money Laundering Detection',
        'Identity Verification',
        'Behavioral Analytics'
      ],
      category: 'Finance',
      popular: true,
      rating: 4.9,
      users: '1,200+',
      price: 'Starting at $30,000/month',
      color: 'from-red-500 to-orange-600',
      capabilities: [
        '99.5% fraud detection accuracy',
        'Real-time transaction monitoring',
        'Automated compliance reporting',
        'Predictive risk modeling'
      ]
    },
    {
      id: 5,
      name: 'AI Supply Chain Optimization Pro',
      description: 'Intelligent supply chain management with predictive analytics and optimization',
      icon: Target,
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Supplier Risk Assessment',
        'Route Optimization',
        'Quality Control Automation',
        'Cost Reduction Analysis',
        'Sustainability Tracking'
      ],
      category: 'Logistics',
      popular: true,
      rating: 4.8,
      users: '800+',
      price: 'Starting at $35,000/month',
      color: 'from-indigo-500 to-purple-600',
      capabilities: [
        '30% reduction in supply chain costs',
        '95% demand forecasting accuracy',
        'Real-time supply chain monitoring',
        'Automated optimization recommendations'
=======
        'Reduced security breaches'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
      ]
    },
    {
      id: 6,
<<<<<<< HEAD
<<<<<<< HEAD
      name: 'AI Energy Grid Management Pro',
      description: 'Smart energy grid management with AI-powered optimization and monitoring',
      icon: Zap,
=======
      name: 'AI Image & Video Analysis',
      description: 'Advanced computer vision platform for image and video content analysis',
      price: '$1,199/month',
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-6164
      features: [
        'Grid Load Balancing',
        'Energy Demand Prediction',
        'Renewable Energy Integration',
        'Fault Detection & Diagnosis',
        'Power Quality Monitoring',
        'Energy Trading Optimization',
        'Grid Stability Analysis'
      ],
      category: 'Energy',
      popular: false,
      rating: 4.7,
      users: '200+',
      price: 'Starting at $60,000/month',
      color: 'from-yellow-500 to-orange-600',
      capabilities: [
        '25% improvement in grid efficiency',
        'Real-time energy optimization',
        'Predictive maintenance alerts',
        'Automated load balancing'
      ]
    },
    {
      id: 7,
      name: 'AI Agricultural Intelligence Pro',
      description: 'Precision agriculture with AI-powered crop monitoring and yield optimization',
      icon: Sprout,
      features: [
        'Crop Health Monitoring',
        'Yield Prediction',
        'Soil Analysis',
        'Pest Detection',
        'Irrigation Optimization',
        'Weather Integration',
        'Harvest Planning'
      ],
      category: 'Agriculture',
      popular: true,
      rating: 4.8,
      users: '400+',
      price: 'Starting at $20,000/month',
      color: 'from-green-500 to-teal-600',
      capabilities: [
        '35% increase in crop yields',
        'Real-time crop monitoring',
        'Predictive pest management',
        'Automated irrigation control'
      ]
    },
    {
      id: 8,
      name: 'AI Legal Research Pro',
      description: 'Advanced legal research and case analysis powered by natural language processing',
      icon: FileText,
      features: [
        'Case Law Analysis',
        'Legal Document Review',
        'Contract Analysis',
        'Precedent Research',
        'Legal Writing Assistance',
        'Compliance Checking',
        'Risk Assessment'
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-453e
      ],
      category: 'Legal',
      popular: false,
=======
        'Batch Processing',
        'API Integration'
      ],
      category: 'Document Processing',
      popular: true,
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
      rating: 4.6,
<<<<<<< HEAD
      users: '1,800+',
      color: 'from-green-500 to-emerald-600',
<<<<<<< HEAD
      pricing: 'Starting at $149/mo',
      link: 'https://ziontechgroup.com/ai-document-processing',
      capabilities: [
        '95% accuracy in data extraction',
        '50% faster processing times',
        'Multi-format support',
        'Automated validation'
      ]
    },
    {
      id: 5,
      name: 'AI Customer Experience Platform',
      description: 'Comprehensive customer experience management with AI-powered personalization and engagement optimization',
      icon: Users,
      features: [
        'Customer Journey Mapping',
        'Personalization Engine',
        'Sentiment Analysis',
        'Predictive Customer Behavior',
        'Omnichannel Support',
        'Real-time Recommendations',
        'Customer Segmentation',
        'Engagement Analytics'
      ],
      category: 'Customer Experience',
      popular: true,
      rating: 4.8,
      users: '2,100+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $249/mo',
      link: 'https://ziontechgroup.com/ai-customer-experience',
      capabilities: [
        '40% increase in customer satisfaction',
        '60% improvement in engagement',
        'Real-time personalization',
        'Predictive customer insights'
      ]
    },
    {
      id: 6,
      name: 'AI Content Generation Studio',
      description: 'Advanced content creation platform with AI-powered writing, editing, and optimization capabilities',
      icon: FileText,
      features: [
        'Multi-format Content Creation',
        'SEO Optimization',
        'Brand Voice Training',
        'Content Templates',
        'Plagiarism Detection',
        'Performance Analytics',
        'Multi-language Support',
        'Collaboration Tools'
      ],
      category: 'Content Creation',
      popular: true,
      rating: 4.9,
      users: '3,500+',
      color: 'from-indigo-500 to-purple-600',
      pricing: 'Starting at $179/mo',
      link: 'https://ziontechgroup.com/ai-content-generation',
=======
      capabilities: [
        '99.5% extraction accuracy',
        'Process 10,000+ documents/hour',
        'Multi-format support',
        'Automated data validation'
      ],
      price: 'Starting at $149/mo'
    },
    {
      id: 5,
      name: 'AI Customer Support',
      description: 'Intelligent customer support with natural language processing and automation',
      icon: Users,
      features: [
        '24/7 AI Chatbots',
        'Natural Language Processing',
        'Sentiment Analysis',
        'Ticket Routing',
        'Knowledge Base Integration',
        'Multi-language Support',
        'Human Handoff'
      ],
      category: 'Customer Service',
      popular: true,
      rating: 4.8,
      users: '4,500+',
      color: 'from-indigo-500 to-purple-600',
      capabilities: [
        '90% query resolution rate',
        '24/7 availability',
        'Multi-language support',
        'Seamless human handoff'
      ],
      price: 'Starting at $99/mo'
    },
    {
      id: 6,
      name: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing and editing',
      icon: FileText,
      features: [
        'Content Writing',
        'SEO Optimization',
        'Brand Voice Matching',
        'Multi-language Support',
        'Content Templates',
        'Plagiarism Detection',
        'Performance Analytics'
      ],
      category: 'Content',
      popular: true,
      rating: 4.7,
      users: '3,800+',
      color: 'from-teal-500 to-cyan-600',
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
      capabilities: [
        '10x faster content creation',
        'SEO-optimized content',
        'Brand consistency',
<<<<<<< HEAD
        'Multi-platform publishing'
      ]
    },
    {
      id: 7,
      name: 'AI Predictive Maintenance',
      description: 'Intelligent maintenance solutions with predictive analytics and automated scheduling for industrial equipment',
      icon: Settings,
      features: [
        'Predictive Analytics',
        'Equipment Monitoring',
        'Automated Scheduling',
        'Failure Prediction',
        'Maintenance Optimization',
        'Cost Analysis',
        'Integration APIs',
        'Reporting Dashboard'
      ],
      category: 'Industrial AI',
      popular: false,
      rating: 4.7,
      users: '900+',
      color: 'from-orange-500 to-red-600',
      pricing: 'Starting at $499/mo',
      link: 'https://ziontechgroup.com/ai-predictive-maintenance',
      capabilities: [
        '30% reduction in downtime',
        '25% cost savings',
        'Predictive maintenance',
        'Real-time monitoring'
      ]
    },
    {
      id: 8,
      name: 'AI Financial Intelligence',
      description: 'Advanced financial analysis and forecasting with AI-powered risk assessment and investment optimization',
      icon: BarChart,
      features: [
        'Financial Forecasting',
        'Risk Assessment',
        'Investment Analysis',
        'Fraud Detection',
        'Portfolio Optimization',
        'Market Analysis',
        'Compliance Monitoring',
        'Real-time Alerts'
      ],
      category: 'Financial AI',
      popular: true,
      rating: 4.8,
      users: '1,200+',
      color: 'from-emerald-500 to-green-600',
      pricing: 'Starting at $349/mo',
      link: 'https://ziontechgroup.com/ai-financial-intelligence',
      capabilities: [
        '95% accuracy in predictions',
        'Real-time risk monitoring',
        'Automated compliance',
        'Investment optimization'
      ]
    },
    {
      id: 9,
      name: 'AI Healthcare Diagnostics',
      description: 'Advanced medical AI with diagnostic assistance, treatment recommendations, and patient monitoring capabilities',
      icon: Stethoscope,
      features: [
        'Medical Image Analysis',
        'Diagnostic Assistance',
        'Treatment Recommendations',
        'Patient Monitoring',
        'Drug Interaction Analysis',
        'Clinical Decision Support',
        'Electronic Health Records',
        'Compliance Tracking'
      ],
      category: 'Healthcare AI',
      popular: false,
      rating: 4.9,
      users: '600+',
      color: 'from-teal-500 to-cyan-600',
      pricing: 'Starting at $599/mo',
      link: 'https://ziontechgroup.com/ai-healthcare',
      capabilities: [
        '98% diagnostic accuracy',
        'Faster diagnosis times',
        'Reduced medical errors',
        'Improved patient outcomes'
      ]
    },
    {
      id: 10,
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation',
      icon: Truck,
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Logistics Automation',
        'Supplier Management',
        'Quality Control',
        'Cost Optimization',
        'Risk Assessment',
        'Performance Analytics'
      ],
      category: 'Supply Chain',
      popular: false,
      rating: 4.6,
      users: '800+',
      color: 'from-amber-500 to-orange-600',
      pricing: 'Starting at $399/mo',
      link: 'https://ziontechgroup.com/ai-supply-chain',
      capabilities: [
        '20% cost reduction',
        '30% inventory optimization',
        'Real-time tracking',
        'Predictive analytics'
      ]
    },
    {
      id: 11,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
      name: 'AI Quantum Financial Oracle',
      description: 'Revolutionary quantum-powered financial modeling and risk assessment for high-frequency trading and portfolio optimization',
      icon: Brain,
      features: [
        'Quantum Risk Modeling',
        'High-Frequency Trading',
        'Portfolio Optimization',
        'Market Prediction',
        'Risk Assessment',
        'Algorithmic Trading',
        'Real-time Analysis',
        'Quantum Computing Integration'
      ],
      category: 'Quantum Finance',
      popular: true,
      rating: 4.9,
      users: '150+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $2,999/mo',
      capabilities: [
        '300% faster calculations',
        '99.9% prediction accuracy',
        'Quantum advantage',
        'Real-time risk modeling'
<<<<<<< HEAD
=======
      name: 'AI Quantum Computing Platform',
      description: 'Revolutionary quantum computing solutions with AI optimization for complex problem solving',
      icon: Brain,
      features: [
        'Quantum Algorithm Optimization',
        'Quantum Machine Learning',
        'Quantum Simulation',
        'Quantum Error Correction',
        'Quantum Cryptography',
        'Quantum Optimization',
        'Quantum Neural Networks',
        'Quantum Data Processing'
      ],
      category: 'Quantum Computing',
      popular: true,
      rating: 4.9,
      users: '150+',
      color: 'from-purple-500 to-indigo-600',
      pricing: 'Starting at $15,000/mo',
      capabilities: [
        '1000x faster computation',
        'Quantum advantage in optimization',
        'Breakthrough problem solving',
        'Next-gen cryptography'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-32a7
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
      ]
    },
    {
      id: 12,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
      icon: <Brain className="w-8 h-8" />,
      category: 'R&D',
      popular: false,
      rating: 4.9,
      users: '200+',
      color: 'from-purple-500 to-indigo-600',
      capabilities: [
        'Custom model development',
        'Advanced research tools',
        'Collaborative workspace',
        'Publication support'
      ]
    }
  ];
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
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-6164
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
      name: 'AI Climate Solutions Pro',
      description: 'Advanced climate modeling and environmental impact analysis with carbon footprint optimization and sustainability planning',
      icon: Globe,
      features: [
        'Climate Modeling',
        'Carbon Footprint Analysis',
        'Sustainability Planning',
        'Environmental Impact Assessment',
        'Renewable Energy Optimization',
        'Emission Tracking',
        'Green Technology Integration',
        'Compliance Monitoring'
      ],
      category: 'Climate Tech',
      popular: true,
      rating: 4.8,
      users: '400+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $1,299/mo',
      capabilities: [
        '50% carbon footprint reduction',
        'Real-time environmental monitoring',
        'Sustainability optimization',
        'Climate risk assessment'
<<<<<<< HEAD
=======
      name: 'AI Autonomous Vehicle Systems',
      description: 'Advanced autonomous vehicle technology with AI-powered navigation and safety systems',
      icon: Car,
      features: [
        'Autonomous Navigation',
        'Object Detection & Recognition',
        'Path Planning',
        'Collision Avoidance',
        'Traffic Analysis',
        'Predictive Maintenance',
        'Fleet Management',
        'Safety Monitoring'
      ],
      category: 'Autonomous Systems',
      popular: true,
      rating: 4.8,
      users: '200+',
      color: 'from-blue-500 to-cyan-600',
      pricing: 'Starting at $8,500/mo',
      capabilities: [
        '99.9% safety record',
        'Real-time decision making',
        'Fleet optimization',
        'Predictive maintenance'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-32a7
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
      ]
    },
    {
      id: 13,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
      name: 'AI Space Technology Pro',
      description: 'Cutting-edge AI solutions for space exploration, satellite management, and space mission optimization',
      icon: Rocket,
      features: [
        'Satellite Management',
        'Mission Planning',
        'Space Weather Prediction',
        'Orbital Mechanics',
        'Space Debris Tracking',
        'Communication Optimization',
        'Navigation Systems',
        'Space Mission Analytics'
      ],
      category: 'Space Technology',
      popular: true,
      rating: 4.9,
      users: '200+',
      color: 'from-blue-500 to-indigo-600',
      pricing: 'Starting at $1,999/mo',
      capabilities: [
        'Satellite constellation optimization',
        'Space mission planning',
        'Orbital debris tracking',
        'Space weather prediction'
      ]
    },
    {
      id: 21,
      name: 'AI Autonomous Vehicle Intelligence',
      description: 'Advanced AI systems for autonomous vehicles with real-time decision making, obstacle detection, and route optimization',
      icon: Car,
      features: [
        'Real-time Decision Making',
        'Obstacle Detection',
        'Route Optimization',
        'Traffic Prediction',
        'Weather Adaptation',
        'Emergency Response',
        'Fleet Management',
        'Safety Monitoring'
      ],
      category: 'Autonomous Systems',
      popular: true,
      rating: 4.8,
      users: '500+',
      color: 'from-green-500 to-teal-600',
      pricing: 'Starting at $2,499/mo',
      capabilities: [
        '99.9% safety record',
        'Real-time navigation',
        'Weather adaptation',
        'Fleet optimization'
      ]
    },
    {
      id: 22,
      name: 'AI Medical Diagnosis Assistant',
      description: 'Advanced AI medical diagnosis with image analysis, symptom recognition, and treatment recommendations',
      icon: Stethoscope,
      features: [
        'Medical Image Analysis',
        'Symptom Recognition',
        'Treatment Recommendations',
        'Drug Interaction Analysis',
        'Patient Monitoring',
        'Clinical Decision Support',
        'Electronic Health Records',
        'Compliance Tracking'
      ],
      category: 'Healthcare AI',
      popular: true,
      rating: 4.9,
      users: '1,200+',
      color: 'from-red-500 to-pink-600',
      pricing: 'Starting at $899/mo',
      capabilities: [
        '98% diagnostic accuracy',
        'Faster diagnosis times',
        'Reduced medical errors',
        'Improved patient outcomes'
      ]
    },
    {
      id: 23,
      name: 'AI Financial Crime Detection',
      description: 'Advanced AI system for detecting financial crimes, fraud prevention, and compliance monitoring',
      icon: Shield,
      features: [
        'Fraud Detection',
        'Money Laundering Detection',
        'Transaction Monitoring',
        'Risk Assessment',
        'Compliance Monitoring',
        'Real-time Alerts',
        'Pattern Recognition',
        'Regulatory Reporting'
      ],
      category: 'Financial AI',
      popular: true,
      rating: 4.8,
      users: '800+',
      color: 'from-yellow-500 to-orange-600',
      pricing: 'Starting at $1,299/mo',
      capabilities: [
        '99.5% fraud detection rate',
        'Real-time monitoring',
        'Compliance automation',
        'Risk reduction'
      ]
    },
    {
      id: 24,
      name: 'AI Climate Change Predictor',
      description: 'AI-powered climate modeling and prediction system for environmental impact assessment and policy planning',
      icon: Globe,
      features: [
        'Climate Modeling',
        'Weather Prediction',
        'Environmental Impact Assessment',
        'Carbon Footprint Analysis',
        'Policy Planning',
        'Risk Assessment',
        'Data Visualization',
        'Trend Analysis'
      ],
      category: 'Environmental AI',
      popular: true,
      rating: 4.9,
      users: '400+',
      color: 'from-emerald-500 to-green-600',
      pricing: 'Starting at $1,599/mo',
      capabilities: [
        '95% prediction accuracy',
        'Climate modeling',
        'Environmental impact',
        'Policy recommendations'
      ]
    },
    {
      id: 25,
      name: 'AI Drug Discovery Platform',
      description: 'Revolutionary AI platform for pharmaceutical research, drug discovery, and molecular analysis',
      icon: Stethoscope,
      features: [
        'Molecular Analysis',
        'Drug Target Identification',
        'Compound Screening',
        'Clinical Trial Optimization',
        'Side Effect Prediction',
        'Drug Interaction Analysis',
        'Personalized Medicine',
        'Regulatory Compliance'
      ],
      category: 'Pharmaceutical AI',
      popular: true,
      rating: 4.9,
      users: '300+',
      color: 'from-purple-500 to-violet-600',
      pricing: 'Starting at $3,999/mo',
      capabilities: [
        '10x faster drug discovery',
        '95% accuracy in predictions',
        'Reduced clinical trial costs',
        'Personalized treatment options'
      ]
    },
    {
      id: 26,
      name: 'AI Smart City Controller',
      description: 'Comprehensive AI system for smart city management with traffic optimization, energy management, and citizen services',
      icon: Building,
      features: [
        'Traffic Optimization',
        'Energy Management',
        'Citizen Services',
        'Waste Management',
        'Public Safety',
        'Environmental Monitoring',
        'Data Analytics',
        'Integration Hub'
      ],
      category: 'Smart Cities',
      popular: true,
      rating: 4.8,
      users: '150+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $2,999/mo',
      capabilities: [
        '30% traffic reduction',
        'Energy optimization',
        'Citizen satisfaction',
        'Environmental monitoring'
      ]
    },
    {
      id: 27,
      name: 'AI Agricultural Intelligence',
      description: 'AI-powered agricultural solutions with crop monitoring, yield prediction, and precision farming',
      icon: Globe,
      features: [
        'Crop Monitoring',
        'Yield Prediction',
        'Precision Farming',
        'Weather Analysis',
        'Soil Analysis',
        'Pest Detection',
        'Irrigation Management',
        'Harvest Optimization'
      ],
      category: 'Agricultural AI',
      popular: true,
      rating: 4.8,
      users: '600+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $799/mo',
      capabilities: [
        '20% yield increase',
        'Precision farming',
        'Crop monitoring',
        'Weather prediction'
      ]
    },
    {
      id: 28,
      name: 'AI Energy Grid Optimizer',
      description: 'AI-powered energy grid management with load balancing, demand response, and renewable energy integration',
      icon: Zap,
      features: [
        'Load Balancing',
        'Demand Response',
        'Renewable Energy Integration',
        'Energy Storage',
        'Grid Stability',
        'Fault Detection',
        'Predictive Maintenance',
        'Real-time Control'
      ],
      category: 'Energy AI',
      popular: true,
      rating: 4.9,
      users: '250+',
      color: 'from-yellow-500 to-amber-600',
      pricing: 'Starting at $1,799/mo',
      capabilities: [
        '25% energy savings',
        'Grid stability',
        'Renewable integration',
        'Predictive maintenance'
      ]
    },
    {
      id: 29,
      name: 'AI Manufacturing Optimizer',
      description: 'AI-powered manufacturing optimization with predictive maintenance, quality control, and production planning',
      icon: Settings,
      features: [
        'Predictive Maintenance',
        'Quality Control',
        'Production Planning',
        'Supply Chain Optimization',
        'Equipment Monitoring',
        'Waste Reduction',
        'Energy Management',
        'Performance Analytics'
      ],
      category: 'Manufacturing AI',
      popular: true,
      rating: 4.8,
      users: '700+',
      color: 'from-gray-500 to-slate-600',
      pricing: 'Starting at $1,499/mo',
      capabilities: [
        '30% reduction in downtime',
        'Quality improvement',
        'Production optimization',
        'Predictive maintenance'
      ]
    },
    {
      id: 30,
      name: 'AI Cybersecurity Sentinel',
      description: 'Advanced AI cybersecurity system with threat detection, incident response, and security automation',
      icon: Shield,
      features: [
        'Threat Detection',
        'Incident Response',
        'Security Automation',
        'Vulnerability Assessment',
        'Compliance Monitoring',
        'Zero Trust Architecture',
        'Threat Intelligence',
        'Security Analytics'
      ],
      category: 'Cybersecurity AI',
      popular: true,
      rating: 4.9,
      users: '1,500+',
      color: 'from-red-500 to-orange-600',
      pricing: 'Starting at $1,999/mo',
      capabilities: [
        '99.9% threat detection',
        'Real-time response',
        'Automated security',
        'Compliance automation'
      ]
    },
    {
      id: 31,
      name: 'AI Content Moderation System',
      description: 'AI-powered content moderation with automated detection of inappropriate content, hate speech, and spam',
      icon: FileText,
      features: [
        'Content Detection',
        'Hate Speech Detection',
        'Spam Filtering',
        'Image Analysis',
        'Video Analysis',
        'Text Analysis',
        'Automated Actions',
        'Human Review'
      ],
      category: 'Content AI',
      popular: true,
      rating: 4.7,
      users: '2,000+',
      color: 'from-indigo-500 to-purple-600',
      pricing: 'Starting at $599/mo',
      capabilities: [
        '95% accuracy in detection',
        'Real-time moderation',
        'Automated actions',
        'Human review integration'
      ]
    },
    {
      id: 32,
      name: 'AI Language Translation Pro',
      description: 'Advanced AI language translation with real-time processing, context understanding, and cultural adaptation',
      icon: Globe,
      features: [
        'Real-time Translation',
        'Context Understanding',
        'Cultural Adaptation',
        'Voice Translation',
        'Document Translation',
        'Multi-language Support',
        'Quality Assessment',
        'Custom Training'
      ],
      category: 'Language AI',
      popular: true,
      rating: 4.8,
      users: '3,500+',
      color: 'from-blue-500 to-cyan-600',
      pricing: 'Starting at $399/mo',
      capabilities: [
        '99% translation accuracy',
        'Real-time processing',
        'Cultural adaptation',
        'Multi-language support'
      ]
    },
    {
      id: 33,
      name: 'AI Personal Assistant Pro',
      description: 'Advanced AI personal assistant with natural language processing, task automation, and learning capabilities',
      icon: Brain,
      features: [
        'Natural Language Processing',
        'Task Automation',
        'Learning Capabilities',
        'Calendar Management',
        'Email Management',
        'Voice Commands',
        'Multi-device Sync',
        'Custom Training'
      ],
      category: 'Personal AI',
      popular: true,
      rating: 4.8,
      users: '5,000+',
      color: 'from-purple-500 to-pink-600',
      pricing: 'Starting at $199/mo',
      capabilities: [
        'Natural language understanding',
        'Task automation',
        'Learning capabilities',
        'Multi-device sync'
      ]
    },
    {
      id: 34,
      name: 'AI Investment Advisor',
      description: 'AI-powered investment advisory with portfolio optimization, risk assessment, and market analysis',
      icon: BarChart,
      features: [
        'Portfolio Optimization',
        'Risk Assessment',
        'Market Analysis',
        'Investment Recommendations',
        'Performance Tracking',
        'Tax Optimization',
        'Retirement Planning',
        'Real-time Alerts'
      ],
      category: 'Financial AI',
      popular: true,
      rating: 4.9,
      users: '1,800+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $799/mo',
      capabilities: [
        '95% accuracy in predictions',
        'Portfolio optimization',
        'Risk assessment',
        'Real-time analysis'
      ]
    },
    {
      id: 35,
      name: 'AI Legal Research Assistant',
      description: 'AI-powered legal research with case law analysis, document review, and legal writing assistance',
      icon: Scale,
      features: [
        'Case Law Analysis',
        'Document Review',
        'Legal Writing Assistance',
        'Precedent Research',
        'Citation Checking',
        'Legal Brief Generation',
        'Compliance Monitoring',
        'Client Communication'
      ],
      category: 'Legal AI',
      popular: true,
      rating: 4.8,
      users: '900+',
      color: 'from-blue-500 to-indigo-600',
      pricing: 'Starting at $1,199/mo',
      capabilities: [
        '90% time savings',
        'Comprehensive research',
        'Legal writing assistance',
        'Compliance monitoring'
      ]
    },
    {
      id: 36,
      name: 'AI Education Tutor',
      description: 'AI-powered educational tutor with personalized learning, adaptive content, and progress tracking',
      icon: BookOpen,
      features: [
        'Personalized Learning',
        'Adaptive Content',
        'Progress Tracking',
        'Assessment Tools',
        'Learning Analytics',
        'Multi-subject Support',
        'Interactive Content',
        'Performance Insights'
      ],
      category: 'Education AI',
      popular: true,
      rating: 4.8,
      users: '4,200+',
      color: 'from-orange-500 to-red-600',
      pricing: 'Starting at $299/mo',
      capabilities: [
        'Personalized learning paths',
        'Adaptive content',
        'Progress tracking',
        'Performance insights'
      ]
    },
    {
      id: 37,
      name: 'AI Customer Experience Optimizer',
      description: 'AI-powered customer experience optimization with sentiment analysis, personalization, and engagement tracking',
      icon: Users,
      features: [
        'Sentiment Analysis',
        'Personalization',
        'Engagement Tracking',
        'Customer Journey Mapping',
        'Predictive Analytics',
        'Omnichannel Support',
        'Real-time Recommendations',
        'Customer Segmentation'
      ],
      category: 'Customer AI',
      popular: true,
      rating: 4.8,
      users: '3,200+',
      color: 'from-pink-500 to-rose-600',
      pricing: 'Starting at $699/mo',
      capabilities: [
        '40% increase in satisfaction',
        'Personalized experiences',
        'Engagement optimization',
        'Predictive insights'
      ]
    },
    {
      id: 38,
      name: 'AI Supply Chain Optimizer',
      description: 'AI-powered supply chain optimization with demand forecasting, inventory management, and logistics planning',
      icon: Truck,
      features: [
        'Demand Forecasting',
        'Inventory Management',
        'Logistics Planning',
        'Supplier Management',
        'Quality Control',
        'Cost Optimization',
        'Risk Assessment',
        'Performance Analytics'
      ],
      category: 'Supply Chain AI',
      popular: true,
      rating: 4.7,
      users: '1,100+',
      color: 'from-amber-500 to-yellow-600',
      pricing: 'Starting at $1,399/mo',
      capabilities: [
        '20% cost reduction',
        'Inventory optimization',
        'Demand forecasting',
        'Risk mitigation'
      ]
    },
    {
      id: 39,
      name: 'AI Human Resources Assistant',
      description: 'AI-powered HR assistant with recruitment, employee management, and performance analytics',
      icon: Users,
      features: [
        'Recruitment Automation',
        'Employee Management',
        'Performance Analytics',
        'Talent Acquisition',
        'Employee Engagement',
        'Training Recommendations',
        'Compliance Monitoring',
        'Workforce Planning'
      ],
      category: 'HR AI',
      popular: true,
      rating: 4.8,
      users: '2,300+',
      color: 'from-teal-500 to-cyan-600',
      pricing: 'Starting at $599/mo',
      capabilities: [
        '50% faster hiring',
        'Employee engagement',
        'Performance analytics',
        'Talent acquisition'
      ]
    },
    {
      id: 40,
      name: 'AI Marketing Intelligence',
      description: 'AI-powered marketing intelligence with campaign optimization, audience analysis, and ROI tracking',
      icon: Target,
      features: [
        'Campaign Optimization',
        'Audience Analysis',
        'ROI Tracking',
        'A/B Testing',
        'Content Personalization',
        'Social Media Analytics',
        'Competitor Analysis',
        'Performance Insights'
      ],
      category: 'Marketing AI',
      popular: true,
      rating: 4.8,
      users: '2,800+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $799/mo',
      capabilities: [
        '50% better performance',
        'Audience insights',
        'Campaign optimization',
        'ROI tracking'
      ]
    },
    {
      id: 41,
      name: 'AI Real Estate Analyzer',
      description: 'AI-powered real estate analysis with property valuation, market trends, and investment recommendations',
      icon: Building,
      features: [
        'Property Valuation',
        'Market Trends',
        'Investment Recommendations',
        'Risk Assessment',
        'Rental Yield Analysis',
        'Location Analysis',
        'Price Prediction',
        'Market Intelligence'
      ],
      category: 'Real Estate AI',
      popular: true,
      rating: 4.7,
      users: '1,400+',
      color: 'from-slate-500 to-gray-600',
      pricing: 'Starting at $699/mo',
      capabilities: [
        'Accurate valuations',
        'Market insights',
        'Investment recommendations',
        'Risk assessment'
      ]
    },
    {
      id: 42,
      name: 'AI Insurance Underwriter',
      description: 'AI-powered insurance underwriting with risk assessment, fraud detection, and policy optimization',
      icon: Shield,
      features: [
        'Risk Assessment',
        'Fraud Detection',
        'Policy Optimization',
        'Claims Processing',
        'Customer Analysis',
        'Pricing Optimization',
        'Compliance Monitoring',
        'Automated Decisions'
      ],
      category: 'Insurance AI',
      popular: true,
      rating: 4.8,
      users: '800+',
      color: 'from-blue-500 to-indigo-600',
      pricing: 'Starting at $1,099/mo',
      capabilities: [
        '90% accuracy in risk assessment',
        'Fraud detection',
        'Policy optimization',
        'Automated decisions'
      ]
    },
    {
      id: 43,
      name: 'AI Transportation Optimizer',
      description: 'AI-powered transportation optimization with route planning, fleet management, and fuel efficiency',
      icon: Truck,
      features: [
        'Route Optimization',
        'Fleet Management',
        'Fuel Efficiency',
        'Driver Management',
        'Maintenance Scheduling',
        'Load Optimization',
        'Real-time Tracking',
        'Cost Analysis'
      ],
      category: 'Transportation AI',
      popular: true,
      rating: 4.7,
      users: '1,200+',
      color: 'from-orange-500 to-red-600',
      pricing: 'Starting at $999/mo',
      capabilities: [
        '20% fuel savings',
        'Route optimization',
        'Fleet management',
        'Cost reduction'
      ]
    },
    {
      id: 44,
      name: 'AI Energy Management System',
      description: 'AI-powered energy management with consumption optimization, renewable energy integration, and cost reduction',
      icon: Zap,
      features: [
        'Consumption Optimization',
        'Renewable Energy Integration',
        'Cost Reduction',
        'Demand Response',
        'Energy Storage',
        'Grid Management',
        'Carbon Tracking',
        'Predictive Analytics'
      ],
      category: 'Energy AI',
      popular: true,
      rating: 4.8,
      users: '900+',
      color: 'from-yellow-500 to-amber-600',
      pricing: 'Starting at $1,299/mo',
      capabilities: [
        '25% energy savings',
        'Renewable integration',
        'Cost optimization',
        'Carbon tracking'
      ]
    },
    {
      id: 45,
      name: 'AI Waste Management Optimizer',
      description: 'AI-powered waste management with collection optimization, recycling sorting, and environmental impact tracking',
      icon: Trash,
      features: [
        'Collection Optimization',
        'Recycling Sorting',
        'Environmental Impact',
        'Route Planning',
        'Waste Analysis',
        'Compliance Monitoring',
        'Cost Optimization',
        'Sustainability Tracking'
      ],
      category: 'Environmental AI',
      popular: true,
      rating: 4.7,
      users: '600+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $799/mo',
      capabilities: [
        'Collection optimization',
        'Recycling efficiency',
        'Environmental impact',
        'Cost reduction'
      ]
    },
    {
      id: 46,
      name: 'AI Water Quality Monitor',
      description: 'AI-powered water quality monitoring with contamination detection, treatment optimization, and compliance tracking',
      icon: Droplets,
      features: [
        'Contamination Detection',
        'Treatment Optimization',
        'Compliance Tracking',
        'Quality Analysis',
        'Predictive Maintenance',
        'Environmental Impact',
        'Real-time Monitoring',
        'Alert Systems'
      ],
      category: 'Environmental AI',
      popular: true,
      rating: 4.8,
      users: '500+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $899/mo',
      capabilities: [
        'Real-time monitoring',
        'Contamination detection',
        'Treatment optimization',
        'Compliance tracking'
      ]
    },
    {
      id: 47,
      name: 'AI Air Quality Analyzer',
      description: 'AI-powered air quality analysis with pollution detection, health impact assessment, and environmental forecasting',
      icon: Wind,
      features: [
        'Pollution Detection',
        'Health Impact Assessment',
        'Environmental Forecasting',
        'Source Identification',
        'Trend Analysis',
        'Alert Systems',
        'Data Visualization',
        'Regulatory Reporting'
      ],
      category: 'Environmental AI',
      popular: true,
      rating: 4.8,
      users: '700+',
      color: 'from-sky-500 to-blue-600',
      pricing: 'Starting at $699/mo',
      capabilities: [
        'Pollution detection',
        'Health impact analysis',
        'Environmental forecasting',
        'Source identification'
      ]
    },
    {
      id: 48,
      name: 'AI Biodiversity Monitor',
      description: 'AI-powered biodiversity monitoring with species identification, habitat analysis, and conservation planning',
      icon: Globe,
      features: [
        'Species Identification',
        'Habitat Analysis',
        'Conservation Planning',
        'Population Tracking',
        'Threat Assessment',
        'Ecosystem Health',
        'Data Collection',
        'Research Tools'
      ],
      category: 'Environmental AI',
      popular: true,
      rating: 4.9,
      users: '400+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $1,199/mo',
      capabilities: [
        'Species identification',
        'Habitat analysis',
        'Conservation planning',
        'Population tracking'
      ]
    },
    {
      id: 49,
      name: 'AI Ocean Monitoring System',
      description: 'AI-powered ocean monitoring with marine life tracking, water quality analysis, and ecosystem health assessment',
      icon: Waves,
      features: [
        'Marine Life Tracking',
        'Water Quality Analysis',
        'Ecosystem Health',
        'Current Monitoring',
        'Temperature Analysis',
        'Pollution Detection',
        'Research Tools',
        'Data Visualization'
      ],
      category: 'Environmental AI',
      popular: true,
      rating: 4.8,
      users: '300+',
      color: 'from-blue-500 to-cyan-600',
      pricing: 'Starting at $1,499/mo',
      capabilities: [
        'Marine life tracking',
        'Water quality analysis',
        'Ecosystem health',
        'Current monitoring'
      ]
    },
    {
      id: 50,
      name: 'AI Forest Management System',
      description: 'AI-powered forest management with tree monitoring, wildfire detection, and sustainable harvesting planning',
      icon: Trees,
      features: [
        'Tree Monitoring',
        'Wildfire Detection',
        'Harvesting Planning',
        'Growth Analysis',
        'Disease Detection',
        'Carbon Sequestration',
        'Biodiversity Tracking',
        'Sustainability Metrics'
      ],
      category: 'Environmental AI',
      popular: true,
      rating: 4.7,
      users: '350+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $999/mo',
      capabilities: [
        'Tree monitoring',
        'Wildfire detection',
        'Harvesting planning',
        'Growth analysis'
      ]
    }
  ];
      category: 'Space Tech',
      popular: false,
      rating: 4.9,
      users: '50+',
      color: 'from-indigo-500 to-blue-600',
      pricing: 'Starting at $4,999/mo',
      capabilities: [
        '99.9% mission success rate',
        'Real-time space monitoring',
        'Advanced orbital calculations',
        'Space debris mitigation'
<<<<<<< HEAD
=======
      name: 'AI Space Exploration Platform',
      description: 'AI-powered space exploration and satellite management with advanced mission planning',
      icon: Rocket,
      features: [
        'Mission Planning',
        'Satellite Operations',
        'Space Weather Prediction',
        'Orbital Mechanics',
        'Astronomical Data Analysis',
        'Space Debris Tracking',
        'Communication Optimization',
        'Resource Management'
      ],
      category: 'Space Technology',
      popular: false,
      rating: 4.9,
      users: '80+',
      color: 'from-indigo-500 to-purple-600',
      pricing: 'Starting at $12,000/mo',
      capabilities: [
        'Mission success optimization',
        'Real-time space monitoring',
        'Advanced trajectory planning',
        'Space resource optimization'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-32a7
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
      ]
    },
    {
      id: 14,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
      name: 'AI Drug Discovery Pro',
      description: 'Revolutionary AI-powered drug discovery platform with molecular modeling, clinical trial optimization, and personalized medicine',
      icon: Stethoscope,
      features: [
        'Molecular Modeling',
        'Drug Design',
        'Clinical Trial Optimization',
        'Personalized Medicine',
        'Side Effect Prediction',
        'Drug Interaction Analysis',
        'Biomarker Discovery',
        'Regulatory Compliance'
      ],
      category: 'Pharmaceutical AI',
      popular: true,
      rating: 4.9,
      users: '200+',
      color: 'from-red-500 to-pink-600',
      pricing: 'Starting at $3,999/mo',
      capabilities: [
        '70% faster drug discovery',
        '90% accuracy in predictions',
        'Personalized treatment plans',
        'Reduced clinical trial costs'
<<<<<<< HEAD
=======
      name: 'AI Climate Intelligence',
      description: 'Advanced climate monitoring and prediction with AI-powered environmental analysis',
      icon: Globe,
      features: [
        'Climate Modeling',
        'Weather Prediction',
        'Carbon Footprint Analysis',
        'Environmental Monitoring',
        'Disaster Prediction',
        'Sustainability Planning',
        'Emission Tracking',
        'Green Energy Optimization'
      ],
      category: 'Environmental AI',
      popular: true,
      rating: 4.7,
      users: '400+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $5,500/mo',
      capabilities: [
        '95% weather accuracy',
        'Climate change mitigation',
        'Environmental protection',
        'Sustainable development'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-32a7
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
      ]
    },
    {
      id: 15,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
      name: 'AI Neural Memory Assistant',
      description: 'Advanced AI system that mimics human memory patterns for enhanced learning, recall, and cognitive assistance',
      icon: Brain,
      features: [
        'Memory Pattern Recognition',
        'Learning Optimization',
        'Cognitive Assistance',
        'Knowledge Retention',
        'Pattern Recognition',
        'Adaptive Learning',
        'Memory Enhancement',
        'Cognitive Analytics'
      ],
      category: 'Cognitive AI',
      popular: false,
      rating: 4.7,
      users: '300+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $799/mo',
      capabilities: [
        '40% improved learning speed',
        '90% better retention rates',
        'Adaptive memory patterns',
        'Cognitive enhancement'
=======
      name: 'AI Drug Discovery Platform',
      description: 'Revolutionary pharmaceutical research with AI-powered molecular analysis and drug development',
      icon: Stethoscope,
      features: [
        'Molecular Modeling',
        'Drug Interaction Analysis',
        'Clinical Trial Optimization',
        'Protein Folding Prediction',
        'Toxicity Assessment',
        'Patent Analysis',
        'Biomarker Discovery',
        'Personalized Medicine'
      ],
      category: 'Pharmaceutical AI',
      popular: true,
      rating: 4.9,
      users: '300+',
      color: 'from-teal-500 to-cyan-600',
      pricing: 'Starting at $18,000/mo',
      capabilities: [
        '50% faster drug development',
        '98% accuracy in predictions',
        'Reduced clinical trial costs',
        'Personalized treatment plans'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-32a7
      ]
    },
    {
      id: 16,
      name: 'AI Quantum Computing Platform Pro',
      description: 'Revolutionary quantum computing platform with AI optimization for complex problem solving and advanced simulations',
      icon: Brain,
      features: [
        'Quantum Algorithm Development',
        'AI-Powered Optimization',
        'Quantum Machine Learning',
        'Hybrid Classical-Quantum Computing',
        'Quantum Simulation',
        'Error Correction',
        'Performance Monitoring',
        'Custom Development'
      ],
      category: 'Quantum Computing',
      popular: true,
      rating: 4.9,
      users: '120+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $4,999/mo',
      capabilities: [
        '1000x faster computations',
        'Quantum advantage in ML',
        'Advanced problem solving',
        'Unbreakable encryption'
      ]
    },
    {
      id: 17,
      name: 'AI Holographic Interface Suite',
      description: 'Immersive 3D holographic interface with AI-powered gesture recognition and spatial computing',
      icon: Globe,
      features: [
        '3D Holographic Display',
        'Gesture Recognition',
        'Spatial Computing',
        'AI-Powered Interactions',
        'Mixed Reality Integration',
        'Real-time Rendering',
        'Multi-user Collaboration',
        'Custom Applications'
      ],
      category: 'Immersive Technology',
      popular: true,
      rating: 4.8,
      users: '280+',
      color: 'from-emerald-500 to-teal-600',
      pricing: 'Starting at $1,599/mo',
      capabilities: [
        'Immersive 3D interactions',
        'Gesture-based control',
        'Spatial computing',
        'Mixed reality integration'
      ]
    },
    {
      id: 18,
      name: 'AI Neural Network Architect',
      description: 'Advanced AI system for designing and optimizing neural network architectures with automated search and optimization',
      icon: Brain,
      features: [
        'Architecture Search',
        'Automated Design',
        'Performance Optimization',
        'Hyperparameter Tuning',
        'Model Compression',
        'Deployment Optimization',
        'Custom Architectures',
        'Performance Analytics'
      ],
      category: 'AI Development',
      popular: true,
      rating: 4.8,
      users: '450+',
      color: 'from-indigo-500 to-purple-600',
      pricing: 'Starting at $899/mo',
      capabilities: [
        'Automated architecture design',
        'Performance optimization',
        'Model compression',
        'Deployment optimization'
      ]
    },
    {
      id: 19,
      name: 'AI Quantum Machine Learning Pro',
      description: 'Quantum-enhanced machine learning with exponential speedup and advanced pattern recognition capabilities',
      icon: Brain,
      features: [
        'Quantum ML Algorithms',
        'Exponential Speedup',
        'Pattern Recognition',
        'Quantum Neural Networks',
        'Optimization Problems',
        'Feature Selection',
        'Model Training',
        'Performance Analytics'
      ],
      category: 'Quantum ML',
      popular: true,
      rating: 4.9,
      users: '180+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $2,299/mo',
      capabilities: [
        'Exponential speedup',
        'Advanced pattern recognition',
        'Quantum neural networks',
        'Optimization solutions'
      ]
    },
    {
      id: 20,
      name: 'AI Space Technology Suite',
      description: 'Comprehensive AI solutions for space exploration, satellite management, and space mission optimization',
      icon: Rocket,
      features: [
        'Satellite Management',
        'Mission Planning',
        'Space Weather Prediction',
        'Orbital Mechanics',
        'Space Debris Tracking',
        'Communication Optimization',
        'Navigation Systems',
        'Space Mission Analytics'
      ],
      category: 'Space Technology',
      popular: false,
      rating: 4.9,
      users: '75+',
      color: 'from-indigo-500 to-blue-600',
      pricing: 'Starting at $3,999/mo',
      capabilities: [
        '99.9% mission success rate',
        'Real-time space monitoring',
        'Advanced orbital calculations',
        'Space debris mitigation'
      ]
    },
    {
      id: 21,
      name: 'AI Molecular Design Studio',
      description: 'Advanced AI platform for molecular design, drug discovery, and chemical property prediction',
      icon: FileText,
      features: [
        'Molecular Modeling',
        'Drug Design',
        'Chemical Simulation',
        'Property Prediction',
        'Reaction Planning',
        'Toxicity Analysis',
        'Patent Search',
        'Collaboration Tools'
      ],
      category: 'Scientific AI',
      popular: true,
      rating: 4.9,
      users: '150+',
      color: 'from-red-500 to-pink-600',
      pricing: 'Starting at $2,499/mo',
      capabilities: [
        '90% accuracy in predictions',
        'Faster drug discovery',
        'Chemical property analysis',
        'Patent-safe designs'
      ]
    },
    {
      id: 22,
      name: 'AI Holographic Data Visualization',
      description: 'Immersive 3D data visualization with AI-powered insights and interactive holographic displays',
      icon: BarChart,
      features: [
        '3D Data Visualization',
        'Holographic Display',
        'AI Insights',
        'Interactive Exploration',
        'Real-time Updates',
        'Custom Dashboards',
        'Collaboration Tools',
        'Export Options'
      ],
      category: 'Data Visualization',
      popular: true,
      rating: 4.8,
      users: '320+',
      color: 'from-purple-500 to-pink-600',
      pricing: 'Starting at $1,199/mo',
      capabilities: [
        'Immersive 3D visualization',
        'Holographic data display',
        'AI-powered insights',
        'Interactive exploration'
      ]
    },
    {
      id: 23,
      name: 'AI Quantum Security Suite',
      description: 'Quantum-resistant security solutions with unbreakable encryption and advanced threat protection',
      icon: Shield,
      features: [
        'Quantum Encryption',
        'Zero-knowledge Architecture',
        'Advanced Threat Detection',
        'Biometric Authentication',
        'Multi-factor Security',
        'Audit Logging',
        'Compliance Tools',
        'API Security'
      ],
      category: 'Quantum Security',
      popular: true,
      rating: 4.9,
      users: '200+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $2,999/mo',
      capabilities: [
        'Unbreakable quantum encryption',
        'Zero-knowledge security',
        'Advanced threat protection',
        'Compliance automation'
      ]
    },
    {
      id: 24,
      name: 'AI Neural Interface Pro',
      description: 'Advanced neural interface with brain-computer interaction, thought-to-text, and cognitive enhancement',
      icon: Brain,
      features: [
        'Brain-Computer Interface',
        'Thought-to-Text',
        'Cognitive Enhancement',
        'Neural Training',
        'Mind Mapping',
        'Memory Augmentation',
        'Focus Optimization',
        'Mental Health Monitoring'
      ],
      category: 'Neural Interface',
      popular: false,
      rating: 4.8,
      users: '120+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $2,799/mo',
      capabilities: [
        'Direct brain interaction',
        'Thought-to-text conversion',
        'Cognitive enhancement',
        'Mental health insights'
      ]
    },
    {
      id: 25,
      name: 'AI Quantum Optimization Engine',
      description: 'Quantum-powered optimization engine for complex problems with exponential speedup and advanced algorithms',
      icon: Zap,
      features: [
        'Quantum Optimization',
        'Complex Problem Solving',
        'Exponential Speedup',
        'Advanced Algorithms',
        'Real-time Processing',
        'API Integration',
        'Custom Solutions',
        'Performance Analytics'
      ],
      category: 'Quantum Optimization',
      popular: true,
      rating: 4.9,
      users: '160+',
      color: 'from-amber-500 to-orange-600',
      pricing: 'Starting at $1,999/mo',
      capabilities: [
        'Exponential speedup',
        'Complex problem solving',
        'Quantum algorithms',
        'Real-time optimization'
      ]
    },
    {
      id: 26,
      name: 'AI Holographic Training Simulator',
      description: 'Immersive 3D training simulator with AI-powered personalized learning and virtual reality integration',
      icon: Users,
      features: [
        '3D Training Environment',
        'AI Personalization',
        'Virtual Reality',
        'Skill Assessment',
        'Progress Tracking',
        'Interactive Scenarios',
        'Multi-user Support',
        'Analytics Dashboard'
      ],
      category: 'Immersive Learning',
      popular: true,
      rating: 4.8,
      users: '280+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $1,399/mo',
      capabilities: [
        'Immersive 3D training',
        'AI personalization',
        'Virtual reality integration',
        'Skill assessment'
      ]
    },
    {
      id: 27,
      name: 'AI Quantum Neural Networks',
      description: 'Quantum-enhanced neural networks with exponential computational power and advanced learning capabilities',
      icon: Brain,
      features: [
        'Quantum Neural Networks',
        'Exponential Power',
        'Advanced Learning',
        'Pattern Recognition',
        'Optimization',
        'Training Acceleration',
        'Model Deployment',
        'Performance Monitoring'
      ],
      category: 'Quantum AI',
      popular: false,
      rating: 4.9,
      users: '90+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $3,499/mo',
      capabilities: [
        'Exponential computational power',
        'Advanced learning',
        'Pattern recognition',
        'Training acceleration'
      ]
    },
    {
      id: 28,
      name: 'AI Autonomous Systems Pro',
      description: 'Advanced AI platform for autonomous vehicle and drone management with real-time decision making',
      icon: Settings,
      features: [
        'Autonomous Vehicle AI',
        'Drone Fleet Management',
        'Real-time Decision Making',
        'Path Optimization',
        'Collision Avoidance',
        'Weather Adaptation',
        'Fleet Coordination',
        'Safety Monitoring'
      ],
      category: 'Autonomous Systems',
      popular: true,
      rating: 4.9,
      users: '180+',
      color: 'from-slate-500 to-gray-600',
      pricing: 'Starting at $2,799/mo',
      capabilities: [
        '99.9% safety record',
        'Real-time autonomous decisions',
        'Fleet optimization',
        'Weather-adaptive navigation'
      ]
    },
    {
      id: 29,
      name: 'AI Quantum Financial Oracle',
      description: 'Revolutionary quantum-powered financial analysis with ultra-fast market predictions and risk assessment',
      icon: DollarSign,
      features: [
        'Quantum Market Analysis',
        'Ultra-fast Predictions',
        'Risk Assessment',
        'Portfolio Optimization',
        'Cryptocurrency Analysis',
        'Real-time Trading Signals',
        'Quantum Computing',
        'Advanced Analytics'
      ],
      category: 'Quantum Finance',
      popular: true,
      rating: 4.9,
      users: '140+',
      color: 'from-emerald-500 to-green-600',
      pricing: 'Starting at $3,999/mo',
      capabilities: [
        '1000x faster calculations',
        '99.9% prediction accuracy',
        'Quantum advantage',
        'Real-time risk modeling'
      ]
    },
    {
      id: 30,
      name: 'AI Holographic Workspace Pro',
      description: 'Immersive 3D workspace with AI-powered collaboration, virtual meetings, and spatial computing',
      icon: Globe,
      features: [
        '3D Workspace',
        'Virtual Collaboration',
        'Spatial Computing',
        'AI Gestures',
        'Mixed Reality',
        'Real-time Translation',
        'Virtual Whiteboarding',
        'Immersive Presentations'
      ],
      category: 'Immersive Workspace',
      popular: true,
      rating: 4.7,
      users: '250+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $1,799/mo',
      capabilities: [
        'Immersive 3D collaboration',
        'Spatial computing',
        'AI-powered gestures',
        'Mixed reality integration'
<<<<<<< HEAD
=======
      ]
    },
    {
      id: 31,
      name: 'AI Emotional Intelligence Platform',
      description: 'Advanced AI system with emotional recognition, empathy modeling, and human-AI emotional interaction',
      icon: Brain,
      features: [
        'Emotional Recognition',
        'Empathy Modeling',
        'Sentiment Analysis',
        'Emotional Response Generation',
        'Mood Tracking',
        'Emotional Coaching',
        'Human-AI Interaction',
        'Emotional Analytics'
      ],
      category: 'Emotional AI',
      popular: true,
      rating: 4.8,
      users: '1,200+',
      color: 'from-pink-500 to-rose-600',
      pricing: 'Starting at $899/mo',
      capabilities: [
        'Emotional understanding',
        'Empathetic responses',
        'Mood optimization',
        'Human-like interaction'
      ]
    },
    {
      id: 32,
      name: 'AI Creative Writing Studio',
      description: 'AI-powered creative writing platform with story generation, character development, and narrative analysis',
      icon: FileText,
      features: [
        'Story Generation',
        'Character Development',
        'Plot Analysis',
        'Style Adaptation',
        'Genre Expertise',
        'Collaborative Writing',
        'Publishing Assistance',
        'Creative Feedback'
      ],
      category: 'Creative AI',
      popular: true,
      rating: 4.7,
      users: '3,800+',
      color: 'from-purple-500 to-indigo-600',
      pricing: 'Starting at $299/mo',
      capabilities: [
        'Creative story generation',
        'Character development',
        'Style adaptation',
        'Publishing support'
      ]
    },
    {
      id: 33,
      name: 'AI Personal Health Coach',
      description: 'Comprehensive AI health coaching with personalized wellness plans, health monitoring, and lifestyle optimization',
      icon: Stethoscope,
      features: [
        'Personalized Wellness Plans',
        'Health Monitoring',
        'Lifestyle Optimization',
        'Nutrition Guidance',
        'Exercise Planning',
        'Sleep Optimization',
        'Stress Management',
        'Health Analytics'
      ],
      category: 'Health AI',
      popular: true,
      rating: 4.9,
      users: '5,600+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $199/mo',
      capabilities: [
        'Personalized health plans',
        'Lifestyle optimization',
        'Health monitoring',
        'Wellness improvement'
      ]
    },
    {
      id: 34,
      name: 'AI Smart City Platform',
      description: 'Comprehensive AI platform for smart city management with traffic optimization, resource management, and citizen services',
      icon: Building,
      features: [
        'Traffic Optimization',
        'Resource Management',
        'Citizen Services',
        'Environmental Monitoring',
        'Energy Management',
        'Public Safety',
        'Urban Planning',
        'Data Analytics'
      ],
      category: 'Smart Cities',
      popular: true,
      rating: 4.8,
      users: '180+',
      color: 'from-blue-500 to-cyan-600',
      pricing: 'Starting at $15,000/mo',
      capabilities: [
        'Urban optimization',
        'Resource efficiency',
        'Citizen satisfaction',
        'Environmental sustainability'
      ]
    },
    {
      id: 35,
      name: 'AI Agricultural Intelligence',
      description: 'AI-powered agricultural solutions with crop monitoring, yield prediction, and precision farming',
      icon: Sprout,
      features: [
        'Crop Monitoring',
        'Yield Prediction',
        'Precision Farming',
        'Pest Detection',
        'Weather Integration',
        'Soil Analysis',
        'Irrigation Control',
        'Harvest Optimization'
      ],
      category: 'Agricultural AI',
      popular: true,
      rating: 4.7,
      users: '2,400+',
      color: 'from-green-500 to-lime-600',
      pricing: 'Starting at $1,299/mo',
      capabilities: [
        'Crop yield optimization',
        'Precision farming',
        'Resource efficiency',
        'Sustainable agriculture'
      ]
    },
    {
      id: 36,
      name: 'AI Legal Research Assistant',
      description: 'Advanced AI legal research platform with case law analysis, document review, and legal writing assistance',
      icon: Scale,
      features: [
        'Case Law Analysis',
        'Document Review',
        'Legal Writing',
        'Precedent Research',
        'Contract Analysis',
        'Compliance Checking',
        'Legal Briefs',
        'Research Automation'
      ],
      category: 'Legal AI',
      popular: true,
      rating: 4.8,
      users: '1,600+',
      color: 'from-amber-500 to-orange-600',
      pricing: 'Starting at $799/mo',
      capabilities: [
        'Legal research efficiency',
        'Document analysis',
        'Case law insights',
        'Legal writing support'
      ]
    },
    {
      id: 37,
      name: 'AI Music Production Studio',
      description: 'AI-powered music production with composition, mixing, mastering, and sound design capabilities',
      icon: Music,
      features: [
        'AI Composition',
        'Automatic Mixing',
        'Mastering',
        'Sound Design',
        'Genre Adaptation',
        'Collaborative Tools',
        'Royalty-free Music',
        'Production Analytics'
      ],
      category: 'Music AI',
      popular: true,
      rating: 4.6,
      users: '4,200+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $399/mo',
      capabilities: [
        'Professional music production',
        'Genre versatility',
        'Collaborative creation',
        'Production efficiency'
      ]
    },
    {
      id: 38,
      name: 'AI Real Estate Assistant',
      description: 'AI-powered real estate platform with property valuation, market analysis, and investment recommendations',
      icon: Home,
      features: [
        'Property Valuation',
        'Market Analysis',
        'Investment Recommendations',
        'Property Search',
        'Price Prediction',
        'Neighborhood Analysis',
        'Investment ROI',
        'Market Trends'
      ],
      category: 'Real Estate AI',
      popular: true,
      rating: 4.7,
      users: '2,800+',
      color: 'from-indigo-500 to-blue-600',
      pricing: 'Starting at $599/mo',
      capabilities: [
        'Accurate property valuation',
        'Market insights',
        'Investment optimization',
        'Market prediction'
      ]
    },
    {
      id: 39,
      name: 'AI Sports Analytics Platform',
      description: 'Advanced AI sports analytics with performance analysis, injury prediction, and tactical insights',
      icon: Target,
      features: [
        'Performance Analysis',
        'Injury Prediction',
        'Tactical Insights',
        'Player Scouting',
        'Game Strategy',
        'Biomechanical Analysis',
        'Recovery Optimization',
        'Team Analytics'
      ],
      category: 'Sports AI',
      popular: true,
      rating: 4.8,
      users: '1,400+',
      color: 'from-red-500 to-pink-600',
      pricing: 'Starting at $1,199/mo',
      capabilities: [
        'Performance optimization',
        'Injury prevention',
        'Tactical insights',
        'Team performance'
      ]
    },
    {
      id: 40,
      name: 'AI Environmental Monitoring',
      description: 'AI-powered environmental monitoring with pollution detection, climate analysis, and sustainability tracking',
      icon: Globe,
      features: [
        'Pollution Detection',
        'Climate Analysis',
        'Sustainability Tracking',
        'Air Quality Monitoring',
        'Water Quality Analysis',
        'Biodiversity Assessment',
        'Environmental Alerts',
        'Sustainability Reporting'
      ],
      category: 'Environmental AI',
      popular: true,
      rating: 4.9,
      users: '1,800+',
      color: 'from-emerald-500 to-teal-600',
      pricing: 'Starting at $899/mo',
      capabilities: [
        'Environmental protection',
        'Pollution monitoring',
        'Sustainability insights',
        'Climate analysis'
      ]
    },
    {
      id: 41,
      name: 'AI Personal Shopper',
      description: 'AI-powered personal shopping assistant with style analysis, product recommendations, and purchase optimization',
      icon: ShoppingCart,
      features: [
        'Style Analysis',
        'Product Recommendations',
        'Price Comparison',
        'Size Fitting',
        'Trend Analysis',
        'Wardrobe Integration',
        'Purchase Optimization',
        'Shopping Lists'
      ],
      category: 'Retail AI',
      popular: true,
      rating: 4.6,
      users: '3,600+',
      color: 'from-pink-500 to-rose-600',
      pricing: 'Starting at $149/mo',
      capabilities: [
        'Personalized shopping',
        'Style optimization',
        'Price optimization',
        'Wardrobe efficiency'
      ]
    },
    {
      id: 42,
      name: 'AI Personal Learning Coach',
      description: 'AI-powered personalized learning with adaptive curriculum, skill assessment, and learning optimization',
      icon: BookOpen,
      features: [
        'Adaptive Curriculum',
        'Skill Assessment',
        'Learning Optimization',
        'Progress Tracking',
        'Personalized Content',
        'Learning Analytics',
        'Knowledge Gaps',
        'Learning Paths'
      ],
      category: 'Education AI',
      popular: true,
      rating: 4.8,
      users: '6,800+',
      color: 'from-blue-500 to-indigo-600',
      pricing: 'Starting at $179/mo',
      capabilities: [
        'Personalized learning',
        'Skill development',
        'Learning optimization',
        'Knowledge retention'
      ]
    },
    {
      id: 43,
      name: 'AI Personal Relationship Coach',
      description: 'AI-powered relationship coaching with communication analysis, conflict resolution, and relationship optimization',
      icon: Users,
      features: [
        'Communication Analysis',
        'Conflict Resolution',
        'Relationship Optimization',
        'Emotional Intelligence',
        'Communication Training',
        'Relationship Analytics',
        'Couples Therapy',
        'Social Skills'
      ],
      category: 'Relationship AI',
      popular: true,
      rating: 4.7,
      users: '2,200+',
      color: 'from-pink-500 to-purple-600',
      pricing: 'Starting at $299/mo',
      capabilities: [
        'Relationship improvement',
        'Communication enhancement',
        'Conflict resolution',
        'Emotional intelligence'
      ]
    },
    {
      id: 44,
      name: 'AI Personal Time Management',
      description: 'AI-powered time management with productivity analysis, schedule optimization, and focus enhancement',
      icon: Clock,
      features: [
        'Productivity Analysis',
        'Schedule Optimization',
        'Focus Enhancement',
        'Time Tracking',
        'Distraction Management',
        'Energy Optimization',
        'Goal Setting',
        'Habit Formation'
      ],
      category: 'Productivity AI',
      popular: true,
      rating: 4.8,
      users: '4,900+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $129/mo',
      capabilities: [
        'Productivity optimization',
        'Time management',
        'Focus enhancement',
        'Goal achievement'
      ]
    },
    {
      id: 45,
      name: 'AI Personal Memory Assistant',
      description: 'AI-powered memory enhancement with information organization, recall optimization, and knowledge management',
      icon: Brain,
      features: [
        'Information Organization',
        'Recall Optimization',
        'Knowledge Management',
        'Memory Training',
        'Information Retrieval',
        'Learning Reinforcement',
        'Memory Analytics',
        'Cognitive Enhancement'
      ],
      category: 'Cognitive AI',
      popular: true,
      rating: 4.7,
      users: '3,100+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $199/mo',
      capabilities: [
        'Memory enhancement',
        'Information organization',
        'Recall improvement',
        'Cognitive optimization'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
      users: '300+',
      price: 'Starting at $15,000/month',
      color: 'from-gray-500 to-slate-600',
      capabilities: [
        '80% faster legal research',
        'Automated document analysis',
        'Real-time case law updates',
        'Predictive legal outcomes'
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-453e
=======
        'Security Analytics'
      ],
      category: 'Security',
      popular: true,
      rating: 4.7,
      users: '2,100+',
      color: 'from-red-500 to-orange-600',
      capabilities: [
        '99.9% threat detection accuracy',
        'Real-time security monitoring',
        'Automated incident response',
        'Predictive security analytics'
      ]
    },
    {
      id: 4,
      name: 'AI Customer Support',
      description: 'Intelligent customer support solutions with natural language processing',
      icon: Users,
      features: [
        'Chatbot Integration',
        'Sentiment Analysis',
        'Automated Responses',
        'Customer Insights'
      ],
      category: 'Customer Support',
      popular: true,
      rating: 4.6,
      users: '4,500+',
      color: 'from-green-500 to-emerald-600',
      capabilities: [
        '90% faster response times',
        '24/7 customer support',
        'Multilingual support',
        'Intelligent ticket routing'
      ]
    },
    {
      id: 5,
      name: 'AI Document Processing',
      description: 'Intelligent document processing and data extraction with OCR and NLP',
      icon: FileText,
      features: [
        'OCR Processing',
        'Data Extraction',
        'Document Classification',
        'Automated Workflows'
      ],
      category: 'Document Processing',
      popular: false,
      rating: 4.7,
      users: '1,800+',
      color: 'from-indigo-500 to-purple-600',
      capabilities: [
        '95% accuracy in data extraction',
        'Automated document processing',
        'Multi-format support',
        'Intelligent classification'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
      ]
=======

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, FlaskConical, Globe, Rocket, Shield, Truck, Zap, Scale, Stethoscope, Search, CheckCircle, ArrowRight, Star, Users, Clock, DollarSign, Award, MessageSquare, Phone, MapPin, Calendar, BarChart, Cpu, Database, Lock, Target, TrendingUp, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

interface AIService {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    setup?: number;
  };
  category: string;
  icon: string;
  popular?: boolean;
  link: string;
  trial: string;
  roi: string;
  color: string;
  bgColor: string;
}

const aiServices: AIService[] = [
  // Healthcare & Life Sciences
  {
    id: 'ai-drug-discovery-pro',
    name: 'AI Drug Discovery Pro',
    description: 'Revolutionize pharmaceutical research with AI-powered drug discovery and development.',
    features: [
      'AI-Powered Molecular Design',
      'Drug-Target Interaction Prediction',
      'Toxicity and Safety Assessment',
      'Clinical Trial Optimization',
      'Real-time Drug Repurposing',
      'Patent Landscape Analysis'
    ],
    pricing: { monthly: 4500, yearly: 45000, setup: 0 },
    category: 'Healthcare',
    icon: '🧬',
    popular: true,
    link: '/ai-drug-discovery-pro',
    trial: '30-day free trial',
    roi: '1000% ROI in 2 years',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },
  {
    id: 'ai-healthcare-solutions',
    name: 'AI Healthcare Solutions',
    description: 'Transform healthcare delivery with AI-powered diagnostics, treatment planning, and patient care.',
    features: [
      'Medical Image Analysis',
      'Diagnostic Assistance',
      'Treatment Recommendations',
      'Patient Risk Assessment',
      'Drug Interaction Checking',
      'Clinical Decision Support'
    ],
    pricing: { monthly: 2500, yearly: 25000, setup: 0 },
    category: 'Healthcare',
    icon: '🏥',
    popular: true,
    link: '/ai-healthcare-solutions',
    trial: '14-day free trial',
    roi: '400% ROI in 1 year',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },

  // Climate & Environment
  {
    id: 'ai-climate-solutions-pro',
    name: 'AI Climate Solutions Pro',
    description: 'Combat climate change with AI-powered environmental solutions and sustainability optimization.',
    features: [
      'Carbon Footprint Analysis',
      'Renewable Energy Optimization',
      'Climate Risk Assessment',
      'Sustainable Supply Chain',
      'Green Building Design',
      'Emission Reduction Planning'
    ],
    pricing: { monthly: 3200, yearly: 32000, setup: 0 },
    category: 'Environment',
    icon: '🌍',
    popular: true,
    link: '/ai-climate-solutions-pro',
    trial: '21-day free trial',
    roi: '500% ROI in 18 months',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },

  // Space & Aerospace
  {
    id: 'ai-space-technology-pro',
    name: 'AI Space Technology Pro',
    description: 'Advance space exploration with AI-powered satellite management and space mission optimization.',
    features: [
      'Satellite Constellation Management',
      'Space Mission Planning',
      'Orbital Debris Tracking',
      'Space Weather Prediction',
      'Autonomous Spacecraft Control',
      'Deep Space Communication'
    ],
    pricing: { monthly: 5500, yearly: 55000, setup: 0 },
    category: 'Aerospace',
    icon: '🚀',
    popular: false,
    link: '/ai-space-technology-pro',
    trial: '30-day free trial',
    roi: '800% ROI in 3 years',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  },

  // Financial Services
  {
    id: 'ai-financial-crime-detection-pro',
    name: 'AI Financial Crime Detection Pro',
    description: 'Protect financial institutions with AI-powered fraud detection and anti-money laundering.',
    features: [
      'Real-time Fraud Detection',
      'Money Laundering Prevention',
      'Transaction Pattern Analysis',
      'Risk Scoring',
      'Compliance Monitoring',
      'Suspicious Activity Reporting'
    ],
    pricing: { monthly: 2800, yearly: 28000, setup: 0 },
    category: 'Finance',
    icon: '🛡️',
    popular: true,
    link: '/ai-financial-crime-detection-pro',
    trial: '14-day free trial',
    roi: '600% ROI in 1 year',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10'
  },

  // Supply Chain & Logistics
  {
    id: 'ai-supply-chain-optimization-pro',
    name: 'AI Supply Chain Optimization Pro',
    description: 'Optimize supply chain operations with AI-powered demand forecasting and logistics management.',
    features: [
      'Demand Forecasting',
      'Inventory Optimization',
      'Route Planning',
      'Supplier Risk Assessment',
      'Quality Control',
      'Cost Optimization'
    ],
    pricing: { monthly: 2200, yearly: 22000, setup: 0 },
    category: 'Logistics',
    icon: '🚛',
    popular: false,
    link: '/ai-supply-chain-optimization-pro',
    trial: '21-day free trial',
    roi: '350% ROI in 8 months',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10'
  },

  // Energy & Utilities
  {
    id: 'ai-energy-grid-management-pro',
    name: 'AI Energy Grid Management Pro',
    description: 'Optimize energy distribution and consumption with AI-powered smart grid management.',
    features: [
      'Smart Grid Optimization',
      'Energy Load Balancing',
      'Renewable Integration',
      'Predictive Maintenance',
      'Demand Response',
      'Grid Stability Analysis'
    ],
    pricing: { monthly: 3500, yearly: 35000, setup: 0 },
    category: 'Energy',
    icon: '⚡',
    popular: false,
    link: '/ai-energy-grid-management-pro',
    trial: '30-day free trial',
    roi: '450% ROI in 15 months',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10'
  },

  // Agriculture & Food
  {
    id: 'ai-agricultural-intelligence-pro',
    name: 'AI Agricultural Intelligence Pro',
    description: 'Revolutionize farming with AI-powered precision agriculture and crop optimization.',
    features: [
      'Precision Farming',
      'Crop Yield Prediction',
      'Soil Analysis',
      'Pest Detection',
      'Irrigation Optimization',
      'Weather Forecasting'
    ],
    pricing: { monthly: 1800, yearly: 18000, setup: 0 },
    category: 'Agriculture',
    icon: '🌾',
    popular: false,
    link: '/ai-agricultural-intelligence-pro',
    trial: '14-day free trial',
    roi: '300% ROI in 6 months',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },

  // Legal & Compliance
  {
    id: 'ai-legal-research-pro',
    name: 'AI Legal Research Pro',
    description: 'Accelerate legal research and case analysis with AI-powered legal intelligence.',
    features: [
      'Case Law Research',
      'Document Analysis',
      'Contract Review',
      'Legal Precedent Finding',
      'Compliance Checking',
      'Risk Assessment'
    ],
    pricing: { monthly: 2500, yearly: 25000, setup: 0 },
    category: 'Legal',
    icon: '⚖️',
    popular: false,
    link: '/ai-legal-research-pro',
    trial: '21-day free trial',
    roi: '400% ROI in 10 months',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10'
  }
];

const categories = [
  'All',
  'Healthcare',
  'Environment',
  'Aerospace',
  'Finance',
  'Logistics',
  'Energy',
  'Agriculture',
  'Legal'
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Proven ROI',
    description: 'Our AI services deliver an average ROI of 400% within 12 months',
    stat: '400%'
  },
  {
    icon: Clock,
    title: 'Rapid Deployment',
    description: 'Get up and running in 30 days with our streamlined implementation',
    stat: '30 days'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with 99.99% uptime guarantee',
    stat: '99.99%'
  },
  {
    icon: Award,
    title: 'Industry Leading',
    description: 'Trusted by Fortune 500 companies worldwide',
    stat: '500+'
  }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(aiServices);

  React.useEffect(() => {
    let filtered = aiServices;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm]);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const categories = ['All', 'Analytics', 'Automation', 'Security', 'Document Processing', 'Customer Experience', 'Content Creation', 'Industrial AI', 'Financial AI', 'Healthcare AI', 'Supply Chain', 'Quantum Computing', 'Advanced AI', 'Immersive Technology', 'Climate Tech', 'Pharmaceutical AI', 'Fashion Tech', 'Creative AI', 'Energy Tech', 'Autonomous Systems', 'Blockchain AI'];
=======
  const categories = ['All', 'Analytics', 'Automation', 'Security', 'Document Processing', 'Customer Experience', 'Content Creation', 'Industrial AI', 'Financial AI', 'Healthcare AI', 'Supply Chain', 'Quantum Computing', 'Advanced AI', 'Immersive Technology', 'Climate Tech', 'Pharmaceutical AI', 'Fashion Tech', 'Creative AI', 'Energy Tech', 'Autonomous Systems', 'Blockchain AI', 'Cognitive AI', 'AI Development', 'Quantum ML', 'Space Technology', 'Scientific AI', 'Data Visualization', 'Quantum Security', 'Neural Interface', 'Quantum Optimization', 'Immersive Learning', 'Quantum AI', 'Immersive Workspace'];
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-c63e
=======
  const categories = ['All', 'Analytics', 'Automation', 'Security', 'Document Processing', 'Customer Experience', 'Content Creation', 'Industrial AI', 'Financial AI', 'Healthcare AI', 'Supply Chain', 'Quantum Computing', 'Autonomous Systems', 'Space Technology', 'Environmental AI', 'Pharmaceutical AI'];
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-32a7
=======
  const categories = ['All', 'Analytics', 'Automation', 'Security', 'Document Processing', 'Customer Experience', 'Content Creation', 'Industrial AI', 'Financial AI', 'Healthcare AI', 'Supply Chain', 'Quantum Computing', 'Advanced AI', 'Immersive Technology', 'Climate Tech', 'Pharmaceutical AI', 'Fashion Tech', 'Creative AI', 'Energy Tech', 'Autonomous Systems', 'Blockchain AI', 'Cognitive AI', 'AI Development', 'Quantum ML', 'Space Technology', 'Scientific AI', 'Data Visualization', 'Quantum Security', 'Neural Interface', 'Quantum Optimization', 'Immersive Learning', 'Quantum AI', 'Immersive Workspace'];
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-deac
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
  const categories = ['All', 'Healthcare', 'Environment', 'Space', 'Finance', 'Logistics', 'Energy', 'Agriculture', 'Legal'];
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-453e
=======
        'Multi-language support'
      ],
      price: 'Starting at $79/mo'
    }
  ];
=======
=======

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Zap, Shield, Cloud, Database, BarChart3, Users, 
  MessageSquare, Target, FileText, Video, Image, Code, 
  Settings, Globe, Smartphone, Monitor, Headphones, 
  Camera, Printer, HardDrive, Cpu, MemoryStick, Wrench, 
  Bell, Heart, ThumbsUp, Share2, Download, Upload, 
  Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, 
  Info, HelpCircle, ExternalLink, Bot, Layers, BarChart, 
  PieChart, LineChart, Activity, Sparkles, Atom, 
  DollarSign, Award, Phone, Mail, MapPin, Clock, 
  ArrowRight, Star, TrendingUp, CheckCircle, Calendar,
  Search, Lock, Wifi, Truck, ChefHat, Rocket, Sprout, Scale,
  Stethoscope, GraduationCap, Briefcase, Hammer, Paintbrush,
  Scissors, BookOpen, Calculator, Compass, Navigation as NavIcon,
  TrendingDown, Activity as ActivityIcon, Zap as Lightning,
  Target as Crosshair, Shield as Security, Users as People,
  Star as StarIcon, CheckCircle as CheckIcon, ArrowRight as Arrow,
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

interface AIService {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    setup?: number;
  };
  category: string;
  icon: React.ComponentType<any>;
  popular?: boolean;
  comingSoon?: boolean;
  link: string;
  trial: string;
  roi: string;
  useCases: string[];
  industries: string[];
}

const aiServices: AIService[] = [
  // AI-Powered Business Intelligence
  {
    id: 'ai-business-intelligence',
    name: 'AI Business Intelligence Pro',
    description: 'Transform your data into actionable insights with AI-powered analytics, predictive modeling, and automated reporting.',
    features: [
      'Natural language queries',
      'Automated report generation',
      'Predictive analytics',
      'Real-time dashboards',
      'Data visualization',
      'Anomaly detection',
      'Custom KPI tracking',
      'API integrations'
    ],
    pricing: { monthly: 499, yearly: 4990, setup: 999 },
    category: 'Analytics',
    icon: BarChart3,
    popular: true,
    link: 'https://ziontechgroup.com/ai-business-intelligence',
    trial: '14-day free trial',
    roi: '400% ROI in 6 months',
    useCases: ['Financial forecasting', 'Market analysis', 'Performance optimization', 'Risk assessment'],
    industries: ['Finance', 'Retail', 'Healthcare', 'Manufacturing']
  },
  {
    id: 'ai-predictive-analytics',
    name: 'AI Predictive Analytics Pro',
    description: 'Forecast future trends and behaviors with advanced machine learning models and statistical analysis.',
    features: [
      'Time series forecasting',
      'Customer behavior prediction',
      'Demand forecasting',
      'Risk modeling',
      'Churn prediction',
      'Price optimization',
      'Inventory management',
      'Market trend analysis'
    ],
    pricing: { monthly: 399, yearly: 3990, setup: 799 },
    category: 'Analytics',
    icon: TrendingUp,
    popular: true,
    link: 'https://ziontechgroup.com/ai-predictive-analytics',
    trial: '14-day free trial',
    roi: '350% ROI in 5 months',
    useCases: ['Sales forecasting', 'Customer lifetime value', 'Inventory optimization', 'Risk management'],
    industries: ['E-commerce', 'Finance', 'Supply Chain', 'Insurance']
  },

  // AI Content & Marketing
  {
    id: 'ai-content-generation',
    name: 'AI Content Generation Pro',
    description: 'Create high-quality content at scale with AI-powered writing, editing, and optimization tools.',
    features: [
      'GPT-4 powered content generation',
      'SEO optimization suggestions',
      'Multiple content formats',
      'Brand voice customization',
      'Plagiarism detection',
      'Content calendar integration',
      'Multi-language support',
      'Team collaboration tools'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 0 },
    category: 'Content',
    icon: FileText,
    popular: true,
    link: 'https://ziontechgroup.com/ai-content-generation',
    trial: '7-day free trial',
    roi: '250% ROI in 3 months',
    useCases: ['Blog writing', 'Social media content', 'Email campaigns', 'Product descriptions'],
    industries: ['Marketing', 'E-commerce', 'Publishing', 'Education']
  },
  {
    id: 'ai-video-generation',
    name: 'AI Video Generator Pro',
    description: 'Create professional videos from text prompts with AI-powered video generation and editing.',
    features: [
      'Text-to-video generation',
      'Multiple video styles',
      'Voice synthesis',
      'Background music',
      'Subtitle generation',
      'Brand customization',
      'Batch processing',
      'HD export options'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 499 },
    category: 'Content',
    icon: Video,
    popular: true,
    link: 'https://ziontechgroup.com/ai-video-generator',
    trial: '7-day free trial',
    roi: '300% ROI in 4 months',
    useCases: ['Marketing videos', 'Training content', 'Social media posts', 'Product demos'],
    industries: ['Marketing', 'Education', 'Entertainment', 'Corporate']
  },
  {
    id: 'ai-image-generation',
    name: 'AI Image Generator Pro',
    description: 'Generate stunning images, logos, and graphics using advanced AI technology and custom style training.',
    features: [
      'DALL-E 3 integration',
      'Custom style training',
      'High-resolution output',
      'Batch processing',
      'Commercial license included',
      'API access',
      'Brand consistency tools',
      'Stock photo replacement'
    ],
    pricing: { monthly: 149, yearly: 1490, setup: 0 },
    category: 'Content',
    icon: Image,
    popular: false,
    link: 'https://ziontechgroup.com/ai-image-generator',
    trial: '7-day free trial',
    roi: '200% ROI in 2 months',
    useCases: ['Marketing materials', 'Website graphics', 'Social media images', 'Product photos'],
    industries: ['Design', 'Marketing', 'E-commerce', 'Publishing']
  },

  // AI Customer Experience
  {
    id: 'ai-customer-support',
    name: 'AI Customer Support Pro',
    description: '24/7 intelligent customer support with natural language processing, sentiment analysis, and escalation management.',
    features: [
      '24/7 availability',
      'Multi-language support',
      'Sentiment analysis',
      'Escalation management',
      'Knowledge base integration',
      'Voice and text support',
      'A/B testing capabilities',
      'Custom integrations'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 499 },
    category: 'Customer Support',
    icon: MessageSquare,
    popular: true,
    link: 'https://ziontechgroup.com/ai-customer-support',
    trial: '14-day free trial',
    roi: '350% ROI in 5 months',
    useCases: ['FAQ automation', 'Ticket routing', 'Live chat support', 'Voice assistance'],
    industries: ['E-commerce', 'SaaS', 'Healthcare', 'Financial Services']
  },
  {
    id: 'ai-chatbot-builder',
    name: 'AI Chatbot Builder Pro',
    description: 'Create intelligent chatbots for customer support, sales, and lead generation without coding.',
    features: [
      'Drag-and-drop chatbot builder',
      'Natural language processing',
      'Multi-channel deployment',
      'Analytics and insights',
      'Custom integrations',
      'Voice and text support',
      'A/B testing capabilities',
      '24/7 customer support'
    ],
    pricing: { monthly: 99, yearly: 990, setup: 199 },
    category: 'Customer Support',
    icon: Bot,
    popular: false,
    link: 'https://ziontechgroup.com/ai-chatbot-builder',
    trial: '7-day free trial',
    roi: '150% ROI in 2 months',
    useCases: ['Lead qualification', 'Customer onboarding', 'Support automation', 'Sales assistance'],
    industries: ['E-commerce', 'SaaS', 'Real Estate', 'Healthcare']
  },

  // AI Sales & Marketing
  {
    id: 'ai-sales-automation',
    name: 'AI Sales Automation Pro',
    description: 'Automate your sales process with AI-powered lead scoring, email sequences, and pipeline management.',
    features: [
      'Lead scoring automation',
      'Email sequence optimization',
      'Pipeline management',
      'Sales forecasting',
      'Follow-up automation',
      'CRM integration',
      'Performance analytics',
      'Custom workflows'
    ],
    pricing: { monthly: 249, yearly: 2490, setup: 399 },
    category: 'Sales',
    icon: Target,
    popular: true,
    link: 'https://ziontechgroup.com/ai-sales-automation',
    trial: '14-day free trial',
    roi: '300% ROI in 4 months',
    useCases: ['Lead qualification', 'Email campaigns', 'Pipeline optimization', 'Sales forecasting'],
    industries: ['B2B Sales', 'Real Estate', 'Insurance', 'Financial Services']
  },
  {
    id: 'ai-email-marketing',
    name: 'AI Email Marketing Pro',
    description: 'Intelligent email campaigns with AI-powered personalization, A/B testing, and performance optimization.',
    features: [
      'AI-powered subject line optimization',
      'Dynamic content personalization',
      'Send time optimization',
      'A/B testing automation',
      'Advanced segmentation',
      'Deliverability monitoring',
      'Revenue attribution',
      'Unlimited sends'
    ],
    pricing: { monthly: 179, yearly: 1790, setup: 0 },
    category: 'Marketing',
    icon: Mail,
    popular: false,
    link: 'https://ziontechgroup.com/ai-email-marketing',
    trial: '7-day free trial',
    roi: '200% ROI in 2 months',
    useCases: ['Newsletter campaigns', 'Product promotions', 'Customer retention', 'Lead nurturing'],
    industries: ['E-commerce', 'SaaS', 'Education', 'Healthcare']
  },

  // AI Development & Technical
  {
    id: 'ai-code-assistant',
    name: 'AI Code Assistant Pro',
    description: 'Accelerate development with AI-powered code generation, review, optimization, and security scanning.',
    features: [
      'Code generation',
      'Bug detection',
      'Performance optimization',
      'Code review automation',
      'Documentation generation',
      'Test case creation',
      'Security scanning',
      'Multi-language support'
    ],
    pricing: { monthly: 149, yearly: 1490, setup: 199 },
    category: 'Development',
    icon: Code,
    popular: false,
    link: 'https://ziontechgroup.com/ai-code-assistant',
    trial: '7-day free trial',
    roi: '250% ROI in 3 months',
    useCases: ['Code generation', 'Bug fixing', 'Code review', 'Documentation'],
    industries: ['Software Development', 'Fintech', 'E-commerce', 'SaaS']
  },
  {
    id: 'ai-api-management',
    name: 'AI API Management Pro',
    description: 'Intelligent API management with monitoring, optimization, security, and automated documentation generation.',
    features: [
      'API monitoring',
      'Performance optimization',
      'Security management',
      'Documentation generation',
      'Rate limiting',
      'Analytics dashboard',
      'Integration testing',
      'Version control'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 299 },
    category: 'Development',
    icon: Cloud,
    popular: false,
    link: 'https://ziontechgroup.com/ai-api-management',
    trial: '7-day free trial',
    roi: '200% ROI in 3 months',
    useCases: ['API monitoring', 'Performance optimization', 'Security management', 'Documentation'],
    industries: ['SaaS', 'Fintech', 'E-commerce', 'IoT']
  },

  // AI Security & Compliance
  {
    id: 'ai-cybersecurity',
    name: 'AI Cybersecurity Pro',
    description: 'Protect your business with AI-powered threat detection, security monitoring, and automated incident response.',
    features: [
      'Real-time threat detection',
      'Anomaly identification',
      'Automated incident response',
      'Compliance monitoring',
      'Vulnerability scanning',
      'Security reporting',
      'Team notifications',
      'Integration with security tools'
    ],
    pricing: { monthly: 399, yearly: 3990, setup: 799 },
    category: 'Security',
    icon: Shield,
    popular: true,
    link: 'https://ziontechgroup.com/ai-cybersecurity',
    trial: '14-day free trial',
    roi: '400% ROI in 6 months',
    useCases: ['Threat detection', 'Incident response', 'Compliance monitoring', 'Vulnerability management'],
    industries: ['Financial Services', 'Healthcare', 'Government', 'E-commerce']
  },
  {
    id: 'ai-fraud-detection',
    name: 'AI Fraud Detection Pro',
    description: 'Detect and prevent fraudulent activities with AI-powered pattern recognition and real-time monitoring.',
    features: [
      'Real-time fraud detection',
      'Pattern recognition',
      'Risk scoring',
      'Transaction monitoring',
      'Behavioral analysis',
      'Alert management',
      'False positive reduction',
      'Integration APIs'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 599 },
    category: 'Security',
    icon: Lock,
    popular: false,
    link: 'https://ziontechgroup.com/ai-fraud-detection',
    trial: '14-day free trial',
    roi: '350% ROI in 5 months',
    useCases: ['Payment fraud', 'Identity theft', 'Account takeover', 'Transaction monitoring'],
    industries: ['Financial Services', 'E-commerce', 'Insurance', 'Gaming']
  },

  // AI Healthcare & Life Sciences
  {
    id: 'ai-healthcare',
    name: 'AI Healthcare Pro',
    description: 'Revolutionize healthcare with AI-powered diagnostics, treatment recommendations, and patient monitoring.',
    features: [
      'Medical image analysis',
      'Diagnostic assistance',
      'Treatment recommendations',
      'Patient monitoring',
      'Drug discovery support',
      'Clinical trial optimization',
      'Electronic health records',
      'HIPAA compliance'
    ],
    pricing: { monthly: 999, yearly: 9990, setup: 1999 },
    category: 'Healthcare',
    icon: Stethoscope,
    popular: true,
    link: 'https://ziontechgroup.com/ai-healthcare',
    trial: '30-day free trial',
    roi: '500% ROI in 12 months',
    useCases: ['Medical imaging', 'Diagnosis support', 'Treatment planning', 'Patient monitoring'],
    industries: ['Hospitals', 'Clinics', 'Pharmaceuticals', 'Medical Devices']
  },
  {
    id: 'ai-drug-discovery',
    name: 'AI Drug Discovery Pro',
    description: 'Accelerate drug discovery with AI-powered molecular analysis, compound screening, and clinical trial optimization.',
    features: [
      'Molecular analysis',
      'Compound screening',
      'Clinical trial optimization',
      'Drug interaction prediction',
      'Side effect analysis',
      'Patent analysis',
      'Regulatory compliance',
      'Research collaboration'
    ],
    pricing: { monthly: 1999, yearly: 19990, setup: 4999 },
    category: 'Healthcare',
    icon: Atom,
    popular: false,
    link: 'https://ziontechgroup.com/ai-drug-discovery',
    trial: '60-day free trial',
    roi: '1000% ROI in 24 months',
    useCases: ['Drug development', 'Clinical trials', 'Molecular research', 'Patent analysis'],
    industries: ['Pharmaceuticals', 'Biotech', 'Research Institutions', 'Medical Devices']
  },

  // AI Financial Services
  {
    id: 'ai-fintech',
    name: 'AI Fintech Pro',
    description: 'Transform financial services with AI-powered risk assessment, algorithmic trading, and fraud prevention.',
    features: [
      'Risk assessment',
      'Algorithmic trading',
      'Fraud prevention',
      'Credit scoring',
      'Portfolio optimization',
      'Regulatory compliance',
      'Real-time monitoring',
      'API integrations'
    ],
    pricing: { monthly: 799, yearly: 7990, setup: 1499 },
    category: 'Finance',
    icon: DollarSign,
    popular: true,
    link: 'https://ziontechgroup.com/ai-fintech',
    trial: '14-day free trial',
    roi: '400% ROI in 6 months',
    useCases: ['Risk management', 'Algorithmic trading', 'Credit assessment', 'Portfolio management'],
    industries: ['Banks', 'Investment Firms', 'Insurance', 'Fintech Startups']
  },
  {
    id: 'ai-insurance',
    name: 'AI Insurance Pro',
    description: 'Streamline insurance operations with AI-powered claims processing, risk assessment, and fraud detection.',
    features: [
      'Claims processing automation',
      'Risk assessment',
      'Fraud detection',
      'Policy optimization',
      'Customer service automation',
      'Underwriting support',
      'Regulatory compliance',
      'Analytics dashboard'
    ],
    pricing: { monthly: 599, yearly: 5990, setup: 1199 },
    category: 'Finance',
    icon: Scale,
    popular: false,
    link: 'https://ziontechgroup.com/ai-insurance',
    trial: '14-day free trial',
    roi: '300% ROI in 5 months',
    useCases: ['Claims processing', 'Risk assessment', 'Fraud detection', 'Policy optimization'],
    industries: ['Insurance', 'Reinsurance', 'Brokers', 'Risk Management']
  },

  // AI Manufacturing & Industrial
  {
    id: 'ai-manufacturing',
    name: 'AI Manufacturing Pro',
    description: 'Optimize manufacturing processes with AI-powered predictive maintenance, quality control, and supply chain management.',
    features: [
      'Predictive maintenance',
      'Quality control automation',
      'Supply chain optimization',
      'Production planning',
      'Defect detection',
      'Energy optimization',
      'Safety monitoring',
      'IoT integration'
    ],
    pricing: { monthly: 699, yearly: 6990, setup: 1399 },
    category: 'Manufacturing',
    icon: Factory,
    popular: true,
    link: 'https://ziontechgroup.com/ai-manufacturing',
    trial: '14-day free trial',
    roi: '350% ROI in 6 months',
    useCases: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Production planning'],
    industries: ['Automotive', 'Electronics', 'Food & Beverage', 'Pharmaceuticals']
  },
  {
    id: 'ai-supply-chain',
    name: 'AI Supply Chain Pro',
    description: 'Optimize supply chain operations with AI-powered demand forecasting, inventory management, and logistics optimization.',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Logistics optimization',
      'Supplier management',
      'Risk assessment',
      'Cost optimization',
      'Real-time tracking',
      'Integration APIs'
    ],
    pricing: { monthly: 499, yearly: 4990, setup: 999 },
    category: 'Manufacturing',
    icon: Truck,
    popular: false,
    link: 'https://ziontechgroup.com/ai-supply-chain',
    trial: '14-day free trial',
    roi: '300% ROI in 4 months',
    useCases: ['Demand forecasting', 'Inventory management', 'Logistics optimization', 'Supplier management'],
    industries: ['Retail', 'Manufacturing', 'Logistics', 'E-commerce']
  }
];

const categories = [
  'All',
  'Analytics',
  'Content',
  'Customer Support',
  'Sales',
  'Marketing',
  'Development',
  'Security',
  'Healthcare',
  'Finance',
  'Manufacturing'
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Proven ROI',
    description: 'Our AI solutions deliver an average ROI of 300% within 6 months',
    stat: '300%'
  },
  {
    icon: Clock,
    title: 'Quick Implementation',
    description: 'Get up and running in under 48 hours with our streamlined setup',
    stat: '48h'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with 99.9% uptime guarantee and data encryption',
    stat: '99.9%'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: '24/7 support from our team of AI and industry experts',
    stat: '24/7'
  }
];

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    company: 'MedTech Solutions',
    role: 'CTO',
    content: 'AI Healthcare Pro revolutionized our diagnostic capabilities. We saw a 400% improvement in diagnostic accuracy within 3 months.',
    rating: 5,
    avatar: '/images/testimonials/sarah-chen.jpg'
  },
  {
    name: 'Michael Rodriguez',
    company: 'FinTech Innovations',
    role: 'CEO',
    content: 'The AI Fintech solution transformed our risk assessment process. We reduced false positives by 60% and improved accuracy by 80%.',
    rating: 5,
    avatar: '/images/testimonials/michael-rodriguez.jpg'
  },
  {
    name: 'Emily Johnson',
    company: 'Manufacturing Corp',
    role: 'Operations Director',
    content: 'AI Manufacturing Pro helped us reduce downtime by 45% and improve quality control by 70%. The ROI was evident within 2 months.',
    rating: 5,
    avatar: '/images/testimonials/emily-johnson.jpg'
  }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(aiServices);

  useEffect(() => {
    let filtered = aiServices;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase())) ||
        service.useCases.some(useCase => useCase.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm]);

>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
=======
'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp, 
  Globe, 
  Smartphone, 
  Database, 
  BarChart3, 
  Mail, 
  Calendar, 
  FileText, 
  Image, 
  Video, 
  Music, 
  Code, 
  Palette, 
  Search, 
  Lock, 
  Cloud, 
  Wifi, 
  Monitor, 
  Headphones, 
  Camera, 
  Printer, 
  HardDrive, 
  Cpu, 
  MemoryStick, 
  Wrench, 
  Settings, 
  Bell, 
  Heart, 
  ThumbsUp, 
  Share2, 
  Download, 
  Upload, 
  Eye, 
  Edit, 
  Trash2, 
  Plus, 
  Minus, 
  X, 
  Check, 
  AlertCircle, 
  Info, 
  HelpCircle, 
  ExternalLink, 
  Brain, 
  Cpu as CpuIcon, 
  Bot, 
  Target, 
  Layers, 
  BarChart, 
  PieChart, 
  LineChart, 
  Activity, 
  Zap as ZapIcon, 
  Sparkles, 
  Atom, 
  Cpu as CpuIcon2,
  Phone,
  MapPin,
  Rocket,
  Award,
  Filter,
  Play,
  Download as DownloadIcon,
  Share2 as ShareIcon,
  Heart as HeartIcon,
  Eye as EyeIcon,
  ThumbsUp as ThumbsUpIcon
} from 'lucide-react';
import { aiServices, aiServiceCategories } from '../../src/data/aiServicesData';

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(aiServices);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  useEffect(() => {
    let filtered = aiServices;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm]);

>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-05c4
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d

  const categories = ['All', 'Marketing', 'Automation', 'Security', 'Document Processing', 'Customer Service', 'Content'];
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 cyber-grid-enhanced quantum-particles">
=======
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Globe, Smartphone, Database, BarChart3, Mail, Calendar, FileText, Image, Video, Music, Code, Palette, Search, Lock, Cloud, Wifi, Monitor, Headphones, Camera, Printer, HardDrive, Cpu, MemoryStick, Wrench, Settings, Bell, Heart, ThumbsUp, Share2, Download, Upload, Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Brain, Bot, Target, Layers, BarChart, PieChart, LineChart, Activity, Sparkles, Atom } from 'lucide-react';

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
    users: '2,500+',
    color: 'from-green-500 to-teal-600',
    capabilities: [
      'Generate 1000+ articles daily',
      'Support for 50+ languages',
      'SEO score optimization',
      'Brand consistency maintenance'
    ]
  },
  {
    id: 3,
    name: 'AI Customer Support Automation',
    description: 'Intelligent customer service solution with natural language processing',
    price: '$1,299/month',
    features: [
      '24/7 Chatbot Support',
      'Multi-Channel Integration',
      'Sentiment Analysis',
      'Ticket Routing & Prioritization',
      'Knowledge Base Management',
      'Live Agent Handoff',
      'Performance Analytics',
      'Custom Training & Optimization'
    ],
    icon: <Users className="w-8 h-8" />,
    category: 'Customer Service',
    popular: false,
    rating: 4.7,
    users: '800+',
    color: 'from-orange-500 to-red-600',
    capabilities: [
      'Handle 10,000+ queries daily',
      '95% first-contact resolution',
      'Multi-language support',
      'Real-time sentiment tracking'
    ]
  },
  {
    id: 4,
    name: 'AI Cybersecurity Monitoring',
    description: 'Advanced threat detection and prevention system powered by machine learning',
    price: '$3,999/month',
    features: [
      'Real-time Threat Detection',
      'Behavioral Analysis',
      'Automated Incident Response',
      'Vulnerability Assessment',
      'Compliance Monitoring',
      'Security Analytics Dashboard',
      'Threat Intelligence Integration',
      'Custom Security Policies'
    ],
    icon: <Shield className="w-8 h-8" />,
    category: 'Security',
    popular: true,
    rating: 4.9,
    users: '500+',
    color: 'from-red-500 to-pink-600',
    capabilities: [
      'Detect 99.8% of threats',
      'Response time under 30 seconds',
      'Zero false positives',
      'Continuous learning adaptation'
    ]
  },
  {
    id: 5,
    name: 'AI Marketing Automation',
    description: 'Complete marketing automation platform with AI-driven personalization',
    price: '$1,599/month',
    features: [
      'Email Campaign Automation',
      'Social Media Management',
      'Lead Scoring & Nurturing',
      'A/B Testing Optimization',
      'Customer Journey Mapping',
      'ROI Analytics & Reporting',
      'Cross-Channel Integration',
      'Predictive Customer Insights'
    ],
    icon: <TrendingUp className="w-8 h-8" />,
    category: 'Marketing',
    popular: false,
    rating: 4.6,
    users: '1,800+',
    color: 'from-purple-500 to-indigo-600',
    capabilities: [
      'Increase conversions by 40%',
      'Reduce marketing costs by 30%',
      'Personalize 100% of campaigns',
      'Real-time performance optimization'
    ]
  },
  {
    id: 6,
    name: 'AI Data Processing & ETL',
    description: 'Intelligent data extraction, transformation, and loading solution',
    price: '$2,199/month',
    features: [
      'Automated Data Extraction',
      'Data Quality Validation',
      'Real-time Data Transformation',
      'Multi-Source Integration',
      'Data Lineage Tracking',
      'Automated Error Handling',
      'Scalable Processing Pipeline',
      'Custom Data Models'
    ],
    icon: <Database className="w-8 h-8" />,
    category: 'Data Processing',
    popular: false,
    rating: 4.7,
    users: '600+',
    color: 'from-cyan-500 to-blue-600',
    capabilities: [
      'Process 100TB+ data daily',
      '99.99% data accuracy',
      'Real-time processing',
      'Zero data loss guarantee'
    ]
  }
];

const categories = ['All', 'Analytics', 'Content Creation', 'Customer Service', 'Security', 'Marketing', 'Data Processing'];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0013
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <ScrollToTop />
      
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
      {/* Header */}
      <div className="relative overflow-hidden quantum-field">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
          <div className="text-center">
<<<<<<< HEAD
<<<<<<< HEAD
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text-enhanced neon-pulse">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto neon-glow-cyan">
              Transform your business with our comprehensive suite of AI-powered solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="holographic-card px-6 py-3 rounded-lg">
                <span className="text-cyan-400 font-semibold">30+ AI Platforms</span>
              </div>
              <div className="holographic-card px-6 py-3 rounded-lg">
                <span className="text-purple-400 font-semibold">25,000+ Companies</span>
              </div>
              <div className="holographic-card px-6 py-3 rounded-lg">
                <span className="text-pink-400 font-semibold">99.9% Accuracy</span>
              </div>
            </div>
=======
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <Brain className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Advanced AI Services
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              Transform your industry with cutting-edge AI solutions. From healthcare to climate change, 
              we provide specialized AI services that deliver measurable results and competitive advantages.
            </p>
=======

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-text-advanced">
              AI-Powered Enterprise Solutions
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge AI technology. From predictive analytics to automated workflows, 
              we deliver intelligent solutions that drive real results.
            </p>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
<<<<<<< HEAD
                <span className="text-white font-medium">400% Average ROI</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Industry Leading</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
=======

  const categories = ['All', ...aiServiceCategories.map(cat => cat.name)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced neural-network-advanced">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-6 py-3 mb-8 cyber-pulse-advanced">
              <Brain className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Advanced AI Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 cyber-text-3d neon-text-advanced">
              AI Services
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              Transform your business with our comprehensive suite of AI services. From machine learning and natural language processing 
              to computer vision and predictive analytics, we deliver cutting-edge AI solutions that drive real business value.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-6 py-3 rounded-lg cyber-pulse-advanced">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Advanced AI</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-6 py-3 rounded-lg cyber-pulse-advanced">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Real-time Processing</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-6 py-3 rounded-lg cyber-pulse-advanced">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-500/20 px-6 py-3 rounded-lg cyber-pulse-advanced">
                <Rocket className="w-5 h-5 text-orange-400" />
                <span className="text-white font-medium">Proven Results</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="cyber-button-advanced inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center group"
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Schedule Demo
              </Link>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-05c4
            </div>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
=======
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive suite of AI-powered tools and services designed to transform your business and boost productivity.
            </p>
          </div>
        </div>
<<<<<<< HEAD
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search AI services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0013
          </div>
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 font-medium"
            >
              {category}
            </button>
=======
  const categories = ['all', ...aiServiceCategories.map(cat => cat.category)];

  const benefits = [
    {
      icon: TrendingUp,
      stat: '300%',
      title: 'Average ROI Increase',
      description: 'Our AI solutions deliver measurable business value within the first quarter'
    },
    {
      icon: Users,
      stat: '50K+',
      title: 'Active Users',
      description: 'Trusted by enterprises worldwide for their critical AI needs'
    },
    {
      icon: Award,
      stat: '99.9%',
      title: 'Uptime Guarantee',
      description: 'Enterprise-grade reliability with comprehensive SLA coverage'
    },
    {
      icon: Target,
      stat: '24/7',
      title: 'AI Support',
      description: 'Round-the-clock assistance from our expert AI team'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO',
      company: 'MedTech Solutions',
      content: 'AI Healthcare Solutions revolutionized our diagnostic accuracy. We now catch 40% more early-stage diseases.',
      rating: 5,
      avatar: '/images/testimonials/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP of Operations',
      company: 'FinanceFirst Bank',
      content: 'AI Fintech Platform reduced our fraud losses by 95%. The ROI was evident within the first month.',
      rating: 5,
      avatar: '/images/testimonials/michael-rodriguez.jpg'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Marketing',
      company: 'RetailMax',
      content: 'AI E-commerce Optimization increased our conversion rates by 200%. Our sales team is amazed by the results.',
      rating: 5,
      avatar: '/images/testimonials/emily-watson.jpg'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServiceCategories.flatMap(cat => cat.services)
    : aiServiceCategories.find(cat => cat.category === selectedCategory)?.services || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.05)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[length:50px_50px]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-pink-400/10 rounded-full blur-xl animate-pulse delay-3000"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              Advanced AI Services
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge AI solutions. From automation to analytics, we deliver enterprise-grade AI that drives real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#services"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore AI Services
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </a>
            </div>
          </div>
=======
      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
=======
      </section>

      {/* Search and Filter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-05c4
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
<<<<<<< HEAD
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
        </div>
      </div>

<<<<<<< HEAD
        {/* Benefits */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 neon-text">{benefit.stat}</div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
            </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
          ))}
        </div>
      </div>

<<<<<<< HEAD
      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`futuristic-card-enhanced hover-lift p-8 ${
                service.popular ? 'ring-2 ring-purple-500 neon-glow-purple' : ''
              }`}
            >
<<<<<<< HEAD
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="h-8 w-8" />
                  </div>
=======
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${service.bgColor} mb-6`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-fb25
                  <div className="flex items-center space-x-2">
                    {service.popular && (
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full flex items-center font-bold shadow-lg">
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

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.name}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
=======
      name: 'AI Data Visualization',
      description: 'Interactive data visualization and business intelligence solutions powered by AI',
      icon: Globe,
      features: [
        'Interactive Dashboards',
        'Real-time Visualization',
        'Predictive Modeling',
        'Custom Reports',
        'Data Integration',
        'Mobile Responsive',
        'Collaborative Features'
      ],
      category: 'Analytics',
      popular: false,
      rating: 4.5,
      users: '1,200+',
      color: 'from-indigo-500 to-purple-600',
      capabilities: [
        '80% faster insights generation',
        'Interactive data exploration',
        'Automated report generation',
        'Better decision making'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Up to 5 AI services',
        'Basic analytics',
        'Email support',
        'Standard integrations',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: 'month',
      description: 'Ideal for growing businesses with advanced AI needs',
      features: [
        'Up to 15 AI services',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'Weekly reports',
        'Dedicated account manager'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'month',
      description: 'Tailored solutions for large enterprises',
      features: [
        'Unlimited AI services',
        'Custom analytics',
        '24/7 support',
        'Full customization',
        'Real-time reports',
        'Dedicated team',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Services
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge AI solutions designed to automate, optimize, and revolutionize your operations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} mr-4`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm">{service.rating}</span>
                      <span className="ml-2 text-gray-400 text-sm">({service.users} users)</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
<<<<<<< HEAD
                    {service.features.length > 4 && (
                      <li className="text-cyan-400 text-sm font-medium">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm text-gray-400">
                    {service.users} users
                  </div>
                  <div className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-400 font-medium">
                    {service.category}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-lg font-semibold text-cyan-400 mb-2">
                    {service.pricing}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Capabilities:</h4>
                  <ul className="space-y-1">
                    {service.capabilities.map((capability, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
=======
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Capabilities:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {service.capabilities.map((capability, index) => (
                      <li key={index} className="flex items-center">
                        <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD

                <div className="space-y-3">
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a
                    href="/contact"
                    className="w-full border border-cyan-400/50 text-cyan-400 py-3 px-6 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                  </a>
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-01fd
                </div>
              </div>

              <div className="mb-6">
                <div className="text-lg font-semibold text-cyan-400 mb-2">
                  {service.pricing}
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Key Capabilities:</h4>
                <ul className="space-y-1">
                  {service.capabilities.map((capability, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
<<<<<<< HEAD
                </ul>
              </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <button className="w-full neon-button-enhanced py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
=======
              <div className="space-y-2">
                <a
                  href={service.link || 'https://ziontechgroup.com/contact'}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                {service.trial && (
                  <div className="text-center text-sm text-cyan-400 font-medium">
                    {service.trial}
=======
        {/* Category Filter */}
        <div className={`mb-12 transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Services by Category */}
        {selectedCategory === 'all' ? (
          <div className={`space-y-16 mb-20 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {aiServiceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
=======
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-01fd
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 relative group">
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.name}</h4>
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
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 relative group">
                {service.popular && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.name}</h4>
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
            ))}
          </div>
        )}

        {/* Testimonials */}
        <div className={`mb-20 transform transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real customers who have transformed their businesses with our AI solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
                  </div>
                )}
                {service.setup && (
                  <div className="text-center text-xs text-gray-400">
                    {service.setup}
                  </div>
                )}
              </div>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-aeba
=======
              <a 
                href={service.link || '/contact'} 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8798
=======
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-gray-400">
                  {service.users} users
                </div>
                <div className="text-sm text-gray-400">
                  {service.category}
                </div>
              </div>
<<<<<<< HEAD

<<<<<<< HEAD
              <div className="text-2xl font-bold text-cyan-400 mb-4">
                {service.price}
              </div>

              <div className="space-y-2 mb-6">
                <h4 className="text-sm font-semibold text-gray-300">Key Capabilities:</h4>
                <ul className="space-y-1">
                  {service.capabilities?.map((capability, capabilityIndex) => (
                    <li key={capabilityIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <a
                  href={`https://ziontechgroup.com/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="w-full border border-purple-400 text-purple-400 py-2 px-4 rounded-lg font-medium hover:bg-purple-400 hover:text-white transition-all block text-center"
                >
                  Get Started
                </a>
              </div>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-453e
=======
              <div className="mb-6">
                <div className="text-2xl font-bold text-white mb-2">
                  {service.price}
                </div>
                {service.capabilities && (
                  <div className="space-y-1">
                    {service.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {capability}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
            </div>
          ))}
=======
            ))}
          </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
        </div>
      </div>

<<<<<<< HEAD
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join 25,000+ companies already using our cutting-edge AI solutions. Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://ziontechgroup.com/contact"
              className="bg-white text-purple-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Call: +1 (302) 464-0950
            </a>
          </div>
          <div className="text-purple-100 text-sm">
            <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709</p>
=======
                
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
              </div>
            ))}
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 mb-8">
            <Brain className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-medium">AI Services</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with our cutting-edge AI services. From analytics to automation, 
            we provide intelligent solutions that drive growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
              Get Started
            </button>
            <button className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
              Learn More
            </button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
=======
        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of enterprises that have already transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (302) 464-0950
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📧 Email: kleber@ziontechgroup.com</p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Pricing Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Choose Your AI Solution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''} transition-all duration-300`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold text-center mb-6">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
=======
      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to accelerate your business growth and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 ${
                  service.popular ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="text-white font-semibold">{service.rating}</span>
                    <span className="text-gray-400 ml-1">({service.users})</span>
                  </div>
                  <span className="text-cyan-400 font-medium">{service.category}</span>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free consultation and discover how our AI solutions can revolutionize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
            >
              Get Free Consultation
            </a>
            <a
              href="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Schedule Demo
            </a>
=======
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl p-12 border border-cyan-400/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of companies already using our AI solutions to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
=======
      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 group relative"
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm">{service.category}</p>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="text-sm text-gray-400 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-cyan-400">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>
              
              <div className="border-t border-gray-700 pt-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">
                    {formatPrice(service.pricing.monthly)}
                    <span className="text-lg text-gray-400">/month</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    or {formatPrice(service.pricing.yearly)}/year (save 17%)
                  </div>
                  <div className="text-sm text-green-400 mt-1">
                    {service.trial} • {service.roi}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
                  >
                    Learn More
                  </Link>
                  <a
                    href="/contact"
                    className="w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center block"
                  >
                    Start Free Trial
                  </a>
                </div>
              </div>
=======
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm text-lg"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                    selectedCategory === category
                      ? 'bg-cyan-400 text-slate-900 cyber-pulse-advanced'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`cyber-card-advanced p-8 hover:scale-105 transition-all duration-300 group relative ${
                    service.popular ? 'ring-2 ring-cyan-400' : ''
                  } ${service.comingSoon ? 'opacity-75' : ''}`}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold cyber-pulse-advanced">
                        <Star className="w-3 h-3 mr-1 inline" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  {service.comingSoon && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        <Clock className="w-3 h-3 mr-1 inline" />
                        Coming Soon
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text-advanced group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium">{service.category}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-center">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-4 text-center">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-cyan-400 text-center">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-cyan-400 mb-2 neon-text-advanced">
                        {formatPrice(service.pricing.monthly)}
                        <span className="text-lg text-gray-400">/month</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        or {formatPrice(service.pricing.yearly)}/year (save 17%)
                      </div>
                      {service.pricing.setup && service.pricing.setup > 0 && (
                        <div className="text-sm text-gray-400 mt-1">
                          + {formatPrice(service.pricing.setup)} setup fee
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <Link
                        to={`/contact?service=${service.id}`}
                        className="w-full cyber-button-advanced py-3 px-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 text-center block group"
                      >
                        <Rocket className="w-4 h-4 mr-2 inline group-hover:rotate-12 transition-transform" />
                        Get Started
                      </Link>
                      <Link
                        to={service.link}
                        className="w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center block group flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-05c4
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-8xl mb-6">🔍</div>
                <h3 className="text-3xl font-bold text-white mb-4 neon-text-advanced">No services found</h3>
                <p className="text-gray-300 mb-8 text-lg">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="cyber-button-advanced px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
<<<<<<< HEAD
        
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
            <p className="text-gray-300 mb-8">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results and enterprise-grade AI solutions that deliver measurable business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
=======
                <span className="text-white font-medium">300% Average ROI</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Industry Leading</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
=======
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 neon-text-advanced cyber-text-3d">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join hundreds of enterprises that have already transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center group"
            >
              <MessageSquare className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Start Free Trial
            </Link>
            <Link
              to="/consultation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center justify-center group"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Schedule Demo
            </Link>
          </div>
          <div className="mt-12 text-sm text-gray-200 space-y-2">
            <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-cyan-200 font-medium">+1 (302) 464-0950</a></p>
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200 font-medium">kleber@ziontechgroup.com</a></p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-05c4
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
      {/* Search and Filter */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white shadow-lg'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`cyber-card-advanced p-6 hover:scale-105 transition-all duration-300 group relative ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{formatPrice(service.pricing.monthly)}</div>
                    <div className="text-sm text-gray-400">/month</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.useCases.slice(0, 3).map((useCase, index) => (
                      <span key={index} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Trial:</span>
                    <span className="text-cyan-400 font-medium">{service.trial}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Expected ROI:</span>
                    <span className="text-green-400 font-medium">{service.roi}</span>
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
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-300 mb-8">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results and enterprise-grade AI solutions that deliver measurable business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real customers who have transformed their businesses with our AI solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card-advanced p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
<<<<<<< HEAD
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join industry leaders using our AI services to gain competitive advantages and drive innovation.
=======
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already transformed their operations with our AI solutions.
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-200">
            <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-cyan-200">+1 (302) 464-0950</a></p>
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200">kleber@ziontechgroup.com</a></p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
};

export default AIServicesPage;
=======
}
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
=======
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
=======
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="text-3xl font-bold text-white mb-1">{service.price}</div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1">{service.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{service.users} users</span>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                Get Started
                <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">No services found matching your criteria.</div>
          </div>
        )}
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0013
=======
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-05c4
