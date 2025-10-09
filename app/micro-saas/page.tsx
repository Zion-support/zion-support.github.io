<<<<<<< HEAD
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot, Package, Mic, PenTool, Box, Shirt, Wifi, Link, Atom } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
=======
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, 
  Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, 
  TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, 
  Mail, Phone, DollarSign, Clock, Award, CheckCircle, 
  Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, 
  CreditCard, Building, Factory, Car, Plane, Ship, Train, 
  Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, 
  Hammer, Paintbrush, Scissors, BookOpen, Calculator, 
  Compass, PieChart, TrendingDown, Activity, Zap as Lightning, 
  Target as Crosshair, Shield as Security, Users as People, 
  Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, 
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location,
  Eye, Search, MessageSquare, PieChart as Chart, 
  Download, Upload, RefreshCw, Play, Pause, Stop,
  Volume2, VolumeX, Mic, MicOff, Headphones, 
  Wifi, WifiOff, Battery, BatteryCharging, 
  Sun, Moon, Sunrise, Sunset, CloudRain, 
  Snowflake, Wind, Thermometer, Droplets,
  Lightbulb, LightbulbOff, Power, PowerOff,
  Wrench as Tool, Hammer as HammerIcon, 
  Paintbrush as Brush, Scissors as ScissorIcon,
  BookOpen as Book, Calculator as Calc,
  Compass as CompassIcon, PieChart as PieChartIcon,
  TrendingDown as TrendingDownIcon, Activity as ActivityIcon
} from 'lucide-react';
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3845

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

<<<<<<< HEAD
  const microSAASServices = [
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager',
      description: 'Intelligent project management with AI-powered insights and automation.',
      icon: Brain,
      category: 'productivity',
      pricing: { starting: 99, period: 'month' },
      features: ['Smart task scheduling', 'Resource optimization', 'Risk prediction', 'Team collaboration', 'Progress tracking', 'Automated reporting'],
      benefits: ['Complete projects 30% faster', 'Reduce project risks', 'Better team coordination'],
      popular: false,
      rating: 4.6,
      users: 4200,
      link: 'https://ziontechgroup.com/ai-project-manager'
    },
    {
      id: 'ai-data-visualization',
      name: 'AI Data Visualization',
      description: 'Transform complex data into beautiful, interactive visualizations with AI-powered insights.',
      icon: BarChart,
      category: 'analytics',
      pricing: { starting: 69, period: 'month' },
      features: ['Auto chart generation', 'Interactive dashboards', 'Real-time updates', 'Custom themes', 'Export options', 'Collaboration tools'],
      benefits: ['Make data accessible', 'Faster decision making', 'Professional presentations'],
      popular: true,
      rating: 4.8,
      users: 8500,
      link: 'https://ziontechgroup.com/ai-data-visualization'
    },
    {
      id: 'smart-invoice-ai',
      name: 'Smart Invoice AI',
      description: 'Automate invoice creation and management with AI-powered data extraction and processing.',
      icon: FileText,
      category: 'automation',
      pricing: { starting: 49, period: 'month' },
      features: ['Auto data extraction', 'Smart categorization', 'Payment tracking', 'Tax calculations', 'Multi-currency', 'Recurring billing'],
      benefits: ['Save 10+ hours weekly', 'Reduce errors by 95%', 'Faster payments'],
      popular: false,
      rating: 4.7,
      users: 3200,
      link: 'https://ziontechgroup.com/smart-invoice-ai'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe },
    { id: 'productivity', name: 'Productivity', icon: Clock },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'content', name: 'Content Creation', icon: FileText },
    { id: 'automation', name: 'Automation', icon: Zap },
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSAASServices;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.pricing.starting - b.pricing.starting);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.pricing.starting - a.pricing.starting);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'popularity':
      default:
        filtered.sort((a, b) => b.users - a.users);
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, microSAASServices]);

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover powerful micro SAAS solutions for your business. AI-powered tools for productivity, automation, content creation, and analytics." />
        <meta name="keywords" content="micro saas, saas solutions, business tools, productivity software, automation tools" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS Solutions</span>
            </h1>
            <p className="text-xl text-cyan-400 mb-8">
              Powerful, focused tools for specific business needs
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Discover our collection of specialized micro SAAS applications designed to solve specific business challenges with AI-powered intelligence.
            </p>
