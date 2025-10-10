'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Star, 
  Users, 
  TrendingUp, 
  Shield, 
  Cloud, 
  BarChart3, 
  MessageSquare,
  Brain,
  Code,
  Mail,
  Smartphone,
  Search,
  Calendar,
  CheckSquare,
  FileText,
  Target,
  Rocket,
  Settings,
  Globe,
  Lock,
  Cpu,
  Database,
  Sparkles,
  DollarSign,
  Clock,
  Award,
  Zap as Lightning
} from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
  marketPrice: string;
  savings: string;
  rating: number;
  reviews: number;
  launchDate: string;
  integrations: string[];
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts: MicroSaasProduct[] = [
    // Productivity & Business Tools
    {
      id: '1',
      icon: BarChart3,
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time analytics, predictive insights, and automated reporting for data-driven decisions.',
      features: [
        'Real-time dashboards with 50+ chart types',
        'Predictive analytics with ML algorithms',
        'Custom KPI tracking and alerts',
        'Mobile app with offline sync',
        'API integration with 100+ tools',
        'White-label reporting',
        'Advanced data visualization',
        'Automated insights generation'
      ],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Analytics',
      marketPrice: '$299/month',
      savings: '33% off',
      rating: 4.8,
      reviews: 1247,
      launchDate: '2024-01-15',
      integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'Stripe', 'Shopify', 'Zapier']
    },
    {
      id: '2',
      icon: Users,
      title: 'AI-Powered CRM Enterprise',
      description: 'Intelligent customer relationship management with AI-driven lead scoring, automated follow-ups, and revenue optimization.',
      features: [
        'AI lead scoring and qualification',
        'Automated email sequences',
        'Sales forecasting with 95% accuracy',
        'Multi-channel communication hub',
        'Advanced contact segmentation',
        'Revenue pipeline optimization',
        'Integration with 200+ tools',
        'Custom workflow automation'
      ],
      price: '$299/month',
      users: 'Up to 500 users',
      popular: true,
      category: 'CRM',
      marketPrice: '$499/month',
      savings: '40% off',
      rating: 4.9,
      reviews: 2156,
      launchDate: '2024-02-01',
      integrations: ['Salesforce', 'Pipedrive', 'HubSpot', 'Mailchimp', 'Slack', 'Microsoft Teams']
    },
    {
      id: '3',
      icon: Shield,
      title: 'Cybersecurity Monitoring Suite',
      description: 'Comprehensive security monitoring with AI threat detection, vulnerability assessment, and automated incident response.',
      features: [
        'AI-powered threat detection',
        'Real-time vulnerability scanning',
        'Automated incident response',
        'Compliance reporting (SOC2, GDPR)',
        '24/7 security monitoring',
        'Threat intelligence feeds',
        'Security awareness training',
        'Penetration testing tools'
      ],
      price: '$399/month',
      users: 'Up to 1000 users',
      popular: false,
      category: 'Security',
      marketPrice: '$699/month',
      savings: '43% off',
      rating: 4.7,
      reviews: 892,
      launchDate: '2024-01-20',
      integrations: ['AWS', 'Azure', 'Google Cloud', 'Splunk', 'CrowdStrike', 'Okta']
    },
    {
      id: '4',
      icon: Cloud,
      title: 'Multi-Cloud Infrastructure Manager',
      description: 'Automated cloud resource management with cost optimization, auto-scaling, and disaster recovery across AWS, Azure, and GCP.',
      features: [
        'Multi-cloud resource optimization',
        'Automated cost tracking and alerts',
        'Intelligent auto-scaling',
        'Disaster recovery automation',
        'Performance monitoring',
        'Security compliance scanning',
        'Resource right-sizing',
        'Budget management tools'
      ],
      price: '$599/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Infrastructure',
      marketPrice: '$999/month',
      savings: '40% off',
      rating: 4.6,
      reviews: 634,
      launchDate: '2024-02-10',
      integrations: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker']
    },
    {
      id: '5',
      icon: Mail,
      title: 'AI Email Marketing Automation',
      description: 'Advanced email marketing with AI personalization, behavioral triggers, and advanced analytics for maximum engagement.',
      features: [
        'AI-powered email personalization',
        'Behavioral trigger automation',
        'Advanced A/B testing',
        'Predictive send time optimization',
        'Dynamic content generation',
        'Advanced segmentation',
        'Deliverability optimization',
        'Revenue attribution tracking'
      ],
      price: '$149/month',
      users: 'Up to 100,000 contacts',
      popular: true,
      category: 'Marketing',
      marketPrice: '$249/month',
      savings: '40% off',
      rating: 4.8,
      reviews: 1876,
      launchDate: '2024-01-25',
      integrations: ['Shopify', 'WooCommerce', 'Salesforce', 'HubSpot', 'Zapier', 'Google Analytics']
    },
    {
      id: '6',
      icon: MessageSquare,
      title: 'AI Customer Support Chatbot',
      description: 'Intelligent chatbot solution with natural language processing, multi-channel support, and seamless human handoff.',
      features: [
        'Advanced NLP and intent recognition',
        'Multi-channel support (web, mobile, social)',
        'Knowledge base integration',
        'Sentiment analysis',
        'Human handoff automation',
        'Custom training and learning',
        'Analytics and reporting',
        'Voice and video support'
      ],
      price: '$199/month',
      users: 'Unlimited conversations',
      popular: true,
      category: 'Support',
      marketPrice: '$349/month',
      savings: '43% off',
      rating: 4.7,
      reviews: 1456,
      launchDate: '2024-02-05',
      integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'Slack', 'Microsoft Teams', 'WhatsApp']
    },
    {
      id: '7',
      icon: Code,
      title: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered code completion, debugging, and optimization for multiple programming languages with team collaboration.',
      features: [
        'Multi-language code completion',
        'AI-powered debugging assistance',
        'Code optimization suggestions',
        'Security vulnerability detection',
        'Team collaboration tools',
        'Code review automation',
        'Documentation generation',
        'Performance analysis'
      ],
      price: '$99/month',
      users: 'Up to 50 developers',
      popular: false,
      category: 'Development',
      marketPrice: '$199/month',
      savings: '50% off',
      rating: 4.9,
      reviews: 2341,
      launchDate: '2024-01-30',
      integrations: ['VS Code', 'IntelliJ', 'GitHub', 'GitLab', 'Bitbucket', 'Jira']
    },
    {
      id: '8',
      icon: Brain,
      title: 'AI Content Studio',
      description: 'Complete content creation suite with AI writing, image generation, video editing, and social media automation.',
      features: [
        'AI writing for 20+ content types',
        'Image generation and editing',
        'Video creation and editing',
        'Social media automation',
        'SEO optimization',
        'Brand voice consistency',
        'Content calendar management',
        'Performance analytics'
      ],
      price: '$179/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Content',
      marketPrice: '$299/month',
      savings: '40% off',
      rating: 4.8,
      reviews: 1678,
      launchDate: '2024-02-15',
      integrations: ['WordPress', 'Shopify', 'HubSpot', 'Hootsuite', 'Buffer', 'Canva']
    },
    {
      id: '9',
      icon: Smartphone,
      title: 'AI Mobile App Builder',
      description: 'No-code mobile app development with AI assistance, drag-and-drop interface, and instant deployment to app stores.',
      features: [
        'Drag-and-drop app builder',
        'AI code generation',
        'Real-time preview',
        'App store publishing',
        'Push notification system',
        'Analytics and tracking',
        'User authentication',
        'Payment integration'
      ],
      price: '$299/month',
      users: 'Unlimited apps',
      popular: false,
      category: 'Development',
      marketPrice: '$499/month',
      savings: '40% off',
      rating: 4.6,
      reviews: 1123,
      launchDate: '2024-02-20',
      integrations: ['Stripe', 'PayPal', 'Firebase', 'AWS', 'Google Analytics', 'Facebook SDK']
    },
    {
      id: '10',
      icon: Search,
      title: 'AI SEO Optimizer Pro',
      description: 'Comprehensive SEO analysis and optimization with AI-powered keyword research, content suggestions, and ranking tracking.',
      features: [
        'AI keyword research and analysis',
        'Content optimization suggestions',
        'Technical SEO auditing',
        'Competitor analysis',
        'Ranking tracking and alerts',
        'Link building opportunities',
        'Local SEO optimization',
        'Performance reporting'
      ],
      price: '$129/month',
      users: 'Up to 50 websites',
      popular: true,
      category: 'SEO',
      marketPrice: '$229/month',
      savings: '44% off',
      rating: 4.7,
      reviews: 987,
      launchDate: '2024-01-10',
      integrations: ['Google Search Console', 'Google Analytics', 'SEMrush', 'Ahrefs', 'Screaming Frog', 'WordPress']
    },
    {
      id: '11',
      icon: DollarSign,
      title: 'AI Invoice Generator Pro',
      description: 'Automated invoice creation with AI-powered data extraction, payment tracking, and financial reporting for small businesses.',
      features: [
        'Automated invoice generation',
        'AI data extraction from receipts',
        'Payment tracking and reminders',
        'Financial reporting and analytics',
        'Tax calculation and compliance',
        'Client portal and communication',
        'Multi-currency support',
        'Integration with accounting software'
      ],
      price: '$79/month',
      users: 'Up to 1000 invoices/month',
      popular: false,
      category: 'Finance',
      marketPrice: '$149/month',
      savings: '47% off',
      rating: 4.8,
      reviews: 756,
      launchDate: '2024-02-01',
      integrations: ['QuickBooks', 'Xero', 'FreshBooks', 'Stripe', 'PayPal', 'Wise']
    },
    {
      id: '12',
      icon: Calendar,
      title: 'AI Smart Scheduler',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time management for teams and individuals.',
      features: [
        'AI-powered meeting scheduling',
        'Calendar optimization',
        'Time zone management',
        'Meeting room booking',
        'Automated follow-ups',
        'Integration with 50+ calendars',
        'Team availability tracking',
        'Smart meeting suggestions'
      ],
      price: '$49/month',
      users: 'Up to 200 users',
      popular: true,
      category: 'Productivity',
      marketPrice: '$99/month',
      savings: '51% off',
      rating: 4.9,
      reviews: 2134,
      launchDate: '2024-01-05',
      integrations: ['Google Calendar', 'Outlook', 'Apple Calendar', 'Zoom', 'Teams', 'Slack']
    },
    {
      id: '13',
      icon: CheckSquare,
      title: 'AI Task Manager Pro',
      description: 'Advanced task management with AI prioritization, team collaboration, and project tracking for maximum productivity.',
      features: [
        'AI task prioritization',
        'Team collaboration tools',
        'Project timeline tracking',
        'Time tracking and reporting',
        'Automated task assignment',
        'Progress analytics',
        'Integration with 100+ tools',
        'Mobile and desktop apps'
      ],
      price: '$89/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Productivity',
      marketPrice: '$179/month',
      savings: '50% off',
      rating: 4.7,
      reviews: 1456,
      launchDate: '2024-01-20',
      integrations: ['Slack', 'Microsoft Teams', 'Jira', 'Asana', 'Trello', 'Notion']
    },
    {
      id: '14',
      icon: Globe,
      title: 'AI Social Media Manager',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics across all platforms.',
      features: [
        'AI content creation and curation',
        'Multi-platform scheduling',
        'Hashtag optimization',
        'Engagement analytics',
        'Influencer identification',
        'Crisis management tools',
        'Brand monitoring',
        'ROI tracking'
      ],
      price: '$159/month',
      users: 'Up to 20 social accounts',
      popular: true,
      category: 'Marketing',
      marketPrice: '$299/month',
      savings: '47% off',
      rating: 4.8,
      reviews: 1892,
      launchDate: '2024-02-08',
      integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube']
    },
    {
      id: '15',
      icon: Sparkles,
      title: 'AI Design Studio Pro',
      description: 'Professional design tools with AI assistance for creating stunning graphics, logos, and marketing materials.',
      features: [
        'AI-powered design generation',
        'Logo and brand kit creation',
        'Marketing material templates',
        'Image editing and enhancement',
        'Color palette optimization',
        'Typography suggestions',
        'Brand consistency tools',
        'Export in multiple formats'
      ],
      price: '$99/month',
      users: 'Up to 10 designers',
      popular: false,
      category: 'Design',
      marketPrice: '$199/month',
      savings: '50% off',
      rating: 4.6,
      reviews: 1234,
      launchDate: '2024-01-12',
      integrations: ['Adobe Creative Suite', 'Figma', 'Sketch', 'Canva', 'Unsplash', 'Pexels']
    },
    {
      id: '16',
      icon: Target,
      title: 'AI Lead Generation Engine',
      description: 'Automated lead generation with AI prospecting, email sequences, and qualification for B2B sales teams.',
      features: [
        'AI prospect identification',
        'Automated email sequences',
        'Lead scoring and qualification',
        'CRM integration',
        'A/B testing for campaigns',
        'Performance analytics',
        'Compliance monitoring',
        'Multi-channel outreach'
      ],
      price: '$249/month',
      users: 'Up to 5000 leads/month',
      popular: true,
      category: 'Sales',
      marketPrice: '$449/month',
      savings: '44% off',
      rating: 4.7,
      reviews: 1678,
      launchDate: '2024-02-12',
      integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'LinkedIn', 'Apollo', 'ZoomInfo']
    },
    {
      id: '17',
      icon: Database,
      title: 'AI Data Processor',
      description: 'Automated data processing and analysis with AI-powered insights, cleaning, and visualization for business intelligence.',
      features: [
        'AI data cleaning and validation',
        'Automated data analysis',
        'Custom visualization creation',
        'Real-time data processing',
        'Data quality monitoring',
        'Automated reporting',
        'Machine learning insights',
        'API and database integration'
      ],
      price: '$179/month',
      users: 'Up to 1TB data processing',
      popular: false,
      category: 'Data',
      marketPrice: '$349/month',
      savings: '49% off',
      rating: 4.8,
      reviews: 987,
      launchDate: '2024-01-18',
      integrations: ['MySQL', 'PostgreSQL', 'MongoDB', 'Snowflake', 'BigQuery', 'Tableau']
    },
    {
      id: '18',
      icon: Lock,
      title: 'AI Password Manager Pro',
      description: 'Advanced password management with AI security analysis, breach monitoring, and team collaboration features.',
      features: [
        'AI security analysis',
        'Breach monitoring and alerts',
        'Team password sharing',
        'Multi-factor authentication',
        'Password generation and auditing',
        'Dark web monitoring',
        'Compliance reporting',
        'Emergency access features'
      ],
      price: '$59/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Security',
      marketPrice: '$119/month',
      savings: '50% off',
      rating: 4.9,
      reviews: 2341,
      launchDate: '2024-01-08',
      integrations: ['Active Directory', 'Okta', 'Google Workspace', 'Microsoft 365', 'Slack', 'Teams']
    },
    {
      id: '19',
      icon: Clock,
      title: 'AI Time Tracking Pro',
      description: 'Intelligent time tracking with AI-powered productivity analysis, project billing, and team performance insights.',
      features: [
        'AI-powered time tracking',
        'Productivity analysis and insights',
        'Project billing and invoicing',
        'Team performance monitoring',
        'Automatic time categorization',
        'Distraction detection',
        'Work-life balance analytics',
        'Integration with 100+ tools'
      ],
      price: '$79/month',
      users: 'Up to 200 users',
      popular: true,
      category: 'Productivity',
      marketPrice: '$159/month',
      savings: '50% off',
      rating: 4.7,
      reviews: 1456,
      launchDate: '2024-02-03',
      integrations: ['Jira', 'Asana', 'Trello', 'Monday.com', 'Notion', 'Slack']
    },
    {
      id: '20',
      icon: Award,
      title: 'AI Employee Recognition',
      description: 'AI-powered employee recognition and engagement platform with performance tracking and rewards management.',
      features: [
        'AI performance recognition',
        'Peer-to-peer recognition',
        'Rewards and gamification',
        'Performance analytics',
        'Team engagement insights',
        'Custom recognition programs',
        'Integration with HR systems',
        'Mobile app for employees'
      ],
      price: '$149/month',
      users: 'Up to 500 employees',
      popular: false,
      category: 'HR',
      marketPrice: '$299/month',
      savings: '50% off',
      rating: 4.8,
      reviews: 892,
      launchDate: '2024-02-18',
      integrations: ['BambooHR', 'Workday', 'ADP', 'Slack', 'Microsoft Teams', 'Google Workspace']
    }
  ];

  const categories = [
    'All', 
    'Analytics', 
    'CRM', 
    'Security', 
    'Infrastructure', 
    'Marketing', 
    'Support',
    'Development',
    'Content',
    'SEO',
    'Finance',
    'Productivity',
    'Design',
    'Sales',
    'Data',
    'HR'
  ];

  const benefits = [
    'No upfront costs or setup fees',
    'Quick deployment in 24-48 hours',
    'Scalable solutions that grow with you',
    'Regular updates and new features',
    '24/7 technical support',
    'Easy integration with existing tools',
    'Free trial for all products',
    'Cancel anytime, no long-term contracts'
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in minutes with our streamlined onboarding process'
    },
    {
      icon: Target,
      title: 'Focused Solutions',
      description: 'Each micro SaaS is designed to solve specific business challenges effectively'
    },
    {
      icon: Rocket,
      title: 'Rapid Innovation',
      description: 'Frequent updates and new features based on user feedback and market needs'
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Active Users',
      description: 'Growing community of satisfied customers'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service you can count on'
    },
    {
      icon: Star,
      value: '4.8/5',
      label: 'Rating',
      description: 'Highly rated by our customers'
    },
    {
      icon: Zap,
      value: '24/7',
      label: 'Support',
      description: 'Always here when you need us'
    }
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | 20+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive collection of 20+ micro SaaS solutions with real market pricing. AI-powered tools for analytics, CRM, security, marketing, and more. Starting from $49/month." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, CRM, analytics, security monitoring, cloud management, small business software, AI automation" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="20+ AI-powered business tools with real market pricing" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Micro SaaS Solutions">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              20+ AI-powered business tools with real market pricing. 
              <span className="text-cyan-400 font-semibold"> Quick deployment, scalable, and cost-effective</span> solutions for growing businesses.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center quantum-field">
                    <stat.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                  <div className="text-cyan-400 text-sm font-semibold">{stat.label}</div>
                  <div className="text-gray-400 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-6 border border-cyan-500/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SaaS solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-slate-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Why Choose Our Micro SaaS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card hologram-card p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 quantum-field">
                    <feature.icon className="w-10 h-10 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 neon-text">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Choose from our collection of <span className="text-cyan-400 font-semibold">20+ specialized business tools</span> designed to solve specific challenges with real market pricing.
              </p>
              <div className="mt-4 text-cyan-400 font-semibold">
                {filteredProducts.length} products found
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative cyber-card hologram-card p-6 border transition-all duration-300 group hover:scale-105 ${
                    product.popular
                      ? 'border-cyan-400/50 ring-2 ring-cyan-400/20 shadow-2xl shadow-cyan-500/25'
                      : 'border-cyan-500/20 hover:border-cyan-400/50'
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4 quantum-field">
                      <product.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{product.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-3xl font-bold text-cyan-400">{product.price}</span>
                        <span className="text-sm text-gray-400 line-through">{product.marketPrice}</span>
                        <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">{product.savings}</span>
                      </div>
                      <div className="text-gray-400 text-sm">{product.users}</div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
                    </div>
                    
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full mb-4">
                      {product.category}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                    {product.features.length > 4 && (
                      <li className="text-gray-400 text-sm ml-7">
                        +{product.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  <div className="mb-4">
                    <div className="text-xs text-gray-400 mb-2">Integrations:</div>
                    <div className="flex flex-wrap gap-1">
                      {product.integrations.slice(0, 3).map((integration, index) => (
                        <span key={index} className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded">
                          {integration}
                        </span>
                      ))}
                      {product.integrations.length > 3 && (
                        <span className="text-xs text-gray-400">+{product.integrations.length - 3} more</span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button className="w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 hover:from-cyan-300 hover:to-purple-300 transform hover:scale-105 flex items-center justify-center gap-2">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 bg-slate-700/50 text-white border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400/50">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We've designed our micro SaaS products to be <span className="text-cyan-400 font-semibold">simple, powerful, and accessible</span> to businesses of all sizes.
              </p>
            </div>

            <div className="cyber-card hologram-card p-8 md:p-12 border border-cyan-500/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">How It Works</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Getting started with our micro SaaS solutions is <span className="text-cyan-400 font-semibold">simple and straightforward</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center quantum-field">
                  <span className="text-2xl font-bold text-slate-900">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Choose Your Solution</h3>
                <p className="text-gray-300 leading-relaxed">Browse our collection and select the micro SaaS product that fits your needs.</p>
              </div>
              <div className="cyber-card hologram-card p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center quantum-field">
                  <span className="text-2xl font-bold text-slate-900">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Start Free Trial</h3>
                <p className="text-gray-300 leading-relaxed">Sign up for a free trial and explore all features without any commitment.</p>
              </div>
              <div className="cyber-card hologram-card p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center quantum-field">
                  <span className="text-2xl font-bold text-slate-900">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Scale & Grow</h3>
                <p className="text-gray-300 leading-relaxed">Upgrade when you're ready and scale your usage as your business grows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12 md:p-16 border border-cyan-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 animate-pulse" />
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Choose from <span className="text-cyan-400 font-semibold">20+ micro SaaS solutions</span> that fit your business needs. 
                  Start with a free trial and scale as you grow.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
                    <div className="text-gray-300">AI-Powered Tools</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">50%</div>
                    <div className="text-gray-300">Average Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                    <div className="text-gray-300">Expert Support</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105"
                  >
                    <Zap className="w-6 h-6" />
                    Start Free Trial
                  </Link>
                  <Link
                    to="/pricing"
                    className="inline-flex items-center gap-3 bg-slate-800/50 text-white px-8 py-4 rounded-lg font-semibold border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <Target className="w-6 h-6" />
                    View All Plans
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;