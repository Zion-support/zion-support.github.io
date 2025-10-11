import React from 'react';
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Zap, Brain, Database, Code, Smartphone, Cpu, Shield, Globe } from 'lucide-react';
=======
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
<<<<<<< HEAD
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool that generates high-quality articles, blogs, social media posts, and marketing copy.',
      features: [
        'Generate 10,000+ words daily',
        '50+ content templates',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Plagiarism detection'
      ],
      pricing: '$29/month',
      popular: true,
      link: '/ai-content-generator'
    },
    {
      icon: <Zap className="w-12 h-12 text-green-500" />,
      title: 'AI Chatbot Builder Enterprise',
      description: 'Create intelligent chatbots for customer service, sales, and support with advanced NLP and machine learning capabilities.',
      features: [
        'Visual chatbot builder',
        'Multi-channel deployment',
        'Advanced analytics',
        'Custom integrations',
        '24/7 monitoring',
        'A/B testing tools'
      ],
      pricing: '$49/month',
      popular: false,
      link: '/ai-chatbot-builder'
    },
    {
      icon: <Database className="w-12 h-12 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence platform with AI-powered insights, predictive analytics, and automated reporting.',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Automated reports',
        'Custom dashboards',
        'Data integration',
        'Mobile app included'
      ],
      pricing: '$79/month',
      popular: true,
      link: '/ai-analytics-dashboard'
    },
    {
      icon: <Code className="w-12 h-12 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management tool that drafts, schedules, and optimizes emails using AI to improve open rates and engagement.',
      features: [
        'Smart email drafting',
        'Send time optimization',
        'Subject line testing',
        'Email templates',
        'Performance analytics',
        'CRM integration'
      ],
      pricing: '$39/month',
      popular: false,
      link: '/ai-email-assistant'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'AI Voice Assistant',
      description: 'Custom voice assistant for businesses with natural language processing, voice commands, and integration capabilities.',
      features: [
        'Natural voice recognition',
        'Custom voice training',
        'Multi-language support',
        'API integrations',
        'Voice analytics',
        'Custom wake words'
      ],
      pricing: '$59/month',
      popular: false,
      link: '/ai-voice-assistant'
    },
    {
      icon: <Cpu className="w-12 h-12 text-yellow-500" />,
      title: 'AI Automation Suite',
      description: 'Complete workflow automation platform that uses AI to streamline business processes and reduce manual work.',
      features: [
        'Workflow automation',
        'Process optimization',
        'Task scheduling',
        'Integration hub',
        'Performance monitoring',
        'Custom triggers'
      ],
      pricing: '$99/month',
      popular: true,
      link: '/ai-automation'
=======
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      features: ['Blog post generation', 'Social media content', 'Product descriptions', 'SEO optimization'],
      pricing: '$29/month',
      link: '/ai-content-generator',
      popular: true,
      duration: 'Instant'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support and lead generation.',
      features: ['Natural language processing', 'Multi-language support', 'Integration APIs', 'Analytics dashboard'],
      pricing: '$49/month',
      link: '/ai-chatbot-builder',
      popular: true,
      duration: '1-2 weeks'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Get actionable insights from your data with AI-powered analytics and visualization.',
      features: ['Predictive analytics', 'Custom dashboards', 'Real-time monitoring', 'Automated reports'],
      pricing: '$79/month',
      link: '/ai-analytics-dashboard',
      popular: false,
      duration: '2-3 weeks'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'AI Automation Suite',
      description: 'Automate repetitive tasks and workflows with intelligent AI solutions.',
      features: ['Workflow automation', 'Email automation', 'Data processing', 'Task scheduling'],
      pricing: '$99/month',
      link: '/ai-automation-suite',
      popular: false,
      duration: '3-4 weeks'
    }
  ];

  const benefits = [
    {
      title: 'Cost Effective',
      description: 'Reduce operational costs by up to 60% with AI automation',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Fast Implementation',
      description: 'Get up and running in days, not months',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Proven Results',
      description: 'Trusted by 500+ businesses worldwide',
      icon: <Star className="w-6 h-6 text-yellow-500" />
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
    }
  ];

  const stats = [
<<<<<<< HEAD
    { number: '10,000+', label: 'AI Models Trained' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '50+', label: 'AI Services Available' },
=======
    { number: '500+', label: 'AI Solutions Deployed' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '60%', label: 'Cost Reduction' },
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
    { number: '24/7', label: 'AI Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Comprehensive AI services including content generation, chatbots, analytics, and automation. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI automation, AI analytics, AI chatbots" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with our comprehensive AI services. From content generation to automation, 
              we provide cutting-edge artificial intelligence solutions to drive growth and efficiency.
=======
        <meta name="description" content="Advanced AI services including content generation, chatbots, analytics, and automation. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, chatbots, analytics, automation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI-Powered Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Transform your business with cutting-edge artificial intelligence solutions designed to automate, optimize, and accelerate your growth.
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
<<<<<<< HEAD
                to="/micro-saas-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Explore Micro SAAS
=======
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
<<<<<<< HEAD

          {/* AI Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our AI Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
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
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <Link 
                      to={service.link}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Our AI Services */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Choose Our AI Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level encryption and security protocols to protect your data and ensure compliance with industry standards.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Global Scale</h3>
                <p className="text-gray-300">Deploy AI solutions across multiple regions with 99.9% uptime and global CDN for optimal performance.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Advanced AI</h3>
                <p className="text-gray-300">State-of-the-art machine learning models and neural networks for superior accuracy and performance.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our AI services to drive growth and efficiency.
=======
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our AI Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive AI solutions designed to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mb-20">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
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
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-400 mb-6">Setup: {service.duration}</div>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose Our AI Services?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We deliver exceptional results with our proven AI expertise and commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Harness the Power of AI?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI solutions can transform your business and drive unprecedented growth.
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
<<<<<<< HEAD
                  Start Free Trial
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More About Us
=======
                  Get Free Consultation
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Services
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
                </Link>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </main>
      
      <Footer />
=======
      </section>
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
    </div>
  );
};

<<<<<<< HEAD
export default AIServicesPage;
=======
export default AIServicesPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
