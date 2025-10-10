'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Users, Mail, DollarSign, Globe, Eye, Code, Search, Filter, ExternalLink } from 'lucide-react';

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
      title: 'Zion Social Scheduler AI',
      description: 'Intelligent social media management with AI content optimization, optimal posting times, and engagement analytics.',
      features: ['AI Content Optimization', 'Optimal Posting Time Detection', 'Multi-platform Publishing', 'Engagement Analytics', 'Hashtag Research', 'Competitor Analysis', 'Content Calendar', 'Team Collaboration'],
      price: '$59/month',
      marketPrice: '$120-400/month',
      benefits: ['Increase engagement by 200%', 'Optimal posting times', 'Content optimization', 'Multi-platform management'],
      icon: Globe,
      category: 'social',
      link: 'https://ziontechgroup.com/zion-social-scheduler-ai'
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
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{tool.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {tool.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
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
                    </a>
                  </div>
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
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default MicroSaasPage;