'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Users, Settings, BarChart } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with advanced AI analytics',
      features: ['Predictive modeling', 'Real-time insights', 'Custom dashboards', 'Data visualization'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Streamline business processes with intelligent automation solutions',
      features: ['Workflow automation', 'Process optimization', 'Smart scheduling', 'Task automation'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Protect your digital assets with AI-powered security solutions',
      features: ['Threat detection', 'Anomaly detection', 'Security monitoring', 'Incident response'],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'AI CRM',
      description: 'Enhance customer relationships with intelligent CRM solutions',
      features: ['Lead scoring', 'Customer insights', 'Sales forecasting', 'Personalization'],
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including analytics, automation, cybersecurity, and CRM solutions. Transform your business with artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI analytics, AI automation, AI cybersecurity, AI CRM" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Harness the power of artificial intelligence to transform your business operations, 
                enhance decision-making, and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From analytics to automation, we provide comprehensive AI solutions that drive real business value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 h-full hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 border border-gray-700/50">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-12 text-center border border-purple-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI solutions can drive innovation and growth for your organization.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;
