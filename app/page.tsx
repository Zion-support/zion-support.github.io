'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Star, Award, Brain, Cloud, Shield, Code, DollarSign } from 'lucide-react';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built with modern technologies',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const aiServices = [
    {
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time insights and predictive analytics',
      price: '$299/month',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'API integration', 'Machine learning insights', 'Automated reporting'],
      icon: BarChart,
      color: 'from-purple-500 to-pink-500',
      link: '/ai-analytics-dashboard-pro'
    },
    {
      title: 'AI Content Generator Pro',
      description: 'Enterprise-grade content creation with multi-language support and brand consistency',
      price: '$199/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content scheduling', 'Plagiarism detection', 'Content optimization'],
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      link: '/ai-content-generation-pro'
    },
    {
      title: 'AI Customer Support Enterprise',
      description: 'Intelligent 24/7 customer service with advanced NLP and sentiment analysis',
      price: '$399/month',
      features: ['Multi-channel support', 'Sentiment analysis', 'Escalation management', 'Performance analytics', 'Voice integration', 'Knowledge base AI'],
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-500',
      link: '/ai-customer-support-chatbot'
    },
    {
      title: 'AI Workflow Automation Suite',
      description: 'Comprehensive business process automation with intelligent decision-making',
      price: '$249/month',
      features: ['Process mapping', 'Automated workflows', 'Integration APIs', 'Performance monitoring', 'Error handling', 'Custom triggers'],
      icon: Workflow,
      color: 'from-orange-500 to-red-500',
      link: '/ai-workflow-automation'
    },
    {
      title: 'AI Cybersecurity Monitor Pro',
      description: 'Advanced threat detection and prevention using machine learning algorithms',
      price: '$449/month',
      features: ['Real-time threat detection', 'Behavioral analysis', 'Automated response', 'Compliance monitoring', 'Incident forensics', 'Security training'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/ai-cybersecurity-monitor-pro'
    },
    {
      title: 'AI Computer Vision Solutions',
      description: 'Image and video analysis for quality control, surveillance, and automation',
      price: '$349/month',
      features: ['Object detection', 'Facial recognition', 'Quality inspection', 'Real-time processing', 'Custom model training', 'API integration'],
      icon: Eye,
      color: 'from-indigo-500 to-purple-500',
      link: '/ai-computer-vision'
    },
    {
      title: 'AI Voice Solutions Pro',
      description: 'Advanced speech recognition, synthesis, and voice-controlled applications',
      price: '$279/month',
      features: ['Speech-to-text', 'Text-to-speech', 'Voice commands', 'Multi-language support', 'Custom voice models', 'Real-time processing'],
      icon: Mic,
      color: 'from-yellow-500 to-orange-500',
      link: '/ai-voice-solutions'
    },
    {
      title: 'AI Document Intelligence',
      description: 'Intelligent document processing and data extraction with high accuracy',
      price: '$199/month',
      features: ['Document OCR', 'Data extraction', 'Form processing', 'Document classification', 'Automated workflows', 'API integration'],
      icon: FileText,
      color: 'from-teal-500 to-cyan-500',
      link: '/ai-document-intelligence'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Migration & Infrastructure',
      description: 'Complete cloud transformation with AWS, Azure, and Google Cloud expertise',
      price: 'Starting at $5,000',
      features: ['Zero-downtime migration', 'Security compliance', 'Cost optimization', '24/7 support', 'Auto-scaling', 'Disaster recovery'],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      link: '/cloud-migration-advanced'
    },
    {
      title: 'Advanced Cybersecurity Solutions',
      description: 'Comprehensive security assessment, implementation, and monitoring',
      price: 'Starting at $3,000',
      features: ['Vulnerability assessment', 'Penetration testing', 'Security policies', 'Staff training', 'Incident response', 'Compliance management'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/cybersecurity-advanced'
    },
    {
      title: 'Enterprise Web Development',
      description: 'Modern, scalable web applications with advanced features and integrations',
      price: 'Starting at $8,000',
      features: ['Responsive design', 'SEO optimization', 'Performance tuning', 'Maintenance support', 'API development', 'Database optimization'],
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      link: '/web-development'
    },
    {
      title: 'Mobile App Development Suite',
      description: 'Native and cross-platform mobile applications with advanced features',
      price: 'Starting at $12,000',
      features: ['iOS & Android', 'Cross-platform', 'App store optimization', 'Push notifications', 'Offline functionality', 'Performance optimization'],
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      link: '/mobile-development'
    },
    {
      title: 'DevOps & CI/CD Pipeline',
      description: 'Automated deployment and continuous integration for faster delivery',
      price: 'Starting at $6,000',
      features: ['CI/CD setup', 'Container orchestration', 'Infrastructure automation', 'Monitoring & logging', 'Security scanning', 'Performance optimization'],
      icon: Settings,
      color: 'from-teal-500 to-cyan-500',
      link: '/devops-advanced'
    },
    {
      title: 'Database Management & Optimization',
      description: 'Database design, optimization, and maintenance for peak performance',
      price: 'Starting at $2,500',
      features: ['Database design', 'Performance optimization', 'Backup & recovery', 'Security hardening', 'Migration services', '24/7 monitoring'],
      icon: Database,
      color: 'from-yellow-500 to-orange-500',
      link: '/database-management'
    },
    {
      title: 'API Development & Integration',
      description: 'RESTful and GraphQL APIs for seamless system integration',
      price: 'Starting at $4,000',
      features: ['RESTful API design', 'GraphQL implementation', 'API documentation', 'Rate limiting', 'Authentication', 'Performance monitoring'],
      icon: LinkIcon,
      color: 'from-indigo-500 to-purple-500',
      link: '/api-development-advanced'
    },
    {
      title: 'IT Support & Maintenance',
      description: '24/7 technical support and proactive maintenance services',
      price: 'Starting at $1,500/month',
      features: ['24/7 technical support', 'Remote monitoring', 'Preventive maintenance', 'Hardware support', 'Software updates', 'User training'],
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      link: '/it-support'
    }
  ];

  const microSaasProducts = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI-powered insights and real-time dashboards',
      price: '$99/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Team collaboration', 'API integrations', 'Mobile app access'],
      icon: BarChart,
      color: 'from-blue-500 to-purple-500',
      link: '/zion-analytics-pro'
    },
    {
      title: 'Zion Security Shield Pro',
      description: 'Enterprise-grade cybersecurity monitoring with advanced threat detection and response',
      price: '$149/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance reporting', 'Security training', '24/7 monitoring'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/zion-security-shield'
    },
    {
      title: 'Zion Content Studio Pro',
      description: 'AI-powered content creation platform with multi-language support and brand consistency',
      price: '$79/month',
      features: ['AI content generation', 'Multi-platform publishing', 'Brand consistency', 'Performance tracking', 'SEO optimization', 'Content calendar'],
      icon: FileText,
      color: 'from-green-500 to-teal-500',
      link: '/zion-content-studio'
    },
    {
      title: 'Zion CRM Intelligence Pro',
      description: 'Smart customer relationship management with AI insights and automated workflows',
      price: '$129/month',
      features: ['Lead scoring', 'Sales forecasting', 'Customer insights', 'Automation workflows', 'Email marketing', 'Pipeline management'],
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      link: '/zion-crm-intelligence'
    },
    {
      title: 'Zion Project Master',
      description: 'Advanced project management with AI-powered insights and team collaboration tools',
      price: '$99/month',
      features: ['Gantt charts', 'Resource management', 'Time tracking', 'Budget monitoring', 'Team collaboration', 'Progress reporting'],
      icon: CheckSquare,
      color: 'from-violet-500 to-purple-500',
      link: '/zion-project-master'
    },
    {
      title: 'Zion Email Automation Pro',
      description: 'Intelligent email marketing platform with AI-powered personalization and automation',
      price: '$59/month',
      features: ['Email templates', 'Automation workflows', 'Personalization engine', 'A/B testing', 'Analytics tracking', 'List management'],
      icon: Mail,
      color: 'from-pink-500 to-rose-500',
      link: '/zion-email-automation'
    },
    {
      title: 'Zion Inventory Smart',
      description: 'AI-powered inventory management with demand forecasting and automated reordering',
      price: '$89/month',
      features: ['Demand forecasting', 'Automated reordering', 'Stock level monitoring', 'Supplier management', 'Barcode scanning', 'Multi-location support'],
      icon: Box,
      color: 'from-teal-500 to-cyan-500',
      link: '/zion-inventory-smart'
    },
    {
      title: 'Zion Invoice Genius',
      description: 'Automated invoicing and payment processing with AI-powered expense categorization',
      price: '$49/month',
      features: ['Automated invoicing', 'Payment processing', 'Expense categorization', 'Tax calculations', 'Client portal', 'Recurring billing'],
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      link: '/zion-invoice-genius'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your Business with
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Advanced AI & IT Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
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
                </Link>
                <a
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
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
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4">
                  <div className="h-6 w-6 text-white">🧠</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Solutions</h3>
                <p className="text-gray-300">Cutting-edge artificial intelligence to transform your business operations</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-4">
                  <div className="h-6 w-6 text-white">☁️</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Infrastructure</h3>
                <p className="text-gray-300">Scalable cloud solutions with AWS, Azure, and Google Cloud expertise</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg mb-4">
                  <div className="h-6 w-6 text-white">🛡️</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
                <p className="text-gray-300">Comprehensive security solutions to protect your digital assets</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4">
                  <div className="h-6 w-6 text-white">💻</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Custom Development</h3>
                <p className="text-gray-300">Tailored software solutions built with modern technologies</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business operations and drive growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.link || "/contact"}
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                IT Infrastructure & Development
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services to build, secure, and optimize your technology infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.link || "/contact"}
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emerging Technologies Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Emerging Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge technologies that will shape the future of business and innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: '5G Implementation',
                  description: 'Next-generation wireless technology for ultra-fast connectivity and IoT applications',
                  price: 'Starting at $15,000',
                  features: ['Network planning', 'Infrastructure setup', 'IoT integration', 'Performance optimization'],
                  icon: Wifi,
                  color: 'from-cyan-500 to-blue-500',
                  link: '/5g-implementation'
                },
                {
                  title: 'AI 3D Generation',
                  description: 'Revolutionary 3D content creation using artificial intelligence and machine learning',
                  price: 'Starting at $8,000',
                  features: ['3D model generation', 'Texture creation', 'Animation automation', 'VR/AR integration'],
                  icon: Cpu,
                  color: 'from-purple-500 to-pink-500',
                  link: '/ai-3d-generation'
                },
                {
                  title: 'Quantum Computing',
                  description: 'Quantum algorithms and computing solutions for complex problem solving',
                  price: 'Starting at $25,000',
                  features: ['Quantum algorithm development', 'Quantum simulation', 'Optimization problems', 'Research collaboration'],
                  icon: Globe,
                  color: 'from-indigo-500 to-purple-500',
                  link: '/quantum-computing'
                },
                {
                  title: 'AR/VR Solutions',
                  description: 'Immersive augmented and virtual reality experiences for business applications',
                  price: 'Starting at $12,000',
                  features: ['VR application development', 'AR integration', '3D visualization', 'User experience design'],
                  icon: Eye,
                  color: 'from-green-500 to-teal-500',
                  link: '/ar-vr-solutions'
                }
              ].map((tech, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg mb-4`}>
                      <tech.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
                    <p className="text-gray-300 mb-4">{tech.description}</p>
                    <div className="text-2xl font-bold text-indigo-400 mb-4">{tech.price}</div>
                    <ul className="space-y-2 mb-6">
                      {tech.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={tech.link}
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Explore Technology
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Products Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Micro SAAS Products
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use software solutions designed to solve specific business challenges with minimal setup.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasProducts.map((product, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${product.color} rounded-lg mb-4`}>
                      <product.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="text-2xl font-bold text-green-400 mb-4">{product.price}</div>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={product.link || "/contact"}
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact us today to discuss your project and discover how our AI and IT solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Contact Us Now
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p className="mb-2">📧 Email: kleber@ziontechgroup.com</p>
                <p className="mb-2">📱 Mobile: +1 302 464 0950</p>
                <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
