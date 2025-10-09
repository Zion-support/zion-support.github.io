'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, DollarSign, BarChart3, FileText as Document, Search as SearchIcon, Bot as Robot, Palette as Design, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gaming, ShoppingCart as Ecommerce, CreditCard as Payment, Building as Enterprise, Factory as Manufacturing, Car as Automotive, Plane as Aviation, Ship as Maritime, Train as Transportation, Home as RealEstate, Heart as Healthcare, Stethoscope as Medical, GraduationCap as Education, Briefcase as Business, Wrench as Tools, Hammer as Construction, Paintbrush as Creative, Scissors as Beauty, BookOpen as Publishing, Calculator as Finance, Calendar as Scheduling, Clock3 as Time, Compass as NavigationIcon, PieChart as Analytics, TrendingDown as Decline, Activity as Fitness } from 'lucide-react';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Preload critical components
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    // Preload critical components after initial render
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
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    // Preload components
    preloadComponents();
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

  // Enhanced Micro SAAS Services with real market pricing
  const microSAASServices = [
    {
      title: 'AI Project Manager',
      description: 'Intelligent project planning with AI-powered resource optimization and timeline prediction',
      icon: '📊',
      price: '$99/month',
      marketPrice: '$150-300/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation and smart scheduling',
      icon: '📱',
      price: '$79/month',
      marketPrice: '$200-500/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics',
      icon: '📈',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift'],
      link: '/ai-analytics',
      popular: true,
      category: 'Analytics'
    },
    {
      title: 'AI Email Marketing',
      description: 'Transform your email marketing with AI-powered content generation and automation',
      icon: '📧',
      price: '$99/month',
      marketPrice: '$250-600/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved'],
      link: '/ai-email-marketing',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Provide 24/7 intelligent customer support with AI-powered chatbot',
      icon: '🤖',
      price: '$149/month',
      marketPrice: '$400-1000/month',
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Support'
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Advanced automated code analysis with AI-powered bug detection and optimization',
      icon: '🔍',
      price: '$89/month',
      marketPrice: '$200-500/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality'],
      link: '/ai-code-generation',
      popular: false,
      category: 'Development'
    },
    {
      title: 'AI Data Visualization',
      description: 'Create stunning, interactive data visualizations with AI-powered insights',
      icon: '📊',
      price: '$129/month',
      marketPrice: '$300-700/month',
      features: ['Interactive charts', 'AI insights', 'Real-time updates', 'Custom dashboards'],
      benefits: ['50% faster insights', '90% user engagement', '30% decision speed'],
      link: '/ai-data-visualization',
      popular: false,
      category: 'Analytics'
    },
    {
      title: 'AI Video Generation',
      description: 'Create professional videos with AI-powered editing and content generation',
      icon: '🎥',
      price: '$199/month',
      marketPrice: '$500-1500/month',
      features: ['AI video editing', 'Auto-generated content', 'Voice synthesis', 'Multi-language support'],
      benefits: ['80% time savings', 'Professional quality', 'Unlimited videos'],
      link: '/ai-video-generation',
      popular: false,
      category: 'Content Creation'
    },
    {
      title: 'AI Voice Cloning',
      description: 'Create realistic voice clones for content, presentations, and accessibility',
      icon: '🎤',
      price: '$179/month',
      marketPrice: '$400-1200/month',
      features: ['High-quality voice synthesis', 'Multiple languages', 'Emotion control', 'Real-time generation'],
      benefits: ['95% voice accuracy', 'Multilingual support', 'Accessibility features'],
      link: '/ai-voice-cloning',
      popular: false,
      category: 'Content Creation'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Automate complex business workflows with intelligent decision-making',
      icon: '⚡',
      price: '$159/month',
      marketPrice: '$400-1000/month',
      features: ['Process automation', 'Smart routing', 'Exception handling', 'Performance monitoring'],
      benefits: ['60% process efficiency', '90% error reduction', '24/7 operation'],
      link: '/ai-workflow-automation',
      popular: false,
      category: 'Automation'
    },
    {
      title: 'AI Sales Automation',
      description: 'Intelligent sales process automation with AI-powered lead scoring and follow-up',
      icon: '💼',
      price: '$189/month',
      marketPrice: '$500-1200/month',
      features: ['Lead scoring', 'Automated follow-up', 'Sales forecasting', 'CRM integration'],
      benefits: ['35% more deals', '50% time savings', '25% revenue increase'],
      link: '/ai-sales-automation',
      popular: false,
      category: 'Sales'
    },
    {
      title: 'AI Fashion Design',
      description: 'AI-powered fashion design and trend analysis for clothing and accessories',
      icon: '👗',
      price: '$139/month',
      marketPrice: '$300-800/month',
      features: ['Trend analysis', 'Design generation', 'Color matching', 'Size optimization'],
      benefits: ['40% design speed', '90% trend accuracy', 'Reduced waste'],
      link: '/ai-fashion-design',
      popular: false,
      category: 'Design'
    },
    {
      title: 'AI Fitness Coach',
      description: 'Personalized fitness coaching with AI-powered workout and nutrition plans',
      icon: '💪',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: ['Personalized workouts', 'Nutrition planning', 'Progress tracking', 'Motivational coaching'],
      benefits: ['50% better results', 'Personalized approach', '24/7 availability'],
      link: '/ai-fitness-coach',
      popular: false,
      category: 'Health & Fitness'
    },
    {
      title: 'AI Music Composition',
      description: 'Create original music with AI-powered composition and arrangement tools',
      icon: '🎵',
      price: '$119/month',
      marketPrice: '$300-800/month',
      features: ['Original compositions', 'Multiple genres', 'Instrument selection', 'Royalty-free music'],
      benefits: ['Unlimited music', 'Professional quality', 'No copyright issues'],
      link: '/ai-music-composition',
      popular: false,
      category: 'Creative'
    },
    {
      title: 'AI 3D Generation',
      description: 'Generate 3D models and animations with AI-powered design tools',
      icon: '🎨',
      price: '$169/month',
      marketPrice: '$500-1500/month',
      features: ['3D model generation', 'Animation creation', 'Texture mapping', 'Export options'],
      benefits: ['80% time savings', 'Professional quality', 'Multiple formats'],
      link: '/ai-3d-generation',
      popular: false,
      category: 'Design'
    }
  ];

  // Enhanced AI Services with comprehensive offerings
  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making',
      icon: Brain,
      price: '$1,500/month',
      marketPrice: '$3,000-8,000/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'],
      color: 'text-purple-400',
      category: 'Core AI'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      icon: MessageSquare,
      price: '$1,200/month',
      marketPrice: '$2,500-6,000/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      color: 'text-blue-400',
      category: 'Language AI'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition',
      icon: Eye,
      price: '$1,800/month',
      marketPrice: '$4,000-10,000/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'],
      color: 'text-green-400',
      category: 'Vision AI'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      icon: Zap,
      price: '$1,400/month',
      marketPrice: '$3,000-7,000/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'],
      color: 'text-cyan-400',
      category: 'Automation'
    },
    {
      title: 'AI Consulting & Strategy',
      description: 'Comprehensive AI strategy development and implementation planning',
      icon: Target,
      price: '$2,500/month',
      marketPrice: '$5,000-15,000/month',
      features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning'],
      color: 'text-orange-400',
      category: 'Consulting'
    },
    {
      title: 'AI Chatbots & Conversational AI',
      description: 'Intelligent conversational AI for customer service and support',
      icon: Bot,
      price: '$800/month',
      marketPrice: '$2,000-5,000/month',
      features: ['24/7 Support', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'],
      color: 'text-pink-400',
      category: 'Conversational AI'
    }
  ];

  // Enhanced IT Services with comprehensive offerings
  const itServices = [
    {
      title: 'Cloud Services',
      description: 'Cloud migration, setup, and optimization services',
      icon: Cloud,
      price: '$1,299/month',
      marketPrice: '$3,000-8,000/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration'],
      color: 'text-blue-400',
      category: 'Infrastructure'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection and prevention',
      icon: Shield,
      price: '$1,599/month',
      marketPrice: '$4,000-12,000/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      color: 'text-red-400',
      category: 'Security'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment',
      icon: Settings,
      price: '$1,199/month',
      marketPrice: '$3,000-8,000/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'],
      color: 'text-green-400',
      category: 'Development'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning',
      icon: Database,
      price: '$899/month',
      marketPrice: '$2,000-6,000/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
      color: 'text-purple-400',
      category: 'Data Management'
    },
    {
      title: 'IT Infrastructure',
      description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee',
      icon: Cpu,
      price: '$999/month',
      marketPrice: '$2,500-7,000/month',
      features: ['Server Management', 'Network Setup', 'Security Hardening', 'Backup Solutions'],
      color: 'text-cyan-400',
      category: 'Infrastructure'
    },
    {
      title: 'Network Services',
      description: 'Network design, implementation, and monitoring solutions',
      icon: Globe,
      price: '$1,099/month',
      marketPrice: '$2,500-6,000/month',
      features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting'],
      color: 'text-yellow-400',
      category: 'Networking'
    }
  ];

  // Specialized Solutions
  const specializedServices = [
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum algorithms and quantum security implementations',
      icon: Atom,
      price: 'Custom',
      marketPrice: '$50,000-500,000/month',
      features: ['Quantum Algorithm Development', 'Quantum Security', 'Optimization Problems', 'Research & Development'],
      color: 'text-indigo-400',
      category: 'Quantum'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing and self-optimizing systems for enterprise operations',
      icon: Robot,
      price: 'Custom',
      marketPrice: '$100,000-1,000,000/month',
      features: ['Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Performance Monitoring'],
      color: 'text-emerald-400',
      category: 'Autonomous'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions, smart contracts, and Web3 applications',
      icon: Link,
      price: '$1,999/month',
      marketPrice: '$5,000-20,000/month',
      features: ['Smart Contract Development', 'DApp Creation', 'Token Economics', 'DeFi Solutions'],
      color: 'text-orange-400',
      category: 'Blockchain'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connected devices and edge computing solutions',
      icon: Wifi,
      price: '$1,499/month',
      marketPrice: '$3,000-10,000/month',
      features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Implementation'],
      color: 'text-teal-400',
      category: 'IoT'
    },
    {
      title: 'Business Intelligence',
      description: 'Data-driven insights and predictive analytics for decision-making',
      icon: BarChart3,
      price: '$1,799/month',
      marketPrice: '$4,000-12,000/month',
      features: ['Data Warehousing', 'ETL Processes', 'Advanced Analytics', 'Executive Dashboards'],
      color: 'text-violet-400',
      category: 'Analytics'
    },
    {
      title: 'Robotics Solutions',
      description: 'Intelligent robotic solutions for manufacturing and service industries',
      icon: Cog,
      price: 'Custom',
      marketPrice: '$200,000-2,000,000/month',
      features: ['Robotic Process Automation', 'Computer Vision Integration', 'Human-Robot Collaboration', 'Maintenance Systems'],
      color: 'text-rose-400',
      category: 'Robotics'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="bg-black/20 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Zion Tech Group</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#services" className="text-cyan-400 hover:text-cyan-300 transition-colors">Services</a>
                <a href="#about" className="text-white hover:text-cyan-400 transition-colors">About</a>
                <a href="#contact" className="text-white hover:text-cyan-400 transition-colors">Contact</a>
                <a href="tel:+13024640950" className="bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition-colors">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section
            className={`text-center mb-16 transition-all duration-1000 ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium" role="doc-subtitle">
                Advanced AI and IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">🚀</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">AI-Powered Solutions</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Proven Results</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1 xl:col-span-1">
                  <div className="text-2xl sm:text-3xl mb-3">🌐</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Global Reach</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Serving clients worldwide with 24/7 support and multi-language capabilities</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>

          {/* Micro SAAS Services Section */}
          <section id="services" className="mb-16" aria-labelledby="micro-saas-heading">
            <h2 id="micro-saas-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Micro SAAS Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Powerful, affordable AI-powered tools designed for modern businesses. Save 50-70% compared to market rates.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {microSAASServices.map((service, index) => (
                <article key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </div>
                    </div>
                  )}
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
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
                    <div className="text-lg font-bold text-cyan-400 mb-1">{service.price}</div>
                    <div className="text-xs text-gray-400 mb-2">Market: {service.marketPrice}</div>
                    <div className="text-xs text-green-400 mb-4">Save 50-70% vs market</div>
                    <a 
                      href={service.link} 
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* AI Services Section */}
          <section className="mb-16" aria-labelledby="ai-services-heading">
            <h2 id="ai-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              AI Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Advanced artificial intelligence solutions for enterprise applications. Save 40-60% compared to market rates.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {aiServices.map((service, index) => (
                <article key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
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
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-1 ${service.color}`}>{service.price}</div>
                    <div className="text-xs text-gray-400 mb-2">Market: {service.marketPrice}</div>
                    <div className="text-xs text-green-400 mb-4">Save 40-60% vs market</div>
                    <a 
                      href="/services" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* IT Services Section */}
          <section className="mb-16" aria-labelledby="it-services-heading">
            <h2 id="it-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              IT Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive IT solutions for modern enterprise infrastructure. Save 30-50% compared to market rates.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {itServices.map((service, index) => (
                <article key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
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
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-1 ${service.color}`}>{service.price}</div>
                    <div className="text-xs text-gray-400 mb-2">Market: {service.marketPrice}</div>
                    <div className="text-xs text-green-400 mb-4">Save 30-50% vs market</div>
                    <a 
                      href="/services" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Specialized Solutions Section */}
          <section className="mb-16" aria-labelledby="specialized-heading">
            <h2 id="specialized-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Specialized Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Cutting-edge specialized solutions for next-generation technology needs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {specializedServices.map((service, index) => (
                <article key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-indigo-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-1 ${service.color}`}>{service.price}</div>
                    <div className="text-xs text-gray-400 mb-2">Market: {service.marketPrice}</div>
                    <a 
                      href="/services" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact Information */}
          <section id="contact" className="mb-16" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Get In Touch
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:scale-105 transition-all duration-300">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                <a 
                  href="tel:+13024640950" 
                  onClick={handlePhoneClick}
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Call Now
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:scale-105 transition-all duration-300">
                <Mail className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-pink-400 hover:text-pink-300 font-medium transition-colors"
                >
                  Send Email
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:scale-105 transition-all duration-300">
                <Location className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300 mb-4">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                <a 
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  View on Map
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-black/40 backdrop-blur-md border-t border-cyan-500/20 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">Zion Tech Group</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Leading provider of AI-powered enterprise solutions and digital transformation services.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><a href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Solutions</a></li>
                  <li><a href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">IT Services</a></li>
                  <li><a href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Micro SAAS</a></li>
                  <li><a href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Consulting</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">About Us</a></li>
                  <li><a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Contact</a></li>
                  <li><a href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Blog</a></li>
                  <li><a href="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Careers</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>+1 302 464 0950</p>
                  <p>kleber@ziontechgroup.com</p>
                  <p>364 E Main St STE 1008<br />Middletown, DE 19709</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved. | 
                <a href="/privacy" className="hover:text-cyan-400 transition-colors ml-2">Privacy Policy</a> | 
                <a href="/terms" className="hover:text-cyan-400 transition-colors ml-2">Terms of Service</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;