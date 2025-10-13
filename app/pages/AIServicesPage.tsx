import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Bot, BarChart3, Shield, Zap, Target } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Custom machine learning models tailored to your business needs.',
      features: ['Model Development', 'Data Training', 'Model Deployment', 'Performance Monitoring'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Intelligent chatbots and virtual assistants for customer service.',
      features: ['Natural Language Processing', 'Multi-language Support', 'Integration', 'Analytics'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Advanced analytics to predict trends and make data-driven decisions.',
      features: ['Data Analysis', 'Trend Prediction', 'Risk Assessment', 'Reporting'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'AI-powered security solutions to protect your business from threats.',
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Security Monitoring'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Automate business processes with intelligent AI solutions.',
      features: ['Workflow Automation', 'Task Optimization', 'Efficiency Gains', 'Cost Reduction'],
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Target,
      title: 'AI Strategy',
      description: 'Strategic AI consulting to help you leverage artificial intelligence.',
      features: ['AI Assessment', 'Strategy Development', 'Implementation Planning', 'ROI Analysis'],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, chatbots, predictive analytics, and AI strategy consulting." />
        <meta name="keywords" content="AI services, machine learning, chatbots, predictive analytics, AI security, process automation" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with cutting-edge artificial intelligence solutions and services.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">Our AI Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-slate-900 p-8 rounded-lg hover:bg-slate-800 transition-colors group">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 flex items-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl text-white mb-8">
                Let's discuss how our AI services can transform your business and drive innovation.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;
