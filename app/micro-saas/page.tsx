'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, IconComponent, Star, CheckCircle, Clock } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: 'zion-ai-video-generator',
      title: 'Zion AI Video Generator Pro',
      description: 'Create professional videos in minutes with AI-powered video generation, editing, and optimization for social media and marketing.',
      icon: Package,
      features: ['AI Video Creation', 'Auto-Editing', 'Multi-Platform Export', 'Voice Synthesis', 'Template Library', 'Brand Customization'],
      price: '$89/month',
      popular: true,
      category: 'Content Creation',
      marketPrice: '$299/month',
      savings: '70%',
      users: '15,000+',
      rating: 4.9,
      link: 'https://ziontechgroup.com/zion-ai-video-generator'
    },
    {
      id: 'zion-ai-email-marketing-pro',
      title: 'Zion AI Email Marketing Pro',
      description: 'Advanced email marketing automation with AI-powered personalization, A/B testing, and advanced analytics for maximum engagement.',
      icon: Zap,
      features: ['AI Personalization', 'A/B Testing', 'Advanced Analytics', 'Email Templates', 'List Management', 'Deliverability Optimization'],
      price: '$49/month',
      popular: true,
      category: 'Marketing',
      marketPrice: '$149/month',
      savings: '67%',
      users: '18,500+',
      rating: 4.8,
      link: 'https://ziontechgroup.com/zion-ai-email-marketing-pro'
    },
    {
      id: 'zion-ai-social-media-manager',
      title: 'Zion AI Social Media Manager',
      description: 'Comprehensive social media management with AI-powered content scheduling, hashtag optimization, and performance tracking across all platforms.',
      icon: Globe,
      features: ['Multi-Platform Scheduling', 'Hashtag Optimization', 'Performance Analytics', 'Content Calendar', 'Engagement Tracking', 'Brand Monitoring'],
      price: '$39/month',
      popular: true,
      category: 'Social Media',
      marketPrice: '$99/month',
      savings: '61%',
      users: '22,000+',
      rating: 4.7,
      link: 'https://ziontechgroup.com/zion-ai-social-media-manager'
    },
    {
      id: 'zion-ai-project-tracker',
      title: 'Zion AI Project Tracker Pro',
      description: 'Intelligent project management with AI-powered task prioritization, resource allocation, and automated progress reporting.',
      icon: Settings,
      features: ['AI Task Prioritization', 'Resource Allocation', 'Progress Automation', 'Team Collaboration', 'Time Tracking', 'Risk Assessment'],
      price: '$29/month',
      popular: false,
      category: 'Project Management',
      marketPrice: '$79/month',
      savings: '63%',
      users: '16,800+',
      rating: 4.9,
      link: 'https://ziontechgroup.com/zion-ai-project-tracker'
    },
    {
      id: 'zion-ai-expense-tracker',
      title: 'Zion AI Expense Tracker',
      description: 'Smart expense management with AI-powered categorization, receipt scanning, and automated tax preparation for small businesses.',
      icon: BarChart3,
      features: ['Receipt Scanning', 'Auto Categorization', 'Tax Preparation', 'Expense Reports', 'Budget Tracking', 'Multi-Currency Support'],
      price: '$19/month',
      popular: false,
      category: 'Financial Management',
      marketPrice: '$59/month',
      savings: '68%',
      users: '25,000+',
      rating: 4.8,
      link: 'https://ziontechgroup.com/zion-ai-expense-tracker'
    },
    {
      id: 'zion-ai-customer-feedback',
      title: 'Zion AI Customer Feedback Pro',
      description: 'Advanced customer feedback collection and analysis with AI-powered sentiment analysis, automated response, and actionable insights.',
      icon: Users,
      features: ['Sentiment Analysis', 'Auto Response', 'Feedback Collection', 'Insight Generation', 'Multi-Channel Support', 'Custom Surveys'],
      price: '$39/month',
      popular: false,
      category: 'Customer Experience',
      marketPrice: '$99/month',
      savings: '61%',
      users: '12,500+',
      rating: 4.9,
      link: 'https://ziontechgroup.com/zion-ai-customer-feedback'
    },
    {
      id: 'zion-ai-document-scanner',
      title: 'Zion AI Document Scanner Pro',
      description: 'Intelligent document scanning and processing with OCR, data extraction, and automated organization for business documents.',
      icon: Shield,
      features: ['OCR Technology', 'Data Extraction', 'Auto Organization', 'Search & Index', 'Cloud Storage', 'Security Features'],
      price: '$29/month',
      popular: false,
      category: 'Document Management',
      marketPrice: '$79/month',
      savings: '63%',
      users: '14,200+',
      rating: 4.7,
      link: 'https://ziontechgroup.com/zion-ai-document-scanner'
    },
    {
      id: 'zion-ai-meeting-assistant',
      title: 'Zion AI Meeting Assistant',
      description: 'AI-powered meeting transcription, note-taking, and action item extraction with real-time collaboration and follow-up automation.',
      icon: Clock,
      features: ['Live Transcription', 'Auto Note-Taking', 'Action Items', 'Meeting Summaries', 'Calendar Integration', 'Follow-up Automation'],
      price: '$49/month',
      popular: false,
      category: 'Productivity',
      marketPrice: '$129/month',
      savings: '62%',
      users: '19,300+',
      rating: 4.8,
      link: 'https://ziontechgroup.com/zion-ai-meeting-assistant'
    },
    {
      id: 'zion-ai-website-analyzer',
      title: 'Zion AI Website Analyzer',
      description: 'Comprehensive website analysis with AI-powered SEO optimization, performance monitoring, and conversion rate optimization.',
      icon: BarChart3,
      features: ['SEO Analysis', 'Performance Monitoring', 'Conversion Optimization', 'Competitor Analysis', 'Content Suggestions', 'Technical Audits'],
      price: '$39/month',
      popular: false,
      category: 'Web Analytics',
      marketPrice: '$99/month',
      savings: '61%',
      users: '17,600+',
      rating: 4.9,
      link: 'https://ziontechgroup.com/zion-ai-website-analyzer'
    },
    {
      id: 'zion-ai-hr-assistant',
      title: 'Zion AI HR Assistant Pro',
      description: 'Streamlined HR management with AI-powered resume screening, employee onboarding, performance tracking, and compliance monitoring.',
      icon: Users,
      features: ['Resume Screening', 'Employee Onboarding', 'Performance Tracking', 'Compliance Monitoring', 'Payroll Integration', 'Benefits Management'],
      price: '$59/month',
      popular: false,
      category: 'Human Resources',
      marketPrice: '$149/month',
      savings: '60%',
      users: '11,800+',
      rating: 4.8,
      link: 'https://ziontechgroup.com/zion-ai-hr-assistant'
    },
    {
      id: 'zion-ai-backup-manager',
      title: 'Zion AI Backup Manager',
      description: 'Intelligent data backup and recovery with AI-powered scheduling, version control, and automated disaster recovery planning.',
      icon: Shield,
      features: ['Auto Backup Scheduling', 'Version Control', 'Disaster Recovery', 'Cloud Integration', 'Data Encryption', 'Recovery Testing'],
      price: '$19/month',
      popular: false,
      category: 'Data Protection',
      marketPrice: '$59/month',
      savings: '68%',
      users: '20,500+',
      rating: 4.9,
      link: 'https://ziontechgroup.com/zion-ai-backup-manager'
    },
    {
      id: 'zion-ai-api-monitor',
      title: 'Zion AI API Monitor Pro',
      description: 'Advanced API monitoring and testing with AI-powered performance analysis, error detection, and automated alerting.',
      icon: Settings,
      features: ['Performance Monitoring', 'Error Detection', 'Auto Alerting', 'Load Testing', 'API Documentation', 'Integration Testing'],
      price: '$49/month',
      popular: false,
      category: 'API Management',
      marketPrice: '$129/month',
      savings: '62%',
      users: '8,900+',
      rating: 4.8,
      link: 'https://ziontechgroup.com/zion-ai-api-monitor'
    },
    {
      id: 'zion-ai-invoice-generator',
      title: 'Zion AI Invoice Generator',
      description: 'Automated invoice generation with AI-powered expense categorization, tax calculations, and payment tracking for small businesses.',
      icon: BarChart3,
      features: ['Auto Invoice Generation', 'Expense Categorization', 'Tax Calculations', 'Payment Tracking', 'Multi-Currency', 'Client Portal'],
      price: '$39/month',
      popular: true,
      category: 'Financial Management',
      marketPrice: '$99/month',
      savings: '61%',
      users: '8,500+',
      rating: 4.8,
      link: 'https://ziontechgroup.com/zion-ai-invoice-generator'
    },
    {
      id: 'zion-ai-crm-pro',
      title: 'Zion AI CRM Pro',
      description: 'Intelligent customer relationship management with AI-powered lead scoring, automated follow-ups, and predictive analytics.',
      icon: Users,
      features: ['AI Lead Scoring', 'Automated Follow-ups', 'Sales Analytics', 'Integration Hub', 'Pipeline Management', 'Customer Insights'],
      price: '$49/month',
      popular: false,
      category: 'CRM & Sales',
      marketPrice: '$149/month',
      savings: '67%',
      users: '12,000+',
      rating: 4.7,
      link: 'https://ziontechgroup.com/zion-ai-crm-pro'
    },
    {
      id: 'zion-ai-voice-assistant-pro',
      title: 'Zion AI Voice Assistant Pro',
      description: 'Custom AI voice assistant for businesses with natural language processing, task automation, and multi-language support.',
      icon: Users,
      features: ['Natural Language Processing', 'Task Automation', 'Multi-language Support', 'Custom Commands', 'Integration APIs', 'Analytics Dashboard'],
      price: '$79/month',
      popular: false,
      category: 'AI & Automation',
      marketPrice: '$199/month',
      savings: '60%',
      users: '6,200+',
      rating: 4.9,
      link: 'https://ziontechgroup.com/zion-ai-voice-assistant-pro'
    },
    {
      id: 'zion-ai-code-reviewer',
      title: 'Zion AI Code Reviewer',
      description: 'Automated code review and quality assurance with AI-powered bug detection, security analysis, and performance optimization suggestions.',
      icon: Settings,
      features: ['Automated Code Review', 'Bug Detection', 'Security Analysis', 'Performance Optimization', 'Code Quality Metrics', 'Team Collaboration'],
      price: '$99/month',
      popular: false,
      category: 'Development Tools',
      marketPrice: '$299/month',
      savings: '67%',
      users: '4,800+',
      rating: 4.8,
      link: 'https://ziontechgroup.com/zion-ai-code-reviewer'
    },
    {
      id: 'zion-ai-contract-analyzer',
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis and management with risk assessment, compliance checking, and automated contract generation.',
      icon: Shield,
      features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Auto Generation', 'Version Control', 'Legal Templates'],
      price: '$149/month',
      popular: false,
      category: 'Legal & Compliance',
      marketPrice: '$399/month',
      savings: '63%',
      users: '3,200+',
      rating: 4.9,
      link: 'https://ziontechgroup.com/zion-ai-contract-analyzer'
    },
    {
      id: 'zion-ai-supply-chain-optimizer',
      title: 'Zion AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation.',
      icon: BarChart3,
      features: ['Demand Forecasting', 'Inventory Optimization', 'Logistics Automation', 'Supplier Management', 'Cost Analysis', 'Risk Assessment'],
      price: '$199/month',
      popular: false,
      category: 'Supply Chain',
      marketPrice: '$599/month',
      savings: '67%',
      users: '2,800+',
      rating: 4.8,
      link: 'https://ziontechgroup.com/zion-ai-supply-chain-optimizer'
    },
    {
      id: 'zion-ai-translator-pro',
      title: 'Zion AI Translator Pro',
      description: 'Advanced AI translation service with real-time translation, document processing, and multi-language support for global businesses.',
      icon: Globe,
      features: ['Real-time Translation', 'Document Processing', 'Multi-language Support', 'Context Awareness', 'API Integration', 'Quality Assurance'],
      price: '$59/month',
      popular: false,
      category: 'Communication',
      marketPrice: '$149/month',
      savings: '60%',
      users: '9,100+',
      rating: 4.7,
      link: 'https://ziontechgroup.com/zion-ai-translator-pro'
    },
    {
      id: 'zion-ai-data-cleaner',
      title: 'Zion AI Data Cleaner',
      description: 'Automated data cleaning and validation with AI-powered duplicate detection, format standardization, and data quality scoring.',
      icon: Settings,
      features: ['Duplicate Detection', 'Format Standardization', 'Data Validation', 'Quality Scoring', 'Auto Correction', 'Data Profiling'],
      price: '$69/month',
      popular: false,
      category: 'Data Management',
      marketPrice: '$199/month',
      savings: '65%',
      users: '7,500+',
      rating: 4.8,
      link: 'https://ziontechgroup.com/zion-ai-data-cleaner'
    },
    {
      id: 'zion-ai-customer-insights',
      title: 'Zion AI Customer Insights',
      description: 'Advanced customer analytics and insights with sentiment analysis, behavior prediction, and personalized recommendations.',
      icon: Users,
      features: ['Sentiment Analysis', 'Behavior Prediction', 'Personalized Recommendations', 'Customer Segmentation', 'Churn Prediction', 'Lifetime Value'],
      price: '$89/month',
      popular: false,
      category: 'Analytics',
      marketPrice: '$249/month',
      savings: '64%',
      users: '5,600+',
      rating: 4.9,
      link: 'https://ziontechgroup.com/zion-ai-customer-insights'
    },
    {
      id: 'zion-inventory-smart',
      title: 'Zion Inventory Smart',
      description: 'Smart inventory management with predictive analytics, automated reordering, and real-time tracking across multiple locations.',
      icon: BarChart3,
      features: ['Predictive Analytics', 'Auto Reordering', 'Multi-location Tracking', 'Real-time Updates', 'Demand Forecasting', 'Cost Optimization'],
      price: '$39/month',
      popular: false,
      category: 'Inventory Management',
      marketPrice: '$99/month',
      savings: '61%',
      users: '11,200+',
      rating: 4.7,
      link: 'https://ziontechgroup.com/zion-inventory-smart'
    },
    {
      id: 'zion-ai-marketing-automation',
      title: 'Zion AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with AI-driven campaign optimization, lead nurturing, and performance analytics.',
      icon: Zap,
      features: ['Campaign Automation', 'Lead Nurturing', 'A/B Testing', 'Performance Analytics', 'Email Marketing', 'Social Media Integration'],
      price: '$79/month',
      popular: false,
      category: 'Marketing',
      marketPrice: '$199/month',
      savings: '60%',
      users: '13,800+',
      rating: 4.8,
      link: 'https://ziontechgroup.com/zion-ai-marketing-automation'
    }
  ];

