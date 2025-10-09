'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Bug, Utensils } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSAASServices = [
    // AI-Powered Business Tools
    {
      id: 'ai-writing-assistant',
      title: 'AI Writing Assistant Pro',
      description: 'Advanced AI-powered writing tool for content creation, editing, and optimization across multiple formats.',
      icon: FileText,
      price: '$29/month',
      originalPrice: '$99/month',
      category: 'ai-tools',
      features: [
        'AI Content Generation',
        'Grammar & Style Check',
        'SEO Optimization',
        'Multi-language Support',
        'Brand Voice Training',
        'Plagiarism Detection',
        'Content Templates',
        'Team Collaboration'
      ],
      benefits: [
        'Save 10+ hours/week on content creation',
        'Improve content quality by 85%',
        'Increase SEO rankings by 60%',
        'Reduce editing time by 70%'
      ],
      marketPrice: '$99-299/month',
      technologies: ['OpenAI GPT-4', 'Claude', 'Custom NLP Models', 'SEO APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      demoUrl: 'https://ziontechgroup.com/ai-writing-demo',
      freeTrial: '14 days free trial'
    },
    {
      id: 'ai-analytics-dashboard',
      title: 'Smart Analytics Dashboard',
      description: 'Intelligent business analytics with AI-powered insights, predictions, and automated reporting.',
      icon: BarChart3,
      price: '$49/month',
      originalPrice: '$199/month',
      category: 'analytics',
      features: [
        'Real-time Data Visualization',
        'AI-Powered Insights',
        'Predictive Analytics',
        'Custom Dashboards',
        'Automated Reports',
        'Data Integration',
        'Mobile App',
        'Team Collaboration'
      ],
      benefits: [
        'Make data-driven decisions 3x faster',
        'Identify trends before competitors',
        'Reduce manual reporting by 90%',
        'Increase revenue by 25%'
      ],
      marketPrice: '$199-599/month',
      technologies: ['Tableau', 'Power BI', 'Python', 'Machine Learning', 'APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      demoUrl: 'https://ziontechgroup.com/analytics-demo',
      freeTrial: '30 days free trial'
    },
    {
      id: 'ai-scheduler-pro',
      title: 'AI Smart Scheduler',
      description: 'Intelligent scheduling system that optimizes meetings, appointments, and resource allocation.',
      icon: Calendar,
      price: '$19/month',
      originalPrice: '$79/month',
      category: 'productivity',
      features: [
        'Smart Meeting Optimization',
        'Resource Management',
        'Conflict Resolution',
        'Time Zone Handling',
        'Calendar Integration',
        'Mobile Notifications',
        'Team Scheduling',
        'Analytics & Insights'
      ],
      benefits: [
        'Reduce scheduling conflicts by 95%',
        'Save 5+ hours/week on scheduling',
        'Optimize meeting times automatically',
        'Improve team productivity by 40%'
      ],
      marketPrice: '$79-199/month',
      technologies: ['Google Calendar API', 'Outlook Integration', 'AI Optimization', 'Mobile SDKs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      demoUrl: 'https://ziontechgroup.com/scheduler-demo',
      freeTrial: '21 days free trial'
    },
    {
      id: 'ai-expense-tracker',
      title: 'AI Expense Manager',
      description: 'Smart expense tracking with receipt scanning, categorization, and automated reporting.',
      icon: CreditCard,
      price: '$15/month',
      originalPrice: '$59/month',
      category: 'finance',
      features: [
        'Receipt Scanning & OCR',
        'Smart Categorization',
        'Expense Analytics',
        'Tax Preparation',
        'Multi-currency Support',
        'Team Expense Management',
        'Mobile App',
        'Integration APIs'
      ],
      benefits: [
        'Reduce expense processing time by 80%',
        'Improve accuracy by 95%',
        'Save 3+ hours/month on bookkeeping',
        'Maximize tax deductions automatically'
      ],
      marketPrice: '$59-149/month',
      technologies: ['OCR Technology', 'Machine Learning', 'Tax APIs', 'Banking APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      demoUrl: 'https://ziontechgroup.com/expense-demo',
      freeTrial: '30 days free trial'
    },
    {
      id: 'ai-task-manager',
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, time estimation, and productivity insights.',
      icon: CheckCircle,
      price: '$25/month',
      originalPrice: '$89/month',
      category: 'productivity',
      features: [
        'AI Task Prioritization',
        'Time Estimation',
        'Progress Tracking',
        'Team Collaboration',
        'Project Templates',
        'Deadline Alerts',
        'Productivity Analytics',
        'Mobile Sync'
      ],
      benefits: [
        'Increase task completion by 60%',
        'Reduce project delays by 70%',
        'Improve time management by 50%',
        'Boost team productivity by 35%'
      ],
      marketPrice: '$89-249/month',
      technologies: ['AI Prioritization', 'Project Management', 'Team Collaboration', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      demoUrl: 'https://ziontechgroup.com/task-demo',
      freeTrial: '14 days free trial'
    },
    {
      id: 'ai-crm-lite',
      title: 'AI CRM Lite',
      description: 'Lightweight CRM with AI-powered lead scoring, customer insights, and automated follow-ups.',
      icon: Users,
      price: '$39/month',
      originalPrice: '$149/month',
      category: 'crm',
      features: [
        'AI Lead Scoring',
        'Customer Insights',
        'Automated Follow-ups',
        'Pipeline Management',
        'Email Integration',
        'Sales Analytics',
        'Mobile App',
        'Custom Fields'
      ],
      benefits: [
        'Increase lead conversion by 45%',
        'Reduce follow-up time by 60%',
        'Improve customer retention by 30%',
        'Boost sales revenue by 25%'
      ],
      marketPrice: '$149-399/month',
      technologies: ['Salesforce Integration', 'AI Lead Scoring', 'Email APIs', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      demoUrl: 'https://ziontechgroup.com/crm-demo',
      freeTrial: '30 days free trial'
    },
    {
      id: 'ai-email-optimizer',
      title: 'AI Email Optimizer',
      description: 'Smart email marketing with AI-powered subject lines, content optimization, and send time optimization.',
      icon: Mail,
      price: '$35/month',
      originalPrice: '$129/month',
      category: 'marketing',
      features: [
        'AI Subject Line Generation',
        'Content Optimization',
        'Send Time Optimization',
        'A/B Testing',
        'List Segmentation',
        'Automation Workflows',
        'Analytics Dashboard',
        'Template Library'
      ],
      benefits: [
        'Increase open rates by 40%',
        'Boost click-through rates by 55%',
        'Reduce unsubscribe rates by 30%',
        'Save 8+ hours/week on email marketing'
      ],
      marketPrice: '$129-299/month',
      technologies: ['AI Content Generation', 'Email APIs', 'A/B Testing', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      demoUrl: 'https://ziontechgroup.com/email-demo',
      freeTrial: '21 days free trial'
    },
    {
      id: 'ai-social-manager',
      title: 'AI Social Media Manager',
      description: 'Automated social media management with AI content creation, scheduling, and engagement optimization.',
      icon: MessageSquare,
      price: '$45/month',
      originalPrice: '$179/month',
      category: 'marketing',
      features: [
        'AI Content Creation',
        'Multi-platform Scheduling',
        'Engagement Optimization',
        'Hashtag Research',
        'Analytics & Insights',
        'Team Collaboration',
        'Brand Monitoring',
        'Competitor Analysis'
      ],
      benefits: [
        'Increase engagement by 65%',
        'Save 12+ hours/week on social media',
        'Grow followers by 200%',
        'Improve brand awareness by 80%'
      ],
      marketPrice: '$179-399/month',
      technologies: ['Social Media APIs', 'AI Content Generation', 'Analytics', 'Scheduling'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      demoUrl: 'https://ziontechgroup.com/social-demo',
      freeTrial: '14 days free trial'
    },
    {
      id: 'ai-design-studio',
      title: 'AI Design Studio',
      description: 'AI-powered design tool for creating logos, graphics, and marketing materials with professional quality.',
      icon: Palette,
      price: '$55/month',
      originalPrice: '$199/month',
      category: 'design',
      features: [
        'AI Logo Generation',
        'Graphic Design Tools',
        'Template Library',
        'Brand Kit Management',
        'Collaboration Tools',
        'Export Options',
        'Mobile App',
        'Stock Photos'
      ],
      benefits: [
        'Create professional designs in minutes',
        'Reduce design costs by 80%',
        'Maintain brand consistency',
        'Speed up design workflow by 70%'
      ],
      marketPrice: '$199-499/month',
      technologies: ['AI Image Generation', 'Design APIs', 'Collaboration Tools', 'Export SDKs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      demoUrl: 'https://ziontechgroup.com/design-demo',
      freeTrial: '7 days free trial'
    },
    {
      id: 'ai-landing-builder',
      title: 'AI Landing Page Builder',
      description: 'Intelligent landing page creation with AI optimization for conversions and user experience.',
      icon: Globe,
      price: '$65/month',
      originalPrice: '$249/month',
      category: 'web-development',
      features: [
        'AI Page Generation',
        'Conversion Optimization',
        'A/B Testing',
        'Mobile Responsive',
        'SEO Optimization',
        'Analytics Integration',
        'Template Library',
        'Custom Domains'
      ],
      benefits: [
        'Increase conversion rates by 50%',
        'Reduce page creation time by 85%',
        'Improve SEO rankings by 40%',
        'Boost sales by 35%'
      ],
      marketPrice: '$249-599/month',
      technologies: ['AI Page Generation', 'Conversion Optimization', 'A/B Testing', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      demoUrl: 'https://ziontechgroup.com/landing-demo',
      freeTrial: '14 days free trial'
    },
    {
      id: 'ai-seo-optimizer',
      title: 'AI SEO Optimizer',
      description: 'Comprehensive SEO tool with AI-powered keyword research, content optimization, and ranking tracking.',
      icon: Search,
      price: '$75/month',
      originalPrice: '$299/month',
      category: 'seo',
      features: [
        'AI Keyword Research',
        'Content Optimization',
        'Ranking Tracking',
        'Technical SEO Audit',
        'Competitor Analysis',
        'Link Building Tools',
        'Local SEO',
        'Reporting Dashboard'
      ],
      benefits: [
        'Improve search rankings by 60%',
        'Increase organic traffic by 150%',
        'Reduce SEO work by 70%',
        'Boost revenue by 45%'
      ],
      marketPrice: '$299-799/month',
      technologies: ['SEO APIs', 'AI Content Analysis', 'Ranking APIs', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      demoUrl: 'https://ziontechgroup.com/seo-demo',
      freeTrial: '30 days free trial'
    },
    {
      id: 'ai-ad-manager',
      title: 'AI Ad Campaign Manager',
      description: 'Intelligent advertising platform with AI optimization for Google, Facebook, and other ad networks.',
      icon: Target,
      price: '$85/month',
      originalPrice: '$349/month',
      category: 'advertising',
      features: [
        'Multi-platform Ad Management',
        'AI Bid Optimization',
        'Audience Targeting',
        'Creative Testing',
        'Performance Analytics',
        'Budget Optimization',
        'Automated Rules',
        'ROI Tracking'
      ],
      benefits: [
        'Reduce cost per acquisition by 40%',
        'Increase ROAS by 80%',
        'Save 15+ hours/week on ad management',
        'Improve campaign performance by 60%'
      ],
      marketPrice: '$349-999/month',
      technologies: ['Ad APIs', 'AI Optimization', 'Analytics', 'Bid Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      demoUrl: 'https://ziontechgroup.com/ads-demo',
      freeTrial: '14 days free trial'
    },
    {
      id: 'ai-code-assistant',
      title: 'AI Code Assistant',
      description: 'Intelligent coding assistant with AI-powered code generation, debugging, and optimization suggestions.',
      icon: Code,
      price: '$45/month',
      originalPrice: '$179/month',
      category: 'development',
      features: [
        'AI Code Generation',
        'Bug Detection & Fixing',
        'Code Optimization',
        'Documentation Generation',
        'Multi-language Support',
        'IDE Integration',
        'Team Collaboration',
        'Code Review'
      ],
      benefits: [
        'Accelerate development by 50%',
        'Reduce bugs by 70%',
        'Improve code quality by 60%',
        'Speed up learning by 80%'
      ],
      marketPrice: '$179-399/month',
      technologies: ['AI Code Models', 'IDE Plugins', 'Code Analysis', 'Version Control'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      demoUrl: 'https://ziontechgroup.com/code-demo',
      freeTrial: '30 days free trial'
    },
    {
      id: 'ai-api-builder',
      title: 'AI API Builder',
      description: 'No-code API development platform with AI-powered integration and automation capabilities.',
      icon: Settings,
      price: '$95/month',
      originalPrice: '$399/month',
      category: 'development',
      features: [
        'Visual API Builder',
        'AI Integration Suggestions',
        'Automated Documentation',
        'Testing Tools',
        'Rate Limiting',
        'Authentication',
        'Monitoring & Analytics',
        'Team Collaboration'
      ],
      benefits: [
        'Build APIs 10x faster',
        'Reduce development costs by 80%',
        'Improve API reliability by 90%',
        'Enable non-technical team members'
      ],
      marketPrice: '$399-999/month',
      technologies: ['API Development', 'AI Integration', 'Testing Tools', 'Monitoring'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      demoUrl: 'https://ziontechgroup.com/api-demo',
      freeTrial: '21 days free trial'
    },
    {
      id: 'ai-bug-tracker',
      title: 'AI Bug Tracker Pro',
      description: 'Intelligent bug tracking with AI-powered issue detection, prioritization, and resolution suggestions.',
      icon: Bug,
      price: '$35/month',
      originalPrice: '$149/month',
      category: 'development',
      features: [
        'AI Bug Detection',
        'Automatic Prioritization',
        'Resolution Suggestions',
        'Team Collaboration',
        'Integration APIs',
        'Analytics Dashboard',
        'Mobile App',
        'Custom Workflows'
      ],
      benefits: [
        'Reduce bug resolution time by 60%',
        'Improve software quality by 70%',
        'Increase team productivity by 40%',
        'Prevent critical issues proactively'
      ],
      marketPrice: '$149-349/month',
      technologies: ['AI Bug Detection', 'Issue Tracking', 'Team Collaboration', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      demoUrl: 'https://ziontechgroup.com/bug-demo',
      freeTrial: '30 days free trial'
    },
    // Industry-Specific Tools
    {
      id: 'ai-healthcare-assistant',
      title: 'AI Healthcare Assistant',
      description: 'HIPAA-compliant AI tool for patient management, appointment scheduling, and medical documentation.',
      icon: Stethoscope,
      price: '$125/month',
      originalPrice: '$499/month',
      category: 'healthcare',
      features: [
        'Patient Management',
        'Appointment Scheduling',
        'Medical Documentation',
        'Prescription Tracking',
        'Insurance Verification',
        'HIPAA Compliance',
        'Telemedicine Integration',
        'Analytics Dashboard'
      ],
      benefits: [
        'Reduce administrative time by 70%',
        'Improve patient satisfaction by 50%',
        'Increase appointment efficiency by 60%',
        'Ensure HIPAA compliance automatically'
      ],
      marketPrice: '$499-1,299/month',
      technologies: ['HIPAA Compliance', 'Medical APIs', 'Telemedicine', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      demoUrl: 'https://ziontechgroup.com/healthcare-demo',
      freeTrial: '30 days free trial'
    },
    {
      id: 'ai-education-platform',
      title: 'AI Education Platform',
      description: 'Intelligent learning management system with personalized curriculum and progress tracking.',
      icon: GraduationCap,
      price: '$65/month',
      originalPrice: '$249/month',
      category: 'education',
      features: [
        'Personalized Learning Paths',
        'Progress Tracking',
        'Automated Assessments',
        'Content Generation',
        'Student Analytics',
        'Parent Portal',
        'Mobile Learning',
        'Integration APIs'
      ],
      benefits: [
        'Improve learning outcomes by 60%',
        'Reduce teaching workload by 40%',
        'Increase student engagement by 80%',
        'Personalize education for each student'
      ],
      marketPrice: '$249-699/month',
      technologies: ['Learning Analytics', 'Content Generation', 'Assessment Tools', 'Mobile Apps'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      demoUrl: 'https://ziontechgroup.com/education-demo',
      freeTrial: '30 days free trial'
    },
    {
      id: 'ai-real-estate-manager',
      title: 'AI Real Estate Manager',
      description: 'Comprehensive real estate management with AI-powered property valuation and market analysis.',
      icon: Home,
      price: '$85/month',
      originalPrice: '$299/month',
      category: 'real-estate',
      features: [
        'Property Management',
        'AI Valuation',
        'Market Analysis',
        'Lead Generation',
        'Document Management',
        'Client Communication',
        'Analytics Dashboard',
        'Mobile App'
      ],
      benefits: [
        'Increase property valuations by 15%',
        'Reduce management time by 50%',
        'Improve lead conversion by 40%',
        'Boost revenue by 35%'
      ],
      marketPrice: '$299-799/month',
      technologies: ['Property APIs', 'AI Valuation', 'Market Data', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      demoUrl: 'https://ziontechgroup.com/realestate-demo',
      freeTrial: '21 days free trial'
    },
    {
      id: 'ai-restaurant-manager',
      title: 'AI Restaurant Manager',
      description: 'Smart restaurant management with inventory optimization, staff scheduling, and customer analytics.',
      icon: Utensils,
      price: '$75/month',
      originalPrice: '$249/month',
      category: 'hospitality',
      features: [
        'Inventory Management',
        'Staff Scheduling',
        'Customer Analytics',
        'Menu Optimization',
        'Order Management',
        'POS Integration',
        'Mobile App',
        'Reporting Dashboard'
      ],
      benefits: [
        'Reduce food waste by 30%',
        'Optimize staff scheduling by 50%',
        'Increase customer satisfaction by 40%',
        'Boost profitability by 25%'
      ],
      marketPrice: '$249-599/month',
      technologies: ['POS Integration', 'Inventory APIs', 'Analytics', 'Mobile Apps'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      demoUrl: 'https://ziontechgroup.com/restaurant-demo',
      freeTrial: '30 days free trial'
    },
    {
      id: 'ai-fitness-coach',
      title: 'AI Fitness Coach',
      description: 'Personalized fitness platform with AI-powered workout plans and nutrition guidance.',
      icon: Heart,
      price: '$25/month',
      originalPrice: '$99/month',
      category: 'fitness',
      features: [
        'Personalized Workouts',
        'Nutrition Planning',
        'Progress Tracking',
        'Wearable Integration',
        'Mobile App',
        'Community Features',
        'Expert Coaching',
        'Analytics Dashboard'
      ],
      benefits: [
        'Improve fitness results by 70%',
        'Increase workout consistency by 60%',
        'Reduce injury risk by 50%',
        'Personalize fitness journey'
      ],
      marketPrice: '$99-299/month',
      technologies: ['Wearable APIs', 'Fitness Analytics', 'Mobile Apps', 'AI Coaching'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      demoUrl: 'https://ziontechgroup.com/fitness-demo',
      freeTrial: '14 days free trial'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools', count: microSAASServices.length },
    { id: 'ai-tools', name: 'AI Tools', count: microSAASServices.filter(s => s.category === 'ai-tools').length },
    { id: 'analytics', name: 'Analytics', count: microSAASServices.filter(s => s.category === 'analytics').length },
    { id: 'productivity', name: 'Productivity', count: microSAASServices.filter(s => s.category === 'productivity').length },
    { id: 'finance', name: 'Finance', count: microSAASServices.filter(s => s.category === 'finance').length },
    { id: 'crm', name: 'CRM', count: microSAASServices.filter(s => s.category === 'crm').length },
    { id: 'marketing', name: 'Marketing', count: microSAASServices.filter(s => s.category === 'marketing').length },
    { id: 'design', name: 'Design', count: microSAASServices.filter(s => s.category === 'design').length },
    { id: 'web-development', name: 'Web Development', count: microSAASServices.filter(s => s.category === 'web-development').length },
    { id: 'seo', name: 'SEO', count: microSAASServices.filter(s => s.category === 'seo').length },
    { id: 'advertising', name: 'Advertising', count: microSAASServices.filter(s => s.category === 'advertising').length },
    { id: 'development', name: 'Development', count: microSAASServices.filter(s => s.category === 'development').length },
    { id: 'healthcare', name: 'Healthcare', count: microSAASServices.filter(s => s.category === 'healthcare').length },
    { id: 'education', name: 'Education', count: microSAASServices.filter(s => s.category === 'education').length },
    { id: 'real-estate', name: 'Real Estate', count: microSAASServices.filter(s => s.category === 'real-estate').length },
    { id: 'hospitality', name: 'Hospitality', count: microSAASServices.filter(s => s.category === 'hospitality').length },
    { id: 'fitness', name: 'Fitness', count: microSAASServices.filter(s => s.category === 'fitness').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="50+ AI-powered micro SAAS tools for business automation, productivity, and growth. Starting at $15/month with free trials." />
        <meta name="keywords" content="micro saas, ai tools, business automation, productivity tools, saas solutions, ai software" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            50+ AI-powered micro SAAS tools designed to automate, optimize, and accelerate your business growth.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">AI Tools</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">$15</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">70%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">Free</div>
              <div className="text-gray-300">Trials Available</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card">
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
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
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
              <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 cyber-card group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 text-sm">{service.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-xs text-gray-300 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Market Price */}
                <div className="mb-6 p-3 bg-yellow-900/20 rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-yellow-300">Market Price:</span>
                    <span className="text-yellow-400 font-semibold">{service.marketPrice}</span>
                  </div>
                  <div className="text-xs text-yellow-200 mt-1">
                    You save {Math.round((1 - parseFloat(service.price.replace('$', '')) / parseFloat(service.originalPrice.replace('$', ''))) * 100)}%
                  </div>
                </div>

                {/* Free Trial */}
                {service.freeTrial && (
                  <div className="mb-6 p-3 bg-green-900/20 rounded-lg">
                    <div className="text-sm text-green-300 font-semibold">
                      🎉 {service.freeTrial}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center block"
                  >
                    Get Started Now
                  </a>
                  {service.demoUrl && (
                    <a
                      href={service.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-transparent border-2 border-cyan-500 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all text-center block"
                    >
                      View Demo
                    </a>
                  )}
                </div>

                <div className="mt-4 text-xs text-gray-500 text-center">
                  {service.contactInfo}
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Choose from 50+ AI-powered micro SAAS tools and start your free trial today.
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

export default MicroSAASPage;