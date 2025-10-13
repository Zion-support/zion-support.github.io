import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Bot, Database, Shield, Zap, TrendingUp } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Develop comprehensive AI strategies tailored to your business needs and industry requirements.',
      features: ['AI Readiness Assessment', 'Technology Roadmap', 'ROI Analysis', 'Implementation Planning']
    },
    {
      icon: Bot,
      title: 'Conversational AI',
      description: 'Build intelligent chatbots and virtual assistants that enhance customer experience.',
      features: ['Natural Language Processing', 'Multi-language Support', 'Voice Integration', '24/7 Availability']
    },
    {
      icon: Database,
      title: 'Machine Learning Solutions',
      description: 'Implement ML models for predictive analytics, automation, and intelligent decision-making.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Insights', 'Real-time Processing']
    },
    {
      icon: Shield,
      title: 'AI Security & Ethics',
      description: 'Ensure your AI implementations are secure, ethical, and compliant with regulations.',
      features: ['Bias Detection', 'Privacy Protection', 'Compliance Monitoring', 'Security Audits']
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows using AI-powered solutions.',
      features: ['Workflow Automation', 'Document Processing', 'Data Entry Automation', 'Quality Control']
    },
    {
      icon: TrendingUp,
      title: 'AI Analytics & Insights',
      description: 'Extract meaningful insights from your data using advanced AI analytics.',
      features: ['Advanced Analytics', 'Real-time Dashboards', 'Predictive Modeling', 'Business Intelligence']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including strategy, machine learning, automation, and analytics solutions for modern businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, analytics, AI consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From strategy to implementation, we help you harness the power of AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Get Started
                </a>
                <a href="/demo" className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive AI solutions designed to drive innovation and growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your business goals.
            </p>
            <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-block">
              Start Your AI Journey
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;