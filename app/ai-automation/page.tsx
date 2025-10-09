import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const automationServices = [
    {
      title: 'AI Workflow Automation',
      description: 'Intelligent automation platform that streamlines business processes with AI-powered workflows.',
      icon: '🤖',
      price: '$399/month',
      features: ['Process automation', 'RPA solutions', 'Workflow optimization', 'Exception handling', 'Integration APIs', 'Analytics dashboard'],
      benefits: ['Reduce manual work by 80%', 'Improve process efficiency', 'Eliminate human errors', 'Scale operations'],
      marketPrice: '$600-1,200/month',
      category: 'Workflow Automation',
      technologies: ['RPA Tools', 'AI/ML', 'Workflow Engines', 'Integration APIs', 'Custom AI Models'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Business Process Automation',
      description: 'Comprehensive business process automation with AI decision-making and intelligent exception handling.',
      icon: '⚙️',
      price: '$599/month',
      features: ['End-to-end automation', 'AI decision making', 'Exception handling', 'Process monitoring', 'Compliance tracking', 'Performance analytics'],
      benefits: ['Automate 90% of processes', 'Reduce costs by 50%', 'Improve accuracy', 'Ensure compliance'],
      marketPrice: '$1,000-2,000/month',
      category: 'Business Process',
      technologies: ['AI/ML', 'Process Mining', 'Workflow Automation', 'Decision Engines', 'Compliance Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Document Processing',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflow routing.',
      icon: '📄',
      price: '$299/month',
      features: ['OCR processing', 'Data extraction', 'Document classification', 'Workflow routing', 'Quality control', 'Integration APIs'],
      benefits: ['Process documents 10x faster', 'Reduce errors by 95%', 'Eliminate manual data entry', 'Improve accuracy'],
      marketPrice: '$500-1,000/month',
      category: 'Document Processing',
      technologies: ['OCR', 'NLP', 'Computer Vision', 'Workflow Engines', 'Data Extraction'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Customer Service Automation',
      description: 'Intelligent customer service automation with chatbots, ticket routing, and automated responses.',
      icon: '💬',
      price: '$199/month',
      features: ['AI chatbots', 'Ticket routing', 'Automated responses', 'Sentiment analysis', 'Escalation management', 'Performance tracking'],
      benefits: ['Handle 80% of inquiries automatically', 'Reduce response time by 90%', 'Improve customer satisfaction', 'Scale support operations'],
      marketPrice: '$300-800/month',
      category: 'Customer Service',
      technologies: ['NLP', 'Chatbots', 'Sentiment Analysis', 'Ticket Systems', 'AI Models'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Sales Process Automation',
      description: 'Automated sales processes with lead scoring, follow-up automation, and intelligent pipeline management.',
      icon: '📈',
      price: '$399/month',
      features: ['Lead scoring', 'Follow-up automation', 'Pipeline management', 'Email automation', 'Meeting scheduling', 'Performance analytics'],
      benefits: ['Increase sales by 40%', 'Reduce manual follow-ups', 'Improve lead quality', 'Optimize sales processes'],
      marketPrice: '$600-1,500/month',
      category: 'Sales Automation',
      technologies: ['CRM Integration', 'Email Automation', 'Lead Scoring', 'AI Models', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Financial Process Automation',
      description: 'Automated financial processes including invoice processing, expense management, and financial reporting.',
      icon: '💰',
      price: '$499/month',
      features: ['Invoice processing', 'Expense management', 'Financial reporting', 'Compliance automation', 'Audit trails', 'Integration APIs'],
      benefits: ['Reduce processing time by 70%', 'Improve accuracy', 'Ensure compliance', 'Streamline financial operations'],
      marketPrice: '$800-1,800/month',
      category: 'Financial Automation',
      technologies: ['Financial APIs', 'OCR', 'Compliance Tools', 'Reporting Systems', 'AI Models'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { name: 'All', count: automationServices.length },
    { name: 'Workflow Automation', count: automationServices.filter(s => s.category === 'Workflow Automation').length },
    { name: 'Business Process', count: automationServices.filter(s => s.category === 'Business Process').length },
    { name: 'Document Processing', count: automationServices.filter(s => s.category === 'Document Processing').length },
    { name: 'Customer Service', count: automationServices.filter(s => s.category === 'Customer Service').length },
    { name: 'Sales Automation', count: automationServices.filter(s => s.category === 'Sales Automation').length },
    { name: 'Financial Automation', count: automationServices.filter(s => s.category === 'Financial Automation').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Intelligent automation solutions for business processes, workflows, and operations. Reduce manual work by 80% with AI-powered automation." />
        <meta name="keywords" content="ai automation, business process automation, workflow automation, rpa, intelligent automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Automation Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with intelligent automation solutions that reduce manual work, improve efficiency, and scale your operations.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
              <div className="text-gray-300">Reduction in Manual Work</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$299</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Automated Operations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-gray-300">Accuracy Improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our AI Automation Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <a
                    href="/contact"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
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
            Contact us today for a free automation assessment and custom solution recommendations
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
  );
};

export default AIAutomationPage;