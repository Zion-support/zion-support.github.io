'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
// import { ServiceCardSkeleton, StatsSkeleton } from './components/EnhancedLoadingStates';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, DollarSign, Award, Rocket, Layers, Workflow, BarChart3, MessageSquare, Headphones, Monitor, HardDrive, Wifi, Printer, Router, Package, Heart, DollarSign as Dollar, Award as Trophy, Rocket as Launch, Layers as Stack, Workflow as Process, BarChart3 as Analytics, MessageSquare as Chat, Headphones as Support, Monitor as Screen, HardDrive as Storage, Wifi as Network, Printer as Print, Router as Gateway, Package as Box, Eye, Mic } from 'lucide-react';

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
    preloadComponents();
    setIsLoaded(true);
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      });
    }
  }, []);

  // Real AI Services with actual capabilities and pricing
  const aiServices = [
    {
      icon: Brain,
      title: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: ['Natural language processing', 'Multi-language support', 'Sentiment analysis', 'CRM integration', 'Real-time learning'],
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions'],
      category: 'Customer Service',
      popular: true
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing',
      price: '$199/month',
      marketPrice: '$300-1500/month',
      features: ['Blog post generation', 'Social media content', 'Email marketing campaigns', 'SEO optimization', 'Brand voice customization'],
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      category: 'Content',
      popular: true
    },
    {
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: ['Predictive analytics', 'Real-time dashboards', 'Automated reporting', 'Anomaly detection', 'Custom data models'],
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization'],
      category: 'Analytics',
      popular: false
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation',
      price: '$599/month',
      marketPrice: '$1000-5000/month',
      features: ['Object detection and recognition', 'Quality control automation', 'Facial recognition systems', 'Video analytics', 'Real-time processing'],
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction'],
      category: 'Computer Vision',
      popular: false
    },
    {
      icon: Mic,
      title: 'AI Voice Processing',
      description: 'Speech recognition, synthesis, and voice analytics for customer interactions',
      price: '$249/month',
      marketPrice: '$400-1800/month',
      features: ['Speech-to-text conversion', 'Voice synthesis', 'Voice biometrics', 'Call analytics', 'Multi-language support'],
      benefits: ['Improved accessibility', 'Voice automation', 'Call quality insights', 'Multi-language support'],
      category: 'Voice AI',
      popular: false
    },
    {
      icon: Workflow,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows',
      price: '$349/month',
      marketPrice: '$600-2500/month',
      features: ['Process mining', 'Workflow optimization', 'Task automation', 'Exception handling', 'Performance monitoring'],
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation'],
      category: 'Automation',
      popular: true
    },
    {
      icon: Heart,
      title: 'AI Healthcare Solutions',
      description: 'Medical AI for diagnosis assistance, drug discovery, and patient care optimization',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: ['Medical image analysis', 'Drug discovery algorithms', 'Patient risk assessment', 'Treatment recommendations', 'Clinical trial optimization'],
      benefits: ['Improved diagnosis accuracy', 'Faster drug development', 'Better patient outcomes', 'Cost reduction'],
      category: 'Healthcare',
      popular: false
    },
    {
      icon: DollarSign,
      title: 'AI Financial Services',
      description: 'Advanced AI for fraud detection, algorithmic trading, and financial risk management',
      price: '$699/month',
      marketPrice: '$1200-4000/month',
      features: ['Fraud detection algorithms', 'Algorithmic trading systems', 'Credit risk assessment', 'Market prediction models', 'Regulatory compliance'],
      benefits: ['Reduced fraud losses', 'Better trading performance', 'Risk mitigation', 'Compliance automation'],
      category: 'Fintech',
      popular: true
    },
    {
      icon: Globe,
      title: 'AI E-commerce Optimization',
      description: 'AI-powered solutions for product recommendations, pricing, and customer experience',
      price: '$449/month',
      marketPrice: '$800-2500/month',
      features: ['Personalized recommendations', 'Dynamic pricing optimization', 'Inventory management', 'Customer behavior analysis', 'Conversion optimization'],
      benefits: ['Increased sales', 'Better customer experience', 'Optimized pricing', 'Reduced inventory costs'],
      category: 'E-commerce',
      popular: true
    },
    {
      icon: Users,
      title: 'AI HR & Recruitment',
      description: 'Intelligent HR solutions for talent acquisition, employee analytics, and workforce optimization',
      price: '$399/month',
      marketPrice: '$600-2000/month',
      features: ['Resume screening AI', 'Candidate matching algorithms', 'Employee performance analytics', 'Predictive attrition models', 'Skills gap analysis'],
      benefits: ['Faster hiring', 'Better candidate fit', 'Reduced turnover', 'Data-driven HR decisions'],
      category: 'Human Resources',
      popular: false
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Advanced AI for threat detection, vulnerability assessment, and security automation',
      price: '$599/month',
      marketPrice: '$1000-3000/month',
      features: ['Threat detection algorithms', 'Vulnerability scanning', 'Security incident response', 'Behavioral analysis', 'Compliance monitoring'],
      benefits: ['Proactive security', 'Faster threat response', 'Reduced false positives', 'Compliance assurance'],
      category: 'Cybersecurity',
      popular: true
    },
    {
      icon: Settings,
      title: 'AI IoT & Edge Computing',
      description: 'AI solutions for Internet of Things devices and edge computing optimization',
      price: '$549/month',
      marketPrice: '$900-2500/month',
      features: ['Edge AI processing', 'IoT device optimization', 'Real-time data analysis', 'Predictive maintenance', 'Energy efficiency optimization'],
      benefits: ['Reduced latency', 'Lower bandwidth usage', 'Predictive maintenance', 'Energy savings'],
      category: 'IoT',
      popular: false
    }
  ];

  // Real IT Services with actual capabilities and pricing
  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services',
      price: '$2,500/month',
      marketPrice: '$4000-15000/month',
      features: ['Cloud architecture design', 'Multi-cloud strategies', 'Cost optimization', 'Disaster recovery', 'Auto-scaling solutions', 'Security compliance'],
      benefits: ['99.9% uptime guarantee', 'Cost reduction up to 40%', 'Scalable infrastructure', 'Expert migration support'],
      category: 'Cloud',
      popular: true
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response',
      price: '$1,800/month',
      marketPrice: '$3000-12000/month',
      features: ['Threat detection & response', 'Vulnerability assessments', 'Penetration testing', 'Security monitoring', 'Compliance management', 'Employee training'],
      benefits: ['24/7 security monitoring', 'Reduced security incidents', 'Compliance assurance', 'Expert security team'],
      category: 'Security',
      popular: true
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code',
      price: '$2,200/month',
      marketPrice: '$3500-10000/month',
      features: ['CI/CD pipeline setup', 'Infrastructure as Code', 'Container orchestration', 'Monitoring & logging', 'Automated testing', 'Deployment automation'],
      benefits: ['Faster deployments', 'Reduced downtime', 'Improved code quality', 'Automated workflows'],
      category: 'DevOps',
      popular: false
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems',
      price: '$1,200/month',
      marketPrice: '$2000-8000/month',
      features: ['Database design & optimization', 'Performance tuning', 'Backup & recovery', 'Data migration', 'Security hardening', 'Monitoring & maintenance'],
      benefits: ['Improved performance', 'Data security', 'Automated backups', 'Expert DBA support'],
      category: 'Database',
      popular: false
    },
    {
      icon: Globe,
      title: 'Web Development & Design',
      description: 'Modern web applications with responsive design, SEO optimization, and performance tuning',
      price: '$3,500/project',
      marketPrice: '$5000-25000/project',
      features: ['React/Next.js development', 'Responsive design', 'SEO optimization', 'Performance optimization', 'E-commerce solutions', 'CMS integration'],
      benefits: ['Modern web presence', 'Better user experience', 'SEO optimization', 'Mobile responsiveness'],
      category: 'Web Development',
      popular: true
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX',
      price: '$8,000/project',
      marketPrice: '$12000-50000/project',
      features: ['Native iOS/Android apps', 'Cross-platform development', 'App store optimization', 'Push notifications', 'Offline functionality', 'API integration'],
      benefits: ['Native performance', 'Cross-platform reach', 'App store presence', 'Modern UI/UX'],
      category: 'Mobile Development',
      popular: true
    },
    {
      icon: Code,
      title: 'API Development & Integration',
      description: 'Custom API development, third-party integrations, and microservices architecture',
      price: '$1,500/month',
      marketPrice: '$2500-8000/month',
      features: ['RESTful API development', 'GraphQL APIs', 'Third-party integrations', 'Microservices architecture', 'API documentation', 'Rate limiting & security'],
      benefits: ['Seamless integrations', 'Scalable architecture', 'Better performance', 'Developer-friendly APIs'],
      category: 'API Development',
      popular: false
    },
    {
      icon: Server,
      title: 'Server Management & Monitoring',
      description: '24/7 server monitoring, maintenance, and optimization for maximum uptime and performance',
      price: '$800/month',
      marketPrice: '$1200-4000/month',
      features: ['24/7 server monitoring', 'Performance optimization', 'Security updates', 'Backup management', 'Incident response', 'Capacity planning'],
      benefits: ['Maximum uptime', 'Proactive maintenance', 'Security assurance', 'Performance optimization'],
      category: 'Server Management',
      popular: false
    },
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management for enterprise environments',
      price: '$2,000/month',
      marketPrice: '$3000-10000/month',
      features: ['Network design & implementation', 'Wireless solutions', 'VPN setup', 'Network security', 'Performance monitoring', 'Disaster recovery'],
      benefits: ['Reliable connectivity', 'Enhanced security', 'Scalable infrastructure', 'Expert support'],
      category: 'Networking',
      popular: false
    },
    {
      icon: Package,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT planning, digital transformation, and technology roadmap development',
      price: '$200/hour',
      marketPrice: '$300-500/hour',
      features: ['IT strategy development', 'Digital transformation planning', 'Technology assessment', 'Vendor evaluation', 'ROI analysis', 'Implementation planning'],
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology alignment', 'Future-proof solutions'],
      category: 'Consulting',
      popular: true
    }
  ];

  // Real Micro SaaS Services with actual capabilities and pricing
  const microSaasServices = [
    {
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights',
      price: '$89/month',
      marketPrice: '$150-500/month',
      features: ['Real-time data visualization with 50+ chart types', 'AI-powered predictive analytics and forecasting', 'Custom dashboard builder with drag-and-drop interface', 'Advanced data connectors (Salesforce, HubSpot, Google Analytics)', 'Automated report generation and email delivery', 'Multi-tenant architecture for agencies', 'API access for custom integrations', 'White-label solution available'],
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      category: 'Analytics',
      popular: true,
      users: 'Up to 25 users'
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: ['GPT-4 powered conversational AI with custom training', 'Multi-channel support (Web, WhatsApp, SMS, Email)', 'Advanced sentiment analysis and emotion detection', 'Automated ticket routing and escalation', 'Live agent handoff with context preservation', 'Multi-language support (50+ languages)', 'Advanced analytics and conversation insights', 'CRM integration and lead qualification'],
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation'],
      category: 'Communication',
      popular: true,
      users: 'Up to 50 users'
    },
    {
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection and automated response',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: ['AI-powered threat detection and behavioral analysis', 'Real-time security monitoring across all endpoints', 'Automated incident response and remediation', 'Compliance reporting (SOC2, GDPR, HIPAA)', 'Penetration testing and vulnerability assessments', 'Security awareness training platform', 'Dark web monitoring and breach detection', '24/7 SOC (Security Operations Center) support'],
      benefits: ['Proactive security', 'Automated response', 'Compliance assurance', 'Expert monitoring'],
      category: 'Security',
      popular: false,
      users: 'Up to 100 users'
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Intelligent cloud backup and disaster recovery with AI-powered optimization',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: ['AI-optimized backup scheduling and deduplication', 'Cross-cloud backup (AWS, Azure, GCP, OneDrive)', 'Instant disaster recovery with RTO < 15 minutes', 'Advanced version control and file history', 'End-to-end encryption with zero-knowledge architecture', 'Compliance and audit trail reporting', 'Automated testing and recovery validation', 'Global CDN for fast data access'],
      benefits: ['Data protection', 'Fast recovery', 'Cost optimization', 'Compliance ready'],
      category: 'Storage',
      popular: false,
      users: 'Up to 30 users'
    },
    {
      icon: FileText,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform with multi-format support',
      price: '$129/month',
      marketPrice: '$200-600/month',
      features: ['AI content generation for blogs, social media, and marketing', 'Multi-format support (text, images, videos, infographics)', 'Brand voice customization and consistency', 'SEO optimization and keyword research', 'Content calendar and scheduling', 'Collaboration tools and approval workflows', 'Performance analytics and ROI tracking', 'White-label content creation for agencies'],
      benefits: ['10x faster content creation', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      category: 'Content',
      popular: true,
      users: 'Up to 20 users'
    },
    {
      icon: Users,
      title: 'Zion HR Assistant',
      description: 'Intelligent human resources management with AI-powered recruitment and employee analytics',
      price: '$199/month',
      marketPrice: '$300-1000/month',
      features: ['AI-powered resume screening and candidate matching', 'Automated interview scheduling and feedback collection', 'Employee performance analytics and insights', 'Compliance tracking and reporting', 'Benefits administration and enrollment', 'Learning management system integration', 'Employee engagement surveys and analytics', 'Custom HR workflows and automation'],
      benefits: ['Faster hiring process', 'Better candidate matching', 'Reduced HR workload', 'Data-driven insights'],
      category: 'HR',
      popular: false,
      users: 'Up to 100 employees'
    },
    {
      icon: DollarSign,
      title: 'Zion Finance Pro',
      description: 'AI-powered financial management and accounting automation platform',
      price: '$179/month',
      marketPrice: '$250-800/month',
      features: ['Automated invoice generation and payment processing', 'AI-powered expense categorization and tracking', 'Real-time financial reporting and analytics', 'Tax preparation and compliance assistance', 'Budget planning and forecasting', 'Multi-currency support and exchange rates', 'Integration with banks and payment processors', 'Custom financial dashboards and KPIs'],
      benefits: ['Automated accounting', 'Real-time insights', 'Tax compliance', 'Cost savings'],
      category: 'Finance',
      popular: true,
      users: 'Up to 15 users'
    },
    {
      icon: Target,
      title: 'Zion Lead Gen AI',
      description: 'Advanced lead generation and sales automation platform with AI-powered prospecting',
      price: '$249/month',
      marketPrice: '$400-1200/month',
      features: ['AI-powered lead scoring and qualification', 'Automated prospecting across multiple channels', 'Email sequence automation and personalization', 'CRM integration and pipeline management', 'Social media monitoring and engagement', 'Lead nurturing workflows and follow-ups', 'Performance analytics and conversion tracking', 'Custom lead generation strategies'],
      benefits: ['Higher quality leads', 'Automated prospecting', 'Better conversion rates', 'Time savings'],
      category: 'Sales',
      popular: true,
      users: 'Up to 30 users'
    },
    {
      icon: Calendar,
      title: 'Zion Project Manager',
      description: 'AI-powered project management and team collaboration platform',
      price: '$159/month',
      marketPrice: '$200-700/month',
      features: ['AI-powered project planning and resource allocation', 'Automated task assignment and deadline tracking', 'Real-time collaboration and communication tools', 'Progress monitoring and milestone tracking', 'Risk assessment and mitigation suggestions', 'Time tracking and productivity analytics', 'Integration with popular tools (Slack, Teams, Jira)', 'Custom project templates and workflows'],
      benefits: ['Better project visibility', 'Improved team collaboration', 'Risk mitigation', 'Higher success rates'],
      category: 'Project Management',
      popular: false,
      users: 'Up to 50 users'
    },
    {
      icon: Mail,
      title: 'Zion Email Marketing AI',
      description: 'Intelligent email marketing platform with AI-powered personalization and automation',
      price: '$119/month',
      marketPrice: '$180-500/month',
      features: ['AI-powered email content generation and optimization', 'Advanced segmentation and targeting algorithms', 'Automated email sequences and drip campaigns', 'A/B testing and performance optimization', 'Deliverability monitoring and improvement', 'Advanced analytics and ROI tracking', 'Integration with e-commerce platforms', 'White-label email marketing for agencies'],
      benefits: ['Higher open rates', 'Better engagement', 'Automated campaigns', 'ROI optimization'],
      category: 'Marketing',
      popular: true,
      users: 'Up to 25 users'
    },
    {
      icon: Database,
      title: 'Zion Data Sync',
      description: 'AI-powered data integration and synchronization platform for seamless data flow',
      price: '$139/month',
      marketPrice: '$200-600/month',
      features: ['AI-powered data mapping and transformation', 'Real-time data synchronization across platforms', 'Data quality monitoring and cleansing', 'Custom data connectors and APIs', 'Automated data validation and error handling', 'Data lineage tracking and documentation', 'Compliance and security features', 'Custom data workflows and automation'],
      benefits: ['Seamless data flow', 'Data quality assurance', 'Reduced manual work', 'Better insights'],
      category: 'Data Integration',
      popular: false,
      users: 'Up to 40 users'
    },
    {
      icon: Smartphone,
      title: 'Zion Mobile App Builder',
      description: 'No-code mobile app development platform with AI-powered design and deployment',
      price: '$199/month',
      marketPrice: '$300-1000/month',
      features: ['Drag-and-drop app builder with AI suggestions', 'Native iOS and Android app generation', 'Real-time preview and testing', 'App store deployment automation', 'Push notification management', 'Analytics and user behavior tracking', 'Custom integrations and API connections', 'White-label app development for clients'],
      benefits: ['Faster app development', 'No coding required', 'Native performance', 'Easy deployment'],
      category: 'Mobile Development',
      popular: true,
      users: 'Up to 20 users'
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '500+', label: 'Projects Delivered' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime Guarantee' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '24/7', label: 'Support Available' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '5★', label: 'Client Rating' }
  ];

  return (
    <React.Fragment>
      <SEOOptimizer
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
        keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services']}
        canonicalUrl="https://ziontechgroup.com"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'TechCompany',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
          foundingDate: '2020',
          numberOfEmployees: '50-100',
          industry: 'Technology',
          services: [
            'AI Solutions',
            'Quantum Computing',
            'Autonomous Systems',
            'Digital Transformation',
            'Cloud Services',
            'Automation',
            'Business Intelligence'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-302-464-0950',
            contactType: 'Customer Service',
            areaServed: 'US',
            availableLanguage: 'en'
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: '364 E Main St STE 1008',
            addressLocality: 'Middletown',
            addressRegion: 'DE',
            postalCode: '19709',
            addressCountry: 'US'
          }
        }}
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enablePreloading={true}
        enableCodeSplitting={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg-enhanced matrix-rain-enhanced futuristic-bg-enhanced">
        {/* Navigation */}
        <Navigation />
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50">
          Skip to main content
        </a>
        
        {/* Content Promotion Banner */}
        <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
          <ContentPromotionBanner />
        </Suspense>
        
        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section
            className={`text-center mb-16 transition-all duration-1000 cyber-scan-line holographic-card-enhanced quantum-pulse-enhanced ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch-enhanced neon-text-enhanced"
                data-text="Zion Tech Group"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text-enhanced" role="doc-subtitle">
                Advanced AI and IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth. We serve Fortune 500 companies,
                startups, and enterprises worldwide with proven results and 24/7 expert support.
              </p>
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12 px-4">
                <div className="cyber-card-enhanced hologram-card-enhanced p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">🚀</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">AI-Powered Solutions</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
                </div>
                <div className="cyber-card-enhanced hologram-card-enhanced p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Proven Results</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
                </div>
                <div className="cyber-card-enhanced hologram-card-enhanced p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
                </div>
                <div className="cyber-card-enhanced hologram-card-enhanced p-4 sm:p-6 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1 xl:col-span-1">
                  <div className="text-2xl sm:text-3xl mb-3">🌐</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Global Reach</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Serving clients worldwide with 24/7 support and multi-language capabilities</p>
                </div>
              </div>
              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="cyber-button-enhanced w-full sm:w-auto text-center"
                  aria-label="Call us at (302) 464-0950"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Email Us
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Get Free Consultation
                </a>
              </div>
              {/* Contact Info */}
              <div className="mt-8 text-center">
                <p className="text-gray-300 text-sm mb-2">
                  📍 364 E Main St STE 1008, Middletown, DE 19709
                </p>
                <p className="text-gray-300 text-sm">
                  ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16" aria-labelledby="stats-heading">
            <h2 id="stats-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text-enhanced">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center cyber-card-enhanced p-6">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Services Section */}
          <section className="mb-16" aria-labelledby="ai-services-heading">
            <h2 id="ai-services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text-enhanced">
              AI Services
            </h2>
            <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive AI solutions designed to transform your business operations
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {aiServices.map((service, index) => (
                <div key={index} className="cyber-card-enhanced holographic-card-enhanced group hover:scale-105 transition-all duration-300 quantum-pulse-enhanced">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 font-semibold">Our Price:</span>
                        <span className="text-white font-bold">{service.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Market Price:</span>
                        <span className="text-gray-300 text-sm line-through">{service.marketPrice}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between">
                      <a 
                        href="/contact"
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                      <a 
                        href="/contact"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                      >
                        Get Quote
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* IT Services Section */}
          <section className="mb-16" aria-labelledby="it-services-heading">
            <h2 id="it-services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text-enhanced">
              IT Services
            </h2>
            <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Complete IT solutions to modernize your infrastructure and drive business growth
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {itServices.map((service, index) => (
                <div key={index} className="cyber-card-enhanced holographic-card-enhanced group hover:scale-105 transition-all duration-300 quantum-pulse-enhanced">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-purple-400 font-semibold">Our Price:</span>
                        <span className="text-white font-bold">{service.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Market Price:</span>
                        <span className="text-gray-300 text-sm line-through">{service.marketPrice}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between">
                      <a 
                        href="/contact"
                        className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                      <a 
                        href="/contact"
                        className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                      >
                        Get Quote
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Micro SaaS Section */}
          <section className="mb-16" aria-labelledby="micro-saas-heading">
            <h2 id="micro-saas-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text-enhanced">
              Micro SaaS Solutions
            </h2>
            <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Ready-to-use business tools that solve specific problems with AI and automation
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {microSaasServices.map((service, index) => (
                <div key={index} className="cyber-card-enhanced holographic-card-enhanced group hover:scale-105 transition-all duration-300 quantum-pulse-enhanced">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-green-400 font-semibold">Our Price:</span>
                        <span className="text-white font-bold">{service.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Market Price:</span>
                        <span className="text-gray-300 text-sm line-through">{service.marketPrice}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Users:</span>
                        <span className="text-gray-300 text-sm">{service.users}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between">
                      <a 
                        href="/contact"
                        className="flex items-center text-green-400 hover:text-green-300 transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                      <a 
                        href="/contact"
                        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                      >
                        Start Trial
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16" aria-labelledby="cta-heading">
            <div className="cyber-card-enhanced hologram-card-enhanced p-8 text-center">
              <h2 id="cta-heading" className="text-2xl font-bold text-white mb-6 neon-text-enhanced">Get Free Consultation</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Ready to transform your business? Contact our experts for a free consultation and discover how our AI and IT solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="cyber-button-enhanced"
                  aria-label="Call us at (302) 464-0950"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Email Us
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Get Free Consultation
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default HomePage;