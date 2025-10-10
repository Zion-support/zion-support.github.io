'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const microSaasTools = [
    {
      title: 'Zion AI Content Studio Pro',
      description: 'Advanced AI-powered content creation platform with GPT-4 integration, brand voice training, and multi-channel publishing.',
      features: ['GPT-4 & Claude Integration', 'Brand Voice AI Training', 'Multi-language Support (50+ languages)', 'SEO Optimization Engine', 'Content Calendar & Scheduling', 'Plagiarism Detection', 'A/B Testing Tools', 'Social Media Auto-Posting'],
      price: '$89/month',
      marketPrice: '$200-500/month',
      benefits: ['Save 80% content creation time', 'Increase engagement by 300%', 'SEO-optimized content', 'Multi-platform publishing'],
      icon: Zap,
      category: 'content',
      link: 'https://ziontechgroup.com/zion-ai-content-studio-pro'
    },
    {
      title: 'Zion Analytics Intelligence',
      description: 'Real-time business intelligence platform with AI-powered insights, predictive analytics, and automated reporting.',
      features: ['Real-time Data Visualization', 'AI Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Anomaly Detection', 'ROI Tracking', 'White-label Solutions'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Data-driven decision making', 'Predictive insights', 'Automated reporting', 'Custom dashboards'],
      icon: Star,
      category: 'analytics',
      link: 'https://ziontechgroup.com/zion-analytics-intelligence'
    },
    {
      title: 'Zion Security Shield Pro',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection, automated response, and compliance management.',
      features: ['AI Threat Detection', 'Real-time Monitoring', 'Automated Incident Response', 'Compliance Management (SOC2, GDPR, HIPAA)', 'Vulnerability Scanning', 'Security Training Modules', 'Penetration Testing', '24/7 Security Operations Center'],
      price: '$199/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce security incidents by 95%', 'Automated threat response', 'Compliance assurance', '24/7 monitoring'],
      icon: Shield,
      category: 'security',
      link: 'https://ziontechgroup.com/zion-security-shield-pro'
    },
    {
      title: 'Zion Project Master AI',
      description: 'AI-powered project management with intelligent resource allocation, risk prediction, and automated workflow optimization.',
      features: ['AI Resource Optimization', 'Risk Prediction & Mitigation', 'Automated Task Assignment', 'Time Tracking & Billing', 'Team Collaboration Tools', 'Gantt Chart Automation', 'Budget Forecasting', 'Client Portal Integration'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Increase project success rate by 40%', 'Automated resource allocation', 'Risk mitigation', 'Improved team productivity'],
      icon: Clock,
      category: 'productivity',
      link: 'https://ziontechgroup.com/zion-project-master-ai'
    },
    {
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced CRM with predictive lead scoring, automated follow-ups, and intelligent sales forecasting.',
      features: ['AI Lead Scoring', 'Automated Follow-up Sequences', 'Sales Forecasting', 'Customer Journey Mapping', 'Email Integration', 'Call Recording & Analysis', 'Pipeline Management', 'Revenue Optimization'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase sales by 35%', 'Automated lead nurturing', 'Better conversion rates', 'Revenue optimization'],
      icon: Users,
      category: 'sales',
      link: 'https://ziontechgroup.com/zion-crm-intelligence'
    },
    {
      title: 'Zion Email Automation Pro',
      description: 'Advanced email marketing platform with AI-powered personalization, A/B testing, and behavioral triggers.',
      features: ['AI Personalization Engine', 'Advanced A/B Testing', 'Behavioral Trigger Automation', 'Email Template Builder', 'List Segmentation', 'Deliverability Optimization', 'Analytics & Reporting', 'Integration with 100+ tools'],
      price: '$69/month',
      marketPrice: '$150-500/month',
      benefits: ['Increase open rates by 250%', 'Automated personalization', 'Better deliverability', 'Advanced analytics'],
      icon: Mail,
      category: 'marketing',
      link: 'https://ziontechgroup.com/zion-email-automation-pro'
    },
    {
      title: 'Zion Invoice Genius AI',
      description: 'AI-powered invoice generation and management with automated billing, payment tracking, and financial insights.',
      features: ['AI Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking & Reminders', 'Tax Calculation & Filing', 'Client Portal', 'Financial Reporting', 'Integration with Accounting Software'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice creation time', 'Reduce payment delays by 60%', 'Automated tax calculations', 'Professional invoices'],
      icon: DollarSign,
      category: 'finance',
      link: 'https://ziontechgroup.com/zion-invoice-genius-ai'
    },
    {
      title: 'Zion AI Video Editor Pro',
      description: 'AI-powered video editing platform with automatic editing, voice synthesis, and multi-format export.',
      features: ['AI Auto-Editing', 'Voice Synthesis & Dubbing', 'Multi-format Export', 'Template Library', 'Color Correction AI', 'Audio Enhancement', 'Subtitle Generation', 'Cloud Rendering'],
      price: '$89/month',
      marketPrice: '$200-600/month',
      benefits: ['Save 70% editing time', 'Professional quality output', 'Automated editing', 'Multi-format support'],
      icon: Eye,
      category: 'video',
      link: 'https://ziontechgroup.com/zion-ai-video-editor-pro'
    },
    {
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with real-time translation, context understanding, and industry-specific terminology.',
      features: ['Real-time Translation', 'Context-Aware Translation', 'Industry-Specific Terminology', 'Voice Translation', 'Document Translation', 'Website Translation', 'API Integration', 'Quality Assurance'],
      price: '$79/month',
      marketPrice: '$150-500/month',
      benefits: ['99.5% translation accuracy', 'Real-time translation', 'Industry-specific terms', 'Multi-format support'],
      icon: Globe,
      category: 'translation',
      link: 'https://ziontechgroup.com/zion-ai-translator-pro'
    },
    {
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated bug detection, security analysis, and performance optimization suggestions.',
      features: ['Automated Bug Detection', 'Security Vulnerability Scanning', 'Performance Optimization', 'Code Quality Metrics', 'Best Practice Suggestions', 'Multi-language Support', 'Integration with Git', 'Team Collaboration'],
      price: '$99/month',
      marketPrice: '$200-800/month',
      benefits: ['Reduce bugs by 80%', 'Improve code quality', 'Security vulnerability detection', 'Performance optimization'],
      icon: Code,
      category: 'development',
      link: 'https://ziontechgroup.com/zion-ai-code-reviewer'
    },
    {
      title: 'Zion AI Customer Insights',
      description: 'Advanced customer analytics platform with sentiment analysis, churn prediction, and personalized recommendations.',
      features: ['Sentiment Analysis', 'Churn Prediction', 'Customer Segmentation', 'Personalized Recommendations', 'Behavioral Analytics', 'Survey Analysis', 'NPS Tracking', 'ROI Measurement'],
      price: '$119/month',
      marketPrice: '$250-700/month',
      benefits: ['Increase customer retention by 40%', 'Predict customer churn', 'Personalized experiences', 'Data-driven insights'],
      icon: Users,
      category: 'analytics',
      link: 'https://ziontechgroup.com/zion-ai-customer-insights'
=======
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Multi-tenant Architecture'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      icon: Star,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing', 'Live Agent Handoff', 'Multi-language Support'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation'],
      icon: Zap,
      category: 'Customer Service',
      popular: true
    },
    {
      title: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring and threat detection with automated incident response.',
      features: ['Real-time Threat Detection', 'Automated Incident Response', 'Compliance Monitoring', 'Vulnerability Scanning', 'Security Analytics', '24/7 SOC Support'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Proactive threat protection', 'Reduced security incidents', 'Compliance assurance', 'Expert security team'],
      icon: Shield,
      category: 'Security',
      popular: true
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, marketing materials, and multimedia content.',
      features: ['AI Content Generation', 'Multi-platform Publishing', 'SEO Optimization', 'Brand Voice Training', 'Content Calendar', 'Performance Analytics'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      icon: Clock,
      category: 'Content',
      popular: false
    },
    {
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automated workflows.',
      features: ['AI Lead Scoring', 'Predictive Analytics', 'Automated Workflows', 'Customer Segmentation', 'Sales Forecasting', 'Integration Hub'],
      price: '$129/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase sales by 35%', 'Better lead qualification', 'Automated follow-ups', 'Data-driven insights'],
      icon: Star,
      category: 'CRM',
      popular: false
    },
    {
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and nurturing.',
      features: ['AI-powered Lead Scoring', 'Multi-channel Lead Capture', 'Automated Lead Nurturing', 'CRM Integration', 'Advanced Analytics', 'A/B Testing'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase qualified leads by 300%', 'Automated lead nurturing', 'Better conversion rates', 'ROI optimization'],
      icon: Zap,
      category: 'Marketing',
      popular: true
    },
    {
      title: 'Zion Project Master',
      description: 'AI-powered project management with intelligent resource allocation and automated reporting.',
      features: ['AI Resource Allocation', 'Predictive Timeline Management', 'Risk Assessment', 'Team Collaboration', 'Progress Tracking', 'Automated Reporting'],
      price: '$69/month',
      marketPrice: '$120-350/month',
      benefits: ['Improved project success rate', 'Better resource utilization', 'Reduced project delays', 'Automated reporting'],
      icon: Clock,
      category: 'Project Management',
      popular: false
    },
    {
      title: 'Zion Email Automation',
      description: 'Intelligent email marketing platform with AI-powered personalization and automated campaigns.',
      features: ['AI Personalization', 'Automated Campaigns', 'A/B Testing', 'Advanced Segmentation', 'Deliverability Optimization', 'Performance Analytics'],
      price: '$59/month',
      marketPrice: '$100-300/month',
      benefits: ['Increase open rates by 40%', 'Automated campaigns', 'Better personalization', 'ROI optimization'],
      icon: Zap,
      category: 'Marketing',
      popular: false
    },
    {
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      features: ['AI-powered Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking', 'Tax Calculation', 'Client Portal'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice creation time', 'Reduce payment delays', 'Automated follow-ups', 'Professional invoices'],
      icon: Shield,
      category: 'Finance',
      popular: true
    },
    {
      title: 'Zion Workflow Automation',
      description: 'Intelligent business process automation with AI-powered workflow optimization and monitoring.',
      features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling', 'Performance Monitoring', 'Custom Integrations'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation'],
      icon: Clock,
      category: 'Automation',
      popular: false
    },
    {
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management with content optimization and automated posting.',
      features: ['AI Content Optimization', 'Multi-platform Scheduling', 'Hashtag Research', 'Engagement Analytics', 'Competitor Analysis', 'Content Calendar'],
      price: '$39/month',
      marketPrice: '$80-200/month',
      benefits: ['Increase engagement by 60%', 'Automated posting', 'Better content strategy', 'Time savings'],
      icon: Star,
      category: 'Social Media',
      popular: false
    },
    {
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing, effects, and optimization.',
      features: ['AI Auto-editing', 'Smart Cut Detection', 'Automated Subtitles', 'Color Correction', 'Audio Enhancement', 'Multi-format Export'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Save 70% editing time', 'Professional quality', 'Automated features', 'Easy to use'],
      icon: Zap,
      category: 'Video',
      popular: false
    },
    {
      title: 'Zion AI Translator Pro',
      description: 'Advanced AI translation platform with context-aware translations and real-time language processing.',
      features: ['100+ Languages', 'Context-aware Translation', 'Real-time Processing', 'Document Translation', 'Voice Translation', 'API Integration'],
      price: '$59/month',
      marketPrice: '$100-300/month',
      benefits: ['Accurate translations', 'Real-time processing', 'Multiple formats', 'API integration'],
      icon: Shield,
      category: 'Translation',
      popular: false
    },
    {
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated bug detection and security analysis.',
      features: ['Automated Code Review', 'Security Vulnerability Detection', 'Performance Analysis', 'Code Quality Metrics', 'Best Practice Suggestions', 'Team Collaboration'],
      price: '$99/month',
      marketPrice: '$200-500/month',
      benefits: ['Reduce bugs by 50%', 'Improve code quality', 'Security enhancement', 'Team learning'],
      icon: Clock,
      category: 'Development',
      popular: false
    },
    {
      title: 'Zion Customer Insights Pro',
      description: 'AI-powered customer analytics platform with sentiment analysis and behavioral insights.',
      features: ['Sentiment Analysis', 'Behavioral Tracking', 'Customer Segmentation', 'Churn Prediction', 'Lifetime Value Analysis', 'Real-time Dashboards'],
      price: '$119/month',
      marketPrice: '$250-600/month',
      benefits: ['Better customer understanding', 'Churn prevention', 'Personalized experiences', 'Data-driven decisions'],
      icon: Star,
      category: 'Analytics',
      popular: false
    },
    {
      title: 'Zion AI Email Assistant',
      description: 'Smart email management with AI-powered sorting, drafting, and response suggestions.',
      features: ['Smart Email Sorting', 'AI Draft Suggestions', 'Priority Classification', 'Auto-responses', 'Email Analytics', 'Calendar Integration'],
      price: '$39/month',
      marketPrice: '$80-200/month',
      benefits: ['Save 2 hours daily', 'Better email organization', 'Faster responses', 'Reduced email stress'],
      icon: Zap,
      category: 'Productivity',
      popular: false
    },
    {
      title: 'Zion AI Meeting Assistant',
      description: 'Intelligent meeting management with automated transcription, action items, and follow-ups.',
      features: ['Automated Transcription', 'Action Item Extraction', 'Meeting Summaries', 'Calendar Integration', 'Follow-up Automation', 'Team Collaboration'],
      price: '$69/month',
      marketPrice: '$120-350/month',
      benefits: ['Better meeting efficiency', 'Automated follow-ups', 'Improved accountability', 'Time savings'],
      icon: Shield,
      category: 'Productivity',
      popular: false
    },
    {
      title: 'Zion AI SEO Optimizer',
      description: 'AI-powered SEO optimization platform with keyword research and content optimization.',
      features: ['Keyword Research', 'Content Optimization', 'Competitor Analysis', 'Rank Tracking', 'Technical SEO Audit', 'Performance Monitoring'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Increase organic traffic', 'Better search rankings', 'Automated optimization', 'Competitive advantage'],
      icon: Clock,
      category: 'SEO',
      popular: false
    },
    {
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated data quality management.',
      features: ['Automated Data Cleaning', 'Duplicate Detection', 'Data Validation', 'Format Standardization', 'Quality Scoring', 'Error Reporting'],
      price: '$59/month',
      marketPrice: '$100-300/month',
      benefits: ['Improve data quality', 'Reduce errors', 'Automated cleaning', 'Better analytics'],
      icon: Star,
      category: 'Data',
      popular: false
    },
    {
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis and risk assessment with automated legal document processing.',
      features: ['Contract Analysis', 'Risk Assessment', 'Clause Extraction', 'Compliance Checking', 'Automated Summaries', 'Legal Database Integration'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Faster contract review', 'Risk reduction', 'Compliance assurance', 'Time savings'],
      icon: Zap,
      category: 'Legal',
      popular: false
>>>>>>> cursor/website-audit-and-update-with-deployment-9351
    }
  ]

  const categories = [
    { id: 'all', name: 'All Tools', count: microSaasTools.length },
    { id: 'content', name: 'Content & Marketing', count: microSaasTools.filter(t => t.category === 'content').length },
    { id: 'analytics', name: 'Analytics & BI', count: microSaasTools.filter(t => t.category === 'analytics').length },
    { id: 'security', name: 'Security', count: microSaasTools.filter(t => t.category === 'security').length },
    { id: 'productivity', name: 'Productivity', count: microSaasTools.filter(t => t.category === 'productivity').length },
    { id: 'sales', name: 'Sales & CRM', count: microSaasTools.filter(t => t.category === 'sales').length },
    { id: 'marketing', name: 'Marketing', count: microSaasTools.filter(t => t.category === 'marketing').length },
    { id: 'finance', name: 'Finance', count: microSaasTools.filter(t => t.category === 'finance').length },
    { id: 'social', name: 'Social Media', count: microSaasTools.filter(t => t.category === 'social').length },
    { id: 'video', name: 'Video & Media', count: microSaasTools.filter(t => t.category === 'video').length },
    { id: 'translation', name: 'Translation', count: microSaasTools.filter(t => t.category === 'translation').length },
    { id: 'development', name: 'Development', count: microSaasTools.filter(t => t.category === 'development').length }
  ]

  const filteredTools = microSaasTools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  })

  const features = [
    {
      title: 'Rapid Deployment',
      description: 'Get your micro SaaS solution up and running in days, not months.',
      icon: Zap
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to handle growth from startup to enterprise scale.',
      icon: Star
    },
    {
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI to provide intelligent features and automation.',
      icon: CheckCircle
    },
    {
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security and compliance built-in from day one.',
      icon: Shield
    }
  ]

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our micro SaaS solutions designed to solve specific business problems with AI-powered tools and rapid deployment." />
        <meta name="keywords" content="micro SaaS, AI tools, business automation, SaaS solutions, productivity tools" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, focused tools that solve specific business problems with AI-powered intelligence and rapid deployment.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SaaS tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredTools.map((tool, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group cyber-card-enhanced">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <tool.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">{tool.price}</div>
                      {tool.marketPrice && (
                        <div className="text-sm text-gray-400 line-through">{tool.marketPrice}</div>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{tool.title}</h3>                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {tool.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {tool.benefits && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {tool.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-green-300 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Started
                    </a>                  </div>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Micro SaaS Solutions?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center cyber-card-enhanced">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose from our ready-made solutions or let us build a custom micro SaaS tool for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Browse Solutions
                </button>
                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300">
                  Custom Development
                </button>=======
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
              <div className="mt-6 text-sm text-gray-400">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3339
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default MicroSaasPage