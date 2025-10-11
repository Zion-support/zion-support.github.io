<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star, Eye, MessageSquare, BarChart3 } from 'lucide-react';
=======
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
import { CheckCircle, ArrowRight, Brain, Zap, Eye, MessageCircle, BarChart, Shield, Users, Clock, DollarSign, Star } from 'lucide-react';
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Brain, Database, Smartphone, Shield, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1

export default function AIServicesPage() {
  const services = [
    {
<<<<<<< HEAD
      icon: <Brain className="w-8 h-8 text-blue-500" />,
<<<<<<< HEAD
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
<<<<<<< HEAD
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: 'Machine Learning',
      description: 'Build intelligent systems that learn and adapt to your business needs.',
      features: ['Predictive Modeling', 'Pattern Recognition', 'Automated Learning', 'Real-time Adaptation'],
      pricing: 'Starting at $99/month',
      link: '/machine-learning',
      popular: true
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      title: 'Natural Language Processing',
      description: 'Transform text and speech into actionable insights and automated responses.',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      pricing: 'Starting at $89/month',
      link: '/nlp',
      popular: false
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: 'Computer Vision',
      description: 'Extract meaningful information from images and videos for business automation.',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Video Analysis'],
      pricing: 'Starting at $119/month',
      link: '/computer-vision',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-500" />,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors to make data-driven business decisions.',
      features: ['Trend Analysis', 'Risk Assessment', 'Performance Prediction', 'Scenario Planning'],
      pricing: 'Starting at $149/month',
      link: '/predictive-analytics',
      popular: false
=======
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials using advanced AI models.',
      features: ['Blog posts and articles', 'Social media content', 'Marketing copy', 'Product descriptions'],
      pricing: 'Starting at $500/month',
      link: '/ai-services/content-generation'
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-green-500" />,
      title: 'AI Chatbot Development',
      description: 'Intelligent chatbots that understand context and provide personalized customer support.',
      features: ['24/7 customer support', 'Multi-language support', 'Integration with existing systems', 'Analytics and insights'],
      pricing: 'Starting at $1,200 setup',
      link: '/ai-services/chatbot'
    },
    {
      icon: <Database className="w-12 h-12 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Advanced analytics powered by AI to help you make data-driven business decisions.',
      features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards', 'Automated reporting'],
      pricing: 'Starting at $800/month',
      link: '/ai-services/analytics'
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: 'AI Process Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      features: ['Workflow automation', 'Document processing', 'Email automation', 'Task scheduling'],
      pricing: 'Starting at $2,000/month',
      link: '/ai-services/automation'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'AI Mobile Applications',
      description: 'Mobile apps enhanced with AI capabilities for better user experience and functionality.',
      features: ['Voice recognition', 'Image processing', 'Personalized recommendations', 'Offline AI processing'],
      pricing: 'Starting at $5,000',
      link: '/ai-services/mobile'
    },
    {
      icon: <Shield className="w-12 h-12 text-indigo-500" />,
      title: 'AI Security Solutions',
      description: 'Advanced security systems powered by AI to protect your business from threats.',
      features: ['Threat detection', 'Anomaly monitoring', 'Automated response', 'Compliance reporting'],
      pricing: 'Starting at $1,500/month',
      link: '/ai-services/security'
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
    }
  ]

  const benefits = [
    {
<<<<<<< HEAD
      title: 'Cost Savings',
      description: 'Reduce operational costs by up to 60% through intelligent automation',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: '24/7 Availability',
      description: 'AI services work around the clock without breaks or downtime',
      icon: <Globe className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Scalability',
      description: 'Easily scale your AI solutions as your business grows',
      icon: <Zap className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Accuracy',
      description: 'Achieve 95%+ accuracy in AI-powered tasks and predictions',
      icon: <Star className="w-6 h-6 text-yellow-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'The AI content generator has revolutionized our marketing strategy. We\'ve seen a 300% increase in content output.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'Our chatbot handles 80% of customer inquiries automatically, freeing up our team for complex issues.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Analytics Pro',
      content: 'The predictive analytics dashboard gives us insights we never had before. Game-changing technology.',
      rating: 5
    }
=======
=======
      title: 'AI Content Generation',
      description: 'Advanced AI-powered content creation with SEO optimization and brand voice customization.',
      features: ['SEO-optimized content', 'Brand voice training', 'Multi-language support', 'Content scheduling', 'Plagiarism detection'],
      pricing: '$299/month',
      popular: true,
      category: 'Content'
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: 'Computer Vision',
      description: 'Image recognition, object detection, and visual analysis solutions for various industries.',
      features: ['Image recognition', 'Object detection', 'Facial recognition', 'Quality inspection', 'Visual search'],
      pricing: '$499/month',
      popular: false,
      category: 'Vision'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-500" />,
      title: 'Conversational AI',
      description: 'Intelligent chatbots and virtual assistants for customer service and support.',
      features: ['Natural language processing', 'Multi-channel support', 'Sentiment analysis', 'Intent recognition', 'Integration APIs'],
      pricing: '$399/month',
      popular: true,
      category: 'Conversation'
    },
    {
      icon: <BarChart className="w-8 h-8 text-orange-500" />,
      title: 'Predictive Analytics',
      description: 'Machine learning models for forecasting, trend analysis, and business intelligence.',
      features: ['Predictive modeling', 'Trend analysis', 'Risk assessment', 'Demand forecasting', 'Performance optimization'],
      pricing: '$599/month',
      popular: false,
      category: 'Analytics'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Security Solutions',
      description: 'Intelligent threat detection and cybersecurity solutions powered by AI.',
      features: ['Threat detection', 'Anomaly detection', 'Fraud prevention', 'Security monitoring', 'Incident response'],
      pricing: '$799/month',
      popular: false,
      category: 'Security'
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: 'AI for HR & Recruitment',
      description: 'Automated resume screening, candidate matching, and HR process optimization.',
      features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Bias detection', 'Performance analysis'],
      pricing: '$349/month',
      popular: false,
      category: 'HR'
    }
  ];

  const aiCapabilities = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'Machine Learning',
      description: 'Custom ML models tailored to your specific business needs and data patterns.'
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-green-500" />,
      title: 'Natural Language Processing',
      description: 'Advanced text analysis, sentiment detection, and language understanding capabilities.'
    },
    {
      icon: <Eye className="w-12 h-12 text-purple-500" />,
      title: 'Computer Vision',
      description: 'Image and video analysis, object recognition, and visual intelligence solutions.'
    },
    {
      icon: <BarChart className="w-12 h-12 text-orange-500" />,
      title: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting to help you make informed business decisions.'
    },
    {
      icon: <Zap className="w-12 h-12 text-red-500" />,
      title: 'Process Automation',
      description: 'Intelligent automation of repetitive tasks and business processes.'
    },
    {
      icon: <Shield className="w-12 h-12 text-yellow-500" />,
      title: 'AI Ethics & Governance',
      description: 'Responsible AI implementation with bias detection and ethical guidelines.'
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
=======
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and focus on strategic initiatives'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Better Insights',
      description: 'Get actionable insights from your data with AI analytics'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable Solutions',
      description: 'AI solutions that grow with your business needs'
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
    }
  ]

  const stats = [
<<<<<<< HEAD
    { number: '1000+', label: 'AI Models' },
    { number: '99.9%', label: 'Accuracy' },
    { number: '24/7', label: 'Support' },
    { number: '50+', label: 'Languages' }
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
  ];
