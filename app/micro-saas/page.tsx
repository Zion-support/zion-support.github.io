'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
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
  DollarSign, 
  Award, 
  Lock, 
  Database, 
  Cloud, 
  Code, 
  Smartphone, 
  Settings, 
  BarChart3, 
  FileText, 
  Search, 
  Bot, 
  Palette, 
  Camera, 
  Music, 
  Video, 
  Gamepad2, 
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
  Calendar, 
  Clock3, 
  Compass, 
  Globe2, 
  Map, 
  Navigation, 
  PieChart, 
  TrendingDown, 
  Activity, 
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
  Play,
  Pause,
  RefreshCw,
  Download,
  Upload,
  Share2,
  ExternalLink,
  Plus,
  Minus,
  X,
  ChevronRight,
  ChevronDown,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Loader2
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [demoData, setDemoData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  const microSAASServices = [
    {
      id: 'ai-code-review',
      title: 'AI Code Review Assistant',
      icon: Code,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      price: '$199/month',
      description: 'Automated code analysis and quality improvement suggestions with real-time feedback',
      features: [
        'Real-time code quality analysis',
        'Security vulnerability detection',
        'Performance optimization suggestions',
        'Best practice recommendations',
        'Multi-language support (Python, JavaScript, Java, C++, Go)',
        'Integration with GitHub, GitLab, Bitbucket',
        'Custom rule configuration',
        'Team collaboration features'
      ],
      benefits: [
        'Reduce code review time by 70%',
        'Catch bugs before production',
        'Improve code maintainability',
        'Enhance team productivity'
      ],
      demo: {
        title: 'Live Code Analysis Demo',
        description: 'Upload your code and see AI-powered analysis in action',
        features: ['Syntax highlighting', 'Error detection', 'Performance metrics', 'Security scan']
      },
      marketPrice: '$299-499/month',
      competitors: ['SonarQube', 'CodeClimate', 'DeepCode'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/ai-code-review'
      }
    },
    {
      id: 'ai-seo-optimizer',
      title: 'AI SEO Optimizer Pro',
      icon: Search,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      price: '$299/month',
      description: 'AI-powered SEO analysis and optimization recommendations for better search rankings',
      features: [
        'Keyword research and analysis',
        'Content optimization suggestions',
        'Technical SEO auditing',
        'Competitor analysis',
        'Backlink opportunity identification',
        'Local SEO optimization',
        'Schema markup generation',
        'Performance tracking and reporting'
      ],
      benefits: [
        'Increase organic traffic by 150%',
        'Improve search rankings',
        'Save 20+ hours per week',
        'Data-driven SEO decisions'
      ],
      demo: {
        title: 'SEO Analysis Demo',
        description: 'Enter your website URL for instant SEO analysis',
        features: ['Page speed analysis', 'Keyword density check', 'Meta tag optimization', 'Mobile responsiveness']
      },
      marketPrice: '$399-799/month',
      competitors: ['Ahrefs', 'SEMrush', 'Moz Pro'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/ai-seo-optimizer'
      }
    },
    {
      id: 'ai-analytics-dashboard',
      title: 'AI Analytics Dashboard',
      icon: BarChart3,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      price: '$399/month',
      description: 'Business intelligence and analytics with AI-powered insights and predictions',
      features: [
        'Real-time data visualization',
        'Predictive analytics and forecasting',
        'Custom dashboard creation',
        'Automated report generation',
        'Data integration from multiple sources',
        'AI-powered anomaly detection',
        'Interactive charts and graphs',
        'Mobile-responsive design'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify trends and opportunities',
        'Reduce manual reporting time',
        'Improve business performance'
      ],
      demo: {
        title: 'Analytics Dashboard Demo',
        description: 'Explore our interactive analytics dashboard',
        features: ['Live data feeds', 'Interactive charts', 'Custom filters', 'Export capabilities']
      },
      marketPrice: '$599-1299/month',
      competitors: ['Tableau', 'Power BI', 'Looker'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/ai-analytics-dashboard'
      }
    },
    {
      id: 'ai-marketing-automation',
      title: 'AI Marketing Automation Suite',
      icon: Target,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      price: '$249/month',
      description: 'Comprehensive marketing automation with AI-powered campaign optimization',
      features: [
        'Email campaign automation',
        'Social media management',
        'Lead scoring and nurturing',
        'A/B testing optimization',
        'Customer journey mapping',
        'Personalized content generation',
        'Multi-channel campaign management',
        'ROI tracking and analytics'
      ],
      benefits: [
        'Increase conversion rates by 200%',
        'Reduce marketing costs by 40%',
        'Improve customer engagement',
        'Scale marketing efforts efficiently'
      ],
      demo: {
        title: 'Marketing Automation Demo',
        description: 'See how AI optimizes your marketing campaigns',
        features: ['Campaign builder', 'Automation workflows', 'Performance metrics', 'A/B testing']
      },
      marketPrice: '$399-899/month',
      competitors: ['HubSpot', 'Marketo', 'Pardot'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/ai-marketing-automation'
      }
    },
    {
      id: 'ai-document-processor',
      title: 'AI Document Processing Engine',
      icon: FileText,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      price: '$179/month',
      description: 'Intelligent document analysis and data extraction with OCR and NLP capabilities',
      features: [
        'OCR text extraction',
        'Document classification',
        'Data extraction and validation',
        'Workflow automation',
        'Multi-format support (PDF, Word, Excel, Images)',
        'Batch processing capabilities',
        'API integration',
        'Custom field mapping'
      ],
      benefits: [
        'Process documents 10x faster',
        'Reduce manual data entry by 90%',
        'Improve accuracy and consistency',
        'Streamline business processes'
      ],
      demo: {
        title: 'Document Processing Demo',
        description: 'Upload a document to see AI extraction in action',
        features: ['OCR processing', 'Data extraction', 'Classification', 'Export options']
      },
      marketPrice: '$299-599/month',
      competitors: ['ABBYY', 'DocuSign', 'Adobe Acrobat'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/ai-document-processor'
      }
    },
    {
      id: 'ai-customer-support-bot',
      title: 'AI Customer Support Bot',
      icon: Bot,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      price: '$149/month',
      description: 'Intelligent customer support automation with natural language understanding',
      features: [
        '24/7 automated support',
        'Multi-language support',
        'Ticket routing and prioritization',
        'Knowledge base integration',
        'Sentiment analysis',
        'Escalation to human agents',
        'Live chat integration',
        'Performance analytics'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Improve response times',
        'Increase customer satisfaction',
        'Scale support operations'
      ],
      demo: {
        title: 'Support Bot Demo',
        description: 'Chat with our AI support bot',
        features: ['Natural conversations', 'Quick responses', 'Context awareness', 'Escalation handling']
      },
      marketPrice: '$199-499/month',
      competitors: ['Intercom', 'Zendesk', 'Freshdesk'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/ai-customer-support-bot'
      }
    },
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      icon: Palette,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      price: '$199/month',
      description: 'AI-powered content creation for blogs, social media, and marketing materials',
      features: [
        'Blog post generation',
        'Social media content creation',
        'Email template generation',
        'Ad copy optimization',
        'SEO-optimized content',
        'Multi-language support',
        'Brand voice customization',
        'Content calendar management'
      ],
      benefits: [
        'Create content 5x faster',
        'Maintain consistent brand voice',
        'Improve SEO performance',
        'Scale content production'
      ],
      demo: {
        title: 'Content Generation Demo',
        description: 'Generate content with our AI writer',
        features: ['Topic suggestions', 'Content outlines', 'Full article generation', 'SEO optimization']
      },
      marketPrice: '$299-599/month',
      competitors: ['Jasper', 'Copy.ai', 'Writesonic'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/ai-content-generator'
      }
    },
    {
      id: 'ai-data-visualization',
      title: 'AI Data Visualization Studio',
      icon: PieChart,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      price: '$299/month',
      description: 'Advanced data visualization and reporting tools with AI-powered insights',
      features: [
        'Interactive chart creation',
        'Custom dashboard design',
        'Real-time data updates',
        'Export to multiple formats',
        'Collaborative editing',
        'Template library',
        'Mobile optimization',
        'API integration'
      ],
      benefits: [
        'Create stunning visualizations',
        'Share insights effectively',
        'Make data accessible',
        'Improve decision making'
      ],
      demo: {
        title: 'Data Visualization Demo',
        description: 'Create interactive charts and dashboards',
        features: ['Chart builder', 'Data import', 'Custom styling', 'Interactive features']
      },
      marketPrice: '$399-899/month',
      competitors: ['Tableau', 'Power BI', 'Chart.js'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/ai-data-visualization'
      }
    },
    {
      id: 'ai-email-assistant',
      title: 'AI Email Assistant',
      icon: Mail,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      price: '$99/month',
      description: 'Smart email management and response suggestions with AI-powered automation',
      features: [
        'Email classification and prioritization',
        'Smart response suggestions',
        'Meeting scheduling',
        'Follow-up reminders',
        'Email template generation',
        'Sentiment analysis',
        'Spam detection',
        'Integration with major email clients'
      ],
      benefits: [
        'Save 2+ hours daily on email',
        'Improve response quality',
        'Never miss important emails',
        'Maintain professional communication'
      ],
      demo: {
        title: 'Email Assistant Demo',
        description: 'See how AI helps manage your inbox',
        features: ['Email analysis', 'Response suggestions', 'Smart categorization', 'Automation rules']
      },
      marketPrice: '$149-299/month',
      competitors: ['Grammarly', 'Boomerang', 'SaneBox'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/ai-email-assistant'
      }
    },
    {
      id: 'ai-lead-generation',
      title: 'AI Lead Generation Engine',
      icon: Users,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      price: '$349/month',
      description: 'Automated lead generation and qualification system with AI-powered targeting',
      features: [
        'Lead scoring and qualification',
        'Contact discovery and enrichment',
        'Email outreach automation',
        'CRM integration',
        'Social media prospecting',
        'LinkedIn automation',
        'Lead nurturing campaigns',
        'Performance analytics'
      ],
      benefits: [
        'Generate 3x more qualified leads',
        'Reduce lead acquisition costs',
        'Improve conversion rates',
        'Scale prospecting efforts'
      ],
      demo: {
        title: 'Lead Generation Demo',
        description: 'See how AI finds and qualifies leads',
        features: ['Lead discovery', 'Contact enrichment', 'Outreach automation', 'CRM sync']
      },
      marketPrice: '$499-999/month',
      competitors: ['Apollo', 'ZoomInfo', 'Outreach'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/ai-lead-generation'
      }
    },
    {
      id: 'ai-sales-automation',
      title: 'AI Sales Automation Platform',
      icon: TrendingUp,
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/30',
      price: '$399/month',
      description: 'Intelligent sales process automation and optimization with AI insights',
      features: [
        'Sales pipeline management',
        'Deal tracking and forecasting',
        'Performance analytics',
        'Automated follow-ups',
        'Proposal generation',
        'Contract management',
        'Commission tracking',
        'Team collaboration tools'
      ],
      benefits: [
        'Increase sales by 150%',
        'Improve forecast accuracy',
        'Reduce sales cycle time',
        'Boost team productivity'
      ],
      demo: {
        title: 'Sales Automation Demo',
        description: 'Explore our sales automation platform',
        features: ['Pipeline visualization', 'Deal tracking', 'Performance metrics', 'Automation workflows']
      },
      marketPrice: '$599-1299/month',
      competitors: ['Salesforce', 'HubSpot', 'Pipedrive'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/ai-sales-automation'
      }
    },
    {
      id: 'ai-ecommerce-optimizer',
      title: 'AI E-commerce Optimizer',
      icon: ShoppingCart,
      color: 'text-violet-400',
      bgColor: 'bg-violet-500/10',
      borderColor: 'border-violet-500/30',
      price: '$499/month',
      description: 'AI-powered e-commerce optimization and management for online stores',
      features: [
        'Product recommendation engine',
        'Price optimization',
        'Inventory management',
        'Customer behavior analysis',
        'Personalized shopping experiences',
        'A/B testing automation',
        'Fraud detection',
        'Revenue optimization'
      ],
      benefits: [
        'Increase conversion rates by 200%',
        'Boost average order value',
        'Reduce cart abandonment',
        'Maximize revenue potential'
      ],
      demo: {
        title: 'E-commerce Optimization Demo',
        description: 'See how AI optimizes your online store',
        features: ['Product recommendations', 'Price optimization', 'Customer insights', 'Revenue tracking']
      },
      marketPrice: '$799-1999/month',
      competitors: ['Dynamic Yield', 'Barilliance', 'Nosto'],
      contact: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        demo: 'https://ziontechgroup.com/demo/ai-ecommerce-optimizer'
      }
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI with measurable business impact and cost savings across all services'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all solutions and customer data'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring for all micro SAAS services'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class engineers and data scientists with proven track records'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Get up and running in minutes with our plug-and-play solutions'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Serving clients worldwide with multi-language and multi-currency support'
    }
  ];

  const handleDemoClick = async (serviceId: string) => {
    setIsLoading(true);
    setActiveDemo(serviceId);
    
    // Simulate demo data loading
    setTimeout(() => {
      setDemoData({
        [serviceId]: {
          status: 'ready',
          data: 'Demo data loaded successfully'
        }
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <SEOOptimizer
        title="Micro SAAS Solutions - Zion Tech Group"
        description="Comprehensive suite of AI-powered micro SAAS solutions for modern businesses. From code review to marketing automation, we provide real, useful tools that drive results."
        keywords={['micro saas', 'ai tools', 'business automation', 'software as a service', 'ai solutions', 'productivity tools']}
        canonicalUrl="https://ziontechgroup.com/micro-saas"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section className="text-center mb-16 transition-all duration-1000 cyber-scan-line">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Micro SAAS Solutions">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
                Real, Useful, Intelligent Micro SAAS Tools
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Discover our comprehensive suite of AI-powered micro SAAS solutions designed to transform your business operations. 
                Each tool is built with real functionality, proven results, and enterprise-grade security.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🚀</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">12+ Tools</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Comprehensive suite of AI-powered micro SAAS solutions</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">300% ROI</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Proven return on investment across all our solutions</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for all tools</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1 xl:col-span-1">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🌐</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">24/7 Support</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Round-the-clock support and monitoring for all services</p>
                </div>
              </div>
            </div>
          </section>

          {/* Micro SAAS Services Grid */}
          <section className="mb-16" aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our Micro SAAS Solutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {microSAASServices.map((service, index) => (
                <div key={service.id} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 neon-text">{service.title}</h3>
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                      <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
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
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Demo Section */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-3">Live Demo:</h4>
                    <div className="bg-white/5 rounded-lg p-4 mb-4">
                      <h5 className="text-sm font-medium text-white mb-2">{service.demo.title}</h5>
                      <p className="text-xs text-gray-300 mb-3">{service.demo.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.demo.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDemoClick(service.id)}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading && activeDemo === service.id ? (
                        <div className="flex items-center justify-center">
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Loading Demo...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Play className="w-4 h-4 mr-2" />
                          Try Live Demo
                        </div>
                      )}
                    </button>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex flex-col sm:flex-row gap-2 mb-4">
                      <a
                        href={`tel:${service.contact.phone}`}
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                      <a
                        href={`mailto:${service.contact.email}?subject=Interest in ${service.title}`}
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-green-600 hover:to-emerald-700 transition-all"
                      >
                        <Mail className="w-4 h-4" />
                        Email Us
                      </a>
                    </div>
                    <div className="text-center">
                      <a
                        href={service.contact.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                      >
                        View Full Demo →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card">
                    <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Get started with our micro SAAS solutions today and see the difference AI-powered tools can make.
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
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default MicroSAASPage;