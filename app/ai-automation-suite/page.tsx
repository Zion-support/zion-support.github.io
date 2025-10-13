<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Zap, Bot, Settings, Workflow } from 'lucide-react';

=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { Helmet } from 'react-helmet-async';
import React, { CheckCircle, TrendingUp, Phone, Mail, MapPin, Zap, Bot, Settings, Workflow } from 'lucide-react';
=======
import React from 'react'.;
import { Helmet } from 'react-helmet-async'.;
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Zap, Bot, Settings, Workflow } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
>>>>>>> origin/main
const AIAutomationSuitePage: React.FC = () => {
  const automationServices = [
    {,
      title: 'AI Workflow Automation',
      description: 'Intelligent business process automation with decision-making capabilities and exception handling.',
      icon: '🔄',
      price: '$399/month',
      features: [,
        'Process Discovery & Mapping',
        'RPA Implementation',
        'Workflow Optimization',
        'Decision Automation',
        'Exception Handling',
        'Performance Monitoring',
        'Custom Integrations',
        'Scalable Architecture'
      ],
      benefits: [,
        'Automate 80% of repetitive tasks',
        'Reduce processing time by 70%',
        'Improve accuracy to 99.9%',
        'Free up staff for strategic work',
        'Scale operations efficiently'
      ],
      marketPrice: '$1,000-3,000/month',
      category: 'Workflow Automation',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Python', 'APIs', 'Workflow Engines'],
<<<<<<< HEAD
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
=======
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
>>>>>>> origin/main
    },
    {
      title: 'AI Email Automation',
      description: 'Intelligent email processing, categorization, response generation, and follow-up automation.',
      icon: '📧',
      price: '$199/month',
      features: [,
        'Email Classification',
        'Auto-response Generation',
        'Sentiment Analysis',
        'Priority Scoring',
        'Follow-up Automation',
        'Template Management',
        'Spam Detection',
        'Analytics Dashboard'
      ],
      benefits: [,
        'Process 10,000+ emails daily',
        'Reduce response time by 80%',
        'Improve customer satisfaction',
        'Eliminate manual sorting',
        'Scale email operations'
      ],
      marketPrice: '$500-1,500/month',
      category: 'Email Automation',
      technologies: ['NLP', 'Machine Learning', 'Email APIs', 'Sentiment Analysis', 'Template Engine'],
<<<<<<< HEAD
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
=======
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
>>>>>>> origin/main
    },
    {
      title: 'AI Document Processing',
      description: 'Automated document extraction, classification, and data entry with OCR and intelligent parsing.',
      icon: '📄',
      price: '$299/month',
      features: [,
        'OCR & Text Extraction',
        'Document Classification',
        'Data Extraction',
        'Form Processing',
        'Quality Validation',
        'Batch Processing',
        'Custom Templates',
        'Error Handling'
      ],
      benefits: [,
        'Process 5,000+ documents daily',
        'Reduce data entry by 90%',
        'Improve accuracy to 99.5%',
        'Eliminate manual processing',
        'Accelerate workflows'
      ],
      marketPrice: '$800-2,500/month',
      category: 'Document Processing',
      technologies: ['OCR', 'Computer Vision', 'NLP', 'Machine Learning', 'Document APIs', 'Data Extraction'],
<<<<<<< HEAD
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
=======
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
>>>>>>> origin/main
    },
    {
      title: 'AI Customer Service Automation',
      description: 'Intelligent customer service with chatbots, ticket routing, and automated resolution.',
      icon: '🎧',
<<<<<<< HEAD
      price: '$249/month',
      features: [
=======
      price: '$499/month',
      features: [,
>>>>>>> origin/main
        'Intelligent Chatbots',
        'Ticket Classification',
        'Auto-routing',
        'Sentiment Analysis',
        'Knowledge Base Integration',
        'Multi-language Support',
        'Escalation Management',
        'Performance Analytics'
      ],
<<<<<<< HEAD
      benefits: [
        'Handle 80% of inquiries automatically',
        'Reduce response time by 90%',
        'Improve customer satisfaction',
        '24/7 availability',
        'Scale support operations'
=======
      benefits: [,
        'Handle 80% of customer queries',
        'Reduce response time to seconds',
        'Improve customer satisfaction by 50%',
        'Reduce support costs by 60%',
        'Available 24/7/365']
>>>>>>> origin/main
      ],
      marketPrice: '$600-2,000/month',
      category: 'Customer Service',
<<<<<<< HEAD
      technologies: ['NLP', 'Chatbots', 'Machine Learning', 'APIs', 'Knowledge Graphs'],
=======
<<<<<<< HEAD
      technologies: ['NLP', 'Chatbots', 'Knowledge Graphs', 'Sentiment Analysis', 'CRM Integration']
>>>>>>> origin/main
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
=======
      technologies: ['NLP', 'Chatbots', 'Knowledge Graphs', 'Sentiment Analysis', 'CRM Integration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
    },
    {
      title: 'AI Sales Automation',
      description: 'Automated lead scoring, follow-up, and sales process optimization with AI insights.',
      icon: '💰',
<<<<<<< HEAD
      price: '$349/month',
      features: [
=======
      price: '$599/month',
      features: [,
>>>>>>> origin/main
        'Lead Scoring & Qualification',
        'Automated Follow-ups',
        'Sales Forecasting',
        'Pipeline Management',
        'Email Sequences',
        'CRM Integration',
        'Performance Tracking',
        'Custom Workflows'
      ],
<<<<<<< HEAD
      benefits: [
        'Increase conversion by 40%',
=======
      benefits: [,
        'Increase conversion rates by 40%',
>>>>>>> origin/main
        'Reduce sales cycle by 30%',
        'Improve lead quality',
        'Automate follow-ups',
        'Scale sales operations'
      ],
      marketPrice: '$800-3,000/month',
      category: 'Sales Automation',
<<<<<<< HEAD
      technologies: ['CRM APIs', 'Machine Learning', 'Email Marketing', 'Analytics', 'Workflow Engines'],
=======
<<<<<<< HEAD
      technologies: ['Machine Learning', 'CRM APIs', 'Email Automation', 'Lead Scoring', 'Analytics']
>>>>>>> origin/main
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
=======
      technologies: ['Machine Learning', 'CRM APIs', 'Email Automation', 'Lead Scoring', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
    },
    {
      title: 'AI Marketing Automation',
<<<<<<< HEAD
      description: 'Intelligent marketing campaigns, content generation, and audience targeting automation.',
      icon: '📈',
      price: '$299/month',
      features: [
=======
      description: 'Intelligent marketing campaign automation with personalization and optimization.',
      icon: '📢',
      price: '$399/month',
      features: [,
        'Campaign Automation',
        'Personalization Engine',
        'A/B Testing',
        'Audience Segmentation',
>>>>>>> origin/main
        'Content Generation',
        'Audience Segmentation',
        'Campaign Optimization',
        'A/B Testing',
        'Social Media Automation',
        'Email Marketing',
        'Analytics & Reporting',
        'Personalization'
      ],
      benefits: [,
        'Increase engagement by 60%',
        'Reduce campaign time by 70%',
        'Improve targeting accuracy',
        'Scale content creation',
        'Optimize ROI'
      ],
      marketPrice: '$700-2,500/month',
      category: 'Marketing Automation',
<<<<<<< HEAD
      technologies: ['AI Content Generation', 'Marketing APIs', 'Analytics', 'Social Media APIs', 'Email Platforms'],
=======
<<<<<<< HEAD
      technologies: ['Machine Learning', 'Personalization', 'A/B Testing', 'Marketing APIs', 'Analytics']
>>>>>>> origin/main
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
=======
      technologies: ['Machine Learning', 'Personalization', 'A/B Testing', 'Marketing APIs', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
    },
    {
      title: 'AI HR Automation',
      description: 'Automated recruitment, onboarding, and HR processes with intelligent candidate matching.',
      icon: '👥',
<<<<<<< HEAD
      price: '$199/month',
      features: [
=======
      price: '$299/month',
      features: [,
>>>>>>> origin/main
        'Resume Screening',
        'Candidate Matching',
        'Interview Scheduling',
        'Onboarding Automation',
        'Performance Tracking',
        'Employee Analytics',
        'Compliance Monitoring',
        'Workflow Management'
      ],
      benefits: [,
        'Reduce hiring time by 50%',
        'Improve candidate quality',
        'Streamline onboarding',
        'Ensure compliance',
        'Scale HR operations'
      ],
      marketPrice: '$500-2,000/month',
      category: 'HR Automation',
<<<<<<< HEAD
      technologies: ['ATS Integration', 'NLP', 'Machine Learning', 'Workflow Engines', 'Analytics'],
=======
<<<<<<< HEAD
      technologies: ['NLP', 'Machine Learning', 'HR APIs', 'Scheduling Systems', 'Compliance Tools']
>>>>>>> origin/main
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
=======
      technologies: ['NLP', 'Machine Learning', 'HR APIs', 'Scheduling Systems', 'Compliance Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
    },
    {
      title: 'AI Financial Automation',
      description: 'Automated financial processes, invoice processing, and expense management with AI insights.',
      icon: '💳',
<<<<<<< HEAD
      price: '$399/month',
      features: [
=======
      price: '$499/month',
      features: [,
>>>>>>> origin/main
        'Invoice Processing',
        'Expense Management',
        'Financial Reporting',
        'Budget Tracking',
        'Fraud Detection',
        'Compliance Monitoring',
        'Cash Flow Analysis',
        'Automated Reconciliation'
      ],
<<<<<<< HEAD
      benefits: [
        'Reduce processing time by 80%',
        'Improve accuracy to 99.8%',
=======
      benefits: [,
        'Reduce processing time by 70%',
        'Improve accuracy to 99.9%',
        'Ensure compliance',
>>>>>>> origin/main
        'Detect fraud early',
        'Ensure compliance',
        'Scale financial operations'
      ],
      marketPrice: '$1,000-4,000/month',
      category: 'Financial Automation',
<<<<<<< HEAD
      technologies: ['OCR', 'Machine Learning', 'Financial APIs', 'Blockchain', 'Analytics'],
=======
<<<<<<< HEAD
      technologies: ['OCR', 'Machine Learning', 'Financial APIs', 'Compliance Tools', 'Analytics']
>>>>>>> origin/main
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
=======
      technologies: ['OCR', 'Machine Learning', 'Financial APIs', 'Compliance Tools', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
    },
    {
      title: 'AI Inventory Automation',
      description: 'Intelligent inventory management, demand forecasting, and supply chain optimization.',
      icon: '📦',
<<<<<<< HEAD
      price: '$299/month',
      features: [
=======
      price: '$399/month',
      features: [,
>>>>>>> origin/main
        'Demand Forecasting',
        'Inventory Optimization',
        'Reorder Automation',
        'Supplier Management',
        'Quality Control',
        'Cost Analysis',
        'Performance Monitoring',
        'Integration Management'
      ],
<<<<<<< HEAD
      benefits: [
        'Reduce inventory costs by 25%',
        'Improve stock accuracy',
        'Prevent stockouts',
=======
      benefits: [,
        'Reduce inventory costs by 30%',
        'Eliminate stockouts by 90%',
        'Reduce waste by 50%',
>>>>>>> origin/main
        'Optimize supplier relationships',
        'Scale inventory operations'
      ],
<<<<<<< HEAD
      marketPrice: '$800-3,000/month',
      category: 'Inventory Management',
      technologies: ['Machine Learning', 'IoT', 'Supply Chain APIs', 'Analytics', 'Blockchain'],
=======
      marketPrice: '$1,000-3,000/month',
      category: 'Inventory Automation',
<<<<<<< HEAD
      technologies: ['Time Series Analysis', 'Machine Learning', 'Supply Chain APIs', 'IoT Integration']
>>>>>>> origin/main
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
=======
      technologies: ['Time Series Analysis', 'Machine Learning', 'Supply Chain APIs', 'IoT Integration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
    },
    {
      title: 'AI Quality Assurance',
      description: 'Automated testing, quality control, and defect detection with intelligent analysis.',
      icon: '🔍',
<<<<<<< HEAD
      price: '$249/month',
      features: [
        'Automated Testing',
        'Defect Detection',
        'Quality Metrics',
        'Performance Monitoring',
=======
      price: '$599/month',
      features: [,
        'Automated Test Generation',
        'Test Execution',
        'Bug Detection',
        'Performance Testing',
        'Security Testing',
>>>>>>> origin/main
        'Regression Testing',
        'Code Analysis',
        'Compliance Checking',
        'Reporting & Analytics'
      ],
<<<<<<< HEAD
      benefits: [
        'Reduce testing time by 70%',
        'Improve defect detection',
=======
      benefits: [,
        'Reduce testing time by 80%',
        'Improve test coverage by 90%',
        'Detect bugs early',
>>>>>>> origin/main
        'Ensure quality standards',
        'Scale testing operations',
        'Reduce manual effort'
      ],
      marketPrice: '$600-2,500/month',
      category: 'Quality Assurance',
<<<<<<< HEAD
      technologies: ['Testing Frameworks', 'Machine Learning', 'APIs', 'Analytics', 'CI/CD'],
=======
      technologies: ['Test Automation', 'Machine Learning', 'CI/CD', 'Performance Testing', 'Security Tools']
>>>>>>> origin/main
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
  ];
=======
'use client';
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a

export default function AiAutomationSuitePage() {
  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>AI Automation Suite - Complete Business Automation Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI automation suite with 10+ specialized solutions. Transform your business with intelligent automation across all departments." />
        <meta name="keywords" content="AI automation suite, business automation, workflow automation, RPA, intelligent automation, process optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">Complete Automation Suite</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Automation Suite
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your entire business with our comprehensive AI automation suite. 
                10+ specialized solutions covering every aspect of your operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">
                  View All Solutions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Automation Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI automation solutions designed for every business need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
                      {service.category}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-700/50">
                    <p className="text-xs text-gray-400 text-center mb-3">{service.contactInfo}</p>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
=======
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>"
        <title>AI Automation Suite - Zion Tech Group</title>""
        <meta name="description" content="Comprehensive AI automation solutions including workflow automation, email processing, document handling, and customer service. Starting at $199/month." />"""
        <meta name="keywords" content="ai automation, workflow automation, email automation, document processing, customer service automation, sales automation" />
<<<<<<< HEAD
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">"
        <div className="max-w-7xl mx-auto text-center">"
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Automation Suite;
          </h1>
=======
      </Helmet>"
      {/* Hero Section */};""
      <section className="pt-24 pb-16 px-4">"""
        <div className="max-w-7xl mx-auto text-center">"""
          <h1 className="text-4xl sm: text-5xl md:text-6xl font-bold text-white mb-6">,
            AI Automation Suite,"
          </h1>""
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business operations with intelligent automation that learns, adapts, and scales with your needs.
          </p>"
          {/* Stats */};""
          <div className="grid grid-cols-2 md: grid-cols-4 gap-6 mb-12">"""
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">"""
              <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>"""
              <div className="text-gray-300">Automation Tools</div>"
            </div>""
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">"""
              <div className="text-3xl font-bold text-green-400 mb-2">$199</div>"""
              <div className="text-gray-300">Starting Price</div>"
            </div>""
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">"""
              <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>"""
              <div className="text-gray-300">Task Automation</div>"
            </div>""
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">"""
              <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>"""
              <div className="text-gray-300">Accuracy</div>
            </div>
          </div>"
          {/* Contact Info */};""
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">"""
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">"""
              <div className="flex items-center space-x-2">"""
                <Phone className="w-5 h-5" />"""
                <span className="text-white font-medium">+1 302 464 0950</span>"
              </div>""
              <div className="flex items-center space-x-2">"""
                <Mail className="w-5 h-5" />"""
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>"
              </div>""
              <div className="flex items-center space-x-2">"""
                <MapPin className="w-5 h-5" />",""
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>"
      {/* Services Grid */};""
      <section className="py-16 px-4">"""
        <div className="max-w-7xl mx-auto">"""
          <h2 className="text-3xl font-bold text-white text-center mb-12">
<<<<<<< HEAD
            Choose Your Automation Solution;
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">"
                <div className="text-center mb-6">"
                  <div className="text-5xl mb-4">{service.icon}</div>"
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>"
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
                
                <div className="mb-6">"
                  <div className="flex items-center justify-between mb-4">"
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>"
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
=======
            Choose Your Automation Solution."
          </h2>""
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,"
            {automationServices.map((service, index) => (""
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover: shadow-2xl transition-all duration-300 hover:scale-105">"""
                <div className="text-center mb-6">"""
                  <div className="text-5xl mb-4">{service.icon}</div>"""
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>"""
                  <p className="text-gray-600 text-sm">{service.description}</p>"
                </div>""
                <div className="mb-6">"""
                  <div className="flex items-center justify-between mb-4">"""
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>"""
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>"
                  </div>""
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category};
                  </div>"
                </div>""
                <div className="mb-6">"""
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>"""
                  <ul className="space-y-2">,"
                    {service.features.slice(0, 4).map((feature, featureIndex) => (""
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">"""
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature};
                      </li>
                    ))};"
                    {service.features.length > 4 && (""
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features;
                      </li>
                    )};
                  </ul>"
                </div>""
                <div className="mb-6">"""
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits: </h4>"""
                  <ul className="space-y-1">,"
                    {service.benefits.map((benefit, benefitIndex) => (""
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">"""
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit};
                      </li>
                    ))};
                  </ul>"
                </div>""
                <div className="mb-6">"""
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies: </h4>"""
                  <div className="flex flex-wrap gap-2">,"
                    {service.technologies.map((tech, techIndex) => (""
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech};
                      </span>
                    ))};
                  </div>"
                </div>""
                <div className="text-center">
<<<<<<< HEAD
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now;
                  </a>
=======
                  <a"
                    href={`mailto: kleber@ziontechgroup.com?subject=Interest in ${service.title}`};""
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover: from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >,
                    Get Started Now."
                  </a>""
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
                  <p className="text-xs text-gray-500 mt-2">
                    {service.contactInfo};
                  </p>
                </div>
              </div>
            ))};
          </div>
        </div>
      </section>"
      {/* CTA Section */};""
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">"""
        <div className="max-w-4xl mx-auto text-center">"""
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Automate Your Business?"
          </h2>""
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI automation suite today and transform your operations."
          </p>""
          <div className="flex flex-col sm: flex-row gap-4 justify-center">"
            <a""
              href="tel:+13024640950"""
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
<<<<<<< HEAD
            >
              Call (302) 464-0950;
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us;
=======
            >,
              Call (302) 464-0950.
            </a>"
            <a"",
              href="mailto:kleber@ziontechgroup.com"","
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >,
              Email Us,
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
            </a>
>>>>>>> origin/main
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our AI automation suite and see immediate results. 
              Contact us for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                <Phone className="w-5 h-5 inline mr-2" />
                Call Now: +1 302 464 0950
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">
                <Mail className="w-5 h-5 inline mr-2" />
                Email Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
<<<<<<< HEAD

export default AIAutomationSuitePage;
=======
"
export default AIAutomationSuitePage;""`
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
=======
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Ai Automation Suite</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
