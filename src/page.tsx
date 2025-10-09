'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Atom, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, DollarSign, BarChart3, PieChart as PieChartIcon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Building2, Smartphone as Mobile, Laptop, Server, Wifi, HardDrive, Monitor, Printer, Headphones, Microphone, Keyboard, Mouse, Webcam, Router, Switch, Firewall, Antivirus, Backup, Recovery, Migration, Optimization, Scaling, Monitoring, Alert, Notification, Bell, Mail as Email, MessageCircle, Video as VideoIcon, Image, File, Folder, Download, Upload, Share, Link, Copy, Edit, Trash, Save, Refresh, Play, Pause, Stop, Skip, Rewind, FastForward, Volume, Mute, Unmute, Fullscreen, Minimize, Maximize, Close, Menu, MoreHorizontal, MoreVertical, Plus, Minus, X, Check, AlertTriangle, Info, HelpCircle, QuestionMarkCircle, ExternalLink, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, ChevronsUp, ChevronsDown, ChevronsLeft, ChevronsRight, RotateCcw, RotateCw, Repeat, Shuffle, Filter, SortAsc, SortDesc, Search as SearchIcon, Filter as FilterIcon, Grid, List, Layout, Sidebar, Columns, Rows, Square, Circle, Triangle, Hexagon, Pentagon, Octagon, Diamond, Star as StarIcon2, Heart as HeartIcon, ThumbsUp, ThumbsDown, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10 } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Analytics from './components/Analytics';
import SecurityEnhancer from './components/SecurityEnhancer';
import { initializePerformanceOptimizations } from './utils/performanceOptimizations';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Preload critical components
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      import('./components/ContentPromotionBanner');
      import('./components/ContentCarousel');
    }, 100);
  }
};

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    preloadComponents();
    
    // Initialize performance optimizations
    initializePerformanceOptimizations();
    
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      });
    }
  }, []);

  // Enhanced Micro SAAS Services with real market pricing and features
  const microSAASServices = [
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization and timeline prediction',
      icon: '📊',
      price: '$199/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Budget optimization'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity',
      marketPrice: '$299/month',
      savings: '33% off'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation and smart scheduling',
      icon: '📱',
      price: '$149/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence', 'Hashtag optimization', 'Competitor analysis'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', '50% better ROI'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing',
      marketPrice: '$249/month',
      savings: '40% off'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics',
      icon: '📈',
      price: '$299/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking', 'Predictive modeling', 'Custom reports'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', '25% faster decisions'],
      link: '/ai-analytics-dashboard',
      popular: true,
      category: 'Analytics',
      marketPrice: '$499/month',
      savings: '40% off'
    },
    {
      title: 'AI Email Marketing Suite',
      description: 'Transform your email marketing with AI-powered content generation and automation',
      icon: '📧',
      price: '$199/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns', 'A/B testing', 'Deliverability optimization'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved', '35% higher click rates'],
      link: '/ai-email-marketing',
      popular: true,
      category: 'Marketing',
      marketPrice: '$349/month',
      savings: '43% off'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Provide 24/7 intelligent customer support with AI-powered chatbot',
      icon: '🤖',
      price: '$249/month',
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights', 'Multi-language support', 'Integration APIs'],
      benefits: ['90% query resolution', '60% cost reduction', '24/7 availability', '95% customer satisfaction'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Support',
      marketPrice: '$399/month',
      savings: '38% off'
    },
    {
      title: 'AI Code Generator Pro',
      description: 'Generate production-ready code with AI-powered development tools',
      icon: '💻',
      price: '$399/month',
      features: ['Code generation', 'Bug detection', 'Performance optimization', 'Documentation auto-generation', 'Test case creation', 'Code review'],
      benefits: ['80% faster development', '70% fewer bugs', '50% less testing time', '90% code quality improvement'],
      link: '/ai-code-generation',
      popular: true,
      category: 'Development',
      marketPrice: '$599/month',
      savings: '33% off'
    },
    {
      title: 'AI Video Generator',
      description: 'Create professional videos with AI-powered editing and generation',
      icon: '🎬',
      price: '$299/month',
      features: ['AI video generation', 'Auto-editing', 'Voice synthesis', 'Background removal', 'Text-to-video', 'Multi-format export'],
      benefits: ['90% time saved', 'Professional quality', 'Unlimited videos', 'No editing skills needed'],
      link: '/ai-video-generation',
      popular: true,
      category: 'Content Creation',
      marketPrice: '$499/month',
      savings: '40% off'
    },
    {
      title: 'AI Voice Cloning Studio',
      description: 'Create realistic voice clones for content and presentations',
      icon: '🎤',
      price: '$199/month',
      features: ['Voice cloning', 'Text-to-speech', 'Emotion control', 'Multi-language support', 'High-quality audio', 'API integration'],
      benefits: ['99% voice accuracy', 'Unlimited usage', 'Multiple voices', 'Professional quality'],
      link: '/ai-voice-cloning',
      popular: true,
      category: 'Audio',
      marketPrice: '$299/month',
      savings: '33% off'
    },
    {
      title: 'AI Fashion Design Assistant',
      description: 'Design fashion collections with AI-powered trend analysis and creation',
      icon: '👗',
      price: '$249/month',
      features: ['Trend analysis', 'Design generation', 'Color matching', 'Pattern creation', 'Size optimization', 'Market insights'],
      benefits: ['50% faster design', 'Trend accuracy', 'Unlimited designs', 'Market insights'],
      link: '/ai-fashion-design',
      popular: true,
      category: 'Design',
      marketPrice: '$399/month',
      savings: '38% off'
    },
    {
      title: 'AI Music Composer',
      description: 'Create original music with AI-powered composition and arrangement',
      icon: '🎵',
      price: '$199/month',
      features: ['AI composition', 'Multiple genres', 'Instrument selection', 'Mood-based creation', 'Royalty-free', 'Export options'],
      benefits: ['Unlimited tracks', 'Professional quality', 'No copyright issues', 'Multiple genres'],
      link: '/ai-music-composition',
      popular: true,
      category: 'Audio',
      marketPrice: '$299/month',
      savings: '33% off'
    },
    {
      title: 'AI Fitness Coach',
      description: 'Personalized fitness training with AI-powered workout plans and nutrition',
      icon: '💪',
      price: '$149/month',
      features: ['Personalized workouts', 'Nutrition planning', 'Progress tracking', 'Form analysis', 'Goal setting', 'Community features'],
      benefits: ['Personalized plans', 'Better results', '24/7 guidance', 'Progress tracking'],
      link: '/ai-fitness-coach',
      popular: true,
      category: 'Health',
      marketPrice: '$199/month',
      savings: '25% off'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Automate business processes with AI-powered workflow optimization',
      icon: '⚡',
      price: '$299/month',
      features: ['Process automation', 'AI optimization', 'Integration APIs', 'Custom workflows', 'Analytics', 'Error handling'],
      benefits: ['80% time saved', 'Error reduction', 'Scalable automation', 'ROI tracking'],
      link: '/ai-workflow-automation',
      popular: true,
      category: 'Automation',
      marketPrice: '$499/month',
      savings: '40% off'
    },
    {
      title: 'AI Sales Automation',
      description: 'Boost sales with AI-powered lead generation and follow-up automation',
      icon: '💰',
      price: '$249/month',
      features: ['Lead scoring', 'Email sequences', 'CRM integration', 'Call scheduling', 'Follow-up automation', 'Analytics'],
      benefits: ['300% more leads', '50% higher conversion', 'Automated follow-ups', 'Better lead quality'],
      link: '/ai-sales-automation',
      popular: true,
      category: 'Sales',
      marketPrice: '$399/month',
      savings: '38% off'
    },
    {
      title: 'AI Data Visualization',
      description: 'Create stunning data visualizations with AI-powered insights',
      icon: '📊',
      price: '$199/month',
      features: ['Auto-visualization', 'Interactive charts', 'Real-time data', 'Custom dashboards', 'Export options', 'Collaboration'],
      benefits: ['Faster insights', 'Better decisions', 'Professional charts', 'Real-time updates'],
      link: '/ai-data-visualization',
      popular: true,
      category: 'Analytics',
      marketPrice: '$299/month',
      savings: '33% off'
    },
    {
      title: 'AI 3D Generation',
      description: 'Create 3D models and environments with AI-powered generation',
      icon: '🎨',
      price: '$399/month',
      features: ['3D model generation', 'Texture creation', 'Animation tools', 'VR/AR support', 'Export formats', 'Collaboration'],
      benefits: ['Professional quality', 'Faster creation', 'Multiple formats', 'VR/AR ready'],
      link: '/ai-3d-generation',
      popular: true,
      category: '3D Design',
      marketPrice: '$599/month',
      savings: '33% off'
    },
    {
      title: 'AI Automation Suite',
      description: 'Comprehensive AI automation for all business processes',
      icon: '🤖',
      price: '$499/month',
      features: ['Full automation', 'AI optimization', 'Custom workflows', 'Integration APIs', 'Analytics', 'Support'],
      benefits: ['Complete automation', 'Maximum efficiency', 'Custom solutions', 'Full support'],
      link: '/ai-automation',
      popular: true,
      category: 'Automation',
      marketPrice: '$799/month',
      savings: '38% off'
    }
  ];

  // Enhanced IT Services with comprehensive solutions
  const itServices = [
    {
      title: 'Cloud Migration & Management',
      description: 'Complete cloud migration with AWS, Azure, and GCP optimization',
      icon: Cloud,
      price: '$2,999/month',
      features: ['Multi-cloud strategy', 'Migration planning', 'Cost optimization', 'Security configuration', 'Auto-scaling', 'Disaster recovery', '24/7 monitoring', 'Performance tuning'],
      color: 'text-blue-400',
      benefits: ['50% cost reduction', '99.9% uptime', 'Global deployment', '24/7 monitoring', 'Auto-scaling', 'Disaster recovery'],
      marketPrice: '$4,999/month',
      savings: '40% off'
    },
    {
      title: 'Advanced Cybersecurity',
      description: 'Comprehensive security solutions with AI-powered threat detection',
      icon: Shield,
      price: '$3,499/month',
      features: ['AI threat detection', 'Vulnerability assessment', 'Security monitoring', 'Incident response', 'Penetration testing', 'Compliance auditing', 'Zero-trust architecture', 'Security training'],
      color: 'text-red-400',
      benefits: ['99.9% threat detection', 'Real-time monitoring', 'Zero-day protection', 'Compliance ready', 'AI-powered defense', '24/7 SOC'],
      marketPrice: '$5,999/month',
      savings: '42% off'
    },
    {
      title: 'DevOps & CI/CD Pipeline',
      description: 'Complete DevOps transformation with automated testing and deployment',
      icon: Settings,
      price: '$2,799/month',
      features: ['CI/CD pipelines', 'Automated testing', 'Container orchestration', 'Infrastructure as Code', 'Blue-green deployments', 'Monitoring setup', 'Security scanning', 'Performance optimization'],
      color: 'text-green-400',
      benefits: ['80% faster deployments', '90% fewer errors', 'Automated rollbacks', 'Zero-downtime updates', 'Infrastructure automation', 'Continuous monitoring'],
      marketPrice: '$4,499/month',
      savings: '38% off'
    },
    {
      title: 'Database Services & Optimization',
      description: 'Database design, optimization, and management with AI-powered tuning',
      icon: Database,
      price: '$2,299/month',
      features: ['Database design', 'Performance optimization', 'Backup & recovery', 'Security hardening', 'Scaling solutions', 'Migration services', 'AI-powered tuning', '24/7 monitoring'],
      color: 'text-purple-400',
      benefits: ['300% performance boost', '99.9% availability', 'Automated backups', 'AI optimization', 'Cost reduction', 'Security compliance'],
      marketPrice: '$3,999/month',
      savings: '43% off'
    },
    {
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management services',
      icon: Wifi,
      price: '$1,999/month',
      features: ['Network design', 'Security implementation', 'Performance optimization', 'Monitoring setup', 'Troubleshooting', 'Upgrade planning', 'Wireless solutions', 'VPN setup'],
      color: 'text-cyan-400',
      benefits: ['99.9% uptime', 'Enhanced security', 'Optimized performance', '24/7 monitoring', 'Scalable solutions', 'Cost optimization'],
      marketPrice: '$3,499/month',
      savings: '43% off'
    },
    {
      title: 'IT Support & Helpdesk',
      description: '24/7 IT support with AI-powered troubleshooting and resolution',
      icon: Headphones,
      price: '$1,499/month',
      features: ['24/7 support', 'AI troubleshooting', 'Remote assistance', 'Hardware management', 'Software deployment', 'User training', 'Incident management', 'Knowledge base'],
      color: 'text-orange-400',
      benefits: ['24/7 availability', 'Faster resolution', 'Proactive support', 'User satisfaction', 'Cost efficiency', 'AI-powered help'],
      marketPrice: '$2,499/month',
      savings: '40% off'
    },
    {
      title: 'Data Analytics & BI',
      description: 'Transform data into insights with advanced analytics and business intelligence',
      icon: BarChart3,
      price: '$2,799/month',
      features: ['Data warehousing', 'ETL processes', 'Advanced analytics', 'BI dashboards', 'Predictive modeling', 'Data visualization', 'Real-time processing', 'AI insights'],
      color: 'text-pink-400',
      benefits: ['Data-driven decisions', 'Real-time insights', 'Predictive analytics', 'Custom dashboards', 'ROI tracking', 'Competitive advantage'],
      marketPrice: '$4,999/month',
      savings: '44% off'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile app development with AI integration',
      icon: Smartphone,
      price: '$3,999/month',
      features: ['Native development', 'Cross-platform apps', 'AI integration', 'UI/UX design', 'Testing & QA', 'App store deployment', 'Maintenance', 'Performance optimization'],
      color: 'text-indigo-400',
      benefits: ['Professional apps', 'AI-powered features', 'Cross-platform', 'App store ready', 'Ongoing support', 'Performance optimized'],
      marketPrice: '$6,999/month',
      savings: '43% off'
    }
  ];

  // Enhanced AI Services with cutting-edge solutions
  const aiServices = [
    {
      title: 'AI Consulting & Strategy',
      description: 'Strategic AI implementation with ROI optimization and business transformation',
      icon: Brain,
      price: '$5,999/month',
      features: ['AI strategy development', 'ROI analysis', 'Implementation planning', 'Change management', 'Training programs', 'Performance monitoring', 'Continuous optimization', 'Executive reporting'],
      color: 'text-purple-400',
      benefits: ['300% ROI average', 'Strategic advantage', 'Expert guidance', 'Proven methodologies', 'Risk mitigation', 'Competitive edge'],
      marketPrice: '$9,999/month',
      savings: '40% off'
    },
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models and algorithms for business-specific challenges',
      icon: Cpu,
      price: '$4,999/month',
      features: ['Custom ML models', 'Data preprocessing', 'Model training', 'Performance optimization', 'Deployment & scaling', 'Monitoring & maintenance', 'A/B testing', 'Continuous learning'],
      color: 'text-blue-400',
      benefits: ['Custom solutions', 'High accuracy', 'Scalable models', 'Continuous improvement', 'Business integration', 'Performance monitoring'],
      marketPrice: '$7,999/month',
      savings: '38% off'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, chatbots, and language understanding',
      icon: MessageSquare,
      price: '$3,999/month',
      features: ['Text analysis', 'Sentiment analysis', 'Language translation', 'Chatbot development', 'Document processing', 'Voice recognition', 'Content generation', 'API integration'],
      color: 'text-green-400',
      benefits: ['90% accuracy', 'Multi-language support', 'Real-time processing', 'Custom solutions', 'API ready', 'Scalable architecture'],
      marketPrice: '$6,499/month',
      savings: '38% off'
    },
    {
      title: 'Computer Vision Solutions',
      description: 'Image and video analysis with AI-powered computer vision technology',
      icon: Eye,
      price: '$4,499/month',
      features: ['Image recognition', 'Object detection', 'Facial recognition', 'Video analysis', 'Quality inspection', 'Augmented reality', 'Medical imaging', 'Security monitoring'],
      color: 'text-cyan-400',
      benefits: ['High accuracy', 'Real-time processing', 'Multiple applications', 'Custom models', 'API integration', 'Scalable solutions'],
      marketPrice: '$7,499/month',
      savings: '40% off'
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors with advanced predictive modeling',
      icon: TrendingUp,
      price: '$3,799/month',
      features: ['Predictive modeling', 'Trend analysis', 'Risk assessment', 'Demand forecasting', 'Customer behavior', 'Market analysis', 'Real-time predictions', 'Custom algorithms'],
      color: 'text-pink-400',
      benefits: ['Accurate predictions', 'Risk reduction', 'Better decisions', 'Competitive advantage', 'Cost savings', 'Revenue optimization'],
      marketPrice: '$6,299/month',
      savings: '40% off'
    },
    {
      title: 'AI-Powered Automation',
      description: 'Intelligent automation solutions for complex business processes',
      icon: Zap,
      price: '$3,299/month',
      features: ['Process automation', 'Workflow optimization', 'Decision automation', 'Integration APIs', 'Monitoring & alerts', 'Error handling', 'Scalability', 'Custom solutions'],
      color: 'text-yellow-400',
      benefits: ['80% efficiency gain', 'Error reduction', 'Cost savings', 'Scalable automation', '24/7 operation', 'ROI optimization'],
      marketPrice: '$5,499/month',
      savings: '40% off'
    },
    {
      title: 'AI Data Science Platform',
      description: 'Complete data science platform with AI-powered analytics and insights',
      icon: BarChart,
      price: '$4,799/month',
      features: ['Data platform', 'Advanced analytics', 'ML pipeline', 'Visualization tools', 'Collaboration features', 'Model management', 'API integration', 'Cloud deployment'],
      color: 'text-indigo-400',
      benefits: ['Complete platform', 'Advanced analytics', 'Team collaboration', 'Model management', 'Cloud ready', 'Scalable architecture'],
      marketPrice: '$7,999/month',
      savings: '40% off'
    },
    {
      title: 'AI Security Solutions',
      description: 'AI-powered cybersecurity with advanced threat detection and prevention',
      icon: Shield,
      price: '$4,299/month',
      features: ['Threat detection', 'Anomaly detection', 'Behavioral analysis', 'Incident response', 'Security monitoring', 'Risk assessment', 'Compliance automation', 'AI defense'],
      color: 'text-red-400',
      benefits: ['Advanced protection', 'Real-time detection', 'Automated response', 'Compliance ready', 'AI-powered defense', '24/7 monitoring'],
      marketPrice: '$6,999/month',
      savings: '39% off'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Performance Optimizers */}
      <PerformanceOptimizer />
      <SEOOptimizer />
      <AccessibilityEnhancer />
      <Analytics />
      <SecurityEnhancer />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section with Futuristic Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Neon Grid Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              ZION TECH GROUP
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-8 font-light">
              AI-Powered Enterprise Solutions & Digital Transformation
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI technology, achieving 300% ROI, 70% cost reduction, 
              and 90% efficiency gains. We deliver real, innovative solutions that drive measurable results.
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-lg">
              <a 
                href="tel:+13024640950" 
                onClick={handlePhoneClick}
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 hover:scale-105"
              >
                <PhoneIcon className="w-5 h-5" />
                +1 (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 hover:scale-105"
              >
                <MailIcon className="w-5 h-5" />
                kleber@ziontechgroup.com
              </a>
              <div className="flex items-center gap-2 text-pink-400">
                <Location className="w-5 h-5" />
                364 E Main St STE 1008, Middletown DE 19709
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="#services" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Explore Services
              </a>
              <a 
                href="tel:+13024640950" 
                onClick={handlePhoneClick}
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-bold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-500/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Micro SAAS Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Micro SAAS Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, affordable AI-powered tools that transform your business operations. 
              Real solutions with proven results and competitive pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {microSAASServices.map((service, index) => (
              <article key={index} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  </div>
                )}
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-lg font-bold text-cyan-400 neon-text">{service.price}</div>
                    <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                    <div className="text-xs text-green-400 font-semibold">{service.savings}</div>
                  </div>
                  <a 
                    href={service.link} 
                    className="cyber-button px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                IT Services & Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT services that keep your business running smoothly and securely. 
              From cloud migration to cybersecurity, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {itServices.map((service, index) => (
              <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                    <div className="text-xs text-green-400 font-semibold">{service.savings}</div>
                  </div>
                  <a 
                    href="/it-services" 
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                  >
                    Learn More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Services & Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI solutions that transform your business. From machine learning to computer vision, 
              we deliver innovative AI technology that drives real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {aiServices.map((service, index) => (
              <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                    <div className="text-xs text-green-400 font-semibold">{service.savings}</div>
                  </div>
                  <a 
                    href="/ai-services" 
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                  >
                    Learn More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Content Showcase */}
      <Suspense fallback={<ServiceCardSkeleton />}>
        <ContentPromotionBanner />
      </Suspense>

      <Suspense fallback={<ServiceCardSkeleton />}>
        <ContentCarousel />
      </Suspense>

      <Suspense fallback={<ServiceCardSkeleton />}>
        <DynamicContentShowcase />
      </Suspense>

      <Suspense fallback={<ServiceCardSkeleton />}>
        <ContentStatistics />
      </Suspense>

      <Suspense fallback={<ServiceCardSkeleton />}>
        <ContentNewsletterSignup />
      </Suspense>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;