import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Database, Smartphone, Globe, Settings, Monitor, Package, Lock, Calendar, Link as LinkIcon, ShoppingCart, TrendingUp, CheckSquare, Cpu, Wifi, MessageSquare, FileText, Heart, DollarSign, Box, Eye, Mic, Workflow, MessageCircle } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Analytics',
      description: 'Advanced data insights powered by machine learning algorithms',
      features: ['Predictive analytics', 'Real-time insights', 'Custom dashboards', 'Data visualization'],
      price: 'Starting at $1,500/month'
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Streamline business processes with intelligent automation',
      features: ['Workflow automation', 'Process optimization', 'Smart scheduling', 'Task management'],
      price: 'Starting at $2,000/month'
    },
    {
      icon: MessageCircle,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI for customer service',
      features: ['Natural language processing', 'Multi-language support', '24/7 availability', 'Custom training'],
      price: 'Starting at $800/month'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Advanced threat detection and security solutions',
      features: ['Threat detection', 'Anomaly detection', 'Security monitoring', 'Incident response'],
      price: 'Starting at $3,000/month'
    }
  ];

  const benefits = [
    'Increased Efficiency',
    'Cost Reduction',
    'Better Decision Making',
    '24/7 Automation',
    'Scalable Solutions',
    'Expert Support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including analytics, automation, chatbots, and cybersecurity solutions." />
        <meta name="keywords" content="ai services, artificial intelligence, machine learning, automation, chatbots, cybersecurity" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions designed to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 inline-flex items-center"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">AI Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
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
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">AI Solutions</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI services can transform your business and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 inline-flex items-center"
            >
              Start Your AI Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
