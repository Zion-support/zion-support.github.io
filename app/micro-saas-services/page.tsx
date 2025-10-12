import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const MicroSaasServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Analytics Dashboard',
      description: 'Real-time analytics and insights powered by AI',
      icon: MessageSquare,
      link: '/micro-saas-services/ai-analytics-dashboard'
    },
    {
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for your business',
      icon: MessageSquare,
      link: '/micro-saas-services/ai-chatbot-builder'
    },
    {
      title: 'AI Content Generator',
      description: 'Generate high-quality content with AI assistance',
      icon: MessageSquare,
      link: '/micro-saas-services/ai-content-generator'
    },
    {
      title: 'AI Email Assistant',
      description: 'Automate and optimize your email campaigns',
      icon: MessageSquare,
      link: '/micro-saas-services/ai-email-assistant'
    },
    {
      title: 'AI Lead Generation',
      description: 'Generate and qualify leads with AI technology',
      icon: MessageSquare,
      link: '/micro-saas-services/ai-lead-generation'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Professional micro SaaS services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="micro SaaS, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Micro SaaS
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of micro SaaS solutions designed to accelerate your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 group"
              >
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span className="text-sm font-semibold">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasServicesPage;