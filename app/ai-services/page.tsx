'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Brain, Cloud, Code, 
  BarChart, FileText, MessageCircle, Target, CheckSquare, DollarSign, Box, 
  Settings, Heart, Eye, Mic, Workflow, Link as LinkIcon, Wifi, Package, 
  TrendingUp, Calendar, ShoppingCart, Sparkles, Cpu, Globe, Database, 
  Smartphone, Lock, Monitor, Server, Mail, Phone, MapPin, Clock
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiServices = [
    {
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, marketing materials, and more.',
      features: ['Blog Writing', 'Social Media Content', 'Marketing Copy', 'Technical Documentation'],
      price: 'Starting at $500/month',
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      category: 'Content'
    },
    {
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and engagement.',
      features: ['Natural Language Processing', 'Multi-channel Support', 'Analytics Dashboard', 'Custom Training'],
      price: 'Starting at $800/month',
      icon: MessageCircle,
      color: 'from-cyan-500 to-blue-500',
      category: 'Communication'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Advanced business intelligence and data visualization powered by AI.',
      features: ['Real-time Analytics', 'Predictive Insights', 'Custom Reports', 'Data Integration'],
      price: 'Starting at $1,200/month',
      icon: BarChart,
      color: 'from-green-500 to-emerald-500',
      category: 'Analytics'
    },
    {
      title: 'AI Email Assistant',
      description: 'Intelligent email management and automated responses.',
      features: ['Smart Categorization', 'Auto-responses', 'Sentiment Analysis', 'Priority Sorting'],
      price: 'Starting at $400/month',
      icon: Mail,
      color: 'from-orange-500 to-red-500',
      category: 'Productivity'
    },
    {
      title: 'AI Voice Assistant',
      description: 'Custom voice AI solutions for hands-free interaction.',
      features: ['Voice Recognition', 'Natural Speech', 'Multi-language', 'Custom Commands'],
      price: 'Starting at $1,000/month',
      icon: Mic,
      color: 'from-indigo-500 to-purple-500',
      category: 'Voice'
    },
    {
      title: 'AI Automation',
      description: 'Streamline business processes with intelligent automation.',
      features: ['Workflow Automation', 'Data Processing', 'Task Scheduling', 'Error Handling'],
      price: 'Starting at $600/month',
      icon: Workflow,
      color: 'from-teal-500 to-cyan-500',
      category: 'Automation'
    }
  ];

  const categories = [
    { id: 'overview', name: 'All Services', count: aiServices.length },
    { id: 'Content', name: 'Content', count: aiServices.filter(s => s.category === 'Content').length },
    { id: 'Communication', name: 'Communication', count: aiServices.filter(s => s.category === 'Communication').length },
    { id: 'Analytics', name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length },
    { id: 'Productivity', name: 'Productivity', count: aiServices.filter(s => s.category === 'Productivity').length },
    { id: 'Voice', name: 'Voice', count: aiServices.filter(s => s.category === 'Voice').length },
    { id: 'Automation', name: 'Automation', count: aiServices.filter(s => s.category === 'Automation').length }
  ];

  const filteredServices = activeTab === 'overview' 
    ? aiServices 
    : aiServices.filter(service => service.category === activeTab);

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including content generation, chatbots, analytics, voice assistants, and automation solutions for businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, chatbots, analytics, voice assistants, automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Harness the power of artificial intelligence to transform your business operations, 
              enhance customer experiences, and drive innovation across all departments.
            </p>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your AI needs and create a customized solution that drives real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your AI Journey
              </Link>
              <Link
                to="/about"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;