import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Zap, Shield, Cloud, Users, Award, Clock, Star } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced analytics platform with real-time insights and predictive modeling.',
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards']
    },
    {
      title: 'AI Cybersecurity Suite Pro',
      description: 'Comprehensive security solutions powered by artificial intelligence.',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      features: ['Threat Detection', 'Automated Response', 'Security Monitoring']
    },
    {
      title: 'AI Content Generation Pro',
      description: 'Create high-quality content automatically with AI-powered tools.',
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      features: ['Content Creation', 'SEO Optimization', 'Multi-language Support']
    },
    {
      title: 'AI Customer Support Chatbot',
      description: 'Intelligent customer service automation with natural language processing.',
      icon: <Users className="w-8 h-8 text-green-500" />,
      features: ['24/7 Support', 'Natural Language Processing', 'Multi-channel Integration']
    },
    {
      title: 'AI Code Assistant Pro',
      description: 'Advanced coding assistance with AI-powered suggestions and automation.',
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      features: ['Code Generation', 'Bug Detection', 'Performance Optimization']
    },
    {
      title: 'AI Business Intelligence Pro',
      description: 'Transform data into actionable insights with AI-driven analytics.',
      icon: <Award className="w-8 h-8 text-indigo-500" />,
      features: ['Data Visualization', 'Trend Analysis', 'Strategic Insights']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services and solutions for modern businesses. Transform your operations with cutting-edge artificial intelligence." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of AI-powered solutions. 
            From analytics to automation, we provide cutting-edge technology to drive your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8">
            Contact our AI experts to discuss how we can transform your business with artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Free Consultation
            </button>
            <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;