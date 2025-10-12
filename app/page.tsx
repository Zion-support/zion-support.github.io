'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Zap, CheckCircle, Star, Brain, Cloud, Code, Shield, Globe, Database, Smartphone, Monitor, Server, CircuitBoard, Atom, Satellite, Wrench, BarChart, PieChart, LineChart, Activity, Settings } from 'lucide-react';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '10+', label: 'Years Experience', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Zap }
  ];

  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to automate and optimize your business processes.',
      icon: Brain
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions tailored to your business needs.',
      icon: Cloud
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: Shield
    },
    {
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business.',
      icon: Code
    }
  ];

  const aiServices = [
    {
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials.',
      price: 'Starting at $299/month',
      features: ['Natural language processing', 'Content optimization', 'Multi-language support', 'SEO integration'],
      icon: Brain,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and insights.',
      price: 'Starting at $499/month',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'API integration'],
      icon: BarChart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Chatbot Solutions',
      description: 'Intelligent customer service chatbots with natural language understanding.',
      price: 'Starting at $199/month',
      features: ['24/7 availability', 'Multi-channel support', 'Custom training', 'Analytics'],
      icon: MessageCircle,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure with zero downtime.',
      price: 'Starting at $2,500/month',
      features: ['Zero-downtime migration', 'Security compliance', 'Cost optimization', '24/7 support'],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your business from threats.',
      price: 'Starting at $1,800/month',
      features: ['Threat detection', 'Security audits', 'Compliance management', 'Incident response'],
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure management.',
      price: 'Starting at $1,200/month',
      features: ['Automated deployments', 'Infrastructure as code', 'Monitoring', 'Scalability'],
      icon: Settings,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const microSaasProducts = [
    {
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing with automatic scene detection and color correction.',
      price: '$99/month',
      features: ['Auto scene detection', 'Smart color correction', 'AI transitions', 'Cloud rendering'],
      icon: Monitor,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review with automated bug detection and security analysis.',
      price: '$149/month',
      features: ['Automated code review', 'Bug detection', 'Security scanning', 'Performance optimization'],
      icon: Code,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection system using machine learning algorithms.',
      price: '$179/month',
      features: ['Real-time detection', 'Machine learning', 'Custom rules', 'API integration'],
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions | Leading Technology Company</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development. Transform your business with our innovative technology services." />
        <meta name="keywords" content="AI solutions, cloud computing, cybersecurity, software development, IT services, business automation, data analytics" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta property="og:description" content="Leading technology company providing AI solutions, cloud infrastructure, and cybersecurity services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI and IT solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Transform Your Business with
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Advanced AI & IT Solutions
              </span>
            </h1>
            <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Leading technology company providing cutting-edge artificial intelligence, cloud infrastructure, 
              cybersecurity, and custom software development services to businesses worldwide.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link 
                to="/ai-services"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/demo"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions to support your business growth and digital transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI and IT solutions can drive innovation and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Start Your Project
            </Link>
            <Link 
              to="/about"
              className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? Contact us today for a free consultation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="text-center text-gray-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+1-302-555-0123" className="hover:text-white transition-colors">
                +1 (302) 555-0123
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-4">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;