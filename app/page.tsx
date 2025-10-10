'use client';
import React, { useCallback, useState, useEffect, lazy, Suspense } from 'react';
import { Phone, Mail, MapPin, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cube, Mic, DollarSign, Truck, Link, HardDrive, FileCheck } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import SEOEnhancer from './components/SEOEnhancer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Analytics from './components/Analytics';
import EnhancedSEOOptimizer from './components/EnhancedSEOOptimizer';
import EnhancedPerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import EnhancedAnalytics from './components/EnhancedAnalytics';
import SecurityEnhancer from './components/SecurityEnhancer';
import ErrorBoundary from './components/ErrorBoundary';
import ServiceWorker from './components/ServiceWorker';
import { ServiceCardSkeleton, HeroSkeleton } from './components/LoadingSkeleton';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import EnhancedSEO from './components/EnhancedSEO';

// Lazy load new components
const HeroSection = lazy(() => import('./components/HeroSection'));
const ServicesGrid = lazy(() => import('./components/ServicesGrid'));
const ContactSection = lazy(() => import('./components/ContactSection'));

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

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    setIsHydrated(true);
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

  // Contact information
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const microSAASServices = [
    // Productivity & Management Tools
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment. Trusted by 10,000+ teams worldwide.',
      icon: '📊',
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization', 'Gantt charts', 'Time tracking'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity',
      rating: 4.9,
      users: '10,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Content Writer Pro',
      description: 'Generate high-quality content with AI-powered writing assistance for blogs, social media, and marketing materials. Create 10x more content in half the time.',
      icon: '✍️',
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['Blog posts', 'Social media content', 'Product descriptions', 'SEO optimization', 'Brand voice consistency', 'Multi-language support', 'Content templates', 'Plagiarism check'],
      benefits: ['10x content output', 'SEO optimized', 'Brand voice consistency', '50% time saved'],
      link: '/ai-content-writer',
      popular: true,
      category: 'Content',
      rating: 4.8,
      users: '12,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Social Media Manager Pro',
      description: 'Automate your social media with AI-powered content creation, smart scheduling, and audience intelligence. Increase engagement by 200%.',
      icon: '📱',
      price: '$69/month',
      originalPrice: '$99/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence', 'Multi-platform management', 'Hashtag optimization', 'Engagement tracking', 'Competitor analysis'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', 'Better audience targeting'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing',
      rating: 4.7,
      users: '15,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Email Marketing Suite',
      description: 'Transform your email marketing with AI-powered content generation, automation, and personalization. Boost open rates by 65%.',
      icon: '📧',
      price: '$59/month',
      originalPrice: '$89/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns', 'A/B testing', 'Personalization', 'Deliverability optimization', 'Template library'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved', 'Better engagement'],
      link: '/ai-email-marketing',
      popular: true,
      category: 'Marketing',
      rating: 4.6,
      users: '9,500+',
      freeTrial: '14 days'
    },
    {
      title: 'AI SEO Optimizer Pro',
      description: 'AI-powered SEO analysis and optimization recommendations to boost your search rankings and organic traffic. Increase traffic by 150%.',
      icon: '🔍',
      price: '$79/month',
      originalPrice: '$119/month',
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Competitor analysis', 'Rank tracking', 'Backlink analysis', 'Site audit', 'Performance monitoring'],
      benefits: ['150% traffic increase', 'Top 3 rankings', '40% more leads', 'ROI tracking'],
      link: '/ai-seo-optimizer',
      popular: true,
      category: 'Marketing',
      rating: 4.8,
      users: '7,200+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Lead Generation Pro',
      description: 'Automated lead generation and qualification system with AI-powered prospecting and outreach. Generate 35% more qualified leads.',
      icon: '🎯',
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['Lead scoring', 'Contact discovery', 'Email outreach', 'CRM integration', 'Prospect research', 'Follow-up automation', 'Lead nurturing', 'Conversion tracking'],
      benefits: ['35% more leads', '50% conversion increase', '25% revenue growth', 'Automated follow-ups'],
      link: '/ai-lead-generation',
      popular: true,
      category: 'Marketing',
      rating: 4.7,
      users: '6,800+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Customer Support Bot Pro',
      description: 'Provide 24/7 intelligent customer support with AI-powered chatbot and ticket management. Handle 80% of queries automatically.',
      icon: '🤖',
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights', 'Multi-language support', 'Integration APIs', 'Knowledge base', 'Sentiment analysis'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically', '24/7 support'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Support',
      rating: 4.8,
      users: '11,500+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Code Review Assistant Pro',
      description: 'Advanced automated code analysis with AI-powered bug detection, security scanning, and optimization suggestions. Reduce bugs by 70%.',
      icon: '💻',
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration', 'Best practice recommendations', 'Code quality metrics', 'Team collaboration', 'CI/CD integration'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality', 'Better security'],
      link: '/ai-code-generation',
      popular: true,
      category: 'Development',
      rating: 4.7,
      users: '7,800+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Data Analytics Pro',
      description: 'Transform your data into actionable insights with AI-powered analytics and business intelligence. Increase revenue by 45%.',
      icon: '📈',
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking', 'Predictive modeling', 'Custom reports', 'Data visualization', 'Integration APIs'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', 'Data-driven decisions'],
      link: '/ai-data-analytics',
      popular: true,
      category: 'Analytics',
      rating: 4.8,
      users: '9,600+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Video Generator Pro',
      description: 'Create professional videos with AI-powered editing, content generation, and automated production. Reduce production time by 90%.',
      icon: '🎬',
      price: '$149/month',
      originalPrice: '$199/month',
      features: ['AI video editing', 'Auto-generated content', 'Voice synthesis', 'Multi-language support', 'Template library', 'Brand customization', 'Export options', 'Analytics'],
      benefits: ['90% time reduction', 'Professional quality', 'Unlimited exports', 'Cost effective'],
      link: '/ai-video-generation',
      popular: true,
      category: 'Creative',
      rating: 4.7,
      users: '7,400+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Sales Automation Pro',
      description: 'Boost sales with AI-powered lead generation, conversion optimization, and sales process automation. Increase sales by 35%.',
      icon: '💰',
      price: '$149/month',
      originalPrice: '$199/month',
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting', 'CRM integration', 'Email sequences', 'Call scheduling', 'Performance analytics', 'A/B testing'],
      benefits: ['35% more leads', '50% conversion increase', '25% revenue growth', 'Automated processes'],
      link: '/ai-sales-automation',
      popular: true,
      category: 'Sales',
      rating: 4.7,
      users: '8,100+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Cybersecurity Shield Pro',
      description: 'Advanced AI-powered security monitoring, threat detection, and vulnerability assessment. Achieve 99.9% security uptime.',
      icon: '🛡️',
      price: '$199/month',
      originalPrice: '$299/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Security monitoring', 'Incident response', 'Compliance checking', 'Risk assessment', 'Security reports', '24/7 monitoring'],
      benefits: ['99.9% security uptime', 'Faster threat response', 'Compliance ready', 'Peace of mind'],
      link: '/ai-cybersecurity',
      popular: true,
      category: 'Security',
      rating: 4.9,
      users: '6,200+',
      freeTrial: '14 days'
    }
  ];

  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom machine learning models and algorithms tailored to your business needs. From data preprocessing to model deployment.',
      icon: Brain,
      price: 'Custom',
      features: ['Custom ML models', 'Data preprocessing', 'Model training', 'Model deployment', 'Performance monitoring', 'A/B testing', 'Scalable infrastructure', 'Expert consultation'],
      benefits: ['Custom solutions', 'Scalable architecture', 'Expert support', 'Proven results'],
      link: '/machine-learning',
      popular: true,
      category: 'AI',
      rating: 4.9,
      users: '500+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Business Intelligence',
      description: 'Transform your data into actionable insights with AI-powered business intelligence and analytics platforms.',
      icon: BarChart,
      price: 'Custom',
      features: ['AI-powered insights', 'Real-time dashboards', 'Predictive analytics', 'Data visualization', 'Custom reports', 'Integration APIs', 'Performance monitoring', 'Expert consultation'],
      benefits: ['Data-driven decisions', 'Real-time insights', 'Predictive capabilities', 'Custom solutions'],
      link: '/ai-business-intelligence',
      popular: true,
      category: 'AI',
      rating: 4.8,
      users: '300+',
      freeTrial: '30 days'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.',
      icon: MessageSquare,
      price: 'Custom',
      features: ['Text analysis', 'Sentiment analysis', 'Language translation', 'Conversational AI', 'Document processing', 'Content generation', 'Search optimization', 'Expert consultation'],
      benefits: ['Better understanding', 'Automated processing', 'Multilingual support', 'Custom solutions'],
      link: '/nlp',
      popular: true,
      category: 'AI',
      rating: 4.7,
      users: '400+',
      freeTrial: '30 days'
    },
    {
      title: 'Computer Vision',
      description: 'AI-powered image and video analysis solutions for object detection, facial recognition, and visual content understanding.',
      icon: Eye,
      price: 'Custom',
      features: ['Object detection', 'Facial recognition', 'Image classification', 'Video analysis', 'Real-time processing', 'Custom models', 'API integration', 'Expert consultation'],
      benefits: ['Visual intelligence', 'Real-time processing', 'Custom models', 'Scalable solutions'],
      link: '/computer-vision',
      popular: true,
      category: 'AI',
      rating: 4.8,
      users: '350+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation solutions to streamline workflows and reduce manual tasks across your organization.',
      icon: Zap,
      price: 'Custom',
      features: ['Process automation', 'Workflow optimization', 'Task automation', 'Integration APIs', 'Monitoring & analytics', 'Custom solutions', 'Scalable architecture', 'Expert consultation'],
      benefits: ['Reduced manual work', 'Improved efficiency', 'Cost savings', 'Scalable solutions'],
      link: '/ai-automation',
      popular: true,
      category: 'AI',
      rating: 4.7,
      users: '600+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Cybersecurity',
      description: 'Advanced AI-powered security solutions for threat detection, vulnerability assessment, and automated incident response.',
      icon: Shield,
      price: 'Custom',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Security monitoring', 'Compliance checking', 'Risk assessment', '24/7 monitoring', 'Expert consultation'],
      benefits: ['Enhanced security', 'Faster response', 'Compliance ready', 'Peace of mind'],
      link: '/ai-cybersecurity',
      popular: true,
      category: 'AI',
      rating: 4.9,
      users: '250+',
      freeTrial: '30 days'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Services',
      description: 'Comprehensive cloud solutions including migration, optimization, and management across AWS, Azure, and Google Cloud.',
      icon: Cloud,
      price: 'Custom',
      features: ['Cloud migration', 'Infrastructure setup', 'Cost optimization', 'Security configuration', 'Monitoring & analytics', 'Backup & recovery', 'Scalable architecture', 'Expert consultation'],
      benefits: ['Scalable infrastructure', 'Cost optimization', 'Enhanced security', 'Expert support'],
      link: '/cloud-services',
      popular: true,
      category: 'IT',
      rating: 4.8,
      users: '800+',
      freeTrial: '30 days'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, and security compliance.',
      icon: Shield,
      price: 'Custom',
      features: ['Security assessment', 'Threat detection', 'Vulnerability scanning', 'Compliance checking', 'Security training', 'Incident response', '24/7 monitoring', 'Expert consultation'],
      benefits: ['Enhanced security', 'Compliance ready', 'Faster response', 'Peace of mind'],
      link: '/cybersecurity',
      popular: true,
      category: 'IT',
      rating: 4.9,
      users: '700+',
      freeTrial: '30 days'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Modern DevOps practices and CI/CD pipeline implementation for faster, more reliable software delivery.',
      icon: Settings,
      price: 'Custom',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Container orchestration', 'Monitoring & logging', 'Automated testing', 'Deployment automation', 'Scalable architecture', 'Expert consultation'],
      benefits: ['Faster delivery', 'Improved reliability', 'Automated processes', 'Scalable solutions'],
      link: '/devops',
      popular: true,
      category: 'IT',
      rating: 4.7,
      users: '600+',
      freeTrial: '30 days'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, migration, and management services for improved performance and scalability.',
      icon: Database,
      price: 'Custom',
      features: ['Database design', 'Performance optimization', 'Migration services', 'Backup & recovery', 'Security configuration', 'Monitoring & analytics', 'Scalable architecture', 'Expert consultation'],
      benefits: ['Improved performance', 'Enhanced security', 'Scalable solutions', 'Expert support'],
      link: '/database-services',
      popular: true,
      category: 'IT',
      rating: 4.8,
      users: '500+',
      freeTrial: '30 days'
    },
    {
      title: 'Network Infrastructure',
      description: 'Enterprise network design, implementation, and management for optimal performance and security.',
      icon: Globe,
      price: 'Custom',
      features: ['Network design', 'Infrastructure setup', 'Security configuration', 'Performance optimization', 'Monitoring & analytics', 'Backup & recovery', 'Scalable architecture', 'Expert consultation'],
      benefits: ['Optimal performance', 'Enhanced security', 'Scalable solutions', 'Expert support'],
      link: '/network-infrastructure',
      popular: true,
      category: 'IT',
      rating: 4.7,
      users: '400+',
      freeTrial: '30 days'
    },
    {
      title: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support and helpdesk services to keep your systems running smoothly and efficiently.',
      icon: Users,
      price: 'Custom',
      features: ['24/7 support', 'Helpdesk services', 'System maintenance', 'Troubleshooting', 'User training', 'Documentation', 'Performance monitoring', 'Expert consultation'],
      benefits: ['24/7 support', 'Reduced downtime', 'Improved efficiency', 'Expert assistance'],
      link: '/it-support',
      popular: true,
      category: 'IT',
      rating: 4.8,
      users: '900+',
      freeTrial: '30 days'
    }
  ];

  const specializedServices = [
    {
      title: 'Quantum Computing',
      description: 'Cutting-edge quantum computing solutions for complex problem-solving and optimization challenges.',
      icon: Cpu,
      price: 'Custom',
      features: ['Quantum algorithms', 'Optimization problems', 'Simulation services', 'Research & development', 'Custom solutions', 'Expert consultation', 'Scalable architecture', 'Future-ready technology'],
      benefits: ['Exponential speedup', 'Complex problem solving', 'Future-ready', 'Expert support'],
      link: '/quantum-computing',
      popular: true,
      category: 'Specialized',
      rating: 4.9,
      users: '50+',
      freeTrial: '60 days'
    },
    {
      title: 'Autonomous Systems',
      description: 'Intelligent autonomous systems for self-managing operations and automated decision-making processes.',
      icon: Settings,
      price: 'Custom',
      features: ['Self-managing systems', 'Automated decision making', 'Machine learning integration', 'Real-time monitoring', 'Custom solutions', 'Expert consultation', 'Scalable architecture', 'Future-ready technology'],
      benefits: ['Reduced manual intervention', 'Improved efficiency', 'Self-optimizing systems', 'Expert support'],
      link: '/autonomous-systems',
      popular: true,
      category: 'Specialized',
      rating: 4.8,
      users: '75+',
      freeTrial: '60 days'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Blockchain solutions and Web3 technologies for decentralized applications and secure transactions.',
      icon: Lock,
      price: 'Custom',
      features: ['Blockchain development', 'Smart contracts', 'DeFi solutions', 'NFT platforms', 'Web3 integration', 'Security auditing', 'Custom solutions', 'Expert consultation'],
      benefits: ['Decentralized solutions', 'Enhanced security', 'Transparent transactions', 'Future-ready technology'],
      link: '/blockchain',
      popular: true,
      category: 'Specialized',
      rating: 4.7,
      users: '100+',
      freeTrial: '60 days'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Internet of Things solutions with edge computing capabilities for real-time data processing and analysis.',
      icon: Globe,
      price: 'Custom',
      features: ['IoT device integration', 'Edge computing', 'Real-time processing', 'Data analytics', 'Security implementation', 'Custom solutions', 'Expert consultation', 'Scalable architecture'],
      benefits: ['Real-time processing', 'Reduced latency', 'Scalable solutions', 'Expert support'],
      link: '/iot-edge',
      popular: true,
      category: 'Specialized',
      rating: 4.8,
      users: '150+',
      freeTrial: '60 days'
    },
    {
      title: 'Business Intelligence',
      description: 'Advanced business intelligence solutions for data-driven decision making and strategic planning.',
      icon: BarChart,
      price: 'Custom',
      features: ['Data visualization', 'Predictive analytics', 'Custom dashboards', 'Report generation', 'Data integration', 'Performance monitoring', 'Custom solutions', 'Expert consultation'],
      benefits: ['Data-driven decisions', 'Real-time insights', 'Custom solutions', 'Expert support'],
      link: '/business-intelligence',
      popular: true,
      category: 'Specialized',
      rating: 4.7,
      users: '200+',
      freeTrial: '60 days'
    },
    {
      title: 'Robotics Solutions',
      description: 'Intelligent robotics solutions for automation, manufacturing, and service applications.',
      icon: Settings,
      price: 'Custom',
      features: ['Robotic automation', 'Manufacturing solutions', 'Service robots', 'AI integration', 'Custom solutions', 'Expert consultation', 'Scalable architecture', 'Future-ready technology'],
      benefits: ['Automated processes', 'Improved efficiency', 'Custom solutions', 'Expert support'],
      link: '/robotics',
      popular: true,
      category: 'Specialized',
      rating: 4.8,
      users: '80+',
      freeTrial: '60 days'
    }
  ];

  return (
    <ErrorBoundary>
      <SEOOptimizer
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
        keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services', 'artificial intelligence', 'business intelligence', 'data analytics', 'cybersecurity', 'cloud migration', 'DevOps', 'IT consulting']}
        canonicalUrl="https://ziontechgroup.com"
        ogImage="https://ziontechgroup.com/og-image.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "Advanced AI and IT Solutions",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          }
        }}
      >
        <div className="min-h-screen bg-slate-900">
          <Navigation />
          
          {/* Hero Section */}
          <Suspense fallback={<HeroSkeleton />}>
            <HeroSection 
              contactInfo={contactInfo} 
              onPhoneClick={handlePhoneClick} 
            />
          </Suspense>

          {/* Micro SAAS Services Section */}
          <Suspense fallback={<ServiceCardSkeleton />}>
            <ServicesGrid
              services={microSAASServices}
              title="Micro SAAS Solutions"
              description="Powerful AI-powered micro SAAS tools designed for modern businesses. Boost productivity, automate processes, and scale efficiently."
              bgColor="bg-slate-800/50"
              borderColor="border-cyan-400/20"
              textColor="text-cyan-400"
              buttonColor="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
              buttonHoverColor="hover:from-cyan-700 hover:to-purple-700"
            />
          </Suspense>

          {/* AI Services Section */}
          <Suspense fallback={<ServiceCardSkeleton />}>
            <ServicesGrid
              services={aiServices}
              title="AI Services & Solutions"
              description="Advanced AI solutions for enterprise clients. Transform your business with cutting-edge artificial intelligence."
              bgColor="bg-slate-900/50"
              borderColor="border-purple-400/20"
              textColor="text-purple-400"
              buttonColor="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              buttonHoverColor="hover:from-purple-700 hover:to-pink-700"
            />
          </Suspense>

          {/* IT Services Section */}
          <Suspense fallback={<ServiceCardSkeleton />}>
            <ServicesGrid
              services={itServices}
              title="IT Services & Solutions"
              description="Comprehensive IT services to modernize your infrastructure and accelerate your digital transformation."
              bgColor="bg-slate-800/50"
              borderColor="border-green-400/20"
              textColor="text-green-400"
              buttonColor="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              buttonHoverColor="hover:from-green-700 hover:to-emerald-700"
            />
          </Suspense>

          {/* Specialized Services Section */}
          <Suspense fallback={<ServiceCardSkeleton />}>
            <ServicesGrid
              services={specializedServices}
              title="Specialized Solutions"
              description="Cutting-edge specialized solutions for the future. Quantum computing, autonomous systems, and more."
              bgColor="bg-slate-900/50"
              borderColor="border-orange-400/20"
              textColor="text-orange-400"
              buttonColor="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
              buttonHoverColor="hover:from-orange-700 hover:to-red-700"
            />
          </Suspense>

          {/* Contact Section */}
          <Suspense fallback={<div className="h-96 bg-slate-800 animate-pulse"></div>}>
            <ContactSection 
              contactInfo={contactInfo} 
              onPhoneClick={handlePhoneClick} 
            />
          </Suspense>

          {/* Performance and SEO Components */}
          <PerformanceMonitor />
          <AccessibilityEnhancer />
          <Analytics />
          <ServiceWorker />
          
          <Footer />
        </div>
      </SEOOptimizer>
    </ErrorBoundary>
  );
};

export default HomePage;