=======
    { number: '95%', label: 'Accuracy Rate' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Availability' },
    { number: '10x', label: 'Faster Processing' }
  ]
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <meta name="description" content="Discover our comprehensive AI services including content generation, chatbots, analytics, and more. Transform your business with cutting-edge artificial intelligence solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbot, analytics, automation" />
=======
        <meta name="description" content="Advanced AI services including content generation, automation, cybersecurity, and analytics solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, automation, cybersecurity, analytics" />
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
      </Helmet>

      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services That
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Transform</span>
            <br />
            Your Business
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leverage the power of artificial intelligence to automate processes, gain insights, and drive growth. 
            Our comprehensive AI solutions are designed to meet your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/ai-services#services"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Explore Services
            </Link>
=======
      <section className="pt-20 px-4 py-20">
=======
        <meta name="description" content="Transform your business with cutting-edge AI services including machine learning, NLP, computer vision, and predictive analytics from Zion Tech Group." />
        <meta name="keywords" content="AI services, machine learning, natural language processing, computer vision, predictive analytics, AI automation, artificial intelligence" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Harness the power of artificial intelligence to transform your business with our cutting-edge AI solutions.
=======
        <meta name="description" content="Transform your business with our comprehensive AI services including content generation, chatbots, analytics, and automation solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Powered <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence solutions designed to drive growth and efficiency.
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
<<<<<<< HEAD
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
=======
              <Link
                to="/micro-saas-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Micro SAAS
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
              </Link>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
=======
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
              </div>
            ))}
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
          </div>
        </div>
<<<<<<< HEAD
      </main>

      {/* Services Grid */}
<<<<<<< HEAD
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI services designed to solve real business challenges
=======
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to meet your specific business needs and drive digital transformation.
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
=======
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <span className="text-lg font-semibold text-purple-600">{service.pricing}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
                </div>

                <Link
                  to={service.link}
<<<<<<< HEAD
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
=======
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 inline-block ml-2" />
                </Link>
<<<<<<< HEAD
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI expertise across all major domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{capability.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of cutting-edge AI technology tailored to your business needs
=======
      {/* Benefits Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI services are designed to deliver measurable results and drive business growth.
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
<<<<<<< HEAD
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses that have transformed with our AI services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
=======
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using our AI services to drive growth and efficiency
=======
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive your success and give you a competitive advantage.
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your AI Journey
              </Link>
              <Link
                to="/ai-services#services"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View All Services
              </Link>
=======
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative">
=======
      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Service Packages</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our comprehensive AI service packages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {aiServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4">{service.icon}</div>
<<<<<<< HEAD
=======
                <div className="mb-2">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                </div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
<<<<<<< HEAD
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
=======
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
<<<<<<< HEAD
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to discover how our AI services can accelerate your growth and efficiency.
=======
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Harness the Power of AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get a free AI consultation and discover how artificial intelligence can transform your business.
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
<<<<<<< HEAD
                  Get Free Consultation
=======
                  Get Free AI Consultation
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
<<<<<<< HEAD
                  Learn More
=======
                  Learn About Us
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
                </Link>
              </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/it-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View IT Services
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
            </div>
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
  );
};

export default AIServicesPage;
<<<<<<< HEAD
=======
export default AIServicesPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
=======
  )
}
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
