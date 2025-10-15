import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSAASSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-email-optimizer',
      title: 'AI Email Optimizer Pro',
      description: 'AI-powered email marketing optimization that increases open rates by 40% and click-through rates by 25%',
      features: ['Smart subject line generation', 'Optimal send time prediction', 'A/B testing automation', 'Performance analytics'],
      pricing: '$49/month',
      category: 'Marketing',
      icon: '📧'
    },
    {
      id: 'smart-inventory-manager',
      title: 'Smart Inventory Manager',
      description: 'Intelligent inventory management with demand forecasting and automated reordering',
      features: ['Demand forecasting', 'Automated reordering', 'Multi-location tracking', 'Cost optimization'],
      pricing: '$79/month',
      category: 'Operations',
      icon: '📦'
    },
    {
      id: 'customer-feedback-analyzer',
      title: 'Customer Feedback Analyzer',
      description: 'AI-powered sentiment analysis of customer feedback across all channels',
      features: ['Multi-channel monitoring', 'Sentiment analysis', 'Trend identification', 'Actionable insights'],
      pricing: '$39/month',
      category: 'Analytics',
      icon: '💬'
    },
    {
      id: 'expense-tracker-pro',
      title: 'Expense Tracker Pro',
      description: 'Automated expense tracking with receipt scanning and categorization',
      features: ['Receipt scanning', 'Auto-categorization', 'Tax preparation', 'Team management'],
      pricing: '$29/month',
      category: 'Finance',
      icon: '💰'
    },
    {
      id: 'social-media-scheduler',
      title: 'Social Media Scheduler',
      description: 'AI-powered social media scheduling with optimal timing and content suggestions',
      features: ['Multi-platform posting', 'Optimal timing', 'Content suggestions', 'Analytics dashboard'],
      pricing: '$59/month',
      category: 'Marketing',
      icon: '📱'
    },
    {
      id: 'project-time-tracker',
      title: 'Project Time Tracker',
      description: 'Advanced time tracking with productivity insights and team collaboration',
      features: ['Automatic time tracking', 'Productivity insights', 'Team collaboration', 'Client billing'],
      pricing: '$19/month',
      category: 'Productivity',
      icon: '⏱️'
    },
    {
      id: 'lead-scoring-engine',
      title: 'Lead Scoring Engine',
      description: 'AI-powered lead scoring that identifies high-value prospects automatically',
      features: ['Behavioral analysis', 'Lead scoring', 'CRM integration', 'Conversion tracking'],
      pricing: '$99/month',
      category: 'Sales',
      icon: '🎯'
    },
    {
      id: 'document-workflow-automator',
      title: 'Document Workflow Automator',
      description: 'Automate document processing, approval workflows, and digital signatures',
      features: ['Workflow automation', 'Digital signatures', 'Approval chains', 'Document storage'],
      pricing: '$69/month',
      category: 'Productivity',
      icon: '📄'
    },
    {
      id: 'website-performance-monitor',
      title: 'Website Performance Monitor',
      description: 'Real-time website monitoring with performance optimization recommendations',
      features: ['Real-time monitoring', 'Performance alerts', 'Optimization tips', 'Uptime tracking'],
      pricing: '$39/month',
      category: 'Analytics',
      icon: '🌐'
    },
    {
      id: 'customer-support-chatbot',
      title: 'Customer Support Chatbot',
      description: 'AI-powered chatbot that handles 80% of customer inquiries automatically',
      features: ['Natural language processing', 'Multi-language support', 'Human handoff', 'Analytics'],
      pricing: '$89/month',
      category: 'Support',
      icon: '🤖'
    },
    {
      id: 'data-backup-manager',
      title: 'Data Backup Manager',
      description: 'Automated cloud backup solution with version control and disaster recovery',
      features: ['Automated backups', 'Version control', 'Disaster recovery', 'Cross-platform sync'],
      pricing: '$49/month',
      category: 'Security',
      icon: '💾'
    },
    {
      id: 'team-productivity-dashboard',
      title: 'Team Productivity Dashboard',
      description: 'Comprehensive team productivity tracking with insights and goal management',
      features: ['Productivity metrics', 'Goal tracking', 'Team insights', 'Performance reports'],
      pricing: '$79/month',
      category: 'Productivity',
      icon: '📊'
    }
  ];

  const categories = ['All', 'Marketing', 'Operations', 'Analytics', 'Finance', 'Productivity', 'Sales', 'Support', 'Security'];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Specialized micro SaaS solutions for specific business needs and workflows. Discover our comprehensive suite of intelligent business applications." />
        <meta name="keywords" content="micro saas, business software, task management, crm, analytics, inventory management, hr software, finance management" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Specialized software solutions designed to solve specific business challenges. 
              Each tool is purpose-built, easy to use, and delivers immediate value to your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-white text-gray-700 hover:bg-blue-600 hover:text-white shadow-sm"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {microSaasServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{service.icon}</div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">
                      {service.pricing}
                    </div>
                    <Link 
                      to="/contact" 
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Benefits Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast Setup</h3>
                <p className="text-gray-600">Get up and running in minutes, not months. Our solutions are designed for immediate deployment.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost-Effective</h3>
                <p className="text-gray-600">Pay only for what you need. Our micro SaaS solutions offer exceptional value with transparent pricing.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
                <p className="text-gray-600">Each solution is backed by real-world testing and delivers measurable business impact.</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of businesses already using our micro SaaS solutions to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Sales
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Pricing
              </Link>
            </div>
            <div className="mt-6 text-sm opacity-75">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="underline hover:no-underline">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;