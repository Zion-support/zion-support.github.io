import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Brain, Cloud, Database, Lock, Smartphone, Monitor, Code, BarChart3, Users, Settings, Rocket, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool for blogs, social media, and marketing materials.',
      features: ['GPT-4 Integration', 'Multi-language Support', 'SEO Optimization', 'Brand Voice Training'],
      pricing: '$29/month',
      link: '/micro-saas-services/ai-content-generator',
      category: 'AI Tools'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
      title: 'Analytics Dashboard Pro',
      description: 'Real-time business analytics and reporting dashboard with AI insights.',
      features: ['Real-time Data', 'Custom Reports', 'AI Predictions', 'Team Collaboration'],
      pricing: '$49/month',
      link: '/micro-saas-services/ai-analytics-dashboard',
      category: 'Analytics'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'AI Lead Generation Suite',
      description: 'Automated lead generation and qualification using AI and machine learning.',
      features: ['Lead Scoring', 'Email Automation', 'CRM Integration', 'Performance Tracking'],
      pricing: '$79/month',
      link: '/micro-saas-services/ai-lead-generation',
      category: 'Sales & Marketing'
    },
    {
      icon: <Monitor className="w-8 h-8 text-orange-400" />,
      title: 'AI Chatbot Builder',
      description: 'No-code chatbot creation platform with advanced AI capabilities.',
      features: ['Drag & Drop Builder', 'Multi-channel Support', 'Analytics Dashboard', 'Custom Integrations'],
      pricing: '$39/month',
      link: '/micro-saas-services/ai-chatbot-builder',
      category: 'Customer Service'
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-400" />,
      title: 'AI Email Assistant',
      description: 'Smart email management and automation tool powered by AI.',
      features: ['Smart Scheduling', 'Auto-responses', 'Email Analytics', 'Template Library'],
      pricing: '$19/month',
      link: '/micro-saas-services/ai-email-assistant',
      category: 'Productivity'
    },
    {
      icon: <Rocket className="w-8 h-8 text-pink-400" />,
      title: 'AI Website Builder',
      description: 'AI-powered website creation platform with advanced customization options.',
      features: ['AI Design Suggestions', 'Mobile Optimization', 'SEO Tools', 'E-commerce Ready'],
      pricing: '$59/month',
      link: '/ai-website-builder',
      category: 'Web Development'
    }
  ];

  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration Services',
      description: 'Complete cloud infrastructure migration with zero downtime.',
      features: ['AWS/Azure/GCP Migration', 'Data Security', 'Cost Optimization', '24/7 Support'],
      pricing: 'Starting at $5,000',
      link: '/cloud-migration-services',
      category: 'Cloud Solutions'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your digital assets.',
      features: ['Security Audits', 'Threat Monitoring', 'Incident Response', 'Compliance Management'],
      pricing: 'Starting at $3,000',
      link: '/cybersecurity-solutions',
      category: 'Security'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Database Management',
      description: 'Expert database design, optimization, and maintenance services.',
      features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Monitoring'],
      pricing: 'Starting at $2,500',
      link: '/database-management',
      category: 'Data Management'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['UI/UX Design', 'Native Performance', 'App Store Optimization', 'Maintenance'],
      pricing: 'Starting at $10,000',
      link: '/mobile-app-development',
      category: 'Mobile Development'
    },
    {
      icon: <Code className="w-8 h-8 text-cyan-500" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed for your specific business needs.',
      features: ['Custom Architecture', 'Scalable Solutions', 'API Development', 'Quality Assurance'],
      pricing: 'Starting at $15,000',
      link: '/custom-development',
      category: 'Software Development'
    },
    {
      icon: <Monitor className="w-8 h-8 text-red-500" />,
      title: 'IT Infrastructure Design',
      description: 'Complete IT infrastructure planning and implementation services.',
      features: ['Network Design', 'Server Configuration', 'Security Implementation', 'Documentation'],
      pricing: 'Starting at $8,000',
      link: '/it-infrastructure-design',
      category: 'Infrastructure'
    }
  ];

  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Business Intelligence',
      description: 'Advanced AI analytics and business intelligence solutions.',
      features: ['Predictive Analytics', 'Data Visualization', 'Machine Learning Models', 'Real-time Insights'],
      pricing: 'Starting at $4,000',
      link: '/ai-business-intelligence',
      category: 'AI Analytics'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'AI Customer Support',
      description: 'Intelligent customer service automation with natural language processing.',
      features: ['24/7 Support', 'Multi-language', 'Sentiment Analysis', 'Human Handoff'],
      pricing: 'Starting at $2,500',
      link: '/ai-customer-support',
      category: 'Customer Service'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
      title: 'AI Financial Forecasting',
      description: 'AI-powered financial analysis and forecasting for better decision making.',
      features: ['Risk Assessment', 'Market Analysis', 'Investment Optimization', 'Compliance Reporting'],
      pricing: 'Starting at $6,000',
      link: '/ai-financial-forecasting',
      category: 'Financial AI'
    },
    {
      icon: <Lock className="w-8 h-8 text-red-400" />,
      title: 'AI Cybersecurity Monitor',
      description: 'Advanced AI-powered threat detection and security monitoring.',
      features: ['Real-time Monitoring', 'Anomaly Detection', 'Automated Response', 'Threat Intelligence'],
      pricing: 'Starting at $3,500',
      link: '/ai-cybersecurity-monitor',
      category: 'AI Security'
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-400" />,
      title: 'AI Process Automation',
      description: 'Intelligent automation of business processes using AI and RPA.',
      features: ['Workflow Automation', 'Document Processing', 'Data Extraction', 'Quality Control'],
      pricing: 'Starting at $5,000',
      link: '/ai-automation',
      category: 'Process Automation'
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: 'AI Climate Solutions',
      description: 'AI-powered environmental monitoring and sustainability solutions.',
      features: ['Carbon Footprint Analysis', 'Energy Optimization', 'Environmental Monitoring', 'Sustainability Reporting'],
      pricing: 'Starting at $7,000',
      link: '/ai-climate-solutions-pro',
      category: 'Environmental AI'
    }
  ];

  const categories = [
    { name: 'Micro SAAS', services: microSaasServices, color: 'from-cyan-500 to-blue-600' },
    { name: 'IT Services', services: itServices, color: 'from-purple-500 to-pink-600' },
    { name: 'AI Solutions', services: aiServices, color: 'from-emerald-500 to-teal-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services - Zion Tech Group | AI, IT & Micro SAAS Solutions</title>
        <meta name="description" content="Comprehensive AI services, IT solutions, and micro SAAS tools. Transform your business with cutting-edge technology solutions." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, cloud migration, cybersecurity, mobile development, business intelligence" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to accelerate your digital transformation. 
              From micro SAAS tools to enterprise AI solutions.
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
        </div>
      </section>

      {/* Services by Category */}
      {categories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{category.name}</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {category.name === 'Micro SAAS' && 'Affordable, powerful tools for modern businesses'}
                {category.name === 'IT Services' && 'Professional IT solutions and infrastructure services'}
                {category.name === 'AI Solutions' && 'Cutting-edge artificial intelligence services'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {category.services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="mb-4">{service.icon}</div>
                  <div className="mb-2">
                    <span className="inline-block bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-white">{service.pricing}</div>
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to={service.link}
                    className={`w-full bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center group-hover:scale-105`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can drive your success. Contact us for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <a 
                  href="tel:+13024640950" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;