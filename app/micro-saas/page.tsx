'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp, 
  Shield, 
  Cloud, 
  BarChart3, 
  Target, 
  Rocket,
  Zap,
  Brain,
  Code,
  Mail,
  Search,
  Calendar,
  FileText,
  Smartphone,
  Globe,
  Settings,
  Lock,
  Database,
  Cpu,
  Sparkles,
  Clock,
  DollarSign,
  Award,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  originalPrice?: string;
  users: string;
  popular: boolean;
  category: string;
  trialDays: number;
  rating: number;
  reviews: number;
  launchDate: string;
  integrations: string[];
  useCases: string[];
  benefits: string[];
  pricingTiers: {
    name: string;
    price: string;
    features: string[];
    popular?: boolean;
  }[];
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      icon: BarChart3,
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence platform with AI-powered insights, real-time analytics, and predictive forecasting for data-driven decision making.',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard builder',
        'Automated report generation',
        'Multi-source data integration',
        'Mobile app access',
        'Team collaboration tools',
        'API integration',
        'Advanced filtering & search',
        'Export to multiple formats'
      ],
      price: '$199/month',
      originalPrice: '$299/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Analytics',
      trialDays: 14,
      rating: 4.9,
      reviews: 1247,
      launchDate: '2024-01-15',
      integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'Stripe', 'Shopify', 'Zapier'],
      useCases: ['E-commerce analytics', 'Sales performance tracking', 'Marketing ROI analysis', 'Financial reporting'],
      benefits: ['Increase data accuracy by 40%', 'Reduce reporting time by 60%', 'Improve decision speed by 3x'],
      pricingTiers: [
        { name: 'Starter', price: '$99/month', features: ['Up to 10 users', 'Basic analytics', '5 data sources'] },
        { name: 'Professional', price: '$199/month', features: ['Up to 50 users', 'Advanced AI insights', 'Unlimited data sources', 'Custom dashboards'], popular: true },
        { name: 'Enterprise', price: '$399/month', features: ['Unlimited users', 'White-label solution', 'Priority support', 'Custom integrations'] }
      ]
    },
    {
      id: '2',
      icon: Users,
      title: 'AI-Powered CRM Suite',
      description: 'Intelligent customer relationship management with AI lead scoring, automated follow-ups, and personalized customer interactions.',
      features: [
        'AI lead scoring & qualification',
        'Automated email sequences',
        'Sales pipeline management',
        'Contact & company profiles',
        'Deal tracking & forecasting',
        'Email integration',
        'Calendar synchronization',
        'Task & activity management',
        'Custom fields & workflows',
        'Mobile CRM app'
      ],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'CRM',
      trialDays: 21,
      rating: 4.8,
      reviews: 892,
      launchDate: '2023-11-20',
      integrations: ['Gmail', 'Outlook', 'Slack', 'Zoom', 'LinkedIn', 'WhatsApp'],
      useCases: ['Sales team management', 'Lead nurturing', 'Customer retention', 'Pipeline optimization'],
      benefits: ['Increase sales by 35%', 'Reduce follow-up time by 50%', 'Improve lead conversion by 45%'],
      pricingTiers: [
        { name: 'Starter', price: '$79/month', features: ['Up to 25 users', 'Basic CRM features', 'Email integration'] },
        { name: 'Professional', price: '$149/month', features: ['Up to 100 users', 'AI features', 'Advanced automation', 'Custom workflows'] },
        { name: 'Enterprise', price: '$299/month', features: ['Unlimited users', 'Advanced AI', 'Custom integrations', 'Dedicated support'] }
      ]
    },
    {
      id: '3',
      icon: Shield,
      title: 'Cybersecurity Monitoring Suite',
      description: 'Comprehensive security monitoring and threat detection platform with AI-powered analysis and automated incident response.',
      features: [
        '24/7 threat monitoring',
        'AI-powered threat detection',
        'Vulnerability scanning',
        'Incident response automation',
        'Compliance reporting',
        'Security dashboard',
        'Alert management',
        'Log analysis',
        'Network monitoring',
        'Mobile security'
      ],
      price: '$299/month',
      users: 'Up to 200 users',
      popular: true,
      category: 'Security',
      trialDays: 30,
      rating: 4.9,
      reviews: 567,
      launchDate: '2023-09-10',
      integrations: ['SIEM systems', 'Firewalls', 'Antivirus', 'Cloud platforms', 'Identity providers'],
      useCases: ['Threat detection', 'Compliance monitoring', 'Incident response', 'Security auditing'],
      benefits: ['Reduce security incidents by 70%', 'Improve response time by 80%', 'Ensure compliance 100%'],
      pricingTiers: [
        { name: 'Basic', price: '$199/month', features: ['Up to 50 users', 'Basic monitoring', 'Email alerts'] },
        { name: 'Professional', price: '$299/month', features: ['Up to 200 users', 'AI detection', 'Automated response', 'Compliance reports'], popular: true },
        { name: 'Enterprise', price: '$599/month', features: ['Unlimited users', 'Advanced AI', 'Custom integrations', 'Dedicated SOC team'] }
      ]
    },
    {
      id: '4',
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments with intelligent scaling.',
      features: [
        'Multi-cloud management',
        'Cost optimization',
        'Auto-scaling',
        'Resource monitoring',
        'Backup management',
        'Security compliance',
        'Performance analytics',
        'Budget alerts',
        'Resource scheduling',
        'Disaster recovery'
      ],
      price: '$399/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Infrastructure',
      trialDays: 14,
      rating: 4.7,
      reviews: 423,
      launchDate: '2024-02-01',
      integrations: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
      useCases: ['Cost optimization', 'Resource management', 'Disaster recovery', 'Performance monitoring'],
      benefits: ['Reduce cloud costs by 30%', 'Improve uptime by 99.9%', 'Automate 80% of tasks'],
      pricingTiers: [
        { name: 'Starter', price: '$199/month', features: ['Single cloud', 'Basic monitoring', 'Cost tracking'] },
        { name: 'Professional', price: '$399/month', features: ['Multi-cloud', 'Auto-scaling', 'Advanced analytics', 'Backup management'] },
        { name: 'Enterprise', price: '$799/month', features: ['Advanced AI', 'Custom policies', 'Dedicated support', 'SLA guarantees'] }
      ]
    },
    {
      id: '5',
      icon: Mail,
      title: 'AI Email Marketing Automation',
      description: 'Intelligent email marketing platform with AI optimization, personalization, and advanced analytics for maximum engagement.',
      features: [
        'AI-powered personalization',
        'Automated email sequences',
        'A/B testing',
        'Advanced segmentation',
        'Behavioral triggers',
        'Email templates',
        'Analytics & reporting',
        'List management',
        'Deliverability optimization',
        'Mobile optimization'
      ],
      price: '$79/month',
      users: 'Up to 25,000 contacts',
      popular: true,
      category: 'Marketing',
      trialDays: 14,
      rating: 4.8,
      reviews: 1156,
      launchDate: '2023-12-05',
      integrations: ['Shopify', 'WooCommerce', 'Salesforce', 'HubSpot', 'Zapier', 'Facebook'],
      useCases: ['Email campaigns', 'Lead nurturing', 'Customer retention', 'Sales automation'],
      benefits: ['Increase open rates by 40%', 'Boost click-through by 60%', 'Reduce unsubscribe by 30%'],
      pricingTiers: [
        { name: 'Starter', price: '$39/month', features: ['Up to 5,000 contacts', 'Basic automation', 'Email templates'] },
        { name: 'Professional', price: '$79/month', features: ['Up to 25,000 contacts', 'AI personalization', 'Advanced analytics', 'A/B testing'], popular: true },
        { name: 'Enterprise', price: '$199/month', features: ['Unlimited contacts', 'Advanced AI', 'Custom integrations', 'Dedicated support'] }
      ]
    },
    {
      id: '6',
      icon: Brain,
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot solution for 24/7 customer support with natural language processing and seamless human handoff.',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Knowledge base integration',
        'Human handoff',
        'Sentiment analysis',
        'Custom training',
        'Analytics dashboard',
        'API integration',
        'Multi-language support',
        'Voice & text support'
      ],
      price: '$129/month',
      users: 'Unlimited conversations',
      popular: false,
      category: 'Support',
      trialDays: 14,
      rating: 4.7,
      reviews: 743,
      launchDate: '2023-10-15',
      integrations: ['Slack', 'Microsoft Teams', 'WhatsApp', 'Facebook', 'Website', 'Mobile apps'],
      useCases: ['Customer support', 'Lead qualification', 'FAQ automation', 'Order tracking'],
      benefits: ['Reduce support costs by 50%', 'Improve response time by 90%', 'Increase satisfaction by 35%'],
      pricingTiers: [
        { name: 'Starter', price: '$79/month', features: ['Up to 1,000 conversations', 'Basic chatbot', 'Email support'] },
        { name: 'Professional', price: '$129/month', features: ['Unlimited conversations', 'Advanced AI', 'Multi-channel', 'Analytics'], popular: true },
        { name: 'Enterprise', price: '$299/month', features: ['Custom training', 'Advanced integrations', 'Dedicated support', 'SLA guarantees'] }
      ]
    },
    {
      id: '7',
      icon: Code,
      title: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered code completion, debugging, and optimization for multiple programming languages with intelligent suggestions.',
      features: [
        'Multi-language support',
        'Intelligent code completion',
        'Bug detection & fixing',
        'Code optimization',
        'Documentation generation',
        'Refactoring suggestions',
        'Security analysis',
        'Performance optimization',
        'Code review',
        'Team collaboration'
      ],
      price: '$39/month',
      users: 'Up to 10 developers',
      popular: true,
      category: 'Development',
      trialDays: 30,
      rating: 4.9,
      reviews: 2156,
      launchDate: '2023-08-20',
      integrations: ['VS Code', 'IntelliJ', 'Sublime Text', 'Vim', 'GitHub', 'GitLab'],
      useCases: ['Code development', 'Bug fixing', 'Code review', 'Documentation'],
      benefits: ['Increase coding speed by 40%', 'Reduce bugs by 60%', 'Improve code quality by 50%'],
      pricingTiers: [
        { name: 'Individual', price: '$19/month', features: ['1 developer', 'Basic AI features', 'Popular languages'] },
        { name: 'Team', price: '$39/month', features: ['Up to 10 developers', 'Advanced AI', 'All languages', 'Team features'], popular: true },
        { name: 'Enterprise', price: '$99/month', features: ['Unlimited developers', 'Custom models', 'Advanced security', 'Dedicated support'] }
      ]
    },
    {
      id: '8',
      icon: Search,
      title: 'AI SEO Optimizer Suite',
      description: 'Comprehensive SEO analysis and optimization platform with AI-powered keyword research and content suggestions.',
      features: [
        'AI keyword research',
        'Content optimization',
        'Technical SEO audit',
        'Ranking tracking',
        'Competitor analysis',
        'Link building tools',
        'Local SEO optimization',
        'Schema markup',
        'Site speed analysis',
        'Mobile optimization'
      ],
      price: '$89/month',
      users: 'Up to 5 websites',
      popular: false,
      category: 'SEO',
      trialDays: 14,
      rating: 4.6,
      reviews: 892,
      launchDate: '2024-01-30',
      integrations: ['Google Analytics', 'Search Console', 'WordPress', 'Shopify', 'Wix', 'Squarespace'],
      useCases: ['Website optimization', 'Content marketing', 'Local SEO', 'E-commerce SEO'],
      benefits: ['Increase organic traffic by 50%', 'Improve rankings by 40%', 'Boost conversions by 25%'],
      pricingTiers: [
        { name: 'Starter', price: '$49/month', features: ['1 website', 'Basic SEO tools', 'Keyword research'] },
        { name: 'Professional', price: '$89/month', features: ['Up to 5 websites', 'AI optimization', 'Advanced analytics', 'Competitor analysis'] },
        { name: 'Enterprise', price: '$199/month', features: ['Unlimited websites', 'Custom reports', 'White-label', 'Dedicated support'] }
      ]
    },
    {
      id: '9',
      icon: BarChart3,
      title: 'AI Invoice Generator Pro',
      description: 'Automated invoice creation and payment tracking with AI-powered insights and financial reporting capabilities.',
      features: [
        'Automated invoicing',
        'Payment tracking',
        'Financial reporting',
        'Tax calculations',
        'Client portal',
        'Recurring billing',
        'Multi-currency support',
        'Expense tracking',
        'Time tracking',
        'Mobile app'
      ],
      price: '$49/month',
      users: 'Up to 20 users',
      popular: true,
      category: 'Finance',
      trialDays: 14,
      rating: 4.7,
      reviews: 634,
      launchDate: '2023-11-10',
      integrations: ['QuickBooks', 'Xero', 'Stripe', 'PayPal', 'Banking APIs', 'Accounting software'],
      useCases: ['Invoice management', 'Payment tracking', 'Financial reporting', 'Expense management'],
      benefits: ['Reduce invoicing time by 70%', 'Improve payment speed by 40%', 'Increase accuracy by 95%'],
      pricingTiers: [
        { name: 'Solo', price: '$29/month', features: ['1 user', 'Basic invoicing', 'Payment tracking'] },
        { name: 'Professional', price: '$49/month', features: ['Up to 20 users', 'Advanced features', 'Financial reports', 'Multi-currency'], popular: true },
        { name: 'Business', price: '$99/month', features: ['Unlimited users', 'Custom branding', 'Advanced integrations', 'Dedicated support'] }
      ]
    },
    {
      id: '10',
      icon: Calendar,
      title: 'AI Smart Scheduler',
      description: 'Intelligent scheduling platform with calendar optimization, meeting coordination, and time management features.',
      features: [
        'Smart scheduling',
        'Calendar optimization',
        'Meeting coordination',
        'Time blocking',
        'Availability sharing',
        'Automated reminders',
        'Time zone handling',
        'Recurring meetings',
        'Integration APIs',
        'Mobile app'
      ],
      price: '$29/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Productivity',
      trialDays: 14,
      rating: 4.5,
      reviews: 456,
      launchDate: '2024-03-01',
      integrations: ['Google Calendar', 'Outlook', 'Zoom', 'Teams', 'Slack', 'Calendly'],
      useCases: ['Meeting scheduling', 'Time management', 'Team coordination', 'Client booking'],
      benefits: ['Reduce scheduling time by 60%', 'Eliminate double bookings', 'Improve meeting efficiency by 40%'],
      pricingTiers: [
        { name: 'Personal', price: '$19/month', features: ['1 user', 'Basic scheduling', 'Calendar sync'] },
        { name: 'Team', price: '$29/month', features: ['Up to 50 users', 'Advanced features', 'Team coordination', 'Analytics'] },
        { name: 'Enterprise', price: '$59/month', features: ['Unlimited users', 'Custom features', 'Advanced integrations', 'Priority support'] }
      ]
    }
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Support', 'Development', 'SEO', 'Finance', 'Productivity'];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { icon: Users, value: '50,000+', label: 'Active Users', description: 'Growing community worldwide' },
    { icon: TrendingUp, value: '99.9%', label: 'Uptime', description: 'Reliable service guarantee' },
    { icon: Star, value: '4.8/5', label: 'Rating', description: 'Highly rated by customers' },
    { icon: Clock, value: '24/7', label: 'Support', description: 'Always here to help' }
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

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions - focused, affordable AI and IT tools designed for specific business needs. 50+ ready-to-use applications with free trials." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, CRM, analytics, security monitoring, cloud management, productivity tools" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Focused AI and IT tools for specific business needs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Focused, affordable AI and IT tools designed for specific business needs. 
              Quick deployment, scalable, and cost-effective solutions for growing businesses.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-cyan-400 text-sm font-medium">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View All Products
              </button>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SaaS products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-gray-800">
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
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Micro SaaS Products' : `${selectedCategory} Products`}
              </h2>
              <span className="text-gray-300">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group ${
                  product.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700'
                }`}>
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <product.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-cyan-400">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <div className="text-gray-400 text-sm">{product.users}</div>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400 ml-2">{product.rating} ({product.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 5).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                      {product.features.length > 5 && (
                        <li className="text-gray-400 text-sm">
                          +{product.features.length - 5} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Integrations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.integrations.slice(0, 4).map((integration, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                          {integration}
                        </span>
                      ))}
                      {product.integrations.length > 4 && (
                        <span className="px-2 py-1 bg-slate-700 text-gray-400 text-xs rounded">
                          +{product.integrations.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      product.popular
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 hover:from-cyan-300 hover:to-purple-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                    }`}>
                      Start {product.trialDays}-Day Free Trial
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-200 bg-slate-800 text-white hover:bg-slate-700 border border-slate-600">
                      View Details
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
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Benefits of Micro SaaS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;