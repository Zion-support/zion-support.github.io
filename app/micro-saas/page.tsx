import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Users, 
  Settings, 
  Brain, 
  Mail, 
  Calendar, 
  Target, 
  TrendingUp, 
  Globe, 
  Smartphone, 
  Monitor, 
  Award, 
  Clock, 
  DollarSign,
  ExternalLink,
  Sparkles,
  Lock,
  RefreshCw,
  Database,
  FileText,
  MessageSquare,
  Search,
  Filter,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  ChevronRight,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Play,
  Pause,
  Stop,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  Save,
  Share2,
  Copy,
  Scissors,
  Paperclip,
  Image,
  Video,
  Music,
  File,
  Folder,
  Archive,
  Tag,
  Flag,
  Bookmark,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Send,
  Phone,
  MapPin,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';
import ResponsiveText from '../components/ResponsiveText';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const MicroSAASPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Micro SAAS Solutions - Zion Tech Group",
    "description": "Comprehensive collection of ready-to-use micro SAAS solutions for businesses of all sizes. From AI-powered analytics to automated workflows.",
    "url": "https://ziontechgroup.com/micro-saas",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "SoftwareApplication",
          "name": "Zion Analytics Pro",
          "description": "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
          "offers": {
            "@type": "Offer",
            "price": "299",
            "priceCurrency": "USD",
            "priceSpecification": {
              "@type": "RecurringPaymentsPriceSpecification",
              "billingDuration": "P1M"
            }
          }
        }
      ]
    }
  };

  const microSAASServices = [
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      description: 'AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.',
      shortDescription: 'AI-powered business intelligence platform',
      price: 'From $299/month',
      priceRange: { min: 299, max: 999 },
      category: 'Analytics & BI',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard builder',
        'Automated report generation',
        'Multi-source data integration',
        'Advanced filtering and segmentation',
        'Export to multiple formats',
        'API access and webhooks',
        'White-label options',
        '24/7 technical support'
      ],
      benefits: [
        'Increase data-driven decision making by 85%',
        'Reduce report generation time by 90%',
        'Improve forecasting accuracy by 60%',
        'Save 20+ hours per week on analytics'
      ],
      useCases: [
        'E-commerce performance tracking',
        'Marketing campaign analysis',
        'Financial forecasting',
        'Customer behavior insights',
        'Operational efficiency monitoring'
      ],
      integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'Shopify', 'Stripe', 'Zapier'],
      freeTrial: '14 days',
      setupTime: '2-4 hours',
      support: '24/7',
      link: '/zion-analytics-pro',
      featured: true,
      popular: true
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Advanced cybersecurity protection with AI-powered threat detection, automated response, and compliance monitoring. Protect your business from evolving threats.',
      shortDescription: 'Advanced cybersecurity protection',
      price: 'From $499/month',
      priceRange: { min: 499, max: 1999 },
      category: 'Security',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      features: [
        'AI-powered threat detection',
        'Real-time security monitoring',
        'Automated incident response',
        'Vulnerability scanning',
        'Compliance reporting (GDPR, HIPAA, SOX)',
        'Multi-factor authentication',
        'Encrypted data storage',
        'Security awareness training',
        'Penetration testing',
        '24/7 security operations center'
      ],
      benefits: [
        'Reduce security incidents by 95%',
        'Achieve 99.9% compliance score',
        'Save $50,000+ annually on security costs',
        'Protect against 99.9% of known threats'
      ],
      useCases: [
        'Small business security',
        'Enterprise threat protection',
        'Compliance management',
        'Data breach prevention',
        'Security audit preparation'
      ],
      integrations: ['Active Directory', 'Office 365', 'AWS', 'Azure', 'Google Workspace', 'Slack'],
      freeTrial: '30 days',
      setupTime: '1-2 days',
      support: '24/7',
      link: '/zion-security-shield',
      featured: true,
      popular: true
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced collaboration features. Store and share files securely.',
      shortDescription: 'Secure cloud storage solution',
      price: 'From $99/month',
      priceRange: { min: 99, max: 499 },
      category: 'Storage & Collaboration',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      features: [
        'End-to-end encryption',
        'Unlimited storage capacity',
        'Real-time collaboration',
        'Version control and history',
        'Advanced sharing permissions',
        'Mobile and desktop sync',
        'API access',
        'White-label branding',
        'Audit logs and compliance',
        '99.9% uptime guarantee'
      ],
      benefits: [
        'Reduce storage costs by 70%',
        'Improve team collaboration by 80%',
        'Ensure 100% data security',
        'Increase productivity by 60%'
      ],
      useCases: [
        'Document management',
        'Team collaboration',
                'File sharing and backup',
        'Compliance storage',
        'Project asset management'
      ],
      integrations: ['Microsoft Office', 'Google Workspace', 'Slack', 'Trello', 'Asana', 'Jira'],
      freeTrial: '14 days',
      setupTime: '1 hour',
      support: '24/7',
      link: '/zion-cloud-vault',
      featured: true,
      popular: true
    },
    {
      id: 'zion-ai-crm-pro',
      name: 'Zion AI CRM Pro',
      description: 'AI-powered customer relationship management with intelligent lead scoring, automated follow-ups, and predictive analytics. Maximize your sales potential.',
      shortDescription: 'AI-powered CRM system',
      price: 'From $199/month',
      priceRange: { min: 199, max: 799 },
      category: 'CRM & Sales',
      icon: <Users className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      features: [
        'AI-powered lead scoring',
        'Automated follow-up sequences',
        'Predictive sales analytics',
        'Contact and deal management',
        'Email and phone integration',
        'Custom pipeline builder',
        'Advanced reporting',
        'Mobile app access',
        'API and webhook support',
        'Team collaboration tools'
      ],
      benefits: [
        'Increase sales conversion by 45%',
        'Reduce lead response time by 80%',
        'Improve forecast accuracy by 70%',
        'Save 15+ hours per week on admin tasks'
      ],
      useCases: [
        'Sales pipeline management',
        'Lead qualification',
        'Customer retention',
        'Sales forecasting',
        'Team performance tracking'
      ],
      integrations: ['Gmail', 'Outlook', 'Slack', 'Zapier', 'Stripe', 'PayPal'],
      freeTrial: '14 days',
      setupTime: '2-3 hours',
      support: '24/7',
      link: '/zion-ai-crm-pro',
      featured: true,
      popular: true
    },
    {
      id: 'zion-ai-marketing-automation-pro',
      name: 'Zion AI Marketing Automation Pro',
      description: 'AI-powered marketing automation with predictive content generation, multi-channel orchestration, and advanced segmentation. Scale your marketing efforts.',
      shortDescription: 'AI-powered marketing automation',
      price: 'From $149/month',
      priceRange: { min: 149, max: 599 },
      category: 'Marketing',
      icon: <Target className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      features: [
        'AI content generation',
        'Multi-channel campaign orchestration',
        'Advanced audience segmentation',
        'Behavioral trigger automation',
        'A/B testing and optimization',
        'Email and SMS marketing',
        'Social media automation',
        'Lead nurturing workflows',
        'ROI tracking and analytics',
        'Personalization engine'
      ],
      benefits: [
        'Increase email open rates by 65%',
        'Reduce marketing costs by 40%',
        'Improve lead quality by 55%',
        'Save 25+ hours per week on campaigns'
      ],
      useCases: [
        'Email marketing campaigns',
        'Lead nurturing sequences',
        'Social media management',
        'Customer retention programs',
        'Product launch campaigns'
      ],
      integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'Mailchimp', 'HubSpot'],
      freeTrial: '14 days',
      setupTime: '3-4 hours',
      support: '24/7',
      link: '/zion-ai-marketing-automation-pro',
      featured: true,
      popular: true
    },
    {
      id: 'zion-ai-project-manager-pro',
      name: 'Zion AI Project Manager Pro',
      description: 'AI-powered project management with intelligent task prioritization, resource allocation, and risk prediction. Streamline your project workflows.',
      shortDescription: 'AI-powered project management',
      price: 'From $99/month',
      priceRange: { min: 99, max: 399 },
      category: 'Project Management',
      icon: <Calendar className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'AI task prioritization',
        'Resource allocation optimization',
        'Risk prediction and mitigation',
        'Gantt charts and timelines',
        'Team collaboration tools',
        'Time tracking and reporting',
        'Budget management',
        'Milestone tracking',
        'Mobile app access',
        'Integration capabilities'
      ],
      benefits: [
        'Complete projects 30% faster',
        'Reduce project overruns by 50%',
        'Improve team productivity by 40%',
        'Save 20+ hours per week on planning'
      ],
      useCases: [
        'Software development projects',
        'Marketing campaign management',
        'Event planning',
        'Construction project tracking',
        'Client project delivery'
      ],
      integrations: ['Slack', 'Microsoft Teams', 'Jira', 'Trello', 'Asana', 'Monday.com'],
      freeTrial: '14 days',
      setupTime: '1-2 hours',
      support: '24/7',
      link: '/zion-ai-project-manager-pro',
      featured: true,
      popular: true
    },
    {
      id: 'zion-ai-accounting-suite',
      name: 'Zion AI Accounting Suite',
      description: 'Comprehensive AI-powered accounting solution with automated bookkeeping, tax preparation, and financial reporting. Simplify your financial management.',
      shortDescription: 'AI-powered accounting solution',
      price: 'From $179/month',
      priceRange: { min: 179, max: 699 },
      category: 'Finance & Accounting',
      icon: <DollarSign className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Automated bookkeeping',
        'AI-powered expense categorization',
        'Tax preparation and filing',
        'Financial reporting and analytics',
        'Invoice generation and tracking',
        'Receipt scanning and OCR',
        'Bank reconciliation',
        'Payroll management',
        'Compliance monitoring',
        'Multi-currency support'
      ],
      benefits: [
        'Reduce accounting errors by 90%',
        'Save 30+ hours per month on bookkeeping',
        'Improve tax compliance by 95%',
        'Reduce accounting costs by 60%'
      ],
      useCases: [
        'Small business accounting',
        'Freelancer financial management',
        'E-commerce bookkeeping',
        'Tax preparation',
        'Financial reporting'
      ],
      integrations: ['QuickBooks', 'Xero', 'Stripe', 'PayPal', 'Bank APIs', 'Tax software'],
      freeTrial: '30 days',
      setupTime: '2-3 hours',
      support: '24/7',
      link: '/zion-ai-accounting-suite',
      featured: true,
      popular: true
    },
    {
      id: 'zion-ai-hr-assistant-pro',
      name: 'Zion AI HR Assistant Pro',
      description: 'AI-powered human resources management with automated recruitment, employee onboarding, and performance tracking. Optimize your HR processes.',
      shortDescription: 'AI-powered HR management',
      price: 'From $129/month',
      priceRange: { min: 129, max: 499 },
      category: 'Human Resources',
      icon: <Users className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      features: [
        'AI-powered resume screening',
        'Automated interview scheduling',
        'Employee onboarding workflows',
        'Performance tracking and reviews',
        'Time and attendance management',
        'Benefits administration',
        'Payroll integration',
        'Employee self-service portal',
        'Compliance reporting',
        'Analytics and insights'
      ],
      benefits: [
        'Reduce hiring time by 50%',
        'Improve candidate quality by 40%',
        'Streamline onboarding by 70%',
        'Save 25+ hours per week on HR tasks'
      ],
      useCases: [
        'Recruitment and hiring',
        'Employee onboarding',
        'Performance management',
        'Time tracking',
        'Benefits administration'
      ],
      integrations: ['LinkedIn', 'Indeed', 'Glassdoor', 'Paychex', 'ADP', 'Workday'],
      freeTrial: '14 days',
      setupTime: '2-3 hours',
      support: '24/7',
      link: '/zion-ai-hr-assistant-pro',
      featured: true,
      popular: true
    },
    {
      id: 'zion-ai-customer-support-pro',
      name: 'Zion AI Customer Support Pro',
      description: 'AI-powered customer support with intelligent chatbots, automated ticket routing, and sentiment analysis. Deliver exceptional customer service.',
      shortDescription: 'AI-powered customer support',
      price: 'From $89/month',
      priceRange: { min: 89, max: 349 },
      category: 'Customer Support',
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-500',
      features: [
        'AI-powered chatbots',
        'Automated ticket routing',
        'Sentiment analysis',
        'Knowledge base management',
        'Multi-channel support (email, chat, phone)',
        'Customer satisfaction tracking',
        'Performance analytics',
        'Integration capabilities',
        'Custom branding',
        '24/7 availability'
      ],
      benefits: [
        'Reduce response time by 80%',
        'Increase customer satisfaction by 45%',
        'Handle 70% more inquiries automatically',
        'Save 30+ hours per week on support'
      ],
      useCases: [
        'Customer service automation',
        'Technical support',
        'Sales inquiries',
        'FAQ handling',
        'Customer feedback collection'
      ],
      integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'Slack', 'Microsoft Teams', 'Salesforce'],
      freeTrial: '14 days',
      setupTime: '1-2 hours',
      support: '24/7',
      link: '/zion-ai-customer-support-pro',
      featured: true,
      popular: true
    },
    {
      id: 'zion-ai-inventory-manager',
      name: 'Zion AI Inventory Manager',
      description: 'Smart inventory management with AI-powered demand forecasting, automated reordering, and real-time tracking. Optimize your inventory levels.',
      shortDescription: 'AI-powered inventory management',
      price: 'From $79/month',
      priceRange: { min: 79, max: 299 },
      category: 'Inventory & Supply Chain',
      icon: <Database className="w-8 h-8" />,
      color: 'from-amber-500 to-yellow-500',
      features: [
        'AI demand forecasting',
        'Automated reorder points',
        'Real-time inventory tracking',
        'Barcode scanning',
        'Multi-location management',
        'Supplier management',
        'Cost tracking and analysis',
        'Reporting and analytics',
        'Mobile app access',
        'API integration'
      ],
      benefits: [
        'Reduce stockouts by 60%',
        'Decrease excess inventory by 40%',
        'Improve cash flow by 35%',
        'Save 20+ hours per week on inventory tasks'
      ],
      useCases: [
        'Retail inventory management',
        'E-commerce stock tracking',
        'Manufacturing materials',
        'Warehouse operations',
        'Multi-channel selling'
      ],
      integrations: ['Shopify', 'WooCommerce', 'Amazon', 'eBay', 'QuickBooks', 'SAP'],
      freeTrial: '14 days',
      setupTime: '2-3 hours',
      support: '24/7',
      link: '/zion-ai-inventory-manager',
      featured: true,
      popular: true
    },
    {
      id: 'zion-ai-email-optimizer',
      name: 'Zion AI Email Optimizer',
      description: 'AI-powered email marketing optimization with send time prediction, subject line generation, and performance analytics. Maximize your email ROI.',
      shortDescription: 'AI-powered email optimization',
      price: 'From $59/month',
      priceRange: { min: 59, max: 199 },
      category: 'Email Marketing',
      icon: <Mail className="w-8 h-8" />,
      color: 'from-rose-500 to-pink-500',
      features: [
        'AI subject line generation',
        'Send time optimization',
        'Content personalization',
        'A/B testing automation',
        'Performance analytics',
        'List segmentation',
        'Deliverability monitoring',
        'Template library',
        'Integration capabilities',
        'Compliance tools'
      ],
      benefits: [
        'Increase open rates by 55%',
        'Improve click-through rates by 40%',
        'Reduce unsubscribe rates by 30%',
        'Save 15+ hours per week on email campaigns'
      ],
      useCases: [
        'Newsletter campaigns',
        'Product promotions',
        'Customer onboarding',
        'Abandoned cart recovery',
        'Event marketing'
      ],
      integrations: ['Mailchimp', 'Constant Contact', 'AWeber', 'ConvertKit', 'HubSpot', 'Salesforce'],
      freeTrial: '14 days',
      setupTime: '1 hour',
      support: '24/7',
      link: '/zion-ai-email-optimizer',
      featured: true,
      popular: true
    },
    {
      id: 'zion-ai-seo-optimizer',
      name: 'Zion AI SEO Optimizer',
      description: 'AI-powered SEO optimization with keyword research, content analysis, and ranking tracking. Boost your search engine visibility.',
      shortDescription: 'AI-powered SEO optimization',
      price: 'From $69/month',
      priceRange: { min: 69, max: 249 },
      category: 'SEO & Marketing',
      icon: <Search className="w-8 h-8" />,
      color: 'from-emerald-500 to-green-500',
      features: [
        'AI keyword research',
        'Content optimization suggestions',
        'Ranking tracking',
        'Competitor analysis',
        'Technical SEO audits',
        'Link building opportunities',
        'Local SEO optimization',
        'Performance reporting',
        'Integration capabilities',
        'White-label options'
      ],
      benefits: [
        'Increase organic traffic by 65%',
        'Improve keyword rankings by 50%',
        'Reduce SEO costs by 40%',
        'Save 20+ hours per week on SEO tasks'
      ],
      useCases: [
        'Website optimization',
        'Content marketing',
        'Local business SEO',
        'E-commerce SEO',
        'Blog optimization'
      ],
      integrations: ['Google Analytics', 'Google Search Console', 'SEMrush', 'Ahrefs', 'Moz', 'Screaming Frog'],
      freeTrial: '14 days',
      setupTime: '1-2 hours',
      support: '24/7',
      link: '/zion-ai-seo-optimizer',
      featured: true,
      popular: true
    }
  ];

  const categories = [
    { name: 'All', count: microSAASServices.length, color: 'from-gray-500 to-gray-600' },
    { name: 'Analytics & BI', count: microSAASServices.filter(s => s.category === 'Analytics & BI').length, color: 'from-blue-500 to-cyan-500' },
    { name: 'Security', count: microSAASServices.filter(s => s.category === 'Security').length, color: 'from-red-500 to-orange-500' },
    { name: 'Storage & Collaboration', count: microSAASServices.filter(s => s.category === 'Storage & Collaboration').length, color: 'from-purple-500 to-pink-500' },
    { name: 'CRM & Sales', count: microSAASServices.filter(s => s.category === 'CRM & Sales').length, color: 'from-green-500 to-emerald-500' },
    { name: 'Marketing', count: microSAASServices.filter(s => s.category === 'Marketing').length, color: 'from-pink-500 to-rose-500' },
    { name: 'Project Management', count: microSAASServices.filter(s => s.category === 'Project Management').length, color: 'from-indigo-500 to-purple-500' },
    { name: 'Finance & Accounting', count: microSAASServices.filter(s => s.category === 'Finance & Accounting').length, color: 'from-yellow-500 to-orange-500' },
    { name: 'Human Resources', count: microSAASServices.filter(s => s.category === 'Human Resources').length, color: 'from-teal-500 to-cyan-500' },
    { name: 'Customer Support', count: microSAASServices.filter(s => s.category === 'Customer Support').length, color: 'from-violet-500 to-purple-500' },
    { name: 'Inventory & Supply Chain', count: microSAASServices.filter(s => s.category === 'Inventory & Supply Chain').length, color: 'from-amber-500 to-yellow-500' },
    { name: 'Email Marketing', count: microSAASServices.filter(s => s.category === 'Email Marketing').length, color: 'from-rose-500 to-pink-500' },
    { name: 'SEO & Marketing', count: microSAASServices.filter(s => s.category === 'SEO & Marketing').length, color: 'from-emerald-500 to-green-500' }
  ];

  const stats = [
    { number: '60+', label: 'Micro SAAS Solutions', icon: <Zap className="w-6 h-6" /> },
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Award className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Business Software"
        description="Comprehensive collection of 60+ micro SAAS solutions for businesses. AI-powered analytics, security, CRM, marketing automation, and more. Start your free trial today."
        keywords="micro SAAS, business software, AI solutions, analytics, CRM, marketing automation, project management, accounting, HR, customer support"
        canonical="https://ziontechgroup.com/micro-saas"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">60+ Ready-to-Use Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Transform your business with our comprehensive collection of AI-powered micro SAAS solutions. 
            From analytics to security, we have everything you need to scale and succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category.name === 'All'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our most popular and powerful micro SAAS solutions, trusted by thousands of businesses worldwide.
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {microSAASServices.filter(service => service.featured).map((service, index) => (
              <FuturisticCard
                key={service.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <Link to={service.link} className="block">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-cyan-400 font-medium">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>Category</span>
                      <span className="px-2 py-1 bg-white/10 rounded-full">{service.category}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>Free Trial</span>
                      <span className="text-green-400">{service.freeTrial}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>Setup Time</span>
                      <span>{service.setupTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* All Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete collection of micro SAAS solutions organized by category.
            </p>
          </div>
          
          <ResponsiveGrid className="gap-6">
            {microSAASServices.map((service, index) => (
              <FuturisticCard
                key={service.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <Link to={service.link} className="block">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-cyan-400 font-medium text-sm">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>Category</span>
                      <span className="px-2 py-1 bg-white/10 rounded-full">{service.category}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>Free Trial</span>
                      <span className="text-green-400">{service.freeTrial}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
            Start your free trial today and see the difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center group"
            >
              View Pricing
              <DollarSign className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;