import React from 'react';
import { CheckCircle, ArrowRight, Zap, Brain, Database, Code, Smartphone, Cpu, Shield, Globe } from 'lucide-react';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      ico: n: <Brain className="w-12 h-12 text-blue-500" />,
      titl: e: 'AI Content Generator Pro',
      descriptio: n: 'Advanced AI-powered content creation tool that generates high-quality articles, blogs, social media posts, and marketing copy.',
      feature: s: [
        'Generate 10,000+ words daily',
        '50+ content templates',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Plagiarism detection'
      ],
      pricin: g: '$29/month',
      popula: r: true,
      lin: k: '/ai-content-generator'
    },
    {
      ico: n: <Zap className="w-12 h-12 text-green-500" />,
      titl: e: 'AI Chatbot Builder Enterprise',
      descriptio: n: 'Create intelligent chatbots for customer service, sales, and support with advanced NLP and machine learning capabilities.',
      feature: s: [
        'Visual chatbot builder',
        'Multi-channel deployment',
        'Advanced analytics',
        'Custom integrations',
        '24/7 monitoring',
        'A/B testing tools'
      ],
      pricin: g: '$49/month',
      popula: r: false,
      lin: k: '/ai-chatbot-builder'
    },
    {
      ico: n: <Database className="w-12 h-12 text-purple-500" />,
      titl: e: 'AI Analytics Dashboard',
      descriptio: n: 'Comprehensive business intelligence platform with AI-powered insights, predictive analytics, and automated reporting.',
      feature: s: [
        'Real-time data visualization',
        'Predictive analytics',
        'Automated reports',
        'Custom dashboards',
        'Data integration',
        'Mobile app included'
      ],
      pricin: g: '$79/month',
      popula: r: true,
      lin: k: '/ai-analytics-dashboard'
    },
    {
      ico: n: <Code className="w-12 h-12 text-orange-500" />,
      titl: e: 'AI Email Assistant',
      descriptio: n: 'Smart email management tool that drafts, schedules, and optimizes emails using AI to improve open rates and engagement.',
      feature: s: [
        'Smart email drafting',
        'Send time optimization',
        'Subject line testing',
        'Email templates',
        'Performance analytics',
        'CRM integration'
      ],
      pricin: g: '$39/month',
      popula: r: false,
      lin: k: '/ai-email-assistant'
    },
    {
      ico: n: <Smartphone className="w-12 h-12 text-red-500" />,
      titl: e: 'AI Voice Assistant',
      descriptio: n: 'Custom voice assistant for businesses with natural language processing, voice commands, and integration capabilities.',
      feature: s: [
        'Natural voice recognition',
        'Custom voice training',
        'Multi-language support',
        'API integrations',
        'Voice analytics',
        'Custom wake words'
      ],
      pricin: g: '$59/month',
      popula: r: false,
      lin: k: '/ai-voice-assistant'
    },
    {
      ico: n: <Cpu className="w-12 h-12 text-yellow-500" />,
      titl: e: 'AI Automation Suite',
      descriptio: n: 'Complete workflow automation platform that uses AI to streamline business processes and reduce manual work.',
      feature: s: [
        'Workflow automation',
        'Process optimization',
        'Task scheduling',
        'Integration hub',
        'Performance monitoring',
        'Custom triggers'
      ],
      pricin: g: '$99/month',
      popula: r: true,
      lin: k: '/ai-automation'
      ico: n: <Brain className="w-8 h-8 text-blue-500" />,
      titl: e: 'AI Content Generator',
      descriptio: n: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      feature: s: ['Blog post generation', 'Social media content', 'Product descriptions', 'SEO optimization'],
      pricin: g: '$29/month',
      lin: k: '/ai-content-generator',
      popula: r: true,
      duratio: n: 'Instant'
    },
    {
      ico: n: <Zap className="w-8 h-8 text-yellow-500" />,
      titl: e: 'AI Chatbot Builder',
      descriptio: n: 'Create intelligent chatbots for customer support and lead generation.',
      feature: s: ['Natural language processing', 'Multi-language support', 'Integration APIs', 'Analytics dashboard'],
      pricin: g: '$49/month',
      lin: k: '/ai-chatbot-builder',
      popula: r: true,
      duratio: n: '1-2 weeks'
    },
    {
      ico: n: <Shield className="w-8 h-8 text-green-500" />,
      titl: e: 'AI Analytics Dashboard',
      descriptio: n: 'Get actionable insights from your data with AI-powered analytics and visualization.',
      feature: s: ['Predictive analytics', 'Custom dashboards', 'Real-time monitoring', 'Automated reports'],
      pricin: g: '$79/month',
      lin: k: '/ai-analytics-dashboard',
      popula: r: false,
      duratio: n: '2-3 weeks'
    },
    {
      ico: n: <Globe className="w-8 h-8 text-purple-500" />,
      titl: e: 'AI Automation Suite',
      descriptio: n: 'Automate repetitive tasks and workflows with intelligent AI solutions.',
      feature: s: ['Workflow automation', 'Email automation', 'Data processing', 'Task scheduling'],
      pricin: g: '$99/month',
      lin: k: '/ai-automation-suite',
      popula: r: false,
      duratio: n: '3-4 weeks'
      ico: n: <Brain className="w-8 h-8 text-blue-500" />,
      titl: e: 'AI Content Generator',
      descriptio: n: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.',
      feature: s: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates'],
      pricin: g: 'Starting at $29/month',
      lin: k: '/ai-content-generator',
      popula: r: false
    },
    {
      ico: n: <Zap className="w-8 h-8 text-purple-500" />,
      titl: e: 'AI Chatbot Builder',
      descriptio: n: 'Create intelligent chatbots for customer support, sales, and engagement with no coding required.',
      feature: s: ['Natural language processing', 'Multi-channel deployment', 'Analytics dashboard', 'Custom integrations'],
      pricin: g: 'Starting at $49/month',
      lin: k: '/ai-chatbot-builder',
      popula: r: true
    },
    {
      ico: n: <Shield className="w-8 h-8 text-green-500" />,
      titl: e: 'AI Analytics Dashboard',
      descriptio: n: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling.',
      feature: s: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reporting'],
      pricin: g: 'Starting at $79/month',
      lin: k: '/ai-analytics-dashboard',
      popula: r: false
    },
    {
      ico: n: <Globe className="w-8 h-8 text-orange-500" />,
      titl: e: 'AI Automation Suite',
      descriptio: n: 'Automate repetitive tasks and workflows with intelligent AI agents and process optimization.',
      feature: s: ['Workflow automation', 'Smart scheduling', 'Data processing', 'Integration APIs'],
      pricin: g: 'Starting at $99/month',
      lin: k: '/ai-automation',
      popula: r: false
    }
  ];

  const benefits = [
    {
      titl: e: 'Cost Effective',
      descriptio: n: 'Reduce operational costs by up to 60% with AI automation',
      ico: n: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      titl: e: 'Fast Implementation',
      descriptio: n: 'Get up and running in days, not months',
      ico: n: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      titl: e: 'Proven Results',
      descriptio: n: 'Trusted by 500+ businesses worldwide',
      ico: n: <Star className="w-6 h-6 text-yellow-500" />
      ico: n: <CheckCircle className="w-6 h-6 text-green-500" />,
      titl: e: '24/7 Availability',
      descriptio: n: 'AI services work around the clock to serve your customers and optimize your operations.'
    },
    {
      ico: n: <CheckCircle className="w-6 h-6 text-green-500" />,
      titl: e: 'Scalable Solutions',
      descriptio: n: 'Easily scale your AI capabilities as your business grows without additional infrastructure.'
    },
    {
      ico: n: <CheckCircle className="w-6 h-6 text-green-500" />,
      titl: e: 'Cost Effective',
      descriptio: n: 'Reduce operational costs by automating tasks that would otherwise require human resources.'
    },
    {
      ico: n: <CheckCircle className="w-6 h-6 text-green-500" />,
      titl: e: 'Continuous Learning',
      descriptio: n: 'AI models continuously improve and adapt to your specific business needs and data patterns.'
    }
  ];

  const stats = [
    { numbe: r: '10,000+', labe: l: 'AI Models Trained' },
    { numbe: r: '99.9%', labe: l: 'Accuracy Rate' },
    { numbe: r: '50+', labe: l: 'AI Services Available' },
    { numbe: r: '500+', labe: l: 'AI Solutions Deployed' },
    { numbe: r: '99.9%', labe: l: 'Accuracy Rate' },
    { numbe: r: '60%', labe: l: 'Cost Reduction' },
    { numbe: r: '24/7', labe: l: 'AI Support' }
    { numbe: r: '95%', labe: l: 'Customer Satisfaction' },
    { numbe: r: '50%', labe: l: 'Cost Reduction' },
    { numbe: r: '300%', labe: l: 'Efficiency Increase' },
    { numbe: r: '24/7', labe: l: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including content generation, chatbots, analytics, and automation. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI automation, AI analytics, AI chatbots" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl: md:text-6xl font-bold text-white mb-6">
              AI-Powered Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with our comprehensive AI services. From content generation to automation, 
              we provide cutting-edge artificial intelligence solutions to drive growth and efficiency.
        <meta name="description" content="Advanced AI services including content generation, chatbots, analytics, and automation. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, chatbots, analytics, automation" />
        <meta name="description" content="Transform your business with our comprehensive AI services including content generation, chatbots, analytics, and automation." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, content generation, chatbots" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12: sm:py-16: lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl: sm:text-4xl: md:text-5xl: lg:text-6xl font-bold text-white mb-6">
              AI-Powered Solutions
            </h1>
            <p className="text-lg: sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Transform your business with cutting-edge artificial intelligence solutions designed to automate, optimize, and accelerate your growth.
          <div className="text-center mb-12: sm:mb-16">
            <h1 className="text-3xl: sm:text-4xl: md:text-5xl: lg:text-6xl font-bold text-white mb-4: sm:mb-6">
              AI-Powered Solutions
            </h1>
            <p className="text-lg: sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6: sm:mb-8 px-4">
              Transform your business with cutting-edge artificial intelligence services designed to automate, optimize, and accelerate your growth.
            </p>
            <div className="flex flex-col: sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold: hover:from-blue-700: hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/micro-saas-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold: hover:bg-white/10 transition-colors"
              >
                Explore Micro SAAS
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold: hover:bg-white/10 transition-colors"
              >
                Learn More
              >

          {/* Stats Section */}
          <div className="grid grid-cols-2: sm:grid-cols-4 gap-4: sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-2">{stat.number}</div>
          <div className="grid grid-cols-2: md:grid-cols-4 gap-4: sm:gap-6: lg:gap-8 mb-12: sm:mb-16: lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-1: sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs: sm:text-sm">{stat.label}>
            ))}
          </div>

          {/* AI Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl: md:text-4xl font-bold text-white text-center mb-12">Our AI Services</h2>
            <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20: hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      >
                  )}
                  <div className="mb-6 group-hove: r:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hove: r:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <Link 
                      to={service.link}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold: hover:from-blue-700: hover:to-purple-700 transition-all duration-300"
                    >
                      Learn More
                    >
              ))}
            </div>

          {/* Why Choose Our AI Services */}
          <div className="mb-20">
            <h2 className="text-3xl: md:text-4xl font-bold text-white text-center mb-12">Why Choose Our AI Services?</h2>
            <div className="grid grid-cols-1: md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level encryption and security protocols to protect your data and ensure compliance with industry standards.>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Global Scale</h3>
                <p className="text-gray-300">Deploy AI solutions across multiple regions with 99.9% uptime and global CDN for optimal performance.>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Advanced AI</h3>
                <p className="text-gray-300">State-of-the-art machine learning models and neural networks for superior accuracy and performance.>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our AI services to drive growth and efficiency.
        >

      {/* Services Section */}
      <section className="py-12: sm:py-16: lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-4 px-4">Our AI Services</h2>
            <p className="text-lg: sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive AI solutions designed to meet your business needs
            >
          
          <div className="grid grid-cols-1: sm:grid-cols-2: lg:grid-cols-2 gap-6: sm:gap-8 mb-20">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20: hover:bg-white/15 transition-all duration-300 group">
      {/* AI Services Section */}
      <section className="py-12: sm:py-16: lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12: sm:mb-16">
            <h2 className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-4">Our AI Services</h2>
            <p className="text-lg: sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive AI solutions designed to solve real business challenges
            >
          
          <div className="grid grid-cols-1: md:grid-cols-2 gap-6: sm:gap-8 mb-12: sm:mb-16: lg:mb-20">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20: hover:bg-white/15 transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                )}
                <div className="mb-4 group-hove: r:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hove: r:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-400 mb-6">Setu: p: {service.duration}</div>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-blue-400: hover:text-blue-300 font-semibold transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-white">{service.pricing}</div>
                  <Link 
                    to={service.link}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold: hover:from-blue-700: hover:to-purple-700 transition-all duration-300 flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  >
            ))}
          >

      {/* Benefits Section */}
      <section className="py-12: sm:py-16: lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-4 px-4">Why Choose Our AI Services?</h2>
            <p className="text-lg: sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We deliver exceptional results with our proven AI expertise and commitment to excellence
            >
          
          <div className="grid grid-cols-1: md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
          <div className="text-center mb-12: sm:mb-16">
            <h2 className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
            <p className="text-lg: sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Experience the power of artificial intelligence with our proven solutions
            >
          
          <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-4 gap-6: sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}>
            ))}
          >

      {/* CTA Section */}
      <section className="py-12: sm:py-16: lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6: sm:p-8: lg:p-12">
              <h2 className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-4 px-4">Ready to Harness the Power of AI?</h2>
              <p className="text-lg: sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI solutions can transform your business and drive unprecedented growth.
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl: sm:rounded-3xl p-6: sm:p-8: lg:p-12">
              <h2 className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-lg: sm:text-xl text-white/90 mb-6: sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI solutions can accelerate your digital transformation and drive measurable results.
              </p>
              <div className="flex flex-col: sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold: hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                  Get Free Consultation
                </Link>
                <Link 
                  to="/micro-saas-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold: hover:bg-white/10 transition-colors"
                >
                  Learn More About Us
                  Get Free Consultation
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold: hover:bg-white/10 transition-colors"
                >
                  View All Services
                  Explore Micro SAAS
                >
      </main>
      
      <Footer />
      >
      >
      >
      >
      >
      >
      >
      >
      >
      >
      >
      >
      >
    </div>
  );
};

export default AIServicesPage;

}}}