const categories = ['All', 'Content Creation', 'CRM & Sales', 'Inventory Management', 'Financial Management', 'AI & Automation', 'Development Tools', 'Legal & Compliance', 'Supply Chain', 'Communication', 'Data Management', 'Analytics', 'Marketing', 'Social Media', 'Project Management', 'Customer Experience', 'Document Management', 'Productivity', 'Web Analytics', 'Human Resources', 'Data Protection', 'API Management'];

const benefits = [
    {
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive setup process.',
      icon: Zap},
    {
      title: 'Affordable Pricing',
      description: 'Access powerful tools at fraction of enterprise costs.',
      icon: Award},
    {
      title: 'No Long-term Contracts',
      description: 'Cancel anytime with our flexible monthly billing.',
      icon: Heart},
    {
      title: '24/7 Support',
      description: 'Get help when you need it with our dedicated support team.',
      icon: Globe}];
  return (
    <>
      <Helmet>
        <title>Micro-saas - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Micro-saas page" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          
        <div className="max-w-7xl mx-auto text-center">
            
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-cyan-400">SAAS</span>
            </h1>
            
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful business tools designed for small to medium businesses. Get enterprise-level functionality at affordable prices.
            </p>
            
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
    to="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
    to="/demo"
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
  return (
                  <div key={index} className="text-center">
                    
        <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    
          <p className="text-gray-300">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Category Filter */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
    const key = {category} className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    category === 'All'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover: bg-cyan-500/20 hover:text-cyan-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        {/* Products Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Micro SAAS Products
            </h2>
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => {
                const IconComponent = product.icon;
  return (
                  <div
    const key = {product.id} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                      product.popular 
                        ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                        : 'border-cyan-500/20'
                    }`}
                  >
                    {product.popular && (
                      
        <div className="flex items-center justify-center mb-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>Most Popular</span>
                        </span>
                      </div>
                    )}
                    
        <div className="flex items-center justify-between mb-4">
                      
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-cyan-400" />
                      </div>
                      <span className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
                    
          <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>
                    {/* Rating and Users */}
                    
        <div className="flex items-center justify-between mb-4">
                      
        <div className="flex items-center space-x-2">
                        
        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-300">{product.rating}</span>
                      </div>
                      <span className="text-sm text-gray-400">{product.users} users</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))},
                      {product.features.length > 4 && (
                        <li className="text-sm text-cyan-400">
                          +{product.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                    
        <div className="mb-6">
                      
        <div className="flex items-center justify-between mb-2">
                        
        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                          <span className="text-sm text-gray-400 line-through">{product.marketPrice}</span>
                        </div>
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold">
                          Save {product.savings}
                        </span>
                      </div>
                      
        <div className="flex items-center space-x-1 text-gray-400 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>14-day free trial</span>
                      </div>
                    </div>
                    
        <div className="space-y-2">
                      <Link
    const to = {`/${product.id}`}
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                      >
                        <span>Start Free Trial</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
    const href = {product.link} target="_blank"
                        rel="noopener noreferrer"
                        className="w-full border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-2 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          
        <div className="max-w-4xl mx-auto text-center">
            
        <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Streamline Your Business?
              </h2>
              
          <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience the power of our micro SAAS solutions.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
    to="/contact"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
    to="/demo"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Schedule Demo
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