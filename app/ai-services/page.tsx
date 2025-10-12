import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star, Eye, MessageSquare, BarChart3 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates'],
      pricing: 'Starting at $29/month',
      link: '/ai-content-generator',
      popular: true
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'AI Automation',
      description: 'Automate repetitive tasks and workflows with intelligent AI-powered automation solutions.',
      features: ['Workflow automation', 'Process optimization', 'Custom integrations', 'Real-time monitoring'],
      pricing: 'Starting at $49/month',
      link: '/ai-automation',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Cybersecurity',
      description: 'Advanced AI-powered security solutions to protect your digital assets and detect threats.',
      features: ['Threat detection', 'Anomaly monitoring', 'Automated response', 'Compliance reporting'],
      pricing: 'Starting at $99/month',
      link: '/ai-cybersecurity',
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with powerful AI-driven analytics tools.',
      features: ['Predictive analytics', 'Data visualization', 'Custom dashboards', 'Real-time insights'],
      pricing: 'Starting at $39/month',
      link: '/ai-analytics',
      popular: false
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI chatbots for customer support, sales, and engagement.',
      features: ['Natural language processing', 'Multi-channel support', 'Custom training', 'Analytics dashboard'],
      pricing: 'Starting at $59/month',
      link: '/ai-chatbot',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
      title: 'AI Business Intelligence',
      description: 'Advanced AI-powered business intelligence and data analysis solutions.',
      features: ['Predictive modeling', 'Automated reporting', 'Data integration', 'Custom insights'],
      pricing: 'Starting at $79/month',
      link: '/ai-business-intelligence',
      popular: false
    }
  ];

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: 'Advanced AI Models',
      description: 'Cutting-edge AI technology powered by the latest machine learning models'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance with industry standards'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: 'Real-time Processing',
      description: 'Lightning-fast AI processing and instant results'
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      title: 'Global Scale',
      description: 'Deploy AI solutions across multiple regions and languages'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including content generation, automation, cybersecurity, analytics, and chatbots. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, automation, cybersecurity, analytics, chatbots, business intelligence" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI-powered solutions designed to drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of AI services tailored to meet your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group relative ${
                    service.popular ? 'ring-2 ring-purple-400' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-white mb-2">{service.pricing}</p>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver cutting-edge AI solutions with enterprise-grade security and support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of businesses already using our AI solutions to drive growth and efficiency
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your AI Journey
                </Link>
                <Link
                  to="/about"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIServicesPage;