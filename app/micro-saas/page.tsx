<<<<<<< HEAD
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
<<<<<<< HEAD
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot, Search as SearchIcon, FileText as FileTextIcon } from 'lucide-react';
=======
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, ArrowRight, Phone, Mail, MapPin, CheckCircle, Award, Calendar, Settings, FileText, Database, Smartphone, Lock, Code, PieChart, Activity, CreditCard, ShoppingCart, Camera, Music, Video, Palette, Wrench, Lightbulb, Rocket, Heart } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8
=======
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot, Search as SearchIcon, FileText as FileTextIcon } from 'lucide-react';
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd

const MicroSAASPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
<<<<<<< HEAD
  const [sortBy, setSortBy] = useState('popularity');

  const microSAASServices = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      id: 'ai-project-manager',
      name: 'AI Project Manager',
      description: 'Intelligent project management with AI-powered insights and automation',
      category: 'productivity',
      price: { starting: 29, period: 'month' },
      rating: 4.8,
      reviews: 1247,
      features: ['AI-powered task prioritization', 'Automated progress tracking', 'Smart resource allocation', 'Predictive analytics'],
      icon: Target,
      popular: true
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
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
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
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
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
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Suite',
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
    },
    {
      id: 'ai-customer-support-bot',
      name: 'AI Customer Support Bot',
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
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
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
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer',
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
    },
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator',
      category: 'finance',
      description: 'Automated invoice generation with AI-powered pricing suggestions, payment tracking, and financial analytics.',
      features: [
        'Automated invoice generation',
        'AI pricing suggestions',
        'Payment tracking',
        'Financial analytics',
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
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
<<<<<<< HEAD
      description: 'Smart expense management with automatic categorization and insights',
      category: 'finance',
      price: { starting: 19, period: 'month' },
      rating: 4.6,
=======
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'Create high-quality content at scale with AI-powered writing tools',
      category: 'content',
      price: { starting: 29, period: 'month' },
      rating: 4.8,
      reviews: 1247,
      features: ['Blog post generation', 'Social media content', 'Email campaigns', 'SEO optimization'],
      icon: FileText,
      popular: true,
      new: false
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Intelligent business analytics with predictive insights',
      category: 'analytics',
      price: { starting: 49, period: 'month' },
      rating: 4.9,
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8
      reviews: 892,
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      icon: BarChart,
      popular: true,
      new: false
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      description: 'Automated customer support with intelligent chatbots',
      category: 'support',
      price: { starting: 39, period: 'month' },
      rating: 4.7,
<<<<<<< HEAD
      reviews: 654,
      features: ['Smart meeting scheduling', 'Conflict resolution', 'Time optimization', 'Calendar integration'],
=======
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      icon: FileText,
      category: 'content',
      pricing: { starting: 29, period: 'month' },
      features: ['Blog post generation', 'Social media content', 'Email templates', 'SEO optimization'],
      benefits: ['Save 80% time on content creation', 'Consistent brand voice', 'SEO-optimized content'],
      popular: true,
      rating: 4.9,
      users: 12500
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
    },
    {
      id: 'ai-time-tracker',
      name: 'AI Time Tracker',
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
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support and lead generation without coding.',
      icon: Bot,
      category: 'automation',
      pricing: { starting: 49, period: 'month' },
      features: ['No-code builder', 'Multi-language support', 'Analytics dashboard', 'Integration APIs'],
      benefits: ['24/7 customer support', 'Reduce support costs by 60%', 'Qualify leads automatically'],
      popular: true,
      rating: 4.8,
      users: 8900
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Get actionable insights from your data with AI-powered analytics and visualization.',
      icon: BarChart,
      category: 'analytics',
      pricing: { starting: 39, period: 'month' },
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      benefits: ['Make data-driven decisions', 'Identify trends early', 'Automated reporting'],
      popular: false,
      rating: 4.7,
      users: 5600
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing',
      description: 'Automate email campaigns with AI-powered personalization and optimization.',
      icon: Mail,
      category: 'marketing',
      pricing: { starting: 59, period: 'month' },
      features: ['Smart segmentation', 'A/B testing', 'Send time optimization', 'Performance tracking'],
      benefits: ['Increase open rates by 40%', 'Automated personalization', 'Better deliverability'],
      popular: true,
      rating: 4.8,
      users: 10200
    },
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager',
      description: 'Intelligent project management with AI-powered task optimization and team coordination.',
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
      icon: Calendar,
      category: 'productivity',
      pricing: { starting: 79, period: 'month' },
      features: ['Smart task scheduling', 'Resource optimization', 'Risk prediction', 'Team collaboration'],
      benefits: ['Complete projects 30% faster', 'Reduce project risks', 'Better team coordination'],
      popular: false,
      rating: 4.6,
      users: 4200
    },
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator',
      description: 'Automate invoice creation and management with AI-powered data extraction and processing.',
      icon: FileText,
