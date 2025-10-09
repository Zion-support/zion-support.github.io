import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, BarChart, Users, ArrowRight, CheckCircle, Star, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAutomationPage: React.FC = () => {
  const services = [
    {
      title: 'Process Automation',
      description: 'Automate repetitive business processes with intelligent decision-making capabilities',
      icon: Zap,
      features: ['Workflow Design', 'Rule Engine', 'Exception Handling', 'Performance Monitoring'],
      price: 'Starting at $399/month'
    },
    {
      title: 'Document Processing',
      description: 'Intelligent document processing and data extraction using AI',
      icon: Brain,
      features: ['OCR Technology', 'Data Extraction', 'Classification', 'Validation'],
      price: 'Starting at $299/month'
    }
  ];

  const benefits = [
    '95% Process Automation',
    '50% Cost Reduction',
    '300% Efficiency Gain',
    '24/7 Operation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Automation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Intelligent automation solutions that transform your business processes with AI-powered decision making
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              (302) 464-0950
            </a>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <service.icon className="w-12 h-12 text-cyan-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                <Link
                  to="/contact"
                  className="cyber-button w-full text-center inline-block"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our AI Automation?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIAutomationPage;
