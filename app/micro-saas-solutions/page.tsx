import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSAASSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-content-moderator',
      title: 'AI Content Moderator',
      description: 'Automated content moderation using advanced AI to detect and filter inappropriate content across text, images, and videos.',
      features: ['Real-time content analysis', 'Multi-language support', 'Custom moderation rules', 'API integration', 'Analytics dashboard'],
      pricing: 'Starting at $99/month',
      link: '/zion-ai-content-moderator',
      category: 'AI & Automation'
    },
    {
      id: 'customer-churn-predictor',
      title: 'AI Customer Churn Predictor',
      description: 'Predict customer churn with 95% accuracy using machine learning algorithms and behavioral analysis.',
      features: ['Predictive analytics', 'Risk scoring', 'Automated alerts', 'Customer segmentation', 'Retention campaigns'],
      pricing: 'Starting at $149/month',
      link: '/zion-ai-customer-churn-predictor',
      category: 'AI & Analytics'
    },
    {
      id: 'expense-tracker',
      title: 'Smart Expense Tracker',
      description: 'Intelligent expense management with receipt scanning, categorization, and automated reporting.',
      features: ['Receipt OCR scanning', 'Auto-categorization', 'Expense reports', 'Budget tracking', 'Team management'],
      pricing: 'Starting at $29/month',
      link: '/zion-smart-expense-tracker',
      category: 'Finance & Productivity'
    },
    {
      id: 'workflow-automator',
      title: 'AI Workflow Automator',
      description: 'Automate repetitive business processes with intelligent workflow automation and task scheduling.',
      features: ['Visual workflow builder', 'API integrations', 'Conditional logic', 'Task scheduling', 'Performance monitoring'],
      pricing: 'Starting at $79/month',
      link: '/zion-ai-workflow-automator',
      category: 'AI & Automation'
    },
    {
      id: 'document-analyzer',
      title: 'AI Document Analyzer',
      description: 'Extract insights from documents using OCR, NLP, and machine learning for data extraction and analysis.',
      features: ['Document OCR', 'Data extraction', 'Text analysis', 'Format conversion', 'Batch processing'],
      pricing: 'Starting at $59/month',
      link: '/zion-ai-document-analyzer',
      category: 'AI & Document Processing'
    },
    {
      id: 'meeting-transcriber',
      title: 'AI Meeting Transcriber',
      description: 'Convert audio meetings to text with speaker identification, action items extraction, and smart summaries.',
      features: ['Real-time transcription', 'Speaker identification', 'Action items extraction', 'Meeting summaries', 'Integration with calendars'],
      pricing: 'Starting at $39/month',
      link: '/zion-ai-meeting-transcriber',
      category: 'AI & Communication'
    },
    {
      id: 'email-marketing-pro',
      title: 'AI Email Marketing Pro',
      description: 'Intelligent email marketing platform with AI-powered personalization, A/B testing, and campaign optimization.',
      features: ['AI personalization', 'A/B testing', 'Send time optimization', 'Subject line generation', 'Performance analytics'],
      pricing: 'Starting at $89/month',
      link: '/zion-ai-email-marketing-pro',
      category: 'Marketing & AI'
    },
    {
      id: 'inventory-optimizer',
      title: 'AI Inventory Optimizer Pro',
      description: 'Optimize inventory levels using AI to predict demand, prevent stockouts, and reduce carrying costs.',
      features: ['Demand forecasting', 'Reorder point optimization', 'Supplier management', 'Cost analysis', 'Real-time alerts'],
      pricing: 'Starting at $199/month',
      link: '/zion-ai-inventory-optimizer-pro',
      category: 'AI & Supply Chain'
    },
    {
      id: 'financial-forecaster',
      title: 'AI Financial Forecaster',
      description: 'Advanced financial forecasting using machine learning to predict revenue, expenses, and cash flow.',
      features: ['Revenue forecasting', 'Expense prediction', 'Cash flow analysis', 'Scenario planning', 'Risk assessment'],
      pricing: 'Starting at $299/month',
      link: '/zion-ai-financial-forecaster',
      category: 'AI & Finance'
    },
    {
      id: 'social-scheduler',
      title: 'AI Social Media Scheduler Pro',
      description: 'Intelligent social media management with AI-powered content creation, optimal posting times, and engagement analytics.',
      features: ['AI content generation', 'Optimal timing', 'Multi-platform posting', 'Engagement analytics', 'Hashtag optimization'],
      pricing: 'Starting at $49/month',
      link: '/zion-ai-social-scheduler-pro',
      category: 'Marketing & AI'
    },
    {
      id: 'customer-support-pro',
      title: 'AI Customer Support Pro',
      description: 'Intelligent customer support with AI chatbots, ticket routing, sentiment analysis, and automated responses.',
      features: ['AI chatbots', 'Ticket routing', 'Sentiment analysis', 'Knowledge base', 'Performance metrics'],
      pricing: 'Starting at $129/month',
      link: '/zion-ai-customer-support-pro',
      category: 'AI & Customer Service'
    },
    {
      id: 'task-scheduler',
      title: 'AI Task Scheduler',
      description: 'Smart task management with AI-powered scheduling, priority optimization, and team collaboration features.',
      features: ['Smart scheduling', 'Priority optimization', 'Team collaboration', 'Deadline tracking', 'Productivity insights'],
      pricing: 'Starting at $39/month',
      link: '/zion-ai-task-scheduler',
      category: 'Productivity & AI'
    }
  ];

  const categories = ['All', 'AI & Automation', 'AI & Analytics', 'Finance & Productivity', 'AI & Document Processing', 'AI & Communication', 'Marketing & AI', 'AI & Supply Chain', 'AI & Finance', 'AI & Customer Service', 'Productivity & AI'];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive collection of specialized micro SaaS solutions for modern businesses. AI-powered tools for content moderation, analytics, automation, and more." />
        <meta name="keywords" content="micro saas, ai tools, business automation, content moderation, expense tracking, workflow automation, document analysis" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Specialized AI-powered software solutions designed to solve specific business challenges with precision and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Micro SaaS Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each solution is designed to address specific business needs with cutting-edge AI technology and user-friendly interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {service.category}
                    </span>
                    <span className="text-lg font-bold text-green-600">{service.pricing}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Learn More
                    </Link>
                    <a 
                      href="https://ziontechgroup.com/contact"
                      className="flex-1 border border-blue-600 text-blue-600 text-center py-2 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact us today to discuss your specific needs and discover how our micro SaaS solutions can drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Email kleber@ziontechgroup.com
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">https://ziontechgroup.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;