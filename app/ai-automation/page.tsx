import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Brain, Target, BarChart, Clock, Shield } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const automationServices = [
    {
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns and adapts to optimize business processes continuously.',
      icon: '🤖',
      price: 'Starting at $2,500/month',
      features: ['Process discovery', 'Workflow optimization', 'Exception handling', 'Performance monitoring', 'Continuous learning'],
      benefits: ['Reduce process time by 70%', 'Eliminate human errors', 'Scale operations', 'Improve compliance']
    },
    {
      title: 'Document Processing Automation',
      description: 'Automated document extraction, classification, and data entry using advanced AI algorithms.',
      icon: '📄',
      price: 'Starting at $1,800/month',
      features: ['OCR & data extraction', 'Document classification', 'Form processing', 'Quality assurance', 'Integration APIs'],
      benefits: ['Process documents 50x faster', 'Achieve 99% accuracy', 'Reduce manual work', 'Improve data quality']
    },
    {
      title: 'Customer Service Automation',
      description: 'AI-powered chatbots and virtual assistants that provide 24/7 customer support.',
      icon: '💬',
      price: 'Starting at $1,200/month',
      features: ['Natural language processing', 'Multi-channel support', 'Escalation handling', 'Analytics dashboard', 'Custom training'],
      benefits: ['Reduce support costs by 60%', 'Improve response time', 'Increase satisfaction', 'Scale support capacity']
    },
    {
      title: 'Financial Process Automation',
      description: 'Automated invoice processing, expense management, and financial reporting.',
      icon: '💰',
      price: 'Starting at $2,200/month',
      features: ['Invoice processing', 'Expense categorization', 'Financial reporting', 'Compliance checks', 'Audit trails'],
      benefits: ['Reduce processing time by 80%', 'Improve accuracy', 'Ensure compliance', 'Save costs']
    },
    {
      title: 'HR Process Automation',
      description: 'Automated recruitment, onboarding, and employee management processes.',
      icon: '👥',
      price: 'Starting at $1,500/month',
      features: ['Resume screening', 'Interview scheduling', 'Onboarding workflows', 'Performance tracking', 'Compliance management'],
      benefits: ['Speed up hiring by 50%', 'Improve candidate experience', 'Reduce bias', 'Streamline HR operations']
    },
    {
      title: 'Supply Chain Automation',
      description: 'AI-powered inventory management, demand forecasting, and logistics optimization.',
      icon: '🚚',
      price: 'Starting at $3,000/month',
      features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Supplier management', 'Risk assessment'],
      benefits: ['Reduce inventory costs by 25%', 'Improve delivery times', 'Minimize stockouts', 'Optimize logistics']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with intelligent AI automation solutions. Reduce costs, improve efficiency, and scale operations with our advanced automation services." />
        <meta name="keywords" content="AI automation, process automation, intelligent automation, business automation, workflow automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Automation Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Transform your business with intelligent automation that learns, adapts, and scales
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
                >
                  📞 +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  ✉️ Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Automation?
              </h2>
              <p className="text-xl text-gray-600">
                Intelligent automation that delivers measurable results and continuous improvement
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Implementation</h3>
                <p className="text-gray-600">Deploy automation solutions in weeks, not months</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Intelligent Learning</h3>
                <p className="text-gray-600">AI that continuously learns and improves performance</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Average 300% ROI within 6 months</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Automation Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive AI automation services for every business process
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our automation experts for a free consultation and custom automation strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAutomationPage;
