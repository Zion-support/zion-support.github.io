import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart, Phone, Mail, MapPin, Clock, Star } from 'lucide-react'

export default function ServicesPage() {
  const aiServices = [
    {
      name: 'AI-Powered Business Intelligence',
      description: 'Transform raw data into actionable insights with our advanced AI analytics platform',
      icon: BarChart,
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom ML Models', 'Automated Reporting'],
      price: 'Starting at $2,500/month',
      href: '/ai-business-intelligence-pro'
    },
    {
      name: 'AI Customer Service Automation',
      description: 'Revolutionize customer support with intelligent chatbots and automated workflows',
      icon: MessageCircle,
      features: ['24/7 AI Chatbots', 'Sentiment Analysis', 'Multi-language Support', 'CRM Integration'],
      price: 'Starting at $1,200/month',
      href: '/ai-customer-support-chatbot'
    },
    {
      name: 'AI Content Generation Suite',
      description: 'Create high-quality content at scale with our AI-powered content generation tools',
      icon: FileText,
      features: ['Blog Posts & Articles', 'Social Media Content', 'Email Campaigns', 'SEO Optimization'],
      price: 'Starting at $800/month',
      href: '/ai-content-generation-pro'
    },
    {
      name: 'AI Cybersecurity Monitor',
      description: 'Advanced threat detection and prevention with AI-powered security monitoring',
      icon: Shield,
      features: ['Real-time Threat Detection', 'Automated Response', 'Compliance Monitoring', 'Security Analytics'],
      price: 'Starting at $3,000/month',
      href: '/ai-cybersecurity-monitor-pro'
    },
    {
      name: 'AI Document Processing',
      description: 'Intelligent document analysis and processing for improved efficiency',
      icon: FileText,
      features: ['OCR & Text Extraction', 'Document Classification', 'Data Validation', 'Workflow Automation'],
      price: 'Starting at $1,500/month',
      href: '/ai-document-intelligence'
    },
    {
      name: 'AI Predictive Analytics',
      description: 'Forecast business trends and make data-driven decisions with AI',
      icon: TrendingUp,
      features: ['Sales Forecasting', 'Demand Planning', 'Risk Assessment', 'Performance Optimization'],
      price: 'Starting at $2,000/month',
      href: '/ai-predictive-analytics'
    }
  ];

  const itServices = [
    {
      name: 'Cloud Infrastructure & Migration',
      description: 'Seamless cloud migration and scalable infrastructure solutions',
      icon: Cloud,
      features: ['AWS/Azure/GCP Migration', 'Auto-scaling', 'Disaster Recovery', 'Cost Optimization'],
      price: 'Starting at $5,000/project',
      href: '/cloud-infrastructure'
    },
    {
      name: 'DevOps & CI/CD Automation',
      description: 'Streamline development workflows with automated deployment pipelines',
      icon: Settings,
      features: ['CI/CD Pipelines', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring & Alerting'],
      price: 'Starting at $3,500/month',
      href: '/devops-cicd'
    },
    {
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets',
      icon: Shield,
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Incident Response'],
      price: 'Starting at $4,000/month',
      href: '/cybersecurity-solutions'
    },
    {
      name: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business needs',
      icon: Code,
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Database Design'],
      price: 'Starting at $8,000/project',
      href: '/custom-software'
    },
    {
      name: 'Data Analytics & Business Intelligence',
      description: 'Transform your data into actionable business insights',
      icon: BarChart,
      features: ['Data Warehousing', 'ETL Processes', 'Custom Dashboards', 'Advanced Analytics'],
      price: 'Starting at $2,500/month',
      href: '/data-analytics-bi'
    },
    {
      name: 'IT Support & Maintenance',
      description: '24/7 technical support and proactive system maintenance',
      icon: Monitor,
      features: ['24/7 Support', 'Proactive Monitoring', 'System Updates', 'Performance Optimization'],
      price: 'Starting at $1,500/month',
      href: '/it-support'
    }
  ];

  const microSaasServices = [
    {
      name: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI-powered insights',
      icon: BarChart,
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Data Visualization'],
      price: '$299/month',
      href: '/zion-analytics-pro'
    },
    {
      name: 'Zion Chat AI',
      description: 'Intelligent customer support chatbot with natural language processing',
      icon: MessageCircle,
      features: ['Multi-language Support', 'CRM Integration', 'Sentiment Analysis', 'Live Chat Handoff'],
      price: '$199/month',
      href: '/zion-chat-ai'
    },
    {
      name: 'Zion Security Shield',
      description: 'AI-powered cybersecurity monitoring and threat detection',
      icon: Shield,
      features: ['Real-time Monitoring', 'Threat Detection', 'Automated Response', 'Compliance Reports'],
      price: '$399/month',
      href: '/zion-security-shield'
    },
    {
      name: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform',
      icon: FileText,
      features: ['Content Generation', 'SEO Optimization', 'Multi-platform Publishing', 'Brand Voice Training'],
      price: '$149/month',
      href: '/zion-content-studio'
    },
    {
      name: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management system',
      icon: Users,
      features: ['Lead Scoring', 'Automated Follow-ups', 'Sales Forecasting', 'Customer Insights'],
      price: '$249/month',
      href: '/zion-crm-intelligence'
    },
    {
      name: 'Zion Workflow Automation',
      description: 'Streamline business processes with intelligent automation',
      icon: Workflow,
      features: ['Process Automation', 'API Integrations', 'Custom Workflows', 'Performance Analytics'],
      price: '$179/month',
      href: '/zion-workflow-automation'
    }
  ];

  const emergingTech = [
    {
      name: '5G Implementation Services',
      description: 'Next-generation connectivity solutions for ultra-fast data transmission',
      icon: Wifi,
      features: ['5G Network Design', 'Edge Computing', 'IoT Integration', 'Performance Optimization'],
      price: 'Starting at $15,000/project',
      href: '/5g-implementation'
    },
    {
      name: 'AI 3D Generation',
      description: 'Create stunning 3D content with AI-powered generation tools',
      icon: Box,
      features: ['3D Model Generation', 'Texture Creation', 'Animation Tools', 'VR/AR Integration'],
      price: 'Starting at $2,500/month',
      href: '/ai-3d-generation'
    },
    {
      name: 'Quantum Computing Solutions',
      description: 'Harness the power of quantum computing for complex problem solving',
      icon: Cpu,
      features: ['Quantum Algorithm Development', 'Optimization Problems', 'Cryptography', 'Research & Development'],
      price: 'Starting at $25,000/project',
      href: '/quantum-computing'
    },
    {
      name: 'AI Autonomous Systems',
      description: 'Develop self-operating systems with advanced AI capabilities',
      icon: Cpu,
      features: ['Autonomous Vehicles', 'Robotic Process Automation', 'Smart Manufacturing', 'Predictive Maintenance'],
      price: 'Starting at $50,000/project',
      href: '/ai-autonomous-systems'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Professional AI & IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services by Zion Tech Group. Transform your business with our expert solutions including AI automation, cloud infrastructure, cybersecurity, and micro SAAS platforms." />
        <meta name="keywords" content="AI services, IT services, cloud computing, cybersecurity, micro SAAS, business intelligence, automation, digital transformation" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional AI & IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with our comprehensive suite of AI and IT solutions. 
            From cutting-edge artificial intelligence to robust infrastructure, we deliver results that drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:+13024640950" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>

        {/* AI Services Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <Brain className="w-10 h-10 text-cyan-400 mr-3" />
              AI Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                <Link
                  to={service.href}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* IT Services Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <Cloud className="w-10 h-10 text-purple-400 mr-3" />
              IT Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Complete technology infrastructure solutions to modernize and secure your business operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-purple-400 font-semibold mb-4">{service.price}</div>
                <Link
                  to={service.href}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Micro SAAS Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <Cpu className="w-10 h-10 text-green-400 mr-3" />
              Micro SAAS Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Ready-to-use business tools with AI and automation capabilities for immediate implementation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-green-400 font-semibold mb-4">{service.price}</div>
                <Link
                  to={service.href}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Emerging Technologies Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <Zap className="w-10 h-10 text-orange-400 mr-3" />
              Emerging Technologies
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology solutions that position your business at the forefront of innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergingTech.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-orange-400/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-orange-400 font-semibold mb-4">{service.price}</div>
                <Link
                  to={service.href}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join 500+ companies that have already transformed their operations with our AI and IT solutions. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <p>✓ Free consultation • ✓ No obligation • ✓ 30-day results guarantee</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}