'use client';

import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Database, Smartphone, Code, Settings, FileText, Calendar, PieChart, Headphones, Camera, Music, Video, ShoppingCart, CreditCard, BookOpen, GraduationCap, Heart, Car, Home, Briefcase, Gamepad2, Palette, Wrench, Lightbulb, Rocket, Layers, Activity, Bot, Cloud, Server, Network, HardDrive, Wifi, Monitor, Printer, Keyboard, Mouse, HeadphonesIcon, Microphone, Volume2, Play, Pause, Stop, SkipForward, SkipBack, Repeat, Shuffle, VolumeX, Maximize, Minimize, X, Plus, Minus, Edit, Trash2, Save, Download, Upload, Share, Copy, Link, ExternalLink, Info, AlertTriangle, Check, XCircle, HelpCircle, MessageCircle, Bell, BellOff, User, UserPlus, UserMinus, Users2, UserCheck, UserX, UserCog, UserSearch, UserEdit, UserShield, UserLock, UserUnlock, UserKey, UserHeart, UserStar, UserCheck2, UserX2, UserPlus2, UserMinus2, UserCog2, UserSearch2, UserEdit2, UserShield2, UserLock2, UserUnlock2, UserKey2, UserHeart2, UserStar2, UserCheck3, UserX3, UserPlus3, UserMinus3, UserCog3, UserSearch3, UserEdit3, UserShield3, UserLock3, UserUnlock3, UserKey3, UserHeart3, UserStar3 } from 'lucide-react';

interface MicroSAASService {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  popular: boolean;
  new: boolean;
  rating: number;
  users: number;
  link: string;
  demo: string;
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  benefits: string[];
  useCases: string[];
  integrations: string[];
  support: string[];
}

