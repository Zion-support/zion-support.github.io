'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Code, Target, Users, DollarSign, Box, FileText, Heart, Home, BookOpen, Settings, ShoppingCart, Truck, TreePine, Hammer, Hotel } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasTools = [
    {
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
      title: 'Zion AI Code Assistant Pro',
      description: 'Intelligent code generation, review, and optimization platform with support for 50+ programming languages.',
      features: ['AI Code Generation', 'Automated Code Review', 'Bug Detection & Fixes', 'Performance Optimization', 'Security Analysis', 'Multi-language Support', 'IDE Integration', 'Team Collaboration'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Reduce development time by 60%', 'Improve code quality', 'Automated bug detection', 'Enhanced security'],
      icon: Code,
      category: 'Development',
      popular: true
    },
    {
      title: 'Zion AI Marketing Automation',
      description: 'Complete marketing automation platform with AI-powered campaign optimization and customer journey mapping.',
      features: ['AI Campaign Optimization', 'Customer Journey Mapping', 'Email Marketing Automation', 'Social Media Management', 'Lead Scoring', 'A/B Testing', 'ROI Analytics', 'Multi-channel Integration'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Increase conversions by 45%', 'Automated campaigns', 'Better lead qualification', 'ROI optimization'],
      icon: Target,
      category: 'Marketing',
      popular: true
    },
    {
      title: 'Zion AI Customer Success Platform',
      description: 'AI-powered customer success management with predictive churn analysis and automated engagement workflows.',
      features: ['Churn Prediction', 'Automated Engagement', 'Customer Health Scoring', 'Success Metrics Tracking', 'Proactive Alerts', 'Integration Hub', 'Custom Workflows', 'Analytics Dashboard'],
      price: '$179/month',
      marketPrice: '$350-1000/month',
      benefits: ['Reduce churn by 40%', 'Improve customer satisfaction', 'Automated success management', 'Better retention'],
      icon: Users,
      category: 'Customer Success',
      popular: true
    },
    {
      title: 'Zion AI Financial Planning',
      description: 'Intelligent financial planning and budgeting platform with AI-powered forecasting and investment recommendations.',
      features: ['AI Financial Forecasting', 'Budget Optimization', 'Investment Analysis', 'Risk Assessment', 'Tax Planning', 'Goal Tracking', 'Portfolio Management', 'Compliance Monitoring'],
      price: '$129/month',
      marketPrice: '$250-700/month',
      benefits: ['Better financial decisions', 'Automated planning', 'Risk reduction', 'Goal achievement'],
      icon: DollarSign,
      category: 'Finance',
      popular: false
    },
    {
      title: 'Zion AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics planning.',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Management', 'Logistics Planning', 'Cost Analysis', 'Risk Assessment', 'Real-time Tracking', 'Performance Analytics'],
      price: '$299/month',
      marketPrice: '$600-2000/month',
      benefits: ['Reduce costs by 25%', 'Improve efficiency', 'Better supplier management', 'Optimized logistics'],
      icon: Box,
      category: 'Supply Chain',
      popular: false
    },
    {
      title: 'Zion AI HR Intelligence',
      description: 'Comprehensive HR management platform with AI-powered recruitment, performance analysis, and employee engagement.',
      features: ['AI Recruitment', 'Performance Analytics', 'Employee Engagement', 'Skills Assessment', 'Retention Prediction', 'Payroll Automation', 'Compliance Management', 'Workforce Planning'],
      price: '$159/month',
      marketPrice: '$300-900/month',
      benefits: ['Better hiring decisions', 'Improve retention', 'Automated HR processes', 'Enhanced engagement'],
      icon: Users,
      category: 'Human Resources',
      popular: true
    },
    {
      title: 'Zion AI Legal Assistant',
      description: 'AI-powered legal document analysis, contract review, and compliance monitoring platform.',
      features: ['Contract Analysis', 'Legal Document Review', 'Compliance Monitoring', 'Risk Assessment', 'Document Generation', 'Case Law Research', 'Deadline Tracking', 'Client Management'],
      price: '$249/month',
      marketPrice: '$500-1500/month',
      benefits: ['Faster document review', 'Reduced legal risks', 'Automated compliance', 'Better case management'],
      icon: FileText,
      category: 'Legal',
      popular: false
    },
    {
      title: 'Zion AI Healthcare Analytics',
      description: 'Medical data analysis platform with patient insights, treatment optimization, and health outcome predictions.',
      features: ['Patient Analytics', 'Treatment Optimization', 'Health Outcome Prediction', 'Risk Assessment', 'Clinical Decision Support', 'Data Integration', 'Compliance Management', 'Reporting Tools'],
      price: '$399/month',
      marketPrice: '$800-2500/month',
      benefits: ['Improve patient outcomes', 'Optimize treatments', 'Reduce costs', 'Better care quality'],
      icon: Heart,
      category: 'Healthcare',
      popular: false
    },
    {
      title: 'Zion AI Real Estate Pro',
      description: 'Intelligent real estate management with property valuation, market analysis, and investment optimization.',
      features: ['Property Valuation', 'Market Analysis', 'Investment Optimization', 'Tenant Screening', 'Maintenance Scheduling', 'Financial Reporting', 'Portfolio Management', 'Risk Assessment'],
      price: '$189/month',
      marketPrice: '$350-1000/month',
      benefits: ['Better investment decisions', 'Optimized property management', 'Reduced risks', 'Increased returns'],
      icon: Home,
      category: 'Real Estate',
      popular: false
    },
    {
      title: 'Zion AI Education Platform',
      description: 'AI-powered learning management system with personalized education, progress tracking, and skill assessment.',
      features: ['Personalized Learning', 'Progress Tracking', 'Skill Assessment', 'Content Generation', 'Adaptive Testing', 'Performance Analytics', 'Gamification', 'Multi-language Support'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Improved learning outcomes', 'Personalized education', 'Better engagement', 'Automated assessment'],
      icon: BookOpen,
      category: 'Education',
      popular: true
    },
    {
      title: 'Zion AI Energy Manager',
      description: 'Smart energy management platform with consumption optimization, cost analysis, and sustainability tracking.',
      features: ['Energy Consumption Analysis', 'Cost Optimization', 'Sustainability Tracking', 'Predictive Maintenance', 'Renewable Integration', 'Carbon Footprint', 'Real-time Monitoring', 'Automated Controls'],
      price: '$169/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduce energy costs by 30%', 'Improve sustainability', 'Automated optimization', 'Better monitoring'],
      icon: Zap,
      category: 'Energy',
      popular: false
    },
    {
      title: 'Zion AI Manufacturing Optimizer',
      description: 'Industrial AI platform for production optimization, quality control, and predictive maintenance.',
      features: ['Production Optimization', 'Quality Control', 'Predictive Maintenance', 'Supply Chain Integration', 'Performance Monitoring', 'Cost Analysis', 'Safety Management', 'Compliance Tracking'],
      price: '$349/month',
      marketPrice: '$700-2000/month',
      benefits: ['Increase production efficiency', 'Improve quality', 'Reduce downtime', 'Optimize costs'],
      icon: Settings,
      category: 'Manufacturing',
      popular: false
    },
    {
      title: 'Zion AI Retail Intelligence',
      description: 'Smart retail management with inventory optimization, customer analytics, and sales forecasting.',
      features: ['Inventory Optimization', 'Customer Analytics', 'Sales Forecasting', 'Price Optimization', 'Demand Planning', 'Customer Segmentation', 'Promotion Management', 'Performance Tracking'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Increase sales by 25%', 'Optimize inventory', 'Better customer insights', 'Improved forecasting'],
      icon: ShoppingCart,
      category: 'Retail',
      popular: true
    },
    {
      title: 'Zion AI Insurance Platform',
      description: 'AI-powered insurance management with risk assessment, claims processing, and fraud detection.',
      features: ['Risk Assessment', 'Claims Processing', 'Fraud Detection', 'Policy Management', 'Customer Service', 'Underwriting Support', 'Compliance Monitoring', 'Analytics Dashboard'],
      price: '$279/month',
      marketPrice: '$550-1500/month',
      benefits: ['Reduce fraud by 60%', 'Faster claims processing', 'Better risk assessment', 'Improved efficiency'],
      icon: Shield,
      category: 'Insurance',
      popular: false
    },
    {
      title: 'Zion AI Transportation Optimizer',
      description: 'Logistics and transportation management with route optimization, fleet management, and delivery tracking.',
      features: ['Route Optimization', 'Fleet Management', 'Delivery Tracking', 'Fuel Optimization', 'Driver Management', 'Maintenance Scheduling', 'Cost Analysis', 'Performance Monitoring'],
      price: '$229/month',
      marketPrice: '$450-1200/month',
      benefits: ['Reduce delivery costs by 35%', 'Optimize routes', 'Improve efficiency', 'Better tracking'],
      icon: Truck,
      category: 'Transportation',
      popular: false
    },
    {
      title: 'Zion AI Agriculture Pro',
      description: 'Smart farming platform with crop monitoring, yield prediction, and resource optimization.',
      features: ['Crop Monitoring', 'Yield Prediction', 'Resource Optimization', 'Weather Integration', 'Pest Detection', 'Soil Analysis', 'Irrigation Management', 'Harvest Planning'],
      price: '$199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Increase crop yields by 20%', 'Optimize resources', 'Reduce waste', 'Better planning'],
      icon: TreePine,
      category: 'Agriculture',
      popular: false
    },
    {
      title: 'Zion AI Construction Manager',
      description: 'Construction project management with progress tracking, resource optimization, and safety monitoring.',
      features: ['Project Tracking', 'Resource Optimization', 'Safety Monitoring', 'Progress Analytics', 'Cost Management', 'Schedule Optimization', 'Quality Control', 'Risk Assessment'],
      price: '$249/month',
      marketPrice: '$500-1500/month',
      benefits: ['Reduce project delays', 'Optimize resources', 'Improve safety', 'Better cost control'],
      icon: Hammer,
      category: 'Construction',
      popular: false
    },
    {
      title: 'Zion AI Hospitality Suite',
      description: 'Hotel and restaurant management with guest analytics, revenue optimization, and operational efficiency.',
      features: ['Guest Analytics', 'Revenue Optimization', 'Inventory Management', 'Staff Scheduling', 'Customer Service', 'Marketing Automation', 'Performance Tracking', 'Compliance Management'],
      price: '$179/month',
      marketPrice: '$350-1000/month',
      benefits: ['Increase revenue by 30%', 'Improve guest satisfaction', 'Optimize operations', 'Better management'],
      icon: Hotel,
      category: 'Hospitality',
      popular: false
    },
    {
      title: 'Zion AI Non-Profit Manager',
      description: 'Non-profit organization management with donor analytics, volunteer coordination, and impact tracking.',
      features: ['Donor Analytics', 'Volunteer Coordination', 'Impact Tracking', 'Fundraising Optimization', 'Grant Management', 'Event Planning', 'Communication Tools', 'Reporting Dashboard'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase donations', 'Better volunteer management', 'Track impact', 'Improve efficiency'],
      icon: Heart,
      category: 'Non-Profit',
      popular: false
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {microSaasTools.map((tool, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 hover:scale-105 group ${
                  tool.popular ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/20' : 'border-white/10 hover:border-cyan-400/30'
                }`}>
                  {tool.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <tool.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{tool.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{tool.price}</span>
                        {tool.marketPrice && (
                          <span className="text-gray-400 text-sm line-through">{tool.marketPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {tool.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
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
                    <div className="text-xs text-gray-400">
                      <span className="bg-gray-700 px-2 py-1 rounded">{tool.category}</span>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                      Try Now
                    </button>
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
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Browse Solutions
                </button>
                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300">
                  Custom Development
                </button>
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