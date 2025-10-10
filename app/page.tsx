'use client';
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Phone, Mail, MapPin, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      title: 'AI Analytics',
      description: 'Advanced data insights and predictive analytics powered by artificial intelligence.',
      icon: BarChart,
      features: ['Real-time Analytics', 'Predictive Modeling', 'Data Visualization']
    },
    {
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials.',
      icon: FileText,
      features: ['Blog Writing', 'Social Media Posts', 'Marketing Copy']
    },
    {
      title: 'AI Customer Support',
      description: 'Intelligent customer service solutions with 24/7 availability.',
      icon: Users,
      features: ['Chatbots', 'Email Support', 'Phone Integration']
    },
    {
      title: 'AI Healthcare',
      description: 'Medical AI solutions for diagnosis, treatment, and patient care.',
      icon: Shield,
      features: ['Medical Imaging', 'Diagnosis Support', 'Treatment Planning']
    },
    {
      title: 'AI Fintech',
      description: 'Financial AI applications for trading, risk management, and fraud detection.',
      icon: TrendingUp,
      features: ['Algorithmic Trading', 'Risk Assessment', 'Fraud Detection']
    },
    {
      title: 'AI Computer Vision',
      description: 'Visual AI solutions for image recognition and analysis.',
      icon: Target,
      features: ['Image Recognition', 'Object Detection', 'Visual Search']
    }
  ];

  const itServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamless transition to cloud infrastructure with minimal downtime.',
      icon: Cloud,
      features: ['AWS Migration', 'Azure Setup', 'Google Cloud']
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets.',
      icon: Shield,
      features: ['Security Audits', 'Threat Detection', 'Incident Response']
    },
    {
      title: 'IT Infrastructure',
      description: 'Robust infrastructure setup and management for optimal performance.',
      icon: Database,
      features: ['Network Setup', 'Server Management', 'Monitoring']
    },
    {
      title: 'IT Support',
      description: '24/7 technical support and maintenance services.',
      icon: Settings,
      features: ['Remote Support', 'On-site Service', 'Proactive Monitoring']
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI & IT Solutions for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {' '}Modern Businesses
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI and IT solutions. We help companies 
              automate processes, enhance security, and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors duration-300 font-medium"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-300 font-medium"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Services
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IT Services
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive IT solutions to keep your business running smoothly and securely.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Contact us today to discuss your AI and IT needs. We're here to help you succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">(302) 464-0950</p>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Call Now <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                Send Email <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-4">364 E Main St STE 1008<br />Middletown DE 19709</p>
              <a
                href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
              >
                Get Directions <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
