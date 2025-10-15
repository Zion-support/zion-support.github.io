import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  ArrowRightIcon, 
  StarIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  CogIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  SparklesIcon,
  BoltIcon,
  EyeIcon,
  CodeBracketIcon,
  CloudIcon,
  CpuChipIcon,
  ShareIcon,
  AcademicCapIcon,
  HomeIcon,
  BriefcaseIcon,
  HeartIcon,
  LightBulbIcon,
  TruckIcon,
  BanknotesIcon,
  ClipboardDocumentListIcon,
  ChatBubbleLeftRightIcon,
  PresentationChartLineIcon,
  UserIcon,
  CalendarIcon,
  DocumentCheckIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  BuildingOfficeIcon,
  ScaleIcon,
  HeartIcon as HeartIconSolid
} from '@heroicons/react/24/outline';

const MicroSAASSolutionsPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: 'ai-content-generator-pro',
      name: 'AI Content Generator Pro',
      description: 'Generate high-quality, SEO-optimized content for blogs, social media, marketing materials, and more using advanced AI technology.',
      price: 199,
      originalPrice: 299,
      period: 'month',
      features: [
        'Unlimited content generation',
        'SEO optimization',
        'Multi-language support (50+ languages)',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Team collaboration tools',
        'API access included'
      ],
      category: 'Content & Marketing',
      icon: DocumentTextIcon,
      gradient: 'from-cyan-500 to-blue-500',
      glow: 'shadow-cyan-500/25',
      link: '/ai-content-generator',
      popular: true,
      stats: {
        users: '10,000+',
        rating: 4.9,
        reviews: 2847
      }
    },
    {
      id: 'ai-crm-optimizer',
      name: 'AI CRM Optimizer',
      description: 'Transform your sales process with AI-powered lead scoring, predictive analytics, automated workflows, and intelligent customer insights.',
      price: 299,
      originalPrice: 499,
      period: 'month',
      features: [
        'AI lead scoring (40% higher conversion)',
        'Predictive analytics',
        'Automated follow-ups',
        'Customer sentiment analysis',
        'Sales forecasting',
        'Integration with 100+ tools',
        'Custom dashboard creation',
        '24/7 AI assistant'
      ],
      category: 'Sales & CRM',
      icon: UserGroupIcon,
      gradient: 'from-purple-500 to-pink-500',
      glow: 'shadow-purple-500/25',
      link: '/ai-crm-optimizer',
      popular: true,
      stats: {
        users: '5,200+',
        rating: 4.8,
        reviews: 1923
      }
    },
    {
      id: 'ai-data-visualizer',
      name: 'AI Data Visualizer',
      description: 'Transform complex data into stunning, interactive visualizations with AI-powered insights and 50+ chart types for better decision making.',
      price: 149,
      originalPrice: 299,
      period: 'month',
      features: [
        '50+ chart types',
        'AI-powered insights',
        'Real-time dashboards',
        'Custom data connectors',
        'Automated reporting',
        'Collaborative workspaces',
        'Mobile-responsive design',
        'White-label options'
      ],
      category: 'Analytics & BI',
      icon: ChartBarIcon,
      gradient: 'from-green-500 to-emerald-500',
      glow: 'shadow-green-500/25',
      link: '/ai-data-visualizer',
      popular: false,
      stats: {
        users: '7,800+',
        rating: 4.7,
        reviews: 1654
      }
    },
    {
      id: 'social-media-scheduler',
      name: 'Social Media Scheduler Pro',
      description: 'Streamline your social media presence with AI-powered scheduling, content optimization, and multi-platform management across 8+ platforms.',
      price: 49,
      originalPrice: 99,
      period: 'month',
      features: [
        '8+ platforms supported',
        'AI content optimization',
        '40% higher engagement rates',
        'Bulk scheduling',
        'Hashtag research',
        'Performance analytics',
        'Team collaboration',
        'Content calendar'
      ],
      category: 'Social Media',
      icon: ShareIcon,
      gradient: 'from-pink-500 to-orange-500',
      glow: 'shadow-pink-500/25',
      link: '/social-media-scheduler',
      popular: false,
      stats: {
        users: '15,000+',
        rating: 4.6,
        reviews: 3241
      }
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker Pro',
      description: 'Intelligent expense management with automated categorization, receipt scanning, budget tracking, and financial insights powered by AI.',
      price: 79,
      originalPrice: 149,
      period: 'month',
      features: [
        'AI receipt scanning',
        'Automated categorization',
        'Budget tracking & alerts',
        'Tax preparation tools',
        'Multi-currency support',
        'Team expense management',
        'Financial reporting',
        'Integration with accounting software'
      ],
      category: 'Finance & Accounting',
      icon: CurrencyDollarIcon,
      gradient: 'from-yellow-500 to-orange-500',
      glow: 'shadow-yellow-500/25',
      link: '/expense-tracker-pro',
      popular: false,
      stats: {
        users: '8,500+',
        rating: 4.8,
        reviews: 2134
      }
    },
    {
      id: 'ai-inventory-manager',
      name: 'AI Inventory Manager',
      description: 'Smart inventory management with predictive analytics, automated reordering, demand forecasting, and real-time stock optimization.',
      price: 199,
      originalPrice: 399,
      period: 'month',
      features: [
        'Predictive demand forecasting',
        'Automated reordering',
        'Real-time stock tracking',
        'Multi-location support',
        'Supplier management',
        'Cost optimization',
        'Barcode scanning',
        'Integration with POS systems'
      ],
      category: 'Inventory & Supply',
      icon: ClipboardDocumentListIcon,
      gradient: 'from-indigo-500 to-purple-500',
      glow: 'shadow-indigo-500/25',
      link: '/zion-smart-inventory-manager',
      popular: true,
      stats: {
        users: '3,200+',
        rating: 4.9,
        reviews: 987
      }
    },
    {
      id: 'ai-task-scheduler',
      name: 'AI Task Scheduler Pro',
      description: 'Intelligent task management with AI-powered prioritization, time tracking, team collaboration, and automated workflow optimization.',
      price: 39,
      originalPrice: 79,
      period: 'month',
      features: [
        'AI task prioritization',
        'Time tracking & analytics',
        'Team collaboration tools',
        'Project templates',
        'Deadline management',
        'Progress tracking',
        'Integration with 50+ tools',
        'Mobile app included'
      ],
      category: 'Productivity',
      icon: CheckCircleIcon,
      gradient: 'from-blue-500 to-cyan-500',
      glow: 'shadow-blue-500/25',
      link: '/zion-ai-task-scheduler',
      popular: false,
      stats: {
        users: '12,000+',
        rating: 4.7,
        reviews: 2567
      }
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Pro',
      description: 'Advanced email marketing automation with AI-powered personalization, A/B testing, segmentation, and performance optimization.',
      price: 99,
      originalPrice: 199,
      period: 'month',
      features: [
        'AI personalization',
        'Advanced segmentation',
        'A/B testing automation',
        'Send time optimization',
        'Subject line generator',
        'Performance analytics',
        'Unlimited contacts',
        'Template library'
      ],
      category: 'Marketing',
      icon: EnvelopeIcon,
      gradient: 'from-red-500 to-pink-500',
      glow: 'shadow-red-500/25',
      link: '/zion-ai-email-marketing-pro',
      popular: false,
      stats: {
        users: '6,800+',
        rating: 4.8,
        reviews: 1892
      }
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Pro',
      description: 'Intelligent customer support with AI chatbots, ticket automation, sentiment analysis, and 24/7 multilingual support capabilities.',
      price: 149,
      originalPrice: 299,
      period: 'month',
      features: [
        'AI chatbot (95% accuracy)',
        'Ticket automation',
        'Sentiment analysis',
        'Multilingual support',
        'Knowledge base management',
        'Live chat integration',
        'Performance analytics',
        'Custom AI training'
      ],
      category: 'Customer Support',
      icon: ChatBubbleLeftRightIcon,
      gradient: 'from-teal-500 to-cyan-500',
      glow: 'shadow-teal-500/25',
      link: '/zion-ai-customer-support-pro',
      popular: true,
      stats: {
        users: '4,500+',
        rating: 4.9,
        reviews: 1234
      }
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights, custom dashboards, real-time monitoring, and predictive analytics.',
      price: 199,
      originalPrice: 399,
      period: 'month',
      features: [
        'AI-powered insights',
        'Custom dashboard builder',
        'Real-time monitoring',
        'Predictive analytics',
        'Data visualization',
        'Automated reporting',
        'Team collaboration',
        'API integration'
      ],
      category: 'Analytics & BI',
      icon: PresentationChartLineIcon,
      gradient: 'from-violet-500 to-purple-500',
      glow: 'shadow-violet-500/25',
      link: '/zion-smart-analytics-dashboard',
      popular: true,
      stats: {
        users: '2,800+',
        rating: 4.8,
        reviews: 756
      }
    },
    {
      id: 'ai-translation-service',
      name: 'AI Translation Service Pro',
      description: 'Professional translation service with AI-powered accuracy, 100+ languages, real-time translation, and industry-specific terminology.',
      price: 79,
      originalPrice: 149,
      period: 'month',
      features: [
        '100+ languages supported',
        '95% accuracy guarantee',
        'Real-time translation',
        'Industry-specific terminology',
        'Document translation',
        'API integration',
        'Team collaboration',
        'Quality assurance'
      ],
      category: 'Communication',
      icon: GlobeAltIcon,
      gradient: 'from-emerald-500 to-teal-500',
      glow: 'shadow-emerald-500/25',
      link: '/zion-ai-translation-service',
      popular: false,
      stats: {
        users: '9,200+',
        rating: 4.7,
        reviews: 1987
      }
    },
    {
      id: 'ai-video-generator',
      name: 'AI Video Generator Pro',
      description: 'Create professional videos with AI-powered editing, voice synthesis, automated subtitles, and multi-format export capabilities.',
      price: 149,
      originalPrice: 299,
      period: 'month',
      features: [
        'AI video editing',
        'Voice synthesis (50+ voices)',
        'Automated subtitles',
        'Multi-format export',
        'Template library',
        'Brand customization',
        'Batch processing',
        'Cloud rendering'
      ],
      category: 'Content Creation',
      icon: EyeIcon,
      gradient: 'from-rose-500 to-pink-500',
      glow: 'shadow-rose-500/25',
      link: '/zion-ai-video-generator',
      popular: false,
      stats: {
        users: '5,600+',
        rating: 4.6,
        reviews: 1432
      }
    }
  ];

  const categories = [
    'All Products',
    'Content & Marketing',
    'Sales & CRM',
    'Analytics & BI',
    'Social Media',
    'Finance & Accounting',
    'Inventory & Supply',
    'Productivity',
    'Customer Support',
    'Communication',
    'Content Creation'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Products');

  const filteredProducts = selectedCategory === 'All Products' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="Micro SaaS Solutions - Zion Tech Group | AI-Powered Business Applications"
        description="Discover our comprehensive suite of AI-powered micro SaaS solutions. From content generation to CRM optimization, we provide intelligent business applications that drive growth and efficiency."
        keywords="micro saas, ai business software, task management, crm, analytics, inventory management, content generation, social media tools, expense tracking, customer support"
        canonicalUrl="https://ziontechgroup.com/micro-saas-solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 holographic-text">
                Micro <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SaaS Solutions</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                AI-powered business applications designed to solve specific challenges and drive growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                  Get Started Today
                  <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link to="/demo" className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group relative bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 overflow-hidden">
                  {/* Popular Badge */}
                  {product.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <StarIcon className="w-3 h-3 mr-1" />
                      Popular
                    </div>
                  )}

                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${product.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon and Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${product.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm text-cyan-400 font-medium">{product.category}</span>
                    </div>

                    {/* Product Name and Description */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-3xl font-bold text-cyan-400">${product.price}</span>
                        <span className="text-gray-400 text-sm">/{product.period}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-yellow-400 text-sm">
                          <StarIcon className="w-4 h-4 mr-1" />
                          {product.stats.rating}
                        </div>
                        <div className="text-xs text-gray-400">{product.stats.reviews} reviews</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {product.features.length > 4 && (
                        <div className="text-sm text-cyan-400">
                          +{product.features.length - 4} more features
                        </div>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
                      <div className="flex items-center">
                        <UserGroupIcon className="w-4 h-4 mr-1" />
                        {product.stats.users} users
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        24/7 Support
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={product.link}
                      className="block w-full cyber-button text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Try Free Trial
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Need a <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Custom Solution</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team can build a custom micro SaaS solution tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                Contact Our Team
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </Link>
              <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Call: +1 (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;