'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      title: 'AI Chatbots & NLP',
      description: 'Intelligent conversational AI solutions for customer service and support.',
      category: 'conversational',
      icon: Brain,
      features: ['Natural language processing', 'Multi-language support', 'Context awareness', 'Integration APIs']
    },
    {
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced AI models.',
      category: 'content',
      icon: Zap,
      features: ['Text generation', 'Image creation', 'Video production', 'SEO optimization']
    },
    {
      title: 'AI Data Analytics',
      description: 'Advanced analytics and insights powered by machine learning.',
      category: 'analytics',
      icon: BarChart,
      features: ['Predictive analytics', 'Real-time insights', 'Data visualization', 'Automated reporting']
    },
    {
      title: 'AI Computer Vision',
      description: 'Image and video analysis using computer vision technology.',
      category: 'vision',
      icon: Target,
      features: ['Object detection', 'Image recognition', 'Video analysis', 'Quality control']
    },
    {
      title: 'AI Voice Solutions',
      description: 'Speech recognition and voice synthesis applications.',
      category: 'voice',
      icon: Users,
      features: ['Speech-to-text', 'Text-to-speech', 'Voice commands', 'Multi-language support']
    },
    {
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation and workflow optimization.',
      category: 'automation',
      icon: Settings,
      features: ['Process automation', 'Task scheduling', 'Workflow optimization', 'Error handling']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'conversational', name: 'Conversational AI' },
    { id: 'content', name: 'Content Generation' },
    { id: 'analytics', name: 'Data Analytics' },
    { id: 'vision', name: 'Computer Vision' },
    { id: 'voice', name: 'Voice Solutions' },
    { id: 'automation', name: 'Automation' }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, content generation, data analytics, computer vision, and workflow automation. Transform your business with AI." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, content generation, data analytics, computer vision, automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI services including chatbots, content generation, data analytics, computer vision, and workflow automation.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
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
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to learn more about our AI services and get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Contact Us
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIServicesPage;