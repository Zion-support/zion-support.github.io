'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Zap, Star, Users, Shield, Cloud, BarChart3, MessageSquare, Brain, Code, Database, Globe, Lock, Rocket, Target, TrendingUp, DollarSign, Clock, Award, Headphones, Mail } from 'lucide-react'

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
  link: string;
  benefits: string[];
  capabilities: string[];
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: 'ai-analytics-dashboard',
      icon: BarChart3,
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced AI-powered analytics dashboard with real-time insights, predictive analytics, and automated reporting for data-driven decision making.',
      features: [
        'Real-time data visualization with 50+ chart types',
        'AI-powered predictive analytics and forecasting',
        'Custom report generation with automated scheduling',
        'Multi-platform integration (Google Analytics, Facebook, LinkedIn)',
        'Advanced filtering and segmentation capabilities',
        'White-label customization options',
        'API access for custom integrations',
        'Mobile-responsive design'
      ],
      price: '$49/month',
      marketPrice: '$199/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics',
      link: 'https://ziontechgroup.com/ai-analytics-dashboard',
      benefits: [
        'Increase data accuracy by 40%',
        'Reduce reporting time by 75%',
        'Improve decision-making speed by 60%',
        'Save 20+ hours per week on manual reporting'
      ],
      capabilities: [
        'Machine Learning predictions',
        'Natural Language Query interface',
        'Automated anomaly detection',
        'Custom KPI tracking'
      ]
    },
    {
      id: 'ai-appointment-scheduler',
      icon: Clock,
      title: 'Smart Appointment Scheduler',
      description: 'AI-powered appointment scheduling system with intelligent time optimization, automated reminders, and seamless calendar integration.',
      features: [
        'AI-powered optimal time slot suggestions',
        'Multi-calendar integration (Google, Outlook, Apple)',
        'Automated SMS and email reminders',
        'Time zone handling for global teams',
        'Custom booking forms with conditional logic',
        'Payment processing integration',
        'Waitlist management',
        'Client self-service portal'
      ],
      price: '$29/month',
      marketPrice: '$99/month',
      users: 'Up to 5 users',
      popular: false,
      category: 'Scheduling',
      link: 'https://ziontechgroup.com/ai-appointment-scheduler',
      benefits: [
        'Reduce no-shows by 35%',
        'Increase booking conversion by 50%',
        'Save 15+ hours per week on scheduling',
        'Improve client satisfaction by 45%'
      ],
      capabilities: [
        'AI time optimization',
        'Smart conflict resolution',
        'Predictive scheduling',
        'Automated follow-ups'
      ]
    },
    {
      id: 'ai-content-generator',
      icon: Brain,
      title: 'AI Content Generator Studio',
      description: 'Advanced AI content creation platform with multi-format support, SEO optimization, and brand voice customization for all your content needs.',
      features: [
        'GPT-4 powered content generation',
        '50+ content types (blogs, social media, emails, ads)',
        'SEO optimization with keyword research',
        'Brand voice training and customization',
        'Content calendar and scheduling',
        'Plagiarism detection and originality scoring',
        'Multi-language support (25+ languages)',
        'Team collaboration tools'
      ],
      price: '$79/month',
      marketPrice: '$299/month',
      users: 'Up to 8 users',
      popular: true,
      category: 'Content',
      link: 'https://ziontechgroup.com/ai-content-generator',
      benefits: [
        'Increase content production by 300%',
        'Improve SEO rankings by 40%',
        'Reduce content costs by 60%',
        'Maintain consistent brand voice across all channels'
      ],
      capabilities: [
        'Advanced NLP processing',
        'SEO score optimization',
        'Tone and style adaptation',
        'Content performance analytics'
      ]
    },
    {
      id: 'ai-customer-support-bot',
      icon: MessageSquare,
      title: 'AI Customer Support Bot',
      description: 'Intelligent customer support chatbot with natural language processing, multi-channel support, and seamless human handoff capabilities.',
      features: [
        'Advanced NLP and sentiment analysis',
        'Multi-channel support (website, WhatsApp, Facebook)',
        'Knowledge base integration and learning',
        'Seamless human agent handoff',
        'Real-time analytics and insights',
        'Custom conversation flows',
        'Multi-language support',
        'Integration with popular CRM systems'
      ],
      price: '$59/month',
      marketPrice: '$199/month',
      users: 'Unlimited conversations',
      popular: true,
      category: 'Support',
      link: 'https://ziontechgroup.com/ai-customer-support-bot',
      benefits: [
        'Reduce support tickets by 50%',
        'Improve response time by 80%',
        'Increase customer satisfaction by 35%',
        'Save 30+ hours per week on support'
      ],
      capabilities: [
        'Context-aware conversations',
        'Emotion detection and response',
        'Automated ticket classification',
        'Performance learning and improvement'
      ]
    },
    {
      id: 'ai-email-marketing-automation',
      icon: Mail,
      title: 'AI Email Marketing Automation',
      description: 'Smart email marketing platform with AI-powered personalization, automated campaigns, and advanced analytics for maximum engagement.',
      features: [
        'AI-powered email personalization',
        'Drag-and-drop email builder',
        'Advanced segmentation and targeting',
        'A/B testing with AI optimization',
        'Automated drip campaigns',
        'Subscriber behavior tracking',
        'Deliverability optimization',
        'Advanced analytics and reporting'
      ],
      price: '$39/month',
      marketPrice: '$149/month',
      users: 'Up to 10,000 contacts',
      popular: false,
      category: 'Marketing',
      link: 'https://ziontechgroup.com/ai-email-marketing',
      benefits: [
        'Increase open rates by 45%',
        'Boost click-through rates by 60%',
        'Reduce unsubscribe rates by 30%',
        'Save 25+ hours per week on campaign management'
      ],
      capabilities: [
        'Predictive send time optimization',
        'Content personalization',
        'Behavioral trigger automation',
        'Advanced deliverability scoring'
      ]
    },
    {
      id: 'ai-expense-tracker',
      icon: DollarSign,
      title: 'AI Expense Tracker Pro',
      description: 'Intelligent expense management system with receipt scanning, automated categorization, and advanced financial insights.',
      features: [
        'AI-powered receipt scanning and OCR',
        'Automated expense categorization',
        'Smart budget tracking and alerts',
        'Multi-currency support',
        'Team collaboration and approval workflows',
        'Integration with accounting software',
        'Advanced reporting and analytics',
        'Mobile app with offline sync'
      ],
      price: '$19/month',
      marketPrice: '$79/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Finance',
      link: 'https://ziontechgroup.com/ai-expense-tracker',
      benefits: [
        'Reduce expense processing time by 70%',
        'Improve accuracy by 90%',
        'Increase compliance by 85%',
        'Save 20+ hours per month on expense management'
      ],
      capabilities: [
        'Machine learning categorization',
        'Fraud detection algorithms',
        'Predictive budget forecasting',
        'Automated compliance checking'
      ]
    },
    {
      id: 'ai-seo-optimizer',
      icon: Target,
      title: 'AI SEO Optimizer Suite',
      description: 'Comprehensive SEO analysis and optimization platform with AI-powered recommendations, competitor analysis, and automated optimization.',
      features: [
        'AI-powered keyword research and analysis',
        'Comprehensive site audit with scoring',
        'Competitor analysis and benchmarking',
        'Content optimization suggestions',
        'Technical SEO recommendations',
        'Rank tracking and monitoring',
        'Link building opportunities',
        'Local SEO optimization'
      ],
      price: '$49/month',
      marketPrice: '$199/month',
      users: 'Up to 5 websites',
      popular: false,
      category: 'SEO',
      link: 'https://ziontechgroup.com/ai-seo-optimizer',
      benefits: [
        'Improve search rankings by 40%',
        'Increase organic traffic by 60%',
        'Reduce SEO analysis time by 80%',
        'Identify 50+ optimization opportunities monthly'
      ],
      capabilities: [
        'Natural language processing for content analysis',
        'Machine learning for ranking prediction',
        'Automated technical issue detection',
        'Competitive intelligence gathering'
      ]
    },
    {
      id: 'ai-social-media-manager',
      icon: Globe,
      title: 'AI Social Media Manager',
      description: 'Intelligent social media management platform with AI-powered content creation, optimal posting times, and engagement optimization.',
      features: [
        'AI-powered content creation and curation',
        'Optimal posting time recommendations',
        'Multi-platform scheduling and publishing',
        'Hashtag research and optimization',
        'Engagement tracking and analytics',
        'Influencer identification and outreach',
        'Crisis management and monitoring',
        'Team collaboration and approval workflows'
      ],
      price: '$39/month',
      marketPrice: '$149/month',
      users: 'Up to 10 accounts',
      popular: false,
      category: 'Social Media',
      link: 'https://ziontechgroup.com/ai-social-media-manager',
      benefits: [
        'Increase engagement by 55%',
        'Grow followers by 40%',
        'Save 30+ hours per week on social media',
        'Improve brand consistency by 70%'
      ],
      capabilities: [
        'Sentiment analysis and monitoring',
        'Trend identification and content suggestions',
        'Automated response generation',
        'Performance prediction and optimization'
      ]
    },
    {
      id: 'ai-project-management',
      icon: Rocket,
      title: 'AI Project Management Hub',
      description: 'Smart project management platform with AI-powered task prioritization, resource optimization, and predictive analytics.',
      features: [
        'AI-powered task prioritization and scheduling',
        'Resource allocation optimization',
        'Predictive project timeline analysis',
        'Risk assessment and mitigation suggestions',
        'Team performance analytics',
        'Automated progress reporting',
        'Integration with popular tools (Slack, Jira, Trello)',
        'Custom workflow automation'
      ],
      price: '$69/month',
      marketPrice: '$249/month',
      users: 'Up to 15 users',
      popular: true,
      category: 'Project Management',
      link: 'https://ziontechgroup.com/ai-project-management',
      benefits: [
        'Improve project delivery time by 35%',
        'Reduce project overruns by 50%',
        'Increase team productivity by 45%',
        'Save 25+ hours per week on project coordination'
      ],
      capabilities: [
        'Machine learning for task optimization',
        'Predictive risk analysis',
        'Automated resource balancing',
        'Intelligent deadline management'
      ]
    },
    {
      id: 'ai-inventory-management',
      icon: Database,
      title: 'AI Inventory Management System',
      description: 'Intelligent inventory tracking and management with AI-powered demand forecasting, automated reordering, and optimization.',
      features: [
        'AI-powered demand forecasting',
        'Automated reorder point calculations',
        'Multi-location inventory tracking',
        'Supplier performance analytics',
        'Dead stock identification and alerts',
        'Integration with e-commerce platforms',
        'Barcode scanning and mobile app',
        'Advanced reporting and analytics'
      ],
      price: '$59/month',
      marketPrice: '$199/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Inventory',
      link: 'https://ziontechgroup.com/ai-inventory-management',
      benefits: [
        'Reduce stockouts by 60%',
        'Decrease excess inventory by 40%',
        'Improve cash flow by 35%',
        'Save 30+ hours per week on inventory management'
      ],
      capabilities: [
        'Machine learning demand prediction',
        'Automated optimization algorithms',
        'Seasonal trend analysis',
        'Supplier performance scoring'
      ]
    },
    {
      id: 'ai-hr-management',
      icon: Users,
      title: 'AI HR Management Suite',
      description: 'Comprehensive HR management platform with AI-powered recruitment, employee analytics, and automated HR processes.',
      features: [
        'AI-powered resume screening and matching',
        'Automated interview scheduling',
        'Employee performance analytics',
        'Predictive attrition modeling',
        'Automated onboarding workflows',
        'Benefits administration',
        'Compliance monitoring and alerts',
        'Employee self-service portal'
      ],
      price: '$79/month',
      marketPrice: '$299/month',
      users: 'Up to 50 employees',
      popular: false,
      category: 'HR',
      link: 'https://ziontechgroup.com/ai-hr-management',
      benefits: [
        'Reduce hiring time by 50%',
        'Improve candidate quality by 40%',
        'Decrease turnover by 30%',
        'Save 40+ hours per week on HR tasks'
      ],
      capabilities: [
        'Natural language processing for resume analysis',
        'Predictive analytics for employee retention',
        'Automated bias detection in hiring',
        'Performance prediction modeling'
      ]
    },
    {
      id: 'ai-cybersecurity-monitor',
      icon: Shield,
      title: 'AI Cybersecurity Monitor',
      description: 'Advanced cybersecurity monitoring platform with AI-powered threat detection, automated response, and compliance management.',
      features: [
        'AI-powered threat detection and analysis',
        'Automated incident response',
        'Real-time security monitoring',
        'Compliance reporting (GDPR, HIPAA, SOX)',
        'Vulnerability assessment and scanning',
        'Security awareness training',
        'Integration with existing security tools',
        '24/7 security operations center'
      ],
      price: '$99/month',
      marketPrice: '$399/month',
      users: 'Up to 100 devices',
      popular: true,
      category: 'Cybersecurity',
      link: 'https://ziontechgroup.com/ai-cybersecurity-monitor',
      benefits: [
        'Reduce security incidents by 70%',
        'Improve threat detection by 85%',
        'Decrease response time by 60%',
        'Ensure 100% compliance with regulations'
      ],
      capabilities: [
        'Machine learning threat detection',
        'Behavioral analysis and anomaly detection',
        'Automated threat hunting',
        'Predictive security analytics'
      ]
    }
  ];

  const categories = ['All', ...Array.from(new Set(microSaasProducts.map(product => product.category)))];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'Rapid Deployment',
      description: 'Get started in minutes with our pre-built solutions and easy integration. No complex setup required.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with 99.9% uptime guarantee, SOC 2 compliance, and end-to-end encryption.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      title: 'Cloud-Native',
      description: 'Built on scalable cloud infrastructure with global CDN, automatic backups, and disaster recovery.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
      title: 'AI-Powered',
      description: 'Advanced AI and machine learning capabilities that learn and improve with your business needs.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '24/7', label: 'Expert Support' },
    { number: '30-day', label: 'Free Trial' }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SaaS Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, AI-driven micro SaaS tools designed to solve specific business problems and boost productivity. 
              Ready-to-use solutions with enterprise-grade features at startup-friendly prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                <Headphones className="w-5 h-5 mr-2 inline" />
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300">
              Built for modern businesses that need powerful tools without the complexity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Products
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our comprehensive suite of AI-powered business tools
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 ${
                  product.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {product.popular && (
                  <div className="flex items-center mb-4">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-sm font-medium text-yellow-400">Most Popular</span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-center text-sm text-gray-400 mb-3">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{product.users}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="text-2xl font-bold text-white">
                      {product.price}
                    </div>
                    <div className="text-sm text-gray-400 line-through">
                      {product.marketPrice}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <a
                    href={product.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <button className="w-full border border-white/30 text-white hover:bg-white/10 py-3 px-4 rounded-lg font-medium transition-all duration-300">
                    Start Free Trial
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and experience the power of AI-driven micro SaaS solutions. 
            No credit card required, cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Zap className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              <Headphones className="w-5 h-5 mr-2 inline" />
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MicroSaasPage