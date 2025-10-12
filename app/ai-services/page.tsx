'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, Shield, BarChart, MessageCircle, Eye, Mic, 
  FileText, Users, Heart, DollarSign, Target, Settings, 
  CheckCircle, ArrowRight, Star, TrendingUp,
  Cpu
} from 'lucide-react';

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
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Discover our comprehensive AI services including analytics, chatbots, cybersecurity, computer vision, and custom AI development solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbot, analytics, cybersecurity, computer vision" />
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
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-blue-400 font-semibold mb-4">{service.price}</div>
                
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
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
  );
};

export default AiServicesPage;