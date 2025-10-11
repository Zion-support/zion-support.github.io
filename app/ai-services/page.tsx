import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Generate high-quality content for blogs, articles, social media, and marketing materials using advanced AI.',
      features: ['Natural Language Processing', 'Multiple Content Types', 'SEO Optimization', 'Brand Voice Matching'],
      pricing: 'Starting at $500/month',
      link: '/ai-content-generator'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'AI Chatbots',
      description: 'Build intelligent chatbots that can handle customer inquiries, provide support, and improve user experience.',
      features: ['Natural Conversations', 'Multi-language Support', 'Integration Ready', 'Analytics Dashboard'],
      pricing: 'Starting at $300/month',
      link: '/ai-chatbot-builder'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with our AI-powered analytics and business intelligence solutions.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
      pricing: 'Starting at $400/month',
      link: '/ai-analytics-dashboard'
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'AI Automation',
      description: 'Automate repetitive tasks and workflows with our intelligent automation solutions.',
      features: ['Workflow Automation', 'Process Optimization', 'Error Reduction', 'Cost Savings'],
      pricing: 'Starting at $800/month',
      link: '/ai-automation'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      title: 'AI Voice Assistant',
      description: 'Create voice-enabled applications and virtual assistants for enhanced user interaction.',
      features: ['Speech Recognition', 'Natural Language Understanding', 'Multi-platform Support', 'Custom Commands'],
      pricing: 'Starting at $600/month',
      link: '/ai-voice-assistant'
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-500" />,
      title: 'AI Security',
      description: 'Protect your business with AI-powered security solutions and threat detection systems.',
      features: ['Threat Detection', 'Anomaly Detection', 'Real-time Monitoring', 'Automated Response'],
      pricing: 'Starting at $700/month',
      link: '/ai-cybersecurity'
    }
  ];

  const benefits = [
    {
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      title: 'Proven Results',
      description: 'Our AI solutions have helped businesses increase efficiency by up to 80% and reduce costs by 60%.'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: 'Cost Effective',
      description: 'Get enterprise-grade AI solutions at a fraction of the cost of building in-house capabilities.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-400" />,
      title: 'Expert Support',
      description: 'Our AI experts provide ongoing support and optimization to ensure maximum value from your investment.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services. Content generation, chatbots, analytics, automation, and more." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, content generation, automation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              AI Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Transform your business with our comprehensive AI services. From content generation to automation, 
              we provide cutting-edge artificial intelligence solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose Our AI Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We deliver measurable results and exceptional value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our AI Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive AI solutions to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {aiServices.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-purple-300 font-semibold">{service.pricing}</span>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI services can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
