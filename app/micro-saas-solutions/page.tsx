import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  DocumentMagnifyingGlassIcon,
  CalculatorIcon,
  ClipboardDocumentListIcon,
  ShoppingCartIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  SignalIcon,
  CogIcon,
  BoltIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  WifiIcon,
  TruckIcon,
  BuildingOfficeIcon,
  HomeIcon,
  CarIcon,
  HeartIcon,
  CreditCardIcon,
  BanknotesIcon,
  DocumentCheckIcon,
  PresentationChartLineIcon,
  UserPlusIcon,
  UserMinusIcon,
  CalendarDaysIcon,
  EyeIcon,
  CommandLineIcon,
  DatabaseIcon,
  BeakerIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  LockClosedIcon,
  ShieldExclamationIcon,
  DocumentMagnifyingGlassIcon as DocSearch,
  SparklesIcon,
  MicrophoneIcon,
  VideoCameraIcon,
  GlobeAmericasIcon,
  CpuIcon,
  ChatBubbleLeftRightIcon as Chat,
  DocumentMagnifyingGlassIcon as DocMag,
  SparklesIcon as Sparkle,
  BeakerIcon as Beaker,
  LockClosedIcon as Lock,
  EyeIcon as Eye,
  CommandLineIcon as Terminal,
  DatabaseIcon as DB,
  GlobeAltIcon as Globe,
  SignalIcon as Signal,
  CogIcon as Settings,
  BoltIcon as Lightning,
  LightBulbIcon as Bulb,
  PuzzlePieceIcon as Puzzle,
  WifiIcon as Wifi,
  TruckIcon as Truck,
  BuildingOfficeIcon as Building,
  HomeIcon as Home,
  CarIcon as Car,
  HeartIcon as Heart,
  CreditCardIcon as CreditCard,
  BanknotesIcon as Banknotes,
  DocumentCheckIcon as DocCheck,
  PresentationChartLineIcon as ChartLine,
  UserPlusIcon as UserPlus,
  UserMinusIcon as UserMinus,
  CalendarDaysIcon as Calendar,
  MapPinIcon as MapPin
} from '@heroicons/react/24/outline';

