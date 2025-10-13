import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Bot, BarChart3, Shield, Zap, Target } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [{
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Develop comprehensive AI strategies tailored to your business objectives and industry requirements.',
      features: ['AI Readiness Assessment', 'Technology Roadmap', 'ROI Analysis', 'Implementation Planning']
    },
    {
      icon: Bot,
      title: 'AI Development & Integration',
      description: 'Build and integrate custom AI solutions that solve specific business challenges.',
      features: ['Custom AI Models', 'API Integration', 'Data Pipeline Development', 'Model Training & Optimization']
    },
    {
      icon: BarChart3,
      title: 'AI Analytics & Insights',
      description: 'Transform your data into actionable insights using advanced AI analytics and machine learning.',
      features: ['Predictive Analytics', 'Data Visualization', 'Business Intelligence', 'Performance Monitoring']
    },
    {
      icon: Shield,
      title: 'AI Security & Compliance',
      description: 'Ensure your AI systems are secure, compliant, and ethically aligned with industry standards.',
      features: ['AI Security Audits', 'Compliance Management', 'Ethical AI Guidelines', 'Risk Assessment']
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Automate repetitive tasks and processes using intelligent AI-powered solutions.',
      features: ['Process Automation', 'Workflow Optimization', 'Task Automation', 'Efficiency Improvement']
    },
    {
      icon: Target,
      title: 'AI Optimization',
      description: 'Continuously improve and optimize your AI systems for better performance and results.',
      features: ['Performance Tuning', 'Model Optimization', 'A/B Testing', 'Continuous Improvement']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including strategy, development, analytics, and optimization for businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI consulting, AI development" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions designed to drive innovation and growth.
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, _index) => {
            const Icon = service.icon;
            return (
              <div key={_index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Harness the Power of AI?</h2>
            <p className="text-gray-300 mb-6">
              Our AI experts can help you identify opportunities and implement solutions that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Start AI Journey
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Get AI Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;