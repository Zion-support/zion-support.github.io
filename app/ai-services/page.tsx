import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Bot, BarChart, Shield, MessageSquare, Zap, CheckCircle } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Analytics',
      description: 'Advanced data analysis and insights powered by machine learning',
      features: ['Predictive Analytics', 'Data Visualization', 'Real-time Insights', 'Custom Dashboards']
    },
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI for customer service and support',
      features: ['Natural Language Processing', 'Multi-language Support', 'Integration APIs', '24/7 Availability']
    },
    {
      icon: BarChart,
      title: 'AI Data Analytics',
      description: 'Transform raw data into actionable business intelligence',
      features: ['Machine Learning Models', 'Automated Reporting', 'Trend Analysis', 'Performance Metrics']
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'AI-powered security solutions to protect against threats',
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Security Monitoring']
    },
    {
      icon: MessageSquare,
      title: 'AI CRM',
      description: 'Intelligent customer relationship management systems',
      features: ['Lead Scoring', 'Customer Insights', 'Automated Workflows', 'Sales Forecasting']
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Streamline business processes with intelligent automation',
      features: ['Workflow Automation', 'Process Optimization', 'Task Automation', 'Efficiency Gains']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge AI services including analytics, chatbots, automation, and machine learning solutions for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Harness the power of artificial intelligence to transform your business operations, 
              enhance customer experiences, and drive innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300">
                <Brain className="w-4 h-4 inline mr-2" />
                Machine Learning
              </div>
              <div className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300">
                <Bot className="w-4 h-4 inline mr-2" />
                Conversational AI
              </div>
              <div className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300">
                <Zap className="w-4 h-4 inline mr-2" />
                Automation
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 md:p-12 text-center border border-purple-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Embrace AI Innovation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our AI experts help you implement cutting-edge artificial intelligence 
              solutions that will revolutionize your business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Explore AI Solutions
              </button>
              <button className="border border-purple-500 text-purple-300 font-semibold py-3 px-8 rounded-lg hover:bg-purple-500/20 transition-all duration-300">
                Schedule AI Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;
