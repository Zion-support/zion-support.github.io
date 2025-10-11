'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Settings, BarChart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ConsultationPage: React.FC = () => {
  const services = [
    {
      title: 'AI Strategy Consulting',
      description: 'Develop a comprehensive AI strategy tailored to your business needs.',
      benefits: ['AI Roadmap', 'Technology Assessment', 'ROI Analysis', 'Implementation Plan'],
      icon: <Brain className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Digital Transformation',
      description: 'Transform your business processes with modern technology solutions.',
      benefits: ['Process Analysis', 'Technology Integration', 'Change Management', 'Training Programs'],
      icon: <Zap className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with expert guidance.',
      benefits: ['Migration Planning', 'Security Assessment', 'Cost Optimization', 'Performance Tuning'],
      icon: <Globe className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Data Analytics',
      description: 'Unlock insights from your data with advanced analytics and visualization.',
      benefits: ['Data Strategy', 'Analytics Setup', 'Dashboard Creation', 'Insight Generation'],
      icon: <BarChart className="w-8 h-8 text-orange-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation | Zion Tech Group</title>
        <meta name="description" content="Professional consultation services by Zion Tech Group. Expert guidance for your AI and IT transformation journey." />
        <meta name="keywords" content="consultation, AI strategy, digital transformation, IT services, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Expert
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Consultation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert guidance for your AI and IT transformation journey. 
              Our consultants help you make the right decisions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive consultation services to guide your transformation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a consultation with our experts and start your transformation journey
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Schedule Your Consultation
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;