=======
  const microSaasServices = [
    // AI-Powered Business Tools
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated insights',
      category: 'ai-business',
      icon: BarChart,
      price: '$99/month',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom dashboard creation',
        'Automated reporting',
        'Multi-source data integration',
        'Mobile app included'
      ],
      benefits: [
        'Increase decision-making speed by 300%',
        'Reduce manual reporting by 90%',
        'Identify trends before competitors',
        'Custom alerts and notifications'
      ],
      targetAudience: 'Small to medium businesses',
      setupTime: '24 hours',
      freeTrial: '14 days',
      support: '24/7 email and chat support',
      integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'Stripe', 'Shopify'],
      link: 'https://ziontechgroup.com/ai-analytics-dashboard'
    },
    {
      id: 'ai-customer-support-bot',
      name: 'AI Customer Support Bot',
      description: 'Intelligent chatbot with natural language processing for 24/7 customer service',
      category: 'ai-business',
      icon: Bot,
      price: '$149/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Integration with existing systems',
        'Custom training on your data',
        'Escalation to human agents',
        'Analytics and insights'
      ],
      benefits: [
        'Reduce support costs by 60%',
        '24/7 customer availability',
        'Instant response times',
        'Consistent service quality'
      ],
      targetAudience: 'E-commerce, SaaS, Service businesses',
      setupTime: '48 hours',
      freeTrial: '30 days',
      support: 'Dedicated account manager',
      integrations: ['Zendesk', 'Intercom', 'Slack', 'Microsoft Teams', 'WhatsApp'],
      link: 'https://ziontechgroup.com/ai-customer-support-bot'
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automated social media posting, engagement, and content optimization',
      category: 'ai-marketing',
      icon: MessageSquare,
      price: '$79/month',
      features: [
        'Automated posting schedule',
        'Content optimization',
        'Hashtag suggestions',
        'Engagement tracking',
        'Multi-platform support',
        'AI-generated captions'
      ],
      benefits: [
        'Save 10+ hours per week',
        'Increase engagement by 200%',
        'Consistent brand voice',
        'Optimal posting times'
      ],
      targetAudience: 'Small businesses, influencers, agencies',
      setupTime: '2 hours',
      freeTrial: '7 days',
      support: 'Email support',
      integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok'],
      link: 'https://ziontechgroup.com/ai-social-media-manager'
    },
    {
      id: 'ai-email-marketing-suite',
      name: 'AI Email Marketing Suite',
      description: 'Intelligent email campaigns with personalization and automation',
      category: 'ai-marketing',
      icon: Mail,
      price: '$129/month',
      features: [
        'AI-powered subject lines',
        'Personalized content',
        'Send time optimization',
        'A/B testing automation',
        'Segmentation intelligence',
        'Deliverability optimization'
      ],
      benefits: [
        'Increase open rates by 40%',
        'Boost click-through rates by 60%',
        'Reduce unsubscribe rates',
        'Automated campaign optimization'
      ],
      targetAudience: 'E-commerce, SaaS, Content creators',
      setupTime: '4 hours',
      freeTrial: '14 days',
      support: 'Priority support',
      integrations: ['Mailchimp', 'Constant Contact', 'Klaviyo', 'HubSpot', 'Salesforce'],
      link: 'https://ziontechgroup.com/ai-email-marketing-suite'
    },
    {
      id: 'ai-inventory-management',
      name: 'AI Inventory Management',
      description: 'Smart inventory optimization with demand forecasting and automated reordering',
      category: 'ai-business',
      icon: Package,
      price: '$199/month',
      features: [
        'Demand forecasting',
        'Automated reorder points',
        'Supplier management',
        'Cost optimization',
        'Multi-location support',
        'Mobile barcode scanning'
      ],
      benefits: [
        'Reduce stockouts by 80%',
        'Lower inventory costs by 25%',
        'Eliminate manual counting',
        'Improve cash flow'
      ],
      targetAudience: 'Retail, Manufacturing, Distribution',
      setupTime: '1 week',
      freeTrial: '30 days',
      support: 'Implementation specialist',
      integrations: ['QuickBooks', 'Xero', 'Shopify', 'WooCommerce', 'SAP'],
      link: 'https://ziontechgroup.com/ai-inventory-management'
    },
    {
      id: 'ai-lead-scoring-system',
      name: 'AI Lead Scoring System',
      description: 'Intelligent lead qualification and prioritization for sales teams',
      category: 'ai-sales',
      icon: Target,
      price: '$89/month',
      features: [
        'Behavioral scoring',
        'Demographic analysis',
        'Engagement tracking',
        'Predictive scoring',
        'CRM integration',
        'Custom scoring models'
      ],
      benefits: [
        'Increase conversion rates by 35%',
        'Prioritize high-value leads',
        'Reduce sales cycle time',
        'Improve sales team efficiency'
      ],
      targetAudience: 'B2B companies, Sales teams',
      setupTime: '24 hours',
      freeTrial: '14 days',
      support: 'Sales specialist',
      integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM', 'Microsoft Dynamics'],
      link: 'https://ziontechgroup.com/ai-lead-scoring-system'
    },
    {
      id: 'ai-document-processor',
      name: 'AI Document Processor',
      description: 'Intelligent document analysis, extraction, and organization',
      category: 'ai-productivity',
      icon: FileText,
      price: '$119/month',
      features: [
        'OCR text extraction',
        'Document classification',
        'Data extraction',
        'Automated workflows',
        'Multi-format support',
        'Cloud storage integration'
      ],
      benefits: [
        'Process documents 10x faster',
        'Eliminate manual data entry',
        'Improve accuracy by 95%',
        'Reduce processing costs'
      ],
      targetAudience: 'Legal, Finance, Healthcare, Real Estate',
      setupTime: '48 hours',
      freeTrial: '14 days',
      support: 'Technical specialist',
      integrations: ['Google Drive', 'Dropbox', 'OneDrive', 'Box', 'SharePoint'],
      link: 'https://ziontechgroup.com/ai-document-processor'
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer',
      description: 'Automated SEO analysis, optimization, and content suggestions',
      category: 'ai-marketing',
      icon: Search,
      price: '$69/month',
      features: [
        'Keyword research',
        'Content optimization',
        'Technical SEO audit',
        'Competitor analysis',
        'Ranking tracking',
        'Automated reports'
      ],
      benefits: [
        'Improve search rankings',
        'Increase organic traffic by 150%',
        'Save 15+ hours per week',
        'Stay ahead of algorithm changes'
      ],
      targetAudience: 'Website owners, Agencies, Content creators',
      setupTime: '2 hours',
      freeTrial: '7 days',
      support: 'SEO specialist',
      integrations: ['Google Search Console', 'Google Analytics', 'WordPress', 'Shopify', 'Wix'],
      link: 'https://ziontechgroup.com/ai-seo-optimizer'
    },
    {
      id: 'ai-appointment-scheduler',
      name: 'AI Appointment Scheduler',
      description: 'Smart scheduling with automated reminders and calendar optimization',
      category: 'ai-productivity',
      icon: Calendar,
      price: '$49/month',
      features: [
        'Automated scheduling',
        'Smart time suggestions',
        'Multi-timezone support',
        'Reminder automation',
        'Calendar integration',
        'Custom booking forms'
      ],
      benefits: [
        'Reduce no-shows by 50%',
        'Eliminate double bookings',
        'Save 5+ hours per week',
        'Improve customer experience'
      ],
      targetAudience: 'Service businesses, Consultants, Healthcare',
      setupTime: '1 hour',
      freeTrial: '14 days',
      support: 'Email support',
      integrations: ['Google Calendar', 'Outlook', 'Calendly', 'Acuity', 'Square'],
      link: 'https://ziontechgroup.com/ai-appointment-scheduler'
    },
    {
      id: 'ai-chat-analytics',
      name: 'AI Chat Analytics',
      description: 'Advanced conversation analysis and customer insights',
      category: 'ai-analytics',
      icon: MessageSquare,
      price: '$79/month',
      features: [
        'Sentiment analysis',
        'Conversation insights',
        'Performance metrics',
        'Agent coaching',
        'Customer satisfaction tracking',
        'Real-time monitoring'
      ],
      benefits: [
        'Improve customer satisfaction',
        'Identify training needs',
        'Optimize response strategies',
        'Reduce resolution time'
      ],
      targetAudience: 'Customer service teams, Call centers',
      setupTime: '24 hours',
      freeTrial: '14 days',
      support: 'Analytics specialist',
      integrations: ['Zendesk', 'Intercom', 'Freshdesk', 'LiveChat', 'Crisp'],
      link: 'https://ziontechgroup.com/ai-chat-analytics'
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      description: 'Intelligent expense management with receipt scanning and categorization',
      category: 'ai-finance',
      icon: CreditCard,
      price: '$39/month',
      features: [
        'Receipt scanning',
        'Automatic categorization',
        'Expense reporting',
        'Policy compliance',
        'Multi-currency support',
        'Mobile app'
      ],
      benefits: [
        'Save 8+ hours per month',
        'Improve accuracy by 90%',
        'Ensure policy compliance',
        'Simplify tax preparation'
      ],
      targetAudience: 'Small businesses, Freelancers, Consultants',
      setupTime: '30 minutes',
      freeTrial: '30 days',
      support: 'Email support',
      integrations: ['QuickBooks', 'Xero', 'Expensify', 'Concur', 'SAP'],
      link: 'https://ziontechgroup.com/ai-expense-tracker'
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'AI-powered content creation for blogs, social media, and marketing',
      category: 'ai-content',
      icon: FileText,
      price: '$59/month',
      features: [
        'Blog post generation',
        'Social media content',
        'Email templates',
        'Product descriptions',
        'SEO-optimized content',
        'Multi-language support'
      ],
      benefits: [
        'Create content 5x faster',
        'Maintain consistent quality',
        'Scale content production',
        'Improve SEO performance'
      ],
      targetAudience: 'Content creators, Marketers, Agencies',
      setupTime: '1 hour',
      freeTrial: '7 days',
      support: 'Content specialist',
      integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Buffer'],
      link: 'https://ziontechgroup.com/ai-content-generator'
    },
    // Industry-Specific Solutions
    {
      id: 'ai-healthcare-assistant',
      name: 'AI Healthcare Assistant',
      description: 'Patient management and medical record analysis for healthcare providers',
      category: 'ai-healthcare',
      icon: Stethoscope,
      price: '$299/month',
      features: [
        'Patient data analysis',
        'Appointment optimization',
        'Medical record insights',
        'Compliance monitoring',
        'Billing optimization',
        'HIPAA compliance'
      ],
      benefits: [
        'Improve patient outcomes',
        'Reduce administrative burden',
        'Ensure compliance',
        'Optimize scheduling'
      ],
      targetAudience: 'Healthcare providers, Clinics, Hospitals',
      setupTime: '2 weeks',
      freeTrial: '30 days',
      support: 'Healthcare specialist',
      integrations: ['Epic', 'Cerner', 'Allscripts', 'NextGen', 'athenahealth'],
      link: 'https://ziontechgroup.com/ai-healthcare-assistant'
    },
    {
      id: 'ai-education-platform',
      name: 'AI Education Platform',
      description: 'Personalized learning and student progress tracking',
      category: 'ai-education',
      icon: GraduationCap,
      price: '$199/month',
      features: [
        'Personalized learning paths',
        'Progress tracking',
        'Automated assessments',
        'Parent communication',
        'Curriculum optimization',
        'Multi-language support'
      ],
      benefits: [
        'Improve student outcomes',
        'Reduce teacher workload',
        'Personalize education',
        'Track progress effectively'
      ],
      targetAudience: 'Schools, Universities, Online learning platforms',
      setupTime: '1 week',
      freeTrial: '30 days',
      support: 'Education specialist',
      integrations: ['Canvas', 'Blackboard', 'Moodle', 'Google Classroom', 'Microsoft Teams'],
      link: 'https://ziontechgroup.com/ai-education-platform'
    },
    {
      id: 'ai-real-estate-analyzer',
      name: 'AI Real Estate Analyzer',
      description: 'Property valuation and market analysis for real estate professionals',
      category: 'ai-real-estate',
      icon: Home,
      price: '$149/month',
      features: [
        'Property valuation',
        'Market analysis',
        'Investment recommendations',
        'Price predictions',
        'Neighborhood insights',
        'Client reports'
      ],
      benefits: [
        'Accurate property valuations',
        'Identify investment opportunities',
        'Improve client service',
        'Stay ahead of market trends'
      ],
      targetAudience: 'Real estate agents, Investors, Property managers',
      setupTime: '48 hours',
      freeTrial: '14 days',
      support: 'Real estate specialist',
      integrations: ['MLS', 'Zillow', 'Realtor.com', 'Redfin', 'LoopNet'],
      link: 'https://ziontechgroup.com/ai-real-estate-analyzer'
    },
    {
      id: 'ai-fitness-coach',
      name: 'AI Fitness Coach',
      description: 'Personalized workout plans and nutrition guidance',
      category: 'ai-fitness',
      icon: Heart,
      price: '$29/month',
      features: [
        'Personalized workouts',
        'Nutrition tracking',
        'Progress monitoring',
        'Goal setting',
        'Wearable integration',
        'Community features'
      ],
      benefits: [
        'Achieve fitness goals faster',
        'Personalized guidance',
        'Track progress effectively',
        'Stay motivated'
      ],
      targetAudience: 'Fitness enthusiasts, Gyms, Personal trainers',
      setupTime: '1 hour',
      freeTrial: '14 days',
      support: 'Fitness specialist',
      integrations: ['Apple Health', 'Google Fit', 'Fitbit', 'MyFitnessPal', 'Strava'],
      link: 'https://ziontechgroup.com/ai-fitness-coach'
    },
    {
      id: 'ai-restaurant-manager',
      name: 'AI Restaurant Manager',
      description: 'Menu optimization and customer experience enhancement',
      category: 'ai-hospitality',
      icon: Utensils,
      price: '$179/month',
      features: [
        'Menu optimization',
        'Demand forecasting',
        'Customer feedback analysis',
        'Staff scheduling',
        'Inventory management',
        'Revenue optimization'
      ],
      benefits: [
        'Increase revenue by 20%',
        'Reduce food waste',
        'Improve customer satisfaction',
        'Optimize operations'
      ],
      targetAudience: 'Restaurants, Cafes, Food service',
      setupTime: '1 week',
      freeTrial: '30 days',
      support: 'Hospitality specialist',
      integrations: ['Square', 'Toast', 'Resy', 'OpenTable', 'Grubhub'],
      link: 'https://ziontechgroup.com/ai-restaurant-manager'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid3X3 },
    { id: 'ai-business', name: 'AI Business', icon: Building },
    { id: 'ai-marketing', name: 'AI Marketing', icon: Target },
    { id: 'ai-sales', name: 'AI Sales', icon: TrendingUp },
    { id: 'ai-productivity', name: 'AI Productivity', icon: CheckSquare },
    { id: 'ai-analytics', name: 'AI Analytics', icon: BarChart },
    { id: 'ai-finance', name: 'AI Finance', icon: DollarSign },
    { id: 'ai-content', name: 'AI Content', icon: FileText },
    { id: 'ai-healthcare', name: 'AI Healthcare', icon: Stethoscope },
    { id: 'ai-education', name: 'AI Education', icon: GraduationCap },
    { id: 'ai-real-estate', name: 'AI Real Estate', icon: Home },
    { id: 'ai-fitness', name: 'AI Fitness', icon: Heart },
    { id: 'ai-hospitality', name: 'AI Hospitality', icon: Utensils }
  ];

  const filteredServices = microSaasServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 cyber-grid">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse">
            Micro <span className="holographic-text">SaaS</span> Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto neon-glow">
            Powerful, affordable AI-powered micro SaaS tools designed to solve specific business problems. 
            Start with a free trial and scale as you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Get Free Consultation
            </a>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3845
          </div>
        </div>
      </section>

