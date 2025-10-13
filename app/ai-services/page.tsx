import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Zap, BarChart3, Users, Heart, TrendingUp } from 'lucide-react';

const AIServicesPage = () => {
  const services = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics',
      description: 'Advanced data analysis and insights powered by artificial intelligence',
      icon: BarChart3,
      href: '/ai-analytics'
    },
    {
      id: 'ai-automation',
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation',
      icon: Zap,
      href: '/ai-automation'
    },
    {
      id: 'ai-customer-service',
      title: 'AI Customer Service',
      description: 'Enhance customer support with AI-powered chatbots and solutions',
      icon: Users,
      href: '/ai-customer-service'
    },
    {
      id: 'ai-healthcare',
      title: 'AI Healthcare',
      description: 'Revolutionary healthcare solutions powered by artificial intelligence',
      icon: Heart,
      href: '/ai-healthcare'
    },
    {
      id: 'ai-marketing',
      title: 'AI Marketing',
      description: 'Intelligent marketing solutions for better customer engagement',
      icon: TrendingUp,
      href: '/ai-marketing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including analytics, automation, customer service, healthcare, and marketing solutions." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mb-6">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.href}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <service.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-gray-300 mb-6">
            Contact us to learn more about our AI services
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="tel:+13024640950" 
              className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span className="text-lg">📞</span>
              <span>+1 302 464 0950</span>
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span className="text-lg">✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </a>
            <a 
              href="https://ziontechgroup.com" 
              className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span className="text-lg">🌐</span>
              <span>ziontechgroup.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;
