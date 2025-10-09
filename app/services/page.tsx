import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Cloud, Shield, Code, Zap, ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Consulting',
      description: 'Strategic AI implementation and optimization for your business',
      icon: Brain,
      features: ['AI Strategy Development', 'Technology Assessment', 'Implementation Planning']
    },
    {
      title: 'Machine Learning',
      description: 'Custom ML models and algorithms tailored to your needs',
      icon: Code,
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making']
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced text and speech processing solutions',
      icon: Zap,
      features: ['Chatbots', 'Text Analysis', 'Voice Recognition']
    }
  ];

  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for your business',
      icon: Cloud,
      features: ['Cloud Migration', 'Infrastructure Management', 'Cost Optimization']
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your data',
      icon: Shield,
      features: ['Security Audits', 'Threat Detection', 'Incident Response']
    },
    {
      title: 'IT Support',
      description: '24/7 technical support and maintenance services',
      icon: Code,
      features: ['Help Desk', 'System Maintenance', 'Troubleshooting']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services to transform your business. From AI consulting to cloud infrastructure." />
        <meta name="keywords" content="AI services, IT consulting, cloud solutions, cybersecurity, machine learning" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI & IT Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our cutting-edge AI solutions and robust IT infrastructure services.
            </p>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">AI Services</h2>
              <p className="text-xl text-gray-300">Leverage the power of artificial intelligence to drive innovation</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2 text-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">IT Services</h2>
              <p className="text-xl text-gray-300">Robust infrastructure and support for your technology needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2 text-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI and IT services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-cyan-600 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/pricing"
                className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ServicesPage;