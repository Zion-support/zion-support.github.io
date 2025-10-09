import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Bot, 
  Share2, 
  Mail, 
  Package, 
  Target, 
  FileText, 
  Search, 
  Calendar, 
  MessageSquare, 
  CreditCard, 
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Sparkles,
  Cpu,
  Database,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Cloud,
  Lock,
  TrendingUp,
  Users,
  Clock,
  Award,
  Phone,
  Mail as MailIcon,
  MapPin
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const microSaasServices = [
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights and predictive analytics',
      icon: BarChart3,
      price: '$29/month',
      features: [
        'Real-time data visualization',
        'AI-powered insights',
        'Custom dashboards',
        'Automated reporting',
        'Multi-platform integration',
        'Mobile app included'
      ],
      benefits: [
        'Increase decision-making speed by 300%',
        'Reduce manual reporting by 80%',
        'Identify trends before competitors',
        'Custom alerts and notifications'
      ],
      category: 'Analytics',
      popularity: 'Most Popular',
      rating: 4.9,
      users: '2,500+',
      link: 'https://ziontechgroup.com/ai-analytics-dashboard'
    },
    {
      id: 'smart-support-bot',
      name: 'Smart Support Bot',
      description: 'AI-powered customer service automation with natural language processing',
      icon: Bot,
      price: '$49/month',
      features: [
        '24/7 customer support',
        'Natural language processing',
        'Multi-language support',
        'Integration with CRM',
        'Escalation to human agents',
        'Performance analytics'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Handle 10x more inquiries',
        'Improve customer satisfaction',
        'Available 24/7'
      ],
      category: 'Customer Service',
      popularity: 'Trending',
      rating: 4.8,
      users: '1,800+',
      link: 'https://ziontechgroup.com/smart-support-bot'
    },
    {
      id: 'social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automated social media management with AI content generation and scheduling',
      icon: Share2,
      price: '$39/month',
      features: [
        'AI content generation',
        'Multi-platform posting',
        'Optimal timing analysis',
        'Engagement tracking',
        'Hashtag optimization',
        'Competitor analysis'
      ],
      benefits: [
        'Save 15 hours per week',
        'Increase engagement by 250%',
        'Consistent brand voice',
        'Data-driven content strategy'
      ],
      category: 'Marketing',
      popularity: 'New',
      rating: 4.7,
      users: '1,200+',
      link: 'https://ziontechgroup.com/social-media-manager'
    },
    {
      id: 'email-marketing-suite',
      name: 'AI Email Marketing Suite',
      description: 'Intelligent email campaigns with personalization and automation',
      icon: Mail,
      price: '$25/month',
      features: [
        'AI-powered personalization',
        'Automated drip campaigns',
        'A/B testing',
        'Advanced segmentation',
        'Deliverability optimization',
        'Performance analytics'
      ],
      benefits: [
        'Increase open rates by 40%',
        'Reduce unsubscribe rates',
        'Automated campaign management',
        'ROI tracking and optimization'
      ],
      category: 'Marketing',
      popularity: 'Popular',
      rating: 4.6,
      users: '3,000+',
      link: 'https://ziontechgroup.com/email-marketing-suite'
    },
    {
      id: 'inventory-management',
      name: 'Smart Inventory Management',
      description: 'AI-powered inventory optimization with demand forecasting',
      icon: Package,
      price: '$59/month',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Multi-location tracking',
        'Supplier management',
        'Cost optimization',
        'Real-time alerts'
      ],
      benefits: [
        'Reduce stockouts by 70%',
        'Lower inventory costs by 25%',
        'Improve cash flow',
        'Automated procurement'
      ],
      category: 'Operations',
      popularity: 'Enterprise',
      rating: 4.8,
      users: '950+',
      link: 'https://ziontechgroup.com/inventory-management'
    },
    {
      id: 'lead-scoring-system',
      name: 'AI Lead Scoring System',
      description: 'Intelligent lead qualification and prioritization',
      icon: Target,
      price: '$35/month',
      features: [
        'Behavioral analysis',
        'Lead scoring algorithms',
        'CRM integration',
        'Automated follow-ups',
        'Conversion prediction',
        'Custom scoring models'
      ],
      benefits: [
        'Increase conversion rates by 45%',
        'Prioritize high-value leads',
        'Reduce sales cycle time',
        'Improve sales team efficiency'
      ],
      category: 'Sales',
      popularity: 'Hot',
      rating: 4.7,
      users: '1,500+',
      link: 'https://ziontechgroup.com/lead-scoring-system'
    },
    {
      id: 'document-processor',
      name: 'AI Document Processor',
      description: 'Intelligent document analysis and data extraction',
      icon: FileText,
      price: '$45/month',
      features: [
        'OCR text extraction',
        'Document classification',
        'Data validation',
        'Batch processing',
        'API integration',
        'Custom templates'
      ],
      benefits: [
        'Process documents 10x faster',
        'Reduce manual data entry',
        'Improve accuracy by 95%',
        'Automated workflow integration'
      ],
      category: 'Productivity',
      popularity: 'Popular',
      rating: 4.9,
      users: '2,200+',
      link: 'https://ziontechgroup.com/document-processor'
    },
    {
      id: 'seo-optimizer',
      name: 'AI SEO Optimizer',
      description: 'Automated SEO analysis and optimization recommendations',
      icon: Search,
      price: '$32/month',
      features: [
        'Keyword research',
        'Content optimization',
        'Technical SEO audit',
        'Competitor analysis',
        'Rank tracking',
        'Performance monitoring'
      ],
      benefits: [
        'Increase organic traffic by 200%',
        'Save 20 hours per week',
        'Data-driven SEO strategy',
        'Automated optimization'
      ],
      category: 'Marketing',
      popularity: 'Trending',
      rating: 4.6,
      users: '1,800+',
      link: 'https://ziontechgroup.com/seo-optimizer'
    },
    {
      id: 'appointment-scheduler',
      name: 'Smart Appointment Scheduler',
      description: 'AI-powered scheduling with calendar integration and optimization',
      icon: Calendar,
      price: '$19/month',
      features: [
        'Calendar integration',
        'Automated scheduling',
        'Time zone handling',
        'Reminder notifications',
        'Rescheduling logic',
        'Analytics dashboard'
      ],
      benefits: [
        'Reduce no-shows by 30%',
        'Save 5 hours per week',
        'Improve customer experience',
        'Automated follow-ups'
      ],
      category: 'Productivity',
      popularity: 'Popular',
      rating: 4.8,
      users: '4,000+',
      link: 'https://ziontechgroup.com/appointment-scheduler'
    },
    {
      id: 'chat-analytics',
      name: 'AI Chat Analytics',
      description: 'Conversation analysis and customer insights from chat data',
      icon: MessageSquare,
      price: '$28/month',
      features: [
        'Sentiment analysis',
        'Topic extraction',
        'Customer journey mapping',
        'Agent performance metrics',
        'Real-time monitoring',
        'Custom reports'
      ],
      benefits: [
        'Improve customer satisfaction',
        'Identify service gaps',
        'Optimize agent training',
        'Data-driven insights'
      ],
      category: 'Analytics',
      popularity: 'New',
      rating: 4.5,
      users: '800+',
      link: 'https://ziontechgroup.com/chat-analytics'
    },
    {
      id: 'expense-tracker',
      name: 'AI Expense Tracker',
      description: 'Intelligent expense management with receipt scanning and categorization',
      icon: CreditCard,
      price: '$15/month',
      features: [
        'Receipt scanning',
        'Automatic categorization',
        'Expense approval workflow',
        'Budget tracking',
        'Tax preparation',
        'Multi-currency support'
      ],
      benefits: [
        'Save 8 hours per month',
        'Improve accuracy by 90%',
        'Automated compliance',
        'Real-time budget monitoring'
      ],
      category: 'Finance',
      popularity: 'Popular',
      rating: 4.7,
      users: '2,800+',
      link: 'https://ziontechgroup.com/expense-tracker'
    },
    {
      id: 'content-generator',
      name: 'AI Content Generator',
      description: 'AI-powered content creation for blogs, social media, and marketing',
      icon: Zap,
      price: '$42/month',
      features: [
        'Blog post generation',
        'Social media content',
        'Email templates',
        'SEO optimization',
        'Brand voice consistency',
        'Multi-language support'
      ],
      benefits: [
        'Create content 5x faster',
        'Maintain consistent quality',
        'Optimize for SEO',
        'Scale content production'
      ],
      category: 'Content',
      popularity: 'Hot',
      rating: 4.8,
      users: '1,600+',
      link: 'https://ziontechgroup.com/content-generator'
    }
  ];

  const categories = ['All', 'Analytics', 'Marketing', 'Customer Service', 'Operations', 'Sales', 'Productivity', 'Finance', 'Content'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white">Loading Micro SaaS Services...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-holographic-shift">
              SaaS Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Powerful, affordable micro SaaS tools designed to automate and optimize your business operations. 
            Each solution is built with cutting-edge AI technology and priced for maximum value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MailIcon className="w-5 h-5" />
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-neon'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-cyan-400 border border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 quantum-card"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-cyan-400 font-medium">{service.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>

                {/* Popularity Badge */}
                {service.popularity && (
                  <div className="mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      service.popularity === 'Most Popular' ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' :
                      service.popularity === 'Trending' ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-white' :
                      service.popularity === 'Hot' ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white' :
                      service.popularity === 'New' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' :
                      'bg-gradient-to-r from-gray-500 to-gray-600 text-white'
                    }`}>
                      <Sparkles className="w-3 h-3 mr-1" />
                      {service.popularity}
                    </span>
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Rating and Users */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-300">{service.rating}</span>
                  </div>
                  <div className="text-gray-400">{service.users} users</div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-cyan-400 font-medium">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 text-center flex items-center justify-center gap-2"
                  >
                    <Zap className="w-4 h-4" />
                    Try Free
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold text-sm hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              All our micro SaaS solutions come with a 14-day free trial. No hidden fees, no long-term contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$15-29<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Up to 3 micro SaaS tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Basic support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Standard integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  14-day free trial
                </li>
              </ul>
              <a
                href="tel:+13024640950"
                className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 text-center block"
              >
                Get Started
              </a>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/20 to-purple-600/20 backdrop-blur-lg rounded-xl p-8 border border-cyan-400/50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$30-59<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Up to 8 micro SaaS tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Advanced integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Custom configurations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  API access
                </li>
              </ul>
              <a
                href="tel:+13024640950"
                className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 text-center block"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Unlimited micro SaaS tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  White-label solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  On-premise deployment
                </li>
              </ul>
              <a
                href="tel:+13024640950"
                className="w-full border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center block"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our micro SaaS solutions today. Contact us for a free consultation and custom recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MailIcon className="w-5 h-5" />
              Email kleber@ziontechgroup.com
            </Link>
          </div>
          <div className="mt-8 text-gray-400">
            <p>364 E Main St STE 1008, Middletown, DE 19709</p>
            <p>Mon-Fri 9AM-6PM EST</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;