const MicroSaaSSolutionsPage: React.FC = () => {
  const microSaaSSolutions = [
    {
      icon: ChartBarIcon,
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence dashboard with AI-powered insights, real-time data visualization, and predictive analytics for data-driven decision making.',
      price: '$299/month',
      features: [
        'Real-time Data Visualization',
        'AI-Powered Insights & Predictions',
        'Custom Report Generation',
        'API Integration & Data Connectors',
        'White-label Branding Options',
        'Multi-user Access & Permissions',
        'Automated Alerts & Notifications',
        'Export to PDF/Excel/CSV'
      ],
      benefits: [
        'Increase ROI by 40% through data insights',
        'Reduce decision-making time by 60%',
        'Automated reporting saves 20 hours/week',
        '24/7 real-time monitoring',
        'Customizable dashboards for each user',
        'Predictive analytics for better planning'
      ],
      useCases: [
        'Sales Performance Tracking',
        'Marketing Campaign Analytics',
        'Financial Reporting',
        'Customer Behavior Analysis',
        'Operational Metrics',
        'KPI Monitoring'
      ],
      category: 'Analytics & BI',
      link: '/ai-analytics-dashboard-pro',
      trial: '14-day free trial',
      setup: 'Setup in 24 hours'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'AI Customer Support Bot',
      description: 'Intelligent customer support chatbot with natural language processing, multi-language support, and seamless human handoff for enhanced customer experience.',
      price: '$199/month',
      features: [
        'Natural Language Processing (NLP)',
        'Multi-language Support (50+ languages)',
        'Seamless Human Handoff',
        'Knowledge Base Integration',
        'Conversation Analytics',
        'Custom Bot Personality',
        'API Integration',
        'Mobile App Support'
      ],
      benefits: [
        'Reduce support costs by 50%',
        '24/7 customer availability',
        'Instant response to common queries',
        'Improve customer satisfaction by 35%',
        'Reduce support ticket volume by 60%',
        'Multi-language support for global reach'
      ],
      useCases: [
        'Customer Service Automation',
        'Lead Qualification',
        'FAQ Handling',
        'Order Status Inquiries',
        'Technical Support',
        'Appointment Scheduling'
      ],
      category: 'Customer Service',
      link: '/ai-customer-support-bot',
      trial: '30-day free trial',
      setup: 'Setup in 48 hours'
    },
    {
      icon: DocumentMagnifyingGlassIcon,
      title: 'AI Content Moderation Suite',
      description: 'Automated content moderation system using AI to detect and filter inappropriate content across multiple platforms with high accuracy and real-time processing.',
      price: '$399/month',
      features: [
        'Image Recognition & Classification',
        'Text Analysis & Sentiment Detection',
        'Video Content Processing',
        'Real-time Content Filtering',
        'Custom Rule Configuration',
        'Bulk Content Processing',
        'API Integration',
        'Detailed Analytics & Reports'
      ],
      benefits: [
        '99.9% accuracy in content detection',
        'Real-time processing capabilities',
        'Reduce manual moderation by 80%',
        'Compliance with platform guidelines',
        'Customizable filtering rules',
        'Scalable for high-volume content'
      ],
      useCases: [
        'Social Media Moderation',
        'E-commerce Product Reviews',
        'User-Generated Content',
        'Forum & Community Moderation',
        'Educational Content Filtering',
        'Brand Safety Protection'
      ],
      category: 'Content Management',
      link: '/ai-content-moderation-pro',
      trial: '14-day free trial',
      setup: 'Setup in 72 hours'
    },
    {
      icon: CalculatorIcon,
      title: 'AI Accounting Assistant',
      description: 'Smart accounting automation tool that handles invoicing, expense tracking, tax calculations, and financial reporting with AI-powered insights.',
      price: '$149/month',
      features: [
        'Automated Invoice Generation',
        'Expense Tracking & Categorization',
        'Tax Calculation & Filing',
        'Financial Report Generation',
        'Bank Account Integration',
        'Receipt Scanning & OCR',
        'Multi-currency Support',
        'Compliance Monitoring'
      ],
      benefits: [
        'Save 20 hours per week on accounting',
        'Reduce accounting errors by 95%',
        'Automated tax compliance',
        'Real-time financial insights',
        'Streamlined expense management',
        'Professional invoice generation'
      ],
      useCases: [
        'Small Business Accounting',
        'Freelancer Financial Management',
        'Expense Tracking',
        'Tax Preparation',
        'Financial Reporting',
        'Invoice Management'
      ],
      category: 'Finance & Accounting',
      link: '/ai-accounting-assistant',
      trial: '30-day free trial',
      setup: 'Setup in 24 hours'
    },
    {
      icon: ClipboardDocumentListIcon,
      title: 'AI Project Management Pro',
      description: 'Intelligent project management platform with AI-powered task prioritization, resource allocation, and progress tracking for improved team productivity.',
      price: '$249/month',
      features: [
        'AI Task Prioritization',
        'Resource Optimization',
        'Progress Tracking & Analytics',
        'Team Collaboration Tools',
        'Risk Assessment & Alerts',
        'Time Tracking & Reporting',
        'Integration with Popular Tools',
        'Custom Workflow Automation'
      ],
      benefits: [
        '30% faster project delivery',
        'Better resource utilization',
        'Proactive risk management',
        'Improved team productivity',
        'Automated progress reporting',
        'Data-driven decision making'
      ],
      useCases: [
        'Software Development Projects',
        'Marketing Campaign Management',
        'Event Planning',
        'Construction Project Tracking',
        'Client Project Management',
        'Team Task Coordination'
      ],
      category: 'Project Management',
      link: '/ai-project-management-pro',
      trial: '21-day free trial',
      setup: 'Setup in 48 hours'
    },
    {
      icon: ShoppingCartIcon,
      title: 'AI E-commerce Optimizer',
      description: 'Smart e-commerce platform with AI-powered product recommendations, dynamic pricing, and customer behavior analysis to maximize sales and revenue.',
      price: '$349/month',
      features: [
        'AI Product Recommendations',
        'Dynamic Pricing Optimization',
        'Customer Behavior Analytics',
        'Inventory Management',
        'A/B Testing Framework',
        'Personalized Shopping Experience',
        'Cart Abandonment Recovery',
        'Sales Performance Analytics'
      ],
      benefits: [
        'Increase sales by 35%',
        'Reduce cart abandonment by 40%',
        'Optimize pricing strategy',
        'Improve customer experience',
        'Better inventory management',
        'Data-driven marketing decisions'
      ],
      useCases: [
        'Online Retail Stores',
        'Marketplace Optimization',
        'Subscription Services',
        'Digital Product Sales',
        'B2B E-commerce',
        'Multi-vendor Platforms'
      ],
      category: 'E-commerce',
      link: '/ai-ecommerce-optimizer',
      trial: '14-day free trial',
      setup: 'Setup in 72 hours'
    }
  ];

  const categories = [
    { name: 'Analytics & BI', count: 1, color: 'purple' },
    { name: 'Customer Service', count: 1, color: 'blue' },
    { name: 'Content Management', count: 1, color: 'green' },
    { name: 'Finance & Accounting', count: 1, color: 'yellow' },
    { name: 'Project Management', count: 1, color: 'pink' },
    { name: 'E-commerce', count: 1, color: 'indigo' }
  ];

  const stats = [
    { number: '6', label: 'Ready-to-Use Solutions' },
    { number: '24h', label: 'Average Setup Time' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Included' }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '1 Micro SaaS Solution',
        'Basic Support',
        'Standard Features',
        'Email Support',
        'Monthly Updates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Ideal for growing businesses',
      features: [
        '3 Micro SaaS Solutions',
        'Priority Support',
        'Advanced Features',
        'Phone & Email Support',
        'Weekly Updates',
        'Custom Integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599/month',
      description: 'For large organizations',
      features: [
        'Unlimited Solutions',
        'Dedicated Support',
        'All Features',
        '24/7 Phone Support',
        'Daily Updates',
        'Custom Development',
        'White-label Options'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Applications</title>
        <meta name="description" content="Innovative micro SaaS solutions including AI analytics, customer support bots, content moderation, accounting automation, project management, and e-commerce optimization." />
        <meta name="keywords" content="micro SaaS, business applications, AI tools, automation, analytics, customer support, content moderation, accounting, project management, e-commerce" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Ready-to-use micro SaaS solutions that solve specific business challenges with quick deployment and proven results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Ready-to-use micro SaaS applications designed to solve specific business challenges 
                with quick deployment, competitive pricing, and proven results.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Micro SaaS Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Micro SaaS Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Innovative micro SaaS applications that solve specific business problems with 
                quick setup, competitive pricing, and measurable results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {microSaaSSolutions.map((solution, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-400">{solution.price}</div>
                      <div className="text-sm text-gray-400">{solution.category}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {solution.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <ArrowRightIcon className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <span>{solution.trial}</span>
                      <span>{solution.setup}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link 
                      to={solution.link} 
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                    <Link 
                      to="/contact" 
                      className="border border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include setup, training, and ongoing support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-slate-800 p-8 rounded-xl border ${tier.popular ? 'border-purple-500' : 'border-slate-700'} relative`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-purple-400 mb-2">{tier.price}</div>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                      tier.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                        : 'border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Solution Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SaaS solutions are organized by category to help you find the perfect tool for your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold text-xl">{category.count}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-400 text-sm">{category.count} solution{category.count !== 1 ? 's' : ''}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver ready-to-use solutions that solve real business problems with quick deployment, 
                competitive pricing, and ongoing support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <BoltIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Quick Deployment</h3>
                <p className="text-gray-300">Get up and running in 24-72 hours with our streamlined setup process.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <CurrencyDollarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Competitive Pricing</h3>
                <p className="text-gray-300">Affordable monthly pricing with no hidden fees or long-term contracts.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
                <p className="text-gray-300">Measurable improvements in efficiency, productivity, and business outcomes.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <ClockIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support to ensure your solutions run smoothly.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <CogIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Easy Integration</h3>
                <p className="text-gray-300">Seamless integration with your existing tools and workflows.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <LightBulbIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Continuous Innovation</h3>
                <p className="text-gray-300">Regular updates and new features to keep your solutions current.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your free trial today and experience the power of our micro SaaS solutions. 
              No credit card required, setup in 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaaSSolutionsPage;