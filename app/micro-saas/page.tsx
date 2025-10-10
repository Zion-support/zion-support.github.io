'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  BarChart3,
  FileText,
  Mail,
  DollarSign,
  Box,
  Target,
  TrendingUp,
  Globe,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Star,
  Users,
  Zap,
  Shield,
  Brain,
  Database,
  Smartphone,
  Settings,
  Calendar,
  MessageCircle,
  CreditCard,
  PieChart,
  Activity,
  BookOpen,
  Camera,
  Headphones,
  Lock,
  Cloud,
  Cpu,
  Wifi,
  Monitor,
  HardDrive,
  Server,
  Code,
  Palette,
  Music,
  Video,
  MapPin,
  Clock,
  Bell,
  Download,
  Upload,
  Share2,
  Heart,
  ThumbsUp,
  Eye,
  Edit3,
  Trash2,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Home,
  User,
  UserPlus,
  LogIn,
  LogOut,
  Settings2,
  HelpCircle,
  Phone,
  MapPin as MapPinIcon,
  Mail as MailIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Star as StarIcon,
  Heart as HeartIcon,
  ThumbsUp as ThumbsUpIcon,
  Eye as EyeIcon,
  Edit3 as Edit3Icon,
  Trash2 as Trash2Icon,
  Plus as PlusIcon,
  Minus as MinusIcon,
  X as XIcon,
  Check as CheckIcon,
  AlertCircle as AlertCircleIcon,
  Info as InfoIcon,
  ExternalLink as ExternalLinkIcon,
  ChevronRight as ChevronRightIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  MoreHorizontal as MoreHorizontalIcon,
  MoreVertical as MoreVerticalIcon,
  Home as HomeIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  LogIn as LogInIcon,
  LogOut as LogOutIcon,
  Settings2 as Settings2Icon,
  HelpCircle as HelpCircleIcon,
  Phone as PhoneIcon
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    // Business Analytics & Intelligence
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics, custom dashboards, and automated reporting for data-driven decisions.',
      icon: BarChart3,
      category: 'Analytics',
      features: [
        'Real-time data visualization',
        'Predictive analytics & forecasting',
        'Custom dashboard builder',
        'Automated report generation',
        'Multi-source data integration',
        'Mobile-responsive design',
        'API integrations',
        'White-label options'
      ],
      price: '$99/month',
      popular: true,
      benefits: [
        'Increase decision speed by 300%',
        'Reduce reporting time by 80%',
        'Improve data accuracy by 95%',
        '24/7 automated insights'
      ],
      useCases: ['E-commerce analytics', 'Marketing performance', 'Financial reporting', 'Operations monitoring'],
      integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'Stripe', 'Shopify', 'MySQL', 'PostgreSQL'],
      freeTrial: '14 days',
      setupTime: '5 minutes'
    },
    {
      id: 2,
      title: 'Advanced Lead Scoring Engine',
      description: 'AI-powered lead qualification system that automatically scores and prioritizes prospects based on behavior, demographics, and engagement.',
      icon: Target,
      category: 'Sales & Marketing',
      features: [
        'Behavioral scoring algorithms',
        'Demographic analysis',
        'Engagement tracking',
        'Lead prioritization',
        'CRM integration',
        'Email automation triggers',
        'Custom scoring models',
        'Real-time updates'
      ],
      price: '$149/month',
      popular: true,
      benefits: [
        'Increase conversion rates by 40%',
        'Reduce sales cycle by 25%',
        'Improve lead quality by 60%',
        'Automate lead nurturing'
      ],
      useCases: ['B2B lead generation', 'E-commerce conversion', 'SaaS onboarding', 'Real estate leads'],
      integrations: ['HubSpot', 'Salesforce', 'Pipedrive', 'Mailchimp', 'Zapier', 'Webhooks'],
      freeTrial: '30 days',
      setupTime: '15 minutes'
    },
    {
      id: 3,
      title: 'Smart Inventory Management',
      description: 'Intelligent inventory tracking with demand forecasting, automated reordering, and waste reduction for retail and manufacturing.',
      icon: Box,
      category: 'Operations',
      features: [
        'Real-time inventory tracking',
        'Demand forecasting AI',
        'Automated reorder points',
        'Waste reduction analytics',
        'Multi-location support',
        'Barcode scanning',
        'Supplier management',
        'Cost optimization'
      ],
      price: '$199/month',
      popular: false,
      benefits: [
        'Reduce inventory costs by 30%',
        'Eliminate stockouts by 90%',
        'Decrease waste by 50%',
        'Improve cash flow'
      ],
      useCases: ['Retail stores', 'Manufacturing', 'E-commerce', 'Restaurants', 'Warehouses'],
      integrations: ['Shopify', 'WooCommerce', 'QuickBooks', 'Xero', 'SAP', 'Oracle'],
      freeTrial: '21 days',
      setupTime: '30 minutes'
    },
    {
      id: 4,
      title: 'AI Content Generator Pro',
      description: 'Advanced content creation tool that generates high-quality articles, social media posts, product descriptions, and marketing copy using AI.',
      icon: FileText,
      category: 'Content & Marketing',
      features: [
        'AI-powered content generation',
        'Multiple content types',
        'SEO optimization',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Multi-language support',
        'Team collaboration'
      ],
      price: '$79/month',
      popular: true,
      benefits: [
        'Save 80% content creation time',
        'Increase engagement by 150%',
        'Improve SEO rankings',
        'Maintain consistent brand voice'
      ],
      useCases: ['Blog management', 'Social media', 'E-commerce', 'Marketing campaigns', 'Email marketing'],
      integrations: ['WordPress', 'Hootsuite', 'Buffer', 'Mailchimp', 'Google Docs', 'Canva'],
      freeTrial: '7 days',
      setupTime: '2 minutes'
    },
    {
      id: 5,
      title: 'Automated Expense Tracker',
      description: 'Smart expense management with receipt scanning, categorization, and automated reporting for individuals and small businesses.',
      icon: DollarSign,
      category: 'Finance',
      features: [
        'Receipt scanning & OCR',
        'Automatic categorization',
        'Expense approval workflows',
        'Tax preparation support',
        'Multi-currency support',
        'Mileage tracking',
        'Budget alerts',
        'Export to accounting software'
      ],
      price: '$29/month',
      popular: false,
      benefits: [
        'Save 5+ hours per week',
        'Reduce expense errors by 95%',
        'Improve tax compliance',
        'Better budget control'
      ],
      useCases: ['Small businesses', 'Freelancers', 'Consultants', 'Sales teams', 'Remote workers'],
      integrations: ['QuickBooks', 'Xero', 'FreshBooks', 'Expensify', 'SAP Concur', 'Bank APIs'],
      freeTrial: '14 days',
      setupTime: '5 minutes'
    },
    {
      id: 6,
      title: 'Social Media Manager AI',
      description: 'Intelligent social media management with content scheduling, engagement automation, and performance analytics across all platforms.',
      icon: Share2,
      category: 'Social Media',
      features: [
        'Multi-platform posting',
        'Content scheduling',
        'Engagement automation',
        'Performance analytics',
        'Hashtag optimization',
        'Competitor analysis',
        'Influencer identification',
        'Crisis management alerts'
      ],
      price: '$89/month',
      popular: true,
      benefits: [
        'Increase engagement by 200%',
        'Save 10+ hours per week',
        'Improve reach by 150%',
        'Better brand consistency'
      ],
      useCases: ['Brand management', 'E-commerce', 'Agencies', 'Influencers', 'Small businesses'],
      integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube', 'Pinterest'],
      freeTrial: '14 days',
      setupTime: '10 minutes'
    },
    {
      id: 7,
      title: 'SEO Optimizer Suite',
      description: 'Comprehensive SEO tool with keyword research, content optimization, technical SEO audits, and rank tracking.',
      icon: TrendingUp,
      category: 'SEO & Marketing',
      features: [
        'Keyword research & analysis',
        'Content optimization suggestions',
        'Technical SEO audits',
        'Rank tracking',
        'Backlink analysis',
        'Competitor research',
        'Local SEO optimization',
        'Performance reporting'
      ],
      price: '$129/month',
      popular: true,
      benefits: [
        'Increase organic traffic by 300%',
        'Improve search rankings',
        'Identify optimization opportunities',
        'Track competitor strategies'
      ],
      useCases: ['Website optimization', 'E-commerce SEO', 'Local businesses', 'Content marketing', 'Agencies'],
      integrations: ['Google Search Console', 'Google Analytics', 'WordPress', 'Shopify', 'WooCommerce'],
      freeTrial: '14 days',
      setupTime: '15 minutes'
    },
    {
      id: 8,
      title: 'Email Marketing Automation',
      description: 'Advanced email marketing platform with AI-powered personalization, automation workflows, and detailed analytics.',
      icon: Mail,
      category: 'Email Marketing',
      features: [
        'AI-powered personalization',
        'Automated email sequences',
        'A/B testing',
        'Advanced segmentation',
        'Behavioral triggers',
        'Template library',
        'Deliverability optimization',
        'Revenue attribution'
      ],
      price: '$69/month',
      popular: false,
      benefits: [
        'Increase open rates by 40%',
        'Boost click-through rates by 60%',
        'Improve conversion rates by 35%',
        'Automate customer journeys'
      ],
      useCases: ['E-commerce', 'SaaS onboarding', 'Newsletter management', 'Lead nurturing', 'Customer retention'],
      integrations: ['Shopify', 'WooCommerce', 'Salesforce', 'HubSpot', 'Zapier', 'Webhooks'],
      freeTrial: '14 days',
      setupTime: '10 minutes'
    },
    {
      id: 9,
      title: 'Project Management AI',
      description: 'Intelligent project management with AI-powered task prioritization, resource allocation, and deadline prediction.',
      icon: Calendar,
      category: 'Project Management',
      features: [
        'AI task prioritization',
        'Resource allocation optimization',
        'Deadline prediction',
        'Risk assessment',
        'Team collaboration tools',
        'Time tracking',
        'Progress reporting',
        'Integration capabilities'
      ],
      price: '$99/month',
      popular: false,
      benefits: [
        'Improve project delivery by 25%',
        'Reduce project overruns by 40%',
        'Optimize resource utilization',
        'Better team coordination'
      ],
      useCases: ['Software development', 'Marketing campaigns', 'Construction', 'Consulting', 'Event planning'],
      integrations: ['Slack', 'Microsoft Teams', 'Jira', 'Asana', 'Trello', 'GitHub'],
      freeTrial: '21 days',
      setupTime: '20 minutes'
    },
    {
      id: 10,
      title: 'Customer Support Chatbot',
      description: 'AI-powered customer support chatbot with natural language processing, ticket routing, and 24/7 availability.',
      icon: MessageCircle,
      category: 'Customer Support',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Ticket routing & escalation',
        'Knowledge base integration',
        'Sentiment analysis',
        'Live chat handoff',
        'Analytics & reporting',
        'Custom branding'
      ],
      price: '$149/month',
      popular: true,
      benefits: [
        'Reduce support costs by 60%',
        'Improve response time by 90%',
        'Increase customer satisfaction',
        '24/7 availability'
      ],
      useCases: ['E-commerce support', 'SaaS customer service', 'Lead qualification', 'FAQ automation', 'Appointment booking'],
      integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'Slack', 'Microsoft Teams', 'Webhooks'],
      freeTrial: '14 days',
      setupTime: '30 minutes'
    },
    {
      id: 11,
      title: 'Financial Planning Assistant',
      description: 'AI-powered financial planning tool for personal and business finance with budgeting, investment tracking, and goal setting.',
      icon: PieChart,
      category: 'Finance',
      features: [
        'Automated budgeting',
        'Investment tracking',
        'Goal setting & tracking',
        'Bill reminders',
        'Tax optimization',
        'Retirement planning',
        'Debt management',
        'Financial forecasting'
      ],
      price: '$49/month',
      popular: false,
      benefits: [
        'Improve financial health',
        'Automate money management',
        'Achieve financial goals faster',
        'Reduce financial stress'
      ],
      useCases: ['Personal finance', 'Small business', 'Financial advisors', 'Retirement planning', 'Debt management'],
      integrations: ['Bank APIs', 'Investment platforms', 'Tax software', 'Accounting tools', 'Mint', 'YNAB'],
      freeTrial: '30 days',
      setupTime: '10 minutes'
    },
    {
      id: 12,
      title: 'HR Management System',
      description: 'Complete HR management solution with employee onboarding, performance tracking, payroll integration, and compliance management.',
      icon: Users,
      category: 'Human Resources',
      features: [
        'Employee onboarding',
        'Performance management',
        'Time & attendance',
        'Payroll integration',
        'Benefits administration',
        'Compliance tracking',
        'Document management',
        'Reporting & analytics'
      ],
      price: '$199/month',
      popular: false,
      benefits: [
        'Streamline HR processes',
        'Improve employee experience',
        'Ensure compliance',
        'Reduce administrative burden'
      ],
      useCases: ['Small businesses', 'Startups', 'Remote teams', 'Growing companies', 'HR agencies'],
      integrations: ['ADP', 'Paychex', 'BambooHR', 'Workday', 'Slack', 'Microsoft 365'],
      freeTrial: '21 days',
      setupTime: '45 minutes'
    }
  ];

  const categories = [
    'All',
    'Analytics',
    'Sales & Marketing',
    'Operations',
    'Content & Marketing',
    'Finance',
    'Social Media',
    'SEO & Marketing',
    'Email Marketing',
    'Project Management',
    'Customer Support',
    'Human Resources'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 9;

  const filteredServices = microSaasServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  const startIndex = (currentPage - 1) * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const currentServices = filteredServices.slice(startIndex, endIndex);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  return (
    <React.Fragment>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of micro SaaS solutions designed to streamline your business operations. From AI-powered analytics to automated marketing tools." />
        <meta name="keywords" content="micro saas, business tools, automation, analytics, marketing, productivity, AI solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, affordable micro SaaS tools designed to streamline your business operations and boost productivity. 
              Choose from our collection of specialized solutions tailored for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                📧 Email Us
              </a>
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
                      placeholder="Search micro SaaS solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
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

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Micro SaaS Solutions' : `${selectedCategory} Solutions`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} solution{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-300 mb-2">
                      {service.freeTrial} free trial • {service.setupTime} setup
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Previous
                </button>
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-cyan-500 text-white'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Micro SaaS Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We can build a custom micro SaaS solution tailored to your specific business needs. 
              Get a personalized solution that integrates seamlessly with your existing workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Discuss Your Needs
              </a>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-300 text-sm mb-2">
                📍 364 E Main St STE 1008, Middletown, DE 19709
              </p>
              <p className="text-gray-300 text-sm">
                ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
              </p>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default MicroSaasPage;