<<<<<<< HEAD
      popular: true
=======
      category: 'finance',
      pricing: { starting: 19, period: 'month' },
      features: ['Auto-invoice generation', 'Payment tracking', 'Tax calculations', 'Client management'],
      benefits: ['Save 90% time on invoicing', 'Reduce billing errors', 'Faster payments'],
      popular: true,
      rating: 4.9,
      users: 15800
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
=======
      reviews: 1563,
      features: ['24/7 chatbot', 'Ticket management', 'Knowledge base', 'Multi-language support'],
      icon: MessageSquare,
      popular: false,
      new: true
    },
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager',
      description: 'Intelligent project management with automated scheduling',
      category: 'productivity',
      price: { starting: 59, period: 'month' },
      rating: 4.6,
      reviews: 1089,
      features: ['Task automation', 'Resource optimization', 'Timeline prediction', 'Team collaboration'],
      icon: Calendar,
      popular: false,
      new: false
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      description: 'Automated marketing campaigns with AI optimization',
      category: 'marketing',
      price: { starting: 79, period: 'month' },
      rating: 4.8,
      reviews: 743,
      features: ['Campaign automation', 'A/B testing', 'Lead scoring', 'ROI tracking'],
      icon: Target,
      popular: true,
      new: false
    },
    {
      id: 'ai-data-visualization',
      name: 'AI Data Visualization',
      description: 'Transform data into interactive visualizations with AI',
      category: 'analytics',
      price: { starting: 34, period: 'month' },
      rating: 4.5,
      reviews: 634,
      features: ['Interactive charts', 'Auto-generated insights', 'Custom dashboards', 'Export options'],
      icon: PieChart,
      popular: false,
      new: true
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8
    }
  ];

  const categories = [
<<<<<<< HEAD
    { id: 'all', name: 'All Services', icon: Globe },
<<<<<<< HEAD
    { id: 'content', name: 'Content Creation', icon: FileText },
    { id: 'automation', name: 'Automation', icon: Zap },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
<<<<<<< HEAD
    { id: 'communication', name: 'Communication', icon: MessageSquare }
=======
    { id: 'marketing', name: 'Marketing', icon: Target },
    { id: 'productivity', name: 'Productivity', icon: Clock },
    { id: 'finance', name: 'Finance', icon: DollarSign }
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSAASServices;
<<<<<<< HEAD
=======
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

<<<<<<< HEAD
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
=======
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
=======
    // Sort services
    switch (sortBy) {
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
        break;
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
<<<<<<< HEAD
=======
    { id: 'content', name: 'Content', icon: FileText },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'support', name: 'Support', icon: MessageSquare },
    { id: 'productivity', name: 'Productivity', icon: Calendar },
    { id: 'marketing', name: 'Marketing', icon: Target }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSAASServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price.starting - b.price.starting;
        case 'price-high':
          return b.price.starting - a.price.starting;
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        case 'popularity':
        default:
          return b.popular ? 1 : -1;
      }
    });

    return filtered;
<<<<<<< HEAD
<<<<<<< HEAD
  }, [microSAASServices, selectedCategory, searchTerm, sortBy]);

  const formatPrice = (price: typeof microSAASServices[0]['price']) => {
    return `$${price.starting}/${price.period === 'month' ? 'mo' : 'yr'}`;
=======
  }, [microSAASServices, searchTerm, selectedCategory, sortBy]);

  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'support@ziontechgroup.com',
    address: 'Middletown, DE 19709'
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8
  };
