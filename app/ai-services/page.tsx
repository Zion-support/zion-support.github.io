import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Database, Code, Smartphone, Cpu, MessageCircle, Calendar, Users, Eye, BarChart3, Shield, Globe, DollarSign, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AIServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI technology.',
      features: ['Blog posts and articles', 'Social media content', 'Marketing copy', 'Product descriptions', 'SEO optimization', 'Multi-language support'],
      price: 'Starting at $29/month',
      link: '/ai-content-generator',
      popular: true
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, lead generation, and automated assistance.',
      features: ['24/7 customer support', 'Lead qualification', 'FAQ automation', 'Multi-language support', 'Integration APIs', 'Analytics dashboard'],
      price: 'Starting at $49/month',
      link: '/ai-chatbot-builder',
      popular: true
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and visualization.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reporting', 'Data visualization', 'Trend analysis'],
      price: 'Starting at $39/month',
      link: '/ai-analytics-dashboard',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Automate email management, scheduling, and responses with intelligent AI assistance.',
      features: ['Smart email sorting', 'Auto-responses', 'Meeting scheduling', 'Priority detection', 'Email templates', 'Spam filtering'],
      price: 'Starting at $19/month',
      link: '/ai-email-assistant',
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      title: 'AI Voice Assistant',
      description: 'Integrate voice-activated AI assistants into your applications and workflows.',
      features: ['Voice commands', 'Speech recognition', 'Natural language processing', 'Multi-platform support', 'Custom wake words', 'API integration'],
      price: 'Starting at $59/month',
      link: '/ai-voice-assistant',
      popular: false
    },
    {
      icon: <Cpu className="w-8 h-8 text-cyan-500" />,
      title: 'AI Automation Suite',
      description: 'Automate repetitive tasks and workflows with intelligent AI-powered automation.',
      features: ['Workflow automation', 'Task scheduling', 'Data processing', 'Integration management', 'Custom triggers', 'Performance monitoring'],
      price: 'Starting at $79/month',
      link: '/ai-automation',
      popular: true
    },
    {
      icon: <Eye className="w-8 h-8 text-indigo-500" />,
      title: 'AI Computer Vision',
      description: 'Extract meaningful information from images and videos for business automation.',
      features: ['Image recognition', 'Object detection', 'Facial recognition', 'Video analysis', 'Quality control', 'Document processing'],
      price: 'Starting at $89/month',
      link: '/ai-computer-vision',
      popular: false
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-500" />,
      title: 'AI Predictive Analytics',
      description: 'Forecast future trends and behaviors to make data-driven business decisions.',
      features: ['Trend analysis', 'Risk assessment', 'Performance prediction', 'Scenario planning', 'Market forecasting', 'Customer behavior analysis'],
      price: 'Starting at $99/month',
      link: '/ai-predictive-analytics',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Cybersecurity',
      description: 'Advanced AI-powered security solutions to protect your digital assets and detect threats.',
      features: ['Threat detection', 'Anomaly monitoring', 'Automated response', 'Compliance reporting', 'Risk assessment', 'Incident response'],
      price: 'Starting at $149/month',
      link: '/ai-cybersecurity',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline workflows to boost productivity by up to 300%.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Savings',
      description: 'Reduce operational costs by automating manual processes and improving resource utilization.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Better Insights',
      description: 'Gain deeper insights into your business data with AI-powered analytics and reporting.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Availability',
      description: 'AI solutions work around the clock to provide continuous support and monitoring.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We analyze your business needs and identify AI opportunities.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop a customized AI implementation strategy for your business.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy AI solutions with minimal disruption to your operations.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously monitor and optimize AI performance for maximum ROI.'
    }
  ];

  const stats = [
    { number: '1000+', label: 'AI Models' },
    { number: '99.9%', label: 'Accuracy' },
    { number: '24/7', label: 'Support' },
    { number: '50+', label: 'Languages' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including content generation, chatbots, analytics, and automation solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, chatbots, analytics, automation, machine learning" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              AI Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence solutions designed to automate, optimize, and accelerate your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI services tailored to meet your specific business needs and objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-600 font-semibold mb-4">{service.price}</div>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the key benefits of implementing AI solutions in your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured approach to successfully implementing AI solutions in your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Let's discuss how our AI solutions can drive innovation and growth in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Link>
            <Link
              to="/it-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore IT Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}