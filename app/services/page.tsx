import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Globe, Cpu, Database, Cloud, Users, BarChart3, Bot, Brain, Lock, Smartphone, Monitor, Server, Code, Settings, FileText, Heart, Share2, Package, Mail, MapPin, MessageCircle, Eye, TrendingUp, Lightbulb } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated insights.',
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      features: ['Real-time Data Processing', 'Predictive Analytics', 'Custom Dashboards', 'Automated Reports'],
      price: '$299/month',
      category: 'Micro SAAS',
      benefits: ['300% ROI improvement', '50% faster decision making', '24/7 monitoring']
    },
    {
      title: 'Smart Document Processor',
      description: 'AI-powered document processing with OCR, classification, and data extraction.',
      icon: <FileText className="w-8 h-8 text-green-600" />,
      features: ['OCR Technology', 'Smart Classification', 'Data Extraction', 'Workflow Automation'],
      price: '$199/month',
      category: 'Micro SAAS',
      benefits: ['90% accuracy', '80% time savings', 'Zero manual errors']
    },
    {
      title: 'Customer Sentiment Analyzer',
      description: 'Real-time sentiment analysis across all customer touchpoints and channels.',
      icon: <Heart className="w-8 h-8 text-red-600" />,
      features: ['Multi-channel Analysis', 'Real-time Alerts', 'Trend Analysis', 'Actionable Insights'],
      price: '$149/month',
      category: 'Micro SAAS',
      benefits: ['95% accuracy', 'Real-time insights', 'Customer satisfaction boost']
    },
    {
      title: 'Automated Social Media Manager',
      description: 'AI-driven social media content creation, scheduling, and engagement optimization.',
      icon: <Share2 className="w-8 h-8 text-purple-600" />,
      features: ['Content Generation', 'Optimal Timing', 'Engagement Optimization', 'Brand Voice Consistency'],
      price: '$249/month',
      category: 'Micro SAAS',
      benefits: ['300% engagement increase', '50% time savings', 'Consistent brand voice']
    },
    {
      title: 'Smart Inventory Optimizer',
      description: 'AI-powered inventory management with demand forecasting and automated reordering.',
      icon: <Package className="w-8 h-8 text-orange-600" />,
      features: ['Demand Forecasting', 'Automated Reordering', 'Cost Optimization', 'Waste Reduction'],
      price: '$399/month',
      category: 'Micro SAAS',
      benefits: ['25% cost reduction', '99% stock accuracy', 'Zero stockouts']
    },
    {
      title: 'Intelligent Email Marketing',
      description: 'AI-driven email campaigns with personalization, A/B testing, and performance optimization.',
      icon: <Mail className="w-8 h-8 text-indigo-600" />,
      features: ['Personalization Engine', 'A/B Testing', 'Send Time Optimization', 'Performance Analytics'],
      price: '$179/month',
      category: 'Micro SAAS',
      benefits: ['40% open rate increase', '60% click-through boost', 'Automated optimization']
    }
  ];

  const itServices = [
    {
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup, monitoring, and optimization for maximum performance.',
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      features: ['Multi-cloud Strategy', 'Cost Optimization', 'Security Hardening', '24/7 Monitoring'],
      price: 'Starting at $2,500/month',
      category: 'IT Services',
      benefits: ['99.9% uptime', '40% cost savings', 'Enhanced security']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, prevention, and incident response.',
      icon: <Shield className="w-8 h-8 text-red-600" />,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Training'],
      price: 'Starting at $3,000/month',
      category: 'IT Services',
      benefits: ['Zero security breaches', '24/7 protection', 'Compliance assurance']
    },
    {
      title: 'DevOps & CI/CD Pipeline',
      description: 'Automated development workflows with continuous integration and deployment pipelines.',
      icon: <Settings className="w-8 h-8 text-green-600" />,
      features: ['Automated Testing', 'Continuous Deployment', 'Infrastructure as Code', 'Performance Monitoring'],
      price: 'Starting at $2,000/month',
      category: 'IT Services',
      benefits: ['50% faster deployments', 'Zero downtime', 'Automated quality assurance']
    },
    {
      title: 'Database Optimization',
      description: 'Database performance tuning, scaling, and migration services for optimal data management.',
      icon: <Database className="w-8 h-8 text-purple-600" />,
      features: ['Performance Tuning', 'Scalability Planning', 'Data Migration', 'Backup & Recovery'],
      price: 'Starting at $1,500/month',
      category: 'IT Services',
      benefits: ['300% performance boost', '99.99% reliability', 'Automated backups']
    },
    {
      title: 'Network Infrastructure',
      description: 'Enterprise-grade network design, implementation, and management for seamless connectivity.',
      icon: <Globe className="w-8 h-8 text-cyan-600" />,
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', '24/7 Support'],
      price: 'Starting at $2,200/month',
      category: 'IT Services',
      benefits: ['99.9% uptime', 'Enhanced security', 'Scalable architecture']
    },
    {
      title: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services with rapid response times and expert technical assistance.',
      icon: <Users className="w-8 h-8 text-yellow-600" />,
      features: ['24/7 Support', 'Remote Assistance', 'Hardware Management', 'Software Updates'],
      price: 'Starting at $1,200/month',
      category: 'IT Services',
      benefits: ['15-minute response time', '95% first-call resolution', 'Proactive maintenance']
    }
  ];

  const aiServices = [
    {
      title: 'Custom AI Model Development',
      description: 'Bespoke AI models tailored to your specific business needs and use cases.',
      icon: <Brain className="w-8 h-8 text-pink-600" />,
      features: ['Custom Model Training', 'Data Preprocessing', 'Model Optimization', 'API Integration'],
      price: 'Starting at $5,000/project',
      category: 'AI Services',
      benefits: ['95% accuracy', 'Custom solutions', 'Scalable architecture']
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment detection, and language understanding.',
      icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
      features: ['Text Analysis', 'Sentiment Detection', 'Language Translation', 'Chatbot Development'],
      price: 'Starting at $3,500/month',
      category: 'AI Services',
      benefits: ['90% accuracy', 'Multi-language support', 'Real-time processing']
    },
    {
      title: 'Computer Vision Solutions',
      description: 'Image and video analysis solutions for object detection, recognition, and processing.',
      icon: <Eye className="w-8 h-8 text-green-600" />,
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Quality Control'],
      price: 'Starting at $4,000/month',
      category: 'AI Services',
      benefits: ['98% accuracy', 'Real-time processing', 'Quality improvement']
    },
    {
      title: 'Predictive Analytics Platform',
      description: 'Advanced predictive modeling for forecasting, risk assessment, and decision support.',
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      features: ['Forecasting Models', 'Risk Assessment', 'Anomaly Detection', 'Decision Support'],
      price: 'Starting at $2,800/month',
      category: 'AI Services',
      benefits: ['85% prediction accuracy', 'Risk reduction', 'Data-driven decisions']
    },
    {
      title: 'AI-Powered Automation',
      description: 'Intelligent automation solutions that learn and adapt to optimize business processes.',
      icon: <Bot className="w-8 h-8 text-orange-600" />,
      features: ['Process Automation', 'Workflow Optimization', 'Learning Algorithms', 'Adaptive Systems'],
      price: 'Starting at $3,200/month',
      category: 'AI Services',
      benefits: ['70% efficiency gain', 'Cost reduction', 'Error elimination']
    },
    {
      title: 'AI Consulting & Strategy',
      description: 'Strategic AI consulting to identify opportunities and develop implementation roadmaps.',
      icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
      features: ['AI Strategy Development', 'Technology Assessment', 'Implementation Planning', 'Training Programs'],
      price: 'Starting at $500/hour',
      category: 'AI Services',
      benefits: ['Strategic guidance', 'Technology expertise', 'Implementation support']
    }
  ];

  const allServices = [...microSaasServices, ...itServices, ...aiServices];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Micro SAAS, IT Services, and AI Solutions for Modern Businesses
            </p>
            <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
              Transform your business with our innovative technology solutions. From micro SAAS applications 
              to enterprise AI implementations, we provide the tools and expertise you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                to="#services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center">
              <Smartphone className="w-5 h-5 mr-2" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SAAS Services */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful, affordable software-as-a-service solutions designed for small to medium businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 border border-gray-100">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <span className="ml-2 text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-600">{service.price}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <span key={benefitIndex} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IT Services & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT infrastructure, security, and support services for enterprise environments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 border border-gray-100">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <span className="ml-2 text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-600">{service.price}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <span key={benefitIndex} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Services & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence solutions to automate, optimize, and transform your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 border border-gray-100">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <span className="ml-2 text-sm font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <span key={benefitIndex} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                  Start Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Get a free consultation and discover how our technology solutions can boost your efficiency, 
            reduce costs, and drive growth. Contact us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a 
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Call Now: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
