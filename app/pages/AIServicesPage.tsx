import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Bot, BarChart3, Shield, Zap, Target } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Develop comprehensive AI strategies tailored to your business objectives and industry requirements.',
      features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning']
    },
    {
      icon: Bot,
      title: 'AI Development',
      description: 'Build custom AI solutions including machine learning models, chatbots, and automation systems.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: BarChart3,
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics and reporting.',
      features: ['Data Visualization', 'Predictive Modeling', 'Business Intelligence', 'Performance Metrics']
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'Secure your AI systems with comprehensive security measures and compliance frameworks.',
      features: ['Data Protection', 'Model Security', 'Privacy Compliance', 'Threat Detection']
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Automate business processes and workflows using intelligent AI-powered automation solutions.',
      features: ['Process Automation', 'Workflow Optimization', 'Task Automation', 'Efficiency Improvement']
    },
    {
      icon: Target,
      title: 'AI Training',
      description: 'Train your team on AI technologies and best practices for successful implementation.',
      features: ['Technical Training', 'Best Practices', 'Hands-on Workshops', 'Ongoing Support']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including strategy, development, analytics, security, automation, and training. Transform your business with cutting-edge AI solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI consulting, AI development, AI analytics" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI services to transform your business with cutting-edge artificial intelligence solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;