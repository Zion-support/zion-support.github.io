import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, BarChart3, Shield, Zap, ArrowRight } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Analytics',
      description: 'Advanced data analytics powered by artificial intelligence',
      icon: <BarChart3 className="w-8 h-8" />,
      path: '/ai-analytics'
    },
    {
      title: 'AI Cybersecurity',
      description: 'Intelligent threat detection and security automation',
      icon: <Shield className="w-8 h-8" />,
      path: '/ai-cybersecurity'
    },
    {
      title: 'AI Automation',
      description: 'Streamline processes with intelligent automation',
      icon: <Zap className="w-8 h-8" />,
      path: '/ai-automation'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive AI services including analytics, automation, and cybersecurity." />
      </Helmet>

      <div className="min-h-screen pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions
                designed to drive growth and efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <Link
                    to={service.path}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center w-fit"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;
