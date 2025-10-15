import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSAASSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'zion-ai-content-moderator',
      title: 'Zion AI Content Moderator',
      description: 'Automated content moderation using advanced AI to detect and filter inappropriate content across text, images, and videos.',
      features: ['Real-time content analysis', 'Multi-language support', 'Custom moderation rules', 'API integration', 'Analytics dashboard'],
      pricing: 'Starting at $29/month',
      category: 'AI & Content',
      link: '/zion-ai-content-moderator'
    },
    {
      id: 'zion-ai-customer-churn-predictor',
      title: 'Zion AI Customer Churn Predictor',
      description: 'Predict customer churn with 95% accuracy using machine learning algorithms and behavioral analysis.',
      features: ['Predictive analytics', 'Risk scoring', 'Automated alerts', 'Customer segmentation', 'Retention strategies'],
      pricing: 'Starting at $49/month',
      category: 'AI & Analytics',
      link: '/zion-ai-customer-churn-predictor'
    },
    {
      id: 'zion-ai-customer-sentiment-tracker',
      title: 'Zion AI Customer Sentiment Tracker',
      description: 'Monitor customer sentiment across all channels with real-time analysis and actionable insights.',
      features: ['Multi-channel monitoring', 'Sentiment scoring', 'Trend analysis', 'Alert system', 'Custom dashboards'],
      pricing: 'Starting at $39/month',
      category: 'AI & Analytics',
      link: '/zion-ai-customer-sentiment-tracker'
    },
    {
      id: 'zion-ai-document-analyzer',
      title: 'Zion AI Document Analyzer',
      description: 'Extract insights from documents using OCR, NLP, and AI-powered analysis for better decision making.',
      features: ['OCR text extraction', 'Document classification', 'Key information extraction', 'Batch processing', 'API access'],
      pricing: 'Starting at $59/month',
      category: 'AI & Document Processing',
      link: '/zion-ai-document-analyzer'
    },
    {
      id: 'zion-ai-financial-forecaster',
      title: 'Zion AI Financial Forecaster',
      description: 'Advanced financial forecasting using AI to predict revenue, expenses, and cash flow with high accuracy.',
      features: ['Revenue forecasting', 'Expense prediction', 'Cash flow analysis', 'Scenario planning', 'Financial reports'],
      pricing: 'Starting at $79/month',
      category: 'AI & Finance',
      link: '/zion-ai-financial-forecaster'
    },
    {
      id: 'zion-ai-sales-predictor',
      title: 'Zion AI Sales Predictor',
      description: 'Predict sales outcomes and optimize your sales process with AI-powered lead scoring and forecasting.',
      features: ['Lead scoring', 'Sales forecasting', 'Pipeline analysis', 'Performance tracking', 'ROI optimization'],
      pricing: 'Starting at $69/month',
      category: 'AI & Sales',
      link: '/zion-ai-sales-predictor'
    },
    {
      id: 'zion-ai-workflow-automator',
      title: 'Zion AI Workflow Automator',
      description: 'Automate complex business workflows with AI-powered decision making and process optimization.',
      features: ['Workflow automation', 'AI decision making', 'Process optimization', 'Integration capabilities', 'Custom triggers'],
      pricing: 'Starting at $89/month',
      category: 'AI & Automation',
      link: '/zion-ai-workflow-automator'
    },
    {
      id: 'zion-smart-expense-tracker',
      title: 'Zion Smart Expense Tracker',
      description: 'Intelligent expense tracking with receipt scanning, categorization, and automated reporting.',
      features: ['Receipt scanning', 'Auto-categorization', 'Expense reports', 'Budget tracking', 'Tax preparation'],
      pricing: 'Starting at $19/month',
      category: 'Finance & Accounting',
      link: '/zion-smart-expense-tracker'
    },
    {
      id: 'zion-customer-satisfaction-monitor',
      title: 'Zion Customer Satisfaction Monitor',
      description: 'Monitor and analyze customer satisfaction across all touchpoints with real-time feedback collection.',
      features: ['Feedback collection', 'Satisfaction scoring', 'Trend analysis', 'Action recommendations', 'Team notifications'],
      pricing: 'Starting at $39/month',
      category: 'Customer Experience',
      link: '/zion-customer-satisfaction-monitor'
    }
  ];

  const categories = [...new Set(microSaasServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SaaS solutions for modern businesses. AI-powered tools, automation, analytics, and more. Starting from $19/month." />
        <meta name="keywords" content="micro saas, ai tools, business automation, content moderation, customer analytics, financial forecasting, workflow automation" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive micro SaaS solutions for modern businesses. AI-powered tools, automation, analytics, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Powerful, specialized software solutions designed to solve specific business challenges. 
              From AI-powered analytics to automated workflows, our micro SaaS tools help you work smarter, not harder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started Today
              </a>
              <a href="/pricing" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View All Pricing
              </a>
            </div>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              All Solutions
            </button>
            {categories.map(category => (
              <button key={category} className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {microSaasServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {service.category}
                    </span>
                    <span className="text-lg font-bold text-green-600">
                      {service.pricing}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link 
                      to={service.link}
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Learn More
                    </Link>
                    <a 
                      href="/contact"
                      className="flex-1 border border-blue-600 text-blue-600 text-center py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Choose from our comprehensive suite of micro SaaS solutions or let us build a custom solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Schedule Consultation
              </a>
              <a 
                href="tel:+13024640950" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;