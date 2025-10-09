import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Zap, Bot, Settings, BarChart } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const automationServices = [
    {
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation solutions that learn and adapt to optimize your business processes.',
      icon: '🤖',
      price: '$1,800/month',
      features: [
        'Process Discovery & Analysis',
        'RPA Implementation',
        'AI Decision Making',
        'Exception Handling',
        'Performance Monitoring',
        'Continuous Optimization'
      ],
      benefits: [
        'Reduce process time by 70%',
        'Eliminate human errors by 95%',
        'Scale operations 24/7',
        'Achieve 300% efficiency gains'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Automation',
      technologies: ['RPA', 'Machine Learning', 'NLP', 'Computer Vision', 'Workflow Engines'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Smart Document Processing',
      description: 'Automated document classification, extraction, and processing using advanced AI algorithms.',
      icon: '📄',
      price: '$1,200/month',
      features: [
        'Document Classification',
        'Data Extraction',
        'Form Processing',
        'Quality Validation',
        'Integration APIs',
        'Audit Trails'
      ],
      benefits: [
        'Process 10,000+ documents/hour',
        'Reduce processing time by 90%',
        'Improve accuracy to 99.5%',
        'Eliminate manual data entry'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Document AI',
      technologies: ['OCR', 'NLP', 'Computer Vision', 'ML Models', 'APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Customer Service Automation',
      description: 'AI-powered chatbots and virtual assistants that provide intelligent customer support.',
      icon: '💬',
      price: '$1,500/month',
      features: [
        'Natural Language Processing',
        'Multi-channel Support',
        'Sentiment Analysis',
        'Escalation Management',
        'Knowledge Base Integration',
        'Performance Analytics'
      ],
      benefits: [
        'Handle 80% of inquiries automatically',
        'Reduce response time by 85%',
        'Improve customer satisfaction by 40%',
        'Available 24/7/365'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Customer Service',
      technologies: ['NLP', 'Chatbots', 'Sentiment Analysis', 'Knowledge Graphs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with intelligent automation solutions. AI-powered process automation, document processing, and customer service automation." />
        <meta name="keywords" content="AI automation, process automation, RPA, intelligent automation, business process automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Automation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with intelligent automation solutions that learn, adapt, and optimize your processes 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Automation Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI automation services designed to streamline your operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-sm text-green-400 bg-green-400/20 px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-gray-400 mb-4">{service.contactInfo}</p>
                    <a
                      href="/contact"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already using our AI automation solutions to transform their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Automation Journey
              </a>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAutomationPage;