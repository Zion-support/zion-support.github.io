import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Zap, Brain, Cpu, Target, BarChart, Shield, Clock, Users, ArrowRight } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AIAutomationPage: React.FC = () => {
  const automationServices = [
    {
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation solutions that learn and adapt to optimize business processes continuously.',
      icon: '🤖',
      price: '$2,000/month',
      features: [
        'Process Discovery & Analysis',
        'Workflow Automation',
        'Exception Handling',
        'Performance Monitoring',
        'Continuous Learning',
        'Integration Management'
      ],
      benefits: [
        'Reduce manual work by 80%',
        'Improve accuracy by 95%',
        'Scale operations 10x faster',
        'Cut operational costs by 60%'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Process Automation',
      technologies: ['RPA', 'Machine Learning', 'NLP', 'Computer Vision', 'Workflow Engines', 'API Integration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI-Powered Document Processing',
      description: 'Automated document classification, extraction, and processing using advanced AI algorithms.',
      icon: '📄',
      price: '$1,500/month',
      features: [
        'Document Classification',
        'Data Extraction',
        'OCR Processing',
        'Quality Validation',
        'Workflow Integration',
        'Compliance Monitoring'
      ],
      benefits: [
        'Process 1000+ documents/hour',
        'Achieve 99% accuracy',
        'Reduce processing time by 90%',
        'Eliminate manual data entry'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Document Automation',
      technologies: ['OCR', 'NLP', 'Computer Vision', 'Machine Learning', 'Document AI', 'Workflow Automation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Smart Email Automation',
      description: 'Intelligent email processing, routing, and response automation with natural language understanding.',
      icon: '📧',
      price: '$800/month',
      features: [
        'Email Classification',
        'Auto-routing',
        'Response Generation',
        'Sentiment Analysis',
        'Priority Scoring',
        'Integration Management'
      ],
      benefits: [
        'Handle 10,000+ emails/day',
        'Respond 5x faster',
        'Improve customer satisfaction',
        'Reduce response time by 70%'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'Communication Automation',
      technologies: ['NLP', 'Machine Learning', 'Email APIs', 'Sentiment Analysis', 'Auto-responders', 'CRM Integration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const useCases = [
    {
      title: 'Financial Services',
      description: 'Automated loan processing, fraud detection, and compliance monitoring',
      icon: '🏦',
      results: ['90% faster processing', '99.5% accuracy', '$2M saved annually']
    },
    {
      title: 'Healthcare',
      description: 'Patient data processing, appointment scheduling, and medical record management',
      icon: '🏥',
      results: ['80% time reduction', '95% accuracy', '50% cost savings']
    },
    {
      title: 'E-commerce',
      description: 'Order processing, inventory management, and customer service automation',
      icon: '🛒',
      results: ['24/7 operations', '99% uptime', '300% efficiency gain']
    },
    {
      title: 'Manufacturing',
      description: 'Quality control, predictive maintenance, and supply chain optimization',
      icon: '🏭',
      results: ['60% defect reduction', '40% maintenance savings', '25% productivity increase']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with intelligent AI automation solutions. Reduce manual work by 80%, improve accuracy by 95%, and scale operations 10x faster." />
        <meta name="keywords" content="AI automation, process automation, intelligent automation, workflow automation, document processing, email automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-automation" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Automation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with intelligent automation solutions that learn, adapt, and optimize your processes continuously.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">AI Automation Services</h2>
              <p className="text-xl text-gray-300">Comprehensive automation solutions powered by artificial intelligence</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {automationServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl font-bold text-cyan-400">${service.price.replace('$', '').replace('/month', '')}</span>
                      <span className="text-sm text-gray-400">/month</span>
                    </div>
                    <div className="text-sm text-gray-400 line-through">Market: {service.marketPrice}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
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
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-gray-400 mb-4">{service.contactInfo}</p>
                    <a
                      href="tel:+13024640950"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block"
                    >
                      Get Started Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Industry Use Cases</h2>
              <p className="text-xl text-gray-300">See how AI automation transforms different industries</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-3xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-sm text-cyan-400 flex items-center">
                        <ArrowRight className="w-3 h-3 mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already using our AI automation solutions to transform their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default AIAutomationPage;