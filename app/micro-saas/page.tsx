'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield } from 'lucide-react'

const MicroSaasPage: React.FC = () => {
  const microSaasTools = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Multi-tenant Architecture', 'API Integration', 'White-label Options'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting', 'ROI tracking'],
      icon: Star
    },
    {
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing', 'Live Agent Handoff', 'Multi-language Support', 'CRM Integration', 'Custom Training'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation', 'Cost reduction'],
      icon: Zap
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform with automated response capabilities.',
      features: ['Real-time Threat Detection', 'Automated Incident Response', 'Compliance Monitoring', 'Vulnerability Scanning', 'Security Analytics', 'Threat Intelligence', 'Penetration Testing', 'Security Training'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Enhanced security posture', 'Reduced security incidents', 'Compliance assurance', 'Automated protection', 'Expert support'],
      icon: Shield
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Enterprise-grade cloud backup and disaster recovery solution with AI-powered data management.',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Version Control', 'Cross-platform Sync', 'Compliance Tools', 'AI Data Classification', 'Recovery Testing'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Data protection', 'Business continuity', 'Compliance ready', 'Automated recovery', 'Cost effective'],
      icon: Clock
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, marketing materials, and multimedia content.',
      features: ['AI Content Generation', 'Multi-format Support', 'Brand Voice Training', 'SEO Optimization', 'Content Calendar', 'Team Collaboration', 'Performance Analytics', 'Plagiarism Detection'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['10x content production', 'Consistent brand voice', 'SEO optimization', 'Time savings', 'Quality assurance'],
      icon: Star
    },
    {
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automated workflows.',
      features: ['AI Lead Scoring', 'Predictive Analytics', 'Automated Workflows', 'Multi-channel Integration', 'Sales Forecasting', 'Customer Insights', 'Pipeline Management', 'Custom Reports'],
      price: '$129/month',
      marketPrice: '$250-700/month',
      benefits: ['Increased sales conversion', 'Better lead qualification', 'Automated follow-ups', 'Data-driven insights', 'Team productivity'],
      icon: Zap
    },
    {
      title: 'Zion Data Sync',
      description: 'Advanced data integration and synchronization platform with real-time processing and AI-powered mapping.',
      features: ['Real-time Sync', 'Data Transformation', 'API Management', 'Error Handling', 'Data Quality Tools', 'Custom Connectors', 'Monitoring Dashboard', 'Compliance Features'],
      price: '$159/month',
      marketPrice: '$300-800/month',
      benefits: ['Unified data view', 'Reduced manual work', 'Improved data quality', 'Real-time insights', 'Scalable integration'],
      icon: Clock
    },
    {
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and nurturing.',
      features: ['AI Lead Scoring', 'Multi-channel Capture', 'Automated Nurturing', 'CRM Integration', 'Advanced Analytics', 'A/B Testing', 'Landing Page Builder', 'Email Automation'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['300% more qualified leads', 'Automated nurturing', 'Better conversion rates', 'ROI optimization', 'Time savings'],
      icon: Star
    },
    {
      title: 'Zion Project Master',
      description: 'AI-powered project management platform with intelligent resource allocation and predictive analytics.',
      features: ['AI Resource Planning', 'Predictive Analytics', 'Task Automation', 'Team Collaboration', 'Progress Tracking', 'Risk Assessment', 'Budget Management', 'Timeline Optimization'],
      price: '$119/month',
      marketPrice: '$200-600/month',
      benefits: ['Project success rate', 'Resource optimization', 'Timeline accuracy', 'Team productivity', 'Risk mitigation'],
      icon: Shield
    },
    {
      title: 'Zion Email Automation',
      description: 'Intelligent email marketing platform with AI-powered personalization and behavioral triggers.',
      features: ['AI Personalization', 'Behavioral Triggers', 'A/B Testing', 'Advanced Segmentation', 'Deliverability Optimization', 'Analytics Dashboard', 'Template Builder', 'Compliance Tools'],
      price: '$69/month',
      marketPrice: '$120-400/month',
      benefits: ['Higher open rates', 'Better engagement', 'Automated campaigns', 'Personalized content', 'ROI improvement'],
      icon: Zap
    },
    {
      title: 'Zion Inventory Smart',
      description: 'AI-powered inventory management system with demand forecasting and automated reordering.',
      features: ['Demand Forecasting', 'Automated Reordering', 'Multi-location Support', 'Supplier Management', 'Cost Optimization', 'Quality Control', 'Reporting Dashboard', 'Mobile Access'],
      price: '$139/month',
      marketPrice: '$250-700/month',
      benefits: ['Reduced stockouts', 'Lower inventory costs', 'Improved cash flow', 'Better supplier relations', 'Automated processes'],
      icon: Clock
    },
    {
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      features: ['AI Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking', 'Tax Calculation', 'Client Portal', 'Late Payment Automation', 'Financial Reporting'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['90% time savings', 'Reduced payment delays', 'Automated follow-ups', 'Professional invoices', 'Better cash flow'],
      icon: Star
    },
    {
      title: 'Zion Workflow Automation',
      description: 'No-code workflow automation platform with AI-powered process optimization and intelligent routing.',
      features: ['Visual Workflow Builder', 'AI Process Optimization', 'Smart Routing', 'Integration Hub', 'Conditional Logic', 'Error Handling', 'Performance Analytics', 'Custom Triggers'],
      price: '$109/month',
      marketPrice: '$200-600/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation', 'Team productivity'],
      icon: Shield
    },
    {
      title: 'Zion Performance Monitor',
      description: 'Comprehensive application and infrastructure monitoring with AI-powered anomaly detection.',
      features: ['Real-time Monitoring', 'AI Anomaly Detection', 'Performance Analytics', 'Alert Management', 'Custom Dashboards', 'Log Analysis', 'Capacity Planning', 'SLA Tracking'],
      price: '$179/month',
      marketPrice: '$300-900/month',
      benefits: ['Proactive issue detection', 'Reduced downtime', 'Performance optimization', 'Cost savings', 'Better user experience'],
      icon: Zap
    },
    {
      title: 'Zion Compliance Manager',
      description: 'Automated compliance management platform with AI-powered risk assessment and reporting.',
      features: ['Compliance Monitoring', 'Risk Assessment', 'Automated Reporting', 'Policy Management', 'Audit Trails', 'Regulatory Updates', 'Training Management', 'Documentation Tools'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Compliance assurance', 'Reduced audit time', 'Risk mitigation', 'Automated reporting', 'Cost savings'],
      icon: Clock
    },
    {
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management platform with content optimization and engagement analytics.',
      features: ['AI Content Optimization', 'Multi-platform Scheduling', 'Engagement Analytics', 'Hashtag Research', 'Competitor Analysis', 'Content Calendar', 'Team Collaboration', 'Performance Tracking'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Increased engagement', 'Time savings', 'Better content strategy', 'Analytics insights', 'Multi-platform management'],
      icon: Star
    },
    {
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing, effects, and content optimization.',
      features: ['AI Auto-editing', 'Smart Effects', 'Content Optimization', 'Multi-format Export', 'Collaboration Tools', 'Template Library', 'Performance Analytics', 'Cloud Storage'],
      price: '$129/month',
      marketPrice: '$250-700/month',
      benefits: ['Professional videos', 'Time savings', 'Consistent quality', 'Easy to use', 'Cost effective'],
      icon: Shield
    },
    {
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with AI-powered language processing and cultural adaptation.',
      features: ['100+ Languages', 'AI Cultural Adaptation', 'Real-time Translation', 'Document Processing', 'Voice Translation', 'Quality Assurance', 'API Integration', 'Custom Dictionaries'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Global reach', 'Cultural accuracy', 'Time savings', 'Cost reduction', 'Quality assurance'],
      icon: Zap
    },
    {
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated testing, security scanning, and performance optimization.',
      features: ['Automated Code Review', 'Security Scanning', 'Performance Analysis', 'Best Practice Checks', 'Team Collaboration', 'Integration Support', 'Custom Rules', 'Learning Recommendations'],
      price: '$159/month',
      marketPrice: '$300-800/month',
      benefits: ['Code quality improvement', 'Security enhancement', 'Faster development', 'Team learning', 'Bug prevention'],
      icon: Clock
    },
    {
      title: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics platform with AI-powered insights and behavioral prediction.',
      features: ['Customer Segmentation', 'Behavioral Analysis', 'Predictive Modeling', 'Churn Prediction', 'Lifetime Value', 'Personalization Engine', 'A/B Testing', 'ROI Analytics'],
      price: '$169/month',
      marketPrice: '$300-900/month',
      benefits: ['Better customer understanding', 'Increased retention', 'Personalized experiences', 'Data-driven decisions', 'Revenue growth'],
      icon: Star
    },
    {
      title: 'Zion AI Email Assistant',
      description: 'Intelligent email management with AI-powered sorting, responses, and productivity features.',
      features: ['Smart Email Sorting', 'AI Response Suggestions', 'Priority Detection', 'Scheduling Assistant', 'Follow-up Automation', 'Spam Protection', 'Template Library', 'Analytics Dashboard'],
      price: '$59/month',
      marketPrice: '$100-300/month',
      benefits: ['Email productivity', 'Time savings', 'Better organization', 'Automated responses', 'Reduced stress'],
      icon: Shield
    },
    {
      title: 'Zion AI Meeting Assistant',
      description: 'AI-powered meeting management with transcription, action items, and intelligent scheduling.',
      features: ['Real-time Transcription', 'Action Item Extraction', 'Meeting Summaries', 'Smart Scheduling', 'Follow-up Automation', 'Integration Support', 'Analytics Dashboard', 'Custom Workflows'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Meeting efficiency', 'Better documentation', 'Action tracking', 'Time savings', 'Improved outcomes'],
      icon: Zap
    },
    {
      title: 'Zion AI SEO Optimizer',
      description: 'Comprehensive SEO platform with AI-powered optimization and competitive analysis.',
      features: ['AI Content Optimization', 'Keyword Research', 'Competitive Analysis', 'Technical SEO', 'Link Building', 'Performance Tracking', 'Local SEO', 'Schema Markup'],
      price: '$119/month',
      marketPrice: '$200-600/month',
      benefits: ['Higher search rankings', 'Increased organic traffic', 'Better visibility', 'Competitive advantage', 'ROI improvement'],
      icon: Clock
    },
    {
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with AI-powered quality assurance.',
      features: ['AI Data Validation', 'Duplicate Detection', 'Format Standardization', 'Quality Scoring', 'Error Correction', 'Data Enrichment', 'Compliance Checks', 'Custom Rules'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data quality improvement', 'Time savings', 'Error reduction', 'Better insights', 'Compliance ready'],
      icon: Star
    },
    {
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis and management platform with risk assessment and compliance checking.',
      features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Clause Extraction', 'Renewal Tracking', 'Template Management', 'Collaboration Tools', 'Legal Database'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Risk mitigation', 'Time savings', 'Better compliance', 'Cost reduction', 'Legal protection'],
      icon: Shield
    },
    {
      title: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation platform with AI-powered question optimization and analytics.',
      features: ['AI Question Optimization', 'Smart Logic', 'Multi-channel Distribution', 'Advanced Analytics', 'A/B Testing', 'Response Analysis', 'Integration Support', 'Custom Branding'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Better response rates', 'Quality insights', 'Time savings', 'Professional surveys', 'Data analysis'],
      icon: Zap
    },
    {
      title: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting platform with automated bookkeeping and financial insights.',
      features: ['Automated Bookkeeping', 'Expense Categorization', 'Financial Reporting', 'Tax Preparation', 'Invoice Processing', 'Bank Reconciliation', 'Budget Planning', 'Compliance Tools'],
      price: '$149/month',
      marketPrice: '$250-700/month',
      benefits: ['Automated bookkeeping', 'Time savings', 'Better accuracy', 'Financial insights', 'Tax compliance'],
      icon: Clock
    },
    {
      title: 'Zion AI Recruitment Pro',
      description: 'Intelligent recruitment platform with AI-powered candidate screening and matching.',
      features: ['AI Candidate Screening', 'Skill Matching', 'Interview Scheduling', 'Background Checks', 'Performance Analytics', 'Pipeline Management', 'Integration Support', 'Custom Workflows'],
      price: '$179/month',
      marketPrice: '$300-900/month',
      benefits: ['Better candidate quality', 'Faster hiring', 'Reduced bias', 'Time savings', 'Improved outcomes'],
      icon: Star
    },
    {
      title: 'Zion AI Content Moderation',
      description: 'AI-powered content moderation platform with automated filtering and compliance management.',
      features: ['AI Content Filtering', 'Multi-language Support', 'Custom Rules', 'Real-time Processing', 'Compliance Tools', 'Analytics Dashboard', 'API Integration', 'Custom Training'],
      price: '$129/month',
      marketPrice: '$250-700/month',
      benefits: ['Automated moderation', 'Consistent enforcement', 'Cost savings', 'Scalable solution', 'Compliance ready'],
      icon: Shield
    },
    {
      title: 'Zion AI Predictive Maintenance',
      description: 'Intelligent maintenance management with AI-powered equipment monitoring and failure prediction.',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Performance Analytics', 'Alert System', 'Integration Support', 'Custom Models'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Reduced downtime', 'Cost savings', 'Preventive maintenance', 'Equipment longevity', 'Better planning'],
      icon: Zap
    },
    {
      title: 'Zion AI Energy Manager',
      description: 'Smart energy management platform with AI-powered optimization and cost reduction.',
      features: ['Energy Monitoring', 'Usage Optimization', 'Cost Analysis', 'Predictive Modeling', 'Automated Controls', 'Reporting Dashboard', 'Integration Support', 'Custom Alerts'],
      price: '$159/month',
      marketPrice: '$300-800/month',
      benefits: ['Energy cost reduction', 'Efficiency improvement', 'Environmental impact', 'Automated optimization', 'Better insights'],
      icon: Clock
    },
    {
      title: 'Zion AI Supply Chain Optimizer',
      description: 'AI-powered supply chain management with demand forecasting and logistics optimization.',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Management', 'Logistics Planning', 'Risk Assessment', 'Cost Analysis', 'Performance Tracking', 'Integration Support'],
      price: '$229/month',
      marketPrice: '$400-1200/month',
      benefits: ['Cost reduction', 'Efficiency improvement', 'Risk mitigation', 'Better planning', 'Competitive advantage'],
      icon: Star
    },
    {
      title: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection platform with AI-powered risk assessment and real-time monitoring.',
      features: ['Real-time Monitoring', 'Risk Scoring', 'Pattern Detection', 'Machine Learning', 'Custom Rules', 'Alert System', 'Analytics Dashboard', 'Integration Support'],
      price: '$189/month',
      marketPrice: '$350-1000/month',
      benefits: ['Fraud prevention', 'Cost savings', 'Real-time protection', 'Reduced false positives', 'Better security'],
      icon: Shield
    },
    {
      title: 'Zion AI Customer Service Pro',
      description: 'Advanced customer service platform with AI-powered support and sentiment analysis.',
      features: ['AI Support Agents', 'Sentiment Analysis', 'Multi-channel Support', 'Knowledge Base', 'Escalation Management', 'Performance Analytics', 'Integration Support', 'Custom Training'],
      price: '$169/month',
      marketPrice: '$300-900/month',
      benefits: ['Improved customer satisfaction', 'Reduced response time', 'Cost savings', '24/7 support', 'Better insights'],
      icon: Zap
    },
    {
      title: 'Zion AI Marketing Automation',
      description: 'Intelligent marketing automation platform with AI-powered campaigns and personalization.',
      features: ['AI Campaign Optimization', 'Personalization Engine', 'Multi-channel Marketing', 'Lead Scoring', 'A/B Testing', 'Analytics Dashboard', 'Integration Support', 'Custom Workflows'],
      price: '$139/month',
      marketPrice: '$250-700/month',
      benefits: ['Better campaign performance', 'Increased conversions', 'Time savings', 'Personalized experiences', 'ROI improvement'],
      icon: Clock
    },
    {
      title: 'Zion AI Document AI',
      description: 'Comprehensive document processing platform with AI-powered extraction and analysis.',
      features: ['Document Processing', 'Data Extraction', 'OCR Technology', 'Classification', 'Search & Retrieval', 'Version Control', 'Collaboration Tools', 'Integration Support'],
      price: '$119/month',
      marketPrice: '$200-600/month',
      benefits: ['Document digitization', 'Time savings', 'Better organization', 'Search capabilities', 'Cost reduction'],
      icon: Star
    }
  ]

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
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, focused tools that solve specific business problems with AI-powered intelligence and rapid deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 grid-mobile">
              {microSaasTools.map((tool, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group service-card-mobile">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {tool.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-xs">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {tool.benefits && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {tool.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-green-300 text-xs">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-cyan-400">{tool.price}</span>
                      {tool.marketPrice && (
                        <span className="text-gray-400 text-sm line-through">{tool.marketPrice}</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Competitive pricing vs market</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      Learn More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
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

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose from our ready-made solutions or let us build a custom micro SaaS tool for your specific needs. 
                All solutions include free setup, training, and 30-day money-back guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
              <div className="text-center text-gray-400">
                <p className="mb-2">📧 kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
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