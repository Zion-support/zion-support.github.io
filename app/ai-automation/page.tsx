'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Bot, Settings, BarChart, Users, Clock, Shield } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const automationServices = [
    {
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns and adapts to your business processes, reducing manual work by up to 90%.',
      icon: '🤖',
      price: '$399/month',
      features: [
        'Process discovery and mapping',
        'Intelligent decision making',
        'Exception handling',
        'Continuous learning',
        'Integration with 500+ tools',
        'Real-time monitoring',
        'Custom workflow creation',
        'Performance analytics'
      ],
      benefits: [
        'Reduce manual work by 90%',
        'Increase process efficiency by 300%',
        'Eliminate human errors',
        'Scale operations without additional staff'
      ],
      marketPrice: '$1,500-5,000/month',
      category: 'Process Automation',
      technologies: ['RPA', 'AI/ML', 'Workflow Engines', 'API Integration', 'Data Processing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI-Powered Customer Service Automation',
      description: 'Revolutionary customer service automation with natural language understanding and intelligent routing.',
      icon: '💬',
      price: '$199/month',
      features: [
        '24/7 AI chatbot support',
        'Natural language processing',
        'Intelligent ticket routing',
        'Sentiment analysis',
        'Multi-language support',
        'Integration with CRM systems',
        'Escalation to human agents',
        'Performance analytics'
      ],
      benefits: [
        'Handle 80% of inquiries automatically',
        'Reduce response time by 95%',
        'Improve customer satisfaction',
        'Lower support costs by 70%'
      ],
      marketPrice: '$800-2,500/month',
      category: 'Customer Service',
      technologies: ['NLP', 'Machine Learning', 'Chatbot Platforms', 'CRM Integration', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Smart Document Processing',
      description: 'Automatically extract, process, and analyze documents with AI-powered OCR and intelligent data extraction.',
      icon: '📄',
      price: '$149/month',
      features: [
        'Intelligent document classification',
        'OCR and text extraction',
        'Data validation and verification',
        'Automated data entry',
        'Document routing and approval',
        'Compliance checking',
        'Multi-format support',
        'Real-time processing'
      ],
      benefits: [
        'Process documents 10x faster',
        'Reduce data entry errors by 99%',
        'Ensure compliance automatically',
        'Save 40+ hours per week'
      ],
      marketPrice: '$500-1,500/month',
      category: 'Document Processing',
      technologies: ['OCR', 'AI/ML', 'Document Processing', 'Data Extraction', 'Validation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { name: 'All', count: automationServices.length },
    { name: 'Process Automation', count: automationServices.filter(s => s.category === 'Process Automation').length },
    { name: 'Customer Service', count: automationServices.filter(s => s.category === 'Customer Service').length },
    { name: 'Document Processing', count: automationServices.filter(s => s.category === 'Document Processing').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Automation Solutions</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with intelligent automation that learns, adapts, and scales with your operations.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Automation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <a
                    href="/contact"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Automate Your Business?</h2>
            <p className="text-xl text-gray-300 mb-6">
              Let our AI automation experts help you identify opportunities and implement solutions that deliver real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIAutomationPage;
