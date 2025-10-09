import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Brain, Cpu, Target, BarChart, Globe, Shield, Smartphone, Settings } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSaasTools = [
    {
      title: 'AI Code Generator',
      description: 'Generate code snippets, functions, and complete applications using natural language prompts.',
      icon: '💻',
      price: '$99/month',
      features: ['Natural language to code', 'Multiple programming languages', 'Code optimization', 'Documentation generation'],
      benefits: ['Reduce development time by 70%', 'Improve code quality', 'Faster prototyping'],
      category: 'Developer Tools'
    },
    {
      title: 'AI Document Processor',
      description: 'Intelligent document analysis, extraction, and processing with OCR and NLP capabilities.',
      icon: '📄',
      price: '$149/month',
      features: ['OCR processing', 'Text extraction', 'Document classification', 'Data validation'],
      benefits: ['Automate document workflows', 'Reduce manual data entry', 'Improve accuracy'],
      category: 'Document Processing'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Real-time business analytics with AI-powered insights and predictive modeling.',
      icon: '📊',
      price: '$199/month',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'Automated reporting'],
      benefits: ['Make data-driven decisions', 'Identify trends early', 'Improve business performance'],
      category: 'Analytics'
    },
    {
      title: 'AI Customer Service Bot',
      description: 'Intelligent chatbot with natural language processing and multi-channel support.',
      icon: '🤖',
      price: '$129/month',
      features: ['Natural language processing', 'Multi-channel support', 'Ticket routing', 'Sentiment analysis'],
      benefits: ['24/7 customer support', 'Reduce response time', 'Improve customer satisfaction'],
      category: 'Customer Service'
    },
    {
      title: 'AI Marketing Automation',
      description: 'Automated marketing campaigns with AI-powered targeting and personalization.',
      icon: '📈',
      price: '$179/month',
      features: ['Campaign automation', 'Audience targeting', 'Content personalization', 'Performance tracking'],
      benefits: ['Increase conversion rates', 'Reduce marketing costs', 'Improve ROI'],
      category: 'Marketing'
    },
    {
      title: 'AI Inventory Manager',
      description: 'Smart inventory management with demand forecasting and automated reordering.',
      icon: '📦',
      price: '$159/month',
      features: ['Demand forecasting', 'Automated reordering', 'Stock optimization', 'Supplier management'],
      benefits: ['Reduce stockouts', 'Minimize excess inventory', 'Improve cash flow'],
      category: 'Inventory Management'
    }
  ];

  const categories = [...new Set(microSaasTools.map(tool => tool.category))];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="100+ ready-to-use AI-powered micro SAAS applications for immediate deployment. No coding required." />
        <meta name="keywords" content="micro SAAS, AI applications, ready-to-use apps, business automation, productivity tools" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
                100+ Ready-to-Use AI-Powered Applications
              </p>
              <p className="text-lg mb-8 text-green-200 max-w-4xl mx-auto">
                Deploy powerful AI applications instantly without any coding. Our micro SAAS solutions 
                are designed to solve specific business problems with immediate impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link 
                  to="/case-studies"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  View Success Stories
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Instant deployment, zero coding, maximum impact
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Deployment</h3>
                <p className="text-gray-600">Deploy in minutes, not months</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered</h3>
                <p className="text-gray-600">Advanced AI capabilities built-in</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Coding Required</h3>
                <p className="text-gray-600">Ready-to-use applications</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Immediate ROI</h3>
                <p className="text-gray-600">See results from day one</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Tools
                </h2>
                <p className="text-xl text-gray-600">
                  Specialized {category.toLowerCase()} solutions for your business
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {microSaasTools
                  .filter(tool => tool.category === category)
                  .map((tool, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{tool.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{tool.title}</h3>
                      <p className="text-gray-600 mb-4">{tool.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {tool.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {tool.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <div className="text-2xl font-bold text-green-600 mb-2">{tool.price}</div>
                        <div className="text-sm text-gray-500">Monthly subscription</div>
                      </div>

                      <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                        Get Started
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Deploy Your First Micro SAAS?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Contact us today and get your first application deployed within 24 hours
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASPage;