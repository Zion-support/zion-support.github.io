import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const stats = [
    { label: 'Clients Served', value: '500+' },
    { label: 'AI Models Deployed', value: '1000+' },
    { label: 'Projects Completed', value: '250+' },
    { label: 'Uptime Guarantee', value: '99.9%' }
  ];

  const services = [
    {
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      icon: '🤖',
      link: '/ai-services',
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions that provide reliability, security, and performance for your business applications.',
      icon: '☁️',
      link: '/cloud-infrastructure',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Security', 'Monitoring']
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes and systems.',
      icon: '🔄',
      link: '/digital-transformation',
      features: ['Process Automation', 'System Integration', 'Change Management', 'Training']
    },
    {
      title: 'Micro SaaS Solutions',
      description: 'Specialized software solutions designed to solve specific business challenges with immediate value.',
      icon: '⚡',
      link: '/micro-saas-solutions',
      features: ['Quick Setup', 'Cost-Effective', 'Scalable', 'API-First']
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics and business intelligence solutions.',
      icon: '📊',
      link: '/data-analytics',
      features: ['Real-time Analytics', 'Dashboards', 'Predictive Modeling', 'Data Visualization']
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications built with the latest technologies and best practices.',
      icon: '🌐',
      link: '/web-development',
      features: ['React/Next.js', 'Mobile-First', 'SEO Optimized', 'Performance']
    }
  ];

  const aiTools = [
    {
      title: 'AI Content Moderator',
      description: 'Automated content moderation using AI',
      price: '$199/mo',
      link: '/zion-ai-content-moderator',
      popular: true
    },
    {
      title: 'Sales Predictor',
      description: 'Predict sales trends with AI',
      price: '$299/mo',
      link: '/zion-ai-sales-predictor',
      popular: false
    },
    {
      title: 'Workflow Automator',
      description: 'Automate business workflows',
      price: '$399/mo',
      link: '/zion-ai-workflow-automator',
      popular: false
    },
    {
      title: 'Financial Forecaster',
      description: 'AI-powered financial predictions',
      price: '$499/mo',
      link: '/zion-ai-financial-forecaster',
      popular: false
    },
    {
      title: 'Customer Churn Predictor',
      description: 'Identify at-risk customers early',
      price: '$199/mo',
      link: '/zion-ai-customer-churn-predictor',
      popular: false
    },
    {
      title: 'Document Analyzer',
      description: 'Extract insights from documents',
      price: '$149/mo',
      link: '/zion-ai-document-analyzer',
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="AI services, IT solutions, cloud infrastructure, digital transformation, micro saas, business automation, artificial intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Transform Your Business with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {' '}AI & IT Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                We provide cutting-edge AI and IT solutions to help your business thrive in the digital age. 
                From micro SaaS tools to enterprise transformations, we deliver results that matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-lg font-semibold shadow-lg">
                  Get Started Today
                </Link>
                <Link to="/pricing" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 text-lg font-semibold">
                  View Pricing
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions designed to accelerate your business growth and digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link to={service.link} className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                    Learn More 
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Tools Section */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">AI-Powered Tools</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready-to-use AI solutions that deliver immediate value to your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiTools.map((tool, index) => (
                <div key={index} className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${tool.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {tool.popular && (
                    <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{tool.title}</h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">{tool.price}</div>
                    <Link to={tool.link} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      Try Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/micro-saas-solutions" className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Explore All Tools
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of businesses already using our solutions to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg">
                Contact Sales
              </Link>
              <Link to="/pricing" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
                View Pricing
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="text-center">
                <div className="text-2xl mb-2">📞</div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-blue-100">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">✉️</div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-blue-100">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📍</div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;