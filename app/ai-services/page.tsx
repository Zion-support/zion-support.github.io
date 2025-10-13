import React from 'react';
import { Brain, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Analytics',
      description: 'Advanced data analytics powered by artificial intelligence',
      link: '/ai-analytics',
      icon: Brain
    },
    {
      title: 'AI Automation',
      description: 'Automate your business processes with AI',
      link: '/ai-automation',
      icon: Brain
    },
    {
      title: 'AI Content Generation',
      description: 'Generate high-quality content using AI',
      link: '/ai-content-generation',
      icon: Brain
    },
    {
      title: 'AI Customer Service',
      description: 'Enhance customer service with AI chatbots',
      link: '/ai-customer-service',
      icon: Brain
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Transform your business with our comprehensive AI solutions designed to drive innovation and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;