<<<<<<< HEAD
        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SAAS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full sm:w-80"
                  />
                </div>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-slate-800">
                      {category.name}
                    </option>
                  ))}
                </select>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="popularity" className="bg-slate-800">Most Popular</option>
                  <option value="price-low" className="bg-slate-800">Price: Low to High</option>
                  <option value="price-high" className="bg-slate-800">Price: High to Low</option>
                  <option value="name" className="bg-slate-800">Name A-Z</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                            ))}
                          </div>
                          <span className="text-sm text-gray-400">({service.users.toLocaleString()} users)</span>
                        </div>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-white">${service.pricing.starting}</span>
                      <span className="text-gray-400">/{service.pricing.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Starting price
                    </div>
                  </div>
                  
                  <a
                    href={service.link}
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
=======
      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SaaS services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Setup Time:</span>
                    <span className="text-white">{service.setupTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Free Trial:</span>
                    <span className="text-green-400">{service.freeTrial}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Target:</span>
                    <span className="text-white">{service.targetAudience}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="block w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 inline mr-2" />
                    Get Demo
                  </a>
                </div>
              </div>
            ))}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3845
          </div>
        </div>
      </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We can build a custom micro SAAS solution tailored to your specific business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MicroSAASPage;
=======
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-400 mb-8 neon-glow">
            Choose from our comprehensive suite of AI-powered micro SaaS solutions. 
            All services include free trials, setup assistance, and ongoing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Phone className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Mail className="w-5 h-5" />
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3845
