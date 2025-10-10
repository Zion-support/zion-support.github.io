'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BarChart, 
  CheckCircle, 
  Settings, 
  Calendar, 
  Clock3, 
  MessageSquare, 
  FileText, 
  Target, 
  Search, 
  Globe, 
  Users, 
  Calculator, 
  CreditCard, 
  TrendingUp, 
  Bot, 
  Mail, 
  Code, 
  Shield, 
  Lock, 
  BarChart3, 
  Video, 
  Music, 
  Palette, 
  Camera, 
  Stethoscope, 
  Heart, 
  Star,
  ArrowRight,
  Phone,
  MapPin,
  Zap,
  Sparkles,
  Award,
  CheckCircle as Check
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSAASPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const microSAASServices = [
    // Productivity & Management Tools
    {
      name: 'AI Project Manager Pro',
      href: '/ai-project-manager',
      icon: BarChart,
      category: 'Productivity',
      price: '$99/mo',
      originalPrice: '$149/mo',
      description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization', 'Gantt charts', 'Time tracking'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      rating: 4.9,
      users: '10,000+',
      freeTrial: '14 days',
      popular: true
    },
    {
      name: 'AI Task Manager Pro',
      href: '/ai-task-manager',
      icon: CheckCircle,
      category: 'Productivity',
      price: '$49/mo',
      originalPrice: '$79/mo',
      description: 'Smart task management with AI prioritization, deadline tracking, and productivity insights',
      features: ['AI task prioritization', 'Smart scheduling', 'Progress tracking', 'Team collaboration', 'Deadline alerts', 'Productivity analytics', 'Habit tracking', 'Goal setting'],
      benefits: ['60% productivity boost', 'Never miss deadlines', 'Better focus', 'Achieve more goals'],
      rating: 4.8,
      users: '25,000+',
      freeTrial: '7 days',
      popular: true
    },
    {
      name: 'AI Workflow Automation Pro',
      href: '/ai-workflow-automation',
      icon: Settings,
      category: 'Productivity',
      price: '$79/mo',
      originalPrice: '$119/mo',
      description: 'Automate repetitive tasks with intelligent workflow design and execution',
      features: ['Visual workflow builder', 'AI optimization', '500+ integrations', 'Custom triggers', 'Error handling', 'Analytics dashboard', 'Team collaboration', 'API access'],
      benefits: ['20+ hours saved weekly', '99.9% accuracy', 'Easy setup', 'Scalable automation'],
      rating: 4.7,
      users: '15,000+',
      freeTrial: '14 days',
      popular: true
    },
    {
      name: 'AI Scheduler Pro',
      href: '/ai-scheduler',
      icon: Calendar,
      category: 'Productivity',
      price: '$39/mo',
      originalPrice: '$59/mo',
      description: 'Smart scheduling with conflict resolution and optimal time slot recommendations',
      features: ['Smart scheduling', 'Calendar integration', 'Conflict resolution', 'Time zone handling', 'Meeting analytics', 'Auto-reminders', 'Room booking', 'Catering coordination'],
      benefits: ['50% scheduling time saved', 'Zero double bookings', 'Better time utilization', 'Reduced no-shows'],
      rating: 4.8,
      users: '30,000+',
      freeTrial: '7 days',
      popular: true
    },
    {
      name: 'AI Time Tracker Pro',
      href: '/ai-time-tracker',
      icon: Clock3,
      category: 'Productivity',
      price: '$34/mo',
      originalPrice: '$49/mo',
      description: 'Advanced time tracking with AI-powered productivity analysis and reporting',
      features: ['Automatic time tracking', 'AI productivity insights', 'Project time allocation', 'Team monitoring', 'Billing integration', 'Detailed reports', 'Mobile app', 'Offline sync'],
      benefits: ['Accurate time tracking', 'Better project estimates', 'Improved billing', 'Productivity insights'],
      rating: 4.6,
      users: '20,000+',
      freeTrial: '7 days',
      popular: false
    },
    {
      name: 'AI Meeting Assistant Pro',
      href: '/ai-meeting-assistant',
      icon: MessageSquare,
      category: 'Productivity',
      price: '$59/mo',
      originalPrice: '$89/mo',
      description: 'AI-powered meeting transcription, action items extraction, and follow-up automation',
      features: ['Live transcription', 'Action item extraction', 'Meeting summaries', 'Follow-up automation', 'Integration with calendars', 'Voice recognition', 'Multi-language support', 'Meeting analytics'],
      benefits: ['100% meeting coverage', 'Never miss action items', 'Better follow-up', 'Time savings'],
      rating: 4.7,
      users: '12,000+',
      freeTrial: '14 days',
      popular: false
    },

    // Content & Marketing Tools
    {
      name: 'AI Content Writer Pro',
      href: '/ai-content-writer',
      icon: FileText,
      category: 'Content',
      price: '$89/mo',
      originalPrice: '$129/mo',
      description: 'Advanced AI content generation for blogs, articles, and marketing copy',
      features: ['AI content generation', 'SEO optimization', 'Multiple content types', 'Brand voice training', 'Plagiarism detection', 'Content calendar', 'Team collaboration', 'Analytics dashboard'],
      benefits: ['10x content output', 'SEO-optimized content', 'Consistent brand voice', 'Time savings'],
      rating: 4.8,
      users: '18,000+',
      freeTrial: '14 days',
      popular: true
    },
    {
      name: 'AI Social Media Manager Pro',
      href: '/ai-social-media-manager',
      icon: MessageSquare,
      category: 'Marketing',
      price: '$69/mo',
      originalPrice: '$99/mo',
      description: 'Automated social media posting, engagement, and analytics with AI optimization',
      features: ['Multi-platform posting', 'AI content optimization', 'Engagement automation', 'Analytics dashboard', 'Hashtag research', 'Content calendar', 'Team collaboration', 'Brand monitoring'],
      benefits: ['3x engagement increase', 'Consistent posting', 'Better content performance', 'Time savings'],
      rating: 4.7,
      users: '22,000+',
      freeTrial: '14 days',
      popular: true
    },
    {
      name: 'AI Email Marketing Suite',
      href: '/ai-email-marketing',
      icon: Mail,
      category: 'Marketing',
      price: '$59/mo',
      originalPrice: '$89/mo',
      description: 'AI-powered email campaigns with personalization and performance optimization',
      features: ['AI personalization', 'A/B testing', 'Automated campaigns', 'List segmentation', 'Analytics dashboard', 'Template library', 'Integration tools', 'Deliverability optimization'],
      benefits: ['150% open rate increase', 'Better personalization', 'Automated campaigns', 'Higher ROI'],
      rating: 4.6,
      users: '16,000+',
      freeTrial: '14 days',
      popular: false
    },
    {
      name: 'AI SEO Optimizer Pro',
      href: '/ai-seo-optimizer',
      icon: Search,
      category: 'Marketing',
      price: '$79/mo',
      originalPrice: '$119/mo',
      description: 'Comprehensive SEO analysis and optimization with AI-driven recommendations',
      features: ['Keyword research', 'On-page optimization', 'Technical SEO', 'Competitor analysis', 'Rank tracking', 'Content optimization', 'Link building', 'Local SEO'],
      benefits: ['300% traffic increase', 'Better rankings', 'Comprehensive analysis', 'Actionable insights'],
      rating: 4.8,
      users: '14,000+',
      freeTrial: '14 days',
      popular: true
    },
    {
      name: 'AI Lead Generation Pro',
      href: '/ai-lead-generation',
      icon: Target,
      category: 'Marketing',
      price: '$99/mo',
      originalPrice: '$149/mo',
      description: 'Intelligent lead scoring, qualification, and nurturing automation',
      features: ['Lead scoring', 'Qualification automation', 'Nurturing campaigns', 'CRM integration', 'Analytics dashboard', 'A/B testing', 'Multi-channel', 'ROI tracking'],
      benefits: ['200% lead quality', 'Automated nurturing', 'Better conversion', 'Higher ROI'],
      rating: 4.7,
      users: '11,000+',
      freeTrial: '14 days',
      popular: false
    },

    // Business & Finance Tools
    {
      name: 'AI CRM Intelligence Pro',
      href: '/ai-crm',
      icon: Users,
      category: 'Business',
      price: '$89/mo',
      originalPrice: '$129/mo',
      description: 'Smart CRM with AI-powered customer insights and sales forecasting',
      features: ['AI customer insights', 'Sales forecasting', 'Pipeline management', 'Automation', 'Analytics dashboard', 'Integration tools', 'Mobile app', 'Custom fields'],
      benefits: ['25% sales increase', 'Better customer insights', 'Automated processes', 'Higher conversion'],
      rating: 4.8,
      users: '13,000+',
      freeTrial: '14 days',
      popular: true
    },
    {
      name: 'AI Financial Analyzer Pro',
      href: '/ai-financial-analyzer',
      icon: Calculator,
      category: 'Finance',
      price: '$79/mo',
      originalPrice: '$119/mo',
      description: 'Advanced financial analysis with AI-driven insights and forecasting',
      features: ['Financial forecasting', 'Risk analysis', 'Investment insights', 'Portfolio optimization', 'Market analysis', 'Reporting tools', 'Integration', 'Real-time data'],
      benefits: ['Better investment decisions', 'Risk reduction', 'Higher returns', 'Comprehensive analysis'],
      rating: 4.7,
      users: '9,000+',
      freeTrial: '14 days',
      popular: false
    },
    {
      name: 'AI Invoice Generator Pro',
      href: '/ai-invoice-generator',
      icon: FileText,
      category: 'Finance',
      price: '$49/mo',
      originalPrice: '$79/mo',
      description: 'Automated invoice generation with AI-powered pricing and payment tracking',
      features: ['Auto invoice generation', 'AI pricing', 'Payment tracking', 'Recurring billing', 'Multi-currency', 'Tax calculation', 'Integration tools', 'Analytics'],
      benefits: ['50% time savings', 'Faster payments', 'Reduced errors', 'Better cash flow'],
      rating: 4.6,
      users: '17,000+',
      freeTrial: '7 days',
      popular: false
    },
    {
      name: 'AI Expense Tracker Pro',
      href: '/ai-expense-tracker',
      icon: CreditCard,
      category: 'Finance',
      price: '$29/mo',
      originalPrice: '$49/mo',
      description: 'Smart expense tracking with AI categorization and budget management',
      features: ['AI categorization', 'Receipt scanning', 'Budget management', 'Expense reports', 'Tax preparation', 'Integration tools', 'Mobile app', 'Analytics'],
      benefits: ['Accurate tracking', 'Tax savings', 'Better budgeting', 'Time savings'],
      rating: 4.5,
      users: '21,000+',
      freeTrial: '7 days',
      popular: false
    },

    // Customer Service & Support Tools
    {
      name: 'AI Customer Support Bot Pro',
      href: '/ai-customer-support-bot',
      icon: Bot,
      category: 'Support',
      price: '$99/mo',
      originalPrice: '$149/mo',
      description: 'Advanced AI chatbot with natural language processing and human handoff',
      features: ['Natural language processing', 'Human handoff', 'Multi-channel support', 'Knowledge base', 'Analytics dashboard', 'Custom training', 'Integration tools', '24/7 availability'],
      benefits: ['80% query resolution', '24/7 support', 'Cost reduction', 'Better customer satisfaction'],
      rating: 4.8,
      users: '8,000+',
      freeTrial: '14 days',
      popular: true
    },
    {
      name: 'AI Chatbot Builder Pro',
      href: '/ai-chatbot-builder',
      icon: Bot,
      category: 'Support',
      price: '$69/mo',
      originalPrice: '$99/mo',
      description: 'No-code chatbot builder with AI training and optimization',
      features: ['No-code builder', 'AI training', 'Multi-platform', 'Analytics', 'Custom responses', 'Integration tools', 'A/B testing', 'Performance optimization'],
      benefits: ['Easy setup', 'Custom solutions', 'Better engagement', 'Cost effective'],
      rating: 4.6,
      users: '12,000+',
      freeTrial: '14 days',
      popular: false
    },

    // Development & Technical Tools
    {
      name: 'AI Code Review Assistant Pro',
      href: '/ai-code-generation',
      icon: Code,
      category: 'Development',
      price: '$89/mo',
      originalPrice: '$129/mo',
      description: 'AI-powered code review, suggestions, and automated testing',
      features: ['Code review', 'Bug detection', 'Performance optimization', 'Security analysis', 'Best practices', 'Automated testing', 'Integration tools', 'Team collaboration'],
      benefits: ['Better code quality', 'Faster development', 'Fewer bugs', 'Team learning'],
      rating: 4.7,
      users: '7,000+',
      freeTrial: '14 days',
      popular: false
    },
    {
      name: 'AI Mobile App Builder Pro',
      href: '/ai-mobile-app-development',
      icon: Settings,
      category: 'Development',
      price: '$149/mo',
      originalPrice: '$199/mo',
      description: 'No-code mobile app development with AI optimization',
      features: ['No-code development', 'AI optimization', 'Cross-platform', 'App store deployment', 'Analytics integration', 'Push notifications', 'User management', 'Custom features'],
      benefits: ['Faster development', 'Lower costs', 'Better performance', 'Easy maintenance'],
      rating: 4.6,
      users: '5,000+',
      freeTrial: '14 days',
      popular: false
    },
    {
      name: 'AI Cybersecurity Shield Pro',
      href: '/ai-cybersecurity',
      icon: Shield,
      category: 'Security',
      price: '$199/mo',
      originalPrice: '$299/mo',
      description: 'AI-powered threat detection and security monitoring',
      features: ['Threat detection', 'Real-time monitoring', 'Vulnerability scanning', 'Incident response', 'Compliance reporting', 'Integration tools', '24/7 monitoring', 'Expert support'],
      benefits: ['Better security', 'Faster response', 'Compliance assurance', 'Peace of mind'],
      rating: 4.8,
      users: '3,000+',
      freeTrial: '14 days',
      popular: true
    },

    // Analytics & Data Tools
    {
      name: 'AI Data Analytics Pro',
      href: '/ai-data-analytics',
      icon: BarChart3,
      category: 'Analytics',
      price: '$99/mo',
      originalPrice: '$149/mo',
      description: 'Advanced data analytics with AI-powered insights and predictions',
      features: ['AI insights', 'Predictive analytics', 'Data visualization', 'Custom dashboards', 'Integration tools', 'Real-time data', 'Export options', 'Team collaboration'],
      benefits: ['Better insights', 'Data-driven decisions', 'Competitive advantage', 'ROI improvement'],
      rating: 4.7,
      users: '6,000+',
      freeTrial: '14 days',
      popular: false
    },
    {
      name: 'AI Data Visualization Pro',
      href: '/ai-data-visualization',
      icon: BarChart,
      category: 'Analytics',
      price: '$69/mo',
      originalPrice: '$99/mo',
      description: 'AI-generated charts, graphs, and interactive dashboards',
      features: ['AI-generated charts', 'Interactive dashboards', 'Custom visualizations', 'Real-time updates', 'Export options', 'Integration tools', 'Templates', 'Collaboration'],
      benefits: ['Better data understanding', 'Faster insights', 'Professional presentations', 'Easy sharing'],
      rating: 4.6,
      users: '8,000+',
      freeTrial: '14 days',
      popular: false
    },

    // Creative & Media Tools
    {
      name: 'AI Video Generator Pro',
      href: '/ai-video-generation',
      icon: Video,
      category: 'Creative',
      price: '$149/mo',
      originalPrice: '$199/mo',
      description: 'AI-powered video creation from text prompts and templates',
      features: ['Text-to-video', 'Template library', 'Custom branding', 'Multiple formats', 'Music integration', 'Voice synthesis', 'Export options', 'Team collaboration'],
      benefits: ['Faster video creation', 'Lower costs', 'Professional quality', 'Easy to use'],
      rating: 4.7,
      users: '4,000+',
      freeTrial: '14 days',
      popular: false
    },
    {
      name: 'AI Voice Cloning Studio Pro',
      href: '/ai-voice-cloning',
      icon: Music,
      category: 'Creative',
      price: '$79/mo',
      originalPrice: '$119/mo',
      description: 'High-quality voice cloning and synthesis for various applications',
      features: ['Voice cloning', 'Text-to-speech', 'Multiple languages', 'Emotion control', 'Custom voices', 'API access', 'Integration tools', 'Quality control'],
      benefits: ['Realistic voices', 'Cost savings', 'Custom solutions', 'Easy integration'],
      rating: 4.6,
      users: '3,000+',
      freeTrial: '14 days',
      popular: false
    },
    {
      name: 'AI Logo Designer Pro',
      href: '/ai-logo-designer',
      icon: Palette,
      category: 'Creative',
      price: '$59/mo',
      originalPrice: '$89/mo',
      description: 'Professional logo design with AI-powered creativity',
      features: ['AI logo generation', 'Custom designs', 'Multiple formats', 'Brand guidelines', 'Color palettes', 'Font selection', 'Vector files', 'Commercial license'],
      benefits: ['Professional designs', 'Cost savings', 'Quick turnaround', 'Unlimited revisions'],
      rating: 4.7,
      users: '15,000+',
      freeTrial: '7 days',
      popular: false
    },

    // Health & Wellness Tools
    {
      name: 'AI Healthcare Assistant Pro',
      href: '/ai-healthcare',
      icon: Stethoscope,
      category: 'Health',
      price: '$49/mo',
      originalPrice: '$79/mo',
      description: 'AI-powered health monitoring and wellness recommendations',
      features: ['Health monitoring', 'Symptom analysis', 'Wellness recommendations', 'Medication reminders', 'Appointment scheduling', 'Health reports', 'Integration tools', 'Privacy protection'],
      benefits: ['Better health tracking', 'Early detection', 'Wellness improvement', 'Cost savings'],
      rating: 4.8,
      users: '19,000+',
      freeTrial: '14 days',
      popular: true
    },
    {
      name: 'AI Fitness Coach Pro',
      href: '/ai-fitness-coach',
      icon: Heart,
      category: 'Health',
      price: '$39/mo',
      originalPrice: '$59/mo',
      description: 'Personalized fitness plans and workout optimization with AI',
      features: ['Personalized plans', 'Workout optimization', 'Progress tracking', 'Nutrition guidance', 'Goal setting', 'Community features', 'Integration tools', 'Mobile app'],
      benefits: ['Better results', 'Personalized approach', 'Motivation', 'Time efficiency'],
      rating: 4.6,
      users: '24,000+',
      freeTrial: '7 days',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Solutions', count: microSAASServices.length },
    { id: 'Productivity', name: 'Productivity', count: microSAASServices.filter(s => s.category === 'Productivity').length },
    { id: 'Content', name: 'Content & Marketing', count: microSAASServices.filter(s => s.category === 'Content' || s.category === 'Marketing').length },
    { id: 'Business', name: 'Business & Finance', count: microSAASServices.filter(s => s.category === 'Business' || s.category === 'Finance').length },
    { id: 'Support', name: 'Customer Service', count: microSAASServices.filter(s => s.category === 'Support').length },
    { id: 'Development', name: 'Development', count: microSAASServices.filter(s => s.category === 'Development' || s.category === 'Security').length },
    { id: 'Analytics', name: 'Analytics', count: microSAASServices.filter(s => s.category === 'Analytics').length },
    { id: 'Creative', name: 'Creative', count: microSAASServices.filter(s => s.category === 'Creative').length },
    { id: 'Health', name: 'Health & Wellness', count: microSAASServices.filter(s => s.category === 'Health').length }
  ];

  const getFilteredServices = () => {
    if (activeCategory === 'all') return microSAASServices;
    return microSAASServices.filter(service => 
      service.category === activeCategory || 
      (activeCategory === 'Content' && service.category === 'Marketing') ||
      (activeCategory === 'Business' && (service.category === 'Business' || service.category === 'Finance')) ||
      (activeCategory === 'Development' && (service.category === 'Development' || service.category === 'Security'))
    );
  };

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive collection of AI-powered micro SAAS solutions. From productivity tools to creative applications, boost your business efficiency with our innovative software solutions." />
        <meta name="keywords" content="micro SAAS, AI tools, business software, productivity apps, marketing tools, CRM, project management, automation" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SAAS
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful AI-driven micro SAAS applications designed to streamline your business operations, boost productivity, and drive growth. Choose from our comprehensive suite of specialized tools.
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Phone className="w-5 h-5" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-300 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-slate-700 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredServices().map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group relative ${
                      service.popular ? 'ring-2 ring-cyan-500/50' : ''
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                          <IconComponent className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {service.name}
                          </h3>
                          <span className="text-sm text-cyan-400 font-medium">
                            {service.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-white mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <span key={idx} className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 4 && (
                          <span className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded">
                            +{service.features.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-white mb-2">Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Pricing and Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-white">
                          {service.price}
                        </div>
                        {service.originalPrice && (
                          <div className="text-sm text-gray-400 line-through">
                            {service.originalPrice}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{service.rating}</span>
                        </div>
                        <div className="text-sm text-gray-400">
                          {service.users}
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <a
                        href={service.href}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                      <div className="text-xs text-gray-400">
                        {service.freeTrial} free trial
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Boost Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven micro SAAS solutions. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default MicroSAASPage;