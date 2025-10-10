'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Zap, Shield, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Strategic AI consulting to help you identify opportunities and develop a comprehensive AI roadmap.',
      features: ['AI readiness assessment', 'Strategic planning', 'Technology selection', 'Implementation roadmap']
    },
    {
      icon: Zap,
      title: 'Machine Learning Solutions',
      description: 'Custom machine learning models tailored to your specific business needs and data.',
      features: ['Custom ML models', 'Data preprocessing', 'Model training', 'Performance optimization']
    },
    {
      icon: Shield,
      title: 'AI Security & Compliance',
      description: 'Ensure your AI systems are secure, compliant, and protected against emerging threats.',
      features: ['Security auditing', 'Compliance frameworks', 'Risk assessment', 'Threat monitoring']
    }
  ];

  const itServices = [
    {
      icon: Globe,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.',
      features: ['AWS, Azure, GCP', 'Migration services', 'Cost optimization', '24/7 monitoring']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Security assessment', 'Threat detection', 'Incident response', 'Security training']
    },
    {
      icon: Zap,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development and deployment processes.',
      features: ['Automated pipelines', 'Infrastructure as code', 'Monitoring & logging', 'Performance optimization']
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Services - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including machine learning, cloud infrastructure, cybersecurity, and more." />
        <meta name="keywords" content="AI services, IT services, machine learning, cloud computing, cybersecurity, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive growth.
            </p>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Robust IT infrastructure and services to support your business growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
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
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact our experts to discuss how our services can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default ServicesPage;
