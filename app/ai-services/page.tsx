'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, BarChart, MessageCircle, Eye, Mic, FileText, Users, Target, Settings, CheckCircle, ArrowRight, Clock, TrendingUp, Workflow } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics.',
      price: 'Starting at $2,999/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom ML models', 'Data visualization'],
      benefits: ['40% increase in decision speed', '25% cost reduction', '99.9% accuracy'],
      link: '/ai-analytics',
      category: 'analytics'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-400" />,
      title: 'AI Chatbot & Conversational AI',
      description: 'Intelligent chatbots that understand context and provide human-like interactions.',
      price: 'Starting at $1,499/month',
      features: ['Natural language processing', 'Multi-language support', 'Voice integration', '24/7 availability'],
      benefits: ['80% reduction in support tickets', '60% faster response time', '95% customer satisfaction'],
      link: '/ai-chatbot-builder',
      category: 'conversational'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'AI Cybersecurity Solutions',
      description: 'Advanced threat detection and prevention using machine learning algorithms.',
      price: 'Starting at $3,999/month',
      features: ['Threat detection', 'Anomaly detection', 'Automated response', 'Compliance monitoring'],
      benefits: ['99.8% threat detection rate', '50% faster incident response', 'Zero false positives'],
      link: '/ai-cybersecurity',
      category: 'security'
    },
    {
      icon: <Eye className="w-8 h-8 text-green-400" />,
      title: 'Computer Vision & Image Recognition',
      description: 'Advanced image analysis and recognition capabilities for various industries.',
      price: 'Starting at $2,499/month',
      features: ['Object detection', 'Facial recognition', 'Quality inspection', 'Medical imaging'],
      benefits: ['90% accuracy improvement', '70% faster processing', '24/7 monitoring'],
      link: '/computer-vision',
      category: 'vision'
    },
    {
      icon: <Mic className="w-8 h-8 text-orange-400" />,
      title: 'AI Voice & Speech Processing',
      description: 'Convert speech to text, analyze sentiment, and create voice assistants.',
      price: 'Starting at $1,999/month',
      features: ['Speech-to-text', 'Voice synthesis', 'Sentiment analysis', 'Multi-language support'],
      benefits: ['95% accuracy rate', 'Real-time processing', 'Custom voice models'],
      link: '/ai-voice-assistant',
      category: 'voice'
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-400" />,
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials.',
      price: 'Starting at $999/month',
      features: ['Blog writing', 'Social media posts', 'Email campaigns', 'Product descriptions'],
      benefits: ['80% time savings', 'Consistent quality', 'SEO optimized'],
      link: '/ai-content-generator',
      category: 'content'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: 'AI Customer Service',
      description: 'Intelligent customer support with automated ticket routing and resolution.',
      price: 'Starting at $1,799/month',
      features: ['Ticket automation', 'Sentiment analysis', 'Escalation management', 'Performance analytics'],
      benefits: ['75% faster resolution', '90% customer satisfaction', '24/7 availability'],
      link: '/ai-customer-service',
      category: 'customer'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: 'AI Healthcare Solutions',
      description: 'Medical diagnosis assistance, drug discovery, and patient monitoring systems.',
      price: 'Starting at $4,999/month',
      features: ['Medical imaging analysis', 'Drug discovery', 'Patient monitoring', 'Diagnostic assistance'],
      benefits: ['95% diagnostic accuracy', '30% faster diagnosis', 'FDA compliant'],
      link: '/ai-healthcare',
      category: 'healthcare'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      title: 'AI Financial Services',
      description: 'Fraud detection, algorithmic trading, and risk assessment solutions.',
      price: 'Starting at $3,499/month',
      features: ['Fraud detection', 'Algorithmic trading', 'Risk assessment', 'Credit scoring'],
      benefits: ['99.5% fraud detection', '25% risk reduction', 'Real-time monitoring'],
      link: '/ai-financial',
      category: 'finance'
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      title: 'AI Marketing Automation',
      description: 'Personalized marketing campaigns and customer segmentation using AI.',
      price: 'Starting at $2,199/month',
      features: ['Customer segmentation', 'Personalized campaigns', 'A/B testing', 'ROI optimization'],
      benefits: ['40% higher conversion', '60% cost reduction', 'Real-time optimization'],
      link: '/ai-marketing',
      category: 'marketing'
    },
    {
      icon: <Settings className="w-8 h-8 text-gray-400" />,
      title: 'AI Process Automation',
      description: 'Automate repetitive tasks and optimize business processes with AI.',
      price: 'Starting at $1,299/month',
      features: ['Workflow automation', 'Document processing', 'Data entry automation', 'Process optimization'],
      benefits: ['70% time savings', '90% accuracy improvement', 'Cost reduction'],
      link: '/ai-automation',
      category: 'automation'
    },
    {
      icon: <Cpu className="w-8 h-8 text-indigo-400" />,
      title: 'Custom AI Development',
      description: 'Bespoke AI solutions tailored to your specific business requirements.',
      price: 'Custom pricing',
      features: ['Custom ML models', 'API development', 'Integration services', 'Ongoing support'],
      benefits: ['100% tailored solution', 'Competitive advantage', 'Scalable architecture'],
      link: '/custom-ai-development',
      category: 'custom'
    }
  ];

  const categories = [
    { id: 'overview', name: 'Overview', icon: <BarChart className="w-5 h-5" /> },
    { id: 'analytics', name: 'Analytics', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'conversational', name: 'Conversational', icon: <MessageCircle className="w-5 h-5" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'vision', name: 'Computer Vision', icon: <Eye className="w-5 h-5" /> },
    { id: 'voice', name: 'Voice & Speech', icon: <Mic className="w-5 h-5" /> },
    { id: 'content', name: 'Content', icon: <FileText className="w-5 h-5" /> },
    { id: 'customer', name: 'Customer Service', icon: <Users className="w-5 h-5" /> },
    { id: 'healthcare', name: 'Healthcare', icon: <Heart className="w-5 h-5" /> },
    { id: 'finance', name: 'Finance', icon: <DollarSign className="w-5 h-5" /> },
    { id: 'marketing', name: 'Marketing', icon: <Target className="w-5 h-5" /> },
    { id: 'automation', name: 'Automation', icon: <Settings className="w-5 h-5" /> },
    { id: 'custom', name: 'Custom', icon: <Cpu className="w-5 h-5" /> }
  ];

  const filteredServices = activeTab === 'overview' 
    ? aiServices 
    : aiServices.filter(service => service.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
  return (
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and automation. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI automation, AI consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Services",
            "description": "Advanced artificial intelligence solutions for businesses",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "999",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions designed to drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/about" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                <span>View AI Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Tabs */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to solve real business challenges
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="text-cyan-400 font-semibold text-lg">
                      {service.price}
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Business Benefits:</h4>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={service.link}
                      className="block w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Process Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology for successful AI implementation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Analysis',
                  description: 'We analyze your business processes and identify AI opportunities.',
                  icon: <Target className="w-8 h-8 text-cyan-400" />
                },
                {
                  step: '02',
                  title: 'AI Strategy & Planning',
                  description: 'Develop a comprehensive AI roadmap tailored to your goals.',
                  icon: <Settings className="w-8 h-8 text-purple-400" />
                },
                {
                  step: '03',
                  title: 'Model Development',
                  description: 'Build and train custom AI models for your specific use cases.',
                  icon: <Brain className="w-8 h-8 text-green-400" />
                },
                {
                  step: '04',
                  title: 'Deployment & Optimization',
                  description: 'Deploy AI solutions and continuously optimize performance.',
                  icon: <Zap className="w-8 h-8 text-yellow-400" />
                }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="text-cyan-400 font-bold text-lg mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Harness the Power of AI?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our AI solutions can transform your business and give you a competitive edge.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Start Your AI Journey
                  </Link>
                  <Link 
                    to="/pricing"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    View AI Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI solutions can automate your processes, enhance customer experiences, and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/about"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Let our AI experts help you choose the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Your AI Journey <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/about" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default AiServicesPage;