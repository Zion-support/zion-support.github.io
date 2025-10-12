'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Code, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Mail,
  MessageSquare,
  FileText,
  Cpu,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Phone,
  MapPin,
  Clock,
  DollarSign,
  Brain,
  Settings,
  Camera,
  Database,
  Lock,
  Smartphone,
  Wifi,
  Cloud,
  Target,
  PieChart,
  Calendar,
  CreditCard,
  ShoppingCart,
  Headphones,
  BookOpen,
  Lightbulb,
  Heart,
  Leaf,
  Car,
  Home,
  Briefcase,
  GraduationCap,
  Stethoscope,
  Utensils,
  Music,
  Gamepad2,
  Palette,
  Wrench,
  Search,
  Filter,
  SortAsc,
  Download,
  Upload,
  Share2,
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
  ChevronRight,
  ChevronDown,
  Menu,
  X as CloseIcon
} from 'lucide-react';

export default function MicroSaasServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const microSaasServices = [
    // Business & Productivity
    {
      name: 'AI-Powered CRM Pro',
      description: 'Intelligent customer relationship management with AI insights, lead scoring, and automated follow-ups',
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['Lead scoring & qualification', 'Automated follow-ups', 'Sales forecasting', 'Integration APIs', 'Custom dashboards', 'Mobile app', 'Email tracking', 'Pipeline management'],
      icon: Users,
      path: '/ai-crm',
      category: 'Business & Productivity',
      rating: 4.8,
      reviews: 156,
      freeTrial: '14 days',
      popular: true,
      savings: '33%'
    },
    {
      name: 'Smart Analytics Platform',
      description: 'Business intelligence with AI-powered insights, custom dashboards, and predictive analytics',
      price: '$149/month',
      features: ['Custom dashboards', 'Predictive analytics', 'Data visualization', 'Export capabilities', 'Real-time monitoring', 'API integration', 'Automated reports', 'Data connectors'],
      icon: BarChart3,
      path: '/smart-analytics',
      category: 'Business & Productivity',
      rating: 4.9,
      reviews: 203,
      freeTrial: '30 days',
      popular: false
    },
    {
      name: 'Project Management Hub',
      description: 'AI-enhanced project management with smart task assignment, progress tracking, and resource optimization',
      price: '$119/month',
      features: ['Smart task assignment', 'Progress tracking', 'Resource optimization', 'Team collaboration', 'Time tracking', 'Budget management', 'Gantt charts', 'Risk assessment'],
      icon: TrendingUp,
      path: '/ai-project-management',
      category: 'Business & Productivity',
      rating: 4.8,
      reviews: 167,
      freeTrial: '14 days',
      popular: false
    },
    {
      name: 'AI Invoice Generator Pro',
      description: 'Automated invoice generation with AI-powered customization, payment tracking, and client management',
      price: '$79/month',
      features: ['Template library', 'Auto-calculation', 'Payment tracking', 'Client management', 'Tax calculations', 'Multi-currency', 'Recurring invoices', 'Payment reminders'],
      icon: FileText,
      path: '/ai-invoice-generator',
      category: 'Business & Productivity',
      rating: 4.7,
      reviews: 134,
      freeTrial: '7 days',
      popular: false
    },

    // Marketing & Sales
    {
      name: 'Email Marketing Automation',
      description: 'Intelligent email campaigns with personalization, A/B testing, and comprehensive analytics',
      price: '$129/month',
      features: ['A/B testing', 'Behavioral triggers', 'Deliverability optimization', 'ROI tracking', 'Template builder', 'List segmentation', 'Automation workflows', 'Spam testing'],
      icon: Mail,
      path: '/ai-email-marketing',
      category: 'Marketing & Sales',
      rating: 4.8,
      reviews: 187,
      freeTrial: '14 days',
      popular: true
    },
    {
      name: 'Social Media Manager Pro',
      description: 'AI-powered social media management with content suggestions, scheduling, and engagement analytics',
      price: '$89/month',
      features: ['Multi-platform posting', 'Content suggestions', 'Engagement analytics', 'Hashtag optimization', 'Scheduling tools', 'Influencer tracking', 'Brand monitoring', 'Competitor analysis'],
      icon: MessageSquare,
      path: '/ai-social-media-manager',
      category: 'Marketing & Sales',
      rating: 4.7,
      reviews: 145,
      freeTrial: '7 days',
      popular: false
    },
    {
      name: 'AI Content Generator Studio',
      description: 'Advanced content creation with AI assistance for blogs, social media, and marketing materials',
      price: '$199/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content scheduling', 'Plagiarism check', 'Tone adjustment', 'Content templates', 'Team collaboration'],
      icon: FileText,
      path: '/ai-content-generator',
      category: 'Marketing & Sales',
      rating: 4.9,
      reviews: 234,
      freeTrial: '14 days',
      popular: true
    },
    {
      name: 'Lead Generation Engine',
      description: 'AI-powered lead generation with automated prospecting, qualification, and nurturing',
      price: '$159/month',
      features: ['Automated prospecting', 'Lead scoring', 'Email sequences', 'CRM integration', 'Data enrichment', 'Follow-up automation', 'Conversion tracking', 'ROI analytics'],
      icon: Target,
      path: '/ai-lead-generation',
      category: 'Marketing & Sales',
      rating: 4.8,
      reviews: 198,
      freeTrial: '14 days',
      popular: false
    },

    // Customer Support
    {
      name: 'AI Customer Support Bot',
      description: 'Intelligent customer support automation with multi-channel support and sentiment analysis',
      price: '$159/month',
      features: ['Multi-channel support', 'Sentiment analysis', 'Knowledge base', 'Ticket management', 'Live chat integration', 'Performance analytics', 'Escalation rules', 'Customer satisfaction tracking'],
      icon: Headphones,
      path: '/ai-customer-support',
      category: 'Customer Support',
      rating: 4.9,
      reviews: 234,
      freeTrial: '14 days',
      popular: true
    },
    {
      name: 'Live Chat Assistant Pro',
      description: 'Advanced live chat solution with AI-powered responses and human handoff capabilities',
      price: '$89/month',
      features: ['Real-time chat', 'AI responses', 'Human handoff', 'Chat history', 'File sharing', 'Screen sharing', 'Multi-language', 'Mobile app'],
      icon: MessageSquare,
      path: '/ai-live-chat',
      category: 'Customer Support',
      rating: 4.7,
      reviews: 156,
      freeTrial: '7 days',
      popular: false
    },

    // Finance & Accounting
    {
      name: 'AI Expense Tracker Pro',
      description: 'Automated expense tracking with AI-powered categorization, receipt scanning, and financial insights',
      price: '$49/month',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget alerts', 'Financial reports', 'Tax preparation', 'Multi-currency', 'Team expenses', 'Integration APIs'],
      icon: DollarSign,
      path: '/ai-expense-tracker',
      category: 'Finance & Accounting',
      rating: 4.8,
      reviews: 189,
      freeTrial: '14 days',
      popular: false
    },
    {
      name: 'Financial Analytics Suite',
      description: 'AI-powered financial analysis with forecasting, budgeting, and investment insights',
      price: '$179/month',
      features: ['Financial forecasting', 'Budget planning', 'Investment insights', 'Risk analysis', 'Compliance reporting', 'Custom reports', 'Cash flow analysis', 'Profit optimization'],
      icon: PieChart,
      path: '/ai-financial-analytics',
      category: 'Finance & Accounting',
      rating: 4.8,
      reviews: 112,
      freeTrial: '30 days',
      popular: true
    },
    {
      name: 'AI Tax Assistant',
      description: 'Intelligent tax preparation and filing assistance with automated calculations and compliance checks',
      price: '$299/month',
      features: ['Tax calculations', 'Compliance checks', 'Document organization', 'Filing assistance', 'Audit support', 'Multi-state filing', 'Deduction optimization', 'Year-round support'],
      icon: Calculator,
      path: '/ai-tax-assistant',
      category: 'Finance & Accounting',
      rating: 4.9,
      reviews: 87,
      freeTrial: '14 days',
      popular: false
    },

    // Content & Design
    {
      name: 'AI Content Management System',
      description: 'AI-enhanced CMS with intelligent content optimization, SEO tools, and multi-language support',
      price: '$79/month',
      features: ['SEO optimization', 'Content scheduling', 'Multi-language support', 'Analytics integration', 'User management', 'Template library', 'Version control', 'Collaboration tools'],
      icon: FileText,
      path: '/ai-content-management',
      category: 'Content & Design',
      rating: 4.6,
      reviews: 98,
      freeTrial: '14 days',
      popular: false
    },
    {
      name: 'AI Design Studio',
      description: 'AI-powered design tool for creating logos, graphics, and marketing materials',
      price: '$149/month',
      features: ['Logo generation', 'Graphic design', 'Brand guidelines', 'Template library', 'Color palette', 'Font matching', 'Export options', 'Team collaboration'],
      icon: Palette,
      path: '/ai-design-studio',
      category: 'Content & Design',
      rating: 4.7,
      reviews: 167,
      freeTrial: '7 days',
      popular: true
    },
    {
      name: 'Video Content Creator',
      description: 'AI-powered video creation and editing with automated scripting and voice synthesis',
      price: '$199/month',
      features: ['Video generation', 'Script writing', 'Voice synthesis', 'Auto-editing', 'Template library', 'Multi-format export', 'Brand customization', 'Analytics tracking'],
      icon: Camera,
      path: '/ai-video-creator',
      category: 'Content & Design',
      rating: 4.8,
      reviews: 145,
      freeTrial: '14 days',
      popular: false
    },

    // Health & Wellness
    {
      name: 'AI Health Tracker Pro',
      description: 'Personal health monitoring with AI-powered insights, goal tracking, and wellness recommendations',
      price: '$29/month',
      features: ['Health metrics', 'Goal tracking', 'AI insights', 'Progress reports', 'Medication reminders', 'Exercise plans', 'Nutrition tracking', 'Doctor integration'],
      icon: Heart,
      path: '/ai-health-tracker',
      category: 'Health & Wellness',
      rating: 4.8,
      reviews: 234,
      freeTrial: '30 days',
      popular: true
    },
    {
      name: 'Mental Wellness Coach',
      description: 'AI-powered mental health support with mood tracking, meditation guidance, and stress management',
      price: '$39/month',
      features: ['Mood tracking', 'Meditation guides', 'Stress management', 'Sleep optimization', 'Anxiety support', 'Progress tracking', 'Professional referrals', 'Crisis support'],
      icon: Brain,
      path: '/ai-mental-wellness',
      category: 'Health & Wellness',
      rating: 4.9,
      reviews: 198,
      freeTrial: '14 days',
      popular: false
    },

    // Education & Learning
    {
      name: 'AI Learning Platform',
      description: 'Personalized learning experience with AI-powered curriculum, progress tracking, and skill assessment',
      price: '$59/month',
      features: ['Personalized curriculum', 'Progress tracking', 'Skill assessment', 'Interactive content', 'Certification', 'Mobile learning', 'Offline access', 'Progress analytics'],
      icon: GraduationCap,
      path: '/ai-learning-platform',
      category: 'Education & Learning',
      rating: 4.8,
      reviews: 167,
      freeTrial: '14 days',
      popular: false
    },
    {
      name: 'Language Learning Assistant',
      description: 'AI-powered language learning with conversation practice, pronunciation feedback, and cultural insights',
      price: '$39/month',
      features: ['Conversation practice', 'Pronunciation feedback', 'Cultural insights', 'Progress tracking', 'Gamification', 'Multi-language', 'Offline mode', 'Certification'],
      icon: Globe,
      path: '/ai-language-learning',
      category: 'Education & Learning',
      rating: 4.7,
      reviews: 189,
      freeTrial: '7 days',
      popular: true
    },

    // E-commerce & Retail
    {
      name: 'AI E-commerce Optimizer',
      description: 'Complete e-commerce solution with AI-powered product recommendations, pricing optimization, and inventory management',
      price: '$199/month',
      features: ['Product recommendations', 'Pricing optimization', 'Inventory management', 'Customer insights', 'A/B testing', 'Analytics dashboard', 'Mobile optimization', 'Payment integration'],
      icon: ShoppingCart,
      path: '/ai-ecommerce-optimizer',
      category: 'E-commerce & Retail',
      rating: 4.8,
      reviews: 156,
      freeTrial: '14 days',
      popular: true
    },
    {
      name: 'Inventory Management Pro',
      description: 'AI-powered inventory tracking with demand forecasting, automated reordering, and supply chain optimization',
      price: '$149/month',
      features: ['Demand forecasting', 'Automated reordering', 'Supply chain optimization', 'Real-time tracking', 'Cost analysis', 'Vendor management', 'Quality control', 'Reporting'],
      icon: Package,
      path: '/ai-inventory-management',
      category: 'E-commerce & Retail',
      rating: 4.7,
      reviews: 134,
      freeTrial: '14 days',
      popular: false
    },

    // Security & Privacy
    {
      name: 'AI Password Manager Pro',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring',
      price: '$19/month',
      features: ['Password generation', 'Security scoring', 'Breach monitoring', 'Multi-device sync', '2FA integration', 'Family sharing', 'Dark web monitoring', 'Secure sharing'],
      icon: Shield,
      path: '/ai-password-manager',
      category: 'Security & Privacy',
      rating: 4.9,
      reviews: 267,
      freeTrial: '30 days',
      popular: true
    },
    {
      name: 'AI Security Monitor',
      description: 'Advanced security monitoring with threat detection, vulnerability scanning, and incident response',
      price: '$299/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance monitoring', 'Security reports', 'Real-time alerts', 'Team training', '24/7 support'],
      icon: Lock,
      path: '/ai-security-monitor',
      category: 'Security & Privacy',
      rating: 4.8,
      reviews: 98,
      freeTrial: '14 days',
      popular: false
    },

    // Productivity & Organization
    {
      name: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, automation, and team collaboration',
      price: '$39/month',
      features: ['Smart prioritization', 'Team collaboration', 'Progress tracking', 'Deadline alerts', 'Time tracking', 'Project templates', 'Integration APIs', 'Mobile app'],
      icon: CheckCircle,
      path: '/ai-task-manager',
      category: 'Productivity & Organization',
      rating: 4.8,
      reviews: 189,
      freeTrial: '14 days',
      popular: true
    },
    {
      name: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI-powered scheduling optimization and meeting insights',
      price: '$29/month',
      features: ['Smart scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync', 'Conflict resolution', 'Travel planning', 'Meeting analytics', 'Team coordination'],
      icon: Calendar,
      path: '/ai-smart-calendar',
      category: 'Productivity & Organization',
      rating: 4.7,
      reviews: 156,
      freeTrial: '7 days',
      popular: false
    },

    // Environment & Sustainability
    {
      name: 'AI Climate Solutions Pro',
      description: 'Environmental monitoring and sustainability solutions powered by AI for carbon tracking and green initiatives',
      price: '$79/month',
      features: ['Carbon tracking', 'Sustainability goals', 'Impact reporting', 'Green recommendations', 'Energy optimization', 'Waste reduction', 'Compliance tracking', 'Team engagement'],
      icon: Leaf,
      path: '/ai-climate-solutions-pro',
      category: 'Environment & Sustainability',
      rating: 4.8,
      reviews: 123,
      freeTrial: '14 days',
      popular: true
    },

    // Specialized Industries
    {
      name: 'AI Healthcare Assistant',
      description: 'Medical AI assistant for patient management, diagnosis support, and treatment recommendations',
      price: '$399/month',
      features: ['Patient management', 'Diagnosis support', 'Treatment recommendations', 'Medical records', 'Appointment scheduling', 'Prescription management', 'Compliance tracking', 'Integration APIs'],
      icon: Stethoscope,
      path: '/ai-healthcare-assistant',
      category: 'Healthcare',
      rating: 4.9,
      reviews: 89,
      freeTrial: '14 days',
      popular: false
    },
    {
      name: 'AI Legal Assistant',
      description: 'Legal AI tool for document analysis, contract review, and legal research assistance',
      price: '$299/month',
      features: ['Document analysis', 'Contract review', 'Legal research', 'Compliance checking', 'Case management', 'Client communication', 'Billing automation', 'Court filing'],
      icon: Scale,
      path: '/ai-legal-assistant',
      category: 'Legal',
      rating: 4.8,
      reviews: 67,
      freeTrial: '14 days',
      popular: false
    },
    {
      name: 'AI Real Estate Assistant',
      description: 'Property management and real estate AI with market analysis, property valuation, and client management',
      price: '$199/month',
      features: ['Market analysis', 'Property valuation', 'Client management', 'Lead generation', 'Document management', 'Transaction tracking', 'Marketing automation', 'Investment analysis'],
      icon: Home,
      path: '/ai-real-estate-assistant',
      category: 'Real Estate',
      rating: 4.7,
      reviews: 134,
      freeTrial: '14 days',
      popular: true
    }
  ];

  const categories = [
    { name: 'All Services', count: microSaasServices.length, icon: Globe },
    { name: 'Business & Productivity', count: microSaasServices.filter(s => s.category === 'Business & Productivity').length, icon: Briefcase },
    { name: 'Marketing & Sales', count: microSaasServices.filter(s => s.category === 'Marketing & Sales').length, icon: Target },
    { name: 'Customer Support', count: microSaasServices.filter(s => s.category === 'Customer Support').length, icon: Headphones },
    { name: 'Finance & Accounting', count: microSaasServices.filter(s => s.category === 'Finance & Accounting').length, icon: DollarSign },
    { name: 'Content & Design', count: microSaasServices.filter(s => s.category === 'Content & Design').length, icon: Palette },
    { name: 'Health & Wellness', count: microSaasServices.filter(s => s.category === 'Health & Wellness').length, icon: Heart },
    { name: 'Education & Learning', count: microSaasServices.filter(s => s.category === 'Education & Learning').length, icon: GraduationCap },
    { name: 'E-commerce & Retail', count: microSaasServices.filter(s => s.category === 'E-commerce & Retail').length, icon: ShoppingCart },
    { name: 'Security & Privacy', count: microSaasServices.filter(s => s.category === 'Security & Privacy').length, icon: Shield },
    { name: 'Productivity & Organization', count: microSaasServices.filter(s => s.category === 'Productivity & Organization').length, icon: CheckCircle },
    { name: 'Environment & Sustainability', count: microSaasServices.filter(s => s.category === 'Environment & Sustainability').length, icon: Leaf },
    { name: 'Healthcare', count: microSaasServices.filter(s => s.category === 'Healthcare').length, icon: Stethoscope },
    { name: 'Legal', count: microSaasServices.filter(s => s.category === 'Legal').length, icon: Scale },
    { name: 'Real Estate', count: microSaasServices.filter(s => s.category === 'Real Estate').length, icon: Home }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our intuitive setup process and pre-built templates'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and data protection for your business'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Grow with confidence - our solutions scale seamlessly as your business expands'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team to ensure your success'
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Advanced AI technology that learns and adapts to your business needs'
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$49/month',
      description: 'Perfect for small businesses getting started',
      features: ['Up to 5 users', 'Basic features', 'Email support', '5GB storage', 'Standard integrations'],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '$149/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: ['Up to 25 users', 'Advanced features', 'Priority support', '50GB storage', 'Premium integrations', 'Custom reports'],
      popular: true,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Enterprise',
      price: '$299/month',
      description: 'Complete solution for large organizations',
      features: ['Unlimited users', 'All features', '24/7 phone support', 'Unlimited storage', 'Custom integrations', 'Dedicated account manager'],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const filteredServices = selectedCategory === 'All Services' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | Powerful Business Solutions</title>
        <meta name="description" content="Comprehensive micro SAAS solutions including CRM, analytics, testing, content management, email marketing, and project management. Streamline your business processes with AI-powered tools." />
        <meta name="keywords" content="micro SAAS, business software, CRM, analytics, testing, content management, email marketing, project management, customer support, AI tools" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#10b981" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Micro SAAS Services - Zion Tech Group | Powerful Business Solutions" />
        <meta property="og:description" content="Comprehensive micro SAAS solutions including CRM, analytics, testing, content management, email marketing, and project management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-micro-saas.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micro SAAS Services - Zion Tech Group" />
        <meta name="twitter:description" content="Comprehensive micro SAAS solutions for business growth and efficiency." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-micro-saas.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-teal-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Micro SAAS Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Powerful, scalable micro SAAS platforms designed to streamline your business processes, 
                enhance productivity, and drive growth across all departments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SAAS platforms are designed to deliver maximum value with minimal complexity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include free trials and no setup fees.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 ${
                  tier.popular 
                    ? 'border-green-500/50 bg-green-500/10' 
                    : 'border-white/20 hover:border-white/40'
                }`}>
                  {tier.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-green-400 mb-2">{tier.price}</div>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
                      : 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50'
                  }`}>
                    {tier.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-white font-semibold">{service.rating}</span>
                      </div>
                      <div className="text-sm text-gray-400">{service.reviews} reviews</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {service.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="text-3xl font-bold text-green-400">{service.price}</div>
                      {service.originalPrice && (
                        <div className="ml-2">
                          <div className="text-lg text-gray-400 line-through">{service.originalPrice}</div>
                          <div className="text-sm text-green-300 font-semibold">{service.savings} off</div>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-400">Free trial: {service.freeTrial}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Streamline Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start your free trial today and discover how our micro SAAS solutions can transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                >
                  Start Free Trial
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}