=======
    
    if (sortBy === 'popularity') {
      filtered = filtered.sort((a, b) => b.users - a.users);
    } else if (sortBy === 'rating') {
      filtered = filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'price') {
      filtered = filtered.sort((a, b) => a.pricing.starting - b.pricing.starting);
    }
    
    return filtered;
  }, [microSAASServices, selectedCategory, searchTerm, sortBy]);
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
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
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd

  return (
    <>
      <Helmet>
<<<<<<< HEAD
<<<<<<< HEAD
        <title>Micro SAAS Solutions - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Discover our collection of powerful Micro SAAS solutions designed to streamline your business operations with AI-powered tools and automation." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, focused tools designed to solve specific business challenges with AI-powered automation and intelligent insights.
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search Micro SAAS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="price-low">Sort by Price: Low to High</option>
                  <option value="price-high">Sort by Price: High to Low</option>
                </select>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-400 text-slate-900'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
=======
        <meta name="description" content="Discover our collection of micro SAAS solutions designed to solve specific business problems with AI-powered tools and automation." />
        <meta name="keywords" content="micro SAAS, business tools, AI automation, productivity software, business solutions" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our collection of specialized micro SAAS solutions designed to solve specific business problems with AI-powered tools and automation.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search micro SAAS solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">Sort by:</span>
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(service.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-400'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-gray-400 text-sm">
                            {service.rating} ({service.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-gray-400 text-sm">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">
                      {formatPrice(service.price)}
                    </div>
                    <button className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                      Get Started
                    </button>
=======
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Tools</title>
        <meta name="description" content="Discover our collection of AI-powered micro SAAS solutions designed to streamline business operations and boost productivity." />
        <meta name="keywords" content="micro saas, AI tools, business automation, productivity software, AI solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS</span> Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Powerful AI-driven micro SAAS tools designed to solve specific business challenges. 
                Simple, effective, and affordable solutions for modern businesses.
              </p>
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
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Started
                </a>
              </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
            </div>
          </section>

<<<<<<< HEAD
          {/* Search and Filter */}
          <section className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SAAS solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="popularity">Sort by Popularity</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="reviews">Most Reviews</option>
                  </select>
                </div>
              </div>
              
=======
        {/* Stats Section */}
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
          </div>
        </section>

        {/* Search and Filter Section */}
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
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </button>
                ))}
              </div>
<<<<<<< HEAD
=======

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
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
            </div>
          </section>

<<<<<<< HEAD
          {/* Services Grid */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={service.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group ${
                    service.popular ? 'ring-2 ring-cyan-400' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <service.icon className="w-12 h-12" />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </span>
                      )}
                      {service.new && (
                        <span className="bg-gradient-to-r from-green-400 to-cyan-500 text-black text-xs px-2 py-1 rounded-full font-bold flex items-center">
                          <Zap className="w-3 h-3 mr-1" />
                          New
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">
                      {service.rating} ({service.reviews} reviews)
                    </span>
=======
        {/* Services Grid */}
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
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
<<<<<<< HEAD
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
=======
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

<<<<<<< HEAD
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-white">
                        ${service.price.starting}
                      </span>
                      <span className="text-gray-400">/{service.price.period}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
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
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
                    >
                      <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Get Started
                    </a>
                    <a
<<<<<<< HEAD
                      href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                      className="w-full bg-slate-800 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
=======
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex-1 bg-slate-800 text-white py-2 px-3 rounded-lg hover:bg-slate-700 transition-colors text-center text-sm"
                    >
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
                      Learn More
                    </a>
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8
                  </div>
                </div>
              ))}
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
=======
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
=======
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${service.borderColor} ${
                  service.popular ? 'ring-2 ring-cyan-400/50' : ''
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS Collection</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our curated collection of micro SAAS solutions designed to solve specific business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300 ml-1">{service.rating}</span>
                        </div>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-300">{service.users.toLocaleString()} users</span>
                      </div>
                    </div>
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                      Popular
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300">{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">
                      ${service.pricing.starting}
                    </div>
                    <div className="text-sm text-gray-400">per {service.pricing.period}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="/contact"
                    className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:+13024640950`}
                      className="bg-slate-800 text-cyan-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group"
                    >
                      <Phone className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                      Call
                    </a>
                    <a
                      href={`mailto:info@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                      className="bg-slate-800 text-purple-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group"
                    >
                      <Mail className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
<<<<<<< HEAD
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team can build a custom Micro SAAS solution tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:support@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get Quote
              </a>
=======
          </section>

          {/* Contact CTA */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Need a Custom Micro SAAS?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We can build a custom micro SAAS solution tailored to your specific business needs. 
                Get a free consultation and custom development quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
<<<<<<< HEAD
=======
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need a Custom Micro SAAS Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We can create a custom micro SAAS solution tailored to your specific business needs. Contact us to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              Get Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
  );
};

export default MicroSAASPage;
=======
  );
};

export default MicroSAASPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8
=======
          </div>
        </section>

        {/* CTA Section */}
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
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
