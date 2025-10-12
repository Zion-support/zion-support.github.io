import React from 'react';
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star, MessageSquare, BarChart3, Clock, TrendingUp } from 'lucide-react';
=======
import { CheckCircle, ArrowRight, Brain, Zap, Database, Code, Smartphone, Cpu, MessageCircle, Calendar, Users, Eye, BarChart3, Shield, Globe, DollarSign, Star } from 'lucide-react';
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AIServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
<<<<<<< HEAD
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates'],
      pricing: 'Starting at $29/month',
=======
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI technology.',
      features: ['Blog posts and articles', 'Social media content', 'Marketing copy', 'Product descriptions', 'SEO optimization', 'Multi-language support'],
      price: 'Starting at $29/month',
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
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
<<<<<<< HEAD
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
      icon: <MessageSquare className="w-8 h-8 text-indigo-500" />,
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI that provides 24/7 customer support and engagement.',
      features: ['Natural language processing', 'Multi-channel support', 'Custom training', 'Analytics dashboard'],
      pricing: 'Starting at $79/month',
      link: '/ai-chatbot',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors using advanced machine learning algorithms.',
      features: ['Trend forecasting', 'Risk assessment', 'Performance prediction', 'Custom models'],
      pricing: 'Starting at $59/month',
      link: '/predictive-analytics',
      popular: false
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
    }
  ];

  const benefits = [
    {
<<<<<<< HEAD
      title: 'Cost Savings',
      description: 'Reduce operational costs by up to 60% through intelligent automation',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Increased Efficiency',
      description: 'Streamline processes and boost productivity with AI-powered solutions',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: '24/7 Availability',
      description: 'Round-the-clock AI assistance and monitoring for your business',
      icon: <Clock className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow your AI capabilities as your business expands',
      icon: <TrendingUp className="w-6 h-6 text-orange-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion\'s AI services transformed our content creation process. We\'ve seen a 300% increase in productivity.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'The AI analytics platform provided insights we never knew existed. Game-changing technology.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLab',
      content: 'Outstanding support and implementation. Our automation workflows are now running flawlessly.',
      rating: 5
    }
  ];

  const processSteps = [
=======
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
    {
      step: '01',
      title: 'Consultation',
      description: 'We analyze your business needs and identify AI opportunities.'
    },
    {
      step: '02',
      title: 'Custom Solution',
      description: 'We design and develop tailored AI solutions for your specific requirements.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Seamless deployment and integration with your existing systems.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and optimization for maximum performance.'
    }
<<<<<<< HEAD
=======
  ];

  const stats = [
    { number: '1000+', label: 'AI Models' },
    { number: '99.9%', label: 'Accuracy' },
    { number: '24/7', label: 'Support' },
    { number: '50+', label: 'Languages' }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including content generation, chatbots, analytics, and automation solutions." />
<<<<<<< HEAD
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbot, analytics, automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Advanced AI Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge artificial intelligence solutions designed to automate, optimize, and accelerate your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
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
=======
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
        </div>
      </section>

      {/* Services Grid */}
<<<<<<< HEAD
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
=======
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">{service.pricing}</span>
                  <Link 
                    to={service.link}
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
<<<<<<< HEAD
              </div>
=======
              </Link>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of artificial intelligence with our proven solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
=======
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we deliver exceptional AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
=======
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
=======
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI solutions to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2" />
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