<<<<<<< HEAD
'use client';
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Rocket, Code, Database, Smartphone, Lock, Settings, Calendar, FileText, Image, Video, Music, Palette, ShoppingCart, CreditCard, PieChart, LineChart, Activity, Zap as Lightning, Globe as World, Shield as Security, Users as Team, Clock as Time, Star as Rating, TrendingUp as Growth, BarChart as Analytics, MessageSquare as Chat, Eye as View, Sparkles as Magic, ArrowRight as Arrow, Phone as Call, Mail as Email, MapPin as Location, CheckCircle as Check, DollarSign as Money, Award as Trophy, Rocket as Launch, Code as Dev, Database as Data, Smartphone as Mobile, Lock as Secure, Settings as Config, Calendar as Schedule, FileText as Document, Image as Photo, Video as Media, Music as Audio, Palette as Design, ShoppingCart as Cart, CreditCard as Payment, PieChart as Pie, LineChart as Line, Activity as ActivityIcon } from 'lucide-react';
=======
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot, Search as SearchIcon, FileText as FileTextIcon } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b

const MicroSAASPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
<<<<<<< HEAD
  const [sortBy, setSortBy] = useState('popularity');

  const microSaasServices = useMemo(() => [
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager Pro',
      description: 'Intelligent project management with AI-powered insights, automated scheduling, and real-time collaboration tools.',
      category: 'productivity',
      price: 29,
      priceType: 'month',
      features: [
        'AI-powered task prioritization',
        'Automated resource allocation',
        'Real-time progress tracking',
        'Smart deadline predictions',
        'Team collaboration tools',
        'Integration with 50+ tools',
        'Custom reporting dashboard',
        'Mobile app access'
      ],
      benefits: [
        'Increase productivity by 40%',
        'Reduce project delays by 60%',
        'Save 15 hours per week',
        'Improve team collaboration'
      ],
      icon: BarChart,
      color: 'blue',
      popular: true,
      rating: 4.9,
      users: 12500,
      launchDate: '2024-01-15',
      tags: ['AI', 'Project Management', 'Productivity', 'Collaboration']
=======
  const [sortBy, setSortBy] = useState('popular');

  const microSaasServices = [
    // AI-Powered Business Tools
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager Pro',
      category: 'project-management',
      description: 'Intelligent project planning, resource allocation, and timeline optimization with AI-powered insights.',
      features: [
        'AI-powered task prioritization',
        'Resource allocation optimization',
        'Risk assessment and mitigation',
        'Real-time progress tracking',
        'Team collaboration tools',
        'Integration with 50+ tools'
      ],
      pricing: { monthly: 99, yearly: 999, setup: 0 },
      popular: true,
      icon: '📊',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-400',
      stats: { users: '10K+', rating: 4.9, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-project-manager',
      docs: 'https://docs.ziontechgroup.com/ai-project-manager'
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
<<<<<<< HEAD
      description: 'Automated social media management with AI content creation, scheduling, and analytics across all platforms.',
      category: 'marketing',
      price: 49,
      priceType: 'month',
      features: [
        'AI content generation',
        'Multi-platform posting',
        'Optimal timing suggestions',
        'Hashtag optimization',
        'Engagement analytics',
        'Competitor analysis',
        'Auto-responder',
        'Content calendar'
      ],
      benefits: [
        'Increase engagement by 300%',
        'Save 20 hours per week',
        'Grow followers by 150%',
        'Boost brand awareness'
      ],
      icon: MessageSquare,
      color: 'purple',
      popular: true,
      rating: 4.8,
      users: 8900,
      launchDate: '2024-02-01',
      tags: ['AI', 'Social Media', 'Marketing', 'Automation']
=======
      category: 'marketing',
      description: 'Automated social media content creation, scheduling, and engagement optimization across all platforms.',
      features: [
        'AI content generation',
        'Multi-platform scheduling',
        'Engagement analytics',
        'Hashtag optimization',
        'Competitor analysis',
        'Influencer collaboration tools'
      ],
      pricing: { monthly: 79, yearly: 799, setup: 0 },
      popular: true,
      icon: '📱',
      color: 'from-pink-500 to-purple-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      textColor: 'text-pink-400',
      stats: { users: '25K+', rating: 4.8, uptime: '99.8%' },
      demo: 'https://demo.ziontechgroup.com/ai-social-manager',
      docs: 'https://docs.ziontechgroup.com/ai-social-manager'
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
<<<<<<< HEAD
      description: 'Advanced business intelligence with AI-powered insights, predictive analytics, and custom reporting.',
      category: 'analytics',
      price: 79,
      priceType: 'month',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom KPI tracking',
        'Automated insights',
        'Data integration',
        'Custom dashboards',
        'Alert system',
        'Export capabilities'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify trends 3x faster',
        'Reduce analysis time by 70%',
        'Increase revenue by 25%'
      ],
      icon: PieChart,
      color: 'green',
      popular: true,
      rating: 4.9,
      users: 15600,
      launchDate: '2024-01-20',
      tags: ['AI', 'Analytics', 'Business Intelligence', 'Data Visualization']
=======
      category: 'analytics',
      description: 'Advanced business intelligence with AI-powered insights, predictive analytics, and custom reporting.',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom dashboard builder',
        'Automated reporting',
        'Data integration from 100+ sources',
        'AI-powered insights'
      ],
      pricing: { monthly: 149, yearly: 1499, setup: 0 },
      popular: true,
      icon: '📈',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      textColor: 'text-green-400',
      stats: { users: '15K+', rating: 4.9, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-analytics',
      docs: 'https://docs.ziontechgroup.com/ai-analytics'
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Suite',
<<<<<<< HEAD
      description: 'Intelligent email marketing with AI-powered personalization, A/B testing, and automated campaigns.',
      category: 'marketing',
      price: 39,
      priceType: 'month',
      features: [
        'AI content personalization',
        'Smart segmentation',
        'Automated workflows',
        'A/B testing',
        'Deliverability optimization',
        'Template library',
        'Performance analytics',
        'CRM integration'
      ],
      benefits: [
        'Increase open rates by 45%',
        'Boost click-through rates by 60%',
        'Reduce unsubscribe rates by 30%',
        'Save 10 hours per week'
      ],
      icon: Mail,
      color: 'orange',
      popular: true,
      rating: 4.7,
      users: 11200,
      launchDate: '2024-02-15',
      tags: ['AI', 'Email Marketing', 'Automation', 'Personalization']
=======
      category: 'marketing',
      description: 'Intelligent email campaigns with AI-powered personalization, A/B testing, and deliverability optimization.',
      features: [
        'AI-powered personalization',
        'Automated A/B testing',
        'Deliverability optimization',
        'Advanced segmentation',
        'Behavioral triggers',
        'ROI tracking and analytics'
      ],
      pricing: { monthly: 59, yearly: 599, setup: 0 },
      popular: true,
      icon: '📧',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      textColor: 'text-orange-400',
      stats: { users: '30K+', rating: 4.7, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-email-marketing',
      docs: 'https://docs.ziontechgroup.com/ai-email-marketing'
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b
    },
    {
      id: 'ai-customer-support-bot',
      name: 'AI Customer Support Bot',
<<<<<<< HEAD
      description: '24/7 AI-powered customer support with natural language processing and seamless human handoff.',
      category: 'support',
      price: 59,
      priceType: 'month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Human handoff capability',
        'Knowledge base integration',
        'Sentiment analysis',
        'Ticket management',
        'Live chat integration',
        'Performance metrics'
      ],
      benefits: [
        'Reduce support costs by 50%',
        'Improve response time by 80%',
        'Increase customer satisfaction',
        'Handle 90% of queries automatically'
      ],
      icon: MessageSquare,
      color: 'cyan',
      popular: true,
      rating: 4.8,
      users: 18700,
      launchDate: '2024-01-10',
      tags: ['AI', 'Customer Support', 'Chatbot', 'Automation']
    },
    {
      id: 'ai-code-review-assistant',
      name: 'AI Code Review Assistant',
      description: 'Automated code review with AI-powered suggestions, security scanning, and best practice recommendations.',
      category: 'development',
      price: 69,
      priceType: 'month',
      features: [
        'Automated code analysis',
        'Security vulnerability detection',
        'Performance optimization suggestions',
        'Code quality metrics',
        'Best practice recommendations',
        'Multi-language support',
        'Git integration',
        'Team collaboration'
      ],
      benefits: [
        'Reduce bugs by 40%',
        'Improve code quality',
        'Save 8 hours per week',
        'Accelerate development'
      ],
      icon: Code,
      color: 'indigo',
      popular: false,
      rating: 4.6,
      users: 5600,
      launchDate: '2024-03-01',
      tags: ['AI', 'Code Review', 'Development', 'Security']
=======
      category: 'customer-service',
      description: '24/7 AI-powered customer support with natural language processing and seamless human handoff.',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Seamless human handoff',
        'Knowledge base integration',
        'Sentiment analysis',
        'Performance analytics'
      ],
      pricing: { monthly: 199, yearly: 1999, setup: 0 },
      popular: true,
      icon: '🤖',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-400',
      stats: { users: '8K+', rating: 4.8, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-support-bot',
      docs: 'https://docs.ziontechgroup.com/ai-support-bot'
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
<<<<<<< HEAD
      description: 'AI-powered content creation for blogs, social media, ads, and marketing materials with brand voice consistency.',
      category: 'content',
      price: 45,
      priceType: 'month',
      features: [
        'Multi-format content creation',
        'Brand voice training',
        'SEO optimization',
        'Plagiarism detection',
        'Content calendar',
        'Team collaboration',
        'Version control',
        'Performance tracking'
      ],
      benefits: [
        'Create content 10x faster',
        'Maintain brand consistency',
        'Improve SEO rankings',
        'Reduce content costs by 60%'
      ],
      icon: FileText,
      color: 'pink',
      popular: false,
      rating: 4.5,
      users: 7200,
      launchDate: '2024-02-20',
      tags: ['AI', 'Content Creation', 'Writing', 'SEO']
=======
      category: 'content-creation',
      description: 'AI-powered content creation for blogs, social media, emails, and marketing materials with brand voice consistency.',
      features: [
        'Multi-format content generation',
        'Brand voice training',
        'SEO optimization',
        'Plagiarism detection',
        'Content calendar integration',
        'Team collaboration tools'
      ],
      pricing: { monthly: 89, yearly: 899, setup: 0 },
      popular: false,
      icon: '✍️',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/30',
      textColor: 'text-teal-400',
      stats: { users: '20K+', rating: 4.6, uptime: '99.8%' },
      demo: 'https://demo.ziontechgroup.com/ai-content-generator',
      docs: 'https://docs.ziontechgroup.com/ai-content-generator'
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer',
<<<<<<< HEAD
      description: 'Comprehensive SEO optimization with AI-powered keyword research, content analysis, and ranking tracking.',
      category: 'seo',
      price: 55,
      priceType: 'month',
      features: [
        'AI keyword research',
        'Content optimization',
        'Technical SEO analysis',
        'Competitor tracking',
        'Ranking monitoring',
        'Backlink analysis',
        'Site speed optimization',
        'Local SEO tools'
      ],
      benefits: [
        'Increase organic traffic by 200%',
        'Improve search rankings',
        'Save 12 hours per week',
        'Boost conversion rates'
      ],
      icon: Target,
      color: 'yellow',
      popular: false,
      rating: 4.7,
      users: 9800,
      launchDate: '2024-03-10',
      tags: ['AI', 'SEO', 'Marketing', 'Optimization']
=======
      category: 'seo',
      description: 'Comprehensive SEO optimization with AI-powered keyword research, content analysis, and ranking tracking.',
      features: [
        'AI keyword research',
        'Content optimization suggestions',
        'Competitor analysis',
        'Ranking tracking',
        'Technical SEO audits',
        'Local SEO optimization'
      ],
      pricing: { monthly: 129, yearly: 1299, setup: 0 },
      popular: false,
      icon: '🎯',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      textColor: 'text-yellow-400',
      stats: { users: '12K+', rating: 4.7, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-seo-optimizer',
      docs: 'https://docs.ziontechgroup.com/ai-seo-optimizer'
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b
    },
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator',
<<<<<<< HEAD
      description: 'Automated invoice creation with AI-powered pricing suggestions, payment tracking, and financial analytics.',
      category: 'finance',
      price: 25,
      priceType: 'month',
=======
      category: 'finance',
      description: 'Automated invoice generation with AI-powered pricing suggestions, payment tracking, and financial analytics.',
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b
      features: [
        'Automated invoice generation',
        'AI pricing suggestions',
        'Payment tracking',
        'Financial analytics',
<<<<<<< HEAD
        'Tax calculations',
        'Multi-currency support',
        'Client management',
        'Integration with accounting software'
      ],
      benefits: [
        'Reduce invoicing time by 80%',
        'Improve payment collection',
        'Minimize billing errors',
        'Save 5 hours per week'
      ],
      icon: CreditCard,
      color: 'emerald',
      popular: false,
      rating: 4.4,
      users: 4200,
      launchDate: '2024-03-15',
      tags: ['AI', 'Invoicing', 'Finance', 'Automation']
=======
        'Multi-currency support',
        'Tax calculation'
      ],
      pricing: { monthly: 39, yearly: 399, setup: 0 },
      popular: false,
      icon: '💰',
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      textColor: 'text-emerald-400',
      stats: { users: '18K+', rating: 4.5, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-invoice-generator',
      docs: 'https://docs.ziontechgroup.com/ai-invoice-generator'
    },
    {
      id: 'ai-lead-scoring',
      name: 'AI Lead Scoring Engine',
      category: 'sales',
      description: 'Intelligent lead qualification and scoring with AI-powered behavioral analysis and conversion prediction.',
      features: [
        'Behavioral analysis',
        'Conversion prediction',
        'Lead qualification',
        'Scoring algorithms',
        'CRM integration',
        'Performance tracking'
      ],
      pricing: { monthly: 169, yearly: 1699, setup: 0 },
      popular: false,
      icon: '🎯',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      textColor: 'text-red-400',
      stats: { users: '6K+', rating: 4.8, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-lead-scoring',
      docs: 'https://docs.ziontechgroup.com/ai-lead-scoring'
    },
    {
      id: 'ai-hr-assistant',
      name: 'AI HR Assistant',
      category: 'hr',
      description: 'Comprehensive HR management with AI-powered recruitment, employee analytics, and performance tracking.',
      features: [
        'AI-powered recruitment',
        'Employee analytics',
        'Performance tracking',
        'Payroll automation',
        'Compliance monitoring',
        'Training recommendations'
      ],
      pricing: { monthly: 249, yearly: 2499, setup: 0 },
      popular: false,
      icon: '👥',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      textColor: 'text-indigo-400',
      stats: { users: '4K+', rating: 4.7, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-hr-assistant',
      docs: 'https://docs.ziontechgroup.com/ai-hr-assistant'
    },
    {
      id: 'ai-inventory-manager',
      name: 'AI Inventory Manager',
      category: 'inventory',
      description: 'Smart inventory management with AI-powered demand forecasting, automated reordering, and optimization.',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Inventory optimization',
        'Multi-location support',
        'Supplier management',
        'Cost analysis'
      ],
      pricing: { monthly: 179, yearly: 1799, setup: 0 },
      popular: false,
      icon: '📦',
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
      textColor: 'text-amber-400',
      stats: { users: '7K+', rating: 4.6, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-inventory-manager',
      docs: 'https://docs.ziontechgroup.com/ai-inventory-manager'
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
<<<<<<< HEAD
      description: 'Smart expense tracking with AI categorization, receipt scanning, and automated expense reports.',
      category: 'finance',
      price: 19,
      priceType: 'month',
      features: [
        'Receipt scanning with OCR',
        'AI expense categorization',
        'Automated expense reports',
        'Budget tracking',
        'Tax preparation',
        'Multi-currency support',
        'Team expense management',
        'Integration with accounting tools'
      ],
      benefits: [
        'Save 6 hours per week',
        'Improve expense accuracy',
        'Simplify tax preparation',
        'Better budget control'
      ],
      icon: PieChart,
      color: 'teal',
      popular: false,
      rating: 4.3,
      users: 3100,
      launchDate: '2024-03-20',
      tags: ['AI', 'Expense Tracking', 'Finance', 'Automation']
    },
    {
      id: 'ai-scheduler',
      name: 'AI Smart Scheduler',
      description: 'Intelligent scheduling with AI-powered meeting optimization, time zone handling, and conflict resolution.',
      category: 'productivity',
      price: 35,
      priceType: 'month',
      features: [
        'AI meeting optimization',
        'Time zone management',
        'Conflict resolution',
        'Calendar integration',
        'Meeting analytics',
        'Team scheduling',
        'Resource booking',
        'Mobile app'
      ],
      benefits: [
        'Reduce scheduling conflicts by 90%',
        'Save 3 hours per week',
        'Improve meeting efficiency',
        'Better time management'
      ],
      icon: Calendar,
      color: 'violet',
      popular: false,
      rating: 4.5,
      users: 6800,
      launchDate: '2024-04-01',
      tags: ['AI', 'Scheduling', 'Productivity', 'Time Management']
=======
      category: 'finance',
      description: 'Intelligent expense tracking with AI-powered categorization, receipt scanning, and budget optimization.',
      features: [
        'Receipt scanning',
        'AI categorization',
        'Budget optimization',
        'Expense analytics',
        'Tax preparation',
        'Multi-currency support'
      ],
      pricing: { monthly: 29, yearly: 299, setup: 0 },
      popular: false,
      icon: '💳',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-500/10',
      borderColor: 'border-rose-500/30',
      textColor: 'text-rose-400',
      stats: { users: '35K+', rating: 4.4, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-expense-tracker',
      docs: 'https://docs.ziontechgroup.com/ai-expense-tracker'
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b
    },
    {
      id: 'ai-time-tracker',
      name: 'AI Time Tracker',
<<<<<<< HEAD
      description: 'Advanced time tracking with AI-powered productivity insights, automatic time categorization, and performance analytics.',
      category: 'productivity',
      price: 29,
      priceType: 'month',
      features: [
        'Automatic time tracking',
        'AI productivity insights',
        'Project time allocation',
        'Performance analytics',
        'Team time management',
        'Integration with project tools',
        'Billing automation',
        'Mobile tracking'
      ],
      benefits: [
        'Increase productivity by 25%',
        'Accurate time billing',
        'Better project planning',
        'Identify time wasters'
      ],
      icon: Clock,
      color: 'blue',
      popular: false,
      rating: 4.4,
      users: 5400,
      launchDate: '2024-04-05',
      tags: ['AI', 'Time Tracking', 'Productivity', 'Analytics']
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All Services', count: microSaasServices.length },
    { id: 'productivity', name: 'Productivity', count: microSaasServices.filter(s => s.category === 'productivity').length },
    { id: 'marketing', name: 'Marketing', count: microSaasServices.filter(s => s.category === 'marketing').length },
    { id: 'analytics', name: 'Analytics', count: microSaasServices.filter(s => s.category === 'analytics').length },
    { id: 'support', name: 'Support', count: microSaasServices.filter(s => s.category === 'support').length },
    { id: 'development', name: 'Development', count: microSaasServices.filter(s => s.category === 'development').length },
    { id: 'content', name: 'Content', count: microSaasServices.filter(s => s.category === 'content').length },
    { id: 'seo', name: 'SEO', count: microSaasServices.filter(s => s.category === 'seo').length },
    { id: 'finance', name: 'Finance', count: microSaasServices.filter(s => s.category === 'finance').length }
=======
      category: 'productivity',
      description: 'Smart time tracking with AI-powered productivity insights, automatic task detection, and team analytics.',
      features: [
        'Automatic task detection',
        'Productivity insights',
        'Team analytics',
        'Project time tracking',
        'Billing integration',
        'Performance reports'
      ],
      pricing: { monthly: 49, yearly: 499, setup: 0 },
      popular: false,
      icon: '⏰',
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-500/10',
      borderColor: 'border-violet-500/30',
      textColor: 'text-violet-400',
      stats: { users: '22K+', rating: 4.5, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-time-tracker',
      docs: 'https://docs.ziontechgroup.com/ai-time-tracker'
    },
    {
      id: 'ai-scheduler',
      name: 'AI Smart Scheduler',
      category: 'productivity',
      description: 'Intelligent scheduling with AI-powered meeting optimization, conflict resolution, and calendar management.',
      features: [
        'Meeting optimization',
        'Conflict resolution',
        'Calendar management',
        'Time zone handling',
        'Resource booking',
        'Analytics and insights'
      ],
      pricing: { monthly: 69, yearly: 699, setup: 0 },
      popular: false,
      icon: '📅',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      textColor: 'text-cyan-400',
      stats: { users: '16K+', rating: 4.6, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-scheduler',
      docs: 'https://docs.ziontechgroup.com/ai-scheduler'
    },
    {
      id: 'ai-document-processor',
      name: 'AI Document Processor',
      category: 'document-management',
      description: 'Intelligent document processing with AI-powered OCR, data extraction, and automated workflows.',
      features: [
        'AI-powered OCR',
        'Data extraction',
        'Automated workflows',
        'Document classification',
        'Version control',
        'Search and retrieval'
      ],
      pricing: { monthly: 119, yearly: 1199, setup: 0 },
      popular: false,
      icon: '📄',
      color: 'from-slate-500 to-gray-500',
      bgColor: 'bg-slate-500/10',
      borderColor: 'border-slate-500/30',
      textColor: 'text-slate-400',
      stats: { users: '9K+', rating: 4.7, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-document-processor',
      docs: 'https://docs.ziontechgroup.com/ai-document-processor'
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant',
      category: 'productivity',
      description: 'Custom voice assistant for business operations with natural language processing and task automation.',
      features: [
        'Natural language processing',
        'Task automation',
        'Voice commands',
        'Integration with business tools',
        'Custom voice training',
        'Multi-language support'
      ],
      pricing: { monthly: 159, yearly: 1599, setup: 0 },
      popular: false,
      icon: '🎤',
      color: 'from-lime-500 to-green-500',
      bgColor: 'bg-lime-500/10',
      borderColor: 'border-lime-500/30',
      textColor: 'text-lime-400',
      stats: { users: '5K+', rating: 4.8, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-voice-assistant',
      docs: 'https://docs.ziontechgroup.com/ai-voice-assistant'
    },
    {
      id: 'ai-ab-testing',
      name: 'AI A/B Testing Platform',
      category: 'marketing',
      description: 'Advanced A/B testing with AI-powered experiment design, statistical analysis, and optimization recommendations.',
      features: [
        'AI experiment design',
        'Statistical analysis',
        'Optimization recommendations',
        'Multi-variate testing',
        'Real-time results',
        'Integration with analytics tools'
      ],
      pricing: { monthly: 189, yearly: 1899, setup: 0 },
      popular: false,
      icon: '🧪',
      color: 'from-fuchsia-500 to-pink-500',
      bgColor: 'bg-fuchsia-500/10',
      borderColor: 'border-fuchsia-500/30',
      textColor: 'text-fuchsia-400',
      stats: { users: '3K+', rating: 4.9, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-ab-testing',
      docs: 'https://docs.ziontechgroup.com/ai-ab-testing'
    },
    {
      id: 'ai-predictive-analytics',
      name: 'AI Predictive Analytics',
      category: 'analytics',
      description: 'Advanced predictive analytics with machine learning models for forecasting and trend analysis.',
      features: [
        'Machine learning models',
        'Forecasting algorithms',
        'Trend analysis',
        'Anomaly detection',
        'Custom model training',
        'Real-time predictions'
      ],
      pricing: { monthly: 299, yearly: 2999, setup: 0 },
      popular: false,
      icon: '🔮',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-400',
      stats: { users: '2K+', rating: 4.9, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-predictive-analytics',
      docs: 'https://docs.ziontechgroup.com/ai-predictive-analytics'
    },
    {
      id: 'ai-security-monitor',
      name: 'AI Security Monitor',
      category: 'security',
      description: 'AI-powered security monitoring with threat detection, anomaly analysis, and automated response.',
      features: [
        'Threat detection',
        'Anomaly analysis',
        'Automated response',
        'Real-time monitoring',
        'Compliance reporting',
        'Incident management'
      ],
      pricing: { monthly: 399, yearly: 3999, setup: 0 },
      popular: false,
      icon: '🛡️',
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      textColor: 'text-red-400',
      stats: { users: '1K+', rating: 4.9, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-security-monitor',
      docs: 'https://docs.ziontechgroup.com/ai-security-monitor'
    },
    {
      id: 'ai-performance-tracker',
      name: 'AI Performance Tracker',
      category: 'analytics',
      description: 'Comprehensive performance tracking with AI-powered insights, benchmarking, and optimization recommendations.',
      features: [
        'Performance insights',
        'Benchmarking',
        'Optimization recommendations',
        'Real-time monitoring',
        'Custom metrics',
        'Team performance analysis'
      ],
      pricing: { monthly: 139, yearly: 1399, setup: 0 },
      popular: false,
      icon: '📊',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-400',
      stats: { users: '11K+', rating: 4.6, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-performance-tracker',
      docs: 'https://docs.ziontechgroup.com/ai-performance-tracker'
=======


'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, Award, Code, Database, Settings, Monitor } from 'lucide-react';

export default function MicroSaasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const microSaasServices = [
    {
      id: 'ai-project-manager',
      title: 'AI Project Manager',
      description: 'Intelligent project management platform with AI-powered insights, automated task allocation, and predictive analytics',
      features: [
        'AI-powered task prioritization',
        'Automated resource allocation',
        'Predictive project timeline analysis',
        'Real-time collaboration tools',
        'Advanced reporting & analytics',
        'Integration with 50+ tools'
      ],
      pricing: {
        starter: { price: '$29', period: '/month', features: ['Up to 5 projects', 'Basic AI insights', 'Email support'] },
        professional: { price: '$79', period: '/month', features: ['Up to 25 projects', 'Advanced AI', 'Priority support', 'Custom integrations'] },
        enterprise: { price: '$199', period: '/month', features: ['Unlimited projects', 'Custom AI models', 'Dedicated support', 'White-label option'] }
      },
      icon: Target,
      color: 'from-blue-500 to-cyan-600',
      category: 'productivity',
      popular: true,
      users: '10,000+',
      rating: 4.9
    },
    {
      id: 'ai-social-media-manager',
      title: 'AI Social Media Manager',
      description: 'Automated social media management with AI content creation, optimal posting times, and engagement analytics',
      features: [
        'AI content generation for all platforms',
        'Optimal posting time recommendations',
        'Hashtag optimization & research',
        'Engagement analytics & insights',
        'Automated posting & scheduling',
        'Multi-platform management'
      ],
      pricing: {
        starter: { price: '$19', period: '/month', features: ['3 social accounts', 'Basic AI content', 'Email support'] },
        professional: { price: '$49', period: '/month', features: ['10 social accounts', 'Advanced AI', 'Priority support', 'Analytics dashboard'] },
        enterprise: { price: '$99', period: '/month', features: ['Unlimited accounts', 'Custom AI training', 'Dedicated support', 'White-label option'] }
      },
      icon: MessageSquare,
      color: 'from-pink-500 to-purple-600',
      category: 'marketing',
      popular: true,
      users: '15,000+',
      rating: 4.8
    },
    {
      id: 'ai-analytics-dashboard',
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence platform with AI-powered insights, predictive analytics, and custom dashboards',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard creation',
        'Automated report generation',
        'Data source integration',
        'Mobile-responsive design'
      ],
      pricing: {
        starter: { price: '$39', period: '/month', features: ['5 data sources', 'Basic dashboards', 'Email support'] },
        professional: { price: '$89', period: '/month', features: ['Unlimited sources', 'Advanced analytics', 'Priority support', 'API access'] },
        enterprise: { price: '$199', period: '/month', features: ['Custom analytics', 'Dedicated support', 'White-label option', 'SLA guarantee'] }
      },
      icon: BarChart,
      color: 'from-green-500 to-emerald-600',
      category: 'analytics',
      popular: true,
      users: '8,500+',
      rating: 4.9
    },
    {
      id: 'ai-email-marketing',
      title: 'AI Email Marketing Platform',
      description: 'Intelligent email marketing automation with AI content generation, send time optimization, and advanced segmentation',
      features: [
        'AI email content generation',
        'Send time optimization',
        'Advanced audience segmentation',
        'A/B testing automation',
        'Deliverability optimization',
        'Comprehensive analytics'
      ],
      pricing: {
        starter: { price: '$25', period: '/month', features: ['Up to 5,000 contacts', 'Basic AI features', 'Email support'] },
        professional: { price: '$65', period: '/month', features: ['Up to 25,000 contacts', 'Advanced AI', 'Priority support', 'Custom templates'] },
        enterprise: { price: '$149', period: '/month', features: ['Unlimited contacts', 'Custom AI models', 'Dedicated support', 'White-label option'] }
      },
      icon: Mail,
      color: 'from-orange-500 to-red-600',
      category: 'marketing',
      popular: false,
      users: '12,000+',
      rating: 4.7
    },
    {
      id: 'ai-customer-support-bot',
      title: 'AI Customer Support Bot',
      description: '24/7 intelligent customer support chatbot with natural language processing and seamless human handoff',
      features: [
        'Natural language understanding',
        'Multi-language support',
        'Knowledge base integration',
        'Human handoff capabilities',
        'Sentiment analysis',
        'Performance analytics'
      ],
      pricing: {
        starter: { price: '$35', period: '/month', features: ['Up to 1,000 conversations', 'Basic AI responses', 'Email support'] },
        professional: { price: '$85', period: '/month', features: ['Up to 10,000 conversations', 'Advanced AI', 'Priority support', 'Custom training'] },
        enterprise: { price: '$199', period: '/month', features: ['Unlimited conversations', 'Custom AI models', 'Dedicated support', 'White-label option'] }
      },
      icon: MessageSquare,
      color: 'from-purple-500 to-indigo-600',
      category: 'support',
      popular: true,
      users: '20,000+',
      rating: 4.8
    },
    {
      id: 'ai-code-review-assistant',
      title: 'AI Code Review Assistant',
      description: 'Automated code review and quality analysis with AI-powered suggestions, security scanning, and performance optimization',
      features: [
        'Automated code review',
        'Security vulnerability detection',
        'Performance optimization suggestions',
        'Code quality scoring',
        'Integration with Git platforms',
        'Team collaboration tools'
      ],
      pricing: {
        starter: { price: '$45', period: '/month', features: ['Up to 5 repositories', 'Basic analysis', 'Email support'] },
        professional: { price: '$99', period: '/month', features: ['Up to 25 repositories', 'Advanced analysis', 'Priority support', 'Custom rules'] },
        enterprise: { price: '$199', period: '/month', features: ['Unlimited repositories', 'Custom AI models', 'Dedicated support', 'White-label option'] }
      },
      icon: Code,
      color: 'from-cyan-500 to-blue-600',
      category: 'development',
      popular: false,
      users: '5,000+',
      rating: 4.9
    },
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator',
      description: 'Complete content creation suite with AI writing, image generation, and SEO optimization for all content types',
      features: [
        'AI writing for all content types',
        'Image generation & editing',
        'SEO optimization',
        'Brand voice consistency',
        'Content scheduling',
        'Plagiarism detection'
      ],
      pricing: {
        starter: { price: '$29', period: '/month', features: ['Up to 100 pieces/month', 'Basic AI writing', 'Email support'] },
        professional: { price: '$69', period: '/month', features: ['Up to 1,000 pieces/month', 'Advanced AI', 'Priority support', 'Custom templates'] },
        enterprise: { price: '$149', period: '/month', features: ['Unlimited content', 'Custom AI models', 'Dedicated support', 'White-label option'] }
      },
      icon: Eye,
      color: 'from-yellow-500 to-orange-600',
      category: 'content',
      popular: true,
      users: '25,000+',
      rating: 4.8
    },
    {
      id: 'ai-seo-optimizer',
      title: 'AI SEO Optimizer',
      description: 'Comprehensive SEO optimization platform with AI-powered keyword research, content optimization, and rank tracking',
      features: [
        'AI keyword research & analysis',
        'Content optimization suggestions',
        'Rank tracking & monitoring',
        'Competitor analysis',
        'Technical SEO audits',
        'Performance reporting'
      ],
      pricing: {
        starter: { price: '$39', period: '/month', features: ['Up to 5 websites', 'Basic SEO tools', 'Email support'] },
        professional: { price: '$89', period: '/month', features: ['Up to 25 websites', 'Advanced SEO', 'Priority support', 'Custom reports'] },
        enterprise: { price: '$199', period: '/month', features: ['Unlimited websites', 'Custom AI models', 'Dedicated support', 'White-label option'] }
      },
      icon: Target,
      color: 'from-green-500 to-teal-600',
      category: 'marketing',
      popular: false,
      users: '7,500+',
      rating: 4.7
    },
    {
      id: 'ai-invoice-generator',
      title: 'AI Invoice Generator',
      description: 'Automated invoicing platform with AI-powered templates, payment tracking, and financial analytics',
      features: [
        'AI-powered invoice templates',
        'Automated payment reminders',
        'Payment tracking & analytics',
        'Multi-currency support',
        'Client management',
        'Financial reporting'
      ],
      pricing: {
        starter: { price: '$19', period: '/month', features: ['Up to 50 invoices/month', 'Basic templates', 'Email support'] },
        professional: { price: '$49', period: '/month', features: ['Up to 500 invoices/month', 'Advanced features', 'Priority support', 'Custom branding'] },
        enterprise: { price: '$99', period: '/month', features: ['Unlimited invoices', 'Custom AI models', 'Dedicated support', 'White-label option'] }
      },
      icon: FileText,
      color: 'from-indigo-500 to-purple-600',
      category: 'finance',
      popular: false,
      users: '6,000+',
      rating: 4.6
    },
    {
      id: 'ai-time-tracker',
      title: 'AI Time Tracker',
      description: 'Intelligent time tracking with AI-powered productivity insights, automatic task detection, and team analytics',
      features: [
        'Automatic time tracking',
        'AI productivity insights',
        'Team performance analytics',
        'Project time allocation',
        'Billing & invoicing integration',
        'Mobile app support'
      ],
      pricing: {
        starter: { price: '$15', period: '/month', features: ['Up to 5 users', 'Basic tracking', 'Email support'] },
        professional: { price: '$39', period: '/month', features: ['Up to 25 users', 'Advanced analytics', 'Priority support', 'Custom reports'] },
        enterprise: { price: '$79', period: '/month', features: ['Unlimited users', 'Custom AI models', 'Dedicated support', 'White-label option'] }
      },
      icon: Clock,
      color: 'from-red-500 to-pink-600',
      category: 'productivity',
      popular: true,
      users: '18,000+',
      rating: 4.8
    },
    {
      id: 'ai-expense-tracker',
      title: 'AI Expense Tracker',
      description: 'Smart expense management with AI receipt scanning, automatic categorization, and financial insights',
      features: [
        'AI receipt scanning',
        'Automatic categorization',
        'Expense analytics & insights',
        'Receipt storage & management',
        'Budget tracking & alerts',
        'Export & reporting'
      ],
      pricing: {
        starter: { price: '$12', period: '/month', features: ['Up to 100 receipts/month', 'Basic scanning', 'Email support'] },
        professional: { price: '$29', period: '/month', features: ['Up to 1,000 receipts/month', 'Advanced AI', 'Priority support', 'Custom categories'] },
        enterprise: { price: '$59', period: '/month', features: ['Unlimited receipts', 'Custom AI models', 'Dedicated support', 'White-label option'] }
      },
      icon: Database,
      color: 'from-emerald-500 to-green-600',
      category: 'finance',
      popular: false,
      users: '9,000+',
      rating: 4.7
    },
    {
      id: 'ai-scheduler',
      title: 'AI Smart Scheduler',
      description: 'Intelligent scheduling platform with AI-powered meeting optimization, conflict resolution, and calendar management',
      features: [
        'AI meeting optimization',
        'Automatic conflict resolution',
        'Smart scheduling suggestions',
        'Calendar integration',
        'Team availability tracking',
        'Meeting analytics'
      ],
      pricing: {
        starter: { price: '$25', period: '/month', features: ['Up to 10 users', 'Basic scheduling', 'Email support'] },
        professional: { price: '$59', period: '/month', features: ['Up to 50 users', 'Advanced AI', 'Priority support', 'Custom rules'] },
        enterprise: { price: '$119', period: '/month', features: ['Unlimited users', 'Custom AI models', 'Dedicated support', 'White-label option'] }
      },
      icon: Calendar,
      color: 'from-violet-500 to-purple-600',
      category: 'productivity',
      popular: true,
      users: '14,000+',
      rating: 4.8
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e055
    }
  ];

  const categories = [
<<<<<<< HEAD
    { id: 'all', name: 'All Services', icon: Grid, count: microSaasServices.length },
    { id: 'project-management', name: 'Project Management', icon: Target, count: microSaasServices.filter(s => s.category === 'project-management').length },
    { id: 'marketing', name: 'Marketing', icon: Megaphone, count: microSaasServices.filter(s => s.category === 'marketing').length },
    { id: 'analytics', name: 'Analytics', icon: BarChart, count: microSaasServices.filter(s => s.category === 'analytics').length },
    { id: 'customer-service', name: 'Customer Service', icon: MessageSquare, count: microSaasServices.filter(s => s.category === 'customer-service').length },
    { id: 'content-creation', name: 'Content Creation', icon: FileText, count: microSaasServices.filter(s => s.category === 'content-creation').length },
    { id: 'seo', name: 'SEO', icon: Search, count: microSaasServices.filter(s => s.category === 'seo').length },
    { id: 'finance', name: 'Finance', icon: DollarSign, count: microSaasServices.filter(s => s.category === 'finance').length },
    { id: 'sales', name: 'Sales', icon: TrendingUp, count: microSaasServices.filter(s => s.category === 'sales').length },
    { id: 'hr', name: 'HR', icon: Users, count: microSaasServices.filter(s => s.category === 'hr').length },
    { id: 'inventory', name: 'Inventory', icon: Package, count: microSaasServices.filter(s => s.category === 'inventory').length },
    { id: 'productivity', name: 'Productivity', icon: Zap, count: microSaasServices.filter(s => s.category === 'productivity').length },
    { id: 'document-management', name: 'Document Management', icon: FileText, count: microSaasServices.filter(s => s.category === 'document-management').length },
    { id: 'security', name: 'Security', icon: Shield, count: microSaasServices.filter(s => s.category === 'security').length }
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSaasServices;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
<<<<<<< HEAD
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
=======
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Sort services
    switch (sortBy) {
<<<<<<< HEAD
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'users':
        filtered.sort((a, b) => b.users - a.users);
        break;
      case 'popularity':
      default:
        filtered.sort((a, b) => {
          if (a.popular && !b.popular) return -1;
          if (!a.popular && b.popular) return 1;
          return b.rating - a.rating;
        });
=======
      case 'popular':
        filtered = filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'price-low':
        filtered = filtered.sort((a, b) => a.pricing.monthly - b.pricing.monthly);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.pricing.monthly - a.pricing.monthly);
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.stats.rating - a.stats.rating);
        break;
      case 'name':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b
        break;
    }

    return filtered;
<<<<<<< HEAD
  }, [microSaasServices, searchTerm, selectedCategory, sortBy]);

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600',
      cyan: 'from-cyan-500 to-cyan-600',
      indigo: 'from-indigo-500 to-indigo-600',
      pink: 'from-pink-500 to-pink-600',
      yellow: 'from-yellow-500 to-yellow-600',
      emerald: 'from-emerald-500 to-emerald-600',
      teal: 'from-teal-500 to-teal-600',
      violet: 'from-violet-500 to-violet-600'
    };
    return colorMap[color] || 'from-gray-500 to-gray-600';
  };
=======
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'productivity', name: 'Productivity', icon: Target },
    { id: 'marketing', name: 'Marketing', icon: TrendingUp },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'support', name: 'Support', icon: MessageSquare },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'content', name: 'Content', icon: Eye },
    { id: 'finance', name: 'Finance', icon: Database }
  ];

  const filteredServices = useMemo(() => {
    return microSaasServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const stats = [
    { icon: Users, value: '150,000+', label: 'Active Users', color: 'text-cyan-400' },
    { icon: TrendingUp, value: '95%', label: 'Customer Satisfaction', color: 'text-green-400' },
    { icon: Clock, value: '24/7', label: 'Support Available', color: 'text-blue-400' },
    { icon: Award, value: '50+', label: 'Micro SAAS Solutions', color: 'text-purple-400' }
  ];
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e055

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of AI-powered micro SAAS solutions designed to streamline your business operations and boost productivity." />
        <meta name="keywords" content="micro saas, ai solutions, business automation, productivity tools, software as a service" />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our AI-powered micro SAAS solutions. Increase productivity, reduce costs, and accelerate growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover our comprehensive collection of AI-powered micro SAAS solutions designed to 
                streamline your business operations, boost productivity, and accelerate growth.
=======
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of AI-powered micro SAAS solutions for productivity, marketing, analytics, and more. Start from $12/month with 24/7 support." />
        <meta name="keywords" content="micro saas, AI tools, business software, productivity tools, marketing automation, analytics dashboard, project management" />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our AI-powered micro SAAS solutions. Boost productivity, automate marketing, and gain insights with our comprehensive tool suite." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 cyber-grid">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="holographic-text cyber-text">Micro SAAS Solutions</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Powerful AI-driven micro SAAS tools designed to streamline your business operations. 
                Start from $12/month with 24/7 support and instant setup.
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e055
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
<<<<<<< HEAD
                  className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
=======
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e055
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
<<<<<<< HEAD
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">12+</div>
                <div className="text-gray-300">Micro SAAS Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">100K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">4.7</div>
                <div className="text-gray-300">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
            </div>
=======
  }, [searchTerm, selectedCategory, sortBy]);

  const totalSavings = microSaasServices.reduce((total, service) => {
    const yearlySavings = (service.pricing.monthly * 12) - service.pricing.yearly;
    return total + yearlySavings;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of AI-powered micro SAAS solutions designed to streamline your business operations. From project management to marketing automation, we have the tools you need." />
        <meta name="keywords" content="micro saas, ai tools, business automation, project management, marketing tools, analytics, productivity" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            AI-Powered Business Tools for Modern Enterprises
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive collection of 20+ AI-powered micro SAAS solutions designed to streamline your business operations. 
            From project management to marketing automation, we have the tools you need to succeed.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">20+ Tools</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Comprehensive suite of AI-powered business tools</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">💰</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Save ${totalSavings.toLocaleString()}</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Annual savings with yearly plans</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">99.9% Uptime</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Enterprise-grade reliability and performance</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b
=======
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 ${stat.color} bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e055
          </div>
        </section>

        {/* Search and Filter Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20">
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Search */}
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search micro SAAS solutions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="lg:w-64">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sort */}
                  <div className="lg:w-48">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    >
                      <option value="popularity">Most Popular</option>
                      <option value="rating">Highest Rated</option>
                      <option value="users">Most Users</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>
                  </div>
                </div>
              </div>
=======
        <section className="mb-12">
          <div className="cyber-card hologram-card p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SAAS solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Alphabetical</option>
              </select>
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b
=======
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SAAS solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="lg:w-64">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e055
            </div>
          </div>
        </section>

        {/* Services Grid */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getColorClasses(service.color)} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      {service.popular && (
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{service.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-300">
=======
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="neon-text">Our Micro SAAS Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of AI-powered micro SAAS tools designed to boost your business productivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={service.id} className={`quantum-card p-6 ${service.popular ? 'energy-pulse' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    {service.popular && (
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                        Popular
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                    <div className="text-sm text-gray-400">{service.users} users</div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e055
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

<<<<<<< HEAD
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-2xl font-bold text-white">
                        ${service.price}
                        <span className="text-sm text-gray-400">/{service.priceType}</span>
                      </div>
                      <div className="text-xs text-gray-400">
                        {service.users.toLocaleString()} users
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-300">Launched</div>
                      <div className="text-xs text-gray-400">
                        {new Date(service.launchDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex space-x-2">
                    <a
                      href={`/contact?service=${service.id}`}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center"
=======
                  <div className="border-t border-gray-700 pt-4 mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Pricing:</h4>
                    <div className="space-y-2">
                      {Object.entries(service.pricing).map(([tier, details]) => (
                        <div key={tier} className="flex justify-between items-center text-sm">
                          <span className="text-gray-300 capitalize">{tier}</span>
                          <span className="text-cyan-400 font-bold">{details.price}{details.period}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href="tel:+13024640950"
                      className="flex-1 cyber-button text-center py-2 text-sm"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e055
                    >
                      Get Started
                    </a>
                    <a
<<<<<<< HEAD
                      href={`/demo?service=${service.id}`}
                      className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-400/10 transition-all"
                    >
                      Demo
=======
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex-1 bg-slate-800 text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors text-center text-sm"
                    >
                      Learn More
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e055
                    </a>
                  </div>
                </div>
              ))}
            </div>
<<<<<<< HEAD

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-300 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSortBy('popularity');
                  }}
                  className="cyber-button"
                >
                  Reset Filters
                </button>
              </div>
            )}
=======
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${service.borderColor} ${
                  service.popular ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center text-2xl`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                      {service.popular && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">${service.pricing.monthly}</div>
                    <div className="text-sm text-gray-400">/month</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
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

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{service.stats.users}</div>
                    <div className="text-xs text-gray-400">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{service.stats.rating}</div>
                    <div className="text-xs text-gray-400">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{service.stats.uptime}</div>
                    <div className="text-xs text-gray-400">Uptime</div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6 p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Monthly</span>
                    <span className="text-lg font-bold text-white">${service.pricing.monthly}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Yearly</span>
                    <div className="text-right">
                      <span className="text-lg font-bold text-white">${service.pricing.yearly}</span>
                      <span className="text-xs text-green-400 ml-2">
                        Save ${(service.pricing.monthly * 12) - service.pricing.yearly}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <a
                    href={service.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center"
                  >
                    <Play className="w-4 h-4 inline mr-2" />
                    Demo
                  </a>
                  <a
                    href={service.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-slate-600 transition-all text-center"
                  >
                    <FileText className="w-4 h-4 inline mr-2" />
                    Docs
                  </a>
                </div>
              </div>
            ))}
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e055
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-400/20">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Our team can create a custom micro SAAS solution tailored to your specific business needs. 
                  Get a free consultation and see how we can help transform your operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (302) 464-0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
=======
        <section className="text-center mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our micro SAAS solutions today and experience the power of AI-driven business automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                ✉️ Email Us
=======
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Boost Your Business with Micro SAAS?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join 150,000+ users already using our micro SAAS solutions to streamline their business operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e055
              </a>
            </div>
          </div>
        </section>
<<<<<<< HEAD
      </main>

      {/* Footer */}
      <Footer />
    </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-7a1b
  );
};

export default MicroSAASPage;
=======
      </div>
    </>
  );
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e055