const MicroSAASCard: React.FC<{ service: MicroSAASService; onSelect: (service: MicroSAASService) => void }> = ({ service, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`quantum-card p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl ${isHovered ? 'energy-pulse' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(service)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${service.bgColor}`}>
          <service.icon className={`w-8 h-8 ${service.color}`} />
        </div>
        <div className="flex space-x-2">
          {service.popular && (
            <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
              POPULAR
            </span>
          )}
          {service.new && (
            <span className="px-2 py-1 bg-gradient-to-r from-green-400 to-cyan-500 text-black text-xs font-bold rounded-full">
              NEW
            </span>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 neon-text">{service.name}</h3>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>

      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-white text-sm font-medium">{service.rating}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Users className="w-4 h-4 text-cyan-400" />
          <span className="text-gray-300 text-sm">{service.users.toLocaleString()}+ users</span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        {service.features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
        <button className="cyber-button px-4 py-2 text-sm">
          Try Free
        </button>
      </div>
    </div>
  );
};

export default function MicroSAASPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<MicroSAASService | null>(null);
  const [sortBy, setSortBy] = useState('popular');

  const microSAASServices: MicroSAASService[] = [
    // AI-Powered Business Tools
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager Pro',
      description: 'Intelligent project management with AI-driven insights, automated scheduling, and predictive analytics for optimal resource allocation.',
      category: 'ai-business',
      price: '$29/mo',
      features: [
        'AI-powered task prioritization',
        'Automated resource allocation',
        'Predictive project timeline analysis',
        'Real-time collaboration tools',
        'Advanced reporting & analytics',
        'Integration with 50+ tools'
      ],
      icon: BarChart,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      popular: true,
      new: false,
      rating: 4.9,
      users: 12500,
      link: '/ai-project-manager',
      demo: '/demo/ai-project-manager',
      pricing: { basic: 29, pro: 79, enterprise: 199 },
      benefits: ['40% faster project completion', '60% reduction in project delays', '85% improved team productivity'],
      useCases: ['Software development', 'Marketing campaigns', 'Event planning', 'Product launches'],
      integrations: ['Slack', 'Microsoft Teams', 'Jira', 'Trello', 'Asana', 'Monday.com'],
      support: ['24/7 chat support', 'Email support', 'Video tutorials', 'Live webinars']
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automated social media management with AI content creation, optimal posting times, and engagement optimization.',
      category: 'ai-marketing',
      price: '$39/mo',
      features: [
        'AI content generation for all platforms',
        'Optimal posting time recommendations',
        'Hashtag optimization',
        'Engagement rate analysis',
        'Competitor monitoring',
        'Multi-platform scheduling'
      ],
      icon: MessageSquare,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/20',
      popular: true,
      new: false,
      rating: 4.8,
      users: 8900,
      link: '/ai-social-media-manager',
      demo: '/demo/ai-social-media-manager',
      pricing: { basic: 39, pro: 99, enterprise: 249 },
      benefits: ['300% increase in engagement', '50% time savings', '200% more followers'],
      useCases: ['Brand awareness', 'Lead generation', 'Customer engagement', 'Product promotion'],
      integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube'],
      support: ['24/7 chat support', 'Email support', 'Video tutorials', 'Live webinars']
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Advanced business intelligence with AI-powered insights, predictive analytics, and automated reporting.',
      category: 'ai-analytics',
      price: '$49/mo',
      features: [
        'AI-powered data insights',
        'Predictive analytics',
        'Automated report generation',
        'Real-time dashboards',
        'Custom KPI tracking',
        'Data visualization tools'
      ],
      icon: PieChart,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      popular: true,
      new: false,
      rating: 4.9,
      users: 15600,
      link: '/ai-analytics-dashboard',
      demo: '/demo/ai-analytics-dashboard',
      pricing: { basic: 49, pro: 129, enterprise: 299 },
      benefits: ['90% faster insights', '75% better decision making', '60% time savings'],
      useCases: ['Sales performance', 'Marketing ROI', 'Customer behavior', 'Financial analysis'],
      integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'Stripe', 'Shopify', 'Zapier'],
      support: ['24/7 chat support', 'Email support', 'Video tutorials', 'Live webinars']
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing with AI-powered subject lines, content optimization, and automated campaigns.',
      category: 'ai-marketing',
      price: '$25/mo',
      features: [
        'AI subject line optimization',
        'Content personalization',
        'Send time optimization',
        'A/B testing automation',
        'List segmentation',
        'Deliverability monitoring'
      ],
      icon: Mail,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      popular: true,
      new: false,
      rating: 4.7,
      users: 11200,
      link: '/ai-email-marketing',
      demo: '/demo/ai-email-marketing',
      pricing: { basic: 25, pro: 69, enterprise: 179 },
      benefits: ['45% higher open rates', '60% better click-through rates', '35% more conversions'],
      useCases: ['Newsletter campaigns', 'Product announcements', 'Lead nurturing', 'Customer retention'],
      integrations: ['Mailchimp', 'Constant Contact', 'AWeber', 'ConvertKit', 'ActiveCampaign'],
      support: ['24/7 chat support', 'Email support', 'Video tutorials', 'Live webinars']
    },
    {
      id: 'ai-customer-support-bot',
      name: 'AI Customer Support Bot',
      description: '24/7 AI-powered customer support with natural language processing and seamless human handoff.',
      category: 'ai-support',
      price: '$35/mo',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Human handoff capability',
        'Knowledge base integration',
        'Sentiment analysis',
        'Performance analytics'
      ],
      icon: Bot,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      popular: true,
      new: false,
      rating: 4.8,
      users: 9800,
      link: '/ai-customer-support-bot',
      demo: '/demo/ai-customer-support-bot',
      pricing: { basic: 35, pro: 89, enterprise: 229 },
      benefits: ['80% faster response times', '90% customer satisfaction', '70% cost reduction'],
      useCases: ['FAQ automation', 'Order support', 'Technical help', 'Account assistance'],
      integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'Drift', 'Crisp', 'LiveChat'],
      support: ['24/7 chat support', 'Email support', 'Video tutorials', 'Live webinars']
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'AI-powered content creation for blogs, social media, ads, and marketing materials with brand voice consistency.',
      category: 'ai-content',
      price: '$19/mo',
      features: [
        'Multi-format content generation',
        'Brand voice training',
        'SEO optimization',
        'Plagiarism detection',
        'Tone adjustment',
        'Content templates'
      ],
      icon: FileText,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      popular: false,
      new: true,
      rating: 4.6,
      users: 6700,
      link: '/ai-content-generator',
      demo: '/demo/ai-content-generator',
      pricing: { basic: 19, pro: 49, enterprise: 129 },
      benefits: ['500% faster content creation', '90% consistency in brand voice', '60% better SEO performance'],
      useCases: ['Blog writing', 'Social media posts', 'Ad copy', 'Product descriptions'],
      integrations: ['WordPress', 'HubSpot', 'Buffer', 'Hootsuite', 'Canva', 'Figma'],
      support: ['24/7 chat support', 'Email support', 'Video tutorials', 'Live webinars']
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer',
      description: 'Comprehensive SEO optimization with AI-powered keyword research, content analysis, and ranking predictions.',
      category: 'ai-marketing',
      price: '$45/mo',
      features: [
        'AI keyword research',
        'Content optimization suggestions',
        'Ranking predictions',
        'Competitor analysis',
        'Technical SEO audits',
        'Link building recommendations'
      ],
      icon: Target,
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      popular: false,
      new: false,
      rating: 4.7,
      users: 8400,
      link: '/ai-seo-optimizer',
      demo: '/demo/ai-seo-optimizer',
      pricing: { basic: 45, pro: 119, enterprise: 279 },
      benefits: ['200% increase in organic traffic', '150% better keyword rankings', '80% faster optimization'],
      useCases: ['Website optimization', 'Content marketing', 'Local SEO', 'E-commerce SEO'],
      integrations: ['Google Search Console', 'SEMrush', 'Ahrefs', 'Moz', 'Screaming Frog'],
      support: ['24/7 chat support', 'Email support', 'Video tutorials', 'Live webinars']
    },
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator',
      description: 'Automated invoice generation with AI-powered pricing suggestions, payment tracking, and financial insights.',
      category: 'ai-finance',
      price: '$15/mo',
      features: [
        'Automated invoice creation',
        'AI pricing suggestions',
        'Payment tracking',
        'Late payment reminders',
        'Financial reporting',
        'Multi-currency support'
      ],
      icon: CreditCard,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/20',
      popular: false,
      new: true,
      rating: 4.5,
      users: 4200,
      link: '/ai-invoice-generator',
      demo: '/demo/ai-invoice-generator',
      pricing: { basic: 15, pro: 39, enterprise: 99 },
      benefits: ['90% faster invoicing', '50% reduction in late payments', '100% accuracy'],
      useCases: ['Freelancer billing', 'Service invoicing', 'Recurring billing', 'Project billing'],
      integrations: ['QuickBooks', 'Xero', 'FreshBooks', 'Stripe', 'PayPal', 'Square'],
      support: ['24/7 chat support', 'Email support', 'Video tutorials', 'Live webinars']
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      description: 'Smart expense tracking with AI categorization, receipt scanning, and automated expense reports.',
      category: 'ai-finance',
      price: '$12/mo',
      features: [
        'AI receipt scanning',
        'Automatic categorization',
        'Expense report generation',
        'Budget tracking',
        'Tax preparation',
        'Multi-user support'
      ],
      icon: Calculator,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/20',
      popular: false,
      new: true,
      rating: 4.4,
      users: 3100,
      link: '/ai-expense-tracker',
      demo: '/demo/ai-expense-tracker',
      pricing: { basic: 12, pro: 29, enterprise: 79 },
      benefits: ['95% accuracy in categorization', '80% time savings', '100% tax compliance'],
      useCases: ['Business expenses', 'Personal finance', 'Travel expenses', 'Tax preparation'],
      integrations: ['QuickBooks', 'Xero', 'FreshBooks', 'Expensify', 'Receipt Bank'],
      support: ['24/7 chat support', 'Email support', 'Video tutorials', 'Live webinars']
    },
    {
      id: 'ai-scheduler',
      name: 'AI Smart Scheduler',
      description: 'Intelligent scheduling with AI-powered time optimization, conflict resolution, and meeting insights.',
      category: 'ai-productivity',
      price: '$22/mo',
      features: [
        'AI time optimization',
        'Conflict resolution',
        'Meeting insights',
        'Calendar integration',
        'Time zone handling',
        'Recurring meeting management'
      ],
      icon: Calendar,
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/20',
      popular: false,
      new: false,
      rating: 4.6,
      users: 5800,
      link: '/ai-scheduler',
      demo: '/demo/ai-scheduler',
      pricing: { basic: 22, pro: 59, enterprise: 149 },
      benefits: ['60% reduction in scheduling conflicts', '40% better time utilization', '90% user satisfaction'],
      useCases: ['Team meetings', 'Client appointments', 'Interview scheduling', 'Event planning'],
      integrations: ['Google Calendar', 'Outlook', 'Calendly', 'Acuity', 'When2meet'],
      support: ['24/7 chat support', 'Email support', 'Video tutorials', 'Live webinars']
    },
    {
      id: 'ai-time-tracker',
      name: 'AI Time Tracker',
      description: 'Advanced time tracking with AI-powered productivity insights, automatic time categorization, and performance analytics.',
      category: 'ai-productivity',
      price: '$18/mo',
      features: [
        'Automatic time tracking',
        'AI productivity insights',
        'Time categorization',
        'Performance analytics',
        'Team monitoring',
        'Project time allocation'
      ],
      icon: Clock,
      color: 'text-violet-400',
      bgColor: 'bg-violet-500/20',
      popular: false,
      new: false,
      rating: 4.5,
      users: 7200,
      link: '/ai-time-tracker',
      demo: '/demo/ai-time-tracker',
      pricing: { basic: 18, pro: 49, enterprise: 129 },
      benefits: ['85% accurate time tracking', '70% productivity improvement', '50% better project estimates'],
      useCases: ['Project tracking', 'Billing accuracy', 'Productivity analysis', 'Team management'],
      integrations: ['Toggl', 'RescueTime', 'Harvest', 'Clockify', 'Time Doctor'],
      support: ['24/7 chat support', 'Email support', 'Video tutorials', 'Live webinars']
    },
    {
      id: 'ai-hr-assistant',
      name: 'AI HR Assistant',
      description: 'Comprehensive HR management with AI-powered recruitment, employee insights, and automated HR processes.',
      category: 'ai-hr',
      price: '$55/mo',
      features: [
        'AI resume screening',
        'Employee performance analysis',
        'Automated onboarding',
        'Leave management',
        'Payroll integration',
        'Compliance monitoring'
      ],
      icon: Users,
      color: 'text-rose-400',
      bgColor: 'bg-rose-500/20',
      popular: false,
      new: true,
      rating: 4.7,
      users: 3800,
      link: '/ai-hr-assistant',
      demo: '/demo/ai-hr-assistant',
      pricing: { basic: 55, pro: 139, enterprise: 349 },
      benefits: ['75% faster recruitment', '90% better candidate matching', '60% HR process automation'],
      useCases: ['Recruitment', 'Performance management', 'Employee onboarding', 'Compliance tracking'],
      integrations: ['Workday', 'BambooHR', 'ADP', 'Paychex', 'Zenefits', 'Namely'],
      support: ['24/7 chat support', 'Email support', 'Video tutorials', 'Live webinars']
    },
    {
      id: 'ai-inventory-manager',
      name: 'AI Inventory Manager',
      description: 'Smart inventory management with AI-powered demand forecasting, automated reordering, and supply chain optimization.',
      category: 'ai-logistics',
      price: '$65/mo',
      features: [
        'AI demand forecasting',
        'Automated reordering',
        'Supply chain optimization',
        'Real-time inventory tracking',
        'Cost optimization',
        'Vendor management'
      ],
      icon: Package,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/20',
      popular: false,
      new: false,
      rating: 4.8,
      users: 2900,
      link: '/ai-inventory-manager',
      demo: '/demo/ai-inventory-manager',
      pricing: { basic: 65, pro: 159, enterprise: 399 },
      benefits: ['85% reduction in stockouts', '60% cost savings', '90% inventory accuracy'],
      useCases: ['Retail inventory', 'Manufacturing', 'E-commerce', 'Warehouse management'],
      integrations: ['Shopify', 'WooCommerce', 'Magento', 'SAP', 'Oracle', 'NetSuite'],
      support: ['24/7 chat support', 'Email support', 'Video tutorials', 'Live webinars']
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant',
      description: 'Custom voice assistant for business operations with natural language processing and multi-platform integration.',
      category: 'ai-voice',
      price: '$42/mo',
      features: [
        'Natural language processing',
        'Multi-platform integration',
        'Custom voice training',
        'Task automation',
        'API integration',
        'Analytics dashboard'
      ],
      icon: Microphone,
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/20',
      popular: false,
      new: true,
      rating: 4.6,
      users: 5100,
      link: '/ai-voice-assistant',
      demo: '/demo/ai-voice-assistant',
      pricing: { basic: 42, pro: 109, enterprise: 279 },
      benefits: ['80% hands-free operation', '90% task automation', '70% efficiency improvement'],
      useCases: ['Office automation', 'Customer service', 'Accessibility', 'Smart home integration'],
      integrations: ['Amazon Alexa', 'Google Assistant', 'Siri', 'Cortana', 'Custom APIs'],
      support: ['24/7 chat support', 'Email support', 'Video tutorials', 'Live webinars']
    },
    {
      id: 'ai-design-assistant',
      name: 'AI Design Assistant',
      description: 'AI-powered design tool with automated layout generation, color optimization, and brand consistency checking.',
      category: 'ai-design',
      price: '$35/mo',
      features: [
        'Automated layout generation',
        'Color palette optimization',
        'Brand consistency checking',
        'Template generation',
        'Design suggestions',
        'Export to multiple formats'
      ],
      icon: Palette,
      color: 'text-fuchsia-400',
      bgColor: 'bg-fuchsia-500/20',
      popular: false,
      new: true,
      rating: 4.5,
      users: 4600,
      link: '/ai-design-assistant',
      demo: '/demo/ai-design-assistant',
      pricing: { basic: 35, pro: 89, enterprise: 229 },
      benefits: ['300% faster design creation', '95% brand consistency', '80% design quality improvement'],
      useCases: ['Marketing materials', 'Social media graphics', 'Web design', 'Print materials'],
      integrations: ['Figma', 'Adobe Creative Suite', 'Canva', 'Sketch', 'InVision'],
      support: ['24/7 chat support', 'Email support', 'Video tutorials', 'Live webinars']
    },
    {
      id: 'ai-mobile-app-builder',
      name: 'AI Mobile App Builder',
      description: 'No-code mobile app development with AI-powered features, automated testing, and cross-platform deployment.',
      category: 'ai-development',
      price: '$79/mo',
      features: [
        'No-code app development',
        'AI feature suggestions',
        'Automated testing',
        'Cross-platform deployment',
        'App store optimization',
        'Analytics integration'
      ],
      icon: Smartphone,
      color: 'text-lime-400',
      bgColor: 'bg-lime-500/20',
      popular: false,
      new: true,
      rating: 4.7,
      users: 2200,
      link: '/ai-mobile-app-builder',
      demo: '/demo/ai-mobile-app-builder',
      pricing: { basic: 79, pro: 199, enterprise: 499 },
      benefits: ['90% faster app development', '80% cost reduction', '100% cross-platform compatibility'],
      useCases: ['Business apps', 'E-commerce apps', 'Utility apps', 'Gaming apps'],
      integrations: ['React Native', 'Flutter', 'Ionic', 'Xamarin', 'Cordova'],
      support: ['24/7 chat support', 'Email support', 'Video tutorials', 'Live webinars']
    },
    {
      id: 'ai-cybersecurity-monitor',
      name: 'AI Cybersecurity Monitor',
      description: 'Advanced cybersecurity monitoring with AI threat detection, automated response, and security analytics.',
      category: 'ai-security',
      price: '$95/mo',
      features: [
        'AI threat detection',
        'Automated incident response',
        'Security analytics',
        'Vulnerability scanning',
        'Compliance monitoring',
        'Real-time alerts'
      ],
      icon: Shield,
      color: 'text-red-500',
      bgColor: 'bg-red-500/20',
      popular: false,
      new: false,
      rating: 4.9,
      users: 1800,
      link: '/ai-cybersecurity-monitor',
      demo: '/demo/ai-cybersecurity-monitor',
      pricing: { basic: 95, pro: 239, enterprise: 599 },
      benefits: ['99.9% threat detection accuracy', '90% faster incident response', '100% compliance'],
      useCases: ['Network security', 'Data protection', 'Compliance monitoring', 'Incident response'],
      integrations: ['SIEM systems', 'Firewalls', 'Antivirus', 'EDR solutions', 'Cloud security'],
      support: ['24/7 chat support', 'Email support', 'Video tutorials', 'Live webinars']
    },
    {
      id: 'ai-data-visualization',
      name: 'AI Data Visualization Studio',
      description: 'Advanced data visualization with AI-powered chart recommendations, interactive dashboards, and automated insights.',
      category: 'ai-analytics',
      price: '$52/mo',
      features: [
        'AI chart recommendations',
        'Interactive dashboards',
        'Automated insights',
        'Real-time data updates',
        'Custom visualizations',
        'Export capabilities'
      ],
      icon: BarChart,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/20',
      popular: false,
      new: false,
      rating: 4.8,
      users: 3400,
      link: '/ai-data-visualization',
      demo: '/demo/ai-data-visualization',
      pricing: { basic: 52, pro: 129, enterprise: 329 },
      benefits: ['200% better data insights', '150% faster dashboard creation', '90% user engagement'],
      useCases: ['Business intelligence', 'Financial reporting', 'Marketing analytics', 'Operations monitoring'],
      integrations: ['Tableau', 'Power BI', 'Qlik', 'D3.js', 'Chart.js', 'Plotly'],
      support: ['24/7 chat support', 'Email support', 'Video tutorials', 'Live webinars']
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent workflow automation with AI-powered process optimization, task routing, and performance monitoring.',
      category: 'ai-automation',
      price: '$68/mo',
      features: [
        'AI process optimization',
        'Intelligent task routing',
        'Performance monitoring',
        'Custom workflow creation',
        'Integration management',
        'Analytics dashboard'
      ],
      icon: Settings,
      color: 'text-slate-400',
      bgColor: 'bg-slate-500/20',
      popular: false,
      new: false,
      rating: 4.7,
      users: 4100,
      link: '/ai-workflow-automation',
      demo: '/demo/ai-workflow-automation',
      pricing: { basic: 68, pro: 169, enterprise: 429 },
      benefits: ['85% process efficiency', '70% time savings', '95% error reduction'],
      useCases: ['Business processes', 'Customer service', 'Sales automation', 'Operations management'],
      integrations: ['Zapier', 'Microsoft Power Automate', 'UiPath', 'Automation Anywhere', 'Workato'],
      support: ['24/7 chat support', 'Email support', 'Video tutorials', 'Live webinars']
    },
    {
      id: 'ai-predictive-analytics',
      name: 'AI Predictive Analytics',
      description: 'Advanced predictive analytics with machine learning models, forecasting, and automated business insights.',
      category: 'ai-analytics',
      price: '$89/mo',
      features: [
        'Machine learning models',
        'Forecasting algorithms',
        'Automated insights',
        'Model training',
        'Performance monitoring',
        'Custom predictions'
      ],
      icon: TrendingUp,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/20',
      popular: false,
      new: true,
      rating: 4.8,
      users: 1900,
      link: '/ai-predictive-analytics',
      demo: '/demo/ai-predictive-analytics',
      pricing: { basic: 89, pro: 219, enterprise: 549 },
      benefits: ['95% prediction accuracy', '80% better forecasting', '90% business insights'],
      useCases: ['Sales forecasting', 'Demand planning', 'Risk assessment', 'Market analysis'],
      integrations: ['Python', 'R', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas'],
      support: ['24/7 chat support', 'Email support', 'Video tutorials', 'Live webinars']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai-business', name: 'AI Business', icon: Briefcase },
    { id: 'ai-marketing', name: 'AI Marketing', icon: Target },
    { id: 'ai-analytics', name: 'AI Analytics', icon: BarChart },
    { id: 'ai-content', name: 'AI Content', icon: FileText },
    { id: 'ai-support', name: 'AI Support', icon: Headphones },
    { id: 'ai-finance', name: 'AI Finance', icon: DollarSign },
    { id: 'ai-productivity', name: 'AI Productivity', icon: Clock },
    { id: 'ai-hr', name: 'AI HR', icon: Users },
    { id: 'ai-logistics', name: 'AI Logistics', icon: Package },
    { id: 'ai-voice', name: 'AI Voice', icon: Microphone },
    { id: 'ai-design', name: 'AI Design', icon: Palette },
    { id: 'ai-development', name: 'AI Development', icon: Code },
    { id: 'ai-security', name: 'AI Security', icon: Shield },
    { id: 'ai-automation', name: 'AI Automation', icon: Settings }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSAASServices;

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    switch (sortBy) {
      case 'popular':
        filtered = filtered.sort((a, b) => b.users - a.users);
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered = filtered.sort((a, b) => a.pricing.basic - b.pricing.basic);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.pricing.basic - a.pricing.basic);
        break;
      case 'new':
        filtered = filtered.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const handleServiceSelect = (service: MicroSAASService) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of AI-powered micro SAAS solutions designed to transform your business operations with cutting-edge technology." />
        <meta name="keywords" content="micro saas, ai solutions, business automation, productivity tools, ai services" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 holographic-text cyber-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive collection of AI-powered micro SAAS solutions. 
            From project management to customer support, we have the tools to accelerate your success.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SAAS solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-4 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="new">Newest First</option>
              </select>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-black font-semibold'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredServices.map((service) => (
            <MicroSAASCard
              key={service.id}
              service={service}
              onSelect={handleServiceSelect}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-lg ${selectedService.bgColor}`}>
                    <selectedService.icon className={`w-12 h-12 ${selectedService.color}`} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white neon-text">{selectedService.name}</h2>
                    <p className="text-gray-300 text-lg">{selectedService.description}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Features</h3>
                  <div className="space-y-2 mb-6">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
                  <div className="space-y-2 mb-6">
                    {selectedService.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Pricing</h3>
                  <div className="space-y-4 mb-6">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Basic</span>
                        <span className="text-2xl font-bold text-cyan-400">${selectedService.pricing.basic}/mo</span>
                      </div>
                      <p className="text-sm text-gray-400">Perfect for small teams</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Pro</span>
                        <span className="text-2xl font-bold text-cyan-400">${selectedService.pricing.pro}/mo</span>
                      </div>
                      <p className="text-sm text-gray-400">Ideal for growing businesses</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Enterprise</span>
                        <span className="text-2xl font-bold text-cyan-400">${selectedService.pricing.enterprise}/mo</span>
                      </div>
                      <p className="text-sm text-gray-400">For large organizations</p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="cyber-button flex-1 py-3">
                      Start Free Trial
                    </button>
                    <button className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-colors">
                      View Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4 neon-text">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with our micro SAAS solutions today and experience the power of AI-driven automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-colors inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}